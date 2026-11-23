type ChangeOrderRequest = { [x: string]: string }
type AccountId = number
type BeezUPOrderId = string
type BeezUPCommonMarketplaceTechnicalCode = string
type Etag = string
type OrderIdentifierWithETag = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  etag: Etag
}
type ChangeOrderListRequestItem = {
  changeOrderRequest?: ChangeOrderRequest | undefined
  order: OrderIdentifierWithETag
}
type ChangeOrderListRequest = { changeOrders: ChangeOrderListRequestItem[] }
type BeezUPCommonDocUrl = string
type BeezUPCommonUserErrorMessage = {
  arguments?: { name: string; value: { [x: string]: unknown } }[] | undefined
  code: string
  cultureName?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  message: string
}
type OrderIdentifier = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
}
type OrderOperationResponse = {
  errors?: BeezUPCommonUserErrorMessage[] | undefined
  order: OrderIdentifier
  status: number
  success: boolean
}
type BatchOrderOperationResponse = { operations: OrderOperationResponse[] }
type UserErrorMessageArguments = { [x: string]: { [x: string]: unknown } }
type ErrorCode = string
type CultureName = string
type DocUrl = string
type UserErrorMessage = {
  arguments?: UserErrorMessageArguments | undefined
  code: ErrorCode
  cultureName?: CultureName | undefined
  docUrl?: DocUrl | undefined
  message: string
}
type ErrorResponseMessage = { errors: UserErrorMessage[] }
type BeezUPCommonErrorResponseMessage = { errors: BeezUPCommonUserErrorMessage[] }
type ChangeOrderListRequestItemV2 = {
  changeOrderRequest?: ChangeOrderRequest | undefined
  order: OrderIdentifier
}
type ChangeOrderListRequestV2 = { changeOrders: ChangeOrderListRequestItemV2[] }
type ClearMerchantOrderInfoListRequest = { orders: OrderIdentifier[] }
type OrderMerchantECommerceSoftwareName = string
type OrderMerchantECommerceSoftwareVersion = string
type OrderMerchantOrderId = string
type SetMerchantOrderInfoListRequestItem = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  order_MerchantOrderId: OrderMerchantOrderId
}
type SetMerchantOrderInfoListRequest = {
  order_MerchantECommerceSoftwareName: OrderMerchantECommerceSoftwareName
  order_MerchantECommerceSoftwareVersion: OrderMerchantECommerceSoftwareVersion
  orders: SetMerchantOrderInfoListRequestItem[]
}
type BeezUPOrderStatus = string
type DateSearchType = 'Modification' | 'Purchase' | 'MarketPlaceModification'
type InvoiceAvailabilityType = string
type BeezUPCommonMarketplaceBusinessCode = string
type MarketplaceOrderId = string
type OrderMerchantInfoSynchronizationStatus = string
type OrderBuyerName = string
type BeezUPCommonStoreId = string
type PageNumber = number
type PageSize = number
type OrderListRequest = {
  accountIds?: AccountId[] | undefined
  beezUPOrderStatuses?: BeezUPOrderStatus[] | undefined
  beginPeriodUtcDate: string
  dateSearchType?: DateSearchType | undefined
  endPeriodUtcDate: string
  invoiceAvailabilityType?: InvoiceAvailabilityType | undefined
  marketplaceBusinessCodes?: BeezUPCommonMarketplaceBusinessCode[] | undefined
  marketplaceOrderIds?: MarketplaceOrderId[] | undefined
  marketplaceTechnicalCodes?: BeezUPCommonMarketplaceTechnicalCode[] | undefined
  orderMerchantInfoSynchronizationStatus?: OrderMerchantInfoSynchronizationStatus | undefined
  order_Buyer_Name?: OrderBuyerName | undefined
  order_MerchantOrderIds?: OrderMerchantOrderId[] | undefined
  storeIds?: BeezUPCommonStoreId[] | undefined
  pageNumber: PageNumber
  pageSize: PageSize
}
type BeezUPCommonHref = string
type BeezUPCommonExceptionDetail = {
  helpLink?: string | undefined
  message?: string | undefined
  stackTrace?: string | undefined
  type?: string | undefined
}
type BeezUPCommonErrorSummary = {
  errorArguments?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorGuid?: string | undefined
  errorMessage?: string | undefined
  exceptionDetail?: BeezUPCommonExceptionDetail | undefined
  objectName?: string | undefined
  propertyName?: string | undefined
  propertyValue?: string | undefined
  source?: string | undefined
  technicalErrorMessage?: string | undefined
  utcDate?: string | undefined
}
type BeezUPCommonInfoSummary = {
  informationArguments?: { [x: string]: string } | undefined
  informationCode?: string | undefined
  informationMessage?: string | undefined
  objectName?: string | undefined
  propertyName?: string | undefined
  propertyValue?: string | undefined
}
type BeezUPCommonSuccessSummary = {
  objectName?: string | undefined
  propertyName?: string | undefined
  propertyValue?: string | undefined
  successArguments?: { [x: string]: string } | undefined
  successCode?: string | undefined
  successMessage?: string | undefined
}
type BeezUPCommonWarningSummary = {
  technicalErrorMessage?: string | undefined
  warningArguments?: { [x: string]: string } | undefined
  warningCode?: string | undefined
  warningMessage?: string | undefined
}
type BeezUPCommonInfoSummaries = {
  errors?: BeezUPCommonErrorSummary[] | undefined
  informations?: BeezUPCommonInfoSummary[] | undefined
  successes?: BeezUPCommonSuccessSummary[] | undefined
  warnings?: BeezUPCommonWarningSummary[] | undefined
}
type BeezUPCommonHttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'HEAD'
type BeezUPCommonOperationId = string
type BeezUPCommonParameterIn = 'path' | 'header' | 'query' | 'body'
type BeezUPCommonLOVLink3 = { href: string; method?: BeezUPCommonHttpMethod | undefined }
type BeezUPCommonParameterType =
  | 'string'
  | 'integer'
  | 'number'
  | 'boolean'
  | 'object'
  | 'array'
  | 'date'
  | 'date-time'
type BeezUPCommonLinkParameterProperty3 = {
  description?: string | undefined
  label?: string | undefined
  lovLink?: BeezUPCommonLOVLink3 | undefined
  lovRequired?: boolean | undefined
  required?: boolean | undefined
  schema?: string | undefined
  type: BeezUPCommonParameterType
  value?: { [x: string]: unknown } | undefined
}
type BeezUPCommonLinkParameter3 = {
  description?: string | undefined
  in: BeezUPCommonParameterIn
  label?: string | undefined
  lovLink?: BeezUPCommonLOVLink3 | undefined
  lovRequired?: boolean | undefined
  properties?: { [x: string]: BeezUPCommonLinkParameterProperty3 } | undefined
  required?: boolean | undefined
  schema?: string | undefined
  type?: BeezUPCommonParameterType | undefined
  value?: { [x: string]: unknown } | undefined
}
type LinksClearMerchantOrderInfoListLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksExportOrdersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksHarvestAllLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksSetMerchantOrderInfoListLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetMarketplaceAccountsSynchronizationLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetOrderListFullLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type OrderListFullLinks = {
  clearMerchantInfos: LinksClearMerchantOrderInfoListLink
  export: LinksExportOrdersLink
  harvest: LinksHarvestAllLink
  setMerchantInfos: LinksSetMerchantOrderInfoListLink
  status: LinksGetMarketplaceAccountsSynchronizationLink
  self: LinksGetOrderListFullLink
}
type BeezUPCommonHttpUrl = string
type LinksGetOrderLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type OrderHeaderLinks = { self: LinksGetOrderLink }
type BeezUPCommonCurrencyCode = string
type MarketplaceOrderStatus = string
type Processing = boolean
type LinksClearMerchantOrderInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksHarvestOrderLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetOrderHistoryLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksSetMerchantOrderInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type OrderLinks = {
  self: LinksGetOrderLink
  clearMerchantInfo: LinksClearMerchantOrderInfoLink
  harvest: LinksHarvestOrderLink
  history: LinksGetOrderHistoryLink
  setMerchantInfo: LinksSetMerchantOrderInfoLink
}
type OrderItem = {
  beezUPOrderItemId: string
  orderItem_BeezUPStoreId?: string | undefined
  orderItem_Condition?: string | undefined
  orderItem_ImageUrl?: string | undefined
  orderItem_ItemPrice?: number | undefined
  orderItem_ItemTax?: number | undefined
  orderItem_MarketPlaceProductId?: string | undefined
  orderItem_MarketplaceImageUri?: string | undefined
  orderItem_MarketplaceProductUri?: string | undefined
  orderItem_MerchantImportedProductId?: string | undefined
  orderItem_MerchantImportedProductIdColumnName?: string | undefined
  orderItem_MerchantImportedProductUrl?: string | undefined
  orderItem_MerchantProductId?: string | undefined
  orderItem_MerchantProductIdColumnName?: string | undefined
  orderItem_OrderItemType: string
  orderItem_Quantity?: number | undefined
  orderItem_Shipping_Price?: number | undefined
  orderItem_Title?: string | undefined
  orderItem_TotalPrice?: number | undefined
  orderItem_gtin?: string | undefined
}
type LinksChangeOrderLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
  rel?: string | undefined
}
type OrderTransitionLinks = LinksChangeOrderLink[]
type OrderWithLinks = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  beezUPOrderUrl?: BeezUPCommonHttpUrl | undefined
  etag: Etag
  links: OrderLinks
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  order_Buyer_Name?: OrderBuyerName | undefined
  order_CurrencyCode?: BeezUPCommonCurrencyCode | undefined
  order_Invoice_Number?: string | undefined
  order_Invoice_Uri?: string | undefined
  order_LastModificationUtcDate: string
  order_MarketplaceLastModificationUtcDate: string
  order_MarketplaceOrderId: MarketplaceOrderId
  order_MerchantECommerceSoftwareName?: OrderMerchantECommerceSoftwareName | undefined
  order_MerchantECommerceSoftwareVersion?: OrderMerchantECommerceSoftwareVersion | undefined
  order_MerchantOrderId?: OrderMerchantOrderId | undefined
  order_PurchaseUtcDate: string
  order_Status_BeezUPOrderStatus: BeezUPOrderStatus
  order_Status_MarketplaceOrderStatus?: MarketplaceOrderStatus | undefined
  order_TotalPrice?: number | undefined
  processing: Processing
  orderItems: OrderItem[]
  order_Buyer_AddressCity?: string | undefined
  order_Buyer_AddressCountryIsoCodeAlpha2?: string | undefined
  order_Buyer_AddressCountryName?: string | undefined
  order_Buyer_AddressLine1?: string | undefined
  order_Buyer_AddressLine2?: string | undefined
  order_Buyer_AddressLine3?: string | undefined
  order_Buyer_AddressPostalCode?: string | undefined
  order_Buyer_AddressStateOrRegion?: string | undefined
  order_Buyer_Civility?: string | undefined
  order_Buyer_CompanyName?: string | undefined
  order_Buyer_Email?: string | undefined
  order_Buyer_FirstName?: string | undefined
  order_Buyer_Identifier?: string | undefined
  order_Buyer_LastName?: string | undefined
  order_Buyer_MobilePhone?: string | undefined
  order_Buyer_Phone?: string | undefined
  order_Comment?: string | undefined
  order_FulfilledBy?: string | undefined
  order_IsBusiness?: boolean | undefined
  order_IsPrime?: boolean | undefined
  order_MarketPlaceChannel?: string | undefined
  order_OrderItemsSourceUri?: string | undefined
  order_OrderSourceUri?: string | undefined
  order_PayingUtcDate?: string | undefined
  order_PaymentMethod?: string | undefined
  order_Shipping_AddressCity?: string | undefined
  order_Shipping_AddressCountryIsoCodeAlpha2?: string | undefined
  order_Shipping_AddressCountryName?: string | undefined
  order_Shipping_AddressLine1?: string | undefined
  order_Shipping_AddressLine2?: string | undefined
  order_Shipping_AddressLine3?: string | undefined
  order_Shipping_AddressName?: string | undefined
  order_Shipping_AddressPostalCode?: string | undefined
  order_Shipping_AddressStateOrRegion?: string | undefined
  order_Shipping_Civility?: string | undefined
  order_Shipping_CompanyName?: string | undefined
  order_Shipping_EarliestShipUtcDate?: string | undefined
  order_Shipping_Email?: string | undefined
  order_Shipping_FirstName?: string | undefined
  order_Shipping_LastName?: string | undefined
  order_Shipping_LatestShipUtcDate?: string | undefined
  order_Shipping_Method?: string | undefined
  order_Shipping_MobilePhone?: string | undefined
  order_Shipping_Phone?: string | undefined
  order_Shipping_Price?: number | undefined
  order_Shipping_ShippingTax?: number | undefined
  order_TotalCommission?: number | undefined
  order_TotalTax?: number | undefined
  transitionLinks: OrderTransitionLinks
}
type Href = string
type ExceptionDetail = {
  helpLink?: string | undefined
  message?: string | undefined
  stackTrace?: string | undefined
  type?: string | undefined
}
type ErrorSummary = {
  errorArguments?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorGuid?: string | undefined
  errorMessage?: string | undefined
  exceptionDetail?: ExceptionDetail | undefined
  objectName?: string | undefined
  propertyName?: string | undefined
  propertyValue?: string | undefined
  source?: string | undefined
  technicalErrorMessage?: string | undefined
  utcDate?: string | undefined
}
type InfoSummary = {
  informationArguments?: { [x: string]: string } | undefined
  informationCode?: string | undefined
  informationMessage?: string | undefined
  objectName?: string | undefined
  propertyName?: string | undefined
  propertyValue?: string | undefined
}
type SuccessSummary = {
  objectName?: string | undefined
  propertyName?: string | undefined
  propertyValue?: string | undefined
  successArguments?: { [x: string]: string } | undefined
  successCode?: string | undefined
  successMessage?: string | undefined
}
type WarningSummary = {
  technicalErrorMessage?: string | undefined
  warningArguments?: { [x: string]: string } | undefined
  warningCode?: string | undefined
  warningMessage?: string | undefined
}
type InfoSummaries = {
  errors?: ErrorSummary[] | undefined
  informations?: InfoSummary[] | undefined
  successes?: SuccessSummary[] | undefined
  warnings?: WarningSummary[] | undefined
}
type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'HEAD'
type OperationId = string
type ParameterIn = 'path' | 'header' | 'query' | 'body' | 'file'
type LOVLink3 = { href: string; method?: HttpMethod | undefined }
type ValidationPattern = string
type ParameterType =
  | 'string'
  | 'integer'
  | 'number'
  | 'boolean'
  | 'object'
  | 'array'
  | 'date'
  | 'date-time'
  | 'file'
