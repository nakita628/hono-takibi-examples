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
      .min(3)
      .exactOptional()
      .openapi({
        description:
          'The name of the city.\n\nSupported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.\n\n> Required when the `category` is **card**.\n',
      }),
    country: z
      .string()
      .openapi({
        description:
          'The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**.',
      }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first line of the street address.\n\nSupported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.\n\n> Required when the `category` is **card**.\n',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The second line of the street address.\n\nSupported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.\n\n> Required when the `category` is **card**.\n',
      }),
    postalCode: z
      .string()
      .min(3)
      .exactOptional()
      .openapi({
        description:
          'The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.\n\nSupported characters: **[a-z] [A-Z] [0-9]** and Space.\n\n> Required for addresses in the US.\n',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '   The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n\n   > Required for the US and Canada.\n',
      }),
  })
  .openapi({ required: ['country'] })
  .openapi('Address')

const LegSchema = z
  .strictObject({
    arrivalAirportCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details.',
      }),
    basicFareCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The basic fare code for this leg.' }),
    carrierCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'IATA code of the carrier operating the flight.' }),
    departureAirportCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details',
      }),
    departureDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flight departure date.' }),
    flightNumber: z.string().exactOptional().openapi({ description: 'The flight identifier.' }),
  })
  .openapi({ required: [] })
  .openapi('Leg')

const AirlineSchema = z
  .strictObject({
    legs: z
      .array(LegSchema)
      .exactOptional()
      .openapi({ description: 'Details about the flight legs for this ticket.' }),
    ticketNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The ticket's unique identifier" }),
  })
  .openapi({ required: [] })
  .openapi('Airline')

const AmountAdjustmentSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The adjustment amount.',
      'x-addedInVersion': '3',
    }),
    amountAdjustmentType: z
      .enum(['atmMarkup', 'authHoldReserve', 'exchange', 'forexMarkup'])
      .exactOptional()
      .openapi({
        description:
          'The type of markup that is applied to an authorised payment.\n\nPossible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.',
        'x-addedInVersion': '3',
      }),
    basepoints: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The basepoints associated with the applied markup.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('AmountAdjustment')

const ApproveTransfersRequestSchema = z
  .strictObject({
    transferIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Contains the unique identifiers of the transfers that you want to approve.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApproveTransfersRequest')

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

const BalanceMutationSchema = z
  .strictObject({
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The amount in the payment's currency that is debited or credited on the balance accounting register.",
        'x-addedInVersion': '3',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
        'x-addedInVersion': '3',
      }),
    received: z
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
          "The amount in the payment's currency that is debited or credited on the received accounting register.",
        'x-addedInVersion': '3',
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The amount in the payment's currency that is debited or credited on the reserved accounting register.",
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalanceMutation')

const PartyIdentificationSchema = z
  .strictObject({
    address: AddressSchema.exactOptional().openapi({
      description: 'The address of the bank account or card owner.',
    }),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.\n\nAllowed only when `type` is **individual**.',
      }),
    email: z
      .string()
      .max(254)
      .exactOptional()
      .openapi({
        description:
          'The email address of the organization or individual. Maximum length: 254 characters.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the entity that owns the bank account or card.\n\nSupported characters: [a-z] [A-Z] [0-9] , . ; : - — / \\ + & ! ? @ ( ) " \' and space.\n\nRequired when `category` is **bank**.',
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.\n\nRequired when you include `cardIdentification.storedPaymentMethodId`.",
      }),
    type: z
      .enum(['individual', 'organization', 'unknown'])
      .default('unknown')
      .exactOptional()
      .openapi({
        description:
          'The type of entity that owns the bank account or card.\n\nPossible values: **individual**, **organization**, or **unknown**.\n\nRequired when `category` is **card**. In this case, the value must be **individual**.',
      }),
    url: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'The URL of the organization or individual. Maximum length: 255 characters.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PartyIdentification')

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

const BankAccountV3Schema = z
  .strictObject({
    accountHolder: PartyIdentificationSchema.openapi({
      description: 'Information about the owner of the bank account.',
    }),
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
    storedPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique token that identifies the stored bank account details of the counterparty for a payout.',
      }),
  })
  .openapi({ required: ['accountHolder', 'accountIdentification'] })
  .openapi('BankAccountV3')

const BankCategoryDataSchema = z
  .strictObject({
    priority: z
      .enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire'])
      .exactOptional()
      .openapi({
        description:
          'The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).',
        'x-addedInVersion': '4',
      }),
    type: z.literal('bank').default('bank').exactOptional().openapi({ description: '**bank**' }),
  })
  .openapi({ required: [] })
  .openapi('BankCategoryData')

const CancelTransfersRequestSchema = z
  .strictObject({
    transferIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Contains the unique identifiers of the transfers that you want to cancel.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancelTransfersRequest')

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

const GrantCounterpartySchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the receiving account holder.' }),
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the balance account that belongs to the receiving account holder.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the transfer instrument that belongs to the legal entity of the account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GrantCounterparty')

const FeeSchema = z
  .object({ amount: AmountSchema.openapi({ description: 'Contains the fee amount.' }) })
  .openapi({ required: ['amount'] })
  .openapi('Fee')

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

const CapitalGrantSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description:
        'An object containing the amount of the grant, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    balances: CapitalBalanceSchema.openapi({
      description: 'An object containing the details of the existing grant.',
    }),
    counterparty: GrantCounterpartySchema.exactOptional().openapi({
      description: 'An object containing the details of the receiving party of the grant.',
    }),
    fee: FeeSchema.exactOptional().openapi({
      description:
        'An object containing the fee currency and value, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    grantAccountId: z
      .string()
      .openapi({ description: 'The identifier of the grant account used for the grant.' }),
    grantOfferId: z
      .string()
      .openapi({
        description:
          'The identifier of the grant offer that has been selected and from which the grant details will be used.',
      }),
    id: z.string().openapi({ description: 'The identifier of the grant reference.' }),
    repayment: RepaymentSchema.exactOptional().openapi({
      description: 'An object containing the details of the 30-day repayment threshold.',
    }),
    status: z
      .enum(['Pending', 'Active', 'Repaid', 'Failed', 'WrittenOff', 'Revoked'])
      .openapi({
        description:
          'The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**, **WrittenOff**, **Failed**, **Revoked**.',
      }),
  })
  .openapi({ required: ['balances', 'grantAccountId', 'grantOfferId', 'id', 'status'] })
  .openapi('CapitalGrant')

const GrantInfoCounterpartySchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the balance account that belongs to the receiving account holder.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the transfer instrument that belongs to the legal entity of the account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GrantInfoCounterparty')

const CapitalGrantInfoSchema = z
  .strictObject({
    counterparty: GrantInfoCounterpartySchema.exactOptional().openapi({
      description: 'An object containing the details of the receiving party of the grant.',
    }),
    grantAccountId: z
      .string()
      .openapi({ description: 'The identifier of the grant account used for the grant.' }),
    grantOfferId: z
      .string()
      .openapi({
        description:
          'The identifier of the grant offer that has been selected and from which the grant details will be used.',
      }),
  })
  .openapi({ required: ['grantAccountId', 'grantOfferId'] })
  .openapi('CapitalGrantInfo')

const CapitalGrantsSchema = z
  .strictObject({
    grants: z
      .array(CapitalGrantSchema)
      .openapi({ description: 'The unique identifier of the grant.' }),
  })
  .openapi({ required: ['grants'] })
  .openapi('CapitalGrants')

const CardIdentificationSchema = z
  .strictObject({
    expiryMonth: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The expiry month of the card.\n\nFormat: two digits. Add a leading zero for single-digit months. For example:\n* 03 = March\n* 11 = November',
      }),
    expiryYear: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({
        description: 'The expiry year of the card.\n\nFormat: four digits. For example: 2020',
      }),
    issueNumber: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description: 'The issue number of the card. Applies only to some UK debit cards.',
      }),
    number: z
      .string()
      .min(4)
      .max(19)
      .exactOptional()
      .openapi({
        description:
          'The card number without any separators.\n\nFor security, the response only includes the last four digits of the card number.',
      }),
    startMonth: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The month when the card was issued. Applies only to some UK debit cards.\n\nFormat: two digits. Add a leading zero for single-digit months. For example:\n* 03 = March\n* 11 = November',
      }),
    startYear: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({
        description:
          'The year when the card was issued. Applies only to some UK debit cards.\n\nFormat: four digits. For example: 2020',
      }),
    storedPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique [token](/payouts/payout-service/pay-out-to-cards/manage-card-information#save-card-details) created to identify the counterparty.\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardIdentification')

const CardSchema = z
  .strictObject({
    cardHolder: PartyIdentificationSchema.openapi({
      description: 'Contains information about the cardholder.',
    }),
    cardIdentification: CardIdentificationSchema.openapi({
      description: 'Contains the identification details of the card.',
    }),
  })
  .openapi({ required: ['cardHolder', 'cardIdentification'] })
  .openapi('Card')

const ConfirmationTrackingDataSchema = z
  .strictObject({
    status: z
      .enum(['credited', 'accepted'])
      .openapi({
        description:
          "The status of the transfer.\n\nPossible values:\n\n - **credited**: the funds are credited to your user's transfer instrument or bank account.- **accepted**: the request is accepted by the integration.",
      }),
    type: z
      .literal('confirmation')
      .default('confirmation')
      .openapi({
        description:
          "The type of the tracking event.\n\nPossible values:\n\n - **confirmation**: the transfer passed Adyen's internal review.",
      }),
  })
  .openapi({ required: ['status', 'type'] })
  .openapi('ConfirmationTrackingData')

const CounterpartyInfoV3Schema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).',
      }),
    bankAccount: BankAccountV3Schema.exactOptional().openapi({
      description: 'Contains information about the counterparty bank account.',
    }),
    card: CardSchema.exactOptional().openapi({
      description: 'Contains information about the counterparty card.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CounterpartyInfoV3')

const NameLocationSchema = z
  .strictObject({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city where the merchant is located.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
      }),
    countryOfOrigin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The name of the merchant's shop or service." }),
    rawData: z.string().exactOptional().openapi({ description: 'The raw data.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state where the merchant is located.' }),
  })
  .openapi({ required: [] })
  .openapi('NameLocation')

const MerchantDataSchema = z
  .strictObject({
    acquirerId: z
      .string()
      .exactOptional()
      .openapi({ description: "The unique identifier of the merchant's acquirer." }),
    mcc: z.string().exactOptional().openapi({ description: 'The merchant category code.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the merchant.' }),
    nameLocation: NameLocationSchema.exactOptional().openapi({
      description: 'Contains the name and location of the merchant.',
    }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the merchant.' }),
  })
  .openapi({ required: [] })
  .openapi('MerchantData')

const CounterpartyV3Schema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).',
      }),
    bankAccount: BankAccountV3Schema.exactOptional().openapi({
      description: 'Contains information about the counterparty bank account.',
    }),
    card: CardSchema.exactOptional().openapi({
      description: 'Contains information about the counterparty card.',
    }),
    merchant: MerchantDataSchema.exactOptional().openapi({
      description: 'Contains information about the merchant.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CounterpartyV3')

const DirectDebitInformationSchema = z
  .strictObject({
    dateOfSignature: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.',
      }),
    dueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "The date when the funds are deducted from your user's balance account.",
      }),
    mandateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your unique identifier for the direct debit mandate.' }),
    sequenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Identifies the direct debit transfer's type.\nPossible values: **OneOff**, **First**, **Recurring**, **Final**.",
      }),
  })
  .openapi({ required: [] })
  .openapi('DirectDebitInformation')

const EstimationTrackingDataSchema = z
  .strictObject({
    estimatedArrivalTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The estimated time the beneficiary should have access to the funds.',
      }),
    type: z
      .literal('estimation')
      .default('estimation')
      .openapi({
        description:
          'The type of tracking event. \n\nPossible values: \n\n- **estimation**: the estimated date and time of when the funds will be credited has been determined.',
      }),
  })
  .openapi({ required: ['estimatedArrivalTime', 'type'] })
  .openapi('EstimationTrackingData')

const ExecutionDateSchema = z
  .strictObject({
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date when the transfer will be processed. This date must be:\n* Within 30 days of the current date.\n* In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) **YYYY-MM-DD**. For example: 2025-01-31',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timezone that applies to the execution date. Use a timezone identifier from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).\n\nExample: **America/Los_Angeles**.\n Default value: **Europe/Amsterdam**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ExecutionDate')

const ExternalReasonSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The reason code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the reason code.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace for the reason code.' }),
  })
  .openapi({ required: [] })
  .openapi('ExternalReason')

