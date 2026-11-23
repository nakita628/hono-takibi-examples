type AccountIdentifier = { aggregatorId?: string | undefined; merchantId?: string | undefined }
type AccountsAuthInfoResponse = {
  accountIdentifiers?: AccountIdentifier[] | undefined
  kind?: string | undefined
}
type AccountAdsLink = { adsId?: string | undefined; status?: string | undefined }
type AccountImageImprovementsSettings = { allowAutomaticImageImprovements?: boolean | undefined }
type AccountImageImprovements = {
  accountImageImprovementsSettings?: AccountImageImprovementsSettings | undefined
  effectiveAllowAutomaticImageImprovements?: boolean | undefined
}
type AccountItemUpdatesSettings = {
  allowAvailabilityUpdates?: boolean | undefined
  allowConditionUpdates?: boolean | undefined
  allowPriceUpdates?: boolean | undefined
  allowStrictAvailabilityUpdates?: boolean | undefined
}
type AccountItemUpdates = {
  accountItemUpdatesSettings?: AccountItemUpdatesSettings | undefined
  effectiveAllowAvailabilityUpdates?: boolean | undefined
  effectiveAllowConditionUpdates?: boolean | undefined
  effectiveAllowPriceUpdates?: boolean | undefined
  effectiveAllowStrictAvailabilityUpdates?: boolean | undefined
}
type AccountShippingImprovements = { allowShippingImprovements?: boolean | undefined }
type AccountAutomaticImprovements = {
  imageImprovements?: AccountImageImprovements | undefined
  itemUpdates?: AccountItemUpdates | undefined
  shippingImprovements?: AccountShippingImprovements | undefined
}
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
  phoneVerificationStatus?: string | undefined
}
type AccountConversionSettings = { freeListingsAutoTaggingEnabled?: boolean | undefined }
type AccountGoogleMyBusinessLink = {
  gmbAccountId?: string | undefined
  gmbEmail?: string | undefined
  status?: string | undefined
}
type AccountUser = {
  admin?: boolean | undefined
  emailAddress?: string | undefined
  orderManager?: boolean | undefined
  paymentsAnalyst?: boolean | undefined
  paymentsManager?: boolean | undefined
  reportingManager?: boolean | undefined
}
type AccountYouTubeChannelLink = { channelId?: string | undefined; status?: string | undefined }
type Account = {
  accountManagement?: string | undefined
  adsLinks?: AccountAdsLink[] | undefined
  adultContent?: boolean | undefined
  automaticImprovements?: AccountAutomaticImprovements | undefined
  automaticLabelIds?: string[] | undefined
  businessInformation?: AccountBusinessInformation | undefined
  conversionSettings?: AccountConversionSettings | undefined
  cssId?: string | undefined
  googleMyBusinessLink?: AccountGoogleMyBusinessLink | undefined
  id?: string | undefined
  kind?: string | undefined
  labelIds?: string[] | undefined
  name?: string | undefined
  sellerId?: string | undefined
  users?: AccountUser[] | undefined
  websiteUrl?: string | undefined
  youtubeChannelLinks?: AccountYouTubeChannelLink[] | undefined
}
type AccountsCustomBatchRequestEntryLinkRequest = {
  action?: string | undefined
  linkType?: string | undefined
  linkedAccountId?: string | undefined
  services?: string[] | undefined
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
  view?: string | undefined
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
}
type AccountsCustomBatchResponse = {
  entries?: AccountsCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type AccountCredentials = {
  accessToken?: string | undefined
  expiresIn?: string | undefined
  purpose?:
    | 'ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED'
    | 'SHOPIFY_ORDER_MANAGEMENT'
    | 'SHOPIFY_INTEGRATION'
    | undefined
}
type AccountLabel = {
  accountId?: string | undefined
  description?: string | undefined
  labelId?: string | undefined
  labelType?: 'LABEL_TYPE_UNSPECIFIED' | 'MANUAL' | 'AUTOMATIC' | undefined
  name?: string | undefined
}
type ListAccountLabelsResponse = {
  accountLabels?: AccountLabel[] | undefined
  nextPageToken?: string | undefined
}
type AccountReturnCarrier = {
  carrierAccountId?: string | undefined
  carrierAccountName?: string | undefined
  carrierAccountNumber?: string | undefined
  carrierCode?: 'CARRIER_CODE_UNSPECIFIED' | 'FEDEX' | 'UPS' | undefined
}
type ListAccountReturnCarrierResponse = {
  accountReturnCarriers?: AccountReturnCarrier[] | undefined
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
  accountManagement?: string | undefined
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
  feedLabel?: string | undefined
  includedDestinations?: string[] | undefined
  language?: string | undefined
  targetCountries?: string[] | undefined
}
type Datafeed = {
  attributeLanguage?: string | undefined
  contentType?: string | undefined
  fetchSchedule?: DatafeedFetchSchedule | undefined
  fileName?: string | undefined
  format?: DatafeedFormat | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
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
  feedLabel?: string | undefined
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
  feedLabel?: string | undefined
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
type CustomAttribute = {
  groupValues?: CustomAttribute[] | undefined
  name?: string | undefined
  value?: string | undefined
}
type Price = { currency?: string | undefined; value?: string | undefined }
type LocalInventory = {
  availability?: string | undefined
  customAttributes?: CustomAttribute[] | undefined
  instoreProductLocation?: string | undefined
  kind?: string | undefined
  pickupMethod?: string | undefined
  pickupSla?: string | undefined
  price?: Price | undefined
  quantity?: number | undefined
  salePrice?: Price | undefined
  salePriceEffectiveDate?: string | undefined
  storeCode?: string | undefined
}
type LocalinventoryCustomBatchRequestEntry = {
  batchId?: number | undefined
  localInventory?: LocalInventory | undefined
  merchantId?: string | undefined
  method?: string | undefined
  productId?: string | undefined
}
type LocalinventoryCustomBatchRequest = {
  entries?: LocalinventoryCustomBatchRequestEntry[] | undefined
}
type LocalinventoryCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
}
type LocalinventoryCustomBatchResponse = {
  entries?: LocalinventoryCustomBatchResponseEntry[] | undefined
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
type Installment = { amount?: Price | undefined; months?: string | undefined }
type LoyaltyPoints = {
  name?: string | undefined
  pointsValue?: string | undefined
  ratio?: number | undefined
}
type ProductProductDetail = {
  attributeName?: string | undefined
  attributeValue?: string | undefined
  sectionName?: string | undefined
}
type ProductDimension = { unit?: string | undefined; value?: number | undefined }
type ProductWeight = { unit?: string | undefined; value?: number | undefined }
type ProductShipping = {
  country?: string | undefined
  locationGroupName?: string | undefined
  locationId?: string | undefined
  maxHandlingTime?: string | undefined
  maxTransitTime?: string | undefined
  minHandlingTime?: string | undefined
  minTransitTime?: string | undefined
  postalCode?: string | undefined
  price?: Price | undefined
  region?: string | undefined
  service?: string | undefined
}
type ProductShippingDimension = { unit?: string | undefined; value?: number | undefined }
type ProductShippingWeight = { unit?: string | undefined; value?: number | undefined }
type ProductSubscriptionCost = {
  amount?: Price | undefined
  period?: string | undefined
  periodLength?: string | undefined
}
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
  additionalSizeType?: string | undefined
  adsGrouping?: string | undefined
  adsLabels?: string[] | undefined
  adsRedirect?: string | undefined
  adult?: boolean | undefined
  ageGroup?: string | undefined
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
  customLabel0?: string | undefined
  customLabel1?: string | undefined
  customLabel2?: string | undefined
  customLabel3?: string | undefined
  customLabel4?: string | undefined
  description?: string | undefined
  displayAdsId?: string | undefined
  displayAdsLink?: string | undefined
  displayAdsSimilarIds?: string[] | undefined
  displayAdsTitle?: string | undefined
  displayAdsValue?: number | undefined
  energyEfficiencyClass?: string | undefined
  excludedDestinations?: string[] | undefined
  expirationDate?: string | undefined
  externalSellerId?: string | undefined
  feedLabel?: string | undefined
  gender?: string | undefined
  googleProductCategory?: string | undefined
  gtin?: string | undefined
  id?: string | undefined
  identifierExists?: boolean | undefined
  imageLink?: string | undefined
  includedDestinations?: string[] | undefined
  installment?: Installment | undefined
  isBundle?: boolean | undefined
  itemGroupId?: string | undefined
  kind?: string | undefined
  lifestyleImageLinks?: string[] | undefined
  link?: string | undefined
  linkTemplate?: string | undefined
  loyaltyPoints?: LoyaltyPoints | undefined
  material?: string | undefined
  maxEnergyEfficiencyClass?: string | undefined
  maxHandlingTime?: string | undefined
  minEnergyEfficiencyClass?: string | undefined
  minHandlingTime?: string | undefined
  mobileLink?: string | undefined
  mobileLinkTemplate?: string | undefined
  mpn?: string | undefined
  multipack?: string | undefined
  offerId?: string | undefined
  pattern?: string | undefined
  pause?: string | undefined
  pickupMethod?: string | undefined
  pickupSla?: string | undefined
  price?: Price | undefined
  productDetails?: ProductProductDetail[] | undefined
  productHeight?: ProductDimension | undefined
  productHighlights?: string[] | undefined
  productLength?: ProductDimension | undefined
  productTypes?: string[] | undefined
  productWeight?: ProductWeight | undefined
  productWidth?: ProductDimension | undefined
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
  shoppingAdsExcludedCountries?: string[] | undefined
  sizeSystem?: string | undefined
  sizeType?: string | undefined
  sizes?: string[] | undefined
  source?: string | undefined
  subscriptionCost?: ProductSubscriptionCost | undefined
  targetCountry?: string | undefined
  taxCategory?: string | undefined
  taxes?: ProductTax[] | undefined
  title?: string | undefined
  transitTimeLabel?: string | undefined
  unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure | undefined
  unitPricingMeasure?: ProductUnitPricingMeasure | undefined
}
type ProductsCustomBatchRequestEntry = {
  batchId?: number | undefined
  feedId?: string | undefined
  merchantId?: string | undefined
  method?: string | undefined
  product?: Product | undefined
  productId?: string | undefined
  updateMask?: string | undefined
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
type ProductStatusDestinationStatus = {
  approvedCountries?: string[] | undefined
  destination?: string | undefined
  disapprovedCountries?: string[] | undefined
  pendingCountries?: string[] | undefined
  status?: string | undefined
}
type ProductStatusItemLevelIssue = {
  applicableCountries?: string[] | undefined
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
  destinationStatuses?: ProductStatusDestinationStatus[] | undefined
  googleExpirationDate?: string | undefined
  itemLevelIssues?: ProductStatusItemLevelIssue[] | undefined
  kind?: string | undefined
  lastUpdateDate?: string | undefined
  link?: string | undefined
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
type RegionalInventory = {
  availability?: string | undefined
  customAttributes?: CustomAttribute[] | undefined
  kind?: string | undefined
  price?: Price | undefined
  regionId?: string | undefined
  salePrice?: Price | undefined
  salePriceEffectiveDate?: string | undefined
}
type RegionalinventoryCustomBatchRequestEntry = {
  batchId?: number | undefined
  merchantId?: string | undefined
  method?: string | undefined
  productId?: string | undefined
  regionalInventory?: RegionalInventory | undefined
}
type RegionalinventoryCustomBatchRequest = {
  entries?: RegionalinventoryCustomBatchRequestEntry[] | undefined
}
type RegionalinventoryCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  regionalInventory?: RegionalInventory | undefined
}
type RegionalinventoryCustomBatchResponse = {
  entries?: RegionalinventoryCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type ReturnAddressAddress = {
  country?: string | undefined
  locality?: string | undefined
  postalCode?: string | undefined
  recipientName?: string | undefined
  region?: string | undefined
  streetAddress?: string[] | undefined
}
type ReturnAddress = {
  address?: ReturnAddressAddress | undefined
  country?: string | undefined
  kind?: string | undefined
  label?: string | undefined
  phoneNumber?: string | undefined
  returnAddressId?: string | undefined
}
type ReturnaddressCustomBatchRequestEntry = {
  batchId?: number | undefined
  merchantId?: string | undefined
  method?: string | undefined
  returnAddress?: ReturnAddress | undefined
  returnAddressId?: string | undefined
}
type ReturnaddressCustomBatchRequest = {
  entries?: ReturnaddressCustomBatchRequestEntry[] | undefined
}
type ReturnaddressCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  returnAddress?: ReturnAddress | undefined
}
type ReturnaddressCustomBatchResponse = {
  entries?: ReturnaddressCustomBatchResponseEntry[] | undefined
  kind?: string | undefined
}
type ReturnPolicyPolicy = {
  lastReturnDate?: string | undefined
  numberOfDays?: string | undefined
  type?: string | undefined
}
type ReturnPolicySeasonalOverride = {
  endDate?: string | undefined
  name?: string | undefined
  policy?: ReturnPolicyPolicy | undefined
  startDate?: string | undefined
}
type ReturnPolicy = {
  country?: string | undefined
  kind?: string | undefined
  label?: string | undefined
  name?: string | undefined
  nonFreeReturnReasons?: string[] | undefined
  policy?: ReturnPolicyPolicy | undefined
  returnPolicyId?: string | undefined
  returnShippingFee?: Price | undefined
  seasonalOverrides?: ReturnPolicySeasonalOverride[] | undefined
}
type ReturnpolicyCustomBatchRequestEntry = {
  batchId?: number | undefined
  merchantId?: string | undefined
  method?: string | undefined
  returnPolicy?: ReturnPolicy | undefined
  returnPolicyId?: string | undefined
}
type ReturnpolicyCustomBatchRequest = {
  entries?: ReturnpolicyCustomBatchRequestEntry[] | undefined
}
type ReturnpolicyCustomBatchResponseEntry = {
  batchId?: number | undefined
  errors?: Errors | undefined
  kind?: string | undefined
  returnPolicy?: ReturnPolicy | undefined
}
type ReturnpolicyCustomBatchResponse = {
  entries?: ReturnpolicyCustomBatchResponseEntry[] | undefined
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
type Css = {
  cssDomainId?: string | undefined
  cssGroupId?: string | undefined
  displayName?: string | undefined
  fullName?: string | undefined
  homepageUri?: string | undefined
  labelIds?: string[] | undefined
}
type ListCssesResponse = { csses?: Css[] | undefined; nextPageToken?: string | undefined }
type LabelIds = { labelIds?: string[] | undefined }
type AccountsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: Account[] | undefined
}
type AccountsClaimWebsiteResponse = { kind?: string | undefined }
type ECommercePlatformLinkInfo = { externalAccountId?: string | undefined }
type PaymentServiceProviderLinkInfo = {
  externalAccountBusinessCountry?: string | undefined
  externalAccountId?: string | undefined
}
type AccountsLinkRequest = {
  action?: string | undefined
  eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo | undefined
  linkType?: string | undefined
  linkedAccountId?: string | undefined
  paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo | undefined
  services?: string[] | undefined
}
type AccountsLinkResponse = { kind?: string | undefined }
type LinkService = { service?: string | undefined; status?: string | undefined }
type LinkedAccount = { linkedAccountId?: string | undefined; services?: LinkService[] | undefined }
type AccountsListLinksResponse = {
  kind?: string | undefined
  links?: LinkedAccount[] | undefined
  nextPageToken?: string | undefined
}
type RequestPhoneVerificationRequest = {
  languageCode?: string | undefined
  phoneNumber?: string | undefined
  phoneRegionCode?: string | undefined
  phoneVerificationMethod?:
    | 'PHONE_VERIFICATION_METHOD_UNSPECIFIED'
    | 'SMS'
    | 'PHONE_CALL'
    | undefined
}
type RequestPhoneVerificationResponse = { verificationId?: string | undefined }
type AccountsUpdateLabelsRequest = { labelIds?: string[] | undefined }
type AccountsUpdateLabelsResponse = { kind?: string | undefined }
type VerifyPhoneNumberRequest = {
  phoneVerificationMethod?:
    | 'PHONE_VERIFICATION_METHOD_UNSPECIFIED'
    | 'SMS'
    | 'PHONE_CALL'
    | undefined
  verificationCode?: string | undefined
  verificationId?: string | undefined
}
type VerifyPhoneNumberResponse = { verifiedPhoneNumber?: string | undefined }
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
type BuyOnGoogleProgramStatus = {
  businessModel?:
    | ('BUSINESS_MODEL_UNSPECIFIED' | 'MANUFACTURER' | 'IMPORTER' | 'RESELLER' | 'OTHER')[]
    | undefined
  customerServicePendingEmail?: string | undefined
  customerServicePendingPhoneNumber?: string | undefined
  customerServicePendingPhoneRegionCode?: string | undefined
  customerServiceVerifiedEmail?: string | undefined
  customerServiceVerifiedPhoneNumber?: string | undefined
  customerServiceVerifiedPhoneRegionCode?: string | undefined
  onlineSalesChannel?:
    | 'ONLINE_SALES_CHANNEL_UNSPECIFIED'
    | 'GOOGLE_EXCLUSIVE'
    | 'GOOGLE_AND_OTHER_WEBSITES'
    | undefined
  participationStage?:
    | 'PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED'
    | 'NOT_ELIGIBLE'
    | 'ELIGIBLE'
    | 'ONBOARDING'
    | 'ELIGIBLE_FOR_REVIEW'
    | 'PENDING_REVIEW'
    | 'REVIEW_DISAPPROVED'
    | 'ACTIVE'
    | 'PAUSED'
    | undefined
}
type ActivateBuyOnGoogleProgramRequest = { [x: string]: unknown }
type OnboardBuyOnGoogleProgramRequest = { customerServiceEmail?: string | undefined }
type PauseBuyOnGoogleProgramRequest = { [x: string]: unknown }
type RequestReviewBuyOnGoogleProgramRequest = { [x: string]: unknown }
type CollectionFeaturedProduct = {
  offerId?: string | undefined
  x?: number | undefined
  y?: number | undefined
}
type Collection = {
  customLabel0?: string | undefined
  customLabel1?: string | undefined
  customLabel2?: string | undefined
  customLabel3?: string | undefined
  customLabel4?: string | undefined
  featuredProduct?: CollectionFeaturedProduct[] | undefined
  headline?: string[] | undefined
  id?: string | undefined
  imageLink?: string[] | undefined
  language?: string | undefined
  link?: string | undefined
  mobileLink?: string | undefined
  productCountry?: string | undefined
}
type ListCollectionsResponse = {
  nextPageToken?: string | undefined
  resources?: Collection[] | undefined
}
type CollectionStatusItemLevelIssue = {
  applicableCountries?: string[] | undefined
  attributeName?: string | undefined
  code?: string | undefined
  description?: string | undefined
  destination?: string | undefined
  detail?: string | undefined
  documentation?: string | undefined
  resolution?: string | undefined
  servability?: string | undefined
}
type CollectionStatusDestinationStatus = {
  approvedCountries?: string[] | undefined
  destination?: string | undefined
  disapprovedCountries?: string[] | undefined
  pendingCountries?: string[] | undefined
  status?: string | undefined
}
type CollectionStatus = {
  collectionLevelIssuses?: CollectionStatusItemLevelIssue[] | undefined
  creationDate?: string | undefined
  destinationStatuses?: CollectionStatusDestinationStatus[] | undefined
  id?: string | undefined
  lastUpdateDate?: string | undefined
}
type ListCollectionStatusesResponse = {
  nextPageToken?: string | undefined
  resources?: CollectionStatus[] | undefined
}
type AttributionSettingsConversionType = {
  includeInReporting?: boolean | undefined
  name?: string | undefined
}
type AttributionSettings = {
  attributionLookbackWindowInDays?: number | undefined
  attributionModel?:
    | 'ATTRIBUTION_MODEL_UNSPECIFIED'
    | 'CROSS_CHANNEL_LAST_CLICK'
    | 'ADS_PREFERRED_LAST_CLICK'
    | 'CROSS_CHANNEL_DATA_DRIVEN'
    | 'CROSS_CHANNEL_FIRST_CLICK'
    | 'CROSS_CHANNEL_LINEAR'
    | 'CROSS_CHANNEL_POSITION_BASED'
    | 'CROSS_CHANNEL_TIME_DECAY'
    | undefined
  conversionType?: AttributionSettingsConversionType[] | undefined
}
type GoogleAnalyticsLink = {
  attributionSettings?: AttributionSettings | undefined
  propertyId?: string | undefined
  propertyName?: string | undefined
}
type MerchantCenterDestination = {
  attributionSettings?: AttributionSettings | undefined
  currencyCode?: string | undefined
  destinationId?: string | undefined
  displayName?: string | undefined
}
type ConversionSource = {
  conversionSourceId?: string | undefined
  expireTime?: string | undefined
  googleAnalyticsLink?: GoogleAnalyticsLink | undefined
  merchantCenterDestination?: MerchantCenterDestination | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'ARCHIVED' | 'PENDING' | undefined
}
type ListConversionSourcesResponse = {
  conversionSources?: ConversionSource[] | undefined
  nextPageToken?: string | undefined
}
type UndeleteConversionSourceRequest = { [x: string]: unknown }
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
type FreeListingsProgramStatusReviewIneligibilityReasonDetails = {
  cooldownTime?: string | undefined
}
type FreeListingsProgramStatusRegionStatus = {
  disapprovalDate?: string | undefined
  eligibilityStatus?:
    | 'STATE_UNSPECIFIED'
    | 'APPROVED'
    | 'DISAPPROVED'
    | 'WARNING'
    | 'UNDER_REVIEW'
    | 'PENDING_REVIEW'
    | 'ONBOARDING'
    | undefined
  onboardingIssues?: string[] | undefined
  regionCodes?: string[] | undefined
  reviewEligibilityStatus?: 'REVIEW_ELIGIBILITY_UNSPECIFIED' | 'ELIGIBLE' | 'INELIGIBLE' | undefined
  reviewIneligibilityReason?:
    | 'REVIEW_INELIGIBILITY_REASON_UNSPECIFIED'
    | 'ONBOARDING_ISSUES'
    | 'NOT_ENOUGH_OFFERS'
    | 'IN_COOLDOWN_PERIOD'
    | 'ALREADY_UNDER_REVIEW'
    | 'NO_REVIEW_REQUIRED'
    | 'WILL_BE_REVIEWED_AUTOMATICALLY'
    | 'IS_RETIRED'
    | 'ALREADY_REVIEWED'
    | undefined
  reviewIneligibilityReasonDescription?: string | undefined
  reviewIneligibilityReasonDetails?:
    | FreeListingsProgramStatusReviewIneligibilityReasonDetails
    | undefined
  reviewIssues?: string[] | undefined
}
type FreeListingsProgramStatus = {
  globalState?:
    | 'PROGRAM_STATE_UNSPECIFIED'
    | 'NOT_ENABLED'
    | 'NO_OFFERS_UPLOADED'
    | 'ENABLED'
    | undefined
  regionStatuses?: FreeListingsProgramStatusRegionStatus[] | undefined
}
type RequestReviewFreeListingsRequest = { regionCode?: string | undefined }
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
type Amount = { priceAmount?: Price | undefined; taxAmount?: Price | undefined }
type InvoiceSummaryAdditionalChargeSummary = {
  totalAmount?: Amount | undefined
  type?: string | undefined
}
type InvoiceSummary = {
  additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[] | undefined
  productTotal?: Amount | undefined
}
type UnitInvoiceAdditionalCharge = {
  additionalChargeAmount?: Amount | undefined
  type?: string | undefined
}
type UnitInvoiceTaxLine = {
  taxAmount?: Price | undefined
  taxName?: string | undefined
  taxType?: string | undefined
}
type UnitInvoice = {
  additionalCharges?: UnitInvoiceAdditionalCharge[] | undefined
  unitPrice?: Price | undefined
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
  productAmount?: ProductAmount | undefined
  transactionDate?: string | undefined
}
type OrderreportsListTransactionsResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  transactions?: OrderReportTransaction[] | undefined
}
type CustomerReturnReason = { description?: string | undefined; reasonCode?: string | undefined }
type MerchantRejectionReason = { description?: string | undefined; reasonCode?: string | undefined }
type RefundReason = { description?: string | undefined; reasonCode?: string | undefined }
type OrderLineItemProductFee = { amount?: Price | undefined; name?: string | undefined }
type OrderLineItemProductVariantAttribute = {
  dimension?: string | undefined
  value?: string | undefined
}
type OrderLineItemProduct = {
  brand?: string | undefined
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
type MonetaryAmount = { priceAmount?: Price | undefined; taxAmount?: Price | undefined }
type MerchantOrderReturnItem = {
  customerReturnReason?: CustomerReturnReason | undefined
  itemId?: string | undefined
  merchantRejectionReason?: MerchantRejectionReason | undefined
  merchantReturnReason?: RefundReason | undefined
  product?: OrderLineItemProduct | undefined
  refundableAmount?: MonetaryAmount | undefined
  returnItemId?: string | undefined
  returnShipmentIds?: string[] | undefined
  shipmentGroupId?: string | undefined
  shipmentUnitId?: string | undefined
  state?: string | undefined
}
type ReturnPricingInfo = {
  chargeReturnShippingFee?: boolean | undefined
  maxReturnShippingFee?: MonetaryAmount | undefined
  refundableItemsTotalAmount?: MonetaryAmount | undefined
  refundableShippingAmount?: MonetaryAmount | undefined
  totalRefundedAmount?: MonetaryAmount | undefined
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
  returnPricingInfo?: ReturnPricingInfo | undefined
  returnShipments?: ReturnShipment[] | undefined
}
type OrderreturnsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: MerchantOrderReturn[] | undefined
}
type OrderreturnsLineItem = {
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
}
type OrderreturnsCreateOrderReturnRequest = {
  lineItems?: OrderreturnsLineItem[] | undefined
  operationId?: string | undefined
  orderId?: string | undefined
  returnMethodType?: string | undefined
}
type OrderreturnsCreateOrderReturnResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
  orderReturn?: MerchantOrderReturn | undefined
}
type OrderreturnsAcknowledgeRequest = { operationId?: string | undefined }
type OrderreturnsAcknowledgeResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type ReturnShippingLabel = {
  carrier?: string | undefined
  labelUri?: string | undefined
  trackingId?: string | undefined
}
type OrderreturnsPartialRefund = { priceAmount?: Price | undefined; taxAmount?: Price | undefined }
type OrderreturnsRefundOperation = {
  fullRefund?: boolean | undefined
  partialRefund?: OrderreturnsPartialRefund | undefined
  paymentType?: string | undefined
  reasonText?: string | undefined
  returnRefundReason?: string | undefined
}
type OrderreturnsRejectOperation = { reason?: string | undefined; reasonText?: string | undefined }
type OrderreturnsReturnItem = {
  refund?: OrderreturnsRefundOperation | undefined
  reject?: OrderreturnsRejectOperation | undefined
  returnItemId?: string | undefined
}
type OrderreturnsProcessRequest = {
  fullChargeReturnShippingCost?: boolean | undefined
  operationId?: string | undefined
  refundShippingFee?: OrderreturnsRefundOperation | undefined
  returnItems?: OrderreturnsReturnItem[] | undefined
}
type OrderreturnsProcessResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrderOrderAnnotation = { key?: string | undefined; value?: string | undefined }
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
type OrderCustomerLoyaltyInfo = { loyaltyNumber?: string | undefined; name?: string | undefined }
type OrderCustomerMarketingRightsInfo = {
  explicitMarketingPreference?: string | undefined
  lastUpdatedTimestamp?: string | undefined
  marketingEmailAddress?: string | undefined
}
type OrderCustomer = {
  fullName?: string | undefined
  invoiceReceivingEmail?: string | undefined
  loyaltyInfo?: OrderCustomerLoyaltyInfo | undefined
  marketingRightsInfo?: OrderCustomerMarketingRightsInfo | undefined
}
type OrderDeliveryDetails = { address?: OrderAddress | undefined; phoneNumber?: string | undefined }
type OrderLineItemAdjustment = {
  priceAdjustment?: Price | undefined
  taxAdjustment?: Price | undefined
  type?: string | undefined
}
type OrderMerchantProvidedAnnotation = { key?: string | undefined; value?: string | undefined }
type OrderCancellation = {
  actor?: string | undefined
  creationDate?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
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
  pickupPromiseInMinutes?: number | undefined
  shipByDate?: string | undefined
  type?: string | undefined
}
type OrderLineItem = {
  adjustments?: OrderLineItemAdjustment[] | undefined
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
  quantityUndeliverable?: number | undefined
  returnInfo?: OrderLineItemReturnInfo | undefined
  returns?: OrderReturn[] | undefined
  shippingDetails?: OrderLineItemShippingDetails | undefined
  tax?: Price | undefined
}
type OrderPickupDetailsCollector = { name?: string | undefined; phoneNumber?: string | undefined }
type OrderPickupDetails = {
  address?: OrderAddress | undefined
  collectors?: OrderPickupDetailsCollector[] | undefined
  locationId?: string | undefined
  pickupType?: string | undefined
}
type OrderPromotionItem = {
  lineItemId?: string | undefined
  offerId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
}
type OrderPromotion = {
  applicableItems?: OrderPromotionItem[] | undefined
  appliedItems?: OrderPromotionItem[] | undefined
  endTime?: string | undefined
  funder?: string | undefined
  merchantPromotionId?: string | undefined
  priceValue?: Price | undefined
  shortTitle?: string | undefined
  startTime?: string | undefined
  subtype?: string | undefined
  taxValue?: Price | undefined
  title?: string | undefined
  type?: string | undefined
}
type OrderRefund = {
  actor?: string | undefined
  amount?: Price | undefined
  creationDate?: string | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrderShipmentLineItemShipment = {
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
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
  shipmentGroupId?: string | undefined
  status?: string | undefined
  trackingId?: string | undefined
}
type Order = {
  acknowledged?: boolean | undefined
  annotations?: OrderOrderAnnotation[] | undefined
  billingAddress?: OrderAddress | undefined
  customer?: OrderCustomer | undefined
  deliveryDetails?: OrderDeliveryDetails | undefined
  id?: string | undefined
  kind?: string | undefined
  lineItems?: OrderLineItem[] | undefined
  merchantId?: string | undefined
  merchantOrderId?: string | undefined
  netPriceAmount?: Price | undefined
  netTaxAmount?: Price | undefined
  paymentStatus?: string | undefined
  pickupDetails?: OrderPickupDetails | undefined
  placedDate?: string | undefined
  promotions?: OrderPromotion[] | undefined
  refunds?: OrderRefund[] | undefined
  shipments?: OrderShipment[] | undefined
  shippingCost?: Price | undefined
  shippingCostTax?: Price | undefined
  status?: string | undefined
  taxCollector?: string | undefined
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
type CaptureOrderRequest = { [x: string]: unknown }
type CaptureOrderResponse = {
  executionStatus?: 'EXECUTION_STATUS_UNSPECIFIED' | 'EXECUTED' | 'DUPLICATE' | undefined
}
type OrdersInStoreRefundLineItemRequest = {
  lineItemId?: string | undefined
  operationId?: string | undefined
  priceAmount?: Price | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
  taxAmount?: Price | undefined
}
type OrdersInStoreRefundLineItemResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersCustomBatchRequestEntryRefundItemItem = {
  amount?: MonetaryAmount | undefined
  fullRefund?: boolean | undefined
  lineItemId?: string | undefined
  productId?: string | undefined
  quantity?: number | undefined
}
type OrdersCustomBatchRequestEntryRefundItemShipping = {
  amount?: Price | undefined
  fullRefund?: boolean | undefined
}
type OrdersRefundItemRequest = {
  items?: OrdersCustomBatchRequestEntryRefundItemItem[] | undefined
  operationId?: string | undefined
  reason?: string | undefined
  reasonText?: string | undefined
  shipping?: OrdersCustomBatchRequestEntryRefundItemShipping | undefined
}
type OrdersRefundItemResponse = { executionStatus?: string | undefined; kind?: string | undefined }
type OrdersRefundOrderRequest = {
  amount?: MonetaryAmount | undefined
  fullRefund?: boolean | undefined
  operationId?: string | undefined
  reason?: string | undefined
  reasonText?: string | undefined
}
type OrdersRefundOrderResponse = { executionStatus?: string | undefined; kind?: string | undefined }
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
type OrdersReturnRefundLineItemRequest = {
  lineItemId?: string | undefined
  operationId?: string | undefined
  priceAmount?: Price | undefined
  productId?: string | undefined
  quantity?: number | undefined
  reason?: string | undefined
  reasonText?: string | undefined
  taxAmount?: Price | undefined
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
type OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo = {
  carrier?: string | undefined
  shipmentId?: string | undefined
  trackingId?: string | undefined
}
type OrdersShipLineItemsRequest = {
  lineItems?: OrderShipmentLineItemShipment[] | undefined
  operationId?: string | undefined
  shipmentGroupId?: string | undefined
  shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] | undefined
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
type OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails = {
  carrierPhoneNumber?: string | undefined
  scheduledDate?: string | undefined
}
type OrdersUpdateShipmentRequest = {
  carrier?: string | undefined
  deliveryDate?: string | undefined
  lastPickupDate?: string | undefined
  operationId?: string | undefined
  readyPickupDate?: string | undefined
  scheduledDeliveryDetails?:
    | OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails
    | undefined
  shipmentId?: string | undefined
  status?: string | undefined
  trackingId?: string | undefined
  undeliveredDate?: string | undefined
}
type OrdersUpdateShipmentResponse = {
  executionStatus?: string | undefined
  kind?: string | undefined
}
type OrdersGetByMerchantOrderIdResponse = { kind?: string | undefined; order?: Order | undefined }
type PriceAmount = { currency?: string | undefined; value?: string | undefined }
type OrderTrackingSignalLineItemDetails = {
  brand?: string | undefined
  gtin?: string | undefined
  lineItemId?: string | undefined
  mpn?: string | undefined
  productDescription?: string | undefined
  productId?: string | undefined
  productTitle?: string | undefined
  quantity?: string | undefined
  sku?: string | undefined
  upc?: string | undefined
}
type TimeZone = { id?: string | undefined; version?: string | undefined }
type DateTime = {
  day?: number | undefined
  hours?: number | undefined
  minutes?: number | undefined
  month?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
  timeZone?: TimeZone | undefined
  utcOffset?: string | undefined
  year?: number | undefined
}
type OrderTrackingSignalShipmentLineItemMapping = {
  lineItemId?: string | undefined
  quantity?: string | undefined
  shipmentId?: string | undefined
}
type OrderTrackingSignalShippingInfo = {
  actualDeliveryTime?: DateTime | undefined
  carrierName?: string | undefined
  carrierServiceName?: string | undefined
  earliestDeliveryPromiseTime?: DateTime | undefined
  latestDeliveryPromiseTime?: DateTime | undefined
  originPostalCode?: string | undefined
  originRegionCode?: string | undefined
  shipmentId?: string | undefined
  shippedTime?: DateTime | undefined
  shippingStatus?: 'SHIPPING_STATE_UNSPECIFIED' | 'SHIPPED' | 'DELIVERED' | undefined
  trackingId?: string | undefined
}
type OrderTrackingSignal = {
  customerShippingFee?: PriceAmount | undefined
  deliveryPostalCode?: string | undefined
  deliveryRegionCode?: string | undefined
  lineItems?: OrderTrackingSignalLineItemDetails[] | undefined
  merchantId?: string | undefined
  orderCreatedTime?: DateTime | undefined
  orderId?: string | undefined
  orderTrackingSignalId?: string | undefined
  shipmentLineItemMapping?: OrderTrackingSignalShipmentLineItemMapping[] | undefined
  shippingInfo?: OrderTrackingSignalShippingInfo[] | undefined
}
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
type DeliveryAreaPostalCodeRange = {
  firstPostalCode?: string | undefined
  lastPostalCode?: string | undefined
}
type DeliveryArea = {
  countryCode?: string | undefined
  postalCodeRange?: DeliveryAreaPostalCodeRange | undefined
  regionCode?: string | undefined
}
type ProductDeliveryTimeAreaDeliveryTimeDeliveryTime = {
  maxHandlingTimeDays?: number | undefined
  maxTransitTimeDays?: number | undefined
  minHandlingTimeDays?: number | undefined
  minTransitTimeDays?: number | undefined
}
type ProductDeliveryTimeAreaDeliveryTime = {
  deliveryArea?: DeliveryArea | undefined
  deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime | undefined
}
type ProductId = { productId?: string | undefined }
type ProductDeliveryTime = {
  areaDeliveryTimes?: ProductDeliveryTimeAreaDeliveryTime[] | undefined
  productId?: ProductId | undefined
}
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
type RepricingProductReportBuyboxWinningProductStats = { buyboxWinsCount?: number | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type InapplicabilityDetails = {
  inapplicableCount?: string | undefined
  inapplicableReason?:
    | 'INAPPLICABLE_REASON_UNSPECIFIED'
    | 'CANNOT_BEAT_BUYBOX_WINNER'
    | 'ALREADY_WINNING_BUYBOX'
    | 'TRIUMPHED_OVER_BY_SAME_TYPE_RULE'
    | 'TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER'
    | 'RESTRICTIONS_NOT_MET'
    | 'UNCATEGORIZED'
    | 'INVALID_AUTO_PRICE_MIN'
    | 'INVALID_FLOOR_CONFIG'
    | undefined
}
type RepricingProductReport = {
  applicationCount?: string | undefined
  buyboxWinningProductStats?: RepricingProductReportBuyboxWinningProductStats | undefined
  date?: Date | undefined
  highWatermark?: PriceAmount | undefined
  inapplicabilityDetails?: InapplicabilityDetails[] | undefined
  lowWatermark?: PriceAmount | undefined
  orderItemCount?: number | undefined
  ruleIds?: string[] | undefined
  totalGmv?: PriceAmount | undefined
  type?:
    | 'REPRICING_RULE_TYPE_UNSPECIFIED'
    | 'TYPE_STATS_BASED'
    | 'TYPE_COGS_BASED'
    | 'TYPE_SALES_VOLUME_BASED'
    | 'TYPE_COMPETITIVE_PRICE'
    | undefined
}
type ListRepricingProductReportsResponse = {
  nextPageToken?: string | undefined
  repricingProductReports?: RepricingProductReport[] | undefined
}
type TimePeriod = { endTime?: string | undefined; startTime?: string | undefined }
type PromotionPromotionStatusDestinationStatus = {
  destination?: string | undefined
  status?:
    | 'STATE_UNSPECIFIED'
    | 'IN_REVIEW'
    | 'REJECTED'
    | 'LIVE'
    | 'STOPPED'
    | 'EXPIRED'
    | 'PENDING'
    | undefined
}
type PromotionPromotionStatusPromotionIssue = {
  code?: string | undefined
  detail?: string | undefined
}
type PromotionPromotionStatus = {
  creationDate?: string | undefined
  destinationStatuses?: PromotionPromotionStatusDestinationStatus[] | undefined
  lastUpdateDate?: string | undefined
  promotionIssue?: PromotionPromotionStatusPromotionIssue[] | undefined
}
type Promotion = {
  brand?: string[] | undefined
  brandExclusion?: string[] | undefined
  contentLanguage?: string | undefined
  couponValueType?:
    | 'COUPON_VALUE_TYPE_UNSPECIFIED'
    | 'MONEY_OFF'
    | 'PERCENT_OFF'
    | 'BUY_M_GET_N_MONEY_OFF'
    | 'BUY_M_GET_N_PERCENT_OFF'
    | 'BUY_M_GET_MONEY_OFF'
    | 'BUY_M_GET_PERCENT_OFF'
    | 'FREE_GIFT'
    | 'FREE_GIFT_WITH_VALUE'
    | 'FREE_GIFT_WITH_ITEM_ID'
    | 'FREE_SHIPPING_STANDARD'
    | 'FREE_SHIPPING_OVERNIGHT'
    | 'FREE_SHIPPING_TWO_DAY'
    | undefined
  freeGiftDescription?: string | undefined
  freeGiftItemId?: string | undefined
  freeGiftValue?: PriceAmount | undefined
  genericRedemptionCode?: string | undefined
  getThisQuantityDiscounted?: number | undefined
  id?: string | undefined
  itemGroupId?: string[] | undefined
  itemGroupIdExclusion?: string[] | undefined
  itemId?: string[] | undefined
  itemIdExclusion?: string[] | undefined
  limitQuantity?: number | undefined
  limitValue?: PriceAmount | undefined
  longTitle?: string | undefined
  minimumPurchaseAmount?: PriceAmount | undefined
  minimumPurchaseQuantity?: number | undefined
  moneyBudget?: PriceAmount | undefined
  moneyOffAmount?: PriceAmount | undefined
  offerType?: 'OFFER_TYPE_UNSPECIFIED' | 'NO_CODE' | 'GENERIC_CODE' | undefined
  orderLimit?: number | undefined
  percentOff?: number | undefined
  productApplicability?:
    | 'PRODUCT_APPLICABILITY_UNSPECIFIED'
    | 'ALL_PRODUCTS'
    | 'SPECIFIC_PRODUCTS'
    | undefined
  productType?: string[] | undefined
  productTypeExclusion?: string[] | undefined
  promotionDestinationIds?: string[] | undefined
  promotionDisplayDates?: string | undefined
  promotionDisplayTimePeriod?: TimePeriod | undefined
  promotionEffectiveDates?: string | undefined
  promotionEffectiveTimePeriod?: TimePeriod | undefined
  promotionId?: string | undefined
  promotionStatus?: PromotionPromotionStatus | undefined
  promotionUrl?: string | undefined
  redemptionChannel?: ('REDEMPTION_CHANNEL_UNSPECIFIED' | 'IN_STORE' | 'ONLINE')[] | undefined
  shippingServiceNames?: string[] | undefined
  storeApplicability?:
    | 'STORE_APPLICABILITY_UNSPECIFIED'
    | 'ALL_STORES'
    | 'SPECIFIC_STORES'
    | undefined
  storeCode?: string[] | undefined
  storeCodeExclusion?: string[] | undefined
  targetCountry?: string | undefined
}
type PubsubNotificationSettings = {
  cloudTopicName?: string | undefined
  kind?: string | undefined
  registeredEvents?: string[] | undefined
}
type MethodQuota = {
  method?: string | undefined
  quotaLimit?: string | undefined
  quotaUsage?: string | undefined
}
type ListMethodQuotasResponse = {
  methodQuotas?: MethodQuota[] | undefined
  nextPageToken?: string | undefined
}
type RecommendationCallToAction = {
  intent?: string | undefined
  localizedText?: string | undefined
  uri?: string | undefined
}
type RecommendationDescription = {
  text?: string | undefined
  type?: 'DESCRIPTION_TYPE_UNSPECIFIED' | 'SHORT' | 'LONG' | undefined
}
type RecommendationCreative = {
  type?: 'CREATIVE_TYPE_UNSPECIFIED' | 'VIDEO' | 'PHOTO' | undefined
  uri?: string | undefined
}
type Recommendation = {
  additionalCallToAction?: RecommendationCallToAction[] | undefined
  additionalDescriptions?: RecommendationDescription[] | undefined
  creative?: RecommendationCreative[] | undefined
  defaultCallToAction?: RecommendationCallToAction | undefined
  defaultDescription?: string | undefined
  numericalImpact?: number | undefined
  paid?: boolean | undefined
  recommendationName?: string | undefined
  subType?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type GenerateRecommendationsResponse = {
  recommendations?: Recommendation[] | undefined
  responseToken?: string | undefined
}
type ReportInteractionRequest = {
  interactionType?: 'INTERACTION_TYPE_UNSPECIFIED' | 'INTERACTION_CLICK' | undefined
  responseToken?: string | undefined
  subtype?: string | undefined
  type?: string | undefined
}
type RegionGeoTargetArea = { geotargetCriteriaIds?: string[] | undefined }
type RegionPostalCodeAreaPostalCodeRange = { begin?: string | undefined; end?: string | undefined }
type RegionPostalCodeArea = {
  postalCodes?: RegionPostalCodeAreaPostalCodeRange[] | undefined
  regionCode?: string | undefined
}
type Region = {
  displayName?: string | undefined
  geotargetArea?: RegionGeoTargetArea | undefined
  merchantId?: string | undefined
  postalCodeArea?: RegionPostalCodeArea | undefined
  regionId?: string | undefined
  regionalInventoryEligible?: boolean | undefined
  shippingEligible?: boolean | undefined
}
type ListRegionsResponse = { nextPageToken?: string | undefined; regions?: Region[] | undefined }
type SearchRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
  query?: string | undefined
}
type BestSellers = {
  categoryId?: string | undefined
  countryCode?: string | undefined
  previousRank?: string | undefined
  previousRelativeDemand?:
    | 'RELATIVE_DEMAND_UNSPECIFIED'
    | 'VERY_LOW'
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'VERY_HIGH'
    | undefined
  rank?: string | undefined
  relativeDemand?:
    | 'RELATIVE_DEMAND_UNSPECIFIED'
    | 'VERY_LOW'
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'VERY_HIGH'
    | undefined
  relativeDemandChange?:
    | 'RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED'
    | 'SINKER'
    | 'FLAT'
    | 'RISER'
    | undefined
  reportDate?: Date | undefined
  reportGranularity?: 'REPORT_GRANULARITY_UNSPECIFIED' | 'WEEKLY' | 'MONTHLY' | undefined
}
type Brand = { name?: string | undefined }
type Metrics = {
  aos?: number | undefined
  aovMicros?: number | undefined
  clicks?: string | undefined
  conversionRate?: number | undefined
  conversionValueMicros?: string | undefined
  conversions?: number | undefined
  ctr?: number | undefined
  daysToShip?: number | undefined
  impressions?: string | undefined
  itemDaysToShip?: number | undefined
  itemFillRate?: number | undefined
  orderedItemSalesMicros?: string | undefined
  orderedItems?: string | undefined
  orders?: string | undefined
  rejectedItems?: string | undefined
  returnRate?: number | undefined
  returnedItems?: string | undefined
  returnsMicros?: string | undefined
  shippedItemSalesMicros?: string | undefined
  shippedItems?: string | undefined
  shippedOrders?: string | undefined
  unshippedItems?: number | undefined
  unshippedOrders?: number | undefined
}
type PriceCompetitiveness = {
  benchmarkPriceCurrencyCode?: string | undefined
  benchmarkPriceMicros?: string | undefined
  countryCode?: string | undefined
}
type PriceInsights = {
  predictedClicksChangeFraction?: number | undefined
  predictedConversionsChangeFraction?: number | undefined
  predictedGrossProfitChangeFraction?: number | undefined
  predictedImpressionsChangeFraction?: number | undefined
  predictedMonthlyGrossProfitChangeCurrencyCode?: string | undefined
  predictedMonthlyGrossProfitChangeMicros?: string | undefined
  suggestedPriceCurrencyCode?: string | undefined
  suggestedPriceMicros?: string | undefined
}
type ProductCluster = {
  brand?: string | undefined
  brandInventoryStatus?:
    | 'INVENTORY_STATUS_UNSPECIFIED'
    | 'IN_STOCK'
    | 'OUT_OF_STOCK'
    | 'NOT_IN_INVENTORY'
    | undefined
  categoryL1?: string | undefined
  categoryL2?: string | undefined
  categoryL3?: string | undefined
  categoryL4?: string | undefined
  categoryL5?: string | undefined
  inventoryStatus?:
    | 'INVENTORY_STATUS_UNSPECIFIED'
    | 'IN_STOCK'
    | 'OUT_OF_STOCK'
    | 'NOT_IN_INVENTORY'
    | undefined
  title?: string | undefined
  variantGtins?: string[] | undefined
}
type ProductViewItemIssueItemIssueType = { canonicalAttribute?: string | undefined }
type ProductViewItemIssueIssueSeverityPerDestination = {
  demotedCountries?: string[] | undefined
  destination?: string | undefined
  disapprovedCountries?: string[] | undefined
}
type ProductViewItemIssueItemIssueSeverity = {
  aggregatedSeverity?:
    | 'AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED'
    | 'DISAPPROVED'
    | 'DEMOTED'
    | 'PENDING'
    | undefined
  severityPerDestination?: ProductViewItemIssueIssueSeverityPerDestination[] | undefined
}
type ProductViewItemIssue = {
  issueType?: ProductViewItemIssueItemIssueType | undefined
  resolution?: 'UNKNOWN' | 'MERCHANT_ACTION' | 'PENDING_PROCESSING' | undefined
  severity?: ProductViewItemIssueItemIssueSeverity | undefined
}
type ProductView = {
  aggregatedDestinationStatus?:
    | 'AGGREGATED_STATUS_UNSPECIFIED'
    | 'NOT_ELIGIBLE_OR_DISAPPROVED'
    | 'PENDING'
    | 'ELIGIBLE_LIMITED'
    | 'ELIGIBLE'
    | undefined
  availability?: string | undefined
  brand?: string | undefined
  categoryL1?: string | undefined
  categoryL2?: string | undefined
  categoryL3?: string | undefined
  categoryL4?: string | undefined
  categoryL5?: string | undefined
  channel?: 'CHANNEL_UNSPECIFIED' | 'LOCAL' | 'ONLINE' | undefined
  condition?: string | undefined
  creationTime?: string | undefined
  currencyCode?: string | undefined
  expirationDate?: Date | undefined
  gtin?: string[] | undefined
  id?: string | undefined
  itemGroupId?: string | undefined
  itemIssues?: ProductViewItemIssue[] | undefined
  languageCode?: string | undefined
  offerId?: string | undefined
  priceMicros?: string | undefined
  productTypeL1?: string | undefined
  productTypeL2?: string | undefined
  productTypeL3?: string | undefined
  productTypeL4?: string | undefined
  productTypeL5?: string | undefined
  shippingLabel?: string | undefined
  title?: string | undefined
}
type Segments = {
  brand?: string | undefined
  categoryL1?: string | undefined
  categoryL2?: string | undefined
  categoryL3?: string | undefined
  categoryL4?: string | undefined
  categoryL5?: string | undefined
  currencyCode?: string | undefined
  customLabel0?: string | undefined
  customLabel1?: string | undefined
  customLabel2?: string | undefined
  customLabel3?: string | undefined
  customLabel4?: string | undefined
  customerCountryCode?: string | undefined
  date?: Date | undefined
  offerId?: string | undefined
  productTypeL1?: string | undefined
  productTypeL2?: string | undefined
  productTypeL3?: string | undefined
  productTypeL4?: string | undefined
  productTypeL5?: string | undefined
  program?:
    | 'PROGRAM_UNSPECIFIED'
    | 'SHOPPING_ADS'
    | 'FREE_PRODUCT_LISTING'
    | 'FREE_LOCAL_PRODUCT_LISTING'
    | 'BUY_ON_GOOGLE_LISTING'
    | undefined
  title?: string | undefined
  week?: Date | undefined
}
type ReportRow = {
  bestSellers?: BestSellers | undefined
  brand?: Brand | undefined
  metrics?: Metrics | undefined
  priceCompetitiveness?: PriceCompetitiveness | undefined
  priceInsights?: PriceInsights | undefined
  productCluster?: ProductCluster | undefined
  productView?: ProductView | undefined
  segments?: Segments | undefined
}
type SearchResponse = { nextPageToken?: string | undefined; results?: ReportRow[] | undefined }
type RepricingRuleCostOfGoodsSaleRule = {
  percentageDelta?: number | undefined
  priceDelta?: string | undefined
}
type RepricingRuleEffectiveTimeFixedTimePeriod = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type RepricingRuleEffectiveTime = {
  fixedTimePeriods?: RepricingRuleEffectiveTimeFixedTimePeriod[] | undefined
}
type RepricingRuleEligibleOfferMatcherStringMatcher = { strAttributes?: string[] | undefined }
type RepricingRuleEligibleOfferMatcher = {
  brandMatcher?: RepricingRuleEligibleOfferMatcherStringMatcher | undefined
  itemGroupIdMatcher?: RepricingRuleEligibleOfferMatcherStringMatcher | undefined
  matcherOption?:
    | 'MATCHER_OPTION_UNSPECIFIED'
    | 'MATCHER_OPTION_CUSTOM_FILTER'
    | 'MATCHER_OPTION_USE_FEED_ATTRIBUTE'
    | 'MATCHER_OPTION_ALL_PRODUCTS'
    | undefined
  offerIdMatcher?: RepricingRuleEligibleOfferMatcherStringMatcher | undefined
  skipWhenOnPromotion?: boolean | undefined
}
type RepricingRuleRestrictionBoundary = {
  percentageDelta?: number | undefined
  priceDelta?: string | undefined
}
type RepricingRuleRestriction = {
  floor?: RepricingRuleRestrictionBoundary | undefined
  useAutoPricingMinPrice?: boolean | undefined
}
type RepricingRuleStatsBasedRule = {
  percentageDelta?: number | undefined
  priceDelta?: string | undefined
}
type RepricingRule = {
  cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule | undefined
  countryCode?: string | undefined
  effectiveTimePeriod?: RepricingRuleEffectiveTime | undefined
  eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher | undefined
  languageCode?: string | undefined
  merchantId?: string | undefined
  paused?: boolean | undefined
  restriction?: RepricingRuleRestriction | undefined
  ruleId?: string | undefined
  statsBasedRule?: RepricingRuleStatsBasedRule | undefined
  title?: string | undefined
  type?:
    | 'REPRICING_RULE_TYPE_UNSPECIFIED'
    | 'TYPE_STATS_BASED'
    | 'TYPE_COGS_BASED'
    | 'TYPE_SALES_VOLUME_BASED'
    | 'TYPE_COMPETITIVE_PRICE'
    | undefined
}
type ListRepricingRulesResponse = {
  nextPageToken?: string | undefined
  repricingRules?: RepricingRule[] | undefined
}
type RepricingRuleReportBuyboxWinningRuleStats = { buyboxWonProductCount?: number | undefined }
type RepricingRuleReport = {
  buyboxWinningRuleStats?: RepricingRuleReportBuyboxWinningRuleStats | undefined
  date?: Date | undefined
  impactedProducts?: string[] | undefined
  inapplicabilityDetails?: InapplicabilityDetails[] | undefined
  inapplicableProducts?: string[] | undefined
  orderItemCount?: number | undefined
  ruleId?: string | undefined
  totalGmv?: PriceAmount | undefined
  type?:
    | 'REPRICING_RULE_TYPE_UNSPECIFIED'
    | 'TYPE_STATS_BASED'
    | 'TYPE_COGS_BASED'
    | 'TYPE_SALES_VOLUME_BASED'
    | 'TYPE_COMPETITIVE_PRICE'
    | undefined
}
type ListRepricingRuleReportsResponse = {
  nextPageToken?: string | undefined
  repricingRuleReports?: RepricingRuleReport[] | undefined
}
type ReturnaddressListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: ReturnAddress[] | undefined
}
type ReturnpolicyListResponse = {
  kind?: string | undefined
  resources?: ReturnPolicy[] | undefined
}
type ReturnPolicyOnlinePolicy = {
  days?: string | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'NUMBER_OF_DAYS_AFTER_DELIVERY'
    | 'NO_RETURNS'
    | 'LIFETIME_RETURNS'
    | undefined
}
type ReturnPolicyOnlineRestockingFee = {
  fixedFee?: PriceAmount | undefined
  microPercent?: number | undefined
}
type ReturnPolicyOnlineReturnShippingFee = {
  fixedFee?: PriceAmount | undefined
  type?: 'TYPE_UNSPECIFIED' | 'FIXED' | 'CUSTOMER_PAYING_ACTUAL_FEE' | undefined
}
type ReturnPolicyOnlineReturnReasonCategoryInfo = {
  returnLabelSource?:
    | 'RETURN_LABEL_SOURCE_UNSPECIFIED'
    | 'DOWNLOAD_AND_PRINT'
    | 'IN_THE_BOX'
    | 'CUSTOMER_RESPONSIBILITY'
    | undefined
  returnReasonCategory?:
    | 'RETURN_REASON_CATEGORY_UNSPECIFIED'
    | 'BUYER_REMORSE'
    | 'ITEM_DEFECT'
    | undefined
  returnShippingFee?: ReturnPolicyOnlineReturnShippingFee | undefined
}
type ReturnPolicyOnline = {
  countries?: string[] | undefined
  itemConditions?: ('ITEM_CONDITION_UNSPECIFIED' | 'NEW' | 'USED')[] | undefined
  label?: string | undefined
  name?: string | undefined
  policy?: ReturnPolicyOnlinePolicy | undefined
  restockingFee?: ReturnPolicyOnlineRestockingFee | undefined
  returnMethods?:
    | ('RETURN_METHOD_UNSPECIFIED' | 'BY_MAIL' | 'IN_STORE' | 'AT_A_KIOSK')[]
    | undefined
  returnPolicyId?: string | undefined
  returnPolicyUri?: string | undefined
  returnReasonCategoryInfo?: ReturnPolicyOnlineReturnReasonCategoryInfo[] | undefined
}
type ListReturnPolicyOnlineResponse = { returnPolicies?: ReturnPolicyOnline[] | undefined }
type SettlementReport = {
  endDate?: string | undefined
  kind?: string | undefined
  previousBalance?: Price | undefined
  settlementId?: string | undefined
  startDate?: string | undefined
  transferAmount?: Price | undefined
  transferDate?: string | undefined
  transferIds?: string[] | undefined
}
type SettlementreportsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: SettlementReport[] | undefined
}
type SettlementTransactionAmountCommission = {
  category?: string | undefined
  rate?: string | undefined
}
type SettlementTransactionAmount = {
  commission?: SettlementTransactionAmountCommission | undefined
  description?: string | undefined
  transactionAmount?: Price | undefined
  type?: string | undefined
}
type SettlementTransactionIdentifiers = {
  adjustmentId?: string | undefined
  merchantOrderId?: string | undefined
  orderItemId?: string | undefined
  settlementEntryId?: string | undefined
  shipmentIds?: string[] | undefined
  transactionId?: string | undefined
}
type SettlementTransactionTransaction = { postDate?: string | undefined; type?: string | undefined }
type SettlementTransaction = {
  amount?: SettlementTransactionAmount | undefined
  identifiers?: SettlementTransactionIdentifiers | undefined
  kind?: string | undefined
  transaction?: SettlementTransactionTransaction | undefined
}
type SettlementtransactionsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: SettlementTransaction[] | undefined
}
type ShippingsettingsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resources?: ShippingSettings[] | undefined
}
type ShoppingAdsProgramStatusReviewIneligibilityReasonDetails = {
  cooldownTime?: string | undefined
}
type ShoppingAdsProgramStatusRegionStatus = {
  disapprovalDate?: string | undefined
  eligibilityStatus?:
    | 'STATE_UNSPECIFIED'
    | 'APPROVED'
    | 'DISAPPROVED'
    | 'WARNING'
    | 'UNDER_REVIEW'
    | 'PENDING_REVIEW'
    | 'ONBOARDING'
    | undefined
  onboardingIssues?: string[] | undefined
  regionCodes?: string[] | undefined
  reviewEligibilityStatus?: 'REVIEW_ELIGIBILITY_UNSPECIFIED' | 'ELIGIBLE' | 'INELIGIBLE' | undefined
  reviewIneligibilityReason?:
    | 'REVIEW_INELIGIBILITY_REASON_UNSPECIFIED'
    | 'ONBOARDING_ISSUES'
    | 'NOT_ENOUGH_OFFERS'
    | 'IN_COOLDOWN_PERIOD'
    | 'ALREADY_UNDER_REVIEW'
    | 'NO_REVIEW_REQUIRED'
    | 'WILL_BE_REVIEWED_AUTOMATICALLY'
    | 'IS_RETIRED'
    | 'ALREADY_REVIEWED'
    | undefined
  reviewIneligibilityReasonDescription?: string | undefined
  reviewIneligibilityReasonDetails?:
    | ShoppingAdsProgramStatusReviewIneligibilityReasonDetails
    | undefined
  reviewIssues?: string[] | undefined
}
type ShoppingAdsProgramStatus = {
  globalState?:
    | 'PROGRAM_STATE_UNSPECIFIED'
    | 'NOT_ENABLED'
    | 'NO_OFFERS_UPLOADED'
    | 'ENABLED'
    | undefined
  regionStatuses?: ShoppingAdsProgramStatusRegionStatus[] | undefined
}
type RequestReviewShoppingAdsRequest = { regionCode?: string | undefined }
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
type TestOrderAddress = {
  country?: string | undefined
  fullAddress?: string[] | undefined
  isPostOfficeBox?: boolean | undefined
  locality?: string | undefined
  postalCode?: string | undefined
  recipientName?: string | undefined
  region?: string | undefined
  streetAddress?: string[] | undefined
}
type TestOrderDeliveryDetails = {
  address?: TestOrderAddress | undefined
  isScheduledDelivery?: boolean | undefined
  phoneNumber?: string | undefined
}
type TestOrderLineItemProduct = {
  brand?: string | undefined
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
}
type TestOrderPickupDetailsPickupPerson = {
  name?: string | undefined
  phoneNumber?: string | undefined
}
type TestOrderPickupDetails = {
  locationCode?: string | undefined
  pickupLocationAddress?: TestOrderAddress | undefined
  pickupLocationType?: string | undefined
  pickupPersons?: TestOrderPickupDetailsPickupPerson[] | undefined
}
type TestOrder = {
  deliveryDetails?: TestOrderDeliveryDetails | undefined
  enableOrderinvoices?: boolean | undefined
  kind?: string | undefined
  lineItems?: TestOrderLineItem[] | undefined
  notificationMode?: string | undefined
  pickupDetails?: TestOrderPickupDetails | undefined
  predefinedBillingAddress?: string | undefined
  predefinedDeliveryAddress?: string | undefined
  predefinedEmail?: string | undefined
  predefinedPickupDetails?: string | undefined
  promotions?: OrderPromotion[] | undefined
  shippingCost?: Price | undefined
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
    '/accounts/:accountId/credentials': {
      $post: {
        input: { param: { accountId: string } } & {
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
        } & { json: AccountCredentials }
        output: AccountCredentials
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/labels': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            pageSize?: number | undefined
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
        output: ListAccountLabelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
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
        } & { json: AccountLabel }
        output: AccountLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/labels/:labelId': {
      $delete: {
        input: { param: { accountId: string; labelId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; labelId: string } } & {
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
        } & { json: AccountLabel }
        output: AccountLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/returncarrier': {
      $get: {
        input: { param: { accountId: string } } & {
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
        output: ListAccountReturnCarrierResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
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
        } & { json: AccountReturnCarrier }
        output: AccountReturnCarrier
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/returncarrier/:carrierAccountId': {
      $delete: {
        input: { param: { accountId: string; carrierAccountId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; carrierAccountId: string } } & {
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
        } & { json: AccountReturnCarrier }
        output: AccountReturnCarrier
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
    '/localinventory/batch': {
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
        } & { json: LocalinventoryCustomBatchRequest }
        output: LocalinventoryCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pos/batch': {
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
    '/regionalinventory/batch': {
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
        } & { json: RegionalinventoryCustomBatchRequest }
        output: RegionalinventoryCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/returnaddress/batch': {
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
        } & { json: ReturnaddressCustomBatchRequest }
        output: ReturnaddressCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/returnpolicy/batch': {
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
        } & { json: ReturnpolicyCustomBatchRequest }
        output: ReturnpolicyCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shippingsettings/batch': {
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
        } & { json: ShippingsettingsCustomBatchRequest }
        output: ShippingsettingsCustomBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:cssGroupId/csses': {
      $get: {
        input: { param: { cssGroupId: string } } & {
          query: {
            pageSize?: number | undefined
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
        output: ListCssesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:cssGroupId/csses/:cssDomainId': {
      $get: {
        input: { param: { cssGroupId: string; cssDomainId: string } } & {
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
        output: Css
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:cssGroupId/csses/:cssDomainId/updatelabels': {
      $post: {
        input: { param: { cssGroupId: string; cssDomainId: string } } & {
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
        } & { json: LabelIds }
        output: Css
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            label?: string | undefined
            maxResults?: number | undefined
            name?: string | undefined
            pageToken?: string | undefined
            view?: 'MERCHANT' | 'CSS' | undefined
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
            view?: 'MERCHANT' | 'CSS' | undefined
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
    '/:merchantId/accounts/:accountId/listlinks': {
      $get: {
        input: { param: { merchantId: string; accountId: string } } & {
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
        output: AccountsListLinksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts/:accountId/requestphoneverification': {
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
        } & { json: RequestPhoneVerificationRequest }
        output: RequestPhoneVerificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts/:accountId/updatelabels': {
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
        } & { json: AccountsUpdateLabelsRequest }
        output: AccountsUpdateLabelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/accounts/:accountId/verifyphonenumber': {
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
        } & { json: VerifyPhoneNumberRequest }
        output: VerifyPhoneNumberResponse
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
            name?: string | undefined
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
    '/:merchantId/buyongoogleprograms/:regionCode': {
      $get: {
        input: { param: { merchantId: string; regionCode: string } } & {
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
        output: BuyOnGoogleProgramStatus
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { merchantId: string; regionCode: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: BuyOnGoogleProgramStatus }
        output: BuyOnGoogleProgramStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/buyongoogleprograms/:regionCode/activate': {
      $post: {
        input: { param: { merchantId: string; regionCode: string } } & {
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
        } & { json: ActivateBuyOnGoogleProgramRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:merchantId/buyongoogleprograms/:regionCode/onboard': {
      $post: {
        input: { param: { merchantId: string; regionCode: string } } & {
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
        } & { json: OnboardBuyOnGoogleProgramRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:merchantId/buyongoogleprograms/:regionCode/pause': {
      $post: {
        input: { param: { merchantId: string; regionCode: string } } & {
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
        } & { json: PauseBuyOnGoogleProgramRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:merchantId/buyongoogleprograms/:regionCode/requestreview': {
      $post: {
        input: { param: { merchantId: string; regionCode: string } } & {
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
        } & { json: RequestReviewBuyOnGoogleProgramRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:merchantId/collections': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            pageSize?: number | undefined
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
        output: ListCollectionsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: Collection }
        output: Collection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/collections/:collectionId': {
      $delete: {
        input: { param: { merchantId: string; collectionId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; collectionId: string } } & {
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
        output: Collection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/collectionstatuses': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            pageSize?: number | undefined
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
        output: ListCollectionStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/collectionstatuses/:collectionId': {
      $get: {
        input: { param: { merchantId: string; collectionId: string } } & {
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
        output: CollectionStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/conversionsources': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: ListConversionSourcesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: ConversionSource }
        output: ConversionSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/conversionsources/:conversionSourceId': {
      $delete: {
        input: { param: { merchantId: string; conversionSourceId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; conversionSourceId: string } } & {
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
        output: ConversionSource
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { merchantId: string; conversionSourceId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: ConversionSource }
        output: ConversionSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/conversionsources/:conversionSourceId:undelete': {
      $post: {
        input: { param: { merchantId: string; conversionSourceId: string } } & {
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
        } & { json: UndeleteConversionSourceRequest }
        output: {}
        outputFormat: string
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
            feedLabel?: string | undefined
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
    '/:merchantId/freelistingsprogram': {
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
        output: FreeListingsProgramStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/freelistingsprogram/requestreview': {
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
        } & { json: RequestReviewFreeListingsRequest }
        output: {}
        outputFormat: string
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
            acknowledged?: boolean | undefined
            createdEndDate?: string | undefined
            createdStartDate?: string | undefined
            googleOrderIds?: string[] | undefined
            maxResults?: number | undefined
            orderBy?: 'RETURN_CREATION_TIME_DESC' | 'RETURN_CREATION_TIME_ASC' | undefined
            pageToken?: string | undefined
            shipmentStates?:
              | ('NEW' | 'SHIPPED' | 'COMPLETED' | 'UNDELIVERABLE' | 'PENDING')[]
              | undefined
            shipmentStatus?: ('NEW' | 'IN_PROGRESS' | 'PROCESSED')[] | undefined
            shipmentTrackingNumbers?: string[] | undefined
            shipmentTypes?: ('BY_MAIL' | 'RETURNLESS' | 'CONTACT_CUSTOMER_SUPPORT')[] | undefined
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
    '/:merchantId/orderreturns/createOrderReturn': {
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
        } & { json: OrderreturnsCreateOrderReturnRequest }
        output: OrderreturnsCreateOrderReturnResponse
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
    '/:merchantId/orderreturns/:returnId/acknowledge': {
      $post: {
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
        } & { json: OrderreturnsAcknowledgeRequest }
        output: OrderreturnsAcknowledgeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderreturns/:returnId/labels': {
      $post: {
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
        } & { json: ReturnShippingLabel }
        output: ReturnShippingLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orderreturns/:returnId/process': {
      $post: {
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
        } & { json: OrderreturnsProcessRequest }
        output: OrderreturnsProcessResponse
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
    '/:merchantId/orders/:orderId/captureOrder': {
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
        } & { json: CaptureOrderRequest }
        output: CaptureOrderResponse
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
    '/:merchantId/orders/:orderId/refunditem': {
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
        } & { json: OrdersRefundItemRequest }
        output: OrdersRefundItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/orders/:orderId/refundorder': {
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
        } & { json: OrdersRefundOrderRequest }
        output: OrdersRefundOrderResponse
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
    '/:merchantId/ordertrackingsignals': {
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
        } & { json: OrderTrackingSignal }
        output: OrderTrackingSignal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/pos/:targetMerchantId/inventory': {
      $post: {
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
    '/:merchantId/productdeliverytime': {
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
        } & { json: ProductDeliveryTime }
        output: ProductDeliveryTime
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/productdeliverytime/:productId': {
      $delete: {
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
        output: ProductDeliveryTime
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/products': {
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
        output: ProductsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            feedId?: string | undefined
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
            feedId?: string | undefined
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
      $patch: {
        input: { param: { merchantId: string; productId: string } } & {
          query: {
            updateMask?: string | undefined
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
    '/:merchantId/products/:productId/localinventory': {
      $post: {
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
        } & { json: LocalInventory }
        output: LocalInventory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/products/:productId/regionalinventory': {
      $post: {
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
        } & { json: RegionalInventory }
        output: RegionalInventory
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
    '/:merchantId/productstatuses/:productId/repricingreports': {
      $get: {
        input: { param: { merchantId: string; productId: string } } & {
          query: {
            endDate?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            ruleId?: string | undefined
            startDate?: string | undefined
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
        output: ListRepricingProductReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/promotions': {
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
        } & { json: Promotion }
        output: Promotion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/promotions/:id': {
      $get: {
        input: { param: { merchantId: string; id: string } } & {
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
        output: Promotion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/pubsubnotificationsettings': {
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
        output: PubsubNotificationSettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: PubsubNotificationSettings }
        output: PubsubNotificationSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/quotas': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            pageSize?: number | undefined
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
        output: ListMethodQuotasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/recommendations/generate': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            allowedTag?: string[] | undefined
            languageCode?: string | undefined
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
        output: GenerateRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/recommendations/reportInteraction': {
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
        } & { json: ReportInteractionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:merchantId/regions': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            pageSize?: number | undefined
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
        output: ListRegionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            regionId?: string | undefined
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
        } & { json: Region }
        output: Region
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/regions/:regionId': {
      $delete: {
        input: { param: { merchantId: string; regionId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; regionId: string } } & {
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
        output: Region
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { merchantId: string; regionId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Region }
        output: Region
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/reports/search': {
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
        } & { json: SearchRequest }
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/repricingrules': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            countryCode?: string | undefined
            languageCode?: string | undefined
            pageSize?: number | undefined
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
        output: ListRepricingRulesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { merchantId: string } } & {
          query: {
            ruleId?: string | undefined
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
        } & { json: RepricingRule }
        output: RepricingRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/repricingrules/:ruleId': {
      $delete: {
        input: { param: { merchantId: string; ruleId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; ruleId: string } } & {
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
        output: RepricingRule
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { merchantId: string; ruleId: string } } & {
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
        } & { json: RepricingRule }
        output: RepricingRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/repricingrules/:ruleId/repricingreports': {
      $get: {
        input: { param: { merchantId: string; ruleId: string } } & {
          query: {
            endDate?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startDate?: string | undefined
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
        output: ListRepricingRuleReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/returnaddress': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            country?: string | undefined
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
        output: ReturnaddressListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: ReturnAddress }
        output: ReturnAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/returnaddress/:returnAddressId': {
      $delete: {
        input: { param: { merchantId: string; returnAddressId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; returnAddressId: string } } & {
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
        output: ReturnAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/returnpolicy': {
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
        output: ReturnpolicyListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: ReturnPolicy }
        output: ReturnPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/returnpolicy/:returnPolicyId': {
      $delete: {
        input: { param: { merchantId: string; returnPolicyId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; returnPolicyId: string } } & {
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
        output: ReturnPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/returnpolicyonline': {
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
        output: ListReturnPolicyOnlineResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: ReturnPolicyOnline }
        output: ReturnPolicyOnline
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/returnpolicyonline/:returnPolicyId': {
      $delete: {
        input: { param: { merchantId: string; returnPolicyId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { merchantId: string; returnPolicyId: string } } & {
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
        output: ReturnPolicyOnline
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { merchantId: string; returnPolicyId: string } } & {
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
        } & { json: ReturnPolicyOnline }
        output: ReturnPolicyOnline
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/settlementreports': {
      $get: {
        input: { param: { merchantId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            transferEndDate?: string | undefined
            transferStartDate?: string | undefined
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
        output: SettlementreportsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/settlementreports/:settlementId': {
      $get: {
        input: { param: { merchantId: string; settlementId: string } } & {
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
        output: SettlementReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/settlementreports/:settlementId/transactions': {
      $get: {
        input: { param: { merchantId: string; settlementId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            transactionIds?: string[] | undefined
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
        output: SettlementtransactionsListResponse
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
    '/:merchantId/shoppingadsprogram': {
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
        output: ShoppingAdsProgramStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:merchantId/shoppingadsprogram/requestreview': {
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
        } & { json: RequestReviewShoppingAdsRequest }
        output: {}
        outputFormat: string
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
            templateName:
              | 'TEMPLATE1'
              | 'TEMPLATE2'
              | 'TEMPLATE1A'
              | 'TEMPLATE1B'
              | 'TEMPLATE3'
              | 'TEMPLATE4'
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
