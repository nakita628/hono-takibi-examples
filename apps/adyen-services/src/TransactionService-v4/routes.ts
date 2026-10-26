import { createRoute, z } from '@hono/zod-openapi'

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

const AttachDocumentResponseSchema = z
  .object({
    attachmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the attachment.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('AttachDocumentResponse')

const AttachmentTypeSchema = z
  .enum(['receipt', 'correspondence', 'other'])
  .openapi('AttachmentType')

const CancellingEntitySchema = z.enum(['merchant', 'cardholder']).openapi('CancellingEntity')

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

const DisputeAttachmentSchema = z
  .object({
    attachmentType: AttachmentTypeSchema.openapi({
      description:
        'The type of information contained in the attachment: **receipt**, **correspondence**, **other**.',
    }),
    content: z
      .string()
      .min(1)
      .openapi({
        description:
          'The content of the image. An attachment must be base64-encoded data. Make sure that all base64-encoded data strings are generated without line breaks or "wrapping". For example, do not use `Base64.NO_WRAP` in Java, or its equivalent in other languages. Newline characters at the end of the base64-encoded data string will also result in a malformed input error.',
      }),
    fileName: z
      .string()
      .min(4)
      .max(17)
      .openapi({
        description:
          'The name of the attachment, including its filename extension. Supported filename extensions: **jpeg**, **pdf**, **tiff**.',
        pattern: '([^\\s]+(\\.(?i)(jpeg|tiff|pdf))$)',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the attachment.', readOnly: true }),
  })
  .openapi({ required: ['attachmentType', 'content', 'fileName'] })
  .openapi('DisputeAttachment')

const DuplicateInfoSchema = z
  .object({
    duplicateTransactionId: z
      .string()
      .min(1)
      .openapi({
        description:
          'The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.',
      }),
    sameCard: z
      .boolean()
      .openapi({
        description:
          'The duplicate charge was made on the same card. Possible values: **true**, **false**.',
      }),
    sameIssuer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The issuer associated with each charge is the same. Possible values: **true**, **false**.',
      }),
  })
  .openapi({ required: ['duplicateTransactionId', 'sameCard'] })
  .openapi('DuplicateInfo')

const FraudInfoSchema = z
  .object({
    cardDoesNotBelongToCardholder: z
      .boolean()
      .openapi({
        description:
          "The card is no longer in the cardholder's possession. Set to **true** if the card is lost or stolen.",
      }),
    cardWasCounterfeited: z.boolean().openapi({ description: 'The card was counterfeited.' }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .openapi({
        description: 'Your description of the issue for raising a dispute of `type` **fraud**.',
      }),
    reportOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to **true** to report fraud to Adyen with no further action, such as a request for a chargeback or fee reversal. The default value is **false**.',
      }),
  })
  .openapi({
    required: ['cardDoesNotBelongToCardholder', 'cardWasCounterfeited', 'descriptionOfIssue'],
  })
  .openapi('FraudInfo')

const ProductTypeSchema = z.enum(['goods', 'services']).openapi('ProductType')

const NotDeliveredInfoSchema = z
  .object({
    agreedDeliveryLocation: z
      .string()
      .min(0)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is **true**.',
      }),
    dateOfCancellation: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date the undelivered goods or services were cancelled in YYYY-MM-DD format.',
      }),
    deliveredToWrongLocation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates goods were delivered to the wrong location.\n\nPossible values: **true**, **false**.',
      }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .openapi({
        description:
          'Your description of the issue for raising a dispute of `type` **notDelivered**.',
      }),
    didCardholderReturn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate** is **true**.\n\nPossible values: **true**, **false**.',
      }),
    isDeliveryLate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is **goods**.\n\nPossible values: **true**, **false**.',
      }),
    isMerchantBankrupt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction was processed by a bankrupt merchant.\n\nPossible values: **true**, **false**.',
      }),
    isNonFiatOrNft: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is non-fiat or non-fungible token (NFT) related.\n\nPossible values: **true**, **false**.',
      }),
    lastExpectedDate: z.iso
      .date()
      .openapi({
        description:
          'The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format.',
      }),
    whatWasNotDelivered: ProductTypeSchema.openapi({
      description:
        'The type of product that you expected to receive.\n\nPossible values: **goods**, **services**.',
    }),
    whoCancelled: CancellingEntitySchema.exactOptional().openapi({
      description:
        'The party that initiated the cancellation of the transaction.\n\nPossible values: **merchant**, **cardholder**.',
    }),
  })
  .openapi({ required: ['descriptionOfIssue', 'lastExpectedDate', 'whatWasNotDelivered'] })
  .openapi('NotDeliveredInfo')

