import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
  })
  .openapi('AccountId')

const ActiveOrHistoricCurrencyCode_0Schema = z
  .string()
  .regex(/^[A-Z]{3,3}$/)
  .openapi({
    description:
      'Identification of the currency in which the account is held. \nUsage: Currency should only be used in case one and the same account number covers several currencies\nand the initiating party needs to identify which currency needs to be used for settlement on the account.',
  })
  .openapi('ActiveOrHistoricCurrencyCode_0')

const ActiveOrHistoricCurrencyCode_1Schema = z
  .string()
  .regex(/^[A-Z]{3,3}$/)
  .openapi({
    description:
      'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
  })
  .openapi('ActiveOrHistoricCurrencyCode_1')

const AddressLineSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({
    description:
      'Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.',
  })
  .openapi('AddressLine')

const BeneficiaryIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.',
  })
  .openapi('BeneficiaryId')

const BookingDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      "Date and time when a transaction entry is posted to an account on the account servicer's books.\nUsage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
  })
  .openapi('BookingDateTime')

const BuildingNumberSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({ description: 'Number that identifies the position of a building on a street.' })
  .openapi('BuildingNumber')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2,2}$/)
  .openapi({ description: 'Nation with its own government, occupying a particular territory.' })
  .openapi('CountryCode')

const CountrySubDivisionSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Identifies a subdivision of a country eg, state, region, county.' })
  .openapi('CountrySubDivision')

const CreationDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('CreationDateTime')

const DateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('DateTime')

const DebtorReferenceSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'A reference value provided by the PSU to the PISP while setting up the scheduled payment.',
  })
  .openapi('DebtorReference')

const Description_0Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Specifies the description of the account type.' })
  .openapi('Description_0')

const Description_1Schema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ description: 'Description that may be available for the statement fee.' })
  .openapi('Description_1')

const Description_2Schema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ description: 'Description that may be available for the statement interest.' })
  .openapi('Description_2')

const Description_3Schema = z
  .string()
  .min(1)
  .max(350)
  .openapi({ description: 'Description to describe the purpose of the code' })
  .openapi('Description_3')

const DirectDebitIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.',
  })
  .openapi('DirectDebitId')

const EmailAddressSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ description: 'Address for electronic mail (e-mail).' })
  .openapi('EmailAddress')

const EndDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('EndDateTime')

const FileSchema = z.object({}).openapi('File')

const FinalPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('FinalPaymentDateTime')

const FirstPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('FirstPaymentDateTime')

const Frequency_0Schema = z
  .string()
  .regex(
    /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
  )
  .openapi({
    description:
      'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)\nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
  })
  .openapi('Frequency_0')

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

const FullLegalNameSchema = z
  .string()
  .min(1)
  .max(350)
  .openapi({ description: 'Specifies a character string with a maximum length of 350 characters.' })
  .openapi('FullLegalName')

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
  .openapi({ description: 'Unique and unambiguous identification of the servicing institution.' })
  .openapi('Identification_1')

const Identification_2Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Unique and unambiguous identification of a financial institution or a branch of a financial institution.',
  })
  .openapi('Identification_2')

const LastPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('LastPaymentDateTime')

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

const MandateIdentificationSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.',
  })
  .openapi('MandateIdentification')

const MaturityDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('MaturityDate')

const MetaSchema = z
  .strictObject({
    FirstAvailableDateTime: ISODateTimeSchema.exactOptional(),
    LastAvailableDateTime: ISODateTimeSchema.exactOptional(),
    TotalPages: z.int32().exactOptional(),
  })
  .openapi({ description: 'Meta Data relevant to the payload', title: 'MetaData', required: [] })
  .openapi('Meta')

const ModelSchema = z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Model')

const Name_0Schema = z
  .string()
  .min(1)
  .max(350)
  .openapi({
    description:
      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
  })
  .openapi('Name_0')

const Name_1Schema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      'Name by which an agent is known and which is usually used to identify that agent.',
  })
  .openapi('Name_1')

const Name_2Schema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Name of Service User.' })
  .openapi('Name_2')

const Name_3Schema = z
  .string()
  .min(1)
  .max(350)
  .openapi({
    description: 'Name by which a party is known and which is usually used to identify that party.',
  })
  .openapi('Name_3')

const Name_4Schema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Long name associated with the code' })
  .openapi('Name_4')

const NextPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('NextPaymentDateTime')

const NicknameSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({
    description:
      'The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.',
  })
  .openapi('Nickname')

const NumberOfPaymentsSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
  })
  .openapi('NumberOfPayments')

const Number_0Schema = z
  .int()
  .openapi({
    description:
      'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.',
  })
  .openapi('Number_0')

const Number_1Schema = z
  .int()
  .openapi({
    description:
      'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
  })
  .openapi('Number_1')

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

const SecondaryIdentificationSchema = z
  .string()
  .min(1)
  .max(34)
  .openapi({
    description:
      'This is secondary identification of the account, as assigned by the account servicing institution. \nThis can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
  })
  .openapi('SecondaryIdentification')

const OBExternalAccountSubType1CodeSchema = z
  .enum([
    'ChargeCard',
    'CreditCard',
    'CurrentAccount',
    'EMoney',
    'Loan',
    'Mortgage',
    'PrePaidCard',
    'Savings',
  ])
  .openapi({ description: 'Specifies the sub type of account (product family group).' })
  .openapi('OBExternalAccountSubType1Code')

const OBExternalAccountType1CodeSchema = z
  .enum(['Business', 'Personal'])
  .openapi({ description: 'Specifies the type of account (personal or business).' })
  .openapi('OBExternalAccountType1Code')

const OBExternalFinancialInstitutionIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list.',
    'x-namespaced-enum': ['UK.OBIE.BICFI'],
  })
  .openapi('OBExternalFinancialInstitutionIdentification4Code')

const OBBranchAndFinancialInstitutionIdentification5_0Schema = z
  .object({
    Identification: Identification_1Schema,
    SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema,
  })
  .openapi({
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.',
    required: ['SchemeName', 'Identification'],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification5_0')

const OBAccountStatus1CodeSchema = z
  .enum(['Deleted', 'Disabled', 'Enabled', 'Pending', 'ProForma'])
  .openapi({ description: 'Specifies the status of account resource in code form.' })
  .openapi('OBAccountStatus1Code')

const StatusUpdateDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('StatusUpdateDateTime')

const OBAccount4Schema = z
  .object({
    Account: z
      .array(
        z
          .object({
            Identification: Identification_0Schema,
            Name: Name_0Schema.exactOptional(),
            SchemeName: OBExternalAccountIdentification4CodeSchema,
            SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
          })
          .openapi({
            description: 'Provides the details to identify an account.',
            required: ['SchemeName', 'Identification'],
          }),
      )
      .exactOptional(),
    AccountId: AccountIdSchema,
    AccountSubType: OBExternalAccountSubType1CodeSchema,
    AccountType: OBExternalAccountType1CodeSchema,
    Currency: ActiveOrHistoricCurrencyCode_0Schema,
    Description: Description_0Schema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    Servicer: OBBranchAndFinancialInstitutionIdentification5_0Schema.exactOptional(),
    Status: OBAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'Currency', 'AccountType', 'AccountSubType'],
  })
  .openapi('OBAccount4')

const OBAccount4BasicSchema = z
  .object({
    AccountId: AccountIdSchema,
    AccountSubType: OBExternalAccountSubType1CodeSchema,
    AccountType: OBExternalAccountType1CodeSchema,
    Currency: ActiveOrHistoricCurrencyCode_0Schema,
    Description: Description_0Schema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    Status: OBAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'Currency', 'AccountType', 'AccountSubType'],
  })
  .openapi('OBAccount4Basic')

const OBAccount4DetailSchema = z
  .object({
    Account: z.array(
      z
        .object({
          Identification: Identification_0Schema,
          Name: Name_0Schema.exactOptional(),
          SchemeName: OBExternalAccountIdentification4CodeSchema,
          SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
        })
        .openapi({
          description: 'Provides the details to identify an account.',
          required: ['SchemeName', 'Identification'],
        }),
    ),
    AccountId: AccountIdSchema,
    AccountSubType: OBExternalAccountSubType1CodeSchema,
    AccountType: OBExternalAccountType1CodeSchema,
    Currency: ActiveOrHistoricCurrencyCode_0Schema,
    Description: Description_0Schema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    Servicer: OBBranchAndFinancialInstitutionIdentification5_0Schema.exactOptional(),
    Status: OBAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'Currency', 'AccountType', 'AccountSubType', 'Account'],
  })
  .openapi('OBAccount4Detail')

const OpeningDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('OpeningDate')

const OBExternalSwitchStatusCodeSchema = z
  .string()
  .openapi({
    description: 'Specifies the switch status for the account, in a coded form.',
    'x-namespaced-enum': ['UK.CASS.NotSwitced', 'UK.CASS.SwitchCompleted'],
  })
  .openapi('OBExternalSwitchStatusCode')

const OBAccount6Schema = z
  .strictObject({
    Account: z
      .array(
        z
          .object({
            Identification: Identification_0Schema,
            Name: Name_0Schema.exactOptional(),
            SchemeName: OBExternalAccountIdentification4CodeSchema,
            SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
          })
          .openapi({
            description: 'Provides the details to identify an account.',
            required: ['SchemeName', 'Identification'],
          }),
      )
      .exactOptional(),
    AccountId: AccountIdSchema,
    AccountSubType: OBExternalAccountSubType1CodeSchema.exactOptional(),
    AccountType: OBExternalAccountType1CodeSchema.exactOptional(),
    Currency: ActiveOrHistoricCurrencyCode_0Schema.exactOptional(),
    Description: Description_0Schema.exactOptional(),
    MaturityDate: MaturityDateSchema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    OpeningDate: OpeningDateSchema.exactOptional(),
    Servicer: OBBranchAndFinancialInstitutionIdentification5_0Schema.exactOptional(),
    Status: OBAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
    SwitchStatus: OBExternalSwitchStatusCodeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:\n\n  * Data.Currency  \n  * Data.AccountType  \n  * Data.AccountSubType\n\nFor all other accounts, the fields must be populated by the ASPSP.',
    required: ['AccountId'],
  })
  .openapi('OBAccount6')

const OBAccount6BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    AccountSubType: OBExternalAccountSubType1CodeSchema,
    AccountType: OBExternalAccountType1CodeSchema,
    Currency: ActiveOrHistoricCurrencyCode_0Schema,
    Description: Description_0Schema.exactOptional(),
    MaturityDate: MaturityDateSchema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    OpeningDate: OpeningDateSchema.exactOptional(),
    Status: OBAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
    SwitchStatus: OBExternalSwitchStatusCodeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'Currency', 'AccountType', 'AccountSubType'],
  })
  .openapi('OBAccount6Basic')

const OBAccount6DetailSchema = z
  .strictObject({
    Account: z.array(
      z
        .object({
          Identification: Identification_0Schema,
          Name: Name_0Schema.exactOptional(),
          SchemeName: OBExternalAccountIdentification4CodeSchema,
          SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
        })
        .openapi({
          description: 'Provides the details to identify an account.',
          required: ['SchemeName', 'Identification'],
        }),
    ),
    AccountId: AccountIdSchema,
    AccountSubType: OBExternalAccountSubType1CodeSchema,
    AccountType: OBExternalAccountType1CodeSchema,
    Currency: ActiveOrHistoricCurrencyCode_0Schema,
    Description: Description_0Schema.exactOptional(),
    MaturityDate: MaturityDateSchema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    OpeningDate: OpeningDateSchema.exactOptional(),
    Servicer: OBBranchAndFinancialInstitutionIdentification5_0Schema.exactOptional(),
    Status: OBAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
    SwitchStatus: OBExternalSwitchStatusCodeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'Currency', 'AccountType', 'AccountSubType', 'Account'],
  })
  .openapi('OBAccount6Detail')

const OBActiveCurrencyAndAmountSimpleTypeSchema = z
  .string()
  .regex(/^\d{1,13}$|^\d{1,13}\.\d{1,5}$/)
  .openapi({
    description:
      'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
  })
  .openapi('OBActiveCurrencyAndAmountSimpleType')

const OBActiveOrHistoricCurrencyAndAmount_0Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'The amount of the most recent direct debit collection.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_0')

const OBActiveOrHistoricCurrencyAndAmount_1Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description:
      'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_1')

const OBActiveOrHistoricCurrencyAndAmount_10Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'Transaction charges to be paid by the charge bearer.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_10')

const OBActiveOrHistoricCurrencyAndAmount_11Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'The amount of the last (most recent) Standing Order instruction.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_11')

const OBActiveOrHistoricCurrencyAndAmount_2Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'The amount of the first Standing Order',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_2')

const OBActiveOrHistoricCurrencyAndAmount_3Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'The amount of the next Standing Order.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_3')

const OBActiveOrHistoricCurrencyAndAmount_4Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'The amount of the final Standing Order',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_4')

const OBActiveOrHistoricCurrencyAndAmount_5Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'Amount of money associated with the statement benefit type.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_5')

const OBActiveOrHistoricCurrencyAndAmount_6Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'Amount of money associated with the statement fee type.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_6')

const OBActiveOrHistoricCurrencyAndAmount_7Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'Amount of money associated with the statement interest amount type.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_7')

const OBActiveOrHistoricCurrencyAndAmount_8Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'Amount of money associated with the amount type.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_8')

const OBActiveOrHistoricCurrencyAndAmount_9Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    description: 'Amount of money in the cash transaction entry.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_9')

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

