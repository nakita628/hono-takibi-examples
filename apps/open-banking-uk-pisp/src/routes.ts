import { createRoute, z } from '@hono/zod-openapi'

const OBInternalLocalInstrument1CodeSchema = z
  .string()
  .openapi({
    description:
      'User community specific instrument.\nUsage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level. For a full list of values refer to `OBInternalLocalInstrument1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
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
  .openapi('OBInternalLocalInstrument1Code')

const OBActiveCurrencyAndAmountSimpleTypeSchema = z
  .string()
  .regex(/^\d{1,13}$|^\d{1,13}\.\d{1,5}$/)
  .openapi({
    description:
      'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
  })
  .openapi('OBActiveCurrencyAndAmountSimpleType')

const ActiveOrHistoricCurrencyCodeSchema = z
  .string()
  .regex(/^[A-Z]{3,3}$/)
  .openapi({
    description:
      'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
  })
  .openapi('ActiveOrHistoricCurrencyCode')

const OBInternalAccountIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list. For a full list of values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    'x-namespaced-enum': [
      'UK.OBIE.BBAN',
      'UK.OBIE.IBAN',
      'UK.OBIE.PAN',
      'UK.OBIE.Paym',
      'UK.OBIE.SortCodeAccountNumber',
      'UK.OBIE.Wallet',
    ],
  })
  .openapi('OBInternalAccountIdentification4Code')

const Identification_0Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
  })
  .openapi('Identification_0')

const SecondaryIdentificationSchema = z
  .string()
  .min(1)
  .max(34)
  .openapi({
    description:
      'This is secondary identification of the account, as assigned by the account servicing institution. \nThis can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
  })
  .openapi('SecondaryIdentification')

const ExternalProxyAccountType1CodeSchema = z
  .enum([
    'TELE',
    'EMAL',
    'DNAM',
    'CINC',
    'COTX',
    'COID',
    'CUST',
    'DRLC',
    'EIDN',
    'EWAL',
    'PVTX',
    'LEIC',
    'MBNO',
    'NIDN',
    'CCPT',
    'SHID',
    'SOSE',
    'TOKN',
    'UBIL',
    'VIPN',
    'BIID',
  ])
  .openapi({
    description:
      'Specifies the external proxy account type code, as published in the proxy account type external code set.<br /> For a full list of values see `ExternalProxyAccountType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalProxyAccountType1Code')

const OBProxy1Schema = z
  .object({
    Identification: z
      .string()
      .min(1)
      .max(2048)
      .openapi({
        description:
          'Identification used to indicate the account identification under another specified name.',
      }),
    Code: ExternalProxyAccountType1CodeSchema,
    Type: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({ description: 'Type of the proxy identification.' }),
  })
  .openapi({
    description: 'Specifies an alternate assumed name for the identification of the account.',
    required: ['Identification', 'Code'],
  })
  .openapi('OBProxy1')

const OBInternalFinancialInstitutionIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list.',
    'x-namespaced-enum': ['UK.OBIE.BICFI'],
  })
  .openapi('OBInternalFinancialInstitutionIdentification4Code')

const Identification_1Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Unique identification, as assigned by the creditor, to unambiguously identify the mandate.',
  })
  .openapi('Identification_1')

const NameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      'Name by which an agent is known and which is usually used to identify that agent.',
  })
  .openapi('Name')

const LEISchema = z
  .string()
  .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
  .min(1)
  .max(20)
  .openapi({
    description:
      'Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".',
    example: 'IZ9Q00LZEVUKWCQY6X15',
  })
  .openapi('LEI')

const OBAddressType2CodeSchema = z
  .enum(['BIZZ', 'DLVY', 'MLTO', 'PBOX', 'ADDR', 'HOME', 'CORR', 'STAT'])
  .openapi({
    description:
      'Identifies the nature of the postal address. For a full set of codes see `OBAddressType2Code` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).',
  })
  .openapi('OBAddressType2Code')

const DepartmentSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Identification of a division of a large organisation or building.' })
  .openapi('Department')

const SubDepartmentSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Identification of a sub-division of a large organisation or building.' })
  .openapi('SubDepartment')

const StreetNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({ description: 'Name of a street or thoroughfare.' })
  .openapi('StreetName')

const BuildingNumberSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({ description: 'Number that identifies the position of a building on a street.' })
  .openapi('BuildingNumber')

const BuildingNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({ description: 'Name of a referenced building.' })
  .openapi('BuildingName')

const FloorSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Number that identifies the level within a building' })
  .openapi('Floor')

const UnitNumberSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({ description: 'Number that identifies the unit of a specific address .' })
  .openapi('UnitNumber')

const RoomSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({
    description: 'Information that locates and identifies a room to form part of an address',
  })
  .openapi('Room')

const PostBoxSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description:
      'Information that locates and identifies a box in a post office assigned to a person or organization, where letters for them are kept until called for.',
  })
  .openapi('PostBox')

const TownNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description: 'Name of a built-up area, with defined boundaries, and a local government.',
  })
  .openapi('TownName')

const DistrictNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      'Number that of the regional area, known as a district, which forms part of an address',
  })
  .openapi('DistrictName')

const CareOfSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      "The 'care of' address is used whenever sending mail to a person or organisation who does not actually live or work at the address. They will receive the mail for the individual.",
  })
  .openapi('CareOf')

const PostCodeSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description:
      'Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.',
  })
  .openapi('PostCode')

const CountrySubDivisionSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Identifies a subdivision of a country such as state, region, county.' })
  .openapi('CountrySubDivision')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2,2}$/)
  .openapi({ description: 'Nation with its own government.' })
  .openapi('CountryCode')

const OBPostalAddress7Schema = z
  .strictObject({
    AddressType: OBAddressType2CodeSchema.exactOptional(),
    Department: DepartmentSchema.exactOptional(),
    SubDepartment: SubDepartmentSchema.exactOptional(),
    StreetName: StreetNameSchema.exactOptional(),
    BuildingNumber: BuildingNumberSchema.exactOptional(),
    BuildingName: BuildingNameSchema.exactOptional(),
    Floor: FloorSchema.exactOptional(),
    UnitNumber: UnitNumberSchema.exactOptional(),
    Room: RoomSchema.exactOptional(),
    PostBox: PostBoxSchema.exactOptional(),
    TownLocationName: TownNameSchema.exactOptional(),
    DistrictName: DistrictNameSchema.exactOptional(),
    CareOf: CareOfSchema.exactOptional(),
    PostCode: PostCodeSchema.exactOptional(),
    TownName: TownNameSchema.exactOptional(),
    CountrySubDivision: CountrySubDivisionSchema.exactOptional(),
    Country: CountryCodeSchema.exactOptional(),
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
  })
  .openapi({
    description:
      'Information that locates and identifies a specific address, as defined by postal services.',
    required: [],
  })
  .openapi('OBPostalAddress7')

const OBUltimateCreditor1Schema = z
  .object({
    Name: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Name by which a party is known and which is usually used to identify that party.',
      }),
    Identification: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'Identification assigned by an institution.' }),
    LEI: LEISchema.exactOptional(),
    SchemeName: OBInternalAccountIdentification4CodeSchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({ description: 'Ultimate party to which an amount of money is due.', required: [] })
  .openapi('OBUltimateCreditor1')

const OBUltimateDebtor1Schema = z
  .object({
    Name: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Name by which a party is known and which is usually used to identify that party.',
      }),
    Identification: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'Identification assigned by an institution.' }),
    LEI: LEISchema.exactOptional(),
    SchemeName: OBInternalAccountIdentification4CodeSchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({
    description: 'Ultimate party that owes an amount of money to the (ultimate) creditor.',
    required: [],
  })
  .openapi('OBUltimateDebtor1')

const OBRegulatoryAuthority2Schema = z
  .object({
    Name: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description: 'Name of the entity requiring the regulatory reporting information.',
      }),
    CountryCode: CountryCodeSchema.exactOptional(),
  })
  .openapi({ description: 'Entity requiring the regulatory reporting information. ', required: [] })
  .openapi('OBRegulatoryAuthority2')

const ISODateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ISODateTime')

const OBActiveOrHistoricCurrencyAndAmountSchema = z
  .strictObject({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCodeSchema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Amount of money associated with the charge type.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount')

const OBStructuredRegulatoryReporting3Schema = z
  .object({
    Type: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'Specifies the type of the information supplied in the regulatory reporting details',
      }),
    Date: ISODateTimeSchema.exactOptional(),
    Country: CountryCodeSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmountSchema.exactOptional(),
    Information: z
      .array(z.string().min(1).max(35))
      .exactOptional()
      .openapi({
        description:
          'Additional details that cater for specific domestic regulatory requirements. ',
      }),
  })
  .openapi({
    description: 'Set of elements used to provide details on the regulatory reporting information.',
    required: [],
  })
  .openapi('OBStructuredRegulatoryReporting3')

const OBRegulatoryReporting1Schema = z
  .object({
    DebitCreditReportingIndicator: z
      .enum(['CRED', 'DEBT', 'BOTH'])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether the regulatory reporting information applies to the debit side, to the credit side or to both debit and credit sides of the transaction.  For a full list of values refer to `OBExternalRegulatoryReportingType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
      }),
    Authority: OBRegulatoryAuthority2Schema.exactOptional(),
    Details: z.array(OBStructuredRegulatoryReporting3Schema).exactOptional(),
  })
  .openapi({
    description: 'Information needed due to regulatory and statutory requirements',
    required: [],
  })
  .openapi('OBRegulatoryReporting1')

const ExternalDocumentType1CodeSchema = z
  .enum([
    'CINV',
    'CNFA',
    'CONT',
    'CREN',
    'DEBN',
    'DISP',
    'DNFA',
    'HIRI',
    'INVS',
    'MSIN',
    'PROF',
    'PUOR',
    'QUOT',
    'SBIN',
    'SPRR',
    'TISH',
  ])
  .openapi({
    description:
      'Specifies the document type as published in an external document type code list. For more information see `ExternalDocumentType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalDocumentType1Code')

const OBReferredDocumentInformationSchema = z
  .object({
    Code: ExternalDocumentType1CodeSchema.exactOptional(),
    Issuer: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({ description: 'Identification of the issuer of the reference document type.' }),
    Number: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identification of the type specified for the referred document line.',
      }),
    RelatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date associated with the referred document line.' }),
    LineDetails: z
      .array(z.string().min(1).max(2048))
      .exactOptional()
      .openapi({
        description: 'Set of elements used to provide the content of the referred document line.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBReferredDocumentInformation')

const ExternalCreditorReferenceType1CodeSchema = z
  .enum(['DISP', 'FXDR', 'PUOR', 'RPIN', 'RADM', 'SCOR'])
  .openapi({
    description:
      'Specifies the type of creditor reference as published in an external creditor reference type code set. For more information see `ExternalCreditorReferenceType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalCreditorReferenceType1Code')

const Identification_3Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification of the organisation issuing the invoice, when it is different from the creditor or ultimate creditor',
    example: '80200112344562',
  })
  .openapi('Identification_3')

const Identification_4Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification of the party to whom an invoice is issued, when it is different from the debtor or ultimate debtor.',
    example: '80200112344562',
  })
  .openapi('Identification_4')

