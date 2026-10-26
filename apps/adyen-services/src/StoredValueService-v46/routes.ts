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

const ServiceErrorSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.',
        'x-addedInVersion': '46',
      }),
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

const StoredValueBalanceCheckRequestSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The amount information for the transaction.',
    }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    paymentMethod: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'The collection that contains the type of the payment method and its specific information if available',
      }),
    recurringDetailReference: z.string().exactOptional(),
    reference: z
      .string()
      .openapi({
        description:
          'The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\nMaximum length: 80 characters.',
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperReference: z.string().exactOptional(),
    store: z
      .string()
      .min(1)
      .max(16)
      .exactOptional()
      .openapi({ description: 'The physical store, for which this payment is processed.' }),
  })
  .openapi({ required: ['merchantAccount', 'paymentMethod', 'reference'] })
  .openapi('StoredValueBalanceCheckRequest')

const StoredValueBalanceCheckResponseSchema = z
  .strictObject({
    currentBalance: AmountSchema.exactOptional().openapi({
      description: 'The balance currently on the payment method.',
    }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.\n\nWhen a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.",
      }),
    resultCode: z
      .enum(['Success', 'Refused', 'Error', 'NotEnoughBalance'])
      .exactOptional()
      .openapi({
        description:
          'The result of the payment. Possible values:\n\n* **Success** – The operation has been completed successfully. \n* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. \n* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. \n* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. \n',
      }),
    thirdPartyRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw refusal reason received from the third party, where available',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoredValueBalanceCheckResponse')

const StoredValueBalanceMergeRequestSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The amount information for the transaction.',
    }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    paymentMethod: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'The collection that contains the type of the payment method and its specific information if available',
      }),
    recurringDetailReference: z.string().exactOptional(),
    reference: z
      .string()
      .openapi({
        description:
          'The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\nMaximum length: 80 characters.',
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperReference: z.string().exactOptional(),
    sourcePaymentMethod: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'The collection that contains the source payment method and its specific information if available. Note that type should not be included since it is inferred from the (target) payment method',
      }),
    store: z
      .string()
      .min(1)
      .max(16)
      .exactOptional()
      .openapi({ description: 'The physical store, for which this payment is processed.' }),
  })
  .openapi({ required: ['merchantAccount', 'paymentMethod', 'reference', 'sourcePaymentMethod'] })
  .openapi('StoredValueBalanceMergeRequest')

const StoredValueBalanceMergeResponseSchema = z
  .strictObject({
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorisation code:\n* When the payment is authorised, this field holds the authorisation code for the payment.\n* When the payment is not authorised, this field is empty.',
      }),
    currentBalance: AmountSchema.exactOptional().openapi({
      description: 'The balance currently on the payment method.',
    }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.\n\nWhen a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.",
      }),
    resultCode: z
      .enum(['Success', 'Refused', 'Error', 'NotEnoughBalance'])
      .exactOptional()
      .openapi({
        description:
          'The result of the payment. Possible values:\n\n* **Success** – The operation has been completed successfully. \n* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. \n* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. \n* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. \n',
      }),
    thirdPartyRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw refusal reason received from the third party, where available',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoredValueBalanceMergeResponse')

const StoredValueIssueRequestSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The amount information for the transaction.',
    }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    paymentMethod: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'The collection that contains the type of the payment method and its specific information if available',
      }),
    recurringDetailReference: z.string().exactOptional(),
    reference: z
      .string()
      .openapi({
        description:
          'The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\nMaximum length: 80 characters.',
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperReference: z.string().exactOptional(),
    store: z
      .string()
      .min(1)
      .max(16)
      .exactOptional()
      .openapi({ description: 'The physical store, for which this payment is processed.' }),
  })
  .openapi({ required: ['merchantAccount', 'paymentMethod', 'reference'] })
  .openapi('StoredValueIssueRequest')

