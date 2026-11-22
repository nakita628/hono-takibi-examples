type ResourceId = string
type SelfLink = { href: string }
type ThreeDSecure = {
  _links?: SelfLink[] | undefined
  amount: number
  cavv?: string | undefined
  createdTime?: {} | undefined
  currency: {}
  customerId: {}
  eci?: number | undefined
  enrolled: 'Y' | 'N' | 'U'
  enrollmentEci: string
  gatewayAccountId: {}
  id?: {} | undefined
  payerAuthResponseStatus?: 'Y' | 'N' | 'U' | 'A' | undefined
  paymentCardId: {}
  signatureVerification?: 'Y' | 'N' | undefined
  websiteId: {}
  xid?: string | undefined
}
type Error = {
  type?: string | undefined
  status?: number | undefined
  title?: string | undefined
  detail?: string | undefined
  error?: string | undefined
}
type InvalidError = {
  type?: string | undefined
  status?: number | undefined
  title?: string | undefined
  detail?: string | undefined
  error?: string | undefined
  invalidFields?: { field?: string | undefined; message?: string | undefined }[] | undefined
}
type AML = {
  _links?: SelfLink[] | undefined
  address?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        birthplace?: boolean | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        region?: (string | null) | undefined
      }[]
    | undefined
  aliases?:
    | {
        authenticity?: 'strong' | 'weak' | 'unknown' | undefined
        firstName?: string | undefined
        lastName?: string | undefined
      }[]
    | undefined
  comments?: (string | null) | undefined
  confidence?: 'weak' | 'medium' | 'strong' | 'very-strong' | undefined
  dob?: string[] | undefined
  firstName?: string | undefined
  gender?: (string | null) | undefined
  lastName?: (string | null) | undefined
  legalBasis?: string[] | undefined
  nationality?: string | undefined
  passport?: { number?: string | undefined; registrationDate?: string | undefined }[] | undefined
  regime?: (string | null) | undefined
  source?: string | undefined
  sourceType?: 'pep' | 'sanctions' | 'adverse-media' | undefined
  title?: (string[] | null) | undefined
  type?: 'individual' | 'entity' | undefined
}
type FileDownloadLink = { href: string }
type SignedLinkLink = { href: string }
type PermalinkLink = { href: string }
type File2 = {
  _links?: (SelfLink | FileDownloadLink | SignedLinkLink | PermalinkLink)[] | undefined
  createdTime?: {} | undefined
  description?: string | undefined
  extension?: string | undefined
  height?: number | undefined
  id?: {} | undefined
  isPublic?: boolean | undefined
  mime?: 'image/png' | 'image/jpeg' | 'image/gif' | 'application/pdf' | 'audio/mpeg' | undefined
  name?: string | undefined
  sha1?: string | undefined
  size?: number | undefined
  tags?: string[] | undefined
  updatedTime?: {} | undefined
  width?: number | undefined
}
type FileEmbed = { file?: File2 | undefined }
type FileLink = { href: string }
type AttachmentResourceLink = { href: string }
type Attachment = {
  _embedded?: FileEmbed[] | undefined
  _links?: (SelfLink | FileLink | AttachmentResourceLink)[] | undefined
  createdTime?: {} | undefined
  description?: string | undefined
  fileId: string
  id?: {} | undefined
  name?: string | undefined
  relatedId: string
  relatedType:
    | 'customer'
    | 'dispute'
    | 'gateway-timeline-comment'
    | 'invoice'
    | 'organization'
    | 'payment'
    | 'plan'
    | 'product'
    | 'subscription'
    | 'transaction'
    | 'customer-timeline-comment'
    | 'transaction-timeline-comment'
    | 'order-timeline-comment'
  updatedTime?: {} | undefined
}
type AuthenticationOptions = {
  authTokenTtl?: number | undefined
  credentialTtl?: number | undefined
  otpRequired?: boolean | undefined
  passwordPattern?: string | undefined
  resetTokenTtl?: number | undefined
}
type AuthenticationToken = {
  credentialId?: {} | undefined
  mode?: 'password' | 'passwordless' | undefined
  otpRequired?: boolean | undefined
  token?: string | undefined
}
type CustomerLink = { href: string }
type Acl = {
  permissions: {}
  scope: {
    customFieldName?: string[] | undefined
    organizationId?: {}[] | undefined
    planId?: {}[] | undefined
    productId?: {}[] | undefined
  }
}[]
type CustomerJWT = {
  _links?: CustomerLink[] | undefined
  acl?: Acl | undefined
  createdTime?: string | undefined
  customClaims?: { [x: string]: unknown } | undefined
  customerId?: {} | undefined
  expiredTime?: string | undefined
  id?: {} | undefined
  invalidate?: boolean | undefined
  oneTimePassword?: string | undefined
  token?: string | undefined
  type?: 'customer' | undefined
  updatedTime?: {} | undefined
}
type ContactEmails = { label: string; primary?: boolean | undefined; value: string }[]
type ContactPhoneNumbers = { label: string; primary?: boolean | undefined; value: string }[]
type ResourceCustomFields = { [x: string]: unknown }
type BrowserData = {
  colorDepth: number
  isJavaEnabled: boolean
  language: string
  screenHeight: number
  screenWidth: number
  timeZoneOffset: number
}
type HttpHeaders = { [x: string]: string }
type RiskMetadata = {
  accuracyRadius?: number | undefined
  browserData?: BrowserData | undefined
  city?: string | undefined
  country?: string | undefined
  deviceVelocity?: number | undefined
  distance?: number | undefined
  fingerprint?: string | undefined
  hasMismatchedBankCountry?: boolean | undefined
  hasMismatchedBillingAddressCountry?: boolean | undefined
  hasMismatchedHolderName?: boolean | undefined
  hasMismatchedTimeZone?: boolean | undefined
  httpHeaders?: HttpHeaders | undefined
  ipAddress?: string | undefined
  isHosting?: boolean | undefined
  isProxy?: boolean | undefined
  isTor?: boolean | undefined
  isVpn?: boolean | undefined
  isp?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  paymentInstrumentVelocity?: number | undefined
  postalCode?: string | undefined
  region?: string | undefined
  score?: number | undefined
  timeZone?: string | undefined
  vpnServiceName?: string | undefined
}
type LeadSource = {
  _links?: (SelfLink | CustomerLink)[] | undefined
  affiliate?: string | undefined
  campaign?: string | undefined
  clickId?: string | undefined
  content?: string | undefined
  createdTime?: {} | undefined
  medium?: string | undefined
  path?: string | undefined
  referrer?: string | undefined
  salesAgent?: string | undefined
  source?: string | undefined
  subAffiliate?: string | undefined
  term?: string | undefined
  original?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
      }
    | undefined
}
type LeadSourceEmbed = { leadSource?: LeadSource | undefined }
type DefaultPaymentInstrumentLink = { href: string }
type LeadSourceLink = { href: string }
type WebsiteLink = { href: string }
type CustomerAverageValue = {
  amount?: number | undefined
  amountUsd?: number | undefined
  currency?: {} | undefined
}
type VaultedInstrument = { method: {}; paymentInstrumentId: {} }
type PaymentMethod =
  | 'payment-card'
  | 'ach'
  | 'cash'
  | 'check'
  | 'paypal'
  | 'AdvCash'
  | 'Airpay'
  | 'Alfa-click'
  | 'Alipay'
  | 'Apple Pay'
  | 'AstroPay Card'
  | 'AstroPay-GO'
  | 'bank-transfer'
  | 'bank-transfer-2'
  | 'bank-transfer-3'
  | 'bank-transfer-4'
  | 'bank-transfer-5'
  | 'bank-transfer-6'
  | 'bank-transfer-7'
  | 'bank-transfer-8'
  | 'bank-transfer-9'
  | 'Beeline'
  | 'Belfius-direct-net'
  | 'bitcoin'
  | 'Boleto'
  | 'Boleto-2'
  | 'Boleto-3'
  | 'cash-deposit'
  | 'CASHlib'
  | 'CashToCode'
  | 'CCAvenue'
  | 'China UnionPay'
  | 'CODVoucher'
  | 'Conekta-oxxo'
  | 'Conekta-spei'
  | 'cryptocurrency'
  | 'Cupon-de-pagos'
  | 'CyberSource'
  | 'domestic-cards'
  | 'echeck'
  | 'ecoPayz'
  | 'ecoVoucher'
  | 'EPS'
  | 'ePay.bg'
  | 'Ethereum'
  | 'e-wallet'
  | 'ezyEFT'
  | 'eZeeWallet'
  | 'Flexepin'
  | 'Giropay'
  | 'Google Pay'
  | 'Gpaysafe'
  | 'iDebit'
  | 'iDEAL'
  | 'ING-homepay'
  | 'INOVAPAY-pin'
  | 'INOVAPAY-wallet'
  | 'InstaDebit'
  | 'instant-bank-transfer'
  | 'Interac-online'
  | 'Interac-eTransfer'
  | 'Interac-express-connect'
  | 'Interac'
  | 'invoice'
  | 'iWallet'
  | 'Jeton'
  | 'jpay'
  | 'Khelocard'
  | 'Klarna'
  | 'Litecoin'
  | 'loonie'
  | 'LPG-online'
  | 'LPG-payment-card'
  | 'Megafon'
  | 'MiFinity-eWallet'
  | 'miscellaneous'
  | 'Bancontact'
  | 'MTS'
  | 'MuchBetter'
  | 'MyFatoorah'
  | 'Neosurf'
  | 'Netbanking'
  | 'Neteller'
  | 'Nordea-Solo'
  | 'OchaPay'
  | 'online-bank-transfer'
  | 'Onlineueberweisen'
  | 'oriental-wallet'
  | 'OXXO'
  | 'Pagsmile-lottery'
  | 'Pagsmile-deposit-express'
  | 'PayCash'
  | 'Payeer'
  | 'PaymentAsia-crypto'
  | 'Paysafecard'
  | 'PayTabs'
  | 'Pay4Fun'
  | 'Paymero'
  | 'Paymero-QR'
  | 'PayULatam'
  | 'Perfect-money'
  | 'Piastrix'
  | 'PIX'
  | 'PinPay'
  | 'phone'
  | 'PhonePe'
  | 'POLi'
  | 'PostFinance-card'
  | 'PostFinance-e-finance'
  | 'Przelewy24'
  | 'QIWI'
  | 'QQPay'
  | 'Resurs'
  | 'SEPA'
  | 'Siirto'
  | 'Skrill'
  | 'Skrill Rapid Transfer'
  | 'SMSVoucher'
  | 'Sofort'
  | 'SparkPay'
  | 'swift-dbt'
  | 'Tele2'
  | 'Terminaly-RF'
  | 'Tether'
  | 'ToditoCash-card'
  | 'Trustly'
  | 'TWINT'
  | 'UniCrypt'
  | 'UPayCard'
  | 'UPI'
  | 'VCreditos'
  | 'VenusPoint'
  | 'voucher'
  | 'voucher-2'
  | 'voucher-3'
  | 'voucher-4'
  | 'Webmoney'
  | 'Webpay'
  | 'Webpay-2'
  | 'Webpay Card'
  | 'WeChat Pay'
  | 'XPay-P2P'
  | 'XPay-QR'
  | 'Yandex-money'
  | 'Zotapay'
  | 'Zimpler'
type AlternativePaymentInstrument = {
  method: PaymentMethod
  paymentInstrumentId?: { [x: string]: unknown } | undefined
}
type CashInstrument = { method: 'cash'; receivedBy?: string | undefined }
type CheckInstrument = { method: 'cash'; reference?: string | undefined }
type PaymentInstrument =
  | VaultedInstrument
  | AlternativePaymentInstrument
  | CashInstrument
  | CheckInstrument
