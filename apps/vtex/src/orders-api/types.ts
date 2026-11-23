type ExportCompletedResponse = {
  cancelled: boolean
  completedDate: string
  dateOfRequest: string
  email: string
  filter: string
  hostUri: string
  id: string
  instanceId: string
  lasUpdateTime: string
  linkToDownload: string
  publishId: string
  query: string
  rowNumber: number
  rowsProcessed: number
  startDate: string
  utcTime: string
}
type ExportInProgressResponse = {
  cancelled: boolean
  completedDate: string
  dateOfRequest: string
  email: string
  filter: string
  hostUri: string
  id: string
  instanceId: string
  lasUpdateTime: string
  linkToDownload: string
  publishId: string
  query: string
  rowNumber: number
  rowsProcessed: number
  startDate: string
  utcTime: string
}
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
type BRL1 = {
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
type CurrencyCode1 = { BRL: BRL1 }
type Fulfillment1 = {
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
type Marketplace2 = {
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
type Origin1 = { Fulfillment: Fulfillment1; Marketplace: Marketplace2 }
type Facets1 = { currencyCode: CurrencyCode1; origin: Origin1 }
type TotalItems = {
  Count: number
  Facets: Facets1
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: number
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
  accountId: string
  bankIssuedInvoiceBarCodeNumber: string
  bankIssuedInvoiceBarCodeType: string
  bankIssuedInvoiceIdentificationNumber: string
  bankIssuedInvoiceIdentificationNumberFormatted: string
  billingAddress: { [x: string]: unknown }
  cardHolder: string | null
  cardNumber: string | null
  connectorResponses: { Message: string; ReturnCode: string; Tid: string; authId: string }
  cvv2: string | null
  dueDate: string
  expireMonth: string | null
  expireYear: string | null
  firstDigits: string | null
  giftCardAsDiscount: boolean
  giftCardCaption: string | null
  giftCardId: string | null
  giftCardName: string | null
  giftCardProvider: string
  group: string
  id: string
  installments: number
  koinUrl: string
  lastDigits: string | null
  parentAccountId: string
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
type PaymentData = {
  giftCards?: { [x: string]: unknown }[] | undefined
  transactions: Transaction[]
}
type RatesAndBenefitsData = { id: string; rateAndBenefitsIdentifiers: string[] }
type Seller = { fulfillmentEndpoint: string; id: string; logo: string; name: string }
type Address = {
  addressId: string
  addressType: string
  city: string
  complement: string
  country: string
  entityId: string | null
  geoCoordinates: string[]
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string | null
  state: string
  street: string
  versionId: string | null
}
type DeliveryId = {
  accountCarrierName: string
  courierId: string
  courierName: string
  dockId: string
  kitItemDetails: { [x: string]: unknown }[] | null
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
  lockTTL: string
  name: string
  pickupDistance: number
  pickupPointId: string
  pickupStoreInfo: PickupStoreInfo
  polygonName: string | null
  price: number
  shippingEstimate: string
  transitTime: string
}
type LogisticsInfo = {
  addressId: string
  deliveryChannel: string
  deliveryChannels: { id: string; stockBalance: number }[]
  deliveryCompany: string
  deliveryIds: DeliveryId[]
  deliveryWindow: string | null
  entityId: string
  itemIndex: number
  listPrice: number
  lockTTL: string
  pickupPointId: string
  pickupStoreInfo: PickupStoreInfo
  polygonName: string | null
  price: number
  selectedSla: string
  sellingPrice: number
  shippingEstimate: string
  shippingEstimateDate: string
  shipsTo: string[]
  slas: Sla[]
  transitTime: string
  versionId: string | null
}
type SelectedAddress = {
  addressId: string
  addressType: string
  city: string
  complement: string
  country: string
  entityId: string | null
  geoCoordinates: string[]
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string | null
  state: string
  street: string
  versionId: string | null
}
type ShippingData = {
  address: Address
  id: string
  logisticsInfo: LogisticsInfo[]
  selectedAddresses: SelectedAddress[]
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
type RegisterChangeRequest = {
  discountValue: number
  incrementValue: number
  itemsAdded?: { id: string; price: number; quantity: number }[] | undefined
  itemsRemoved?: { id: string; price: number; quantity: number }[] | undefined
  reason: string
  requestId: string
}
type RegisterChange = {
  date?: string | undefined
  orderId?: string | undefined
  receipt?: string | undefined
}
type From = {
  aliasMaskType: number
  conversationRelatedTo: string
  conversationSubject: string
  email: string
  emailAlias: string
  name: string
  role: string | null
}
type To = {
  aliasMaskType: number
  conversationRelatedTo: string
  conversationSubject: string
  email: string
  emailAlias: string
  name: string
  role: string
}
type GetConversation = {
  attachmentNames: string[]
  body: string
  date: string
  firstWords: string
  from: From
  hasAttachment: boolean
  id: string
  subject: string
  to: To[]
}
type AddLogRequest = { message: string; source: string }
type Item1 = { description?: string | undefined; id: string; price: number; quantity: number }
type InvoiceNotificationRequest = {
  courier?: (string | null) | undefined
  dispatchedDate?: (string | null) | undefined
  embeddedInvoice?: (string | null) | undefined
  invoiceKey?: (string | null) | undefined
  invoiceNumber: string | null
  invoiceUrl?: (string | null) | undefined
  invoiceValue: string
  issuanceDate: string
  items: Item1[]
  trackingNumber?: (string | null) | undefined
  trackingUrl?: (string | null) | undefined
  type: string
}
type UpdatepartialinvoiceSendTrackingNumberRequest = {
  courier: string | null
  dispatchedDate: string | null
  trackingNumber: string
  trackingUrl: string | null
}
type UpdatepartialinvoiceSendTrackingNumber = { date: string; orderId: string; receipt: string }
type Event = { city: string; date: string; description: string; state: string }
type UpdateTrackingStatusRequest = {
  deliveredDate: string | null
  events: Event[]
  isDelivered: boolean
}
type UpdateTrackingStatus = { date: string; orderId: string; receipt: string }
type ConnectorResponses = {
  Message: string | null
  ReturnCode: string | null
  Tid: string
  authId: string
}
type Payment1 = {
  cardHolder: string | null
  cardNumber: string | null
  connectorResponses: ConnectorResponses
  cvv2: string | null
  dueDate: string | null
  expireMonth: string | null
  expireYear: string | null
  firstDigits: string
  giftCardCaption: string | null
  giftCardId: string | null
  giftCardName: string | null
  group: string
  id: string
  installments: number
  lastDigits: string
  paymentSystem: string
  paymentSystemName: string
  redemptionCode: string | null
  referenceValue: number
  tid: string
  url: string | null
  value: number
}
type GetPaymenttransaction = {
  isActive: boolean
  merchantName: string
  payments: Payment1[]
  status: string
  transactionId: string
}
type Item2 = {
  description: string
  ean: string | null
  id: string
  price: number
  productId: string
  quantity: number
  refId: string | null
  seller: string
  sellingPrice: number
}
type List1 = {
  ShippingEstimatedDate: string | null
  ShippingEstimatedDateMax: string | null
  ShippingEstimatedDateMin: string | null
  affiliateId: string
  authorizedDate: string | null
  callCenterOperatorName: string | null
  clientName: string
  creationDate: string
  currencyCode: string | null
  items: Item2[] | null
  lastMessageUnread: string | null
  listId: string | null
  listType: string | null
  marketPlaceOrderId: string | null
  orderId: string
  orderIsComplete: boolean
  origin: string
  paymentNames: string | null
  salesChannel: string
  sequence: string
  status: string
  statusDescription: string
  totalItems: number
  totalValue: number
  workflowInErrorState: boolean
  workflowInRetry: boolean
}
type TotalItems1 = {
  Count: number
  Facets: { [x: string]: unknown }
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: number
}
type TotalValue1 = {
  Count: number
  Facets: { [x: string]: unknown }
  Max: number
  Mean: number
  Min: number
  Missing: number
  StdDev: number
  Sum: number
  SumOfSquares: number
}
type Stats3 = { totalItems: TotalItems1; totalValue: TotalValue1 }
type Stats2 = { stats: Stats3 }
type Userorderslist = { facets: string[]; list: List1[]; paging: Paging; stats: Stats2 }
type Dimension = {
  cubicweight: number
  height: number
  length: number
  weight: number
  width: number
}
type AdditionalInfo = {
  brandId: string
  brandName: string
  categoriesIds: string
  commercialConditionId: string
  dimension: Dimension
  offeringInfo: string | null
  offeringType: string | null
  offeringTypeId: string | null
  productClusterId: string
}
type ItemAttachment = { content: { [x: string]: unknown }; name: string | null }
type Item = {
  additionalInfo: AdditionalInfo
  assemblies: { [x: string]: unknown }[] | null
  attachmentOfferings:
    | { name: string | null; required: boolean | null; schema: { [x: string]: unknown } | null }[]
    | null
  attachments: string[]
  bundleItems: string[]
  callCenterOperator: string | null
  commission: number
  components: string[]
  costPrice: number
  detailUrl: string
  ean: string | null
  freightCommission: number
  id: string
  imageUrl: string
  isGift: boolean
  itemAttachment: ItemAttachment
  listPrice: number
  lockId: string
  manualPrice: string | null
  measurementUnit: string
  name: string
  offerings: string[]
  params: string[]
  parentAssemblyBinding: string | null
  parentItemIndex: string | null
  preSaleDate: string | null
  price: number
  priceDefinitions: {
    calculatedSellingPrice: number
    sellingPrices: { quantity: number; value: number }[]
    total: number
  }
  priceTags: string[]
  priceValidUntil: string | null
  productId: string
  quantity: number
  refId: string
  rewardValue: number
  seller: string
  sellerSku: string
  sellingPrice: number
  serialNumbers: string | null
  shippingPrice: string | null
  tax: number
  taxCode: string | null
  uniqueId: string
  unitMultiplier: number
}
type PackageAttachment = { packages: string[] }
type Total = { id: string; name: string; value: number }
type Userorderdetails = {
  affiliateId: string
  allowCancellation: boolean
  allowEdition: boolean
  authorizedDate: string
  callCenterOperatorData: string | null
  cancelReason: string | null
  cancellationData: {
    CancellationDate: string
    Reason: string
    RequestedByPaymentNotification: boolean
    RequestedBySellerNotification: boolean
    RequestedBySystem: boolean
    RequestedByUser: boolean
  }
  changesAttachment: ChangesAttachment
  checkedInPickupPointId: string
  clientPreferencesData: { locale: string; optinNewsLetter: boolean }
  clientProfileData: ClientProfileData
  commercialConditionData: string | null
  creationDate: string
  customData: string | null
  followUpEmail: string
  giftRegistryData: string | null
  hostname: string
  invoiceData: { [x: string]: unknown } | null
  invoicedDate: string | null
  isCheckedIn: boolean
  isCompleted: boolean
  itemMetadata: {
    Items: {
      AssemblyOptions: {
        Composition: { [x: string]: unknown } | null
        Id: string
        InputValues: { [x: string]: unknown } | null
        Name: string
        Required: boolean
      }[]
      DetailUrl: string
      Ean: string
      Id: string
      ImageUrl: string
      Name: string
      ProductId: string
      RefId: string
      Seller: string
      SkuName: string
    }[]
  }
  items: Item[]
  lastChange: string
  lastMessage: string | null
  marketingData: {
    coupon: string
    id: string
    marketingTags: string[]
    utmCampaign: string
    utmMedium: string
    utmPartner: string
    utmSource: string
    utmiCampaign: string
    utmiPart: string
    utmipage: string
  }
  marketplace: Marketplace
  marketplaceItems: string[]
  marketplaceOrderId: string
  marketplaceServicesEndpoint: string
  merchantName: string
  openTextField: string | null
  orderFormId: string
  orderGroup: string
  orderId: string
  origin: string
  packageAttachment: PackageAttachment
  paymentData: PaymentData
  ratesAndBenefitsData: RatesAndBenefitsData
  roundingError: number
  salesChannel: string
  sellerOrderId: string
  sellers: Seller[]
  sequence: string
  shippingData: ShippingData
  status: string
  statusDescription: string
  storePreferencesData: StorePreferencesData
  subscriptionData: {
    SubscriptionGroupId: string
    Subscriptions:
      | {
          ExecutionCount: number
          ItemIndex: number
          Plan: {
            frequency: { interval: number; periodicity: string }
            type: string
            validity: { begin: string; end: string }
          }
          PriceAtSubscriptionDate: number
        }[]
      | null
  } | null
  taxData: {
    areTaxesDesignatedByMarketplace: boolean
    taxInfoCollection: {
      itemIndex: number
      priceTags: { isPercentual: boolean; name: string; rawValue: string }[]
      sku: string
    }[]
  }
  totals: Total[]
  value: number
}
type TestJSONataExpression = { Document: string; Expression: string }
type Getfeedorderstatus = {
  currentChange: string
  domain: string
  eventId: string
  handle: string
  lastChange: string
  lastState: string
  orderId: string
  state: string
}
type CommititemfeedorderstatusRequest = { handles: string[] }
type FeedFilter = {
  disableSingleFire?: boolean | undefined
  expression?: string | undefined
  status?: string[] | undefined
  type: string
}
type Queue = { MessageRetentionPeriodInSeconds: number; visibilityTimeoutInSeconds: number }
type FeedConfigurationRequest = { filter: FeedFilter; queue: Queue }
type HookFilter = {
  disableSingleFire?: boolean | undefined
  expression?: string | undefined
  status?: string[] | undefined
  type: string
}
type Headers = { key: string }
type Hook = { headers: Headers; url: string }
type HookConfigurationRequest = { filter: HookFilter; hook: Hook }
type Origin2 = { Account: string; Key: string }
type HookConfiguration = {
  CurrentChange: string
  Domain: string
  LastChange: string
  LastState: string
  OrderId: string
  Origin: Origin2
  State: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/checkout/pvt/configuration/window-to-change-seller': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: number
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { waitingTime: number }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/api/oms/pvt/admin/reports/completed': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: ExportCompletedResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/admin/reports/inprogress': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: ExportInProgressResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/feed/orders/status': {
      $get: {
        input: { query: { maxLot: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders': {
      $get: {
        input: {
          query: {
            orderBy?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            f_creationDate: string
            f_hasInputInvoice?: boolean | undefined
            q?: string | undefined
            utc?: number | undefined
            f_shippingEstimate?: string | undefined
            f_invoicedDate?: string | undefined
            f_authorizedDate?: string | undefined
            f_UtmSource?: string | undefined
            f_sellerNames?: string | undefined
            f_callCenterOperatorName?: string | undefined
            f_salesChannel?: string | undefined
            salesChannelId?: string | undefined
            f_affiliateId?: string | undefined
            f_status?: string | undefined
            incompleteOrders?: boolean | undefined
            f_paymentNames?: string | undefined
            f_RnB?: string | undefined
            searchField?: string | undefined
            f_isInstore?: boolean | undefined
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: ListOrders
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId': {
      $get: {
        input: { param: { orderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {
          affiliateId?: string | undefined
          allowCancellation?: boolean | undefined
          allowEdition?: boolean | undefined
          approvedBy?: (string | null) | undefined
          authorizedDate?: string | undefined
          callCenterOperatorData?: (string | null) | undefined
          cancelReason?: (string | null) | undefined
          cancelledBy?: (string | null) | undefined
          changesAttachment?: ChangesAttachment | undefined
          clientProfileData?: ClientProfileData | undefined
          commercialConditionData?: (string | null) | undefined
          creationDate?: (string | null) | undefined
          customData?: (string | null) | undefined
          emailTracked?: string | undefined
          followUpEmail?: string | undefined
          giftRegistryData?: (string | null) | undefined
          hostname?: string | undefined
          invoiceData?: ({ [x: string]: unknown } | null) | undefined
          invoicedDate?: (string | null) | undefined
          isCheckedIn?: boolean | undefined
          isCompleted?: boolean | undefined
          items?:
            | {
                additionalInfo?:
                  | {
                      brandId?: string | undefined
                      brandName?: string | undefined
                      dimension?:
                        | {
                            cubicweight?: number | undefined
                            height?: number | undefined
                            length?: number | undefined
                            weight?: number | undefined
                            width?: number | undefined
                          }
                        | undefined
                      offeringInfo?: (string | null) | undefined
                      offeringType?: (string | null) | undefined
                      offeringTypeId?: (string | null) | undefined
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
                ean?: (string | null) | undefined
                id?: string | undefined
                imageUrl?: string | undefined
                isGift?: (boolean | null) | undefined
                listPrice?: (number | null) | undefined
                manualPrice?: (number | null) | undefined
                manualPriceAppliedBy?: string | undefined
                manufacturerCode?: string | undefined
                measurementUnit?: string | undefined
                modalType?: string | undefined
                name?: string | undefined
                parentAssemblyBinding?: (string | null) | undefined
                parentItemIndex?: (number | null) | undefined
                preSaleDate?: (string | null) | undefined
                price?: (number | null) | undefined
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
                priceValidUntil?: (string | null) | undefined
                productCategories?: { '{ID}'?: string | undefined } | undefined
                productCategoryIds?: string | undefined
                productId?: string | undefined
                productRefId?: string | undefined
                quantity?: number | undefined
                refId?: string | undefined
                rewardValue?: (number | null) | undefined
                seller?: string | undefined
                sellerChain?: string[] | undefined
                sellingPrice?: (number | null) | undefined
                skuName?: string | undefined
                tax?: (number | null) | undefined
                uniqueId?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
          lastChange?: (string | null) | undefined
          lastMessage?: (string | null) | undefined
          marketingData?: (string | null) | undefined
          marketplace?: Marketplace | undefined
          marketplaceItems?: string[] | undefined
          marketplaceOrderId?: (string | null) | undefined
          marketplaceServicesEndpoint?: (string | null) | undefined
          merchantName?: (string | null) | undefined
          openTextField?: (string | null) | undefined
          orderFormId?: string | undefined
          orderGroup?: (string | null) | undefined
          orderId?: string | undefined
          origin?: (string | null) | undefined
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
                      invoiceUrl?: (string | null) | undefined
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
          salesChannel?: (string | null) | undefined
          sellerOrderId?: (string | null) | undefined
          sellers?: Seller[] | undefined
          sequence?: (string | null) | undefined
          shippingData?: ShippingData | undefined
          status?: string | undefined
          statusDescription?: string | undefined
          storePreferencesData?: StorePreferencesData | undefined
          totals?:
            | { id?: string | undefined; name?: string | undefined; value?: number | undefined }[]
            | undefined
          value?: (number | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/cancel': {
      $post:
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
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
              header: { Accept: string; 'Content-Type': string }
            } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/changes': {
      $post: {
        input: { param: { orderId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: RegisterChangeRequest }
        output: RegisterChange
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/conversation-message': {
      $get: {
        input: { param: { orderId: string } } & { query: { reason?: string | undefined } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: GetConversation[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/interactions': {
      $post: {
        input: { param: { orderId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: AddLogRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/invoice': {
      $post: {
        input: { param: { orderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: InvoiceNotificationRequest }
        output: {
          date?: string | undefined
          orderId?: string | undefined
          receipt?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/invoice/:invoiceNumber': {
      $patch: {
        input: { param: { orderId: string; invoiceNumber: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: UpdatepartialinvoiceSendTrackingNumberRequest }
        output: UpdatepartialinvoiceSendTrackingNumber
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/invoice/:invoiceNumber/tracking': {
      $put: {
        input: { param: { orderId: string; invoiceNumber: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: UpdateTrackingStatusRequest }
        output: UpdateTrackingStatus
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/payment-transaction': {
      $get: {
        input: { param: { orderId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: GetPaymenttransaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/payments/:paymentId/payment-notification': {
      $post:
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string; paymentId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/oms/pvt/orders/:orderId/start-handling': {
      $post:
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {
              error?:
                | {
                    code?: string | undefined
                    exception?: (string | null) | undefined
                    message?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {
              error?:
                | {
                    code?: string | undefined
                    exception?: (string | null) | undefined
                    message?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { orderId: string } } & {
              header: { Accept: string; 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/oms/user/orders': {
      $get: {
        input: { query: { clientEmail: string; page: string; per_page: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Userorderslist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oms/user/orders/:orderId': {
      $get: {
        input: { param: { orderId: string } } & { query: { clientEmail: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Userorderdetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/orders/expressions/jsonata': {
      $post: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: TestJSONataExpression
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/orders/feed': {
      $get: {
        input: { query: { maxlot: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Getfeedorderstatus[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: CommititemfeedorderstatusRequest
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/orders/feed/config': {
      $delete:
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          approximateAgeOfOldestMessageInSeconds?: number | undefined
          filter?:
            | {
                disableSingleFire?: boolean | undefined
                expression?: string | undefined
                status?: string[] | undefined
                type?: string | undefined
              }
            | undefined
          quantity?: number | undefined
          queue?:
            | {
                MessageRetentionPeriodInSeconds?: number | undefined
                visibilityTimeoutInSeconds?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { Accept: string; 'Content-Type': string } } & {
              json: FeedConfigurationRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } } & {
              json: FeedConfigurationRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } } & {
              json: FeedConfigurationRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } } & {
              json: FeedConfigurationRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/orders/hook/config': {
      $delete:
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { Accept: string; 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $get: {
        input: {
          query: {
            clientEmail?: string | undefined
            page?: string | undefined
            per_page?: string | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: HookConfigurationRequest
        }
        output: HookConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
