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

const CertificationGuaranteedReservationSchema = z
  .enum(['GR', 'RC', 'AR'])
  .openapi('CertificationGuaranteedReservation')

const ProductTypeSchema = z.enum(['goods', 'services']).openapi('ProductType')

const MerchantRefuseAdviseSchema = z
  .enum(['MRRA', 'MRRM', 'MICNRM'])
  .openapi('MerchantRefuseAdvise')

const ReturnMethodSchema = z
  .enum(['faceToFace', 'fedEx', 'dhl', 'ups', 'postalService', 'other'])
  .openapi('ReturnMethod')

const ServiceTypeSchema = z
  .enum(['timeshare', 'guaranteedReservation', 'other'])
  .openapi('ServiceType')

const CancellingEntitySchema = z.enum(['merchant', 'cardholder']).openapi('CancellingEntity')

const CancelledInfoSchema = z
  .object({
    attemptedToReturn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to return the merchandise but was unable to.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `didCardholderReturn` is **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).',
      }),
    certificationGuaranteedReservation:
      CertificationGuaranteedReservationSchema.exactOptional().openapi({
        description:
          'The certification code for the guaranteed reservation.\n\nRequired if the value of `serviceType` is **guaranteedReservation** (a guaranteed reservation).\n\nPossible values:\n\n * **GR**: The cardholder properly cancelled the guaranteed reservation.\n\n * **RC**: The cardholder attempted to cancel within 24 hours of delivery of the reservation confirmation.\n\n * **AR**: The merchant billed a "no-show transaction" for more than one day\'s accommodation or rental.',
      }),
    dateOfAttemptedReturn: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the goods they purchased.\n\nRequired if the value of `attemptedToReturn` is **true**.',
      }),
    dateOfCancellation: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the purchase was cancelled.\n\nRequired if the value of `certificationGuaranteedReservation` is **GR** or **RC**, or if the value of `didCardholderCancelBeforeShipment` is **true**.',
      }),
    dateOfReturn: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the cardholder shipped or handed back the merchandise.\n\nRequired if the value of `didCardholderReturn` is **true**.',
      }),
    dateOfService: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the service was scheduled to take place.\n\nRequired if the value of `serviceType` is **other** (any other type of service) or **guaranteedReservation** (a guaranteed reservation).',
      }),
    dateReturnReceived: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the merchant received the returned merchandise.\n\nRequired if the value of `didCardholderReturn` is **true**.',
      }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .exactOptional()
      .openapi({
        description:
          'Your description of the issue for raising a dispute of `type` **cancelled**. Make sure the cardholder provides information that covers the following:\n\n * A description of the goods or services purchased, and why they are cancelling the purchase.\n\n * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.\n\n * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).\n\n * If the cardholder attempted to return the goods in a way other than through direct return shipment or face-to-face return at a merchant, how they attempted to return the goods.\n\nNot required if the value of `goodsOrServices` is **services**, the value of `serviceType` is **timeshare** or **guaranteedReservation**, and the value of `didCardholderCancelBeforeShipment` is **false**.',
      }),
    didCardholderCancelBeforeShipment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder cancelled the purchase before the goods were shipped.\n\nPossible values: **true**, **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to cancel the goods or services.',
      }),
    didCardholderReceiveGoods: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder received the merchandise.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `goodsOrServices` is **goods**.',
      }),
    didCardholderReturn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder returned the merchandise to the merchant.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `didCardholderReceiveGoods` is **true**.',
      }),
    goodsOrServices: ProductTypeSchema.openapi({
      description:
        'The type of purchase being disputed.\n\nPossible values: **goods**, **services**.',
    }),
    lastExpectedDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the merchant promised delivery.\n\nRequired if the value of `goodsOrServices` is **goods**.',
      }),
    merchantRefuseAdvise: MerchantRefuseAdviseSchema.exactOptional().openapi({
      description:
        'The reason the merchant gave for refusing the return.\n\nRequired if the value of `attemptedToReturn` is **true**.\n\nPossible values:\n\n * **MRRA**: The merchant refused to provide return authorization.\n\n * **MRRM**: The merchant refused to accept returned merchandise.\n\n * **MICNRM**: The merchant informed cardholder not to return the merchandise.',
    }),
    returnMethod: ReturnMethodSchema.exactOptional().openapi({
      description:
        'The method used to return the merchandise.\n\nRequired if the value of `didCardholderReturn` is **true**.\n\nPossible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.\n\nIf the value of this parameter is **other**, or if the cardholder attempted a return but did not complete it, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods or services.',
    }),
    serviceType: ServiceTypeSchema.exactOptional().openapi({
      description:
        'The type of service purchased.\n\nRequired if the value of `goodsOrServices` is **services**.\n\nPossible values:\n\n * **timeshare**: A reservation for a timeshare.\n\n * **guaranteedReservation**: A guaranteed reservation (for example, a hotel or a car rental booking).\n\n * **other**: Any other type of service.',
    }),
    shippingTrackingNumber: z
      .string()
      .min(0)
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The tracking number for the shipment used to return the merchandise.',
      }),
    timeshareDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, associated with the timeshare purchase.\n\nRequired if the value of `serviceType` is **timeshare**.',
      }),
    wasCancellationPolicyProvided: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the merchant provided the cardholder with a cancellation policy.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `didCardholderReceiveGoods` is **false**, the value of `didCardholderCancelBeforeShipment` is **true**, or the value of `serviceType` is **guaranteedReservation**.',
      }),
    whoCancelled: CancellingEntitySchema.exactOptional().openapi({
      description:
        'The party that initiated the cancellation of the purchase.\n\nRequired if the value of `serviceType` is **timeshare** (a timeshare) or **other** (any other type of service), or if the value of `didCardholderReceiveGoods` is **false**.\n\nPossible values: **merchant**, **cardholder**.',
    }),
  })
  .openapi({ required: ['goodsOrServices'] })
  .openapi('CancelledInfo')