type CustomerLifetimeRevenue = {
  amount?: number | undefined
  amountUsd?: number | undefined
  currency?: {} | undefined
}
type ContactObject = {
  address?: (string | null) | undefined
  address2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  emails?: ContactEmails | undefined
  firstName?: (string | null) | undefined
  hash?: string | undefined
  lastName?: (string | null) | undefined
  organization?: (string | null) | undefined
  phoneNumbers?: ContactPhoneNumbers | undefined
  postalCode?: (string | null) | undefined
  region?: (string | null) | undefined
}
type Tag = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  id?: {} | undefined
  name: string
  updatedTime?: {} | undefined
}
type Customer = {
  _embedded?: LeadSourceEmbed[] | undefined
  _links?: (SelfLink | DefaultPaymentInstrumentLink | LeadSourceLink | WebsiteLink)[] | undefined
  averageValue?: CustomerAverageValue | undefined
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  defaultPaymentInstrument?: PaymentInstrument | undefined
  email?: string | undefined
  firstName?: string | undefined
  id?: {} | undefined
  invoiceCount?: number | undefined
  lastName?: string | undefined
  lastPaymentTime?: {} | undefined
  lifetimeRevenue?: CustomerLifetimeRevenue | undefined
  paymentCount?: number | undefined
  paymentToken?: string | undefined
  primaryAddress?: ContactObject | undefined
  revision?: number | undefined
  tags?: Tag[] | undefined
  updatedTime?: {} | undefined
  websiteId?: {} | undefined
}
type CustomerEmbed = { customer?: Customer | undefined }
type BankAccount = {
  accountNumberType?: 'BBAN' | 'IBAN' | undefined
  accountType?: 'checking' | 'savings' | 'other' | undefined
  bankName?: string | undefined
  bic?: string | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  customerId?: {} | undefined
  fingerprint?: string | undefined
  id?: {} | undefined
  last4?: string | undefined
  method?: 'ach' | undefined
  riskMetadata?: RiskMetadata | undefined
  routingNumber?: string | undefined
  status?: 'active' | 'deactivated' | undefined
  updatedTime?: {} | undefined
  _embedded?: CustomerEmbed[] | undefined
  _links?: (SelfLink | CustomerLink)[] | undefined
}
type BankAccountCreateToken = {
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  token: string
}
type BBANType = {
  accountNumber: string
  accountNumberType: 'IBAN' | 'BBAN'
  accountType: 'checking' | 'savings' | 'other'
  bankName?: string | undefined
  bic?: string | undefined
  billingAddress: {
    address?: (string | null) | undefined
    address2?: (string | null) | undefined
    city?: (string | null) | undefined
    country?: (string | null) | undefined
    emails?: ContactEmails | undefined
    firstName?: (string | null) | undefined
    hash?: string | undefined
    lastName?: (string | null) | undefined
    organization?: (string | null) | undefined
    phoneNumbers?: ContactPhoneNumbers | undefined
    postalCode?: (string | null) | undefined
    region?: (string | null) | undefined
  }
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  method: 'ach'
  riskMetadata?: RiskMetadata | undefined
  routingNumber: string
}
type IBANType = {
  accountNumber: string
  accountNumberType: 'IBAN' | 'BBAN'
  bankName?: string | undefined
  bic?: string | undefined
  billingAddress: {
    address?: (string | null) | undefined
    address2?: (string | null) | undefined
    city?: (string | null) | undefined
    country?: (string | null) | undefined
    emails?: ContactEmails | undefined
    firstName?: (string | null) | undefined
    hash?: string | undefined
    lastName?: (string | null) | undefined
    organization?: (string | null) | undefined
    phoneNumbers?: ContactPhoneNumbers | undefined
    postalCode?: (string | null) | undefined
    region?: (string | null) | undefined
  }
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  method: 'ach'
  riskMetadata?: RiskMetadata | undefined
}
type BankAccountCreatePlain = BBANType | IBANType
type BankAccountUpdatePlain = {
  accountType?: 'checking' | 'savings' | 'other' | undefined
  bankName?: string | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  customFields?: ResourceCustomFields | undefined
}
type Blocklist = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: string | undefined
  id?: {} | undefined
  type:
    | 'payment-card'
    | 'bank-account'
    | 'customer-id'
    | 'email'
    | 'email-domain'
    | 'ip-address'
    | 'country'
    | 'fingerprint'
    | 'bin'
    | 'address'
  updatedTime?: {} | undefined
  value: string
}
type Discount = { type?: 'fixed' | 'percent' | undefined }
type CouponRestriction = {
  type:
    | 'discounts-per-redemption'
    | 'minimum-order-amount'
    | 'redemptions-per-customer'
    | 'restrict-to-invoices'
    | 'restrict-to-plans'
    | 'restrict-to-subscriptions'
    | 'restrict-to-products'
    | 'total-redemptions'
    | 'paid-by-time'
}
type Coupon = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  description?: string | undefined
  discount: Discount
  expiredTime?: string | undefined
  id?: {} | undefined
  issuedTime: string
  redemptionsCount?: number | undefined
  restrictions?: CouponRestriction[] | undefined
  status?: 'draft' | 'issued' | 'expired' | undefined
  updatedTime?: {} | undefined
}
type RedemptionRestriction = {
  type:
    | 'discounts-per-redemption'
    | 'minimum-order-amount'
    | 'restrict-to-invoices'
    | 'restrict-to-plans'
    | 'restrict-to-subscriptions'
    | 'restrict-to-products'
    | 'paid-by-time'
}
type CouponRedemption = {
  _links?: SelfLink[] | undefined
  additionalRestrictions?: RedemptionRestriction[] | undefined
  canceledTime?: {} | undefined
  couponId?: {} | undefined
  createdTime?: {} | undefined
  customerId?: {} | undefined
  id?: {} | undefined
}
type CouponExpiration = { expiredTime: string }
type Credential = {
  _links?: (SelfLink | CustomerLink)[] | undefined
  customerId: string
  expiredTime?: string | undefined
  id?: {} | undefined
  password: string
  username: string
}
type CustomField = {
  _links?: SelfLink[] | undefined
  additionalSchema?: { [x: string]: unknown } | undefined
  description?: string | undefined
  name?: string | undefined
  type: 'array' | 'boolean' | 'datetime' | 'integer' | 'number' | 'string' | 'monetary'
}
type CustomerTimelineCustomEvent = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  id?: {} | undefined
  name: string
  updatedTime?: {} | undefined
}
type TimelineAction = {
  action?: 'resend-email' | 'redemption-cancel' | 'ruleset-restore' | undefined
}
type TimelineTable = {
  footer?: string | undefined
  title?: string | undefined
  type?: 'list' | 'one-columns' | 'two-columns' | 'three-columns' | undefined
}
type TimelineExtraData = {
  actions?: TimelineAction[] | undefined
  author?: { userFullName?: string | undefined; userId?: string | undefined } | undefined
  links?:
    | {
        placeholder?: string | undefined
        resourceId?: ResourceId | undefined
        resourceType?:
          | 'kyc-document'
          | 'invoice'
          | 'subscription'
          | 'transaction'
          | 'email-message'
          | 'dispute'
          | 'coupon'
          | undefined
      }[]
    | undefined
  mentions?: { [x: string]: string } | undefined
  tables?: TimelineTable[] | undefined
}
type CustomerTimeline = {
  _links?: SelfLink[] | undefined
  customData?: { [x: string]: unknown } | undefined
  customEventType?: (string | null) | undefined
  extraData?: TimelineExtraData | undefined
  id?: {} | undefined
  message?: string | undefined
  occurredTime?: {} | undefined
  triggeredBy?: 'rebilly' | 'app' | 'direct-api' | undefined
  type?:
    | 'customer-comment-created'
    | 'customer-created'
    | 'primary-address-changed'
    | 'default-payment-instrument-changed'
    | 'lead-source-changed'
    | 'custom-fields-changed'
    | 'coupon-applied'
    | 'coupon-redeemed'
    | 'coupon-redemption-canceled'
    | 'kyc-document-created'
    | 'kyc-document-accepted'
    | 'kyc-document-manually-accepted'
    | 'kyc-document-rejected'
    | 'kyc-document-manually-rejected'
    | 'kyc-document-modified'
    | 'payment-card-expired'
    | 'payment-instrument-created'
    | 'payment-instrument-deactivated'
    | 'customer-bank-account-blocked'
    | 'customer-blocked'
    | 'customer-payment-card-blocked'
    | 'invoice-created'
    | 'invoice-issued'
    | 'invoice-abandoned'
    | 'invoice-voided'
    | 'invoice-past-due'
    | 'invoice-paid'
    | 'invoice-partially-paid'
    | 'invoice-disputed'
    | 'invoice-refunded'
    | 'invoice-partially-refunded'
    | 'order-created'
    | 'order-renewed'
    | 'order-activated'
    | 'order-completed'
    | 'order-reactivated'
    | 'order-canceled'
    | 'order-upgraded'
    | 'order-downgraded'
    | 'order-churned'
    | 'order-paid-early'
    | 'transaction-approved'
    | 'transaction-canceled'
    | 'transaction-declined'
    | 'transaction-abandoned'
    | 'transaction-refunded'
    | 'transaction-voided'
    | 'transaction-discrepancy-found'
    | 'transaction-amount-discrepancy-found'
    | 'email-message-sent'
    | 'custom-event-processed'
    | 'custom-event'
    | 'transaction-waiting-gateway'
    | 'aml-list-was-possibly-matched'
    | 'experian-check-performed'
    | undefined
}
type Product = {
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  description?: string | undefined
  id?: {} | undefined
  name: string
  options?: string[] | undefined
  requiresShipping?: boolean | undefined
  unitLabel?: string | undefined
  updatedTime?: {} | undefined
  _links?: SelfLink[] | undefined
  accountingCode?: string | undefined
  taxCategoryId?:
    | '00000'
    | '99999'
    | '20010'
    | '40030'
    | '51020'
    | '51010'
    | '31000'
    | '30070'
    | undefined
}
type ProductEmbed = { product?: Product | undefined }
type PlanPriceFormula = { formula: 'fixed-fee' | 'flat-rate' | 'stairstep' | 'tiered' | 'volume' }
type PlanBillingTiming = 'prepaid' | 'postpaid'
type PlanPeriod = { length: number; unit: 'day' | 'week' | 'month' | 'year' }
type TimeUnit = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
type TimePluralUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years'
type DueTimeShiftInstruction = { duration: number; unit: TimeUnit | TimePluralUnit }
type IssueTimeShiftInstruction = {
  chronology: 'before'
  duration: number
  unit: TimeUnit | TimePluralUnit
}
type Plan = {
  createdTime?: {} | undefined
  currency: {}
  currencySign?: string | undefined
  customFields?: ResourceCustomFields | undefined
  id?: {} | undefined
  isTrialOnly?: boolean | undefined
  name: string
  pricing: PlanPriceFormula
  productId: {}
  productOptions?: { [x: string]: string } | undefined
  recurringInterval?:
    | {
        length: number
        unit: 'day' | 'week' | 'month' | 'year'
        billingTiming?: PlanBillingTiming | undefined
        limit?: number | undefined
      }
    | undefined
  revision?: number | undefined
  setup?: { price: number } | undefined
  trial?: { period: PlanPeriod; price: number } | undefined
  updatedTime?: {} | undefined
  _links?: SelfLink[] | undefined
  invoiceTimeShift?:
    | {
        dueTimeShift?: DueTimeShiftInstruction | undefined
        issueTimeShift?: IssueTimeShiftInstruction | undefined
      }
    | undefined
}
type PlanEmbed = { plan?: Plan | undefined }
type ProductLink = { href: string }
type InvoiceItem = {
  _embedded?: (ProductEmbed | PlanEmbed)[] | undefined
  _links?: (SelfLink | ProductLink)[] | undefined
  createdTime?: {} | undefined
  description?: string | undefined
  discountAmount?: number | undefined
  id?: {} | undefined
  periodEndTime?: string | undefined
  periodNumber?: number | undefined
  periodStartTime?: string | undefined
  price?: number | undefined
  productId?: {} | undefined
  quantity?: number | undefined
  type: 'debit' | 'credit'
  unitPrice: number
  updatedTime?: {} | undefined
}
type InvoiceShipping = { calculator: 'manual' | 'rebilly' }
type InvoiceTax = { amount?: number | undefined; calculator: 'manual' | 'rebilly-taxjar' }
type WebsiteEmbed = { website?: { [x: string]: unknown } | undefined }
type OrganizationQuestionnaire = {
  integrationType?: string | undefined
  launchTiming?: string | undefined
  monthlyTransactions?: string | undefined
  products?: string[] | undefined
  role?: string | undefined
}
type Organization = {
  _links?: SelfLink[] | undefined
  address?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country: string
  createdTime?: {} | undefined
  emails?: ContactEmails | undefined
  id?: {} | undefined
  invoiceTimeZone?: string | undefined
  isPrimary?: boolean | undefined
  name: string
  phoneNumbers?: ContactPhoneNumbers | undefined
  postalCode?: string | undefined
  questionnaire?: OrganizationQuestionnaire | undefined
  region?: string | undefined
  taxDescriptor?: string | undefined
  updatedTime?: {} | undefined
}
type OrganizationEmbed = { organization?: Organization | undefined }
type OrganizationLink = { href: string }
type TransactionAllocationsLink = { href: string }
type RecalculateInvoiceLink = { href: string }
type SubscriptionLink = { href: string }
type InvoiceRetryScheduleInstruction = {
  method: 'intelligent' | 'immediately' | 'date-interval' | 'day-of-month' | 'day-of-week'
}
type InstrumentReference = { method: PaymentMethod; paymentInstrumentId?: {} | undefined }
type ParentTransactionEmbed = { parentTransaction?: Transaction | undefined }
type RetriedTransactionEmbed = { retriedTransaction?: Transaction | undefined }
type OnBoardingUrlLink = { href: string }
type DynamicIpnLink = { href: string }
type StaticIpnLink = { href: string }
type DigitalWallets = {
  applePay?: { isEnabled: boolean } | undefined
  googlePay?:
    | { isEnabled: boolean; merchantName?: string | undefined; merchantOrigin?: string | undefined }
    | undefined
}
type GatewayName =
  | 'A1Gateway'
  | 'Adyen'
  | 'Airpay'
  | 'AmexVPC'
  | 'ApcoPay'
  | 'AsiaPaymentGateway'
  | 'AstroPayCard'
  | 'AuthorizeNet'
  | 'Bambora'
  | 'BitPay'
  | 'BlueSnap'
  | 'BraintreePayments'
  | 'Cardknox'
  | 'Cashflows'
  | 'CASHlib'
  | 'CashToCode'
  | 'CauriPayment'
  | 'Cayan'
  | 'CCAvenue'
  | 'Chase'
  | 'Circle'
  | 'Citadel'
  | 'Clearhaus'
  | 'CODVoucher'
  | 'CoinPayments'
  | 'Conekta'
  | 'Coppr'
  | 'Credorax'
  | 'Cryptonator'
  | 'CyberSource'
  | 'DataCash'
  | 'Dengi'
  | 'Dragonphoenix'
  | 'Directa24'
  | 'dLocal'
  | 'EBANX'
  | 'ecoPayz'
  | 'EcorePay'
  | 'Elavon'
  | 'Euteller'
  | 'eMerchantPay'
  | 'EMS'
  | 'EPG'
  | 'EPro'
  | 'eZeeWallet'
  | 'ezyEFT'
  | 'Finrax'
  | 'Flexepin'
  | 'FinTecSystems'
  | 'FundSend'
  | 'Forte'
  | 'GET'
  | 'Gigadat'
  | 'GlobalOnePay'
  | 'Gooney'
  | 'Gpaysafe'
  | 'Greenbox'
  | 'HiPay'
  | 'iCanPay'
  | 'ICEPAY'
  | 'iCheque'
  | 'iDebit'
  | 'Ilixium'
  | 'Ingenico'
  | 'INOVAPAY'
  | 'Inovio'
  | 'Intuit'
  | 'InstaDebit'
  | 'IpayOptions'
  | 'JetPay'
  | 'Jeton'
  | 'Khelocard'
  | 'Konnektive'
  | 'loonie'
  | 'LPG'
  | 'MiFinity'
  | 'Moneris'
  | 'MtaPay'
  | 'MuchBetter'
  | 'MyFatoorah'
  | 'Neosurf'
  | 'Netbanking'
  | 'Neteller'
  | 'NGenius'
  | 'NinjaWallet'
  | 'NMI'
  | 'NuaPay'
  | 'OchaPay'
  | 'Onlineueberweisen'
  | 'OnRamp'
  | 'Pagsmile'
  | 'Panamerican'
  | 'ParamountEft'
  | 'ParamountInterac'
  | 'PandaGateway'
  | 'Pay4Fun'
  | 'PayCash'
  | 'PayClub'
  | 'Payeezy'
  | 'Payflow'
  | 'PaymentAsia'
  | 'PaymenTechnologies'
  | 'PaymentsOS'
  | 'Paymero'
  | 'PayPal'
  | 'Payr'
  | 'Paysafe'
  | 'Paysafecash'
  | 'PayTabs'
  | 'PayULatam'
  | 'Payvision'
  | 'Piastrix'
  | 'Plugnpay'
  | 'PostFinance'
  | 'Prosa'
  | 'Rapyd'
  | 'Realex'
  | 'Realtime'
  | 'Redsys'
  | 'Rotessa'
  | 'RPN'
  | 'SaltarPay'
  | 'Sagepay'
  | 'SeamlessChex'
  | 'SecureTrading'
  | 'SecurionPay'
  | 'Skrill'
  | 'SmartInvoice'
  | 'SMSVoucher'
  | 'Sofort'
  | 'SparkPay'
  | 'StaticGateway'
  | 'Stripe'
  | 'TestProcessor'
  | 'ToditoCash'
  | 'TrustPay'
  | 'TrustsPay'
  | 'Trustly'
  | 'TWINT'
  | 'UPayCard'
  | 'USAePay'
  | 'VantivLitle'
  | 'vegaaH'
  | 'VCreditos'
  | 'Wallet88'
  | 'Walpay'
  | 'Wirecard'
  | 'WorldlineAtosFrankfurt'
  | 'Worldpay'
  | 'XPay'
  | 'Zimpler'
  | 'Zotapay'
