import { createRoute, z } from '@hono/zod-openapi'

const RepaymentTermSchema = z
  .object({
    estimatedDays: z
      .int32()
      .openapi({ description: 'The estimated duration of the repayment term, in days.' }),
    maximumDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum duration of the repayment term, in days. Only applies when `contractType` is **loan**.',
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
  .object({
    amount: AmountSchema.openapi({
      description: 'The minimum threshold amount that your user must repay on every 30-day period.',
    }),
  })
  .openapi({ required: ['amount'] })
  .openapi('ThresholdRepayment')

type RepaymentType = {
  basisPoints: number
  term?: z.infer<typeof RepaymentTermSchema>
  threshold?: z.infer<typeof ThresholdRepaymentSchema>
}

const BankAccountIdentificationSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of account, which depends on the country of the account and the currency of the transfer.',
      }),
  })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        auLocal: '#/components/schemas/AULocalAccountIdentification',
        brLocal: '#/components/schemas/BRLocalAccountIdentification',
        caLocal: '#/components/schemas/CALocalAccountIdentification',
        czLocal: '#/components/schemas/CZLocalAccountIdentification',
        dkLocal: '#/components/schemas/DKLocalAccountIdentification',
        hkLocal: '#/components/schemas/HKLocalAccountIdentification',
        huLocal: '#/components/schemas/HULocalAccountIdentification',
        iban: '#/components/schemas/IbanAccountIdentification',
        noLocal: '#/components/schemas/NOLocalAccountIdentification',
        numberAndBic: '#/components/schemas/NumberAndBicAccountIdentification',
        nzLocal: '#/components/schemas/NZLocalAccountIdentification',
        plLocal: '#/components/schemas/PLLocalAccountIdentification',
        seLocal: '#/components/schemas/SELocalAccountIdentification',
        sgLocal: '#/components/schemas/SGLocalAccountIdentification',
        ukLocal: '#/components/schemas/UKLocalAccountIdentification',
        usLocal: '#/components/schemas/USLocalAccountIdentification',
      },
    },
    required: [],
  })
  .openapi('BankAccountIdentification')

const AULocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(5)
        .max(9)
        .exactOptional()
        .openapi({ description: 'The bank account number, without separators or whitespace.' }),
      bsbCode: z
        .string()
        .length(6)
        .exactOptional()
        .openapi({
          description:
            'The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.',
        }),
      type: z.string().default('auLocal').exactOptional().openapi({ description: '**auLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'bsbCode', 'type'] })
  .openapi('AULocalAccountIdentification')

const ActionSchema = z
  .object({
    actionCode: z
      .string()
      .openapi({ description: 'The code identifying the action that needs to be completed.' }),
    resolved: z
      .boolean()
      .openapi({ description: 'Indicates whether this action has been successfully completed.' }),
  })
  .openapi({ required: ['actionCode', 'resolved'] })
  .openapi('Action')

const AdditionalBankIdentificationSchema = z
  .object({
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

const BRLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'The bank account number, without separators or whitespace.' }),
      bankCode: z
        .string()
        .length(3)
        .exactOptional()
        .openapi({ description: 'The 3-digit bank code, with leading zeros.' }),
      branchNumber: z
        .string()
        .min(1)
        .max(4)
        .exactOptional()
        .openapi({
          description: 'The bank account branch number, without separators or whitespace.',
        }),
      ispb: z
        .string()
        .length(8)
        .exactOptional()
        .openapi({ description: 'The 8-digit ISPB, with leading zeros.' }),
      type: z.string().default('brLocal').exactOptional().openapi({ description: '**brLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'bankCode', 'branchNumber', 'type'] })
  .openapi('BRLocalAccountIdentification')

const BalanceSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64', description: 'The amount of the grant fee.' }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The grant amount that is paid out to the user for business financing.',
      }),
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
        description:
          'The total amount of the grant that the user must repay. It is the sum of the fee amount and the principal amount.',
      }),
  })
  .openapi({ required: ['currency', 'fee', 'principal', 'total'] })
  .openapi('Balance')