type LinkParameterProperty3 = {
  description?: string | undefined
  label?: string | undefined
  lovLink?: LOVLink3 | undefined
  lovRequired?: boolean | undefined
  pattern?: ValidationPattern | undefined
  required?: boolean | undefined
  schema?: string | undefined
  type: ParameterType
  value?: { [x: string]: unknown } | undefined
}
type LinkParameter3 = {
  description?: string | undefined
  in: ParameterIn
  label?: string | undefined
  lovLink?: LOVLink3 | undefined
  lovRequired?: boolean | undefined
  pattern?: ValidationPattern | undefined
  properties?: { [x: string]: LinkParameterProperty3 } | undefined
  required?: boolean | undefined
  schema?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type LinkParameter3Types = { [x: string]: LinkParameter3 }
type Link3 = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: DocUrl | undefined
  href: Href
  info?: InfoSummaries | undefined
  label?: string | undefined
  method?: HttpMethod | undefined
  operationId?: OperationId | undefined
  parameters?: LinkParameter3Types | undefined
  rel?: string | undefined
  urlTemplated?: boolean | undefined
}
type PaginationResultLinks = {
  first: Link3
  last: Link3
  next?: Link3 | undefined
  previous?: Link3 | undefined
}
type PaginationResult = {
  entryCount: number
  links: PaginationResultLinks
  pageCount: number
  totalEntryCount: number
}
type OrderListFullWithLinks = {
  links: OrderListFullLinks
  orders: OrderWithLinks[]
  paginationResult: PaginationResult
}
type LinksGetOrderListLightLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type OrderListLightLinks = {
  clearMerchantInfos: LinksClearMerchantOrderInfoListLink
  export: LinksExportOrdersLink
  harvest: LinksHarvestAllLink
  setMerchantInfos: LinksSetMerchantOrderInfoListLink
  status: LinksGetMarketplaceAccountsSynchronizationLink
  self: LinksGetOrderListLightLink
}
type OrderHeaderWithLinks = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  beezUPOrderUrl?: BeezUPCommonHttpUrl | undefined
  etag: Etag
  links: OrderHeaderLinks
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  order_Buyer_Name?: OrderBuyerName | undefined
  order_CurrencyCode?: BeezUPCommonCurrencyCode | undefined
  order_Invoice_Number?: string | undefined
  order_Invoice_Uri?: string | undefined
  order_LastModificationUtcDate: string
  order_MarketplaceLastModificationUtcDate: string
  order_MarketplaceOrderId: MarketplaceOrderId
  order_MerchantECommerceSoftwareName?: OrderMerchantECommerceSoftwareName | undefined
  order_MerchantECommerceSoftwareVersion?: OrderMerchantECommerceSoftwareVersion | undefined
  order_MerchantOrderId?: OrderMerchantOrderId | undefined
  order_PurchaseUtcDate: string
  order_Status_BeezUPOrderStatus: BeezUPOrderStatus
  order_Status_MarketplaceOrderStatus?: MarketplaceOrderStatus | undefined
  order_TotalPrice?: number | undefined
  processing: Processing
}
type OrderListLightWithLinks = {
  links: OrderListLightLinks
  orders: OrderHeaderWithLinks[]
  paginationResult: PaginationResult
}
type ListOfValueItem = {
  codeIdentifier: string
  intIdentifier: number
  position?: number | undefined
  translationText?: string | undefined
}
type OMReadyMarketplaceBusinessCodeResponse = ListOfValueItem[]
type AccountSynchronization = {
  accountId: AccountId
  completedHarvestSynchroUtcDate?: string | undefined
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
}
type AccountSynchronizationList = { accountSynchronizations?: AccountSynchronization[] | undefined }
type BusinessOperationType = string
type ExecutionUUID = string
type SourceType = 'Api' | 'Go'
type BeezUPCommonUserId = string
type ChangeOrderReporting = {
  changeOrderType?: BusinessOperationType | undefined
  creationUtcDate?: string | undefined
  details?: { [x: string]: { [x: string]: unknown } } | undefined
  errorMessage?: string | undefined
  executionUUID?: ExecutionUUID | undefined
  ipAddress?: string | undefined
  lastUpdateUtcDate?: string | undefined
  processingStatus?: string | undefined
  sourceType?: SourceType | undefined
  sourceUserId?: BeezUPCommonUserId | undefined
  sourceUserName?: string | undefined
  testMode?: boolean | undefined
}
type HarvestOrderReporting = {
  beezUPForcedStatus?: string | undefined
  beezUPStatus?: BeezUPOrderStatus | undefined
  creationUtcDate?: string | undefined
  errorMessage?: string | undefined
  executionUUID?: ExecutionUUID | undefined
  lastUpdateUtcDate?: string | undefined
  marketplaceStatus?: string | undefined
  processingStatus?: string | undefined
  warningMessage?: string | undefined
}
type OrderHistory = {
  changeOrderReportings?: ChangeOrderReporting[] | undefined
  harvestOrderReportings?: HarvestOrderReporting[] | undefined
  lastModificationUtcDate?: string | undefined
}
type SetMerchantOrderInfoRequest = {
  order_MerchantECommerceSoftwareName: OrderMerchantECommerceSoftwareName
  order_MerchantECommerceSoftwareVersion: OrderMerchantECommerceSoftwareVersion
  order_MerchantOrderId: OrderMerchantOrderId
}
type LinksGetChannelsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetPublicListOfValuesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelsIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type PublicChannelIndex = {
  channels?: { [x: string]: LinksGetChannelsLink } | undefined
  links?:
    | {
        channelCountryLov?: LinksGetPublicListOfValuesLink | undefined
        channelTypeLov?: LinksGetPublicListOfValuesLink | undefined
        sectorLov?: LinksGetPublicListOfValuesLink | undefined
        self?: LinksGetChannelsIndexLink | undefined
      }
    | undefined
}
type PublicChannelInfo = {
  homeUrl: string
  logoUrl: string
  name: string
  sectors?: string[] | undefined
  types: string[]
}
type PublicChannelInfoList = {
  channels?: PublicChannelInfo[] | undefined
  links?: { self?: LinksGetChannelsLink | undefined } | undefined
}
type PublicLovLinks = { [x: string]: LinksGetPublicListOfValuesLink }
type LinksGetPublicLovIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type PublicLovIndexLinks = {
  lists?: PublicLovLinks | undefined
  self?: LinksGetPublicLovIndexLink | undefined
}
type PublicLovIndex = { links?: PublicLovIndexLinks | undefined }
type BeezUPCommonListOfValueItem = {
  codeIdentifier: string
  intIdentifier: number
  position?: number | undefined
  translationText?: string | undefined
}
type PublicListOfValuesResponseLinks = { self?: LinksGetPublicListOfValuesLink | undefined }
type PublicListOfValuesResponse = {
  items?: BeezUPCommonListOfValueItem[] | undefined
  links?: PublicListOfValuesResponseLinks | undefined
}
type BeezUPCommonEmail = string
type LoginRequest = { login: BeezUPCommonEmail; password: string }
type ApiCredential = {
  primaryToken?: string | undefined
  productName?: string | undefined
  secondaryToken?: string | undefined
}
type ApiCredentials = { credentials?: ApiCredential[] | undefined }
type RegisterRequest = {
  commercialOwnerUserId?: string | undefined
  cultureName?: string | undefined
  email: string
  password: string
}
type LinksAnalyticsIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetTrackingStatusLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type AnalyticsIndexLinks = {
  self: LinksAnalyticsIndexLink
  trackingStatus?: LinksGetTrackingStatusLink | undefined
}
type AnalyticsIndexLovLinks = {
  analyticsNumericalProductColumnFilterOperatorNameLov?: BeezUPCommonLOVLink3 | undefined
  analyticsProductColumnFilterOperatorNameLov?: BeezUPCommonLOVLink3 | undefined
  analyticsStringProductColumnFilterOperatorNameLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorFilterOperatorNameLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorFormulaOperatorNameLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorFormulaParameterTypeLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorTypeForReportsByCategoryLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorTypeForReportsByChannelLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorTypeForReportsByProductLov?: BeezUPCommonLOVLink3 | undefined
  performanceIndicatorTypeLov?: BeezUPCommonLOVLink3 | undefined
  storeOptimisationRuleExecutionStatusLov?: BeezUPCommonLOVLink3 | undefined
}
type LinksOptimiseLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksOptimiseAllLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksOptimiseByCategoryLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksOptimiseByChannelLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksOptimiseByProductLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreReportByCategoryLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreReportByChannelLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreReportByDayLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreReportByProductLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetReportFiltersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetRulesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreTrackedClicksLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreTrackedExternalOrdersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreTrackedOrdersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreTrackingStatusLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type AnalyticsStoreIndexLinks = {
  optimise?: LinksOptimiseLink | undefined
  optimiseAll?: LinksOptimiseAllLink | undefined
  optimiseByCategory?: LinksOptimiseByCategoryLink | undefined
  optimiseByChannel?: LinksOptimiseByChannelLink | undefined
  optimiseByProduct?: LinksOptimiseByProductLink | undefined
  reportByCategory?: LinksGetStoreReportByCategoryLink | undefined
  reportByChannel?: LinksGetStoreReportByChannelLink | undefined
  reportByDay?: LinksGetStoreReportByDayLink | undefined
  reportByProduct?: LinksGetStoreReportByProductLink | undefined
  reportFilters: LinksGetReportFiltersLink
  rules?: LinksGetRulesLink | undefined
  self: LinksAnalyticsIndexLink
  trackedClicks: LinksGetStoreTrackedClicksLink
  trackedExternalOrders?: LinksGetStoreTrackedExternalOrdersLink | undefined
  trackedOrders: LinksGetStoreTrackedOrdersLink
  trackingStatus: LinksGetStoreTrackingStatusLink
}
type AnalyticsStoreIndex = { links: AnalyticsStoreIndexLinks }
type AnalyticsIndex = {
  links: AnalyticsIndexLinks
  lovLinks?: AnalyticsIndexLovLinks | undefined
  stores: AnalyticsStoreIndex[]
}
type LinkClickToOrderType = 'OnPurchaseDate' | 'OnClickDate'
type MarginType = 'Tracker' | 'Global'
type PerformanceIndicatorFormulaParameterType =
  | 'Cost'
  | 'TotalSales'
  | 'Margin'
  | 'TotalSalesMinusCost'
  | 'MarginMinusCost'
  | 'OrderCount'
  | 'ClickCount'
  | 'SoldProductCount'
  | 'One'
type PerformanceIndicatorFormulaOperatorName = 'Multiply' | 'Divide'
type PerformanceIndicatorFormula = {
  firstParameter?: PerformanceIndicatorFormulaParameterType | undefined
  operatorName?: PerformanceIndicatorFormulaOperatorName | undefined
  secondParameter?: PerformanceIndicatorFormulaParameterType | undefined
  thirdParameter?: number | undefined
}
type ReportAdvancedFilters = {
  globalMarginPercent?: number | undefined
  linkClickToOrderMaxDay?: number | undefined
  linkClickToOrderType: LinkClickToOrderType
  marginType: MarginType
  onlyDirectSales: boolean
  onlyPaymentValidatedOrders: boolean
  performanceIndicatorFormula: PerformanceIndicatorFormula
}
type BeezUPCommonCatalogCategoryId = string
type BeezUPCommonChannelId = string
type BeezUPCommonProductId = string
type ReportByDayRequest = {
  advancedFilters?: ReportAdvancedFilters | undefined
  beginPeriodUtcDate: string
  catalogCategoryId?: BeezUPCommonCatalogCategoryId | undefined
  channelIds?: BeezUPCommonChannelId[] | undefined
  endPeriodUtcDate: string
  productId?: BeezUPCommonProductId | undefined
}
type ReportByDayAllChannels = {
  clickCount: number
  cost: number
  margin: number
  orderCount: number
  performanceIndicator: number
  roi: number
  soldProductCount: number
  totalSales: number
}
type BeezUPCommonChannelName = string
type BeezUPCommonChannelBasicInfo = {
  channelId: BeezUPCommonChannelId
  channelImageUrl: BeezUPCommonHttpUrl
  channelName: BeezUPCommonChannelName
}
type ReportByDayByChannel = {
  clickCount: number
  cost: number
  margin: number
  orderCount: number
  performanceIndicator: number
  roi: number
  soldProductCount: number
  totalSales: number
  channel: BeezUPCommonChannelBasicInfo
}
type ReportByDay = {
  allChannels: ReportByDayAllChannels
  byChannels: ReportByDayByChannel[]
  day: string
}
type ReportByDayGlobalAllChannels = { performanceIndicator: number }
type ReportByDayGlobalByChannel = {
  performanceIndicator: number
  channel: BeezUPCommonChannelBasicInfo
}
type ReportByDayGlobal = {
  allChannels: ReportByDayGlobalAllChannels
  byChannels: ReportByDayGlobalByChannel[]
}
type ReportByDayResponse = {
  currencyCode: BeezUPCommonCurrencyCode
  days: ReportByDay[]
  globalPerformanceIndicators: ReportByDayGlobal
}
type ReportByDayPerStoreResponse = { [x: string]: ReportByDayResponse }
type TrackingStatus = {
  clickSynchronizationUtcDate: string
  marketplaceOrderSynchonizationUtcDate: string
  orderSynchonizationUtcDate: string
}
type BeezUPCommonCatalogCategoryFilter = { categoryPath?: string[] | undefined }
type PerformanceIndicatorFilterOperatorName = string
type PerformanceIndicatorType =
  | 'ClickCount'
  | 'Cost'
  | 'OrderCount'
  | 'ProductCount'
  | 'SoldProductCount'
  | 'DisabledProductCount'
  | 'EnabledProductCount'
  | 'TotalSales'
  | 'Margin'
  | 'ROI'
  | 'PerformanceIndicator'
type PerformanceIndicatorFilter = {
  operatorName: PerformanceIndicatorFilterOperatorName
  performanceIndicator: PerformanceIndicatorType
  value: number
}
type ReportFilterPeriodType =
  | 'Custom'
  | 'Yesterday'
  | 'Last7Days'
  | 'LastWeek'
  | 'ThisMonth'
  | 'Last30Days'
  | 'LastMonth'
  | 'Last60Days'
  | 'Last90Days'
  | 'Last3Months'
type OrderByDirection = 'Ascending' | 'Descending'
type AnalyticsProductColumnFilterOperatorName = string
type AnalyticsProductColumnFilter = {
  operatorName: AnalyticsProductColumnFilterOperatorName
  values?: string[] | undefined
}
type AdditionalAnalyticsProductColumnFilters = { [x: string]: AnalyticsProductColumnFilter }
type AnalyticsProductColumnFilters = {
  additionalAnalyticsProductColumnFilters?: AdditionalAnalyticsProductColumnFilters | undefined
  sku?: string | undefined
  title?: string | undefined
}
type BeezUPCommonCatalogColumnId = string
type ProductColumnsToDisplay = BeezUPCommonCatalogColumnId[]
type ProductStateFilter = 'All' | 'Enabled' | 'Disabled'
type ReportType = 'ByChannel' | 'ByCategory' | 'ByProduct' | 'ByDay'
type OptimiseAllRequest = {
  advancedFilters: ReportAdvancedFilters
  beginPeriodUtcDate?: string | undefined
  categoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelId?: BeezUPCommonChannelId | undefined
  endPeriodUtcDate?: string | undefined
  performanceIndicatorFilters?: PerformanceIndicatorFilter[] | undefined
  periodType: ReportFilterPeriodType
  orderBy?: PerformanceIndicatorType | undefined
  orderByDirection?: OrderByDirection | undefined
  analyticsProductColumnFilters?: AnalyticsProductColumnFilters | undefined
  productColumnsToDisplay?: ProductColumnsToDisplay | undefined
  productState?: ProductStateFilter | undefined
  reportType: ReportType
}
type CopyOptimisationRequest = {
  channelIdSource: BeezUPCommonChannelId
  channelIdTarget: BeezUPCommonChannelId
  keepExistingOptimisation: boolean
}
type CopyOptimisationResponse = {
  catalogProductCount: number
  channel: BeezUPCommonChannelBasicInfo
  enabledProductCount: number
}
type BeezUPCommonPageNumber = number
type BeezUPCommonPageSize = number
type OptimiseRequest = {
  advancedFilters: ReportAdvancedFilters
  beginPeriodUtcDate?: string | undefined
  categoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelId?: BeezUPCommonChannelId | undefined
  endPeriodUtcDate?: string | undefined
  performanceIndicatorFilters?: PerformanceIndicatorFilter[] | undefined
  periodType: ReportFilterPeriodType
  orderBy?: PerformanceIndicatorType | undefined
  orderByDirection?: OrderByDirection | undefined
  analyticsProductColumnFilters?: AnalyticsProductColumnFilters | undefined
  productColumnsToDisplay?: ProductColumnsToDisplay | undefined
  productState?: ProductStateFilter | undefined
  reportType: ReportType
  pageNumber?: BeezUPCommonPageNumber | undefined
  pageSize?: BeezUPCommonPageSize | undefined
}
type ReportByCategoryRequest = {
  advancedFilters: ReportAdvancedFilters
  beginPeriodUtcDate?: string | undefined
  categoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelId?: BeezUPCommonChannelId | undefined
  endPeriodUtcDate?: string | undefined
  performanceIndicatorFilters?: PerformanceIndicatorFilter[] | undefined
  periodType: ReportFilterPeriodType
  orderBy?: PerformanceIndicatorType | undefined
  orderByDirection?: OrderByDirection | undefined
  pageNumber?: BeezUPCommonPageNumber | undefined
  pageSize?: BeezUPCommonPageSize | undefined
}
type BeezUPCommonCatalogCategoryPath = string[]
type ReportByCategoryLinks = {
  disableProducts?: LinksOptimiseByCategoryLink | undefined
  enableProducts?: LinksOptimiseByCategoryLink | undefined
}
type ReportByCategory = {
  allProductCount: number
  catalogCategoryId: BeezUPCommonCatalogCategoryId
  catalogCategoryPath?: BeezUPCommonCatalogCategoryPath | undefined
  catalogProductCount: number
  clickCount: number
  cost: number
  enabledProductCount: number
  links: ReportByCategoryLinks
  margin?: number | undefined
  orderCount: number
  performanceIndicator: number
  roi?: number | undefined
  soldProductCount: number
  totalSales: number
}
type ReportByCategoryResponseLinks = {
  disableAllProducts?: LinksOptimiseAllLink | undefined
  disableProducts?: LinksOptimiseLink | undefined
  enableAllProducts?: LinksOptimiseAllLink | undefined
  enableProducts?: LinksOptimiseLink | undefined
}
type BeezUPCommonLink3 = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type BeezUPCommonPaginationResultLinks = {
  first: BeezUPCommonLink3
  last: BeezUPCommonLink3
  next?: BeezUPCommonLink3 | undefined
  previous?: BeezUPCommonLink3 | undefined
}
type BeezUPCommonPaginationResult = {
  entryCount: number
  links: BeezUPCommonPaginationResultLinks
  pageCount: number
  totalEntryCount: number
}
type ReportByCategoryResponse = {
  categories?: ReportByCategory[] | undefined
  currencyCode?: BeezUPCommonCurrencyCode | undefined
  links?: ReportByCategoryResponseLinks | undefined
  paginationResult?: BeezUPCommonPaginationResult | undefined
}
type ReportByChannelRequest = {
  advancedFilters: ReportAdvancedFilters
  beginPeriodUtcDate?: string | undefined
  categoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelId?: BeezUPCommonChannelId | undefined
  endPeriodUtcDate?: string | undefined
  performanceIndicatorFilters?: PerformanceIndicatorFilter[] | undefined
  periodType: ReportFilterPeriodType
  orderBy?: PerformanceIndicatorType | undefined
  orderByDirection?: OrderByDirection | undefined
  pageNumber?: BeezUPCommonPageNumber | undefined
  pageSize?: BeezUPCommonPageSize | undefined
}
type ReportByChannelLinks = {
  disableProducts?: LinksOptimiseByChannelLink | undefined
  enableProducts?: LinksOptimiseByChannelLink | undefined
}
type ReportByChannel = {
  catalogProductCount: number
  channel: BeezUPCommonChannelBasicInfo
  clickCount: number
  cost: number
  enabledProductCount: number
  links: ReportByChannelLinks
  margin?: number | undefined
  orderCount: number
  performanceIndicator: number
  roi?: number | undefined
  soldProductCount: number
  totalSales: number
}
type ReportByChannelResponseLinks = {
  disableAllProducts?: LinksOptimiseAllLink | undefined
  disableProducts?: LinksOptimiseLink | undefined
  enableAllProducts?: LinksOptimiseAllLink | undefined
  enableProducts?: LinksOptimiseLink | undefined
}
type ReportByChannelResponse = {
  channels: ReportByChannel[]
  currencyCode: BeezUPCommonCurrencyCode
  links: ReportByChannelResponseLinks
  paginationResult: BeezUPCommonPaginationResult
}
type ReportByProductRequest = {
  advancedFilters: ReportAdvancedFilters
  beginPeriodUtcDate?: string | undefined
  categoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelId?: BeezUPCommonChannelId | undefined
  endPeriodUtcDate?: string | undefined
  performanceIndicatorFilters?: PerformanceIndicatorFilter[] | undefined
  periodType: ReportFilterPeriodType
  orderBy?: PerformanceIndicatorType | undefined
  orderByDirection?: OrderByDirection | undefined
  pageNumber?: BeezUPCommonPageNumber | undefined
  pageSize?: BeezUPCommonPageSize | undefined
  analyticsProductColumnFilters?: AnalyticsProductColumnFilters | undefined
  productColumnsToDisplay?: ProductColumnsToDisplay | undefined
  productState: ProductStateFilter
}
type ReportByProductResponseLinks = {
  disableAllProducts?: LinksOptimiseAllLink | undefined
  disableProducts?: LinksOptimiseLink | undefined
  enableAllProducts?: LinksOptimiseAllLink | undefined
  enableProducts?: LinksOptimiseLink | undefined
}
type ReportByProductAllChannelsLinks = {
  disableProductForAllChannels: LinksOptimiseByProductLink
  enableProductForAllChannels: LinksOptimiseByProductLink
}
type LinksGetChannelCatalogProductInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ReportByProductOneChannelLinks = {
  disableProductForOneChannel: LinksOptimiseByProductLink
  enableProductForOneChannel: LinksOptimiseByProductLink
  productInfo: LinksGetChannelCatalogProductInfoLink
}
type ReportByProductLinks = {
  allChannelsLinks?: ReportByProductAllChannelsLinks | undefined
  oneChannelLinks?: ReportByProductOneChannelLinks | undefined
}
type BeezUPCommonProductBasicInfo = {
  productExists: boolean
  productId: string
  productImageUrl?: string | undefined
  productSku: string
  productTitle: string
}
type ReportByProduct = {
  channelCount: number
  clickCount: number
  cost: number
  enabledOnChannelCount: number
  links: ReportByProductLinks
  margin?: number | undefined
  orderCount: number
  performanceIndicator: number
  product: BeezUPCommonProductBasicInfo
  roi?: number | undefined
  soldProductCount: number
  totalSales: number
}
type ReportByProductResponse = {
  currencyCode: BeezUPCommonCurrencyCode
  links: ReportByProductResponseLinks
  paginationResult: BeezUPCommonPaginationResult
  products: ReportByProduct[]
}
type LinksSaveReportFilterLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ReportFiltersLinks = { save: LinksSaveReportFilterLink; self: LinksGetReportFiltersLink }
type LinksGetReportFilterLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ReportFilterHeaderLinks = { self: LinksGetReportFilterLink }
type ReportFilterHeader = {
  links: ReportFilterHeaderLinks
  reportFilterId: string
  reportFilterName: string
  reportType: ReportType
}
type ReportFilterList = { links: ReportFiltersLinks; reportFilters: ReportFilterHeader[] }
type LinksDeleteReportFilterLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ReportFilterLinks = {
  delete?: LinksDeleteReportFilterLink | undefined
  save?: LinksSaveReportFilterLink | undefined
  self?: LinksGetReportFilterLink | undefined
}
type ReportFilterParameters = {
  advancedFilters: ReportAdvancedFilters
  beginPeriodUtcDate?: string | undefined
  categoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelId?: BeezUPCommonChannelId | undefined
  endPeriodUtcDate?: string | undefined
  performanceIndicatorFilters?: PerformanceIndicatorFilter[] | undefined
  periodType: ReportFilterPeriodType
  analyticsProductColumnFilters?: AnalyticsProductColumnFilters | undefined
  productColumnsToDisplay?: ProductColumnsToDisplay | undefined
  productState?: ProductStateFilter | undefined
  reportType: ReportType
}
type ReportFilter = {
  links?: ReportFilterLinks | undefined
  parameters: ReportFilterParameters
  reportFilterId: string
  reportFilterName: string
}
type SaveReportFilterRequest = { parameters: ReportFilterParameters; reportFilterName: string }
type LinksCreateRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetRulesExecutionsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksRunRulesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type RuleListLinks = {
  create: LinksCreateRuleLink
  history: LinksGetRulesExecutionsLink
  run: LinksRunRulesLink
  self: LinksGetRulesLink
}
type OptimisationActionName = 'reenable' | 'disable'
type RuleLastExecutionStatus = 'InProgress' | 'Succeeded' | 'Failed' | 'Unknown'
type LinksDeleteRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksDisableRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksEnableRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksMoveDownRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksMoveUpRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksRunRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksUpdateRuleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type RuleLinks = {
  delete?: LinksDeleteRuleLink | undefined
  disable?: LinksDisableRuleLink | undefined
  enable?: LinksEnableRuleLink | undefined
  movedown?: LinksMoveDownRuleLink | undefined
  moveup?: LinksMoveUpRuleLink | undefined
  reportFilter?: LinksGetReportFilterLink | undefined
  run?: LinksRunRuleLink | undefined
  self: LinksGetRuleLink
  update?: LinksUpdateRuleLink | undefined
}
type Rule = {
  actionName: OptimisationActionName
  enabled: boolean
  lastExecutionStatus?: RuleLastExecutionStatus | undefined
  lastExecutionUtcDate?: string | undefined
  links: RuleLinks
  position: number
  reportFilterId: string
  ruleId: string
  ruleName: string
  validityEndUtcDate?: string | undefined
  validityStartUtcDate?: string | undefined
}
type RuleList = { links: RuleListLinks; rules: Rule[] }
type CreateRuleRequest = {
  endUtcDate?: string | undefined
  optimisationActionName: OptimisationActionName
  reportFilterId: string
  ruleName: string
  startUtcDate?: string | undefined
}
type RuleExecutionReportingErrorType = 'ChannelNotPresent' | 'StoreIsInSystemBlockState'
type RuleExecutionReportingExecutionSource = 'Scheduler' | 'User'
type RuleExecutionReportingLinks = { rule?: LinksGetRuleLink | undefined }
type RuleExecutionReportingStatus =
  | 'InProgress'
  | 'Succeeded'
  | 'AlreadyInProgress'
  | 'Aborted'
  | 'Failed'
  | 'Unknown'