const SubTypeSchema = z
  .enum([
    'atmDispute',
    'cancelledGoodsServices',
    'cancelledRecurring',
    'creditNotProcessed',
    'counterfeit',
    'notAsDescribed',
  ])
  .openapi('SubType')

const OtherInfoSchema = z
  .object({
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .openapi({
        description: 'Your description of the issue for raising a dispute of `type` **other**.',
      }),
    subType: SubTypeSchema.openapi({
      description:
        'The specific category of **other** dispute that you are raising.\n\nPossible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**.',
    }),
    whatWasPurchased: ProductTypeSchema.openapi({
      description:
        'The type of product that you purchased.\n\nPossible values: **goods**, **services**.',
    }),
  })
  .openapi({ required: ['descriptionOfIssue', 'subType', 'whatWasPurchased'] })
  .openapi('OtherInfo')

const DisputeStatusSchema = z
  .enum(['draft', 'submitted', 'chargeback', 'secondPresentment', 'won', 'closed'])
  .openapi('DisputeStatus')

const DisputeTypeSchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['notDelivered', 'fraud', 'duplicate', 'other'] })
  .openapi('DisputeType')

const DisputeRequestSchema = z
  .object({
    description: z
      .string()
      .min(0)
      .max(50)
      .exactOptional()
      .openapi({ description: 'Your description for the dispute.' }),
    disputedAmount: AmountSchema.exactOptional().openapi({
      description:
        'The amount for which you dispute the transaction. The disputed amount cannot be greater than the transaction amount. If you do not provide an amount, the entire transaction amount will be disputed.',
    }),
    duplicateInfo: DuplicateInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.',
    }),
    fraudInfo: FraudInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.',
    }),
    notDeliveredInfo: NotDeliveredInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.',
    }),
    otherInfo: OtherInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.\n\n**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.',
    }),
    status: DisputeStatusSchema.exactOptional().openapi({
      description:
        'The current status of the dispute.\n\nWhen you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.\n\nPossible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.',
    }),
    transactionId: z
      .string()
      .min(1)
      .openapi({
        description:
          'The unique reference of the transaction for which you are raising the dispute.',
      }),
    type: DisputeTypeSchema.openapi({
      description:
        'The type of the dispute.\n\nPossible values: **duplicate**, **fraud**, **notDelivered**, **other**.\n\n**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.',
    }),
  })
  .openapi({ required: ['transactionId', 'type'] })
  .openapi('DisputeRequest')

const DisputeResponseSchema = z
  .object({
    arn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique Acquirer Reference Number (arn) generated by the card scheme for each capture. You can use the `arn` to trace the transaction through its lifecycle.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your description for the dispute.' }),
    disputedAmount: AmountSchema.exactOptional().openapi({
      description:
        'The amount for which you dispute the transaction. The disputed amount cannot be greater than the transaction amount. If you do not provide an amount, the entire transaction amount will be disputed.',
    }),
    duplicateInfo: DuplicateInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.',
    }),
    fraudInfo: FraudInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the raised dispute.', readOnly: true }),
    notDeliveredInfo: NotDeliveredInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.',
    }),
    otherInfo: OtherInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**\n\n**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.',
    }),
    status: DisputeStatusSchema.exactOptional().openapi({
      description:
        'The current status of the dispute.\n\nWhen you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.\n\nPossible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.',
    }),
    transactionId: z
      .string()
      .openapi({
        description:
          'The unique reference of the transaction for which you are raising the dispute.',
      }),
    type: DisputeTypeSchema.openapi({
      description:
        'The type of the dispute.\n\nPossible values: **duplicate**, **fraud**, **notDelivered**, **other**.\n\n**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.',
    }),
  })
  .openapi({ required: ['transactionId', 'type'] })
  .openapi('DisputeResponse')

const PatchableDuplicateInfoSchema = z
  .object({
    duplicateTransactionId: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.',
      }),
    sameCard: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The duplicate charge was made on the same card. Possible values: **true**, **false**.',
      }),
    sameIssuer: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The issuer associated with each charge is the same. Possible values: **true**, **false**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchableDuplicateInfo')

