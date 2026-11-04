import { createRoute, z } from '@hono/zod-openapi'

const ActionSchema = z
  .strictObject({
    actionCode: z
      .string()
      .openapi({ description: 'The code identifying the action that needs to be completed.' }),
    resolved: z
      .boolean()
      .openapi({ description: 'Indicates whether this action has been successfully completed.' }),
  })
  .openapi({ required: ['actionCode', 'resolved'] })
  .openapi('Action')

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
  .openapi({ required: ['value', 'currency'] })
  .openapi('Amount')

const BalanceSchema = z
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
  .openapi({ required: ['principal', 'fee', 'total', 'currency'] })
  .openapi('Balance')

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

const RepaymentTermSchema = z
  .strictObject({
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

const DynamicOfferRepaymentSchema = z
  .strictObject({
    term: RepaymentTermSchema.openapi({
      description:
        'Contains information about the time period in which your user must repay the total amount of the grant.',
    }),
  })
  .openapi({ required: ['term'] })
  .openapi('DynamicOfferRepayment')

const DynamicOfferSchema = z
  .strictObject({
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
    financingType: z
      .enum(['businessFinancing', 'hardwareFinancing'])
      .openapi({
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
      'id',
      'accountHolderId',
      'startsAt',
      'expiresAt',
      'financingType',
      'maximumAmount',
      'minimumAmount',
      'repayment',
      'contractType',
    ],
  })
  .openapi('DynamicOffer')

const GrantCounterpartySchema = z
  .strictObject({
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
  .strictObject({
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
  .strictObject({
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
  .openapi({ required: ['grantAccountId', 'grantOfferId', 'id', 'status', 'balances'] })
  .openapi('Grant')

const GrantInfoCounterpartySchema = z
  .strictObject({
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

const GrantOfferFeeSchema = z
  .strictObject({
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

const ThresholdRepaymentSchema = z
  .strictObject({
    amount: AmountSchema.openapi({
      description: 'The minimum threshold amount that your user must repay on every 30-day period.',
    }),
  })
  .openapi({ required: ['amount'] })
  .openapi('ThresholdRepayment')

const RepaymentSchema = z
  .strictObject({
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
  .openapi({ required: ['basisPoints'] })
  .openapi('Repayment')

const GrantOfferSchema = z
  .strictObject({
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

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const balancePlatformBalanceAccountHolderCapitalOfferCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountHolder.capitalOffer.created',
  tags: ['Static offers'],
  summary: 'Static offer created',
  description:
    'Adyen sends this webhook to provide details about a static offer that has been created for an account holder.',
  operationId: 'post-balancePlatform.balanceAccountHolder.capitalOffer.created',
  request: { body: { content: { 'application/json': { schema: GrantOfferSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformCapitalDynamicOfferCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.capital.dynamicOffer.created',
  tags: ['Dynamic offers'],
  summary: 'Dynamic offer created',
  description:
    'Adyen sends this webhook to provide details about a dynamic offer that has been created for an account holder.',
  operationId: 'post-balancePlatform.capital.dynamicOffer.created',
  request: { body: { content: { 'application/json': { schema: DynamicOfferSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformGrantsCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.grants.created',
  tags: ['Grants'],
  summary: 'Grant created',
  description:
    'After a grant is created, Adyen sends this webhook with information about the grant.\n\n',
  operationId: 'post-balancePlatform.grants.created',
  request: { body: { content: { 'application/json': { schema: GrantSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformGrantsUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.grants.updated',
  tags: ['Grants'],
  summary: 'Grant updated',
  description:
    'After a grant is updated, Adyen sends this webhook with information about the grant.\n\nFor example, you receive this webhook when the financing amount is disbursed to your user, or when your user repays the financing amount.',
  operationId: 'post-balancePlatform.grants.updated',
  request: { body: { content: { 'application/json': { schema: GrantSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
