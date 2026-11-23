type LinksElement = { href?: string | undefined }
type PaginationLinks = {
  first: LinksElement
  last: LinksElement
  next?: LinksElement | undefined
  prev?: LinksElement | undefined
  self: LinksElement
}
type CompanyLinks = {
  apiCredentials?: LinksElement | undefined
  self: LinksElement
  users?: LinksElement | undefined
  webhooks?: LinksElement | undefined
}
type DataCenter = { livePrefix?: string | undefined; name?: string | undefined }
type Company = {
  _links?: CompanyLinks | undefined
  dataCenters?: DataCenter[] | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  reference?: string | undefined
  status?: string | undefined
}
type ListCompanyResponse = {
  _links?: PaginationLinks | undefined
  data?: Company[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type InvalidField = { message: string; name: string; value: string }
type JSONObject = { [x: string]: unknown }
type RestServiceError = {
  detail: string
  errorCode: string
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  response?: JSONObject | undefined
  status: number
  title: string
  type: string
}
type AndroidAppError = { errorCode?: string | undefined; terminalModels?: string[] | undefined }
type AndroidApp = {
  description?: string | undefined
  errorCode?: string | undefined
  errors?: AndroidAppError[] | undefined
  id: string
  label?: string | undefined
  packageName?: string | undefined
  status: 'archived' | 'error' | 'invalid' | 'processing' | 'ready'
  versionCode?: number | undefined
  versionName?: string | undefined
}
type AndroidAppsResponse = { data?: AndroidApp[] | undefined }
type UploadAndroidAppResponse = { id?: string | undefined }
type ReprocessAndroidAppResponse = { Message?: string | undefined }
type AndroidCertificate = {
  description?: string | undefined
  extension?: string | undefined
  id: string
  name?: string | undefined
  notAfter?: string | undefined
  notBefore?: string | undefined
  status?: string | undefined
}
type AndroidCertificatesResponse = { data?: AndroidCertificate[] | undefined }
type UploadAndroidCertificateResponse = { id?: string | undefined }
type ApiCredentialLinks = {
  allowedOrigins?: LinksElement | undefined
  company?: LinksElement | undefined
  generateApiKey?: LinksElement | undefined
  generateClientKey?: LinksElement | undefined
  merchant?: LinksElement | undefined
  self: LinksElement
}
type Links = { self: LinksElement }
type AllowedOrigin = { _links?: Links | undefined; domain: string; id?: string | undefined }
type CompanyApiCredential = {
  _links?: ApiCredentialLinks | undefined
  active: boolean
  allowedIpAddresses: string[]
  allowedOrigins?: AllowedOrigin[] | undefined
  associatedMerchantAccounts?: string[] | undefined
  clientKey: string
  description?: string | undefined
  id: string
  roles: string[]
  subjectDN?: string | undefined
  username: string
}
type ListCompanyApiCredentialsResponse = {
  _links?: PaginationLinks | undefined
  data?: CompanyApiCredential[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type CreateCompanyApiCredentialRequest = {
  allowedOrigins?: string[] | undefined
  associatedMerchantAccounts?: string[] | undefined
  description?: string | undefined
  roles?: string[] | undefined
}
type CreateCompanyApiCredentialResponse = {
  _links?: ApiCredentialLinks | undefined
  active: boolean
  allowedIpAddresses: string[]
  allowedOrigins?: AllowedOrigin[] | undefined
  apiKey: string
  associatedMerchantAccounts: string[]
  clientKey: string
  description?: string | undefined
  id: string
  password: string
  roles: string[]
  subjectDN?: string | undefined
  username: string
}
type UpdateCompanyApiCredentialRequest = {
  active?: boolean | undefined
  allowedOrigins?: string[] | undefined
  associatedMerchantAccounts?: string[] | undefined
  description?: string | undefined
  roles?: string[] | undefined
  subjectDN?: string | undefined
}
type AllowedOriginsResponse = { data?: AllowedOrigin[] | undefined }
type GenerateApiKeyResponse = { apiKey: string }
type GenerateClientKeyResponse = { clientKey: string }
type Address = {
  city?: string | undefined
  companyName?: string | undefined
  country?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
  streetAddress?: string | undefined
  streetAddress2?: string | undefined
}
type BillingEntity = {
  address?: Address | undefined
  email?: string | undefined
  id?: string | undefined
  name?: string | undefined
  taxId?: string | undefined
}
type BillingEntitiesResponse = { data?: BillingEntity[] | undefined }
type MerchantLinks = {
  apiCredentials?: LinksElement | undefined
  self: LinksElement
  users?: LinksElement | undefined
  webhooks?: LinksElement | undefined
}
type Merchant = {
  _links?: MerchantLinks | undefined
  captureDelay?: string | undefined
  companyId?: string | undefined
  dataCenters?: DataCenter[] | undefined
  defaultShopperInteraction?: string | undefined
  description?: string | undefined
  id?: string | undefined
  merchantCity?: string | undefined
  name?: string | undefined
  pricingPlan?: string | undefined
  primarySettlementCurrency?: string | undefined
  reference?: string | undefined
  shopWebAddress?: string | undefined
  status?: string | undefined
}
type ListMerchantResponse = {
  _links?: PaginationLinks | undefined
  data?: Merchant[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type Contact = {
  email?: string | undefined
  firstName?: string | undefined
  infix?: string | undefined
  lastName?: string | undefined
  phoneNumber?: string | undefined
}
type ShippingLocation = {
  address?: Address | undefined
  contact?: Contact | undefined
  id?: string | undefined
  name?: string | undefined
}
type ShippingLocationsResponse = { data?: ShippingLocation[] | undefined }
type ExternalTerminalAction = {
  actionType?: string | undefined
  config?: string | undefined
  confirmedAt?: string | undefined
  id?: string | undefined
  result?: string | undefined
  scheduledAt?: string | undefined
  status?: string | undefined
  terminalId?: string | undefined
}
type ListExternalTerminalActionsResponse = { data?: ExternalTerminalAction[] | undefined }
type Logo = { data?: string | undefined }
type IdName = { id?: string | undefined; name?: string | undefined }
type TerminalModelsResponse = { data?: IdName[] | undefined }
type OrderItem = {
  id?: string | undefined
  installments?: bigint | undefined
  name?: string | undefined
  quantity?: number | undefined
}
type TerminalOrder = {
  billingEntity?: BillingEntity | undefined
  customerOrderReference?: string | undefined
  id?: string | undefined
  items?: OrderItem[] | undefined
  orderDate?: string | undefined
  shippingLocation?: ShippingLocation | undefined
  status?: string | undefined
  trackingUrl?: string | undefined
}
type TerminalOrdersResponse = { data?: TerminalOrder[] | undefined }
type TerminalOrderRequest = {
  billingEntityId?: string | undefined
  customerOrderReference?: string | undefined
  items?: OrderItem[] | undefined
  orderType?: string | undefined
  shippingLocationId?: string | undefined
  taxId?: string | undefined
}
type TerminalProductPrice = { currency?: string | undefined; value?: number | undefined }
type TerminalProduct = {
  description?: string | undefined
  id?: string | undefined
  itemsIncluded?: string[] | undefined
  name?: string | undefined
  price?: TerminalProductPrice | undefined
}
type TerminalProductsResponse = { data?: TerminalProduct[] | undefined }
type CardholderReceipt = { headerForAuthorizedReceipt?: string | undefined }
type Url = {
  encrypted?: boolean | undefined
  password?: string | undefined
  url?: string | undefined
  username?: string | undefined
}
type EventUrl = { eventLocalUrls?: Url[] | undefined; eventPublicUrls?: Url[] | undefined }
type Connectivity = {
  simcardStatus?: 'ACTIVATED' | 'INVENTORY' | undefined
  terminalIPAddressURL?: EventUrl | undefined
}
type Dcc = { enableDcc?: boolean | undefined }
type Gratuity = {
  allowCustomAmount?: boolean | undefined
  currency?: string | undefined
  predefinedTipEntries?: string[] | undefined
  usePredefinedTipEntries?: boolean | undefined
}
type Hardware = {
  displayMaximumBackLight?: number | undefined
  resetTotalsHour?: number | undefined
  restartHour?: number | undefined
}
type HomeScreenSettings = {
  hideNavigationBar?: boolean | undefined
  showPaymentsMenu?: boolean | undefined
  showSettingsMenu?: boolean | undefined
}
type KioskModeSettings = {
  allowedAppsInKioskMode?: string[] | undefined
  kioskAppOnStartup?: string | undefined
}
type Localization = {
  language?: string | undefined
  secondaryLanguage?: string | undefined
  timezone?: string | undefined
}
type Moto = { enableMoto?: boolean | undefined; maxAmount?: number | undefined }
type NotificationUrl = { localUrls?: Url[] | undefined; publicUrls?: Url[] | undefined }
type Key = {
  identifier?: string | undefined
  passphrase?: string | undefined
  version?: number | undefined
}
type Notification = {
  category?: 'SaleWakeUp' | 'KeyPressed' | '' | undefined
  details?: string | undefined
  enabled?: boolean | undefined
  showButton?: boolean | undefined
  title?: string | undefined
}
type Nexo = {
  displayUrls?: NotificationUrl | undefined
  encryptionKey?: Key | undefined
  eventUrls?: EventUrl | undefined
  nexoEventUrls?: string[] | undefined
  notification?: Notification | undefined
}
type OfflineProcessing = { chipFloorLimit?: number | undefined }
type Opi = {
  enablePayAtTable?: boolean | undefined
  payAtTableStoreNumber?: string | undefined
  payAtTableURL?: string | undefined
}
type Passcodes = {
  adminMenuPin?: string | undefined
  refundPin?: string | undefined
  screenLockPin?: string | undefined
  txMenuPin?: string | undefined
}
type PayAtTable = {
  authenticationMethod?: 'MAGSWIPE' | 'MKE' | undefined
  enablePayAtTable?: boolean | undefined
  paymentInstrument?: 'Cash' | 'Card' | undefined
}
type Payment = {
  contactlessCurrency?: string | undefined
  hideMinorUnitsInCurrencies?: string[] | undefined
}
type ReceiptOptions = {
  headerLine1?: string | undefined
  headerLine2?: string | undefined
  logo?: string | undefined
  promptBeforePrinting?: boolean | undefined
  qrCodeData?: string | undefined
}
type ReceiptPrinting = {
  merchantApproved?: boolean | undefined
  merchantCancelled?: boolean | undefined
  merchantCaptureApproved?: boolean | undefined
  merchantCaptureRefused?: boolean | undefined
  merchantRefundApproved?: boolean | undefined
  merchantRefundRefused?: boolean | undefined
  merchantRefused?: boolean | undefined
  merchantVoid?: boolean | undefined
  shopperApproved?: boolean | undefined
  shopperCancelled?: boolean | undefined
  shopperCaptureApproved?: boolean | undefined
  shopperCaptureRefused?: boolean | undefined
  shopperRefundApproved?: boolean | undefined
  shopperRefundRefused?: boolean | undefined
  shopperRefused?: boolean | undefined
  shopperVoid?: boolean | undefined
}
type Referenced = { enableStandaloneRefunds?: boolean | undefined }
type Unreferenced = { enableUnreferencedRefunds?: boolean | undefined }
type Refunds = { referenced?: Referenced | undefined; unreferenced?: Unreferenced | undefined }
type Signature = {
  askSignatureOnScreen?: boolean | undefined
  deviceName?: string | undefined
  deviceSlogan?: string | undefined
  skipSignature?: boolean | undefined
}
type Standalone = {
  currencyCode?: string | undefined
  enableGratuities?: boolean | undefined
  enableStandalone?: boolean | undefined
  merchantReference?: string | undefined
}
type MinorUnitsMonetaryValue = { amount?: number | undefined; currencyCode?: string | undefined }
type SupportedCardTypes = {
  credit?: boolean | undefined
  debit?: boolean | undefined
  deferredDebit?: boolean | undefined
  prepaid?: boolean | undefined
  unknown?: boolean | undefined
}
type StoreAndForward = {
  maxAmount?: MinorUnitsMonetaryValue[] | undefined
  maxPayments?: number | undefined
  supportedCardTypes?: SupportedCardTypes | undefined
}
type Currency = {
  amount?: number | undefined
  currencyCode: string
  maxAmount?: number | undefined
  percentage?: number | undefined
}
type Configuration = {
  brand: string
  commercial?: boolean | undefined
  country?: string[] | undefined
  currencies: Currency[]
  sources?: string[] | undefined
}
type Surcharge = {
  askConfirmation?: boolean | undefined
  configurations?: Configuration[] | undefined
  disclosureOnPresentCard?: boolean | undefined
  excludeGratuityFromSurcharge?: boolean | undefined
}
type TapToPay = { merchantDisplayName?: string | undefined }
type TerminalInstructions = { adyenAppRestart?: boolean | undefined }
type Timeouts = { fromActiveToSleep?: number | undefined }
type File2 = { data: string; name: string }
type Profile = {
  authType: string
  autoWifi?: boolean | undefined
  bssType: string
  channel?: number | undefined
  defaultProfile?: boolean | undefined
  domainSuffix?: string | undefined
  eap?: string | undefined
  eapCaCert?: File2 | undefined
  eapClientCert?: File2 | undefined
  eapClientKey?: File2 | undefined
  eapClientPwd?: string | undefined
  eapIdentity?: string | undefined
  eapIntermediateCert?: File2 | undefined
  eapPwd?: string | undefined
  hiddenSsid?: boolean | undefined
  name?: string | undefined
  psk?: string | undefined
  ssid: string
  wsec: string
}
type Settings = {
  band?: string | undefined
  roaming?: boolean | undefined
  timeout?: number | undefined
}
type WifiProfiles = { profiles?: Profile[] | undefined; settings?: Settings | undefined }
type TerminalSettings = {
  cardholderReceipt?: CardholderReceipt | undefined
  connectivity?: Connectivity | undefined
  dcc?: Dcc | undefined
  gratuities?: (Gratuity[] | null) | undefined
  hardware?: Hardware | undefined
  homeScreen?: HomeScreenSettings | undefined
  kioskMode?: KioskModeSettings | undefined
  localization?: Localization | undefined
  moto?: Moto | undefined
  nexo?: Nexo | undefined
  offlineProcessing?: OfflineProcessing | undefined
  opi?: Opi | undefined
  passcodes?: Passcodes | undefined
  payAtTable?: PayAtTable | undefined
  payment?: Payment | undefined
  receiptOptions?: ReceiptOptions | undefined
  receiptPrinting?: ReceiptPrinting | undefined
  refunds?: Refunds | undefined
  showCalculatedPercentageTippingAmount?: (boolean | null) | undefined
  signature?: Signature | undefined
  skipTipConfirmationOnTerminal?: (boolean | null) | undefined
  standalone?: Standalone | undefined
  storeAndForward?: StoreAndForward | undefined
  surcharge?: Surcharge | undefined
  tapToPay?: TapToPay | undefined
  terminalInstructions?: TerminalInstructions | undefined
  timeouts?: Timeouts | undefined
  wifiProfiles?: WifiProfiles | undefined
}
type Name = { firstName: string; lastName: string }
type CompanyUser = {
  _links?: Links | undefined
  accountGroups?: string[] | undefined
  active?: boolean | undefined
  apps?: string[] | undefined
  associatedMerchantAccounts?: string[] | undefined
  email: string
  id: string
  name?: Name | undefined
  roles: string[]
  timeZoneCode: string
  username: string
}
type ListCompanyUsersResponse = {
  _links?: PaginationLinks | undefined
  data?: CompanyUser[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type CreateCompanyUserRequest = {
  accountGroups?: string[] | undefined
  associatedMerchantAccounts?: string[] | undefined
  email: string
  loginMethod?: string | undefined
  name: Name
  roles?: string[] | undefined
  timeZoneCode?: string | undefined
  username: string
}
type CreateCompanyUserResponse = {
  _links?: Links | undefined
  accountGroups?: string[] | undefined
  active?: boolean | undefined
  apps?: string[] | undefined
  associatedMerchantAccounts?: string[] | undefined
  email: string
  id: string
  name?: Name | undefined
  roles: string[]
  timeZoneCode: string
  username: string
}
type Name2 = { firstName?: string | undefined; lastName?: string | undefined }
type UpdateCompanyUserRequest = {
  accountGroups?: string[] | undefined
  active?: boolean | undefined
  associatedMerchantAccounts?: string[] | undefined
  email?: string | undefined
  loginMethod?: string | undefined
  name?: Name2 | undefined
  roles?: string[] | undefined
  timeZoneCode?: string | undefined
}
type WebhookLinks = {
  company?: LinksElement | undefined
  generateHmac: LinksElement
  merchant?: LinksElement | undefined
  self: LinksElement
  testWebhook: LinksElement
}
type AdditionalSettingsResponse = {
  excludeEventCodes?: string[] | undefined
  includeEventCodes?: string[] | undefined
  properties?: { [x: string]: boolean } | undefined
}
type Webhook = {
  _links?: WebhookLinks | undefined
  acceptsExpiredCertificate?: boolean | undefined
  acceptsSelfSignedCertificate?: boolean | undefined
  acceptsUntrustedRootCertificate?: boolean | undefined
  accountReference?: string | undefined
  active: boolean
  additionalSettings?: AdditionalSettingsResponse | undefined
  certificateAlias?: string | undefined
  communicationFormat: 'http' | 'json' | 'soap'
  description?: string | undefined
  encryptionProtocol?: 'HTTP' | 'TLSv1.2' | 'TLSv1.3' | undefined
  filterMerchantAccountType?: 'allAccounts' | 'excludeAccounts' | 'includeAccounts' | undefined
  filterMerchantAccounts?: string[] | undefined
  hasError?: boolean | undefined
  hasPassword?: boolean | undefined
  hmacKeyCheckValue?: string | undefined
  id?: string | undefined
  networkType?: 'local' | 'public' | undefined
  populateSoapActionHeader?: boolean | undefined
  type: string
  url: string
  username?: string | undefined
}
type ListWebhooksResponse = {
  _links?: PaginationLinks | undefined
  accountReference?: string | undefined
  data?: Webhook[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type AdditionalSettings = {
  includeEventCodes?: string[] | undefined
  properties?: { [x: string]: boolean } | undefined
}
type CreateCompanyWebhookRequest = {
  acceptsExpiredCertificate?: boolean | undefined
  acceptsSelfSignedCertificate?: boolean | undefined
  acceptsUntrustedRootCertificate?: boolean | undefined
  active: boolean
  additionalSettings?: AdditionalSettings | undefined
  communicationFormat: 'http' | 'json' | 'soap'
  description?: string | undefined
  encryptionProtocol?: 'HTTP' | 'TLSv1.2' | 'TLSv1.3' | undefined
  filterMerchantAccountType: 'allAccounts' | 'excludeAccounts' | 'includeAccounts'
  filterMerchantAccounts: string[]
  networkType?: 'local' | 'public' | undefined
  password?: string | undefined
  populateSoapActionHeader?: boolean | undefined
  type: string
  url: string
  username?: string | undefined
}
type UpdateCompanyWebhookRequest = {
  acceptsExpiredCertificate?: boolean | undefined
  acceptsSelfSignedCertificate?: boolean | undefined
  acceptsUntrustedRootCertificate?: boolean | undefined
  active?: boolean | undefined
  additionalSettings?: AdditionalSettings | undefined
  communicationFormat?: 'http' | 'json' | 'soap' | undefined
  description?: string | undefined
  encryptionProtocol?: 'HTTP' | 'TLSv1.2' | 'TLSv1.3' | undefined
  filterMerchantAccountType?: 'allAccounts' | 'excludeAccounts' | 'includeAccounts' | undefined
  filterMerchantAccounts?: string[] | undefined
  networkType?: 'local' | 'public' | undefined
  password?: string | undefined
  populateSoapActionHeader?: boolean | undefined
  url?: string | undefined
  username?: string | undefined
}
type GenerateHmacKeyResponse = { hmacKey: string }
type Amount = { currency: string; value: bigint }
type CustomNotification = {
  amount?: Amount | undefined
  eventCode?: string | undefined
  eventDate?: string | undefined
  merchantReference?: string | undefined
  paymentMethod?: string | undefined
  reason?: string | undefined
  success?: boolean | undefined
}
type TestCompanyWebhookRequest = {
  merchantIds?: string[] | undefined
  notification?: CustomNotification | undefined
  types?: string[] | undefined
}
type TestOutput = {
  merchantId?: string | undefined
  output?: string | undefined
  requestSent?: string | undefined
  responseCode?: string | undefined
  responseTime?: string | undefined
  status: string
}
type TestWebhookResponse = { data?: TestOutput[] | undefined }
type MeApiCredential = {
  _links?: ApiCredentialLinks | undefined
  active: boolean
  allowedIpAddresses: string[]
  allowedOrigins?: AllowedOrigin[] | undefined
  clientKey: string
  companyName?: string | undefined
  description?: string | undefined
  id: string
  roles: string[]
  subjectDN?: string | undefined
  username: string
}
type CreateAllowedOriginRequest = {
  _links?: Links | undefined
  domain: string
  id?: string | undefined
}
type CreateMerchantRequest = {
  businessLineId?: string | undefined
  companyId: string
  description?: string | undefined
  legalEntityId?: string | undefined
  pricingPlan?: string | undefined
  reference?: string | undefined
  salesChannels?: string[] | undefined
}
type CreateMerchantResponse = {
  businessLineId?: string | undefined
  companyId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  legalEntityId?: string | undefined
  pricingPlan?: string | undefined
  reference?: string | undefined
}
type RequestActivationResponse = { companyId?: string | undefined; merchantId?: string | undefined }
type ApiCredential = {
  _links?: ApiCredentialLinks | undefined
  active: boolean
  allowedIpAddresses: string[]
  allowedOrigins?: AllowedOrigin[] | undefined
  clientKey: string
  description?: string | undefined
  id: string
  roles: string[]
  subjectDN?: string | undefined
  username: string
}
type ListMerchantApiCredentialsResponse = {
  _links?: PaginationLinks | undefined
  data?: ApiCredential[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type CreateMerchantApiCredentialRequest = {
  allowedOrigins?: string[] | undefined
  description?: string | undefined
  roles?: string[] | undefined
}
type CreateApiCredentialResponse = {
  _links?: ApiCredentialLinks | undefined
  active: boolean
  allowedIpAddresses: string[]
  allowedOrigins?: AllowedOrigin[] | undefined
  apiKey: string
  clientKey: string
  description?: string | undefined
  id: string
  password: string
  roles: string[]
  subjectDN?: string | undefined
  username: string
}
type UpdateMerchantApiCredentialRequest = {
  active?: boolean | undefined
  allowedOrigins?: string[] | undefined
  description?: string | undefined
  roles?: string[] | undefined
  subjectDN?: string | undefined
}
type TransactionDescriptionResponseInfo = {
  doingBusinessAsName?: string | undefined
  type?: 'append' | 'dynamic' | 'fixed' | undefined
}
type AccelResponseInfo = {
  networkProcessingMode?: 'auth' | 'sale' | undefined
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type AffirmResponseInfo = { publicApiKey?: string | undefined }
type AfterpayTouchResponseInfo = {
  supportEmail?: string | undefined
  supportUrl?: string | undefined
}
type AlipayPlusResponseInfo = { settlementCurrencyCode?: string | undefined }
type AmexResponseInfo = {
  midNumber?: string | undefined
  reuseMidNumber?: boolean | undefined
  serviceLevel?: string | undefined
}
type AncvResponseInfo = { shopId?: string | undefined }
type ApplePayResponseInfo = { domains?: string[] | undefined }
type AssociatedPaymentMethod = { enabled: boolean; id: string; type: string }
type BcmcResponseInfo = {
  enableBcmcMobile?: boolean | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type BoncardResponseInfo = { terminalId?: string | undefined }
type CarnetResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type CartesBancairesResponseInfo = {
  siret?: string | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type ClearpayResponseInfo = { supportUrl?: string | undefined }
type CupResponseInfo = { transactionDescription?: TransactionDescriptionResponseInfo | undefined }
type DinersResponseInfo = {
  midNumber?: string | undefined
  reuseMidNumber?: boolean | undefined
  serviceLevel?: string | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type DiscoverResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type EbtResponseInfo = { fnaNumber?: string | undefined }
type EFTDirectDebitCAResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type EftPosAustraliaResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type GirocardResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type GivexResponseInfo = {
  currencyCode?: string | undefined
  password?: string | undefined
  paymentFlow?: string | undefined
  username?: string | undefined
}
type GooglePayResponseInfo = {
  merchantId?: string | undefined
  reuseMerchantId?: boolean | undefined
}
type IdealResponseInfo = { transactionDescription?: TransactionDescriptionResponseInfo | undefined }
type InteracCardResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type JCBResponseInfo = {
  midNumber?: string | undefined
  reuseMidNumber?: boolean | undefined
  serviceLevel?: string | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type KlarnaResponseInfo = {
  autoCapture?: boolean | undefined
  disputeEmail?: string | undefined
  region?: 'AU' | 'CH' | 'EU' | 'NA' | undefined
  supportEmail?: string | undefined
}
type MaestroResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type MaestroUSAResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type MCResponseInfo = { transactionDescription?: TransactionDescriptionResponseInfo | undefined }
type MealVoucherFRResponseInfo = {
  conecsId?: string | undefined
  siret?: string | undefined
  subTypes?: string[] | undefined
}
type NyceResponseInfo = {
  networkProcessingMode?: 'auth' | 'sale' | undefined
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type PayByBankPlaidResponseInfo = {
  logo?: string | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type PayMeResponseInfo = {
  displayName?: string | undefined
  logo?: string | undefined
  supportEmail?: string | undefined
}
type PayPalResponseInfo = {
  directCapture?: boolean | undefined
  payerId?: string | undefined
  subject?: string | undefined
}
type PayToResponseInfo = { merchantName?: string | undefined; payToPurpose?: string | undefined }
type PixResponseInfo = {
  allowRecurring?: boolean | undefined
  allowPayByBank?: boolean | undefined
}
type PulseResponseInfo = {
  networkProcessingMode?: 'auth' | 'sale' | undefined
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type SepaDirectDebitResponseInfo = {
  creditorId?: string | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type SodexoResponseInfo = { merchantContactPhone?: string | undefined }
type SofortResponseInfo = { currencyCode?: string | undefined; logo?: string | undefined }
type StarResponseInfo = {
  networkProcessingMode?: 'auth' | 'sale' | undefined
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionResponseInfo | undefined
}
type SvsResponseInfo = { authorisationMid?: string | undefined; currencyCode?: string | undefined }
type SwishResponseInfo = { swishNumber?: string | undefined }
type TicketResponseInfo = { requestorId?: string | undefined }
type TwintResponseInfo = { logo?: string | undefined }
type ValuelinkResponseInfo = {
  alternateMerchantNumber?: string | undefined
  authorisationMid?: string | undefined
  pinSupport?: 'PIN' | 'NO PIN' | undefined
  terminalId?: string | undefined
}
type VippsResponseInfo = { logo?: string | undefined; subscriptionCancelUrl?: string | undefined }
type VisaResponseInfo = { transactionDescription?: TransactionDescriptionResponseInfo | undefined }
type WeChatPayResponseInfo = { contactPersonName?: string | undefined; email?: string | undefined }
type WeChatPayPosResponseInfo = {
  contactPersonName?: string | undefined
  email?: string | undefined
}
type PaymentMethod = {
  accel?: AccelResponseInfo | undefined
  affirm?: AffirmResponseInfo | undefined
  afterpayTouch?: AfterpayTouchResponseInfo | undefined
  alipayPlus?: AlipayPlusResponseInfo | undefined
  allowed?: boolean | undefined
  amex?: AmexResponseInfo | undefined
  ancv?: AncvResponseInfo | undefined
  applePay?: ApplePayResponseInfo | undefined
  associatedPaymentMethods?: AssociatedPaymentMethod[] | undefined
  bcmc?: BcmcResponseInfo | undefined
  boncard?: BoncardResponseInfo | undefined
  businessLineId?: string | undefined
  carnet?: CarnetResponseInfo | undefined
  cartesBancaires?: CartesBancairesResponseInfo | undefined
  clearpay?: ClearpayResponseInfo | undefined
  countries?: string[] | undefined
  cup?: CupResponseInfo | undefined
  currencies?: string[] | undefined
  customRoutingFlags?: string[] | undefined
  diners?: DinersResponseInfo | undefined
  discover?: DiscoverResponseInfo | undefined
  ebt?: EbtResponseInfo | undefined
  eft_directdebit_CA?: EFTDirectDebitCAResponseInfo | undefined
  eftpos_australia?: EftPosAustraliaResponseInfo | undefined
  enabled?: boolean | undefined
  girocard?: GirocardResponseInfo | undefined
  givex?: GivexResponseInfo | undefined
  googlePay?: GooglePayResponseInfo | undefined
  id: string
  ideal?: IdealResponseInfo | undefined
  interac_card?: InteracCardResponseInfo | undefined
  jcb?: JCBResponseInfo | undefined
  klarna?: KlarnaResponseInfo | undefined
  maestro?: MaestroResponseInfo | undefined
  maestro_usa?: MaestroUSAResponseInfo | undefined
  mc?: MCResponseInfo | undefined
  mealVoucher_FR?: MealVoucherFRResponseInfo | undefined
  merchantCategoryCode?: string | undefined
  mid?: string | undefined
  nyce?: NyceResponseInfo | undefined
  paybybank_plaid?: PayByBankPlaidResponseInfo | undefined
  paybybank_plaid_ca?: PayByBankPlaidResponseInfo | undefined
  payme?: PayMeResponseInfo | undefined
  paypal?: PayPalResponseInfo | undefined
  payto?: PayToResponseInfo | undefined
  pix?: PixResponseInfo | undefined
  pulse?: PulseResponseInfo | undefined
  reference?: string | undefined
  sepadirectdebit?: SepaDirectDebitResponseInfo | undefined
  shopperInteraction?: string | undefined
  sodexo?: SodexoResponseInfo | undefined
  sofort?: SofortResponseInfo | undefined
  star?: StarResponseInfo | undefined
  storeIds?: string[] | undefined
  svs?: SvsResponseInfo | undefined
  swish?: SwishResponseInfo | undefined
  ticket?: TicketResponseInfo | undefined
  twint?: TwintResponseInfo | undefined
  type?: string | undefined
  valuelink?: ValuelinkResponseInfo | undefined
  verificationStatus?: 'valid' | 'pending' | 'invalid' | 'rejected' | undefined
  vipps?: VippsResponseInfo | undefined
  visa?: VisaResponseInfo | undefined
  wechatpay?: WeChatPayResponseInfo | undefined
  wechatpay_pos?: WeChatPayPosResponseInfo | undefined
}
type PaymentMethodResponse = {
  _links?: PaginationLinks | undefined
  data?: PaymentMethod[] | undefined
  itemsTotal: number
  pagesTotal: number
  typesWithErrors?:
    | (
        | 'abrapetite'
        | 'abrapetite_credit'
        | 'abrapetite_debit'
        | 'abrapetite_prepaid'
        | 'accel'
        | 'ach'
        | 'affirm'
        | 'afterpaytouch'
        | 'alelo'
        | 'alipay'
        | 'alipay_hk'
        | 'alipay_plus'
        | 'alipay_plus_alipay_cn'
        | 'alipay_plus_alipay_hk'
        | 'alipay_plus_dana'
        | 'alipay_plus_gcash'
        | 'alipay_plus_kakaopay'
        | 'alipay_plus_kplus'
        | 'alipay_plus_naverpay'
        | 'alipay_plus_rabbitlinepay'
        | 'alipay_plus_tosspay'
        | 'alipay_plus_touchngo'
        | 'alipay_plus_truemoney'
        | 'alipay_wap'
        | 'amex'
        | 'ancv'
        | 'applepay'
        | 'avancard'
        | 'avancard_credit'
        | 'avancard_debit'
        | 'banese_card'
        | 'banese_card_credit'
        | 'banese_card_debit'
        | 'banese_card_prepaid'
        | 'bcmc'
        | 'blik'
        | 'blik_pos'
        | 'boncard'
        | 'br_schemes'
        | 'carnet'
        | 'cartebancaire'
        | 'cashapp'
        | 'clearpay'
        | 'clicktopay'
        | 'cooper'
        | 'cooper_credit'
        | 'cooper_debit'
        | 'cooper_food_debit'
        | 'cooper_meal_debit'
        | 'cooper_prepaid'
        | 'cooper_private_credit'
        | 'cooper_retail_credit'
        | 'credtodos'
        | 'credtodos_private_credit'
        | 'credtodos_private_debit'
        | 'cup'
        | 'diners'
        | 'directdebit_GB'
        | 'discover'
        | 'ebanking_FI'
        | 'ebt'
        | 'eft_directdebit_CA'
        | 'eftpos_australia'
        | 'elo'
        | 'elocredit'
        | 'elodebit'
        | 'girocard'
        | 'givex'
        | 'googlepay'
        | 'green_card'
        | 'green_card_credit'
        | 'green_card_debit'
        | 'green_card_food_prepaid'
        | 'green_card_meal_prepaid'
        | 'green_card_prepaid'
        | 'hiper'
        | 'hipercard'
        | 'ideal'
        | 'interac_card'
        | 'jcb'
        | 'klarna'
        | 'klarna_account'
        | 'klarna_b2b'
        | 'klarna_paynow'
        | 'le_card'
        | 'le_card_credit'
        | 'le_card_debit'
        | 'maestro'
        | 'maestro_usa'
        | 'maxifrota'
        | 'maxifrota_prepaid'
        | 'mbway'
        | 'mc'
        | 'mcdebit'
        | 'mealVoucher_FR'
        | 'megaleve'
        | 'megaleve_credit'
        | 'megaleve_debit'
        | 'mobilepay'
        | 'multibanco'
        | 'nutricash'
        | 'nutricash_prepaid'
        | 'nyce'
        | 'onlineBanking_PL'
        | 'paybybank'
        | 'paybybank_plaid'
        | 'paybybank_plaid_ca'
        | 'payme'
        | 'payme_pos'
        | 'paynow'
        | 'paynow_pos'
        | 'paypal'
        | 'payto'
        | 'personal_card'
        | 'personal_card_credit'
        | 'personal_card_debit'
        | 'pix'
        | 'pulse'
        | 'romcard'
        | 'romcard_credit'
        | 'romcard_debit'
        | 'senff'
        | 'senff_credit'
        | 'sepadirectdebit'
        | 'sodexo'
        | 'star'
        | 'svs'
        | 'swish'
        | 'ticket'
        | 'todo_giftcard'
        | 'trustly'
        | 'twint'
        | 'twint_pos'
        | 'up_brazil'
        | 'up_brazil_credit'
        | 'up_brazil_debit'
        | 'up_brazil_prepaid'
        | 'vale_refeicao'
        | 'vale_refeicao_prepaid'
        | 'valuelink'
        | 'vegas_card'
        | 'vegas_card_credit'
        | 'vegas_card_debit'
        | 'vero_card'
        | 'vero_card_credit'
        | 'vero_card_debit'
        | 'vero_card_prepaid'
        | 'vipps'
        | 'visa'
        | 'visadebit'
        | 'vpay'
        | 'wechatpay'
        | 'wechatpay_pos'
        | 'wero'
      )[]
    | undefined
}
type TransactionDescriptionInfo = {
  doingBusinessAsName?: string | undefined
  type?: 'append' | 'dynamic' | 'fixed' | undefined
}
type AccelInfo = {
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type AffirmInfo = { pricePlan?: string | undefined; supportEmail: string }
type AfterpayTouchInfo = { supportEmail?: string | undefined; supportUrl: string }
type AlipayPlusInfo = {
  branchName?: string | undefined
  merchantMobileAppName?: string | undefined
  productServiceDescription?: string | undefined
  settlementCurrencyCode?: string | undefined
}
type AmexInfo = {
  midNumber?: string | undefined
  reuseMidNumber?: boolean | undefined
  serviceLevel: 'noContract' | 'gatewayContract' | 'paymentDesignatorContract'
}
type AncvInfo = { shopId: string }
type ApplePayInfo = { domains: string[] }
type BcmcInfo = { enableBcmcMobile?: boolean | undefined }
type BoncardInfo = { terminalId: string }
type CarnetInfo = {
  addMccAcronym?: boolean | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type CartesBancairesInfo = {
  siret: string
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type ClearpayInfo = { supportUrl: string }
type GenericPmWithTdiInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type DinersInfo = {
  midNumber?: string | undefined
  reuseMidNumber: boolean
  serviceLevel?: 'noContract' | 'gatewayContract' | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type EbtInfo = { fnaNumber: string }
type GivexInfo = {
  currencyCode: string
  password: string
  paymentFlow: 'Ecommerce' | 'POS'
  username: string
}
type GooglePayInfo = { merchantId: string; reuseMerchantId?: boolean | undefined }
type JCBInfo = {
  midNumber?: string | undefined
  reuseMidNumber?: boolean | undefined
  serviceLevel?: 'noContract' | 'gatewayContract' | 'paymentDesignatorContract' | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type KlarnaInfo = {
  autoCapture?: boolean | undefined
  disputeEmail: string
  region: 'NA' | 'EU' | 'CH' | 'AU'
  supportEmail: string
}
type MealVoucherFRInfo = { conecsId: string; siret: string; subTypes: string[] }
type NyceInfo = {
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type PayByBankPlaidInfo = {
  logo?: string | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type PayMeInfo = { displayName: string; logo: string; supportEmail: string }
type PayPalInfo = { directCapture?: boolean | undefined; payerId: string; subject: string }
type PayToInfo = { merchantName: string; payToPurpose: string }
type PixInfo = { allowRecurring?: boolean | undefined; allowPayByBank?: boolean | undefined }
type PulseInfo = {
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type SepaDirectDebitInfo = {
  creditorId?: string | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type SodexoInfo = { merchantContactPhone: string }
type SofortInfo = { currencyCode: string; logo: string }
type StarInfo = {
  processingType?: 'billpay' | 'ecom' | 'pos' | undefined
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type SvsInfo = { authorisationMid: string; currencyCode: string }
type SwishInfo = { swishNumber: string }
type TicketInfo = { requestorId?: string | undefined }
type TwintInfo = { logo: string }
type ValuelinkInfo = {
  alternateMerchantNumber?: string | undefined
  authorisationMid: string
  pinSupport: 'PIN' | 'NO PIN'
  terminalId?: string | undefined
}
type VippsInfo = { logo: string; subscriptionCancelUrl?: string | undefined }
type WeChatPayInfo = { contactPersonName: string; email: string }
type WeChatPayPosInfo = { contactPersonName: string; email: string }
type PaymentMethodSetupInfo = {
  accel?: AccelInfo | undefined
  affirm?: AffirmInfo | undefined
  afterpayTouch?: AfterpayTouchInfo | undefined
  alipayPlus?: AlipayPlusInfo | undefined
  amex?: AmexInfo | undefined
  ancv?: AncvInfo | undefined
  applePay?: ApplePayInfo | undefined
  bcmc?: BcmcInfo | undefined
  boncard?: BoncardInfo | undefined
  businessLineId?: string | undefined
  carnet?: CarnetInfo | undefined
  cartesBancaires?: CartesBancairesInfo | undefined
  clearpay?: ClearpayInfo | undefined
  countries?: string[] | undefined
  cup?: GenericPmWithTdiInfo | undefined
  currencies?: string[] | undefined
  customRoutingFlags?: string[] | undefined
  diners?: DinersInfo | undefined
  discover?: GenericPmWithTdiInfo | undefined
  ebt?: EbtInfo | undefined
  eft_directdebit_CA?: GenericPmWithTdiInfo | undefined
  eftpos_australia?: GenericPmWithTdiInfo | undefined
  girocard?: GenericPmWithTdiInfo | undefined
  givex?: GivexInfo | undefined
  googlePay?: GooglePayInfo | undefined
  ideal?: GenericPmWithTdiInfo | undefined
  interac_card?: GenericPmWithTdiInfo | undefined
  jcb?: JCBInfo | undefined
  klarna?: KlarnaInfo | undefined
  maestro?: GenericPmWithTdiInfo | undefined
  maestro_usa?: GenericPmWithTdiInfo | undefined
  mc?: GenericPmWithTdiInfo | undefined
  mealVoucher_FR?: MealVoucherFRInfo | undefined
  nyce?: NyceInfo | undefined
  paybybank_plaid?: PayByBankPlaidInfo | undefined
  paybybank_plaid_ca?: PayByBankPlaidInfo | undefined
  payme?: PayMeInfo | undefined
  paypal?: PayPalInfo | undefined
  payto?: PayToInfo | undefined
  pix?: PixInfo | undefined
  pulse?: PulseInfo | undefined
  reference?: string | undefined
  sepadirectdebit?: SepaDirectDebitInfo | undefined
  shopperInteraction?: 'eCommerce' | 'pos' | 'moto' | 'contAuth' | undefined
  sodexo?: SodexoInfo | undefined
  sofort?: SofortInfo | undefined
  star?: StarInfo | undefined
  storeIds?: string[] | undefined
  svs?: SvsInfo | undefined
  swish?: SwishInfo | undefined
  ticket?: TicketInfo | undefined
  twint?: TwintInfo | undefined
  type:
    | 'abrapetite'
    | 'abrapetite_credit'
    | 'abrapetite_debit'
    | 'abrapetite_prepaid'
    | 'accel'
    | 'ach'
    | 'affirm'
    | 'afterpaytouch'
    | 'alelo'
    | 'alipay'
    | 'alipay_hk'
    | 'alipay_plus'
    | 'alipay_plus_alipay_cn'
    | 'alipay_plus_alipay_hk'
    | 'alipay_plus_dana'
    | 'alipay_plus_gcash'
    | 'alipay_plus_kakaopay'
    | 'alipay_plus_kplus'
    | 'alipay_plus_naverpay'
    | 'alipay_plus_rabbitlinepay'
    | 'alipay_plus_tosspay'
    | 'alipay_plus_touchngo'
    | 'alipay_plus_truemoney'
    | 'alipay_wap'
    | 'amex'
    | 'ancv'
    | 'applepay'
    | 'avancard'
    | 'avancard_credit'
    | 'avancard_debit'
    | 'banese_card'
    | 'banese_card_credit'
    | 'banese_card_debit'
    | 'banese_card_prepaid'
    | 'bcmc'
    | 'blik'
    | 'blik_pos'
    | 'boncard'
    | 'br_schemes'
    | 'carnet'
    | 'cartebancaire'
    | 'cashapp'
    | 'clearpay'
    | 'clicktopay'
    | 'cooper'
    | 'cooper_credit'
    | 'cooper_debit'
    | 'cooper_food_debit'
    | 'cooper_meal_debit'
    | 'cooper_prepaid'
    | 'cooper_private_credit'
    | 'cooper_retail_credit'
    | 'credtodos'
    | 'credtodos_private_credit'
    | 'credtodos_private_debit'
    | 'cup'
    | 'diners'
    | 'directdebit_GB'
    | 'discover'
    | 'ebanking_FI'
    | 'ebt'
    | 'eft_directdebit_CA'
    | 'eftpos_australia'
    | 'elo'
    | 'elocredit'
    | 'elodebit'
    | 'girocard'
    | 'givex'
    | 'googlepay'
    | 'green_card'
    | 'green_card_credit'
    | 'green_card_debit'
    | 'green_card_food_prepaid'
    | 'green_card_meal_prepaid'
    | 'green_card_prepaid'
    | 'hiper'
    | 'hipercard'
    | 'ideal'
    | 'interac_card'
    | 'jcb'
    | 'klarna'
    | 'klarna_account'
    | 'klarna_b2b'
    | 'klarna_paynow'
    | 'le_card'
    | 'le_card_credit'
    | 'le_card_debit'
    | 'maestro'
    | 'maestro_usa'
    | 'maxifrota'
    | 'maxifrota_prepaid'
    | 'mbway'
    | 'mc'
    | 'mcdebit'
    | 'mealVoucher_FR'
    | 'megaleve'
    | 'megaleve_credit'
    | 'megaleve_debit'
    | 'mobilepay'
    | 'multibanco'
    | 'nutricash'
    | 'nutricash_prepaid'
    | 'nyce'
    | 'onlineBanking_PL'
    | 'paybybank'
    | 'paybybank_plaid'
    | 'paybybank_plaid_ca'
    | 'payme'
    | 'payme_pos'
    | 'paynow'
    | 'paynow_pos'
    | 'paypal'
    | 'payto'
    | 'personal_card'
    | 'personal_card_credit'
    | 'personal_card_debit'
    | 'pix'
    | 'pulse'
    | 'romcard'
    | 'romcard_credit'
    | 'romcard_debit'
    | 'senff'
    | 'senff_credit'
    | 'sepadirectdebit'
    | 'sodexo'
    | 'star'
    | 'svs'
    | 'swish'
    | 'ticket'
    | 'todo_giftcard'
    | 'trustly'
    | 'twint'
    | 'twint_pos'
    | 'up_brazil'
    | 'up_brazil_credit'
    | 'up_brazil_debit'
    | 'up_brazil_prepaid'
    | 'vale_refeicao'
    | 'vale_refeicao_prepaid'
    | 'valuelink'
    | 'vegas_card'
    | 'vegas_card_credit'
    | 'vegas_card_debit'
    | 'vero_card'
    | 'vero_card_credit'
    | 'vero_card_debit'
    | 'vero_card_prepaid'
    | 'vipps'
    | 'visa'
    | 'visadebit'
    | 'vpay'
    | 'wechatpay'
    | 'wechatpay_pos'
    | 'wero'
  valuelink?: ValuelinkInfo | undefined
  vipps?: VippsInfo | undefined
  visa?: GenericPmWithTdiInfo | undefined
  wechatpay?: WeChatPayInfo | undefined
  wechatpay_pos?: WeChatPayPosInfo | undefined
}
type AccelUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type AffirmUpdateInfo = { pricePlan?: string | undefined }
type BcmcUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type BoncardUpdateInfo = { terminalId?: string | undefined }
type GenericPmWithTdiUpdateInfo = {
  transactionDescription?: TransactionDescriptionInfo | undefined
}
type CartesBancairesUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type CashAppUpdateInfo = { logoUrl?: string | undefined; merchantName?: string | undefined }
type EbtUpdateInfo = { fnaNumber: string }
type NyceUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type PayByBankPlaidUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type PulseUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type SepaDirectDebitUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type StarUpdateInfo = { transactionDescription?: TransactionDescriptionInfo | undefined }
type UpdatePaymentMethodInfo = {
  accel?: AccelUpdateInfo | undefined
  affirm?: AffirmUpdateInfo | undefined
  bcmc?: BcmcUpdateInfo | undefined
  boncard?: BoncardUpdateInfo | undefined
  carnet?: GenericPmWithTdiUpdateInfo | undefined
  cartesBancaires?: CartesBancairesUpdateInfo | undefined
  cashapp?: CashAppUpdateInfo | undefined
  countries?: string[] | undefined
  cup?: GenericPmWithTdiUpdateInfo | undefined
  currencies?: string[] | undefined
  customRoutingFlags?: string[] | undefined
  diners?: GenericPmWithTdiUpdateInfo | undefined
  discover?: GenericPmWithTdiUpdateInfo | undefined
  ebt?: EbtUpdateInfo | undefined
  eft_directdebit_CA?: GenericPmWithTdiUpdateInfo | undefined
  eftpos_australia?: GenericPmWithTdiUpdateInfo | undefined
  enabled?: boolean | undefined
  girocard?: GenericPmWithTdiUpdateInfo | undefined
  ideal?: GenericPmWithTdiUpdateInfo | undefined
  interac_card?: GenericPmWithTdiUpdateInfo | undefined
  jcb?: GenericPmWithTdiUpdateInfo | undefined
  maestro?: GenericPmWithTdiUpdateInfo | undefined
  maestro_usa?: GenericPmWithTdiUpdateInfo | undefined
  mc?: GenericPmWithTdiUpdateInfo | undefined
  nyce?: NyceUpdateInfo | undefined
  paybybank_plaid?: PayByBankPlaidUpdateInfo | undefined
  paybybank_plaid_ca?: PayByBankPlaidUpdateInfo | undefined
  pulse?: PulseUpdateInfo | undefined
  sepadirectdebit?: SepaDirectDebitUpdateInfo | undefined
  star?: StarUpdateInfo | undefined
  storeId?: string | undefined
  storeIds?: string[] | undefined
  visa?: GenericPmWithTdiUpdateInfo | undefined
}
type PayoutSettings = {
  allowed?: boolean | undefined
  enabled?: boolean | undefined
  enabledFromDate?: string | undefined
  id: string
  priority?: 'first' | 'normal' | 'urgent' | undefined
  transferInstrumentId: string
  verificationStatus?: 'invalid' | 'pending' | 'rejected' | 'valid' | undefined
}
type PayoutSettingsResponse = { data?: PayoutSettings[] | undefined }
type PayoutSettingsRequest = {
  enabled?: boolean | undefined
  enabledFromDate?: string | undefined
  transferInstrumentId: string
}
type UpdatePayoutSettingsRequest = { enabled?: boolean | undefined }
type AdditionalCommission = {
  balanceAccountId?: string | undefined
  fixedAmount?: bigint | undefined
  variablePercentage?: bigint | undefined
}
type Commission = { fixedAmount?: bigint | undefined; variablePercentage?: bigint | undefined }
type SplitDcc = { accountHolderPercentage?: bigint | undefined }
type SplitConfigurationLogic = {
  acquiringFees?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  additionalCommission?: AdditionalCommission | undefined
  adyenCommission?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  adyenFees?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  adyenMarkup?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  chargeback?:
    | 'deductFromLiableAccount'
    | 'deductFromOneBalanceAccount'
    | 'deductAccordingToSplitRatio'
    | undefined
  chargebackCostAllocation?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  commission: Commission
  dcc?: SplitDcc | undefined
  interchange?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  paymentFee?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  refund?:
    | 'deductFromLiableAccount'
    | 'deductFromOneBalanceAccount'
    | 'deductAccordingToSplitRatio'
    | undefined
  refundCostAllocation?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  remainder?: 'addToLiableAccount' | 'addToOneBalanceAccount' | undefined
  schemeFee?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  splitLogicId?: string | undefined
  surcharge?: 'addToLiableAccount' | 'addToOneBalanceAccount' | undefined
  tip?: 'addToLiableAccount' | 'addToOneBalanceAccount' | undefined
}
type SplitConfigurationRule = {
  cardRegion?:
    | 'international'
    | 'intraEEA'
    | 'intraRegional'
    | 'interRegional'
    | 'domestic'
    | 'ANY'
    | undefined
  cardUsageType?: 'commercial' | 'consumer' | 'ANY' | undefined
  currency: string
  fundingSource: 'charged' | 'credit' | 'debit' | 'deferred_debit' | 'prepaid' | 'ANY'
  paymentMethod: string
  ruleId?: string | undefined
  shopperInteraction: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | 'ANY'
  splitLogic: SplitConfigurationLogic
}
type SplitConfiguration = {
  description: string
  rules: SplitConfigurationRule[]
  splitConfigurationId?: string | undefined
}
type SplitConfigurationList = { data?: SplitConfiguration[] | undefined }
type UpdateSplitConfigurationRequest = { description: string }
type UpdateSplitConfigurationRuleRequest = {
  cardUsageType?: 'commercial' | 'consumer' | 'ANY' | undefined
  currency: string
  fundingSource: string
  paymentMethod: string
  shopperInteraction: string
}
type UpdateSplitConfigurationLogicRequest = {
  acquiringFees?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  additionalCommission?: AdditionalCommission | undefined
  adyenCommission?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  adyenFees?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  adyenMarkup?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  chargeback?:
    | 'deductFromLiableAccount'
    | 'deductFromOneBalanceAccount'
    | 'deductAccordingToSplitRatio'
    | undefined
  chargebackCostAllocation?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  commission: Commission
  dcc?: SplitDcc | undefined
  interchange?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  paymentFee?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  refund?:
    | 'deductFromLiableAccount'
    | 'deductFromOneBalanceAccount'
    | 'deductAccordingToSplitRatio'
    | undefined
  refundCostAllocation?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  remainder?: 'addToLiableAccount' | 'addToOneBalanceAccount' | undefined
  schemeFee?: 'deductFromLiableAccount' | 'deductFromOneBalanceAccount' | undefined
  splitLogicId?: string | undefined
  surcharge?: 'addToLiableAccount' | 'addToOneBalanceAccount' | undefined
  tip?: 'addToLiableAccount' | 'addToOneBalanceAccount' | undefined
}
type StoreLocation = {
  city?: string | undefined
  country: string
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type LocalShopperStatement = { script: string; value: string }
type LocalStoreName = { script: string; value: string }
type JapaneseLocalizedAddressFields = {
  building?: string | undefined
  city: string
  district?: string | undefined
  line1: string
  postalCode?: string | undefined
  prefecture: string
}
type JapaneseLocalizedAddress = {
  fields: JapaneseLocalizedAddressFields
  script: 'ja-Kana' | 'ja-Hani'
}
type LocalizedInformation = {
  localShopperStatement: LocalShopperStatement[]
  localStoreName?: LocalStoreName[] | undefined
  localizedAddress?: JapaneseLocalizedAddress[] | undefined
}
type StoreSplitConfiguration = {
  balanceAccountId?: string | undefined
  splitConfigurationId?: string | undefined
}
type SubMerchantData = { email: string; id: string; mcc: string; name: string }
type Store = {
  _links?: Links | undefined
  address?: StoreLocation | undefined
  businessLineIds?: string[] | undefined
  description?: string | undefined
  externalReferenceId?: string | undefined
  id?: string | undefined
  localizedInformation?: LocalizedInformation | undefined
  merchantId?: string | undefined
  phoneNumber?: string | undefined
  reference?: string | undefined
  shopperStatement?: string | undefined
  splitConfiguration?: StoreSplitConfiguration | undefined
  status?: 'active' | 'closed' | 'inactive' | undefined
  subMerchantData?: SubMerchantData | undefined
}
type ListStoresResponse = {
  _links?: PaginationLinks | undefined
  data?: Store[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type StoreCreationRequest = {
  address: StoreLocation
  businessLineIds?: string[] | undefined
  description: string
  externalReferenceId?: string | undefined
  localizedInformation?: LocalizedInformation | undefined
  phoneNumber: string
  reference?: string | undefined
  shopperStatement: string
  splitConfiguration?: StoreSplitConfiguration | undefined
  subMerchantData?: SubMerchantData | undefined
}
type UpdatableAddress = {
  city?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type UpdateStoreRequest = {
  address?: UpdatableAddress | undefined
  businessLineIds?: string[] | undefined
  description?: string | undefined
  externalReferenceId?: string | undefined
  phoneNumber?: string | undefined
  splitConfiguration?: StoreSplitConfiguration | undefined
  status?: 'active' | 'closed' | 'inactive' | undefined
  subMerchantData?: SubMerchantData | undefined
}
type User = {
  _links?: Links | undefined
  accountGroups?: string[] | undefined
  active?: boolean | undefined
  apps?: string[] | undefined
  email: string
  id: string
  name?: Name | undefined
  roles: string[]
  timeZoneCode: string
  username: string
}
type ListMerchantUsersResponse = {
  _links?: PaginationLinks | undefined
  data?: User[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type CreateMerchantUserRequest = {
  accountGroups?: string[] | undefined
  email: string
  loginMethod?: string | undefined
  name: Name
  roles?: string[] | undefined
  timeZoneCode?: string | undefined
  username: string
}
type CreateUserResponse = {
  _links?: Links | undefined
  accountGroups?: string[] | undefined
  active?: boolean | undefined
  apps?: string[] | undefined
  email: string
  id: string
  name?: Name | undefined
  roles: string[]
  timeZoneCode: string
  username: string
}
type UpdateMerchantUserRequest = {
  accountGroups?: string[] | undefined
  active?: boolean | undefined
  email?: string | undefined
  loginMethod?: string | undefined
  name?: Name2 | undefined
  roles?: string[] | undefined
  timeZoneCode?: string | undefined
}
type CreateMerchantWebhookRequest = {
  acceptsExpiredCertificate?: boolean | undefined
  acceptsSelfSignedCertificate?: boolean | undefined
  acceptsUntrustedRootCertificate?: boolean | undefined
  active: boolean
  additionalSettings?: AdditionalSettings | undefined
  communicationFormat: 'http' | 'json' | 'soap'
  description?: string | undefined
  encryptionProtocol?: 'HTTP' | 'TLSv1.2' | 'TLSv1.3' | undefined
  networkType?: 'local' | 'public' | undefined
  password?: string | undefined
  populateSoapActionHeader?: boolean | undefined
  type: string
  url: string
  username?: string | undefined
}
type UpdateMerchantWebhookRequest = {
  acceptsExpiredCertificate?: boolean | undefined
  acceptsSelfSignedCertificate?: boolean | undefined
  acceptsUntrustedRootCertificate?: boolean | undefined
  active?: boolean | undefined
  additionalSettings?: AdditionalSettings | undefined
  communicationFormat?: 'http' | 'json' | 'soap' | undefined
  description?: string | undefined
  encryptionProtocol?: 'HTTP' | 'TLSv1.2' | 'TLSv1.3' | undefined
  networkType?: 'local' | 'public' | undefined
  password?: string | undefined
  populateSoapActionHeader?: boolean | undefined
  url?: string | undefined
  username?: string | undefined
}
type TestWebhookRequest = {
  notification?: CustomNotification | undefined
  types?: string[] | undefined
}
type StoreCreationWithMerchantCodeRequest = {
  address: StoreLocation
  businessLineIds?: string[] | undefined
  description: string
  externalReferenceId?: string | undefined
  localizedInformation?: LocalizedInformation | undefined
  merchantId: string
  phoneNumber: string
  reference?: string | undefined
  shopperStatement: string
  splitConfiguration?: StoreSplitConfiguration | undefined
  subMerchantData?: SubMerchantData | undefined
}
type TerminalReassignmentTarget = {
  companyId?: string | undefined
  inventory: boolean
  merchantId?: string | undefined
  storeId?: string | undefined
}
type TerminalAssignment = {
  companyId: string
  merchantId?: string | undefined
  reassignmentTarget?: TerminalReassignmentTarget | undefined
  status: 'boarded' | 'deployed' | 'inventory' | 'reassignmentInProgress'
  storeId?: string | undefined
}
type TerminalConnectivityBluetooth = {
  ipAddress?: string | undefined
  macAddress?: string | undefined
}
type TerminalConnectivityCellular = {
  iccid?: string | undefined
  iccid2?: string | undefined
  status?:
    | 'activated'
    | 'deactivated'
    | 'deprecated'
    | 'inventory'
    | 'readyForActivation'
    | undefined
}
type TerminalConnectivityEthernet = {
  ipAddress?: string | undefined
  linkNegotiation?: string | undefined
  macAddress?: string | undefined
}
type TerminalConnectivityWifi = {
  ipAddress?: string | undefined
  macAddress?: string | undefined
  ssid?: string | undefined
}
type TerminalConnectivity = {
  bluetooth?: TerminalConnectivityBluetooth | undefined
  cellular?: TerminalConnectivityCellular | undefined
  ethernet?: TerminalConnectivityEthernet | undefined
  wifi?: TerminalConnectivityWifi | undefined
}
type InstalledAPKs = {
  confirmationDate?: string | undefined
  packageName?: string | undefined
  versionName?: string | undefined
}
type Terminal = {
  assignment?: TerminalAssignment | undefined
  cloudDeviceApiEndpoint?: string | undefined
  connectivity?: TerminalConnectivity | undefined
  countryCode?: string | undefined
  firmwareVersion?: string | undefined
  id?: string | undefined
  installedAPKs?: InstalledAPKs[] | undefined
  lastActivityAt?: string | undefined
  lastTransactionAt?: string | undefined
  model?: string | undefined
  restartLocalTime?: string | undefined
  serialNumber?: string | undefined
}
type ListTerminalsResponse = {
  _links?: PaginationLinks | undefined
  data?: Terminal[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type ForceRebootDetails = { type?: 'ForceReboot' | undefined }
type InstallAndroidAppDetails = {
  appId?: string | undefined
  type?: 'InstallAndroidApp' | undefined
}
type InstallAndroidCertificateDetails = {
  certificateId?: string | undefined
  type?: 'InstallAndroidCertificate' | undefined
}
type ReleaseUpdateDetails = {
  type?: 'ReleaseUpdate' | undefined
  updateAtFirstMaintenanceCall?: boolean | undefined
}
type UninstallAndroidAppDetails = {
  appId?: string | undefined
  type?: 'UninstallAndroidApp' | undefined
}
type UninstallAndroidCertificateDetails = {
  certificateId?: string | undefined
  type?: 'UninstallAndroidCertificate' | undefined
}
type ScheduleTerminalActionsRequest = {
  actionDetails?:
    | ForceRebootDetails
    | InstallAndroidAppDetails
    | InstallAndroidCertificateDetails
    | ReleaseUpdateDetails
    | UninstallAndroidAppDetails
    | UninstallAndroidCertificateDetails
    | undefined
  scheduledAt?: string | undefined
  storeId?: string | undefined
  terminalIds?: string[] | undefined
}
type TerminalActionScheduleDetail = { id?: string | undefined; terminalId?: string | undefined }
type ScheduleTerminalActionsResponse = {
  actionDetails?:
    | ForceRebootDetails
    | InstallAndroidAppDetails
    | InstallAndroidCertificateDetails
    | ReleaseUpdateDetails
    | UninstallAndroidAppDetails
    | UninstallAndroidCertificateDetails
    | undefined
  items?: TerminalActionScheduleDetail[] | undefined
  scheduledAt?: string | undefined
  storeId?: string | undefined
  terminalsWithErrors?: { [x: string]: string[] } | undefined
  totalErrors?: number | undefined
  totalScheduled?: number | undefined
}
type TerminalReassignmentRequest = {
  companyId?: string | undefined
  inventory?: boolean | undefined
  merchantId?: string | undefined
  storeId?: string | undefined
}
type DonationAmount = { amounts: bigint[]; currencyCode: string }
type DisplayTextField = 'causeName' | 'nonprofitName'
type DonationFlow = 'oneStep' | 'twoStep'
type DonationType = 'roundup' | 'fixedAmounts' | 'fixedAmountsRoundup'
type InPersonDonationSettings = {
  defaultAmount?: DonationAmount | undefined
  displayTextField: DisplayTextField
  donationFlow: DonationFlow
  donationType?: DonationType | undefined
  merchantAccounts?: string[] | undefined
  presentCardTimeoutMs?: bigint | undefined
  promptTimeoutMs?: bigint | undefined
  storeIds?: string[] | undefined
}
type OnlineDonationSettings = {
  defaultAmount?: DonationAmount | undefined
  donationType?: DonationType | undefined
  merchantAccounts?: string[] | undefined
  storeIds?: string[] | undefined
}
type DonationCampaignRequest = {
  accountHolderIds?: string[] | undefined
  inPerson?: InPersonDonationSettings | undefined
  name: string
  nonprofitCauseId: string
  online?: OnlineDonationSettings | undefined
}
type InPersonDonationSettingsResponse = {
  amounts?: DonationAmount[] | undefined
  defaultCurrency?: string | undefined
  displayTextField?: DisplayTextField | undefined
  donationFlow?: DonationFlow | undefined
  donationType?: DonationType | undefined
  merchantAccounts?: string[] | undefined
  presentCardTimeoutMs?: bigint | undefined
  promptTimeoutMs?: bigint | undefined
  storeIds?: string[] | undefined
}
type DonationCampaignNonprofitCause = {
  bannerUrl?: string | undefined
  causeId?: string | undefined
  description?: string | undefined
  globalWebsiteUrl?: string | undefined
  goals?: string[] | undefined
  logoUrl?: string | undefined
  nonprofitName?: string | undefined
  termsAndConditionsUrl?: string | undefined
}
type OnlineDonationSettingsResponse = {
  amounts?: DonationAmount[] | undefined
  defaultCurrency?: string | undefined
  donationType?: DonationType | undefined
  merchantAccounts?: string[] | undefined
  storeIds?: string[] | undefined
}
type DonationCampaignStatus = 'active' | 'inactive' | 'ended'
type DonationCampaign = {
  accountHolderIds?: string[] | undefined
  activatedAt?: string | undefined
  endedAt?: string | undefined
  id: string
  inPerson?: InPersonDonationSettingsResponse | undefined
  name: string
  nonprofitCause: DonationCampaignNonprofitCause
  online?: OnlineDonationSettingsResponse | undefined
  status: DonationCampaignStatus
}
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
type ListDonationCampaignsResponse = {
  _links?: PaginationLinks | undefined
  campaigns?: DonationCampaign[] | undefined
  itemsTotal: number
  pagesTotal: number
}
type DonationAmountUpdate = { amounts?: bigint[] | undefined; currencyCode?: string | undefined }
type InPersonDonationSettingsUpdate = {
  defaultAmount?: DonationAmountUpdate | ({ [x: string]: unknown } | null) | undefined
  displayTextField?: DisplayTextField | undefined
  donationFlow?: DonationFlow | undefined
  donationType?: DonationType | ({ [x: string]: unknown } | null) | undefined
  merchantAccounts?: (string[] | null) | undefined
  presentCardTimeoutMs?: (bigint | null) | undefined
  promptTimeoutMs?: (bigint | null) | undefined
  storeIds?: (string[] | null) | undefined
}
type OnlineDonationSettingsUpdate = {
  defaultAmount?: DonationAmountUpdate | ({ [x: string]: unknown } | null) | undefined
  donationType?: DonationType | ({ [x: string]: unknown } | null) | undefined
  merchantAccounts?: (string[] | null) | undefined
  storeIds?: (string[] | null) | undefined
}
type DonationCampaignUpdate = {
  accountHolderIds?: (string[] | null) | undefined
  inPerson?: InPersonDonationSettingsUpdate | ({ [x: string]: unknown } | null) | undefined
  name?: string | undefined
  online?: OnlineDonationSettingsUpdate | ({ [x: string]: unknown } | null) | undefined
}
type CampaignStatusTransition = 'activate' | 'end'
type ClientCertificateWithChain = {
  caChain: string[]
  id: string
  leaf: string
  serialNumber: string
  subjectDN: string
}
type CertificateSearchResponse = { data: ClientCertificateWithChain[] }
type ClientCertificateRequest = { apiCredential: string; certificateSigningRequest: string }
type ListNonprofitsRequest = { accountHolderIds: string[] }
type NonprofitCause = {
  bannerUrl: string
  description: string
  id?: string | undefined
  locales: string[]
  name: string
}
type Nonprofit = {
  causes: NonprofitCause[]
  description: string
  goals: string[]
  id?: string | undefined
  locales: string[]
  logoUrl: string
  name: string
  regions: string[]
  termsAndConditionsUrl: string
  website: string
}
type ListNonprofitsResponse = {
  _links?: PaginationLinks | undefined
  itemsTotal: number
  nonprofits?: Nonprofit[] | undefined
  pagesTotal: number
}
type ThemeMode = 'dark' | 'light'
type ThemeSummary = { id: string; mode: ThemeMode; name: string }
type ListThemesResponse = { data: ThemeSummary[]; hasNextPage: boolean }
type CreateThemeRequest = { mode: ThemeMode; name: string }
type CreateThemeResponse = { id: string; mode: ThemeMode; name: string }
type ThemeAsset = { model: string; type: string; url: string }
type ThemeWithAssetDetails = { assets: ThemeAsset[]; id: string; mode: ThemeMode; name: string }
type ThemeUpdateRequest = {
  mode?: 'dark' | 'light' | undefined
  name?: (string | null) | undefined
}
type UpdateThemeResponse = { id: string; mode: ThemeMode; name: string }
type AssetUploadRequest = { file: File }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies': {
      $get:
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: ListCompanyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId': {
      $get:
        | {
            input: { param: { companyId: string } }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/androidApps': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                packageName?: string | undefined
                versionCode?: number | undefined
              }
            }
            output: AndroidAppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                packageName?: string | undefined
                versionCode?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                packageName?: string | undefined
                versionCode?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                packageName?: string | undefined
                versionCode?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                packageName?: string | undefined
                versionCode?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                packageName?: string | undefined
                versionCode?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } }
            output: UploadAndroidAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/androidApps/:id': {
      $get:
        | {
            input: { param: { companyId: string; id: string } }
            output: AndroidApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; id: string } }
            output: ReprocessAndroidAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/androidCertificates': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                certificateName?: string | undefined
              }
            }
            output: AndroidCertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                certificateName?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                certificateName?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                certificateName?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                certificateName?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                certificateName?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } }
            output: UploadAndroidCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/apiCredentials': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: ListCompanyApiCredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyApiCredentialRequest }
            output: CreateCompanyApiCredentialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/apiCredentials/:apiCredentialId': {
      $get:
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: CompanyApiCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: UpdateCompanyApiCredentialRequest
            }
            output: CompanyApiCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: UpdateCompanyApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: UpdateCompanyApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: UpdateCompanyApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: UpdateCompanyApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: UpdateCompanyApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins': {
      $get:
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: AllowedOriginsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: AllowedOrigin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins/:originId': {
      $get:
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: AllowedOrigin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/apiCredentials/:apiCredentialId/generateApiKey': {
      $post:
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: GenerateApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/apiCredentials/:apiCredentialId/generateClientKey': {
      $post:
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: GenerateClientKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/billingEntities': {
      $get:
        | {
            input: { param: { companyId: string } } & { query: { name?: string | undefined } }
            output: BillingEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/merchants': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: ListMerchantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/shippingLocations': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ShippingLocationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: ShippingLocation }
            output: ShippingLocation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalActions': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                status?: string | undefined
                type?: string | undefined
              }
            }
            output: ListExternalTerminalActionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                status?: string | undefined
                type?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                status?: string | undefined
                type?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                status?: string | undefined
                type?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                status?: string | undefined
                type?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                status?: string | undefined
                type?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalActions/:actionId': {
      $get:
        | {
            input: { param: { companyId: string; actionId: string } }
            output: ExternalTerminalAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; actionId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; actionId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; actionId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; actionId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; actionId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalLogos': {
      $get:
        | {
            input: { param: { companyId: string } } & { query: { model: string } }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string } } & { query: { model: string } } & { json: Logo }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalModels': {
      $get:
        | {
            input: { param: { companyId: string } }
            output: TerminalModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalOrders': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TerminalOrdersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: TerminalOrderRequest }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalOrders/:orderId': {
      $get:
        | {
            input: { param: { companyId: string; orderId: string } }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalOrders/:orderId/cancel': {
      $post:
        | {
            input: { param: { companyId: string; orderId: string } }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalProducts': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TerminalProductsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalSettings': {
      $get:
        | {
            input: { param: { companyId: string } }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string } } & { json: TerminalSettings }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/users': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: ListCompanyUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyUserRequest }
            output: CreateCompanyUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/users/:userId': {
      $get:
        | {
            input: { param: { companyId: string; userId: string } }
            output: CompanyUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: CompanyUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; userId: string } } & {
              json: UpdateCompanyUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/webhooks': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: ListWebhooksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: CreateCompanyWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/webhooks/:webhookId': {
      $get:
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: UpdateCompanyWebhookRequest
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: UpdateCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: UpdateCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: UpdateCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: UpdateCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: UpdateCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/webhooks/:webhookId/generateHmac': {
      $post:
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: GenerateHmacKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/webhooks/:webhookId/test': {
      $post:
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: TestCompanyWebhookRequest
            }
            output: TestWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: TestCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: TestCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: TestCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: TestCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; webhookId: string } } & {
              json: TestCompanyWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: MeApiCredential; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/me/allowedOrigins': {
      $get:
        | { input: {}; output: AllowedOriginsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreateAllowedOriginRequest }
            output: AllowedOrigin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAllowedOriginRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAllowedOriginRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAllowedOriginRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAllowedOriginRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateAllowedOriginRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me/allowedOrigins/:originId': {
      $get:
        | {
            input: { param: { originId: string } }
            output: AllowedOrigin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { originId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me/generateClientKey': {
      $post:
        | { input: {}; output: GenerateClientKeyResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: RestServiceError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/merchants': {
      $get:
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: ListMerchantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { pageNumber?: number | undefined; pageSize?: number | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateMerchantRequest }
            output: CreateMerchantResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateMerchantRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: CreateMerchantRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateMerchantRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateMerchantRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateMerchantRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateMerchantRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId': {
      $get:
        | {
            input: { param: { merchantId: string } }
            output: Merchant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/activate': {
      $post:
        | {
            input: { param: { merchantId: string } }
            output: RequestActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/apiCredentials': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: ListMerchantApiCredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: CreateApiCredentialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantApiCredentialRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/apiCredentials/:apiCredentialId': {
      $get:
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: ApiCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: ApiCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: UpdateMerchantApiCredentialRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins': {
      $get:
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: AllowedOriginsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: AllowedOrigin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } } & {
              json: AllowedOrigin
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins/:originId': {
      $get:
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: AllowedOrigin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string; originId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/generateApiKey': {
      $post:
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: GenerateApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/generateClientKey': {
      $post:
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: GenerateClientKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; apiCredentialId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/billingEntities': {
      $get:
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: BillingEntitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { query: { name?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/paymentMethodSettings': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: PaymentMethodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                storeId?: string | undefined
                businessLineId?: string | undefined
                pageSize?: number | undefined
                pageNumber?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { merchantId: string } } & { json: PaymentMethodSetupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId': {
      $get:
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: UpdatePaymentMethodInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId/addApplePayDomains': {
      $post:
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } } & {
              json: ApplePayInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId/getApplePayDomains': {
      $get:
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: ApplePayResponseInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; paymentMethodId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/payoutSettings': {
      $get:
        | {
            input: { param: { merchantId: string } }
            output: PayoutSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: PayoutSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: PayoutSettingsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/payoutSettings/:payoutSettingsId': {
      $get:
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: PayoutSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: PayoutSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; payoutSettingsId: string } } & {
              json: UpdatePayoutSettingsRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/shippingLocations': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ShippingLocationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: ShippingLocation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: ShippingLocation }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/splitConfigurations': {
      $get:
        | {
            input: { param: { merchantId: string } }
            output: SplitConfigurationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: SplitConfiguration }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId': {
      $get:
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: SplitConfigurationRule
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string } } & {
              json: UpdateSplitConfigurationRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId': {
      $delete:
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; splitConfigurationId: string; ruleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { merchantId: string; splitConfigurationId: string; ruleId: string }
            } & { json: UpdateSplitConfigurationRuleRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId/splitLogic/:splitLogicId': {
      $patch:
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: SplitConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                merchantId: string
                splitConfigurationId: string
                ruleId: string
                splitLogicId: string
              }
            } & { json: UpdateSplitConfigurationLogicRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/stores': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: ListStoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: StoreCreationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/stores/:reference/terminalLogos': {
      $get:
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; reference: string } } & {
              query: { model: string }
            } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/stores/:reference/terminalSettings': {
      $get:
        | {
            input: { param: { merchantId: string; reference: string } }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; reference: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; reference: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; reference: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; reference: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; reference: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; reference: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; reference: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/stores/:storeId': {
      $get:
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalLogos': {
      $get:
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalModels': {
      $get:
        | {
            input: { param: { merchantId: string } }
            output: TerminalModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalOrders': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TerminalOrdersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                customerOrderReference?: string | undefined
                status?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalOrderRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalOrders/:orderId': {
      $get:
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; orderId: string } } & {
              json: TerminalOrderRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalOrders/:orderId/cancel': {
      $post:
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: TerminalOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; orderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalProducts': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TerminalProductsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                country: string
                terminalModelId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalSettings': {
      $get:
        | {
            input: { param: { merchantId: string } }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/users': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: ListMerchantUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                username?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: CreateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantUserRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/users/:userId': {
      $get:
        | {
            input: { param: { merchantId: string; userId: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; userId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; userId: string } } & {
              json: UpdateMerchantUserRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/webhooks': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: ListWebhooksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: { pageNumber?: number | undefined; pageSize?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateMerchantWebhookRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/webhooks/:webhookId': {
      $get:
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: UpdateMerchantWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/webhooks/:webhookId/generateHmac': {
      $post:
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: GenerateHmacKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; webhookId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/webhooks/:webhookId/test': {
      $post:
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: TestWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; webhookId: string } } & {
              json: TestWebhookRequest
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stores': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
                merchantId?: string | undefined
              }
            }
            output: ListStoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
                merchantId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
                merchantId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
                merchantId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
                merchantId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                reference?: string | undefined
                merchantId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: StoreCreationWithMerchantCodeRequest }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoreCreationWithMerchantCodeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoreCreationWithMerchantCodeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoreCreationWithMerchantCodeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoreCreationWithMerchantCodeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: StoreCreationWithMerchantCodeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stores/:storeId': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: Store
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { storeId: string } } & { json: UpdateStoreRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stores/:storeId/terminalLogos': {
      $get:
        | {
            input: { param: { storeId: string } } & { query: { model: string } }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { storeId: string } } & { query: { model: string } } & { json: Logo }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { storeId: string } } & { query: { model: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stores/:storeId/terminalSettings': {
      $get:
        | {
            input: { param: { storeId: string } }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { storeId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { storeId: string } } & { json: TerminalSettings }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { storeId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { storeId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/terminals': {
      $get:
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                otpQuery?: string | undefined
                countries?: string | undefined
                merchantIds?: string | undefined
                storeIds?: string | undefined
                brandModels?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ListTerminalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                otpQuery?: string | undefined
                countries?: string | undefined
                merchantIds?: string | undefined
                storeIds?: string | undefined
                brandModels?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                otpQuery?: string | undefined
                countries?: string | undefined
                merchantIds?: string | undefined
                storeIds?: string | undefined
                brandModels?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                otpQuery?: string | undefined
                countries?: string | undefined
                merchantIds?: string | undefined
                storeIds?: string | undefined
                brandModels?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                otpQuery?: string | undefined
                countries?: string | undefined
                merchantIds?: string | undefined
                storeIds?: string | undefined
                brandModels?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                otpQuery?: string | undefined
                countries?: string | undefined
                merchantIds?: string | undefined
                storeIds?: string | undefined
                brandModels?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/terminals/scheduleActions': {
      $post:
        | {
            input: { json: ScheduleTerminalActionsRequest }
            output: ScheduleTerminalActionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScheduleTerminalActionsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ScheduleTerminalActionsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ScheduleTerminalActionsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ScheduleTerminalActionsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ScheduleTerminalActionsRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/terminals/:terminalId/reassign': {
      $post:
        | {
            input: { param: { terminalId: string } } & { json: TerminalReassignmentRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalReassignmentRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalReassignmentRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalReassignmentRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalReassignmentRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalReassignmentRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/terminals/:terminalId/terminalLogos': {
      $get:
        | {
            input: { param: { terminalId: string } }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { terminalId: string } } & { json: Logo }
            output: Logo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terminalId: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { terminalId: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { terminalId: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { terminalId: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { terminalId: string } } & { json: Logo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/terminals/:terminalId/terminalSettings': {
      $get:
        | {
            input: { param: { terminalId: string } }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { terminalId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { terminalId: string } } & { json: TerminalSettings }
            output: TerminalSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { terminalId: string } } & { json: TerminalSettings }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/campaignManagement': {
      $post:
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DonationCampaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { companyId: string } } & { json: DonationCampaignRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/:companyId/campaignManagement/accountHolders/:accountHolderId': {
      $get:
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ListDonationCampaignsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { companyId: string; accountHolderId: string } } & {
              query: {
                status?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/:companyId/campaignManagement/:donationCampaignId': {
      $delete:
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DonationCampaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { companyId: string; donationCampaignId: string } } & {
              json: DonationCampaignUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/:companyId/campaignManagement/:donationCampaignId/status/:status': {
      $post:
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DonationCampaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                companyId: string
                donationCampaignId: string
                status: CampaignStatusTransition
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/:companyId/clientCertificates': {
      $get:
        | {
            input: { param: { companyId: string } }
            output: CertificateSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { companyId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: ClientCertificateWithChain
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { companyId: string } } & { json: ClientCertificateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/companies/:companyId/nonprofits': {
      $post:
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: ListNonprofitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                searchTerm?: string | undefined
                pageNumber?: number | undefined
                pageSize?: number | undefined
                goal?: string[] | undefined
              }
            } & { json: ListNonprofitsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/:companyId/terminalThemes': {
      $get:
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: ListThemesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { companyId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: CreateThemeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { companyId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalThemes/unapply': {
      $post:
        | { input: { param: { companyId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { companyId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { companyId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { companyId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { companyId: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/companies/:companyId/terminalThemes/:id': {
      $get:
        | {
            input: { param: { companyId: string; id: string } }
            output: ThemeWithAssetDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: UpdateThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { companyId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalThemes/:id/apply': {
      $post:
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalThemes/:id/assets': {
      $post:
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: ThemeAsset
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/companies/:companyId/terminalThemes/:id/assets/replace': {
      $post:
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: ThemeAsset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { companyId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalThemes': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: ListThemesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                pageSize?: number | undefined
                page?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: CreateThemeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: CreateThemeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalThemes/unapply': {
      $post:
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalThemes/:id': {
      $get:
        | {
            input: { param: { merchantId: string; id: string } }
            output: ThemeWithAssetDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: UpdateThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { merchantId: string; id: string } } & { json: ThemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalThemes/:id/apply': {
      $post:
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalThemes/:id/assets': {
      $post:
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: ThemeAsset
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/terminalThemes/:id/assets/replace': {
      $post:
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: ThemeAsset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { merchantId: string; id: string } } & {
              query: {
                type:
                  | 'logo'
                  | 'homeScreen'
                  | 'idleScreen'
                  | 'afterPaymentScreen'
                  | 'shopperEngagementScreen'
                model:
                  | 'All'
                  | 'SFO1'
                  | 'M450'
                  | 'S1F2'
                  | 'S1E2L'
                  | 'S1F2L'
                  | 'S1F4Pro'
                  | 'S1E4Pro'
                  | 'S1U2'
                  | 'S1U2M4'
                  | 'LDN1'
                  | 'AMS1'
                  | 'P630'
              }
            } & { form: AssetUploadRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stores/:storeId/terminalThemes/unapply': {
      $post:
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { storeId: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/stores/:storeId/terminalThemes/:id/apply': {
      $post:
        | {
            input: { param: { storeId: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { storeId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { storeId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { storeId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { storeId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/terminals/:terminalId/terminalThemes/unapply': {
      $post:
        | {
            input: { param: { terminalId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { terminalId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { terminalId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { terminalId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { terminalId: string } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { terminalId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/terminals/:terminalId/terminalThemes/:id/apply': {
      $post:
        | {
            input: { param: { terminalId: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { terminalId: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { terminalId: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { terminalId: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { terminalId: string; id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { terminalId: string; id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
