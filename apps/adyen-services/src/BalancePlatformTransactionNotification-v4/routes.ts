import { createRoute, z } from '@hono/zod-openapi'

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
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

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

const ResourceSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

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

const TransactionNotificationRequestV4Schema = z
  .strictObject({
    data: TransactionSchema.openapi({ description: 'Contains details about the event.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.transaction.created')
      .exactOptional()
      .openapi({ description: 'Type of the webhook.' }),
  })
  .openapi({ required: ['data', 'environment'] })
  .openapi('TransactionNotificationRequestV4')

const PostBalancePlatformTransactionCreated_01BalancePlatformTransactionCreatedPayoutTiExample = {
  summary: 'Transaction related to a payout',
  description: 'Example webhook for a transaction related to a payout to a transfer instrument',
  value: {
    data: {
      id: 'EVJN00000000000000000000000003EUR',
      amount: { value: -10000, currency: 'EUR' },
      status: 'booked',
      transfer: {
        categoryData: { priority: 'regular', type: 'bank' },
        id: '3JNC3O5ZVFLLGV4B',
        reference: ' Your internal reference for the transfer',
      },
      valueDate: '2023-08-11T16:19:35+02:00',
      bookingDate: '2023-08-11T16:31:02+02:00',
      creationDate: '2023-08-11T16:19:35+02:00',
      description: 'Your description of the transfer',
      referenceForBeneficiary: 'Your reference sent to the beneficiary of the transfer',
      accountHolder: {
        id: 'AH00000000000000000000001',
        reference: 'Your reference for the account holder',
        description: 'Your description of the account holder',
      },
      balanceAccount: {
        id: 'BA00000000000000000000001',
        description: 'Your description of the balance account from where the amount is debited.',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
    },
    environment: 'test',
    timestamp: '2023-08-11T16:16:35+02:00',
    type: 'balancePlatform.transaction.created',
  },
}

const PostBalancePlatformTransactionCreated_02BalancePlatformTransactionCreatedInternalIncomingExample =
  {
    summary: 'Transaction related to an incoming internal transfer',
    description: 'Example webhook for a transaction related to an incoming internal transfer',
    value: {
      data: {
        id: 'EVJN00000000000000000000000003EUR',
        amount: { value: 10000, currency: 'EUR' },
        status: 'booked',
        transfer: {
          categoryData: { type: 'internal' },
          id: '48TYZO5ZVURJ2FCW',
          reference: ' Your internal reference for the transfer',
        },
        valueDate: '2023-08-11T16:19:35+02:00',
        bookingDate: '2023-08-11T16:31:02+02:00',
        creationDate: '2023-08-11T16:19:35+02:00',
        description: "The sender's of the transfer",
        referenceForBeneficiary: "The sender's reference sent to the beneficiary of the transfer",
        accountHolder: {
          id: 'AH00000000000000000000001',
          reference: 'Your reference for the account holder',
          description: 'Your description of the account holder',
        },
        balanceAccount: {
          id: 'BA00000000000000000000001',
          description: 'Your description of the balance account from where the amount is debited.',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
      },
      environment: 'test',
      timestamp: '2023-08-11T16:16:35+02:00',
      type: 'balancePlatform.transaction.created',
    },
  }

const PostBalancePlatformTransactionCreated_03BalancePlatformTransactionCreatedOutgoingBusinessAccountExample =
  {
    summary: 'Transaction related to an outgoing bank transfer',
    description: 'Example webhook for a transaction related to an outgoing bank transfer',
    value: {
      data: {
        id: 'EVJN00000000000000000000000003EUR',
        amount: { value: -10000, currency: 'EUR' },
        status: 'booked',
        transfer: {
          categoryData: { priority: 'regular', type: 'bank' },
          id: '3JNC3O5ZVFLLGV4B',
          reference: ' Your internal reference for the transfer',
        },
        valueDate: '2023-08-11T16:19:35+02:00',
        bookingDate: '2023-08-11T16:31:02+02:00',
        creationDate: '2023-08-11T16:19:35+02:00',
        description: 'Your description of the transfer',
        referenceForBeneficiary: 'Your reference sent to the beneficiary of the transfer',
        accountHolder: {
          id: 'AH00000000000000000000001',
          reference: 'Your reference for the account holder',
          description: 'Your description of the account holder',
        },
        balanceAccount: {
          id: 'BA00000000000000000000001',
          description: 'Your description of the balance account from where the amount is debited.',
        },
        paymentInstrument: {
          id: 'PI00000000000000000000001',
          description: 'Your description of the payment instrument',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
      },
      environment: 'test',
      timestamp: '2023-08-11T16:16:35+02:00',
      type: 'balancePlatform.transaction.created',
    },
  }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformTransactionCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.transaction.created',
  tags: ['General'],
  summary: 'Transaction created',
  description:
    'After a transfer is booked in a balance account, Adyen sends this webhook with information about the transaction.\n\n',
  operationId: 'post-balancePlatform.transaction.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransactionNotificationRequestV4Schema,
          examples: {
            '01.balancePlatform-transaction-created-payout-ti':
              PostBalancePlatformTransactionCreated_01BalancePlatformTransactionCreatedPayoutTiExample,
            '02.balancePlatform-transaction-created-internal-incoming':
              PostBalancePlatformTransactionCreated_02BalancePlatformTransactionCreatedInternalIncomingExample,
            '03.balancePlatform-transaction-created-outgoing-business-account':
              PostBalancePlatformTransactionCreated_03BalancePlatformTransactionCreatedOutgoingBusinessAccountExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
