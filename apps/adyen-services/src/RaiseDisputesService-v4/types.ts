type CertificationGuaranteedReservation = 'GR' | 'RC' | 'AR'
type ProductType = 'goods' | 'services'
type MerchantRefuseAdvise = 'MRRA' | 'MRRM' | 'MICNRM'
type ReturnMethod = 'faceToFace' | 'fedEx' | 'dhl' | 'ups' | 'postalService' | 'other'
type ServiceType = 'timeshare' | 'guaranteedReservation' | 'other'
type CancellingEntity = 'merchant' | 'cardholder'
type CancelledInfo = {
  attemptedToReturn?: boolean | undefined
  certificationGuaranteedReservation?: CertificationGuaranteedReservation | undefined
  dateOfAttemptedReturn?: string | undefined
  dateOfCancellation?: string | undefined
  dateOfReturn?: string | undefined
  dateOfService?: string | undefined
  dateReturnReceived?: string | undefined
  descriptionOfIssue?: string | undefined
  didCardholderCancelBeforeShipment?: boolean | undefined
  didCardholderReceiveGoods?: boolean | undefined
  didCardholderReturn?: boolean | undefined
  goodsOrServices: ProductType
  lastExpectedDate?: string | undefined
  merchantRefuseAdvise?: MerchantRefuseAdvise | undefined
  returnMethod?: ReturnMethod | undefined
  serviceType?: ServiceType | undefined
  shippingTrackingNumber?: string | undefined
  timeshareDate?: string | undefined
  wasCancellationPolicyProvided?: boolean | undefined
  whoCancelled?: CancellingEntity | undefined
}
type Amount = { currency: string; value: bigint }
type DuplicateInfo = {
  duplicateTransactionId: string
  sameCard: boolean
  sameIssuer?: boolean | undefined
}
type FraudInfo = {
  cardDoesNotBelongToCardholder: boolean
  cardWasCounterfeited: boolean
  descriptionOfIssue: string
  reportOnly?: boolean | undefined
}
type DisputeDueTo = 'notAsDescribed' | 'defectiveMerchandise'
type NotAsDescribedMerchantRefuseAdvise = 'MRRA' | 'MRRM' | 'MICNRM' | 'MNLER' | 'MNPCIR'
type NotAsDescribedInfo = {
  attemptedToReturn?: boolean | undefined
  dateAttemptedToReturn?: string | undefined
  dateOfCancellation?: string | undefined
  dateOfFirstNegotiations?: string | undefined
  dateOfReturn?: string | undefined
  dateReturnReceived?: string | undefined
  descriptionOfIssue: string
  didAttemptToResolve: boolean
  didCardholderReturn?: boolean | undefined
  didMerchantAcceptCancellation?: boolean | undefined
  disputeDueTo: DisputeDueTo
  evidenceOfNegotiationsWithMerchant?: boolean | undefined
  goodsOrServices?: ProductType | undefined
  isNonFiatOrNft?: boolean | undefined
  lastExpectedDate?: string | undefined
  reasonMerchantRefused?: NotAsDescribedMerchantRefuseAdvise | undefined
  resolutionProhibitedByLaw?: boolean | undefined
  returnMethod?: ReturnMethod | undefined
  shippingTrackingNumber?: string | undefined
  whoCancelled?: CancellingEntity | undefined
}
type NotDeliveredInfo = {
  agreedDeliveryLocation?: string | undefined
  dateOfCancellation?: string | undefined
  deliveredToWrongLocation?: boolean | undefined
  descriptionOfIssue: string
  didCardholderReturn?: boolean | undefined
  isDeliveryLate?: boolean | undefined
  isMerchantBankrupt?: boolean | undefined
  isNonFiatOrNft?: boolean | undefined
  lastExpectedDate: string
  whatWasNotDelivered: ProductType
  whoCancelled?: CancellingEntity | undefined
}
type SubType =
  | 'atmDispute'
  | 'cancelledGoodsServices'
  | 'cancelledRecurring'
  | 'creditNotProcessed'
  | 'counterfeit'
  | 'notAsDescribed'