type RuleExecutionReporting = {
  activeAffectedProductCount?: number | undefined
  affectedChannelCount?: number | undefined
  affectedProductCount?: number | undefined
  completedUtcDate?: string | undefined
  errorType?: RuleExecutionReportingErrorType | undefined
  executionSource: RuleExecutionReportingExecutionSource
  links?: RuleExecutionReportingLinks | undefined
  optimisationActionName?: OptimisationActionName | undefined
  reportUrl?: string | undefined
  ruleId: string
  ruleName: string
  startedUtcDate?: string | undefined
  status: RuleExecutionReportingStatus
  userId?: string | undefined
}
type RuleExecutionReportings = {
  executions?: RuleExecutionReporting[] | undefined
  paginationResult?: BeezUPCommonPaginationResult | undefined
}
type UpdateRuleRequest = {
  endUtcDate?: string | undefined
  ruleName: string
  startUtcDate?: string | undefined
}
type TrackedClick = {
  channel: BeezUPCommonChannelBasicInfo
  ipAddress: string
  product: BeezUPCommonProductBasicInfo
  utcDate: string
}
type TrackedClicks = { clicks: TrackedClick[] }
type TrackedExternalOrderProduct = {
  margin?: string | undefined
  productActive?: boolean | undefined
  productId?: string | undefined
  productImageUrl?: string | undefined
  productSku: string
  productTitle?: string | undefined
  quantity?: string | undefined
  unitPrice?: string | undefined
}
type TrackedExternalOrder = {
  currencyCode: BeezUPCommonCurrencyCode
  merchantOrderId: string
  paymentValidated: boolean
  products?: TrackedExternalOrderProduct[] | undefined
  totalAmount: number
  utcDate: string
  visitorId?: string | undefined
}
type TrackedExternalOrders = { externalOrders: TrackedExternalOrder[] }
type TrackedOrderProduct = {
  productExists: boolean
  productId: string
  productImageUrl?: string | undefined
  productSku: string
  productTitle: string
  margin: number
  quantity: number
  unitPrice: number
}
type TrackedOrder = {
  channel: BeezUPCommonChannelBasicInfo
  currencyCode: BeezUPCommonCurrencyCode
  merchantOrderId: string
  paymentValidated: boolean
  products: TrackedOrderProduct[]
  totalAmount: number
  utcDate: string
}
type TrackedOrders = { orders: TrackedOrder[] }
type StoreTrackingStatus = {
  clickSynchronizationUtcDate?: string | undefined
  marketplaceOrderSynchonizationUtcDate?: string | undefined
  orderSynchonizationUtcDate?: string | undefined
}
type LinksCatalogGetBeezUPColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CatalogIndexLinks = {
  beezUPColumns: LinksCatalogGetBeezUPColumnsLink
  self: LinksCatalogIndexLink
}
type CatalogIndexLOVLinks = {
  beezUPColumnDataTypeLov: BeezUPCommonLOVLink3
  beezUPColumnDisplayGroupLov: BeezUPCommonLOVLink3
  beezUPColumnImportanceLov: BeezUPCommonLOVLink3
  beezUPColumnLov: BeezUPCommonLOVLink3
  compareOptionLov: BeezUPCommonLOVLink3
  duplicateProductValueStrategyLov: BeezUPCommonLOVLink3
}
type LinksAutoGetAutoImportConfigurationLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogGetCatalogColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogGetCategoriesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogComputeExpressionLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogGetCustomColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationGetReportingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationGetManualUpdateLastInputConfigLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogGetProductsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogGetRandomProductsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogStoreIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationStartManualUpdateLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CatalogStoreIndexLinks = {
  autoImportInfo?: LinksAutoGetAutoImportConfigurationLink | undefined
  catalogColumns?: LinksCatalogGetCatalogColumnsLink | undefined
  categories?: LinksCatalogGetCategoriesLink | undefined
  computeExpression?: LinksCatalogComputeExpressionLink | undefined
  customColumns?: LinksCatalogGetCustomColumnsLink | undefined
  importations?: LinksImportationGetReportingsLink | undefined
  inputConfiguration?: LinksImportationGetManualUpdateLastInputConfigLink | undefined
  products?: LinksCatalogGetProductsLink | undefined
  randomProducts?: LinksCatalogGetRandomProductsLink | undefined
  self: LinksCatalogStoreIndexLink
  startImportation?: LinksImportationStartManualUpdateLink | undefined
}
type CatalogStoreStatus = 'OK' | 'Failed' | 'Outdated'
type CatalogStoreIndex = { links: CatalogStoreIndexLinks; status: CatalogStoreStatus }
type CatalogStoreIndexList = { links?: { [x: string]: CatalogStoreIndex } | undefined }
type CatalogIndex = {
  links: CatalogIndexLinks
  lovLinks: CatalogIndexLOVLinks
  storeLinks?: CatalogStoreIndexList | undefined
}
type BeezUPCommonBeezUPColumnName = string
type CanBeTruncated = boolean
type BeezUPCommonColumnDataType =
  | 'String'
  | 'Url'
  | 'Text'
  | 'Decimal'
  | 'DateTime'
  | 'Int'
  | 'SpecialInt'
  | 'InStock'
  | 'Unknown'
  | 'ImageUrl'
type BeezUPCommonColumnImportance = 'Required' | 'Recommended' | 'Optional'
type DisplayGroupName = string
type BeezUPColumnConfiguration = {
  beezUPColumnName: BeezUPCommonBeezUPColumnName
  canBeTruncated?: CanBeTruncated | undefined
  columnDataType?: BeezUPCommonColumnDataType | undefined
  columnImportance: BeezUPCommonColumnImportance
  description?: string | undefined
  displayGroupName: DisplayGroupName
  unique?: boolean | undefined
}
type ExecutionId = string
type LinksImportationGetReportLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ImportationReportingLinks = { report?: LinksImportationGetReportLink | undefined }
type ImportationReporting = {
  autoImported?: boolean | undefined
  beginUtcDate: string
  endUtcDate?: string | undefined
  errors?: BeezUPCommonUserErrorMessage[] | undefined
  executionId: ExecutionId
  inputConfigurationUrl?: string | undefined
  lastUpdateUtcDate: string
  links?: ImportationReportingLinks | undefined
  stepName?: string | undefined
  steps: { [x: string]: boolean }
  success?: boolean | undefined
  totalProductCount?: number | undefined
  totalProductErrorCount?: number | undefined
  totalProductSuccessCount?: number | undefined
  userId?: BeezUPCommonUserId | undefined
}
type ImportationsResponseLinks = {
  self?: LinksImportationGetReportingsLink | undefined
  start?: LinksImportationStartManualUpdateLink | undefined
}
type ImportationsResponse = {
  importations?: ImportationReporting[] | undefined
  links?: ImportationsResponseLinks | undefined
}
type ImportationsPerStoreResponse = { [x: string]: ImportationsResponse }
type CompareOptions =
  | 'None'
  | 'IgnoreCase'
  | 'IgnoreNonSpace'
  | 'IgnoreSymbols'
  | 'OrdinalIgnoreCase'
  | 'StringSort'
  | 'Ordinal'
type DuplicateProductValueStrategy =
  | 'None'
  | 'SkipAllDuplicateProducts'
  | 'KeepFirstDuplicateProductOnly'
  | 'FailImportationIfAnyDuplicateProduct'
type DuplicateProductValueConfiguration = {
  compareOptions: CompareOptions
  strategy: DuplicateProductValueStrategy
}
type CompressionFormatStrategy = 'None' | 'Zip' | 'TarGz' | 'Gzip' | 'Bzip2' | 'Rar'
type Credential = { password?: string | undefined; userName: string }
type DownloadCatalogStrategy =
  | 'SimpleUri'
  | 'FtpLatest'
  | 'Sftp'
  | 'SftpLatest'
  | 'Ftps'
  | 'FtpsLatest'
  | 'Local'