type PaymentCardBrand =
  | 'Visa'
  | 'MasterCard'
  | 'American Express'
  | 'Discover'
  | 'Maestro'
  | 'Solo'
  | 'Electron'
  | 'JCB'
  | 'Voyager'
  | 'Diners Club'
  | 'Switch'
  | 'Laser'
  | 'China UnionPay'
  | 'AstroPay Card'
type GatewayAccount = {
  _links?: (SelfLink | OnBoardingUrlLink | DynamicIpnLink | StaticIpnLink)[] | undefined
  acceptedCurrencies: string[]
  acquirerName?: {} | undefined
  additionalFilters?: string | undefined
  approvalWindowTtl?: number | undefined
  cityField?: string | undefined
  createdTime?: {} | undefined
  dccForceCurrency?: string | undefined
  dccMarkup?: number | undefined
  descriptor?: string | undefined
  digitalWallets?: DigitalWallets | undefined
  dynamicDescriptor?: boolean | undefined
  excludedDccQuoteCurrencies?: string[] | undefined
  gatewayName: GatewayName
  id?: {} | undefined
  isDown?: boolean | undefined
  merchantCategoryCode?: string | undefined
  method: PaymentMethod
  monthlyLimit?: number | undefined
  organizationId?: {} | undefined
  paymentCardSchemes?: PaymentCardBrand[] | undefined
  reconciliationWindowEnabled?: boolean | undefined
  reconciliationWindowTtl?: number | undefined
  status?: 'active' | 'inactive' | 'pending' | 'closed' | undefined
  sticky?: boolean | undefined
  threeDSecure?: boolean | undefined
  timeout?: (number | null) | undefined
  token?: string | undefined
  updatedTime?: {} | undefined
}
type GatewayAccountEmbed = { gatewayAccount?: GatewayAccount | undefined }
type AuthTransactionEmbed = { authTransaction?: Transaction | undefined }
type AuthTransactionLink = { href: string }
type ApprovalUrlLink = { href: string }
type PaymentCard = {
  bankCountry?: string | undefined
  bankName?: string | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  bin?: string | undefined
  brand?: {} | undefined
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  customerId?: {} | undefined
  cvv?: string | undefined
  expMonth?: number | undefined
  expYear?: number | undefined
  fingerprint?: string | undefined
  id?: {} | undefined
  last4?: string | undefined
  method?: 'payment-card' | undefined
  pan?: string | undefined
  riskMetadata?: RiskMetadata | undefined
  status?: 'active' | 'inactive' | 'expired' | 'deactivated' | 'verification-needed' | undefined
  updatedTime?: {} | undefined
  _embedded?: (AuthTransactionEmbed | CustomerEmbed)[] | undefined
  _links?: (SelfLink | CustomerLink | AuthTransactionLink | ApprovalUrlLink)[] | undefined
  expirationReminderNumber?: number | undefined
  expirationReminderTime?: {} | undefined
  stickyGatewayAccountId?: string | undefined
}
type PaymentCardEmbed = { paymentCard?: PaymentCard | undefined }
type BankAccountEmbed = { bankAccount?: BankAccount | undefined }
type InvoicesEmbed = { invoices?: Invoice[] | undefined }
type GatewayAccountLink = { href: string }
type PaymentCardLink = { href: string }
type ParentTransactionLink = { href: string }
type RetriedTransactionLink = { href: string }
type RefundUrlLink = { href: string }
type TransactionUpdateUrlLink = { href: string }
type DisputeLink = { href: string }
type InvoicesLink = { href: string }
type QueryUrlLink = { href: string }
type MoneyAmount = number
type CurrencyCode = string
type PurchaseBumpStatus = 'presented' | 'rejected' | 'selected' | 'unknown'
type TransactionNotificationUrl = string
type AmountAdjustment = { method: 'none' | 'partial' | 'discount' }
type CommonScheduleInstruction = {
  method: 'auto' | 'intelligent' | 'immediately' | 'date-interval' | 'day-of-month' | 'day-of-week'
}
type PaymentRetry = {
  afterAttemptPolicy: 'none' | 'change-subscription-renewal-time'
  afterRetryEndPolicy: 'none' | 'cancel-subscription'
  attempts: {
    paymentInstruction: AmountAdjustment
    scheduleInstruction: CommonScheduleInstruction
  }[]
}
type Transaction = {
  '3ds'?:
    | {
        authenticated: 'yes' | 'no' | 'not applicable' | 'attempted'
        enrolled: 'yes' | 'no' | 'invalid card/timeout' | 'unavailable'
        flow?: 'frictionless' | 'challenge' | undefined
        isDowngraded: boolean
        liability: 'protected' | 'not protected' | 'protected (attempt)'
        version?: '1.0.2' | '2.1.0' | '2.2.0' | undefined
      }
    | undefined
  amount?: number | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  billingDescriptor?: string | undefined
  childTransactions?: ResourceId[] | undefined
  createdTime?: {} | undefined
  currency?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  customerId?: {} | undefined
  description?: string | undefined
  gatewayName?: {} | undefined
  has3ds?: boolean | undefined
  hasAmountAdjustment?: boolean | undefined
  id?: {} | undefined
  invoiceIds?: ResourceId[] | undefined
  isRebill?: boolean | undefined
  isRetry?: boolean | undefined
  parentTransactionId?: {} | undefined
  paymentInstrument?: PaymentInstrument | undefined
  planIds?: ResourceId[] | undefined
  processedTime?: {} | undefined
  purchaseAmount?: number | undefined
  purchaseCurrency?: {} | undefined
  rebillNumber?: number | undefined
  redirectUrl?: string | undefined
  requestAmount?: number | undefined
  requestCurrency?: {} | undefined
  requestId?: string | undefined
  result?: 'abandoned' | 'approved' | 'canceled' | 'declined' | 'unknown' | undefined
  retryNumber?: number | undefined
  status?:
    | 'completed'
    | 'conn-error'
    | 'disputed'
    | 'never-sent'
    | 'offsite'
    | 'partially-refunded'
    | 'pending'
    | 'refunded'
    | 'sending'
    | 'suspended'
    | 'timeout'
    | 'voided'
    | 'waiting-approval'
    | 'waiting-capture'
    | 'waiting-gateway'
    | 'waiting-refund'
    | undefined
  subscriptionIds?: ResourceId[] | undefined
  type?:
    | '3ds-authentication'
    | 'authorize'
    | 'capture'
    | 'credit'
    | 'refund'
    | 'sale'
    | 'void'
    | undefined
  updatedTime?: {} | undefined
  websiteId?: {} | undefined
  _embedded?:
    | (
        | ParentTransactionEmbed
        | RetriedTransactionEmbed
        | GatewayAccountEmbed
        | CustomerEmbed
        | LeadSourceEmbed
        | WebsiteEmbed
        | PaymentCardEmbed
        | BankAccountEmbed
        | InvoicesEmbed
      )[]
    | undefined
  _links?:
    | (
        | SelfLink
        | WebsiteLink
        | CustomerLink
        | GatewayAccountLink
        | PaymentCardLink
        | ParentTransactionLink
        | RetriedTransactionLink
        | LeadSourceLink
        | ApprovalUrlLink
        | RefundUrlLink
        | TransactionUpdateUrlLink
        | DisputeLink
        | InvoicesLink
        | QueryUrlLink
      )[]
    | undefined
  acquirerName?: {} | undefined
  arn?: string | undefined
  bin?: string | undefined
  bumpOffer?:
    | {
        language?: {} | undefined
        order?: { amount: MoneyAmount; currency: CurrencyCode } | undefined
        outcome?: PurchaseBumpStatus | undefined
        presentedOffers?: {} | undefined
        selectedOffer?:
          | {
              bumpAmount: {}
              bumpAmountInUsd?: {} | undefined
              customFields?: ResourceCustomFields | undefined
              offerId: string
              offerType: string
            }
          | undefined
        version?: {} | undefined
      }
    | undefined
  dcc?:
    | {
        base?: { amount: MoneyAmount; currency: CurrencyCode } | undefined
        outcome?: 'rejected' | 'selected' | 'unknown' | undefined
        quote?: { amount: MoneyAmount; currency: CurrencyCode } | undefined
        usdMarkup?: {} | undefined
      }
    | undefined
  discrepancyTime?: (string | null) | undefined
  disputeStatus?:
    | 'response-needed'
    | 'under-review'
    | 'forfeited'
    | 'won'
    | 'lost'
    | 'unknown'
    | undefined
  disputeTime?: (string | null) | undefined
  gateway?:
    | {
        avsResponse?:
          | {
              code?: string | undefined
              message?: string | undefined
              originalCode?: string | undefined
              originalMessage?: string | undefined
            }
          | undefined
        cvvResponse?:
          | {
              code?: string | undefined
              message?: string | undefined
              originalCode?: string | undefined
              originalMessage?: string | undefined
            }
          | undefined
        response?:
          | {
              code?: string | undefined
              message?: string | undefined
              originalCode?: string | undefined
              originalMessage?: string | undefined
              type?: string | undefined
            }
          | undefined
      }
    | undefined
  gatewayAccountId?: {} | undefined
  gatewayTransactionId?: {} | undefined
  hadDiscrepancy?: boolean | undefined
  hasBumpOffer?: boolean | undefined
  hasDcc?: boolean | undefined
  isDisputed?: boolean | undefined
  isMerchantInitiated?: boolean | undefined
  isProcessedOutside?: boolean | undefined
  isReconciled?: boolean | undefined
  method?: {} | undefined
  notificationUrl?: TransactionNotificationUrl | undefined
  orderId?: string | undefined
  referenceData?: ({ [x: string]: string } | null) | undefined
  reportAmount?: number | undefined
  reportCurrency?: {} | undefined
  retriedTransactionId?: {} | undefined
  retriesResult?: 'approved' | 'canceled' | 'declined' | 'scheduled' | undefined
  retryInstruction?: PaymentRetry | undefined
  revision?: number | undefined
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  riskScore?: number | undefined
  scheduledTime?: string | undefined
  settlementTime?: (string | null) | undefined
  velocity?: number | undefined
}
type Invoice = {
  abandonedTime?: {} | undefined
  amount?: number | undefined
  amountDue?: number | undefined
  autopayRetryNumber?: number | undefined
  autopayScheduledTime?: string | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  collectionPeriod?: number | undefined
  createdTime?: {} | undefined
  currency: {}
  delinquentCollectionPeriod?: number | undefined
  deliveryAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  discountAmount?: number | undefined
  discounts?:
    | {
        amount?: number | undefined
        couponId?: {} | undefined
        description?: string | undefined
        redemptionId?: {} | undefined
      }[]
    | undefined
  dueTime?: {} | undefined
  id?: {} | undefined
  invoiceNumber?: number | undefined
  issuedTime?: {} | undefined
  items?: InvoiceItem[] | undefined
  notes?: string | undefined
  paidTime?: {} | undefined
  paymentFormUrl?: string | undefined
  poNumber?: (string | null) | undefined
  shipping?: InvoiceShipping | undefined
  status?:
    | 'draft'
    | 'unpaid'
    | 'paid'
    | 'past-due'
    | 'delinquent'
    | 'abandoned'
    | 'voided'
    | 'partially-refunded'
    | 'refunded'
    | 'disputed'
    | undefined
  subscriptionId?: {} | undefined
  subtotalAmount?: number | undefined
  tax?: InvoiceTax | undefined
  updatedTime?: {} | undefined
  voidedTime?: {} | undefined
  websiteId: {}
  _embedded?: (CustomerEmbed | WebsiteEmbed | OrganizationEmbed | LeadSourceEmbed)[] | undefined
  _links?:
    | (
        | SelfLink
        | CustomerLink
        | WebsiteLink
        | OrganizationLink
        | LeadSourceLink
        | TransactionAllocationsLink
        | RecalculateInvoiceLink
        | SubscriptionLink
      )[]
    | undefined
  customerId?: {} | undefined
  dueReminderNumber?: number | undefined
  dueReminderTime?: {} | undefined
  retryInstruction?:
    | {
        afterAttemptPolicies: 'change-subscription-renewal-time'[]
        afterRetryEndPolicies: ('abandon-invoice' | 'cancel-subscription')[]
        attempts: { scheduleInstruction: InvoiceRetryScheduleInstruction }[]
      }
    | undefined
  revision?: number | undefined
  transactions?: Transaction[] | undefined
  type?:
    | 'initial'
    | 'renewal'
    | 'interim'
    | 'cancellation'
    | 'one-time'
    | 'refund'
    | 'charge'
    | undefined
}
type DigitalWalletValidation = { type: 'Apple Pay' }
type TransactionEmbed = { transaction?: Transaction | undefined }
type TransactionLink = { href: string }
type Dispute = {
  _embedded?: TransactionEmbed[] | undefined
  _links?: (SelfLink | TransactionLink)[] | undefined
  acquirerReferenceNumber?: string | undefined
  amount: number
  caseId?: string | undefined
  category?:
    | 'fraud'
    | 'unrecognized'
    | 'product-not-received'
    | 'product-unacceptable'
    | 'product-not-refunded'
    | 'duplicate'
    | 'subscription-canceled'
    | 'uncategorized'
    | undefined
  createdTime?: {} | undefined
  currency: {}
  customerId?: string | undefined
  deadlineTime?: string | undefined
  id?: {} | undefined
  postedTime: string
  rawResponse?: string | undefined
  reasonCode:
    | '1000'
    | '10.1'
    | '10.2'
    | '10.3'
    | '10.4'
    | '10.5'
    | '11.1'
    | '11.2'
    | '11.3'
    | '12'
    | '12.1'
    | '12.2'
    | '12.3'
    | '12.4'
    | '12.5'
    | '12.6'
    | '12.7'
    | '13.1'
    | '13.2'
    | '13.3'
    | '13.4'
    | '13.5'
    | '13.6'
    | '13.7'
    | '13.8'
    | '13.9'
    | '2'
    | '30'
    | '31'
    | '35'
    | '37'
    | '40'
    | '41'
    | '42'
    | '46'
    | '47'
    | '49'
    | '50'
    | '53'
    | '54'
    | '55'
    | '57'
    | '59'
    | '60'
    | '62'
    | '7'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '79'
    | '8'
    | '80'
    | '81'
    | '82'
    | '83'
    | '85'
    | '86'
    | '93'
    | '00'
    | '63'
    | 'A01'
    | 'A02'
    | 'A08'
    | 'F10'
    | 'F14'
    | 'F22'
    | 'F24'
    | 'F29'
    | 'C02'
    | 'C04'
    | 'C05'
    | 'C08'
    | 'C14'
    | 'C18'
    | 'C28'
    | 'C31'
    | 'C32'
    | 'M10'
    | 'M49'
    | 'P01'
    | 'P03'
    | 'P04'
    | 'P05'
    | 'P07'
    | 'P08'
    | 'P22'
    | 'P23'
    | 'R03'
    | 'R13'
    | 'M01'
    | 'FR1'
    | 'FR4'
    | 'FR6'
    | 'AL'
    | 'AP'
    | 'AW'
    | 'CA'
    | 'CD'
    | 'CR'
    | 'DA'
    | 'DP'
    | 'DP1'
    | 'EX'
    | 'IC'
    | 'IN'
    | 'IS'
    | 'LP'
    | 'N'
    | 'NA'
    | 'NC'
    | 'P'
    | 'RG'
    | 'RM'
    | 'RN1'
    | 'RN2'
    | 'SV'
    | 'TF'
    | 'TNM'
    | 'UA01'
    | 'UA02'
    | 'UA32'
    | 'UA99'
    | 'UA03'
    | 'UA10'
    | 'UA11'
    | 'UA12'
    | 'UA18'
    | 'UA20'
    | 'UA21'
    | 'UA22'
    | 'UA23'
    | 'UA28'
    | 'UA30'
    | 'UA31'
    | 'UA38'
    | 'duplicate'
    | 'fraudulent'
    | 'subscription_canceled'
    | 'product_unacceptable'
    | 'product_not_received'
    | 'unrecognized'
    | 'credit_not_processed'
    | 'customer_initiated'
    | 'incorrect_account_details'
    | 'insufficient_funds'
    | 'bank_cannot_process'
    | 'debit_not_authorized'
    | 'general'
    | 'pre-chargeback-alert'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '9'
    | '51'
    | 'A'
    | 'B'
  resolvedTime?: {} | undefined
  status: 'response-needed' | 'under-review' | 'forfeited' | 'won' | 'lost' | 'unknown'
  transactionId: string
  type:
    | 'information-request'
    | 'first-chargeback'
    | 'second-chargeback'
    | 'arbitration'
    | 'fraud'
    | 'ethoca-alert'
    | 'verifi-alert'
  updatedTime?: {} | undefined
}
type FileCreateFromInline = {
  description?: string | undefined
  file: string
  isPublic?: boolean | undefined
  name?: string | undefined
  tags?: string[] | undefined
}
type FileCreateFromUrl = {
  description?: string | undefined
  isPublic?: boolean | undefined
  name?: string | undefined
  tags?: string[] | undefined
  url: string
}
type InvoiceIssue = {
  dueTime?: (string | null) | undefined
  issuedTime?: (string | null) | undefined
}
type InvoiceReissue = { dueTime?: (string | null) | undefined }
type InvoiceTimeline = {
  _links?: SelfLink[] | undefined
  extraData?: TimelineExtraData | undefined
  id?: {} | undefined
  message?: string | undefined
  occurredTime?: {} | undefined
  triggeredBy?: 'rebilly' | 'app' | 'direct-api' | undefined
  type?:
    | 'timeline-comment-created'
    | 'invoice-created'
    | 'invoice-issued'
    | 'invoice-abandoned'
    | 'invoice-voided'
    | 'invoice-past-due'
    | 'invoice-paid'
    | 'invoice-partially-paid'
    | 'invoice-disputed'
    | 'invoice-refunded'
    | 'invoice-partially-refunded'
    | 'invoice-renewal-payment-declined'
    | 'email-message-sent'
    | 'coupon-applied'
    | 'transaction-approved'
    | 'transaction-abandoned'
    | 'transaction-canceled'
    | 'transaction-declined'
    | 'transaction-initiated'
    | 'transaction-refunded'
    | 'transaction-voided'
    | undefined
}
type InvoiceTransaction = { amount?: number | undefined; transactionId: string }
type InvoiceLink = { href: string }
type InvoiceTransactionAllocation = {
  _links?: (InvoiceLink | TransactionLink)[] | undefined
  amount?: number | undefined
  currency?: {} | undefined
  invoiceId?: ResourceId | undefined
  transactionId?: ResourceId | undefined
}
type KycDocumentRejection = {
  message?: string | undefined
  type?:
    | 'document-unreadable'
    | 'document-expired'
    | 'document-not-matching'
    | 'underage-person'
    | 'other'
    | undefined
}
type IdentityMatches = {
  containsImage?: boolean | undefined
  dateOfBirth?: string | undefined
  expiryDate?: string | undefined
  firstName?: string | undefined
  hasMinimalAge?: boolean | undefined
  isIdentityDocument?: boolean | undefined
  isPublishedOnline?: boolean | undefined
  issueDate?: string | undefined
  lastName?: string | undefined
  nationality?: string | undefined
}
type ProofOfIdentity = {
  _links?: (SelfLink | FileLink | CustomerLink)[] | undefined
  createdTime?: {} | undefined
  documentSubtype?: {} | undefined
  documentType: {}
  fileId?: {} | undefined
  fileIds?: {}[] | undefined
  id?: {} | undefined
  processedTime?: {} | undefined
  rejectionReason?: KycDocumentRejection | undefined
  requestId?: {} | undefined
  status: 'pending' | 'in-progress' | 'accepted' | 'rejected'
  updatedTime?: {} | undefined
  customerId?: {} | undefined
  matchLevel?: number | undefined
  notes?: (string | null) | undefined
  reason?: string | undefined
  reviewTime?: {} | undefined
  reviewerId?: {} | undefined
  reviewerName?: (string | null) | undefined
  documentMatches?: { data?: IdentityMatches | undefined; score?: number | undefined } | undefined
  parsedData?: { data?: IdentityMatches | undefined; score?: number | undefined } | undefined
}
type AddressMatches = {
  city?: string | undefined
  date?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  line1?: string | undefined
  phone?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
  uniqueWords?: number | undefined
  uniqueWordsResult?: boolean | undefined
  wordCount?: number | undefined
  wordCountResult?: boolean | undefined
}
type ProofOfAddress = {
  _links?: (SelfLink | FileLink | CustomerLink)[] | undefined
  createdTime?: {} | undefined
  documentSubtype?: {} | undefined
  documentType: {}
  fileId?: {} | undefined
  fileIds?: {}[] | undefined
  id?: {} | undefined
  processedTime?: {} | undefined
  rejectionReason?: KycDocumentRejection | undefined
  requestId?: {} | undefined
  status: 'pending' | 'in-progress' | 'accepted' | 'rejected'
  updatedTime?: {} | undefined
  customerId?: {} | undefined
  matchLevel?: number | undefined
  notes?: (string | null) | undefined
  reason?: string | undefined
  reviewTime?: {} | undefined
  reviewerId?: {} | undefined
  reviewerName?: (string | null) | undefined
  documentMatches?: { data?: AddressMatches | undefined; score?: number | undefined } | undefined
  parsedData?: { data?: AddressMatches | undefined; score?: number | undefined } | undefined
}
type ProofOfFunds = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  documentSubtype?: {} | undefined
  documentType: {}
  fileId?: {} | undefined
  fileIds?: {}[] | undefined
  id?: {} | undefined
  processedTime?: {} | undefined
  rejectionReason?: KycDocumentRejection | undefined
  requestId?: {} | undefined
  status: 'pending' | 'in-progress' | 'accepted' | 'rejected'
  updatedTime?: {} | undefined
  customerId?: {} | undefined
  matchLevel?: number | undefined
  notes?: (string | null) | undefined
  reason?: string | undefined
  reviewTime?: {} | undefined
  reviewerId?: {} | undefined
  reviewerName?: (string | null) | undefined
}
type ProofOfPurchase = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  documentSubtype?: {} | undefined
  documentType: {}
  fileId?: {} | undefined
  fileIds?: {}[] | undefined
  id?: {} | undefined
  processedTime?: {} | undefined
  rejectionReason?: KycDocumentRejection | undefined
  requestId?: {} | undefined
  status: 'pending' | 'in-progress' | 'accepted' | 'rejected'
  updatedTime?: {} | undefined
  customerId?: {} | undefined
  matchLevel?: number | undefined
  notes?: (string | null) | undefined
  reason?: string | undefined
  reviewTime?: {} | undefined
  reviewerId?: {} | undefined
  reviewerName?: (string | null) | undefined
}
type KycDocument_2 = ProofOfIdentity | ProofOfAddress | ProofOfFunds | ProofOfPurchase
type KycDocumentSubtypes =
  | 'passport'
  | 'id-card'
  | 'driver-license'
  | 'birth-certificate'
  | 'utility-bill'
  | 'rental-receipt'
  | 'lease-agreement'
  | 'copy-credit-card'
  | 'credit-card-statement'
  | 'bank-statement'
  | 'inheritance-documentation'
  | 'tax-return'
  | 'salary-slip'
  | 'sale-of-assets'
  | 'public-health-card'
  | 'proof-of-age-card'
  | 'reverse-of-id'
  | 'public-service'
  | 'ewallet-holder-details'
  | 'ewallet-transaction-statement'
  | 'other'