const StoredValueIssueResponseSchema = z
  .strictObject({
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorisation code:\n* When the payment is authorised, this field holds the authorisation code for the payment.\n* When the payment is not authorised, this field is empty.',
      }),
    currentBalance: AmountSchema.exactOptional().openapi({
      description: 'The balance currently on the payment method.',
    }),
    paymentMethod: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The collection that contains the type of the payment method and its specific information if available',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.\n\nWhen a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.",
      }),
    resultCode: z
      .enum(['Success', 'Refused', 'Error', 'NotEnoughBalance'])
      .exactOptional()
      .openapi({
        description:
          'The result of the payment. Possible values:\n\n* **Success** – The operation has been completed successfully. \n* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. \n* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. \n* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. \n',
      }),
    thirdPartyRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw refusal reason received from the third party, where available',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoredValueIssueResponse')

const StoredValueLoadRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({ description: 'The amount information for the transaction.' }),
    loadType: z
      .enum(['merchandiseReturn', 'load'])
      .exactOptional()
      .openapi({
        description: "The type of load you are trying to do, when absent we default to 'load'",
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    paymentMethod: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'The collection that contains the type of the payment method and its specific information if available',
      }),
    recurringDetailReference: z.string().exactOptional(),
    reference: z
      .string()
      .openapi({
        description:
          'The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\nMaximum length: 80 characters.',
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperReference: z.string().exactOptional(),
    store: z
      .string()
      .min(1)
      .max(16)
      .exactOptional()
      .openapi({ description: 'The physical store, for which this payment is processed.' }),
  })
  .openapi({ required: ['amount', 'merchantAccount', 'paymentMethod', 'reference'] })
  .openapi('StoredValueLoadRequest')

const StoredValueLoadResponseSchema = z
  .strictObject({
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorisation code:\n* When the payment is authorised, this field holds the authorisation code for the payment.\n* When the payment is not authorised, this field is empty.',
      }),
    currentBalance: AmountSchema.exactOptional().openapi({
      description: 'The balance currently on the payment method.',
    }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.\n\nWhen a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.",
      }),
    resultCode: z
      .enum(['Success', 'Refused', 'Error', 'NotEnoughBalance'])
      .exactOptional()
      .openapi({
        description:
          'The result of the payment. Possible values:\n\n* **Success** – The operation has been completed successfully. \n* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. \n* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. \n* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. \n',
      }),
    thirdPartyRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw refusal reason received from the third party, where available',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoredValueLoadResponse')

const StoredValueStatusChangeRequestSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The amount information for the transaction.',
    }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    paymentMethod: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'The collection that contains the type of the payment method and its specific information if available',
      }),
    recurringDetailReference: z.string().exactOptional(),
    reference: z
      .string()
      .openapi({
        description:
          'The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\nMaximum length: 80 characters.',
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperReference: z.string().exactOptional(),
    status: z
      .enum(['active', 'inactive'])
      .openapi({ description: 'The status you want to change to' }),
    store: z
      .string()
      .min(1)
      .max(16)
      .exactOptional()
      .openapi({ description: 'The physical store, for which this payment is processed.' }),
  })
  .openapi({ required: ['merchantAccount', 'paymentMethod', 'reference', 'status'] })
  .openapi('StoredValueStatusChangeRequest')

const StoredValueStatusChangeResponseSchema = z
  .strictObject({
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorisation code:\n* When the payment is authorised, this field holds the authorisation code for the payment.\n* When the payment is not authorised, this field is empty.',
      }),
    currentBalance: AmountSchema.exactOptional().openapi({
      description: 'The balance currently on the payment method.',
    }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.\n\nWhen a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.",
      }),
    resultCode: z
      .enum(['Success', 'Refused', 'Error', 'NotEnoughBalance'])
      .exactOptional()
      .openapi({
        description:
          'The result of the payment. Possible values:\n\n* **Success** – The operation has been completed successfully. \n* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. \n* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. \n* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. \n',
      }),
    thirdPartyRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw refusal reason received from the third party, where available',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoredValueStatusChangeResponse')

const StoredValueVoidRequestSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    originalReference: z
      .string()
      .openapi({ description: 'The original pspReference of the payment to modify.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your reference for the payment modification. This reference is visible in Customer Area and in reports.\nMaximum length: 80 characters.',
      }),
    store: z
      .string()
      .min(1)
      .max(16)
      .exactOptional()
      .openapi({ description: 'The physical store, for which this payment is processed.' }),
    tenderReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference of the tender.' }),
    uniqueTerminalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of a POS terminal.' }),
  })
  .openapi({ required: ['merchantAccount', 'originalReference'] })
  .openapi('StoredValueVoidRequest')

const StoredValueVoidResponseSchema = z
  .strictObject({
    currentBalance: AmountSchema.exactOptional().openapi({
      description: 'The balance currently on the payment method.',
    }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.\n\nWhen a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.",
      }),
    resultCode: z
      .enum(['Success', 'Refused', 'Error', 'NotEnoughBalance'])
      .exactOptional()
      .openapi({
        description:
          'The result of the payment. Possible values:\n\n* **Success** – The operation has been completed successfully. \n* **Refused** – The operation was refused. The reason is given in the `refusalReason` field. \n* **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field. \n* **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks. \n',
      }),
    thirdPartyRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw refusal reason received from the third party, where available',
      }),
  })
  .openapi({ required: [] })
  .openapi('StoredValueVoidResponse')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postChangeStatusRoute = createRoute({
  method: 'post',
  path: '/changeStatus',
  tags: ['General'],
  summary: 'Changes the status of the payment method.',
  description: 'Changes the status of the provided payment method to the specified status.',
  operationId: 'post-changeStatus',
  request: {
    body: { content: { 'application/json': { schema: StoredValueStatusChangeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoredValueStatusChangeResponseSchema } },
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
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postCheckBalanceRoute = createRoute({
  method: 'post',
  path: '/checkBalance',
  tags: ['General'],
  summary: 'Checks the balance.',
  description: 'Checks the balance of the provided payment method.',
  operationId: 'post-checkBalance',
  request: {
    body: { content: { 'application/json': { schema: StoredValueBalanceCheckRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoredValueBalanceCheckResponseSchema } },
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
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postIssueRoute = createRoute({
  method: 'post',
  path: '/issue',
  tags: ['General'],
  summary: 'Issues a new card.',
  description: 'Issues a new card of the given payment method.',
  operationId: 'post-issue',
  request: { body: { content: { 'application/json': { schema: StoredValueIssueRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoredValueIssueResponseSchema } },
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
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLoadRoute = createRoute({
  method: 'post',
  path: '/load',
  tags: ['General'],
  summary: 'Loads the payment method.',
  description: 'Loads the payment method with the specified funds.',
  operationId: 'post-load',
  request: { body: { content: { 'application/json': { schema: StoredValueLoadRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoredValueLoadResponseSchema } },
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
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postMergeBalanceRoute = createRoute({
  method: 'post',
  path: '/mergeBalance',
  tags: ['General'],
  summary: 'Merge the balance of two cards.',
  description:
    'Increases the balance of the paymentmethod by the full amount left on the source paymentmethod',
  operationId: 'post-mergeBalance',
  request: {
    body: { content: { 'application/json': { schema: StoredValueBalanceMergeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoredValueBalanceMergeResponseSchema } },
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
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postVoidTransactionRoute = createRoute({
  method: 'post',
  path: '/voidTransaction',
  tags: ['General'],
  summary: 'Voids a transaction.',
  description: 'Voids the referenced stored value transaction.',
  operationId: 'post-voidTransaction',
  request: { body: { content: { 'application/json': { schema: StoredValueVoidRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoredValueVoidResponseSchema } },
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
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