type InputFileFetchConfiguration = {
  compressedRelativePath?: string | undefined
  compressionFormatStrategy?: CompressionFormatStrategy | undefined
  credential?: Credential | undefined
  downloadCatalogStrategy: DownloadCatalogStrategy
  downloadTimeout?: number | undefined
  uri: string
}
type CsvSeparator = string
type InputFileReadCsvConfiguration = {
  csvSeparator: CsvSeparator
  csvTextQualifier?: string | undefined
  hasHeaderRecord: boolean
  ignoreHeaderRecord: boolean
}
type FileFormatStrategy = 'Unknown' | 'Csv' | 'Xml' | 'Json'
type InputFileReadXmlConfiguration = { flattenXmlChildElements: boolean; useXmlAttributes: boolean }
type InputFileReadConfiguration = {
  csvFileReadProperties?: InputFileReadCsvConfiguration | undefined
  cultureName?: string | undefined
  encodingTypeName?: string | undefined
  format: FileFormatStrategy
  xmlFileReadProperties?: InputFileReadXmlConfiguration | undefined
}
type InputFileConfiguration = {
  fetch: InputFileFetchConfiguration
  fileNumber: number
  read: InputFileReadConfiguration
}
type InputConfiguration = { files: InputFileConfiguration[]; transformFileUrl?: string | undefined }
type SchedulingType = 'Schedule' | 'Interval'
type AutoImportConfiguration = {
  duplicateProductConfiguration: DuplicateProductValueConfiguration
  input: InputConfiguration
  inputConfiguredByUserId: BeezUPCommonUserId
  pauseStatusChangedByUserId?: BeezUPCommonUserId | undefined
  pauseStatusChangedUtcDate?: string | undefined
  paused: boolean
  scheduledByUserId?: BeezUPCommonUserId | undefined
  schedulingLocalTimeZoneName?: string | undefined
  schedulingType: SchedulingType
  schedulingValue: string[]
}
type ConfigureAutoImportIntervalRequest = { interval: string }
type ScheduleAutoImportRequest = { localTimeZoneName?: string | undefined; schedules: string[] }
type LinksImportationGetImportationMonitoringLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CatalogColumnName = string
type ColumnCultureName = string
type ColumnFormat = string
type ColumnConfiguration = {
  beezUPColumnName?: BeezUPCommonBeezUPColumnName | undefined
  canBeTruncated?: CanBeTruncated | undefined
  columnCultureName?: ColumnCultureName | undefined
  columnDataType: BeezUPCommonColumnDataType
  columnFormat?: ColumnFormat | undefined
  columnImportance: BeezUPCommonColumnImportance
  displayGroupName?: DisplayGroupName | undefined
}
type ColumnId = string
type LinksCatalogChangeCatalogColumnUserNameLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CatalogColumnLinks = { rename?: LinksCatalogChangeCatalogColumnUserNameLink | undefined }
type UserColumName = string
type CatalogColumn = {
  catalogColumnName: CatalogColumnName
  configuration: ColumnConfiguration
  duplicateProductValueConfiguration?: DuplicateProductValueConfiguration | undefined
  id: ColumnId
  ignored?: boolean | undefined
  links: CatalogColumnLinks
  userColumName: UserColumName
}
type CatalogColumnList = { catalogColumns: CatalogColumn[] }
type ChangeUserColumnNameRequest = { userColumName: UserColumName }
type LinksImportationCancelLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ImportAlreadyInProgressResponseLinks = {
  cancelCurrentImportation: LinksImportationCancelLink
  currentImportation: LinksImportationGetImportationMonitoringLink
}
type ImportAlreadyInProgressResponse = {
  errors: BeezUPCommonUserErrorMessage[]
  links: ImportAlreadyInProgressResponseLinks
}
type Category = {
  categoryId?: BeezUPCommonCatalogCategoryId | undefined
  categoryPath: BeezUPCommonCatalogCategoryPath
  selfProductCount: number
  totalProductCount: number
}
type CategoryList = { categories: Category[] }
type LinksCatalogDeleteCustomColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogGetCustomColumnExpressionLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogChangeCustomColumnUserNameLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogSaveCustomColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksCatalogChangeCustomColumnExpressionLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CustomColumnLinks = {
  delete: LinksCatalogDeleteCustomColumnLink
  expression: LinksCatalogGetCustomColumnExpressionLink
  rename: LinksCatalogChangeCustomColumnUserNameLink
  save: LinksCatalogSaveCustomColumnLink
  saveExpression: LinksCatalogChangeCustomColumnExpressionLink
}
type CustomColumn = {
  catalogColumnDependencies?: CatalogColumnName[] | undefined
  configuration: ColumnConfiguration
  id: ColumnId
  links: CustomColumnLinks
  userColumName: UserColumName
}
type CustomColumnListLinks = {
  add?: LinksCatalogSaveCustomColumnLink | undefined
  self: LinksCatalogGetCustomColumnsLink
}
type CustomColumnList = { customColumns: CustomColumn[]; links: CustomColumnListLinks }
type EncryptedExpression = string
type ProductValues = { [x: string]: string }
type ComputeExpressionRequest = {
  encryptedExpression: EncryptedExpression
  productValues: ProductValues
}
type EncryptedBlocklyExpression = string
type CreateCustomColumnRequest = {
  displayGroupName: DisplayGroupName
  encryptedBlocklyExpression: EncryptedBlocklyExpression
  encryptedExpression: EncryptedExpression
  userColumnName: UserColumName
}
type ChangeCustomColumnExpressionRequest = {
  encryptedBlocklyExpression: EncryptedBlocklyExpression
  encryptedExpression: EncryptedExpression
}
type StartManualImportRequest = {
  duplicateProductSkuConfiguration?: DuplicateProductValueConfiguration | undefined
  input: InputConfiguration
}
type LinksImportationActivateAutoImportLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationGetDetectedCatalogColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationCommitLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationCommitColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationConfigureRemainingCatalogColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationGetCustomColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationGetProductSampleLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationTechnicalProgressionLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ImportationMonitoringLinks = {
  activateAutoImport?: LinksImportationActivateAutoImportLink | undefined
  cancel?: LinksImportationCancelLink | undefined
  catalogColumns?: LinksImportationGetDetectedCatalogColumnsLink | undefined
  commit?: LinksImportationCommitLink | undefined
  commitColumns?: LinksImportationCommitColumnsLink | undefined
  configureRemainingCatalogColumns?:
    | LinksImportationConfigureRemainingCatalogColumnsLink
    | undefined
  customColumns?: LinksImportationGetCustomColumnsLink | undefined
  productSamples?: LinksImportationGetProductSampleLink | undefined
  self: LinksImportationGetImportationMonitoringLink
  technicalProgression: LinksImportationTechnicalProgressionLink
}
type ImportationMonitoring = {
  beginUtcDate: string
  errors?: BeezUPCommonUserErrorMessage[] | undefined
  executionId: ExecutionId
  lastUpdateUtcDate: string
  links?: ImportationMonitoringLinks | undefined
  steps: { [x: string]: boolean }
  success: boolean
  userId?: BeezUPCommonUserId | undefined
}
type LinksImportationConfigureCatalogColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationIgnoreColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationMapCatalogColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationReattendColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationUnmapCatalogColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type DetectedCatalogColumnLinks = {
  configure?: LinksImportationConfigureCatalogColumnLink | undefined
  ignore?: LinksImportationIgnoreColumnLink | undefined
  map?: LinksImportationMapCatalogColumnLink | undefined
  reattend?: LinksImportationReattendColumnLink | undefined
  unmap?: LinksImportationUnmapCatalogColumnLink | undefined
}
type DetectedCatalogColumn = {
  catalogColumnName: CatalogColumnName
  configuration: ColumnConfiguration
  duplicateProductValueConfiguration?: DuplicateProductValueConfiguration | undefined
  id: ColumnId
  ignored?: boolean | undefined
  links: DetectedCatalogColumnLinks
  userColumName: UserColumName
}
type DetectedCatalogColumnListLinks = { self: LinksImportationGetDetectedCatalogColumnsLink }
type DetectedCatalogColumnList = {
  detectedCatalogColumns?: DetectedCatalogColumn[] | undefined
  links: DetectedCatalogColumnListLinks
}
type ConfigureCatalogColumnCatalogRequest = { catalogColumn: CatalogColumn }
type MapBeezUPColumnRequest = { beezUPColumnName: BeezUPCommonBeezUPColumnName }
type LinksImportationMapCustomColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationGetProductSampleCustomColumnValueLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationSaveCustomColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksImportationUnmapCustomColumnLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ImportationCustomColumnLinks = {
  delete: LinksCatalogDeleteCustomColumnLink
  expression: LinksCatalogGetCustomColumnExpressionLink
  map?: LinksImportationMapCustomColumnLink | undefined
  productSampleValue?: LinksImportationGetProductSampleCustomColumnValueLink | undefined
  save: LinksImportationSaveCustomColumnLink
  unmap?: LinksImportationUnmapCustomColumnLink | undefined
}
type ImportationCustomColumn = {
  configuration: ColumnConfiguration
  id: ColumnId
  links: ImportationCustomColumnLinks
  userColumName: UserColumName
}
type ImportationCustomColumnList = {
  customColumns: ImportationCustomColumn[]
  links: CustomColumnListLinks
}
type ChangeCustomColumnRequest = {
  encryptedBlocklyExpression: EncryptedBlocklyExpression
  encryptedExpression: EncryptedExpression
  userColumName: UserColumName
}
type ProductSample = { productValues?: ProductValues | undefined }
type GetImportationProductsReportRequestErrorCode = {
  errorCode?: ErrorCode | undefined
  userColumnName?: UserColumName | undefined
}
type GetImportationProductsReportRequestErrorCodes = GetImportationProductsReportRequestErrorCode[]
type GetImportationProductsReportRequest = {
  ean?: string | undefined
  errorCodes?: GetImportationProductsReportRequestErrorCodes | undefined
  mpn?: string | undefined
  pageNumber: BeezUPCommonPageNumber
  pageSize: BeezUPCommonPageSize
  sku?: string | undefined
  title?: string | undefined
}
type ProductErrorCode = {
  beezUPColumnName?: BeezUPCommonBeezUPColumnName | undefined
  errorCode?: ErrorCode | undefined
  errorMessage?: string | undefined
  userColumName?: UserColumName | undefined
}
type ProductErrorCodes = ProductErrorCode[]
type Sku = string
type ProductError = {
  ean?: string | undefined
  errors: ProductErrorCodes
  lineNumber: number
  mpn?: string | undefined
  sku?: Sku | undefined
  title?: string | undefined
}
type ProductErrors = ProductError[]
type GetImportationProductsReportResponse = {
  paginationResult: BeezUPCommonPaginationResult
  productErrors?: ProductErrors | undefined
}
type GetImportationReportResponseDiff = {
  createdCount: number
  deletedCount: number
  unchangedCount?: number | undefined
  updatedCount: number
}
type GetImportationReportResponseError = {
  beezUPColumnName?: BeezUPCommonBeezUPColumnName | undefined
  errorCode: ErrorCode
  productCount: number
  userColumName: UserColumName
}
type GetImportationReportResponseErrors = GetImportationReportResponseError[]
type GetImportationReportResponseImportationInfo = {
  beginUtcDate: string
  endUtcDate: string
  inputConfiguration: InputFileConfiguration
  userId: BeezUPCommonUserId
}
type GetImportationReportResponseProductMetrics = {
  activeCount: number
  detectedCount: number
  duplicatedCount: number
  failedCount: number
}
type GetImportationReportResponse = {
  categories?: GetImportationReportResponseDiff | undefined
  columns?: GetImportationReportResponseDiff | undefined
  errors: GetImportationReportResponseErrors
  executionId: ExecutionId
  importationInfo: GetImportationReportResponseImportationInfo
  productMetrics?: GetImportationReportResponseProductMetrics | undefined
  products?: GetImportationReportResponseDiff | undefined
}
type ImportationTechnicalProgression = { stepsProgression?: { [x: string]: string[] } | undefined }
type LastManualImportInputConfiguration = { input: InputConfiguration }
type Product = {
  categoryId: BeezUPCommonCatalogCategoryId
  exists: boolean
  productId: BeezUPCommonProductId
  values: ProductValues
}
type GetProductsRequest = {
  categoryPath?: BeezUPCommonCatalogCategoryPath | undefined
  columnIdList?: BeezUPCommonCatalogColumnId[] | undefined
  ean?: string | undefined
  exists?: boolean | undefined
  mpn?: string | undefined
  orderByCatalogColumnId?: BeezUPCommonCatalogColumnId | undefined
  pageNumber: BeezUPCommonPageNumber
  pageSize: BeezUPCommonPageSize
  productIdList?: BeezUPCommonProductId[] | undefined
  sku?: string | undefined
  title?: string | undefined
  withoutSubCategories?: boolean | undefined
}
type ProductList = { paginationResult: BeezUPCommonPaginationResult; products: Product[] }
type RandomProductList = { products: Product[] }
type ChannelCatalogCategoryMappingSettings = {
  categoryMappingDisabledByMerchant?: boolean | undefined
}
type BeezUPCommonChannelCatalogId = string
type ChannelCategorySettings = {
  mappingLeafRequired?: boolean | undefined
  mappingRequired?: boolean | undefined
}
type CostType = 'CPC_Global' | 'CPA_Global' | 'CPC_ByCategory' | 'CPA_ByCategory' | 'Fixed_Global'
type ChannelCostSettings = { costType: CostType; globalCostValue?: number | undefined }
type BeezUPCommonChannelCategoryPath = string[]
type BeezUPCommonChannelColumnId = string
type BeezUPCommonCatalogColumnUserName = string
type BeezUPCommonChannelColumnName = string
type ChannelCatalogColumnMappingWithName = {
  catalogColumnId?: BeezUPCommonCatalogColumnId | undefined
  channelCategoryPath?: BeezUPCommonChannelCategoryPath | undefined
  channelColumnId: BeezUPCommonChannelColumnId
  catalogBeezUPColumnName?: BeezUPCommonBeezUPColumnName | undefined
  catalogColumnName?: BeezUPCommonCatalogColumnUserName | undefined
  channelBeezUPColumnName?: BeezUPCommonBeezUPColumnName | undefined
  channelColumnName: BeezUPCommonChannelColumnName
}
type ChannelCatalogColumnMappingListWithName = ChannelCatalogColumnMappingWithName[]
type CostSettings = { costType: CostType; globalCostValue?: number | undefined }
type ExclusionFilterName = string
type FilterOperatorName = string
type ExclusionFilter = {
  channelColumnId: BeezUPCommonChannelColumnId
  enabled: boolean
  groupId: string
  name: ExclusionFilterName
  operatorName: FilterOperatorName
  position: number
  positionInGroup: number
  value?: string | undefined
}
type ExclusionFilters = ExclusionFilter[]
type GeneralSettings = {
  acceptToPublishInfo: boolean
  activeBeezUPTracking: boolean
  doNotExportOutOfStockProducts: boolean
}
type LinksGetChannelCatalogCategoriesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ExternalLinksGetChannelInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksConfigureChannelCatalogColumnMappingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksConfigureChannelCatalogCostSettingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksConfigureChannelCatalogGeneralSettingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksDeleteChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksDisableChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksDisableChannelCatalogCategoryMappingLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksEnableChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelCatalogExclusionFiltersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelCatalogExportationCacheInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ExternalLinksGetChannelCatalogMarketplaceSettingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelCatalogProductInfoListLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksReenableChannelCatalogCategoryMappingLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogLinks = {
  categoryMappings?: LinksGetChannelCatalogCategoriesLink | undefined
  channelInfo?: ExternalLinksGetChannelInfoLink | undefined
  configureColumnMappings?: LinksConfigureChannelCatalogColumnMappingsLink | undefined
  configureCostSettings?: LinksConfigureChannelCatalogCostSettingsLink | undefined
  configureGeneralSettings?: LinksConfigureChannelCatalogGeneralSettingsLink | undefined
  delete?: LinksDeleteChannelCatalogLink | undefined
  disable?: LinksDisableChannelCatalogLink | undefined
  disableCategoryMappings?: LinksDisableChannelCatalogCategoryMappingLink | undefined
  enable?: LinksEnableChannelCatalogLink | undefined
  exclusionFilters?: LinksGetChannelCatalogExclusionFiltersLink | undefined
  exportationCacheInfo?: LinksGetChannelCatalogExportationCacheInfoLink | undefined
  marketplaceSettings?: ExternalLinksGetChannelCatalogMarketplaceSettingsLink | undefined
  products?: LinksGetChannelCatalogProductInfoListLink | undefined
  reenableCategoryMappings?: LinksReenableChannelCatalogCategoryMappingLink | undefined
  self: LinksGetChannelCatalogLink
}
type BeezUPCommonApiSettingsStatus = 'warning' | 'success' | 'failed'
type CategoryMappingStatus = 'warning' | 'success' | 'failed'
type CategoryMappingState = {
  status?: CategoryMappingStatus | undefined
  uncategorizedProductCount?: number | undefined
  withoutCategoryCostProductCount?: number | undefined
}
type ColumnMappingStatus = 'warning' | 'success' | 'failed'
type ChannelCatalogState = {
  apiSettingsStatus?: BeezUPCommonApiSettingsStatus | undefined
  categoryMappingState: CategoryMappingState
  columnMappingStatus: ColumnMappingStatus
  exportedProductCount: number
}
type ChannelCatalog = {
  channelId: BeezUPCommonChannelId
  channelImageUrl: BeezUPCommonHttpUrl
  channelName: BeezUPCommonChannelName
  categoryMappingSettings?: ChannelCatalogCategoryMappingSettings | undefined
  channelCatalogId: BeezUPCommonChannelCatalogId
  channelCategorySettings: ChannelCategorySettings
  channelCostSettings: ChannelCostSettings
  columnMappings?: ChannelCatalogColumnMappingListWithName | undefined
  costSettings?: CostSettings | undefined
  enabled: boolean
  exclusionFilters?: ExclusionFilters | undefined
  exportUrl?: BeezUPCommonHttpUrl | undefined
  generalSettings: GeneralSettings
  isMarketplace: boolean
  links: ChannelCatalogLinks
  state: ChannelCatalogState
  storeId: BeezUPCommonStoreId
  types: string[]
}
type LinksAddChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ExternalLinksCatalogGetBeezUPColumnsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelCatalogFilterOperatorsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetChannelCatalogsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogListLinks = {
  add?: LinksAddChannelCatalogLink | undefined
  beezUPColumns?: ExternalLinksCatalogGetBeezUPColumnsLink | undefined
  filterOperators?: LinksGetChannelCatalogFilterOperatorsLink | undefined
  self?: LinksGetChannelCatalogsLink | undefined
}
type ChannelCatalogListLovLinks = {
  channelCatalogExclusionFilterOperatorLov?: BeezUPCommonLOVLink3 | undefined
  channelCatalogExportCacheStatusLov?: BeezUPCommonLOVLink3 | undefined
}
type ChannelCatalogList = {
  channelCatalogs?: { [x: string]: ChannelCatalog } | undefined
  links?: ChannelCatalogListLinks | undefined
  lovLinks?: ChannelCatalogListLovLinks | undefined
}
type AddChannelCatalogRequest = { channelId: BeezUPCommonChannelId; storeId: BeezUPCommonStoreId }
type FilterOperatorDataType = 'string' | 'number'
type FilterOperator = {
  expectedChannelColumnDataType?: FilterOperatorDataType | undefined
  expectedValueDataType?: FilterOperatorDataType | undefined
  name?: FilterOperatorName | undefined
  valueRequired?: boolean | undefined
}
type ChannelCatalogProductByChannelCatalogRequest = {
  channelCatalogIds: BeezUPCommonChannelCatalogId[]
  productId: BeezUPCommonProductId
  storeId: BeezUPCommonStoreId
}
type LinksDisableChannelCatalogProductLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksOverrideChannelCatalogProductValuesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksReenableChannelCatalogProductLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogProductInfoLinks = {
  disable?: LinksDisableChannelCatalogProductLink | undefined
  override: LinksOverrideChannelCatalogProductValuesLink
  reenable?: LinksReenableChannelCatalogProductLink | undefined
  self: LinksGetChannelCatalogProductInfoLink
}
type ProductOverrideWithCatalogValue = { catalogValue?: string | undefined; override: string }
type ProductOverridesWithCatalogValues = { [x: string]: ProductOverrideWithCatalogValue }
type ChannelCatalogProductInfo = {
  productExists: boolean
  productId: string
  productImageUrl?: string | undefined
  productSku: string
  productTitle: string
  disabled: boolean
  excluded: boolean
  excludedBy?: ExclusionFilterName[] | undefined
  links: ChannelCatalogProductInfoLinks
  overrides: ProductOverridesWithCatalogValues
  uncategorized: boolean
}
type ChannelCatalogProductByChannelCatalogResponse = {
  channelCatalogs?: { [x: string]: ChannelCatalogProductInfo } | undefined
}
type ChannelCatalogCategoryCostValue = number
type LinksConfigureChannelCatalogCategoryLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogCategoryMappingInfoLinks = {
  configureCategories?: LinksConfigureChannelCatalogCategoryLink | undefined
}
type ChannelCatalogCategoryConfigurationInfo = {
  catalogCategoryPath: BeezUPCommonCatalogCategoryPath
  channelCategoryPath?: BeezUPCommonChannelCategoryPath | undefined
  costValue?: ChannelCatalogCategoryCostValue | undefined
  links: ChannelCatalogCategoryMappingInfoLinks
}
type CostStatus = 'required' | 'optional' | 'notConfigurable'
type ChannelCatalogCategoryMappingsLinks = {
  disable?: LinksDisableChannelCatalogCategoryMappingLink | undefined
  reenable?: LinksReenableChannelCatalogCategoryMappingLink | undefined
  self: LinksGetChannelCatalogCategoriesLink
}
type MappingStatus = 'required' | 'optional' | 'notConfigurable'
type ChannelCatalogCategoryConfigurationList = {
  channelCatalogCategoryConfigurations: ChannelCatalogCategoryConfigurationInfo[]
  costStatus: CostStatus
  links: ChannelCatalogCategoryMappingsLinks
  mappingStatus: MappingStatus
}
type ChannelCatalogCategoryConfiguration = {
  autoMapNewSubCategories: boolean
  catalogCategoryPath: BeezUPCommonCatalogCategoryPath
  channelCategoryPath?: BeezUPCommonChannelCategoryPath | undefined
  costValue?: ChannelCatalogCategoryCostValue | undefined
}
type ConfigureCategoryRequest = {
  channelCatalogCategories: ChannelCatalogCategoryConfiguration[]
  overrideSubCategoryMappings: boolean
}
type ChannelCatalogColumnMapping = {
  catalogColumnId?: BeezUPCommonCatalogColumnId | undefined
  channelCategoryPath?: BeezUPCommonChannelCategoryPath | undefined
  channelColumnId: BeezUPCommonChannelColumnId
}
type ChannelCatalogColumnMappingList = ChannelCatalogColumnMapping[]
type UpgradeOfferRequired = { offerId: number }
type LinksConfigureChannelCatalogExclusionFiltersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ExclusionFiltersResponseLinks = {
  configure?: LinksConfigureChannelCatalogExclusionFiltersLink | undefined
  self: LinksGetChannelCatalogExclusionFiltersLink
}
type ExclusionFiltersResponse = {
  exclusionFilters?: ExclusionFilters | undefined
  links: ExclusionFiltersResponseLinks
}
type ChannelCatalogExportCacheInfo = {
  cacheStatus: string
  expirationUtcDate?: string | undefined
  feedUrl?: string | undefined
  lastContentChangeUtcDate?: string | undefined
  lastUpdateUtcDate?: string | undefined
}
type LinksClearChannelCatalogExportationCacheLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogExportCacheInfoResponseLinks = {
  clear?: LinksClearChannelCatalogExportationCacheLink | undefined
  self: LinksGetChannelCatalogExportationCacheInfoLink
}
type ChannelCatalogExportCacheInfoResponse = {
  cacheInfo: ChannelCatalogExportCacheInfo
  links: ChannelCatalogExportCacheInfoResponseLinks
}
type ChannelCatalogExportationReporting = {
  cacheStatus?: string | undefined
  clientIpAddress: string
  clientUserAgent: string
  exportationDuration?: string | undefined
  exportationUtcDate: string
  exportedProductCount?: number | undefined
}
type LinksGetChannelCatalogExportationHistoryLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogExportationHistoryLinks = {
  self?: LinksGetChannelCatalogExportationHistoryLink | undefined
}
type ChannelCatalogExportationHistory = {
  exportations: ChannelCatalogExportationReporting[]
  links: ChannelCatalogExportationHistoryLinks
  paginationResult?: BeezUPCommonPaginationResult | undefined
}
type BeezUPCommonChannelCategoryFilter = { categoryPath?: string[] | undefined }
type ProductSetVisibilityCriteriaLogicType = 'funnel' | 'cumulative'
type ProductSetVisibilityCriteria = {
  disabled?: boolean | undefined
  excluded?: boolean | undefined
  exist?: boolean | undefined
  logic: ProductSetVisibilityCriteriaLogicType
  uncategorized?: boolean | undefined
}
type BeezUPCommonProductColumnFilterOperatorName = string
type BeezUPCommonAdditionalProductFiltersValue = {
  operatorName?: BeezUPCommonProductColumnFilterOperatorName | undefined
  values?: string[] | undefined
}
type BeezUPCommonAdditionalProductFilters = {
  [x: string]: BeezUPCommonAdditionalProductFiltersValue
}
type ChannelCatalogProductFilters = {
  additionalProductFilters?: BeezUPCommonAdditionalProductFilters | undefined
  catalogEans?: string[] | undefined
  catalogMpns?: string[] | undefined
  catalogSkus?: string[] | undefined
  channelEans?: string[] | undefined
  channelMpns?: string[] | undefined
  channelSkus?: string[] | undefined
  title?: string | undefined
}
type GetChannelCatalogProductInfoListRequest = {
  catalogCategoryFilter?: BeezUPCommonCatalogCategoryFilter | undefined
  channelCategoryFilter?: BeezUPCommonChannelCategoryFilter | undefined
  criteria: ProductSetVisibilityCriteria
  overridden?: boolean | undefined
  pageNumber: number
  pageSize: number
  productFilters?: ChannelCatalogProductFilters | undefined
}
type LinksExportChannelCatalogProductInfoListLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogProductInfoListLinks = {
  export?: LinksExportChannelCatalogProductInfoListLink | undefined
  self: LinksGetChannelCatalogProductInfoListLink
}
type ChannelCatalogProductInfoList = {
  links: ChannelCatalogProductInfoListLinks
  paginationResult: BeezUPCommonPaginationResult
  productInfos: ChannelCatalogProductInfo[]
}
type ChannelCatalogProductsCounters = {
  disabledProductCountExcludingUncategorized?: number | undefined
  disabledProductCountIncludingUncategorized?: number | undefined
  excludedProductCountExcludingUncategorizedAndDisabled?: number | undefined
  excludedProductCountIncludingUncategorizedAndDisabled?: number | undefined
  existingProductCount?: number | undefined
  uncategorizedProductCount?: number | undefined
}
type ProductOverrides = { [x: string]: string }
type LinksGetChannelInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelHeaderLinks = { self?: LinksGetChannelInfoLink | undefined }
type ChannelHeader = {
  channelId: BeezUPCommonChannelId
  channelLogoUrl: BeezUPCommonHttpUrl
  channelName: BeezUPCommonChannelName
  links: ChannelHeaderLinks
  types: string[]
}
type ChannelInfo = {
  beezUPOffer?: string | undefined
  channelDescription?: string | undefined
  channelId: BeezUPCommonChannelId
  channelLogoUrl?: BeezUPCommonHttpUrl | undefined
  channelName: BeezUPCommonChannelName
  details?:
    | {
        businessModel?: string | undefined
        category?: string | undefined
        channelType?: string | undefined
        costs?: string | undefined
        homeUrl?: string | undefined
        subscriptionLink?: string | undefined
        trackingType?: string | undefined
      }
    | undefined
  keyNumbers?:
    | {
        categories?: string | undefined
        products?: string | undefined
        stores?: string | undefined
        viewsPerMonth?: string | undefined
      }
    | undefined
  salesContact?:
    | { email?: string | undefined; name?: string | undefined; phoneNumber?: string | undefined }
    | undefined
  technicalContact?:
    | { email?: string | undefined; name?: string | undefined; phoneNumber?: string | undefined }
    | undefined
}
type ChannelCategoryChannelCode = string
type ChannelColumnDescription = string
type ChannelColumnConfiguration = {
  beezUPColumnName?: BeezUPCommonBeezUPColumnName | undefined
  columnDataType: BeezUPCommonColumnDataType
  columnImportance: BeezUPCommonColumnImportance
}
type ChannelColumnRestrictedValues = { [x: string]: string }
type ChannelColumnShowInMapping = boolean
type ChannelCategoryColumnOverride = {
  channelColumnDescription?: ChannelColumnDescription | undefined
  channelColumnId: BeezUPCommonChannelColumnId
  channelColumnName: BeezUPCommonChannelColumnName
  configuration: ChannelColumnConfiguration
  restrictedValues?: ChannelColumnRestrictedValues | undefined
  showInMapping: ChannelColumnShowInMapping
}
type ChannelCategoryColumnOverrides = { [x: string]: ChannelCategoryColumnOverride }
type ChannelCategoryDefaultCost = number
type BeezUPCommonChannelCategoryId = string
type ChannelCategoryLevel = number
type ChannelCategory = {
  channelCategoryChannelCode?: ChannelCategoryChannelCode | undefined
  channelCategoryColumnOverrides?: ChannelCategoryColumnOverrides | undefined
  channelCategoryDefaultCost?: ChannelCategoryDefaultCost | undefined
  channelCategoryId: BeezUPCommonChannelCategoryId
  channelCategoryLevel: ChannelCategoryLevel
  channelCategoryPath: BeezUPCommonChannelCategoryPath
}
type ChannelFirstLevelCategory = {
  channelCategoryChannelCode?: ChannelCategoryChannelCode | undefined
  channelCategoryColumnOverrides?: ChannelCategoryColumnOverrides | undefined
  channelCategoryDefaultCost?: ChannelCategoryDefaultCost | undefined
  channelCategoryId: BeezUPCommonChannelCategoryId
  channelCategoryLevel: ChannelCategoryLevel
  channelCategoryName: string
  subCategories?: ChannelCategory[] | undefined
}
type ChannelRootCategory = { firstLevelCategories: ChannelFirstLevelCategory[] }
type ChannelColumn = {
  channelColumnDescription?: ChannelColumnDescription | undefined
  channelColumnId: BeezUPCommonChannelColumnId
  channelColumnName: BeezUPCommonChannelColumnName
  configuration: ChannelColumnConfiguration
  position: number
  restrictedValues?: ChannelColumnRestrictedValues | undefined
  showInMapping: ChannelColumnShowInMapping
}
type LinksGetUserAccountInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetBillingPeriodsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetContractsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetFriendInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetOfferLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetInvoicesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksLogoutLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetCustomerIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStandardOffersLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoresLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CustomerIndexLinks = {
  accountInfo: LinksGetUserAccountInfoLink
  billingPeriods: LinksGetBillingPeriodsLink
  contracts?: LinksGetContractsLink | undefined
  friendInfo: LinksGetFriendInfoLink
  getOffer?: LinksGetOfferLink | undefined
  invoices?: LinksGetInvoicesLink | undefined
  logout?: LinksLogoutLink | undefined
  self: LinksGetCustomerIndexLink
  standardOffers: LinksGetStandardOffersLink
  stores?: LinksGetStoresLink | undefined
}
type CustomerIndexLovLinks = {
  activeOfferLov?: BeezUPCommonLOVLink3 | undefined
  beezUPTimeZoneLov?: BeezUPCommonLOVLink3 | undefined
  contractTerminationReasonLov?: BeezUPCommonLOVLink3 | undefined
  countryLov?: BeezUPCommonLOVLink3 | undefined
  customerStatusLov?: BeezUPCommonLOVLink3 | undefined
  invoicePaymentStatusLov?: BeezUPCommonLOVLink3 | undefined
  offerLov?: BeezUPCommonLOVLink3 | undefined
  storeCountryLov?: BeezUPCommonLOVLink3 | undefined
  storeSectorLov?: BeezUPCommonLOVLink3 | undefined
}
type CustomerIndex = { links: CustomerIndexLinks; lovLinks: CustomerIndexLovLinks }
type AccountingEmails = BeezUPCommonEmail[]
type Address = string
type City = string
type Company = string
type BeezUPCommonCountryIsoCodeAlpha3 = string
type PostalCode = string
type VatNumber = string
type CompanyInfo = {
  accountingEmails?: AccountingEmails | undefined
  address: Address
  city: City
  company: Company
  countryIsoCodeAlpha3: BeezUPCommonCountryIsoCodeAlpha3
  postalCode: PostalCode
  vatNumber?: VatNumber | undefined
}
type LinksActivateUserAccountLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksChangeEmailLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksChangePasswordLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetCreditCardInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetProfilePictureInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksSaveCompanyInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksSaveCreditCardInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksSavePersonalInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksSaveProfilePictureInfoLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type AccountInfoLinks = {
  activateUserAccount?: LinksActivateUserAccountLink | undefined
  changeEmail: LinksChangeEmailLink
  changePassword: LinksChangePasswordLink
  getCreditCardInfo: LinksGetCreditCardInfoLink
  getProfilePictureInfo: LinksGetProfilePictureInfoLink
  saveCompanyInfo: LinksSaveCompanyInfoLink
  saveCreditCardInfo: LinksSaveCreditCardInfoLink
  savePersonalInfo: LinksSavePersonalInfoLink
  saveProfilePictureInfo: LinksSaveProfilePictureInfoLink
  self: LinksGetUserAccountInfoLink
}
type BeezUPTimeZoneId = number
type FirstName = string
type LastName = string
type PhoneNumber = string
type WhatIDo = string
type PersonalInfo = {
  beezUPTimeZoneId: BeezUPTimeZoneId
  firstName: FirstName
  lastName: LastName
  phoneNumber: PhoneNumber
  whatIDo?: WhatIDo | undefined
}
type ProfilePictureUrl = string
type AccountStatus = 'Active' | 'SystemBlocked' | 'UserBlocked' | 'NotActivated'
type AccountInfo = {
  commercialOwnerEmail?: BeezUPCommonEmail | undefined
  companyInfo?: CompanyInfo | undefined
  email: BeezUPCommonEmail
  info?: BeezUPCommonInfoSummaries | undefined
  links: AccountInfoLinks
  personalInfo?: PersonalInfo | undefined
  profilePictureUrl?: ProfilePictureUrl | undefined
  status: AccountStatus
  userId: BeezUPCommonUserId
}
type ChangeEmailRequest = { newEmail: BeezUPCommonEmail }
type ChangePasswordRequest = { newPassword: string; oldPassword: string }
type CardNumber = string
type ExpirationMonth = number
type ExpirationYear = number
type CreditCardInfoWithCardType = {
  cardNumber: CardNumber
  cardType: string
  expirationMonth: ExpirationMonth
  expirationYear: ExpirationYear
}
type PaymentMethod =
  | 'Transfer'
  | 'Debit'
  | 'Paypal'
  | 'Check'
  | 'CreditNote'
  | 'Loss'
  | 'OnlinePayment'
