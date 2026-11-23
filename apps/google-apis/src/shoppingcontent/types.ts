type AccountIdentifier = { aggregatorId?: string | undefined; merchantId?: string | undefined }
type AccountsAuthInfoResponse = {
  accountIdentifiers?: AccountIdentifier[] | undefined
  kind?: string | undefined
}
type AccountAdwordsLink = { adwordsId?: string | undefined; status?: string | undefined }
type AccountAddress = {
  country?: string | undefined
  locality?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
  streetAddress?: string | undefined
}
type AccountCustomerService = {
  email?: string | undefined
  phoneNumber?: string | undefined
  url?: string | undefined
}
type AccountBusinessInformation = {
  address?: AccountAddress | undefined
  customerService?: AccountCustomerService | undefined
  koreanBusinessRegistrationNumber?: string | undefined
  phoneNumber?: string | undefined
}
type AccountGoogleMyBusinessLink = { gmbEmail?: string | undefined; status?: string | undefined }
type AccountUser = {
  admin?: boolean | undefined
  emailAddress?: string | undefined
  orderManager?: boolean | undefined
  paymentsAnalyst?: boolean | undefined
  paymentsManager?: boolean | undefined
}
type AccountYouTubeChannelLink = { channelId?: string | undefined; status?: string | undefined }
type Account = {
  adultContent?: boolean | undefined
  adwordsLinks?: AccountAdwordsLink[] | undefined
  businessInformation?: AccountBusinessInformation | undefined
  googleMyBusinessLink?: AccountGoogleMyBusinessLink | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  reviewsUrl?: string | undefined
  sellerId?: string | undefined
  users?: AccountUser[] | undefined
  websiteUrl?: string | undefined
  youtubeChannelLinks?: AccountYouTubeChannelLink[] | undefined
}
type AccountsCustomBatchRequestEntryLinkRequest = {
  action?: string | undefined
  linkType?: string | undefined
  linkedAccountId?: string | undefined
}
type AccountsCustomBatchRequestEntry = {
  account?: Account | undefined
  accountId?: string | undefined
  batchId?: number | undefined
  force?: boolean | undefined
  labelIds?: string[] | undefined
  linkRequest?: AccountsCustomBatchRequestEntryLinkRequest | undefined
  merchantId?: string | undefined
  method?: string | undefined
  overwrite?: boolean | undefined
}
type AccountsCustomBatchRequest = { entries?: AccountsCustomBatchRequestEntry[] | undefined }
type Error = {
  domain?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
type Errors = {
  code?: number | undefined
  errors?: Error[] | undefined
  message?: string | undefined
}
type AccountsCustomBatchResponseEntry = {
  account?: Account | undefined
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  linkStatus?: string | undefined
}
type AccountsCustomBatchResponse = {
  entries?: AccountsCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type AccountstatusesCustomBatchRequestEntry = {
  accountId?: string | undefined
  batchId?: number | undefined
  destinations?: string[] | undefined
  merchantId?: string | undefined
  method?: string | undefined
}
type AccountstatusesCustomBatchRequest = {
  entries?: AccountstatusesCustomBatchRequestEntry[] | undefined
}
type AccountStatusAccountLevelIssue = {
  country?: string | undefined
  destination?: string | undefined
  detail?: string | undefined
  documentation?: string | undefined
  id?: string | undefined
  severity?: string | undefined
  title?: string | undefined
}
type AccountStatusExampleItem = {
  itemId?: string | undefined
  link?: string | undefined
  submittedValue?: string | undefined
  title?: string | undefined
  valueOnLandingPage?: string | undefined
}
type AccountStatusDataQualityIssue = {
  country?: string | undefined
  destination?: string | undefined
  detail?: string | undefined
  displayedValue?: string | undefined
  exampleItems?: AccountStatusExampleItem[] | undefined
  id?: string | undefined
  lastChecked?: string | undefined
  location?: string | undefined
  numItems?: number | undefined
  severity?: string | undefined
  submittedValue?: string | undefined
}
type AccountStatusItemLevelIssue = {
  attributeName?: string | undefined
  code?: string | undefined
  description?: string | undefined
  detail?: string | undefined
  documentation?: string | undefined
  numItems?: string | undefined
  resolution?: string | undefined
  servability?: string | undefined
}
type AccountStatusStatistics = {
  active?: string | undefined
  disapproved?: string | undefined
  expiring?: string | undefined
  pending?: string | undefined
}
type AccountStatusProducts = {
  channel?: string | undefined
  country?: string | undefined
  destination?: string | undefined
  itemLevelIssues?: AccountStatusItemLevelIssue[] | undefined
  statistics?: AccountStatusStatistics | undefined
}
type AccountStatus = {
  accountId?: string | undefined
  accountLevelIssues?: AccountStatusAccountLevelIssue[] | undefined
  dataQualityIssues?: AccountStatusDataQualityIssue[] | undefined
  kind?: string | undefined
  products?: AccountStatusProducts[] | undefined
  websiteClaimed?: boolean | undefined
}
type AccountstatusesCustomBatchResponseEntry = {
  accountStatus?: AccountStatus | undefined
  batchId?: number | undefined
  errors?: Errors | undefined
}
type AccountstatusesCustomBatchResponse = {
  entries?: AccountstatusesCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type AccountTaxTaxRule = {
  country?: string | undefined
  locationId?: string | undefined
  ratePercent?: string | undefined
  shippingTaxed?: boolean | undefined
  useGlobalRate?: boolean | undefined
}
type AccountTax = {
  accountId?: string | undefined
  kind?: string | undefined
  rules?: AccountTaxTaxRule[] | undefined
}
type AccounttaxCustomBatchRequestEntry = {
  accountId?: string | undefined
  accountTax?: AccountTax | undefined
  batchId?: number | undefined
  merchantId?: string | undefined
  method?: string | undefined
}
type AccounttaxCustomBatchRequest = { entries?: AccounttaxCustomBatchRequestEntry[] | undefined }
type AccounttaxCustomBatchResponseEntry = {
  accountTax?: AccountTax | undefined
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
}
type AccounttaxCustomBatchResponse = {
  entries?: AccounttaxCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type DatafeedFetchSchedule = {
  dayOfMonth?: number | undefined
  fetchUrl?: string | undefined
  hour?: number | undefined
  minuteOfHour?: number | undefined
  password?: string | undefined
  paused?: boolean | undefined
  timeZone?: string | undefined
  username?: string | undefined
  weekday?: string | undefined
}
type DatafeedFormat = {
  columnDelimiter?: string | undefined
  fileEncoding?: string | undefined
  quotingMode?: string | undefined
}
type DatafeedTarget = {
  country?: string | undefined
  excludedDestinations?: string[] | undefined
  includedDestinations?: string[] | undefined
  language?: string | undefined
}
type Datafeed = {
  attributeLanguage?: string | undefined
  contentLanguage?: string | undefined
  contentType?: string | undefined
  fetchSchedule?: DatafeedFetchSchedule | undefined
  fileName?: string | undefined
  format?: DatafeedFormat | undefined
  id?: string | undefined
  intendedDestinations?: string[] | undefined
  kind?: string | undefined
  name?: string | undefined
  targetCountry?: string | undefined
  targets?: DatafeedTarget[] | undefined
}
type DatafeedsCustomBatchRequestEntry = {
  batchId?: number | undefined
  datafeed?: Datafeed | undefined
  datafeedId?: string | undefined
  merchantId?: string | undefined
  method?: string | undefined
}
type DatafeedsCustomBatchRequest = { entries?: DatafeedsCustomBatchRequestEntry[] | undefined }
type DatafeedsCustomBatchResponseEntry = {
  batchId?: number | undefined
  datafeed?: Datafeed | undefined
  errors?: Errors | undefined
}
type DatafeedsCustomBatchResponse = {
  entries?: DatafeedsCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type DatafeedstatusesCustomBatchRequestEntry = {
  batchId?: number | undefined
  country?: string | undefined
  datafeedId?: string | undefined
  language?: string | undefined
  merchantId?: string | undefined
  method?: string | undefined
}
type DatafeedstatusesCustomBatchRequest = {
  entries?: DatafeedstatusesCustomBatchRequestEntry[] | undefined
}
type DatafeedStatusExample = {
  itemId?: string | undefined
  lineNumber?: string | undefined
  value?: string | undefined
}
type DatafeedStatusError = {
  code?: string | undefined
  count?: string | undefined
  examples?: DatafeedStatusExample[] | undefined
  message?: string | undefined
}
type DatafeedStatus = {
  country?: string | undefined
  datafeedId?: string | undefined
  errors?: DatafeedStatusError[] | undefined
  itemsTotal?: string | undefined
  itemsValid?: string | undefined
  kind?: string | undefined
  language?: string | undefined
  lastUploadDate?: string | undefined
  processingStatus?: string | undefined
  warnings?: DatafeedStatusError[] | undefined
}
type DatafeedstatusesCustomBatchResponseEntry = {
  batchId?: number | undefined
  datafeedStatus?: DatafeedStatus | undefined
  errors?: Errors | undefined
}
type DatafeedstatusesCustomBatchResponse = {
  entries?: DatafeedstatusesCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type LiaAboutPageSettings = { status?: string | undefined; url?: string | undefined }
type LiaInventorySettings = {
  inventoryVerificationContactEmail?: string | undefined
  inventoryVerificationContactName?: string | undefined
  inventoryVerificationContactStatus?: string | undefined
  status?: string | undefined
}
type LiaOnDisplayToOrderSettings = {
  shippingCostPolicyUrl?: string | undefined
  status?: string | undefined
}
type LiaPosDataProvider = {
  posDataProviderId?: string | undefined
  posExternalAccountId?: string | undefined
}
type LiaCountrySettings = {
  about?: LiaAboutPageSettings | undefined
  country?: string | undefined
  hostedLocalStorefrontActive?: boolean | undefined
  inventory?: LiaInventorySettings | undefined
  onDisplayToOrder?: LiaOnDisplayToOrderSettings | undefined
  posDataProvider?: LiaPosDataProvider | undefined
  storePickupActive?: boolean | undefined
}
type LiaSettings = {
  accountId?: string | undefined
  countrySettings?: LiaCountrySettings[] | undefined
  kind?: string | undefined
}
type LiasettingsCustomBatchRequestEntry = {
  accountId?: string | undefined
  batchId?: number | undefined
  contactEmail?: string | undefined
  contactName?: string | undefined
  country?: string | undefined
  gmbEmail?: string | undefined
  liaSettings?: LiaSettings | undefined
  merchantId?: string | undefined
  method?: string | undefined
  posDataProviderId?: string | undefined
  posExternalAccountId?: string | undefined
}
type LiasettingsCustomBatchRequest = { entries?: LiasettingsCustomBatchRequestEntry[] | undefined }
type GmbAccountsGmbAccount = {
  email?: string | undefined
  listingCount?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
type GmbAccounts = {
  accountId?: string | undefined
  gmbAccounts?: GmbAccountsGmbAccount[] | undefined
}
type PosDataProvidersPosDataProvider = {
  displayName?: string | undefined
  fullName?: string | undefined
  providerId?: string | undefined
}
type PosDataProviders = {
  country?: string | undefined
  posDataProviders?: PosDataProvidersPosDataProvider[] | undefined
}
type LiasettingsCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  gmbAccounts?: GmbAccounts | undefined
  kind?: string | undefined
  liaSettings?: LiaSettings | undefined
  posDataProviders?: PosDataProviders[] | undefined
}
type LiasettingsCustomBatchResponse = {
  entries?: LiasettingsCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type LiasettingsListPosDataProvidersResponse = {
  kind?: string | undefined
  posDataProviders?: PosDataProviders[] | undefined
}
type OrdersCustomBatchRequestEntryCancel = {
  reason?: string | undefined
  reasonText?: string | undefined
}
type Price = { currency?: string | undefined; value?: string | undefined }
type OrdersCustomBatchRequestEntryCancelLineItem = {
  amount?: Price | undefined
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCustomBatchRequestEntryInStoreRefundLineItem = {
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCustomBatchRequestEntryRefund = {
  amount?: Price | undefined
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCustomBatchRequestEntryRejectReturnLineItem = {
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCustomBatchRequestEntryReturnLineItem = {
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCustomBatchRequestEntryReturnRefundLineItem = {
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrderMerchantProvidedAnnotation = { key?: string | undefined; value?: string | undefined }
type OrdersCustomBatchRequestEntrySetLineItemMetadata = {
  annotations?: OrderMerchantProvidedAnnotation[] | undefined
  lineItemId?: string | undefined
  productId?: string | undefined
}
type OrderShipmentLineItemShipment = {
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
}
type OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo = {
  carrier?: string | undefined
  shipmentId?: string | undefined
  trackingId?: string | undefined
}
type OrdersCustomBatchRequestEntryShipLineItems = {
  carrier?: string | undefined
  lineItems?: OrderShipmentLineItemShipment[] | undefined
  shipmentGroupId?: string | undefined
  shipmentId?: string | undefined
  shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] | undefined
  trackingId?: string | undefined
}
type OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails = {
  deliverByDate?: string | undefined
  lineItemId?: string | undefined
  productId?: string | undefined
  shipByDate?: string | undefined
}
type OrdersCustomBatchRequestEntryUpdateShipment = {
  carrier?: string | undefined
  deliveryDate?: string | undefined
  shipmentId?: string | undefined
  status?: string | undefined
  trackingId?: string | undefined
}
type OrdersCustomBatchRequestEntry = {
  batchId?: number | undefined
  cancel?: OrdersCustomBatchRequestEntryCancel | undefined
  cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem | undefined
  inStoreRefundLineItem?: OrdersCustomBatchRequestEntryInStoreRefundLineItem | undefined
  merchantId?: string | undefined
  merchantOrderId?: string | undefined
  method?: string | undefined
  operationId?: string | undefined
  orderId?: string | undefined
  refund?: OrdersCustomBatchRequestEntryRefund | undefined
  rejectReturnLineItem?: OrdersCustomBatchRequestEntryRejectReturnLineItem | undefined
  returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem | undefined
  returnRefundLineItem?: OrdersCustomBatchRequestEntryReturnRefundLineItem | undefined
  setLineItemMetadata?: OrdersCustomBatchRequestEntrySetLineItemMetadata | undefined
  shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems | undefined
  updateLineItemShippingDetails?:
    | OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails
    | undefined
  updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment | undefined
}
type OrdersCustomBatchRequest = { entries?: OrdersCustomBatchRequestEntry[] | undefined }
type OrderCustomerMarketingRightsInfo = {
  explicitMarketingPreference?: string | undefined
  lastUpdatedTimestamp?: string | undefined
  marketingEmailAddress?: string | undefined
}
type OrderCustomer = {
  email?: string | undefined
  explicitMarketingPreference?: boolean | undefined
  fullName?: string | undefined
  invoiceReceivingEmail?: string | undefined
  marketingRightsInfo?: OrderCustomerMarketingRightsInfo | undefined
}
type OrderAddress = {
  country?: string | undefined
  fullAddress?: string[] | undefined
  isPostOfficeBox?: boolean | undefined
  locality?: string | undefined
  postalCode?: string | undefined
  recipientName?: string | undefined
  region?: string | undefined
  streetAddress?: string[] | undefined
}
type OrderDeliveryDetails = { address?: OrderAddress | undefined; phoneNumber?: string | undefined }
type OrderCancellation = {
  actor?: string | undefined
  creationDate?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrderLineItemProductFee = { amount?: Price | undefined; name?: string | undefined }
type OrderLineItemProductVariantAttribute = {
  dimension?: string | undefined
  value?: string | undefined
}
type OrderLineItemProduct = {
  brand?: string | undefined
  channel?: string | undefined
  condition?: string | undefined
  contentLanguage?: string | undefined
  fees?: OrderLineItemProductFee[] | undefined
  gtin?: string | undefined
  id?: string | undefined
  imageLink?: string | undefined
  itemGroupId?: string | undefined
  mpn?: string | undefined
  offerId?: string | undefined
  price?: Price | undefined
  shownImage?: string | undefined
  targetCountry?: string | undefined
  title?: string | undefined
  variantAttributes?: OrderLineItemProductVariantAttribute[] | undefined
}
type OrderLineItemReturnInfo = {
  daysToReturn?: number | undefined
  isReturnable?: boolean | undefined
  policyUrl?: string | undefined
}
type OrderReturn = {
  actor?: string | undefined
  creationDate?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrderLineItemShippingDetailsMethod = {
  carrier?: string | undefined
  maxDaysInTransit?: number | undefined
  methodName?: string | undefined
  minDaysInTransit?: number | undefined
}
type OrderLineItemShippingDetails = {
  deliverByDate?: string | undefined
  method?: OrderLineItemShippingDetailsMethod | undefined
  shipByDate?: string | undefined
  type?: string | undefined
}
type OrderLineItem = {
  annotations?: OrderMerchantProvidedAnnotation[] | undefined
  cancellations?: OrderCancellation[] | undefined
  id?: string | undefined
  price?: Price | undefined
  product?: OrderLineItemProduct | undefined
  quantityCanceled?: number | undefined
  quantityDelivered?: number | undefined
  quantityOrdered?: number | undefined
  quantityPending?: number | undefined
  quantityReadyForPickup?: number | undefined
  quantityReturned?: number | undefined
  quantityShipped?: number | undefined
  returnInfo?: OrderLineItemReturnInfo | undefined
  returns?: OrderReturn[] | undefined
  shippingDetails?: OrderLineItemShippingDetails | undefined
  tax?: Price | undefined
}
type OrderPaymentMethod = {
  billingAddress?: OrderAddress | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  lastFourDigits?: string | undefined
  phoneNumber?: string | undefined
  type?: string | undefined
}
type OrderPickupDetailsCollector = { name?: string | undefined; phoneNumber?: string | undefined }
type OrderPickupDetails = {
  address?: OrderAddress | undefined
  collectors?: OrderPickupDetailsCollector[] | undefined
  locationId?: string | undefined
}
type OrderLegacyPromotionBenefit = {
  discount?: Price | undefined
  offerIds?: string[] | undefined
  subType?: string | undefined
  taxImpact?: Price | undefined
  type?: string | undefined
}
type OrderLegacyPromotion = {
  benefits?: OrderLegacyPromotionBenefit[] | undefined
  effectiveDates?: string | undefined
  genericRedemptionCode?: string | undefined
  id?: string | undefined
  longTitle?: string | undefined
  productApplicability?: string | undefined
  redemptionChannel?: string | undefined
}
type OrderRefund = {
  actor?: string | undefined
  amount?: Price | undefined
  creationDate?: string | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrderShipmentScheduledDeliveryDetails = {
  carrierPhoneNumber?: string | undefined
  scheduledDate?: string | undefined
}
type OrderShipment = {
  carrier?: string | undefined
  creationDate?: string | undefined
  deliveryDate?: string | undefined
  id?: string | undefined
  lineItems?: OrderShipmentLineItemShipment[] | undefined
  scheduledDeliveryDetails?: OrderShipmentScheduledDeliveryDetails | undefined
  status?: string | undefined
  trackingId?: string | undefined
}
type Order = {
  acknowledged?: boolean | undefined
  channelType?: string | undefined
  customer?: OrderCustomer | undefined
  deliveryDetails?: OrderDeliveryDetails | undefined
  id?: string | undefined
  kind?: string | undefined
  lineItems?: OrderLineItem[] | undefined
  merchantId?: string | undefined
  merchantOrderId?: string | undefined
  netAmount?: Price | undefined
  paymentMethod?: OrderPaymentMethod | undefined
  paymentStatus?: string | undefined
  pickupDetails?: OrderPickupDetails | undefined
  placedDate?: string | undefined
  promotions?: OrderLegacyPromotion[] | undefined
  refunds?: OrderRefund[] | undefined
  shipments?: OrderShipment[] | undefined
  shippingCost?: Price | undefined
  shippingCostTax?: Price | undefined
  shippingOption?: string | undefined
  status?: string | undefined
  taxCollector?: string | undefined
}
type OrdersCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  executionStatus?: string | undefined
  kind?: string | undefined
  order?: Order | undefined
}
type OrdersCustomBatchResponse = {
  entries?: OrdersCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type PosInventory = {
  contentLanguage?: string | undefined
  gtin?: string | undefined
  itemId?: string | undefined
  kind?: string | undefined
  price?: Price | undefined
  quantity?: string | undefined
  storeCode?: string | undefined
  targetCountry?: string | undefined
  timestamp?: string | undefined
}
type PosSale = {
  contentLanguage?: string | undefined
  gtin?: string | undefined
  itemId?: string | undefined
  kind?: string | undefined
  price?: Price | undefined
  quantity?: string | undefined
  saleId?: string | undefined
  storeCode?: string | undefined
  targetCountry?: string | undefined
  timestamp?: string | undefined
}
type PosStore = {
  gcidCategory?: string[] | undefined
  kind?: string | undefined
  phoneNumber?: string | undefined
  placeId?: string | undefined
  storeAddress?: string | undefined
  storeCode?: string | undefined
  storeName?: string | undefined
  websiteUrl?: string | undefined
}
type PosCustomBatchRequestEntry = {
  batchId?: number | undefined
  inventory?: PosInventory | undefined
  merchantId?: string | undefined
  method?: string | undefined
  sale?: PosSale | undefined
  store?: PosStore | undefined
  storeCode?: string | undefined
  targetMerchantId?: string | undefined
}
type PosCustomBatchRequest = { entries?: PosCustomBatchRequestEntry[] | undefined }
type PosCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  inventory?: PosInventory | undefined
  kind?: string | undefined
  sale?: PosSale | undefined
  store?: PosStore | undefined
}
type PosCustomBatchResponse = {
  entries?: PosCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type ProductAspect = {
  aspectName?: string | undefined
  destinationName?: string | undefined
  intention?: string | undefined
}
type CustomAttribute = {
  name?: string | undefined
  type?: string | undefined
  unit?: string | undefined
  value?: string | undefined
}
type CustomGroup = { attributes?: CustomAttribute[] | undefined; name?: string | undefined }
type ProductDestination = { destinationName?: string | undefined; intention?: string | undefined }
type Installment = { amount?: Price | undefined; months?: string | undefined }
type LoyaltyPoints = {
  name?: string | undefined
  pointsValue?: string | undefined
  ratio?: number | undefined
}
type ProductShipping = {
  country?: string | undefined
  locationGroupName?: string | undefined
  locationId?: string | undefined
  postalCode?: string | undefined
  price?: Price | undefined
  region?: string | undefined
  service?: string | undefined
}
type ProductShippingDimension = { unit?: string | undefined; value?: number | undefined }
type ProductShippingWeight = { unit?: string | undefined; value?: number | undefined }
type ProductTax = {
  country?: string | undefined
  locationId?: string | undefined
  postalCode?: string | undefined
  rate?: number | undefined
  region?: string | undefined
  taxShip?: boolean | undefined
}
type ProductUnitPricingBaseMeasure = { unit?: string | undefined; value?: string | undefined }
type ProductUnitPricingMeasure = { unit?: string | undefined; value?: number | undefined }
type Product = {
  additionalImageLinks?: string[] | undefined
  additionalProductTypes?: string[] | undefined
  adult?: boolean | undefined
  adwordsGrouping?: string | undefined
  adwordsLabels?: string[] | undefined
  adwordsRedirect?: string | undefined
  ageGroup?: string | undefined
  aspects?: ProductAspect[] | undefined
  availability?: string | undefined
  availabilityDate?: string | undefined
  brand?: string | undefined
  canonicalLink?: string | undefined
  channel?: string | undefined
  color?: string | undefined
  condition?: string | undefined
  contentLanguage?: string | undefined
  costOfGoodsSold?: Price | undefined
  customAttributes?: CustomAttribute[] | undefined
  customGroups?: CustomGroup[] | undefined
  customLabel0?: string | undefined
  customLabel1?: string | undefined
  customLabel2?: string | undefined
  customLabel3?: string | undefined
  customLabel4?: string | undefined
  description?: string | undefined
  destinations?: ProductDestination[] | undefined
  displayAdsId?: string | undefined
  displayAdsLink?: string | undefined
  displayAdsSimilarIds?: string[] | undefined
  displayAdsTitle?: string | undefined
  displayAdsValue?: number | undefined
  energyEfficiencyClass?: string | undefined
  expirationDate?: string | undefined
  gender?: string | undefined
  googleProductCategory?: string | undefined
  gtin?: string | undefined
  id?: string | undefined
  identifierExists?: boolean | undefined
  imageLink?: string | undefined
  installment?: Installment | undefined
  isBundle?: boolean | undefined
  itemGroupId?: string | undefined
  kind?: string | undefined
  link?: string | undefined
  loyaltyPoints?: LoyaltyPoints | undefined
  material?: string | undefined
  maxEnergyEfficiencyClass?: string | undefined
  maxHandlingTime?: string | undefined
  minEnergyEfficiencyClass?: string | undefined
  minHandlingTime?: string | undefined
  mobileLink?: string | undefined
  mpn?: string | undefined
  multipack?: string | undefined
  offerId?: string | undefined
  onlineOnly?: boolean | undefined
  pattern?: string | undefined
  price?: Price | undefined
  productType?: string | undefined
  promotionIds?: string[] | undefined
  salePrice?: Price | undefined
  salePriceEffectiveDate?: string | undefined
  sellOnGoogleQuantity?: string | undefined
  shipping?: ProductShipping[] | undefined
  shippingHeight?: ProductShippingDimension | undefined
  shippingLabel?: string | undefined
  shippingLength?: ProductShippingDimension | undefined
  shippingWeight?: ProductShippingWeight | undefined
  shippingWidth?: ProductShippingDimension | undefined
  sizeSystem?: string | undefined
  sizeType?: string | undefined
  sizes?: string[] | undefined
  source?: string | undefined
  targetCountry?: string | undefined
  taxes?: ProductTax[] | undefined
  title?: string | undefined
  unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure | undefined
  unitPricingMeasure?: ProductUnitPricingMeasure | undefined
  validatedDestinations?: string[] | undefined
  warnings?: Error[] | undefined
}
type ProductsCustomBatchRequestEntry = {
  batchId?: number | undefined
  merchantId?: string | undefined
  method?: string | undefined
  product?: Product | undefined
  productId?: string | undefined
}
type ProductsCustomBatchRequest = { entries?: ProductsCustomBatchRequestEntry[] | undefined }
type ProductsCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  product?: Product | undefined
}
type ProductsCustomBatchResponse = {
  entries?: ProductsCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type ProductstatusesCustomBatchRequestEntry = {
  batchId?: number | undefined
  destinations?: string[] | undefined
  includeAttributes?: boolean | undefined
  merchantId?: string | undefined
  method?: string | undefined
  productId?: string | undefined
}
type ProductstatusesCustomBatchRequest = {
  entries?: ProductstatusesCustomBatchRequestEntry[] | undefined
}
type ProductStatusDataQualityIssue = {
  destination?: string | undefined
  detail?: string | undefined
  fetchStatus?: string | undefined
  id?: string | undefined
  location?: string | undefined
  severity?: string | undefined
  timestamp?: string | undefined
  valueOnLandingPage?: string | undefined
  valueProvided?: string | undefined
}
type ProductStatusDestinationStatus = {
  approvalPending?: boolean | undefined
  approvalStatus?: string | undefined
  destination?: string | undefined
  intention?: string | undefined
}
type ProductStatusItemLevelIssue = {
  attributeName?: string | undefined
  code?: string | undefined
  description?: string | undefined
  destination?: string | undefined
  detail?: string | undefined
  documentation?: string | undefined
  resolution?: string | undefined
  servability?: string | undefined
}
type ProductStatus = {
  creationDate?: string | undefined
  dataQualityIssues?: ProductStatusDataQualityIssue[] | undefined
  destinationStatuses?: ProductStatusDestinationStatus[] | undefined
  googleExpirationDate?: string | undefined
  itemLevelIssues?: ProductStatusItemLevelIssue[] | undefined
  kind?: string | undefined
  lastUpdateDate?: string | undefined
  link?: string | undefined
  product?: Product | undefined
  productId?: string | undefined
  title?: string | undefined
}
type ProductstatusesCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  productStatus?: ProductStatus | undefined
}
type ProductstatusesCustomBatchResponse = {
  entries?: ProductstatusesCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type PostalCodeRange = {
  postalCodeRangeBegin?: string | undefined
  postalCodeRangeEnd?: string | undefined
}
type PostalCodeGroup = {
  country?: string | undefined
  name?: string | undefined
  postalCodeRanges?: PostalCodeRange[] | undefined
}
type CutoffTime = {
  hour?: number | undefined
  minute?: number | undefined
  timezone?: string | undefined
}
type BusinessDayConfig = { businessDays?: string[] | undefined }
type HolidayCutoff = {
  deadlineDate?: string | undefined
  deadlineHour?: number | undefined
  deadlineTimezone?: string | undefined
  holidayId?: string | undefined
  visibleFromDate?: string | undefined
}
type TransitTableTransitTimeRowTransitTimeValue = {
  maxTransitTimeInDays?: number | undefined
  minTransitTimeInDays?: number | undefined
}
type TransitTableTransitTimeRow = {
  values?: TransitTableTransitTimeRowTransitTimeValue[] | undefined
}
type TransitTable = {
  postalCodeGroupNames?: string[] | undefined
  rows?: TransitTableTransitTimeRow[] | undefined
  transitTimeLabels?: string[] | undefined
}
type WarehouseBasedDeliveryTime = {
  carrier?: string | undefined
  carrierService?: string | undefined
  originAdministrativeArea?: string | undefined
  originCity?: string | undefined
  originCountry?: string | undefined
  originPostalCode?: string | undefined
  originStreetAddress?: string | undefined
  warehouseName?: string | undefined
}
type DeliveryTime = {
  cutoffTime?: CutoffTime | undefined
  handlingBusinessDayConfig?: BusinessDayConfig | undefined
  holidayCutoffs?: HolidayCutoff[] | undefined
  maxHandlingTimeInDays?: number | undefined
  maxTransitTimeInDays?: number | undefined
  minHandlingTimeInDays?: number | undefined
  minTransitTimeInDays?: number | undefined
  transitBusinessDayConfig?: BusinessDayConfig | undefined
  transitTimeTable?: TransitTable | undefined
  warehouseBasedDeliveryTimes?: WarehouseBasedDeliveryTime[] | undefined
}
type MinimumOrderValueTableStoreCodeSetWithMov = {
  storeCodes?: string[] | undefined
  value?: Price | undefined
}
type MinimumOrderValueTable = {
  storeCodeSetWithMovs?: MinimumOrderValueTableStoreCodeSetWithMov[] | undefined
}
type PickupCarrierService = { carrierName?: string | undefined; serviceName?: string | undefined }
type CarrierRate = {
  carrierName?: string | undefined
  carrierService?: string | undefined
  flatAdjustment?: Price | undefined
  name?: string | undefined
  originPostalCode?: string | undefined
  percentageAdjustment?: string | undefined
}
type LocationIdSet = { locationIds?: string[] | undefined }
type Weight = { unit?: string | undefined; value?: string | undefined }
type Headers = {
  locations?: LocationIdSet[] | undefined
  numberOfItems?: string[] | undefined
  postalCodeGroupNames?: string[] | undefined
  prices?: Price[] | undefined
  weights?: Weight[] | undefined
}
type Value = {
  carrierRateName?: string | undefined
  flatRate?: Price | undefined
  noShipping?: boolean | undefined
  pricePercentage?: string | undefined
  subtableName?: string | undefined
}
type Row = { cells?: Value[] | undefined }
type Table = {
  columnHeaders?: Headers | undefined
  name?: string | undefined
  rowHeaders?: Headers | undefined
  rows?: Row[] | undefined
}
type RateGroup = {
  applicableShippingLabels?: string[] | undefined
  carrierRates?: CarrierRate[] | undefined
  mainTable?: Table | undefined
  name?: string | undefined
  singleValue?: Value | undefined
  subtables?: Table[] | undefined
}
type Service = {
  active?: boolean | undefined
  currency?: string | undefined
  deliveryCountry?: string | undefined
  deliveryTime?: DeliveryTime | undefined
  eligibility?: string | undefined
  minimumOrderValue?: Price | undefined
  minimumOrderValueTable?: MinimumOrderValueTable | undefined
  name?: string | undefined
  pickupService?: PickupCarrierService | undefined
  rateGroups?: RateGroup[] | undefined
  shipmentType?: string | undefined
}
type WarehouseCutoffTime = { hour?: number | undefined; minute?: number | undefined }
type Address = {
  administrativeArea?: string | undefined
  city?: string | undefined
  country?: string | undefined
  postalCode?: string | undefined
  streetAddress?: string | undefined
}
type Warehouse = {
  businessDayConfig?: BusinessDayConfig | undefined
  cutoffTime?: WarehouseCutoffTime | undefined
  handlingDays?: string | undefined
  name?: string | undefined
  shippingAddress?: Address | undefined
}
type ShippingSettings = {
  accountId?: string | undefined
  postalCodeGroups?: PostalCodeGroup[] | undefined
  services?: Service[] | undefined
  warehouses?: Warehouse[] | undefined
}
type ShippingsettingsCustomBatchRequestEntry = {
  accountId?: string | undefined
  batchId?: number | undefined
  merchantId?: string | undefined
  method?: string | undefined
  shippingSettings?: ShippingSettings | undefined
}
type ShippingsettingsCustomBatchRequest = {
  entries?: ShippingsettingsCustomBatchRequestEntry[] | undefined
}
type ShippingsettingsCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  shippingSettings?: ShippingSettings | undefined
}
type ShippingsettingsCustomBatchResponse = {
  entries?: ShippingsettingsCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type AccountsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: Account[] | undefined
}
type AccountsClaimWebsiteResponse = { kind?: string | undefined }
type AccountsLinkRequest = {
  action?: string | undefined
  linkType?: string | undefined
  linkedAccountId?: string | undefined
}
type AccountsLinkResponse = { kind?: string | undefined }
type AccountstatusesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: AccountStatus[] | undefined
}
type AccounttaxListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: AccountTax[] | undefined
}
type DatafeedsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: Datafeed[] | undefined
}
type DatafeedsFetchNowResponse = { kind?: string | undefined }
type DatafeedstatusesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: DatafeedStatus[] | undefined
}
type LiasettingsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: LiaSettings[] | undefined
}
type LiasettingsGetAccessibleGmbAccountsResponse = {
  accountId?: string | undefined
  gmbAccounts?: GmbAccountsGmbAccount[] | undefined
  kind?: string | undefined
}
type LiasettingsRequestGmbAccessResponse = { kind?: string | undefined }
type LiasettingsRequestInventoryVerificationResponse = { kind?: string | undefined }
type LiasettingsSetInventoryVerificationContactResponse = { kind?: string | undefined }
type LiasettingsSetPosDataProviderResponse = { kind?: string | undefined }
type Amount = { pretax?: Price | undefined; tax?: Price | undefined }
type InvoiceSummaryAdditionalChargeSummary = {
  totalAmount?: Amount | undefined
  type?: string | undefined
}
type Promotion = { promotionAmount?: Amount | undefined; promotionId?: string | undefined }
type InvoiceSummary = {
  additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[] | undefined
  customerBalance?: Amount | undefined
  googleBalance?: Amount | undefined
  merchantBalance?: Amount | undefined
  productTotal?: Amount | undefined
  promotionSummaries?: Promotion[] | undefined
}
type UnitInvoiceAdditionalCharge = {
  additionalChargeAmount?: Amount | undefined
  additionalChargePromotions?: Promotion[] | undefined
  type?: string | undefined
}
type UnitInvoiceTaxLine = {
  taxAmount?: Price | undefined
  taxName?: string | undefined
  taxType?: string | undefined
}
type UnitInvoice = {
  additionalCharges?: UnitInvoiceAdditionalCharge[] | undefined
  promotions?: Promotion[] | undefined
  unitPricePretax?: Price | undefined
  unitPriceTaxes?: UnitInvoiceTaxLine[] | undefined
}
type ShipmentInvoiceLineItemInvoice = {
  lineItemId?: string | undefined
  productId?: string | undefined
  shipmentUnitIds?: string[] | undefined
  unitInvoice?: UnitInvoice | undefined
}
type OrderinvoicesCreateChargeInvoiceRequest = {
  invoiceId?: string | undefined
  invoiceSummary?: InvoiceSummary | undefined
  lineItemInvoices?: ShipmentInvoiceLineItemInvoice[] | undefined
  operationId?: string | undefined
  shipmentGroupId?: string | undefined
}
type OrderinvoicesCreateChargeInvoiceResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption = {
  description?: string | undefined
  reason?: string | undefined
}
type OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption = {
  description?: string | undefined
  reason?: string | undefined
}
type ShipmentInvoice = {
  invoiceSummary?: InvoiceSummary | undefined
  lineItemInvoices?: ShipmentInvoiceLineItemInvoice[] | undefined
  shipmentGroupId?: string | undefined
}
type OrderinvoicesCreateRefundInvoiceRequest = {
  invoiceId?: string | undefined
  operationId?: string | undefined
  refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption | undefined
  returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption | undefined
  shipmentInvoices?: ShipmentInvoice[] | undefined
}
type OrderinvoicesCreateRefundInvoiceResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrderReportDisbursement = {
  disbursementAmount?: Price | undefined
  disbursementCreationDate?: string | undefined
  disbursementDate?: string | undefined
  disbursementId?: string | undefined
  merchantId?: string | undefined
}
type OrderreportsListDisbursementsResponse = {
  disbursements?: OrderReportDisbursement[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ProductAmount = {
  priceAmount?: Price | undefined
  remittedTaxAmount?: Price | undefined
  taxAmount?: Price | undefined
}
type OrderReportTransaction = {
  disbursementAmount?: Price | undefined
  disbursementCreationDate?: string | undefined
  disbursementDate?: string | undefined
  disbursementId?: string | undefined
  merchantId?: string | undefined
  merchantOrderId?: string | undefined
  orderId?: string | undefined
  productAmount?: Amount | undefined
  productAmountWithRemittedTax?: ProductAmount | undefined
  transactionDate?: string | undefined
}
type OrderreportsListTransactionsResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  transactions?: OrderReportTransaction[] | undefined
}
type CustomerReturnReason = { description?: string | undefined; reasonCode?: string | undefined }
type RefundReason = { description?: string | undefined; reasonCode?: string | undefined }
type MerchantOrderReturnItem = {
  customerReturnReason?: CustomerReturnReason | undefined
  itemId?: string | undefined
  merchantReturnReason?: RefundReason | undefined
  product?: OrderLineItemProduct | undefined
  returnShipmentIds?: string[] | undefined
  state?: string | undefined
}
type ShipmentTrackingInfo = { carrier?: string | undefined; trackingNumber?: string | undefined }
type ReturnShipment = {
  creationDate?: string | undefined
  deliveryDate?: string | undefined
  returnMethodType?: string | undefined
  shipmentId?: string | undefined
  shipmentTrackingInfos?: ShipmentTrackingInfo[] | undefined
  shippingDate?: string | undefined
  state?: string | undefined
}
type MerchantOrderReturn = {
  creationDate?: string | undefined
  merchantOrderId?: string | undefined
  orderId?: string | undefined
  orderReturnId?: string | undefined
  returnItems?: MerchantOrderReturnItem[] | undefined
  returnShipments?: ReturnShipment[] | undefined
}
type OrderreturnsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: MerchantOrderReturn[] | undefined
}
type OrdersListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: Order[] | undefined
}
type OrdersAcknowledgeRequest = { operationId?: string | undefined }
type OrdersAcknowledgeResponse = { executionStatus?: string | undefined; kind?: string | undefined }
type OrdersCancelRequest = {
  operationId?: string | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCancelResponse = { executionStatus?: string | undefined; kind?: string | undefined }
type OrdersCancelLineItemRequest = {
  amount?: Price | undefined
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersCancelLineItemResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersInStoreRefundLineItemRequest = {
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersInStoreRefundLineItemResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersRefundRequest = {
  amount?: Price | undefined
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  operationId?: string | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersRefundResponse = { executionStatus?: string | undefined; kind?: string | undefined }
type OrdersRejectReturnLineItemRequest = {
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersRejectReturnLineItemResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersReturnLineItemRequest = {
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersReturnLineItemResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersReturnRefundLineItemRequest = {
  amountPretax?: Price | undefined
  amountTax?: Price | undefined
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersReturnRefundLineItemResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersSetLineItemMetadataRequest = {
  annotations?: OrderMerchantProvidedAnnotation[] | undefined
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
}
type OrdersSetLineItemMetadataResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersShipLineItemsRequest = {
  carrier?: string | undefined
  lineItems?: OrderShipmentLineItemShipment[] | undefined
  operationId?: string | undefined
  shipmentGroupId?: string | undefined
  shipmentId?: string | undefined
  shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] | undefined
  trackingId?: string | undefined
}
type OrdersShipLineItemsResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersCustomBatchRequestEntryCreateTestReturnReturnItem = {
  lineItemId?: string | undefined
  quantity?: number | undefined
}
type OrdersCreateTestReturnRequest = {
  items?: OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[] | undefined
}
type OrdersCreateTestReturnResponse = { kind?: string | undefined; returnId?: string | undefined }
type OrdersUpdateLineItemShippingDetailsRequest = {
  deliverByDate?: string | undefined
  lineItemId?: string | undefined
  operationId?: string | undefined
  productId?: string | undefined
  shipByDate?: string | undefined
}
type OrdersUpdateLineItemShippingDetailsResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersUpdateMerchantOrderIdRequest = {
  merchantOrderId?: string | undefined
  operationId?: string | undefined
}
type OrdersUpdateMerchantOrderIdResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersUpdateShipmentRequest = {
  carrier?: string | undefined
  deliveryDate?: string | undefined
  operationId?: string | undefined
  shipmentId?: string | undefined
  status?: string | undefined
  trackingId?: string | undefined
}
type OrdersUpdateShipmentResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersGetByMerchantOrderIdResponse = { kind?: string | undefined; order?: Order | undefined }
type PosInventoryRequest = {
  contentLanguage?: string | undefined
  gtin?: string | undefined
  itemId?: string | undefined
  price?: Price | undefined
  quantity?: string | undefined
  storeCode?: string | undefined
  targetCountry?: string | undefined
  timestamp?: string | undefined
}
type PosInventoryResponse = {
  contentLanguage?: string | undefined
  gtin?: string | undefined
  itemId?: string | undefined
  kind?: string | undefined
  price?: Price | undefined
  quantity?: string | undefined
  storeCode?: string | undefined
  targetCountry?: string | undefined
  timestamp?: string | undefined
}
type PosSaleRequest = {
  contentLanguage?: string | undefined
  gtin?: string | undefined
  itemId?: string | undefined
  price?: Price | undefined
  quantity?: string | undefined
  saleId?: string | undefined
  storeCode?: string | undefined
  targetCountry?: string | undefined
  timestamp?: string | undefined
}
type PosSaleResponse = {
  contentLanguage?: string | undefined
  gtin?: string | undefined
  itemId?: string | undefined
  kind?: string | undefined
  price?: Price | undefined
  quantity?: string | undefined
  saleId?: string | undefined
  storeCode?: string | undefined
  targetCountry?: string | undefined
  timestamp?: string | undefined
}
type PosListResponse = { kind?: string | undefined; resources?: PosStore[] | undefined }
type ProductsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: Product[] | undefined
}
type ProductstatusesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: ProductStatus[] | undefined
}
type ShippingsettingsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: ShippingSettings[] | undefined
}
type CarriersCarrier = {
  country?: string | undefined
  eddServices?: string[] | undefined
  name?: string | undefined
  services?: string[] | undefined
}
type ShippingsettingsGetSupportedCarriersResponse = {
  carriers?: CarriersCarrier[] | undefined
  kind?: string | undefined
}
type HolidaysHoliday = {
  countryCode?: string | undefined
  date?: string | undefined
  deliveryGuaranteeDate?: string | undefined
  deliveryGuaranteeHour?: string | undefined
  id?: string | undefined
  type?: string | undefined
}
type ShippingsettingsGetSupportedHolidaysResponse = {
  holidays?: HolidaysHoliday[] | undefined
  kind?: string | undefined
}
type PickupServicesPickupService = {
  carrierName?: string | undefined
  country?: string | undefined
  serviceName?: string | undefined
}
type ShippingsettingsGetSupportedPickupServicesResponse = {
  kind?: string | undefined
  pickupServices?: PickupServicesPickupService[] | undefined
}
type TestOrderCustomerMarketingRightsInfo = {
  explicitMarketingPreference?: string | undefined
  lastUpdatedTimestamp?: string | undefined
}
type TestOrderCustomer = {
  email?: string | undefined
  explicitMarketingPreference?: boolean | undefined
  fullName?: string | undefined
  marketingRightsInfo?: TestOrderCustomerMarketingRightsInfo | undefined
}
type TestOrderLineItemProduct = {
  brand?: string | undefined
  channel?: string | undefined
  condition?: string | undefined
  contentLanguage?: string | undefined
  fees?: OrderLineItemProductFee[] | undefined
  gtin?: string | undefined
  imageLink?: string | undefined
  itemGroupId?: string | undefined
  mpn?: string | undefined
  offerId?: string | undefined
  price?: Price | undefined
  targetCountry?: string | undefined
  title?: string | undefined
  variantAttributes?: OrderLineItemProductVariantAttribute[] | undefined
}
type TestOrderLineItem = {
  product?: TestOrderLineItemProduct | undefined
  quantityOrdered?: number | undefined
  returnInfo?: OrderLineItemReturnInfo | undefined
  shippingDetails?: OrderLineItemShippingDetails | undefined
  unitTax?: Price | undefined
}
type TestOrderPaymentMethod = {
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  lastFourDigits?: string | undefined
  predefinedBillingAddress?: string | undefined
  type?: string | undefined
}
type TestOrder = {
  customer?: TestOrderCustomer | undefined
  enableOrderinvoices?: boolean | undefined
  kind?: string | undefined
  lineItems?: TestOrderLineItem[] | undefined
  notificationMode?: string | undefined
  paymentMethod?: TestOrderPaymentMethod | undefined
  predefinedDeliveryAddress?: string | undefined
  predefinedPickupDetails?: string | undefined
  promotions?: OrderLegacyPromotion[] | undefined
  shippingCost?: Price | undefined
  shippingCostTax?: Price | undefined
  shippingOption?: string | undefined
}
type OrdersCreateTestOrderRequest = {
  country?: string | undefined
  templateName?: string | undefined
  testOrder?: TestOrder | undefined
}
type OrdersCreateTestOrderResponse = { kind?: string | undefined; orderId?: string | undefined }
type OrdersAdvanceTestOrderResponse = { kind?: string | undefined }
type OrdersCancelTestOrderByCustomerRequest = { reason?: string | undefined }
type OrdersCancelTestOrderByCustomerResponse = { kind?: string | undefined }
type OrdersGetTestOrderTemplateResponse = {
  kind?: string | undefined
  template?: TestOrder | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/authinfo': {
      $get: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccountsAuthInfoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AccountsCustomBatchRequest }
        output: AccountsCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accountstatuses/batch': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AccountstatusesCustomBatchRequest }
        output: AccountstatusesCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounttax/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AccounttaxCustomBatchRequest }
        output: AccounttaxCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datafeeds/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DatafeedsCustomBatchRequest }
        output: DatafeedsCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datafeedstatuses/batch': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DatafeedstatusesCustomBatchRequest }
        output: DatafeedstatusesCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/liasettings/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiasettingsCustomBatchRequest }
        output: LiasettingsCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/liasettings/posdataproviders': {
      $get: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsListPosDataProvidersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orders/batch': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersCustomBatchRequest }
        output: OrdersCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pos/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PosCustomBatchRequest }
        output: PosCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/products/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ProductsCustomBatchRequest }
        output: ProductsCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/productstatuses/batch': {
      $post: {
        input: {
          query: {
            includeAttributes?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ProductstatusesCustomBatchRequest }
        output: ProductstatusesCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shippingsettings/batch': {
      $post: {
        input: {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ShippingsettingsCustomBatchRequest }
        output: ShippingsettingsCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccountsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts/:accountId': {
      $delete: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            dryRun?: boolean | undefined
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts/:accountId/claimwebsite': {
      $post: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            overwrite?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccountsClaimWebsiteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts/:accountId/link': {
      $post: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AccountsLinkRequest }
        output: AccountsLinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accountstatuses': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            destinations?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccountstatusesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accountstatuses/:accountId': {
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            destinations?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccountStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounttax': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccounttaxListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounttax/:accountId': {
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AccountTax
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AccountTax }
        output: AccountTax
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/datafeeds': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DatafeedsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Datafeed }
        output: Datafeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/datafeeds/:datafeedId': {
      $delete: {
        input: { param: { merchantId: string; datafeedId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; datafeedId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Datafeed
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { merchantId: string; datafeedId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Datafeed }
        output: Datafeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/datafeeds/:datafeedId/fetchNow': {
      $post: {
        input: { param: { merchantId: string; datafeedId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DatafeedsFetchNowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/datafeedstatuses': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DatafeedstatusesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/datafeedstatuses/:datafeedId': {
      $get: {
        input: { param: { merchantId: string; datafeedId: string } } & {
          query: {
            country?: string | undefined
            language?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DatafeedStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings/:accountId': {
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiaSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiaSettings }
        output: LiaSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings/:accountId/accessiblegmbaccounts': {
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsGetAccessibleGmbAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings/:accountId/requestgmbaccess': {
      $post: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            gmbEmail: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsRequestGmbAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings/:accountId/requestinventoryverification/:country': {
      $post: {
        input: { param: { merchantId: string; accountId: string; country: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsRequestInventoryVerificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings/:accountId/setinventoryverificationcontact': {
      $post: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            country: string
            language: string
            contactName: string
            contactEmail: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsSetInventoryVerificationContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/liasettings/:accountId/setposdataprovider': {
      $post: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            country: string
            posDataProviderId?: string | undefined
            posExternalAccountId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiasettingsSetPosDataProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderinvoices/:orderId/createChargeInvoice': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrderinvoicesCreateChargeInvoiceRequest }
        output: OrderinvoicesCreateChargeInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderinvoices/:orderId/createRefundInvoice': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrderinvoicesCreateRefundInvoiceRequest }
        output: OrderinvoicesCreateRefundInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderreports/disbursements': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            disbursementEndDate?: string | undefined
            disbursementStartDate?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrderreportsListDisbursementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderreports/disbursements/:disbursementId/transactions': {
      $get: {
        input: { param: { merchantId: string; disbursementId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            transactionEndDate?: string | undefined
            transactionStartDate?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrderreportsListTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderreturns': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            createdEndDate?: string | undefined
            createdStartDate?: string | undefined
            maxResults?: number | undefined
            orderBy?: 'RETURN_CREATION_TIME_DESC' | 'RETURN_CREATION_TIME_ASC' | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrderreturnsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderreturns/:returnId': {
      $get: {
        input: { param: { merchantId: string; returnId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: MerchantOrderReturn
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            acknowledged?: boolean | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
            pageToken?: string | undefined
            placedDateEnd?: string | undefined
            placedDateStart?: string | undefined
            statuses?:
              | (
                  | 'ACTIVE'
                  | 'COMPLETED'
                  | 'CANCELED'
                  | 'IN_PROGRESS'
                  | 'PENDING_SHIPMENT'
                  | 'PARTIALLY_SHIPPED'
                  | 'SHIPPED'
                  | 'PARTIALLY_DELIVERED'
                  | 'DELIVERED'
                  | 'PARTIALLY_RETURNED'
                  | 'RETURNED'
                )[]
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrdersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId': {
      $get: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Order
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/acknowledge': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersAcknowledgeRequest }
        output: OrdersAcknowledgeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/cancel': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersCancelRequest }
        output: OrdersCancelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/cancelLineItem': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersCancelLineItemRequest }
        output: OrdersCancelLineItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/inStoreRefundLineItem': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersInStoreRefundLineItemRequest }
        output: OrdersInStoreRefundLineItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/refund': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersRefundRequest }
        output: OrdersRefundResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/rejectReturnLineItem': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersRejectReturnLineItemRequest }
        output: OrdersRejectReturnLineItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/returnLineItem': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersReturnLineItemRequest }
        output: OrdersReturnLineItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/returnRefundLineItem': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersReturnRefundLineItemRequest }
        output: OrdersReturnRefundLineItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/setLineItemMetadata': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersSetLineItemMetadataRequest }
        output: OrdersSetLineItemMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/shipLineItems': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersShipLineItemsRequest }
        output: OrdersShipLineItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/testreturn': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersCreateTestReturnRequest }
        output: OrdersCreateTestReturnResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/updateLineItemShippingDetails': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersUpdateLineItemShippingDetailsRequest }
        output: OrdersUpdateLineItemShippingDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/updateMerchantOrderId': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersUpdateMerchantOrderIdRequest }
        output: OrdersUpdateMerchantOrderIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/updateShipment': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersUpdateShipmentRequest }
        output: OrdersUpdateShipmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/ordersbymerchantid/:merchantOrderId': {
      $get: {
        input: { param: { merchantId: string; merchantOrderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrdersGetByMerchantOrderIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/pos/:targetMerchantId/inventory': {
      $post: {
        input: { param: { merchantId: string; targetMerchantId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PosInventoryRequest }
        output: PosInventoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/pos/:targetMerchantId/sale': {
      $post: {
        input: { param: { merchantId: string; targetMerchantId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PosSaleRequest }
        output: PosSaleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/pos/:targetMerchantId/store': {
      $get: {
        input: { param: { merchantId: string; targetMerchantId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PosListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string; targetMerchantId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PosStore }
        output: PosStore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/pos/:targetMerchantId/store/:storeCode': {
      $delete: {
        input: { param: { merchantId: string; targetMerchantId: string; storeCode: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; targetMerchantId: string; storeCode: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PosStore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/products': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            includeInvalidInsertedItems?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProductsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Product }
        output: Product
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/products/:productId': {
      $delete: {
        input: { param: { merchantId: string; productId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; productId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Product
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/productstatuses': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            destinations?: string[] | undefined
            includeAttributes?: boolean | undefined
            includeInvalidInsertedItems?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProductstatusesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/productstatuses/:productId': {
      $get: {
        input: { param: { merchantId: string; productId: string } } & {
          query: {
            destinations?: string[] | undefined
            includeAttributes?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProductStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/shippingsettings': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ShippingsettingsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/shippingsettings/:accountId': {
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ShippingSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { merchantId: string; accountId: string } } & {
          query: {
            dryRun?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ShippingSettings }
        output: ShippingSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/supportedCarriers': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ShippingsettingsGetSupportedCarriersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/supportedHolidays': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ShippingsettingsGetSupportedHolidaysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/supportedPickupServices': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ShippingsettingsGetSupportedPickupServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/testorders': {
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersCreateTestOrderRequest }
        output: OrdersCreateTestOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/testorders/:orderId/advance': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrdersAdvanceTestOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/testorders/:orderId/cancelByCustomer': {
      $post: {
        input: { param: { merchantId: string; orderId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: OrdersCancelTestOrderByCustomerRequest }
        output: OrdersCancelTestOrderByCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/testordertemplates/:templateName': {
      $get: {
        input: {
          param: {
            merchantId: string
            templateName: 'TEMPLATE1' | 'TEMPLATE2' | 'TEMPLATE1A' | 'TEMPLATE1B' | 'TEMPLATE3'
          }
        } & {
          query: {
            country?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: OrdersGetTestOrderTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