type OtherInfo = { descriptionOfIssue: string; subType: SubType; whatWasPurchased: ProductType }
type DisputeStatus = 'draft' | 'submitted' | 'chargeback' | 'secondPresentment' | 'won' | 'closed'
type DisputeType = string
type DisputeResponse = {
  arn?: string | undefined
  cancelledInfo?: CancelledInfo | undefined
  description?: string | undefined
  disputedAmount?: Amount | undefined
  duplicateInfo?: DuplicateInfo | undefined
  fraudInfo?: FraudInfo | undefined
  id?: string | undefined
  notAsDescribedInfo?: NotAsDescribedInfo | undefined
  notDeliveredInfo?: NotDeliveredInfo | undefined
  otherInfo?: OtherInfo | undefined
  status?: DisputeStatus | undefined
  transactionId: string
  type: DisputeType
}
type InvalidField = { message: string; name: string; value: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type DisputeRequest = {
  cancelledInfo?: CancelledInfo | undefined
  description?: string | undefined
  disputedAmount?: Amount | undefined
  duplicateInfo?: DuplicateInfo | undefined
  fraudInfo?: FraudInfo | undefined
  notAsDescribedInfo?: NotAsDescribedInfo | undefined
  notDeliveredInfo?: NotDeliveredInfo | undefined
  otherInfo?: OtherInfo | undefined
  status?: DisputeStatus | undefined
  transactionId: string
  type: DisputeType
}
type AttachmentType = 'receipt' | 'correspondence' | 'other'
type DisputeAttachment = {
  attachmentType: AttachmentType
  content: string
  fileName: string
  id?: string | undefined
}
type AttachDocumentResponse = { attachmentId?: string | undefined }
type CancelledInfoUpdate = {
  attemptedToReturn?: (boolean | null) | undefined
  certificationGuaranteedReservation?:
    | CertificationGuaranteedReservation
    | ({ [x: string]: unknown } | null)
    | undefined
  dateOfAttemptedReturn?: (string | null) | undefined
  dateOfCancellation?: (string | null) | undefined
  dateOfReturn?: (string | null) | undefined
  dateOfService?: (string | null) | undefined
  dateReturnReceived?: (string | null) | undefined
  descriptionOfIssue?: (string | null) | undefined
  didCardholderCancelBeforeShipment?: (boolean | null) | undefined
  didCardholderReceiveGoods?: (boolean | null) | undefined
  didCardholderReturn?: (boolean | null) | undefined
  goodsOrServices?: ProductType | undefined
  lastExpectedDate?: (string | null) | undefined
  merchantRefuseAdvise?: MerchantRefuseAdvise | ({ [x: string]: unknown } | null) | undefined
  returnMethod?: ReturnMethod | ({ [x: string]: unknown } | null) | undefined
  serviceType?: ServiceType | ({ [x: string]: unknown } | null) | undefined
  shippingTrackingNumber?: (string | null) | undefined
  timeshareDate?: (string | null) | undefined
  wasCancellationPolicyProvided?: (boolean | null) | undefined
  whoCancelled?: CancellingEntity | ({ [x: string]: unknown } | null) | undefined
}
type PatchableDuplicateInfo = {
  duplicateTransactionId?: string | undefined
  sameCard?: boolean | undefined
  sameIssuer?: (boolean | null) | undefined
}
type PatchableFraudInfo = {
  cardDoesNotBelongToCardholder?: boolean | undefined
  cardWasCounterfeited?: boolean | undefined
  descriptionOfIssue?: string | undefined
  reportOnly?: (boolean | null) | undefined
}
type NotAsDescribedInfoUpdate = {
  attemptedToReturn?: (boolean | null) | undefined
  dateAttemptedToReturn?: (string | null) | undefined
  dateOfCancellation?: (string | null) | undefined
  dateOfFirstNegotiations?: (string | null) | undefined
  dateOfReturn?: (string | null) | undefined
  dateReturnReceived?: (string | null) | undefined
  descriptionOfIssue?: string | undefined
  didAttemptToResolve?: boolean | undefined
  didCardholderReturn?: (boolean | null) | undefined
  didMerchantAcceptCancellation?: (boolean | null) | undefined
  disputeDueTo?: DisputeDueTo | undefined
  evidenceOfNegotiationsWithMerchant?: (boolean | null) | undefined
  goodsOrServices?: ProductType | ({ [x: string]: unknown } | null) | undefined
  isNonFiatOrNft?: (boolean | null) | undefined
  lastExpectedDate?: (string | null) | undefined
  reasonMerchantRefused?:
    | NotAsDescribedMerchantRefuseAdvise
    | ({ [x: string]: unknown } | null)
    | undefined
  resolutionProhibitedByLaw?: (boolean | null) | undefined
  returnMethod?: ReturnMethod | ({ [x: string]: unknown } | null) | undefined
  shippingTrackingNumber?: (string | null) | undefined
  whoCancelled?: CancellingEntity | ({ [x: string]: unknown } | null) | undefined
}
type PatchableNotDeliveredInfo = {
  agreedDeliveryLocation?: (string | null) | undefined
  dateOfCancellation?: (string | null) | undefined
  deliveredToWrongLocation?: (boolean | null) | undefined
  descriptionOfIssue?: string | undefined
  didCardholderReturn?: (boolean | null) | undefined
  isDeliveryLate?: (boolean | null) | undefined
  isMerchantBankrupt?: (boolean | null) | undefined
  isNonFiatOrNft?: (boolean | null) | undefined
  lastExpectedDate?: string | undefined
  whatWasNotDelivered?: ProductType | undefined
  whoCancelled?: CancellingEntity | ({ [x: string]: unknown } | null) | undefined
}
type PatchableOtherInfo = {
  descriptionOfIssue?: string | undefined
  subType?: SubType | undefined
  whatWasPurchased?: ProductType | undefined
}
type PatchableDisputeRequest = {
  cancelledInfo?: CancelledInfoUpdate | ({ [x: string]: unknown } | null) | undefined
  duplicateInfo?: PatchableDuplicateInfo | ({ [x: string]: unknown } | null) | undefined
  fraudInfo?: PatchableFraudInfo | ({ [x: string]: unknown } | null) | undefined
  notAsDescribedInfo?: NotAsDescribedInfoUpdate | ({ [x: string]: unknown } | null) | undefined
  notDeliveredInfo?: PatchableNotDeliveredInfo | ({ [x: string]: unknown } | null) | undefined
  otherInfo?: PatchableOtherInfo | ({ [x: string]: unknown } | null) | undefined
  status?: DisputeStatus | ({ [x: string]: unknown } | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/disputes': {
      $get:
        | {
            input: {
              query: {
                status?: string | undefined
                paymentInstrument?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: DisputeResponse[][]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: string | undefined
                paymentInstrument?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                status?: string | undefined
                paymentInstrument?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                status?: string | undefined
                paymentInstrument?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: DisputeRequest }
            output: DisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DisputeRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DisputeRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DisputeRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/disputes/:disputeId/attachments': {
      $get:
        | {
            input: { param: { disputeId: string } }
            output: DisputeAttachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disputeId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { disputeId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { disputeId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { disputeId: string } } & { json: DisputeAttachment }
            output: AttachDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disputeId: string } } & { json: DisputeAttachment }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { disputeId: string } } & { json: DisputeAttachment }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { disputeId: string } } & { json: DisputeAttachment }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/disputes/:disputeId/attachments/:attachmentId': {
      $get:
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DisputeAttachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { disputeId: string; attachmentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/disputes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchableDisputeRequest }
            output: DisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PatchableDisputeRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PatchableDisputeRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PatchableDisputeRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