type CreditCardInfoResponseLinks = {
  saveCreditCardInfo: LinksSaveCreditCardInfoLink
  self: LinksGetCreditCardInfoLink
}
type CreditCardInfoResponse = {
  creditCardInfo?: CreditCardInfoWithCardType | undefined
  currentPaymentMethod: PaymentMethod
  info?: BeezUPCommonInfoSummaries | undefined
  links: CreditCardInfoResponseLinks
}
type CardVerificationCode = string
type CreditCardInfo = {
  cardNumber: CardNumber
  cardVerificationCode: CardVerificationCode
  expirationMonth: ExpirationMonth
  expirationYear: ExpirationYear
}
type ProfilePictureInfoResponseLinks = {
  save: LinksSaveProfilePictureInfoLink
  self: LinksGetProfilePictureInfoLink
}
type ProfilePictureSelected = 'gravatar' | 'initials' | 'uploaded'
type GravatarProfilePictureUrl = string
type InitialsProfilePictureUrl = string
type ProfilePictureInfoWithDefault = {
  profilePictureSelected: ProfilePictureSelected
  profilePictureUrl?: ProfilePictureUrl | undefined
  gravatarProfilePictureUrl: GravatarProfilePictureUrl
  initialsProfilePictureUrl: InitialsProfilePictureUrl
}
type ProfilePictureInfoResponse = {
  links: ProfilePictureInfoResponseLinks
  profilePictureInfo: ProfilePictureInfoWithDefault
}
type ProfilePictureInfo = {
  profilePictureSelected: ProfilePictureSelected
  profilePictureUrl?: ProfilePictureUrl | undefined
}
type BillingPeriod = { billingPeriodInMonth: number; discountPercentage: number }
type BillingPeriodListLinks = { self?: LinksGetBillingPeriodsLink | undefined }
type BillingPeriodList = { billingPeriods: BillingPeriod[]; links: BillingPeriodListLinks }
type ContractId = string
type ClickIncludedAndAdditionalClickPrice = {
  additionalClickPrice?: number | undefined
  clickIncluded?: number | undefined
}
type FixedAndVariableClickModelInfo = {
  clickIncludedAndAdditionalClickPrices: ClickIncludedAndAdditionalClickPrice[]
}
type OfferId = number
type StoreCount = number
type ClickIncludedAndVariablePrice = {
  clickIncluded?: number | undefined
  variablePrice?: number | undefined
}
type VariableModelInfo = {
  clickIncludedAndVariablePrices: ClickIncludedAndVariablePrice[]
  overflowClickCount: number
  overflowClickPrice: number
}
type LinksTerminateCurrentContractLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksReactivateCurrentContractLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type CurrentContractInfoLinks = {
  disable?: LinksTerminateCurrentContractLink | undefined
  reenable?: LinksReactivateCurrentContractLink | undefined
}
type CurrentContractInfo = {
  additionalClickPrice?: number | undefined
  billingPeriodInMonth?: number | undefined
  billingPeriodPercentDiscount?: number | undefined
  clickIncluded?: number | undefined
  commitmentCalculatedFinishUtcDate?: string | undefined
  commitmentPeriodInMonth?: number | undefined
  contractId?: ContractId | undefined
  currencyCode?: BeezUPCommonCurrencyCode | undefined
  discountDurationInMonth?: number | undefined
  discountEndUtcDate?: string | undefined
  fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo | undefined
  fixedPrice?: number | undefined
  ipUserCreation?: string | undefined
  ipUserModification?: string | undefined
  isCommitmentRenewalAutomatically?: boolean | undefined
  isModifiableContract?: boolean | undefined
  offerId?: OfferId | undefined
  offerName?: string | undefined
  percentDiscount?: number | undefined
  startUtcDate?: string | undefined
  storeCount?: StoreCount | undefined
  trialPeriodInMonth?: number | undefined
  variableModelInfo?: VariableModelInfo | undefined
  links: CurrentContractInfoLinks
}
type LinksCreateContractLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ContractsLinks = {
  create?: LinksCreateContractLink | undefined
  self?: LinksGetContractsLink | undefined
}
type LinksDeleteNextContractLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type NextContractInfoLinks = { delete?: LinksDeleteNextContractLink | undefined }
type NextContractInfo = {
  additionalClickPrice?: number | undefined
  billingPeriodInMonth?: number | undefined
  billingPeriodPercentDiscount?: number | undefined
  clickIncluded?: number | undefined
  commitmentCalculatedFinishUtcDate?: string | undefined
  commitmentPeriodInMonth?: number | undefined
  contractId?: ContractId | undefined
  currencyCode?: BeezUPCommonCurrencyCode | undefined
  discountDurationInMonth?: number | undefined
  discountEndUtcDate?: string | undefined
  fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo | undefined
  fixedPrice?: number | undefined
  ipUserCreation?: string | undefined
  ipUserModification?: string | undefined
  isCommitmentRenewalAutomatically?: boolean | undefined
  isModifiableContract?: boolean | undefined
  offerId?: OfferId | undefined
  offerName?: string | undefined
  percentDiscount?: number | undefined
  startUtcDate?: string | undefined
  storeCount?: StoreCount | undefined
  trialPeriodInMonth?: number | undefined
  variableModelInfo?: VariableModelInfo | undefined
  links: NextContractInfoLinks
}
type Contracts = {
  current?: CurrentContractInfo | undefined
  links: ContractsLinks
  next?: NextContractInfo | undefined
}
type BillingPeriodInMonth = number
type CouponDiscountCode = string
type CouponOfferCode = string
type CreateContract = {
  billingPeriodInMonth: BillingPeriodInMonth
  couponDiscountCode?: CouponDiscountCode | undefined
  couponOfferCode?: CouponOfferCode | undefined
  offerId: OfferId
  storeCount: StoreCount
}
type CreateContractResponseLinks = {
  contracts?: LinksGetContractsLink | undefined
  self?: LinksCreateContractLink | undefined
}
type CreateContractResponse = {
  info?: BeezUPCommonInfoSummaries | undefined
  links?: CreateContractResponseLinks | undefined
}
type ContractTerminationReason = string
type ContractTerminationReasonType = number
type TerminateContract = {
  contractTerminationReason?: ContractTerminationReason | undefined
  contractTerminationReasonType: ContractTerminationReasonType
}
type FriendCountryIsoCodeAlpha3 = string
type FriendEmail = string
type FriendProfilePictureUrl = string
type UserFriendInfo = {
  company: string
  countryIsoCodeAlpha3: FriendCountryIsoCodeAlpha3
  email: FriendEmail
  firstName: string
  lastName: string
  profilePictureUrl?: FriendProfilePictureUrl | undefined
  userId: string
  whatIDo?: string | undefined
}
type InvoiceNumber = string
type InvoicePaymentStatus = 'Paid' | 'NotPaid' | 'PartiallyPaid' | 'Loss'
type Invoice = {
  amount: number
  amountToBePaid: number
  contractId: ContractId
  currencyCode: BeezUPCommonCurrencyCode
  dueDate: string
  invoiceDate: string
  invoiceNumber: InvoiceNumber
  invoiceUrl?: string | undefined
  paymentStatus: InvoicePaymentStatus
}
type InvoiceListLinks = { self: LinksGetInvoicesLink }
type InvoiceList = { invoices: Invoice[]; links: InvoiceListLinks }
type Functionality = { code: string; order: number }
type StandardOffersLinks = { self: LinksGetStandardOffersLink }
type OfferFunctionality = {
  functionalityCode: string
  maxValueInteger?: number | undefined
  text?: string | undefined
  unlimited: boolean
}
type StandardOfferLinks = { getOffer?: LinksGetOfferLink | undefined }
type StandardOffer = {
  additionalClickPrice?: number | undefined
  currencyCode?: BeezUPCommonCurrencyCode | undefined
  fixedPrice?: number | undefined
  functionalities?: OfferFunctionality[] | undefined
  includedClick?: number | undefined
  isMostPopular?: boolean | undefined
  isOldOffer?: boolean | undefined
  links: StandardOfferLinks
  name: string
  offerId: number
  position?: number | undefined
}
type StandardOffers = {
  functionalities: Functionality[]
  links: StandardOffersLinks
  offers: StandardOffer[]
}
type OfferRequest = {
  billingPeriodInMonth: BillingPeriodInMonth
  couponDiscountCode?: CouponDiscountCode | undefined
  couponOfferCode?: CouponOfferCode | undefined
  offerId: OfferId
  storeCount: StoreCount
}
type ContractBillingPeriodInfo = {
  amountBillingPeriodDiscount?: number | undefined
  billingPeriodInMonth?: BillingPeriodInMonth | undefined
  billingPeriodPercentDiscount?: number | undefined
}
type BonusType =
  | 'OnlinePaymentMethodBonus'
  | 'PreviousInvoiceProrataBonus'
  | 'PreviousContractBonus'