type KycDocumentsLink = { href: string }
type KycGathererLink = { href: string }
type KycRequest = {
  createdTime?: {} | undefined
  documents: {
    maxAttempts?: number | undefined
    subtypes?: KycDocumentSubtypes[] | undefined
    type: {}
  }[]
  expirationTime?: string | undefined
  id?: {} | undefined
  redirectUrl?: string | undefined
  updatedTime?: {} | undefined
  _links?: (SelfLink | KycDocumentsLink | KycGathererLink)[] | undefined
  customerId: {}
  matchLevel?: number | undefined
  reason?: string | undefined
}
type ResetPasswordToken = {
  _links?: SelfLink[] | undefined
  credentialId?: string | undefined
  expiredTime?: string | undefined
  token?: string | undefined
  username: string
}
type PaymentCardCreateToken = {
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  token: string
}
type PaymentCardCreatePlain = {
  billingAddress: {
    address?: (string | null) | undefined
    address2?: (string | null) | undefined
    city?: (string | null) | undefined
    country?: (string | null) | undefined
    emails?: ContactEmails | undefined
    firstName?: (string | null) | undefined
    hash?: string | undefined
    lastName?: (string | null) | undefined
    organization?: (string | null) | undefined
    phoneNumbers?: ContactPhoneNumbers | undefined
    postalCode?: (string | null) | undefined
    region?: (string | null) | undefined
  }
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  cvv?: string | undefined
  expMonth: number
  expYear: number
  method: 'payment-card'
  pan: string
  riskMetadata?: RiskMetadata | undefined
}
type PaymentCardUpdatePlain = {
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  customFields?: ResourceCustomFields | undefined
  cvv?: string | undefined
  expMonth?: number | undefined
  expYear?: number | undefined
  stickyGatewayAccountId?: {} | undefined
}
type PayPalAccount = {
  billingAddress: {
    address?: (string | null) | undefined
    address2?: (string | null) | undefined
    city?: (string | null) | undefined
    country?: (string | null) | undefined
    emails?: ContactEmails | undefined
    firstName?: (string | null) | undefined
    hash?: string | undefined
    lastName?: (string | null) | undefined
    organization?: (string | null) | undefined
    phoneNumbers?: ContactPhoneNumbers | undefined
    postalCode?: (string | null) | undefined
    region?: (string | null) | undefined
  }
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  id?: {} | undefined
  method: 'paypal'
  riskMetadata?: RiskMetadata | undefined
  status?: 'inactive' | 'active' | 'deactivated' | undefined
  updatedTime?: {} | undefined
  username?: string | undefined
  _embedded?: (AuthTransactionEmbed | CustomerEmbed)[] | undefined
  _links?: (SelfLink | CustomerLink | AuthTransactionLink | ApprovalUrlLink)[] | undefined
}
type KhelocardCard = {
  _embedded?: CustomerEmbed[] | undefined
  _links?: (SelfLink | CustomerLink)[] | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  customerId?: {} | undefined
  expMonth?: number | undefined
  expYear?: number | undefined
  fingerprint?: string | undefined
  id?: {} | undefined
  last4?: string | undefined
  method?: 'Khelocard' | undefined
  number?: string | undefined
  riskMetadata?: RiskMetadata | undefined
  status?: 'active' | 'deactivated' | undefined
  updatedTime?: {} | undefined
}
type AlternativePaymentInstrument_2 = {
  _embedded?: CustomerEmbed[] | undefined
  _links?: (SelfLink | CustomerLink)[] | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  createdTime?: {} | undefined
  customFields?: ResourceCustomFields | undefined
  customerId?: {} | undefined
  id?: {} | undefined
  method?: {} | undefined
  riskMetadata?: RiskMetadata | undefined
  status?: 'active' | 'deactivated' | undefined
  updatedTime?: {} | undefined
}
type PaymentInstrument_2 =
  | PaymentCard
  | BankAccount
  | PayPalAccount
  | KhelocardCard
  | AlternativePaymentInstrument_2
