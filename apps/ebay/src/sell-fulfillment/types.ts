type Address = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  countryCode?: string | undefined
  county?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type PhoneNumber = { phoneNumber?: string | undefined }
type ExtendedContact = {
  companyName?: string | undefined
  contactAddress?: Address | undefined
  email?: string | undefined
  fullName?: string | undefined
  primaryPhone?: PhoneNumber | undefined
}
type TaxAddress = {
  city?: string | undefined
  countryCode?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type TaxIdentifier = {
  issuingCountry?: string | undefined
  taxIdentifierType?: string | undefined
  taxpayerId?: string | undefined
}
type Buyer = {
  buyerRegistrationAddress?: ExtendedContact | undefined
  taxAddress?: TaxAddress | undefined
  taxIdentifier?: TaxIdentifier | undefined
  username?: string | undefined
}
type CancelRequest = {
  cancelCompletedDate?: string | undefined
  cancelInitiator?: string | undefined
  cancelReason?: string | undefined
  cancelRequestId?: string | undefined
  cancelRequestState?: string | undefined
  cancelRequestedDate?: string | undefined
}
type CancelStatus = {
  cancelRequests?: CancelRequest[] | undefined
  cancelState?: string | undefined
  cancelledDate?: string | undefined
}
type PickupStep = { merchantLocationKey?: string | undefined }
type ShippingStep = {
  shipTo?: ExtendedContact | undefined
  shipToReferenceId?: string | undefined
  shippingCarrierCode?: string | undefined
  shippingServiceCode?: string | undefined
}
type FulfillmentStartInstruction = {
  ebaySupportedFulfillment?: boolean | undefined
  finalDestinationAddress?: Address | undefined
  fulfillmentInstructionsType?: string | undefined
  maxEstimatedDeliveryDate?: string | undefined
  minEstimatedDeliveryDate?: string | undefined
  pickupStep?: PickupStep | undefined
  shippingStep?: ShippingStep | undefined
}
type Amount = {
  convertedFromCurrency?: string | undefined
  convertedFromValue?: string | undefined
  currency?: string | undefined
  value?: string | undefined
}
type AppliedPromotion = {
  description?: string | undefined
  discountAmount?: Amount | undefined
  promotionId?: string | undefined
}
type DeliveryCost = {
  discountAmount?: Amount | undefined
  handlingCost?: Amount | undefined
  importCharges?: Amount | undefined
  shippingCost?: Amount | undefined
  shippingIntermediationFee?: Amount | undefined
}
type EbayTaxReference = { name?: string | undefined; value?: string | undefined }
type EbayCollectAndRemitTax = {
  amount?: Amount | undefined
  collectionMethod?: string | undefined
  ebayReference?: EbayTaxReference | undefined
  taxType?: string | undefined
}
type EbayCollectedCharges = { ebayShipping?: Amount | undefined }
type GiftDetails = {
  message?: string | undefined
  recipientEmail?: string | undefined
  senderName?: string | undefined
}
type ItemLocation = {
  countryCode?: string | undefined
  location?: string | undefined
  postalCode?: string | undefined
}
type LineItemFulfillmentInstructions = {
  guaranteedDelivery?: boolean | undefined
  maxEstimatedDeliveryDate?: string | undefined
  minEstimatedDeliveryDate?: string | undefined
  shipByDate?: string | undefined
}
type NameValuePair = { name?: string | undefined; value?: string | undefined }
type TrackingInfo = {
  shipmentTrackingNumber?: string | undefined
  shippingCarrierCode?: string | undefined
}
type LinkedOrderLineItem = {
  lineItemAspects?: NameValuePair[] | undefined
  lineItemId?: string | undefined
  maxEstimatedDeliveryDate?: string | undefined
  minEstimatedDeliveryDate?: string | undefined
  orderId?: string | undefined
  sellerId?: string | undefined
  shipments?: TrackingInfo[] | undefined
  title?: string | undefined
}
type LineItemProperties = {
  buyerProtection?: boolean | undefined
  fromBestOffer?: boolean | undefined
  soldViaAdCampaign?: boolean | undefined
}
type LineItemRefund = {
  amount?: Amount | undefined
  refundDate?: string | undefined
  refundId?: string | undefined
  refundReferenceId?: string | undefined
}
type Tax = { amount?: Amount | undefined; taxType?: string | undefined }
type LineItem = {
  appliedPromotions?: AppliedPromotion[] | undefined
  deliveryCost?: DeliveryCost | undefined
  discountedLineItemCost?: Amount | undefined
  ebayCollectAndRemitTaxes?: EbayCollectAndRemitTax[] | undefined
  ebayCollectedCharges?: EbayCollectedCharges | undefined
  giftDetails?: GiftDetails | undefined
  itemLocation?: ItemLocation | undefined
  legacyItemId?: string | undefined
  legacyVariationId?: string | undefined
  lineItemCost?: Amount | undefined
  lineItemFulfillmentInstructions?: LineItemFulfillmentInstructions | undefined
  lineItemFulfillmentStatus?: string | undefined
  lineItemId?: string | undefined
  linkedOrderLineItems?: LinkedOrderLineItem[] | undefined
  listingMarketplaceId?: string | undefined
  properties?: LineItemProperties | undefined
  purchaseMarketplaceId?: string | undefined
  quantity?: number | undefined
  refunds?: LineItemRefund[] | undefined
  sku?: string | undefined
  soldFormat?: string | undefined
  taxes?: Tax[] | undefined
  title?: string | undefined
  total?: Amount | undefined
  variationAspects?: NameValuePair[] | undefined
}
type SellerActionsToRelease = { sellerActionToRelease?: string | undefined }
type PaymentHold = {
  expectedReleaseDate?: string | undefined
  holdAmount?: Amount | undefined
  holdReason?: string | undefined
  holdState?: string | undefined
  releaseDate?: string | undefined
  sellerActionsToRelease?: SellerActionsToRelease[] | undefined
}
type Payment = {
  amount?: Amount | undefined
  paymentDate?: string | undefined
  paymentHolds?: PaymentHold[] | undefined
  paymentMethod?: string | undefined
  paymentReferenceId?: string | undefined
  paymentStatus?: string | undefined
}
type OrderRefund = {
  amount?: Amount | undefined
  refundDate?: string | undefined
  refundId?: string | undefined
  refundReferenceId?: string | undefined
  refundStatus?: string | undefined
}
type PaymentSummary = {
  payments?: Payment[] | undefined
  refunds?: OrderRefund[] | undefined
  totalDueSeller?: Amount | undefined
}
type PricingSummary = {
  adjustment?: Amount | undefined
  deliveryCost?: Amount | undefined
  deliveryDiscount?: Amount | undefined
  fee?: Amount | undefined
  priceDiscount?: Amount | undefined
  priceSubtotal?: Amount | undefined
  tax?: Amount | undefined
  total?: Amount | undefined
}
type PostSaleAuthenticationProgram = {
  outcomeReason?: string | undefined
  status?: string | undefined
}
type EbayInternationalShipping = { returnsManagedBy?: string | undefined }
type EbayShipping = { shippingLabelProvidedBy?: string | undefined }
type EbayVaultProgram = { fulfillmentType?: string | undefined }
type EbayFulfillmentProgram = { fulfilledBy?: string | undefined }
type Program = {
  authenticityVerification?: PostSaleAuthenticationProgram | undefined
  ebayInternationalShipping?: EbayInternationalShipping | undefined
  ebayShipping?: EbayShipping | undefined
  ebayVault?: EbayVaultProgram | undefined
  fulfillmentProgram?: EbayFulfillmentProgram | undefined
}
type Order = {
  buyer?: Buyer | undefined
  buyerCheckoutNotes?: string | undefined
  cancelStatus?: CancelStatus | undefined
  creationDate?: string | undefined
  ebayCollectAndRemitTax?: boolean | undefined
  fulfillmentHrefs?: string[] | undefined
  fulfillmentStartInstructions?: FulfillmentStartInstruction[] | undefined
  lastModifiedDate?: string | undefined
  legacyOrderId?: string | undefined
  lineItems?: LineItem[] | undefined
  orderFulfillmentStatus?: string | undefined
  orderId?: string | undefined
  orderPaymentStatus?: string | undefined
  paymentSummary?: PaymentSummary | undefined
  pricingSummary?: PricingSummary | undefined
  program?: Program | undefined
  salesRecordReference?: string | undefined
  sellerId?: string | undefined
  totalFeeBasisAmount?: Amount | undefined
  totalMarketplaceFee?: Amount | undefined
}
type ErrorParameter = { name?: string | undefined; value?: string | undefined }
type Error = {
  category?: string | undefined
  domain?: string | undefined
  errorId?: number | undefined
  inputRefIds?: string[] | undefined
  longMessage?: string | undefined
  message?: string | undefined
  outputRefIds?: string[] | undefined
  parameters?: ErrorParameter[] | undefined
  subdomain?: string | undefined
}
type OrderSearchPagedCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  orders?: Order[] | undefined
  prev?: string | undefined
  total?: number | undefined
  warnings?: Error[] | undefined
}
type LineItemReference = { lineItemId?: string | undefined; quantity?: number | undefined }
type ShippingFulfillment = {
  fulfillmentId?: string | undefined
  lineItems?: LineItemReference[] | undefined
  shipmentTrackingNumber?: string | undefined
  shippedDate?: string | undefined
  shippingCarrierCode?: string | undefined
}
type ShippingFulfillmentPagedCollection = {
  fulfillments?: ShippingFulfillment[] | undefined
  total?: number | undefined
  warnings?: Error[] | undefined
}
type ShippingFulfillmentDetails = {
  lineItems?: LineItemReference[] | undefined
  shippedDate?: string | undefined
  shippingCarrierCode?: string | undefined
  trackingNumber?: string | undefined
}
type SimpleAmount = { currency?: string | undefined; value?: string | undefined }
type LegacyReference = {
  legacyItemId?: string | undefined
  legacyTransactionId?: string | undefined
}
type RefundItem = {
  legacyReference?: LegacyReference | undefined
  lineItemId?: string | undefined
  refundAmount?: SimpleAmount | undefined
}
type IssueRefundRequest = {
  comment?: string | undefined
  orderLevelRefundAmount?: SimpleAmount | undefined
  reasonForRefund?: string | undefined
  refundItems?: RefundItem[] | undefined
}
type Refund = { refundId?: string | undefined; refundStatus?: string | undefined }
type InfoFromBuyer = {
  note?: string | undefined
  returnShipmentTracking?: TrackingInfo[] | undefined
}
type FileInfo = {
  fileId?: string | undefined
  fileType?: string | undefined
  name?: string | undefined
  uploadedDate?: string | undefined
}
type OrderLineItems = { itemId?: string | undefined; lineItemId?: string | undefined }
type DisputeEvidence = {
  evidenceId?: string | undefined
  evidenceType?: string | undefined
  files?: FileInfo[] | undefined
  lineItems?: OrderLineItems[] | undefined
  providedDate?: string | undefined
  requestDate?: string | undefined
  respondByDate?: string | undefined
  shipmentTracking?: TrackingInfo[] | undefined
}
type EvidenceRequest = {
  evidenceId?: string | undefined
  evidenceType?: string | undefined
  lineItems?: OrderLineItems[] | undefined
  requestDate?: string | undefined
  respondByDate?: string | undefined
}
type DisputeAmount = {
  convertedFromCurrency?: string | undefined
  convertedFromValue?: string | undefined
  currency?: string | undefined
  exchangeRate?: string | undefined
  value?: string | undefined
}
type MonetaryTransaction = {
  amount?: DisputeAmount | undefined
  date?: string | undefined
  reason?: string | undefined
  type?: string | undefined
}
type PaymentDisputeOutcomeDetail = {
  fees?: SimpleAmount | undefined
  protectedAmount?: SimpleAmount | undefined
  protectionStatus?: string | undefined
  reasonForClosure?: string | undefined
  recoupAmount?: SimpleAmount | undefined
  totalFeeCredit?: SimpleAmount | undefined
}
type Phone = { countryCode?: string | undefined; number?: string | undefined }
type ReturnAddress = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fullName?: string | undefined
  postalCode?: string | undefined
  primaryPhone?: Phone | undefined
  stateOrProvince?: string | undefined
}
type PaymentDispute = {
  amount?: SimpleAmount | undefined
  availableChoices?: string[] | undefined
  buyerProvided?: InfoFromBuyer | undefined
  buyerUsername?: string | undefined
  closedDate?: string | undefined
  evidence?: DisputeEvidence[] | undefined
  evidenceRequests?: EvidenceRequest[] | undefined
  lineItems?: OrderLineItems[] | undefined
  monetaryTransactions?: MonetaryTransaction[] | undefined
  note?: string | undefined
  openDate?: string | undefined
  orderId?: string | undefined
  paymentDisputeId?: string | undefined
  paymentDisputeStatus?: string | undefined
  reason?: string | undefined
  resolution?: PaymentDisputeOutcomeDetail | undefined
  respondByDate?: string | undefined
  returnAddress?: ReturnAddress | undefined
  revision?: number | undefined
  sellerResponse?: string | undefined
}
type AcceptPaymentDisputeRequest = {
  returnAddress?: ReturnAddress | undefined
  revision?: number | undefined
}
type PaymentDisputeActivity = {
  activityDate?: string | undefined
  activityType?: string | undefined
  actor?: string | undefined
}
type PaymentDisputeActivityHistory = { activity?: PaymentDisputeActivity[] | undefined }
type FileEvidence = { fileId?: string | undefined }
type AddEvidencePaymentDisputeRequest = {
  evidenceType?: string | undefined
  files?: FileEvidence[] | undefined
  lineItems?: OrderLineItems[] | undefined
}
type AddEvidencePaymentDisputeResponse = { evidenceId?: string | undefined }
type ContestPaymentDisputeRequest = {
  note?: string | undefined
  returnAddress?: ReturnAddress | undefined
  revision?: number | undefined
}
type UpdateEvidencePaymentDisputeRequest = {
  evidenceId?: string | undefined
  evidenceType?: string | undefined
  files?: FileEvidence[] | undefined
  lineItems?: OrderLineItems[] | undefined
}
type PaymentDisputeSummary = {
  amount?: SimpleAmount | undefined
  buyerUsername?: string | undefined
  closedDate?: string | undefined
  openDate?: string | undefined
  orderId?: string | undefined
  paymentDisputeId?: string | undefined
  paymentDisputeStatus?: string | undefined
  reason?: string | undefined
  respondByDate?: string | undefined
}
type DisputeSummaryResponse = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  paymentDisputeSummaries?: PaymentDisputeSummary[] | undefined
  prev?: string | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/order': {
      $get:
        | {
            input: {
              query: {
                fieldGroups?: string | undefined
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                orderIds?: string | undefined
              }
            }
            output: OrderSearchPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fieldGroups?: string | undefined
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                orderIds?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                fieldGroups?: string | undefined
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
                orderIds?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/order/:orderId': {
      $get:
        | {
            input: { param: { orderId: string } } & { query: { fieldGroups?: string | undefined } }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & { query: { fieldGroups?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { orderId: string } } & { query: { fieldGroups?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & { query: { fieldGroups?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/order/:orderId/shipping_fulfillment': {
      $get:
        | {
            input: { param: { orderId: string } }
            output: ShippingFulfillmentPagedCollection
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { orderId: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { orderId: string } } & { json: ShippingFulfillmentDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { orderId: string } } & { json: ShippingFulfillmentDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { orderId: string } } & { json: ShippingFulfillmentDetails }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { orderId: string } } & { json: ShippingFulfillmentDetails }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/order/:orderId/shipping_fulfillment/:fulfillmentId': {
      $get:
        | {
            input: { param: { fulfillmentId: string; orderId: string } }
            output: ShippingFulfillment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fulfillmentId: string; orderId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fulfillmentId: string; orderId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fulfillmentId: string; orderId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/order/:order_id/issue_refund': {
      $post:
        | {
            input: { param: { order_id: string } } & { json: IssueRefundRequest }
            output: Refund
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & { json: IssueRefundRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { order_id: string } } & { json: IssueRefundRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { order_id: string } } & { json: IssueRefundRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { order_id: string } } & { json: IssueRefundRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { order_id: string } } & { json: IssueRefundRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id': {
      $get:
        | {
            input: { param: { payment_dispute_id: string } }
            output: PaymentDispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/accept': {
      $post:
        | {
            input: { param: { payment_dispute_id: string } } & { json: AcceptPaymentDisputeRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_dispute_id: string } } & { json: AcceptPaymentDisputeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } } & { json: AcceptPaymentDisputeRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } } & { json: AcceptPaymentDisputeRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { payment_dispute_id: string } } & { json: AcceptPaymentDisputeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/activity': {
      $get:
        | {
            input: { param: { payment_dispute_id: string } }
            output: PaymentDisputeActivityHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/add_evidence': {
      $post:
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: AddEvidencePaymentDisputeRequest
            }
            output: AddEvidencePaymentDisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: AddEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: AddEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: AddEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: AddEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/contest': {
      $post:
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: ContestPaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: ContestPaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: ContestPaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: ContestPaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: ContestPaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/fetch_evidence_content': {
      $get:
        | {
            input: { param: { payment_dispute_id: string } } & {
              query: { evidence_id: string; file_id: string }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              query: { evidence_id: string; file_id: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              query: { evidence_id: string; file_id: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              query: { evidence_id: string; file_id: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/update_evidence': {
      $post:
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: UpdateEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: UpdateEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: UpdateEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: UpdateEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { payment_dispute_id: string } } & {
              json: UpdateEvidencePaymentDisputeRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute/:payment_dispute_id/upload_evidence_file': {
      $post:
        | {
            input: { param: { payment_dispute_id: string } }
            output: FileEvidence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { payment_dispute_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_dispute_summary': {
      $get:
        | {
            input: {
              query: {
                order_id?: string | undefined
                buyer_username?: string | undefined
                open_date_from?: string | undefined
                open_date_to?: string | undefined
                payment_dispute_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: DisputeSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                order_id?: string | undefined
                buyer_username?: string | undefined
                open_date_from?: string | undefined
                open_date_to?: string | undefined
                payment_dispute_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                order_id?: string | undefined
                buyer_username?: string | undefined
                open_date_from?: string | undefined
                open_date_to?: string | undefined
                payment_dispute_status?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