const CancelledInfoUpdateSchema = z
  .object({
    attemptedToReturn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to return the merchandise but was unable to.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `didCardholderReturn` is **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).',
      }),
    certificationGuaranteedReservation: z
      .xor([CertificationGuaranteedReservationSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The certification code for the guaranteed reservation.\n\nRequired if the value of `serviceType` is **guaranteedReservation** (a guaranteed reservation).\n\nPossible values:\n\n * **GR**: The cardholder properly cancelled the guaranteed reservation.\n\n * **RC**: The cardholder attempted to cancel within 24 hours of delivery of the reservation confirmation.\n\n * **AR**: The merchant billed a "no-show transaction" for more than one day\'s accommodation or rental.',
      }),
    dateOfAttemptedReturn: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the goods they purchased.\n\nRequired if the value of `attemptedToReturn` is **true**.',
      }),
    dateOfCancellation: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the purchase was cancelled.\n\nRequired if the value of `certificationGuaranteedReservation` is **GR** or **RC**, or if the value of `didCardholderCancelBeforeShipment` is **true**.',
      }),
    dateOfReturn: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the cardholder shipped or handed back the merchandise.\n\nRequired if the value of `didCardholderReturn` is **true**.',
      }),
    dateOfService: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the service was scheduled to take place.\n\nRequired if the value of `serviceType` is **other** (any other type of service) or **guaranteedReservation** (a guaranteed reservation).',
      }),
    dateReturnReceived: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the merchant received the returned merchandise.\n\nRequired if the value of `didCardholderReturn` is **true**.',
      }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Your description of the issue for raising a dispute of `type` **cancelled**. Make sure the cardholder provides information that covers the following:\n\n * A description of the goods or services purchased, and why they are cancelling the purchase.\n\n * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.\n\n * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).\n\n * If the cardholder attempted to return the goods in a way other than through direct return shipment or face-to-face return at a merchant, how they attempted to return the goods.\n\nNot required if the value of `goodsOrServices` is **services**, the value of `serviceType` is **timeshare** or **guaranteedReservation**, and the value of `didCardholderCancelBeforeShipment` is **false**.',
      }),
    didCardholderCancelBeforeShipment: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder cancelled the purchase before the goods were shipped.\n\nPossible values: **true**, **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to cancel the goods or services.',
      }),
    didCardholderReceiveGoods: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder received the merchandise.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `goodsOrServices` is **goods**.',
      }),
    didCardholderReturn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder returned the merchandise to the merchant.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `didCardholderReceiveGoods` is **true**.',
      }),
    goodsOrServices: ProductTypeSchema.exactOptional().openapi({
      description:
        'The type of purchase being disputed.\n\nPossible values: **goods**, **services**.',
    }),
    lastExpectedDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the merchant promised delivery.\n\nRequired if the value of `goodsOrServices` is **goods**.',
      }),
    merchantRefuseAdvise: z
      .xor([MerchantRefuseAdviseSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The reason the merchant gave for refusing the return.\n\nRequired if the value of `attemptedToReturn` is **true**.\n\nPossible values:\n\n * **MRRA**: The merchant refused to provide return authorization.\n\n * **MRRM**: The merchant refused to accept returned merchandise.\n\n * **MICNRM**: The merchant informed cardholder not to return the merchandise.',
      }),
    returnMethod: z
      .xor([ReturnMethodSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The method used to return the merchandise.\n\nRequired if the value of `didCardholderReturn` is **true**.\n\nPossible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.\n\nIf the value of this parameter is **other**, or if the cardholder attempted a return but did not complete it, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods or services.',
      }),
    serviceType: z
      .xor([ServiceTypeSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The type of service purchased.\n\nRequired if the value of `goodsOrServices` is **services**.\n\nPossible values:\n\n * **timeshare**: A reservation for a timeshare.\n\n * **guaranteedReservation**: A guaranteed reservation (for example, a hotel or a car rental booking).\n\n * **other**: Any other type of service.',
      }),
    shippingTrackingNumber: z
      .string()
      .min(0)
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The tracking number for the shipment used to return the merchandise.',
      }),
    timeshareDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, associated with the timeshare purchase.\n\nRequired if the value of `serviceType` is **timeshare**.',
      }),
    wasCancellationPolicyProvided: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the merchant provided the cardholder with a cancellation policy.\n\nPossible values: **true**, **false**.\n\nRequired if the value of `didCardholderReceiveGoods` is **false**, the value of `didCardholderCancelBeforeShipment` is **true**, or the value of `serviceType` is **guaranteedReservation**.',
      }),
    whoCancelled: z
      .xor([CancellingEntitySchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The party that initiated the cancellation of the purchase.\n\nRequired if the value of `serviceType` is **timeshare** (a timeshare) or **other** (any other type of service), or if the value of `didCardholderReceiveGoods` is **false**.\n\nPossible values: **merchant**, **cardholder**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancelledInfoUpdate')

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

const DisputeDueToSchema = z
  .enum(['notAsDescribed', 'defectiveMerchandise'])
  .openapi('DisputeDueTo')

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

const NotAsDescribedMerchantRefuseAdviseSchema = z
  .enum(['MRRA', 'MRRM', 'MICNRM', 'MNLER', 'MNPCIR'])
  .openapi('NotAsDescribedMerchantRefuseAdvise')

const NotAsDescribedInfoSchema = z
  .object({
    attemptedToReturn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to return the merchandise, but was unsuccessful. Required if the value of `didCardholderReturn` is **false**.\n\nPossible values: **true**, **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the merchandise and what happened to the merchandise when the return was unsuccessful.',
      }),
    dateAttemptedToReturn: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the merchandise. Required if the value of `attemptedToReturn` is **true**.',
      }),
    dateOfCancellation: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the goods or services were cancelled by the cardholder. Required if the value of `whoCancelled` is **cardholder**.',
      }),
    dateOfFirstNegotiations: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that negotiations with the merchant began. Required if the value of `evidenceOfNegotiationsWithMerchant` is **true**.',
      }),
    dateOfReturn: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the cardholder shipped or handed back the merchandise to the merchant. Required if the value of `didCardholderReturn` is **true**.',
      }),
    dateReturnReceived: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the merchant received the returned merchandise. Required if the value of `didCardholderReturn` is **true**.',
      }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .openapi({
        description:
          'Your description of the issue for raising a dispute of `type` **notAsDescribed**. Make sure the cardholder provides information that covers the following:\n\n * A description of the goods or services purchased, and why they did not fit the description of what they thought they purchased.\n\n * If the cardholder cancelled services that they purchased: A description of how the services were cancelled.\n\n * If the cardholder attempted to negotiate a resolution: A description of the negotiations that took place with the merchant.\n\n * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.\n\n * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods and what they did with the goods (for example, destroyed them).',
      }),
    didAttemptToResolve: z
      .boolean()
      .openapi({
        description:
          'Indicates if the cardholder attempted to resolve the issue directly with the merchant before raising the dispute.\n\nPossible values: **true**, **false**.',
      }),
    didCardholderReturn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder returned the merchandise to the merchant. Required if the value of `goodsOrServices` is **goods**, or if the value of `disputeDueTo` is **defectiveMerchandise**.\n\nPossible values: **true**, **false**.',
      }),
    didMerchantAcceptCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the merchant accepted the cancellation. Required if the cardholder cancelled the service within 15 days of the current date.\n\nPossible values: **true**, **false**.',
      }),
    disputeDueTo: DisputeDueToSchema.openapi({
      description:
        'Indicates the kind of dispute being raised by the cardholder.\n\nPossible values: **notAsDescribed**, **defectiveMerchandise**.',
    }),
    evidenceOfNegotiationsWithMerchant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to negotiate a resolution with the merchant before raising the dispute. Required if more than 120 days have passed since both the `lastExpectedDate` and the transaction processing date.\n\nPossible values: **true**, **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about the negotiations that took place with the merchant.',
      }),
    goodsOrServices: ProductTypeSchema.exactOptional().openapi({
      description:
        'The type of purchase being disputed. Required if the value of `disputeDueTo` is **notAsDescribed**.\n\nPossible values: **goods**, **services**.',
    }),
    isNonFiatOrNft: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is non-fiat or non-fungible token (NFT) related. Required if the value of `goodsOrServices` is **services**.\n\nPossible values: **true**, **false**.',
      }),
    lastExpectedDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the merchant promised delivery of the goods or services.',
      }),
    reasonMerchantRefused: NotAsDescribedMerchantRefuseAdviseSchema.exactOptional().openapi({
      description:
        'The reason the merchant gave for refusing the return. Required if the value of `attemptedToReturn` is **true**.\n\nPossible values:\n\n * **MRRA**: The merchant refused to provide return authorization.\n\n * **MRRM**: The merchant refused to accept the returned merchandise.\n\n * **MICNRM**: The merchant told the cardholder not to return the merchandise.\n\n * **MNLER**: The merchant no longer exists or is not responding.\n\n * **MNPCIR**: The merchant did not provide clear instructions on how to return the merchandise.',
    }),
    resolutionProhibitedByLaw: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if local law prohibits the cardholder from attempting to resolve the issue with the merchant. Required if the value of `didAttemptToResolve` is **false**. If this value is also **false**, the dispute cannot proceed.\n\nPossible values: **true**, **false**.',
      }),
    returnMethod: ReturnMethodSchema.exactOptional().openapi({
      description:
        'The method used to return the merchandise. Required if the value of `didCardholderReturn` is **true**.\n\nPossible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.\n\nIf the value of this parameter is **other**, provide information in `descriptionOfIssue` about how the merchandise was returned.',
    }),
    shippingTrackingNumber: z
      .string()
      .min(0)
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The tracking number for the shipment used to return the merchandise.',
      }),
    whoCancelled: CancellingEntitySchema.exactOptional().openapi({
      description:
        'The party that initiated cancellation of the service. Required if the value of `goodsOrServices` is **services**.\n\nPossible values: **merchant**, **cardholder**.\n\nIf the value of this parameter is **cardholder**, provide information in `descriptionOfIssue` about how the service was cancelled.',
    }),
  })
  .openapi({ required: ['descriptionOfIssue', 'didAttemptToResolve', 'disputeDueTo'] })
  .openapi('NotAsDescribedInfo')

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
  .openapi({
    'x-extensible-enum': [
      'notDelivered',
      'fraud',
      'duplicate',
      'notAsDescribed',
      'cancelled',
      'other',
    ],
  })
  .openapi('DisputeType')