const OBBCAData1Schema = z
  .strictObject({
    CreditInterest: z
      .strictObject({
        TierBandSet: z
          .array(
            z
              .object({
                CalculationMethod: z
                  .enum(['Compound', 'SimpleInterest'])
                  .exactOptional()
                  .openapi({
                    description: 'Methods of calculating interest',
                    title: 'CalculationMethod',
                  }),
                Destination: z
                  .enum(['PayAway', 'SelfCredit'])
                  .openapi({
                    description:
                      'Describes whether accrued interest is payable only to the BCA or to another bank account',
                    title: 'Destination',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the Tier Band Set details',
                    title: 'Notes',
                  }),
                TierBand: z
                  .array(
                    z
                      .object({
                        AER: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \n\nRead more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A',
                            title: 'AER',
                          }),
                        ApplicationFrequency: z
                          .enum([
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .openapi({
                            description:
                              "How often is interest applied to the BCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's BCA.",
                            title: 'ApplicationFrequency',
                          }),
                        BankInterestRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Bank Interest for the BCA product',
                            title: 'BankInterestRate',
                          }),
                        BankInterestRateType: z
                          .enum(['Gross', 'Other'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the BCA.',
                            title: 'BankInterestRateType',
                          }),
                        CalculationFrequency: z
                          .enum([
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description: 'How often is credit interest calculated for the account.',
                            title: 'CalculationFrequency',
                          }),
                        DepositInterestAppliedCoverage: z
                          .enum(['Banded', 'Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description: 'Amount on which Interest applied.',
                            title: 'DepositInterestAppliedCoverage',
                          }),
                        FixedVariableInterestRateType: z
                          .enum(['Fixed', 'Variable'])
                          .openapi({
                            description: 'Type of interest rate, Fixed or Variable',
                            title: 'FixedVariableInterestRateType',
                          }),
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a BCA.',
                            title: 'Identification',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier Band details',
                            title: 'Notes',
                          }),
                        OtherApplicationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other application frequencies that are not available in the standard code list',
                            required: ['Name', 'Description'],
                            title: 'OtherApplicationFrequency',
                          }),
                        OtherBankInterestType: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other interest rate types which are not available in the standard code list',
                            required: ['Name', 'Description'],
                            title: 'OtherBankInterestType',
                          }),
                        OtherCalculationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other calculation frequency which is not available in the standard code set.',
                            required: ['Name', 'Description'],
                            title: 'OtherCalculationFrequency',
                          }),
                        TierValueMaximum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMaximum',
                          }),
                        TierValueMinimum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'Minimum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMinimum',
                          }),
                      })
                      .openapi({
                        description: 'Tier Band Details',
                        required: [
                          'TierValueMinimum',
                          'ApplicationFrequency',
                          'FixedVariableInterestRateType',
                          'AER',
                        ],
                      }),
                  )
                  .min(1)
                  .openapi({ description: 'Tier Band Details', title: 'TierBand' }),
                TierBandMethod: z
                  .enum(['Banded', 'Tiered', 'Whole'])
                  .openapi({
                    description:
                      'The methodology of how credit interest is paid/applied. It can be:-\n\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n\n3. Whole\nThe same interest rate is applied irrespective of the BCA balance',
                    title: 'TierBandMethod',
                  }),
              })
              .openapi({
                description:
                  'The group of tiers or bands for which credit interest can be applied.',
                required: ['TierBandMethod', 'Destination', 'TierBand'],
              }),
          )
          .min(1)
          .openapi({
            description: 'The group of tiers or bands for which credit interest can be applied.',
            title: 'TierBandSet',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Details about the interest that may be payable to the BCA account holders',
        required: ['TierBandSet'],
        title: 'CreditInterest',
      }),
    OtherFeesCharges: z
      .array(
        z
          .object({
            FeeChargeCap: z
              .array(
                z
                  .object({
                    CappingPeriod: z
                      .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                      .exactOptional()
                      .openapi({
                        description:
                          'Period e.g. day, week, month etc. for which the fee/charge is capped',
                        title: 'CappingPeriod',
                      }),
                    FeeCapAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                        title: 'FeeCapAmount',
                      }),
                    FeeCapOccurrence: z
                      .float32()
                      .exactOptional()
                      .openapi({
                        description:
                          'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                        title: 'FeeCapOccurrence',
                      }),
                    FeeType: z
                      .array(
                        z
                          .enum([
                            'Other',
                            'ServiceCAccountFee',
                            'ServiceCAccountFeeMonthly',
                            'ServiceCAccountFeeQuarterly',
                            'ServiceCFixedTariff',
                            'ServiceCBusiDepAccBreakage',
                            'ServiceCMinimumMonthlyFee',
                            'ServiceCOther',
                          ])
                          .openapi({ description: 'Fee/charge type which is being capped' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Fee/charge type which is being capped',
                        title: 'FeeType',
                      }),
                    MinMaxType: z
                      .enum(['Minimum', 'Maximum'])
                      .openapi({ description: 'Min Max type', title: 'MinMaxType' }),
                    Notes: z
                      .array(
                        z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Free text for adding  extra details for fee charge cap',
                        title: 'Notes',
                      }),
                    OtherFeeType: z
                      .array(
                        z
                          .object({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .openapi({
                            description:
                              'Other fee type code which is not available in the standard code set',
                            required: ['Name', 'Description'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Other fee type code which is not available in the standard code set',
                        title: 'OtherFeeType',
                      }),
                  })
                  .openapi({
                    description:
                      'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                    required: ['FeeType', 'MinMaxType'],
                  }),
              )
              .exactOptional()
              .openapi({
                description:
                  'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                title: 'FeeChargeCap',
              }),
            FeeChargeDetail: z
              .array(
                z
                  .object({
                    ApplicationFrequency: z
                      .enum([
                        'OnClosing',
                        'OnOpening',
                        'ChargingPeriod',
                        'Daily',
                        'PerItem',
                        'Monthly',
                        'OnAnniversary',
                        'Other',
                        'PerHundredPounds',
                        'PerHour',
                        'PerOccurrence',
                        'PerSheet',
                        'PerTransaction',
                        'PerTransactionAmount',
                        'PerTransactionPercentage',
                        'Quarterly',
                        'SixMonthly',
                        'StatementMonthly',
                        'Weekly',
                        'Yearly',
                      ])
                      .openapi({
                        description: 'How frequently the fee/charge is applied to the account',
                        title: 'ApplicationFrequency',
                      }),
                    CalculationFrequency: z
                      .enum([
                        'OnClosing',
                        'OnOpening',
                        'ChargingPeriod',
                        'Daily',
                        'PerItem',
                        'Monthly',
                        'OnAnniversary',
                        'Other',
                        'PerHundredPounds',
                        'PerHour',
                        'PerOccurrence',
                        'PerSheet',
                        'PerTransaction',
                        'PerTransactionAmount',
                        'PerTransactionPercentage',
                        'Quarterly',
                        'SixMonthly',
                        'StatementMonthly',
                        'Weekly',
                        'Yearly',
                      ])
                      .exactOptional()
                      .openapi({
                        description: 'How frequently the fee/charge is calculated',
                        title: 'CalculationFrequency',
                      }),
                    FeeAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                        title: 'FeeAmount',
                      }),
                    FeeApplicableRange: z
                      .strictObject({
                        MaximumAmount: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum Amount on which fee is applicable (where it is expressed as an amount)',
                            title: 'MaximumAmount',
                          }),
                        MaximumRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum rate on which fee/charge is applicable(where it is expressed as an rate)',
                            title: 'MaximumRate',
                          }),
                        MinimumAmount: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)',
                            title: 'MinimumAmount',
                          }),
                        MinimumRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum rate on which fee/charge is applicable(where it is expressed as an rate)',
                            title: 'MinimumRate',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Range or amounts or rates for which the fee/charge applies',
                        title: 'FeeApplicableRange',
                        required: [],
                      }),
                    FeeCategory: z
                      .enum(['Other', 'Servicing'])
                      .openapi({
                        description: 'Categorisation of fees and charges into standard categories.',
                        title: 'FeeCategory',
                      }),
                    FeeChargeCap: z
                      .array(
                        z
                          .object({
                            CappingPeriod: z
                              .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                title: 'CappingPeriod',
                              }),
                            FeeCapAmount: z
                              .string()
                              .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                                title: 'FeeCapAmount',
                              }),
                            FeeCapOccurrence: z
                              .float32()
                              .exactOptional()
                              .openapi({
                                description:
                                  'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                title: 'FeeCapOccurrence',
                              }),
                            FeeType: z
                              .array(
                                z
                                  .enum([
                                    'Other',
                                    'ServiceCAccountFee',
                                    'ServiceCAccountFeeMonthly',
                                    'ServiceCAccountFeeQuarterly',
                                    'ServiceCFixedTariff',
                                    'ServiceCBusiDepAccBreakage',
                                    'ServiceCMinimumMonthlyFee',
                                    'ServiceCOther',
                                  ])
                                  .openapi({
                                    description: 'Fee/charge type which is being capped',
                                  }),
                              )
                              .min(1)
                              .openapi({
                                description: 'Fee/charge type which is being capped',
                                title: 'FeeType',
                              }),
                            MinMaxType: z
                              .enum(['Minimum', 'Maximum'])
                              .openapi({ description: 'Min Max type', title: 'MinMaxType' }),
                            Notes: z
                              .array(
                                z
                                  .string()
                                  .min(1)
                                  .max(2000)
                                  .openapi({ description: 'maxLength 2000 text' }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Free text for adding  extra details for fee charge cap',
                                title: 'Notes',
                              }),
                            OtherFeeType: z
                              .array(
                                z
                                  .object({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Other fee type code which is not available in the standard code set',
                                    required: ['Name', 'Description'],
                                  }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Other fee type code which is not available in the standard code set',
                                title: 'OtherFeeType',
                              }),
                          })
                          .openapi({
                            description:
                              'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                            required: ['FeeType', 'MinMaxType'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                        title: 'FeeChargeCap',
                      }),
                    FeeRate: z
                      .string()
                      .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                        title: 'FeeRate',
                      }),
                    FeeRateType: z
                      .enum(['Gross', 'Other'])
                      .exactOptional()
                      .openapi({
                        description:
                          'Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                        title: 'FeeRateType',
                      }),
                    FeeType: z
                      .enum([
                        'Other',
                        'ServiceCAccountFee',
                        'ServiceCAccountFeeMonthly',
                        'ServiceCAccountFeeQuarterly',
                        'ServiceCFixedTariff',
                        'ServiceCBusiDepAccBreakage',
                        'ServiceCMinimumMonthlyFee',
                        'ServiceCOther',
                      ])
                      .openapi({ description: 'Fee/Charge Type', title: 'FeeType' }),
                    NegotiableIndicator: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Fee/charge which is usually negotiable rather than a fixed amount',
                        title: 'NegotiableIndicator',
                      }),
                    Notes: z
                      .array(
                        z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Optional additional notes to supplement the fee/charge details.',
                        title: 'Notes',
                      }),
                    OtherApplicationFrequency: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other application frequencies not covered in the standard code list',
                        required: ['Name', 'Description'],
                        title: 'OtherApplicationFrequency',
                      }),
                    OtherCalculationFrequency: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other calculation frequency which is not available in standard code set.',
                        required: ['Name', 'Description'],
                        title: 'OtherCalculationFrequency',
                      }),
                    OtherFeeCategoryType: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        required: ['Name', 'Description'],
                        title: 'OtherFeeCategoryType',
                      }),
                    OtherFeeRateType: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other fee rate type which is not available in the standard code set',
                        required: ['Name', 'Description'],
                        title: 'OtherFeeRateType',
                      }),
                    OtherFeeType: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                        FeeCategory: z
                          .enum(['Other', 'Servicing'])
                          .openapi({
                            description:
                              'Categorisation of fees and charges into standard categories.',
                            title: 'FeeCategory',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other Fee/charge type which is not available in the standard code set',
                        required: ['FeeCategory', 'Name', 'Description'],
                        title: 'OtherFeeType',
                      }),
                  })
                  .openapi({
                    description: 'Other fees/charges details',
                    required: ['FeeCategory', 'FeeType', 'ApplicationFrequency'],
                  }),
              )
              .min(1)
              .openapi({ description: 'Other fees/charges details', title: 'FeeChargeDetail' }),
            OtherTariffType: z
              .strictObject({
                Code: z
                  .string()
                  .regex(/^\w{0,4}$/)
                  .min(0)
                  .max(4)
                  .exactOptional()
                  .openapi({
                    description:
                      'The four letter Mnemonic used within an XML file to identify a code',
                    title: 'Code',
                  }),
                Description: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description: 'Description to describe the purpose of the code',
                    title: 'Description',
                  }),
                Name: z
                  .string()
                  .min(1)
                  .max(70)
                  .openapi({ description: 'Long name associated with the code', title: 'Name' }),
              })
              .exactOptional()
              .openapi({
                description: 'Other tariff type which is not in the standard list.',
                required: ['Name', 'Description'],
                title: 'OtherTariffType',
              }),
            TariffName: z
              .string()
              .min(1)
              .max(350)
              .exactOptional()
              .openapi({ description: 'Name of the tariff', title: 'TariffName' }),
            TariffType: z
              .enum(['Electronic', 'Mixed', 'Other'])
              .exactOptional()
              .openapi({
                description: 'TariffType which defines the fee and charges.',
                title: 'TariffType',
              }),
          })
          .openapi({
            description:
              'Contains details of fees and charges which are not associated with either Overdraft or features/benefits',
            required: ['FeeChargeDetail'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Contains details of fees and charges which are not associated with either Overdraft or features/benefits',
        title: 'OtherFeesCharges',
      }),
    Overdraft: z
      .strictObject({
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({ description: 'Associated Notes about the overdraft rates', title: 'Notes' }),
        OverdraftTierBandSet: z
          .array(
            z
              .object({
                AuthorisedIndicator: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Indicates if the Overdraft is authorised (Y) or unauthorised (N)',
                    title: 'AuthorisedIndicator',
                  }),
                BufferAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.',
                    title: 'BufferAmount',
                  }),
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of a  Tier Band for a overdraft product.',
                    title: 'Identification',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the overdraft Tier Band Set details',
                    title: 'Notes',
                  }),
                OverdraftFeesCharges: z
                  .array(
                    z
                      .object({
                        OverdraftFeeChargeCap: z
                          .array(
                            z
                              .object({
                                CappingPeriod: z
                                  .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                    title: 'CappingPeriod',
                                  }),
                                FeeCapAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description: 'Cap amount charged for a fee/charge',
                                    title: 'FeeCapAmount',
                                  }),
                                FeeCapOccurrence: z
                                  .float32()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                    title: 'FeeCapOccurrence',
                                  }),
                                FeeType: z
                                  .array(
                                    z
                                      .enum([
                                        'ArrangedOverdraft',
                                        'AnnualReview',
                                        'EmergencyBorrowing',
                                        'BorrowingItem',
                                        'OverdraftRenewal',
                                        'OverdraftSetup',
                                        'Surcharge',
                                        'TempOverdraft',
                                        'UnauthorisedBorrowing',
                                        'UnauthorisedPaidTrans',
                                        'Other',
                                        'UnauthorisedUnpaidTrans',
                                      ])
                                      .openapi({ description: 'Overdraft fee type' }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Fee/charge type which is being capped',
                                    title: 'FeeType',
                                  }),
                                MinMaxType: z
                                  .enum(['Minimum', 'Maximum'])
                                  .openapi({ description: 'Min Max type', title: 'MinMaxType' }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Notes related to Overdraft fee charge cap',
                                    title: 'Notes',
                                  }),
                                OtherFeeType: z
                                  .array(
                                    z
                                      .object({
                                        Code: z
                                          .string()
                                          .regex(/^\w{0,4}$/)
                                          .min(0)
                                          .max(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The four letter Mnemonic used within an XML file to identify a code',
                                            title: 'Code',
                                          }),
                                        Description: z
                                          .string()
                                          .min(1)
                                          .max(350)
                                          .openapi({
                                            description:
                                              'Description to describe the purpose of the code',
                                            title: 'Description',
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(70)
                                          .openapi({
                                            description: 'Long name associated with the code',
                                            title: 'Name',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Other fee type code which is not available in the standard code set',
                                        required: ['Name', 'Description'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee type code which is not available in the standard code set',
                                    title: 'OtherFeeType',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                required: ['FeeType', 'MinMaxType'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                            title: 'OverdraftFeeChargeCap',
                          }),
                        OverdraftFeeChargeDetail: z
                          .array(
                            z
                              .object({
                                ApplicationFrequency: z
                                  .enum([
                                    'OnClosing',
                                    'OnOpening',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAnniversary',
                                    'Other',
                                    'PerHundredPounds',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .openapi({
                                    description:
                                      'Frequency at which the overdraft charge is applied to the account',
                                    title: 'ApplicationFrequency',
                                  }),
                                CalculationFrequency: z
                                  .enum([
                                    'OnClosing',
                                    'OnOpening',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAnniversary',
                                    'Other',
                                    'PerHundredPounds',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'How often is the overdraft fee/charge calculated for the account.',
                                    title: 'CalculationFrequency',
                                  }),
                                FeeAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                    title: 'FeeAmount',
                                  }),
                                FeeRate: z
                                  .string()
                                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRate',
                                  }),
                                FeeRateType: z
                                  .enum(['Gross', 'Other'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRateType',
                                  }),
                                FeeType: z
                                  .enum([
                                    'ArrangedOverdraft',
                                    'AnnualReview',
                                    'EmergencyBorrowing',
                                    'BorrowingItem',
                                    'OverdraftRenewal',
                                    'OverdraftSetup',
                                    'Surcharge',
                                    'TempOverdraft',
                                    'UnauthorisedBorrowing',
                                    'UnauthorisedPaidTrans',
                                    'Other',
                                    'UnauthorisedUnpaidTrans',
                                  ])
                                  .openapi({ description: 'Overdraft fee type', title: 'FeeType' }),
                                IncrementalBorrowingAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                    title: 'IncrementalBorrowingAmount',
                                  }),
                                NegotiableIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Indicates whether fee and charges are negotiable',
                                    title: 'NegotiableIndicator',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                    title: 'Notes',
                                  }),
                                OtherApplicationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other application frequencies that are not available in the standard code list',
                                    required: ['Name', 'Description'],
                                    title: 'OtherApplicationFrequency',
                                  }),
                                OtherCalculationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other calculation frequency which is not available in the standard code set.',
                                    required: ['Name', 'Description'],
                                    title: 'OtherCalculationFrequency',
                                  }),
                                OtherFeeRateType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee rate type code which is not available in the standard code set',
                                    required: ['Name', 'Description'],
                                    title: 'OtherFeeRateType',
                                  }),
                                OtherFeeType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other Fee type which is not available in the standard code set',
                                    required: ['Name', 'Description'],
                                    title: 'OtherFeeType',
                                  }),
                                OverdraftControlIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                    title: 'OverdraftControlIndicator',
                                  }),
                                OverdraftFeeChargeCap: z
                                  .array(
                                    z
                                      .object({
                                        CappingPeriod: z
                                          .enum([
                                            'Day',
                                            'Half Year',
                                            'Month',
                                            'Quarter',
                                            'Week',
                                            'Year',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                            title: 'CappingPeriod',
                                          }),
                                        FeeCapAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Cap amount charged for a fee/charge',
                                            title: 'FeeCapAmount',
                                          }),
                                        FeeCapOccurrence: z
                                          .float32()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                            title: 'FeeCapOccurrence',
                                          }),
                                        FeeType: z
                                          .array(
                                            z
                                              .enum([
                                                'ArrangedOverdraft',
                                                'AnnualReview',
                                                'EmergencyBorrowing',
                                                'BorrowingItem',
                                                'OverdraftRenewal',
                                                'OverdraftSetup',
                                                'Surcharge',
                                                'TempOverdraft',
                                                'UnauthorisedBorrowing',
                                                'UnauthorisedPaidTrans',
                                                'Other',
                                                'UnauthorisedUnpaidTrans',
                                              ])
                                              .openapi({ description: 'Overdraft fee type' }),
                                          )
                                          .min(1)
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                            title: 'FeeType',
                                          }),
                                        MinMaxType: z
                                          .enum(['Minimum', 'Maximum'])
                                          .openapi({
                                            description: 'Min Max type',
                                            title: 'MinMaxType',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Notes related to Overdraft fee charge cap',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .array(
                                            z
                                              .object({
                                                Code: z
                                                  .string()
                                                  .regex(/^\w{0,4}$/)
                                                  .min(0)
                                                  .max(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'The four letter Mnemonic used within an XML file to identify a code',
                                                    title: 'Code',
                                                  }),
                                                Description: z
                                                  .string()
                                                  .min(1)
                                                  .max(350)
                                                  .openapi({
                                                    description:
                                                      'Description to describe the purpose of the code',
                                                    title: 'Description',
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(70)
                                                  .openapi({
                                                    description:
                                                      'Long name associated with the code',
                                                    title: 'Name',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                required: ['Name', 'Description'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                        required: ['FeeType', 'MinMaxType'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                              })
                              .openapi({
                                description: 'Details about the fees/charges',
                                required: ['FeeType', 'ApplicationFrequency'],
                              }),
                          )
                          .min(1)
                          .openapi({
                            description: 'Details about the fees/charges',
                            title: 'OverdraftFeeChargeDetail',
                          }),
                      })
                      .openapi({
                        description: 'Overdraft fees and charges details',
                        required: ['OverdraftFeeChargeDetail'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Overdraft fees and charges details',
                    title: 'OverdraftFeesCharges',
                  }),
                OverdraftTierBand: z
                  .array(
                    z
                      .object({
                        AgreementLengthMax: z
                          .float32()
                          .exactOptional()
                          .openapi({
                            description:
                              'Specifies the maximum length of a band for a fixed overdraft agreement',
                            title: 'AgreementLengthMax',
                          }),
                        AgreementLengthMin: z
                          .float32()
                          .exactOptional()
                          .openapi({
                            description:
                              'Specifies the minimum length of a band for a fixed overdraft agreement',
                            title: 'AgreementLengthMin',
                          }),
                        AgreementPeriod: z
                          .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Specifies the period of a fixed length overdraft agreement',
                            title: 'AgreementPeriod',
                          }),
                        BankGuaranteedIndicator: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                            title: 'BankGuaranteedIndicator',
                          }),
                        EAR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently\nused interchangeably), being the actual annual interest rate of an Overdraft.',
                            title: 'EAR',
                          }),
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a overdraft.',
                            title: 'Identification',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier/band details',
                            title: 'Notes',
                          }),
                        OverdraftFeesCharges: z
                          .array(
                            z
                              .object({
                                OverdraftFeeChargeCap: z
                                  .array(
                                    z
                                      .object({
                                        CappingPeriod: z
                                          .enum([
                                            'Day',
                                            'Half Year',
                                            'Month',
                                            'Quarter',
                                            'Week',
                                            'Year',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                            title: 'CappingPeriod',
                                          }),
                                        FeeCapAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Cap amount charged for a fee/charge',
                                            title: 'FeeCapAmount',
                                          }),
                                        FeeCapOccurrence: z
                                          .float32()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                            title: 'FeeCapOccurrence',
                                          }),
                                        FeeType: z
                                          .array(
                                            z
                                              .enum([
                                                'ArrangedOverdraft',
                                                'AnnualReview',
                                                'EmergencyBorrowing',
                                                'BorrowingItem',
                                                'OverdraftRenewal',
                                                'OverdraftSetup',
                                                'Surcharge',
                                                'TempOverdraft',
                                                'UnauthorisedBorrowing',
                                                'UnauthorisedPaidTrans',
                                                'Other',
                                                'UnauthorisedUnpaidTrans',
                                              ])
                                              .openapi({ description: 'Overdraft fee type' }),
                                          )
                                          .min(1)
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                            title: 'FeeType',
                                          }),
                                        MinMaxType: z
                                          .enum(['Minimum', 'Maximum'])
                                          .openapi({
                                            description: 'Min Max type',
                                            title: 'MinMaxType',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Notes related to Overdraft fee charge cap',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .array(
                                            z
                                              .object({
                                                Code: z
                                                  .string()
                                                  .regex(/^\w{0,4}$/)
                                                  .min(0)
                                                  .max(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'The four letter Mnemonic used within an XML file to identify a code',
                                                    title: 'Code',
                                                  }),
                                                Description: z
                                                  .string()
                                                  .min(1)
                                                  .max(350)
                                                  .openapi({
                                                    description:
                                                      'Description to describe the purpose of the code',
                                                    title: 'Description',
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(70)
                                                  .openapi({
                                                    description:
                                                      'Long name associated with the code',
                                                    title: 'Name',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                required: ['Name', 'Description'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                        required: ['FeeType', 'MinMaxType'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                                OverdraftFeeChargeDetail: z
                                  .array(
                                    z
                                      .object({
                                        ApplicationFrequency: z
                                          .enum([
                                            'OnClosing',
                                            'OnOpening',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAnniversary',
                                            'Other',
                                            'PerHundredPounds',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .openapi({
                                            description:
                                              'Frequency at which the overdraft charge is applied to the account',
                                            title: 'ApplicationFrequency',
                                          }),
                                        CalculationFrequency: z
                                          .enum([
                                            'OnClosing',
                                            'OnOpening',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAnniversary',
                                            'Other',
                                            'PerHundredPounds',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'How often is the overdraft fee/charge calculated for the account.',
                                            title: 'CalculationFrequency',
                                          }),
                                        FeeAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                            title: 'FeeAmount',
                                          }),
                                        FeeRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRate',
                                          }),
                                        FeeRateType: z
                                          .enum(['Gross', 'Other'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRateType',
                                          }),
                                        FeeType: z
                                          .enum([
                                            'ArrangedOverdraft',
                                            'AnnualReview',
                                            'EmergencyBorrowing',
                                            'BorrowingItem',
                                            'OverdraftRenewal',
                                            'OverdraftSetup',
                                            'Surcharge',
                                            'TempOverdraft',
                                            'UnauthorisedBorrowing',
                                            'UnauthorisedPaidTrans',
                                            'Other',
                                            'UnauthorisedUnpaidTrans',
                                          ])
                                          .openapi({
                                            description: 'Overdraft fee type',
                                            title: 'FeeType',
                                          }),
                                        IncrementalBorrowingAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                            title: 'IncrementalBorrowingAmount',
                                          }),
                                        NegotiableIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether fee and charges are negotiable',
                                            title: 'NegotiableIndicator',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                            title: 'Notes',
                                          }),
                                        OtherApplicationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other application frequencies that are not available in the standard code list',
                                            required: ['Name', 'Description'],
                                            title: 'OtherApplicationFrequency',
                                          }),
                                        OtherCalculationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other calculation frequency which is not available in the standard code set.',
                                            required: ['Name', 'Description'],
                                            title: 'OtherCalculationFrequency',
                                          }),
                                        OtherFeeRateType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee rate type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                            title: 'OtherFeeRateType',
                                          }),
                                        OtherFeeType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other Fee type which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                            title: 'OtherFeeType',
                                          }),
                                        OverdraftControlIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                            title: 'OverdraftControlIndicator',
                                          }),
                                        OverdraftFeeChargeCap: z
                                          .array(
                                            z
                                              .object({
                                                CappingPeriod: z
                                                  .enum([
                                                    'Day',
                                                    'Half Year',
                                                    'Month',
                                                    'Quarter',
                                                    'Week',
                                                    'Year',
                                                  ])
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                                    title: 'CappingPeriod',
                                                  }),
                                                FeeCapAmount: z
                                                  .string()
                                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Cap amount charged for a fee/charge',
                                                    title: 'FeeCapAmount',
                                                  }),
                                                FeeCapOccurrence: z
                                                  .float32()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                                    title: 'FeeCapOccurrence',
                                                  }),
                                                FeeType: z
                                                  .array(
                                                    z
                                                      .enum([
                                                        'ArrangedOverdraft',
                                                        'AnnualReview',
                                                        'EmergencyBorrowing',
                                                        'BorrowingItem',
                                                        'OverdraftRenewal',
                                                        'OverdraftSetup',
                                                        'Surcharge',
                                                        'TempOverdraft',
                                                        'UnauthorisedBorrowing',
                                                        'UnauthorisedPaidTrans',
                                                        'Other',
                                                        'UnauthorisedUnpaidTrans',
                                                      ])
                                                      .openapi({
                                                        description: 'Overdraft fee type',
                                                      }),
                                                  )
                                                  .min(1)
                                                  .openapi({
                                                    description:
                                                      'Fee/charge type which is being capped',
                                                    title: 'FeeType',
                                                  }),
                                                MinMaxType: z
                                                  .enum(['Minimum', 'Maximum'])
                                                  .openapi({
                                                    description: 'Min Max type',
                                                    title: 'MinMaxType',
                                                  }),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description: 'maxLength 2000 text',
                                                      }),
                                                  )
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Notes related to Overdraft fee charge cap',
                                                    title: 'Notes',
                                                  }),
                                                OtherFeeType: z
                                                  .array(
                                                    z
                                                      .object({
                                                        Code: z
                                                          .string()
                                                          .regex(/^\w{0,4}$/)
                                                          .min(0)
                                                          .max(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              'The four letter Mnemonic used within an XML file to identify a code',
                                                            title: 'Code',
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .min(1)
                                                          .max(350)
                                                          .openapi({
                                                            description:
                                                              'Description to describe the purpose of the code',
                                                            title: 'Description',
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(70)
                                                          .openapi({
                                                            description:
                                                              'Long name associated with the code',
                                                            title: 'Name',
                                                          }),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Other fee type code which is not available in the standard code set',
                                                        required: ['Name', 'Description'],
                                                      }),
                                                  )
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Other fee type code which is not available in the standard code set',
                                                    title: 'OtherFeeType',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                required: ['FeeType', 'MinMaxType'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                            title: 'OverdraftFeeChargeCap',
                                          }),
                                      })
                                      .openapi({
                                        description: 'Details about the fees/charges',
                                        required: ['FeeType', 'ApplicationFrequency'],
                                      }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Details about the fees/charges',
                                    title: 'OverdraftFeeChargeDetail',
                                  }),
                              })
                              .openapi({
                                description: 'Overdraft fees and charges',
                                required: ['OverdraftFeeChargeDetail'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Overdraft fees and charges',
                            title: 'OverdraftFeesCharges',
                          }),
                        OverdraftInterestChargingCoverage: z
                          .enum(['Banded', 'Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is £2k and the interest tiers are:- 0-£500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the ‘Whole’ of the account balance,  and in the 2nd that it is ‘Tiered’.',
                            title: 'OverdraftInterestChargingCoverage',
                          }),
                        RepresentativeAPR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account.',
                            title: 'RepresentativeAPR',
                          }),
                        TierValueMax: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Maximum value of Overdraft Tier/Band',
                            title: 'TierValueMax',
                          }),
                        TierValueMin: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description: 'Minimum value of Overdraft Tier/Band',
                            title: 'TierValueMin',
                          }),
                      })
                      .openapi({
                        description: 'Provides overdraft details for a specific tier or band',
                        required: ['TierValueMin'],
                      }),
                  )
                  .min(1)
                  .openapi({
                    description: 'Provides overdraft details for a specific tier or band',
                    title: 'OverdraftTierBand',
                  }),
                OverdraftType: z
                  .enum(['Committed', 'OnDemand'])
                  .exactOptional()
                  .openapi({
                    description:
                      "An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.",
                    title: 'OverdraftType',
                  }),
                TierBandMethod: z
                  .enum(['Banded', 'Tiered', 'Whole'])
                  .openapi({
                    description:
                      "The methodology of how overdraft is charged. It can be:\n'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). \n'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation\n'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.",
                    title: 'TierBandMethod',
                  }),
              })
              .openapi({
                description: 'Tier band set details',
                required: ['TierBandMethod', 'OverdraftTierBand'],
              }),
          )
          .min(1)
          .openapi({ description: 'Tier band set details', title: 'OverdraftTierBandSet' }),
      })
      .exactOptional()
      .openapi({
        description: 'Borrowing details',
        required: ['OverdraftTierBandSet'],
        title: 'Overdraft',
      }),
    ProductDetails: z
      .strictObject({
        FeeFreeLength: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'The length/duration of the fee free period',
            title: 'FeeFreeLength',
          }),
        FeeFreeLengthPeriod: z
          .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
          .exactOptional()
          .openapi({
            description: 'The unit of period (days, weeks, months etc.) of the promotional length',
            title: 'FeeFreeLengthPeriod',
          }),
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({
            description: 'Optional additional notes to supplement the Core product details',
            title: 'Notes',
          }),
        Segment: z
          .array(
            z
              .enum([
                'ClientAccount',
                'Standard',
                'NonCommercialChaitiesClbSoc',
                'NonCommercialPublicAuthGovt',
                'Religious',
                'SectorSpecific',
                'Startup',
                'Switcher',
              ])
              .openapi({
                description:
                  'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\n\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to BCA products, they are segmented in relation to different markets that they wish to focus on. ',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\n\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to BCA products, they are segmented in relation to different markets that they wish to focus on. ',
            title: 'Segment',
          }),
      })
      .exactOptional()
      .openapi({ title: 'ProductDetails', required: [] }),
  })
  .openapi({ title: 'BCA', required: [] })
  .openapi('OBBCAData1')