type PaymentInstrumentCreateToken = {
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  token: string
}
type PaymentInstrumentUpdateToken = {
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  customFields?: ResourceCustomFields | undefined
  token?: string | undefined
}
type PayoutRequest = {
  amount: number
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  currency: {}
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  description?: (string | null) | undefined
  gatewayAccountId?: {} | undefined
  invoiceIds?: (ResourceId[] | null) | undefined
  isMerchantInitiated?: boolean | undefined
  isProcessedOutside?: boolean | undefined
  notificationUrl?: (string | null) | undefined
  paymentInstruction?: {} | undefined
  paymentInstrument?: {} | undefined
  processedTime?: string | undefined
  redirectUrl?: (string | null) | undefined
  requestId?: (string | null) | undefined
  riskMetadata?: RiskMetadata | undefined
  websiteId: {}
}
type CoreReadyToPay = {
  customerId?: {} | undefined
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  riskMetadata: RiskMetadata
  websiteId: {}
}
type PaymentCardDigitalWalletFeature = { name?: 'Google Pay' | 'Apple Pay' | undefined }
type ReadyToPayPaymentCardMethod = {
  brands?: PaymentCardBrand[] | undefined
  feature?: PaymentCardDigitalWalletFeature | undefined
  filters?: string[] | undefined
  method: 'payment-card'
}
type AchPlaidFeature = {
  expirationTime?: string | undefined
  linkToken?: string | undefined
  name?: 'Plaid' | undefined
}
type ReadyToPayAchMethod = {
  feature?: AchPlaidFeature | undefined
  filters?: string[] | undefined
  method: 'ach'
}
type ReadyToPayGenericMethod = { filters?: string[] | undefined; method: {} }
type ReadyToPayMethods = (
  | ReadyToPayPaymentCardMethod
  | ReadyToPayAchMethod
  | ReadyToPayGenericMethod
)[]
type Search = {
  customers?:
    | {
        _embedded?: LeadSourceEmbed[] | undefined
        _links?:
          | (SelfLink | DefaultPaymentInstrumentLink | LeadSourceLink | WebsiteLink)[]
          | undefined
        averageValue?: CustomerAverageValue | undefined
        createdTime?: {} | undefined
        customFields?: ResourceCustomFields | undefined
        defaultPaymentInstrument?: PaymentInstrument | undefined
        email?: string | undefined
        firstName?: string | undefined
        id?: {} | undefined
        invoiceCount?: number | undefined
        lastName?: string | undefined
        lastPaymentTime?: {} | undefined
        lifetimeRevenue?: CustomerLifetimeRevenue | undefined
        paymentCount?: number | undefined
        paymentToken?: string | undefined
        primaryAddress?: ContactObject | undefined
        revision?: number | undefined
        tags?: Tag[] | undefined
        updatedTime?: {} | undefined
        websiteId?: {} | undefined
      }[]
    | undefined
  invoices?:
    | {
        abandonedTime?: {} | undefined
        amount?: number | undefined
        amountDue?: number | undefined
        autopayRetryNumber?: number | undefined
        autopayScheduledTime?: string | undefined
        billingAddress?:
          | {
              address?: (string | null) | undefined
              address2?: (string | null) | undefined
              city?: (string | null) | undefined
              country?: (string | null) | undefined
              emails?: ContactEmails | undefined
              firstName?: (string | null) | undefined
              hash?: string | undefined
              lastName?: (string | null) | undefined
              organization?: (string | null) | undefined
              phoneNumbers?: ContactPhoneNumbers | undefined
              postalCode?: (string | null) | undefined
              region?: (string | null) | undefined
            }
          | undefined
        collectionPeriod?: number | undefined
        createdTime?: {} | undefined
        currency: {}
        delinquentCollectionPeriod?: number | undefined
        deliveryAddress?:
          | {
              address?: (string | null) | undefined
              address2?: (string | null) | undefined
              city?: (string | null) | undefined
              country?: (string | null) | undefined
              emails?: ContactEmails | undefined
              firstName?: (string | null) | undefined
              hash?: string | undefined
              lastName?: (string | null) | undefined
              organization?: (string | null) | undefined
              phoneNumbers?: ContactPhoneNumbers | undefined
              postalCode?: (string | null) | undefined
              region?: (string | null) | undefined
            }
          | undefined
        discountAmount?: number | undefined
        discounts?:
          | {
              amount?: number | undefined
              couponId?: {} | undefined
              description?: string | undefined
              redemptionId?: {} | undefined
            }[]
          | undefined
        dueTime?: {} | undefined
        id?: {} | undefined
        invoiceNumber?: number | undefined
        issuedTime?: {} | undefined
        items?: InvoiceItem[] | undefined
        notes?: string | undefined
        paidTime?: {} | undefined
        paymentFormUrl?: string | undefined
        poNumber?: (string | null) | undefined
        shipping?: InvoiceShipping | undefined
        status?:
          | 'draft'
          | 'unpaid'
          | 'paid'
          | 'past-due'
          | 'delinquent'
          | 'abandoned'
          | 'voided'
          | 'partially-refunded'
          | 'refunded'
          | 'disputed'
          | undefined
        subscriptionId?: {} | undefined
        subtotalAmount?: number | undefined
        tax?: InvoiceTax | undefined
        updatedTime?: {} | undefined
        voidedTime?: {} | undefined
        websiteId: {}
        _embedded?:
          | (CustomerEmbed | WebsiteEmbed | OrganizationEmbed | LeadSourceEmbed)[]
          | undefined
        _links?:
          | (
              | SelfLink
              | CustomerLink
              | WebsiteLink
              | OrganizationLink
              | LeadSourceLink
              | TransactionAllocationsLink
              | RecalculateInvoiceLink
              | SubscriptionLink
            )[]
          | undefined
        customerId?: {} | undefined
        dueReminderNumber?: number | undefined
        dueReminderTime?: {} | undefined
        retryInstruction?:
          | {
              afterAttemptPolicies: 'change-subscription-renewal-time'[]
              afterRetryEndPolicies: ('abandon-invoice' | 'cancel-subscription')[]
              attempts: { scheduleInstruction: InvoiceRetryScheduleInstruction }[]
            }
          | undefined
        revision?: number | undefined
        transactions?: Transaction[] | undefined
        type?:
          | 'initial'
          | 'renewal'
          | 'interim'
          | 'cancellation'
          | 'one-time'
          | 'refund'
          | 'charge'
          | undefined
      }[]
    | undefined
  orders?: { orderType?: 'subscription-order' | 'one-time-order' | undefined }[] | undefined
  searched?: string[] | undefined
  transactions?:
    | {
        '3ds'?:
          | {
              authenticated: 'yes' | 'no' | 'not applicable' | 'attempted'
              enrolled: 'yes' | 'no' | 'invalid card/timeout' | 'unavailable'
              flow?: 'frictionless' | 'challenge' | undefined
              isDowngraded: boolean
              liability: 'protected' | 'not protected' | 'protected (attempt)'
              version?: '1.0.2' | '2.1.0' | '2.2.0' | undefined
            }
          | undefined
        amount?: number | undefined
        billingAddress?:
          | {
              address?: (string | null) | undefined
              address2?: (string | null) | undefined
              city?: (string | null) | undefined
              country?: (string | null) | undefined
              emails?: ContactEmails | undefined
              firstName?: (string | null) | undefined
              hash?: string | undefined
              lastName?: (string | null) | undefined
              organization?: (string | null) | undefined
              phoneNumbers?: ContactPhoneNumbers | undefined
              postalCode?: (string | null) | undefined
              region?: (string | null) | undefined
            }
          | undefined
        billingDescriptor?: string | undefined
        childTransactions?: ResourceId[] | undefined
        createdTime?: {} | undefined
        currency?: {} | undefined
        customFields?: ResourceCustomFields | undefined
        customerId?: {} | undefined
        description?: string | undefined
        gatewayName?: {} | undefined
        has3ds?: boolean | undefined
        hasAmountAdjustment?: boolean | undefined
        id?: {} | undefined
        invoiceIds?: ResourceId[] | undefined
        isRebill?: boolean | undefined
        isRetry?: boolean | undefined
        parentTransactionId?: {} | undefined
        paymentInstrument?: PaymentInstrument | undefined
        planIds?: ResourceId[] | undefined
        processedTime?: {} | undefined
        purchaseAmount?: number | undefined
        purchaseCurrency?: {} | undefined
        rebillNumber?: number | undefined
        redirectUrl?: string | undefined
        requestAmount?: number | undefined
        requestCurrency?: {} | undefined
        requestId?: string | undefined
        result?: 'abandoned' | 'approved' | 'canceled' | 'declined' | 'unknown' | undefined
        retryNumber?: number | undefined
        status?:
          | 'completed'
          | 'conn-error'
          | 'disputed'
          | 'never-sent'
          | 'offsite'
          | 'partially-refunded'
          | 'pending'
          | 'refunded'
          | 'sending'
          | 'suspended'
          | 'timeout'
          | 'voided'
          | 'waiting-approval'
          | 'waiting-capture'
          | 'waiting-gateway'
          | 'waiting-refund'
          | undefined
        subscriptionIds?: ResourceId[] | undefined
        type?:
          | '3ds-authentication'
          | 'authorize'
          | 'capture'
          | 'credit'
          | 'refund'
          | 'sale'
          | 'void'
          | undefined
        updatedTime?: {} | undefined
        websiteId?: {} | undefined
        _embedded?:
          | (
              | ParentTransactionEmbed
              | RetriedTransactionEmbed
              | GatewayAccountEmbed
              | CustomerEmbed
              | LeadSourceEmbed
              | WebsiteEmbed
              | PaymentCardEmbed
              | BankAccountEmbed
              | InvoicesEmbed
            )[]
          | undefined
        _links?:
          | (
              | SelfLink
              | WebsiteLink
              | CustomerLink
              | GatewayAccountLink
              | PaymentCardLink
              | ParentTransactionLink
              | RetriedTransactionLink
              | LeadSourceLink
              | ApprovalUrlLink
              | RefundUrlLink
              | TransactionUpdateUrlLink
              | DisputeLink
              | InvoicesLink
              | QueryUrlLink
            )[]
          | undefined
        acquirerName?: {} | undefined
        arn?: string | undefined
        bin?: string | undefined
        bumpOffer?:
          | {
              language?: {} | undefined
              order?: { amount: MoneyAmount; currency: CurrencyCode } | undefined
              outcome?: PurchaseBumpStatus | undefined
              presentedOffers?: {} | undefined
              selectedOffer?:
                | {
                    bumpAmount: {}
                    bumpAmountInUsd?: {} | undefined
                    customFields?: ResourceCustomFields | undefined
                    offerId: string
                    offerType: string
                  }
                | undefined
              version?: {} | undefined
            }
          | undefined
        dcc?:
          | {
              base?: { amount: MoneyAmount; currency: CurrencyCode } | undefined
              outcome?: 'rejected' | 'selected' | 'unknown' | undefined
              quote?: { amount: MoneyAmount; currency: CurrencyCode } | undefined
              usdMarkup?: {} | undefined
            }
          | undefined
        discrepancyTime?: (string | null) | undefined
        disputeStatus?:
          | 'response-needed'
          | 'under-review'
          | 'forfeited'
          | 'won'
          | 'lost'
          | 'unknown'
          | undefined
        disputeTime?: (string | null) | undefined
        gateway?:
          | {
              avsResponse?:
                | {
                    code?: string | undefined
                    message?: string | undefined
                    originalCode?: string | undefined
                    originalMessage?: string | undefined
                  }
                | undefined
              cvvResponse?:
                | {
                    code?: string | undefined
                    message?: string | undefined
                    originalCode?: string | undefined
                    originalMessage?: string | undefined
                  }
                | undefined
              response?:
                | {
                    code?: string | undefined
                    message?: string | undefined
                    originalCode?: string | undefined
                    originalMessage?: string | undefined
                    type?: string | undefined
                  }
                | undefined
            }
          | undefined
        gatewayAccountId?: {} | undefined
        gatewayTransactionId?: {} | undefined
        hadDiscrepancy?: boolean | undefined
        hasBumpOffer?: boolean | undefined
        hasDcc?: boolean | undefined
        isDisputed?: boolean | undefined
        isMerchantInitiated?: boolean | undefined
        isProcessedOutside?: boolean | undefined
        isReconciled?: boolean | undefined
        method?: {} | undefined
        notificationUrl?: TransactionNotificationUrl | undefined
        orderId?: string | undefined
        referenceData?: ({ [x: string]: string } | null) | undefined
        reportAmount?: number | undefined
        reportCurrency?: {} | undefined
        retriedTransactionId?: {} | undefined
        retriesResult?: 'approved' | 'canceled' | 'declined' | 'scheduled' | undefined
        retryInstruction?: PaymentRetry | undefined
        revision?: number | undefined
        riskMetadata?:
          | {
              accuracyRadius?: number | undefined
              browserData?: BrowserData | undefined
              city?: string | undefined
              country?: string | undefined
              deviceVelocity?: number | undefined
              distance?: number | undefined
              fingerprint?: string | undefined
              hasMismatchedBankCountry?: boolean | undefined
              hasMismatchedBillingAddressCountry?: boolean | undefined
              hasMismatchedHolderName?: boolean | undefined
              hasMismatchedTimeZone?: boolean | undefined
              httpHeaders?: HttpHeaders | undefined
              ipAddress?: string | undefined
              isHosting?: boolean | undefined
              isProxy?: boolean | undefined
              isTor?: boolean | undefined
              isVpn?: boolean | undefined
              isp?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              paymentInstrumentVelocity?: number | undefined
              postalCode?: string | undefined
              region?: string | undefined
              score?: number | undefined
              timeZone?: string | undefined
              vpnServiceName?: string | undefined
            }
          | undefined
        riskScore?: number | undefined
        scheduledTime?: string | undefined
        settlementTime?: (string | null) | undefined
        velocity?: number | undefined
      }[]
    | undefined
}
type ShippingZone = {
  _links?: SelfLink[] | undefined
  countries?: string[] | undefined
  createdTime?: {} | undefined
  id?: {} | undefined
  isDefault?: { [x: string]: unknown } | undefined
  name: string
  rates?:
    | {
        _links?: SelfLink[] | undefined
        currency: {}
        maxOrderSubtotal?: number | undefined
        minOrderSubtotal?: number | undefined
        name: string
        price: number
      }[]
    | undefined
  updatedTime?: {} | undefined
}
type SubscriptionCancellation = {
  _links?: SelfLink[] | undefined
  appliedInvoiceId?: {} | undefined
  canceledBy?: 'merchant' | 'customer' | undefined
  canceledTime?: string | undefined
  churnTime: string
  createdTime?: {} | undefined
  description?: string | undefined
  id?: {} | undefined
  lineItemSubtotal?: number | undefined
  lineItems?: {} | undefined
  prorated?: boolean | undefined
  proratedInvoiceId?: {} | undefined
  reason?:
    | 'did-not-use'
    | 'did-not-want'
    | 'missing-features'
    | 'bugs-or-problems'
    | 'do-not-remember'
    | 'risk-warning'
    | 'contract-expired'
    | 'too-expensive'
    | 'other'
    | 'billing-failure'
    | undefined
  status?: 'draft' | 'confirmed' | 'completed' | 'revoked' | undefined
  subscriptionId: {}
}
type SubscriptionReactivation = {
  _links?: SelfLink[] | undefined
  cancellationId?: {} | undefined
  createdTime?: string | undefined
  description?: string | undefined
  effectiveTime?: string | undefined
  id?: {} | undefined
  renewalTime?: string | undefined
  subscriptionId: {}
}
type Subscription = { orderType?: 'subscription-order' | 'one-time-order' | undefined }
type FlexiblePlan = {
  createdTime?: {} | undefined
  currency: {}
  currencySign?: string | undefined
  customFields?: ResourceCustomFields | undefined
  id?: {} | undefined
  isTrialOnly?: boolean | undefined
  name: string
  pricing: PlanPriceFormula
  productId: {}
  productOptions?: { [x: string]: string } | undefined
  recurringInterval?:
    | {
        length: number
        unit: 'day' | 'week' | 'month' | 'year'
        billingTiming?: PlanBillingTiming | undefined
        limit?: number | undefined
      }
    | undefined
  revision?: number | undefined
  setup?: { price: number } | undefined
  trial?: { period: PlanPeriod; price: number } | undefined
  updatedTime?: {} | undefined
}
type SubscriptionChange = {
  effectiveTime?: string | undefined
  items: { plan: FlexiblePlan; quantity: number }[]
  keepTrial?: boolean | undefined
  preview?: boolean | undefined
  prorated: boolean
  renewalPolicy: 'reset' | 'retain'
}
type SubscriptionInvoice = { transactionId?: {} | undefined }
type OrderTimeline = {
  _links?: SelfLink[] | undefined
  extraData?: TimelineExtraData | undefined
  id?: {} | undefined
  message?: string | undefined
  occurredTime?: {} | undefined
  triggeredBy?: 'rebilly' | 'app' | 'direct-api' | undefined
  type?:
    | 'timeline-comment-created'
    | 'order-renewed'
    | 'order-activated'
    | 'order-completed'
    | 'order-reactivated'
    | 'order-canceled'
    | 'order-upgraded'
    | 'order-downgraded'
    | 'order-billing-address-changed'
    | 'order-delivery-address-changed'
    | 'order-renewal-time-changed'
    | 'order-churned'
    | 'order-custom-fields-changed'
    | 'order-items-changed'
    | 'order-billing-anchor-changed'
    | 'order-recurring-interval-changed'
    | 'order-risk-metadata-changed'
    | 'order-paid-early'
    | 'order-quantity-changed'
    | 'email-message-sent'
    | 'coupon-applied'
    | 'invoice-created'
    | 'invoice-issued'
    | 'invoice-abandoned'
    | 'invoice-voided'
    | 'invoice-past-due'
    | 'invoice-paid'
    | 'invoice-partially-paid'
    | 'invoice-disputed'
    | 'invoice-refunded'
    | 'invoice-partially-refunded'
    | 'invoice-renewal-payment-declined'
    | undefined
}
type PaymentCardToken = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: {} | undefined
  id?: {} | undefined
  isUsed?: boolean | undefined
  leadSource?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
        original?:
          | {
              _links?: (SelfLink | CustomerLink)[] | undefined
              affiliate?: string | undefined
              campaign?: string | undefined
              clickId?: string | undefined
              content?: string | undefined
              createdTime?: {} | undefined
              medium?: string | undefined
              path?: string | undefined
              referrer?: string | undefined
              salesAgent?: string | undefined
              source?: string | undefined
              subAffiliate?: string | undefined
              term?: string | undefined
            }
          | undefined
      }
    | undefined
  method: string
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  updatedTime?: {} | undefined
  usageTime?: {} | undefined
}
type BankAccountToken = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: {} | undefined
  id?: {} | undefined
  isUsed?: boolean | undefined
  leadSource?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
        original?:
          | {
              _links?: (SelfLink | CustomerLink)[] | undefined
              affiliate?: string | undefined
              campaign?: string | undefined
              clickId?: string | undefined
              content?: string | undefined
              createdTime?: {} | undefined
              medium?: string | undefined
              path?: string | undefined
              referrer?: string | undefined
              salesAgent?: string | undefined
              source?: string | undefined
              subAffiliate?: string | undefined
              term?: string | undefined
            }
          | undefined
      }
    | undefined
  method: string
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  updatedTime?: {} | undefined
  usageTime?: {} | undefined
}
type DigitalWalletToken = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: {} | undefined
  id?: {} | undefined
  isUsed?: boolean | undefined
  leadSource?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
        original?:
          | {
              _links?: (SelfLink | CustomerLink)[] | undefined
              affiliate?: string | undefined
              campaign?: string | undefined
              clickId?: string | undefined
              content?: string | undefined
              createdTime?: {} | undefined
              medium?: string | undefined
              path?: string | undefined
              referrer?: string | undefined
              salesAgent?: string | undefined
              source?: string | undefined
              subAffiliate?: string | undefined
              term?: string | undefined
            }
          | undefined
      }
    | undefined
  method: string
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  updatedTime?: {} | undefined
  usageTime?: {} | undefined
}
type PlaidAccountToken = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: {} | undefined
  id?: {} | undefined
  isUsed?: boolean | undefined
  leadSource?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
        original?:
          | {
              _links?: (SelfLink | CustomerLink)[] | undefined
              affiliate?: string | undefined
              campaign?: string | undefined
              clickId?: string | undefined
              content?: string | undefined
              createdTime?: {} | undefined
              medium?: string | undefined
              path?: string | undefined
              referrer?: string | undefined
              salesAgent?: string | undefined
              source?: string | undefined
              subAffiliate?: string | undefined
              term?: string | undefined
            }
          | undefined
      }
    | undefined
  method: string
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  updatedTime?: {} | undefined
  usageTime?: {} | undefined
}
type KhelocardCardToken = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: {} | undefined
  id?: {} | undefined
  isUsed?: boolean | undefined
  leadSource?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
        original?:
          | {
              _links?: (SelfLink | CustomerLink)[] | undefined
              affiliate?: string | undefined
              campaign?: string | undefined
              clickId?: string | undefined
              content?: string | undefined
              createdTime?: {} | undefined
              medium?: string | undefined
              path?: string | undefined
              referrer?: string | undefined
              salesAgent?: string | undefined
              source?: string | undefined
              subAffiliate?: string | undefined
              term?: string | undefined
            }
          | undefined
      }
    | undefined
  method: string
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  updatedTime?: {} | undefined
  usageTime?: {} | undefined
}
type AlternativePaymentToken = {
  _links?: SelfLink[] | undefined
  createdTime?: {} | undefined
  expirationTime?: {} | undefined
  id?: {} | undefined
  isUsed?: boolean | undefined
  leadSource?:
    | {
        _links?: (SelfLink | CustomerLink)[] | undefined
        affiliate?: string | undefined
        campaign?: string | undefined
        clickId?: string | undefined
        content?: string | undefined
        createdTime?: {} | undefined
        medium?: string | undefined
        path?: string | undefined
        referrer?: string | undefined
        salesAgent?: string | undefined
        source?: string | undefined
        subAffiliate?: string | undefined
        term?: string | undefined
        original?:
          | {
              _links?: (SelfLink | CustomerLink)[] | undefined
              affiliate?: string | undefined
              campaign?: string | undefined
              clickId?: string | undefined
              content?: string | undefined
              createdTime?: {} | undefined
              medium?: string | undefined
              path?: string | undefined
              referrer?: string | undefined
              salesAgent?: string | undefined
              source?: string | undefined
              subAffiliate?: string | undefined
              term?: string | undefined
            }
          | undefined
      }
    | undefined
  method: string
  riskMetadata?:
    | {
        accuracyRadius?: number | undefined
        browserData?: BrowserData | undefined
        city?: string | undefined
        country?: string | undefined
        deviceVelocity?: number | undefined
        distance?: number | undefined
        fingerprint?: string | undefined
        hasMismatchedBankCountry?: boolean | undefined
        hasMismatchedBillingAddressCountry?: boolean | undefined
        hasMismatchedHolderName?: boolean | undefined
        hasMismatchedTimeZone?: boolean | undefined
        httpHeaders?: HttpHeaders | undefined
        ipAddress?: string | undefined
        isHosting?: boolean | undefined
        isProxy?: boolean | undefined
        isTor?: boolean | undefined
        isVpn?: boolean | undefined
        isp?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        paymentInstrumentVelocity?: number | undefined
        postalCode?: string | undefined
        region?: string | undefined
        score?: number | undefined
        timeZone?: string | undefined
        vpnServiceName?: string | undefined
      }
    | undefined
  updatedTime?: {} | undefined
  usageTime?: {} | undefined
}
type CompositeToken =
  | PaymentCardToken
  | BankAccountToken
  | DigitalWalletToken
  | PlaidAccountToken
  | KhelocardCardToken
  | AlternativePaymentToken