const CALocalBankAccountTypeSchema = z
  .enum(['checking', 'savings'])
  .openapi('CALocalBankAccountType')

const CALocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(5)
        .max(12)
        .exactOptional()
        .openapi({
          description: 'The 5- to 12-digit bank account number, without separators or whitespace.',
        }),
      accountType: CALocalBankAccountTypeSchema.default('checking')
        .exactOptional()
        .openapi({
          description:
            'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
        }),
      institutionNumber: z
        .string()
        .length(3)
        .exactOptional()
        .openapi({
          description: 'The 3-digit institution number, without separators or whitespace.',
        }),
      transitNumber: z
        .string()
        .length(5)
        .exactOptional()
        .openapi({ description: 'The 5-digit transit number, without separators or whitespace.' }),
      type: z.string().default('caLocal').exactOptional().openapi({ description: '**caLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'institutionNumber', 'transitNumber', 'type'] })
  .openapi('CALocalAccountIdentification')

const CZLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(2)
        .max(17)
        .exactOptional()
        .openapi({
          description:
            'The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)',
        }),
      bankCode: z
        .string()
        .length(4)
        .exactOptional()
        .openapi({
          description: 'The 4-digit bank code (Kód banky), without separators or whitespace.',
        }),
      type: z.string().default('czLocal').exactOptional().openapi({ description: '**czLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'bankCode', 'type'] })
  .openapi('CZLocalAccountIdentification')

const CalculateGrantOfferRequestSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'The financing amount that the user selected from a dynamic offer. Adyen uses this amount to calculate a preliminary offer.',
    }),
  })
  .openapi({ required: ['amount'] })
  .openapi('CalculateGrantOfferRequest')

const GrantOfferFeeSchema = z
  .object({
    amount: AmountSchema.openapi({ description: 'Contains the amount of the offer fee.' }),
    aprBasisPoints: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).',
      }),
  })
  .openapi({ required: ['amount'] })
  .openapi('GrantOfferFee')

const RepaymentSchema: z.ZodType<RepaymentType> = z
  .lazy(() =>
    z
      .object({
        basisPoints: z
          .int32()
          .openapi({
            description:
              "The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).",
          }),
        term: RepaymentTermSchema.exactOptional().openapi({
          description:
            'Contains information about the time period in which your user must repay the total amount of the grant.',
        }),
        threshold: ThresholdRepaymentSchema.exactOptional().openapi({
          description:
            'Contains the minimum threshold amount that your user must repay every 30-day period.',
        }),
      })
      .openapi({ required: ['basisPoints'] }),
  )
  .openapi('Repayment')

const CalculatedGrantOfferSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder that the dynamic offer is for.',
      }),
    amount: AmountSchema.openapi({
      description: 'The financing amount that would be paid out to your user.',
    }),
    contractType: z
      .enum(['cashAdvance', 'loan'])
      .openapi({
        description:
          'The contract type of the offer.\n\nPossible values:\n* **loan**\n* **cashAdvance**',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The expiration date and time of the offer validity period.' }),
    fee: GrantOfferFeeSchema.openapi({
      description: 'Contains information about the fee that your user would pay for the grant.',
    }),
    repayment: RepaymentSchema.openapi({
      description: 'Contains information about the repayment configuration of the grant.',
    }),
    startsAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The starting date and time of the offer validity period.' }),
  })
  .openapi({
    required: [
      'accountHolderId',
      'amount',
      'contractType',
      'expiresAt',
      'fee',
      'repayment',
      'startsAt',
    ],
  })
  .openapi('CalculatedGrantOffer')

const CreateGrantOfferRequestSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'The financing amount that the user selected from the dynamic offer. Adyen uses this amount to create a static offer.',
    }),
  })
  .openapi({ required: ['amount'] })
  .openapi('CreateGrantOfferRequest')

const DKLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(4)
        .max(10)
        .exactOptional()
        .openapi({
          description:
            'The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).',
        }),
      bankCode: z
        .string()
        .length(4)
        .exactOptional()
        .openapi({
          description:
            'The 4-digit bank code (Registreringsnummer) (without separators or whitespace).',
        }),
      type: z.string().default('dkLocal').exactOptional().openapi({ description: '**dkLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'bankCode', 'type'] })
  .openapi('DKLocalAccountIdentification')

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

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

const FeeSchema = z
  .object({
    amount: AmountSchema.openapi({ description: 'Contains the amount of the grant fee.' }),
  })
  .openapi({ required: ['amount'] })
  .openapi('Fee')

const FundsCollectionTypeSchema = z
  .enum(['UnscheduledRepayment', 'Revocation'])
  .openapi('FundsCollectionType')

const FundsCollectionSchema = z
  .object({
    accountIdentification: BankAccountIdentificationSchema.exactOptional().openapi({
      description:
        'Contains the identification information of the account to which you can transfer funds related to repayments.',
    }),
    fundsCollectionType: FundsCollectionTypeSchema.exactOptional().openapi({
      description:
        'The type of funds collection.\n\nPossible values: **UnscheduledRepayment**, **Revocation**.',
    }),
  })
  .openapi({ required: [] })
  .openapi('FundsCollection')

const DisbursementRepaymentSchema = z
  .object({
    basisPoints: z
      .int32()
      .min(0)
      .max(10000)
      .openapi({
        description:
          "The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).",
      }),
    updateDescription: z.string().min(1).max(240).openapi({ deprecated: true }),
  })
  .openapi({ required: ['basisPoints', 'updateDescription'] })
  .openapi('DisbursementRepayment')

const DisbursementSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder that received the disbursement.',
      }),
    amount: AmountSchema.openapi({
      description: 'Contains information about the amount of the disbursement.',
    }),
    balanceAccountId: z
      .string()
      .openapi({
        description: 'The unique identifier of the balance account that received the disbursement.',
      }),
    balances: BalanceSchema.openapi({
      description: 'Contains information about the balances of the disbursement.',
    }),
    fee: FeeSchema.openapi({
      description:
        'Contains information about the fee that your user must pay for the disbursement.',
    }),
    fundsCollections: z
      .array(FundsCollectionSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains information about the accounts that Adyen uses to collect funds related to repayments.',
      }),
    grantId: z
      .string()
      .openapi({ description: 'The unique identifier of the grant related to the disbursement.' }),
    id: z.string().openapi({ description: 'The unique identifier of the disbursement.' }),
    repayment: DisbursementRepaymentSchema.openapi({
      description:
        'Contains information about the basis points configured for repaying the disbursement.',
    }),
  })
  .openapi({
    required: [
      'accountHolderId',
      'amount',
      'balanceAccountId',
      'balances',
      'fee',
      'grantId',
      'id',
      'repayment',
    ],
  })
  .openapi('Disbursement')

const DisbursementRepaymentInfoUpdateSchema = z
  .object({
    basisPoints: z
      .int32()
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          "The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).",
      }),
    updateDescription: z.string().min(0).max(240).exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('DisbursementRepaymentInfoUpdate')