const OBBalanceType1CodeSchema = z
  .enum([
    'ClosingAvailable',
    'ClosingBooked',
    'ClosingCleared',
    'Expected',
    'ForwardAvailable',
    'Information',
    'InterimAvailable',
    'InterimBooked',
    'InterimCleared',
    'OpeningAvailable',
    'OpeningBooked',
    'OpeningCleared',
    'PreviouslyClosedBooked',
  ])
  .openapi({ description: 'Balance type, in a coded form.' })
  .openapi('OBBalanceType1Code')

const OBBankTransactionCodeStructure1Schema = z
  .object({
    Code: z.string().openapi({ description: 'Specifies the family within a domain.' }),
    SubCode: z
      .string()
      .openapi({ description: 'Specifies the sub-product family within a specific family.' }),
  })
  .openapi({
    description:
      'Set of elements used to fully identify the type of underlying transaction resulting in an entry.',
    required: ['Code', 'SubCode'],
  })
  .openapi('OBBankTransactionCodeStructure1')

const OBBeneficiaryType1CodeSchema = z
  .enum(['Trusted', 'Ordinary'])
  .openapi({ description: 'Specifies the Beneficiary Type.' })
  .openapi('OBBeneficiaryType1Code')

const OBCashAccount5_0Schema = z
  .object({
    Identification: Identification_0Schema,
    Name: Name_0Schema.exactOptional(),
    SchemeName: OBExternalAccountIdentification4CodeSchema,
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides the details to identify the beneficiary account.',
    required: ['SchemeName', 'Identification'],
  })
  .openapi('OBCashAccount5_0')

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

const TownNameSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description: 'Name of a built-up area, with defined boundaries, and a local government.',
  })
  .openapi('TownName')

const OBPostalAddress6Schema = z
  .object({
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
    Country: z
      .string()
      .regex(/^[A-Z]{2,2}$/)
      .exactOptional()
      .openapi({ description: 'Nation with its own government.' }),
    CountrySubDivision: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identifies a subdivision of a country such as state, region, county.',
      }),
    Department: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({
        description: 'Identification of a division of a large organisation or building.',
      }),
    PostCode: PostCodeSchema.exactOptional(),
    StreetName: StreetNameSchema.exactOptional(),
    SubDepartment: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({
        description: 'Identification of a sub-division of a large organisation or building.',
      }),
    TownName: TownNameSchema.exactOptional(),
  })
  .openapi({
    description:
      'Information that locates and identifies a specific address, as defined by postal services.',
    required: [],
  })
  .openapi('OBPostalAddress6')

const OBBranchAndFinancialInstitutionIdentification6_0Schema = z
  .object({
    Identification: Identification_1Schema.exactOptional(),
    Name: Name_1Schema.exactOptional(),
    PostalAddress: OBPostalAddress6Schema.exactOptional(),
    SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_0')

const ReferenceSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
  })
  .openapi('Reference')

const OBSupplementaryData1Schema = z
  .looseObject({})
  .openapi({
    description:
      'Additional information that can not be captured in the structured fields and/or any other specific block.',
  })
  .openapi('OBSupplementaryData1')

const OBBeneficiary5Schema = z
  .strictObject({
    AccountId: AccountIdSchema.exactOptional(),
    BeneficiaryId: BeneficiaryIdSchema.exactOptional(),
    BeneficiaryType: OBBeneficiaryType1CodeSchema.exactOptional(),
    CreditorAccount: OBCashAccount5_0Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_0Schema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OBBeneficiary5')

const OBBeneficiary5BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema.exactOptional(),
    BeneficiaryId: BeneficiaryIdSchema.exactOptional(),
    BeneficiaryType: OBBeneficiaryType1CodeSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OBBeneficiary5Basic')

const OBBeneficiary5DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema.exactOptional(),
    BeneficiaryId: BeneficiaryIdSchema.exactOptional(),
    BeneficiaryType: OBBeneficiaryType1CodeSchema.exactOptional(),
    CreditorAccount: OBCashAccount5_0Schema,
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_0Schema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: ['CreditorAccount'] })
  .openapi('OBBeneficiary5Detail')

const OBBranchAndFinancialInstitutionIdentification5_1Schema = z
  .object({
    Identification: Identification_1Schema,
    SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema,
  })
  .openapi({
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
    required: ['SchemeName', 'Identification'],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification5_1')

const OBBranchAndFinancialInstitutionIdentification6_1Schema = z
  .object({
    Identification: Identification_2Schema.exactOptional(),
    Name: Name_1Schema.exactOptional(),
    PostalAddress: OBPostalAddress6Schema.exactOptional(),
    SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
  })
  .openapi({
    description: 'Financial institution servicing an account for the creditor.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_1')

const OBBranchAndFinancialInstitutionIdentification6_2Schema = z
  .object({
    Identification: Identification_2Schema.exactOptional(),
    Name: Name_1Schema.exactOptional(),
    PostalAddress: OBPostalAddress6Schema.exactOptional(),
    SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
  })
  .openapi({
    description: 'Financial institution servicing an account for the debtor.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_2')

const OBCashAccount5_1Schema = z
  .object({
    Identification: z
      .string()
      .min(1)
      .max(256)
      .openapi({ description: 'Beneficiary account identification.' }),
    Name: Name_0Schema.exactOptional(),
    SchemeName: OBExternalAccountIdentification4CodeSchema,
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides the details to identify the beneficiary account.',
    required: ['SchemeName', 'Identification'],
  })
  .openapi('OBCashAccount5_1')

const OBCashAccount6_0Schema = z
  .object({
    Identification: Identification_0Schema.exactOptional(),
    Name: Name_0Schema.exactOptional(),
    SchemeName: OBExternalAccountIdentification4CodeSchema.exactOptional(),
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account of the creditor, in the case of a debit transaction.',
    required: [],
  })
  .openapi('OBCashAccount6_0')

const OBCashAccount6_1Schema = z
  .object({
    Identification: Identification_0Schema.exactOptional(),
    Name: Name_0Schema.exactOptional(),
    SchemeName: OBExternalAccountIdentification4CodeSchema.exactOptional(),
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account of the debtor, in the case of a crebit transaction.',
    required: [],
  })
  .openapi('OBCashAccount6_1')

const OBCreditDebitCode_0Schema = z
  .enum(['Credit', 'Debit'])
  .openapi({
    description:
      'Indicates whether the amount is a credit or a debit. \nUsage: A zero amount is considered to be a credit amount.',
  })
  .openapi('OBCreditDebitCode_0')

const OBCreditDebitCode_1Schema = z
  .enum(['Credit', 'Debit'])
  .openapi({ description: 'Indicates whether the transaction is a credit or a debit entry.' })
  .openapi('OBCreditDebitCode_1')

const OBCreditDebitCode_2Schema = z
  .enum(['Credit', 'Debit'])
  .openapi({
    description:
      'Indicates whether the balance is a credit or a debit balance. \nUsage: A zero balance is considered to be a credit balance.',
  })
  .openapi('OBCreditDebitCode_2')

const OBCurrencyExchange5Schema = z
  .object({
    ContractIdentification: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'Unique identification to unambiguously identify the foreign exchange contract.',
      }),
    ExchangeRate: z
      .number()
      .openapi({
        description:
          'Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.\nUsage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).',
      }),
    InstructedAmount: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .exactOptional()
      .openapi({
        description:
          'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.',
        required: ['Amount', 'Currency'],
      }),
    QuotationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
      }),
    SourceCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({
        description: 'Currency from which an amount is to be converted in a currency conversion.',
      }),
    TargetCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({
        description: 'Currency into which an amount is to be converted in a currency conversion.',
      }),
    UnitCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({
        description:
          'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
      }),
  })
  .openapi({
    description: 'Set of elements used to provide details on the currency exchange.',
    required: ['SourceCurrency', 'ExchangeRate'],
  })
  .openapi('OBCurrencyExchange5')

const OBEntryStatus1CodeSchema = z
  .enum(['Booked', 'Pending'])
  .openapi({ description: 'Status of a transaction entry on the books of the account servicer.' })
  .openapi('OBEntryStatus1Code')

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

const OBExternalAccountRole1CodeSchema = z
  .string()
  .openapi({
    description: 'A party’s role with respect to the related account.',
    'x-namespaced-enum': [
      'UK.OBIE.Administrator',
      'UK.OBIE.Beneficiary',
      'UK.OBIE.CustodianForMinor',
      'UK.OBIE.Granter',
      'UK.OBIE.LegalGuardian',
      'UK.OBIE.OtherParty',
      'UK.OBIE.PowerOfAttorney',
      'UK.OBIE.Principal',
      'UK.OBIE.Protector',
      'UK.OBIE.RegisteredShareholderName',
      'UK.OBIE.SecondaryOwner',
      'UK.OBIE.SeniorManagingOfficial',
      'UK.OBIE.Settlor',
      'UK.OBIE.SuccessorOnDeath',
    ],
  })
  .openapi('OBExternalAccountRole1Code')

const OBExternalDirectDebitStatus1CodeSchema = z
  .enum(['Active', 'Inactive'])
  .openapi({ description: 'Specifies the status of the direct debit in code form.' })
  .openapi('OBExternalDirectDebitStatus1Code')

const OBExternalLegalStructureType1CodeSchema = z
  .string()
  .openapi({
    description: 'Legal standing of the party.',
    'x-namespaced-enum': [
      'UK.OBIE.CIC',
      'UK.OBIE.CIO',
      'UK.OBIE.Charity',
      'UK.OBIE.CoOp',
      'UK.OBIE.GeneralPartnership',
      'UK.OBIE.Individual',
      'UK.OBIE.LimitedLiabilityPartnership',
      'UK.OBIE.LimitedPartnership',
      'UK.OBIE.PrivateLimitedCompany',
      'UK.OBIE.PublicLimitedCompany',
      'UK.OBIE.ScottishLimitedPartnership',
      'UK.OBIE.Sole',
    ],
  })
  .openapi('OBExternalLegalStructureType1Code')

const OBExternalPartyType1CodeSchema = z
  .enum(['Delegate', 'Joint', 'Sole'])
  .openapi({ description: 'Party type, in a coded form.' })
  .openapi('OBExternalPartyType1Code')

const OBExternalScheduleType1CodeSchema = z
  .enum(['Arrival', 'Execution'])
  .openapi({ description: 'Specifies the scheduled payment date type requested' })
  .openapi('OBExternalScheduleType1Code')

const OBExternalStandingOrderStatus1CodeSchema = z
  .enum(['Active', 'Inactive'])
  .openapi({ description: 'Specifies the status of the standing order in code form.' })
  .openapi('OBExternalStandingOrderStatus1Code')

const OBExternalStatementAmountType1CodeSchema = z
  .string()
  .openapi({
    description: 'Amount type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.ArrearsClosingBalance',
      'UK.OBIE.AvailableBalance',
      'UK.OBIE.AverageBalanceWhenInCredit',
      'UK.OBIE.AverageBalanceWhenInDebit',
      'UK.OBIE.AverageDailyBalance',
      'UK.OBIE.BalanceTransferClosingBalance',
      'UK.OBIE.CashClosingBalance',
      'UK.OBIE.ClosingBalance',
      'UK.OBIE.CreditLimit',
      'UK.OBIE.CurrentPayment',
      'UK.OBIE.DirectDebitPaymentDue',
      'UK.OBIE.FSCSInsurance',
      'UK.OBIE.MinimumPaymentDue',
      'UK.OBIE.PendingTransactionsBalance',
      'UK.OBIE.PreviousClosingBalance',
      'UK.OBIE.PreviousPayment',
      'UK.OBIE.PurchaseClosingBalance',
      'UK.OBIE.StartingBalance',
      'UK.OBIE.TotalAdjustments',
      'UK.OBIE.TotalCashAdvances',
      'UK.OBIE.TotalCharges',
      'UK.OBIE.TotalCredits',
      'UK.OBIE.TotalDebits',
      'UK.OBIE.TotalPurchases',
    ],
  })
  .openapi('OBExternalStatementAmountType1Code')

const OBExternalStatementBenefitType1CodeSchema = z
  .string()
  .openapi({
    description: 'Benefit type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.Cashback',
      'UK.OBIE.Insurance',
      'UK.OBIE.TravelDiscount',
      'UK.OBIE.TravelInsurance',
    ],
  })
  .openapi('OBExternalStatementBenefitType1Code')

const OBExternalStatementDateTimeType1CodeSchema = z
  .string()
  .openapi({
    description: 'Date time type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.BalanceTransferPromoEnd',
      'UK.OBIE.DirectDebitDue',
      'UK.OBIE.LastPayment',
      'UK.OBIE.LastStatement',
      'UK.OBIE.NextStatement',
      'UK.OBIE.PaymentDue',
      'UK.OBIE.PurchasePromoEnd',
      'UK.OBIE.StatementAvailable',
    ],
  })
  .openapi('OBExternalStatementDateTimeType1Code')

const OBExternalStatementFeeFrequency1CodeSchema = z
  .string()
  .openapi({
    description: 'How frequently the fee is applied to the Account.',
    'x-namespaced-enum': [
      'UK.OBIE.ChargingPeriod',
      'UK.OBIE.PerTransactionAmount',
      'UK.OBIE.PerTransactionPercentage',
      'UK.OBIE.Quarterly',
      'UK.OBIE.StatementMonthly',
      'UK.OBIE.Weekly',
    ],
  })
  .openapi('OBExternalStatementFeeFrequency1Code')

const OBExternalStatementFeeRateType1CodeSchema = z
  .string()
  .openapi({
    description: 'Description that may be available for the statement fee rate type.',
    'x-namespaced-enum': ['UK.OBIE.AER', 'UK.OBIE.EAR'],
  })
  .openapi('OBExternalStatementFeeRateType1Code')

const OBExternalStatementFeeType1CodeSchema = z
  .string()
  .openapi({
    description: 'Fee type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.Annual',
      'UK.OBIE.BalanceTransfer',
      'UK.OBIE.CashAdvance',
      'UK.OBIE.CashTransaction',
      'UK.OBIE.ForeignCashTransaction',
      'UK.OBIE.ForeignTransaction',
      'UK.OBIE.Gambling',
      'UK.OBIE.LatePayment',
      'UK.OBIE.MoneyTransfer',
      'UK.OBIE.Monthly',
      'UK.OBIE.Overlimit',
      'UK.OBIE.PostalOrder',
      'UK.OBIE.PrizeEntry',
      'UK.OBIE.StatementCopy',
      'UK.OBIE.Total',
    ],
  })
  .openapi('OBExternalStatementFeeType1Code')

const OBExternalStatementInterestFrequency1CodeSchema = z
  .string()
  .openapi({
    description: 'Specifies the statement fee type requested',
    'x-namespaced-enum': [
      'UK.OBIE.Daily',
      'UK.OBIE.HalfYearly',
      'UK.OBIE.Monthly',
      'UK.OBIE.PerStatementDate',
      'UK.OBIE.Quarterly',
      'UK.OBIE.Weekly',
      'UK.OBIE.Yearly',
    ],
  })
  .openapi('OBExternalStatementInterestFrequency1Code')

const OBExternalStatementInterestRateType1CodeSchema = z
  .string()
  .openapi({
    description: 'Description that may be available for the statement Interest rate type.',
    'x-namespaced-enum': [
      'UK.OBIE.BOEBaseRate',
      'UK.OBIE.FixedRate',
      'UK.OBIE.Gross',
      'UK.OBIE.LoanProviderBaseRate',
      'UK.OBIE.Net',
    ],
  })
  .openapi('OBExternalStatementInterestRateType1Code')

const OBExternalStatementInterestType1CodeSchema = z
  .string()
  .openapi({
    description: 'Interest amount type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.BalanceTransfer',
      'UK.OBIE.Cash',
      'UK.OBIE.EstimatedNext',
      'UK.OBIE.Purchase',
      'UK.OBIE.Total',
    ],
  })
  .openapi('OBExternalStatementInterestType1Code')

const OBExternalStatementRateType1CodeSchema = z
  .string()
  .openapi({
    description: 'Statement rate type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.AnnualBalanceTransfer',
      'UK.OBIE.AnnualBalanceTransferAfterPromo',
      'UK.OBIE.AnnualBalanceTransferPromo',
      'UK.OBIE.AnnualCash',
      'UK.OBIE.AnnualPurchase',
      'UK.OBIE.AnnualPurchaseAfterPromo',
      'UK.OBIE.AnnualPurchasePromo',
      'UK.OBIE.MonthlyBalanceTransfer',
      'UK.OBIE.MonthlyCash',
      'UK.OBIE.MonthlyPurchase',
    ],
  })
  .openapi('OBExternalStatementRateType1Code')

const OBExternalStatementType1CodeSchema = z
  .enum(['AccountClosure', 'AccountOpening', 'Annual', 'Interim', 'RegularPeriodic'])
  .openapi({ description: 'Statement type, in a coded form.' })
  .openapi('OBExternalStatementType1Code')

const OBExternalStatementValueType1CodeSchema = z
  .string()
  .openapi({
    description: 'Statement value type, in a coded form.',
    'x-namespaced-enum': [
      'UK.OBIE.AirMilesPoints',
      'UK.OBIE.AirMilesPointsBalance',
      'UK.OBIE.Credits',
      'UK.OBIE.Debits',
      'UK.OBIE.HotelPoints',
      'UK.OBIE.HotelPointsBalance',
      'UK.OBIE.RetailShoppingPoints',
      'UK.OBIE.RetailShoppingPointsBalance',
    ],
  })
  .openapi('OBExternalStatementValueType1Code')

const OBMerchantDetails1Schema = z
  .object({
    MerchantCategoryCode: z
      .string()
      .min(3)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.',
      }),
    MerchantName: z
      .string()
      .min(1)
      .max(350)
      .exactOptional()
      .openapi({ description: 'Name by which the merchant is known.' }),
  })
  .openapi({ description: 'Details of the merchant involved in the transaction.', required: [] })
  .openapi('OBMerchantDetails1')