type TransactionRequest = {
  amount: number
  billingAddress?:
    | {
        address?: (string | null) | undefined
        address2?: (string | null) | undefined
        city?: (string | null) | undefined
        country?: (string | null) | undefined
        emails?: ContactEmails | undefined
        firstName?: (string | null) | undefined
        hash?: string | undefined
        lastName?: (string | null) | undefined
        organization?: (string | null) | undefined
        phoneNumbers?: ContactPhoneNumbers | undefined
        postalCode?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  currency: {}
  customFields?: ResourceCustomFields | undefined
  customerId: {}
  description?: (string | null) | undefined
  gatewayAccountId?: {} | undefined
  invoiceIds?: (ResourceId[] | null) | undefined
  isMerchantInitiated?: boolean | undefined
  isProcessedOutside?: boolean | undefined
  notificationUrl?: (string | null) | undefined
  paymentInstruction?: {} | undefined
  paymentInstrument?: {} | undefined
  processedTime?: string | undefined
  redirectUrl?: (string | null) | undefined
  requestId?: (string | null) | undefined
  riskMetadata?: RiskMetadata | undefined
  websiteId: {}
  type?: '3ds-authentication' | 'sale' | 'authorize' | undefined
}
type TransactionQuery = {
  amount?: number | undefined
  currency?: {} | undefined
  result?: 'abandoned' | 'approved' | 'canceled' | 'declined' | 'unknown' | undefined
  status?:
    | 'completed'
    | 'conn-error'
    | 'disputed'
    | 'never-sent'
    | 'offsite'
    | 'partially-refunded'
    | 'pending'
    | 'refunded'
    | 'sending'
    | 'suspended'
    | 'timeout'
    | 'voided'
    | 'waiting-approval'
    | 'waiting-capture'
    | 'waiting-gateway'
    | 'waiting-refund'
    | undefined
}
type TransactionRefund = { amount: number }
type TransactionTimeline = {
  _links?: SelfLink[] | undefined
  extraData?: TimelineExtraData | undefined
  id?: {} | undefined
  message?: string | undefined
  occurredTime?: {} | undefined
  triggeredBy?: 'rebilly' | 'app' | 'direct-api' | undefined
  type?:
    | 'amount-adjusted'
    | 'blocklist-matched'
    | 'bump-offer-accepted'
    | 'bump-offer-presented'
    | 'bump-offer-rejected'
    | 'customer-redirected-offsite'
    | 'customer-returned'
    | 'dcc-offer-accepted'
    | 'dcc-offer-forced'
    | 'dcc-offer-presented'
    | 'dcc-offer-rejected'
    | 'dispute-changed'
    | 'dispute-created'
    | 'dispute-forfeited'
    | 'dispute-lost'
    | 'dispute-responded'
    | 'dispute-won'
    | 'gateway-connection-failed'
    | 'gateway-connection-timed-out'
    | 'gateway-response-received'
    | 'risk-score-changed'
    | 'timeline-comment-created'
    | 'transaction-abandoned'
    | 'transaction-amount-discrepancy-found'
    | 'transaction-approved'
    | 'transaction-canceled'
    | 'transaction-capture-delayed'
    | 'transaction-captured'
    | 'transaction-declined'
    | 'transaction-discrepancy-found'
    | 'transaction-initiated'
    | 'transaction-reconciled'
    | 'transaction-refunded'
    | 'transaction-retried'
    | 'transaction-rules-processed'
    | 'transaction-scheduled-time-changed'
    | 'transaction-timeout-resolved'
    | 'transaction-voided'
    | 'transaction-waiting-gateway'
    | 'transaction-queried'
    | 'transaction-updated'
    | undefined
}
type TransactionUpdate = {
  amount?: number | undefined
  currency?: {} | undefined
  result: 'abandoned' | 'approved' | 'canceled' | 'declined'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/3dsecure': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: ThreeDSecure[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ThreeDSecure
            }
            output: ThreeDSecure
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ThreeDSecure
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ThreeDSecure
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ThreeDSecure
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/3dsecure/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: ThreeDSecure
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/aml': {
      $get: {
        input: {
          query: {
            firstName: string
            lastName: string
            dob?: string | undefined
            country?: string | undefined
          }
        } & { header: { 'Organization-Id'?: ResourceId | undefined } }
        output: AML[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attachments': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Attachment }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Attachment }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/attachments/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Attachment }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authentication-options': {
      $get:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: AuthenticationOptions[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationOptions
            }
            output: AuthenticationOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationOptions
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationOptions
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationOptions
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authentication-tokens': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: AuthenticationToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationToken
            }
            output: AuthenticationToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationToken
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationToken
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: AuthenticationToken
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authentication-tokens/:token': {
      $delete:
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: AuthenticationToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authentication-tokens/:token/exchange': {
      $post:
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerJWT }
            output: CustomerJWT
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerJWT }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerJWT }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerJWT }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bank-accounts': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                sort?: string[] | undefined
                filter?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: BankAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                sort?: string[] | undefined
                filter?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                sort?: string[] | undefined
                filter?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: BankAccountCreateToken | BankAccountCreatePlain
            }
            output: BankAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: BankAccountCreateToken | BankAccountCreatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: BankAccountCreateToken | BankAccountCreatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: BankAccountCreateToken | BankAccountCreatePlain
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bank-accounts/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: BankAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountUpdatePlain }
            output: BankAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountUpdatePlain }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountUpdatePlain }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountUpdatePlain }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountUpdatePlain }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountCreateToken | BankAccountCreatePlain }
            output: BankAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountCreateToken | BankAccountCreatePlain }
            output: BankAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountCreateToken | BankAccountCreatePlain }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountCreateToken | BankAccountCreatePlain }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountCreateToken | BankAccountCreatePlain }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: BankAccountCreateToken | BankAccountCreatePlain }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bank-accounts/:id/deactivation': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: BankAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/blocklists': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: string[] | undefined
                filter?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Blocklist[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: string[] | undefined
                filter?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: string[] | undefined
                filter?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Blocklist }
            output: Blocklist
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Blocklist }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Blocklist }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Blocklist }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/blocklists/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Blocklist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Blocklist }
            output: Blocklist
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Blocklist }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Blocklist }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Blocklist }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Blocklist }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/coupons': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Coupon[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Coupon }
            output: Coupon
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Coupon }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Coupon }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Coupon }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/coupons-redemptions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: CouponRedemption[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CouponRedemption
            }
            output: CouponRedemption
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CouponRedemption
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CouponRedemption
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CouponRedemption
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/coupons-redemptions/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: CouponRedemption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/coupons-redemptions/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/coupons/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Coupon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Coupon }
            output: Coupon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Coupon }
            output: Coupon
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Coupon }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Coupon }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Coupon }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Coupon }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/coupons/:id/expiration': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CouponExpiration }
            output: Coupon
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CouponExpiration }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CouponExpiration }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CouponExpiration }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CouponExpiration }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CouponExpiration }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/credentials': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Credential[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Credential }
            output: Credential
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Credential }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Credential }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Credential }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/credentials/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Credential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Credential }
            output: Credential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Credential }
            output: Credential
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Credential }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Credential }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Credential }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Credential }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/custom-fields/:resource': {
      $get:
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
              }
            } & { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: CustomField[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
              }
            } & { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
              }
            } & { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/custom-fields/:resource/:name': {
      $get:
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: CustomField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: CustomField }
            output: CustomField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: CustomField }
            output: CustomField
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: CustomField }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: CustomField }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                resource:
                  | 'customers'
                  | 'payment-instruments'
                  | 'subscriptions'
                  | 'transactions'
                  | 'websites'
                  | 'products'
                  | 'plans'
                  | 'bump-offers'
                name: string
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: CustomField }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customer-timeline-custom-events': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: CustomerTimelineCustomEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CustomerTimelineCustomEvent
            }
            output: CustomerTimelineCustomEvent
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CustomerTimelineCustomEvent
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CustomerTimelineCustomEvent
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CustomerTimelineCustomEvent
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customer-timeline-custom-events/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: CustomerTimelineCustomEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/customer-timeline-events': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: CustomerTimeline[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/customers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Customer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Customer }
            output: Customer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Customer }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Customer }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Customer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Customer }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { targetCustomerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { targetCustomerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { targetCustomerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { targetCustomerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { expand?: string | undefined; fields?: string | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: string | undefined; fields?: string | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: string | undefined; fields?: string | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: string | undefined; fields?: string | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Customer }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Customer }
            output: Customer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Customer }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Customer }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Customer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Customer }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:id/lead-source': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: LeadSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: LeadSource }
            output: LeadSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: LeadSource }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: LeadSource }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: LeadSource }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:id/timeline': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: CustomerTimeline[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerTimeline }
            output: CustomerTimeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerTimeline }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerTimeline }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: CustomerTimeline }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:id/timeline/:messageId': {
      $delete:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: CustomerTimeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:id/upcoming-invoices': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Invoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/digital-wallets/validation': {
      $post:
        | {
            input: { json: DigitalWalletValidation }
            output: DigitalWalletValidation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DigitalWalletValidation }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DigitalWalletValidation }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DigitalWalletValidation }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/disputes': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Dispute[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Dispute }
            output: Dispute
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Dispute }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Dispute }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Dispute }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/disputes/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Dispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Dispute }
            output: Dispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Dispute }
            output: Dispute
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Dispute }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Dispute }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Dispute }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/files': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: File2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                expand?: string | undefined
                fields?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: FileCreateFromInline | FileCreateFromUrl
            }
            output: File2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: FileCreateFromInline | FileCreateFromUrl
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: FileCreateFromInline | FileCreateFromUrl
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: FileCreateFromInline | FileCreateFromUrl
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/files/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: File2 }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: File2 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: File2 }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: File2 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: File2 }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/files/:id/download': {
      $get:
        | {
            input: { param: { id: string } } & { query: { imageSize?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { imageSize?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { id: string } } & { query: { imageSize?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { imageSize?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { imageSize?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/files/:id/download:extension': {
      $get:
        | {
            input: { param: { id: string; extension: '.png' | '.jpg' | '.gif' } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; extension: '.png' | '.jpg' | '.gif' } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; extension: '.png' | '.jpg' | '.gif' } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; extension: '.png' | '.jpg' | '.gif' } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; extension: '.png' | '.jpg' | '.gif' } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Invoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Invoice }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Invoice }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Invoice }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Invoice }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: {
                Accept?: 'application/json' | 'application/pdf' | undefined
                'Organization-Id'?: ResourceId | undefined
              }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: {
                Accept?: 'application/json' | 'application/pdf' | undefined
                'Organization-Id'?: ResourceId | undefined
              }
            }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: {
                Accept?: 'application/json' | 'application/pdf' | undefined
                'Organization-Id'?: ResourceId | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: {
                Accept?: 'application/json' | 'application/pdf' | undefined
                'Organization-Id'?: ResourceId | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: {
                Accept?: 'application/json' | 'application/pdf' | undefined
                'Organization-Id'?: ResourceId | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Invoice }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Invoice }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Invoice }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Invoice }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Invoice }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Invoice }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:id/abandon': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:id/issue': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/invoices/:id/items': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: InvoiceItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceItem }
            output: InvoiceItem
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceItem }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceItem }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:id/recalculate': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/invoices/:id/reissue': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceReissue }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceReissue }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceReissue }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceReissue }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceReissue }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/invoices/:id/timeline': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: InvoiceTimeline[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTimeline }
            output: InvoiceTimeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTimeline }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTimeline }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTimeline }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:id/timeline/:messageId': {
      $delete:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: InvoiceTimeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:id/transaction': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTransaction }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTransaction }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTransaction }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTransaction }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceTransaction }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:id/transaction-allocations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: InvoiceTransactionAllocation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:id/void': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/kyc-documents': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: KycDocument_2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: KycDocument_2
            }
            output: KycDocument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: KycDocument_2
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: KycDocument_2
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: KycDocument_2
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/kyc-documents/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: KycDocument_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocument_2 }
            output: KycDocument_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocument_2 }
            output: KycDocument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocument_2 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocument_2 }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocument_2 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocument_2 }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/kyc-documents/:id/acceptance': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: KycDocument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/kyc-documents/:id/matches': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: IdentityMatches | AddressMatches }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: IdentityMatches | AddressMatches }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: IdentityMatches | AddressMatches }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: IdentityMatches | AddressMatches }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/kyc-documents/:id/rejection': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocumentRejection }
            output: KycDocument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocumentRejection }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocumentRejection }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocumentRejection }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: KycDocumentRejection }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/kyc-documents/:id/review': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: KycDocument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/kyc-requests': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: KycRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: KycRequest }
            output: KycRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: KycRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: KycRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: KycRequest }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/kyc-requests/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: KycRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: {
                customerId: {}
                createdTime?: {} | undefined
                documents: {
                  maxAttempts?: number | undefined
                  subtypes?: KycDocumentSubtypes[] | undefined
                  type: {}
                }[]
                expirationTime?: string | undefined
                id?: {} | undefined
                redirectUrl?: string | undefined
                updatedTime?: {} | undefined
                _links?: (SelfLink | KycDocumentsLink | KycGathererLink)[] | undefined
                matchLevel?: number | undefined
                reason?: string | undefined
              }
            }
            output: KycRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: {
                customerId: {}
                createdTime?: {} | undefined
                documents: {
                  maxAttempts?: number | undefined
                  subtypes?: KycDocumentSubtypes[] | undefined
                  type: {}
                }[]
                expirationTime?: string | undefined
                id?: {} | undefined
                redirectUrl?: string | undefined
                updatedTime?: {} | undefined
                _links?: (SelfLink | KycDocumentsLink | KycGathererLink)[] | undefined
                matchLevel?: number | undefined
                reason?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: {
                customerId: {}
                createdTime?: {} | undefined
                documents: {
                  maxAttempts?: number | undefined
                  subtypes?: KycDocumentSubtypes[] | undefined
                  type: {}
                }[]
                expirationTime?: string | undefined
                id?: {} | undefined
                redirectUrl?: string | undefined
                updatedTime?: {} | undefined
                _links?: (SelfLink | KycDocumentsLink | KycGathererLink)[] | undefined
                matchLevel?: number | undefined
                reason?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: {
                customerId: {}
                createdTime?: {} | undefined
                documents: {
                  maxAttempts?: number | undefined
                  subtypes?: KycDocumentSubtypes[] | undefined
                  type: {}
                }[]
                expirationTime?: string | undefined
                id?: {} | undefined
                redirectUrl?: string | undefined
                updatedTime?: {} | undefined
                _links?: (SelfLink | KycDocumentsLink | KycGathererLink)[] | undefined
                matchLevel?: number | undefined
                reason?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: {
                customerId: {}
                createdTime?: {} | undefined
                documents: {
                  maxAttempts?: number | undefined
                  subtypes?: KycDocumentSubtypes[] | undefined
                  type: {}
                }[]
                expirationTime?: string | undefined
                id?: {} | undefined
                redirectUrl?: string | undefined
                updatedTime?: {} | undefined
                _links?: (SelfLink | KycDocumentsLink | KycGathererLink)[] | undefined
                matchLevel?: number | undefined
                reason?: string | undefined
              }
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/password-tokens': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: ResetPasswordToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ResetPasswordToken
            }
            output: ResetPasswordToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ResetPasswordToken
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ResetPasswordToken
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ResetPasswordToken
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/password-tokens/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: ResetPasswordToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payment-cards': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: PaymentCard[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PaymentCardCreateToken | PaymentCardCreatePlain
            }
            output: PaymentCard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PaymentCardCreateToken | PaymentCardCreatePlain
            }
            output: PaymentCard
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PaymentCardCreateToken | PaymentCardCreatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PaymentCardCreateToken | PaymentCardCreatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PaymentCardCreateToken | PaymentCardCreatePlain
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment-cards/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: PaymentCard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardUpdatePlain }
            output: PaymentCard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardUpdatePlain }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardUpdatePlain }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardUpdatePlain }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardUpdatePlain }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardCreateToken | PaymentCardCreatePlain }
            output: PaymentCard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardCreateToken | PaymentCardCreatePlain }
            output: PaymentCard
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardCreateToken | PaymentCardCreatePlain }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardCreateToken | PaymentCardCreatePlain }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardCreateToken | PaymentCardCreatePlain }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PaymentCardCreateToken | PaymentCardCreatePlain }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment-cards/:id/deactivation': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: PaymentCard
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/payment-instruments': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: PaymentInstrument_2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json:
                | PaymentInstrumentCreateToken
                | PaymentCardCreatePlain
                | BankAccountCreatePlain
                | PayPalAccount
            }
            output: PaymentInstrument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json:
                | PaymentInstrumentCreateToken
                | PaymentCardCreatePlain
                | BankAccountCreatePlain
                | PayPalAccount
            }
            output: PaymentInstrument_2
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json:
                | PaymentInstrumentCreateToken
                | PaymentCardCreatePlain
                | BankAccountCreatePlain
                | PayPalAccount
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json:
                | PaymentInstrumentCreateToken
                | PaymentCardCreatePlain
                | BankAccountCreatePlain
                | PayPalAccount
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json:
                | PaymentInstrumentCreateToken
                | PaymentCardCreatePlain
                | BankAccountCreatePlain
                | PayPalAccount
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment-instruments/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: PaymentInstrument_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: PaymentInstrumentUpdateToken | PaymentCardUpdatePlain | BankAccountUpdatePlain
            }
            output: PaymentInstrument_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: PaymentInstrumentUpdateToken | PaymentCardUpdatePlain | BankAccountUpdatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: PaymentInstrumentUpdateToken | PaymentCardUpdatePlain | BankAccountUpdatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: PaymentInstrumentUpdateToken | PaymentCardUpdatePlain | BankAccountUpdatePlain
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & {
              json: PaymentInstrumentUpdateToken | PaymentCardUpdatePlain | BankAccountUpdatePlain
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment-instruments/:id/deactivation': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: PaymentInstrument_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/payouts': {
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayoutRequest
            }
            output: Transaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayoutRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayoutRequest
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/paypal-accounts': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: PayPalAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayPalAccount
            }
            output: PayPalAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayPalAccount
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayPalAccount
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: PayPalAccount
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/paypal-accounts/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: PayPalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PayPalAccount }
            output: PayPalAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PayPalAccount }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PayPalAccount }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PayPalAccount }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: PayPalAccount }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/paypal-accounts/:id/deactivation': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: PayPalAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/plans': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Plan[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Plan }
            output: Plan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Plan }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Plan }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Plan }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/plans/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Plan }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Plan }
            output: Plan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Plan }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Plan }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Plan }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Plan }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/products': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Product[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Product }
            output: Product
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Product }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Product }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Product }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/products/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Product }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Product }
            output: Product
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Product }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Product }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Product }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ready-to-pay': {
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CoreReadyToPay
            }
            output: ReadyToPayMethods
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CoreReadyToPay
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CoreReadyToPay
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CoreReadyToPay
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Search[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/shipping-zones': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: ShippingZone[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ShippingZone
            }
            output: ShippingZone
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ShippingZone
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ShippingZone
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: ShippingZone
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/shipping-zones/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: ShippingZone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: ShippingZone }
            output: ShippingZone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: ShippingZone }
            output: ShippingZone
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: ShippingZone }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: ShippingZone }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: ShippingZone }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscription-cancellations': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: SubscriptionCancellation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionCancellation
            }
            output: SubscriptionCancellation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionCancellation
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionCancellation
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionCancellation
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscription-cancellations/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: SubscriptionCancellation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionCancellation }
            output: SubscriptionCancellation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionCancellation }
            output: SubscriptionCancellation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionCancellation }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionCancellation }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionCancellation }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscription-reactivations': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: SubscriptionReactivation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionReactivation
            }
            output: SubscriptionReactivation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionReactivation
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionReactivation
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: SubscriptionReactivation
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscription-reactivations/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: SubscriptionReactivation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Subscription[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                q?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Subscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Subscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Subscription }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:id/change-items': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionChange }
            output: Subscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionChange }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionChange }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionChange }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:id/interim-invoice': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionInvoice }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionInvoice }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionInvoice }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: SubscriptionInvoice }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:id/timeline': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: OrderTimeline[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string[] | undefined
                q?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: OrderTimeline }
            output: OrderTimeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: OrderTimeline }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: OrderTimeline }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: OrderTimeline }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:id/timeline/:messageId': {
      $delete:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: OrderTimeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:id/upcoming-invoices': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Invoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:id/upcoming-invoices/:invoiceId/issue': {
      $post:
        | {
            input: { param: { id: string; invoiceId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Invoice
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string; invoiceId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; invoiceId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; invoiceId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; invoiceId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: InvoiceIssue }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Tag }
            output: Tag
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & { json: Tag }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tags/:tag': {
      $delete:
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Tag }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: Tag }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tags/:tag/customers': {
      $delete:
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customerIds: string[] } }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tags/:tag/customers/:customerId': {
      $delete:
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag: string; customerId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tokens': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: CompositeToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CompositeToken
            }
            output: CompositeToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CompositeToken
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CompositeToken
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Organization-Id'?: ResourceId | undefined } } & {
              json: CompositeToken
            }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tokens/:token': {
      $get:
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: CompositeToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                q?: string | undefined
                sort?: string[] | undefined
                expand?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRequest }
            output: Transaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRequest }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transactions/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customFields?: ResourceCustomFields | undefined } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customFields?: ResourceCustomFields | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customFields?: ResourceCustomFields | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: { customFields?: ResourceCustomFields | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactions/:id/query': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: TransactionQuery
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactions/:id/refund': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRefund }
            output: Transaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRefund }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRefund }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionRefund }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactions/:id/timeline': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: TransactionTimeline[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'Organization-Id'?: ResourceId | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionTimeline }
            output: TransactionTimeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionTimeline }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionTimeline }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionTimeline }
            output: InvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transactions/:id/timeline/:messageId': {
      $delete:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: TransactionTimeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; messageId: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/transactions/:id/update': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionUpdate }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionUpdate }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionUpdate }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Organization-Id'?: ResourceId | undefined }
            } & { json: TransactionUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