const OBRemittanceInformationStructuredSchema = z
  .object({
    ReferredDocumentInformation: z.array(OBReferredDocumentInformationSchema).exactOptional(),
    ReferredDocumentAmount: OBActiveCurrencyAndAmountSimpleTypeSchema.exactOptional(),
    CreditorReferenceInformation: z
      .object({
        Code: ExternalCreditorReferenceType1CodeSchema.exactOptional(),
        Issuer: z
          .string()
          .min(1)
          .max(35)
          .exactOptional()
          .openapi({ description: 'Entity that assigns the identification.' }),
        Reference: z
          .string()
          .min(1)
          .max(35)
          .exactOptional()
          .openapi({
            description:
              'Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Reference information provided by the creditor to allow the identification of the underlying documents.',
        required: [],
      }),
    Invoicer: Identification_3Schema.exactOptional(),
    Invoicee: Identification_4Schema.exactOptional(),
    TaxRemittance: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Provides remittance information about a payment made for tax-related purposes.',
      }),
    AdditionalRemittanceInformation: z
      .array(z.string().min(1).max(140))
      .max(3)
      .exactOptional()
      .openapi({
        description:
          'Additional information, in free text form, to complement the structured remittance information.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBRemittanceInformationStructured')

const OBRemittanceInformation2Schema = z
  .object({
    Structured: z.array(OBRemittanceInformationStructuredSchema).exactOptional(),
    Unstructured: z
      .array(z.string().min(1).max(140))
      .exactOptional()
      .openapi({
        description:
          "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
      }),
  })
  .openapi({
    description:
      "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system",
    required: [],
  })
  .openapi('OBRemittanceInformation2')

const OBSupplementaryData1Schema = z
  .looseObject({})
  .openapi({
    description:
      'Additional information that can not be captured in the structured fields and/or any other specific block.',
  })
  .openapi('OBSupplementaryData1')

const ExternalPurpose1CodeSchema = z
  .enum([
    'BKDF',
    'BKFE',
    'BKFM',
    'BKIP',
    'BKPP',
    'CBLK',
    'CDCB',
    'CDCD',
    'CDCS',
    'CDDP',
    'CDOC',
    'CDQC',
    'ETUP',
    'FCOL',
    'MTUP',
    'ACCT',
    'CASH',
    'COLL',
    'CSDB',
    'DEPT',
    'INTC',
    'INTP',
    'LIMA',
    'NETT',
    'BFWD',
    'CCIR',
    'CCPC',
    'CCPM',
    'CCSM',
    'CRDS',
    'CRPR',
    'CRSP',
    'CRTL',
    'EQPT',
    'EQUS',
    'EXPT',
    'EXTD',
    'FIXI',
    'FWBC',
    'FWCC',
    'FWSB',
    'FWSC',
    'MARG',
    'MBSB',
    'MBSC',
    'MGCC',
    'MGSC',
    'OCCC',
    'OPBC',
    'OPCC',
    'OPSB',
    'OPSC',
    'OPTN',
    'OTCD',
    'REPO',
    'RPBC',
    'RPCC',
    'RPSB',
    'RPSC',
    'RVPO',
    'SBSC',
    'SCIE',
    'SCIR',
    'SCRP',
    'SHBC',
    'SHCC',
    'SHSL',
    'SLEB',
    'SLOA',
    'SWBC',
    'SWCC',
    'SWPT',
    'SWSB',
    'SWSC',
    'TBAS',
    'TBBC',
    'TBCC',
    'TRCP',
    'AGRT',
    'AREN',
    'BEXP',
    'BOCE',
    'COMC',
    'CPYR',
    'GDDS',
    'GDSV',
    'GSCB',
    'LICF',
    'MP2B',
    'POPE',
    'ROYA',
    'SCVE',
    'SERV',
    'SUBS',
    'SUPP',
    'TRAD',
    'CHAR',
    'COMT',
    'MP2P',
    'ECPG',
    'ECPR',
    'ECPU',
    'EPAY',
    'CLPR',
    'COMP',
    'DBTC',
    'GOVI',
    'HLRP',
    'HLST',
    'INPC',
    'INPR',
    'INSC',
    'INSU',
    'INTE',
    'LBRI',
    'LIFI',
    'LOAN',
    'LOAR',
    'PENO',
    'PPTI',
    'RELG',
    'RINP',
    'TRFD',
    'FORW',
    'FXNT',
    'ADMG',
    'ADVA',
    'BCDM',
    'BCFG',
    'BLDM',
    'BNET',
    'CBFF',
    'CBFR',
    'CCRD',
    'CDBL',
    'CFEE',
    'CGDD',
    'CORT',
    'COST',
    'CPKC',
    'DCRD',
    'DSMT',
    'DVPM',
    'EDUC',
    'FACT',
    'FAND',
    'FCPM',
    'FEES',
    'GIFT',
    'GOVT',
    'ICCP',
    'IDCP',
    'IHRP',
    'INSM',
    'IVPT',
    'MCDM',
    'MCFG',
    'MSVC',
    'NOWS',
    'OCDM',
    'OCFG',
    'OFEE',
    'OTHR',
    'PADD',
    'PTSP',
    'RCKE',
    'RCPT',
    'REBT',
    'REFU',
    'RENT',
    'REOD',
    'RIMB',
    'RPNT',
    'RRBN',
    'RRCT',
    'RRTP',
    'RVPM',
    'SLPI',
    'SPLT',
    'STDY',
    'TBAN',
    'TBIL',
    'TCSC',
    'TELI',
    'TMPG',
    'TPRI',
    'TPRP',
    'TRNC',
    'TRVC',
    'WEBI',
    'IPAY',
    'IPCA',
    'IPDO',
    'IPEA',
    'IPEC',
    'IPEW',
    'IPPS',
    'IPRT',
    'IPU2',
    'IPUW',
    'ANNI',
    'CAFI',
    'CFDI',
    'CMDT',
    'DERI',
    'DIVD',
    'FREX',
    'HEDG',
    'INVS',
    'PRME',
    'SAVG',
    'SECU',
    'SEPI',
    'TREA',
    'UNIT',
    'FNET',
    'FUTR',
    'ANTS',
    'CVCF',
    'DMEQ',
    'DNTS',
    'HLTC',
    'HLTI',
    'HSPC',
    'ICRF',
    'LTCF',
    'MAFC',
    'MARF',
    'MDCS',
    'VIEW',
    'CDEP',
    'SWFP',
    'SWPP',
    'SWRS',
    'SWUF',
    'ADCS',
    'AEMP',
    'ALLW',
    'ALMY',
    'BBSC',
    'BECH',
    'BENE',
    'BONU',
    'CCHD',
    'COMM',
    'CSLP',
    'GFRP',
    'GVEA',
    'GVEB',
    'GVEC',
    'GVED',
    'GWLT',
    'HREC',
    'PAYR',
    'PEFC',
    'PENS',
    'PRCP',
    'RHBS',
    'SALA',
    'SPSP',
    'SSBE',
    'LBIN',
    'LCOL',
    'LFEE',
    'LMEQ',
    'LMFI',
    'LMRK',
    'LREB',
    'LREV',
    'LSFL',
    'ESTX',
    'FWLV',
    'GSTX',
    'HSTX',
    'INTX',
    'NITX',
    'PTXP',
    'RDTX',
    'TAXS',
    'VATX',
    'WHLD',
    'TAXR',
    'B112',
    'BR12',
    'TLRF',
    'TLRR',
    'AIRB',
    'BUSB',
    'FERB',
    'RLWY',
    'TRPT',
    'CBTV',
    'ELEC',
    'ENRG',
    'GASB',
    'NWCH',
    'NWCM',
    'OTLC',
    'PHON',
    'UBIL',
    'WTER',
    'BOND',
    'CABD',
    'CAEQ',
    'CBCR',
    'DBCR',
    'DICL',
    'EQTS',
    'FLCR',
    'EFTC',
    'EFTD',
    'MOMA',
    'RAPI',
    'GAMB',
    'LOTT',
    'AMEX',
    'SASW',
    'AUCO',
    'PCOM',
    'PDEP',
    'PLDS',
    'PLRF',
    'GAFA',
    'GAHO',
    'CPEN',
    'DEPD',
    'RETL',
    'DEBT',
    'CRYP',
  ])
  .openapi({
    description:
      'This is a partial list, For a full list see `ExternalPurpose1Code` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalPurpose1Code')

const ExternalCategoryPurpose1CodeSchema = z
  .enum([
    'BONU',
    'CASH',
    'CBLK',
    'CCRD',
    'CGWV',
    'CIPC',
    'CONC',
    'CORT',
    'DCRD',
    'DIVI',
    'DVPM',
    'EPAY',
    'FCDT',
    'FCIN',
    'FCOL',
    'GOVT',
    'GP2P',
    'HEDG',
    'ICCP',
    'IDCP',
    'INTC',
    'INTE',
    'LBOX',
    'LOAN',
    'MP2B',
    'MP2P',
    'OTHR',
    'PENS',
    'RPRE',
    'RRCT',
    'RVPM',
    'SALA',
    'SECU',
    'SSBE',
    'SUPP',
    'SWEP',
    'TAXS',
    'TOPG',
    'TRAD',
    'TREA',
    'VATX',
    'VOST',
    'WHLD',
    'ZABA',
  ])
  .openapi({
    description:
      'Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk. \n For all enum values see `ExternalCategoryPurpose1Code` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalCategoryPurpose1Code')

const OBInternalExtendedAccountType1CodeSchema = z
  .enum([
    'Business',
    'BusinessSavingsAccount',
    'Charity',
    'Collection',
    'Corporate',
    'Ewallet',
    'Government',
    'Investment',
    'ISA',
    'JointPersonal',
    'Pension',
    'Personal',
    'PersonalSavingsAccount',
    'Premier',
    'Wealth',
  ])
  .openapi({ description: 'Specifies the extended type of account.' })
  .openapi('OBInternalExtendedAccountType1Code')

const OBRisk1Schema = z
  .strictObject({
    PaymentContextCode: z
      .enum([
        'BillingGoodsAndServicesInAdvance',
        'BillingGoodsAndServicesInArrears',
        'EcommerceMerchantInitiatedPayment',
        'FaceToFacePointOfSale',
        'TransferToSelf',
        'TransferToThirdParty',
        'BillPayment',
        'EcommerceGoods',
        'EcommerceServices',
        'PartyToParty',
        'PispPayee',
        'Other',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the payment context, `OBInternalPaymentContext1Code`<br>\nThe following values are deprecated and <u>**must not**</u> be used in a new consent or payment. They may optionally be returned for a historical payment/consent migrated to v4:<br>\n* BillPayment - @deprecated\n* EcommerceGoods - @deprecated\n* EcommerceServices - @deprecated\n* PartyToParty - @deprecated\n* PispPayee - @deprecated\n* Other - @deprecated\n',
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
    ContractPresentIndicator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if Payee has a contractual relationship with the PISP.' }),
    BeneficiaryPrepopulatedIndicator: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if PISP has immutably prepopulated payment details in for the PSU.',
      }),
    PaymentPurposeCode: ExternalPurpose1CodeSchema.exactOptional(),
    CategoryPurposeCode: ExternalCategoryPurpose1CodeSchema.exactOptional(),
    BeneficiaryAccountType: OBInternalExtendedAccountType1CodeSchema.exactOptional(),
    DeliveryAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({
    description:
      'The Risk section is sent by the initiating party to the ASPSP.\nIt is used to specify additional details for risk scoring for Payments.',
    required: [],
  })
  .openapi('OBRisk1')

type OBWriteDomestic2Type = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

const OBSCASupportData1Schema = z
  .object({
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
          'This field allows a PISP to request specific SCA Exemption for a Payment Initiation. For a full list of values refer to `OBInternalSCAExemptionType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
      }),
    AppliedAuthenticationApproach: z
      .enum(['CA', 'SCA'])
      .exactOptional()
      .openapi({
        description:
          'Specifies a character string with a maximum length of 40 characters.\nUsage: This field indicates whether the PSU was subject to SCA performed by the TPP\nFor a full list of values refer to `OBInternalAppliedAuthenticationApproach1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
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
  })
  .openapi({
    description: 'Supporting Data provided by TPP, when requesting SCA Exemption.',
    required: [],
  })
  .openapi('OBSCASupportData1')

type OBWriteDomesticConsent4Type = {
  Data: {
    ReadRefundAccount?: 'No' | 'Yes'
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: {
      AuthorisationType: 'Any' | 'Single' | 'Multiple'
      CompletionDateTime?: string
    }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

const OBInternalConsentStatus2CodeSchema = z
  .enum(['AWAU', 'RJCT', 'AUTH', 'COND'])
  .openapi({
    description:
      'Specifies the status of consent resource in code form. For a full list of values refer to `OBInternalConsentStatus2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBInternalConsentStatus2Code')

const OBStatusReasonSchema = z
  .object({
    StatusReasonCode: z
      .string()
      .min(1)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Specifies the status reason in a code form. \nFor a full list of values refer to `OBExternalStatusReason1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
        example: 'ERIN',
      }),
    StatusReasonDescription: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'Description supporting the StatusReasonCode.' }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Path is optional but relevant when the status reason refers to an object/field and hence conditional to provide JSON path.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBStatusReason')

const OBInternalChargeBearerType1CodeSchema = z
  .enum(['BorneByCreditor', 'BorneByDebtor', 'FollowingServiceLevel', 'Shared'])
  .openapi({
    description:
      'Specifies which party/parties will bear the charges associated with the processing of the payment transaction. For a full list of values refer to `OBInternalChargeBearerType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBInternalChargeBearerType1Code')

const OBInternalPaymentChargeType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Charge type, in a coded form. For a full list of values refer to `OBInternalPaymentChargeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    'x-namespaced-enum': ['UK.OBIE.CHAPSOut'],
  })
  .openapi('OBInternalPaymentChargeType1Code')

const OBCashAccountDebtor4Schema = z
  .object({
    SchemeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '^ Name of the identification scheme, in a coded form as published in an external list. | Namespaced Enumeration OBInternalAccountIdentification4Code',
      }),
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
    SecondaryIdentification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) | Max34Text',
      }),
    LEI: LEISchema.exactOptional(),
  })
  .openapi({
    description:
      '^ Only included in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.',
    required: [],
  })
  .openapi('OBCashAccountDebtor4')

const LinksSchema = z
  .strictObject({
    Self: z.url(),
    First: z.url().exactOptional(),
    Prev: z.url().exactOptional(),
    Next: z.url().exactOptional(),
    Last: z.url().exactOptional(),
  })
  .openapi({ description: 'Links relevant to the payload', required: ['Self'] })
  .openapi('Links')

const MetaSchema = z
  .strictObject({
    TotalPages: z.int32().exactOptional(),
    FirstAvailableDateTime: ISODateTimeSchema.exactOptional(),
    LastAvailableDateTime: ISODateTimeSchema.exactOptional(),
  })
  .openapi({ title: 'MetaData', description: 'Meta Data relevant to the payload', required: [] })
  .openapi('Meta')

type OBWriteDomesticConsentResponse5Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus2CodeSchema>
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    StatusUpdateDateTime: string
    ReadRefundAccount?: 'No' | 'Yes'
    CutOffDateTime?: string
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: {
      AuthorisationType: 'Any' | 'Single' | 'Multiple'
      CompletionDateTime?: string
    }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const ExternalPaymentTransactionStatus3CodeSchema = z
  .enum([
    'RCVD',
    'PDNG',
    'ACTC',
    'PATC',
    'ACCP',
    'ACFC',
    'ACSP',
    'ACWC',
    'ACSC',
    'BLCK',
    'ACCC',
    'ACWP',
    'RJCT',
  ])
  .openapi({
    description:
      'Specifies the status of the payment information group.\n\nFor a full list of values refer to `ExternalPaymentTransactionStatus3Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)\n',
  })
  .openapi('ExternalPaymentTransactionStatus3Code')

const OBDomesticRefundAccount1Schema = z
  .strictObject({
    Account: z
      .strictObject({
        SchemeName: OBInternalAccountIdentification4CodeSchema,
        Identification: Identification_0Schema,
        Name: z
          .string()
          .min(1)
          .max(350)
          .openapi({
            description:
              'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
          }),
        SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
      })
      .openapi({
        required: ['SchemeName', 'Identification', 'Name'],
        description: 'Provides the details to identify an account.',
      }),
  })
  .openapi({
    description:
      'Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.',
    required: ['Account'],
  })
  .openapi('OBDomesticRefundAccount1')

type OBWriteDomesticResponse5Type = {
  Data: {
    DomesticPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus3CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Refund?: z.infer<typeof OBDomesticRefundAccount1Schema>
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteDomesticScheduled2Type = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteDomesticScheduledConsent4Type = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: {
      AuthorisationType: 'Any' | 'Single' | 'Multiple'
      CompletionDateTime?: string
    }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteDomesticScheduledConsentResponse5Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus2CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    CutOffDateTime?: string
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: {
      AuthorisationType: 'Any' | 'Single' | 'Multiple'
      CompletionDateTime?: string
    }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const ExternalPaymentTransactionStatus2CodeSchema = z
  .enum([
    'CANC',
    'RCVD',
    'PDNG',
    'ACTC',
    'PATC',
    'ACCP',
    'ACFC',
    'ACSP',
    'ACWC',
    'ACSC',
    'BLCK',
    'ACCC',
    'ACWP',
    'RJCT',
  ])
  .openapi({
    description:
      'Specifies the status of the payment order resource. \n\nFor a full list of values see `ExternalPaymentTransactionStatus2Code` in *OB_Internal_CodeSet* \n[here](https://github.com/OpenBankingUK/External_Internal_CodeSets)\n',
  })
  .openapi('ExternalPaymentTransactionStatus2Code')

type OBWriteDomesticScheduledResponse5Type = {
  Data: {
    DomesticScheduledPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus2CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Refund?: z.infer<typeof OBDomesticRefundAccount1Schema>
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorPostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const NumberOfPaymentsSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
  })
  .openapi('NumberOfPayments')

const OBExternalMandateClassification1CodeSchema = z
  .enum(['FIXE', 'USGB', 'VARI'])
  .openapi('OBExternalMandateClassification1Code')

const OBFrequency6CodeSchema = z
  .enum([
    'ADHO',
    'YEAR',
    'DAIL',
    'FRTN',
    'INDA',
    'MNTH',
    'QURT',
    'MIAN',
    'WEEK',
    'WODL',
    'FOWK',
    'TWMH',
    'FOMH',
    'FIMH',
    'ALMH',
    'NONE',
    'LWMH',
    'LXMH',
    'TWYR',
  ])
  .openapi({
    description:
      'For a full list of values see `OBFrequency6Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBFrequency6Code')

const Frequency_1Schema = z
  .string()
  .regex(
    /^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
  )
  .openapi({
    description:
      'Individual Definitions:\nNotKnown - Not Known\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlDay - An interval specified in number of calendar days (02 to 31)\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)\nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.\nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.\nIndividual Patterns:\nNotKnown (ScheduleCode)\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlDay:NoOfDay (ScheduleCode + NoOfDay)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nNotKnown\nEvryDay\nEvryWorkgDay\nIntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
  })
  .openapi('Frequency_1')

const PointInTimeSchema = z
  .string()
  .max(2)
  .openapi({
    description:
      'Exact2NumericText - Further information on the exact point in time the event should take place. Specifies a frequency in terms of an exact point in time or moment within a specified frequency type. Note: should not be used alongside `CountPerPeriod`.',
    example: '00',
  })
  .openapi('PointInTime')

const OBFrequency6Schema = z
  .object({
    Type: z.xor([OBFrequency6CodeSchema, Frequency_1Schema]),
    CountPerPeriod: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of instructions to be created and processed during the specified period .Specifies a frequency in terms of a count per period within a specified frequency type. Note: should not be used alongside `PointInTime`',
        example: 1,
      }),
    PointInTime: PointInTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Regularity with which credit transfer instructions are to be created and processed',
    required: ['Type'],
  })
  .openapi('OBFrequency6')

const OBMandateRelatedInformation1Schema = z
  .object({
    MandateIdentification: Identification_1Schema.exactOptional(),
    Classification: OBExternalMandateClassification1CodeSchema.exactOptional(),
    CategoryPurposeCode: ExternalCategoryPurpose1CodeSchema.exactOptional(),
    FirstPaymentDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    RecurringPaymentDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date on which the first recurring payment for a Standing Order schedule will be made. \nUsage: This must be populated only if the first recurring date is different to the first payment date. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
      }),
    FinalPaymentDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    Frequency: OBFrequency6Schema,
    Reason: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'Reason for the direct debit mandate to allow the user to distinguish between different mandates for the same creditor.',
      }),
  })
  .openapi({ required: ['Frequency'] })
  .openapi('OBMandateRelatedInformation1')

type OBWriteDomesticStandingOrder3Type = {
  Data: {
    ConsentId: string
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      FirstPaymentAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      RecurringPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      FinalPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteDomesticStandingOrderConsent5Type = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      FirstPaymentAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      RecurringPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      FinalPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: {
      AuthorisationType: 'Any' | 'Single' | 'Multiple'
      CompletionDateTime?: string
    }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteDomesticStandingOrderConsentResponse6Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus2CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    CutOffDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      FirstPaymentAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      RecurringPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      FinalPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const ExternalPaymentTransactionStatus1CodeSchema = z
  .enum([
    'CANC',
    'RCVD',
    'ACTC',
    'PATC',
    'PDNG',
    'RJCT',
    'INFA',
    'INCO',
    'ACCP',
    'ACFC',
    'ACSP',
    'ACWC',
    'ACSC',
    'BLCK',
    'ACCC',
    'ACWP',
  ])
  .openapi({
    description:
      'The current status of the payment resource.\n\nFor a full list of values see `ExternalPaymentTransactionStatus1Code` in *OB_Internal_CodeSet* \n[here](https://github.com/OpenBankingUK/External_Internal_CodeSets)\n',
  })
  .openapi('ExternalPaymentTransactionStatus1Code')

type OBWriteDomesticStandingOrderResponse6Type = {
  Data: {
    DomesticStandingOrderId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus1CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    Refund?: z.infer<typeof OBDomesticRefundAccount1Schema>
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      FirstPaymentAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      RecurringPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      FinalPaymentAmount?: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type FileType = { [key: string]: unknown }

type OBWriteFile2Type = {
  Data: {
    ConsentId: string
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string
      NumberOfTransactions?: string
      ControlSum?: number
      RequestedExecutionDateTime?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
}

type OBWriteFileConsent3Type = {
  Data: {
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string
      NumberOfTransactions?: string
      ControlSum?: number
      RequestedExecutionDateTime?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
}

const OBInternalConsentStatus3CodeSchema = z
  .enum(['AWAU', 'AWUP', 'RJCT', 'AUTH', 'COND'])
  .openapi({ description: 'Specifies the status of consent resource in code form.' })
  .openapi('OBInternalConsentStatus3Code')

type OBWriteFileConsentResponse4Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus3CodeSchema>
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    StatusUpdateDateTime: string
    CutOffDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string
      NumberOfTransactions?: string
      ControlSum?: number
      RequestedExecutionDateTime?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const ExternalPaymentTransactionStatus4CodeSchema = z
  .enum(['PDNG', 'INFA', 'INCO'])
  .openapi({
    description:
      'Specifies the status of the payment order resource.\n\nSee `ExternalPaymentTransactionStatus4Code` in *OB_Internal_CodeSet* \n[here](https://github.com/OpenBankingUK/External_Internal_CodeSets) for more information.\n',
  })
  .openapi('ExternalPaymentTransactionStatus4Code')

type OBWriteFileResponse3Type = {
  Data: {
    FilePaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus4CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string
      NumberOfTransactions?: string
      ControlSum?: number
      RequestedExecutionDateTime?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteInternational3Type = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteInternationalConsent5Type = {
  Data: {
    ReadRefundAccount?: 'No' | 'Yes'
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteInternationalConsentResponse6Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus2CodeSchema>
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    StatusUpdateDateTime: string
    ReadRefundAccount?: 'No' | 'Yes'
    CutOffDateTime?: string
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    ExchangeRateInformation?: {
      UnitCurrency: string
      ExchangeRate: number
      RateType: 'Actual' | 'Agreed' | 'Indicative'
      ContractIdentification?: string
      ExpirationDateTime?: string
    }
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteInternationalResponse5Type = {
  Data: {
    InternationalPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus3CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Refund?: z.infer<typeof OBDomesticRefundAccount1Schema>
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    ExchangeRateInformation?: {
      UnitCurrency: string
      ExchangeRate: number
      RateType: 'Actual' | 'Agreed' | 'Indicative'
      ContractIdentification?: string
      ExpirationDateTime?: string
    }
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteInternationalScheduled3Type = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        LEI?: z.infer<typeof LEISchema>
        Name?: z.infer<typeof NameSchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteInternationalScheduledConsent5Type = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        LEI?: z.infer<typeof LEISchema>
        Name?: z.infer<typeof NameSchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteInternationalScheduledConsentResponse6Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus2CodeSchema>
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    StatusUpdateDateTime: string
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    CutOffDateTime?: string
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    ExchangeRateInformation?: {
      UnitCurrency: string
      ExchangeRate: number
      RateType: 'Actual' | 'Agreed' | 'Indicative'
      ContractIdentification?: string
      ExpirationDateTime?: string
    }
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        LEI?: z.infer<typeof LEISchema>
        Name?: z.infer<typeof NameSchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteInternationalScheduledResponse6Type = {
  Data: {
    InternationalScheduledPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus2CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    ExpectedExecutionDateTime?: string
    ExpectedSettlementDateTime?: string
    Refund?: z.infer<typeof OBDomesticRefundAccount1Schema>
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    ExchangeRateInformation?: {
      UnitCurrency: string
      ExchangeRate: number
      RateType: 'Actual' | 'Agreed' | 'Indicative'
      ContractIdentification?: string
      ExpirationDateTime?: string
    }
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string
      LocalInstrument?: z.infer<typeof OBInternalLocalInstrument1CodeSchema>
      InstructionPriority?: 'Normal' | 'Urgent'
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      ExchangeRateInformation?: {
        UnitCurrency: string
        ExchangeRate?: number
        RateType: 'Actual' | 'Agreed' | 'Indicative'
        ContractIdentification?: string
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: z.infer<typeof Identification_1Schema>
        LEI?: z.infer<typeof LEISchema>
        Name?: z.infer<typeof NameSchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteInternationalStandingOrder4Type = {
  Data: {
    ConsentId: string
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: string
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteInternationalStandingOrderConsent6Type = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: string
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
}

type OBWriteInternationalStandingOrderConsentResponse7Type = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof OBInternalConsentStatus2CodeSchema>
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    StatusUpdateDateTime: string
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes'
    CutOffDateTime?: string
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: string
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    Authorisation?: { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string }
    SCASupportData?: z.infer<typeof OBSCASupportData1Schema>
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Risk: z.infer<typeof OBRisk1Schema>
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

type OBWriteInternationalStandingOrderResponse7Type = {
  Data: {
    InternationalStandingOrderId: string
    ConsentId: string
    CreationDateTime: string
    Status: z.infer<typeof ExternalPaymentTransactionStatus1CodeSchema>
    StatusUpdateDateTime: string
    StatusReason?: z.infer<typeof OBStatusReasonSchema>[]
    Refund?: z.infer<typeof OBDomesticRefundAccount1Schema>
    Charges?: {
      ChargeBearer: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      Type: z.infer<typeof OBInternalPaymentChargeType1CodeSchema>
      Amount: z.infer<typeof OBActiveOrHistoricCurrencyAndAmountSchema>
    }[]
    Initiation: {
      RemittanceInformation?: z.infer<typeof OBRemittanceInformation2Schema>
      NumberOfPayments?: z.infer<typeof NumberOfPaymentsSchema>
      ExtendedPurpose?: string
      ChargeBearer?: z.infer<typeof OBInternalChargeBearerType1CodeSchema>
      CurrencyOfTransfer: string
      DestinationCountryCode?: string
      InstructedAmount: {
        Amount: z.infer<typeof OBActiveCurrencyAndAmountSimpleTypeSchema>
        Currency: z.infer<typeof ActiveOrHistoricCurrencyCodeSchema>
      }
      DebtorAccount?: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name?: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      Creditor?: {
        Name?: string
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAgent?: {
        SchemeName?: z.infer<typeof OBInternalFinancialInstitutionIdentification4CodeSchema>
        Identification?: string
        Name?: z.infer<typeof NameSchema>
        LEI?: z.infer<typeof LEISchema>
        PostalAddress?: z.infer<typeof OBPostalAddress7Schema>
      }
      CreditorAccount: {
        SchemeName: z.infer<typeof OBInternalAccountIdentification4CodeSchema>
        Identification: z.infer<typeof Identification_0Schema>
        Name: string
        SecondaryIdentification?: z.infer<typeof SecondaryIdentificationSchema>
        Proxy?: z.infer<typeof OBProxy1Schema>
      }
      UltimateCreditor?: z.infer<typeof OBUltimateCreditor1Schema>
      UltimateDebtor?: z.infer<typeof OBUltimateDebtor1Schema>
      RegulatoryReporting?: z.infer<typeof OBRegulatoryReporting1Schema>[]
      MandateRelatedInformation: z.infer<typeof OBMandateRelatedInformation1Schema>
      SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
    }
    MultiAuthorisation?: {
      Status: 'AUTH' | 'AWAF' | 'RJCT'
      NumberRequired?: number
      NumberReceived?: number
      LastUpdateDateTime?: string
      ExpirationDateTime?: string
    }
    Debtor?: z.infer<typeof OBCashAccountDebtor4Schema>
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const DateSchema = z.iso
  .date()
  .openapi({
    description:
      'Date and time associated with the date time type. All dates in the JSON payloads are represented in ISO 8601 date format. \n An example is below:\n2017-04-05',
  })
  .openapi('Date')

const FileSchema = z.strictObject({}).openapi('File')

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

const OBBranchAndFinancialInstitutionIdentification6_0Schema = z
  .object({
    SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
    Identification: Identification_1Schema.exactOptional(),
    Name: NameSchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
    LEI: LEISchema.exactOptional(),
  })
  .openapi({
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_0')

const OBCashAccountCreditor3Schema = z
  .object({
    SchemeName: OBInternalAccountIdentification4CodeSchema,
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
    SecondaryIdentification: z
      .string()
      .max(34)
      .exactOptional()
      .openapi({
        description:
          'Secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
      }),
    LEI: LEISchema.exactOptional(),
    Proxy: OBProxy1Schema.exactOptional(),
  })
  .openapi({ required: ['SchemeName', 'Identification', 'Name'] })
  .openapi('OBCashAccountCreditor3')

const OBExternalStatusReason1CodeSchema = z
  .string()
  .length(4)
  .openapi({
    description:
      'Low level textual error code, for all enum values see `OBExternalStatusReason1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'U001',
  })
  .openapi('OBExternalStatusReason1Code')

const OBError1Schema = z
  .strictObject({
    ErrorCode: OBExternalStatusReason1CodeSchema,
    Message: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          "A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'\nOBL doesn't standardise this field",
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
  .openapi({ required: ['ErrorCode'] })
  .openapi('OBError1')

const OBErrorResponse1Schema = z
  .strictObject({
    Id: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.',
      }),
    Code: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description: 'Deprecated <br>High level textual error code, to help categorise the errors.',
        example: '400 BadRequest',
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description: 'Deprecated <br>Brief Error message',
        example: 'There is something wrong with the request parameters provided',
      }),
    Errors: z.array(OBError1Schema).min(1),
  })
  .openapi({
    description:
      'An array of detail error codes, and messages, and URLs to documentation to help remediation.',
    required: ['Errors'],
  })
  .openapi('OBErrorResponse1')

const OBPaymentStatusReasonSchema = z
  .object({
    StatusReasonCode: z
      .string()
      .min(1)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Specifies the status reason in a code form \n For more information and enum values see `OBExternalStatusReason1Code [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
        example: 'ERIN',
      }),
    StatusReasonDescription: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'Description supporting the StatusReasonCode.' }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBPaymentStatusReason')

const OBWriteDomestic2Schema: z.ZodType<OBWriteDomestic2Type> = z
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
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomestic2')

const OBWriteDomesticConsent4Schema: z.ZodType<OBWriteDomesticConsent4Type> = z
  .strictObject({
    Data: z
      .strictObject({
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({
            description:
              'Specifies to share the refund account details with PISP. For a full set of values refer to `OBInternalReadRefundAccount1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
          }),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
          }),
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single', 'Multiple'])
              .openapi({
                description:
                  'Type of authorisation flow requested. For a full set of values refer to `OBInternalAuthorisation1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
              }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['AuthorisationType'],
            description: 'The authorisation type request from the TPP.',
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticConsent4')

const OBWriteDomesticConsentResponse5Schema: z.ZodType<OBWriteDomesticConsentResponse5Type> = z
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
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: OBInternalConsentStatus2CodeSchema,
        StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({
            description:
              'Specifies to share the refund account details with PISP. For a full list of values refer to `OBInternalReadRefundAccount1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Charges: z
          .array(
            z
              .strictObject({
                ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                Type: OBInternalPaymentChargeType1CodeSchema,
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
          }),
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single', 'Multiple'])
              .openapi({
                description:
                  'Type of authorisation flow requested. For a full list of values refer to `OBInternalAuthorisation1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
              }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['AuthorisationType'],
            description: 'The authorisation type request from the TPP.',
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
      })
      .openapi({
        required: ['ConsentId', 'CreationDateTime', 'Status', 'StatusUpdateDateTime', 'Initiation'],
      }),
    Risk: OBRisk1Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticConsentResponse5')

const OBWriteDomesticResponse5Schema: z.ZodType<OBWriteDomesticResponse5Type> = z
  .strictObject({
    Data: z
      .strictObject({
        DomesticPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic payment resource.',
          }),
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
              'Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: ExternalPaymentTransactionStatus3CodeSchema,
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Refund: OBDomesticRefundAccount1Schema.exactOptional(),
        Charges: z
          .array(
            z
              .strictObject({
                ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                Type: OBInternalPaymentChargeType1CodeSchema,
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
          }),
        MultiAuthorisation: z
          .strictObject({
            Status: z
              .enum(['AUTH', 'AWAF', 'RJCT'])
              .openapi({
                description:
                  'Specifies the status of the authorisation flow in code form. For a full list of values refer to `OBInternalStatus2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
              }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['Status'],
            description: 'The multiple authorisation flow response from the ASPSP.',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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

const OBWriteDomesticScheduled2Schema: z.ZodType<OBWriteDomesticScheduled2Type> = z
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
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticScheduled2')

const OBWriteDomesticScheduledConsent4Schema: z.ZodType<OBWriteDomesticScheduledConsent4Type> = z
  .strictObject({
    Data: z
      .strictObject({
        Permission: z
          .literal('Create')
          .openapi({
            description:
              'Specifies the Open Banking service request types. For a full list of values see `OBInternalPermissions2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
          }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({
            description:
              'Specifies to share the refund account details with PISP. For a full list of values see `OBInternalReadRefundAccount1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
          }),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
          }),
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single', 'Multiple'])
              .openapi({
                description:
                  'Type of authorisation flow requested. For a full list of values refer to `OBInternalAuthorisation1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
              }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['AuthorisationType'],
            description: 'The authorisation type request from the TPP.',
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Permission', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticScheduledConsent4')

const OBWriteDomesticScheduledConsentResponse5Schema: z.ZodType<OBWriteDomesticScheduledConsentResponse5Type> =
  z
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
          CreationDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: OBInternalConsentStatus2CodeSchema,
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the consent resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          Permission: z
            .literal('Create')
            .openapi({
              description:
                'Specifies the Open Banking service request types. For a full list of values see `OBInternalPermissions2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
            }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({
              description:
                'Specifies to share the refund account details with PISP. For a full list of values see `OBInternalReadRefundAccount1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
            }),
          CutOffDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedExecutionDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedSettlementDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          Initiation: z
            .strictObject({
              InstructionIdentification: z
                .string()
                .min(1)
                .max(35)
                .openapi({
                  description:
                    'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
              LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
              RequestedExecutionDateTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description:
                    'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                }),
              CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'InstructionIdentification',
                'RequestedExecutionDateTime',
                'InstructedAmount',
                'CreditorAccount',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
            }),
          Authorisation: z
            .strictObject({
              AuthorisationType: z
                .enum(['Any', 'Single', 'Multiple'])
                .openapi({
                  description:
                    'Type of authorisation flow requested. For a full list of values refer to `OBInternalAuthorisation1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
                }),
              CompletionDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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
      Risk: OBRisk1Schema,
      Links: LinksSchema.exactOptional(),
      Meta: MetaSchema.exactOptional(),
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteDomesticScheduledConsentResponse5')

const OBWriteDomesticScheduledResponse5Schema: z.ZodType<OBWriteDomesticScheduledResponse5Type> = z
  .strictObject({
    Data: z
      .strictObject({
        DomesticScheduledPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic schedule payment resource.',
          }),
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
              'Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: ExternalPaymentTransactionStatus2CodeSchema,
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Refund: OBDomesticRefundAccount1Schema.exactOptional(),
        Charges: z
          .array(
            z
              .strictObject({
                ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                Type: OBInternalPaymentChargeType1CodeSchema,
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            CreditorPostalAddress: OBPostalAddress7Schema.exactOptional(),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
          }),
        MultiAuthorisation: z
          .strictObject({
            Status: z
              .enum(['AUTH', 'AWAF', 'RJCT'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['Status'],
            description: 'The multiple authorisation flow response from the ASPSP.',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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

const OBWriteDomesticStandingOrder3Schema: z.ZodType<OBWriteDomesticStandingOrder3Type> = z
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
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
            FirstPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description: 'The amount of the first Standing Order',
              }),
            RecurringPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                required: ['Amount', 'Currency'],
                description: 'The amount of the recurring Standing Order',
              }),
            FinalPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                required: ['Amount', 'Currency'],
                description: 'The amount of the final Standing Order',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description: 'Provides the details to identify the debtor account.',
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
              }),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            MandateRelatedInformation: OBMandateRelatedInformation1Schema,
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: ['MandateRelatedInformation', 'FirstPaymentAmount', 'CreditorAccount'],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticStandingOrder3')

const OBWriteDomesticStandingOrderConsent5Schema: z.ZodType<OBWriteDomesticStandingOrderConsent5Type> =
  z
    .strictObject({
      Data: z
        .strictObject({
          Permission: z
            .literal('Create')
            .openapi({
              description:
                'Specifies the Open Banking service request types. For a full list of values see `OBInternalPermissions2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
            }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({
              description:
                'Specifies to share the refund account details with PISP. For a full list of values see `OBInternalReadRefundAccount1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
            }),
          Initiation: z
            .strictObject({
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              FirstPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the first Standing Order',
                }),
              RecurringPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .exactOptional()
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the recurring Standing Order',
                }),
              FinalPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .exactOptional()
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the final Standing Order',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description: 'Provides the details to identify the debtor account.',
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: ['MandateRelatedInformation', 'FirstPaymentAmount', 'CreditorAccount'],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            }),
          Authorisation: z
            .strictObject({
              AuthorisationType: z
                .enum(['Any', 'Single', 'Multiple'])
                .openapi({
                  description:
                    'Type of authorisation flow requested. For a full list of values refer to `OBInternalAuthorisation1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
                }),
              CompletionDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
        })
        .openapi({ required: ['Permission', 'Initiation'] }),
      Risk: OBRisk1Schema,
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteDomesticStandingOrderConsent5')

const OBWriteDomesticStandingOrderConsentResponse6Schema: z.ZodType<OBWriteDomesticStandingOrderConsentResponse6Type> =
  z
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
          CreationDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: OBInternalConsentStatus2CodeSchema,
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          Permission: z
            .literal('Create')
            .openapi({
              description:
                'Specifies the Open Banking service request types. For a full list of values see `OBInternalPermissions2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
            }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({
              description:
                'Specifies to share the refund account details with PISP.  For a full list of values see `OBInternalReadRefundAccount1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
            }),
          CutOffDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          Initiation: z
            .strictObject({
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              FirstPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the first Standing Order',
                }),
              RecurringPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .exactOptional()
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the recurring Standing Order',
                }),
              FinalPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .exactOptional()
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the final Standing Order',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description:
                    'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: ['MandateRelatedInformation', 'FirstPaymentAmount', 'CreditorAccount'],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            }),
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
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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
      Risk: OBRisk1Schema,
      Links: LinksSchema.exactOptional(),
      Meta: MetaSchema.exactOptional(),
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteDomesticStandingOrderConsentResponse6')

const OBWriteDomesticStandingOrderResponse6Schema: z.ZodType<OBWriteDomesticStandingOrderResponse6Type> =
  z
    .strictObject({
      Data: z
        .strictObject({
          DomesticStandingOrderId: z
            .string()
            .min(1)
            .max(40)
            .openapi({
              description:
                'OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic standing order resource.',
            }),
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
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: ExternalPaymentTransactionStatus1CodeSchema,
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          Refund: OBDomesticRefundAccount1Schema.exactOptional(),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          Initiation: z
            .strictObject({
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              FirstPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the first Standing Order',
                }),
              RecurringPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .exactOptional()
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the recurring Standing Order',
                }),
              FinalPaymentAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .exactOptional()
                .openapi({
                  required: ['Amount', 'Currency'],
                  description: 'The amount of the final Standing Order',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description: 'Provides the details to identify the debtor account.',
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: ['MandateRelatedInformation', 'FirstPaymentAmount', 'CreditorAccount'],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            }),
          MultiAuthorisation: z
            .strictObject({
              Status: z
                .enum(['AUTH', 'AWAF', 'RJCT'])
                .openapi({
                  description: 'Specifies the status of the authorisation flow in code form.',
                }),
              NumberRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
                }),
              NumberReceived: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of authorisations received.' }),
              LastUpdateDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
              ExpirationDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['Status'],
              description: 'The multiple authorisation flow response from the ASPSP.',
            }),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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

const OBWriteFile2Schema: z.ZodType<OBWriteFile2Type> = z
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
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.4.0', 'UK.OBIE.pain.001.001.08'],
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
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: ['FileType', 'FileHash'],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFile2')

const OBWriteFileConsent3Schema: z.ZodType<OBWriteFileConsent3Type> = z
  .strictObject({
    Data: z
      .strictObject({
        Initiation: z
          .strictObject({
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.4.0', 'UK.OBIE.pain.001.001.08'],
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
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: ['FileType', 'FileHash'],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
          }),
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
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['AuthorisationType'],
            description: 'The authorisation type request from the TPP.',
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Initiation'] }),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFileConsent3')

const OBWriteFileConsentResponse4Schema: z.ZodType<OBWriteFileConsentResponse4Type> = z
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
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: OBInternalConsentStatus3CodeSchema,
        StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the consent resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Charges: z
          .array(
            z
              .strictObject({
                ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                Type: OBInternalPaymentChargeType1CodeSchema,
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        Initiation: z
          .strictObject({
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.4.0', 'UK.OBIE.pain.001.001.08'],
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
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: ['FileType', 'FileHash'],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
          }),
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
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['AuthorisationType'],
            description: 'The authorisation type request from the TPP.',
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
      })
      .openapi({
        required: ['ConsentId', 'CreationDateTime', 'Status', 'StatusUpdateDateTime', 'Initiation'],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFileConsentResponse4')

const OBWriteFileResponse3Schema: z.ZodType<OBWriteFileResponse3Type> = z
  .strictObject({
    Data: z
      .strictObject({
        FilePaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the file payment resource.',
          }),
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
              'Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: ExternalPaymentTransactionStatus4CodeSchema,
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
        Charges: z
          .array(
            z
              .strictObject({
                ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                Type: OBInternalPaymentChargeType1CodeSchema,
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        Initiation: z
          .strictObject({
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.4.0', 'UK.OBIE.pain.001.001.08'],
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
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
              }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: ['FileType', 'FileHash'],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
          }),
        MultiAuthorisation: z
          .strictObject({
            Status: z
              .enum(['AUTH', 'AWAF', 'RJCT'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['Status'],
            description: 'The multiple authorisation flow response from the ASPSP.',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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
            FundsAvailableDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'Date and time at which the funds availability check was generated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FundsAvailable: z
              .boolean()
              .openapi({
                description:
                  'Flag to indicate the availability of funds given the Amount in the consent request.',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['FundsAvailableDateTime', 'FundsAvailable'],
            description: 'Result of a funds availability check.',
          }),
        SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFundsConfirmationResponse1')

const OBWriteInternational3Schema: z.ZodType<OBWriteInternational3Type> = z
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
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
            ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DestinationCountryCode: z
              .string()
              .regex(/^[A-Z]{2,2}$/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
              })
              .exactOptional()
              .openapi({
                required: ['UnitCurrency', 'RateType'],
                description: 'Provides details on the currency exchange rate and contract.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternational3')

const OBWriteInternationalConsent5Schema: z.ZodType<OBWriteInternationalConsent5Type> = z
  .strictObject({
    Data: z
      .strictObject({
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
            ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DestinationCountryCode: z
              .string()
              .regex(/^[A-Z]{2,2}$/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
              })
              .exactOptional()
              .openapi({
                required: ['UnitCurrency', 'RateType'],
                description: 'Provides details on the currency exchange rate and contract.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
          }),
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
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['AuthorisationType'],
            description: 'The authorisation type request from the TPP.',
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalConsent5')

const OBWriteInternationalConsentResponse6Schema: z.ZodType<OBWriteInternationalConsentResponse6Type> =
  z
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
          CreationDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: OBInternalConsentStatus2CodeSchema,
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({ description: 'Specifies to share the refund account details with PISP' }),
          CutOffDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedExecutionDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedSettlementDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          ExchangeRateInformation: z
            .strictObject({
              UnitCurrency: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                }),
              ExchangeRate: z
                .number()
                .openapi({
                  description:
                    'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                }),
              RateType: z
                .enum(['Actual', 'Agreed', 'Indicative'])
                .openapi({
                  description: 'Specifies the type used to complete the currency exchange.',
                }),
              ContractIdentification: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                }),
              ExpirationDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Specified date and time the exchange rate agreement will expire. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
              description:
                'Further detailed information on the exchange rate that has been used in the payment transaction.',
            }),
          Initiation: z
            .strictObject({
              InstructionIdentification: z
                .string()
                .min(1)
                .max(35)
                .openapi({
                  description:
                    'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
                }),
              EndToEndIdentification: z
                .string()
                .min(1)
                .max(35)
                .openapi({
                  description:
                    'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
                }),
              LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
              InstructionPriority: z
                .enum(['Normal', 'Urgent'])
                .exactOptional()
                .openapi({
                  description:
                    'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              ExchangeRateInformation: z
                .strictObject({
                  UnitCurrency: z
                    .string()
                    .regex(/^[A-Z]{3,3}$/)
                    .openapi({
                      description:
                        'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                  ContractIdentification: z
                    .string()
                    .min(1)
                    .max(256)
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: ['UnitCurrency', 'RateType'],
                  description: 'Provides details on the currency exchange rate and contract.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description:
                    'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                  Identification: Identification_1Schema.exactOptional(),
                  Name: NameSchema.exactOptional(),
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Financial institution servicing an account for the creditor.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'InstructionIdentification',
                'EndToEndIdentification',
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
            }),
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
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        })
        .openapi({
          required: [
            'ConsentId',
            'CreationDateTime',
            'Status',
            'StatusUpdateDateTime',
            'Initiation',
          ],
        }),
      Risk: OBRisk1Schema,
      Links: LinksSchema.exactOptional(),
      Meta: MetaSchema.exactOptional(),
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteInternationalConsentResponse6')

const OBWriteInternationalResponse5Schema: z.ZodType<OBWriteInternationalResponse5Type> = z
  .strictObject({
    Data: z
      .strictObject({
        InternationalPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the international payment resource.',
          }),
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
              'Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: ExternalPaymentTransactionStatus3CodeSchema,
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Refund: OBDomesticRefundAccount1Schema.exactOptional(),
        Charges: z
          .array(
            z
              .strictObject({
                ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                Type: OBInternalPaymentChargeType1CodeSchema,
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ExchangeRateInformation: z
          .strictObject({
            UnitCurrency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
              }),
            ExchangeRate: z
              .number()
              .openapi({
                description:
                  'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
              }),
            RateType: z
              .enum(['Actual', 'Agreed', 'Indicative'])
              .openapi({
                description: 'Specifies the type used to complete the currency exchange.',
              }),
            ContractIdentification: z
              .string()
              .min(1)
              .max(256)
              .exactOptional()
              .openapi({
                description:
                  'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Specified date and time the exchange rate agreement will expire. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
            description:
              'Further detailed information on the exchange rate that has been used in the payment transaction.',
          }),
        Initiation: z
          .strictObject({
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
            ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DestinationCountryCode: z
              .string()
              .regex(/^[A-Z]{2,2}$/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
              })
              .exactOptional()
              .openapi({
                required: ['UnitCurrency', 'RateType'],
                description: 'Provides details on the currency exchange rate and contract.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
          }),
        MultiAuthorisation: z
          .strictObject({
            Status: z
              .enum(['AUTH', 'AWAF', 'RJCT'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            required: ['Status'],
            description: 'The multiple authorisation flow response from the ASPSP.',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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

const OBWriteInternationalScheduled3Schema: z.ZodType<OBWriteInternationalScheduled3Type> = z
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
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
            LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
            ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DestinationCountryCode: z
              .string()
              .regex(/^[A-Z]{2,2}$/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
              })
              .exactOptional()
              .openapi({
                required: ['UnitCurrency', 'RateType'],
                description: 'Provides details on the currency exchange rate and contract.',
              }),
            DebtorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                required: ['SchemeName', 'Identification'],
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                LEI: LEISchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAgent: z
              .strictObject({
                SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                Identification: Identification_1Schema.exactOptional(),
                LEI: LEISchema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress7Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CreditorAccount: z
              .strictObject({
                SchemeName: OBInternalAccountIdentification4CodeSchema,
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                Proxy: OBProxy1Schema.exactOptional(),
              })
              .openapi({
                required: ['SchemeName', 'Identification', 'Name'],
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
              }),
            UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
            UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
            RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
            RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalScheduled3')

const OBWriteInternationalScheduledConsent5Schema: z.ZodType<OBWriteInternationalScheduledConsent5Type> =
  z
    .strictObject({
      Data: z
        .strictObject({
          Permission: z
            .literal('Create')
            .openapi({ description: 'Specifies the Open Banking service request types.' }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({ description: 'Specifies to share the refund account details with PISP' }),
          Initiation: z
            .strictObject({
              InstructionIdentification: z
                .string()
                .min(1)
                .max(35)
                .openapi({
                  description:
                    'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
              LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
              InstructionPriority: z
                .enum(['Normal', 'Urgent'])
                .exactOptional()
                .openapi({
                  description:
                    'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              RequestedExecutionDateTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
                }),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              ExchangeRateInformation: z
                .strictObject({
                  UnitCurrency: z
                    .string()
                    .regex(/^[A-Z]{3,3}$/)
                    .openapi({
                      description:
                        'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                  ContractIdentification: z
                    .string()
                    .min(1)
                    .max(256)
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: ['UnitCurrency', 'RateType'],
                  description: 'Provides details on the currency exchange rate and contract.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description:
                    'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                  Identification: Identification_1Schema.exactOptional(),
                  LEI: LEISchema.exactOptional(),
                  Name: NameSchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Financial institution servicing an account for the creditor.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'InstructionIdentification',
                'RequestedExecutionDateTime',
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            }),
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
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
        })
        .openapi({ required: ['Permission', 'Initiation'] }),
      Risk: OBRisk1Schema,
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteInternationalScheduledConsent5')

const OBWriteInternationalScheduledConsentResponse6Schema: z.ZodType<OBWriteInternationalScheduledConsentResponse6Type> =
  z
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
          CreationDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: OBInternalConsentStatus2CodeSchema,
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Permission: z
            .literal('Create')
            .openapi({ description: 'Specifies the Open Banking service request types.' }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({ description: 'Specifies to share the refund account details with PISP' }),
          CutOffDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedExecutionDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedSettlementDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          ExchangeRateInformation: z
            .strictObject({
              UnitCurrency: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                }),
              ExchangeRate: z
                .number()
                .openapi({
                  description:
                    'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                }),
              RateType: z
                .enum(['Actual', 'Agreed', 'Indicative'])
                .openapi({
                  description: 'Specifies the type used to complete the currency exchange.',
                }),
              ContractIdentification: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                }),
              ExpirationDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Specified date and time the exchange rate agreement will expire. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
              description:
                'Further detailed information on the exchange rate that has been used in the payment transaction.',
            }),
          Initiation: z
            .strictObject({
              InstructionIdentification: z
                .string()
                .min(1)
                .max(35)
                .openapi({
                  description:
                    'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
              LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
              InstructionPriority: z
                .enum(['Normal', 'Urgent'])
                .exactOptional()
                .openapi({
                  description:
                    'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              RequestedExecutionDateTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
                }),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              ExchangeRateInformation: z
                .strictObject({
                  UnitCurrency: z
                    .string()
                    .regex(/^[A-Z]{3,3}$/)
                    .openapi({
                      description:
                        'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                  ContractIdentification: z
                    .string()
                    .min(1)
                    .max(256)
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: ['UnitCurrency', 'RateType'],
                  description: 'Provides details on the currency exchange rate and contract.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description:
                    'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                  Identification: Identification_1Schema.exactOptional(),
                  LEI: LEISchema.exactOptional(),
                  Name: NameSchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Financial institution servicing an account for the creditor.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'InstructionIdentification',
                'RequestedExecutionDateTime',
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            }),
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
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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
      Risk: OBRisk1Schema,
      Links: LinksSchema.exactOptional(),
      Meta: MetaSchema.exactOptional(),
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteInternationalScheduledConsentResponse6')

const OBWriteInternationalScheduledResponse6Schema: z.ZodType<OBWriteInternationalScheduledResponse6Type> =
  z
    .strictObject({
      Data: z
        .strictObject({
          InternationalScheduledPaymentId: z
            .string()
            .min(1)
            .max(40)
            .openapi({
              description:
                'OB: Unique identification as assigned by the ASPSP to uniquely identify the international scheduled payment resource.',
            }),
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
                'Date and time at which the message was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: ExternalPaymentTransactionStatus2CodeSchema,
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          ExpectedExecutionDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected execution date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          ExpectedSettlementDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Expected settlement date and time for the payment resource. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Refund: OBDomesticRefundAccount1Schema.exactOptional(),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          ExchangeRateInformation: z
            .strictObject({
              UnitCurrency: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                }),
              ExchangeRate: z
                .number()
                .openapi({
                  description:
                    'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                }),
              RateType: z
                .enum(['Actual', 'Agreed', 'Indicative'])
                .openapi({
                  description: 'Specifies the type used to complete the currency exchange.',
                }),
              ContractIdentification: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                }),
              ExpirationDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Specified date and time the exchange rate agreement will expire. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
              description:
                'Further detailed information on the exchange rate that has been used in the payment transaction.',
            }),
          Initiation: z
            .strictObject({
              InstructionIdentification: z
                .string()
                .min(1)
                .max(35)
                .openapi({
                  description:
                    'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
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
              LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
              InstructionPriority: z
                .enum(['Normal', 'Urgent'])
                .exactOptional()
                .openapi({
                  description:
                    'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
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
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              RequestedExecutionDateTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
                }),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              ExchangeRateInformation: z
                .strictObject({
                  UnitCurrency: z
                    .string()
                    .regex(/^[A-Z]{3,3}$/)
                    .openapi({
                      description:
                        'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
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
                  ContractIdentification: z
                    .string()
                    .min(1)
                    .max(256)
                    .exactOptional()
                    .openapi({
                      description:
                        'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: ['UnitCurrency', 'RateType'],
                  description: 'Provides details on the currency exchange rate and contract.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description:
                    'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
                  Identification: Identification_1Schema.exactOptional(),
                  LEI: LEISchema.exactOptional(),
                  Name: NameSchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Financial institution servicing an account for the creditor.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description:
                    'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'InstructionIdentification',
                'RequestedExecutionDateTime',
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            }),
          MultiAuthorisation: z
            .strictObject({
              Status: z
                .enum(['AUTH', 'AWAF', 'RJCT'])
                .openapi({
                  description: 'Specifies the status of the authorisation flow in code form.',
                }),
              NumberRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
                }),
              NumberReceived: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of authorisations received.' }),
              LastUpdateDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
              ExpirationDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['Status'],
              description: 'The multiple authorisation flow response from the ASPSP.',
            }),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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

const OBWriteInternationalStandingOrder4Schema: z.ZodType<OBWriteInternationalStandingOrder4Type> =
  z
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
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              ExtendedPurpose: z
                .string()
                .min(1)
                .max(140)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
                }),
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description: 'Provides the details to identify the debtor account.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description: 'Provides the details to identify the beneficiary account.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
                'MandateRelatedInformation',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            }),
        })
        .openapi({ required: ['ConsentId', 'Initiation'] }),
      Risk: OBRisk1Schema,
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteInternationalStandingOrder4')

const OBWriteInternationalStandingOrderConsent6Schema: z.ZodType<OBWriteInternationalStandingOrderConsent6Type> =
  z
    .strictObject({
      Data: z
        .strictObject({
          Permission: z
            .literal('Create')
            .openapi({ description: 'Specifies the Open Banking service request types.' }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({ description: 'Specifies to share the refund account details with PISP' }),
          Initiation: z
            .strictObject({
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              ExtendedPurpose: z
                .string()
                .min(1)
                .max(140)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
                }),
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description: 'Provides the details to identify the debtor account.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description: 'Provides the details to identify the beneficiary account.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
                'MandateRelatedInformation',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            }),
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
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
        })
        .openapi({ required: ['Permission', 'Initiation'] }),
      Risk: OBRisk1Schema,
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteInternationalStandingOrderConsent6')

const OBWriteInternationalStandingOrderConsentResponse7Schema: z.ZodType<OBWriteInternationalStandingOrderConsentResponse7Type> =
  z
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
          CreationDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: OBInternalConsentStatus2CodeSchema,
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Permission: z
            .literal('Create')
            .openapi({ description: 'Specifies the Open Banking service request types.' }),
          ReadRefundAccount: z
            .enum(['No', 'Yes'])
            .exactOptional()
            .openapi({ description: 'Specifies to share the refund account details with PISP' }),
          CutOffDateTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'Specified cut-off date and time for the payment consent. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          Initiation: z
            .strictObject({
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              ExtendedPurpose: z
                .string()
                .min(1)
                .max(140)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
                }),
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description: 'Provides the details to identify the debtor account.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description: 'Provides the details to identify the beneficiary account.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
                'MandateRelatedInformation',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            }),
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
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['AuthorisationType'],
              description: 'The authorisation type request from the TPP.',
            }),
          SCASupportData: OBSCASupportData1Schema.exactOptional(),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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
      Risk: OBRisk1Schema,
      Links: LinksSchema.exactOptional(),
      Meta: MetaSchema.exactOptional(),
    })
    .openapi({ required: ['Data', 'Risk'] })
    .openapi('OBWriteInternationalStandingOrderConsentResponse7')

const OBWriteInternationalStandingOrderResponse7Schema: z.ZodType<OBWriteInternationalStandingOrderResponse7Type> =
  z
    .strictObject({
      Data: z
        .strictObject({
          InternationalStandingOrderId: z
            .string()
            .min(1)
            .max(40)
            .openapi({
              description:
                'OB: Unique identification as assigned by the ASPSP to uniquely identify the international standing order resource.',
            }),
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
                'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          Status: ExternalPaymentTransactionStatus1CodeSchema,
          StatusUpdateDateTime: z.iso
            .datetime({ offset: true })
            .openapi({
              description:
                'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
            }),
          StatusReason: z.array(OBStatusReasonSchema).exactOptional(),
          Refund: OBDomesticRefundAccount1Schema.exactOptional(),
          Charges: z
            .array(
              z
                .strictObject({
                  ChargeBearer: OBInternalChargeBearerType1CodeSchema,
                  Type: OBInternalPaymentChargeType1CodeSchema,
                  Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                })
                .openapi({
                  description:
                    'Set of elements used to provide details of a charge for the payment initiation.',
                  required: ['ChargeBearer', 'Type', 'Amount'],
                }),
            )
            .exactOptional(),
          Initiation: z
            .strictObject({
              RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
              NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
              ExtendedPurpose: z
                .string()
                .min(1)
                .max(140)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
                }),
              ChargeBearer: OBInternalChargeBearerType1CodeSchema.exactOptional(),
              CurrencyOfTransfer: z
                .string()
                .regex(/^[A-Z]{3,3}$/)
                .openapi({
                  description:
                    "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
                }),
              DestinationCountryCode: z
                .string()
                .regex(/^[A-Z]{2,2}$/)
                .exactOptional()
                .openapi({
                  description:
                    'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
                }),
              InstructedAmount: z
                .strictObject({
                  Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                  Currency: ActiveOrHistoricCurrencyCodeSchema,
                })
                .openapi({
                  required: ['Amount', 'Currency'],
                  description:
                    'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                }),
              DebtorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
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
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  required: ['SchemeName', 'Identification'],
                  description: 'Provides the details to identify the debtor account.',
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Party to which an amount of money is due.',
                  required: [],
                }),
              CreditorAgent: z
                .strictObject({
                  SchemeName:
                    OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
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
                  LEI: LEISchema.exactOptional(),
                  PostalAddress: OBPostalAddress7Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                  required: [],
                }),
              CreditorAccount: z
                .strictObject({
                  SchemeName: OBInternalAccountIdentification4CodeSchema,
                  Identification: Identification_0Schema,
                  Name: z
                    .string()
                    .min(1)
                    .max(350)
                    .openapi({
                      description:
                        'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                    }),
                  SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
                  Proxy: OBProxy1Schema.exactOptional(),
                })
                .openapi({
                  required: ['SchemeName', 'Identification', 'Name'],
                  description: 'Provides the details to identify the beneficiary account.',
                }),
              UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
              UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
              RegulatoryReporting: z.array(OBRegulatoryReporting1Schema).max(10).exactOptional(),
              MandateRelatedInformation: OBMandateRelatedInformation1Schema,
              SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
            })
            .openapi({
              required: [
                'CurrencyOfTransfer',
                'InstructedAmount',
                'CreditorAccount',
                'MandateRelatedInformation',
              ],
              description:
                'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            }),
          MultiAuthorisation: z
            .strictObject({
              Status: z
                .enum(['AUTH', 'AWAF', 'RJCT'])
                .openapi({
                  description: 'Specifies the status of the authorisation flow in code form.',
                }),
              NumberRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
                }),
              NumberReceived: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of authorisations received.' }),
              LastUpdateDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Last date and time at the authorisation flow was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
              ExpirationDateTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date and time at which the requested authorisation flow must be completed. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                }),
            })
            .exactOptional()
            .openapi({
              required: ['Status'],
              description: 'The multiple authorisation flow response from the ASPSP.',
            }),
          Debtor: OBCashAccountDebtor4Schema.exactOptional(),
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

const OBWritePaymentDetails1Schema = z
  .object({
    PaymentTransactionId: z
      .string()
      .min(1)
      .max(210)
      .openapi({
        description:
          'Unique identifier for the transaction within a servicing institution. This identifier is both unique and immutable.',
      }),
    Status: ExternalPaymentTransactionStatus1CodeSchema,
    StatusUpdateDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date and time at which the status was assigned to the transfer.\n',
      }),
    StatusDetail: z
      .object({
        LocalInstrument: OBInternalLocalInstrument1CodeSchema.exactOptional(),
        Status: ExternalPaymentTransactionStatus1CodeSchema,
        StatusReason: z
          .string()
          .min(1)
          .max(4)
          .exactOptional()
          .openapi({
            description:
              'Reason Code provided for the status of a transfer. For a full list of values see code values for `OBExternalStatusReason1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
          }),
        StatusReasonDescription: z
          .string()
          .min(1)
          .max(256)
          .exactOptional()
          .openapi({
            description:
              'Reason provided for the status of a transfer. For a full list of values see the code name entries for `OBExternalStatusReason1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Payment status details as per underlying Payment Rail.',
        required: ['Status'],
      }),
  })
  .openapi({ required: ['PaymentTransactionId', 'Status', 'StatusUpdateDateTime'] })
  .openapi('OBWritePaymentDetails1')

const OBWritePaymentDetailsResponse1Schema = z
  .object({
    Data: z
      .strictObject({ PaymentStatus: z.array(OBWritePaymentDetails1Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWritePaymentDetailsResponse1')

const TimeSchema = z
  .string()
  .regex(/^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/)
  .openapi({
    format: 'time',
    description:
      'Time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.\nUsage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.\nFor transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\nT10:43:07+00:00',
  })
  .openapi('Time')

const RateLimitPolicyHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.\n\nA non-empty list of Quota Policy Items. The Item value __MUST__ be a String.\n\nExample:\n`RateLimit-Policy: "default";q=100;w=10`\n\nThe **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.\n\nThe **OPTIONAL** "w" parameter value conveys a time window.\n',
    param: { required: false },
  })

const RateLimitHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.\n\nA server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.\n\nExample:\n`RateLimit: "default";r=50;t=30`\n\nThe **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.\n\nThe **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.\n',
    param: { required: false },
  })

const _201DomesticPaymentConsentsCreatedResponse = {
  description: 'Domestic Payment Consents Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticPaymentConsentsConsentIdReadResponse = {
  description: 'Domestic Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticPaymentConsentsConsentIdFundsConfirmationReadResponse = {
  description: 'Domestic Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/jose+jwe': { schema: OBWriteFundsConfirmationResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201DomesticPaymentsCreatedResponse = {
  description: 'Domestic Payments Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticResponse5Schema },
    'application/json': { schema: OBWriteDomesticResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticPaymentsDomesticPaymentIdReadResponse = {
  description: 'Domestic Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticResponse5Schema },
    'application/json': { schema: OBWriteDomesticResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticPaymentsDomesticPaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201DomesticScheduledPaymentConsentsCreatedResponse = {
  description: 'Domestic Scheduled Payment Consents Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticScheduledPaymentConsentsConsentIdReadResponse = {
  description: 'Domestic Scheduled Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201DomesticScheduledPaymentsCreatedResponse = {
  description: 'Domestic Scheduled Payments Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticScheduledResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticScheduledPaymentsDomesticScheduledPaymentIdReadResponse = {
  description: 'Domestic Scheduled Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/jose+jwe': { schema: OBWriteDomesticScheduledResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201DomesticStandingOrderConsentsCreatedResponse = {
  description: 'Domestic Standing Order Consents Created',
  content: {
    'application/json; charset=utf-8': {
      schema: OBWriteDomesticStandingOrderConsentResponse6Schema,
    },
    'application/json': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticStandingOrderConsentsConsentIdReadResponse = {
  description: 'Domestic Standing Order Consents Read',
  content: {
    'application/json; charset=utf-8': {
      schema: OBWriteDomesticStandingOrderConsentResponse6Schema,
    },
    'application/json': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201DomesticStandingOrdersCreatedResponse = {
  description: 'Domestic Standing Orders Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/json': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticStandingOrdersDomesticStandingOrderIdReadResponse = {
  description: 'Domestic Standing Orders Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/json': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201FilePaymentConsentsCreatedResponse = {
  description: 'File Payment Consents Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFileConsentResponse4Schema },
    'application/json': { schema: OBWriteFileConsentResponse4Schema },
    'application/jose+jwe': { schema: OBWriteFileConsentResponse4Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200FilePaymentConsentsConsentIdFileCreatedResponse = {
  description: 'File Payment Consents Created',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _200FilePaymentConsentsConsentIdReadResponse = {
  description: 'File Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFileConsentResponse4Schema },
    'application/json': { schema: OBWriteFileConsentResponse4Schema },
    'application/jose+jwe': { schema: OBWriteFileConsentResponse4Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200FilePaymentConsentsConsentIdFileReadResponse = {
  description: 'File Payment Consents Read\n\nASPSP will specify all available content types.\n',
  content: {
    'application/json; charset=utf-8': { schema: FileSchema },
    'application/json': { schema: FileSchema },
    'application/jose+jwe': { schema: FileSchema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201FilePaymentsCreatedResponse = {
  description: 'File Payments Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFileResponse3Schema },
    'application/json': { schema: OBWriteFileResponse3Schema },
    'application/jose+jwe': { schema: OBWriteFileResponse3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200FilePaymentsFilePaymentIdReadResponse = {
  description: 'File Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFileResponse3Schema },
    'application/json': { schema: OBWriteFileResponse3Schema },
    'application/jose+jwe': { schema: OBWriteFileResponse3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200FilePaymentsFilePaymentIdReportFileReadResponse = {
  description: 'File Payments Read\n\nASPSP will specify all available content types\n',
  content: {
    'application/json; charset=utf-8': { schema: FileSchema },
    'application/json': { schema: FileSchema },
    'application/jose+jwe': { schema: FileSchema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200FilePaymentsFilePaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201InternationalPaymentConsentsCreatedResponse = {
  description: 'International Payment Consents Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/json': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/jose+jwe': { schema: OBWriteInternationalConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalPaymentConsentsConsentIdReadResponse = {
  description: 'International Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/json': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/jose+jwe': { schema: OBWriteInternationalConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalPaymentConsentsConsentIdFundsConfirmationReadResponse = {
  description: 'International Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/jose+jwe': { schema: OBWriteFundsConfirmationResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201InternationalPaymentsCreatedResponse = {
  description: 'International Payments Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalResponse5Schema },
    'application/json': { schema: OBWriteInternationalResponse5Schema },
    'application/jose+jwe': { schema: OBWriteInternationalResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalPaymentsInternationalPaymentIdReadResponse = {
  description: 'International Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalResponse5Schema },
    'application/json': { schema: OBWriteInternationalResponse5Schema },
    'application/jose+jwe': { schema: OBWriteInternationalResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalPaymentsInternationalPaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201InternationalScheduledPaymentConsentsCreatedResponse = {
  description: 'International Scheduled Payment Consents Created',
  content: {
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalScheduledConsentResponse6Schema,
    },
    'application/json': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
    'application/jose+jwe': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalScheduledPaymentConsentsConsentIdReadResponse = {
  description: 'International Scheduled Payment Consents Read',
  content: {
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalScheduledConsentResponse6Schema,
    },
    'application/json': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
    'application/jose+jwe': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalScheduledPaymentConsentsConsentIdFundsConfirmationReadResponse = {
  description: 'International Scheduled Payment Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/jose+jwe': { schema: OBWriteFundsConfirmationResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201InternationalScheduledPaymentsCreatedResponse = {
  description: 'International Scheduled Payments Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/json': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/jose+jwe': { schema: OBWriteInternationalScheduledResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalScheduledPaymentsInternationalScheduledPaymentIdReadResponse = {
  description: 'International Scheduled Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/json': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/jose+jwe': { schema: OBWriteInternationalScheduledResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsReadResponse =
  {
    description: 'Payment Details Read',
    content: {
      'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    },
    headers: z.object({
      'x-fapi-interaction-id': z
        .string()
        .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
      'x-jws-signature': z
        .string()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
        }),
      'RateLimit-Policy': RateLimitPolicyHeaderSchema,
      RateLimit: RateLimitHeaderSchema,
    }),
  }

const _201InternationalStandingOrderConsentsCreatedResponse = {
  description: 'International Standing Order Consents Created',
  content: {
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalStandingOrderConsentResponse7Schema,
    },
    'application/json': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalStandingOrderConsentsConsentIdReadResponse = {
  description: 'International Standing Order Consents Read',
  content: {
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalStandingOrderConsentResponse7Schema,
    },
    'application/json': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _201InternationalStandingOrdersCreatedResponse = {
  description: 'International Standing Orders Created',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/json': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderResponse7Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalStandingOrdersInternationalStandingOrderPaymentIdReadResponse = {
  description: 'International Standing Orders Read',
  content: {
    'application/json; charset=utf-8': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/json': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderResponse7Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200InternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsReadResponse =
  {
    description: 'Payment Details Read',
    content: {
      'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    },
    headers: z.object({
      'x-fapi-interaction-id': z
        .string()
        .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
      'x-jws-signature': z
        .string()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
        }),
      'RateLimit-Policy': RateLimitPolicyHeaderSchema,
      RateLimit: RateLimitHeaderSchema,
    }),
  }

const _400ErrorResponse = {
  description: 'Bad request',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
  }),
}

const _401ErrorResponse = {
  description: 'Unauthorized',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _403ErrorResponse = {
  description: 'Forbidden',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
  }),
}

const _404ErrorResponse = {
  description: 'Not found',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _405ErrorResponse = {
  description: 'Method Not Allowed',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _406ErrorResponse = {
  description: 'Not Acceptable',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _409ErrorResponse = {
  description: 'Conflict',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.',
      }),
  }),
}

const _415ErrorResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _422ErrorResponse = {
  description: 'Duplicate Idempotency key',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.',
      }),
  }),
}

const _429ErrorResponse = {
  description: 'Too Many Requests',
  headers: z.object({
    'Retry-After': z
      .int()
      .exactOptional()
      .openapi({ description: 'Number in seconds to wait', param: { required: false } }),
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _500ErrorResponse = {
  description: 'Internal Server Error',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'x-jws-signature': z
      .string()
      .openapi({
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
      }),
  }),
}

const ConsentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'ConsentId',
      in: 'path',
      description: 'ConsentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomesticPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'DomesticPaymentId',
      in: 'path',
      description: 'DomesticPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomesticScheduledPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'DomesticScheduledPaymentId',
      in: 'path',
      description: 'DomesticScheduledPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomesticStandingOrderIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'DomesticStandingOrderId',
      in: 'path',
      description: 'DomesticStandingOrderId',
      required: true,
      schema: { type: 'string' },
    },
  })

const FilePaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'FilePaymentId',
      in: 'path',
      description: 'FilePaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const InternationalPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'InternationalPaymentId',
      in: 'path',
      description: 'InternationalPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const InternationalScheduledPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'InternationalScheduledPaymentId',
      in: 'path',
      description: 'InternationalScheduledPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const InternationalStandingOrderPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'InternationalStandingOrderPaymentId',
      in: 'path',
      description: 'InternationalStandingOrderPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'Authorization',
      required: true,
      description: 'An Authorisation Token as per https://tools.ietf.org/html/rfc6750',
      schema: { type: 'string' },
    },
  })

const XCustomerUserAgentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-customer-user-agent',
      description: 'Indicates the user-agent that the PSU is using.',
      required: false,
      schema: { type: 'string' },
    },
  })

const XFapiCustomerIpAddressParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-fapi-customer-ip-address',
      required: false,
      description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
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
      in: 'header',
      name: 'x-fapi-auth-date',
      required: false,
      description:
        'The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC',
      schema: {
        type: 'string',
        pattern:
          '^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d{4} \\d{2}:\\d{2}:\\d{2} (GMT|UTC)$',
      },
    },
  })

const XFapiInteractionIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-fapi-interaction-id',
      required: false,
      description: 'An RFC4122 UID used as a correlation id.',
      schema: { type: 'string' },
    },
  })

const XIdempotencyKeyParamsSchema = z
  .string()
  .regex(/^(?!\s)(.*)(\S)$/)
  .max(40)
  .openapi({
    param: {
      name: 'x-idempotency-key',
      in: 'header',
      description:
        'Every request will be processed only once per x-idempotency-key.  The\nIdempotency Key will be valid for 24 hours.\n',
      required: true,
      schema: { type: 'string', maxLength: 40, pattern: '^(?!\\s)(.*)(\\S)$' },
    },
  })

const XJwsSignatureParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'x-jws-signature',
      required: true,
      description: 'A detached JWS signature of the body of the payload.',
      schema: { type: 'string' },
    },
  })

const XClientIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-client-id',
      required: false,
      description:
        'Only used if an ASPSP requires the client ID in order to return rate limit headers. \n\nTPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.\n\nThis header __must not__ be used for client authentication\n',
      schema: { type: 'string' },
    },
  })

const TPPOAuth2SecuritySecurityScheme = {
  type: 'oauth2',
  description: 'TPP client credential authorisation flow with the ASPSP',
  flows: {
    clientCredentials: {
      tokenUrl: 'https://authserver.example/token',
      scopes: { payments: 'Generic payment scope' },
    },
  },
}

const PSUOAuth2SecuritySecurityScheme = {
  type: 'oauth2',
  description:
    'OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://authserver.example/authorization',
      tokenUrl: 'https://authserver.example/token',
      scopes: { payments: 'Generic payment scope' },
    },
  },
}

export const postDomesticPaymentConsentsRoute = createRoute({
  method: 'post',
  path: '/domestic-payment-consents',
  tags: ['Domestic Payment Consents'],
  summary: 'Create a Domestic Payment Consent',
  description: 'Enables a PISP to register an intent to initiate a Domestic Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteDomesticConsent4Schema },
        'application/json': { schema: OBWriteDomesticConsent4Schema },
        'application/jose+jwe': { schema: OBWriteDomesticConsent4Schema },
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
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-payment-consents/{ConsentId}',
  tags: ['Domestic Payment Consents'],
  summary: 'Get a Domestic Payment Consent',
  description: 'Enables a PISP to retrieve the status of an intent to initiate a Domestic Payment.',
  operationId: 'GetDomesticPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['Domestic Payment Consents'],
  summary: 'Confirm availability of funds for a Domestic Payment',
  description:
    'Enables a PISP to check whether a PSU has sufficient available funds for a Domestic Payment.',
  operationId: 'GetDomesticPaymentConsentsConsentIdFundsConfirmation',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: 'Initiate a Domestic Payment',
  description: 'Enables a PISP to initiate an already PSU-approved Domestic Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteDomestic2Schema },
        'application/json': { schema: OBWriteDomestic2Schema },
        'application/jose+jwe': { schema: OBWriteDomestic2Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getDomesticPaymentsDomesticPaymentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-payments/{DomesticPaymentId}',
  tags: ['Domestic Payments'],
  summary: 'Get a Domestic Payment',
  description: 'Enables a PISP to retrieve the status of a Domestic Payment.',
  operationId: 'GetDomesticPaymentsDomesticPaymentId',
  request: {
    params: z.object({ DomesticPaymentId: DomesticPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['Domestic Payments'],
  summary: 'Get details of a Domestic Payment',
  description:
    'Enables a PISP to retrieve detailed information on the status of a Domestic Payment.',
  operationId: 'GetDomesticPaymentsDomesticPaymentIdPaymentDetails',
  request: {
    params: z.object({ DomesticPaymentId: DomesticPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['Domestic Scheduled Payment Consents'],
  summary: 'Create a Domestic Scheduled Payment Consent',
  description: 'Enables a PISP to register an intent to initiate a Domestic Scheduled Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledConsent4Schema },
        'application/json': { schema: OBWriteDomesticScheduledConsent4Schema },
        'application/jose+jwe': { schema: OBWriteDomesticScheduledConsent4Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticScheduledPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-scheduled-payment-consents/{ConsentId}',
  tags: ['Domestic Scheduled Payment Consents'],
  summary: 'Get a Domestic Scheduled Payment Consent',
  description:
    'Enables a PISP to retrieve the status of an intent to initiate a Domestic Scheduled Payment.',
  operationId: 'GetDomesticScheduledPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: 'Initiate a Domestic Scheduled Payment',
  description: 'Enables a PISP to initiate an already PSU-approved Domestic Scheduled Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteDomesticScheduled2Schema },
        'application/json': { schema: OBWriteDomesticScheduled2Schema },
        'application/jose+jwe': { schema: OBWriteDomesticScheduled2Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-scheduled-payments/{DomesticScheduledPaymentId}',
  tags: ['Domestic Scheduled Payments'],
  summary: 'Get a Domestic Scheduled Payment',
  description: 'Enables a PISP to retrieve the status of a Domestic Scheduled Payment.',
  operationId: 'GetDomesticScheduledPaymentsDomesticScheduledPaymentId',
  request: {
    params: z.object({ DomesticScheduledPaymentId: DomesticScheduledPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
    tags: ['Domestic Scheduled Payments'],
    summary: 'Get details of a Domestic Scheduled Payment',
    description:
      'Enables a PISP to retrieve detailed information on the status of a Domestic Scheduled Payment.',
    operationId: 'GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails',
    request: {
      params: z.object({ DomesticScheduledPaymentId: DomesticScheduledPaymentIdParamsSchema }),
      headers: z.object({
        'x-fapi-auth-date': XFapiAuthDateParamsSchema,
        'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
        'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
        Authorization: AuthorizationParamsSchema,
        'x-customer-user-agent': XCustomerUserAgentParamsSchema,
        'x-client-id': XClientIdParamsSchema,
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
  tags: ['Domestic Standing Order Consents'],
  summary: 'Create a Domestic Standing Order Consent',
  description:
    'Enables a PISP to register an intent to initiate a Domestic Standing Order arrangement.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrderConsent5Schema },
        'application/json': { schema: OBWriteDomesticStandingOrderConsent5Schema },
        'application/jose+jwe': { schema: OBWriteDomesticStandingOrderConsent5Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticStandingOrderConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-standing-order-consents/{ConsentId}',
  tags: ['Domestic Standing Order Consents'],
  summary: 'Get a Domestic Standing Order Consent',
  description:
    'Enables a PISP to retrieve the status of an intent to initiate a Domestic Standing Order arrangement.',
  operationId: 'GetDomesticStandingOrderConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: 'Submit a Domestic Standing Order',
  description:
    'Enables a PISP to submit a Domestic Standing Order payment under an already PSU-approved Domestic Standing Order arrangement.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrder3Schema },
        'application/json': { schema: OBWriteDomesticStandingOrder3Schema },
        'application/jose+jwe': { schema: OBWriteDomesticStandingOrder3Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getDomesticStandingOrdersDomesticStandingOrderIdRoute = createRoute({
  method: 'get',
  path: '/domestic-standing-orders/{DomesticStandingOrderId}',
  tags: ['Domestic Standing Orders'],
  summary: 'Get a Domestic Standing Order',
  description: 'Enables a PISP to retrieve the status of a Domestic Standing Order payment.',
  operationId: 'GetDomesticStandingOrdersDomesticStandingOrderId',
  request: {
    params: z.object({ DomesticStandingOrderId: DomesticStandingOrderIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['Domestic Standing Orders'],
  summary: 'Get details of a Domestic Standing Order Payment',
  description:
    'Enables a PISP to retrieve detailed information on the status of a Domestic Standing Order payment.',
  operationId: 'GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails',
  request: {
    params: z.object({ DomesticStandingOrderId: DomesticStandingOrderIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['File Payment Consents'],
  summary: 'Create a File Payment Consent',
  description: 'Enables a PISP to register an intent to initiate a File Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteFileConsent3Schema },
        'application/json': { schema: OBWriteFileConsent3Schema },
        'application/jose+jwe': { schema: OBWriteFileConsent3Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getFilePaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/file-payment-consents/{ConsentId}',
  tags: ['File Payment Consents'],
  summary: 'Get a File Payment Consent',
  description: 'Enables a PISP to retrieve the status of an intent to initiate a File Payment.',
  operationId: 'GetFilePaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['File Payment Consents'],
  summary: "Get a File Payment Consent's Uploaded File",
  description: 'Enables a PISP to download a file that has been previously uploaded.',
  operationId: 'GetFilePaymentConsentsConsentIdFile',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['File Payment Consents'],
  summary: 'Upload a File for a ConsentId',
  description: 'Enables a PISP to upload a file of payments to the ASPSP for PSU to authenticate.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: FileSchema },
        'application/json': { schema: FileSchema },
        'application/jose+jwe': { schema: FileSchema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postFilePaymentsRoute = createRoute({
  method: 'post',
  path: '/file-payments',
  tags: ['File Payments'],
  summary: 'Submit a File Payment',
  description:
    'Enables a PISP to instruct the ASPSP to start processing the payments within the file.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteFile2Schema },
        'application/json': { schema: OBWriteFile2Schema },
        'application/jose+jwe': { schema: OBWriteFile2Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getFilePaymentsFilePaymentIdRoute = createRoute({
  method: 'get',
  path: '/file-payments/{FilePaymentId}',
  tags: ['File Payments'],
  summary: 'Get a File Payment by FilePaymentId',
  description: 'Enables a PISP to retrieve the status of a file payment.',
  operationId: 'GetFilePaymentsFilePaymentId',
  request: {
    params: z.object({ FilePaymentId: FilePaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['File Payments'],
  summary: 'Get payment details for a File Payment',
  description:
    'Enables a PISP to retrieve detailed information on the status of payments within a File.',
  operationId: 'GetFilePaymentsFilePaymentIdPaymentDetails',
  request: {
    params: z.object({ FilePaymentId: FilePaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: "Get a File Payment's Report File",
  description: 'Enables a PISP to download a payment report file from an ASPSP.',
  operationId: 'GetFilePaymentsFilePaymentIdReportFile',
  request: {
    params: z.object({ FilePaymentId: FilePaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['International Payment Consents'],
  summary: 'Create an International Payment Consent',
  description: 'Enables a PISP to register an intent to initiate an International Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteInternationalConsent5Schema },
        'application/json': { schema: OBWriteInternationalConsent5Schema },
        'application/jose+jwe': { schema: OBWriteInternationalConsent5Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/international-payment-consents/{ConsentId}',
  tags: ['International Payment Consents'],
  summary: 'Get an International Payment Consent',
  description:
    'Enables a PISP to retrieve the status of an intent to initiate an International Payment.',
  operationId: 'GetInternationalPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['International Payment Consents'],
  summary: 'Confirm Funds Availability for an International Payment',
  description:
    'Enables a PISP to check whether a PSU has sufficient available funds for an International Payment.',
  operationId: 'GetInternationalPaymentConsentsConsentIdFundsConfirmation',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: 'Initiate an International Payment',
  description: 'Enables a PISP to initiate an already PSU-approved International Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteInternational3Schema },
        'application/json': { schema: OBWriteInternational3Schema },
        'application/jose+jwe': { schema: OBWriteInternational3Schema },
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
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getInternationalPaymentsInternationalPaymentIdRoute = createRoute({
  method: 'get',
  path: '/international-payments/{InternationalPaymentId}',
  tags: ['International Payments'],
  summary: 'Get an International Payment',
  description: 'Enables a PISP to retrieve the status of an International Payment.',
  operationId: 'GetInternationalPaymentsInternationalPaymentId',
  request: {
    params: z.object({ InternationalPaymentId: InternationalPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['International Payments'],
  summary: 'Get details of an International Payment',
  description:
    'Enables a PISP to retrieve detailed information on the status of an International Payment.',
  operationId: 'GetInternationalPaymentsInternationalPaymentIdPaymentDetails',
  request: {
    params: z.object({ InternationalPaymentId: InternationalPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['International Scheduled Payments Consents'],
  summary: 'Create an International Scheduled Payment Consent',
  description:
    'Enables a PISP to register an intent to initiate an International Scheduled Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteInternationalScheduledConsent5Schema },
        'application/json': { schema: OBWriteInternationalScheduledConsent5Schema },
        'application/jose+jwe': { schema: OBWriteInternationalScheduledConsent5Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalScheduledPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/international-scheduled-payment-consents/{ConsentId}',
  tags: ['International Scheduled Payments Consents'],
  summary: 'Get an International Scheduled Payment Consent',
  description:
    'Enables a PISP to retrieve the status of an intent to initiate an International Scheduled Payment.',
  operationId: 'GetInternationalScheduledPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  tags: ['International Scheduled Payments Consents'],
  summary: 'Confirm Funds Availability for an International Scheduled Payment',
  description:
    'Enables a PISP to check whether a PSU has sufficient available funds for an International Scheduled Payment.',
  operationId: 'GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: 'Initiate an International Scheduled Payment',
  description:
    'Enables a PISP to initiate an already PSU-approved International Scheduled Payment.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteInternationalScheduled3Schema },
        'application/json': { schema: OBWriteInternationalScheduled3Schema },
        'application/jose+jwe': { schema: OBWriteInternationalScheduled3Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute = createRoute({
  method: 'get',
  path: '/international-scheduled-payments/{InternationalScheduledPaymentId}',
  tags: ['International Scheduled Payments'],
  summary: 'Get an International Scheduled Payment',
  description: 'Enables a PISP to retrieve the status of an International Scheduled Payment.',
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
      'x-client-id': XClientIdParamsSchema,
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
    tags: ['International Scheduled Payments'],
    summary: 'Get details of an International Scheduled Payment',
    description:
      'Enables a PISP to retrieve detailed information on the status of an International Scheduled Payment.',
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
        'x-client-id': XClientIdParamsSchema,
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
  tags: ['International Standing Orders Consents'],
  summary: 'Create an International Standing Order Consent',
  description:
    'Enables a PISP to register an intent to initiate an International Standing Order arrangement.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': {
          schema: OBWriteInternationalStandingOrderConsent6Schema,
        },
        'application/json': { schema: OBWriteInternationalStandingOrderConsent6Schema },
        'application/jose+jwe': { schema: OBWriteInternationalStandingOrderConsent6Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalStandingOrderConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/international-standing-order-consents/{ConsentId}',
  tags: ['International Standing Orders Consents'],
  summary: 'Get an International Standing Order Consent',
  description:
    'Enables a PISP to retrieve the status of an intent to initiate an International Standing Order arrangement.',
  operationId: 'GetInternationalStandingOrderConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
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
  summary: 'Submit an International Standing Order',
  description:
    'Enables a PISP to submit an International Standing Order payment under an already PSU-approved International Standing Order arrangement.',
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
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBWriteInternationalStandingOrder4Schema },
        'application/json': { schema: OBWriteInternationalStandingOrder4Schema },
        'application/jose+jwe': { schema: OBWriteInternationalStandingOrder4Schema },
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
    409: _409ErrorResponse,
    415: _415ErrorResponse,
    422: _422ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute = createRoute({
  method: 'get',
  path: '/international-standing-orders/{InternationalStandingOrderPaymentId}',
  tags: ['International Standing Orders'],
  summary: 'Get an International Standing Order',
  description: 'Enables a PISP to retrieve the status of an International Standing Order payment.',
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
      'x-client-id': XClientIdParamsSchema,
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
    tags: ['International Standing Orders'],
    summary: 'Get details of an International Standing Order Payment',
    description:
      'Enables a PISP to retrieve detailed information on the status of an International Standing Order payment.',
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
        'x-client-id': XClientIdParamsSchema,
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