const OBPCAData1Schema = z
  .strictObject({
    CreditInterest: z
      .strictObject({
        TierBandSet: z
          .array(
            z
              .object({
                CalculationMethod: z
                  .enum(['Compound', 'SimpleInterest'])
                  .exactOptional()
                  .openapi({
                    description: 'Methods of calculating interest',
                    title: 'CalculationMethod',
                  }),
                Destination: z
                  .enum(['PayAway', 'SelfCredit'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Describes whether accrued interest is payable only to the PCA or to another bank account',
                    title: 'Destination',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the Tier Band Set details',
                    title: 'Notes',
                  }),
                TierBand: z
                  .array(
                    z
                      .object({
                        AER: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \n\nRead more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A',
                            title: 'AER',
                          }),
                        ApplicationFrequency: z
                          .enum([
                            'PerAcademicTerm',
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .openapi({
                            description:
                              "How often is interest applied to the PCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's PCA.",
                            title: 'ApplicationFrequency',
                          }),
                        BankInterestRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Bank Interest for the PCA product',
                            title: 'BankInterestRate',
                          }),
                        BankInterestRateType: z
                          .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the PCA.',
                            title: 'BankInterestRateType',
                          }),
                        CalculationFrequency: z
                          .enum([
                            'PerAcademicTerm',
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description: 'How often is credit interest calculated for the account.',
                            title: 'CalculationFrequency',
                          }),
                        DepositInterestAppliedCoverage: z
                          .enum(['Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description: 'Amount on which Interest applied.',
                            title: 'DepositInterestAppliedCoverage',
                          }),
                        FixedVariableInterestRateType: z
                          .enum(['Fixed', 'Variable'])
                          .openapi({
                            description: 'Type of interest rate, Fixed or Variable',
                            title: 'FixedVariableInterestRateType',
                          }),
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a PCA.',
                            title: 'Identification',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier Band details',
                            title: 'Notes',
                          }),
                        OtherApplicationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other application frequencies that are not available in the standard code list',
                            required: ['Name', 'Description'],
                            title: 'OtherApplicationFrequency',
                          }),
                        OtherBankInterestType: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other interest rate types which are not available in the standard code list',
                            required: ['Name', 'Description'],
                            title: 'OtherBankInterestType',
                          }),
                        OtherCalculationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other calculation frequency which is not available in the standard code set.',
                            required: ['Name', 'Description'],
                            title: 'OtherCalculationFrequency',
                          }),
                        TierValueMaximum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMaximum',
                          }),
                        TierValueMinimum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'Minimum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMinimum',
                          }),
                      })
                      .openapi({
                        description: 'Tier Band Details',
                        required: [
                          'TierValueMinimum',
                          'ApplicationFrequency',
                          'FixedVariableInterestRateType',
                          'AER',
                        ],
                      }),
                  )
                  .min(1)
                  .openapi({ description: 'Tier Band Details', title: 'TierBand' }),
                TierBandMethod: z
                  .enum(['Tiered', 'Whole'])
                  .openapi({
                    description:
                      'The methodology of how credit interest is charged. It can be:-\n\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n\n3. Whole\nThe same interest rate is applied irrespective of the PCA balance',
                    title: 'TierBandMethod',
                  }),
              })
              .openapi({
                description:
                  'The group of tiers or bands for which credit interest can be applied.',
                required: ['TierBandMethod', 'TierBand'],
              }),
          )
          .min(1)
          .openapi({
            description: 'The group of tiers or bands for which credit interest can be applied.',
            title: 'TierBandSet',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Details about the interest that may be payable to the PCA account holders',
        required: ['TierBandSet'],
        title: 'CreditInterest',
      }),
    OtherFeesCharges: z
      .strictObject({
        FeeChargeCap: z
          .array(
            z
              .object({
                CappingPeriod: z
                  .enum(['AcademicTerm', 'Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                    title: 'CappingPeriod',
                  }),
                FeeCapAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                    title: 'FeeCapAmount',
                  }),
                FeeCapOccurrence: z
                  .float32()
                  .exactOptional()
                  .openapi({
                    description:
                      'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                    title: 'FeeCapOccurrence',
                  }),
                FeeType: z
                  .array(
                    z
                      .enum([
                        'ServiceCAccountFee',
                        'ServiceCAccountFeeMonthly',
                        'ServiceCOther',
                        'Other',
                      ])
                      .openapi({ description: 'Fee/charge type which is being capped' }),
                  )
                  .min(1)
                  .openapi({
                    description: 'Fee/charge type which is being capped',
                    title: 'FeeType',
                  }),
                MinMaxType: z
                  .enum(['Minimum', 'Maximum'])
                  .openapi({
                    description:
                      'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                    title: 'MinMaxType',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Free text for adding  extra details for fee charge cap',
                    title: 'Notes',
                  }),
                OtherFeeType: z
                  .array(
                    z
                      .object({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                      })
                      .openapi({
                        description:
                          'Other fee type code which is not available in the standard code set',
                        required: ['Name', 'Description'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Other fee type code which is not available in the standard code set',
                    title: 'OtherFeeType',
                  }),
              })
              .openapi({
                description:
                  'Details about any caps (maximum charges) that apply to a particular fee/charge',
                required: ['FeeType', 'MinMaxType'],
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Details about any caps (maximum charges) that apply to a particular fee/charge',
            title: 'FeeChargeCap',
          }),
        FeeChargeDetail: z
          .array(
            z
              .object({
                ApplicationFrequency: z
                  .enum([
                    'AccountClosing',
                    'AccountOpening',
                    'AcademicTerm',
                    'ChargingPeriod',
                    'Daily',
                    'PerItem',
                    'Monthly',
                    'OnAccountAnniversary',
                    'Other',
                    'PerHour',
                    'PerOccurrence',
                    'PerSheet',
                    'PerTransaction',
                    'PerTransactionAmount',
                    'PerTransactionPercentage',
                    'Quarterly',
                    'SixMonthly',
                    'StatementMonthly',
                    'Weekly',
                    'Yearly',
                  ])
                  .openapi({
                    description: 'How frequently the fee/charge is applied to the account',
                    title: 'ApplicationFrequency',
                  }),
                CalculationFrequency: z
                  .enum([
                    'AccountClosing',
                    'AccountOpening',
                    'AcademicTerm',
                    'ChargingPeriod',
                    'Daily',
                    'PerItem',
                    'Monthly',
                    'OnAccountAnniversary',
                    'Other',
                    'PerHour',
                    'PerOccurrence',
                    'PerSheet',
                    'PerTransaction',
                    'PerTransactionAmount',
                    'PerTransactionPercentage',
                    'Quarterly',
                    'SixMonthly',
                    'StatementMonthly',
                    'Weekly',
                    'Yearly',
                  ])
                  .exactOptional()
                  .openapi({
                    description: 'How frequently the fee/charge is calculated',
                    title: 'CalculationFrequency',
                  }),
                FeeAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                    title: 'FeeAmount',
                  }),
                FeeApplicableRange: z
                  .strictObject({
                    MaximumAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Maximum Amount on which fee is applicable (where it is expressed as an amount)',
                        title: 'MaximumAmount',
                      }),
                    MaximumRate: z
                      .string()
                      .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Maximum rate on which fee/charge is applicable(where it is expressed as an rate)',
                        title: 'MaximumRate',
                      }),
                    MinimumAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)',
                        title: 'MinimumAmount',
                      }),
                    MinimumRate: z
                      .string()
                      .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Minimum rate on which fee/charge is applicable(where it is expressed as an rate)',
                        title: 'MinimumRate',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Range or amounts or rates for which the fee/charge applies',
                    title: 'FeeApplicableRange',
                    required: [],
                  }),
                FeeCategory: z
                  .enum(['Other', 'Servicing'])
                  .openapi({
                    description: 'Categorisation of fees and charges into standard categories.',
                    title: 'FeeCategory',
                  }),
                FeeChargeCap: z
                  .array(
                    z
                      .object({
                        CappingPeriod: z
                          .enum([
                            'AcademicTerm',
                            'Day',
                            'Half Year',
                            'Month',
                            'Quarter',
                            'Week',
                            'Year',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                            title: 'CappingPeriod',
                          }),
                        FeeCapAmount: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                            title: 'FeeCapAmount',
                          }),
                        FeeCapOccurrence: z
                          .float32()
                          .exactOptional()
                          .openapi({
                            description:
                              'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                            title: 'FeeCapOccurrence',
                          }),
                        FeeType: z
                          .array(
                            z
                              .enum([
                                'ServiceCAccountFee',
                                'ServiceCAccountFeeMonthly',
                                'ServiceCOther',
                                'Other',
                              ])
                              .openapi({ description: 'Fee/charge type which is being capped' }),
                          )
                          .min(1)
                          .openapi({
                            description: 'Fee/charge type which is being capped',
                            title: 'FeeType',
                          }),
                        MinMaxType: z
                          .enum(['Minimum', 'Maximum'])
                          .openapi({
                            description:
                              'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                            title: 'MinMaxType',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Free text for adding  extra details for fee charge cap',
                            title: 'Notes',
                          }),
                        OtherFeeType: z
                          .array(
                            z
                              .object({
                                Code: z
                                  .string()
                                  .regex(/^\w{0,4}$/)
                                  .min(0)
                                  .max(4)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The four letter Mnemonic used within an XML file to identify a code',
                                    title: 'Code',
                                  }),
                                Description: z
                                  .string()
                                  .min(1)
                                  .max(350)
                                  .openapi({
                                    description: 'Description to describe the purpose of the code',
                                    title: 'Description',
                                  }),
                                Name: z
                                  .string()
                                  .min(1)
                                  .max(70)
                                  .openapi({
                                    description: 'Long name associated with the code',
                                    title: 'Name',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Other fee type code which is not available in the standard code set',
                                required: ['Name', 'Description'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Other fee type code which is not available in the standard code set',
                            title: 'OtherFeeType',
                          }),
                      })
                      .openapi({
                        description:
                          'Details about any caps (maximum charges) that apply to a particular fee/charge',
                        required: ['FeeType', 'MinMaxType'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Details about any caps (maximum charges) that apply to a particular fee/charge',
                    title: 'FeeChargeCap',
                  }),
                FeeRate: z
                  .string()
                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                    title: 'FeeRate',
                  }),
                FeeRateType: z
                  .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                    title: 'FeeRateType',
                  }),
                FeeType: z
                  .enum([
                    'ServiceCAccountFee',
                    'ServiceCAccountFeeMonthly',
                    'ServiceCOther',
                    'Other',
                  ])
                  .openapi({ description: 'Fee/Charge Type', title: 'FeeType' }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Optional additional notes to supplement the fee/charge details.',
                    title: 'Notes',
                  }),
                OtherApplicationFrequency: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other application frequencies not covered in the standard code list',
                    required: ['Name', 'Description'],
                    title: 'OtherApplicationFrequency',
                  }),
                OtherCalculationFrequency: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other calculation frequency which is not available in standard code set.',
                    required: ['Name', 'Description'],
                    title: 'OtherCalculationFrequency',
                  }),
                OtherFeeCategoryType: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: ['Name', 'Description'], title: 'OtherFeeCategoryType' }),
                OtherFeeRateType: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other fee rate type which is not available in the standard code set',
                    required: ['Name', 'Description'],
                    title: 'OtherFeeRateType',
                  }),
                OtherFeeType: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                    FeeCategory: z
                      .enum(['Other', 'Servicing'])
                      .openapi({
                        description: 'Categorisation of fees and charges into standard categories.',
                        title: 'FeeCategory',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other Fee/charge type which is not available in the standard code set',
                    required: ['FeeCategory', 'Name', 'Description'],
                    title: 'OtherFeeType',
                  }),
              })
              .openapi({
                description: 'Other fees/charges details',
                required: ['FeeCategory', 'FeeType', 'ApplicationFrequency'],
              }),
          )
          .min(1)
          .openapi({ description: 'Other fees/charges details', title: 'FeeChargeDetail' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains details of fees and charges which are not associated with either borrowing or features/benefits',
        required: ['FeeChargeDetail'],
        title: 'OtherFeesCharges',
      }),
    Overdraft: z
      .strictObject({
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({ description: 'Associated Notes about the overdraft rates', title: 'Notes' }),
        OverdraftTierBandSet: z
          .array(
            z
              .object({
                AuthorisedIndicator: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Indicates if the Overdraft is authorised (Y) or unauthorised (N)',
                    title: 'AuthorisedIndicator',
                  }),
                BufferAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.',
                    title: 'BufferAmount',
                  }),
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of a  Tier Band for a overdraft product.',
                    title: 'Identification',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the overdraft Tier Band Set details',
                    title: 'Notes',
                  }),
                OverdraftFeesCharges: z
                  .array(
                    z
                      .object({
                        OverdraftFeeChargeCap: z
                          .array(
                            z
                              .object({
                                CappingPeriod: z
                                  .enum([
                                    'AcademicTerm',
                                    'Day',
                                    'Half Year',
                                    'Month',
                                    'Quarter',
                                    'Week',
                                    'Year',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                    title: 'CappingPeriod',
                                  }),
                                FeeCapAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description: 'Cap amount charged for a fee/charge',
                                    title: 'FeeCapAmount',
                                  }),
                                FeeCapOccurrence: z
                                  .float32()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                    title: 'FeeCapOccurrence',
                                  }),
                                FeeType: z
                                  .array(
                                    z
                                      .enum([
                                        'ArrangedOverdraft',
                                        'EmergencyBorrowing',
                                        'BorrowingItem',
                                        'OverdraftRenewal',
                                        'AnnualReview',
                                        'OverdraftSetup',
                                        'Surcharge',
                                        'TempOverdraft',
                                        'UnauthorisedBorrowing',
                                        'UnauthorisedPaidTrans',
                                        'Other',
                                        'UnauthorisedUnpaidTrans',
                                      ])
                                      .openapi({ description: 'Overdraft fee type' }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Fee/charge type which is being capped',
                                    title: 'FeeType',
                                  }),
                                MinMaxType: z
                                  .enum(['Minimum', 'Maximum'])
                                  .openapi({
                                    description:
                                      'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                    title: 'MinMaxType',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Notes related to Overdraft fee charge cap',
                                    title: 'Notes',
                                  }),
                                OtherFeeType: z
                                  .array(
                                    z
                                      .object({
                                        Code: z
                                          .string()
                                          .regex(/^\w{0,4}$/)
                                          .min(0)
                                          .max(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The four letter Mnemonic used within an XML file to identify a code',
                                            title: 'Code',
                                          }),
                                        Description: z
                                          .string()
                                          .min(1)
                                          .max(350)
                                          .openapi({
                                            description:
                                              'Description to describe the purpose of the code',
                                            title: 'Description',
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(70)
                                          .openapi({
                                            description: 'Long name associated with the code',
                                            title: 'Name',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Other fee type code which is not available in the standard code set',
                                        required: ['Name', 'Description'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee type code which is not available in the standard code set',
                                    title: 'OtherFeeType',
                                  }),
                                OverdraftControlIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Specifies for the overdraft control feature/benefit',
                                    title: 'OverdraftControlIndicator',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                required: ['FeeType', 'MinMaxType'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Details about any caps (maximum charges) that apply to a particular fee/charge',
                            title: 'OverdraftFeeChargeCap',
                          }),
                        OverdraftFeeChargeDetail: z
                          .array(
                            z
                              .object({
                                ApplicationFrequency: z
                                  .enum([
                                    'AccountClosing',
                                    'AccountOpening',
                                    'AcademicTerm',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAccountAnniversary',
                                    'Other',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .openapi({
                                    description:
                                      'Frequency at which the overdraft charge is applied to the account',
                                    title: 'ApplicationFrequency',
                                  }),
                                CalculationFrequency: z
                                  .enum([
                                    'AccountClosing',
                                    'AccountOpening',
                                    'AcademicTerm',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAccountAnniversary',
                                    'Other',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'How often is the overdraft fee/charge calculated for the account.',
                                    title: 'CalculationFrequency',
                                  }),
                                FeeAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                    title: 'FeeAmount',
                                  }),
                                FeeRate: z
                                  .string()
                                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRate',
                                  }),
                                FeeRateType: z
                                  .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRateType',
                                  }),
                                FeeType: z
                                  .enum([
                                    'ArrangedOverdraft',
                                    'EmergencyBorrowing',
                                    'BorrowingItem',
                                    'OverdraftRenewal',
                                    'AnnualReview',
                                    'OverdraftSetup',
                                    'Surcharge',
                                    'TempOverdraft',
                                    'UnauthorisedBorrowing',
                                    'UnauthorisedPaidTrans',
                                    'Other',
                                    'UnauthorisedUnpaidTrans',
                                  ])
                                  .openapi({ description: 'Overdraft fee type', title: 'FeeType' }),
                                IncrementalBorrowingAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                    title: 'IncrementalBorrowingAmount',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                    title: 'Notes',
                                  }),
                                OtherApplicationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other application frequencies that are not available in the standard code list',
                                    required: ['Name', 'Description'],
                                    title: 'OtherApplicationFrequency',
                                  }),
                                OtherCalculationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other calculation frequency which is not available in the standard code set.',
                                    required: ['Name', 'Description'],
                                    title: 'OtherCalculationFrequency',
                                  }),
                                OtherFeeRateType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee rate type code which is not available in the standard code set',
                                    required: ['Name', 'Description'],
                                    title: 'OtherFeeRateType',
                                  }),
                                OtherFeeType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other Fee type which is not available in the standard code set',
                                    required: ['Name', 'Description'],
                                    title: 'OtherFeeType',
                                  }),
                                OverdraftControlIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Specifies for the overdraft control feature/benefit',
                                    title: 'OverdraftControlIndicator',
                                  }),
                                OverdraftFeeChargeCap: z
                                  .strictObject({
                                    CappingPeriod: z
                                      .enum([
                                        'AcademicTerm',
                                        'Day',
                                        'Half Year',
                                        'Month',
                                        'Quarter',
                                        'Week',
                                        'Year',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                        title: 'CappingPeriod',
                                      }),
                                    FeeCapAmount: z
                                      .string()
                                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                      .exactOptional()
                                      .openapi({
                                        description: 'Cap amount charged for a fee/charge',
                                        title: 'FeeCapAmount',
                                      }),
                                    FeeCapOccurrence: z
                                      .float32()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                        title: 'FeeCapOccurrence',
                                      }),
                                    FeeType: z
                                      .array(
                                        z
                                          .enum([
                                            'ArrangedOverdraft',
                                            'EmergencyBorrowing',
                                            'BorrowingItem',
                                            'OverdraftRenewal',
                                            'AnnualReview',
                                            'OverdraftSetup',
                                            'Surcharge',
                                            'TempOverdraft',
                                            'UnauthorisedBorrowing',
                                            'UnauthorisedPaidTrans',
                                            'Other',
                                            'UnauthorisedUnpaidTrans',
                                          ])
                                          .openapi({ description: 'Overdraft fee type' }),
                                      )
                                      .min(1)
                                      .openapi({
                                        description: 'Fee/charge type which is being capped',
                                        title: 'FeeType',
                                      }),
                                    MinMaxType: z
                                      .enum(['Minimum', 'Maximum'])
                                      .openapi({
                                        description:
                                          'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                        title: 'MinMaxType',
                                      }),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({ description: 'maxLength 2000 text' }),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description: 'Notes related to Overdraft fee charge cap',
                                        title: 'Notes',
                                      }),
                                    OtherFeeType: z
                                      .array(
                                        z
                                          .object({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                          }),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Other fee type code which is not available in the standard code set',
                                        title: 'OtherFeeType',
                                      }),
                                    OverdraftControlIndicator: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Specifies for the overdraft control feature/benefit',
                                        title: 'OverdraftControlIndicator',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                    required: ['FeeType', 'MinMaxType'],
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                              })
                              .openapi({
                                description: 'Details about the fees/charges',
                                required: ['FeeType', 'ApplicationFrequency'],
                              }),
                          )
                          .min(1)
                          .openapi({
                            description: 'Details about the fees/charges',
                            title: 'OverdraftFeeChargeDetail',
                          }),
                      })
                      .openapi({
                        description: 'Overdraft fees and charges details',
                        required: ['OverdraftFeeChargeDetail'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Overdraft fees and charges details',
                    title: 'OverdraftFeesCharges',
                  }),
                OverdraftTierBand: z
                  .array(
                    z
                      .object({
                        BankGuaranteedIndicator: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates that a bank provides the overdraft limit up to TierValueMIn to all customers automatically',
                            title: 'BankGuaranteedIndicator',
                          }),
                        EAR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently\nused interchangeably), being the actual annual interest rate of an Overdraft.',
                            title: 'EAR',
                          }),
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a overdraft.',
                            title: 'Identification',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier/band details',
                            title: 'Notes',
                          }),
                        OverdraftFeesCharges: z
                          .array(
                            z
                              .object({
                                OverdraftFeeChargeCap: z
                                  .array(
                                    z
                                      .object({
                                        CappingPeriod: z
                                          .enum([
                                            'AcademicTerm',
                                            'Day',
                                            'Half Year',
                                            'Month',
                                            'Quarter',
                                            'Week',
                                            'Year',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                            title: 'CappingPeriod',
                                          }),
                                        FeeCapAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Cap amount charged for a fee/charge',
                                            title: 'FeeCapAmount',
                                          }),
                                        FeeCapOccurrence: z
                                          .float32()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                            title: 'FeeCapOccurrence',
                                          }),
                                        FeeType: z
                                          .array(
                                            z
                                              .enum([
                                                'ArrangedOverdraft',
                                                'EmergencyBorrowing',
                                                'BorrowingItem',
                                                'OverdraftRenewal',
                                                'AnnualReview',
                                                'OverdraftSetup',
                                                'Surcharge',
                                                'TempOverdraft',
                                                'UnauthorisedBorrowing',
                                                'UnauthorisedPaidTrans',
                                                'Other',
                                                'UnauthorisedUnpaidTrans',
                                              ])
                                              .openapi({ description: 'Overdraft fee type' }),
                                          )
                                          .min(1)
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                            title: 'FeeType',
                                          }),
                                        MinMaxType: z
                                          .enum(['Minimum', 'Maximum'])
                                          .openapi({
                                            description:
                                              'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                            title: 'MinMaxType',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Notes related to Overdraft fee charge cap',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .array(
                                            z
                                              .object({
                                                Code: z
                                                  .string()
                                                  .regex(/^\w{0,4}$/)
                                                  .min(0)
                                                  .max(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'The four letter Mnemonic used within an XML file to identify a code',
                                                    title: 'Code',
                                                  }),
                                                Description: z
                                                  .string()
                                                  .min(1)
                                                  .max(350)
                                                  .openapi({
                                                    description:
                                                      'Description to describe the purpose of the code',
                                                    title: 'Description',
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(70)
                                                  .openapi({
                                                    description:
                                                      'Long name associated with the code',
                                                    title: 'Name',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                required: ['Name', 'Description'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                          }),
                                        OverdraftControlIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies for the overdraft control feature/benefit',
                                            title: 'OverdraftControlIndicator',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                        required: ['FeeType', 'MinMaxType'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                                OverdraftFeeChargeDetail: z
                                  .array(
                                    z
                                      .object({
                                        ApplicationFrequency: z
                                          .enum([
                                            'AccountClosing',
                                            'AccountOpening',
                                            'AcademicTerm',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAccountAnniversary',
                                            'Other',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .openapi({
                                            description:
                                              'Frequency at which the overdraft charge is applied to the account',
                                            title: 'ApplicationFrequency',
                                          }),
                                        CalculationFrequency: z
                                          .enum([
                                            'AccountClosing',
                                            'AccountOpening',
                                            'AcademicTerm',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAccountAnniversary',
                                            'Other',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'How often is the overdraft fee/charge calculated for the account.',
                                            title: 'CalculationFrequency',
                                          }),
                                        FeeAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                            title: 'FeeAmount',
                                          }),
                                        FeeRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRate',
                                          }),
                                        FeeRateType: z
                                          .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRateType',
                                          }),
                                        FeeType: z
                                          .enum([
                                            'ArrangedOverdraft',
                                            'EmergencyBorrowing',
                                            'BorrowingItem',
                                            'OverdraftRenewal',
                                            'AnnualReview',
                                            'OverdraftSetup',
                                            'Surcharge',
                                            'TempOverdraft',
                                            'UnauthorisedBorrowing',
                                            'UnauthorisedPaidTrans',
                                            'Other',
                                            'UnauthorisedUnpaidTrans',
                                          ])
                                          .openapi({
                                            description: 'Overdraft fee type',
                                            title: 'FeeType',
                                          }),
                                        IncrementalBorrowingAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                            title: 'IncrementalBorrowingAmount',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                            title: 'Notes',
                                          }),
                                        OtherApplicationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other application frequencies that are not available in the standard code list',
                                            required: ['Name', 'Description'],
                                            title: 'OtherApplicationFrequency',
                                          }),
                                        OtherCalculationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other calculation frequency which is not available in the standard code set.',
                                            required: ['Name', 'Description'],
                                            title: 'OtherCalculationFrequency',
                                          }),
                                        OtherFeeRateType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee rate type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                            title: 'OtherFeeRateType',
                                          }),
                                        OtherFeeType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other Fee type which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                            title: 'OtherFeeType',
                                          }),
                                        OverdraftControlIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies for the overdraft control feature/benefit',
                                            title: 'OverdraftControlIndicator',
                                          }),
                                        OverdraftFeeChargeCap: z
                                          .strictObject({
                                            CappingPeriod: z
                                              .enum([
                                                'AcademicTerm',
                                                'Day',
                                                'Half Year',
                                                'Month',
                                                'Quarter',
                                                'Week',
                                                'Year',
                                              ])
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                                title: 'CappingPeriod',
                                              }),
                                            FeeCapAmount: z
                                              .string()
                                              .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Cap amount charged for a fee/charge',
                                                title: 'FeeCapAmount',
                                              }),
                                            FeeCapOccurrence: z
                                              .float32()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                                title: 'FeeCapOccurrence',
                                              }),
                                            FeeType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'ArrangedOverdraft',
                                                    'EmergencyBorrowing',
                                                    'BorrowingItem',
                                                    'OverdraftRenewal',
                                                    'AnnualReview',
                                                    'OverdraftSetup',
                                                    'Surcharge',
                                                    'TempOverdraft',
                                                    'UnauthorisedBorrowing',
                                                    'UnauthorisedPaidTrans',
                                                    'Other',
                                                    'UnauthorisedUnpaidTrans',
                                                  ])
                                                  .openapi({ description: 'Overdraft fee type' }),
                                              )
                                              .min(1)
                                              .openapi({
                                                description:
                                                  'Fee/charge type which is being capped',
                                                title: 'FeeType',
                                              }),
                                            MinMaxType: z
                                              .enum(['Minimum', 'Maximum'])
                                              .openapi({
                                                description:
                                                  'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                                title: 'MinMaxType',
                                              }),
                                            Notes: z
                                              .array(
                                                z
                                                  .string()
                                                  .min(1)
                                                  .max(2000)
                                                  .openapi({ description: 'maxLength 2000 text' }),
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Notes related to Overdraft fee charge cap',
                                                title: 'Notes',
                                              }),
                                            OtherFeeType: z
                                              .array(
                                                z
                                                  .object({
                                                    Code: z
                                                      .string()
                                                      .regex(/^\w{0,4}$/)
                                                      .min(0)
                                                      .max(4)
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'The four letter Mnemonic used within an XML file to identify a code',
                                                        title: 'Code',
                                                      }),
                                                    Description: z
                                                      .string()
                                                      .min(1)
                                                      .max(350)
                                                      .openapi({
                                                        description:
                                                          'Description to describe the purpose of the code',
                                                        title: 'Description',
                                                      }),
                                                    Name: z
                                                      .string()
                                                      .min(1)
                                                      .max(70)
                                                      .openapi({
                                                        description:
                                                          'Long name associated with the code',
                                                        title: 'Name',
                                                      }),
                                                  })
                                                  .openapi({
                                                    description:
                                                      'Other fee type code which is not available in the standard code set',
                                                    required: ['Name', 'Description'],
                                                  }),
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                title: 'OtherFeeType',
                                              }),
                                            OverdraftControlIndicator: z
                                              .boolean()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Specifies for the overdraft control feature/benefit',
                                                title: 'OverdraftControlIndicator',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                            required: ['FeeType', 'MinMaxType'],
                                            title: 'OverdraftFeeChargeCap',
                                          }),
                                      })
                                      .openapi({
                                        description: 'Details about the fees/charges',
                                        required: ['FeeType', 'ApplicationFrequency'],
                                      }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Details about the fees/charges',
                                    title: 'OverdraftFeeChargeDetail',
                                  }),
                              })
                              .openapi({
                                description: 'Overdraft fees and charges',
                                required: ['OverdraftFeeChargeDetail'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Overdraft fees and charges',
                            title: 'OverdraftFeesCharges',
                          }),
                        OverdraftInterestChargingCoverage: z
                          .enum(['Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description: 'Interest charged on whole amount or tiered/banded',
                            title: 'OverdraftInterestChargingCoverage',
                          }),
                        RepresentativeAPR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account.',
                            title: 'RepresentativeAPR',
                          }),
                        TierValueMax: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Maximum value of Overdraft Tier/Band',
                            title: 'TierValueMax',
                          }),
                        TierValueMin: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description: 'Minimum value of Overdraft Tier/Band',
                            title: 'TierValueMin',
                          }),
                      })
                      .openapi({
                        description: 'Provides overdraft details for a specific tier or band',
                        required: ['TierValueMin'],
                      }),
                  )
                  .min(1)
                  .openapi({
                    description: 'Provides overdraft details for a specific tier or band',
                    title: 'OverdraftTierBand',
                  }),
                OverdraftType: z
                  .enum(['Committed', 'OnDemand', 'Other'])
                  .exactOptional()
                  .openapi({
                    description:
                      "An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.",
                    title: 'OverdraftType',
                  }),
                TierBandMethod: z
                  .enum(['Tiered', 'Whole', 'Banded'])
                  .openapi({
                    description:
                      "The methodology of how overdraft is charged. It can be:\n'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). \n'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation\n'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.",
                    title: 'TierBandMethod',
                  }),
              })
              .openapi({
                description: 'Tier band set details',
                required: ['TierBandMethod', 'OverdraftTierBand'],
              }),
          )
          .min(1)
          .openapi({ description: 'Tier band set details', title: 'OverdraftTierBandSet' }),
      })
      .exactOptional()
      .openapi({
        description: 'Details about Overdraft rates, fees & charges',
        required: ['OverdraftTierBandSet'],
        title: 'Overdraft',
      }),
    ProductDetails: z
      .strictObject({
        MonthlyMaximumCharge: z
          .string()
          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
          .exactOptional()
          .openapi({
            description:
              'The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order',
            title: 'MonthlyMaximumCharge',
          }),
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({
            description: 'Optional additional notes to supplement the Core product details',
            title: 'Notes',
          }),
        Segment: z
          .array(
            z
              .enum([
                'Basic',
                'BenefitAndReward',
                'CreditInterest',
                'Cashback',
                'General',
                'Graduate',
                'Other',
                'Overdraft',
                'Packaged',
                'Premium',
                'Reward',
                'Student',
                'YoungAdult',
                'Youth',
              ])
              .openapi({
                description:
                  'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\n\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to PCA products, they are segmented in relation to different markets that they wish to focus on. ',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\n\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to PCA products, they are segmented in relation to different markets that they wish to focus on. ',
            title: 'Segment',
          }),
      })
      .exactOptional()
      .openapi({ title: 'ProductDetails', required: [] }),
  })
  .openapi({ title: 'PCA', required: [] })
  .openapi('OBPCAData1')