type BonusInfo = { amount: number; bonusType: BonusType }
type ContractBonusInfo = { bonuses: BonusInfo[] }
type ContractClickInfo = {
  additionalClickPrice?: number | undefined
  clickIncluded?: number | undefined
  initialOfferClickIncluded?: number | undefined
}
type ContractCommitmentInfo = {
  commercialCreatorUserId?: string | undefined
  commercialUserId?: string | undefined
  commitmentCalculatedFinishDate?: string | undefined
  commitmentPeriodInMonth?: number | undefined
  contractType?: number | undefined
  couponOfferCode?: CouponOfferCode | undefined
  currentContractId?: string | undefined
  currentContractTerminationDate?: string | undefined
  currentCustomerPaymentMethod?: PaymentMethod | undefined
  fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo | undefined
  isCustomerWantsToTerminateHisContract?: boolean | undefined
  isModelMustBeTransmittedInNewContract?: boolean | undefined
  minBillingPeriodInMonths?: number | undefined
  model?: string | undefined
  newContractStartDate?: string | undefined
  offerId?: OfferId | undefined
  offerName?: string | undefined
  paymentDelayInDays?: number | undefined
  paymentMethodAuthorized?: PaymentMethod | undefined
  requestedPaymentMethod?: PaymentMethod | undefined
  trialPeriodFinishDate?: string | undefined
  trialPeriodInMonth?: number | undefined
  variableModelInfo?: VariableModelInfo | undefined
}
type PromotionalCodeValidity = 'None' | 'Valid' | 'Invalid' | 'ExpiredOrInactive'
type ContractDiscountInfo = {
  amountCodePromoDiscount?: number | undefined
  amountCodePromoDiscountPerMonth?: number | undefined
  couponDiscountCode?: string | undefined
  couponDiscountId?: number | undefined
  customerHasActualDiscount?: boolean | undefined
  discountDurationInMonth?: number | undefined
  isCouponDiscountLinkedToCouponOffer?: boolean | undefined
  percentDiscount?: number | undefined
  promotionalCodeValidity?: PromotionalCodeValidity | undefined
}
type ContractMoneyInfo = {
  amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount?:
    | number
    | undefined
  amountExcludingTaxesAndExcludingDiscounts?: number | undefined
  amountExcludingTaxesIncludingDiscounts?: number | undefined
  amountExcludingTaxesIncludingDiscountsPerMonth?: number | undefined
  amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number | undefined
  amountIncludingTaxesIncludingDiscounts?: number | undefined
  amountTaxesExcludingDiscountIncludingBillingPeriodDiscount?: number | undefined
  amountTaxesIncludingDiscounts?: number | undefined
  currencyCode?: BeezUPCommonCurrencyCode | undefined
  initialOfferFixedPrice?: number | undefined
  vatPercent?: number | undefined
}
type ContractStoreInfo = {
  additionalStorePrice?: number | undefined
  maxStoreCount?: number | undefined
  minStoreCount?: number | undefined
  ownedStoreCount?: number | undefined
  storeCount?: StoreCount | undefined
  storeIncluded?: number | undefined
}
type PreviousFixPeriodInvoiceProrataInfo = {
  amountAfterTax?: number | undefined
  amountToBePaid?: number | undefined
  computedProrataToBeDeducted?: number | undefined
  contractId?: string | undefined
  fixedPeriodEndDate?: string | undefined
  fixedPeriodStartDate?: string | undefined
  invoiceNumber?: string | undefined
}
type OfferContent = {
  contractBillingPeriodInfo: ContractBillingPeriodInfo
  contractBonusInfo: ContractBonusInfo
  contractClickInfo: ContractClickInfo
  contractCommitmentInfo: ContractCommitmentInfo
  contractDiscountInfo: ContractDiscountInfo
  contractMoneyInfo: ContractMoneyInfo
  contractStoreInfo: ContractStoreInfo
  contractTerminationReason?: ContractTerminationReason | undefined
  contractTerminationReasonType?: ContractTerminationReasonType | undefined
  notifyVatExemption: boolean
  previousFixPeriodInvoiceProrataInfo: PreviousFixPeriodInvoiceProrataInfo
}
type OfferLinks = { createContract?: LinksCreateContractLink | undefined }
type Offer = {
  content?: OfferContent | undefined
  info?: BeezUPCommonInfoSummaries | undefined
  links?: OfferLinks | undefined
}
type LinksCreateStoreLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type StoreListLinks = {
  createStore?: LinksCreateStoreLink | undefined
  self?: LinksGetStoresLink | undefined
}
type StoreCountryIsoCodeAlpha3 = string
type LinksDeleteStoreLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksShareStoreLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetStoreSharesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksUpdateStoreLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type StoreLinks = {
  deleteStore?: LinksDeleteStoreLink | undefined
  self?: LinksGetStoreLink | undefined
  share?: LinksShareStoreLink | undefined
  shares?: LinksGetStoreSharesLink | undefined
  updateStore?: LinksUpdateStoreLink | undefined
}
type StoreName = string
type StoreSector = string
type StoreSectors = StoreSector[]
type StoreStatus = 'Active' | 'SystemBlocked' | 'UserBlocked'
type StoreUrl = string
type StoreUserRole = 'Owner' | 'User'
type Store = {
  countryIsoCodeAlpha3: StoreCountryIsoCodeAlpha3
  creationUtcDate: string
  currencyCode: BeezUPCommonCurrencyCode
  goVersion: number
  isTest: boolean
  links: StoreLinks
  name: StoreName
  offerId: OfferId
  offerName: string
  ownerUserId: string
  sectors: StoreSectors
  shareCount: number
  status: StoreStatus
  storeId: BeezUPCommonStoreId
  url: StoreUrl
  userRole: StoreUserRole
}
type StoreList = { links: StoreListLinks; stores: Store[] }
type CreateStoreRequest = {
  countryIsoCodeAlpha3: StoreCountryIsoCodeAlpha3
  id?: BeezUPCommonStoreId | undefined
  name: StoreName
  sectors: StoreSectors
  url: StoreUrl
}
type ErrorResponseMessagePaymentRequiredLinks = { offer: LinksGetOfferLink }
type ErrorResponseMessagePaymentRequired = {
  errors: BeezUPCommonUserErrorMessage[]
  links: ErrorResponseMessagePaymentRequiredLinks
}
type UpdateStoreRequest = { name: StoreName; sectors: StoreSectors; url: StoreUrl }
type AlertId = number
type AlertName = string
type AlertEnabled = boolean
type LinksSaveStoreAlertsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type StoreAlertLinks = { save?: LinksSaveStoreAlertsLink | undefined }
type AlertPropertyId = number
type AlertPropertyValue = string
type StoreAlertPropertyInfo = {
  propertyId: AlertPropertyId
  propertyValue: AlertPropertyValue
  propertyName: string
  propertyValidationExpression?: string | undefined
}
type StoreAlert = {
  alertId: AlertId
  alertName: AlertName
  enabled: AlertEnabled
  links: StoreAlertLinks
  properties?: StoreAlertPropertyInfo[] | undefined
}
type StoreAlerts = { alerts?: StoreAlert[] | undefined }
type StoreAlertProperty = { propertyId: AlertPropertyId; propertyValue: AlertPropertyValue }
type SaveStoreAlertRequest = {
  enabled: AlertEnabled
  properties?: StoreAlertProperty[] | undefined
}
type SaveStoreAlertsRequest = { [x: string]: SaveStoreAlertRequest }
type FunctionalityRightInfo = {
  functionalityCode: string
  maxValueInterger?: number | undefined
  unlimited?: boolean | undefined
}
type StoreSharesLinks = {
  self?: LinksGetStoreSharesLink | undefined
  share?: LinksShareStoreLink | undefined
}
type LinksDeleteStoreShareLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type StoreShareLinks = { deleteShare?: LinksDeleteStoreShareLink | undefined }
type StoreShare = { links: StoreShareLinks; userId: BeezUPCommonUserId; userRole: StoreUserRole }
type StoreShares = { links: StoreSharesLinks; shares: StoreShare[] }
type ZendeskToken = { token?: string | undefined }
type LinksMigrateLegacyTrackingChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetLegacyTrackingChannelCatalogLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LegacyTrackingChannelCatalogLinks = {
  migrate?: LinksMigrateLegacyTrackingChannelCatalogLink | undefined
  self: LinksGetLegacyTrackingChannelCatalogLink
}
type LegacyTrackingChannelCatalog = { links: LegacyTrackingChannelCatalogLinks }
type LinksGetLegacyTrackingChannelCatalogsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LegacyTrackingChannelCatalogListLinks = {
  self?: LinksGetLegacyTrackingChannelCatalogsLink | undefined
}
type LegacyTrackingChannelCatalogList = {
  channelCatalogs?: { [x: string]: LegacyTrackingChannelCatalog } | undefined
  links?: LegacyTrackingChannelCatalogListLinks | undefined
}
type LinksGetUserListOfValuesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type UserLovLinks = { [x: string]: LinksGetUserListOfValuesLink }
type LinksGetUserLovIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type UserLovIndexLinks = {
  lists?: UserLovLinks | undefined
  self?: LinksGetUserLovIndexLink | undefined
}
type UserLovIndex = { links?: UserLovIndexLinks | undefined }
type UserListOfValuesResponseLinks = { self?: LinksGetUserListOfValuesLink | undefined }
type UserListOfValuesResponse = {
  items?: BeezUPCommonListOfValueItem[] | undefined
  links?: UserListOfValuesResponseLinks | undefined
}
type LinksGetMarketplaceChannelCatalogsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type MarketplaceChannelCatalogListLinks = { self: LinksGetMarketplaceChannelCatalogsLink }
type LinksGetChannelCatalogMarketplacePropertiesLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetPublicationsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type FeedType =
  | 'Products'
  | 'Inventory'
  | 'Pricing'
  | 'Images'
  | 'Relationships'
  | 'Unpublish'
  | 'Offers'
type PublicationStrategyKind = 'Delta' | 'Full'
type LinksPublishCatalogToMarketplaceLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type PublicationStrategy = string
type MarketplaceChannelCatalogPublicationOption = {
  feedType: FeedType
  kind: PublicationStrategyKind
  link: LinksPublishCatalogToMarketplaceLink
  strategy: PublicationStrategy
  withUnpublish: boolean
}
type LinksGetChannelCatalogMarketplaceSettingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type MarketplaceChannelCatalogLinks = {
  properties: LinksGetChannelCatalogMarketplacePropertiesLink
  publications?: LinksGetPublicationsLink | undefined
  publishOptions?: MarketplaceChannelCatalogPublicationOption[] | undefined
  settings: LinksGetChannelCatalogMarketplaceSettingsLink
}
type MarketplaceChannelCatalogLovLinks = {
  cancelationReasonCodeLOV?: BeezUPCommonLOVLink3 | undefined
  carrierCodeLOV?: BeezUPCommonLOVLink3 | undefined
  marketplaceStorePropertyGroupLOV?: BeezUPCommonLOVLink3 | undefined
  marketplaceStorePropertyLOV?: BeezUPCommonLOVLink3 | undefined
  refundReasonCodeLOV?: BeezUPCommonLOVLink3 | undefined
  shippingMethodLOV?: BeezUPCommonLOVLink3 | undefined
}
type BeezUPCommonMarketplaceAccountId = number
type MarketplaceChannelCatalog = {
  apiSettingsStatus: BeezUPCommonApiSettingsStatus
  beezUPChannelCatalogId: BeezUPCommonChannelCatalogId
  beezUPChannelId: BeezUPCommonChannelId
  beezUPMarketplaceName: { [x: string]: unknown }
  beezUPStoreId: BeezUPCommonStoreId
  beezUPStoreName: string
  enabled: boolean
  links: MarketplaceChannelCatalogLinks
  lovLinks: MarketplaceChannelCatalogLovLinks
  marketplaceAccountId?: BeezUPCommonMarketplaceAccountId | undefined
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
  marketplaceIsoCountryCodeAlpha2: string
  marketplaceMarketPlaceId: string
  marketplaceMerchantIdentifiers?: { [x: string]: string } | undefined
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
}
type MarketplaceChannelCatalogList = {
  links: MarketplaceChannelCatalogListLinks
  marketplaceChannelCatalogs: MarketplaceChannelCatalog[]
}
type AccountPublicationsLinks = { self: LinksGetPublicationsLink }
type PublicationFeedReporting = {
  completed?: boolean | undefined
  endUtcDate?: string | undefined
  errorMessage?: string | undefined
  exportedProducts?: number | undefined
  failedItems?: number | undefined
  feedType: FeedType
  htmlReportGenerationErrorMessage?: string | undefined
  htmlReportUrl?: string | undefined
  processingStatus: string
  publishedItems?: number | undefined
  publishedItemsWithWarning?: number | undefined
  startUtcDate: string
  transmittedItems?: number | undefined
}
type PublicationType = 'PublishProducts' | 'PublishOffers' | 'Unpublish'
type PublicationReporting = { feeds: PublicationFeedReporting[]; publicationType: PublicationType }
type AccountPublications = { links: AccountPublicationsLinks; publications: PublicationReporting[] }
type PublishCatalogToMarketplaceRequest = {
  feedType: FeedType
  publicationStrategyKind: PublicationStrategyKind
  withUnpublish: boolean
}
type ExternalLinksGetExternalConfigurationPageLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogMarketplacePropertiesLinks = {
  externalConfigurationPage?: ExternalLinksGetExternalConfigurationPageLink | undefined
  self: LinksGetChannelCatalogMarketplacePropertiesLink
  settings?: LinksGetChannelCatalogMarketplaceSettingsLink | undefined
}
type ChannelCatalogMarketplacePropertyDiscriminatorType =
  | 'channelCatalogMarketplaceStringProperty'
  | 'channelCatalogMarketplaceIntegerProperty'
  | 'channelCatalogMarketplaceBooleanProperty'
  | 'channelCatalogMarketplaceNumberProperty'
type ChannelCatalogMarketplacePropertyName = string
type Type = 'string' | 'integer' | 'boolean' | 'number'
type ChannelCatalogMarketplaceProperty = {
  description?: string | undefined
  discriminatorType: ChannelCatalogMarketplacePropertyDiscriminatorType
  info?: BeezUPCommonInfoSummaries | undefined
  lovLink?: BeezUPCommonLOVLink3 | undefined
  lovRequired?: boolean | undefined
  maxItems?: number | undefined
  maxLength?: number | undefined
  minItems?: number | undefined
  minLength?: number | undefined
  name: ChannelCatalogMarketplacePropertyName
  offerIdRequired?: number | undefined
  pattern?: string | undefined
  position: number
  readOnly: boolean
  required: boolean
  type: Type
  visible: boolean
}
type ChannelCatalogMarketplacePropertyGroup = {
  name: string
  position: number
  properties: ChannelCatalogMarketplaceProperty[]
}
type ChannelCatalogMarketplaceProperties = {
  info?: BeezUPCommonInfoSummaries | undefined
  links: ChannelCatalogMarketplacePropertiesLinks
  propertyGroups: ChannelCatalogMarketplacePropertyGroup[]
}
type LinksSetChannelCatalogMarketplaceSettingsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type ChannelCatalogMarketplaceSettingsLinks = {
  save: LinksSetChannelCatalogMarketplaceSettingsLink
  self: LinksGetChannelCatalogMarketplaceSettingsLink
}
type ChannelCatalogMarketplaceSettingDiscriminatorType =
  | 'channelCatalogMarketplaceStringSetting'
  | 'channelCatalogMarketplaceIntegerSetting'
  | 'channelCatalogMarketplaceBooleanSetting'
  | 'channelCatalogMarketplaceNumberSetting'
type ChannelCatalogMarketplaceSetting = {
  discriminatorType: ChannelCatalogMarketplaceSettingDiscriminatorType
  name: ChannelCatalogMarketplacePropertyName
}
type ChannelCatalogMarketplaceSettings = {
  links: ChannelCatalogMarketplaceSettingsLinks
  settings: ChannelCatalogMarketplaceSetting[]
}
type ChannelCatalogMarketplaceSettingArray = ChannelCatalogMarketplaceSetting[]
type SetChannelCatalogMarketplaceSettingsRequest = {
  settings: ChannelCatalogMarketplaceSettingArray
}
type LinksGetAutomaticTransitionsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetOrderExportationsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type LinksGetOrderIndexLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type OrderIndexLinks = {
  autoTransitions: LinksGetAutomaticTransitionsLink
  clearMerchantInfos: LinksClearMerchantOrderInfoListLink
  export: LinksExportOrdersLink
  exportations?: LinksGetOrderExportationsLink | undefined
  harvest: LinksHarvestAllLink
  lightOrders: LinksGetOrderListLightLink
  orders: LinksGetOrderListFullLink
  self: LinksGetOrderIndexLink
  setMerchantInfos: LinksSetMerchantOrderInfoListLink
  status: LinksGetMarketplaceAccountsSynchronizationLink
}
type OrderIndexLovLinks = {
  orderChangeBusinessOperationType: BeezUPCommonLOVLink3
  orderProperty: BeezUPCommonLOVLink3
  orderPropertyPosted: BeezUPCommonLOVLink3
  orderState: BeezUPCommonLOVLink3
}
type OrderIndex = { links: OrderIndexLinks; lovLinks: OrderIndexLovLinks }
type LinksConfigureAutomaticTransitionsLink = {
  allOptionalParamsProvided?: boolean | undefined
  allRequiredParamsProvided?: boolean | undefined
  description?: string | undefined
  docUrl?: BeezUPCommonDocUrl | undefined
  href: BeezUPCommonHref
  info?: BeezUPCommonInfoSummaries | undefined
  label?: string | undefined
  method?: BeezUPCommonHttpMethod | undefined
  operationId?: BeezUPCommonOperationId | undefined
  parameters?: { [x: string]: BeezUPCommonLinkParameter3 } | undefined
  urlTemplated?: boolean | undefined
}
type AutomaticTransitionInfoLinks = { configure: LinksConfigureAutomaticTransitionsLink }
type AutomaticTransitionInfo = {
  accountId: AccountId
  enabled: boolean
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  orderStatusTransitionId: number
  beezUPOrderStatus: BeezUPOrderStatus
  businessOperationType: BusinessOperationType
  links?: AutomaticTransitionInfoLinks | undefined
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
}
type AutomaticTransitionInfoListLinks = {
  configure: LinksConfigureAutomaticTransitionsLink
  self: LinksGetAutomaticTransitionsLink
}
type AutomaticTransitionInfoList = {
  automaticTransitionInfos?: AutomaticTransitionInfo[] | undefined
  links: AutomaticTransitionInfoListLinks
}
type AutomaticTransition = {
  accountId: AccountId
  enabled: boolean
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  orderStatusTransitionId: number
}
type ConfigureAutomaticTransitionRequest = { automaticTransitions: AutomaticTransition[] }
type OrderExportationReportingProcessingStatus =
  | 'None'
  | 'InProgress'
  | 'Done'
  | 'Failed'
  | 'AlreadyInProgress'
  | 'Aborted'
  | 'Suspended'
type OrderExportationReporting = {
  abortionUtcDate?: string | undefined
  beginUtcDate?: string | undefined
  blobNameUri?: string | undefined
  endUtcDate?: string | undefined
  enqueuedUtcDate: string
  errorMessage?: string | undefined
  executionUUID: string
  expirationUtcDate?: string | undefined
  failureUtcDate?: string | undefined
  ipAddress: string
  jsonCriteria?: string | undefined
  lastUpdateUtcDate?: string | undefined
  orderCount?: number | undefined
  processingStatus: OrderExportationReportingProcessingStatus
  remainingOrderCount?: number | undefined
  resumedUtcDate?: string | undefined
  sourceType: SourceType
  sourceUserId?: BeezUPCommonUserId | undefined
  sourceUserName: string
  suspendedUtcDate?: string | undefined
  timeoutDuration?: string | undefined
  warningMessage?: string | undefined
}
type OrderExportationsLinks = { self: LinksGetOrderExportationsLink }
type OrderExportations = {
  exportations: OrderExportationReporting[]
  links: OrderExportationsLinks
  paginationResult?: BeezUPCommonPaginationResult | undefined
}
type ExportOrderListFormat = 'csv'
type OrderListRequestWithoutPagination = {
  accountIds?: AccountId[] | undefined
  beezUPOrderStatuses?: BeezUPOrderStatus[] | undefined
  beginPeriodUtcDate: string
  dateSearchType?: DateSearchType | undefined
  endPeriodUtcDate: string
  invoiceAvailabilityType?: InvoiceAvailabilityType | undefined
  marketplaceBusinessCodes?: BeezUPCommonMarketplaceBusinessCode[] | undefined
  marketplaceOrderIds?: MarketplaceOrderId[] | undefined
  marketplaceTechnicalCodes?: BeezUPCommonMarketplaceTechnicalCode[] | undefined
  orderMerchantInfoSynchronizationStatus?: OrderMerchantInfoSynchronizationStatus | undefined
  order_Buyer_Name?: OrderBuyerName | undefined
  order_MerchantOrderIds?: OrderMerchantOrderId[] | undefined
  storeIds?: BeezUPCommonStoreId[] | undefined
}
type ExportOrderListRequest = {
  format?: ExportOrderListFormat | undefined
  orderListRequestWithoutPagination: OrderListRequestWithoutPagination
  storeId: BeezUPCommonStoreId
}
type MarketplaceAccountId = number
type BeezUPOrderUUID = string
type InvoiceSequenceNumber = number
type MarketplaceTechnicalCode = string
type GenerateBatchOrderInvoiceRequestItem = {
  accountId: MarketplaceAccountId
  beezUPOrderUUID: BeezUPOrderUUID
  invoiceSequenceNumber: InvoiceSequenceNumber
  marketplaceTechnicalCode: MarketplaceTechnicalCode
}
type GenerateBatchOrderInvoiceRequest = GenerateBatchOrderInvoiceRequestItem[]
type InvoiceLocation = string
type GenerateOrderInvoiceResponse = {
  accountId: MarketplaceAccountId
  beezUPOrderUUID: BeezUPOrderUUID
  invoiceLocation?: InvoiceLocation | undefined
  invoiceSequenceNumber?: InvoiceSequenceNumber | undefined
  marketplaceTechnicalCode: MarketplaceTechnicalCode
}
type GenerateBatchOrderInvoiceResponse = GenerateOrderInvoiceResponse[]
type GenerateBatchOrderInvoiceErrorResponseItemDetail = {
  errorMessage?: UserErrorMessage | undefined
  request?: GenerateBatchOrderInvoiceRequestItem | undefined
}
type GenerateBatchOrderInvoiceErrorResponseItemDetails =
  GenerateBatchOrderInvoiceErrorResponseItemDetail[]