const LinkSchema = z
  .strictObject({
    href: z.string().exactOptional().openapi({ description: 'The link to the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Link')

const LinksSchema = z
  .strictObject({
    next: LinkSchema.exactOptional().openapi({ description: 'Contains a link to the next page.' }),
    prev: LinkSchema.exactOptional().openapi({
      description: 'Contains a link to the previous page.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Links')

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

const InternalCategoryDataSchema = z
  .strictObject({
    modificationMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "The capture's merchant reference included in the transfer.",
        'x-addedInVersion': '4',
      }),
    modificationPspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The capture reference included in the transfer.',
        'x-addedInVersion': '4',
      }),
    type: z
      .literal('internal')
      .default('internal')
      .exactOptional()
      .openapi({ description: '**internal**' }),
  })
  .openapi({ required: [] })
  .openapi('InternalCategoryData')

const RelayedAuthorisationDataSchema = z
  .strictObject({
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.',
        'x-addedInVersion': '3',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your reference for the relayed authorisation data.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('RelayedAuthorisationData')

const ThreeDSecureSchema = z
  .strictObject({
    acsTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction identifier for the Access Control Server',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('ThreeDSecure')

const TransferNotificationValidationFactSchema = z
  .strictObject({
    result: z
      .string()
      .exactOptional()
      .openapi({ description: 'The evaluation result of the validation fact.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the validation fact.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationValidationFact')

const IssuedCardSchema = z
  .strictObject({
    authorisationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation**',
        'x-addedInVersion': '4',
      }),
    networkVariant: z
      .enum(['maestro_us', 'mastercard', 'visa'])
      .exactOptional()
      .openapi({
        description:
          'The card variant associated with the payment network used to route or process the transaction. For single-network cards, this matches the `brandVariant`. For US dual-network cards routed over an alternate network, this value reflects the specific tier or sub-type under that processing network.',
        'x-addedInVersion': '4',
      }),
    panEntryMode: z
      .enum(['chip', 'cof', 'contactless', 'ecommerce', 'magstripe', 'manual', 'token'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the method used for entering the PAN to initiate a transaction.\n\nPossible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.',
        'x-addedInVersion': '4',
      }),
    processingType: z
      .enum([
        'atmWithdraw',
        'balanceInquiry',
        'ecommerce',
        'moto',
        'pos',
        'purchaseWithCashback',
        'recurring',
        'token',
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains information about how the payment was processed.\n\nPossible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**.',
        'x-addedInVersion': '4',
      }),
    relayedAuthorisationData: RelayedAuthorisationDataSchema.exactOptional().openapi({
      description:
        'If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.',
      'x-addedInVersion': '4',
    }),
    schemeTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments.',
        'x-addedInVersion': '4',
      }),
    schemeUniqueTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.',
        'x-addedInVersion': '4',
      }),
    threeDSecure: ThreeDSecureSchema.exactOptional().openapi({
      description: 'The data of the result from the 3DS authentication.',
      'x-addedInVersion': '4',
    }),
    type: z
      .literal('issuedCard')
      .default('issuedCard')
      .exactOptional()
      .openapi({ description: '**issuedCard**' }),
    validationFacts: z
      .array(TransferNotificationValidationFactSchema)
      .exactOptional()
      .openapi({
        description:
          'The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('IssuedCard')

const PlatformPaymentSchema = z
  .strictObject({
    modificationMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "The capture's merchant reference included in the transfer.",
        'x-addedInVersion': '4',
      }),
    modificationPspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The capture reference included in the transfer.',
        'x-addedInVersion': '4',
      }),
    paymentMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "The payment's merchant reference included in the transfer.",
        'x-addedInVersion': '4',
      }),
    platformPaymentType: z
      .enum([
        'AcquiringFees',
        'AdyenCommission',
        'AdyenFees',
        'AdyenMarkup',
        'BalanceAccount',
        'ChargebackRemainder',
        'Commission',
        'DCCMarkup',
        'DCCPlatformCommission',
        'Default',
        'Interchange',
        'PaymentFee',
        'Remainder',
        'SchemeFee',
        'Surcharge',
        'Tip',
        'TopUp',
        'VAT',
      ])
      .exactOptional()
      .openapi({
        description:
          "Specifies the nature of the transfer. This parameter helps categorize transfers so you can reconcile transactions at a later time, using the Balance Platform Accounting Report for [marketplaces](https://docs.adyen.com/marketplaces/reports-and-fees/balance-platform-accounting-report/) or [platforms](https://docs.adyen.com/platforms/reports-and-fees/balance-platform-accounting-report/).\n\nPossible values:\n\n* **AcquiringFees**: The acquiring fee (the aggregated amount of interchange and scheme fee) incurred on a transaction.\n\n* **AdyenCommission**: The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing).\n\n* **AdyenFees**: All transaction fees due to Adyen. This is the aggregated amount of Adyen's commission and markup.\n\n* **AdyenMarkup**: The transaction fee due to Adyen under [Interchange++ pricing](https://www.adyen.com/pricing).\n\n* **BalanceAccount**: The amount booked to your user after the deduction of the relevant fees.\n\n* **Commission**: Your platform's or marketplace's commission on a transaction.\n\n* **DCCPlatformCommission**: **deprecated** The Dynamic Currency Conversion (DCC) fee on a transaction.\n\n* **DCCMarkup**: The Dynamic Currency Conversion (DCC) fee on a transaction.\n\n* **Interchange**: The interchange fee (fee paid to the issuer) incurred on a transaction.\n\n* **PaymentFee**: The aggregated amount of all transaction fees.\n\n* **Remainder**: The leftover amount after currency conversion.\n\n* **SchemeFee**: The scheme fee incurred on a transaction.\n\n* **Surcharge**: The surcharge paid by the customer on a transaction.\n\n* **Tip**: The tip paid by the customer.\n\n* **TopUp**: An incoming transfer to top up your user's balance account.\n\n* **VAT**: The value-added tax charged on the payment.",
        'x-addedInVersion': '4',
      }),
    pspPaymentReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment reference included in the transfer.',
        'x-addedInVersion': '4',
      }),
    type: z
      .literal('platformPayment')
      .default('platformPayment')
      .exactOptional()
      .openapi({ description: '**platformPayment**' }),
  })
  .openapi({ required: [] })
  .openapi('PlatformPayment')

const TransferNotificationMerchantDataSchema = z
  .strictObject({
    acquirerId: z
      .string()
      .exactOptional()
      .openapi({ description: "The unique identifier of the merchant's acquirer." }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city where the merchant is located.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the merchant is located.' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The two-character country code of the merchant's location, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.",
      }),
    mcc: z.string().exactOptional().openapi({ description: 'The merchant category code.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the merchant.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The name of the merchant's shop or service." }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the merchant.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationMerchantData')

const TransferNotificationCounterPartySchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).',
      }),
    bankAccount: BankAccountV3Schema.exactOptional().openapi({
      description: 'Contains information about the counterparty bank account.',
    }),
    card: CardSchema.exactOptional().openapi({
      description: 'Contains information about the counterparty card.',
    }),
    merchant: TransferNotificationMerchantDataSchema.exactOptional().openapi({
      description: 'Contains information about the merchant.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationCounterParty')

const InterchangeDataSchema = z
  .strictObject({
    interchangeAmount: AmountSchema.exactOptional().openapi({
      description: 'The currency and value of the adjusted interchange fee.',
    }),
    interchangeRateIndicator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A 3-character alphanumeric code assigned by Visa that identifies the specific interchange reimbursement program a transaction qualified for. The code is assigned based on the card type, entry mode, and security data provided.',
      }),
    type: z
      .literal('interchangeData')
      .default('interchangeData')
      .openapi({
        description:
          'The type of events data. \n\nPossible values: \n\n - **interchangeData**: information about the interchange fee applied to a transaction.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('InterchangeData')

const IssuingTransactionDataSchema = z
  .strictObject({
    captureCycleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'captureCycleId associated with transfer event.' }),
    type: z
      .literal('issuingTransactionData')
      .default('issuingTransactionData')
      .openapi({
        description:
          'The type of events data. \n\nPossible values: \n\n - **issuingTransactionData**: issuing transaction data',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('IssuingTransactionData')

const LodgingSchema = z
  .strictObject({
    checkInDate: z.string().exactOptional().openapi({ description: 'The check-in date.' }),
    numberOfNights: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of nights the room is booked for.' }),
  })
  .openapi({ required: [] })
  .openapi('Lodging')

const MerchantPurchaseDataSchema = z
  .strictObject({
    airline: AirlineSchema.exactOptional().openapi({ description: 'Airline information.' }),
    lodging: z
      .array(LodgingSchema)
      .exactOptional()
      .openapi({ description: 'Lodging information.' }),
    type: z
      .literal('merchantPurchaseData')
      .default('merchantPurchaseData')
      .openapi({
        description:
          'The type of events data. \n\nPossible values: \n\n - **merchantPurchaseData**: merchant purchase data',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('MerchantPurchaseData')

const ModificationSchema = z
  .strictObject({
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'The direction of the money movement.', 'x-addedInVersion': '3' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Our reference for the modification.', 'x-addedInVersion': '3' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your reference for the modification, used internally within your platform.',
        'x-addedInVersion': '3',
      }),
    status: z
      .enum([
        'approvalPending',
        'atmWithdrawal',
        'atmWithdrawalReversalPending',
        'atmWithdrawalReversed',
        'authAdjustmentAuthorised',
        'authAdjustmentError',
        'authAdjustmentRefused',
        'authorised',
        'bankTransfer',
        'bankTransferPending',
        'booked',
        'bookingPending',
        'cancelled',
        'capturePending',
        'captureReversalPending',
        'captureReversed',
        'captured',
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
        'chargebackPending',
        'chargebackReversalPending',
        'chargebackReversed',
        'credited',
        'depositCorrection',
        'depositCorrectionPending',
        'dispute',
        'disputeClosed',
        'disputeExpired',
        'disputeNeedsReview',
        'error',
        'expired',
        'failed',
        'fee',
        'feePending',
        'interchangeAdjusted',
        'internalTransfer',
        'internalTransferPending',
        'invoiceDeduction',
        'invoiceDeductionPending',
        'manualCorrectionPending',
        'manuallyCorrected',
        'matchedStatement',
        'matchedStatementPending',
        'merchantPayin',
        'merchantPayinPending',
        'merchantPayinReversed',
        'merchantPayinReversedPending',
        'miscCost',
        'miscCostPending',
        'paymentCost',
        'paymentCostPending',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the transfer event.', 'x-addedInVersion': '3' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of transfer modification.', 'x-addedInVersion': '3' }),
  })
  .openapi({ required: [] })
  .openapi('Modification')

const UKFpsTracingDataSchema = z
  .strictObject({
    fpid: z
      .string()
      .openapi({
        description:
          'The FPS trace number. This is a unique identifier assigned to transfers processed by [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service).',
      }),
    type: z.literal('ukFps').default('ukFps').openapi({ description: '**ukFps**' }),
  })
  .openapi({ required: ['fpid', 'type'] })
  .openapi('UKFpsTracingData')

const USAchTracingDataSchema = z
  .strictObject({
    traceNumber: z
      .string()
      .openapi({
        description:
          'The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach).',
      }),
    type: z.literal('usAch').default('usAch').openapi({ description: '**usAch**' }),
  })
  .openapi({ required: ['traceNumber', 'type'] })
  .openapi('USAchTracingData')

const InternalReviewTrackingDataSchema = z
  .strictObject({
    reason: z
      .literal('refusedForRegulatoryReasons')
      .exactOptional()
      .openapi({
        description:
          "The reason why the transfer failed Adyen's internal review. \n\nPossible values:\n\n- **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new). ",
      }),
    status: z
      .enum(['pending', 'failed'])
      .openapi({
        description:
          "The status of the transfer.\n\nPossible values:\n\n - **pending**: the transfer is under internal review by Adyen.\n\n- **failed**: the transfer failed Adyen's internal review. For details, see `reason`.\n\n",
      }),
    type: z
      .literal('internalReview')
      .default('internalReview')
      .openapi({
        description:
          "The type of tracking event. \n\nPossible values: \n\n - **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy.",
      }),
  })
  .openapi({ required: ['status', 'type'] })
  .openapi('InternalReviewTrackingData')

const TransferEventSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description:
        'The original journal amount. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.',
      'x-addedInVersion': '3',
    }),
    amountAdjustments: z
      .array(AmountAdjustmentSchema)
      .exactOptional()
      .openapi({
        description:
          'The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.',
        'x-addedInVersion': '3',
      }),
    arn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc.',
        'x-addedInVersion': '4',
      }),
    bookingDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date when the transfer request was sent.',
        'x-addedInVersion': '3',
      }),
    estimatedArrivalTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The estimated time when the beneficiary should have access to the funds.',
        'x-addedInVersion': '3',
      }),
    eventsData: z
      .array(
        z
          .discriminatedUnion('type', [
            InterchangeDataSchema,
            IssuingTransactionDataSchema,
            MerchantPurchaseDataSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                merchantPurchaseData: '#/components/schemas/MerchantPurchaseData',
                issuingTransactionData: '#/components/schemas/IssuingTransactionData',
                interchangeData: '#/components/schemas/InterchangeData',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({ description: 'A list of event data.', 'x-addedInVersion': '4' }),
    externalReason: ExternalReasonSchema.exactOptional().openapi({
      description: 'The external reason for the transfer status.',
      'x-addedInVersion': '3',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the transfer event.',
        'x-addedInVersion': '3',
      }),
    modification: ModificationSchema.exactOptional().openapi({
      description:
        'The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).',
      'x-addedInVersion': '3',
    }),
    mutations: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({
        description: 'The list of balance mutations per event.',
        'x-addedInVersion': '3',
      }),
    originalAmount: AmountSchema.exactOptional().openapi({
      description:
        'The amount in the original currency. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. ',
      'x-addedInVersion': '3',
    }),
    reason: z
      .enum([
        'accountHierarchyNotActive',
        'amountLimitExceeded',
        'approvalExpired',
        'approved',
        'avsDeclined',
        'balanceAccountTemporarilyBlockedByTransactionRule',
        'blockCard',
        'callReferral',
        'cancelled',
        'captureCard',
        'cardExpired',
        'cardholderAuthenticationRequired',
        'cashbackAmountExceedsLimit',
        'cavvDeclined',
        'contactlessFallback',
        'contactlessLimitReached',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'cryptographicFailure',
        'cvcDeclined',
        'declined',
        'declinedByBapValidation',
        'declinedByTransactionRule',
        'declinedNonGeneric',
        'directDebitNotSupported',
        'doNotHonor',
        'domesticDebitTransactionNotAllowed',
        'duplicateTransmissionDetected',
        'error',
        'formatError',
        'fraud',
        'fraudCancelled',
        'honorWithId',
        'internalTimeout',
        'invalidAccount',
        'invalidAmount',
        'invalidAuthorizationLifeCycle',
        'invalidCard',
        'invalidExpiryDate',
        'invalidFromAccount',
        'invalidIssuer',
        'invalidMerchant',
        'invalidPin',
        'invalidToAccount',
        'invalidTransaction',
        'issuerSuspectedFraud',
        'lostCard',
        'mobilePinRequired',
        'noCheckingAccount',
        'noSavingsAccount',
        'not3dAuthenticated',
        'notEnoughBalance',
        'notSubmitted',
        'notSupported',
        'partiallyApproved',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'pinNotChanged',
        'pinRequired',
        'pinTriesExceeded',
        'pinValidationNotPossible',
        'purchaseAmountOnlyNoCashBack',
        'refusedByCounterpartyBank',
        'refusedByCustomer',
        'restrictedCard',
        'revocationOfAuth',
        'routeNotFound',
        'scaAuthenticationRequired',
        'scaFailed',
        'schemeAdvice',
        'securityViolation',
        'shopperCancelled',
        'stolenCard',
        'threedsDynamicLinkingMismatch',
        'transactionNotPermitted',
        'transferInstrumentDoesNotExist',
        'unableToRouteTransaction',
        'unknown',
        'withdrawalAmountExceeded',
        'withdrawalCountExceeded',
      ])
      .exactOptional()
      .openapi({ description: 'The reason for the transfer status.', 'x-addedInVersion': '3' }),
    status: z
      .enum([
        'approvalPending',
        'atmWithdrawal',
        'atmWithdrawalReversalPending',
        'atmWithdrawalReversed',
        'authAdjustmentAuthorised',
        'authAdjustmentError',
        'authAdjustmentRefused',
        'authorised',
        'bankTransfer',
        'bankTransferPending',
        'booked',
        'bookingPending',
        'cancelled',
        'capturePending',
        'captureReversalPending',
        'captureReversed',
        'captured',
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
        'chargebackPending',
        'chargebackReversalPending',
        'chargebackReversed',
        'credited',
        'depositCorrection',
        'depositCorrectionPending',
        'dispute',
        'disputeClosed',
        'disputeExpired',
        'disputeNeedsReview',
        'error',
        'expired',
        'failed',
        'fee',
        'feePending',
        'interchangeAdjusted',
        'internalTransfer',
        'internalTransferPending',
        'invoiceDeduction',
        'invoiceDeductionPending',
        'manualCorrectionPending',
        'manuallyCorrected',
        'matchedStatement',
        'matchedStatementPending',
        'merchantPayin',
        'merchantPayinPending',
        'merchantPayinReversed',
        'merchantPayinReversedPending',
        'miscCost',
        'miscCostPending',
        'paymentCost',
        'paymentCostPending',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the transfer event.', 'x-addedInVersion': '3' }),
    tracingData: z
      .discriminatedUnion('type', [UKFpsTracingDataSchema, USAchTracingDataSchema])
      .exactOptional()
      .openapi({
        description: 'Additional tracing information for the tracing event.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            usAch: '#/components/schemas/USAchTracingData',
            ukFps: '#/components/schemas/UKFpsTracingData',
          },
        },
        'x-addedInVersion': '4',
      }),
    trackingData: z
      .discriminatedUnion('type', [
        ConfirmationTrackingDataSchema,
        EstimationTrackingDataSchema,
        InternalReviewTrackingDataSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Additional information for the tracking event.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            estimation: '#/components/schemas/EstimationTrackingData',
            confirmation: '#/components/schemas/ConfirmationTrackingData',
            internalReview: '#/components/schemas/InternalReviewTrackingData',
          },
        },
        'x-addedInVersion': '3',
      }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.',
        'x-addedInVersion': '3',
      }),
    type: z
      .enum(['accounting', 'tracing', 'tracking'])
      .exactOptional()
      .openapi({
        description:
          'The type of the transfer event. Possible values: **accounting**, **tracing**, **tracking**.',
        'x-addedInVersion': '3',
      }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date when the tracking status was updated.',
        'x-addedInVersion': '3',
      }),
    valueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferEvent')

const NetworkReasonSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network-specific reason code. Use `namespace` to identify the code set.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the reason code.' }),
    namespace: z
      .enum([
        'iso8583ResponseCode',
        'ukFpsRejectionCode',
        'ukFpsReturnReasonCode',
        'usAchCorrectionReasonCode',
        'usAchReturnReasonCode',
      ])
      .exactOptional()
      .openapi({
        description:
          'The category of codes that `code` belongs to. The `namespace` identifies the payment network and the type of reason\n\nPossible values:\n*  **ukFpsRejectionCode** : Reason code for a rejected Faster Payments transfer.\n*  **ukFpsReturnReasonCode** : Reason code for a returned Faster Payments transfer.\n*  **usAchReturnReasonCode** : Reason code for a returned ACH transfer.\n*  **usAchCorrectionReasonCode** : Reason code for an ACH Notification of Change.\n*  **iso8583ResponseCode** : ISO 8583 response code for a card transfer.\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkReason')

const PaymentInstrumentSchema = z
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
    tokenType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of wallet that the network token is associated with.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInstrument')

const TransferReviewSchema = z
  .strictObject({
    numberOfApprovalsRequired: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.',
      }),
    scaOnApproval: z
      .enum(['completed', 'notApplicable', 'required'])
      .exactOptional()
      .openapi({
        description:
          'Shows the status of the Strong Customer Authentication (SCA) process.\n\nPossible values: **required**, **notApplicable**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferReview')

const TransactionRuleReferenceSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    outcomeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The outcome type of the rule.', 'x-addedInVersion': '4' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
    score: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The transaction score determined by the rule. Returned only when `outcomeType` is **scoreBased**.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleReference')

const TransactionRuleSourceSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: 'ID of the resource, when applicable.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of resource for which the transaction rule is defined.\n\nPossible values:\n\n * **PaymentInstrumentGroup**\n\n* **PaymentInstrument**\n\n* **BalancePlatform**\n\n* **EntityUsageConfiguration**\n\n* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleSource')

const TransactionEventViolationSchema = z
  .strictObject({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'An explanation about why the transaction rule failed.' }),
    transactionRule: TransactionRuleReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the transaction rule.',
    }),
    transactionRuleSource: TransactionRuleSourceSchema.exactOptional().openapi({
      description: 'Contains information about the resource to which the transaction rule applies.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransactionEventViolation')

const TransactionRulesResultSchema = z
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
          'Indicates whether the transaction passed the evaluation for all hardblock rules',
        'x-addedInVersion': '4',
      }),
    score: z.int32().exactOptional().openapi({ description: 'The score of the Risk analysis.' }),
    triggeredTransactionRules: z
      .array(TransactionEventViolationSchema)
      .exactOptional()
      .openapi({
        description: 'Array containing all the transaction rules that the transaction triggered.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRulesResult')

const FundingInstrumentSchema = z
  .strictObject({
    cardIdentification: CardIdentificationSchema.exactOptional().openapi({
      description:
        'Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:\n - `storedPaymentMethodId` or \n - `expiryMonth`, `expiryYear`, and `number`.',
    }),
    networkPaymentReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique reference assigned by the card network for the pay-in transaction.',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is **DEPOSIT_ACCOUNT**.',
      }),
    sourceOfFunds: z
      .enum(['DEBIT', 'DEPOSIT_ACCOUNT'])
      .exactOptional()
      .openapi({
        description:
          'Indicates where the funds used for the transfer originated. Possible values are:\n- **DEBIT** for card-to-card transfers.\n- **DEPOSIT_ACCOUNT** for wallet-to-card transfers.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FundingInstrument')

const UltimatePartyIdentificationSchema = z
  .strictObject({
    address: AddressSchema.exactOptional().openapi({
      description: 'The address of the bank account or card owner.',
    }),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.\n\nAllowed only when `type` is **individual**.',
      }),
    email: z
      .string()
      .max(254)
      .exactOptional()
      .openapi({
        description:
          'The email address of the organization or individual. Maximum length: 254 characters.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the entity that owns the bank account or card.\n\nSupported characters: [a-z] [A-Z] [0-9] , . ; : - — / \\ + & ! ? @ ( ) " \' and space.\n\nRequired when `category` is **bank**.',
      }),
    fundingInstrument: FundingInstrumentSchema.exactOptional().openapi({
      description: 'Details of the card or token used to fund the pay-in transaction.',
    }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.\n\nRequired when you include `cardIdentification.storedPaymentMethodId`.",
      }),
    type: z
      .enum(['individual', 'organization', 'unknown'])
      .default('unknown')
      .exactOptional()
      .openapi({
        description:
          'The type of entity that owns the bank account or card.\n\nPossible values: **individual**, **organization**, or **unknown**.\n\nRequired when `category` is **card**. In this case, the value must be **individual**.',
      }),
    url: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'The URL of the organization or individual. Maximum length: 255 characters.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UltimatePartyIdentification')

const TransferDataSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description:
        'The account holder associated with the balance account involved in the transfer.',
      'x-addedInVersion': '3',
    }),
    amount: AmountSchema.openapi({
      description: 'The amount of the transfer.',
      'x-addedInVersion': '1',
    }),
    balanceAccount: ResourceReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the balance account involved in the transfer.',
      'x-addedInVersion': '3',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    balances: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({
        description: 'The list of the latest balance statuses in the transfer.',
        'x-addedInVersion': '3',
      }),
    category: z
      .enum(['bank', 'card', 'internal', 'issuedCard', 'platformPayment', 'topUp'])
      .openapi({
        description:
          'The category of the transfer.\n\nPossible values:\n\n - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.\n\n- **card**: A transfer involving a third-party card.\n\n- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.\n\n- **issuedCard**: A transfer initiated by an Adyen-issued card.\n\n- **platformPayment**: Funds movements related to payments that are acquired for your users.\n\n- **topUp**: An incoming transfer initiated by your user to top up their balance account.',
        'x-addedInVersion': '3',
      }),
    categoryData: z
      .xor([
        BankCategoryDataSchema,
        InternalCategoryDataSchema,
        IssuedCardSchema,
        PlatformPaymentSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The relevant data according to the transfer category.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            issuedCard: '#/components/schemas/IssuedCard',
            platformPayment: '#/components/schemas/PlatformPayment',
            bank: '#/components/schemas/BankCategoryData',
            internal: '#/components/schemas/InternalCategoryData',
          },
        },
        'x-addedInVersion': '4',
      }),
    counterparty: TransferNotificationCounterPartySchema.exactOptional().openapi({
      description: 'The other party in the transfer.',
      'x-addedInVersion': '3',
    }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
        'x-deprecatedInVersion': '3',
        'x-deprecatedMessage': 'Use createdAt or updatedAt',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
        'x-addedInVersion': '1',
      }),
    directDebitInformation: DirectDebitInformationSchema.exactOptional().openapi({
      description: 'The details of the direct debit.',
      'x-addedInVersion': '3',
    }),
    direction: z
      .enum(['incoming', 'outgoing'])
      .exactOptional()
      .openapi({
        description:
          'The direction of the transfer.\n\nPossible values: **incoming**, **outgoing**.',
        'x-addedInVersion': '2',
      }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the latest transfer event. Included only when the `category` is **issuedCard**.',
        'x-addedInVersion': '4',
      }),
    events: z
      .array(TransferEventSchema)
      .exactOptional()
      .openapi({
        description: 'The list of events leading up to the current status of the transfer.',
        'x-addedInVersion': '3',
      }),
    executionDate: ExecutionDateSchema.exactOptional().openapi({
      description:
        'Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.\n\nUntil the execution date:\n- The `status` of the transfer remains as **received**.\n- The `reason` of the transfer remains as **pending**.\n\n',
      'x-addedInVersion': '3',
    }),
    externalReason: ExternalReasonSchema.exactOptional().openapi({
      description: 'The external reason of this transfer.',
      'x-addedInVersion': '3',
    }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    networkReason: NetworkReasonSchema.exactOptional().openapi({
      description:
        'Contains information that explains why the transfer was rejected or returned by the network.',
      'x-addedInVersion': '4',
    }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      description: 'Contains information about the payment instrument used in the transfer.',
      'x-addedInVersion': '3',
    }),
    reason: z
      .enum([
        'accountHierarchyNotActive',
        'amountLimitExceeded',
        'approvalExpired',
        'approved',
        'avsDeclined',
        'balanceAccountTemporarilyBlockedByTransactionRule',
        'blockCard',
        'callReferral',
        'cancelled',
        'captureCard',
        'cardExpired',
        'cardholderAuthenticationRequired',
        'cashbackAmountExceedsLimit',
        'cavvDeclined',
        'contactlessFallback',
        'contactlessLimitReached',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'cryptographicFailure',
        'cvcDeclined',
        'declined',
        'declinedByBapValidation',
        'declinedByTransactionRule',
        'declinedNonGeneric',
        'directDebitNotSupported',
        'doNotHonor',
        'domesticDebitTransactionNotAllowed',
        'duplicateTransmissionDetected',
        'error',
        'formatError',
        'fraud',
        'fraudCancelled',
        'honorWithId',
        'internalTimeout',
        'invalidAccount',
        'invalidAmount',
        'invalidAuthorizationLifeCycle',
        'invalidCard',
        'invalidExpiryDate',
        'invalidFromAccount',
        'invalidIssuer',
        'invalidMerchant',
        'invalidPin',
        'invalidToAccount',
        'invalidTransaction',
        'issuerSuspectedFraud',
        'lostCard',
        'mobilePinRequired',
        'noCheckingAccount',
        'noSavingsAccount',
        'not3dAuthenticated',
        'notEnoughBalance',
        'notSubmitted',
        'notSupported',
        'partiallyApproved',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'pinNotChanged',
        'pinRequired',
        'pinTriesExceeded',
        'pinValidationNotPossible',
        'purchaseAmountOnlyNoCashBack',
        'refusedByCounterpartyBank',
        'refusedByCustomer',
        'restrictedCard',
        'revocationOfAuth',
        'routeNotFound',
        'scaAuthenticationRequired',
        'scaFailed',
        'schemeAdvice',
        'securityViolation',
        'shopperCancelled',
        'stolenCard',
        'threedsDynamicLinkingMismatch',
        'transactionNotPermitted',
        'transferInstrumentDoesNotExist',
        'unableToRouteTransaction',
        'unknown',
        'withdrawalAmountExceeded',
        'withdrawalCountExceeded',
      ])
      .exactOptional()
      .openapi({
        description: 'Additional information about the status of the transfer.',
        'x-addedInVersion': '2',
      }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
        'x-addedInVersion': '2',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.\n\n - **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.',
        'x-addedInVersion': '2',
      }),
    review: TransferReviewSchema.exactOptional().openapi({
      description: 'Contains status updates related to additional reviews.',
      'x-addedInVersion': '3',
    }),
    sequenceNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The sequence number of the transfer webhook. The numbers start from 1 and increase with each new webhook for a specific transfer.\n\nThe sequence number can help you restore the correct sequence of events even if they arrive out of order.',
        'x-addedInVersion': '3',
      }),
    status: z
      .enum([
        'approvalPending',
        'atmWithdrawal',
        'atmWithdrawalReversalPending',
        'atmWithdrawalReversed',
        'authAdjustmentAuthorised',
        'authAdjustmentError',
        'authAdjustmentRefused',
        'authorised',
        'bankTransfer',
        'bankTransferPending',
        'booked',
        'bookingPending',
        'cancelled',
        'capturePending',
        'captureReversalPending',
        'captureReversed',
        'captured',
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
        'chargebackPending',
        'chargebackReversalPending',
        'chargebackReversed',
        'credited',
        'depositCorrection',
        'depositCorrectionPending',
        'dispute',
        'disputeClosed',
        'disputeExpired',
        'disputeNeedsReview',
        'error',
        'expired',
        'failed',
        'fee',
        'feePending',
        'interchangeAdjusted',
        'internalTransfer',
        'internalTransferPending',
        'invoiceDeduction',
        'invoiceDeductionPending',
        'manualCorrectionPending',
        'manuallyCorrected',
        'matchedStatement',
        'matchedStatementPending',
        'merchantPayin',
        'merchantPayinPending',
        'merchantPayinReversed',
        'merchantPayinReversedPending',
        'miscCost',
        'miscCostPending',
        'paymentCost',
        'paymentCostPending',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .openapi({
        description:
          "The result of the transfer.\n\nFor example:\n\n- **received**: an outgoing transfer request is created.\n- **refused**: the transfer request is rejected by Adyen for one of the following reasons:\n  - Transfer limit exceeded.\n  - Transaction rule requirements violated.\n- **authorised**: the transfer request is authorized and the funds are reserved.\n- **booked**: the funds are deducted from your user's balance account.\n - **failed**: the transfer is rejected by the counterparty's bank.\n- **returned**: the transfer is returned by the counterparty's bank.",
        'x-addedInVersion': '2',
      }),
    tracing: z
      .discriminatedUnion('type', [UKFpsTracingDataSchema, USAchTracingDataSchema])
      .exactOptional()
      .openapi({
        description:
          'Contains information for tracing the transfer after Adyen forwards it to the network.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            usAch: '#/components/schemas/USAchTracingData',
            ukFps: '#/components/schemas/UKFpsTracingData',
          },
        },
        'x-addedInVersion': '4',
      }),
    tracking: z
      .discriminatedUnion('type', [
        ConfirmationTrackingDataSchema,
        EstimationTrackingDataSchema,
        InternalReviewTrackingDataSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The latest tracking information of the transfer.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            estimation: '#/components/schemas/EstimationTrackingData',
            confirmation: '#/components/schemas/ConfirmationTrackingData',
            internalReview: '#/components/schemas/InternalReviewTrackingData',
          },
        },
        'x-addedInVersion': '3',
      }),
    transactionRulesResult: TransactionRulesResultSchema.exactOptional().openapi({
      description: 'Contains the results of the evaluation of the transaction rules.',
      'x-addedInVersion': '3',
    }),
    type: z
      .enum([
        'payment',
        'capture',
        'captureReversal',
        'refund',
        'refundReversal',
        'chargeback',
        'chargebackCorrection',
        'chargebackReversal',
        'chargebackReversalCorrection',
        'secondChargeback',
        'secondChargebackCorrection',
        'atmWithdrawal',
        'atmWithdrawalReversal',
        'internalTransfer',
        'internalDirectDebit',
        'manualCorrection',
        'invoiceDeduction',
        'depositCorrection',
        'reserveAdjustment',
        'bankTransfer',
        'bankDirectDebit',
        'cardTransfer',
        'miscCost',
        'paymentCost',
        'fee',
        'leftover',
        'grant',
        'capitalFundsCollection',
        'cashOutInstruction',
        'cashoutFee',
        'cashoutRepayment',
        'cashoutFunding',
        'repayment',
        'installment',
        'installmentReversal',
        'balanceAdjustment',
        'balanceRollover',
        'balanceMigration',
        'fxSell',
        'fxBuy',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.',
        'x-addedInVersion': '3',
      }),
    ultimateParty: UltimatePartyIdentificationSchema.exactOptional().openapi({
      description: 'The ultimate sender of the funds of the transfer (ultimate debtor).',
      'x-addedInVersion': '3',
    }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: ['amount', 'category', 'status'] })
  .openapi('TransferData')

const FindTransfersResponseSchema = z
  .strictObject({
    _links: LinksSchema.exactOptional().openapi({
      description: 'Contains links to the next and previous page whenever applicable.',
    }),
    data: z
      .array(TransferDataSchema)
      .exactOptional()
      .openapi({ description: 'Contains the transfers that match the query parameters.' }),
  })
  .openapi({ required: [] })
  .openapi('FindTransfersResponse')

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const JSONObjectSchema = z.object({}).openapi('JSONObject')

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

const ReturnTransferRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({
      description: 'Contains information about the amount to be returned.',
    }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          'Your internal reference for the return. If you don\'t provide this in the request, Adyen generates a unique reference. This reference is used in all communication with you about the instruction status.\n\nWe recommend using a unique value per instruction.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\n',
      }),
  })
  .openapi({ required: ['amount'] })
  .openapi('ReturnTransferRequest')

const ReturnTransferResponseSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the return.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your internal reference for the return.' }),
    status: z
      .enum(['Authorised', 'Declined'])
      .exactOptional()
      .openapi({
        description:
          'The resulting status of the return.\n\nPossible values: **Authorised**, **Declined**.',
      }),
    transferId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the original transfer.' }),
  })
  .openapi({ required: [] })
  .openapi('ReturnTransferResponse')

const RoutingDetailsSchema = z
  .strictObject({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'A code that identifies the problem type.' }),
    priority: z
      .enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire'])
      .exactOptional()
      .openapi({
        description:
          'The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
  })
  .openapi({ required: [] })
  .openapi('RoutingDetails')

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

const TransferViewSchema = z
  .strictObject({
    categoryData: z
      .xor([
        BankCategoryDataSchema,
        InternalCategoryDataSchema,
        IssuedCardSchema,
        PlatformPaymentSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The relevant data according to the transfer category.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            issuedCard: '#/components/schemas/IssuedCard',
            platformPayment: '#/components/schemas/PlatformPayment',
            bank: '#/components/schemas/BankCategoryData',
            internal: '#/components/schemas/InternalCategoryData',
          },
        },
        'x-addedInVersion': '4',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    reference: z
      .string()
      .openapi({
        description:
          "The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.",
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: ['reference'] })
  .openapi('TransferView')

const TransactionSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.openapi({
      description:
        'Contains information about the account holder associated with the `balanceAccount`.',
      'x-addedInVersion': '4',
    }),
    amount: AmountSchema.openapi({
      description: 'Contains information about the amount of the transaction.',
      'x-addedInVersion': '1',
    }),
    balanceAccount: ResourceReferenceSchema.openapi({
      description: 'Contains information about the balance account involved in the transaction.',
      'x-addedInVersion': '4',
    }),
    balancePlatform: z
      .string()
      .openapi({
        description: 'The unique identifier of the balance platform.',
        'x-addedInVersion': '1',
      }),
    bookingDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date the transaction was booked into the balance account.',
        'x-addedInVersion': '1',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `description` from the `/transfers` request.',
        'x-addedInVersion': '1',
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the transaction.',
        'x-addedInVersion': '1',
      }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      description:
        'Contains information about the payment instrument that was used for the transaction.',
      'x-addedInVersion': '4',
    }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference sent to or received from the counterparty.\n\n* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary) request.\n\n * For incoming funds, this is the reference from the sender.',
        'x-addedInVersion': '1',
      }),
    status: z
      .enum(['booked', 'pending'])
      .openapi({
        description:
          'The status of the transaction.\n\n Possible values:\n\n* **pending**: The transaction is still pending.\n\n* **booked**: The transaction has been booked to the balance account.\n\n',
        'x-addedInVersion': '1',
      }),
    transfer: TransferViewSchema.exactOptional().openapi({
      description: 'Contains information about the transfer related to the transaction.',
      'x-addedInVersion': '4',
    }),
    valueDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date the transfer amount becomes available in the balance account.',
        'x-addedInVersion': '1',
      }),
  })
  .openapi({
    required: [
      'accountHolder',
      'amount',
      'balanceAccount',
      'balancePlatform',
      'bookingDate',
      'id',
      'status',
      'valueDate',
    ],
  })
  .openapi('Transaction')

const TransactionSearchResponseSchema = z
  .strictObject({
    _links: LinksSchema.exactOptional().openapi({
      description: 'Contains links to the next and previous page whenever applicable.',
    }),
    data: z
      .array(TransactionSchema)
      .exactOptional()
      .openapi({ description: 'Contains the transactions that match the query parameters.' }),
  })
  .openapi({ required: [] })
  .openapi('TransactionSearchResponse')

const TransferSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description:
        'The account holder associated with the balance account involved in the transfer.',
      'x-addedInVersion': '3',
    }),
    amount: AmountSchema.openapi({
      description: 'The amount of the transfer.',
      'x-addedInVersion': '1',
    }),
    balanceAccount: ResourceReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the balance account involved in the transfer.',
      'x-addedInVersion': '3',
    }),
    category: z
      .enum(['bank', 'card', 'internal', 'issuedCard', 'platformPayment', 'topUp'])
      .openapi({
        description:
          'The category of the transfer.\n\nPossible values:\n\n - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.\n\n- **card**: A transfer involving a third-party card.\n\n- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.\n\n- **issuedCard**: A transfer initiated by an Adyen-issued card.\n\n- **platformPayment**: Funds movements related to payments that are acquired for your users.\n\n- **topUp**: An incoming transfer initiated by your user to top up their balance account.',
        'x-addedInVersion': '3',
      }),
    categoryData: z
      .xor([
        BankCategoryDataSchema,
        InternalCategoryDataSchema,
        IssuedCardSchema,
        PlatformPaymentSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The relevant data according to the transfer category.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            issuedCard: '#/components/schemas/IssuedCard',
            platformPayment: '#/components/schemas/PlatformPayment',
            bank: '#/components/schemas/BankCategoryData',
            internal: '#/components/schemas/InternalCategoryData',
          },
        },
        'x-addedInVersion': '4',
      }),
    counterparty: CounterpartyV3Schema.openapi({
      description: 'The other party in the transfer.',
      'x-addedInVersion': '3',
    }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
        'x-deprecatedInVersion': '3',
        'x-deprecatedMessage': 'Use createdAt or updatedAt',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
        'x-addedInVersion': '1',
      }),
    directDebitInformation: DirectDebitInformationSchema.exactOptional().openapi({
      description: 'The details of the direct debit.',
      'x-addedInVersion': '3',
    }),
    direction: z
      .enum(['incoming', 'outgoing'])
      .exactOptional()
      .openapi({
        description:
          'The direction of the transfer.\n\nPossible values: **incoming**, **outgoing**.',
        'x-addedInVersion': '2',
      }),
    executionDate: ExecutionDateSchema.exactOptional().openapi({
      description:
        'Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.\n\nUntil the execution date:\n- The `status` of the transfer remains as **received**.\n- The `reason` of the transfer remains as **pending**.\n\n',
      'x-addedInVersion': '3',
    }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      description: 'Contains information about the payment instrument used in the transfer.',
      'x-addedInVersion': '3',
    }),
    reason: z
      .enum([
        'accountHierarchyNotActive',
        'amountLimitExceeded',
        'approvalExpired',
        'approved',
        'avsDeclined',
        'balanceAccountTemporarilyBlockedByTransactionRule',
        'blockCard',
        'callReferral',
        'cancelled',
        'captureCard',
        'cardExpired',
        'cardholderAuthenticationRequired',
        'cashbackAmountExceedsLimit',
        'cavvDeclined',
        'contactlessFallback',
        'contactlessLimitReached',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'cryptographicFailure',
        'cvcDeclined',
        'declined',
        'declinedByBapValidation',
        'declinedByTransactionRule',
        'declinedNonGeneric',
        'directDebitNotSupported',
        'doNotHonor',
        'domesticDebitTransactionNotAllowed',
        'duplicateTransmissionDetected',
        'error',
        'formatError',
        'fraud',
        'fraudCancelled',
        'honorWithId',
        'internalTimeout',
        'invalidAccount',
        'invalidAmount',
        'invalidAuthorizationLifeCycle',
        'invalidCard',
        'invalidExpiryDate',
        'invalidFromAccount',
        'invalidIssuer',
        'invalidMerchant',
        'invalidPin',
        'invalidToAccount',
        'invalidTransaction',
        'issuerSuspectedFraud',
        'lostCard',
        'mobilePinRequired',
        'noCheckingAccount',
        'noSavingsAccount',
        'not3dAuthenticated',
        'notEnoughBalance',
        'notSubmitted',
        'notSupported',
        'partiallyApproved',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'pinNotChanged',
        'pinRequired',
        'pinTriesExceeded',
        'pinValidationNotPossible',
        'purchaseAmountOnlyNoCashBack',
        'refusedByCounterpartyBank',
        'refusedByCustomer',
        'restrictedCard',
        'revocationOfAuth',
        'routeNotFound',
        'scaAuthenticationRequired',
        'scaFailed',
        'schemeAdvice',
        'securityViolation',
        'shopperCancelled',
        'stolenCard',
        'threedsDynamicLinkingMismatch',
        'transactionNotPermitted',
        'transferInstrumentDoesNotExist',
        'unableToRouteTransaction',
        'unknown',
        'withdrawalAmountExceeded',
        'withdrawalCountExceeded',
      ])
      .exactOptional()
      .openapi({
        description: 'Additional information about the status of the transfer.',
        'x-addedInVersion': '2',
      }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
        'x-addedInVersion': '2',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.\n\n - **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.',
        'x-addedInVersion': '2',
      }),
    review: TransferReviewSchema.exactOptional().openapi({
      description: 'Contains status updates related to additional reviews.',
      'x-addedInVersion': '3',
    }),
    status: z
      .enum([
        'approvalPending',
        'atmWithdrawal',
        'atmWithdrawalReversalPending',
        'atmWithdrawalReversed',
        'authAdjustmentAuthorised',
        'authAdjustmentError',
        'authAdjustmentRefused',
        'authorised',
        'bankTransfer',
        'bankTransferPending',
        'booked',
        'bookingPending',
        'cancelled',
        'capturePending',
        'captureReversalPending',
        'captureReversed',
        'captured',
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
        'chargebackPending',
        'chargebackReversalPending',
        'chargebackReversed',
        'credited',
        'depositCorrection',
        'depositCorrectionPending',
        'dispute',
        'disputeClosed',
        'disputeExpired',
        'disputeNeedsReview',
        'error',
        'expired',
        'failed',
        'fee',
        'feePending',
        'interchangeAdjusted',
        'internalTransfer',
        'internalTransferPending',
        'invoiceDeduction',
        'invoiceDeductionPending',
        'manualCorrectionPending',
        'manuallyCorrected',
        'matchedStatement',
        'matchedStatementPending',
        'merchantPayin',
        'merchantPayinPending',
        'merchantPayinReversed',
        'merchantPayinReversedPending',
        'miscCost',
        'miscCostPending',
        'paymentCost',
        'paymentCostPending',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .openapi({
        description:
          "The result of the transfer.\n\nFor example:\n\n- **received**: an outgoing transfer request is created.\n- **refused**: the transfer request is rejected by Adyen for one of the following reasons:\n  - Transfer limit exceeded.\n  - Transaction rule requirements violated.\n- **authorised**: the transfer request is authorized and the funds are reserved.\n- **booked**: the funds are deducted from your user's balance account.\n - **failed**: the transfer is rejected by the counterparty's bank.\n- **returned**: the transfer is returned by the counterparty's bank.",
        'x-addedInVersion': '2',
      }),
    type: z
      .enum([
        'payment',
        'capture',
        'captureReversal',
        'refund',
        'refundReversal',
        'chargeback',
        'chargebackCorrection',
        'chargebackReversal',
        'chargebackReversalCorrection',
        'secondChargeback',
        'secondChargebackCorrection',
        'atmWithdrawal',
        'atmWithdrawalReversal',
        'internalTransfer',
        'internalDirectDebit',
        'manualCorrection',
        'invoiceDeduction',
        'depositCorrection',
        'reserveAdjustment',
        'bankTransfer',
        'bankDirectDebit',
        'cardTransfer',
        'miscCost',
        'paymentCost',
        'fee',
        'leftover',
        'grant',
        'capitalFundsCollection',
        'cashOutInstruction',
        'cashoutFee',
        'cashoutRepayment',
        'cashoutFunding',
        'repayment',
        'installment',
        'installmentReversal',
        'balanceAdjustment',
        'balanceRollover',
        'balanceMigration',
        'fxSell',
        'fxBuy',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.',
        'x-addedInVersion': '3',
      }),
    ultimateParty: UltimatePartyIdentificationSchema.exactOptional().openapi({
      description: 'The ultimate sender of the funds of the transfer (ultimate debtor).',
      'x-addedInVersion': '3',
    }),
  })
  .openapi({ required: ['amount', 'category', 'counterparty', 'status'] })
  .openapi('Transfer')

const TransferRequestReviewSchema = z
  .strictObject({
    numberOfApprovalsRequired: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.',
      }),
    scaOnApproval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether you will initiate Strong Customer Authentication (SCA) in thePOST [/transfers/approve](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) request.\n\nOnly applies to transfers made with an Adyen [business account](https://docs.adyen.com/platforms/business-accounts).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferRequestReview')

const TransferInfoSchema = z
  .strictObject({
    amount: AmountSchema.openapi({
      description: 'The amount of the transfer.',
      'x-addedInVersion': '1',
    }),
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).\n\nIf you want to make a transfer using a **virtual** **bankAccount** assigned to the balance account, you must specify the [payment instrument ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id) of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.',
      }),
    category: z
      .enum(['bank', 'card', 'internal', 'issuedCard', 'platformPayment', 'topUp'])
      .openapi({
        description:
          'The category of the transfer.\n\nPossible values:\n\n - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.\n\n- **card**: A transfer involving a third-party card.\n\n- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.\n\n- **issuedCard**: A transfer initiated by an Adyen-issued card.\n\n- **platformPayment**: Funds movements related to payments that are acquired for your users.\n\n- **topUp**: An incoming transfer initiated by your user to top up their balance account.',
        'x-addedInVersion': '3',
      }),
    counterparty: CounterpartyInfoV3Schema.openapi({
      description:
        'The other party involved in the funds transfer. A bank account, a balance account, a card, or a transfer instrument is required.',
      'x-addedInVersion': '3',
    }),
    description: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
        'x-addedInVersion': '1',
      }),
    executionDate: ExecutionDateSchema.exactOptional().openapi({
      description:
        'The date when the transfer will be processed. This date must be within 30 days of the current date.\n\nUntil the `executionDate`:\n- The `status` of the transfer remains as **received**.\n- The `reason` of the transfer remains as **pending**.\n\n',
      'x-addedInVersion': '3',
    }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).\n\nIf you want to make a transfer using a **virtual** **bankAccount**, you must specify the payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.',
      }),
    priorities: z
      .array(z.enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire']))
      .exactOptional()
      .openapi({
        description:
          " The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority you list first. If that's not possible, it moves on to the next option in the order of your provided priorities. \n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).\n\nRequired for transfers with `category` **bank**. For more details, see [fallback priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities).",
        'x-addedInVersion': '4',
      }),
    priority: z
      .enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire'])
      .exactOptional()
      .openapi({
        description:
          'The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).',
        'x-addedInVersion': '3',
      }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
        'x-addedInVersion': '2',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.\n\n Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.\n\n- **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.',
        'x-addedInVersion': '2',
      }),
    review: TransferRequestReviewSchema.exactOptional().openapi({
      description: 'Contains information required for triggering transfer reviews. ',
      'x-addedInVersion': '3',
    }),
    type: z
      .enum(['bankTransfer', 'internalTransfer', 'internalDirectDebit'])
      .exactOptional()
      .openapi({
        description:
          'The type of transfer.\n\nPossible values:\n\n - **bankTransfer**: for push transfers to a transfer instrument or a bank account. The `category` must be **bank**.\n- **internalTransfer**: for push transfers between balance accounts. The `category` must be **internal**.\n- **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The `category` must be **internal**. \n\n',
        'x-addedInVersion': '3',
      }),
    ultimateParty: UltimatePartyIdentificationSchema.exactOptional().openapi({
      description: 'The ultimate sender of the funds of the transfer (ultimate debtor).',
      'x-addedInVersion': '3',
    }),
  })
  .openapi({ required: ['amount', 'category', 'counterparty'] })
  .openapi('TransferInfo')

const TransferServiceRestServiceErrorSchema = z
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
    routingDetails: z
      .array(RoutingDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'Detailed explanation of each attempt to route the transfer with the priorities from the request.',
      }),
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
  .openapi('TransferServiceRestServiceError')

const CashOutInfoCounterpartySchema = z
  .object({
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty transfer instrument.\n\nIf you do not provide this field, the cashout funds remain in the instructing balance account after the cashout transfer is settled.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CashOutInfoCounterparty')

const CashOutTransferSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'The amount of the cashout instruction transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    id: z.string().openapi({ description: 'The reference of the cashout transfer.' }),
    type: z
      .enum(['cashoutRepayment', 'cashoutFee'])
      .openapi({
        description:
          "The type of the cashout transfer.\n\nPossible values: \n- **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after settlement.\n- **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's balance account.",
      }),
  })
  .openapi({ required: ['amount', 'id', 'type'] })
  .openapi('CashOutTransfer')

const CashOutSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'Contains the amount of the cashout, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    counterparty: CashOutInfoCounterpartySchema.exactOptional().openapi({
      description: 'Contains information about the counterparty of the cashout transfer.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.\n\nYour description of the cashout transfer. This description is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nIf you do not provide a description, Adyen generates a description automatically. This generated description is not returned in the response.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**.",
      }),
    fee: FeeSchema.exactOptional().openapi({
      description:
        'Contains the currency and value of the cashout fee, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    id: z.string().openapi({ description: 'The unique identifier of the cashout reference.' }),
    instructingBalanceAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the balance account that initiates the cashout request.',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.\n\nThe reference that is sent to the recipient of a cashout transfer. This reference is also sent in all webhooks related to the cashout transfer, so you can use it to track the status of the transfer.\n\nIf you do not provide a reference for the beneficiary, Adyen generates one automatically. This generated reference for the beneficiary is not returned in the response.\n\nSupported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Use `counterparty.transferInstrumentId` instead.**\n\nThe unique identifier of the counterparty transfer instrument.',
      }),
    transfers: z
      .array(CashOutTransferSchema)
      .openapi({ description: 'The list of transfers related to cashout.' }),
  })
  .openapi({ required: ['amount', 'id', 'instructingBalanceAccountId', 'transfers'] })
  .openapi('CashOut')

const CashOutInfoSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'Contains the amount of the cashout, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    counterparty: CashOutInfoCounterpartySchema.exactOptional().openapi({
      description: 'Contains information about the counterparty of the cashout transfer.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.\n\nYour description of the cashout transfer. This description is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nIf you do not provide a description, Adyen generates a description automatically. This generated description is not returned in the response.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**.",
      }),
    fee: FeeSchema.exactOptional().openapi({
      description:
        'Contains the currency and value of the cashout fee, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
    instructingBalanceAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the balance account that initiates the cashout request.',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.\n\nThe reference that is sent to the recipient of a cashout transfer. This reference is also sent in all webhooks related to the cashout transfer, so you can use it to track the status of the transfer.\n\nIf you do not provide a reference for the beneficiary, Adyen generates one automatically. This generated reference for the beneficiary is not returned in the response.\n\nSupported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Use `counterparty.transferInstrumentId` instead.**\n\nThe unique identifier of the counterparty transfer instrument.',
      }),
  })
  .openapi({ required: ['amount', 'instructingBalanceAccountId'] })
  .openapi('CashOutInfo')

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

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'Idempotency-Key',
      in: 'header',
      description:
        'A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).',
      required: false,
      style: 'simple',
      explode: false,
      schema: { type: 'string' },
      example: '37ca9c97-d1d1-4c62-89e8-706891a563ed',
    },
  })

const GetTransactionsIdSuccess_200Example = {
  summary: 'Response code - 200 OK',
  description: 'Example response for a transaction',
  value: {
    id: 'EVJN4227C224222B5JBDHPTD672M52EUR',
    amount: { value: -10000, currency: 'EUR' },
    status: 'booked',
    transfer: { id: '48TYZO5ZVURJ2FCW', reference: 'Your internal reference for the transfer' },
    valueDate: '2023-08-11T16:19:35+02:00',
    bookingDate: '2023-08-11T16:19:39+02:00',
    creationDate: '2023-08-11T16:19:35+02:00',
    accountHolder: {
      id: 'AH00000000000000000000001',
      description: 'Your description of the account holder',
    },
    balanceAccount: {
      id: 'BA00000000000000000000001',
      description: 'Your description of the balance account',
    },
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
  },
}