const PhoneNumber_1Schema = z
  .string()
  .regex(/\+[0-9]{1,3}-[0-9()+\-]{1,30}/)
  .openapi({
    description:
      'Collection of information that identifies a mobile phone number, as defined by telecom services.',
  })
  .openapi('PhoneNumber_1')

const PartyIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.',
  })
  .openapi('PartyId')

const PartyNumberSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Number assigned by an agent to identify its customer.' })
  .openapi('PartyNumber')

const PhoneNumber_0Schema = z
  .string()
  .regex(/\+[0-9]{1,3}-[0-9()+\-]{1,30}/)
  .openapi({
    description:
      'Collection of information that identifies a phone number, as defined by telecom services.',
  })
  .openapi('PhoneNumber_0')

const OBPartyRelationships1Schema = z
  .object({
    Account: z
      .object({
        Id: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'Unique identification as assigned by the ASPSP to uniquely identify the related resource.',
          }),
        Related: z.url().openapi({ description: 'Absolute URI to the related resource.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Relationship to the Account resource.',
        required: ['Related', 'Id'],
      }),
  })
  .openapi({ description: "The Party's relationships with other resources.", required: [] })
  .openapi('OBPartyRelationships1')

const OBParty2Schema = z
  .strictObject({
    AccountRole: OBExternalAccountRole1CodeSchema.exactOptional(),
    Address: z
      .array(
        z
          .object({
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
              .max(5)
              .exactOptional(),
            AddressType: OBAddressTypeCodeSchema.exactOptional(),
            BuildingNumber: BuildingNumberSchema.exactOptional(),
            Country: CountryCodeSchema,
            CountrySubDivision: CountrySubDivisionSchema.exactOptional(),
            PostCode: PostCodeSchema.exactOptional(),
            StreetName: StreetNameSchema.exactOptional(),
            TownName: TownNameSchema.exactOptional(),
          })
          .openapi({ description: 'Postal address of a party.', required: ['Country'] }),
      )
      .exactOptional(),
    BeneficialOwnership: z.boolean().exactOptional(),
    EmailAddress: EmailAddressSchema.exactOptional(),
    FullLegalName: FullLegalNameSchema.exactOptional(),
    LegalStructure: OBExternalLegalStructureType1CodeSchema.exactOptional(),
    Mobile: PhoneNumber_1Schema.exactOptional(),
    Name: Name_3Schema.exactOptional(),
    PartyId: PartyIdSchema,
    PartyNumber: PartyNumberSchema.exactOptional(),
    PartyType: OBExternalPartyType1CodeSchema.exactOptional(),
    Phone: PhoneNumber_0Schema.exactOptional(),
    Relationships: OBPartyRelationships1Schema.exactOptional(),
  })
  .openapi({ required: ['PartyId'] })
  .openapi('OBParty2')

const OBRate1_0Schema = z
  .number()
  .openapi({
    description:
      'Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBRate1_0')

const OBRate1_1Schema = z
  .number()
  .openapi({
    description:
      'field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.',
  })
  .openapi('OBRate1_1')

const OBReadAccount6Schema = z
  .strictObject({
    Data: z
      .object({ Account: z.array(OBAccount6Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadAccount6')

const OBReadBalance1Schema = z
  .strictObject({
    Data: z
      .object({
        Balance: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                Amount: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                  })
                  .openapi({
                    description: 'Amount of money of the cash balance.',
                    required: ['Amount', 'Currency'],
                  }),
                CreditDebitIndicator: OBCreditDebitCode_2Schema,
                CreditLine: z
                  .array(
                    z
                      .object({
                        Amount: z
                          .object({
                            Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                            Currency: ActiveOrHistoricCurrencyCode_1Schema,
                          })
                          .exactOptional()
                          .openapi({
                            description: 'Amount of money of the credit line.',
                            required: ['Amount', 'Currency'],
                          }),
                        Included: z
                          .boolean()
                          .openapi({
                            description:
                              'Indicates whether or not the credit line is included in the balance of the account.\nUsage: If not present, credit line is not included in the balance amount of the account.',
                          }),
                        Type: z
                          .enum(['Available', 'Credit', 'Emergency', 'Pre-Agreed', 'Temporary'])
                          .exactOptional()
                          .openapi({ description: 'Limit type, in a coded form.' }),
                      })
                      .openapi({
                        description: 'Set of elements used to provide details on the credit line.',
                        required: ['Included'],
                      }),
                  )
                  .exactOptional(),
                DateTime: z.iso
                  .datetime({ offset: true })
                  .openapi({
                    description:
                      'Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                  }),
                Type: OBBalanceType1CodeSchema,
              })
              .openapi({
                description: 'Set of elements used to define the balance details.',
                required: ['AccountId', 'CreditDebitIndicator', 'Type', 'DateTime', 'Amount'],
              }),
          )
          .min(1),
      })
      .openapi({ required: ['Balance'] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadBalance1')

const OBReadBeneficiary5Schema = z
  .strictObject({
    Data: z
      .object({ Beneficiary: z.array(OBBeneficiary5Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadBeneficiary5')

const OBRisk2Schema = z
  .strictObject({})
  .openapi({
    description:
      'The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.',
  })
  .openapi('OBRisk2')

const OBReadConsent1Schema = z
  .strictObject({
    Data: z
      .object({
        ExpirationDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified date and time the permissions will expire.\nIf this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Permissions: z
          .array(
            z
              .enum([
                'ReadAccountsBasic',
                'ReadAccountsDetail',
                'ReadBalances',
                'ReadBeneficiariesBasic',
                'ReadBeneficiariesDetail',
                'ReadDirectDebits',
                'ReadOffers',
                'ReadPAN',
                'ReadParty',
                'ReadPartyPSU',
                'ReadProducts',
                'ReadScheduledPaymentsBasic',
                'ReadScheduledPaymentsDetail',
                'ReadStandingOrdersBasic',
                'ReadStandingOrdersDetail',
                'ReadStatementsBasic',
                'ReadStatementsDetail',
                'ReadTransactionsBasic',
                'ReadTransactionsCredits',
                'ReadTransactionsDebits',
                'ReadTransactionsDetail',
              ])
              .openapi({
                description:
                  'Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.',
              }),
          )
          .min(1),
        TransactionFromDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified start date and time for the transaction query period.\nIf this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        TransactionToDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified end date and time for the transaction query period.\nIf this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({ required: ['Permissions'] }),
    Risk: OBRisk2Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBReadConsent1')

const OBReadConsentResponse1Schema = z
  .strictObject({
    Data: z
      .object({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'Unique identification as assigned to identify the account access consent resource.',
          }),
        CreationDateTime: CreationDateTimeSchema,
        ExpirationDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified date and time the permissions will expire.\nIf this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Permissions: z
          .array(
            z
              .enum([
                'ReadAccountsBasic',
                'ReadAccountsDetail',
                'ReadBalances',
                'ReadBeneficiariesBasic',
                'ReadBeneficiariesDetail',
                'ReadDirectDebits',
                'ReadOffers',
                'ReadPAN',
                'ReadParty',
                'ReadPartyPSU',
                'ReadProducts',
                'ReadScheduledPaymentsBasic',
                'ReadScheduledPaymentsDetail',
                'ReadStandingOrdersBasic',
                'ReadStandingOrdersDetail',
                'ReadStatementsBasic',
                'ReadStatementsDetail',
                'ReadTransactionsBasic',
                'ReadTransactionsCredits',
                'ReadTransactionsDebits',
                'ReadTransactionsDetail',
              ])
              .openapi({
                description:
                  'Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.',
              }),
          )
          .min(1),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Rejected', 'Revoked'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: StatusUpdateDateTimeSchema,
        TransactionFromDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified start date and time for the transaction query period.\nIf this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        TransactionToDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified end date and time for the transaction query period.\nIf this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Permissions',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk2Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBReadConsentResponse1')

const StartDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('StartDateTime')

const StatementIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.',
  })
  .openapi('StatementId')

const RateSchema = z
  .string()
  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
  .openapi({ description: 'Rate associated with the statement rate type.' })
  .openapi('Rate')

const StatementReferenceSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Unique reference for the statement. This reference may be optionally populated if available.',
  })
  .openapi('StatementReference')

const ValueSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({ description: 'Value associated with the statement value type.' })
  .openapi('Value')

const OBStatement2Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreationDateTime: CreationDateTimeSchema,
    EndDateTime: EndDateTimeSchema,
    StartDateTime: StartDateTimeSchema,
    StatementAmount: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_8Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBExternalStatementAmountType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic amount for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementBenefit: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_5Schema,
            Type: OBExternalStatementBenefitType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a benefit or reward amount for the statement resource.',
            required: ['Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementDateTime: z
      .array(
        z
          .object({ DateTime: DateTimeSchema, Type: OBExternalStatementDateTimeType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic date time for the statement resource.',
            required: ['DateTime', 'Type'],
          }),
      )
      .exactOptional(),
    StatementDescription: z
      .array(
        z
          .string()
          .min(1)
          .max(500)
          .openapi({
            description: 'Other descriptions that may be available for the statement resource.',
          }),
      )
      .exactOptional(),
    StatementFee: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_6Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Description: Description_1Schema.exactOptional(),
            Frequency: OBExternalStatementFeeFrequency1CodeSchema.exactOptional(),
            Rate: OBRate1_0Schema.exactOptional(),
            RateType: OBExternalStatementFeeRateType1CodeSchema.exactOptional(),
            Type: OBExternalStatementFeeType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a fee for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementId: StatementIdSchema.exactOptional(),
    StatementInterest: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_7Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Description: Description_2Schema.exactOptional(),
            Frequency: OBExternalStatementInterestFrequency1CodeSchema.exactOptional(),
            Rate: OBRate1_1Schema.exactOptional(),
            RateType: OBExternalStatementInterestRateType1CodeSchema.exactOptional(),
            Type: OBExternalStatementInterestType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic interest amount related to the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementRate: z
      .array(
        z
          .object({ Rate: RateSchema, Type: OBExternalStatementRateType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic rate related to the statement resource.',
            required: ['Rate', 'Type'],
          }),
      )
      .exactOptional(),
    StatementReference: StatementReferenceSchema.exactOptional(),
    StatementValue: z
      .array(
        z
          .object({ Type: OBExternalStatementValueType1CodeSchema, Value: ValueSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic number value related to the statement resource.',
            required: ['Value', 'Type'],
          }),
      )
      .exactOptional(),
    Type: OBExternalStatementType1CodeSchema,
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'Type', 'StartDateTime', 'EndDateTime', 'CreationDateTime'],
  })
  .openapi('OBStatement2')

const OBReadDataStatement2Schema = z
  .strictObject({ Statement: z.array(OBStatement2Schema).exactOptional() })
  .openapi({ required: [] })
  .openapi('OBReadDataStatement2')

const OBTransactionCashBalanceSchema = z
  .strictObject({
    Amount: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .openapi({
        description:
          'Amount of money of the cash balance after a transaction entry is applied to the account..',
        required: ['Amount', 'Currency'],
      }),
    CreditDebitIndicator: OBCreditDebitCode_2Schema,
    Type: OBBalanceType1CodeSchema,
  })
  .openapi({
    description:
      'Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.',
    required: ['CreditDebitIndicator', 'Type', 'Amount'],
  })
  .openapi('OBTransactionCashBalance')

const OBTransactionCardInstrument1Schema = z
  .strictObject({
    AuthorisationType: z
      .enum(['ConsumerDevice', 'Contactless', 'None', 'PIN'])
      .exactOptional()
      .openapi({ description: 'The card authorisation type.' }),
    CardSchemeName: z
      .enum(['AmericanExpress', 'Diners', 'Discover', 'MasterCard', 'VISA'])
      .openapi({ description: 'Name of the card scheme.' }),
    Identification: z
      .string()
      .min(1)
      .max(34)
      .exactOptional()
      .openapi({
        description:
          'Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.',
      }),
    Name: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({ description: 'Name of the cardholder using the card instrument.' }),
  })
  .openapi({
    description: 'Set of elements to describe the card instrument used in the transaction.',
    required: ['CardSchemeName'],
  })
  .openapi('OBTransactionCardInstrument1')

const ProprietaryBankTransactionCodeStructure1Schema = z
  .strictObject({
    Code: z
      .string()
      .min(1)
      .max(35)
      .openapi({
        description: 'Proprietary bank transaction code to identify the underlying transaction.',
      }),
    Issuer: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identification of the issuer of the proprietary bank transaction code.',
      }),
  })
  .openapi({
    description: 'Set of elements to fully identify a proprietary bank transaction code.',
    required: ['Code'],
  })
  .openapi('ProprietaryBankTransactionCodeStructure1')

const TransactionIdSchema = z
  .string()
  .min(1)
  .max(210)
  .openapi({
    description:
      'Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.',
  })
  .openapi('TransactionId')

const TransactionInformationSchema = z
  .string()
  .min(1)
  .max(500)
  .openapi({
    description:
      'Further details of the transaction. \nThis is the transaction narrative, which is unstructured text.',
  })
  .openapi('TransactionInformation')

const OBTransactionMutability1CodeSchema = z
  .enum(['Mutable', 'Immutable'])
  .openapi({ description: 'Specifies the Mutability of the Transaction record.' })
  .openapi('OBTransactionMutability1Code')

const TransactionReferenceSchema = z
  .string()
  .min(1)
  .max(210)
  .openapi({
    description:
      'Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.',
  })
  .openapi('TransactionReference')

const ValueDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.\nUsage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.\nFor transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ValueDateTime')

const OBTransaction6Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    AddressLine: AddressLineSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmount_9Schema,
    Balance: OBTransactionCashBalanceSchema.exactOptional(),
    BankTransactionCode: OBBankTransactionCodeStructure1Schema.exactOptional(),
    BookingDateTime: BookingDateTimeSchema,
    CardInstrument: OBTransactionCardInstrument1Schema.exactOptional(),
    ChargeAmount: OBActiveOrHistoricCurrencyAndAmount_10Schema.exactOptional(),
    CreditDebitIndicator: OBCreditDebitCode_1Schema,
    CreditorAccount: OBCashAccount6_0Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_1Schema.exactOptional(),
    CurrencyExchange: OBCurrencyExchange5Schema.exactOptional(),
    DebtorAccount: OBCashAccount6_1Schema.exactOptional(),
    DebtorAgent: OBBranchAndFinancialInstitutionIdentification6_2Schema.exactOptional(),
    MerchantDetails: OBMerchantDetails1Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    StatementReference: z.array(StatementReferenceSchema).exactOptional(),
    Status: OBEntryStatus1CodeSchema,
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    TransactionId: TransactionIdSchema.exactOptional(),
    TransactionInformation: TransactionInformationSchema.exactOptional(),
    TransactionMutability: OBTransactionMutability1CodeSchema.exactOptional(),
    TransactionReference: TransactionReferenceSchema.exactOptional(),
    ValueDateTime: ValueDateTimeSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'CreditDebitIndicator', 'Status', 'BookingDateTime', 'Amount'],
  })
  .openapi('OBTransaction6')

const OBReadDataTransaction6Schema = z
  .strictObject({ Transaction: z.array(OBTransaction6Schema).exactOptional() })
  .openapi({ required: [] })
  .openapi('OBReadDataTransaction6')

const PreviousPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('PreviousPaymentDateTime')

const OBReadDirectDebit2Schema = z
  .strictObject({
    Data: z
      .object({
        DirectDebit: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                DirectDebitId: DirectDebitIdSchema.exactOptional(),
                DirectDebitStatusCode: OBExternalDirectDebitStatus1CodeSchema.exactOptional(),
                Frequency: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Regularity with which direct debit instructions are to be created and processed.',
                    'x-namespaced-enum': [
                      'UK.OBIE.Annual',
                      'UK.OBIE.Daily',
                      'UK.OBIE.Fortnightly',
                      'UK.OBIE.HalfYearly',
                      'UK.OBIE.Monthly',
                      'UK.OBIE.NotKnown',
                      'UK.OBIE.Quarterly',
                      'UK.OBIE.Weekly',
                    ],
                  }),
                MandateIdentification: MandateIdentificationSchema,
                Name: Name_2Schema,
                PreviousPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_0Schema.exactOptional(),
                PreviousPaymentDateTime: PreviousPaymentDateTimeSchema.exactOptional(),
              })
              .openapi({
                description: 'Account to or from which a cash entry is made.',
                required: ['AccountId', 'MandateIdentification', 'Name'],
              }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadDirectDebit2')

const OBReadOffer1Schema = z
  .strictObject({
    Data: z
      .object({
        Offer: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                Amount: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Amount of money associated with the offer type.',
                    required: ['Amount', 'Currency'],
                  }),
                Description: z
                  .string()
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'Further details of the offer.' }),
                EndDateTime: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                  }),
                Fee: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Fee associated with the offer type.',
                    required: ['Amount', 'Currency'],
                  }),
                OfferId: z
                  .string()
                  .min(1)
                  .max(40)
                  .exactOptional()
                  .openapi({
                    description:
                      'A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.',
                  }),
                OfferType: z
                  .enum([
                    'BalanceTransfer',
                    'LimitIncrease',
                    'MoneyTransfer',
                    'Other',
                    'PromotionalRate',
                  ])
                  .exactOptional()
                  .openapi({ description: 'Offer type, in a coded form.' }),
                Rate: z
                  .string()
                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({ description: 'Rate associated with the offer type.' }),
                StartDateTime: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                  }),
                Term: z
                  .string()
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'Further details of the term of the offer.' }),
                URL: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'URL (Uniform Resource Locator) where documentation on the offer can be found',
                  }),
                Value: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Value associated with the offer type.' }),
              })
              .openapi({ required: ['AccountId'] }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadOffer1')

const OBReadParty2Schema = z
  .strictObject({
    Data: z.object({ Party: OBParty2Schema.exactOptional() }).openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadParty2')

const OBReadParty3Schema = z
  .strictObject({
    Data: z.object({ Party: z.array(OBParty2Schema).exactOptional() }).openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadParty3')

const OBInterestCalculationMethod1CodeSchema = z
  .enum(['ITCO', 'ITOT', 'ITSI'])
  .openapi({ description: 'Methods of calculating interest' })
  .openapi('OBInterestCalculationMethod1Code')

const OBCodeMnemonicSchema = z
  .string()
  .regex(/^\\w{0,4}$/)
  .openapi({ description: 'The four letter Mnemonic used within an XML file to identify a code' })
  .openapi('OBCodeMnemonic')

const OBOtherCodeType1_0Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({ required: ['Name', 'Description'] })
  .openapi('OBOtherCodeType1_0')

const OBInterestFixedVariableType1CodeSchema = z
  .enum(['INFI', 'INVA'])
  .openapi({ description: 'Type of interest rate, Fixed or Variable' })
  .openapi('OBInterestFixedVariableType1Code')

const OBOtherCodeType1_1Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other application frequencies that are not available in the standard code list',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_1')

const OBOtherCodeType1_2Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other calculation frequency which is not available in the standard code set.',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_2')

const OBFeeFrequency1Code_4Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'Period e.g. day, week, month etc. for which the fee/charge is capped' })
  .openapi('OBFeeFrequency1Code_4')

const OBAmount1_4Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
  })
  .openapi('OBAmount1_4')

const OBMinMaxType1CodeSchema = z
  .enum(['FMMN', 'FMMX'])
  .openapi({ description: 'Min Max type' })
  .openapi('OBMinMaxType1Code')

const OBFeeFrequency1Code_2Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'How frequently the fee/charge is applied to the account' })
  .openapi('OBFeeFrequency1Code_2')

const OBFeeFrequency1Code_3Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'How frequently the fee/charge is calculated' })
  .openapi('OBFeeFrequency1Code_3')

const OBAmount1_3Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
  })
  .openapi('OBAmount1_3')

const OBRate1_12Schema = z
  .string()
  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBRate1_12')

const OBInterestRateType1Code_1Schema = z
  .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
  .openapi({
    description:
      'Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBInterestRateType1Code_1')

const OBFeeType1CodeSchema = z
  .enum(['FEPF', 'FTOT', 'FYAF', 'FYAM', 'FYAQ', 'FYCP', 'FYDB', 'FYMI', 'FYXX'])
  .openapi({ description: 'Fee/Charge Type' })
  .openapi('OBFeeType1Code')

const OBOtherCodeType1_6Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other application frequencies not covered in the standard code list',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_6')

const OBOtherCodeType1_7Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other calculation frequency which is not available in standard code set.',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_7')

const OBOtherCodeType1_5Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other fee rate type which is not in the standard rate type list',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_5')