const DisbursementInfoUpdateSchema = z
  .object({
    repayment: DisbursementRepaymentInfoUpdateSchema.exactOptional().openapi({
      description:
        'Contains information about the basis points configured for repaying the disbursement.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DisbursementInfoUpdate')

const DisbursementsSchema = z
  .object({
    disbursements: z
      .array(DisbursementSchema)
      .openapi({
        description: 'Contains a list of all disbursements related to the specified grant.',
      }),
  })
  .openapi({ required: ['disbursements'] })
  .openapi('Disbursements')

const FinancingTypeSchema = z
  .enum(['hardwareFinancing', 'businessFinancing'])
  .openapi('FinancingType')

const DynamicOfferRepaymentSchema = z
  .object({
    term: RepaymentTermSchema.openapi({
      description:
        'Contains information about the time period in which your user must repay the total amount of the grant.',
    }),
  })
  .openapi({ required: ['term'] })
  .openapi('DynamicOfferRepayment')

const DynamicOfferSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder that the dynamic offer is for.',
      }),
    contractType: z
      .enum(['cashAdvance', 'loan'])
      .openapi({
        description:
          'The contract type of the offer.\n\nPossible values:\n* **loan**\n* **cashAdvance**',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The expiration date and time of the offer validity period.' }),
    financingType: FinancingTypeSchema.openapi({
      description:
        'The type of financing that the offer is for.\n\nPossible values: **businessFinancing**.',
    }),
    id: z.string().openapi({ description: 'The unique identifier of the dynamic offer.' }),
    maximumAmount: AmountSchema.openapi({
      description: 'The maximum financing amount available to the account holder under this offer.',
    }),
    minimumAmount: AmountSchema.openapi({
      description: 'The minimum financing amount available to the account holder under this offer.',
    }),
    repayment: DynamicOfferRepaymentSchema.openapi({
      description: 'Contains information about the repayment configuration of the grant.',
    }),
    startsAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The starting date and time of the offer validity period.' }),
  })
  .openapi({
    required: [
      'accountHolderId',
      'contractType',
      'expiresAt',
      'financingType',
      'id',
      'maximumAmount',
      'minimumAmount',
      'repayment',
      'startsAt',
    ],
  })
  .openapi('DynamicOffer')

const GetDynamicOffersResponseSchema = z
  .object({
    dynamicOffers: z
      .array(DynamicOfferSchema)
      .openapi({
        description:
          'Contains a list of available dynamic offers for the specified account holder.',
      }),
  })
  .openapi({ required: ['dynamicOffers'] })
  .openapi('GetDynamicOffersResponse')

const GrantCounterpartySchema = z
  .object({
    accountHolderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the account holder that receives the grant.',
      }),
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GrantCounterparty')

const StatusSchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({
        description: 'A list of actions that need to be completed to proceed with the grant. ',
      }),
    code: z
      .enum([
        'Pending',
        'Active',
        'Repaid',
        'WrittenOff',
        'Failed',
        'Revoked',
        'Requested',
        'Reviewing',
        'Approved',
        'Rejected',
        'Cancelled',
      ])
      .openapi({
        description:
          'The code for the status of the grant. Possible values:\n- **Pending**\n- **Active**\n- **Repaid**\n- **WrittenOff**\n- **Failed**\n- **Revoked**\n- **Requested**\n- **Reviewing**\n- **Approved**\n- **Rejected**\n- **Cancelled**',
      }),
  })
  .openapi({ required: ['code'] })
  .openapi('Status')

const GrantSchema = z
  .object({
    balances: BalanceSchema.openapi({
      description: 'Contains information about the balances of the grant.',
    }),
    counterparty: GrantCounterpartySchema.exactOptional().openapi({
      description: 'Contains the details of the party that receives the grant.',
    }),
    grantAccountId: z
      .string()
      .openapi({
        description: 'The unique identifier of the grant account that tracks this grant.',
      }),
    grantOfferId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the grant reference.' }),
    status: StatusSchema.openapi({ description: 'Contains the status of the grant.' }),
  })
  .openapi({ required: ['balances', 'grantAccountId', 'grantOfferId', 'id', 'status'] })
  .openapi('Grant')

