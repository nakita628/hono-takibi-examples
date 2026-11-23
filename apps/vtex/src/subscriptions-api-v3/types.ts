type Status = 0 | 1 | 2 | 3
type SubscriptionCycleItemContext = {
  cycleCount?: number | undefined
  isSkipped?: boolean | undefined
  quantity?: number | undefined
  skuId?: (string | null) | undefined
  status?: Status | undefined
  subscriptionItemId?: (string | null) | undefined
}
type SubscriptionCycleContext = {
  addressId?: (string | null) | undefined
  addressType?: (string | null) | undefined
  items?: (SubscriptionCycleItemContext[] | null) | undefined
  paymentAccountId?: (string | null) | undefined
  paymentSystem?: (string | null) | undefined
  paymentSystemGroup?: (string | null) | undefined
  paymentSystemName?: (string | null) | undefined
}
type SubscriptionCycleOrderInfo = {
  orderGroup?: (string | null) | undefined
  orderId?: (string | null) | undefined
  paymentURL?: (string | null) | undefined
  value?: bigint | undefined
}
type ItemSimulationStatus = 0 | 1 | 2 | 3 | 4
type SimulationItemResult = {
  id?: (string | null) | undefined
  quantity?: number | undefined
  status?: ItemSimulationStatus | undefined
  statusName?: (string | null) | undefined
  unitPrice?: (bigint | null) | undefined
}
type SubscriptionCycleResponse = {
  context?: SubscriptionCycleContext | undefined
  customerEmail?: (string | null) | undefined
  cycleCount?: number | undefined
  date?: string | undefined
  id?: (string | null) | undefined
  isInRetry?: boolean | undefined
  lastUpdate?: string | undefined
  message?: (string | null) | undefined
  orderInfo?: SubscriptionCycleOrderInfo | undefined
  simulationItems?: (SimulationItemResult[] | null) | undefined
  status?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
}
type SubscriptionItemResponse = {
  id: string | null
  isSkipped: boolean
  manualPrice?: (number | null) | undefined
  originalOrderId?: (string | null) | undefined
  quantity: number
  skuId: string | null
  status: string | null
}
type FrequencyResponse = { interval: number; periodicity: string | null }
type PurchaseDay =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 999
  | -6
  | -5
  | -4
  | -3
  | -2
  | -1