const OBFeeCategory1CodeSchema = z
  .enum(['FCOT', 'FCRE', 'FCSV'])
  .openapi({ description: 'Categorisation of fees and charges into standard categories.' })
  .openapi('OBFeeCategory1Code')

const OBOtherFeeChargeDetailTypeSchema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    FeeCategory: OBFeeCategory1CodeSchema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other Fee/charge type which is not available in the standard code set',
    required: ['FeeCategory', 'Name', 'Description'],
  })
  .openapi('OBOtherFeeChargeDetailType')

const OBPeriod1CodeSchema = z
  .enum(['PACT', 'PDAY', 'PHYR', 'PMTH', 'PQTR', 'PWEK', 'PYER'])
  .openapi({ description: 'Period e.g. day, week, month etc. for which the fee/charge is capped' })
  .openapi('OBPeriod1Code')

const OBOtherCodeType1_8Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other fee rate type which is not available in the standard code set',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_8')

const OBAmount1_0Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({ description: 'Cap amount charged for a fee/charge' })
  .openapi('OBAmount1_0')

const OBFeeFrequency1Code_0Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'Frequency at which the overdraft charge is applied to the account' })
  .openapi('OBFeeFrequency1Code_0')

const OBFeeFrequency1Code_1Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'How often is the overdraft fee/charge calculated for the account.' })
  .openapi('OBFeeFrequency1Code_1')

const OBAmount1_2Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
  })
  .openapi('OBAmount1_2')

const OBRate1_02Schema = z
  .string()
  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBRate1_02')

const OBInterestRateType1Code_0Schema = z
  .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
  .openapi({
    description:
      'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBInterestRateType1Code_0')

const OBOverdraftFeeType1CodeSchema = z
  .enum([
    'FBAO',
    'FBAR',
    'FBEB',
    'FBIT',
    'FBOR',
    'FBOS',
    'FBSC',
    'FBTO',
    'FBUB',
    'FBUT',
    'FTOT',
    'FTUT',
  ])
  .openapi({ description: 'Overdraft fee type' })
  .openapi('OBOverdraftFeeType1Code')

const OBAmount1_1Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
  })
  .openapi('OBAmount1_1')

const OBOtherCodeType1_4Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other fee rate type code which is not available in the standard code set',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_4')

const OBOtherCodeType1_3Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Description: Description_3Schema,
    Name: Name_4Schema,
  })
  .openapi({
    description: 'Other Fee type which is not available in the standard code set',
    required: ['Name', 'Description'],
  })
  .openapi('OBOtherCodeType1_3')

const OBReadProduct2Schema = z
  .strictObject({
    Data: z
      .object({
        Product: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                BCA: OBBCAData1Schema.exactOptional(),
                MarketingStateId: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of a  Product Marketing State.',
                  }),
                OtherProductType: z
                  .object({
                    CreditInterest: z
                      .object({
                        TierBandSet: z
                          .array(
                            z
                              .object({
                                CalculationMethod:
                                  OBInterestCalculationMethod1CodeSchema.exactOptional(),
                                Destination: z
                                  .enum(['INOT', 'INPA', 'INSC'])
                                  .openapi({
                                    description:
                                      'Describes whether accrued interest is payable only to the BCA or to another bank account',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Optional additional notes to supplement the Tier Band Set details',
                                      }),
                                  )
                                  .exactOptional(),
                                OtherCalculationMethod: OBOtherCodeType1_0Schema.exactOptional(),
                                OtherDestination: OBOtherCodeType1_0Schema.exactOptional(),
                                TierBand: z
                                  .array(
                                    z
                                      .object({
                                        AER: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \nRead more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A',
                                          }),
                                        ApplicationFrequency: z
                                          .enum([
                                            'FQAT',
                                            'FQDY',
                                            'FQHY',
                                            'FQMY',
                                            'FQOT',
                                            'FQQY',
                                            'FQSD',
                                            'FQWY',
                                            'FQYY',
                                          ])
                                          .openapi({
                                            description:
                                              "How often is interest applied to the Product for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's account.",
                                          }),
                                        BankInterestRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Bank Interest for the product',
                                          }),
                                        BankInterestRateType: z
                                          .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account.",
                                          }),
                                        CalculationFrequency: z
                                          .enum([
                                            'FQAT',
                                            'FQDY',
                                            'FQHY',
                                            'FQMY',
                                            'FQOT',
                                            'FQQY',
                                            'FQSD',
                                            'FQWY',
                                            'FQYY',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'How often is credit interest calculated for the account.',
                                          }),
                                        DepositInterestAppliedCoverage: z
                                          .enum(['INBA', 'INTI', 'INWH'])
                                          .exactOptional()
                                          .openapi({
                                            description: 'Amount on which Interest applied.',
                                          }),
                                        FixedVariableInterestRateType:
                                          OBInterestFixedVariableType1CodeSchema,
                                        Identification: z
                                          .string()
                                          .min(1)
                                          .max(35)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Unique and unambiguous identification of a  Tier Band for the Product.',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({
                                                description:
                                                  'Optional additional notes to supplement the Tier Band details',
                                              }),
                                          )
                                          .exactOptional(),
                                        OtherApplicationFrequency:
                                          OBOtherCodeType1_1Schema.exactOptional(),
                                        OtherBankInterestType: z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Description: Description_3Schema,
                                            Name: Name_4Schema,
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other interest rate types which are not available in the standard code list',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherCalculationFrequency:
                                          OBOtherCodeType1_2Schema.exactOptional(),
                                        TierValueMaximum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum deposit value for which the credit interest tier applies.',
                                          }),
                                        TierValueMinimum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'Minimum deposit value for which the credit interest tier applies.',
                                          }),
                                      })
                                      .openapi({
                                        description: 'Tier Band Details',
                                        required: [
                                          'TierValueMinimum',
                                          'ApplicationFrequency',
                                          'FixedVariableInterestRateType',
                                          'AER',
                                        ],
                                      }),
                                  )
                                  .min(1),
                                TierBandMethod: z
                                  .enum(['INBA', 'INTI', 'INWH'])
                                  .openapi({
                                    description:
                                      "The methodology of how credit interest is paid/applied. It can be:-\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n3. Whole\nThe same interest rate is applied irrespective of the product holder's account balance",
                                  }),
                              })
                              .openapi({
                                description:
                                  'The group of tiers or bands for which credit interest can be applied.',
                                required: ['TierBandMethod', 'Destination', 'TierBand'],
                              }),
                          )
                          .min(1),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Details about the interest that may be payable to the Account holders',
                        required: ['TierBandSet'],
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description of the Product associated with the account',
                      }),
                    LoanInterest: z
                      .object({
                        LoanInterestTierBandSet: z
                          .array(
                            z
                              .object({
                                CalculationMethod: OBInterestCalculationMethod1CodeSchema,
                                Identification: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Loan interest tierbandset identification. Used by  loan providers for internal use purpose.',
                                  }),
                                LoanInterestFeesCharges: z
                                  .array(
                                    z
                                      .object({
                                        LoanInterestFeeChargeCap: z
                                          .array(
                                            z
                                              .object({
                                                CappingPeriod:
                                                  OBFeeFrequency1Code_4Schema.exactOptional(),
                                                FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                                FeeCapOccurrence: Number_1Schema.exactOptional(),
                                                FeeType: z
                                                  .array(
                                                    z
                                                      .enum([
                                                        'FEPF',
                                                        'FTOT',
                                                        'FYAF',
                                                        'FYAM',
                                                        'FYAQ',
                                                        'FYCP',
                                                        'FYDB',
                                                        'FYMI',
                                                        'FYXX',
                                                      ])
                                                      .openapi({
                                                        description:
                                                          'Fee/charge type which is being capped',
                                                      }),
                                                  )
                                                  .min(1),
                                                MinMaxType: OBMinMaxType1CodeSchema,
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Free text for adding  extra details for fee charge cap',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherFeeType: z
                                                  .array(
                                                    z
                                                      .object({
                                                        Code: OBCodeMnemonicSchema.exactOptional(),
                                                        Description: Description_3Schema,
                                                        Name: Name_4Schema,
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Other fee type code which is not available in the standard code set',
                                                        required: ['Name', 'Description'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                              })
                                              .openapi({
                                                description:
                                                  'Details about any caps (minimum/maximum charges) that apply to a particular fee/charge',
                                                required: ['FeeType', 'MinMaxType'],
                                              }),
                                          )
                                          .exactOptional(),
                                        LoanInterestFeeChargeDetail: z
                                          .array(
                                            z
                                              .object({
                                                ApplicationFrequency: OBFeeFrequency1Code_2Schema,
                                                CalculationFrequency: OBFeeFrequency1Code_3Schema,
                                                FeeAmount: OBAmount1_3Schema.exactOptional(),
                                                FeeRate: OBRate1_12Schema.exactOptional(),
                                                FeeRateType:
                                                  OBInterestRateType1Code_1Schema.exactOptional(),
                                                FeeType: OBFeeType1CodeSchema,
                                                NegotiableIndicator: z
                                                  .boolean()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Fee/charge which is usually negotiable rather than a fixed amount',
                                                  }),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Optional additional notes to supplement the fee/charge details.',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherApplicationFrequency:
                                                  OBOtherCodeType1_6Schema.exactOptional(),
                                                OtherCalculationFrequency:
                                                  OBOtherCodeType1_7Schema.exactOptional(),
                                                OtherFeeRateType:
                                                  OBOtherCodeType1_5Schema.exactOptional(),
                                                OtherFeeType:
                                                  OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                              })
                                              .openapi({
                                                description: 'Other fees/charges details',
                                                required: [
                                                  'FeeType',
                                                  'ApplicationFrequency',
                                                  'CalculationFrequency',
                                                ],
                                              }),
                                          )
                                          .min(1),
                                      })
                                      .openapi({
                                        description:
                                          'Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits',
                                        required: ['LoanInterestFeeChargeDetail'],
                                      }),
                                  )
                                  .exactOptional(),
                                LoanInterestTierBand: z
                                  .array(
                                    z
                                      .object({
                                        FixedVariableInterestRateType:
                                          OBInterestFixedVariableType1CodeSchema,
                                        Identification: z
                                          .string()
                                          .min(1)
                                          .max(35)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Unique and unambiguous identification of a  Tier Band for a SME Loan.',
                                          }),
                                        LoanInterestFeesCharges: z
                                          .array(
                                            z
                                              .object({
                                                LoanInterestFeeChargeCap: z
                                                  .array(
                                                    z
                                                      .object({
                                                        CappingPeriod:
                                                          OBFeeFrequency1Code_4Schema.exactOptional(),
                                                        FeeCapAmount:
                                                          OBAmount1_4Schema.exactOptional(),
                                                        FeeCapOccurrence:
                                                          Number_1Schema.exactOptional(),
                                                        FeeType: z
                                                          .array(
                                                            z
                                                              .enum([
                                                                'FEPF',
                                                                'FTOT',
                                                                'FYAF',
                                                                'FYAM',
                                                                'FYAQ',
                                                                'FYCP',
                                                                'FYDB',
                                                                'FYMI',
                                                                'FYXX',
                                                              ])
                                                              .openapi({
                                                                description:
                                                                  'Fee/charge type which is being capped',
                                                              }),
                                                          )
                                                          .min(1),
                                                        MinMaxType: OBMinMaxType1CodeSchema,
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Free text for adding  extra details for fee charge cap',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType: z
                                                          .array(
                                                            z
                                                              .object({
                                                                Code: OBCodeMnemonicSchema.exactOptional(),
                                                                Description: Description_3Schema,
                                                                Name: Name_4Schema,
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Other fee type code which is not available in the standard code set',
                                                                required: ['Name', 'Description'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about any caps (minimum/maximum charges) that apply to a particular fee/charge',
                                                        required: ['FeeType', 'MinMaxType'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                LoanInterestFeeChargeDetail: z
                                                  .array(
                                                    z
                                                      .object({
                                                        ApplicationFrequency:
                                                          OBFeeFrequency1Code_2Schema,
                                                        CalculationFrequency:
                                                          OBFeeFrequency1Code_3Schema,
                                                        FeeAmount:
                                                          OBAmount1_3Schema.exactOptional(),
                                                        FeeRate: OBRate1_12Schema.exactOptional(),
                                                        FeeRateType:
                                                          OBInterestRateType1Code_1Schema.exactOptional(),
                                                        FeeType: OBFeeType1CodeSchema,
                                                        NegotiableIndicator: z
                                                          .boolean()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              'Fee/charge which is usually negotiable rather than a fixed amount',
                                                          }),
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Optional additional notes to supplement the fee/charge details.',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherApplicationFrequency:
                                                          OBOtherCodeType1_6Schema.exactOptional(),
                                                        OtherCalculationFrequency:
                                                          OBOtherCodeType1_7Schema.exactOptional(),
                                                        OtherFeeRateType:
                                                          OBOtherCodeType1_5Schema.exactOptional(),
                                                        OtherFeeType:
                                                          OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                                      })
                                                      .openapi({
                                                        description: 'Other fees/charges details',
                                                        required: [
                                                          'FeeType',
                                                          'ApplicationFrequency',
                                                          'CalculationFrequency',
                                                        ],
                                                      }),
                                                  )
                                                  .min(1),
                                              })
                                              .openapi({
                                                description:
                                                  'Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits',
                                                required: ['LoanInterestFeeChargeDetail'],
                                              }),
                                          )
                                          .exactOptional(),
                                        LoanProviderInterestRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Loan provider Interest for the SME Loan product',
                                          }),
                                        LoanProviderInterestRateType: z
                                          .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan.',
                                          }),
                                        MaxTermPeriod: z
                                          .enum([
                                            'PACT',
                                            'PDAY',
                                            'PHYR',
                                            'PMTH',
                                            'PQTR',
                                            'PWEK',
                                            'PYER',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The unit of period (days, weeks, months etc.) of the Maximum Term',
                                          }),
                                        MinTermPeriod: z
                                          .enum([
                                            'PACT',
                                            'PDAY',
                                            'PHYR',
                                            'PMTH',
                                            'PQTR',
                                            'PWEK',
                                            'PYER',
                                          ])
                                          .openapi({
                                            description:
                                              'The unit of period (days, weeks, months etc.) of the Minimum Term',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({
                                                description:
                                                  'Optional additional notes to supplement the Tier Band details',
                                              }),
                                          )
                                          .exactOptional(),
                                        OtherLoanProviderInterestRateType: z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Description: Description_3Schema,
                                            Name: Name_4Schema,
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other loan interest rate types which are not available in the standard code list',
                                            required: ['Name', 'Description'],
                                          }),
                                        RepAPR: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \nFor SME Loan, this APR is the representative APR which includes any account fees.',
                                          }),
                                        TierValueMaxTerm: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum loan term for which the loan interest tier applies.',
                                          }),
                                        TierValueMaximum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum loan value for which the loan interest tier applies.',
                                          }),
                                        TierValueMinTerm: z
                                          .int()
                                          .openapi({
                                            description:
                                              'Minimum loan term for which the loan interest tier applies.',
                                          }),
                                        TierValueMinimum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'Minimum loan value for which the loan interest tier applies.',
                                          }),
                                      })
                                      .openapi({
                                        description: 'Tier Band Details',
                                        required: [
                                          'TierValueMinimum',
                                          'TierValueMinTerm',
                                          'MinTermPeriod',
                                          'FixedVariableInterestRateType',
                                          'RepAPR',
                                        ],
                                      }),
                                  )
                                  .min(1),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Optional additional notes to supplement the Tier Band Set details',
                                      }),
                                  )
                                  .exactOptional(),
                                OtherCalculationMethod: OBOtherCodeType1_0Schema.exactOptional(),
                                TierBandMethod: z
                                  .enum(['INBA', 'INTI', 'INWH'])
                                  .openapi({
                                    description:
                                      'The methodology of how credit interest is charged. It can be:-\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n3. Whole\nThe same interest rate is applied irrespective of the SME Loan balance',
                                  }),
                              })
                              .openapi({
                                description:
                                  'The group of tiers or bands for which debit interest can be applied.',
                                required: [
                                  'TierBandMethod',
                                  'CalculationMethod',
                                  'LoanInterestTierBand',
                                ],
                              }),
                          )
                          .min(1),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description:
                                  'Optional additional notes to supplement the LoanInterest',
                              }),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Details about the interest that may be payable to the SME Loan holders',
                        required: ['LoanInterestTierBandSet'],
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({ description: 'Long name associated with the product' }),
                    OtherFeesCharges: z
                      .array(
                        z
                          .object({
                            FeeChargeCap: z
                              .array(
                                z
                                  .object({
                                    CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                    FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                    FeeCapOccurrence: Number_1Schema.exactOptional(),
                                    FeeType: z
                                      .array(
                                        z
                                          .enum([
                                            'FEPF',
                                            'FTOT',
                                            'FYAF',
                                            'FYAM',
                                            'FYAQ',
                                            'FYCP',
                                            'FYDB',
                                            'FYMI',
                                            'FYXX',
                                          ])
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                          }),
                                      )
                                      .min(1),
                                    MinMaxType: OBMinMaxType1CodeSchema,
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Free text for adding  extra details for fee charge cap',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherFeeType: z
                                      .array(
                                        z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Description: Description_3Schema,
                                            Name: Name_4Schema,
                                          })
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                          }),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                                    required: ['FeeType', 'MinMaxType'],
                                  }),
                              )
                              .exactOptional(),
                            FeeChargeDetail: z
                              .array(
                                z
                                  .object({
                                    ApplicationFrequency: OBFeeFrequency1Code_2Schema,
                                    CalculationFrequency:
                                      OBFeeFrequency1Code_3Schema.exactOptional(),
                                    FeeAmount: OBAmount1_3Schema.exactOptional(),
                                    FeeApplicableRange: z
                                      .object({
                                        MaximumAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum Amount on which fee is applicable (where it is expressed as an amount)',
                                          }),
                                        MaximumRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum rate on which fee/charge is applicable(where it is expressed as an rate)',
                                          }),
                                        MinimumAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)',
                                          }),
                                        MinimumRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Minimum rate on which fee/charge is applicable(where it is expressed as an rate)',
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Range or amounts or rates for which the fee/charge applies',
                                        required: [],
                                      }),
                                    FeeCategory: OBFeeCategory1CodeSchema,
                                    FeeChargeCap: z
                                      .array(
                                        z
                                          .object({
                                            CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                            FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                            FeeCapOccurrence: Number_1Schema.exactOptional(),
                                            FeeType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'FEPF',
                                                    'FTOT',
                                                    'FYAF',
                                                    'FYAM',
                                                    'FYAQ',
                                                    'FYCP',
                                                    'FYDB',
                                                    'FYMI',
                                                    'FYXX',
                                                  ])
                                                  .openapi({
                                                    description:
                                                      'Fee/charge type which is being capped',
                                                  }),
                                              )
                                              .min(1),
                                            MinMaxType: OBMinMaxType1CodeSchema,
                                            Notes: z
                                              .array(
                                                z
                                                  .string()
                                                  .min(1)
                                                  .max(2000)
                                                  .openapi({
                                                    description:
                                                      'Free text for adding  extra details for fee charge cap',
                                                  }),
                                              )
                                              .exactOptional(),
                                            OtherFeeType: z
                                              .array(
                                                z
                                                  .object({
                                                    Code: OBCodeMnemonicSchema.exactOptional(),
                                                    Description: Description_3Schema,
                                                    Name: Name_4Schema,
                                                  })
                                                  .openapi({
                                                    description:
                                                      'Other fee type code which is not available in the standard code set',
                                                    required: ['Name', 'Description'],
                                                  }),
                                              )
                                              .exactOptional(),
                                          })
                                          .openapi({
                                            description:
                                              'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                                            required: ['FeeType', 'MinMaxType'],
                                          }),
                                      )
                                      .exactOptional(),
                                    FeeRate: OBRate1_12Schema.exactOptional(),
                                    FeeRateType: OBInterestRateType1Code_1Schema.exactOptional(),
                                    FeeType: OBFeeType1CodeSchema,
                                    NegotiableIndicator: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Fee/charge which is usually negotiable rather than a fixed amount',
                                      }),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Optional additional notes to supplement the fee/charge details.',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherApplicationFrequency:
                                      OBOtherCodeType1_6Schema.exactOptional(),
                                    OtherCalculationFrequency:
                                      OBOtherCodeType1_7Schema.exactOptional(),
                                    OtherFeeCategoryType: OBOtherCodeType1_0Schema.exactOptional(),
                                    OtherFeeRateType: OBOtherCodeType1_8Schema.exactOptional(),
                                    OtherFeeType: OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                  })
                                  .openapi({
                                    description: 'Other fees/charges details',
                                    required: ['FeeCategory', 'FeeType', 'ApplicationFrequency'],
                                  }),
                              )
                              .min(1),
                            OtherTariffType: z
                              .object({
                                Code: OBCodeMnemonicSchema.exactOptional(),
                                Description: Description_3Schema,
                                Name: Name_4Schema,
                              })
                              .exactOptional()
                              .openapi({
                                description: 'Other tariff type which is not in the standard list.',
                                required: ['Name', 'Description'],
                              }),
                            TariffName: z
                              .string()
                              .min(1)
                              .max(350)
                              .exactOptional()
                              .openapi({ description: 'Name of the tariff' }),
                            TariffType: z
                              .enum(['TTEL', 'TTMX', 'TTOT'])
                              .exactOptional()
                              .openapi({
                                description: 'TariffType which defines the fee and charges.',
                              }),
                          })
                          .openapi({
                            description:
                              'Contains details of fees and charges which are not associated with either Overdraft or features/benefits',
                            required: ['FeeChargeDetail'],
                          }),
                      )
                      .exactOptional(),
                    Overdraft: z
                      .object({
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description: 'Associated Notes about the overdraft rates',
                              }),
                          )
                          .exactOptional(),
                        OverdraftTierBandSet: z
                          .array(
                            z
                              .object({
                                AuthorisedIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Indicates if the Overdraft is authorised (Y) or unauthorised (N)',
                                  }),
                                BufferAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.',
                                  }),
                                Identification: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Unique and unambiguous identification of a  Tier Band for a overdraft product.',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Optional additional notes to supplement the overdraft Tier Band Set details',
                                      }),
                                  )
                                  .exactOptional(),
                                OverdraftFeesCharges: z
                                  .array(
                                    z
                                      .object({
                                        OverdraftFeeChargeCap: z
                                          .array(
                                            z
                                              .object({
                                                CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                                FeeCapAmount: OBAmount1_0Schema.exactOptional(),
                                                FeeCapOccurrence: Number_0Schema.exactOptional(),
                                                FeeType: z
                                                  .array(
                                                    z
                                                      .enum([
                                                        'FBAO',
                                                        'FBAR',
                                                        'FBEB',
                                                        'FBIT',
                                                        'FBOR',
                                                        'FBOS',
                                                        'FBSC',
                                                        'FBTO',
                                                        'FBUB',
                                                        'FBUT',
                                                        'FTOT',
                                                        'FTUT',
                                                      ])
                                                      .openapi({
                                                        description:
                                                          'Fee/charge type which is being capped',
                                                      }),
                                                  )
                                                  .min(1),
                                                MinMaxType: OBMinMaxType1CodeSchema,
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Notes related to Overdraft fee charge cap',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherFeeType: z
                                                  .array(
                                                    z
                                                      .object({
                                                        Code: OBCodeMnemonicSchema.exactOptional(),
                                                        Description: Description_3Schema,
                                                        Name: Name_4Schema,
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Other fee type code which is not available in the standard code set',
                                                        required: ['Name', 'Description'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                              })
                                              .openapi({
                                                description:
                                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                required: ['FeeType', 'MinMaxType'],
                                              }),
                                          )
                                          .exactOptional(),
                                        OverdraftFeeChargeDetail: z
                                          .array(
                                            z
                                              .object({
                                                ApplicationFrequency: OBFeeFrequency1Code_0Schema,
                                                CalculationFrequency:
                                                  OBFeeFrequency1Code_1Schema.exactOptional(),
                                                FeeAmount: OBAmount1_2Schema.exactOptional(),
                                                FeeRate: OBRate1_02Schema.exactOptional(),
                                                FeeRateType:
                                                  OBInterestRateType1Code_0Schema.exactOptional(),
                                                FeeType: OBOverdraftFeeType1CodeSchema,
                                                IncrementalBorrowingAmount:
                                                  OBAmount1_1Schema.exactOptional(),
                                                NegotiableIndicator: z
                                                  .boolean()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Indicates whether fee and charges are negotiable',
                                                  }),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherApplicationFrequency:
                                                  OBOtherCodeType1_1Schema.exactOptional(),
                                                OtherCalculationFrequency:
                                                  OBOtherCodeType1_2Schema.exactOptional(),
                                                OtherFeeRateType:
                                                  OBOtherCodeType1_4Schema.exactOptional(),
                                                OtherFeeType:
                                                  OBOtherCodeType1_3Schema.exactOptional(),
                                                OverdraftControlIndicator: z
                                                  .boolean()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                                  }),
                                                OverdraftFeeChargeCap: z
                                                  .array(
                                                    z
                                                      .object({
                                                        CappingPeriod:
                                                          OBPeriod1CodeSchema.exactOptional(),
                                                        FeeCapAmount:
                                                          OBAmount1_0Schema.exactOptional(),
                                                        FeeCapOccurrence:
                                                          Number_0Schema.exactOptional(),
                                                        FeeType: z
                                                          .array(
                                                            z
                                                              .enum([
                                                                'FBAO',
                                                                'FBAR',
                                                                'FBEB',
                                                                'FBIT',
                                                                'FBOR',
                                                                'FBOS',
                                                                'FBSC',
                                                                'FBTO',
                                                                'FBUB',
                                                                'FBUT',
                                                                'FTOT',
                                                                'FTUT',
                                                              ])
                                                              .openapi({
                                                                description:
                                                                  'Fee/charge type which is being capped',
                                                              }),
                                                          )
                                                          .min(1),
                                                        MinMaxType: OBMinMaxType1CodeSchema,
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Notes related to Overdraft fee charge cap',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType: z
                                                          .array(
                                                            z
                                                              .object({
                                                                Code: OBCodeMnemonicSchema.exactOptional(),
                                                                Description: Description_3Schema,
                                                                Name: Name_4Schema,
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Other fee type code which is not available in the standard code set',
                                                                required: ['Name', 'Description'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                        required: ['FeeType', 'MinMaxType'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                              })
                                              .openapi({
                                                description: 'Details about the fees/charges',
                                                required: ['FeeType', 'ApplicationFrequency'],
                                              }),
                                          )
                                          .min(1),
                                      })
                                      .openapi({
                                        description: 'Overdraft fees and charges details',
                                        required: ['OverdraftFeeChargeDetail'],
                                      }),
                                  )
                                  .exactOptional(),
                                OverdraftTierBand: z
                                  .array(
                                    z
                                      .object({
                                        AgreementLengthMax: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies the maximum length of a band for a fixed overdraft agreement',
                                          }),
                                        AgreementLengthMin: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies the minimum length of a band for a fixed overdraft agreement',
                                          }),
                                        AgreementPeriod: z
                                          .enum([
                                            'PACT',
                                            'PDAY',
                                            'PHYR',
                                            'PMTH',
                                            'PQTR',
                                            'PWEK',
                                            'PYER',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies the period of a fixed length overdraft agreement',
                                          }),
                                        BankGuaranteedIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.',
                                          }),
                                        EAR: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently\nused interchangeably), being the actual annual interest rate of an Overdraft.',
                                          }),
                                        Identification: z
                                          .string()
                                          .min(1)
                                          .max(35)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Unique and unambiguous identification of a  Tier Band for a overdraft.',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({
                                                description:
                                                  'Optional additional notes to supplement the Tier/band details',
                                              }),
                                          )
                                          .exactOptional(),
                                        OverdraftFeesCharges: z
                                          .array(
                                            z
                                              .object({
                                                OverdraftFeeChargeCap: z
                                                  .array(
                                                    z
                                                      .object({
                                                        CappingPeriod:
                                                          OBPeriod1CodeSchema.exactOptional(),
                                                        FeeCapAmount:
                                                          OBAmount1_0Schema.exactOptional(),
                                                        FeeCapOccurrence:
                                                          Number_0Schema.exactOptional(),
                                                        FeeType: z
                                                          .array(
                                                            z
                                                              .enum([
                                                                'FBAO',
                                                                'FBAR',
                                                                'FBEB',
                                                                'FBIT',
                                                                'FBOR',
                                                                'FBOS',
                                                                'FBSC',
                                                                'FBTO',
                                                                'FBUB',
                                                                'FBUT',
                                                                'FTOT',
                                                                'FTUT',
                                                              ])
                                                              .openapi({
                                                                description:
                                                                  'Fee/charge type which is being capped',
                                                              }),
                                                          )
                                                          .min(1),
                                                        MinMaxType: OBMinMaxType1CodeSchema,
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Notes related to Overdraft fee charge cap',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType: z
                                                          .array(
                                                            z
                                                              .object({
                                                                Code: OBCodeMnemonicSchema.exactOptional(),
                                                                Description: Description_3Schema,
                                                                Name: Name_4Schema,
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Other fee type code which is not available in the standard code set',
                                                                required: ['Name', 'Description'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                        required: ['FeeType', 'MinMaxType'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OverdraftFeeChargeDetail: z
                                                  .array(
                                                    z
                                                      .object({
                                                        ApplicationFrequency:
                                                          OBFeeFrequency1Code_0Schema,
                                                        CalculationFrequency:
                                                          OBFeeFrequency1Code_1Schema.exactOptional(),
                                                        FeeAmount:
                                                          OBAmount1_2Schema.exactOptional(),
                                                        FeeRate: OBRate1_02Schema.exactOptional(),
                                                        FeeRateType:
                                                          OBInterestRateType1Code_0Schema.exactOptional(),
                                                        FeeType: OBOverdraftFeeType1CodeSchema,
                                                        IncrementalBorrowingAmount:
                                                          OBAmount1_1Schema.exactOptional(),
                                                        NegotiableIndicator: z
                                                          .boolean()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              'Indicates whether fee and charges are negotiable',
                                                          }),
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherApplicationFrequency:
                                                          OBOtherCodeType1_1Schema.exactOptional(),
                                                        OtherCalculationFrequency:
                                                          OBOtherCodeType1_2Schema.exactOptional(),
                                                        OtherFeeRateType:
                                                          OBOtherCodeType1_4Schema.exactOptional(),
                                                        OtherFeeType:
                                                          OBOtherCodeType1_3Schema.exactOptional(),
                                                        OverdraftControlIndicator: z
                                                          .boolean()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                                          }),
                                                        OverdraftFeeChargeCap: z
                                                          .array(
                                                            z
                                                              .object({
                                                                CappingPeriod:
                                                                  OBPeriod1CodeSchema.exactOptional(),
                                                                FeeCapAmount:
                                                                  OBAmount1_0Schema.exactOptional(),
                                                                FeeCapOccurrence:
                                                                  Number_0Schema.exactOptional(),
                                                                FeeType: z
                                                                  .array(
                                                                    z
                                                                      .enum([
                                                                        'FBAO',
                                                                        'FBAR',
                                                                        'FBEB',
                                                                        'FBIT',
                                                                        'FBOR',
                                                                        'FBOS',
                                                                        'FBSC',
                                                                        'FBTO',
                                                                        'FBUB',
                                                                        'FBUT',
                                                                        'FTOT',
                                                                        'FTUT',
                                                                      ])
                                                                      .openapi({
                                                                        description:
                                                                          'Fee/charge type which is being capped',
                                                                      }),
                                                                  )
                                                                  .min(1),
                                                                MinMaxType: OBMinMaxType1CodeSchema,
                                                                Notes: z
                                                                  .array(
                                                                    z
                                                                      .string()
                                                                      .min(1)
                                                                      .max(2000)
                                                                      .openapi({
                                                                        description:
                                                                          'Notes related to Overdraft fee charge cap',
                                                                      }),
                                                                  )
                                                                  .exactOptional(),
                                                                OtherFeeType: z
                                                                  .array(
                                                                    z
                                                                      .object({
                                                                        Code: OBCodeMnemonicSchema.exactOptional(),
                                                                        Description:
                                                                          Description_3Schema,
                                                                        Name: Name_4Schema,
                                                                      })
                                                                      .openapi({
                                                                        description:
                                                                          'Other fee type code which is not available in the standard code set',
                                                                        required: [
                                                                          'Name',
                                                                          'Description',
                                                                        ],
                                                                      }),
                                                                  )
                                                                  .exactOptional(),
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                                required: ['FeeType', 'MinMaxType'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about the fees/charges',
                                                        required: [
                                                          'FeeType',
                                                          'ApplicationFrequency',
                                                        ],
                                                      }),
                                                  )
                                                  .min(1),
                                              })
                                              .openapi({
                                                description: 'Overdraft fees and charges',
                                                required: ['OverdraftFeeChargeDetail'],
                                              }),
                                          )
                                          .exactOptional(),
                                        OverdraftInterestChargingCoverage: z
                                          .enum(['INBA', 'INTI', 'INWH'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is �2k and the interest tiers are:- 0-�500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the �Whole� of the account balance,  and in the 2nd that it is �Tiered�.',
                                          }),
                                        TierValueMax: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Maximum value of Overdraft Tier/Band',
                                          }),
                                        TierValueMin: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description: 'Minimum value of Overdraft Tier/Band',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Provides overdraft details for a specific tier or band',
                                        required: ['TierValueMin'],
                                      }),
                                  )
                                  .min(1),
                                OverdraftType: z
                                  .enum(['OVCO', 'OVOD', 'OVOT'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.",
                                  }),
                                TierBandMethod: z
                                  .enum(['INBA', 'INTI', 'INWH'])
                                  .openapi({
                                    description:
                                      "The methodology of how overdraft is charged. It can be:\n'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). \n'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation\n'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.",
                                  }),
                              })
                              .openapi({
                                description: 'Tier band set details',
                                required: ['TierBandMethod', 'OverdraftTierBand'],
                              }),
                          )
                          .min(1),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Borrowing details',
                        required: ['OverdraftTierBandSet'],
                      }),
                    ProductDetails: z
                      .object({
                        FeeFreeLength: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'The length/duration of the fee free period' }),
                        FeeFreeLengthPeriod: z
                          .enum(['PACT', 'PDAY', 'PHYR', 'PMTH', 'PQTR', 'PWEK', 'PYER'])
                          .exactOptional()
                          .openapi({
                            description:
                              'The unit of period (days, weeks, months etc.) of the promotional length',
                          }),
                        MonthlyMaximumCharge: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description:
                                  'Optional additional notes to supplement the Core product details',
                              }),
                          )
                          .exactOptional(),
                        OtherSegment: OBOtherCodeType1_0Schema.exactOptional(),
                        Segment: z
                          .array(
                            z
                              .enum([
                                'GEAS',
                                'GEBA',
                                'GEBR',
                                'GEBU',
                                'GECI',
                                'GECS',
                                'GEFB',
                                'GEFG',
                                'GEG',
                                'GEGR',
                                'GEGS',
                                'GEOT',
                                'GEOV',
                                'GEPA',
                                'GEPR',
                                'GERE',
                                'GEST',
                                'GEYA',
                                'GEYO',
                                'PSCA',
                                'PSES',
                                'PSNC',
                                'PSNP',
                                'PSRG',
                                'PSSS',
                                'PSST',
                                'PSSW',
                              ])
                              .openapi({
                                description:
                                  'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd ',
                              }),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    Repayment: z
                      .object({
                        AmountType: z
                          .enum(['RABD', 'RABL', 'RACI', 'RAFC', 'RAIO', 'RALT', 'USOT'])
                          .exactOptional()
                          .openapi({
                            description:
                              'The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description:
                                  'Optional additional notes to supplement the Repayment',
                              }),
                          )
                          .exactOptional(),
                        OtherAmountType: z
                          .object({
                            Code: OBCodeMnemonicSchema.exactOptional(),
                            Description: Description_3Schema,
                            Name: Name_4Schema,
                          })
                          .exactOptional()
                          .openapi({
                            description: 'Other amount type which is not in the standard code list',
                            required: ['Name', 'Description'],
                          }),
                        OtherRepaymentFrequency: z
                          .object({
                            Code: OBCodeMnemonicSchema.exactOptional(),
                            Description: Description_3Schema,
                            Name: Name_4Schema,
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other repayment frequency which is not in the standard code list',
                            required: ['Name', 'Description'],
                          }),
                        OtherRepaymentType: z
                          .object({
                            Code: OBCodeMnemonicSchema.exactOptional(),
                            Description: Description_3Schema,
                            Name: Name_4Schema,
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other repayment type which is not in the standard code list',
                            required: ['Name', 'Description'],
                          }),
                        RepaymentFeeCharges: z
                          .object({
                            RepaymentFeeChargeCap: z
                              .array(
                                z
                                  .object({
                                    CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                    FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                    FeeCapOccurrence: Number_1Schema.exactOptional(),
                                    FeeType: z
                                      .array(
                                        z
                                          .enum([
                                            'FEPF',
                                            'FTOT',
                                            'FYAF',
                                            'FYAM',
                                            'FYAQ',
                                            'FYCP',
                                            'FYDB',
                                            'FYMI',
                                            'FYXX',
                                          ])
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                          }),
                                      )
                                      .min(1),
                                    MinMaxType: OBMinMaxType1CodeSchema,
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Free text for adding  extra details for fee charge cap',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherFeeType: z
                                      .array(
                                        z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Description: Description_3Schema,
                                            Name: Name_4Schema,
                                          })
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                          }),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({
                                    description:
                                      'RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged',
                                    required: ['FeeType', 'MinMaxType'],
                                  }),
                              )
                              .exactOptional(),
                            RepaymentFeeChargeDetail: z
                              .array(
                                z
                                  .object({
                                    ApplicationFrequency: OBFeeFrequency1Code_2Schema,
                                    CalculationFrequency: OBFeeFrequency1Code_3Schema,
                                    FeeAmount: OBAmount1_3Schema.exactOptional(),
                                    FeeRate: OBRate1_12Schema.exactOptional(),
                                    FeeRateType: OBInterestRateType1Code_1Schema.exactOptional(),
                                    FeeType: OBFeeType1CodeSchema,
                                    NegotiableIndicator: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Fee/charge which is usually negotiable rather than a fixed amount',
                                      }),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Optional additional notes to supplement the fee/charge details.',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherApplicationFrequency:
                                      OBOtherCodeType1_6Schema.exactOptional(),
                                    OtherCalculationFrequency:
                                      OBOtherCodeType1_7Schema.exactOptional(),
                                    OtherFeeRateType: OBOtherCodeType1_8Schema.exactOptional(),
                                    OtherFeeType: OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                  })
                                  .openapi({
                                    description:
                                      'Details about specific fees/charges that are applied for repayment',
                                    required: [
                                      'FeeType',
                                      'ApplicationFrequency',
                                      'CalculationFrequency',
                                    ],
                                  }),
                              )
                              .min(1),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.',
                            required: ['RepaymentFeeChargeDetail'],
                          }),
                        RepaymentFrequency: z
                          .enum([
                            'SMDA',
                            'SMFL',
                            'SMFO',
                            'SMHY',
                            'SMMO',
                            'SMOT',
                            'SMQU',
                            'SMWE',
                            'SMYE',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Repayment frequency' }),
                        RepaymentHoliday: z
                          .array(
                            z
                              .object({
                                MaxHolidayLength: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The maximum length/duration of a Repayment Holiday',
                                  }),
                                MaxHolidayPeriod: z
                                  .enum(['PACT', 'PDAY', 'PHYR', 'PMTH', 'PQTR', 'PWEK', 'PYER'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The unit of period (days, weeks, months etc.) of the repayment holiday',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Free text for adding details for repayment holiday',
                                      }),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({
                                description: 'Details of capital repayment holiday if any',
                                required: [],
                              }),
                          )
                          .exactOptional(),
                        RepaymentType: z
                          .enum([
                            'USBA',
                            'USBU',
                            'USCI',
                            'USCS',
                            'USER',
                            'USFA',
                            'USFB',
                            'USFI',
                            'USIO',
                            'USOT',
                            'USPF',
                            'USRW',
                            'USSL',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Repayment type' }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Repayment details of the Loan product',
                        required: [],
                      }),
                    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Other product type details associated with the account.',
                    required: ['Name', 'Description'],
                  }),
                PCA: OBPCAData1Schema.exactOptional(),
                ProductId: z
                  .string()
                  .min(1)
                  .max(40)
                  .exactOptional()
                  .openapi({
                    description:
                      'The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.',
                  }),
                ProductName: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.',
                  }),
                ProductType: z
                  .enum([
                    'BusinessCurrentAccount',
                    'CommercialCreditCard',
                    'Other',
                    'PersonalCurrentAccount',
                    'SMELoan',
                  ])
                  .openapi({
                    description:
                      'Product type : Personal Current Account, Business Current Account',
                  }),
                SecondaryProductId: z
                  .string()
                  .min(1)
                  .max(70)
                  .exactOptional()
                  .openapi({
                    description:
                      'Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.',
                  }),
              })
              .openapi({
                description: 'Product details associated with the Account',
                required: ['AccountId', 'ProductType'],
              }),
          )
          .exactOptional(),
      })
      .openapi({ description: 'Aligning with the read write specs structure.', required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({
    description: 'Product details of Other Product which is not avaiable in the standard list',
    required: ['Data'],
  })
  .openapi('OBReadProduct2')

const ScheduledPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ScheduledPaymentDateTime')

const ScheduledPaymentIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.',
  })
  .openapi('ScheduledPaymentId')