const DisputeRequestSchema = z
  .object({
    cancelledInfo: CancelledInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.',
    }),
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
    notAsDescribedInfo: NotAsDescribedInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.',
    }),
    notDeliveredInfo: NotDeliveredInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.',
    }),
    otherInfo: OtherInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.\n\n**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.',
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
        'The type of the dispute.\n\nPossible values: **cancelled**, **duplicate**, **fraud**, **notAsDescribed**, **notDelivered**, **other**.\n\n**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.',
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
    cancelledInfo: CancelledInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.',
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
    notAsDescribedInfo: NotAsDescribedInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.',
    }),
    notDeliveredInfo: NotDeliveredInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.',
    }),
    otherInfo: OtherInfoSchema.exactOptional().openapi({
      description:
        'Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.\n\n**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.',
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
        'The type of the dispute.\n\nPossible values: **cancelled**, **duplicate**, **fraud**, **notAsDescribed**, **notDelivered**, **other**.\n\n**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.',
    }),
  })
  .openapi({ required: ['transactionId', 'type'] })
  .openapi('DisputeResponse')

const NotAsDescribedInfoUpdateSchema = z
  .object({
    attemptedToReturn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to return the merchandise, but was unsuccessful. Required if the value of `didCardholderReturn` is **false**.\n\nPossible values: **true**, **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the merchandise and what happened to the merchandise when the return was unsuccessful.',
      }),
    dateAttemptedToReturn: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the merchandise. Required if the value of `attemptedToReturn` is **true**.',
      }),
    dateOfCancellation: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the goods or services were cancelled by the cardholder. Required if the value of `whoCancelled` is **cardholder**.',
      }),
    dateOfFirstNegotiations: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that negotiations with the merchant began. Required if the value of `evidenceOfNegotiationsWithMerchant` is **true**.',
      }),
    dateOfReturn: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the cardholder shipped or handed back the merchandise to the merchant. Required if the value of `didCardholderReturn` is **true**.',
      }),
    dateReturnReceived: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, when the merchant received the returned merchandise. Required if the value of `didCardholderReturn` is **true**.',
      }),
    descriptionOfIssue: z
      .string()
      .min(0)
      .max(2500)
      .exactOptional()
      .openapi({
        description:
          'Your description of the issue for raising a dispute of `type` **notAsDescribed**. Make sure the cardholder provides information that covers the following:\n\n * A description of the goods or services purchased, and why they did not fit the description of what they thought they purchased.\n\n * If the cardholder cancelled services that they purchased: A description of how the services were cancelled.\n\n * If the cardholder attempted to negotiate a resolution: A description of the negotiations that took place with the merchant.\n\n * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.\n\n * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods and what they did with the goods (for example, destroyed them).',
      }),
    didAttemptToResolve: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to resolve the issue directly with the merchant before raising the dispute.\n\nPossible values: **true**, **false**.',
      }),
    didCardholderReturn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder returned the merchandise to the merchant. Required if the value of `goodsOrServices` is **goods**, or if the value of `disputeDueTo` is **defectiveMerchandise**.\n\nPossible values: **true**, **false**.',
      }),
    didMerchantAcceptCancellation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the merchant accepted the cancellation. Required if the cardholder cancelled the service within 15 days of the current date.\n\nPossible values: **true**, **false**.',
      }),
    disputeDueTo: DisputeDueToSchema.exactOptional().openapi({
      description:
        'Indicates the kind of dispute being raised by the cardholder.\n\nPossible values: **notAsDescribed**, **defectiveMerchandise**.',
    }),
    evidenceOfNegotiationsWithMerchant: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the cardholder attempted to negotiate a resolution with the merchant before raising the dispute. Required if more than 120 days have passed since both the `lastExpectedDate` and the transaction processing date.\n\nPossible values: **true**, **false**.\n\nIf the value of this parameter is **true**, provide information in `descriptionOfIssue` about the negotiations that took place with the merchant.',
      }),
    goodsOrServices: z
      .xor([ProductTypeSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The type of purchase being disputed. Required if the value of `disputeDueTo` is **notAsDescribed**.\n\nPossible values: **goods**, **services**.',
      }),
    isNonFiatOrNft: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is non-fiat or non-fungible token (NFT) related. Required if the value of `goodsOrServices` is **services**.\n\nPossible values: **true**, **false**.',
      }),
    lastExpectedDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date, in **YYYY-MM-DD** format, that the merchant promised delivery of the goods or services.',
      }),
    reasonMerchantRefused: z
      .xor([NotAsDescribedMerchantRefuseAdviseSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The reason the merchant gave for refusing the return. Required if the value of `attemptedToReturn` is **true**.\n\nPossible values:\n\n * **MRRA**: The merchant refused to provide return authorization.\n\n * **MRRM**: The merchant refused to accept the returned merchandise.\n\n * **MICNRM**: The merchant told the cardholder not to return the merchandise.\n\n * **MNLER**: The merchant no longer exists or is not responding.\n\n * **MNPCIR**: The merchant did not provide clear instructions on how to return the merchandise.',
      }),
    resolutionProhibitedByLaw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if local law prohibits the cardholder from attempting to resolve the issue with the merchant. Required if the value of `didAttemptToResolve` is **false**. If this value is also **false**, the dispute cannot proceed.\n\nPossible values: **true**, **false**.',
      }),
    returnMethod: z
      .xor([ReturnMethodSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The method used to return the merchandise. Required if the value of `didCardholderReturn` is **true**.\n\nPossible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.\n\nIf the value of this parameter is **other**, provide information in `descriptionOfIssue` about how the merchandise was returned.',
      }),
    shippingTrackingNumber: z
      .string()
      .min(0)
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The tracking number for the shipment used to return the merchandise.',
      }),
    whoCancelled: z
      .xor([CancellingEntitySchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The party that initiated cancellation of the service. Required if the value of `goodsOrServices` is **services**.\n\nPossible values: **merchant**, **cardholder**.\n\nIf the value of this parameter is **cardholder**, provide information in `descriptionOfIssue` about how the service was cancelled.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotAsDescribedInfoUpdate')

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
    cancelledInfo: z
      .xor([CancelledInfoUpdateSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.',
      }),
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
    notAsDescribedInfo: z
      .xor([NotAsDescribedInfoUpdateSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.',
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
          'Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.\n\n**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.',
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
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
            style: 'simple',
            explode: false,
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
            style: 'simple',
            explode: false,
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
            style: 'simple',
            explode: false,
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
            style: 'simple',
            explode: false,
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
            style: 'simple',
            explode: false,
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