const GetTransactionsSuccess_200Example = {
  summary: 'Response code - 200 OK',
  description: 'Example response for a list of transactions',
  value: {
    data: [
      {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2023-08-10T14:51:20+02:00',
        id: 'EVJN42272224222B5JB8BRC84N686ZEUR',
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
        },
        amount: { currency: 'USD', value: -1000 },
        balanceAccount: {
          description: 'Your description for the account holder',
          id: 'BA00000000000000000000001',
        },
        bookingDate: '2023-08-10T14:51:33+02:00',
        status: 'booked',
        transfer: { id: '3JNC3O5ZVFLLGV4B', reference: 'Your internal reference for the transfer' },
        valueDate: '2023-08-10T14:51:20+02:00',
      },
      {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2023-08-10T15:34:31+02:00',
        id: 'EVJN4227C224222B5JB8G3Q89N2NB6EUR',
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
        },
        amount: { currency: 'USD', value: 123 },
        balanceAccount: {
          description: 'Your description for the account holder',
          id: 'BA00000000000000000000001',
        },
        bookingDate: '2023-08-10T15:34:40+02:00',
        status: 'booked',
        transfer: { id: '48POO45ZVG11166J', reference: 'Your internal reference for the transfer' },
        valueDate: '2023-08-10T15:34:31+02:00',
      },
      {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2023-08-11T13:45:46+02:00',
        id: 'EVJN4227C224222B5JBD3XHF8P3L8GUSD',
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
        },
        amount: { currency: 'USD', value: -10000 },
        balanceAccount: {
          description: 'Your description for the account holder',
          id: 'BA00000000000000000000001',
        },
        bookingDate: '2023-08-11T13:45:57+02:00',
        status: 'booked',
        transfer: { id: '48RTTW5ZVT8KU9DV', reference: 'my-reference' },
        valueDate: '2023-08-11T13:45:46+02:00',
      },
      {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2023-08-11T13:45:51+02:00',
        id: 'EVJN42272224222B5JBD3XJGHF4J26USD',
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
        },
        amount: { currency: 'USD', value: 1000 },
        balanceAccount: {
          description: 'Your description for the account holder',
          id: 'BA00000000000000000000001',
        },
        bookingDate: '2023-08-11T13:45:58+02:00',
        status: 'booked',
        transfer: { id: '48TYZO5ZVT8M1K47', reference: 'my-reference' },
        valueDate: '2023-08-11T13:45:51+02:00',
      },
    ],
    _links: {
      next: {
        href: 'https://balanceplatform-api-test.adyen.com/btl/v4/transactions?balancePlatform=TestBalancePlatform&createdUntil=2023-08-20T13%3A07%3A40Z&createdSince=2023-08-10T10%3A50%3A40Z&cursor=S2B-c0p1N0tdN0l6RGhYK1YpM0lgOTUyMDlLXElyKE9LMCtyaFEuMj1NMHgidCsrJi1ZNnhqXCtqVi5JPGpRK1F2fCFqWzU33JTojSVNJc1J1VXhncS10QDd6JX9FQFl5Zn0uNyUvSXJNQTo',
      },
    },
  },
}

const GetTransfersIdSuccess_200Example = {
  summary: 'Response code - 200 OK',
  description: 'Example response for a transfer',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    creationDate: '2021-05-03T15:20:06+02:00',
    id: '1W1UG35QQEBJLHZ8',
    accountHolder: { description: 'S. Eller - Staff 123', id: 'AH32272223222B5CZW6QZ2V34' },
    amount: { currency: 'EUR', value: 5400 },
    balanceAccount: { description: 'My Balance Account', id: 'BA3227C223222B5B9SCR82TMV' },
    category: 'internal',
    categoryData: { type: 'internal' },
    counterparty: { balanceAccountId: 'BA00000000000000000000001' },
    description: 'Your description',
    direction: 'outgoing',
    reason: 'approved',
    reference: '312M2060T6S4UOIF',
    status: 'booked',
    balances: [{ balance: -5400, currency: 'EUR', received: 0, reserved: 0 }],
    events: [
      {
        bookingDate: '2021-05-03T14:53:39+01:00',
        id: 'EVJN4233Q22322375JQ72V55G92ZXF',
        mutations: [{ currency: 'EUR', received: -5400 }],
        status: 'received',
        type: 'accounting',
        valueDate: '2021-05-03T14:53:39+01:00',
      },
      {
        bookingDate: '2021-05-03T14:53:39+01:00',
        id: 'EVJN4233Q22322375JQ72V55GB4TPV',
        mutations: [{ currency: 'EUR', received: 5400, reserved: -5400 }],
        status: 'authorised',
        type: 'accounting',
        valueDate: '2021-05-03T14:53:39+01:00',
      },
      {
        bookingDate: '2021-05-03T14:53:39+01:00',
        id: 'EVJN4233Q22322375JQ72V55GD53HZ',
        mutations: [{ balance: -5400, currency: 'EUR', received: 0, reserved: 5400 }],
        status: 'booked',
        transactionId: 'EVJN4233Q22322375JQ72V55GD53HZEUR',
        type: 'accounting',
        valueDate: '2021-05-03T14:53:39+01:00',
      },
    ],
    sequenceNumber: 3,
    type: 'internalTransfer',
  },
}

const GetTransfersSuccess_200Example = {
  summary: 'Response code - 200 OK',
  description: 'Example response for a list of transfers',
  value: {
    data: [
      {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2021-05-03T15:20:06+02:00',
        id: '1W1UG35QQEBJLHZ8',
        accountHolder: { description: 'S. Eller - Staff 123', id: 'AH32272223222B5CZW6QZ2V34' },
        amount: { currency: 'EUR', value: 5400 },
        balanceAccount: { description: 'My Balance Account', id: 'BA3227C223222B5B9SCR82TMV' },
        category: 'internal',
        categoryData: { type: 'internal' },
        counterparty: { balanceAccountId: 'BA00000000000000000000001' },
        description: 'Your description',
        direction: 'outgoing',
        reason: 'approved',
        reference: '312M2060T6S4UOIF',
        status: 'booked',
        balances: [{ balance: -5400, currency: 'EUR', received: 0, reserved: 0 }],
        events: [
          {
            bookingDate: '2021-05-03T14:53:39+01:00',
            id: 'EVJN4233Q22322375JQ72V55G92ZXF',
            mutations: [{ currency: 'EUR', received: -5400 }],
            status: 'received',
            type: 'accounting',
            valueDate: '2021-05-03T14:53:39+01:00',
          },
          {
            bookingDate: '2021-05-03T14:53:39+01:00',
            id: 'EVJN4233Q22322375JQ72V55GB4TPV',
            mutations: [{ currency: 'EUR', received: 5400, reserved: -5400 }],
            status: 'authorised',
            type: 'accounting',
            valueDate: '2021-05-03T14:53:39+01:00',
          },
          {
            bookingDate: '2021-05-03T14:53:39+01:00',
            id: 'EVJN4233Q22322375JQ72V55GD53HZ',
            mutations: [{ balance: -5400, currency: 'EUR', received: 0, reserved: 5400 }],
            status: 'booked',
            transactionId: 'EVJN4233Q22322375JQ72V55GD53HZEUR',
            type: 'accounting',
            valueDate: '2021-05-03T14:53:39+01:00',
          },
        ],
        sequenceNumber: 3,
        type: 'internalTransfer',
      },
      {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2021-08-02T15:20:06+02:00',
        id: '312M2060T5Z3YWYQ',
        accountHolder: { description: 'S. Doe - Staff 124', id: 'AH443397232222B5CZW6QZ2V34' },
        amount: { currency: 'EUR', value: 15000 },
        balanceAccount: { description: 'My Balance Account', id: 'BA3227C2582222B5B9SCR82VHM' },
        category: 'internal',
        categoryData: { type: 'internal' },
        counterparty: { balanceAccountId: 'BA00000000000000000000001' },
        description: 'Your description',
        direction: 'outgoing',
        reason: 'approved',
        reference: '312M2060T6S4UOIF',
        status: 'booked',
        balances: [{ balance: -15000, currency: 'EUR', received: 0, reserved: 0 }],
        events: [
          {
            bookingDate: '2021-08-02T14:53:39+01:00',
            id: 'EVJN4233Q22322375JQ72V55G92ZXF',
            mutations: [{ currency: 'EUR', received: -15000 }],
            status: 'received',
            type: 'accounting',
            valueDate: '2021-08-02T14:53:39+01:00',
          },
          {
            bookingDate: '2021-08-02T14:53:39+01:00',
            id: 'EVJN4233Q22322375JQ72V55GB4TPV',
            mutations: [{ currency: 'EUR', received: 15000, reserved: -15000 }],
            status: 'authorised',
            type: 'accounting',
            valueDate: '2021-08-02T14:53:39+01:00',
          },
          {
            bookingDate: '2021-08-02T14:53:39+01:00',
            id: 'EVASDFOUPASFDHSADFA6SN65FG6TD53HZ',
            mutations: [{ balance: -15000, currency: 'EUR', received: 0, reserved: 15000 }],
            status: 'booked',
            transactionId: 'EVJN4233Q22322375JQ6SN65FG6TFTEUR',
            type: 'accounting',
            valueDate: '2021-08-02T14:53:39+01:00',
          },
        ],
        sequenceNumber: 3,
        type: 'internalTransfer',
      },
    ],
    _links: {
      next: {
        href: 'https://balanceplatform-api-test.adyen.com/btl/v4/transfers?balancePlatform=YOUR_BALANCE_PLATFORM&createdUntil=2021-12-21T00%3A00%3A00Z&createdSince=2021-03-21T00%3A00%3A00Z&limit=2&cursor=S2B-TSAjOkIrYlIlbjdqe0RreHRyM32lKRSxubXBHRkhHL2E32XitQQz5SfzpucD5HbHwpM1p6NDR1eXVQLFF6MmY33J32sobDxQYT90MHIud1hwLnd6JitcX32xJ',
      },
    },
  },
}

const PostGrantsRequestGrantExample = {
  summary: 'Request grant payout to a balance account',
  description: 'Example request for grant payout',
  value: {
    grantAccountId: 'CG00000000000000000000001',
    grantOfferId: '0000000000000001',
    counterparty: { balanceAccountId: 'BA00000000000000000000001' },
  },
}

const PostGrantsRequestGrant_200Example = {
  summary: 'Grant payout requested',
  description: 'Example response for requesting grant payout',
  value: {
    id: 'GR00000000000000000000001',
    grantAccountId: 'CG00000000000000000000001',
    grantOfferId: '0000000000000001',
    counterparty: {
      accountHolderId: 'AH00000000000000000000001',
      balanceAccountId: 'BA00000000000000000000001',
    },
    amount: { currency: 'EUR', value: 1000000 },
    fee: { amount: { value: 120000, currency: 'EUR' } },
    balances: { currency: 'EUR', fee: 120000, principal: 1000000, total: 1120000 },
    repayment: { basisPoints: 1400 },
    status: 'Pending',
  },
}

const PostTransfersApproveTransfersApproveExample = {
  summary: 'Approve transfers',
  description: 'Example request for approving transfers',
  value: { transferIds: ['APUFHASUDF4AS', '407ASFPUAHSFA'] },
}

const PostTransfersApproveTransfersApprove_200Example = {
  summary: 'Successfully approved transfers (No content)',
  description: 'Example response for approving transfers (No content)',
  value: {},
}

const PostTransfersCancelTransfersCancelExample = {
  summary: 'Cancel transfers',
  description: 'Example request for canceling transfers',
  value: { transferIds: ['APUFHASUDF4AS', '407ASFPUAHSFA'] },
}

const PostTransfersCancelTransfersCancel_200Example = {
  summary: 'Successfully canceled transfers (No content)',
  description: 'Example response for cancelling transfers (No content)',
  value: {},
}

const PostTransfersPayoutCrossBorderExample = {
  summary: 'Make a third-party cross-border transfer',
  description: 'Example request to make a third-party cross-border transfer',
  value: {
    amount: { value: 110000, currency: 'EUR' },
    balanceAccountId: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
    category: 'bank',
    counterparty: {
      bankAccount: {
        accountHolder: {
          fullName: 'A. Klaassen',
          address: {
            city: 'San Francisco',
            country: 'US',
            postalCode: '94678',
            stateOrProvince: 'CA',
            line1: '274',
            line2: 'Brannan Street',
          },
        },
        accountIdentification: {
          type: 'numberAndBic',
          accountNumber: '123456789',
          bic: 'BOFAUS3NXXX',
        },
      },
    },
    priority: 'crossBorder',
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
  },
}

const PostTransfersPayoutCrossBorder_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a transfers request',
  value: {
    id: '1W1UG35U8A9J5ZLG',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH3227C223222C5GXQXF658WB',
      reference: 'Your account holder reference',
    },
    amount: { value: 110000, currency: 'EUR' },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
      reference: 'Your balance account reference',
    },
    category: 'bank',
    categoryData: { priority: 'crossBorder', type: 'bank' },
    counterparty: {
      bankAccount: {
        accountHolder: {
          fullName: 'A. Klaassen',
          address: {
            city: 'San Francisco',
            country: 'US',
            postalCode: '94678',
            stateOrProvince: 'CA',
            line1: '274',
            line2: 'Brannan Street',
          },
        },
        accountIdentification: {
          type: 'numberAndBic',
          accountNumber: '123456789',
          bic: 'BOFAUS3NXXX',
        },
      },
    },
    paymentInstrument: {
      description: 'Your payment instrument description',
      id: 'PI3222G223222G59347DAA265',
      reference: 'Your payment instrument reference',
    },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'pending',
    status: 'received',
  },
}