const OBScheduledPayment3Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreditorAccount: OBCashAccount5_1Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    DebtorReference: DebtorReferenceSchema.exactOptional(),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1Schema,
    Reference: ReferenceSchema.exactOptional(),
    ScheduledPaymentDateTime: ScheduledPaymentDateTimeSchema,
    ScheduledPaymentId: ScheduledPaymentIdSchema.exactOptional(),
    ScheduledType: OBExternalScheduleType1CodeSchema,
  })
  .openapi({
    required: ['AccountId', 'ScheduledPaymentDateTime', 'ScheduledType', 'InstructedAmount'],
  })
  .openapi('OBScheduledPayment3')

const OBReadScheduledPayment3Schema = z
  .strictObject({
    Data: z
      .object({ ScheduledPayment: z.array(OBScheduledPayment3Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadScheduledPayment3')

const StandingOrderIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.',
  })
  .openapi('StandingOrderId')

const OBStandingOrder6Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreditorAccount: OBCashAccount5_1Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_4Schema.exactOptional(),
    FinalPaymentDateTime: FinalPaymentDateTimeSchema.exactOptional(),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_2Schema.exactOptional(),
    FirstPaymentDateTime: FirstPaymentDateTimeSchema.exactOptional(),
    Frequency: Frequency_1Schema,
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_11Schema.exactOptional(),
    LastPaymentDateTime: LastPaymentDateTimeSchema.exactOptional(),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_3Schema.exactOptional(),
    NextPaymentDateTime: NextPaymentDateTimeSchema.exactOptional(),
    NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    StandingOrderId: StandingOrderIdSchema.exactOptional(),
    StandingOrderStatusCode: OBExternalStandingOrderStatus1CodeSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: ['AccountId', 'Frequency'] })
  .openapi('OBStandingOrder6')

const OBReadStandingOrder6Schema = z
  .strictObject({
    Data: z
      .object({ StandingOrder: z.array(OBStandingOrder6Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadStandingOrder6')

const OBReadStatement2Schema = z
  .strictObject({
    Data: OBReadDataStatement2Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadStatement2')

const OBReadTransaction6Schema = z
  .strictObject({
    Data: OBReadDataTransaction6Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadTransaction6')

const OBScheduledPayment3BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    DebtorReference: DebtorReferenceSchema.exactOptional(),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1Schema,
    Reference: ReferenceSchema.exactOptional(),
    ScheduledPaymentDateTime: ScheduledPaymentDateTimeSchema,
    ScheduledPaymentId: ScheduledPaymentIdSchema.exactOptional(),
    ScheduledType: OBExternalScheduleType1CodeSchema,
  })
  .openapi({
    required: ['AccountId', 'ScheduledPaymentDateTime', 'ScheduledType', 'InstructedAmount'],
  })
  .openapi('OBScheduledPayment3Basic')

const OBScheduledPayment3DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreditorAccount: OBCashAccount5_1Schema,
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    DebtorReference: DebtorReferenceSchema.exactOptional(),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1Schema,
    Reference: ReferenceSchema.exactOptional(),
    ScheduledPaymentDateTime: ScheduledPaymentDateTimeSchema,
    ScheduledPaymentId: ScheduledPaymentIdSchema.exactOptional(),
    ScheduledType: OBExternalScheduleType1CodeSchema,
  })
  .openapi({
    required: [
      'AccountId',
      'ScheduledPaymentDateTime',
      'ScheduledType',
      'InstructedAmount',
      'CreditorAccount',
    ],
  })
  .openapi('OBScheduledPayment3Detail')

const OBStandingOrder6BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_4Schema.exactOptional(),
    FinalPaymentDateTime: FinalPaymentDateTimeSchema.exactOptional(),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_2Schema.exactOptional(),
    FirstPaymentDateTime: FirstPaymentDateTimeSchema.exactOptional(),
    Frequency: Frequency_1Schema,
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_11Schema.exactOptional(),
    LastPaymentDateTime: LastPaymentDateTimeSchema.exactOptional(),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_3Schema.exactOptional(),
    NextPaymentDateTime: NextPaymentDateTimeSchema.exactOptional(),
    NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    StandingOrderId: StandingOrderIdSchema.exactOptional(),
    StandingOrderStatusCode: OBExternalStandingOrderStatus1CodeSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: ['AccountId', 'Frequency'] })
  .openapi('OBStandingOrder6Basic')

const OBStandingOrder6DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreditorAccount: OBCashAccount5_1Schema,
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_4Schema.exactOptional(),
    FinalPaymentDateTime: FinalPaymentDateTimeSchema.exactOptional(),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_2Schema.exactOptional(),
    FirstPaymentDateTime: FirstPaymentDateTimeSchema.exactOptional(),
    Frequency: Frequency_1Schema,
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_11Schema.exactOptional(),
    LastPaymentDateTime: LastPaymentDateTimeSchema.exactOptional(),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_3Schema.exactOptional(),
    NextPaymentDateTime: NextPaymentDateTimeSchema.exactOptional(),
    NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    StandingOrderId: StandingOrderIdSchema.exactOptional(),
    StandingOrderStatusCode: OBExternalStandingOrderStatus1CodeSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: ['AccountId', 'Frequency', 'CreditorAccount'] })
  .openapi('OBStandingOrder6Detail')

const OBStatement2BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreationDateTime: CreationDateTimeSchema,
    EndDateTime: EndDateTimeSchema,
    StartDateTime: StartDateTimeSchema,
    StatementBenefit: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_5Schema,
            Type: OBExternalStatementBenefitType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a benefit or reward amount for the statement resource.',
            required: ['Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementDateTime: z
      .array(
        z
          .object({ DateTime: DateTimeSchema, Type: OBExternalStatementDateTimeType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic date time for the statement resource.',
            required: ['DateTime', 'Type'],
          }),
      )
      .exactOptional(),
    StatementDescription: z
      .array(
        z
          .string()
          .min(1)
          .max(500)
          .openapi({
            description: 'Other descriptions that may be available for the statement resource.',
          }),
      )
      .exactOptional(),
    StatementFee: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_6Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Description: Description_1Schema.exactOptional(),
            Frequency: OBExternalStatementFeeFrequency1CodeSchema.exactOptional(),
            Rate: OBRate1_0Schema.exactOptional(),
            RateType: OBExternalStatementFeeRateType1CodeSchema.exactOptional(),
            Type: OBExternalStatementFeeType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a fee for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementId: StatementIdSchema.exactOptional(),
    StatementInterest: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_7Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Description: Description_2Schema.exactOptional(),
            Frequency: OBExternalStatementInterestFrequency1CodeSchema.exactOptional(),
            Rate: OBRate1_1Schema.exactOptional(),
            RateType: OBExternalStatementInterestRateType1CodeSchema.exactOptional(),
            Type: OBExternalStatementInterestType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic interest amount related to the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementRate: z
      .array(
        z
          .object({ Rate: RateSchema, Type: OBExternalStatementRateType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic rate related to the statement resource.',
            required: ['Rate', 'Type'],
          }),
      )
      .exactOptional(),
    StatementReference: StatementReferenceSchema.exactOptional(),
    StatementValue: z
      .array(
        z
          .object({ Type: OBExternalStatementValueType1CodeSchema, Value: ValueSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic number value related to the statement resource.',
            required: ['Value', 'Type'],
          }),
      )
      .exactOptional(),
    Type: OBExternalStatementType1CodeSchema,
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'Type', 'StartDateTime', 'EndDateTime', 'CreationDateTime'],
  })
  .openapi('OBStatement2Basic')