const PatchableFraudInfoSchema = z
  .object({
    cardDoesNotBelongToCardholder: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The card is no longer in the cardholder's possession. Set to **true** if the card is lost or stolen.",
      }),
    cardWasCounterfeited: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The card was counterfeited.' }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .exactOptional()
      .openapi({
        description: 'Your description of the issue for raising a dispute of `type` **fraud**.',
      }),
    reportOnly: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set to **true** to report fraud to Adyen with no further action, such as a request for a chargeback or fee reversal. The default value is **false**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchableFraudInfo')

const PatchableNotDeliveredInfoSchema = z
  .object({
    agreedDeliveryLocation: z
      .string()
      .min(0)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is **true**.',
      }),
    dateOfCancellation: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date the undelivered goods or services were cancelled in YYYY-MM-DD format.',
      }),
    deliveredToWrongLocation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates goods were delivered to the wrong location.\n\nPossible values: **true**, **false**.',
      }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .exactOptional()
      .openapi({
        description:
          'Your description of the issue for raising a dispute of `type` **notDelivered**.',
      }),
    didCardholderReturn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate** is **true**.\n\nPossible values: **true**, **false**.',
      }),
    isDeliveryLate: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is **goods**.\n\nPossible values: **true**, **false**.',
      }),
    isMerchantBankrupt: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction was processed by a bankrupt merchant.\n\nPossible values: **true**, **false**.',
      }),
    isNonFiatOrNft: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is non-fiat or non-fungible token (NFT) related.\n\nPossible values: **true**, **false**.',
      }),
    lastExpectedDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format.',
      }),
    whatWasNotDelivered: ProductTypeSchema.exactOptional().openapi({
      description:
        'The type of product that you expected to receive.\n\nPossible values: **goods**, **services**.',
    }),
    whoCancelled: z
      .xor([CancellingEntitySchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The party that initiated the cancellation of the transaction.\n\nPossible values: **merchant**, **cardholder**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchableNotDeliveredInfo')

const PatchableOtherInfoSchema = z
  .object({
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .exactOptional()
      .openapi({
        description: 'Your description of the issue for raising a dispute of `type` **other**.',
      }),
    subType: SubTypeSchema.exactOptional().openapi({
      description:
        'The specific category of **other** dispute that you are raising.\n\nPossible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**.',
    }),
    whatWasPurchased: ProductTypeSchema.exactOptional().openapi({
      description:
        'The type of product that you purchased.\n\nPossible values: **goods**, **services**.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PatchableOtherInfo')

const PatchableDisputeRequestSchema = z
  .object({
    duplicateInfo: z
      .xor([PatchableDuplicateInfoSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.',
      }),
    fraudInfo: z
      .xor([PatchableFraudInfoSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.',
      }),
    notDeliveredInfo: z
      .xor([PatchableNotDeliveredInfoSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.',
      }),
    otherInfo: z
      .xor([PatchableOtherInfoSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.\n\n**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.',
      }),
    status: z
      .xor([DisputeStatusSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The current status of the dispute.\n\nWhen you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.\n\nPossible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchableDisputeRequest')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getDisputesRoute = createRoute({
  method: 'get',
  path: '/disputes',
  tags: ['Raise Disputes'],
  summary: 'Get a list of raised disputes',
  description:
    'Returns a list of raised disputes that match the query parameters.\n\nThis endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.',
  operationId: 'get-disputes',
  request: {
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'The current status of the dispute.\n\nPossible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      paymentInstrument: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'paymentInstrument',
            in: 'query',
            description: 'The unique identifier of the payment instrument.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      createdSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdSince',
            in: 'query',
            description:
              'Only include disputes that have been created on or after this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\\)  format. For example, 2021-05-30T15:07:40Z.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      createdUntil: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdUntil',
            in: 'query',
            description:
              'Only include disputes that have been created on or before this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\\) format. For example, **2021-05-30T15:07:40Z**.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'The number of items that you want to skip.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page, maximum of 500 items. By default, the response returns 100 items per page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: z.array(z.array(DisputeResponseSchema)) } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postDisputesRoute = createRoute({
  method: 'post',
  path: '/disputes',
  tags: ['Raise Disputes'],
  summary: 'Raise a dispute',
  description:
    'Raise a dispute for an underlying transaction, providing a dispute type and the amount you want to dispute.\n\nRaising a dispute returns a dispute ID, which you can use to update details about the dispute, provide supporting documentation, close the dispute, or submit the dispute for a chargeback. You can also use the dispute ID to view the status of the dispute.',
  operationId: 'post-disputes',
  request: {
    body: { content: { 'application/json': { schema: DisputeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: DisputeResponseSchema } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getDisputesDisputeIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/disputes/{disputeId}/attachments',
  tags: ['Dispute Attachments'],
  summary: 'Get all attachments linked to a raised dispute',
  description: 'Get a list of attachments associated with a dispute ID.',
  operationId: 'get-disputes-disputeId-attachments',
  request: {
    params: z.object({
      disputeId: z
        .string()
        .openapi({
          param: {
            name: 'disputeId',
            in: 'path',
            description: 'The unique identifier of the raised dispute.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: z.array(DisputeAttachmentSchema) } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postDisputesDisputeIdAttachmentsRoute = createRoute({
  method: 'post',
  path: '/disputes/{disputeId}/attachments',
  tags: ['Dispute Attachments'],
  summary: 'Add an attachment to a dispute',
  description:
    'Add supporting information as an attachment for the raised dispute. Upload receipts, communication, or any other documentation to support the dispute.',
  operationId: 'post-disputes-disputeId-attachments',
  request: {
    params: z.object({
      disputeId: z
        .string()
        .openapi({
          param: {
            name: 'disputeId',
            in: 'path',
            description: 'The unique identifier of the raised dispute.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DisputeAttachmentSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AttachDocumentResponseSchema } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getDisputesDisputeIdAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/disputes/{disputeId}/attachments/{attachmentId}',
  tags: ['Dispute Attachments'],
  summary: 'Get an attachment',
  description:
    'Search for a single attachment, providing the specific dispute ID and attachment ID.',
  operationId: 'get-disputes-disputeId-attachments-attachmentId',
  request: {
    params: z.object({
      disputeId: z
        .string()
        .openapi({
          param: {
            name: 'disputeId',
            in: 'path',
            description: 'The unique identifier of the raised dispute.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .string()
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            description: 'The unique identifier of the attachment.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: DisputeAttachmentSchema } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const deleteDisputesDisputeIdAttachmentsAttachmentIdRoute = createRoute({
  method: 'delete',
  path: '/disputes/{disputeId}/attachments/{attachmentId}',
  tags: ['Dispute Attachments'],
  summary: 'Delete attachment from a dispute',
  description:
    'Removes the attachment from the raised dispute. Adyen may keep this file for compliance purposes.',
  operationId: 'delete-disputes-disputeId-attachments-attachmentId',
  request: {
    params: z.object({
      disputeId: z
        .string()
        .openapi({
          param: {
            name: 'disputeId',
            in: 'path',
            description: 'The unique identifier of the raised dispute.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .string()
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            description: 'The unique identifier of the attachment.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The attachment was successfully removed' },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getDisputesIdRoute = createRoute({
  method: 'get',
  path: '/disputes/{id}',
  tags: ['Raise Disputes'],
  summary: 'Get dispute by ID',
  description: 'Get a raised dispute by ID.',
  operationId: 'get-disputes-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the raised dispute.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: DisputeResponseSchema } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const patchDisputesIdRoute = createRoute({
  method: 'patch',
  path: '/disputes/{id}',
  tags: ['Raise Disputes'],
  summary: 'Update a raised dispute',
  description:
    "Update information related to a raised dispute, or change a dispute's status from **draft** to **submitted** or **closed**.\n\n**Note:** Changing the status of a dispute to **submitted** or **closed** is a final action. You cannot make updates to a **submitted** or **closed** dispute. Make sure to upload all supporting attachments using the `POST /disputes/{id}/attachments` endpoint before you submit a dispute. When you update a dispute to **submitted**, Adyen sends the raised dispute to the card scheme for review and acquirer defense. When you update a raised dispute to **closed**, Adyen closes the dispute, and the dispute is no longer eligible for review by the card scheme.",
  operationId: 'patch-disputes-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the raised dispute.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchableDisputeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: DisputeResponseSchema } },
    },
    401: {
      description: 'Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})
