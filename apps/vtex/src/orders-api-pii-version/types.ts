type List = {
  ShippingEstimatedDate: string | null
  ShippingEstimatedDateMax: string | null
  ShippingEstimatedDateMin: string | null
  affiliateId: string
  authorizedDate: string | null
  callCenterOperatorName: string | null
  clientName: string
  creationDate: string
  currencyCode: string
  items: string | null
  lastMessageUnread: string | null
  listId: string | null
  listType: string | null
  marketPlaceOrderId: string | null
  orderId: string
  orderIsComplete: boolean
  origin: string
  paymentNames: string
  salesChannel: string
  sequence: string
  status: string
  statusDescription: string
  totalItems: number
  totalValue: number
  workflowInErrorState: boolean
  workflowInRetry: boolean
}
type Paging = { currentPage: number; pages: number; perPage: number; total: number }
type TotalItems = {
  Count: number
  Facets: string | null
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: bigint
}
type BRL = {
  Count: number
  Facets: string | null
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: bigint
}
type CurrencyCode = { BRL: BRL }
type Fulfillment = {
  Count: number
  Facets: string | null
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: number
}
type Marketplace1 = {
  Count: number
  Facets: string | null
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: bigint
}
type Origin = { Fulfillment: Fulfillment; Marketplace: Marketplace1 }
type Facets = { currencyCode: CurrencyCode; origin: Origin }
type TotalValue = {
  Count: number
  Facets: Facets
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: bigint
}
type Stats1 = { totalItems: TotalItems; totalValue: TotalValue }
type Stats = { stats: Stats1 }
type ListOrders = { facets: string[]; list: List[]; paging: Paging; stats: Stats }
type ItemsRemoved = {
  id: string
  name: string
  price: number
  quantity: number
  unitMultiplier: string | null
}
type Receipt = { date: string; orderId: string; receipt: string }
type ChangesDatum = {
  discountValue: number
  incrementValue: number
  itemsAdded: string[]
  itemsRemoved: ItemsRemoved[]
  reason: string
  receipt: Receipt
}
type ChangesAttachment = { changesData: ChangesDatum[]; id: string }
type ClientProfileData = {
  corporateDocument: string | null
  corporateName: string | null
  corporatePhone: string | null
  customerClass: string | null
  document: string
  documentType: string
  email: string
  firstName: string
  id: string
  isCorporate: boolean
  lastName: string
  phone: string
  stateInscription: string | null
  tradeName: string | null
  userProfileId: string
}
type Marketplace = { baseURL: string; isCertified: string | null; name: string }
type Payment = {
  cardHolder: string | null
  cardNumber: string | null
  connectorResponses: { [x: string]: unknown }
  cvv2: string | null
  dueDate: string
  expireMonth: string | null
  expireYear: string | null
  firstDigits: string | null
  giftCardCaption: string | null
  giftCardId: string | null
  giftCardName: string | null
  group: string
  id: string
  installments: number
  lastDigits: string | null
  paymentSystem: string
  paymentSystemName: string
  redemptionCode: string | null
  referenceValue: number
  tid: string | null
  url: string
  value: number
}
type Transaction = {
  isActive: boolean
  merchantName: string
  payments: Payment[]
  transactionId: string
}
type PaymentData = { transactions: Transaction[] }
type RatesAndBenefitsData = { id: string; rateAndBenefitsIdentifiers: string[] }
type Seller = { id: string; logo: string; name: string }
type Address = {
  addressId: string
  addressType: string
  city: string
  complement: string
  country: string
  geoCoordinates: string[]
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string | null
  state: string
  street: string
}
type DeliveryId = {
  courierId: string
  courierName: string
  dockId: string
  quantity: number
  warehouseId: string
}
type PickupStoreInfo = {
  additionalInfo: string | null
  address: string | null
  dockId: string | null
  friendlyName: string | null
  isPickupStore: boolean
}
type Sla = {
  deliveryChannel: string
  deliveryWindow: string | null
  id: string
  name: string
  pickupStoreInfo: PickupStoreInfo
  polygonName: string | null
  price: number
  shippingEstimate: string
}
type LogisticsInfo = {
  addressId: string
  deliveryChannel: string
  deliveryCompany: string
  deliveryIds: DeliveryId[]
  deliveryWindow: string | null
  itemIndex: number
  listPrice: number
  lockTTL: string
  pickupStoreInfo: PickupStoreInfo
  polygonName: string | null
  price: number
  selectedSla: string
  sellingPrice: number
  shippingEstimate: string
  shippingEstimateDate: string
  shipsTo: string[]
  slas: Sla[]
}
type ShippingData = {
  address: Address
  id: string
  logisticsInfo: LogisticsInfo[]
  selectedAddresses: Address[]
  trackingHints: string | null
}
type CurrencyFormatInfo = {
  CurrencyDecimalDigits: number
  CurrencyDecimalSeparator: string
  CurrencyGroupSeparator: string
  CurrencyGroupSize: number
  StartsWithCurrencySymbol: boolean
}
type StorePreferencesData = {
  countryCode: string
  currencyCode: string
  currencyFormatInfo: CurrencyFormatInfo
  currencyLocale: number
  currencySymbol: string
  timeZone: string
}
type Item1 = { itemIndex: string; price: number; quantity: number }
type InvoiceNotificationRequest = {
  cfop?: string | undefined
  courier?: (string | null) | undefined
  extraValue?: number | undefined
  invoiceKey?: (string | null) | undefined
  invoiceNumber: string
  invoiceUrl?: string | undefined
  invoiceValue: string
  issuedDate: string
  items: Item1[]
  trackingNumber?: (string | null) | undefined
  trackingUrl?: (string | null) | undefined
  type: string
  volumes?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/orders/extendsearch/orders': {
      $post: {
        input: { query: { f_hasInputInvoice?: boolean | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: { f_creationDate: string; page: number; per_page: number; q?: string | undefined }
        }
        output: ListOrders
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/orders/pvt/document/:orderId': {
      $get: {
        input: { param: { orderId: string } } & { query: { reason?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          affiliateId?: string | undefined
          allowCancellation?: boolean | undefined
          allowEdition?: boolean | undefined
          approvedBy?: string | undefined
          authorizedDate?: string | undefined
          callCenterOperatorData?: (string | null) | undefined
          cancelReason?: string | undefined
          cancelledBy?: string | undefined
          changesAttachment?: ChangesAttachment | undefined
          clientProfileData?: ClientProfileData | undefined
          commercialConditionData?: (string | null) | undefined
          creationDate?: string | undefined
          customData?: (string | null) | undefined
          emailTracked?: string | undefined
          followUpEmail?: string | undefined
          giftRegistryData?: (string | null) | undefined
          hostname?: string | undefined
          invoiceData?: ({ [x: string]: unknown } | null) | undefined
          invoicedDate?: string | undefined
          isCheckedIn?: boolean | undefined
          isCompleted?: boolean | undefined
          items?:
            | {
                additionalInfo?:
                  | {
                      brandId?: string | undefined
                      brandName?: string | undefined
                      dimension?: string | undefined
                      offeringInfo?: string | undefined
                      offeringType?: string | undefined
                      offeringTypeId?: string | undefined
                    }
                  | undefined
                attachments?: string[] | undefined
                availability?: string | undefined
                bundleItems?:
                  | {
                      id?: number | undefined
                      name?: string | undefined
                      price?: number | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                detailUrl?: string | undefined
                ean?: string | undefined
                id?: string | undefined
                imageUrl?: string | undefined
                isGift?: boolean | undefined
                listPrice?: number | undefined
                manualPrice?: number | undefined
                manualPriceAppliedBy?: string | undefined
                manufacturerCode?: string | undefined
                measurementUnit?: string | undefined
                modalType?: string | undefined
                name?: string | undefined
                parentAssemblyBinding?: string | undefined
                parentItemIndex?: number | undefined
                preSaleDate?: string | undefined
                price?: number | undefined
                priceDefinition?:
                  | {
                      calculatedSellingPrice?: number | undefined
                      sellingPrices?:
                        | { quantity?: number | undefined; value?: number | undefined }[]
                        | undefined
                      total?: number | undefined
                    }
                  | undefined
                priceTags?:
                  | {
                      identifier?: string | undefined
                      isPercentual?: boolean | undefined
                      name?: string | undefined
                      rawValue?: number | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                priceValidUntil?: string | undefined
                productCategories?: { '{ID}'?: string | undefined } | undefined
                productCategoryIds?: string | undefined
                productId?: string | undefined
                productRefId?: string | undefined
                quantity?: number | undefined
                refId?: string | undefined
                rewardValue?: number | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: number | undefined
                skuName?: string | undefined
                tax?: number | undefined
                uniqueId?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          lastChange?: string | undefined
          lastMessage?: (string | null) | undefined
          marketingData?: (string | null) | undefined
          marketplace?: Marketplace | undefined
          marketplaceItems?: string[] | undefined
          marketplaceOrderId?: string | undefined
          marketplaceServicesEndpoint?: string | undefined
          merchantName?: string | undefined
          openTextField?: (string | null) | undefined
          orderFormId?: string | undefined
          orderGroup?: string | undefined
          orderId?: string | undefined
          origin?: string | undefined
          packageAttachment?:
            | {
                packages?:
                  | {
                      cfop?: string | undefined
                      courier?: string | undefined
                      courierStatus?: string | undefined
                      embeddedInvoice?: string | undefined
                      invoiceKey?: string | undefined
                      invoiceNumber?: string | undefined
                      invoiceUrl?: string | undefined
                      invoiceValue?: number | undefined
                      issuanceDate?: string | undefined
                      items?:
                        | {
                            description?: string | undefined
                            itemIndex?: number | undefined
                            price?: number | undefined
                            quantity?: number | undefined
                            unitMultiplier?: number | undefined
                          }[]
                        | undefined
                      restitutions?:
                        | {
                            refund?:
                              | {
                                  items?:
                                    | {
                                        itemIndex?: string | undefined
                                        quantity?: number | undefined
                                      }[]
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      trackingNumber?: string | undefined
                      trackingUrl?: string | undefined
                      type?: string | undefined
                      volumes?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
          paymentData?: PaymentData | undefined
          ratesAndBenefitsData?: RatesAndBenefitsData | undefined
          roundingError?: number | undefined
          salesChannel?: string | undefined
          sellerOrderId?: string | undefined
          sellers?: Seller[] | undefined
          sequence?: string | undefined
          shippingData?: ShippingData | undefined
          status?: string | undefined
          statusDescription?: string | undefined
          storePreferencesData?: StorePreferencesData | undefined
          totals?:
            | { id?: string | undefined; name?: string | undefined; value?: number | undefined }[]
            | undefined
          value?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/orders/pvt/document/:orderId/actions/start-handling': {
      $post:
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/orders/pvt/document/:orderId/cancel': {
      $post:
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: { reason?: string | undefined } }
            output: {
              date?: string | undefined
              orderId?: string | undefined
              receipt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/orders/pvt/document/:orderId/invoices': {
      $post:
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: InvoiceNotificationRequest }
            output: {
              date?: string | undefined
              orderId?: string | undefined
              receipt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: InvoiceNotificationRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: InvoiceNotificationRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            } & { json: InvoiceNotificationRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/orders/pvt/document/:orderId/payment/:paymentId/notify-payment': {
      $post:
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
