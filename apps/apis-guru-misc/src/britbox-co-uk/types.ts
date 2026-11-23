type Address = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  postcode?: string | undefined
  state?: string | undefined
}
type ExclusionRule = {
  description?: string | undefined
  device?: string | undefined
  excludeAirplay?: boolean | undefined
  excludeChromecast?: boolean | undefined
  excludeDelivery?:
    | 'Stream'
    | 'Download'
    | 'StreamOrDownload'
    | 'ProgressiveDownload'
    | 'None'
    | undefined
  excludeMinResolution?: 'SD' | 'HD-720' | 'HD-1080' | 'HD-4K' | 'External' | 'Unknown' | undefined
}
type ClassificationSummary = { code: string; name: string }
type Entitlement = {
  deliveryType: 'Stream' | 'Download' | 'StreamOrDownload' | 'ProgressiveDownload' | 'None'
  exclusionRules?: ExclusionRule[] | undefined
  maxDownloads?: number | undefined
  maxPlays?: number | undefined
  ownership: 'Subscription' | 'Free' | 'Rent' | 'Own' | 'None'
  playPeriod?: number | undefined
  rentalPeriod?: number | undefined
  resolution: 'SD' | 'HD-720' | 'HD-1080' | 'HD-4K' | 'External' | 'Unknown'
  scopes: string[]
  activationDate?: string | undefined
  classification?: ClassificationSummary | undefined
  creationDate?: string | undefined
  expirationDate?: string | undefined
  itemId?: string | undefined
  itemType?:
    | 'movie'
    | 'show'
    | 'season'
    | 'episode'
    | 'program'
    | 'link'
    | 'trailer'
    | 'channel'
    | 'customAsset'
    | undefined
  mediaDuration?: number | undefined
  planId?: string | undefined
  playCount?: number | undefined
  remainingDownloads?: number | undefined
}
type ProfileSummary = {
  color?: string | undefined
  heroAutoplay?: boolean | undefined
  heroWithAudio?: boolean | undefined
  id: string
  isActive: boolean
  languageCode?: string | undefined
  marketingEnabled: boolean
  maxRatingContentFilter?: ClassificationSummary | undefined
  minRatingPlaybackGuard?: ClassificationSummary | undefined
  name: string
  pinEnabled: boolean
  purchaseEnabled: boolean
  segments: string[]
}
type Subscription = {
  code: string
  endDate?: string | undefined
  id?: string | undefined
  isTrialPeriod: boolean
  planId: string
  startDate: string
  status: 'Active' | 'Cancelled' | 'Lapsed' | 'Expired' | 'None'
}
type Account = {
  address?: Address | undefined
  defaultPaymentInstrumentId?: string | undefined
  defaultPaymentMethodId?: string | undefined
  emailVerified?: boolean | undefined
  entitlements?: Entitlement[] | undefined
  firstName?: string | undefined
  id: string
  isFirstTimeSubscriber?: boolean | undefined
  lastName?: string | undefined
  marketingEnabled: boolean
  minRatingPlaybackGuard?: string | undefined
  pinEnabled: boolean
  primaryProfileId: string
  profiles: ProfileSummary[]
  segments?: string[] | undefined
  subscriptionCode: string
  subscriptions?: Subscription[] | undefined
  trackingEnabled: boolean
  usedFreeTrial?: boolean | undefined
}
type ServiceError = { code?: number | undefined; message: string }
type AccountUpdateRequest = {
  address?: Address | undefined
  defaultPaymentInstrumentId?: string | undefined
  defaultPaymentMethodId?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  minRatingPlaybackGuard?: string | undefined
  segments?: string[] | undefined
  trackingEnabled?: boolean | undefined
}
type PaymentMethod = {
  balance?: number | undefined
  brand?: 'Visa' | 'MasterCard' | 'AmericanExpress' | 'Other' | undefined
  currency?: string | undefined
  description: string
  expiryMonth?: number | undefined
  expiryYear?: number | undefined
  id: string
  lastDigits?: number | undefined
  type: 'Card' | 'Wallet'
}
type AddPaymentMethodRequest = { makeDefault?: boolean | undefined; token: string; type: 'Card' }
type ItemPurchase = {
  id: string
  ownership: 'Subscription' | 'Free' | 'Rent' | 'Own' | 'None'
  resolution: 'SD' | 'HD-720' | 'HD-1080' | 'HD-4K' | 'External' | 'Unknown'
  title: string
  type:
    | 'movie'
    | 'show'
    | 'season'
    | 'episode'
    | 'program'
    | 'link'
    | 'trailer'
    | 'channel'
    | 'customAsset'
}
type PlanPurchase = {
  id?: string | undefined
  price?: number | undefined
  subscriptionId?: string | undefined
  title: string
  type: 'Free' | 'Subscription'
}
type Purchase = {
  authorizationDate?: string | undefined
  creationDate: string
  currency: string
  id: string
  item?: ItemPurchase | undefined
  paymentMethodId?: string | undefined
  plan?: PlanPurchase | undefined
  total: number
}
type PurchaseRequest = {
  itemId?: string | undefined
  offerId?: string | undefined
  paymentMethodId?: string | undefined
  planId?: string | undefined
}
type DeviceRegistrationWindow = {
  endDate: string
  limit: number
  periodDays: number
  remaining: number
  startDate: string
}
type Device = { id: string; name: string; registrationDate: string; type: string }
type AccountDevices = {
  deregistrationWindow?: DeviceRegistrationWindow | undefined
  devices: Device[]
  maxRegistered: number
  registrationWindow?: DeviceRegistrationWindow | undefined
}
type DeviceRegistrationRequest = { id: string; name: string; type: string }
type DeviceAuthorizationCode = { code: string }
type MediaFile = {
  channels?: number | undefined
  deliveryType: 'Stream' | 'Progressive' | 'Download'
  drm: string
  format: string
  height: number
  language: string
  name: string
  resolution: 'SD' | 'HD-720' | 'HD-1080' | 'HD-4K' | 'External' | 'Unknown'
  url: string
  width: number
}
type AccountNonce = { value: string }
type ChangePasswordRequest = { password: string; profileToken: string }
type ChangePinRequest = { pin: string }
type Watched = {
  firstWatchedDate: string
  isFullyWatched?: boolean | undefined
  itemId?: string | undefined
  lastWatchedDate: string
  position: number
}
type ProfileDetail = {
  color?: string | undefined
  heroAutoplay?: boolean | undefined
  heroWithAudio?: boolean | undefined
  id: string
  isActive: boolean
  languageCode?: string | undefined
  marketingEnabled: boolean
  maxRatingContentFilter?: ClassificationSummary | undefined
  minRatingPlaybackGuard?: ClassificationSummary | undefined
  name: string
  pinEnabled: boolean
  purchaseEnabled: boolean
  segments: string[]
  bookmarked: { [x: string]: string }
  rated: { [x: string]: number }
  watched: { [x: string]: Watched }
}
type Offer = {
  deliveryType: 'Stream' | 'Download' | 'StreamOrDownload' | 'ProgressiveDownload' | 'None'
  exclusionRules?: ExclusionRule[] | undefined
  maxDownloads?: number | undefined
  maxPlays?: number | undefined
  ownership: 'Subscription' | 'Free' | 'Rent' | 'Own' | 'None'
  playPeriod?: number | undefined
  rentalPeriod?: number | undefined
  resolution: 'SD' | 'HD-720' | 'HD-1080' | 'HD-4K' | 'External' | 'Unknown'
  scopes: string[]
  availability: 'Available' | 'ComingSoon'
  customFields?: { [x: string]: unknown } | undefined
  endDate?: string | undefined
  id?: string | undefined
  name?: string | undefined
  price: number
  startDate?: string | undefined
  subscriptionCode?: string | undefined
}
type ThemeColor = { name: string; opacity?: number | undefined; value: string }
type Theme = { colors: ThemeColor[]; type: 'Background' | 'Text' | 'Custom' }
type ItemSummary = {
  advisoryText?: string | undefined
  availableEpisodeCount?: number | undefined
  availableSeasonCount?: number | undefined
  averageUserRating?: number | undefined
  badge?: string | undefined
  channelShortCode?: string | undefined
  classification?: ClassificationSummary | undefined
  contextualTitle?: string | undefined
  customFields?: { [x: string]: unknown } | undefined
  customId?: string | undefined
  duration?: number | undefined
  episodeCount?: number | undefined
  episodeName?: string | undefined
  episodeNumber?: number | undefined
  genres?: string[] | undefined
  hasClosedCaptions?: boolean | undefined
  id: string
  images?: { [x: string]: string } | undefined
  offers?: Offer[] | undefined
  path: string
  releaseYear?: number | undefined
  scopes?: string[] | undefined
  seasonId?: string | undefined
  seasonNumber?: number | undefined
  shortDescription?: string | undefined
  showId?: string | undefined
  showTitle?: string | undefined
  subtype?: string | undefined
  tagline?: string | undefined
  themes?: Theme[] | undefined
  title: string
  type:
    | 'movie'
    | 'show'
    | 'season'
    | 'episode'
    | 'program'
    | 'link'
    | 'trailer'
    | 'channel'
    | 'customAsset'
  watchPath?: string | undefined
}
type ContinueWatchingListDataExpansion = {
  episode?: ItemSummary | undefined
  season?: ItemSummary | undefined
  show?: ItemSummary | undefined
}
type ContinueWatchingListData = {
  itemInclusions?: { [x: string]: ContinueWatchingListDataExpansion } | undefined
}
type ListData = { ContinueWatching?: ContinueWatchingListData | undefined }
type PaginationAuth = {
  scope: 'Catalog' | 'Commerce' | 'Settings'
  type: 'UserAccount' | 'UserProfile'
}
type PaginationOptions = {
  completed?: boolean | undefined
  itemType?:
    | 'movie'
    | 'show'
    | 'season'
    | 'episode'
    | 'program'
    | 'link'
    | 'trailer'
    | 'channel'
    | 'customAsset'
    | undefined
  maxRating?: string | undefined
  order?: 'asc' | 'desc' | undefined
  orderBy?: 'a-z' | 'release-year' | 'date-added' | undefined
  pageSize?: number | undefined
}
type Pagination = {
  authorization?: PaginationAuth | undefined
  next?: string | undefined
  options?: PaginationOptions | undefined
  page: number
  previous?: string | undefined
  size?: number | undefined
  total: number
}
type ItemList = {
  customFields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id: string
  images?: { [x: string]: string } | undefined
  itemTypes?:
    | (
        | 'movie'
        | 'show'
        | 'season'
        | 'episode'
        | 'program'
        | 'link'
        | 'trailer'
        | 'channel'
        | 'customAsset'
      )[]
    | undefined
  items: ItemSummary[]
  listData?: ListData | undefined
  paging: Pagination
  parameter?: string | undefined
  path: string
  shortDescription?: string | undefined
  size: number
  tagline?: string | undefined
  themes?: Theme[] | undefined
  title?: string | undefined
}
type Bookmark = { creationDate: string; itemId: string }
type Credit = {
  name: string
  path: string
  character?: string | undefined
  role:
    | 'actor'
    | 'associateproducer'
    | 'coactor'
    | 'director'
    | 'executiveproducer'
    | 'filminglocation'
    | 'guest'
    | 'narrator'
    | 'other'
    | 'presenter'
    | 'producer'
    | 'productmanager'
    | 'thememusicby'
    | 'voice'
    | 'writer'
}
type ItemCustomMetadata = { name: string; value: string }
type ItemDetail = {
  advisoryText?: string | undefined
  availableEpisodeCount?: number | undefined
  availableSeasonCount?: number | undefined
  averageUserRating?: number | undefined
  badge?: string | undefined
  channelShortCode?: string | undefined
  classification?: ClassificationSummary | undefined
  contextualTitle?: string | undefined
  customFields?: { [x: string]: unknown } | undefined
  customId?: string | undefined
  duration?: number | undefined
  episodeCount?: number | undefined
  episodeName?: string | undefined
  episodeNumber?: number | undefined
  genres?: string[] | undefined
  hasClosedCaptions?: boolean | undefined
  id: string
  images?: { [x: string]: string } | undefined
  offers?: Offer[] | undefined
  path: string
  releaseYear?: number | undefined
  scopes?: string[] | undefined
  seasonId?: string | undefined
  seasonNumber?: number | undefined
  shortDescription?: string | undefined
  showId?: string | undefined
  showTitle?: string | undefined
  subtype?: string | undefined
  tagline?: string | undefined
  themes?: Theme[] | undefined
  title: string
  type:
    | 'movie'
    | 'show'
    | 'season'
    | 'episode'
    | 'program'
    | 'link'
    | 'trailer'
    | 'channel'
    | 'customAsset'
  watchPath?: string | undefined
  copyright?: string | undefined
  credits?: Credit[] | undefined
  customMetadata?: ItemCustomMetadata[] | undefined
  description?: string | undefined
  distributor?: string | undefined
  episodes?: ItemList | undefined
  eventDate?: string | undefined
  genrePaths?: string[] | undefined
  location?: string | undefined
  season?: ItemDetail | undefined
  seasons?: ItemList | undefined
  show?: ItemDetail | undefined
  totalUserRatings?: number | undefined
  trailers?: ItemSummary[] | undefined
  venue?: string | undefined
}
type NextPlaybackItem = {
  firstWatchedDate?: string | undefined
  lastWatchedDate?: string | undefined
  next?: ItemDetail | undefined
  sourceItemId: string
  suggestionType?:
    | 'StartWatching'
    | 'ContinueWatching'
    | 'RestartWatching'
    | 'Sequential'
    | 'None'
    | undefined
}
type UserRating = { itemId: string; rating: number }
type ProfileCreationRequest = {
  languageCode?: string | undefined
  name: string
  pinEnabled?: boolean | undefined
  purchaseEnabled?: boolean | undefined
  segments?: string[] | undefined
}
type ProfileUpdateRequest = {
  heroAutoplay?: boolean | undefined
  heroWithAudio?: boolean | undefined
  languageCode?: string | undefined
  name?: string | undefined
  pinEnabled?: boolean | undefined
  purchaseEnabled?: boolean | undefined
  segments?: string[] | undefined
}
type AccountTokenRequest = {
  cookieType?: 'Session' | 'Persistent' | undefined
  email: string
  password: string
  scopes: ('Catalog' | 'Commerce' | 'Settings' | 'Playback')[]
}
type AccessToken = {
  accountCreated?: boolean | undefined
  expirationDate: string
  refreshable: boolean
  type: 'UserAccount' | 'UserProfile'
  value: string
}
type AccountTokenByCodeRequest = {
  code: string
  id: string
  scopes: ('Catalog' | 'Commerce' | 'Settings' | 'Playback')[]
}
type ProfileTokenRequest = {
  cookieType?: 'Session' | 'Persistent' | undefined
  pin?: string | undefined
  profileId: string
  scopes: ('Catalog' | 'Commerce' | 'Settings')[]
}
type TokenRefreshRequest = { cookieType?: 'Session' | 'Persistent' | undefined; token: string }
type SingleSignOnRequest = {
  cookieType?: 'Session' | 'Persistent' | undefined
  linkAccounts?: boolean | undefined
  provider: 'Facebook'
  scopes?: ('Catalog' | 'Commerce' | 'Settings' | 'Playback')[] | undefined
  token: string
}
type BtPlanListItem = {
  amount?: number | undefined
  ctaText: string
  currency: string
  description: string
  ees07PlanDescription?: string | undefined
  ees07PlanTitle?: string | undefined
  ees07Title?: string | undefined
  headerText: string
  heroText: string
  id: string
  interval?: 'day' | 'week' | 'month' | 'year' | 'none' | undefined
  intervalCount?: number | undefined
  longText: string
  nickname: string
  noThanksText?: string | undefined
  product: string
  switchingText?: string | undefined
  termsAndConditionsItunes?: string | undefined
  termsAndConditionsStripe?: string | undefined
  trialPeriodDays: number
}
type BtPlans = { plans: BtPlanListItem[] }
type ItvAssignBtTokenRequest = { profileToken: string; token: string }
type SubscriptionDetails = { itvData_purchased: { [x: string]: unknown } }
type Classification = {
  code: string
  name: string
  advisoryText?: string | undefined
  images: { [x: string]: string }
  level: number
  system: string
}
type AppConfigDisplay = { themes: Theme[] }
type AppConfigGeneral = {
  currencyCode?: string | undefined
  customFields?: { [x: string]: unknown } | undefined
  defaultTimeZone?: string | undefined
  facebookAppId?: string | undefined
  gaToken?: string | undefined
  itemImageTypes?: { [x: string]: string } | undefined
  mandatorySignIn?: boolean | undefined
  maxUserRating?: number | undefined
  stripeKey?: string | undefined
  websiteUrl?: string | undefined
}
type Language = { code: string; label: string; title: string }
type AppConfigI18n = { languages: Language[] }
type AppConfigLinear = {
  scheduleCacheMaxAgeMinutes?: number | undefined
  viewingWindowDaysAfter?: number | undefined
  viewingWindowDaysBefore?: number | undefined
}
type NavContent = {
  imageType?: string | undefined
  list?: ItemList | undefined
  title?: string | undefined
}
type NavEntry = {
  children?: NavEntry[] | undefined
  content?: NavContent | undefined
  customFields?: { [x: string]: unknown } | undefined
  depth: number
  featured?: boolean | undefined
  icon?: string | undefined
  label?: string | undefined
  path?: string | undefined
}
type Navigation = {
  account?: NavEntry | undefined
  copyright?: string | undefined
  customFields?: { [x: string]: unknown } | undefined
  footer?: NavEntry | undefined
  header: NavEntry[]
  mobile?: NavEntry | undefined
}
type AppConfigPlayback = {
  chainPlayCountdown: number
  chainPlaySqueezeback: number
  chainPlayTimeout: number
  heartbeatFrequency: number
  viewEventPoints: number[]
}
type PageSummary = {
  id: string
  isStatic: boolean
  isSystemPage: boolean
  key?: string | undefined
  path: string
  template: string
  title: string
}
type Plan = {
  alias: string
  benefits: string[]
  billingPeriodFrequency: number
  billingPeriodType: 'day' | 'week' | 'month' | 'year' | 'none'
  currency: string
  customFields?: { [x: string]: unknown } | undefined
  hasTrialPeriod: boolean
  id: string
  isActive: boolean
  isFeatured: boolean
  isPrivate: boolean
  price?: number | undefined
  revenueType: 'TVOD' | 'SVOD'
  subscriptionCode: string
  tagline: string
  termsAndConditions: string
  title: string
  trialPeriodDays: number
  type: 'Free' | 'Subscription'
}
type AppConfigSubscription = { plans?: Plan[] | undefined }
type AppConfig = {
  classification?: { [x: string]: Classification } | undefined
  display?: AppConfigDisplay | undefined
  general?: AppConfigGeneral | undefined
  i18n?: AppConfigI18n | undefined
  linear?: AppConfigLinear | undefined
  navigation?: Navigation | undefined
  playback?: AppConfigPlayback | undefined
  sitemap?: PageSummary[] | undefined
  subscription?: AppConfigSubscription | undefined
}
type EeBtEligibility = { eligible: boolean; plan?: string | undefined; source?: string | undefined }
type ItvAssignMsisdnRequest = {
  eeProductId: string
  msisdn: string
  profileToken: string
  trackingHeader: string
}
type EeOffersRequest = { accessToken: string; msisdn: string; trackingHeader?: string | undefined }
type EeOfferItem = { name: string }
type EeOffersResponse = { eligibleOffers: EeOfferItem[] }
type EeValidatePinRequest = {
  accessToken: string
  pin: string
  pinReference: string
  trackingHeader?: string | undefined
}
type EeValidatePinResponse = { pinValid?: string | undefined; trackingHeader: string }
type EeCreatePinRequest = {
  accessToken: string
  msisdn: string
  trackingHeader?: string | undefined
}
type EeCreatePinResponse = { pinReference: string; trackingHeader: string }
type EePlanListItem = {
  amount?: number | undefined
  ctaText: string
  currency: string
  description: string
  headerText: string
  heroText: string
  id: string
  interval?: 'day' | 'week' | 'month' | 'year' | 'none' | undefined
  intervalCount?: number | undefined
  longText: string
  nickname: string
  product: string
  trialPeriodDays: number
}
type EePlans = { plans: EePlanListItem[] }
type EeCreateTokenResponse = {
  accessToken?: string | undefined
  expiresIn?: number | undefined
  tokenType?: string | undefined
}
type ItvBillingHistoryRequest = { profileToken: string }
type ItvBillingHistoryRecord = {
  card: { [x: string]: unknown }
  charge: { [x: string]: unknown }
  invoice: { [x: string]: unknown }
  subscription: { [x: string]: unknown }
}
type ItvBillingHistory = { payment_history: ItvBillingHistoryRecord[] }
type ItvGetCardDetailsRequest = { profileToken: string }
type ItvCardDetails = { card_type: string; exp_month: number; exp_year: number; last4: string }
type ItvChangeCardDetailsRequest = { cardToken: string; profileToken: string }
type ItvChangeEmailRequest = { email: string; profileToken: string }
type ItvChangeMarketingRequest = { emailOptIn: boolean; profileToken: string }
type ItvDeleteAccountRequest = { profileToken: string }
type ItvEntitlementCurrent = { source: string }
type ItvEntitlementCancelation = {
  cancelled_at: string
  itvId: string
  source: string
  subscriptionId: string
}
type ItvEntitlement = {
  card_type?: string | undefined
  expiry: string
  plan: { [x: string]: unknown }
  source: string
  subscriptionId: string
}
type ItvEntitlementsHistory = {
  cancellations: ItvEntitlementCancelation[]
  entitlements: ItvEntitlement[]
}
type ItvFeatureFlag = { enabled: boolean; flag?: string | undefined }
type ItvGooglePaySubscriptionRequest = { purchaseToken: string; subscriptionItem: string }
type ItvHadEntitlement = { hasHadEntitlements: boolean }
type ItemDownloadableRequest = { ids: string }
type ItemClipFile = {
  channels?: number | undefined
  deliveryType: 'Stream' | 'Progressive' | 'Download'
  drm: string
  format: string
  height: number
  language: string
  name: string
  resolution: 'SD' | 'HD-720' | 'HD-1080' | 'HD-4K' | 'External' | 'Unknown'
  url: string
  width: number
}
type ItemClipFiles = { clips: ItemClipFile[]; id: string }
type ItemClipFilesList = { items: ItemClipFiles[] }
type ItemDownloadable = { downloadable: boolean; id: string }
type ItemDownloadableList = { items: ItemDownloadable[] }
type Person = { name: string; path: string }
type PageEntry = {
  customFields?: { [x: string]: unknown } | undefined
  id: string
  images?: { [x: string]: string } | undefined
  item?: ItemSummary | undefined
  list?: ItemList | undefined
  people?: Person[] | undefined
  template: string
  text?: string | undefined
  title: string
  type:
    | 'ItemEntry'
    | 'ItemDetailEntry'
    | 'ListEntry'
    | 'ListDetailEntry'
    | 'UserEntry'
    | 'TextEntry'
    | 'ImageEntry'
    | 'CustomEntry'
    | 'PeopleEntry'
}
type PageMetadata = {
  description?: string | undefined
  keywords?: string[] | undefined
  segments?: string[] | undefined
}
type Page = {
  id: string
  isStatic: boolean
  isSystemPage: boolean
  key?: string | undefined
  path: string
  template: string
  title: string
  customFields?: { [x: string]: unknown } | undefined
  entries: PageEntry[]
  item?: ItemDetail | undefined
  list?: ItemList | undefined
  metadata?: PageMetadata | undefined
  themes?: Theme[] | undefined
}
type ItvPinAuthRequest = {
  cookieType?: 'Session' | 'Persistent' | undefined
  pin: string
  scopes?: ('Catalog' | 'Commerce' | 'Settings' | 'Playback')[] | undefined
}
type ItvUpgradePlanRequest = { planId: string }
type ItvPlanListItem = {
  amount: number
  currency: string
  description: string
  id: string
  interval: 'day' | 'week' | 'month' | 'year' | 'none'
  intervalCount: number
  nickname: string
  product: string
  savingLabel?: string | undefined
  switchingText?: string | undefined
  trialPeriodDays?: number | undefined
}
type ItvPlans = { plans: ItvPlanListItem[] }
type ItvUpdateProfileRequest = {
  dateOfBirth?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  postcode?: string | undefined
  profileToken: string
  title?: string | undefined
}
type ItvProfileTokenRequest = { password: string }
type ItvProfileToken = { profileToken: string }
type ItvCancelSubscriptionRequest = { profileToken: string }
type ItvCurrentSubscription = {
  cancelAtPeriodEnd: boolean
  collectionMethod: string
  created: number
  currentPeriodEnd: number
  currentPeriodStart: number
  plan: { [x: string]: unknown }
  status: string
}
type ItvPurchaseRequest = {
  cardToken: string
  planId: string
  profileToken: string
  voucher?: string | undefined
}
type ItvPurchase = {
  customerId?: string | undefined
  planId: string
  subscriptionId?: string | undefined
}
type ItvPurchaseStrongRequest = {
  paymentMethodFromToken?: string | undefined
  paymentMethodId?: string | undefined
  planId: string
  profileToken: string
  voucher?: string | undefined
}
type ItvPurchaseStrongResponse = {
  clientSecret?: string | undefined
  customerId?: string | undefined
  intentId?: string | undefined
  intentType?: string | undefined
  planId?: string | undefined
  status?: string | undefined
  subscriptionId?: string | undefined
}
type ItvPurchaseWithOfferRequest = {
  couponId: string
  paymentMethodFromToken?: string | undefined
  paymentMethodId?: string | undefined
  planId: string
  profileToken: string
}
type ItvPurchaseWithOfferResponse = {
  clientSecret?: string | undefined
  customerId?: string | undefined
  intentId?: string | undefined
  intentType?: string | undefined
  paymentMethodId?: string | undefined
  status?: string | undefined
  subscriptionId?: string | undefined
}
type RokuPlanListItem = {
  amount: number
  currency: string
  description: string
  interval: 'day' | 'week' | 'month' | 'year' | 'none'
  intervalCount: number
  nickname: string
  product: string
  productCode: string
  savingLabel: string
  trialPeriodDays: number
}
type RokuPlans = { plans: RokuPlanListItem[]; termsAndConditions: string }
type ItvRokuTransactionRequest = { profileToken: string }
type ItvGetDiscountResponse = {
  currency?: string | undefined
  description?: string | undefined
  headline?: string | undefined
  id: string
  initialCost?: number | undefined
  longDescription?: string | undefined
  nickname?: string | undefined
  offerdurationperiod?: string | undefined
  shortDescription?: string | undefined
}
type ItvSubscriptionFullPriceRenewal = { fullPriceRenewal: boolean; reason: string }
type ItvSubscriptionStatusResponse = { is_active: boolean }
type ItvSubscriptionState = {
  effective_entitlements: ItvEntitlement[]
  failed_availability_checks: string[]
  purchased: string[]
  source: string
}
type ItvUpdateIntentStrongRequest = {
  paymentMethodFromToken?: string | undefined
  paymentMethodId?: string | undefined
  profileToken: string
}
type ItvUpdateIntentStrongResponse = {
  clientSecret?: string | undefined
  intentId?: string | undefined
  intentType?: string | undefined
  status?: string | undefined
}
type ItvUpdatePaymentStrongRequest = {
  paymentMethodFromToken?: string | undefined
  paymentMethodId?: string | undefined
  profileToken: string
}
type ItvVoucherDisplay = {
  currency?: string | undefined
  discountPrice?: string | undefined
  duration?: string | undefined
  durationInMonths?: number | undefined
  headlineLabel?: string | undefined
  initialCost?: number | undefined
  longDescription?: string | undefined
  percentOff?: number | undefined
  savingLabel?: string | undefined
  shortDescription?: string | undefined
}
type ItvVoucherLinksHref = { href: string }
type ItvVoucherLinks = { redeem: ItvVoucherLinksHref; self: ItvVoucherLinksHref }
type ItvVoucher = {
  display: ItvVoucherDisplay
  id: string
  links: ItvVoucherLinks
  offerType: 'stripe' | 'talon one'
}
type ItvVoucherRequest = { voucher: string }
type RegistrationRequest = {
  email: string
  firstName?: string | undefined
  languageCode?: string | undefined
  lastName?: string | undefined
  marketing?: boolean | undefined
  password: string
  pin?: string | undefined
  segments?: string[] | undefined
}
type PasswordResetEmailRequest = { email: string }
type PasswordResetRequest = { password: string; resetToken: string }
type SamsungPreviewSectionTile = {
  action_data: string
  display_from?: string | undefined
  display_until?: string | undefined
  image_ratio: string
  image_url: string
  is_playable: boolean
  position?: number | undefined
  subtitle?: string | undefined
  title?: string | undefined
}
type SamsungPreviewSection = {
  position?: number | undefined
  tiles: SamsungPreviewSectionTile[]
  title?: string | undefined
}
type SamsungPreview = {
  expires?: bigint | undefined
  expires_only?: boolean | undefined
  sections: SamsungPreviewSection[]
}
type ItemSchedule = {
  blackout?: boolean | undefined
  channelId: string
  endDate: string
  featured?: boolean | undefined
  id: string
  live?: boolean | undefined
  repeat?: boolean | undefined
  startDate: string
}
type ItemScheduleList = {
  channelId: string
  endDate: string
  schedules: ItemSchedule[]
  startDate: string
}
type SearchResults = {
  items?: ItemList | undefined
  movies?: ItemList | undefined
  other?: ItemList | undefined
  people?: Person[] | undefined
  term: string
  total: number
  tv?: ItemList | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/billing/methods': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: PaymentMethod[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AddPaymentMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/billing/methods/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/billing/purchases': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Purchase[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: Entitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PurchaseRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/billing/subscriptions/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                planId?: string | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/devices': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: AccountDevices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/devices/authorization': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceAuthorizationCode }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceAuthorizationCode }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceAuthorizationCode }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceAuthorizationCode }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceAuthorizationCode }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceAuthorizationCode }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/devices/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/devices/:id/name': {
      $put:
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/entitlements': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Entitlement[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/items/:id/videos': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: MediaFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/items/:id/videos-guarded': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: MediaFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/nonce': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: AccountNonce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/password': {
      $put:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePasswordRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/pin': {
      $put:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ChangePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ProfileDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/bookmarks': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/bookmarks/list': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/bookmarks/:itemId': {
      $delete:
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/continue-watching/list': {
      $get:
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                show_item_type?: 'episode' | 'season' | 'show' | undefined
                include?: ('episode' | 'season' | 'show')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/items/:itemId/next': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: NextPlaybackItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/ratings': {
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: { [x: string]: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/ratings/list': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/ratings/:itemId': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: UserRating
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: UserRating
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                rating: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/watched': {
      $delete:
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                item_ids?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: { [x: string]: Watched }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/watched/list': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                completed?: boolean | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'date-added' | 'date-modified' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profile/watched/:itemId': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Watched
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Watched
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                position: number
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profiles': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ProfileDetail
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileCreationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/profiles/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ProfileSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/request-email-verification': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorization': {
      $delete:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorization/device': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: AccountTokenByCodeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorization/device/code': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: DeviceAuthorizationCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: DeviceRegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorization/profile': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorization/refresh': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: TokenRefreshRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/authorization/sso': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: SingleSignOnRequest }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: SingleSignOnRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: SingleSignOnRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: SingleSignOnRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: SingleSignOnRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: SingleSignOnRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/bt/plan/:token': {
      $get:
        | {
            input: { param: { token: string } } & { query: { lang?: string | undefined } }
            output: BtPlanListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { token: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { token: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bt/plans': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: BtPlans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bt/token/assign': {
      $post:
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvAssignBtTokenRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvAssignBtTokenRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvAssignBtTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/bt/token/validate': {
      $get:
        | {
            input: {
              query: {
                id: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                id: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                id: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                id: string
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check-subscription/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SubscriptionDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/config': {
      $get:
        | {
            input: {
              query: {
                include?:
                  | (
                      | 'classification'
                      | 'playback'
                      | 'sitemap'
                      | 'navigation'
                      | 'subscription'
                      | 'general'
                      | 'display'
                      | 'i18n'
                      | 'linear'
                    )[]
                  | undefined
                system?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: AppConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?:
                  | (
                      | 'classification'
                      | 'playback'
                      | 'sitemap'
                      | 'navigation'
                      | 'subscription'
                      | 'general'
                      | 'display'
                      | 'i18n'
                      | 'linear'
                    )[]
                  | undefined
                system?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include?:
                  | (
                      | 'classification'
                      | 'playback'
                      | 'sitemap'
                      | 'navigation'
                      | 'subscription'
                      | 'general'
                      | 'display'
                      | 'i18n'
                      | 'linear'
                    )[]
                  | undefined
                system?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                include?:
                  | (
                      | 'classification'
                      | 'playback'
                      | 'sitemap'
                      | 'navigation'
                      | 'subscription'
                      | 'general'
                      | 'display'
                      | 'i18n'
                      | 'linear'
                    )[]
                  | undefined
                system?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                include?:
                  | (
                      | 'classification'
                      | 'playback'
                      | 'sitemap'
                      | 'navigation'
                      | 'subscription'
                      | 'general'
                      | 'display'
                      | 'i18n'
                      | 'linear'
                    )[]
                  | undefined
                system?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                include?:
                  | (
                      | 'classification'
                      | 'playback'
                      | 'sitemap'
                      | 'navigation'
                      | 'subscription'
                      | 'general'
                      | 'display'
                      | 'i18n'
                      | 'linear'
                    )[]
                  | undefined
                system?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ee-bt/eligibility': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: EeBtEligibility
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/ee/msisdn': {
      $post:
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvAssignMsisdnRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvAssignMsisdnRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvAssignMsisdnRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ee/offers': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeOffersRequest }
            output: EeOffersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeOffersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeOffersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeOffersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeOffersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeOffersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ee/pin': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeValidatePinRequest }
            output: EeValidatePinResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeValidatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeValidatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeValidatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeValidatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeValidatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeCreatePinRequest }
            output: EeCreatePinResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeCreatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeCreatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeCreatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeCreatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: EeCreatePinRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ee/plans': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: EePlans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ee/plans/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { lang?: string | undefined } }
            output: EePlanListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ee/token/create': {
      $get:
        | { input: {}; output: EeCreateTokenResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/items/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'all' | 'children' | 'ancestors' | 'parent' | undefined
                select_season?: 'first' | 'latest' | undefined
                use_custom_id?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'all' | 'children' | 'ancestors' | 'parent' | undefined
                select_season?: 'first' | 'latest' | undefined
                use_custom_id?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'all' | 'children' | 'ancestors' | 'parent' | undefined
                select_season?: 'first' | 'latest' | undefined
                use_custom_id?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'all' | 'children' | 'ancestors' | 'parent' | undefined
                select_season?: 'first' | 'latest' | undefined
                use_custom_id?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'all' | 'children' | 'ancestors' | 'parent' | undefined
                select_season?: 'first' | 'latest' | undefined
                use_custom_id?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'all' | 'children' | 'ancestors' | 'parent' | undefined
                select_season?: 'first' | 'latest' | undefined
                use_custom_id?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/items/:id/children': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/items/:id/related': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/items/:id/videos': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: MediaFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                delivery: ('stream' | 'progressive' | 'download')[]
                resolution: 'HD-4K' | 'HD-1080' | 'HD-720' | 'SD' | 'External'
                formats?: ('mp4' | 'mpd' | 'hls' | 'external')[] | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/items/:itemId/next': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: NextPlaybackItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: {
                max_rating?: string | undefined
                expand?: 'parent' | 'ancestors' | undefined
                device?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/billinghistory/:platform': {
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvBillingHistoryRequest
            }
            output: ItvBillingHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvBillingHistoryRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvBillingHistoryRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvBillingHistoryRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvBillingHistoryRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvBillingHistoryRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/cards/:platform': {
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvGetCardDetailsRequest
            }
            output: ItvCardDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvGetCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvGetCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvGetCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvGetCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvGetCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvChangeCardDetailsRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvChangeCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvChangeCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvChangeCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvChangeCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvChangeCardDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/changeemail': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeEmailRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/changemarketing': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeMarketingRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeMarketingRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeMarketingRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeMarketingRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeMarketingRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvChangeMarketingRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/deleteaccount': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvDeleteAccountRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvDeleteAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvDeleteAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvDeleteAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvDeleteAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvDeleteAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/entitlements/current': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: ItvEntitlementCurrent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/entitlements/history': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: ItvEntitlementsHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/featureFlag/:feature': {
      $get:
        | {
            input: { param: { feature: string } } & { query: { lang?: string | undefined } }
            output: ItvFeatureFlag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feature: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { feature: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { feature: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { feature: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { feature: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/googlepay/subscription': {
      $post:
        | {
            input: { query: { lang?: string | undefined } } & {
              json: ItvGooglePaySubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { lang?: string | undefined } } & {
              json: ItvGooglePaySubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } } & {
              json: ItvGooglePaySubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { lang?: string | undefined } } & {
              json: ItvGooglePaySubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { lang?: string | undefined } } & {
              json: ItvGooglePaySubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } } & {
              json: ItvGooglePaySubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/itv/had/entitlements': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: ItvHadEntitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/items/clips': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ItemClipFilesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/items/downloadable': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ItemDownloadableList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItemDownloadableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/itemsummary/:externalId': {
      $get:
        | {
            input: { param: { externalId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { externalId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { externalId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { externalId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { externalId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { externalId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/page': {
      $get:
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Page
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/pinauthorization': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvPinAuthRequest }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvPinAuthRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvPinAuthRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvPinAuthRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvPinAuthRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvPinAuthRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/plan/:platform': {
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpgradePlanRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpgradePlanRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpgradePlanRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpgradePlanRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpgradePlanRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpgradePlanRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/plans/:platform': {
      $get:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ItvPlans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/profile': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvUpdateProfileRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvUpdateProfileRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvUpdateProfileRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvUpdateProfileRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvUpdateProfileRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: ItvUpdateProfileRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/profile/recommendation/list': {
      $get:
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                item_types?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/profiletoken': {
      $post:
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvProfileTokenRequest }
            output: ItvProfileToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: ItvProfileTokenRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/purchase/:platform': {
      $delete:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvCancelSubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvCancelSubscriptionRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvCancelSubscriptionRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvCancelSubscriptionRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvCancelSubscriptionRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvCancelSubscriptionRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ItvCurrentSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseRequest
            }
            output: ItvPurchase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/purchase/:platform/strong': {
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseStrongRequest
            }
            output: ItvPurchaseStrongResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/purchase/:platform/withoffer': {
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseWithOfferRequest
            }
            output: ItvPurchaseWithOfferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseWithOfferRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseWithOfferRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseWithOfferRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseWithOfferRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvPurchaseWithOfferRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/resubscribe/:platform': {
      $post:
        | {
            input: { param: { platform: string } } & {
              query: { planId: string; lang?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & {
              query: { planId: string; lang?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { platform: string } } & {
              query: { planId: string; lang?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { platform: string } } & {
              query: { planId: string; lang?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { platform: string } } & {
              query: { planId: string; lang?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { platform: string } } & {
              query: { planId: string; lang?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/itv/roku/plans': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: RokuPlans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/roku/transaction/:transactionid': {
      $post:
        | {
            input: { param: { transactionid: string } } & {
              query: { lang?: string | undefined }
            } & { json: ItvRokuTransactionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { transactionid: string } } & {
              query: { lang?: string | undefined }
            } & { json: ItvRokuTransactionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transactionid: string } } & {
              query: { lang?: string | undefined }
            } & { json: ItvRokuTransactionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transactionid: string } } & {
              query: { lang?: string | undefined }
            } & { json: ItvRokuTransactionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transactionid: string } } & {
              query: { lang?: string | undefined }
            } & { json: ItvRokuTransactionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { transactionid: string } } & {
              query: { lang?: string | undefined }
            } & { json: ItvRokuTransactionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/save-offer': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: ItvGetDiscountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { lang?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/itv/subscription/fullpricerenewal': {
      $get: {
        input: { query: { lang?: string | undefined } }
        output: ItvSubscriptionFullPriceRenewal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/itv/subscription/status/:platform': {
      $get: {
        input: { param: { platform: string } } & { query: { lang?: string | undefined } }
        output: ItvSubscriptionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/itv/subscriptionstate': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: ItvSubscriptionState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/upcominginvoice': {
      $get:
        | {
            input: { query: { lang?: string | undefined } }
            output: ItvGetDiscountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { lang?: string | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/updateIntent/strong/:platform': {
      $put:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdateIntentStrongRequest
            }
            output: ItvUpdateIntentStrongResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdateIntentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdateIntentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdateIntentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdateIntentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdateIntentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/updatePayment/strong/:platform': {
      $put:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdatePaymentStrongRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdatePaymentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdatePaymentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdatePaymentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdatePaymentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvUpdatePaymentStrongRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/voucher/:planId/:voucherId': {
      $get:
        | {
            input: { param: { voucherId: string; planId: string } } & {
              query: { lang?: string | undefined }
            }
            output: ItvVoucher
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voucherId: string; planId: string } } & {
              query: { lang?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { voucherId: string; planId: string } } & {
              query: { lang?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { voucherId: string; planId: string } } & {
              query: { lang?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { voucherId: string; planId: string } } & {
              query: { lang?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { voucherId: string; planId: string } } & {
              query: { lang?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/itv/voucher/:platform': {
      $post:
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvVoucherRequest
            }
            output: ItvVoucher
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvVoucherRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvVoucherRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvVoucherRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvVoucherRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { platform: string } } & { query: { lang?: string | undefined } } & {
              json: ItvVoucherRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lists': {
      $get:
        | {
            input: {
              query: {
                ids: string[]
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids: string[]
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ids: string[]
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ids: string[]
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ids: string[]
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ids: string[]
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lists/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                param?: string | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                param?: string | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                param?: string | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                param?: string | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                param?: string | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                max_rating?: string | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'a-z' | 'release-year' | 'date-added' | undefined
                param?: string | undefined
                item_type?:
                  | 'movie'
                  | 'show'
                  | 'season'
                  | 'episode'
                  | 'program'
                  | 'link'
                  | 'trailer'
                  | 'channel'
                  | 'customAsset'
                  | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/page': {
      $get:
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Page
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                path: string
                list_page_size?: number | undefined
                list_page_size_large?: number | undefined
                max_list_prefetch?: number | undefined
                item_detail_expand?: 'all' | 'children' | 'ancestors' | undefined
                item_detail_select_season?: 'first' | 'latest' | undefined
                text_entry_format?: 'markdown' | 'html' | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/plans/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/register': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: RegistrationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/request-password-reset': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetEmailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reset-password': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            } & { json: PasswordResetRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/samsung-preview': {
      $get:
        | { input: {}; output: SamsungPreview; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/schedules': {
      $get:
        | {
            input: {
              query: {
                channels: string[]
                date: string
                hour: number
                duration: number
                intersect?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ItemScheduleList[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channels: string[]
                date: string
                hour: number
                duration: number
                intersect?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                channels: string[]
                date: string
                hour: number
                duration: number
                intersect?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                channels: string[]
                date: string
                hour: number
                duration: number
                intersect?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                channels: string[]
                date: string
                hour: number
                duration: number
                intersect?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                channels: string[]
                date: string
                hour: number
                duration: number
                intersect?: boolean | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                term: string
                include?: ('tv' | 'movies' | 'people' | 'other')[] | undefined
                group?: boolean | undefined
                max_results?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                term: string
                include?: ('tv' | 'movies' | 'people' | 'other')[] | undefined
                group?: boolean | undefined
                max_results?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                term: string
                include?: ('tv' | 'movies' | 'people' | 'other')[] | undefined
                group?: boolean | undefined
                max_results?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                term: string
                include?: ('tv' | 'movies' | 'people' | 'other')[] | undefined
                group?: boolean | undefined
                max_results?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                term: string
                include?: ('tv' | 'movies' | 'people' | 'other')[] | undefined
                group?: boolean | undefined
                max_results?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                term: string
                include?: ('tv' | 'movies' | 'people' | 'other')[] | undefined
                group?: boolean | undefined
                max_results?: number | undefined
                max_rating?: string | undefined
                device?: string | undefined
                sub?: string | undefined
                segments?: string[] | undefined
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/verify-email': {
      $post:
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ff?: ('all' | 'idp' | 'ldp' | 'hb' | 'rpt' | 'cas' | 'lrl' | 'cd')[] | undefined
                lang?: string | undefined
              }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