const PostTransfersPayoutCrossBorderPlatformsExample = {
  summary: 'Make a cross-border transfer',
  description: 'Example request to make a cross-border transfer',
  value: {
    amount: { value: 110000, currency: 'EUR' },
    balanceAccountId: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
    category: 'bank',
    counterparty: { transferInstrumentId: 'SE1234567890ABC1234567890' },
    priority: 'crossBorder',
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
  },
}

const PostTransfersPayoutCrossBorderPlatforms_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a transfers request',
  value: {
    id: '1W1UG35U8A9J5ZLG',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH3227C223222C5GXQXF658WB',
      reference: 'Your account holder reference',
    },
    amount: { value: 110000, currency: 'EUR' },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
      reference: 'Your balance account reference',
    },
    category: 'bank',
    counterparty: { transferInstrumentId: 'SE1234567890ABC1234567890' },
    paymentInstrument: {
      description: 'Your payment instrument description',
      id: 'PI3222G223222G59347DAA265',
      reference: 'Your payment instrument reference',
    },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'pending',
    status: 'received',
  },
}

const PostTransfersPayoutCrossBorderRefused_202Example = {
  summary: 'Refused transfer due to insufficient balance',
  description:
    'Example response for a transfer refused because the balance account does not have enough funds',
  value: {
    creationDate: '2024-01-01T00:00:00Z',
    id: '4VXO00000000000001',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH00000000000000000000001',
      reference: 'Your account holder reference',
    },
    amount: { currency: 'EUR', value: 10000 },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BA00000000000000000000001',
    },
    category: 'bank',
    categoryData: { priority: 'crossBorder', type: 'bank' },
    counterparty: {
      bankAccount: {
        accountHolder: {
          address: {
            city: 'Paris',
            country: 'FR',
            line1: '6-8 Boulevard Haussmann',
            postalCode: '75009',
          },
          fullName: 'Jean Dupont',
          type: 'unknown',
        },
        accountIdentification: { type: 'iban', iban: 'FR0000000000000000000000117' },
      },
    },
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'notEnoughBalance',
    reference: 'Your internal reference for the transfer',
    referenceForBeneficiary: 'Your reference for the beneficiary',
    status: 'refused',
    type: 'bankTransfer',
  },
}

const PostTransfersPayoutLocalTransferSepaExample = {
  summary: 'Make a SEPA funds transfer',
  description: 'Example request to make a SEPA funds transfer',
  value: {
    amount: { value: 110000, currency: 'EUR' },
    balanceAccountId: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
    category: 'bank',
    counterparty: {
      bankAccount: {
        accountHolder: { fullName: 'A. Klaassen' },
        accountIdentification: { type: 'iban', iban: 'NL91ABNA0417164300' },
      },
    },
    priority: 'regular',
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
  },
}

const PostTransfersPayoutLocalTransferSepa_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a transfers request',
  value: {
    id: '1W1UG35U8A9J5ZLG',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH3227C223222C5GXQXF658WB',
      reference: 'Your account holder reference',
    },
    amount: { value: 110000, currency: 'EUR' },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
      reference: 'Your balance account reference',
    },
    category: 'bank',
    categoryData: { priority: 'regular', type: 'bank' },
    counterparty: {
      bankAccount: {
        accountHolder: { fullName: 'A. Klaassen' },
        accountIdentification: { type: 'iban', iban: 'NL91ABNA0417164300' },
      },
    },
    paymentInstrument: {
      description: 'Your payment instrument description',
      id: 'PI3222G223222G59347DAA265',
      reference: 'Your payment instrument reference',
    },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'pending',
    status: 'received',
  },
}

const PostTransfersPayoutLocalTransferUsExample = {
  summary: 'Make a US local funds transfer',
  description: 'Example request to make a US local funds transfer',
  value: {
    amount: { value: 110000, currency: 'USD' },
    balanceAccountId: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
    category: 'bank',
    counterparty: {
      bankAccount: {
        accountHolder: { fullName: 'A. Klaassen' },
        accountIdentification: {
          type: 'usLocal',
          accountNumber: '123456789',
          routingNumber: '011000138',
        },
      },
    },
    priority: 'regular',
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
  },
}

const PostTransfersPayoutLocalTransferUs_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a transfers request',
  value: {
    id: '1W1UG35U8A9J5ZLG',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH3227C223222C5GXQXF658WB',
      reference: 'Your account holder reference',
    },
    amount: { value: 110000, currency: 'USD' },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
      reference: 'Your balance account reference',
    },
    category: 'bank',
    categoryData: { priority: 'regular', type: 'bank' },
    counterparty: {
      bankAccount: {
        accountHolder: { fullName: 'A. Klaassen' },
        accountIdentification: {
          type: 'usLocal',
          accountNumber: '123456789',
          routingNumber: '011000138',
        },
      },
    },
    paymentInstrument: {
      description: 'Your payment instrument description',
      id: 'PI3222G223222G59347DAA265',
      reference: 'Your payment instrument reference',
    },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'pending',
    status: 'received',
  },
}

const PostTransfersPayoutToBalanceAccountExample = {
  summary: 'Transfer funds to another balance account',
  description: 'Example request to transfer funds to another balance account',
  value: {
    amount: { value: 10000, currency: 'EUR' },
    balanceAccountId: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
    category: 'internal',
    counterparty: { balanceAccountId: 'BA32272223222B5LPRFDW7J9G' },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
  },
}

const PostTransfersPayoutToBalanceAccount_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a transfers request',
  value: {
    id: '1W1UG35U8A9J5ZLG',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH3227C223222C5GXQXF658WB',
      reference: 'Your account holder reference',
    },
    amount: { currency: 'EUR', value: 10000 },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
      reference: 'Your balance account reference',
    },
    category: 'internal',
    counterparty: { balanceAccountId: 'BA32272223222B5LPRFDW7J9G' },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'pending',
    status: 'received',
  },
}

const PostTransfersPayoutToCardRawExample = {
  summary: 'Pay out to a third-party card (raw card details)',
  description: 'Example request to pay out to a third-party card using raw card details',
  value: {
    amount: { value: 10000, currency: 'USD' },
    balanceAccountId: 'BA00000000000000000000001',
    category: 'card',
    counterparty: {
      card: {
        cardHolder: {
          type: 'individual',
          firstName: 'Albert',
          lastName: 'Klaassen',
          address: {
            city: 'San Francisco',
            country: 'US',
            line1: '274',
            line2: 'Brannan St',
            postalCode: '94107',
            stateOrProvince: 'CA',
          },
        },
        cardIdentification: { number: '4321123456788765', expiryMonth: '03', expiryYear: '2030' },
      },
    },
    reference: 'Your internal reference for the transfer',
    description: 'Your internal description for the transfer',
  },
}

const PostTransfersPayoutToCardRaw_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a request for a card payout (raw details)',
  value: {
    creationDate: '2023-12-28T15:26:06+01:00',
    id: '48POP561F0ZWWLNW',
    accountHolder: {
      description: 'Your description for the account holder',
      id: 'AH00000000000000000000001',
    },
    amount: { currency: 'USD', value: 10000 },
    balanceAccount: {
      description: 'Your description for the balance account',
      id: 'BA00000000000000000000001',
    },
    category: 'card',
    counterparty: {
      card: {
        cardHolder: {
          address: {
            city: 'San Francisco',
            country: 'US',
            postalCode: '94107',
            stateOrProvince: 'CA',
            line1: '274',
            line2: 'Brannan St',
          },
          firstName: 'Albert',
          lastName: 'Klaassen',
          type: 'individual',
        },
        cardIdentification: { expiryMonth: '03', expiryYear: '2030', number: '432112******8765' },
      },
    },
    description: 'Your internal description of the transfer',
    direction: 'outgoing',
    reason: 'pending',
    reference: 'Your internal reference for the transfer',
    status: 'received',
    type: 'cardTransfer',
  },
}

const PostTransfersPayoutToCardTokenizedExample = {
  summary: 'Pay out to a third-party card (tokenized card details)',
  description: 'Example request to pay out to a third-party card using tokenized card details',
  value: {
    amount: { value: 10000, currency: 'USD' },
    balanceAccountId: 'BA00000000000000000000001',
    category: 'card',
    counterparty: {
      card: {
        cardHolder: {
          firstName: 'Albert',
          lastName: 'Klaassen',
          reference: 'Your reference for the cardholder',
          type: 'individual',
          address: {
            city: 'San Francisco',
            country: 'US',
            line1: '274',
            line2: 'Brannan St',
            postalCode: '94107',
            stateOrProvince: 'CA',
          },
        },
        cardIdentification: { storedPaymentMethodId: 'ZMV627QSCQVDKG66' },
      },
    },
    reference: 'Your internal reference for the transfer',
    description: 'Your internal description for the transfer',
  },
}

const PostTransfersPayoutToCardTokenized_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a request for a card payout (tokenized details)',
  value: {
    creationDate: '2024-06-11T16:12:32+02:00',
    id: '4VXLNQ638WU0IAN3',
    accountHolder: {
      description: 'Your description for the account holder',
      id: 'AH00000000000000000000001',
    },
    amount: { currency: 'USD', value: 10000 },
    balanceAccount: {
      description: 'Your description for the balance account',
      id: 'BA00000000000000000000001',
    },
    category: 'card',
    counterparty: {
      card: {
        cardHolder: {
          firstName: 'Albert',
          lastName: 'Klaassen',
          reference: 'Your reference for the cardholder',
          type: 'individual',
          address: {
            city: 'San Francisco',
            country: 'US',
            line1: '274',
            line2: 'Brannan St',
            postalCode: '94107',
            stateOrProvince: 'CA',
          },
        },
        cardIdentification: { storedPaymentMethodId: 'ZMV627QSCQVDKG66' },
      },
    },
    description: 'Your internal description of the transfer',
    direction: 'outgoing',
    reason: 'pending',
    reference: 'Your internal reference for the transfer',
    status: 'received',
    type: 'cardTransfer',
  },
}

const PostTransfersPayoutToTransferInstrumentExample = {
  summary: 'Pay out to a transfer instrument',
  description: 'Example request to pay out to a transfer instrument',
  value: {
    amount: { value: 80000, currency: 'EUR' },
    balanceAccountId: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
    category: 'bank',
    counterparty: { transferInstrumentId: 'SE1234567890ABC1234567890' },
    priority: 'regular',
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
  },
}

const PostTransfersPayoutToTransferInstrument_202Example = {
  summary: 'Response code - 202 Accepted',
  description: 'Example response for a transfers request',
  value: {
    id: '1W1UG35U8A9J5ZLG',
    accountHolder: {
      description: 'Your account holder description',
      id: 'AH3227C223222C5GXQXF658WB',
      reference: 'Your account holder reference',
    },
    amount: { value: 80000, currency: 'EUR' },
    balanceAccount: {
      description: 'Your balance account description',
      id: 'BAB8B2C3D4E5F6G7H8D9J6GD4',
      reference: 'Your balance account reference',
    },
    category: 'bank',
    categoryData: { priority: 'regular', type: 'bank' },
    counterparty: { transferInstrumentId: 'SE1234567890ABC1234567890' },
    paymentInstrument: {
      description: 'Your payment instrument description',
      id: 'PI3222G223222G59347DAA265',
      reference: 'Your payment instrument reference',
    },
    referenceForBeneficiary: 'Your-reference-sent-to-the-beneficiary',
    reference: 'Your internal reference for the transfer',
    description: 'Your description for the transfer',
    direction: 'outgoing',
    reason: 'pending',
    status: 'received',
  },
}

const PostTransfersTransferIdReturnsTransfersReturnExample = {
  summary: 'Return an incoming internal transfer',
  description: 'Example request to return an incoming internal transfer',
  value: {
    amount: { value: 189, currency: 'EUR' },
    reference: 'Your internal reference for the return',
  },
}

const PostTransfersTransferIdReturnsTransfersReturn_200Example = {
  summary: 'Successful return of an incoming internal transfer',
  description: 'Example response for the return of an incoming internal transfer',
  value: {
    id: '1W1UG35QQEBJLHZ8',
    reference: 'Your internal reference for the return',
    status: 'Authorised',
    transferId: '1W1UG35U8A9J5ZLG',
  },
}

const IdempotencyKeyHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The idempotency key used for processing the request. Present if the key was provided in the request.',
    param: { required: false },
  })

const AuthParam1HeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'Base64-encoded blob of data. You will need auth-param1 when authenticating your user using the SDK.',
    param: { required: false },
  })

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const ClientKeySecurityScheme = { type: 'apiKey', name: 'clientKey', in: 'query' }