const GrantLimitSchema = z
  .object({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The limit amount of the grant account.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GrantLimit')

const GrantAccountSchema = z
  .object({
    balances: z
      .array(BalanceSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the sum of the balances of all grants tracked by this grant account. The balances are separated by currency.',
      }),
    fundingBalanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the balance account used to fund the grant.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the grant account.' }),
    limits: z
      .array(GrantLimitSchema)
      .exactOptional()
      .openapi({
        description: 'Contains the maximum amount of funds that you can disburse for grants.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GrantAccount')

const GrantInfoCounterpartySchema = z
  .object({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GrantInfoCounterparty')

const GrantInfoSchema = z
  .object({
    counterparty: GrantInfoCounterpartySchema.exactOptional().openapi({
      description: 'Contains the details of the party that receives the grant.',
    }),
    grantAccountId: z
      .string()
      .openapi({
        description: 'The unique identifier of the grant account that tracks this grant.',
      }),
    grantOfferId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.',
      }),
  })
  .openapi({ required: ['grantAccountId', 'grantOfferId'] })
  .openapi('GrantInfo')

const GrantOfferSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder to which the grant is offered.',
      }),
    amount: AmountSchema.exactOptional().openapi({
      description: 'The amount that would be paid out to the user for business financing.',
    }),
    contractType: z
      .enum(['cashAdvance', 'loan'])
      .exactOptional()
      .openapi({
        description:
          'The contract type of the offer.\n\nPossible values:\n* **loan**\n* **cashAdvance**',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiration date and time of the offer validity period.' }),
    fee: GrantOfferFeeSchema.exactOptional().openapi({
      description: 'Contains information about the fee that your user would pay for the grant.',
    }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the offer.' }),
    repayment: RepaymentSchema.exactOptional().openapi({
      description: 'Contains information about the repayment configuration of the grant.',
    }),
    startsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The starting date and time of the offer validity period.' }),
  })
  .openapi({ required: ['accountHolderId'] })
  .openapi('GrantOffer')

const GrantOffersSchema = z
  .object({
    grantOffers: z
      .array(GrantOfferSchema)
      .openapi({
        description: 'Contains a list of available offers for the specified account holder.',
      }),
  })
  .openapi({ required: ['grantOffers'] })
  .openapi('GrantOffers')

const GrantsSchema = z
  .object({
    grants: z
      .array(GrantSchema)
      .openapi({
        description: 'Contains a list of the grants that the account holder has received.',
      }),
  })
  .openapi({ required: ['grants'] })
  .openapi('Grants')

const HKLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(9)
        .max(17)
        .exactOptional()
        .openapi({
          description:
            'The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.',
        }),
      clearingCode: z
        .string()
        .length(3)
        .exactOptional()
        .openapi({ description: 'The 3-digit clearing code, without separators or whitespace.' }),
      type: z.string().default('hkLocal').exactOptional().openapi({ description: '**hkLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'clearingCode', 'type'] })
  .openapi('HKLocalAccountIdentification')

const HULocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .length(24)
        .exactOptional()
        .openapi({
          description: 'The 24-digit bank account number, without separators or whitespace.',
        }),
      type: z.string().default('huLocal').exactOptional().openapi({ description: '**huLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('HULocalAccountIdentification')

const IbanAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      bic: z
        .string()
        .exactOptional()
        .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
      iban: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.',
        }),
      type: z.string().default('iban').exactOptional().openapi({ description: '**iban**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['iban', 'type'] })
  .openapi('IbanAccountIdentification')

const NOLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .length(11)
        .exactOptional()
        .openapi({
          description: 'The 11-digit bank account number, without separators or whitespace.',
        }),
      type: z.string().default('noLocal').exactOptional().openapi({ description: '**noLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('NOLocalAccountIdentification')

const NZLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(15)
        .max(16)
        .exactOptional()
        .openapi({
          description:
            'The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.',
        }),
      type: z.string().default('nzLocal').exactOptional().openapi({ description: '**nzLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('NZLocalAccountIdentification')

const NumberAndBicAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .max(34)
        .exactOptional()
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
        .exactOptional()
        .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
      type: z
        .string()
        .default('numberAndBic')
        .exactOptional()
        .openapi({ description: '**numberAndBic**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'bic', 'type'] })
  .openapi('NumberAndBicAccountIdentification')

const PLLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .length(26)
        .exactOptional()
        .openapi({
          description:
            'The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.',
        }),
      type: z.string().default('plLocal').exactOptional().openapi({ description: '**plLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('PLLocalAccountIdentification')

const SELocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(7)
        .max(10)
        .exactOptional()
        .openapi({
          description:
            'The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.',
        }),
      clearingNumber: z
        .string()
        .min(4)
        .max(5)
        .exactOptional()
        .openapi({
          description:
            'The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.',
        }),
      type: z.string().default('seLocal').exactOptional().openapi({ description: '**seLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'clearingNumber', 'type'] })
  .openapi('SELocalAccountIdentification')

const SGLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(4)
        .max(19)
        .exactOptional()
        .openapi({
          description: 'The 4- to 19-digit bank account number, without separators or whitespace.',
        }),
      bic: z
        .string()
        .min(8)
        .max(11)
        .exactOptional()
        .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
      type: z.string().default('sgLocal').exactOptional().openapi({ description: '**sgLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'bic'] })
  .openapi('SGLocalAccountIdentification')

const UKLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
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
  .openapi('UKLocalAccountIdentification')

const USLocalBankAccountTypeSchema = z
  .enum(['checking', 'savings'])
  .openapi('USLocalBankAccountType')

const USLocalAccountIdentificationSchema = BankAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .min(2)
        .max(18)
        .exactOptional()
        .openapi({ description: 'The bank account number, without separators or whitespace.' }),
      accountType: USLocalBankAccountTypeSchema.default('checking')
        .exactOptional()
        .openapi({
          description:
            'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
        }),
      routingNumber: z
        .string()
        .length(9)
        .exactOptional()
        .openapi({
          description:
            'The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.',
        }),
      type: z.string().default('usLocal').exactOptional().openapi({ description: '**usLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'routingNumber', 'type'] })
  .openapi('USLocalAccountIdentification')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getDynamicOffersRoute = createRoute({
  method: 'get',
  path: '/dynamicOffers',
  tags: ['Dynamic offers'],
  summary: 'Get all available dynamic offers',
  description:
    'Returns a list of all [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/) available for `accountHolderId` specified as a query parameter.',
  operationId: 'get-dynamicOffers',
  request: {
    query: z.object({
      accountHolderId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'accountHolderId',
            in: 'query',
            description:
              'The unique identifier of the account holder that the dynamic offer is for.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      financingType: FinancingTypeSchema.openapi({
        param: {
          name: 'financingType',
          in: 'query',
          description:
            'The type of financing that the offer is for. If the value is not specified, returns all available types.\n\nPossible values: **businessFinancing**',
          schema: { $ref: '#/components/schemas/FinancingType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GetDynamicOffersResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postDynamicOffersIdCalculateRoute = createRoute({
  method: 'post',
  path: '/dynamicOffers/{id}/calculate',
  tags: ['Dynamic offers'],
  summary: 'Calculate a preliminary offer for a selected financing amount',
  description:
    'Calculates a preliminary offer for the financing amount that the user selected from a [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/). The preliminary offer is for informational purposes only and cannot be used to initiate a grant.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 120 requests per minute.\n\n- Test environments: 120 requests per minute.\n\n',
  operationId: 'post-dynamicOffers-id-calculate',
  request: {
    params: z.object({
      id: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the dynamic offer from which the user selected the financing amount.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CalculateGrantOfferRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: CalculatedGrantOfferSchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postDynamicOffersIdGrantOfferRoute = createRoute({
  method: 'post',
  path: '/dynamicOffers/{id}/grantOffer',
  tags: ['Dynamic offers'],
  summary: 'Create a static offer for a selected financing amount',
  description:
    'Creates a static offer for the financing amount that the user selected from the [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 30 requests per minute.\n\n- Test environments: 30 requests per minute.\n\n',
  operationId: 'post-dynamicOffers-id-grantOffer',
  request: {
    params: z.object({
      id: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the dynamic offer from which the user selected the financing amount.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateGrantOfferRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantOfferSchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantAccountsIdRoute = createRoute({
  method: 'get',
  path: '/grantAccounts/{id}',
  tags: ['Grant accounts'],
  summary: 'Get the information of your grant account',
  description:
    'Returns the details of the specified grant account. This account tracks existing grants in your marketplace or platform.',
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
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantAccountSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantOffersRoute = createRoute({
  method: 'get',
  path: '/grantOffers',
  tags: ['Grant offers'],
  summary: 'Get all available static offers',
  description:
    'Returns a list of all [static offers](https://docs.adyen.com/capital/get-grant-offers/static-offers) available for `accountHolderId` specified as a query parameter. This also includes static offers created for financing amounts that the user selected from [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).',
  operationId: 'get-grantOffers',
  request: {
    query: z.object({
      accountHolderId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'accountHolderId',
            in: 'query',
            description:
              'The unique identifier of the account holder for which you want to get the available static offers.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantOffersSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantOffersIdRoute = createRoute({
  method: 'get',
  path: '/grantOffers/{id}',
  tags: ['Grant offers'],
  summary: 'Get the details of a static offer',
  description: 'Returns the details of the specified static offer.',
  operationId: 'get-grantOffers-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the static offer.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantOfferSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantsRoute = createRoute({
  method: 'get',
  path: '/grants',
  tags: ['Grants'],
  summary: 'Get all the grants of an account holder',
  description: 'Returns a list of all the grants of a specific account holder.',
  operationId: 'get-grants',
  request: {
    query: z.object({
      counterpartyAccountHolderId: z
        .string()
        .openapi({
          param: {
            name: 'counterpartyAccountHolderId',
            in: 'query',
            description: 'The unique identifier of the account holder that received the grants.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantsSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postGrantsRoute = createRoute({
  method: 'post',
  path: '/grants',
  tags: ['Grants'],
  summary: 'Make a request for a grant',
  description: 'Make a request for a grant on behalf of an account holder.',
  operationId: 'post-grants',
  request: { body: { content: { 'application/json': { schema: GrantInfoSchema } } } },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantSchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantsGrantIdRoute = createRoute({
  method: 'get',
  path: '/grants/{grantId}',
  tags: ['Grants'],
  summary: 'Get the details of a grant',
  description: 'Returns the details of the specified grant.',
  operationId: 'get-grants-grantId',
  request: {
    params: z.object({
      grantId: z
        .string()
        .openapi({
          param: {
            name: 'grantId',
            in: 'path',
            description: 'The unique identifier of the grant reference.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: GrantSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantsGrantIdDisbursementsRoute = createRoute({
  method: 'get',
  path: '/grants/{grantId}/disbursements',
  tags: ['Grants'],
  summary: 'Get all the disbursements of a grant',
  description: 'Returns the disbursements of a specified grant.',
  operationId: 'get-grants-grantId-disbursements',
  request: {
    params: z.object({
      grantId: z
        .string()
        .openapi({
          param: {
            name: 'grantId',
            in: 'path',
            description: 'The unique identifier of the grant reference.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: DisbursementsSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getGrantsGrantIdDisbursementsDisbursementIdRoute = createRoute({
  method: 'get',
  path: '/grants/{grantId}/disbursements/{disbursementId}',
  tags: ['Grants'],
  summary: 'Get disbursement details',
  description: 'Returns the details of a disbursement specified in the path.',
  operationId: 'get-grants-grantId-disbursements-disbursementId',
  request: {
    params: z.object({
      grantId: z
        .string()
        .openapi({
          param: {
            name: 'grantId',
            in: 'path',
            description: 'The unique identifier of the grant reference.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      disbursementId: z
        .string()
        .openapi({
          param: {
            name: 'disbursementId',
            in: 'path',
            description: 'The unique identifier of the disbursement.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: DisbursementSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const patchGrantsGrantIdDisbursementsDisbursementIdRoute = createRoute({
  method: 'patch',
  path: '/grants/{grantId}/disbursements/{disbursementId}',
  tags: ['Grants'],
  summary: 'Update the repayment configuration of a disbursement',
  description:
    "Update the percentage of your user's net income that is deducted for repaying the grant.",
  operationId: 'patch-grants-grantId-disbursements-disbursementId',
  request: {
    params: z.object({
      grantId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'grantId',
            in: 'path',
            description: 'The unique identifier of the grant reference.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      disbursementId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'disbursementId',
            in: 'path',
            description: 'The unique identifier of the disbursement.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisbursementInfoUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: DisbursementSchema } },
    },
    404: {
      description: 'Not Found - The entity was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})