type GenerateBatchOrderInvoiceErrorResponseItem = {
  count: number
  errorType: string
  errors: GenerateBatchOrderInvoiceErrorResponseItemDetails
}
type OrderInvoiceUri = string
type GetOrderInvoicePdfFromHtmlInvoiceUrlRequest = { orderInvoiceUri: OrderInvoiceUri }
type FooterContentHtml = string
type HeaderContentHtml = string
type OrderInvoiceDesignSettings = {
  footerContentHtml?: FooterContentHtml | undefined
  headerContentHtml?: HeaderContentHtml | undefined
}
type InvoiceContentHtml = string
type GetOrderInvoiceDesignPreviewResponse = { invoiceHtmlContent: InvoiceContentHtml }
type InvoicePrefix = string
type ProductVATPercent = number
type ShippingVATPercent = number
type GetOrderInvoiceGeneralSettingsResponse = {
  cultureName: CultureName
  invoicePrefix: InvoicePrefix
  invoiceStartingSequenceNumber: InvoiceSequenceNumber
  productVATPercent: ProductVATPercent
  shippingVATPercent: ShippingVATPercent
  lastInvoiceSequenceNumber?: InvoiceSequenceNumber | undefined
}
type OrderInvoiceGeneralSettings = {
  cultureName: CultureName
  invoicePrefix: InvoicePrefix
  invoiceStartingSequenceNumber: InvoiceSequenceNumber
  productVATPercent: ProductVATPercent
  shippingVATPercent: ShippingVATPercent
}
type GenerateOrderInvoiceRequest = { invoiceSequenceNumber?: InvoiceSequenceNumber | undefined }
type PreviewOrderInvoiceRequest = { invoiceSequenceNumber?: InvoiceSequenceNumber | undefined }
type PreviewOrderInvoiceResponse = { invoiceHtmlContent: InvoiceContentHtml }
type Order = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  beezUPOrderUrl?: BeezUPCommonHttpUrl | undefined
  etag: Etag
  links: OrderLinks
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  order_Buyer_Name?: OrderBuyerName | undefined
  order_CurrencyCode?: BeezUPCommonCurrencyCode | undefined
  order_Invoice_Number?: string | undefined
  order_Invoice_Uri?: string | undefined
  order_LastModificationUtcDate: string
  order_MarketplaceLastModificationUtcDate: string
  order_MarketplaceOrderId: MarketplaceOrderId
  order_MerchantECommerceSoftwareName?: OrderMerchantECommerceSoftwareName | undefined
  order_MerchantECommerceSoftwareVersion?: OrderMerchantECommerceSoftwareVersion | undefined
  order_MerchantOrderId?: OrderMerchantOrderId | undefined
  order_PurchaseUtcDate: string
  order_Status_BeezUPOrderStatus: BeezUPOrderStatus
  order_Status_MarketplaceOrderStatus?: MarketplaceOrderStatus | undefined
  order_TotalPrice?: number | undefined
  processing: Processing
  orderItems: OrderItem[]
  order_Buyer_AddressCity?: string | undefined
  order_Buyer_AddressCountryIsoCodeAlpha2?: string | undefined
  order_Buyer_AddressCountryName?: string | undefined
  order_Buyer_AddressLine1?: string | undefined
  order_Buyer_AddressLine2?: string | undefined
  order_Buyer_AddressLine3?: string | undefined
  order_Buyer_AddressPostalCode?: string | undefined
  order_Buyer_AddressStateOrRegion?: string | undefined
  order_Buyer_Civility?: string | undefined
  order_Buyer_CompanyName?: string | undefined
  order_Buyer_Email?: string | undefined
  order_Buyer_FirstName?: string | undefined
  order_Buyer_Identifier?: string | undefined
  order_Buyer_LastName?: string | undefined
  order_Buyer_MobilePhone?: string | undefined
  order_Buyer_Phone?: string | undefined
  order_Comment?: string | undefined
  order_FulfilledBy?: string | undefined
  order_IsBusiness?: boolean | undefined
  order_IsPrime?: boolean | undefined
  order_MarketPlaceChannel?: string | undefined
  order_OrderItemsSourceUri?: string | undefined
  order_OrderSourceUri?: string | undefined
  order_PayingUtcDate?: string | undefined
  order_PaymentMethod?: string | undefined
  order_Shipping_AddressCity?: string | undefined
  order_Shipping_AddressCountryIsoCodeAlpha2?: string | undefined
  order_Shipping_AddressCountryName?: string | undefined
  order_Shipping_AddressLine1?: string | undefined
  order_Shipping_AddressLine2?: string | undefined
  order_Shipping_AddressLine3?: string | undefined
  order_Shipping_AddressName?: string | undefined
  order_Shipping_AddressPostalCode?: string | undefined
  order_Shipping_AddressStateOrRegion?: string | undefined
  order_Shipping_Civility?: string | undefined
  order_Shipping_CompanyName?: string | undefined
  order_Shipping_EarliestShipUtcDate?: string | undefined
  order_Shipping_Email?: string | undefined
  order_Shipping_FirstName?: string | undefined
  order_Shipping_LastName?: string | undefined
  order_Shipping_LatestShipUtcDate?: string | undefined
  order_Shipping_Method?: string | undefined
  order_Shipping_MobilePhone?: string | undefined
  order_Shipping_Phone?: string | undefined
  order_Shipping_Price?: number | undefined
  order_Shipping_ShippingTax?: number | undefined
  order_TotalCommission?: number | undefined
  order_TotalTax?: number | undefined
  transitionLinks: OrderTransitionLinks
}
type OrderListFull = {
  links: OrderListFullLinks
  orders: Order[]
  paginationResult?: BeezUPCommonPaginationResult | undefined
}
type OrderHeader = {
  accountId: AccountId
  beezUPOrderId: BeezUPOrderId
  beezUPOrderUrl?: BeezUPCommonHttpUrl | undefined
  etag: Etag
  links: OrderHeaderLinks
  marketplaceBusinessCode: BeezUPCommonMarketplaceBusinessCode
  marketplaceTechnicalCode: BeezUPCommonMarketplaceTechnicalCode
  order_Buyer_Name?: OrderBuyerName | undefined
  order_CurrencyCode?: BeezUPCommonCurrencyCode | undefined
  order_Invoice_Number?: string | undefined
  order_Invoice_Uri?: string | undefined
  order_LastModificationUtcDate: string
  order_MarketplaceLastModificationUtcDate: string
  order_MarketplaceOrderId: MarketplaceOrderId
  order_MerchantECommerceSoftwareName?: OrderMerchantECommerceSoftwareName | undefined
  order_MerchantECommerceSoftwareVersion?: OrderMerchantECommerceSoftwareVersion | undefined
  order_MerchantOrderId?: OrderMerchantOrderId | undefined
  order_PurchaseUtcDate: string
  order_Status_BeezUPOrderStatus: BeezUPOrderStatus
  order_Status_MarketplaceOrderStatus?: MarketplaceOrderStatus | undefined
  order_TotalPrice?: number | undefined
  processing: Processing
}
type OrderListLight = {
  links: OrderListLightLinks
  orders: OrderHeader[]
  paginationResult?: BeezUPCommonPaginationResult | undefined
}
type ConsumptionAvailabilityStatus = 'Available' | 'Degraded' | 'Unavailable'
type HttpUrl = string
type SubscriptionId = string
type SubscriptionMerchantApplicationName = string
type SubscriptionMerchantApplicationVersion = string
type Email = string
type SubscriptionName = string
type SubscriptionStatus = 'active' | 'inactive'
type SubscriptionLinks = {
  activate?: Link3 | undefined
  deactivate?: Link3 | undefined
  delete?: Link3 | undefined
  reporting?: Link3 | undefined
  retry?: Link3 | undefined
}
type SubscriptionIndex = {
  consumerHealthStatus?: ConsumptionAvailabilityStatus | undefined
  consumerLastRequestSentUri?: HttpUrl | undefined
  consumerUnvailableSinceUtcDate?: string | undefined
  id: SubscriptionId
  lastErrorMessage?: ErrorResponseMessage | undefined
  lastOrderPushedModificationUtcDate?: string | undefined
  lastRetryUtcDate?: string | undefined
  lastSuccessfulOrderPushedUtcDate?: string | undefined
  maxRetryCount?: number | undefined
  merchantApplicationName: SubscriptionMerchantApplicationName
  merchantApplicationVersion: SubscriptionMerchantApplicationVersion
  merchantEmailAlert?: Email | undefined
  name: SubscriptionName
  nextScheduledRetryUtcDate?: string | undefined
  recoverBeginPeriodOrderLastModificationUtcDate?: string | undefined
  recoverEndPeriodOrderLastModificationUtcDate?: string | undefined
  retryCount?: number | undefined
  status: SubscriptionStatus
  targetUrl: HttpUrl
  links?: SubscriptionLinks | undefined
}
type CreateSubscriptionRequest = {
  merchantApplicationName: SubscriptionMerchantApplicationName
  merchantApplicationVersion: SubscriptionMerchantApplicationVersion
  merchantEmailAlert?: Email | undefined
  name: SubscriptionName
  targetUrl: HttpUrl
}
type ActivateSubscriptionRequest = {
  recoverBeginPeriodOrderLastModificationUtcDate?: string | undefined
  recoverEndPeriodOrderLastModificationUtcDate?: string | undefined
}
type MessageId = string
type SubscriptionPushReporting = {
  duration: string
  errorMessage?: ErrorResponseMessage | undefined
  eventId: MessageId
  httpStatus?: number | undefined
  lastOrderModificationUtcDate: string
  maxRetryCount?: number | undefined
  nextScheduledRetryUtcDate?: string | undefined
  orderCount: number
  requestUri?: HttpUrl | undefined
  responseUri?: HttpUrl | undefined
  retryCount?: number | undefined
  subscriptionId: SubscriptionId
  succeed: boolean
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/orders/v3/batches/changeOrders': {
      $post:
        | {
            input: { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderListRequest
            }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderListRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderListRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/batches/changeOrders/:changeOrderType': {
      $post:
        | {
            input: { param: { changeOrderType: string } } & {
              query: { userName: string; testMode?: boolean | undefined }
            } & { json: ChangeOrderListRequestV2 }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { changeOrderType: string } } & {
              query: { userName: string; testMode?: boolean | undefined }
            } & { json: ChangeOrderListRequestV2 }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { changeOrderType: string } } & {
              query: { userName: string; testMode?: boolean | undefined }
            } & { json: ChangeOrderListRequestV2 }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/batches/clearMerchantOrderInfos': {
      $post:
        | {
            input: { query: { testMode?: boolean | undefined } } & {
              json: ClearMerchantOrderInfoListRequest
            }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { testMode?: boolean | undefined } } & {
              json: ClearMerchantOrderInfoListRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { testMode?: boolean | undefined } } & {
              json: ClearMerchantOrderInfoListRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/batches/setMerchantOrderInfos': {
      $post:
        | {
            input: { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoListRequest
            }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoListRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoListRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/harvest': {
      $post:
        | {
            input: { query: { storeId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/list/full': {
      $post:
        | {
            input: { header: { 'Accept-Encoding': string } } & { json: OrderListRequest }
            output: OrderListFullWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Encoding': string } } & { json: OrderListRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Accept-Encoding': string } } & { json: OrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/list/light': {
      $post:
        | {
            input: { json: OrderListRequest }
            output: OrderListLightWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrderListRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/lov/orderManagementReadyMarketplaceBusinessCode': {
      $get:
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'Accept-Language'?: string[] | undefined }
            }
            output: OMReadyMarketplaceBusinessCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'Accept-Language'?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'Accept-Language'?: string[] | undefined }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'Accept-Language'?: string[] | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/status': {
      $get:
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: AccountSynchronizationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { storeIds?: string[] | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/harvest': {
      $post:
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: { marketplaceOrderId?: string | undefined; beezUPOrderId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: { marketplaceOrderId?: string | undefined; beezUPOrderId?: string | undefined }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: { marketplaceOrderId?: string | undefined; beezUPOrderId?: string | undefined }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: { marketplaceOrderId?: string | undefined; beezUPOrderId?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId': {
      $get:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: OrderWithLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/clearMerchantOrderInfo': {
      $post:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/harvest': {
      $post:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/history': {
      $get:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: OrderHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/history/:orderChangeExecutionUUID': {
      $get:
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                orderChangeExecutionUUID: string
              }
            }
            output: ChangeOrderReporting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                orderChangeExecutionUUID: string
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                orderChangeExecutionUUID: string
              }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                orderChangeExecutionUUID: string
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/setMerchantOrderInfo': {
      $post:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { query: { testMode?: boolean | undefined } } & {
              json: SetMerchantOrderInfoRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/:changeOrderType': {
      $post:
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderRequest
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderRequest
            }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              json: ChangeOrderRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/public/channels/': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: PublicChannelIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/public/channels/:countryIsoCode': {
      $get:
        | {
            input: { param: { countryIsoCode: string } } & {
              header: { 'Accept-Encoding': string[]; 'If-None-Match'?: string | undefined }
            }
            output: PublicChannelInfoList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryIsoCode: string } } & {
              header: { 'Accept-Encoding': string[]; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { countryIsoCode: string } } & {
              header: { 'Accept-Encoding': string[]; 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { countryIsoCode: string } } & {
              header: { 'Accept-Encoding': string[]; 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/public/lov/': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: PublicLovIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/public/lov/:listName': {
      $get:
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: PublicListOfValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/public/security/login': {
      $post:
        | {
            input: { json: LoginRequest }
            output: ApiCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LoginRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: LoginRequest }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { json: LoginRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/public/security/lostpassword': {
      $post:
        | { input: { json: BeezUPCommonEmail }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: BeezUPCommonEmail }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: BeezUPCommonEmail }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { json: BeezUPCommonEmail }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BeezUPCommonEmail }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/v2/public/security/register': {
      $post:
        | { input: { json: RegisterRequest }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: RegisterRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: RegisterRequest }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: RegisterRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/user/analytics/': {
      $get:
        | { input: {}; output: AnalyticsIndex; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/analytics/reports/byday': {
      $post:
        | {
            input: { json: ReportByDayRequest }
            output: ReportByDayPerStoreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReportByDayRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportByDayRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ReportByDayRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/tracking/status': {
      $get:
        | { input: {}; output: TrackingStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/analytics/:storeId': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: AnalyticsStoreIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/optimisations/all/:actionName': {
      $post:
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseAllRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseAllRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseAllRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseAllRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/optimisations/bycategory/:catalogCategoryId/:actionName': {
      $post:
        | {
            input: {
              param: {
                storeId: string
                catalogCategoryId: string
                actionName: 'reenable' | 'disable'
              }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                storeId: string
                catalogCategoryId: string
                actionName: 'reenable' | 'disable'
              }
            } & { json: string[] }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                storeId: string
                catalogCategoryId: string
                actionName: 'reenable' | 'disable'
              }
            } & { json: string[] }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                storeId: string
                catalogCategoryId: string
                actionName: 'reenable' | 'disable'
              }
            } & { json: string[] }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/optimisations/bychannel/:channelId/:actionName': {
      $post:
        | {
            input: {
              param: { storeId: string; channelId: string; actionName: 'reenable' | 'disable' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { storeId: string; channelId: string; actionName: 'reenable' | 'disable' }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { storeId: string; channelId: string; actionName: 'reenable' | 'disable' }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { storeId: string; channelId: string; actionName: 'reenable' | 'disable' }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/optimisations/byproduct/:productId/:actionName': {
      $post:
        | {
            input: {
              param: { storeId: string; productId: string; actionName: 'reenable' | 'disable' }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { storeId: string; productId: string; actionName: 'reenable' | 'disable' }
            } & { json: string[] }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { storeId: string; productId: string; actionName: 'reenable' | 'disable' }
            } & { json: string[] }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { storeId: string; productId: string; actionName: 'reenable' | 'disable' }
            } & { json: string[] }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/optimisations/copy': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: CopyOptimisationRequest }
            output: CopyOptimisationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: CopyOptimisationRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: CopyOptimisationRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: CopyOptimisationRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/optimisations/:actionName': {
      $post:
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; actionName: 'reenable' | 'disable' } } & {
              json: OptimiseRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/reports/bycategory': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ReportByCategoryRequest }
            output: ReportByCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByCategoryRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByCategoryRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByCategoryRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/reports/bychannel': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ReportByChannelRequest }
            output: ReportByChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByChannelRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByChannelRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByChannelRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/reports/byday': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ReportByDayRequest }
            output: ReportByDayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByDayRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByDayRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByDayRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/reports/byproduct': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ReportByProductRequest }
            output: ReportByProductResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByProductRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByProductRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: ReportByProductRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/reports/filters': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: ReportFilterList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/reports/filters/:reportFilterId': {
      $delete:
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: ReportFilter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; reportFilterId: string } } & {
              json: SaveReportFilterRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: RuleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { storeId: string } } & { json: CreateRuleRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string } } & { json: CreateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: CreateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { storeId: string } } & { json: CreateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { storeId: string } } & { json: CreateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: CreateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/executions': {
      $get:
        | {
            input: { param: { storeId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: RuleExecutionReportings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/run': {
      $post:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/:ruleId': {
      $delete:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { storeId: string; ruleId: string } } & { json: UpdateRuleRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } } & { json: UpdateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; ruleId: string } } & { json: UpdateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string; ruleId: string } } & { json: UpdateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } } & { json: UpdateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } } & { json: UpdateRuleRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/:ruleId/disable': {
      $post:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/:ruleId/enable': {
      $post:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/:ruleId/movedown': {
      $post:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/:ruleId/moveup': {
      $post:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/rules/:ruleId/run': {
      $post:
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; ruleId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/tracking/clicks': {
      $get:
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: TrackedClicks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/tracking/externalorders': {
      $get:
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: TrackedExternalOrders
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/tracking/orders': {
      $get:
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: TrackedOrders
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { query: { count?: number | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/analytics/:storeId/tracking/status': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: StoreTrackingStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/': {
      $get:
        | { input: {}; output: CatalogIndex; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/catalogs/beezupColumns': {
      $get:
        | { input: {}; output: BeezUPColumnConfiguration[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/catalogs/importations': {
      $get:
        | { input: {}; output: ImportationsPerStoreResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 404 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/catalogs/:storeId': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: CatalogStoreIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport': {
      $delete:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { storeId: string } }
            output: AutoImportConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport/activate': {
      $post:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport/pause': {
      $post:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport/resume': {
      $post:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport/scheduling/interval': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ConfigureAutoImportIntervalRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string } } & { json: ConfigureAutoImportIntervalRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ConfigureAutoImportIntervalRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: ConfigureAutoImportIntervalRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport/scheduling/schedules': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ScheduleAutoImportRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string } } & { json: ScheduleAutoImportRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ScheduleAutoImportRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: ScheduleAutoImportRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/autoImport/start': {
      $post:
        | {
            input: { param: { storeId: string } }
            output: LinksImportationGetImportationMonitoringLink
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/catalogColumns': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: CatalogColumnList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/catalogColumns/:columnId/rename': {
      $post:
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: ImportAlreadyInProgressResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/categories': {
      $get:
        | {
            input: { param: { storeId: string } } & { header: { 'Accept-Encoding': string[] } }
            output: CategoryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { header: { 'Accept-Encoding': string[] } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { header: { 'Accept-Encoding': string[] } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/customColumns': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: CustomColumnList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/customColumns/computeExpression': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: ComputeExpressionRequest }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: ComputeExpressionRequest }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: ComputeExpressionRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/customColumns/:columnId': {
      $delete:
        | {
            input: { param: { storeId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: CreateCustomColumnRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: CreateCustomColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: CreateCustomColumnRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: CreateCustomColumnRequest
            }
            output: ImportAlreadyInProgressResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: CreateCustomColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/customColumns/:columnId/expression': {
      $get:
        | {
            input: { param: { storeId: string; columnId: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { storeId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeCustomColumnExpressionRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeCustomColumnExpressionRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeCustomColumnExpressionRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeCustomColumnExpressionRequest
            }
            output: ImportAlreadyInProgressResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeCustomColumnExpressionRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/customColumns/:columnId/rename': {
      $post:
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: ImportAlreadyInProgressResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; columnId: string } } & {
              json: ChangeUserColumnNameRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: ImportationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/start': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: StartManualImportRequest }
            output: LinksImportationGetImportationMonitoringLink
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { storeId: string } } & { json: StartManualImportRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: StartManualImportRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: StartManualImportRequest }
            output: ImportAlreadyInProgressResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string } } & { json: StartManualImportRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: ImportationMonitoring
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/cancel': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: DetectedCatalogColumnList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ConfigureCatalogColumnCatalogRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ConfigureCatalogColumnCatalogRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ConfigureCatalogColumnCatalogRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ConfigureCatalogColumnCatalogRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ConfigureCatalogColumnCatalogRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/ignore': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/map': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/reattend': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/unmap': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/commit': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/commitColumns': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/configureRemainingCatalogColumns': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: ImportationCustomColumnList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId': {
      $delete:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ChangeCustomColumnRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ChangeCustomColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ChangeCustomColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: ChangeCustomColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/expression': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/map': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } } & {
              json: MapBeezUPColumnRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/unmap': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; columnId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/productSamples/:productSampleIndex': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string; productSampleIndex: number } }
            output: ProductSample
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string; productSampleIndex: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string; productSampleIndex: number } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string; productSampleIndex: number } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/productSamples/:productSampleIndex/customColumns/:columnId': {
      $get:
        | {
            input: {
              param: {
                storeId: string
                executionId: string
                productSampleIndex: number
                columnId: string
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                storeId: string
                executionId: string
                productSampleIndex: number
                columnId: string
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                storeId: string
                executionId: string
                productSampleIndex: number
                columnId: string
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                storeId: string
                executionId: string
                productSampleIndex: number
                columnId: string
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/products/list': {
      $post:
        | {
            input: { param: { storeId: string; executionId: string } } & {
              json: GetImportationProductsReportRequest
            }
            output: GetImportationProductsReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string } } & {
              json: GetImportationProductsReportRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } } & {
              json: GetImportationProductsReportRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/report': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: GetImportationReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/importations/:executionId/technicalProgression': {
      $get:
        | {
            input: { param: { storeId: string; executionId: string } }
            output: ImportationTechnicalProgression
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string; executionId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/inputConfiguration': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: LastManualImportInputConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/products': {
      $get:
        | {
            input: { param: { storeId: string } } & { query: { sku: string } }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { query: { sku: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { query: { sku: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/products/list': {
      $post:
        | {
            input: { param: { storeId: string } } & { json: GetProductsRequest }
            output: ProductList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: GetProductsRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: GetProductsRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/products/random': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: RandomProductList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/catalogs/:storeId/products/:productId': {
      $get:
        | {
            input: { param: { storeId: string; productId: string } }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/': {
      $get:
        | {
            input: { query: { storeId?: string | undefined } }
            output: ChannelCatalogList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: AddChannelCatalogRequest }
            output: LinksGetChannelCatalogLink
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AddChannelCatalogRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AddChannelCatalogRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/filterOperators': {
      $get:
        | { input: {}; output: FilterOperator[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/channelCatalogs/products': {
      $post:
        | {
            input: { json: ChannelCatalogProductByChannelCatalogRequest }
            output: ChannelCatalogProductByChannelCatalogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChannelCatalogProductByChannelCatalogRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ChannelCatalogProductByChannelCatalogRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId': {
      $delete:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: ChannelCatalog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/categories': {
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: ChannelCatalogCategoryConfigurationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/categories/configure': {
      $post:
        | {
            input: { param: { channelCatalogId: string } } & { json: ConfigureCategoryRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: ConfigureCategoryRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: ConfigureCategoryRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: ConfigureCategoryRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/categories/disableMapping': {
      $post:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/categories/reenableMapping': {
      $post:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/columnMappings': {
      $put:
        | {
            input: { param: { channelCatalogId: string } } & {
              json: ChannelCatalogColumnMappingList
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: ChannelCatalogColumnMappingList
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: ChannelCatalogColumnMappingList
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/disable': {
      $post:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/enable': {
      $post:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: UpgradeOfferRequired
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/exclusionFilters': {
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: ExclusionFiltersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { channelCatalogId: string } } & { json: ExclusionFilters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: ExclusionFilters }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: ExclusionFilters }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: ExclusionFilters }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/exportations/cache': {
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: ChannelCatalogExportCacheInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/exportations/cache/clear': {
      $post:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/exportations/history': {
      $get:
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: ChannelCatalogExportationHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { pageNumber: number; pageSize: number }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products': {
      $post:
        | {
            input: { param: { channelCatalogId: string } } & {
              json: GetChannelCatalogProductInfoListRequest
            }
            output: ChannelCatalogProductInfoList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: GetChannelCatalogProductInfoListRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: GetChannelCatalogProductInfoListRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/counters': {
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: ChannelCatalogProductsCounters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/export': {
      $post:
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { format: 'xlsx' | 'csv' }
            } & { json: GetChannelCatalogProductInfoListRequest }
            output: BeezUPCommonLink3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { format: 'xlsx' | 'csv' }
            } & { json: GetChannelCatalogProductInfoListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { format: 'xlsx' | 'csv' }
            } & { json: GetChannelCatalogProductInfoListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId': {
      $get:
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: ChannelCatalogProductInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/disable': {
      $post:
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides': {
      $put:
        | {
            input: { param: { channelCatalogId: string; productId: string } } & {
              json: ProductOverrides
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } } & {
              json: ProductOverrides
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } } & {
              json: ProductOverrides
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } } & {
              json: ProductOverrides
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/copy': {
      $get:
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/:channelColumnId': {
      $delete:
        | {
            input: {
              param: { channelCatalogId: string; productId: string; channelColumnId: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { channelCatalogId: string; productId: string; channelColumnId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { channelCatalogId: string; productId: string; channelColumnId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/reenable': {
      $post:
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string; productId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/settings/cost': {
      $put:
        | {
            input: { param: { channelCatalogId: string } } & { json: CostSettings }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: CostSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: CostSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channelCatalogs/:channelCatalogId/settings/general': {
      $put:
        | {
            input: { param: { channelCatalogId: string } } & { json: GeneralSettings }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: GeneralSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & { json: GeneralSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/channels/': {
      $get: {
        input: { query: { storeId: string } }
        output: ChannelHeader[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/user/channels/:channelId': {
      $get: {
        input: { param: { channelId: string } }
        output: ChannelInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/user/channels/:channelId/categories': {
      $get: {
        input: { param: { channelId: string } } & { header: { 'Accept-Encoding': string[] } }
        output: ChannelRootCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/user/channels/:channelId/columns': {
      $post: {
        input: { param: { channelId: string } } & { header: { 'Accept-Encoding': string[] } } & {
          json: BeezUPCommonChannelColumnId[]
        }
        output: ChannelColumn[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/user/customer/': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: CustomerIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: AccountInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/activate': {
      $post:
        | { input: { json: string }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: string }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: string }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: string }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/changeEmail': {
      $post:
        | { input: { json: ChangeEmailRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ChangeEmailRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeEmailRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/changePassword': {
      $post:
        | { input: { json: ChangePasswordRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ChangePasswordRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangePasswordRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/companyInfo': {
      $put:
        | { input: { json: CompanyInfo }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: CompanyInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CompanyInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CompanyInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/creditCardInfo': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: CreditCardInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: { json: CreditCardInfo }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: CreditCardInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreditCardInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { json: CreditCardInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/personalInfo': {
      $put:
        | { input: { json: PersonalInfo }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: PersonalInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PersonalInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/profilePictureInfo': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: ProfilePictureInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: { json: ProfilePictureInfo }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ProfilePictureInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProfilePictureInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: ProfilePictureInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: ProfilePictureInfo }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/account/resendEmailActivation': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 400 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 409 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 429 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 502 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/customer/billingPeriods': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BillingPeriodList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/contracts': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: Contracts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateContract }
            output: CreateContractResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateContract }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateContract }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateContract }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/contracts/current/disableAutoRenewal': {
      $post:
        | { input: { json: TerminateContract }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: TerminateContract }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TerminateContract }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TerminateContract }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/contracts/current/reenableAutoRenewal': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 404 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/customer/contracts/next': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/customer/friends/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: UserFriendInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/invoices': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: InvoiceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/offers': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: StandardOffers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: OfferRequest }; output: Offer; outputFormat: 'json'; status: 200 }
        | {
            input: { json: OfferRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OfferRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OfferRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/security/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/customer/stores': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: StoreList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateStoreRequest }
            output: LinksGetStoreLink
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateStoreRequest }
            output: ErrorResponseMessagePaymentRequired
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateStoreRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateStoreRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/stores/:storeId': {
      $delete:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/stores/:storeId/alerts': {
      $get:
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: StoreAlerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { storeId: string } } & { json: SaveStoreAlertsRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string } } & { json: SaveStoreAlertsRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: SaveStoreAlertsRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: SaveStoreAlertsRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/stores/:storeId/rights': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: FunctionalityRightInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/stores/:storeId/shares': {
      $get:
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: StoreShares
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { storeId: string } } & { json: FriendEmail }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string } } & { json: FriendEmail }
            output: ErrorResponseMessagePaymentRequired
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { storeId: string } } & { json: FriendEmail }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string } } & { json: FriendEmail }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/stores/:storeId/shares/:userId': {
      $delete:
        | {
            input: { param: { storeId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storeId: string; userId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { storeId: string; userId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/customer/zendeskToken': {
      $get:
        | { input: {}; output: ZendeskToken; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/user/legacyTracking/channelCatalogs/': {
      $get:
        | {
            input: { query: { storeId?: string | undefined } }
            output: LegacyTrackingChannelCatalogList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/legacyTracking/channelCatalogs/:channelCatalogId': {
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: LegacyTrackingChannelCatalog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/legacyTracking/channelCatalogs/:channelCatalogId/migrate': {
      $post:
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/lov/': {
      $get:
        | { input: {}; output: UserLovIndex; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/lov/:listName': {
      $get:
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: UserListOfValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { listName: string } } & {
              header: {
                'Accept-Language'?: string[] | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/channelcatalogs/': {
      $get:
        | {
            input: { query: { storeId?: string | undefined } }
            output: MarketplaceChannelCatalogList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/user/marketplaces/channelcatalogs/publications/:marketplaceTechnicalCode/:accountId/history': {
      $get:
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: {
                channelCatalogId?: string | undefined
                count?: number | undefined
                publicationTypes: (
                  | 'PublishProducts'
                  | 'PublishOffers'
                  | 'Unpublish'
                  | 'PublishRelationshipsEnum'
                  | 'PublishProductImagesEnum'
                  | 'PublishInventoryEnum'
                  | 'PublishPricingEnum'
                )[]
              }
            }
            output: AccountPublications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: {
                channelCatalogId?: string | undefined
                count?: number | undefined
                publicationTypes: (
                  | 'PublishProducts'
                  | 'PublishOffers'
                  | 'Unpublish'
                  | 'PublishRelationshipsEnum'
                  | 'PublishProductImagesEnum'
                  | 'PublishInventoryEnum'
                  | 'PublishPricingEnum'
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: {
                channelCatalogId?: string | undefined
                count?: number | undefined
                publicationTypes: (
                  | 'PublishProducts'
                  | 'PublishOffers'
                  | 'Unpublish'
                  | 'PublishRelationshipsEnum'
                  | 'PublishProductImagesEnum'
                  | 'PublishInventoryEnum'
                  | 'PublishPricingEnum'
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: {
                channelCatalogId?: string | undefined
                count?: number | undefined
                publicationTypes: (
                  | 'PublishProducts'
                  | 'PublishOffers'
                  | 'Unpublish'
                  | 'PublishRelationshipsEnum'
                  | 'PublishProductImagesEnum'
                  | 'PublishInventoryEnum'
                  | 'PublishPricingEnum'
                )[]
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              query: {
                channelCatalogId?: string | undefined
                count?: number | undefined
                publicationTypes: (
                  | 'PublishProducts'
                  | 'PublishOffers'
                  | 'Unpublish'
                  | 'PublishRelationshipsEnum'
                  | 'PublishProductImagesEnum'
                  | 'PublishInventoryEnum'
                  | 'PublishPricingEnum'
                )[]
              }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/channelcatalogs/publications/:marketplaceTechnicalCode/:accountId/publish': {
      $post:
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              json: PublishCatalogToMarketplaceRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              json: PublishCatalogToMarketplaceRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              json: PublishCatalogToMarketplaceRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              json: PublishCatalogToMarketplaceRequest
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { marketplaceTechnicalCode: string; accountId: number } } & {
              json: PublishCatalogToMarketplaceRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/properties': {
      $get:
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { redirectionPageUrl: string }
            } & { header: { 'Accept-Language'?: string[] | undefined } }
            output: ChannelCatalogMarketplaceProperties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { redirectionPageUrl: string }
            } & { header: { 'Accept-Language'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { redirectionPageUrl: string }
            } & { header: { 'Accept-Language'?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              query: { redirectionPageUrl: string }
            } & { header: { 'Accept-Language'?: string[] | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/settings': {
      $get:
        | {
            input: { param: { channelCatalogId: string } }
            output: ChannelCatalogMarketplaceSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { channelCatalogId: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { channelCatalogId: string } } & {
              json: SetChannelCatalogMarketplaceSettingsRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: SetChannelCatalogMarketplaceSettingsRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: SetChannelCatalogMarketplaceSettingsRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: SetChannelCatalogMarketplaceSettingsRequest
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { channelCatalogId: string } } & {
              json: SetChannelCatalogMarketplaceSettingsRequest
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: OrderIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/automaticTransitions': {
      $get:
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: AutomaticTransitionInfoList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ConfigureAutomaticTransitionRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ConfigureAutomaticTransitionRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConfigureAutomaticTransitionRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/batches/changeOrders/:changeOrderType': {
      $post:
        | {
            input: { param: { changeOrderType: string } } & {
              query: { userName: string; testMode?: boolean | undefined }
            } & { json: ChangeOrderListRequest }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { changeOrderType: string } } & {
              query: { userName: string; testMode?: boolean | undefined }
            } & { json: ChangeOrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { changeOrderType: string } } & {
              query: { userName: string; testMode?: boolean | undefined }
            } & { json: ChangeOrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/batches/clearMerchantOrderInfos': {
      $post:
        | {
            input: { json: ClearMerchantOrderInfoListRequest }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ClearMerchantOrderInfoListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ClearMerchantOrderInfoListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/batches/setMerchantOrderInfos': {
      $post:
        | {
            input: { json: SetMerchantOrderInfoListRequest }
            output: BatchOrderOperationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: SetMerchantOrderInfoListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetMerchantOrderInfoListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/exportations': {
      $get:
        | {
            input: { query: { pageNumber: number; pageSize: number; storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: OrderExportations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageNumber: number; pageSize: number; storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { pageNumber: number; pageSize: number; storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageNumber: number; pageSize: number; storeId: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: ExportOrderListRequest }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: ExportOrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExportOrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ExportOrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/harvest': {
      $post:
        | {
            input: { query: { storeId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { storeId?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/generate': {
      $post:
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: GenerateBatchOrderInvoiceResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: GenerateBatchOrderInvoiceErrorResponseItem[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { userName: string } } & { json: GenerateBatchOrderInvoiceRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/getPdfInvoice': {
      $post:
        | {
            input: { json: GetOrderInvoicePdfFromHtmlInvoiceUrlRequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GetOrderInvoicePdfFromHtmlInvoiceUrlRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetOrderInvoicePdfFromHtmlInvoiceUrlRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GetOrderInvoicePdfFromHtmlInvoiceUrlRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/settings/design': {
      $get:
        | { input: {}; output: OrderInvoiceDesignSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseMessage; outputFormat: 'json'; status: 404 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { json: OrderInvoiceDesignSettings }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: OrderInvoiceDesignSettings }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrderInvoiceDesignSettings }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrderInvoiceDesignSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/settings/design/preview': {
      $post:
        | {
            input: { header: { 'Accept-Encoding': string } } & { json: OrderInvoiceDesignSettings }
            output: GetOrderInvoiceDesignPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Encoding': string } } & { json: OrderInvoiceDesignSettings }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Accept-Encoding': string } } & { json: OrderInvoiceDesignSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/settings/general': {
      $get:
        | {
            input: {}
            output: GetOrderInvoiceGeneralSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponseMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseMessage; outputFormat: 'json'; status: 404 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { json: OrderInvoiceGeneralSettings }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: OrderInvoiceGeneralSettings }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrderInvoiceGeneralSettings }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrderInvoiceGeneralSettings }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/:marketplaceTechnicalCode/:accountId/:beezUPOrderUUID/generate': {
      $post:
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { query: { userName: string } } & { json: GenerateOrderInvoiceRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { query: { userName: string } } & { json: GenerateOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { query: { userName: string } } & { json: GenerateOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { query: { userName: string } } & { json: GenerateOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { query: { userName: string } } & { json: GenerateOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { query: { userName: string } } & { json: GenerateOrderInvoiceRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/invoices/:marketplaceTechnicalCode/:accountId/:beezUPOrderUUID/preview': {
      $post:
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { header: { 'Accept-Encoding': string } } & { json: PreviewOrderInvoiceRequest }
            output: PreviewOrderInvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { header: { 'Accept-Encoding': string } } & { json: PreviewOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { header: { 'Accept-Encoding': string } } & { json: PreviewOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { header: { 'Accept-Encoding': string } } & { json: PreviewOrderInvoiceRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: string
                beezUPOrderUUID: string
              }
            } & { header: { 'Accept-Encoding': string } } & { json: PreviewOrderInvoiceRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/list/full': {
      $post:
        | {
            input: { header: { 'Accept-Encoding': string[] } } & { json: OrderListRequest }
            output: OrderListFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Accept-Encoding': string[] } } & { json: OrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Accept-Encoding': string[] } } & { json: OrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/list/light': {
      $post:
        | {
            input: { json: OrderListRequest }
            output: OrderListLight
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrderListRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/status': {
      $get:
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: AccountSynchronizationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { storeId?: string | undefined } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/subscriptions/': {
      $get:
        | { input: {}; output: SubscriptionIndex[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BeezUPCommonErrorResponseMessage; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/user/marketplaces/orders/subscriptions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id: string } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SubscriptionIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CreateSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CreateSubscriptionRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CreateSubscriptionRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateSubscriptionRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: CreateSubscriptionRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/subscriptions/:id/activate': {
      $post:
        | {
            input: { param: { id: string } } & { json: ActivateSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: ActivateSubscriptionRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ActivateSubscriptionRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ActivateSubscriptionRequest }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { json: ActivateSubscriptionRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/subscriptions/:id/deactivate': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id: string } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/subscriptions/:id/reporting': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: SubscriptionPushReporting[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/subscriptions/:id/retry': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id: string } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId': {
      $get:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/clearMerchantOrderInfo': {
      $post:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/harvest': {
      $post:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/history': {
      $get:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: OrderHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { header: { 'If-None-Match'?: string | undefined } }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/setMerchantOrderInfo': {
      $post:
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { json: SetMerchantOrderInfoRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { json: SetMerchantOrderInfoRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { json: SetMerchantOrderInfoRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { marketplaceTechnicalCode: string; accountId: number; beezUPOrderId: string }
            } & { json: SetMerchantOrderInfoRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/:changeOrderType': {
      $post:
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              header: { 'If-Match': string }
            } & { json: ChangeOrderRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              header: { 'If-Match': string }
            } & { json: ChangeOrderRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              header: { 'If-Match': string }
            } & { json: ChangeOrderRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              header: { 'If-Match': string }
            } & { json: ChangeOrderRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              header: { 'If-Match': string }
            } & { json: ChangeOrderRequest }
            output: {}
            outputFormat: string
            status: 412
          }
        | {
            input: {
              param: {
                marketplaceTechnicalCode: string
                accountId: number
                beezUPOrderId: string
                changeOrderType: string
              }
            } & { query: { userName: string; testMode?: boolean | undefined } } & {
              header: { 'If-Match': string }
            } & { json: ChangeOrderRequest }
            output: BeezUPCommonErrorResponseMessage
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