const OBStatement2DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    CreationDateTime: CreationDateTimeSchema,
    EndDateTime: EndDateTimeSchema,
    StartDateTime: StartDateTimeSchema,
    StatementAmount: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_8Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBExternalStatementAmountType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic amount for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementBenefit: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_5Schema,
            Type: OBExternalStatementBenefitType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a benefit or reward amount for the statement resource.',
            required: ['Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementDateTime: z
      .array(
        z
          .object({ DateTime: DateTimeSchema, Type: OBExternalStatementDateTimeType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic date time for the statement resource.',
            required: ['DateTime', 'Type'],
          }),
      )
      .exactOptional(),
    StatementDescription: z
      .array(
        z
          .string()
          .min(1)
          .max(500)
          .openapi({
            description: 'Other descriptions that may be available for the statement resource.',
          }),
      )
      .exactOptional(),
    StatementFee: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_6Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Description: Description_1Schema.exactOptional(),
            Frequency: OBExternalStatementFeeFrequency1CodeSchema.exactOptional(),
            Rate: OBRate1_0Schema.exactOptional(),
            RateType: OBExternalStatementFeeRateType1CodeSchema.exactOptional(),
            Type: OBExternalStatementFeeType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a fee for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementId: StatementIdSchema.exactOptional(),
    StatementInterest: z
      .array(
        z
          .object({
            Amount: OBActiveOrHistoricCurrencyAndAmount_7Schema,
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Description: Description_2Schema.exactOptional(),
            Frequency: OBExternalStatementInterestFrequency1CodeSchema.exactOptional(),
            Rate: OBRate1_1Schema.exactOptional(),
            RateType: OBExternalStatementInterestRateType1CodeSchema.exactOptional(),
            Type: OBExternalStatementInterestType1CodeSchema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic interest amount related to the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementRate: z
      .array(
        z
          .object({ Rate: RateSchema, Type: OBExternalStatementRateType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic rate related to the statement resource.',
            required: ['Rate', 'Type'],
          }),
      )
      .exactOptional(),
    StatementReference: StatementReferenceSchema.exactOptional(),
    StatementValue: z
      .array(
        z
          .object({ Type: OBExternalStatementValueType1CodeSchema, Value: ValueSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic number value related to the statement resource.',
            required: ['Value', 'Type'],
          }),
      )
      .exactOptional(),
    Type: OBExternalStatementType1CodeSchema,
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'Type', 'StartDateTime', 'EndDateTime', 'CreationDateTime'],
  })
  .openapi('OBStatement2Detail')

const OBTransaction6BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    AddressLine: AddressLineSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmount_9Schema,
    BankTransactionCode: OBBankTransactionCodeStructure1Schema.exactOptional(),
    BookingDateTime: BookingDateTimeSchema,
    CardInstrument: OBTransactionCardInstrument1Schema.exactOptional(),
    ChargeAmount: OBActiveOrHistoricCurrencyAndAmount_10Schema.exactOptional(),
    CreditDebitIndicator: OBCreditDebitCode_1Schema,
    CurrencyExchange: OBCurrencyExchange5Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    StatementReference: z.array(StatementReferenceSchema).exactOptional(),
    Status: OBEntryStatus1CodeSchema,
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    TransactionId: TransactionIdSchema.exactOptional(),
    TransactionMutability: OBTransactionMutability1CodeSchema.exactOptional(),
    TransactionReference: TransactionReferenceSchema.exactOptional(),
    ValueDateTime: ValueDateTimeSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'CreditDebitIndicator', 'Status', 'BookingDateTime', 'Amount'],
  })
  .openapi('OBTransaction6Basic')

const OBTransaction6DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    AddressLine: AddressLineSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmount_9Schema,
    Balance: OBTransactionCashBalanceSchema.exactOptional(),
    BankTransactionCode: OBBankTransactionCodeStructure1Schema.exactOptional(),
    BookingDateTime: BookingDateTimeSchema,
    CardInstrument: OBTransactionCardInstrument1Schema.exactOptional(),
    ChargeAmount: OBActiveOrHistoricCurrencyAndAmount_10Schema.exactOptional(),
    CreditDebitIndicator: OBCreditDebitCode_1Schema,
    CreditorAccount: OBCashAccount6_0Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_1Schema.exactOptional(),
    CurrencyExchange: OBCurrencyExchange5Schema.exactOptional(),
    DebtorAccount: OBCashAccount6_1Schema.exactOptional(),
    DebtorAgent: OBBranchAndFinancialInstitutionIdentification6_2Schema.exactOptional(),
    MerchantDetails: OBMerchantDetails1Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    StatementReference: z.array(StatementReferenceSchema).exactOptional(),
    Status: OBEntryStatus1CodeSchema,
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    TransactionId: TransactionIdSchema.exactOptional(),
    TransactionInformation: TransactionInformationSchema.exactOptional(),
    TransactionMutability: OBTransactionMutability1CodeSchema.exactOptional(),
    TransactionReference: TransactionReferenceSchema.exactOptional(),
    ValueDateTime: ValueDateTimeSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'CreditDebitIndicator', 'Status', 'BookingDateTime', 'Amount'],
  })
  .openapi('OBTransaction6Detail')

const _200AccountAccessConsentsConsentIdReadResponse = {
  description: 'Account Access Consents Read',
  content: {
    'application/jose+jwe': { schema: OBReadConsentResponse1Schema },
    'application/json': { schema: OBReadConsentResponse1Schema },
    'application/json; charset=utf-8': { schema: OBReadConsentResponse1Schema },
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
  }),
}

const _200AccountsAccountIdBalancesReadResponse = {
  description: 'Balances Read',
  content: {
    'application/jose+jwe': { schema: OBReadBalance1Schema },
    'application/json': { schema: OBReadBalance1Schema },
    'application/json; charset=utf-8': { schema: OBReadBalance1Schema },
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
  }),
}

const _200AccountsAccountIdBeneficiariesReadResponse = {
  description: 'Beneficiaries Read',
  content: {
    'application/jose+jwe': { schema: OBReadBeneficiary5Schema },
    'application/json': { schema: OBReadBeneficiary5Schema },
    'application/json; charset=utf-8': { schema: OBReadBeneficiary5Schema },
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
  }),
}

const _200AccountsAccountIdDirectDebitsReadResponse = {
  description: 'Direct Debits Read',
  content: {
    'application/jose+jwe': { schema: OBReadDirectDebit2Schema },
    'application/json': { schema: OBReadDirectDebit2Schema },
    'application/json; charset=utf-8': { schema: OBReadDirectDebit2Schema },
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
  }),
}

const _200AccountsAccountIdOffersReadResponse = {
  description: 'Offers Read',
  content: {
    'application/jose+jwe': { schema: OBReadOffer1Schema },
    'application/json': { schema: OBReadOffer1Schema },
    'application/json; charset=utf-8': { schema: OBReadOffer1Schema },
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
  }),
}

const _200AccountsAccountIdPartiesReadResponse = {
  description: 'Parties Read',
  content: {
    'application/jose+jwe': { schema: OBReadParty3Schema },
    'application/json': { schema: OBReadParty3Schema },
    'application/json; charset=utf-8': { schema: OBReadParty3Schema },
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
  }),
}

const _200AccountsAccountIdPartyReadResponse = {
  description: 'Parties Read',
  content: {
    'application/jose+jwe': { schema: OBReadParty2Schema },
    'application/json': { schema: OBReadParty2Schema },
    'application/json; charset=utf-8': { schema: OBReadParty2Schema },
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
  }),
}

const _200AccountsAccountIdProductReadResponse = {
  description: 'Products Read',
  content: {
    'application/jose+jwe': { schema: OBReadProduct2Schema },
    'application/json': { schema: OBReadProduct2Schema },
    'application/json; charset=utf-8': { schema: OBReadProduct2Schema },
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
  }),
}

const _200AccountsAccountIdReadResponse = {
  description: 'Accounts Read',
  content: {
    'application/jose+jwe': { schema: OBReadAccount6Schema },
    'application/json': { schema: OBReadAccount6Schema },
    'application/json; charset=utf-8': { schema: OBReadAccount6Schema },
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
  }),
}

const _200AccountsAccountIdScheduledPaymentsReadResponse = {
  description: 'Scheduled Payments Read',
  content: {
    'application/jose+jwe': { schema: OBReadScheduledPayment3Schema },
    'application/json': { schema: OBReadScheduledPayment3Schema },
    'application/json; charset=utf-8': { schema: OBReadScheduledPayment3Schema },
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
  }),
}

const _200AccountsAccountIdStandingOrdersReadResponse = {
  description: 'Standing Orders Read',
  content: {
    'application/jose+jwe': { schema: OBReadStandingOrder6Schema },
    'application/json': { schema: OBReadStandingOrder6Schema },
    'application/json; charset=utf-8': { schema: OBReadStandingOrder6Schema },
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
  }),
}

const _200AccountsAccountIdStatementsReadResponse = {
  description: 'Statements Read',
  content: {
    'application/jose+jwe': { schema: OBReadStatement2Schema },
    'application/json': { schema: OBReadStatement2Schema },
    'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
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
  }),
}

const _200AccountsAccountIdStatementsStatementIdFileReadResponse = {
  description: 'Statements Read',
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
  }),
}

const _200AccountsAccountIdStatementsStatementIdReadResponse = {
  description: 'Statements Read',
  content: {
    'application/jose+jwe': { schema: OBReadStatement2Schema },
    'application/json': { schema: OBReadStatement2Schema },
    'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
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
  }),
}

const _200AccountsAccountIdStatementsStatementIdTransactionsReadResponse = {
  description: 'Transactions Read',
  content: {
    'application/jose+jwe': { schema: OBReadTransaction6Schema },
    'application/json': { schema: OBReadTransaction6Schema },
    'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
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
  }),
}

const _200AccountsAccountIdTransactionsReadResponse = {
  description: 'Transactions Read',
  content: {
    'application/jose+jwe': { schema: OBReadTransaction6Schema },
    'application/json': { schema: OBReadTransaction6Schema },
    'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
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
  }),
}

const _200AccountsReadResponse = {
  description: 'Accounts Read',
  content: {
    'application/jose+jwe': { schema: OBReadAccount6Schema },
    'application/json': { schema: OBReadAccount6Schema },
    'application/json; charset=utf-8': { schema: OBReadAccount6Schema },
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
  }),
}

const _200BalancesReadResponse = {
  description: 'Balances Read',
  content: {
    'application/jose+jwe': { schema: OBReadBalance1Schema },
    'application/json': { schema: OBReadBalance1Schema },
    'application/json; charset=utf-8': { schema: OBReadBalance1Schema },
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
  }),
}

const _200BeneficiariesReadResponse = {
  description: 'Beneficiaries Read',
  content: {
    'application/jose+jwe': { schema: OBReadBeneficiary5Schema },
    'application/json': { schema: OBReadBeneficiary5Schema },
    'application/json; charset=utf-8': { schema: OBReadBeneficiary5Schema },
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
  }),
}

const _200DirectDebitsReadResponse = {
  description: 'Direct Debits Read',
  content: {
    'application/jose+jwe': { schema: OBReadDirectDebit2Schema },
    'application/json': { schema: OBReadDirectDebit2Schema },
    'application/json; charset=utf-8': { schema: OBReadDirectDebit2Schema },
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
  }),
}

const _200OffersReadResponse = {
  description: 'Offers Read',
  content: {
    'application/jose+jwe': { schema: OBReadOffer1Schema },
    'application/json': { schema: OBReadOffer1Schema },
    'application/json; charset=utf-8': { schema: OBReadOffer1Schema },
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
  }),
}

const _200PartyReadResponse = {
  description: 'Parties Read',
  content: {
    'application/jose+jwe': { schema: OBReadParty2Schema },
    'application/json': { schema: OBReadParty2Schema },
    'application/json; charset=utf-8': { schema: OBReadParty2Schema },
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
  }),
}

const _200ProductsReadResponse = {
  description: 'Products Read',
  content: {
    'application/jose+jwe': { schema: OBReadProduct2Schema },
    'application/json': { schema: OBReadProduct2Schema },
    'application/json; charset=utf-8': { schema: OBReadProduct2Schema },
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
  }),
}

const _200ScheduledPaymentsReadResponse = {
  description: 'Scheduled Payments Read',
  content: {
    'application/jose+jwe': { schema: OBReadScheduledPayment3Schema },
    'application/json': { schema: OBReadScheduledPayment3Schema },
    'application/json; charset=utf-8': { schema: OBReadScheduledPayment3Schema },
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
  }),
}

const _200StandingOrdersReadResponse = {
  description: 'Standing Orders Read',
  content: {
    'application/jose+jwe': { schema: OBReadStandingOrder6Schema },
    'application/json': { schema: OBReadStandingOrder6Schema },
    'application/json; charset=utf-8': { schema: OBReadStandingOrder6Schema },
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
  }),
}

const _200StatementsReadResponse = {
  description: 'Statements Read',
  content: {
    'application/jose+jwe': { schema: OBReadStatement2Schema },
    'application/json': { schema: OBReadStatement2Schema },
    'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
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
  }),
}

const _200TransactionsReadResponse = {
  description: 'Transactions Read',
  content: {
    'application/jose+jwe': { schema: OBReadTransaction6Schema },
    'application/json': { schema: OBReadTransaction6Schema },
    'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
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
  }),
}

const _201AccountAccessConsentsCreatedResponse = {
  description: 'Account Access Consents Created',
  content: {
    'application/jose+jwe': { schema: OBReadConsentResponse1Schema },
    'application/json': { schema: OBReadConsentResponse1Schema },
    'application/json; charset=utf-8': { schema: OBReadConsentResponse1Schema },
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
  }),
}

const _204AccountAccessConsentsConsentIdDeletedResponse = {
  description: 'Account Access Consents Deleted',
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
  }),
}

const AccountIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'AccountId',
      in: 'path',
      name: 'AccountId',
      required: true,
      schema: { type: 'string' },
    },
  })

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

const FromBookingDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'The UTC ISO 8601 Date Time to filter transactions FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
      in: 'query',
      name: 'fromBookingDateTime',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const FromStatementDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'The UTC ISO 8601 Date Time to filter statements FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
      in: 'query',
      name: 'fromStatementDateTime',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const StatementIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'StatementId',
      in: 'path',
      name: 'StatementId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ToBookingDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'The UTC ISO 8601 Date Time to filter transactions TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
      in: 'query',
      name: 'toBookingDateTime',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const ToStatementDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'The UTC ISO 8601 Date Time to filter statements TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
      in: 'query',
      name: 'toStatementDateTime',
      schema: { format: 'date-time', type: 'string' },
      required: false,
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
      scopes: { accounts: 'Ability to read Accounts information' },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

const TPPOAuth2SecuritySecurityScheme = {
  description: 'TPP client credential authorisation flow with the ASPSP',
  flows: {
    clientCredentials: {
      scopes: { accounts: 'Ability to read Accounts information' },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

export const postAccountAccessConsentsRoute = createRoute({
  method: 'post',
  path: '/account-access-consents',
  tags: ['Account Access'],
  summary: 'Create Account Access Consents',
  operationId: 'CreateAccountAccessConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBReadConsent1Schema },
        'application/json': { schema: OBReadConsent1Schema },
        'application/json; charset=utf-8': { schema: OBReadConsent1Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201AccountAccessConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['accounts'] }],
})

export const getAccountAccessConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/account-access-consents/{ConsentId}',
  tags: ['Account Access'],
  summary: 'Get Account Access Consents',
  operationId: 'GetAccountAccessConsentsConsentId',
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
    200: _200AccountAccessConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['accounts'] }],
})

export const deleteAccountAccessConsentsConsentIdRoute = createRoute({
  method: 'delete',
  path: '/account-access-consents/{ConsentId}',
  tags: ['Account Access'],
  summary: 'Delete Account Access Consents',
  operationId: 'DeleteAccountAccessConsentsConsentId',
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
    204: _204AccountAccessConsentsConsentIdDeletedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['accounts'] }],
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Get Accounts',
  operationId: 'GetAccounts',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}',
  tags: ['Accounts'],
  summary: 'Get Accounts',
  operationId: 'GetAccountsAccountId',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdBalancesRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/balances',
  tags: ['Balances'],
  summary: 'Get Balances',
  operationId: 'GetAccountsAccountIdBalances',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdBalancesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdBeneficiariesRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/beneficiaries',
  tags: ['Beneficiaries'],
  summary: 'Get Beneficiaries',
  operationId: 'GetAccountsAccountIdBeneficiaries',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdBeneficiariesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdDirectDebitsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/direct-debits',
  tags: ['Direct Debits'],
  summary: 'Get Direct Debits',
  operationId: 'GetAccountsAccountIdDirectDebits',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdDirectDebitsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdOffersRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/offers',
  tags: ['Offers'],
  summary: 'Get Offers',
  operationId: 'GetAccountsAccountIdOffers',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdOffersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdPartiesRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/parties',
  tags: ['Parties'],
  summary: 'Get Parties',
  operationId: 'GetAccountsAccountIdParties',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdPartiesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdPartyRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/party',
  tags: ['Parties'],
  summary: 'Get Parties',
  operationId: 'GetAccountsAccountIdParty',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdPartyReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdProductRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/product',
  tags: ['Products'],
  summary: 'Get Products',
  operationId: 'GetAccountsAccountIdProduct',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdProductReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdScheduledPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/scheduled-payments',
  tags: ['Scheduled Payments'],
  summary: 'Get Scheduled Payments',
  operationId: 'GetAccountsAccountIdScheduledPayments',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdScheduledPaymentsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStandingOrdersRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/standing-orders',
  tags: ['Standing Orders'],
  summary: 'Get Standing Orders',
  operationId: 'GetAccountsAccountIdStandingOrders',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStandingOrdersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements',
  tags: ['Statements'],
  summary: 'Get Statements',
  operationId: 'GetAccountsAccountIdStatements',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    query: z.object({
      fromStatementDateTime: FromStatementDateTimeParamParamsSchema,
      toStatementDateTime: ToStatementDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsStatementIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements/{StatementId}',
  tags: ['Statements'],
  summary: 'Get Statements',
  operationId: 'GetAccountsAccountIdStatementsStatementId',
  request: {
    params: z.object({ StatementId: StatementIdParamsSchema, AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsStatementIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsStatementIdFileRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements/{StatementId}/file',
  tags: ['Statements'],
  summary: 'Get Statements',
  operationId: 'GetAccountsAccountIdStatementsStatementIdFile',
  request: {
    params: z.object({ StatementId: StatementIdParamsSchema, AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsStatementIdFileReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsStatementIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements/{StatementId}/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  operationId: 'GetAccountsAccountIdStatementsStatementIdTransactions',
  request: {
    params: z.object({ StatementId: StatementIdParamsSchema, AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsStatementIdTransactionsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  operationId: 'GetAccountsAccountIdTransactions',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    query: z.object({
      fromBookingDateTime: FromBookingDateTimeParamParamsSchema,
      toBookingDateTime: ToBookingDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdTransactionsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getBalancesRoute = createRoute({
  method: 'get',
  path: '/balances',
  tags: ['Balances'],
  summary: 'Get Balances',
  operationId: 'GetBalances',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200BalancesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getBeneficiariesRoute = createRoute({
  method: 'get',
  path: '/beneficiaries',
  tags: ['Beneficiaries'],
  summary: 'Get Beneficiaries',
  operationId: 'GetBeneficiaries',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200BeneficiariesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getDirectDebitsRoute = createRoute({
  method: 'get',
  path: '/direct-debits',
  tags: ['Direct Debits'],
  summary: 'Get Direct Debits',
  operationId: 'GetDirectDebits',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DirectDebitsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getOffersRoute = createRoute({
  method: 'get',
  path: '/offers',
  tags: ['Offers'],
  summary: 'Get Offers',
  operationId: 'GetOffers',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200OffersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getPartyRoute = createRoute({
  method: 'get',
  path: '/party',
  tags: ['Parties'],
  summary: 'Get Parties',
  operationId: 'GetParty',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200PartyReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  tags: ['Products'],
  summary: 'Get Products',
  operationId: 'GetProducts',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200ProductsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getScheduledPaymentsRoute = createRoute({
  method: 'get',
  path: '/scheduled-payments',
  tags: ['Scheduled Payments'],
  summary: 'Get Scheduled Payments',
  operationId: 'GetScheduledPayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200ScheduledPaymentsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getStandingOrdersRoute = createRoute({
  method: 'get',
  path: '/standing-orders',
  tags: ['Standing Orders'],
  summary: 'Get Standing Orders',
  operationId: 'GetStandingOrders',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200StandingOrdersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getStatementsRoute = createRoute({
  method: 'get',
  path: '/statements',
  tags: ['Statements'],
  summary: 'Get Statements',
  operationId: 'GetStatements',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    query: z.object({
      fromStatementDateTime: FromStatementDateTimeParamParamsSchema,
      toStatementDateTime: ToStatementDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200StatementsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  operationId: 'GetTransactions',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    query: z.object({
      fromBookingDateTime: FromBookingDateTimeParamParamsSchema,
      toBookingDateTime: ToBookingDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200TransactionsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})