type ValidityResponse = { begin: string; end?: (string | null) | undefined }
type PlanResponse = {
  frequency: FrequencyResponse
  id: string | null
  purchaseDay: PurchaseDay
  validity: ValidityResponse
}
type PaymentMethodResponse = {
  installments?: (number | null) | undefined
  paymentAccountId?: (string | null) | undefined
  paymentSystem: string | null
}
type PurchaseSettingsResponse = {
  currencyCode: string | null
  paymentMethod: PaymentMethodResponse
}
type ShippingAddressResponse = { addressId: string | null; addressType: string | null }
type SubscriptionGroupResponse = {
  createdAt: string
  customerEmail: string | null
  customerId: string | null
  cycleCount: number
  id: string | null
  isSkipped: boolean
  items: SubscriptionItemResponse[] | null
  lastPurchaseDate?: (string | null) | undefined
  lastUpdate: string
  nextPurchaseDate: string
  plan: PlanResponse
  purchaseSettings: PurchaseSettingsResponse
  shippingAddress: ShippingAddressResponse
  status: string | null
  title?: (string | null) | undefined
}
type SubscriptionThinItemRequest = {
  manualPrice?: (number | null) | undefined
  quantity?: number | undefined
  skuId?: (string | null) | undefined
}
type FrequencyRequest = { interval: number; periodicity: string | null }
type ValidityRequest = { begin?: (string | null) | undefined; end?: (string | null) | undefined }
type PlanThinRequest = {
  frequency: FrequencyRequest
  id: string | null
  purchaseDay: string | null
  validity?: ValidityRequest | undefined
}
type PaymentMethodThinRequest = {
  installments?: (number | null) | undefined
  paymentAccountId?: (string | null) | undefined
  paymentSystem: string | null
}
type PurchaseSettingsThinRequest = { paymentMethod: PaymentMethodThinRequest; salesChannel: string }
type ShippingAddress = { addressId: string | null; addressType: string | null }
type SubscriptionGroupRequest = {
  catalogAttachment?: (string | null) | undefined
  customerEmail: string | null
  items: SubscriptionThinItemRequest[] | null
  nextPurchaseDate?: (string | null) | undefined
  plan: PlanThinRequest
  purchaseSettings: PurchaseSettingsThinRequest
  shippingAddress: ShippingAddress
  status?: (string | null) | undefined
  title?: (string | null) | undefined
}
type ShippingEstimate = {
  allItemsMatched?: boolean | undefined
  estimate?: (string | null) | undefined
  estimateDeliveryDate?: (string | null) | undefined
  name?: (string | null) | undefined
  nextPurchaseDate?: string | undefined
}
type ItemAttachment = {
  content?: ({ [x: string]: string } | null) | undefined
  name?: (string | null) | undefined
}
type PriceTag = {
  identifier?: (string | null) | undefined
  isPercentual?: boolean | undefined
  name?: (string | null) | undefined
  rawValue?: number | undefined
  valueAsInt?: bigint | undefined
}
type OrderItem = {
  attachments?: (ItemAttachment[] | null) | undefined
  id?: (string | null) | undefined
  isGift?: boolean | undefined
  name?: (string | null) | undefined
  price?: (bigint | null) | undefined
  priceTags?: (PriceTag[] | null) | undefined
  quantity?: number | undefined
  seller?: (string | null) | undefined
  sellingPrice?: (bigint | null) | undefined
  unitMultiplier?: (number | null) | undefined
}
type LogisticsInfoDeliveryWindow = {
  endDateUtc?: string | undefined
  price?: bigint | undefined
  startDateUtc?: string | undefined
}
type LogisticsInfoSLA = {
  availableDeliveryWindows?: (LogisticsInfoDeliveryWindow[] | null) | undefined
  deliveryChannel?: (string | null) | undefined
  deliveryWindows?: (LogisticsInfoDeliveryWindow[] | null) | undefined
  id?: (string | null) | undefined
  lockTtl?: (string | null) | undefined
  pickupPointId?: (string | null) | undefined
  price?: number | undefined
  shippingEstimate?: (string | null) | undefined
}
type LogisticsInfo = {
  addressId?: (string | null) | undefined
  deliveryWindow?: LogisticsInfoDeliveryWindow | undefined
  itemIndex?: number | undefined
  lockTtl?: (string | null) | undefined
  pickupId?: (string | null) | undefined
  price?: number | undefined
  quantity?: number | undefined
  selectedDeliveryChannel?: (string | null) | undefined
  selectedSla?: (string | null) | undefined
  shippingEstimate?: (string | null) | undefined
  slAs?: (LogisticsInfoSLA[] | null) | undefined
}
type SimulateMessageResponse = {
  code?: (string | null) | undefined
  status?: (string | null) | undefined
  text?: (string | null) | undefined
}
type PaymentField = { name?: (string | null) | undefined; value?: (string | null) | undefined }
type Payment = {
  accountId?: (string | null) | undefined
  bin?: (string | null) | undefined
  cardNumber?: (string | null) | undefined
  fields?: (PaymentField[] | null) | undefined
  group?: (string | null) | undefined
  id?: (string | null) | undefined
  installments?: number | undefined
  parentAccountId?: (string | null) | undefined
  paymentSystem?: (string | null) | undefined
  referenceValue?: bigint | undefined
  url?: (string | null) | undefined
  value?: bigint | undefined
}
type Transaction = { isActive?: boolean | undefined; payments?: (Payment[] | null) | undefined }
type PaymentData = {
  payments?: (Payment[] | null) | undefined
  transactions?: (Transaction[] | null) | undefined
}
type PurchaseContextAvailableGiftResponse = {
  attachments?: (ItemAttachment[] | null) | undefined
  id?: (string | null) | undefined
  isGift?: boolean | undefined
  isSelected?: boolean | undefined
  name?: (string | null) | undefined
  price?: (bigint | null) | undefined
  priceTags?: (PriceTag[] | null) | undefined
  quantity?: number | undefined
  seller?: (string | null) | undefined
  sellingPrice?: (bigint | null) | undefined
  unitMultiplier?: (number | null) | undefined
}
type PurchaseContextSelectableGiftsResponse = {
  availableGifts?: (PurchaseContextAvailableGiftResponse[] | null) | undefined
  availableQuantity?: number | undefined
  id?: (string | null) | undefined
}
type TotalizationResponse = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  valueAsInt?: bigint | undefined
}
type SimulateResponse = {
  country?: (string | null) | undefined
  items?: (OrderItem[] | null) | undefined
  logisticsInfo?: (LogisticsInfo[] | null) | undefined
  messages?: (SimulateMessageResponse[] | null) | undefined
  paymentData?: PaymentData | undefined
  postalCode?: (string | null) | undefined
  selectableGiftsResponse?: (PurchaseContextSelectableGiftsResponse[] | null) | undefined
  simulationItems?: (SimulationItemResult[] | null) | undefined
  totals?: (TotalizationResponse[] | null) | undefined
}
type Totalization = { id?: (string | null) | undefined; value?: number | undefined }
type SimulateResponseVO = {
  shippingEstimate?: ShippingEstimate | undefined
  simulateResponse?: SimulateResponse | undefined
  simulationItems?: (SimulationItemResult[] | null) | undefined
  totals?: (Totalization[] | null) | undefined
}
type SubscriptionUpdateRequestV3 = {
  isSkipped?: (boolean | null) | undefined
  plan?: PlanThinRequest | undefined
  purchaseSettings?: PurchaseSettingsThinRequest | undefined
  shippingAddress?: ShippingAddress | undefined
  status?: (string | null) | undefined
  title?: (string | null) | undefined
}
type UpdateItemInput = {
  isSkipped?: (boolean | null) | undefined
  manualPrice?: (number | null) | undefined
  quantity?: number | undefined
  status?: (string | null) | undefined
}
type Periodicity = 0 | 1 | 2 | 3 | 4
type Frequency = {
  interval?: number | undefined
  periodicity?: Periodicity | undefined
  periodicityAsString?: (string | null) | undefined
}
type StorePlan = {
  frequencies?: (Frequency[] | null) | undefined
  id?: (string | null) | undefined
}
type SubscriptionReportParam = {
  name?: (string | null) | undefined
  type?: (string | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type SubscriptionReport = {
  account?: (string | null) | undefined
  description?: (string | null) | undefined
  entity?: (string | null) | undefined
  key?: (string | null) | undefined
  name?: (string | null) | undefined
  params?: (SubscriptionReportParam[] | null) | undefined
  query?: (string | null) | undefined
  requesterEmail?: (string | null) | undefined
  schema?: (string | null) | undefined
}
type ReportResponse = {
  canceled?: boolean | undefined
  completedDate?: (string | null) | undefined
  email?: (string | null) | undefined
  enqueueDate?: (string | null) | undefined
  errorCount?: (bigint | null) | undefined
  finished?: boolean | undefined
  id?: (string | null) | undefined
  lastErrorMessage?: (string | null) | undefined
  lastUpdateTime?: (string | null) | undefined
  linkToDownload?: (string | null) | undefined
  outputType?: (string | null) | undefined
  percentageProcessed?: bigint | undefined
  recordsProcessed?: bigint | undefined
  recordsSum?: (bigint | null) | undefined
  startDate?: (string | null) | undefined
  statusMessage?: (string | null) | undefined
  zipped?: boolean | undefined
}
type Settings = {
  defaultSla: string | null
  deliveryChannels: string[]
  executionHourInUtc: number
  isMultipleInstallmentsEnabledOnCreation: boolean
  isMultipleInstallmentsEnabledOnUpdate: boolean
  isUsingV3: boolean
  manualPriceAllowed: boolean
  onMigrationProcess: boolean
  orderCustomDataAppId: string
  postponeExpiration: boolean
  randomIdGeneration: boolean
  slaOption: string
  useItemPriceFromOriginalOrder: boolean
  workflowVersion: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/rns/pub/cycles': {
      $get:
        | {
            input: {
              query: {
                beginDate?: (string | null) | undefined
                endDate?: (string | null) | undefined
                subscriptionId?: (string | null) | undefined
                customerEmail?: (string | null) | undefined
                status?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionCycleResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                beginDate?: (string | null) | undefined
                endDate?: (string | null) | undefined
                subscriptionId?: (string | null) | undefined
                customerEmail?: (string | null) | undefined
                status?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionCycleResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                beginDate?: (string | null) | undefined
                endDate?: (string | null) | undefined
                subscriptionId?: (string | null) | undefined
                customerEmail?: (string | null) | undefined
                status?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionCycleResponse[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/cycles/:cycleId': {
      $get:
        | {
            input: { param: { cycleId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SubscriptionCycleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cycleId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SubscriptionCycleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cycleId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SubscriptionCycleResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/cycles/:cycleId/retry': {
      $post: {
        input: { param: { cycleId: string | null } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/rns/pub/subscriptions': {
      $get:
        | {
            input: {
              query: {
                customerEmail?: (string | null) | undefined
                status?: (string | null) | undefined
                addressId?: (string | null) | undefined
                paymentId?: (string | null) | undefined
                planId?: (string | null) | undefined
                nextPurchaseDate?: (string | null) | undefined
                originalOrderId?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionGroupResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                customerEmail?: (string | null) | undefined
                status?: (string | null) | undefined
                addressId?: (string | null) | undefined
                paymentId?: (string | null) | undefined
                planId?: (string | null) | undefined
                nextPurchaseDate?: (string | null) | undefined
                originalOrderId?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionGroupResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                customerEmail?: (string | null) | undefined
                status?: (string | null) | undefined
                addressId?: (string | null) | undefined
                paymentId?: (string | null) | undefined
                planId?: (string | null) | undefined
                nextPurchaseDate?: (string | null) | undefined
                originalOrderId?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionGroupResponse[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: SubscriptionGroupRequest
            }
            output: SubscriptionGroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: SubscriptionGroupRequest
            }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: SubscriptionGroupRequest
            }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/api/rns/pub/subscriptions/simulate': {
      $post:
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: SubscriptionGroupRequest
            }
            output: SimulateResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: SubscriptionGroupRequest
            }
            output: SimulateResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: SubscriptionGroupRequest
            }
            output: SimulateResponseVO
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/subscriptions/:id': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SubscriptionGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: SubscriptionUpdateRequestV3 }
            output: SubscriptionGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: SubscriptionUpdateRequestV3 }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: SubscriptionUpdateRequestV3 }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/subscriptions/:id/items': {
      $post:
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: SubscriptionThinItemRequest }
            output: SubscriptionGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: SubscriptionThinItemRequest }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: SubscriptionThinItemRequest }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/subscriptions/:id/items/:itemId': {
      $delete: {
        input: { param: { id: string | null; itemId: string | null } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch:
        | {
            input: { param: { id: string | null; itemId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: UpdateItemInput }
            output: SubscriptionGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null; itemId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: UpdateItemInput }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null; itemId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: UpdateItemInput }
            output: SubscriptionGroupResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/subscriptions/:id/simulate': {
      $post:
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SimulateResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SimulateResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: SimulateResponseVO
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pub/subscriptions/:subscriptionId/conversation-message': {
      $get: {
        input: { param: { subscriptionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          attachmentNames?: string[] | undefined
          body?: string | undefined
          date?: string | undefined
          firstWords?: string | undefined
          from?:
            | {
                aliasMaskType?: string | undefined
                conversationRelatedTo?: string | undefined
                conversationSubject?: string | undefined
                email?: string | undefined
                emailAlias?: string | undefined
                name?: string | undefined
                role?: string | undefined
              }
            | undefined
          hasAttachment?: boolean | undefined
          id?: string | undefined
          subject?: string | undefined
          to?:
            | {
                aliasMaskType?: string | undefined
                conversationRelatedTo?: string | undefined
                conversationSubject?: string | undefined
                email?: string | undefined
                emailAlias?: string | undefined
                name?: string | undefined
                role?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rns/pvt/plans': {
      $get:
        | {
            input: {
              query: {
                periodicity?: (string | null) | undefined
                interval?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: StorePlan[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                periodicity?: (string | null) | undefined
                interval?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: StorePlan[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                periodicity?: (string | null) | undefined
                interval?: (string | null) | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: StorePlan[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pvt/plans/:id': {
      $get:
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: StorePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: StorePlan
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: StorePlan
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pvt/reports': {
      $get:
        | {
            input: { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionReport[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionReport[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } }
            output: SubscriptionReport[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pvt/reports/:reportName/documents': {
      $post:
        | {
            input: { param: { reportName: string | null } } & {
              query: {
                email?: string | undefined
                beginDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: ReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reportName: string | null } } & {
              query: {
                email?: string | undefined
                beginDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: ReportResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reportName: string | null } } & {
              query: {
                email?: string | undefined
                beginDate?: string | undefined
                endDate?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string } }
            output: ReportResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/pvt/reports/:reportName/documents/:documentId': {
      $get:
        | {
            input: { param: { reportName: string | null; documentId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: ReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reportName: string | null; documentId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: ReportResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reportName: string | null; documentId: string | null } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: ReportResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/rns/settings': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: Settings }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