export const getGrantsRoute = createRoute({
  method: 'get',
  path: '/grants',
  tags: ['Capital'],
  summary: 'Get a capital account',
  description: 'Returns a list of grants with status and outstanding balances.',
  operationId: 'get-grants',
  request: {
    query: z.object({
      counterpartyAccountHolderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'counterpartyAccountHolderId',
            in: 'query',
            description: 'The counterparty account holder id.',
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
      content: { 'application/json': { schema: CapitalGrantsSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    404: {
      description: 'Not Found - the payment was not found',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGrantsRoute = createRoute({
  method: 'post',
  path: '/grants',
  tags: ['Capital'],
  summary: 'Request a grant payout',
  description: 'Requests the payout of the selected grant offer.',
  operationId: 'post-grants',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CapitalGrantInfoSchema,
          examples: { requestGrant: PostGrantsRequestGrantExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: CapitalGrantSchema,
          examples: { requestGrant: PostGrantsRequestGrant_200Example },
        },
      },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    404: {
      description: 'Not Found - the payment was not found',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getGrantsIdRoute = createRoute({
  method: 'get',
  path: '/grants/{id}',
  tags: ['Capital'],
  summary: 'Get grant reference details',
  description: 'Returns the details of a capital account specified in the path.',
  operationId: 'get-grants-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the grant.',
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
      content: { 'application/json': { schema: CapitalGrantSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    404: {
      description: 'Not Found - the payment was not found',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Get all transactions',
  description:
    '>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.\n\nReturns all the transactions related to a balance account, account holder, or balance platform.\n\nWhen making this request, you must include at least one of the following:\n- `balanceAccountId`\n- `accountHolderId`\n- `balancePlatform`.\n\nThis endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.\n\n',
  operationId: 'get-transactions',
  request: {
    query: z.object({
      balancePlatform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balancePlatform',
            in: 'query',
            description:
              "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).\n\nRequired if you don't provide a `balanceAccountId` or `accountHolderId`.",
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
            description:
              'The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).\n\nTo use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.\n\nThe `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      accountHolderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'accountHolderId',
            in: 'query',
            description:
              "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).\n\nRequired if you don't provide a `balanceAccountId` or `balancePlatform`.\n\nIf you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      balanceAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'query',
            description:
              "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).\n\nRequired if you don't provide an `accountHolderId` or `balancePlatform`.\n\nIf you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`.",
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
      createdSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'createdSince',
            in: 'query',
            description:
              'Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdUntil: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'createdUntil',
            in: 'query',
            description:
              'Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            description:
              'Determines the sort order of the returned transactions. The sort order is based on the creation date of the transaction.\n\nPossible values:\n\n - **asc**: Ascending order, from oldest to most recent.\n\n- **desc**: Descending order, from most recent to oldest.\n\nDefault value: **asc**.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              'x-enum': [{ value: 'asc' }, { value: 'desc' }],
            },
          },
          'x-enum': [{ value: 'asc' }, { value: 'desc' }],
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
              'The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.',
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
          schema: TransactionSearchResponseSchema,
          examples: { success: GetTransactionsSuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getTransactionsIdRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Get a transaction',
  description:
    '>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.\n\nReturns a transaction.',
  operationId: 'get-transactions-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the transaction.',
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
          schema: TransactionSchema,
          examples: { success: GetTransactionsIdSuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: RestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getTransfersRoute = createRoute({
  method: 'get',
  path: '/transfers',
  tags: ['Transfers'],
  summary: 'Get all transfers',
  description:
    'Returns all the transfers related to a balance account, account holder, or balance platform.\n\nWhen making this request, you must include at least one of the following:\n- `balanceAccountId`\n- `accountHolderId`\n- `balancePlatform`.\n\nThis endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.\n\n',
  operationId: 'get-transfers',
  request: {
    query: z.object({
      balancePlatform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balancePlatform',
            in: 'query',
            description:
              "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).\n\nRequired if you don't provide a `balanceAccountId` or `accountHolderId`.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      accountHolderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'accountHolderId',
            in: 'query',
            description:
              "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).\n\nRequired if you don't provide a `balanceAccountId` or `balancePlatform`.\n\nIf you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      balanceAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'query',
            description:
              "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).\n\nRequired if you don't provide an `accountHolderId` or `balancePlatform`.\n\nIf you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`.",
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
            description:
              'The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).\n\nTo use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.\n\nThe `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      reference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reference',
            in: 'query',
            description:
              'The reference you provided in the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) request',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
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
          param: {
            name: 'category',
            in: 'query',
            description:
              'The category of the transfer.\n\nPossible values:\n\n - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.\n\n- **card**: A transfer involving a third-party card.\n\n- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.\n\n- **issuedCard**: A transfer initiated by an Adyen-issued card.\n\n- **platformPayment**: Funds movements related to payments that are acquired for your users.\n\n- **topUp**: An incoming transfer initiated by your user to top up their balance account.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              enum: [
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
              ],
              'x-enum': [
                { value: 'topUp' },
                { value: 'platformPayment' },
                { value: 'internal' },
                { value: 'bank' },
                { value: 'issuedCard' },
                { value: 'grants' },
                { value: 'migration' },
                { value: 'card' },
                { value: 'upgrade' },
                { value: 'interest' },
              ],
            },
          },
          'x-enum': [
            { value: 'topUp' },
            { value: 'platformPayment' },
            { value: 'internal' },
            { value: 'bank' },
            { value: 'issuedCard' },
            { value: 'grants' },
            { value: 'migration' },
            { value: 'card' },
            { value: 'upgrade' },
            { value: 'interest' },
          ],
        }),
      createdSince: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'createdSince',
            in: 'query',
            description:
              'Only include transfers that have been created on or after this point in time. The value must be in ISO 8601 format and not earlier than 6 months before the `createdUntil` date. For example, **2021-05-30T15:07:40Z**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdUntil: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'createdUntil',
            in: 'query',
            description:
              'Only include transfers that have been created on or before this point in time. The value must be in ISO 8601 format and not later than 6 months after the `createdSince` date. For example, **2021-05-30T15:07:40Z**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            description:
              'Determines the sort order of the returned transfers. The sort order is based on the creation date of the transfers.\n\nPossible values:\n\n - **asc**: Ascending order, from oldest to most recent.\n\n- **desc**: Descending order, from most recent to oldest.\n\nDefault value: **asc**.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              'x-enum': [{ value: 'asc' }, { value: 'desc' }],
            },
          },
          'x-enum': [{ value: 'asc' }, { value: 'desc' }],
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
          z.int32(),
        )
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
          schema: FindTransfersResponseSchema,
          examples: { success: GetTransfersSuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransfersRoute = createRoute({
  method: 'post',
  path: '/transfers',
  tags: ['Transfers'],
  summary: 'Transfer funds',
  description:
    '>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.\n\nStarts a request to transfer funds to:\n- [Balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts)\n- [Transfer instruments](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments)\n- [Third-party bank accounts](https://docs.adyen.com/payouts/payout-service/pay-out-to-bank-accounts)\n- [Third-party cards](https://docs.adyen.com/payouts/payout-service/pay-out-to-cards)\n\nAdyen sends the outcome of the transfer request through webhooks.\n\nTo use this endpoint:\n- Your API credential must have the **TransferService Webservice Initiate** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).\n- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).\n\nReach out to your Adyen contact to set up these permissions.',
  operationId: 'post-transfers',
  request: {
    headers: z.object({
      'Idempotency-Key': IdempotencyKeyParamsSchema,
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
            example: 'SCA realm="Transfer" auth-param1="eyJjaGFsbGVuZ2UiOiJiVlV6ZW5wek0waFNl..."',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TransferInfoSchema,
          examples: {
            'payout-cross-border': PostTransfersPayoutCrossBorderExample,
            'payout-cross-border-platforms': PostTransfersPayoutCrossBorderPlatformsExample,
            'payout-local-transfer-sepa': PostTransfersPayoutLocalTransferSepaExample,
            'payout-local-transfer-us': PostTransfersPayoutLocalTransferUsExample,
            'payout-to-balance-account': PostTransfersPayoutToBalanceAccountExample,
            'payout-to-card-raw': PostTransfersPayoutToCardRawExample,
            'payout-to-card-tokenized': PostTransfersPayoutToCardTokenizedExample,
            'payout-to-transfer-instrument': PostTransfersPayoutToTransferInstrumentExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - The request has been accepted for processing, but has not been completed.',
      content: { 'application/json': { schema: TransferSchema } },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    202: {
      description:
        'Accepted - The request has been accepted for processing, but has not been completed.',
      content: {
        'application/json': {
          schema: TransferSchema,
          examples: {
            'payout-cross-border': PostTransfersPayoutCrossBorder_202Example,
            'payout-cross-border-platforms': PostTransfersPayoutCrossBorderPlatforms_202Example,
            'payout-cross-border-refused': PostTransfersPayoutCrossBorderRefused_202Example,
            'payout-local-transfer-sepa': PostTransfersPayoutLocalTransferSepa_202Example,
            'payout-local-transfer-us': PostTransfersPayoutLocalTransferUs_202Example,
            'payout-to-balance-account': PostTransfersPayoutToBalanceAccount_202Example,
            'payout-to-card-raw': PostTransfersPayoutToCardRaw_202Example,
            'payout-to-card-tokenized': PostTransfersPayoutToCardTokenized_202Example,
            'payout-to-transfer-instrument': PostTransfersPayoutToTransferInstrument_202Example,
          },
        },
      },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
      headers: z.object({ 'auth-param1': AuthParam1HeaderSchema }),
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransfersApproveRoute = createRoute({
  method: 'post',
  path: '/transfers/approve',
  tags: ['Transfers'],
  summary: 'Approve initiated transfers',
  description:
    'Initiates the approval of a list of transfers that triggered an additional [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review). Adyen sends the outcome of the approval request through webhooks.\n\nTo use this endpoint:\n- Your API credential must have the **TransferService Approve** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).\n- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).\n\nReach out to your Adyen contact to set up these permissions.',
  operationId: 'post-transfers-approve',
  request: {
    headers: z.object({
      'Idempotency-Key': IdempotencyKeyParamsSchema,
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
              'SCA realm="ApproveTransfers" auth-param1="eyJjaGFsbGVuZ2UiOiJiVlV6ZW5wek0waFNl..."',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApproveTransfersRequestSchema,
          examples: { 'transfers-approve': PostTransfersApproveTransfersApproveExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - look at the actual response code for the status of the request. ',
      content: {},
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
      headers: z.object({ 'auth-param1': AuthParam1HeaderSchema }),
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransfersCancelRoute = createRoute({
  method: 'post',
  path: '/transfers/cancel',
  tags: ['Transfers'],
  summary: 'Cancel initiated transfers',
  description:
    'Initiates the cancellation of a list of transfers that triggered an additional [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review). Adyen sends the outcome of the cancel request through webhooks.\n\nTo use this endpoint:\n- Your API credential must have the **TransferService Approve** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).\n- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).\n\nReach out to your Adyen contact to set up these permissions.',
  operationId: 'post-transfers-cancel',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CancelTransfersRequestSchema,
          examples: { 'transfers-cancel': PostTransfersCancelTransfersCancelExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - look at the actual response code for the status of the request. ',
      content: {},
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getTransfersIdRoute = createRoute({
  method: 'get',
  path: '/transfers/{id}',
  tags: ['Transfers'],
  summary: 'Get a transfer',
  description: 'Returns the details of a specified transfer.',
  operationId: 'get-transfers-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Unique identifier of the transfer.',
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
          schema: TransferDataSchema,
          examples: { success: GetTransfersIdSuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransfersTransferIdReturnsRoute = createRoute({
  method: 'post',
  path: '/transfers/{transferId}/returns',
  tags: ['Transfers'],
  summary: 'Return a transfer',
  description:
    'Initiates the return of previously transferred funds without creating a new `transferId`.',
  operationId: 'post-transfers-transferId-returns',
  request: {
    params: z.object({
      transferId: z
        .string()
        .openapi({
          param: {
            name: 'transferId',
            in: 'path',
            description: 'The unique identifier of the transfer to be returned.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ReturnTransferRequestSchema,
          examples: { 'transfers-return': PostTransfersTransferIdReturnsTransfersReturnExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: ReturnTransferResponseSchema,
          examples: {
            'transfers-return': PostTransfersTransferIdReturnsTransfersReturn_200Example,
          },
        },
      },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyHeaderSchema }),
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: TransferServiceRestServiceErrorSchema } },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postCashoutsRoute = createRoute({
  method: 'post',
  path: '/cashouts',
  tags: ['CashOut'],
  summary: 'Initiate a cashout',
  description:
    'Initiates a [cashout](https://docs.adyen.com/platforms/cash-out-instantly) request.',
  operationId: 'post-cashouts',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CashOutInfoSchema,
          examples: {
            'initiate-cashout': {
              summary: 'Initiate a cashout request',
              description: 'Initiate a cashout for a balance account.',
              value: {
                instructingBalanceAccountId: 'BA00000000000000000000001',
                amount: { currency: 'EUR', value: 50000 },
                counterparty: { transferInstrumentId: 'SE00000000000000000000001' },
                description: 'Cashout to bank account',
                referenceForBeneficiary: 'CASHOUT-REF-001',
                fee: { amount: { currency: 'EUR', value: 500 } },
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
          schema: CashOutSchema,
          examples: {
            'instruct-cashout': {
              summary: 'Cashout initiated successfully',
              description: 'The response returned when a cashout is successfully instructed.',
              value: {
                id: 'CO00000000000000000000001',
                instructingBalanceAccountId: 'BA00000000000000000000001',
                amount: { currency: 'EUR', value: 50000 },
                counterparty: { transferInstrumentId: 'SE00000000000000000000001' },
                description: 'Cashout to bank account',
                referenceForBeneficiary: 'CASHOUT-REF-001',
                fee: { amount: { currency: 'EUR', value: 500 } },
                transfers: [
                  {
                    id: '400F6060JMB1I0AB',
                    type: 'cashoutRepayment',
                    amount: { currency: 'EUR', value: 50500 },
                  },
                  {
                    id: '400F6060JMB1I0AA',
                    type: 'cashoutFee',
                    amount: { currency: 'EUR', value: 500 },
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - The request is malformed or is not in the expected format.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - The API credential used in the request is invalid.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - The API credential does not have the right permissions.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - The requested resource was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    429: {
      description: 'Too Many Requests - Request rate limit exceeded.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description:
        'Internal Service Error - An unrecoverable error occurred while trying to perform the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})
