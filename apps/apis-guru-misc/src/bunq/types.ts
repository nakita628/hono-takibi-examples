type AttachmentPublic = { [x: string]: unknown }
type BunqId = { id?: number | undefined }
type AttachmentPublicCreate = { Id?: BunqId | undefined }
type Error = {
  error_description?: string | undefined
  error_description_translated?: string | undefined
}[]
type AttachmentPublicContentListing = { [x: string]: unknown }
type AttachmentUrl = { type?: string | undefined; url?: string | undefined }
type Attachment = {
  content_type?: string | undefined
  description?: string | undefined
  urls?: AttachmentUrl[] | undefined
}
type AttachmentPublicRead = {
  attachment?: Attachment | undefined
  created?: string | undefined
  updated?: string | undefined
  uuid?: string | undefined
}
type Image = {
  attachment_public_uuid?: string | undefined
  content_type?: string | undefined
  height?: number | undefined
  width?: number | undefined
}
type Avatar = {
  anchor_uuid?: string | undefined
  image?: Image[] | undefined
  style?: string | undefined
  uuid?: string | undefined
}
type AvatarCreate = { uuid?: string | undefined }
type AvatarRead = { image?: Image[] | undefined; uuid?: string | undefined }
type DeviceServer = { description: string; permitted_ips?: string[] | undefined; secret: string }
type DeviceListing = { DeviceServer?: DeviceServer | undefined }
type DeviceServerListing = {
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  ip?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type DeviceServerCreate = { id?: number | undefined }
type DeviceServerRead = {
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  ip?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type DeviceRead = { DeviceServer?: DeviceServer | undefined }
type InstallationListing = { id?: number | undefined }
type Installation = { client_public_key: string }
type InstallationServerPublicKey = { server_public_key?: string | undefined }
type InstallationToken = {
  created?: string | undefined
  id?: number | undefined
  token?: string | undefined
  updated?: string | undefined
}
type InstallationCreate = {
  Id?: BunqId | undefined
  ServerPublicKey?: InstallationServerPublicKey | undefined
  Token?: InstallationToken | undefined
}
type InstallationServerPublicKeyListing = { server_public_key?: string | undefined }
type InstallationRead = { id?: number | undefined }
type PaymentServiceProviderCredential = {
  client_payment_service_provider_certificate: string
  client_payment_service_provider_certificate_chain: string
  client_public_key_signature: string
}
type PaymentServiceProviderCredentialCreate = { Id?: BunqId | undefined }
type PermittedDevice = { description?: string | undefined; ip?: string | undefined }
type PaymentServiceProviderCredentialRead = {
  created?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
  permitted_device?: PermittedDevice | undefined
  status?: string | undefined
  token_value?: string | undefined
  updated?: string | undefined
}
type PlacePhotoLookupContentListing = { [x: string]: unknown }
type SandboxUserCompany = { [x: string]: unknown }
type SandboxUserCompanyCreate = { Id?: BunqId | undefined }
type SandboxUserPerson = { [x: string]: unknown }
type SandboxUserPersonCreate = { Id?: BunqId | undefined }
type ServerError = { [x: string]: unknown }
type ServerErrorCreate = { Id?: BunqId | undefined }
type SessionServer = { secret: string }
type SessionServerToken = { id?: number | undefined; token?: string | undefined }
type Address = {
  city?: string | undefined
  country?: string | undefined
  extra?: string | undefined
  house_number?: string | undefined
  is_user_address_updated?: boolean | undefined
  mailbox_name?: string | undefined
  po_box?: string | undefined
  postal_code?: string | undefined
  province?: string | undefined
  street?: string | undefined
}
type Pointer = {
  name?: string | undefined
  service?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type BillingContractSubscription = {
  contract_date_end?: string | undefined
  contract_date_start?: string | undefined
  contract_version?: number | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  subscription_type?: string | undefined
  subscription_type_downgrade?: string | undefined
  updated?: string | undefined
}
type Customer = {
  billing_account_id?: string | undefined
  created?: string | undefined
  id?: number | undefined
  invoice_notification_preference?: string | undefined
  updated?: string | undefined
}
type Amount = { currency?: string | undefined; value?: string | undefined }
type CustomerLimit = {
  limit_amount_monthly?: Amount | undefined
  limit_card_debit_maestro?: number | undefined
  limit_card_debit_mastercard?: number | undefined
  limit_card_debit_wildcard?: number | undefined
  limit_card_replacement?: number | undefined
  limit_card_wildcard?: number | undefined
  limit_monetary_account?: number | undefined
  limit_monetary_account_remaining?: number | undefined
  spent_amount_monthly?: Amount | undefined
}
type LabelUser = {
  avatar?: Avatar | undefined
  country?: string | undefined
  display_name?: string | undefined
  public_nick_name?: string | undefined
  uuid?: string | undefined
}
type NotificationFilter = {
  category?: string | undefined
  notification_delivery_method?: string | undefined
  notification_target?: string | undefined
}
type RelationUser = {
  counter_label_user?: LabelUser | undefined
  counter_user_id?: string | undefined
  counter_user_status?: string | undefined
  label_user?: LabelUser | undefined
  relationship?: string | undefined
  status?: string | undefined
  user_id?: string | undefined
  user_status?: string | undefined
}
type TaxResident = {
  country?: string | undefined
  status?: string | undefined
  tax_number?: string | undefined
}
type Ubo = {
  date_of_birth?: string | undefined
  name?: string | undefined
  nationality?: string | undefined
}
type UserCompany = {
  address_main?: Address | undefined
  address_postal?: Address | undefined
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  avatar_uuid?: string | undefined
  billing_contract?: BillingContractSubscription[] | undefined
  chamber_of_commerce_number?: string | undefined
  counter_bank_iban?: string | undefined
  country?: string | undefined
  created?: string | undefined
  customer?: Customer | undefined
  customer_limit?: CustomerLimit | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  deny_reason?: string | undefined
  directors?: LabelUser[] | undefined
  display_name?: string | undefined
  id?: number | undefined
  language?: string | undefined
  legal_form?: string | undefined
  name?: string | undefined
  notification_filters?: NotificationFilter[] | undefined
  public_nick_name?: string | undefined
  public_uuid?: string | undefined
  region?: string | undefined
  relations?: RelationUser[] | undefined
  sector_of_industry?: string | undefined
  session_timeout?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  tax_resident?: TaxResident[] | undefined
  type_of_business_entity?: string | undefined
  ubo?: Ubo[] | undefined
  updated?: string | undefined
  version_terms_of_service?: string | undefined
}
type UserPaymentServiceProvider = {
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  certificate_distinguished_name?: string | undefined
  created?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  language?: string | undefined
  public_nick_name?: string | undefined
  public_uuid?: string | undefined
  region?: string | undefined
  session_timeout?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
}
type UserPerson = {
  address_main?: Address | undefined
  address_postal?: Address | undefined
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  avatar_uuid?: string | undefined
  country_of_birth?: string | undefined
  created?: string | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  date_of_birth?: string | undefined
  display_name?: string | undefined
  document_back_attachment_id?: number | undefined
  document_country_of_issuance?: string | undefined
  document_front_attachment_id?: number | undefined
  document_number?: string | undefined
  document_type?: string | undefined
  first_name?: string | undefined
  gender?: string | undefined
  id?: number | undefined
  language?: string | undefined
  last_name?: string | undefined
  legal_guardian_alias?: Pointer | undefined
  legal_name?: string | undefined
  middle_name?: string | undefined
  nationality?: string | undefined
  notification_filters?: NotificationFilter[] | undefined
  place_of_birth?: string | undefined
  public_nick_name?: string | undefined
  public_uuid?: string | undefined
  region?: string | undefined
  relations?: RelationUser[] | undefined
  session_timeout?: number | undefined
  signup_track_type?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  subscription_type?: string | undefined
  tax_resident?: TaxResident[] | undefined
  updated?: string | undefined
  version_terms_of_service?: string | undefined
}
type UserApiKeyAnchoredUser = {
  UserCompany?: UserCompany | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
  UserPerson?: UserPerson | undefined
}
type UserApiKey = {
  created?: string | undefined
  granted_by_user?: UserApiKeyAnchoredUser | undefined
  id?: number | undefined
  requested_by_user?: UserApiKeyAnchoredUser | undefined
  updated?: string | undefined
}
type SessionServerCreate = {
  Id?: BunqId | undefined
  Token?: SessionServerToken | undefined
  UserApiKey?: UserApiKey | undefined
  UserCompany?: UserCompany | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
  UserPerson?: UserPerson | undefined
}
type SessionDelete = { [x: string]: unknown }
type UserListing = {
  UserApiKey?: UserApiKey | undefined
  UserCompany?: UserCompany | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
  UserPerson?: UserPerson | undefined
}
type UserCompanyRead = {
  address_main?: Address | undefined
  address_postal?: Address | undefined
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  billing_contract?: BillingContractSubscription[] | undefined
  chamber_of_commerce_number?: string | undefined
  counter_bank_iban?: string | undefined
  country?: string | undefined
  created?: string | undefined
  customer?: Customer | undefined
  customer_limit?: CustomerLimit | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  deny_reason?: string | undefined
  directors?: LabelUser[] | undefined
  display_name?: string | undefined
  id?: number | undefined
  language?: string | undefined
  legal_form?: string | undefined
  name?: string | undefined
  notification_filters?: NotificationFilter[] | undefined
  public_nick_name?: string | undefined
  public_uuid?: string | undefined
  region?: string | undefined
  relations?: RelationUser[] | undefined
  sector_of_industry?: string | undefined
  session_timeout?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  tax_resident?: TaxResident[] | undefined
  type_of_business_entity?: string | undefined
  ubo?: Ubo[] | undefined
  updated?: string | undefined
  version_terms_of_service?: string | undefined
}
type UserCompanyUpdate = { id?: number | undefined }
type UserCompanyNameListing = { name_array?: string[] | undefined }
type UserPaymentServiceProviderRead = {
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  certificate_distinguished_name?: string | undefined
  created?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  language?: string | undefined
  public_nick_name?: string | undefined
  public_uuid?: string | undefined
  region?: string | undefined
  session_timeout?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
}
type UserPersonRead = {
  address_main?: Address | undefined
  address_postal?: Address | undefined
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  country_of_birth?: string | undefined
  created?: string | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  date_of_birth?: string | undefined
  display_name?: string | undefined
  first_name?: string | undefined
  gender?: string | undefined
  id?: number | undefined
  language?: string | undefined
  last_name?: string | undefined
  legal_name?: string | undefined
  middle_name?: string | undefined
  nationality?: string | undefined
  notification_filters?: NotificationFilter[] | undefined
  place_of_birth?: string | undefined
  public_nick_name?: string | undefined
  public_uuid?: string | undefined
  region?: string | undefined
  relations?: RelationUser[] | undefined
  session_timeout?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  tax_resident?: TaxResident[] | undefined
  updated?: string | undefined
  version_terms_of_service?: string | undefined
}
type UserPersonUpdate = { id?: number | undefined }
type UserRead = {
  UserApiKey?: UserApiKey | undefined
  UserCompany?: UserCompany | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
  UserPerson?: UserPerson | undefined
}
type AttachmentUserContentListing = { [x: string]: unknown }
type AttachmentUserRead = {
  attachment?: Attachment | undefined
  created?: string | undefined
  id?: number | undefined
  updated?: string | undefined
}
type BillingContractSubscriptionListing = {
  contract_date_end?: string | undefined
  contract_date_start?: string | undefined
  contract_version?: number | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  subscription_type?: string | undefined
  subscription_type_downgrade?: string | undefined
  updated?: string | undefined
}
type LabelMonetaryAccount = {
  avatar?: Avatar | undefined
  bunq_me?: Pointer | undefined
  country?: string | undefined
  display_name?: string | undefined
  iban?: string | undefined
  is_light?: boolean | undefined
  label_user?: LabelUser | undefined
  merchant_category_code?: string | undefined
  swift_account_number?: string | undefined
  swift_bic?: string | undefined
  transferwise_account_number?: string | undefined
  transferwise_bank_code?: string | undefined
}
type BunqMeFundraiserProfileUserListing = {
  alias?: LabelMonetaryAccount | undefined
  attachment?: AttachmentPublic | undefined
  color?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  monetary_account_id?: number | undefined
  owner_user_id?: number | undefined
  pointer?: Pointer | undefined
  redirect_url?: string | undefined
  status?: string | undefined
}
type BunqMeFundraiserProfileUserRead = {
  alias?: LabelMonetaryAccount | undefined
  attachment?: AttachmentPublic | undefined
  color?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  monetary_account_id?: number | undefined
  owner_user_id?: number | undefined
  pointer?: Pointer | undefined
  redirect_url?: string | undefined
  status?: string | undefined
}
type CardCountryPermission = {
  country?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
}
type CardPinAssignment = {
  monetary_account_id?: number | undefined
  pin_code?: string | undefined
  routing_type?: string | undefined
  type?: string | undefined
}
type CardPrimaryAccountNumber = {
  description?: string | undefined
  four_digit?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  uuid?: string | undefined
}
type CardListing = {
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  card_shipment_tracking_url?: string | undefined
  country?: string | undefined
  country_permission?: CardCountryPermission[] | undefined
  created?: string | undefined
  expiry_date?: string | undefined
  id?: number | undefined
  label_monetary_account_current?: LabelMonetaryAccount | undefined
  label_monetary_account_ordered?: LabelMonetaryAccount | undefined
  monetary_account_id_fallback?: number | undefined
  name_on_card?: string | undefined
  order_status?: string | undefined
  payment_account_reference?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  primary_account_numbers?: CardPrimaryAccountNumber[] | undefined
  public_uuid?: string | undefined
  second_line?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  sub_type?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type CardBatchEntry = {
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  country_permission?: CardCountryPermission[] | undefined
  id: number
  monetary_account_id_fallback?: number | undefined
  status?: string | undefined
}
type CardBatch = { cards: CardBatchEntry[] }
type CardBatchCreate = { updated_card_ids?: BunqId[] | undefined }
type CardBatchReplaceEntry = {
  id: number
  name_on_card?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  second_line?: string | undefined
}
type CardBatchReplace = { cards: CardBatchReplaceEntry[] }
type CardBatchReplaceCreate = { updated_card_ids?: BunqId[] | undefined }
type CardCredit = {
  alias?: Pointer | undefined
  monetary_account_id_fallback?: number | undefined
  name_on_card: string
  order_status?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  preferred_name_on_card?: string | undefined
  product_type: string
  second_line: string
  type: string
}
type CardCreditCreate = { Id?: BunqId | undefined }
type CardDebit = {
  alias?: Pointer | undefined
  monetary_account_id_fallback?: number | undefined
  name_on_card: string
  order_status?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  preferred_name_on_card?: string | undefined
  product_type: string
  second_line: string
  type: string
}
type CardDebitCreate = { Id?: BunqId | undefined }
type CardNameListing = { possible_card_name_array?: string[] | undefined }
type ExportStatementCardListing = {
  card_id?: number | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  regional_format?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatementCardCsvListing = {
  card_id?: number | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  regional_format?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatementCardCsv = { date_end: string; date_start: string; regional_format: string }
type ExportStatementCardCsvCreate = { Id?: BunqId | undefined }
type ExportStatementCardCsvDelete = { [x: string]: unknown }
type ExportStatementCardCsvRead = {
  card_id?: number | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  regional_format?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatementCardPdfListing = {
  card_id?: number | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatementCardPdf = { date_end: string; date_start: string }
type ExportStatementCardPdfCreate = { Id?: BunqId | undefined }
type ExportStatementCardPdfDelete = { [x: string]: unknown }
type ExportStatementCardPdfRead = {
  card_id?: number | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatementCardContentListing = { [x: string]: unknown }
type ExportStatementCardRead = {
  card_id?: number | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  regional_format?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type CardGeneratedCvc2Listing = {
  created?: string | undefined
  cvc2?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type CardGeneratedCvc2 = { type?: string | undefined }
type CardGeneratedCvc2Create = { Id?: BunqId | undefined }
type CardGeneratedCvc2Read = {
  created?: string | undefined
  cvc2?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type CardGeneratedCvc2Update = { Id?: BunqId | undefined }
type CardReplace = {
  name_on_card?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  preferred_name_on_card?: string | undefined
  second_line?: string | undefined
}
type CardReplaceCreate = { Id?: BunqId | undefined }
type CardRead = {
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  card_shipment_tracking_url?: string | undefined
  country?: string | undefined
  country_permission?: CardCountryPermission[] | undefined
  created?: string | undefined
  expiry_date?: string | undefined
  id?: number | undefined
  label_monetary_account_current?: LabelMonetaryAccount | undefined
  label_monetary_account_ordered?: LabelMonetaryAccount | undefined
  monetary_account_id_fallback?: number | undefined
  name_on_card?: string | undefined
  order_status?: string | undefined
  payment_account_reference?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  primary_account_numbers?: CardPrimaryAccountNumber[] | undefined
  public_uuid?: string | undefined
  second_line?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  sub_type?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type Card = {
  activation_code?: string | undefined
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  country_permission?: CardCountryPermission[] | undefined
  monetary_account_id_fallback?: number | undefined
  order_status?: string | undefined
  pin_code?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  primary_account_numbers?: CardPrimaryAccountNumber[] | undefined
  status?: string | undefined
}
type CardUpdate = { Id?: BunqId | undefined }
type CertificatePinnedListing = { certificate_chain?: string | undefined; id?: number | undefined }
type Certificate = { certificate?: string | undefined }
type CertificatePinned = { certificate_chain: Certificate[] }
type CertificatePinnedCreate = { id?: number | undefined }
type CertificatePinnedDelete = { [x: string]: unknown }
type CertificatePinnedRead = { certificate_chain?: string | undefined; id?: number | undefined }
type MasterCardIdentityCheckChallengeRequestUserRead = {
  amount?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  event_id?: number | undefined
  expiry_time?: string | undefined
  status?: string | undefined
}
type MasterCardIdentityCheckChallengeRequestUser = { status: string }
type MasterCardIdentityCheckChallengeRequestUserUpdate = { Id?: BunqId | undefined }
type AttachmentConversationContentListing = { [x: string]: unknown }
type CompanyListing = { UserCompany?: UserCompany | undefined }
type CompanyVatNumber = { country?: string | undefined; value?: string | undefined }
type Company = {
  address_main: Address
  address_postal: Address
  avatar_uuid?: string | undefined
  chamber_of_commerce_number?: string | undefined
  country: string
  legal_form: string
  name: string
  signup_track_type?: string | undefined
  subscription_type: string
  ubo?: Ubo[] | undefined
  vat_number?: CompanyVatNumber | undefined
}
type CompanyCreate = { Id?: BunqId | undefined }
type CompanyRead = { UserCompany?: UserCompany | undefined }
type CompanyUpdate = { Id?: BunqId | undefined }
type ConfirmationOfFunds = { amount: Amount; pointer_iban: Pointer }
type ConfirmationOfFundsCreate = { Id?: BunqId | undefined }
type UserCredentialPasswordIpListing = {
  created?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
  permitted_device?: PermittedDevice | undefined
  status?: string | undefined
  token_value?: string | undefined
  updated?: string | undefined
}
type PermittedIpListing = { ip?: string | undefined; status?: string | undefined }
type PermittedIp = { ip: string; status?: string | undefined }
type PermittedIpCreate = { Id?: BunqId | undefined }
type PermittedIpRead = { ip?: string | undefined; status?: string | undefined }
type PermittedIpUpdate = { Id?: BunqId | undefined }
type UserCredentialPasswordIpRead = {
  created?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
  permitted_device?: PermittedDevice | undefined
  status?: string | undefined
  token_value?: string | undefined
  updated?: string | undefined
}
type CurrencyCloudBeneficiaryListing = {
  account_number?: string | undefined
  created?: string | undefined
  currency?: string | undefined
  external_identifier?: string | undefined
  id?: number | undefined
  name?: string | undefined
  updated?: string | undefined
}
type CurrencyCloudBeneficiary = {
  all_field: string[]
  country: string
  currency: string
  legal_entity_type: string
  name: string
  payment_type: string
}
type CurrencyCloudBeneficiaryCreate = { Id?: BunqId | undefined }
type CurrencyCloudBeneficiaryRequirementField = {
  input_type?: string | undefined
  label?: string | undefined
  name?: string | undefined
  validation_expression?: string | undefined
}
type CurrencyCloudBeneficiaryRequirementListing = {
  all_field?: CurrencyCloudBeneficiaryRequirementField[] | undefined
  legal_entity_type?: string | undefined
  payment_type?: string | undefined
}
type CurrencyCloudBeneficiaryRead = {
  account_number?: string | undefined
  created?: string | undefined
  currency?: string | undefined
  external_identifier?: string | undefined
  id?: number | undefined
  name?: string | undefined
  updated?: string | undefined
}
type BankSwitchServiceNetherlandsIncoming = {
  alias?: LabelMonetaryAccount | undefined
  attachment?: Attachment | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
  sub_status?: string | undefined
  time_end?: string | undefined
  time_start_actual?: string | undefined
  time_start_desired?: string | undefined
  user_alias?: LabelUser | undefined
}
type AttachmentMonetaryAccountPayment = {
  id?: number | undefined
  monetary_account_id?: number | undefined
}
type Geolocation = {
  altitude?: number | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  radius?: number | undefined
}
type PaymentBatchAnchoredPayment = { Payment?: Payment[] | undefined }
type PaymentBatch = { payments?: PaymentBatchAnchoredPayment | undefined }
type PaymentAutoAllocateInstance = {
  created?: string | undefined
  error_message?: Error[] | undefined
  id?: number | undefined
  payment_auto_allocate_id?: number | undefined
  payment_batch?: PaymentBatch | undefined
  payment_id?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type RequestInquiryReference = { id?: number | undefined; type?: string | undefined }
type Payment = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  allow_bunqto?: boolean | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  balance_after_mutation?: Amount | undefined
  batch_id?: number | undefined
  bunqto_expiry?: string | undefined
  bunqto_share_url?: string | undefined
  bunqto_status?: string | undefined
  bunqto_sub_status?: string | undefined
  bunqto_time_responded?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  monetary_account_id?: number | undefined
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  scheduled_id?: number | undefined
  sub_type?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type BankSwitchServiceNetherlandsIncomingPayment = {
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming | undefined
  payment?: Payment | undefined
}
type BunqMeFundraiserProfile = {
  alias?: LabelMonetaryAccount | undefined
  attachment?: AttachmentPublic | undefined
  color?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  invite_profile_name?: string | undefined
  pointer?: Pointer | undefined
  redirect_url?: string | undefined
  status?: string | undefined
}
type BunqMeFundraiserResult = {
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile | undefined
  created?: string | undefined
  id?: number | undefined
  payments?: Payment[] | undefined
  updated?: string | undefined
}
type BunqMeMerchantAvailable = {
  available?: boolean | undefined
  merchant_type?: string | undefined
}
type BunqMeTabEntry = {
  alias?: LabelMonetaryAccount | undefined
  amount_inquired?: Amount | undefined
  description?: string | undefined
  invite_profile_name?: string | undefined
  merchant_available?: BunqMeMerchantAvailable[] | undefined
  redirect_url?: string | undefined
  status?: string | undefined
  uuid?: string | undefined
}
type BunqMeTab = { bunqme_tab_entry: BunqMeTabEntry; status?: string | undefined }
type BunqMeTabResultResponse = { payment?: Payment | undefined }
type DraftPaymentEntry = {
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  type?: string | undefined
}
type ScheduleAnchorObject = {
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
}
type Schedule = {
  object?: ScheduleAnchorObject | undefined
  recurrence_size?: number | undefined
  recurrence_unit?: string | undefined
  status?: string | undefined
  time_end?: string | undefined
  time_start?: string | undefined
}
type DraftPayment = {
  entries: DraftPaymentEntry[]
  number_of_required_accepts: number
  previous_updated_timestamp?: string | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
}
type FeatureAnnouncement = {
  avatar?: Avatar | undefined
  sub_title?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type IdealMerchantTransaction = {
  alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  expiration?: string | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  issuer_name?: string | undefined
  monetary_account_id?: number | undefined
  purchase_identifier?: string | undefined
  status?: string | undefined
  status_timestamp?: string | undefined
  transaction_identifier?: string | undefined
}
type InvoiceItem = {
  billing_date?: string | undefined
  id?: number | undefined
  quantity?: number | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
  type_description?: string | undefined
  type_description_translated?: string | undefined
  unit_vat_exclusive?: Amount | undefined
  unit_vat_inclusive?: Amount | undefined
  vat?: number | undefined
}
type InvoiceItemGroup = {
  instance_description?: string | undefined
  item?: InvoiceItem[] | undefined
  product_vat_exclusive?: Amount | undefined
  product_vat_inclusive?: Amount | undefined
  type?: string | undefined
  type_description?: string | undefined
  type_description_translated?: string | undefined
}
type Invoice = {
  address?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  category?: string | undefined
  chamber_of_commerce_number?: string | undefined
  counterparty_address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description: string
  external_url: string
  group?: InvoiceItemGroup[] | undefined
  id?: number | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  status?: string | undefined
  total_vat?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
  updated?: string | undefined
  vat_number?: string | undefined
}
type AttachmentMasterCardActionRefund = { id?: number | undefined }
type AdditionalInformation = {
  attachment?: AttachmentMasterCardActionRefund[] | undefined
  category?: string | undefined
  comment?: string | undefined
  reason?: string | undefined
  terms_and_conditions?: string | undefined
}
type LabelCard = {
  expiry_date?: string | undefined
  label_user?: LabelUser | undefined
  second_line?: string | undefined
  status?: string | undefined
  type?: string | undefined
  uuid?: string | undefined
}
type MasterCardActionReference = { event_id?: number | undefined }
type MasterCardActionRefund = {
  additional_information?: AdditionalInformation | undefined
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMasterCardActionRefund[] | undefined
  category?: string | undefined
  comment?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_card?: LabelCard | undefined
  label_user_creator?: LabelUser | undefined
  mastercard_action_id?: number | undefined
  reason?: string | undefined
  reference_mastercard_action_event?: MasterCardActionReference[] | undefined
  status?: string | undefined
  status_description?: string | undefined
  status_description_translated?: string | undefined
  status_together_url?: string | undefined
  sub_type?: string | undefined
  terms_and_conditions?: string | undefined
  time_refund?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type MasterCardAction = {
  alias?: LabelMonetaryAccount | undefined
  all_mastercard_action_refund?: MasterCardActionRefund[] | undefined
  amount_billing?: Amount | undefined
  amount_converted?: Amount | undefined
  amount_fee?: Amount | undefined
  amount_local?: Amount | undefined
  amount_original_billing?: Amount | undefined
  amount_original_local?: Amount | undefined
  applied_limit?: string | undefined
  authorisation_status?: string | undefined
  authorisation_type?: string | undefined
  card_authorisation_id_response?: string | undefined
  card_id?: number | undefined
  city?: string | undefined
  clearing_expiry_time?: string | undefined
  clearing_status?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  decision?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  decision_together_url?: string | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  id?: number | undefined
  label_card?: LabelCard | undefined
  maturity_date?: string | undefined
  monetary_account_id?: number | undefined
  pan_entry_mode_user?: string | undefined
  payment_status?: string | undefined
  pos_card_holder_presence?: string | undefined
  pos_card_presence?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  reservation_expiry_time?: string | undefined
  secure_code_id?: number | undefined
  settlement_status?: string | undefined
  token_status?: string | undefined
  wallet_provider_id?: string | undefined
}
type RequestResponse = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: Attachment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  credit_scheme_identifier?: string | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  event_id?: number | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  require_address?: string | undefined
  status?: string | undefined
  sub_type?: string | undefined
  time_expiry?: string | undefined
  time_refund_requested?: string | undefined
  time_refunded?: string | undefined
  time_responded?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  user_refund_requested?: LabelUser | undefined
}
type ScheduleInstanceAnchorObject = {
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
}
type ScheduleInstance = {
  error_message?: Error[] | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  result_object?: ScheduleInstanceAnchorObject | undefined
  scheduled_object?: ScheduleAnchorObject | undefined
  state?: string | undefined
  time_end?: string | undefined
  time_start?: string | undefined
}
type TransferwiseQuote = {
  amount_fee?: Amount | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  created?: string | undefined
  currency_source: string
  currency_target: string
  id?: number | undefined
  quote_id?: string | undefined
  rate?: string | undefined
  time_delivery_estimate?: string | undefined
  time_expiry?: string | undefined
  updated?: string | undefined
}
type TransferwiseTransfer = {
  alias?: LabelMonetaryAccount | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  monetary_account_id: string
  pay_in_reference?: string | undefined
  quote?: TransferwiseQuote | undefined
  rate?: string | undefined
  recipient_id: string
  reference?: string | undefined
  status?: string | undefined
  status_transferwise?: string | undefined
  status_transferwise_issue?: string | undefined
  sub_status?: string | undefined
  time_delivery_estimate?: string | undefined
}
type WhitelistResultViewAnchoredObject = {
  draftPayment?: DraftPayment | undefined
  id?: number | undefined
  requestResponse?: RequestResponse | undefined
}
type Whitelist = { [x: string]: unknown }
type WhitelistResult = {
  error_message?: Error[] | undefined
  id?: number | undefined
  monetary_account_paying_id?: number | undefined
  object?: WhitelistResultViewAnchoredObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  status?: string | undefined
  sub_status?: string | undefined
  whitelist?: Whitelist | undefined
}
type RequestReferenceSplitTheBillAnchorObject = {
  BillingInvoice?: Invoice | undefined
  DraftPayment?: DraftPayment | undefined
  MasterCardAction?: MasterCardAction | undefined
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
  RequestResponse?: RequestResponse | undefined
  ScheduleInstance?: ScheduleInstance | undefined
  TransferwisePayment?: TransferwiseTransfer | undefined
  WhitelistResult?: WhitelistResult | undefined
}
type RequestInquiry = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  allow_amount_higher?: boolean | undefined
  allow_amount_lower?: boolean | undefined
  allow_bunqme: boolean
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: BunqId[] | undefined
  batch_id?: number | undefined
  bunqme_share_url?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  event_id?: number | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  require_address?: string | undefined
  scheduled_id?: number | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  time_responded?: string | undefined
  updated?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  want_tip?: boolean | undefined
}
type RequestInquiryBatch = {
  event_id?: number | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  request_inquiries?: RequestInquiry[] | undefined
  status?: string | undefined
  total_amount_inquired?: Amount | undefined
}
type RewardRecipient = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type RewardSender = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type SchedulePaymentEntry = {
  alias?: LabelMonetaryAccount | undefined
  allow_bunqto?: boolean | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  merchant_reference?: string | undefined
}
type SchedulePayment = {
  payment?: SchedulePaymentEntry | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
}
type SchedulePaymentBatch = {
  payments?: SchedulePaymentEntry[] | undefined
  schedule?: Schedule | undefined
}
type ShareDetailDraftPayment = {
  make_draft_payments?: boolean | undefined
  view_balance?: boolean | undefined
  view_new_events?: boolean | undefined
  view_old_events?: boolean | undefined
}
type ShareDetailPayment = {
  make_draft_payments?: boolean | undefined
  make_payments?: boolean | undefined
  view_balance?: boolean | undefined
  view_new_events?: boolean | undefined
  view_old_events?: boolean | undefined
}
type ShareDetailReadOnly = {
  view_balance?: boolean | undefined
  view_new_events?: boolean | undefined
  view_old_events?: boolean | undefined
}
type ShareDetail = {
  draft_payment?: ShareDetailDraftPayment | undefined
  payment?: ShareDetailPayment | undefined
  read_only?: ShareDetailReadOnly | undefined
}
type ShareInviteMonetaryAccountInquiry = {
  access_type?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counter_user_alias?: LabelUser | undefined
  draft_share_invite_bank_id?: number | undefined
  end_date?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  relationship?: string | undefined
  share_detail?: ShareDetail | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  status?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
}
type ShareInviteMonetaryAccountResponse = {
  access_type?: string | undefined
  card_id?: number | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  draft_share_invite_bank_id?: number | undefined
  end_date?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  relation_user?: RelationUser | undefined
  share_detail?: ShareDetail | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  status?: string | undefined
  updated?: string | undefined
  user_alias_cancelled?: LabelUser | undefined
}
type SofortMerchantTransaction = {
  alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  error_message?: Error[] | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  transaction_identifier?: string | undefined
}
type EventObject = {
  BankSwitchServiceNetherlandsIncomingPayment?:
    | BankSwitchServiceNetherlandsIncomingPayment
    | undefined
  BunqMeFundraiserResult?: BunqMeFundraiserResult | undefined
  BunqMeTab?: BunqMeTab | undefined
  BunqMeTabResultResponse?: BunqMeTabResultResponse | undefined
  Card?: Card | undefined
  CardDebit?: CardDebit | undefined
  DraftPayment?: DraftPayment | undefined
  FeatureAnnouncement?: FeatureAnnouncement | undefined
  IdealMerchantTransaction?: IdealMerchantTransaction | undefined
  Invoice?: Invoice | undefined
  MasterCardAction?: MasterCardAction | undefined
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
  RequestInquiry?: RequestInquiry | undefined
  RequestInquiryBatch?: RequestInquiryBatch | undefined
  RequestResponse?: RequestResponse | undefined
  RewardRecipient?: RewardRecipient | undefined
  RewardSender?: RewardSender | undefined
  ScheduledInstance?: ScheduleInstance | undefined
  ScheduledPayment?: SchedulePayment | undefined
  ScheduledPaymentBatch?: SchedulePaymentBatch | undefined
  ShareInviteBankInquiry?: ShareInviteMonetaryAccountInquiry | undefined
  ShareInviteBankResponse?: ShareInviteMonetaryAccountResponse | undefined
  SofortMerchantTransaction?: SofortMerchantTransaction | undefined
  TransferwisePayment?: TransferwiseTransfer | undefined
}
type EventListing = {
  action?: string | undefined
  created?: string | undefined
  id?: number | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
  updated?: string | undefined
  user_id?: string | undefined
}
type EventRead = {
  action?: string | undefined
  created?: string | undefined
  id?: number | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
  updated?: string | undefined
  user_id?: string | undefined
}
type ExportAnnualOverviewListing = {
  alias_user?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  updated?: string | undefined
  year?: number | undefined
}
type ExportAnnualOverview = { year: number }
type ExportAnnualOverviewCreate = { id?: number | undefined }
type ExportAnnualOverviewContentListing = { [x: string]: unknown }
type ExportAnnualOverviewDelete = { [x: string]: unknown }
type ExportAnnualOverviewRead = {
  alias_user?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  updated?: string | undefined
  year?: number | undefined
}
type FeatureAnnouncementRead = {
  avatar?: Avatar | undefined
  sub_title?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type InsightPreferenceDateListing = { day_of_month?: number | undefined }
type InsightListing = {
  amount_total?: Amount | undefined
  category?: string | undefined
  category_translated?: string | undefined
  number_of_transactions?: number | undefined
}
type InsightEventListing = {
  action?: string | undefined
  created?: string | undefined
  id?: number | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
  updated?: string | undefined
  user_id?: string | undefined
}
type InvoiceByUserListing = {
  address?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  chamber_of_commerce_number?: string | undefined
  counterparty_address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  id?: number | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  status?: string | undefined
  total_vat?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
  updated?: string | undefined
  vat_number?: string | undefined
}
type InvoiceExportPdfContentListing = { [x: string]: unknown }
type InvoiceByUserRead = {
  address?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  chamber_of_commerce_number?: string | undefined
  counterparty_address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  id?: number | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  status?: string | undefined
  total_vat?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
  updated?: string | undefined
  vat_number?: string | undefined
}
type UserLegalNameListing = { legal_names?: string[] | undefined }
type CustomerLimitListing = {
  limit_amount_monthly?: Amount | undefined
  limit_card_debit_maestro?: number | undefined
  limit_card_debit_mastercard?: number | undefined
  limit_card_debit_wildcard?: number | undefined
  limit_card_replacement?: number | undefined
  limit_card_wildcard?: number | undefined
  limit_monetary_account?: number | undefined
  limit_monetary_account_remaining?: number | undefined
  spent_amount_monthly?: Amount | undefined
}
type MonetaryAccountSetting = {
  color?: string | undefined
  default_avatar_status?: string | undefined
  icon?: string | undefined
  restriction_chat?: string | undefined
  sdd_expiration_action?: string | undefined
}
type MonetaryAccountBank = {
  avatar_uuid?: string | undefined
  country_iban?: string | undefined
  currency: string
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
}
type MonetaryAccountProfileDrain = {
  balance_preferred?: Amount | undefined
  balance_threshold_high?: Amount | undefined
  savings_account_alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
}
type Issuer = { bic?: string | undefined; name?: string | undefined }
type MonetaryAccountProfileFill = {
  balance_preferred?: Amount | undefined
  balance_threshold_low?: Amount | undefined
  issuer?: Issuer | undefined
  method_fill?: string | undefined
  status?: string | undefined
}
type MonetaryAccountProfile = {
  profile_drain?: MonetaryAccountProfileDrain | undefined
  profile_fill?: MonetaryAccountProfileFill | undefined
}
type MonetaryAccountExternal = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  avatar?: Avatar | undefined
  avatar_uuid?: string | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type BirdeePortfolioAllocation = {
  amount?: string | undefined
  instrument_asset_class?: string | undefined
  instrument_asset_class_name?: string | undefined
  instrument_currency?: string | undefined
  instrument_isin?: string | undefined
  instrument_key_information_document_uri?: string | undefined
  instrument_name?: string | undefined
  instrument_region_name?: string | undefined
  price?: string | undefined
  quantity?: string | undefined
  weight?: string | undefined
}
type BirdeeInvestmentPortfolioBalance = {
  amount_available?: Amount | undefined
  amount_deposit_pending?: Amount | undefined
  amount_deposit_total?: Amount | undefined
  amount_fee_total?: Amount | undefined
  amount_profit?: Amount | undefined
  amount_withdrawal_pending?: Amount | undefined
  amount_withdrawal_total?: Amount | undefined
}
type BirdeeInvestmentPortfolioGoal = {
  amount_target?: Amount | undefined
  time_end?: string | undefined
}
type BirdeeInvestmentPortfolio = {
  allocations?: BirdeePortfolioAllocation[] | undefined
  balance?: BirdeeInvestmentPortfolioBalance | undefined
  goal?: BirdeeInvestmentPortfolioGoal | undefined
  investment_theme?: string | undefined
  name?: string | undefined
  number_of_strategy_change_annual_maximum?: number | undefined
  number_of_strategy_change_annual_used?: number | undefined
  risk_profile_type?: string | undefined
  status?: string | undefined
}
type MonetaryAccountInvestment = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  avatar?: Avatar | undefined
  avatar_uuid?: string | undefined
  balance?: Amount | undefined
  birdee_investment_portfolio?: BirdeeInvestmentPortfolio | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  provider: string
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type CoOwner = { alias?: LabelUser | undefined; status?: string | undefined }
type MonetaryAccountJoint = {
  alias?: Pointer[] | undefined
  all_co_owner: CoOwner[]
  avatar_uuid?: string | undefined
  currency: string
  daily_limit?: Amount | undefined
  description?: string | undefined
  overdraft_limit?: Amount | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
}
type MonetaryAccountLight = {
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  avatar_uuid?: string | undefined
  balance?: Amount | undefined
  balance_maximum?: Amount | undefined
  budget_month_maximum?: Amount | undefined
  budget_month_used?: Amount | undefined
  budget_withdrawal_year_maximum?: Amount | undefined
  budget_withdrawal_year_used?: Amount | undefined
  budget_year_maximum?: Amount | undefined
  budget_year_used?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  id?: number | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountSavings = {
  all_co_owner?: CoOwner[] | undefined
  avatar_uuid?: string | undefined
  currency: string
  daily_limit?: Amount | undefined
  description?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  savings_goal?: Amount | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
}
type MonetaryAccountListing = {
  MonetaryAccountBank?: MonetaryAccountBank | undefined
  MonetaryAccountExternal?: MonetaryAccountExternal | undefined
  MonetaryAccountInvestment?: MonetaryAccountInvestment | undefined
  MonetaryAccountJoint?: MonetaryAccountJoint | undefined
  MonetaryAccountLight?: MonetaryAccountLight | undefined
  MonetaryAccountSavings?: MonetaryAccountSavings | undefined
}
type MonetaryAccountBankListing = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountBankCreate = { Id?: BunqId | undefined }
type MonetaryAccountBankRead = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountBankUpdate = { Id?: BunqId | undefined }
type MonetaryAccountExternalListing = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountExternalRead = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountJointListing = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  all_co_owner?: CoOwner[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountJointCreate = { Id?: BunqId | undefined }
type MonetaryAccountJointRead = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  all_co_owner?: CoOwner[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountJointUpdate = { Id?: BunqId | undefined }
type MonetaryAccountSavingsListing = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  all_co_owner?: CoOwner[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  savings_goal?: Amount | undefined
  savings_goal_progress?: number | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountSavingsCreate = { Id?: BunqId | undefined }
type MonetaryAccountSavingsRead = {
  alias?: Pointer[] | undefined
  all_auto_save_id?: BunqId[] | undefined
  all_co_owner?: CoOwner[] | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  created?: string | undefined
  currency?: string | undefined
  daily_limit?: Amount | undefined
  description?: string | undefined
  id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  overdraft_limit?: Amount | undefined
  public_uuid?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  savings_goal?: Amount | undefined
  savings_goal_progress?: number | undefined
  setting?: MonetaryAccountSetting | undefined
  status?: string | undefined
  sub_status?: string | undefined
  updated?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountSavingsUpdate = { Id?: BunqId | undefined }
type MonetaryAccountRead = {
  MonetaryAccountBank?: MonetaryAccountBank | undefined
  MonetaryAccountExternal?: MonetaryAccountExternal | undefined
  MonetaryAccountInvestment?: MonetaryAccountInvestment | undefined
  MonetaryAccountJoint?: MonetaryAccountJoint | undefined
  MonetaryAccountLight?: MonetaryAccountLight | undefined
  MonetaryAccountSavings?: MonetaryAccountSavings | undefined
}
type AttachmentMonetaryAccount = { [x: string]: unknown }
type AttachmentMonetaryAccountCreate = { id?: number | undefined }
type AttachmentMonetaryAccountContentListing = { [x: string]: unknown }
type NoteAttachmentBunqMeFundraiserResultListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentBunqMeFundraiserResult = {
  attachment_id: number
  description?: string | undefined
}
type NoteAttachmentBunqMeFundraiserResultCreate = { Id?: BunqId | undefined }
type NoteAttachmentBunqMeFundraiserResultDelete = { [x: string]: unknown }
type NoteAttachmentBunqMeFundraiserResultRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentBunqMeFundraiserResultUpdate = { Id?: BunqId | undefined }
type NoteTextBunqMeFundraiserResultListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextBunqMeFundraiserResult = { content?: string | undefined }
type NoteTextBunqMeFundraiserResultCreate = { Id?: BunqId | undefined }
type NoteTextBunqMeFundraiserResultDelete = { [x: string]: unknown }
type NoteTextBunqMeFundraiserResultRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextBunqMeFundraiserResultUpdate = { Id?: BunqId | undefined }
type BunqMeFundraiserResultRead = {
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile | undefined
  created?: string | undefined
  id?: number | undefined
  payments?: Payment[] | undefined
  updated?: string | undefined
}
type BunqMeTabResultInquiry = { bunq_me_tab_id?: number | undefined; payment?: Payment | undefined }
type BunqMeTabListing = {
  alias_monetary_account?: LabelMonetaryAccount | undefined
  bunqme_tab_entries?: BunqMeTabEntry[] | undefined
  bunqme_tab_entry?: BunqMeTabEntry | undefined
  bunqme_tab_share_url?: string | undefined
  created?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  result_inquiries?: BunqMeTabResultInquiry[] | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type BunqMeTabCreate = { id?: number | undefined }
type BunqMeTabResultResponseRead = { payment?: Payment | undefined }
type BunqMeTabRead = {
  alias_monetary_account?: LabelMonetaryAccount | undefined
  bunqme_tab_entries?: BunqMeTabEntry[] | undefined
  bunqme_tab_entry?: BunqMeTabEntry | undefined
  bunqme_tab_share_url?: string | undefined
  created?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  result_inquiries?: BunqMeTabResultInquiry[] | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type BunqMeTabUpdate = { Id?: BunqId | undefined }
type CurrencyCloudPaymentQuote = { pointers: Pointer[] }
type CurrencyCloudPaymentQuoteCreate = { Id?: BunqId | undefined }
type CurrencyConversionListing = {
  amount?: Amount | undefined
  counter_amount?: Amount | undefined
  counter_label_monetary_account?: LabelMonetaryAccount | undefined
  created?: string | undefined
  date_delivery_expected?: string | undefined
  group_uuid?: string | undefined
  id?: number | undefined
  label_monetary_account?: LabelMonetaryAccount | undefined
  payment?: Payment | undefined
  rate?: string | undefined
  status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type CurrencyConversionQuote = {
  amount: Amount
  counterparty_alias: Pointer
  currency_source: string
  currency_target: string
  status?: string | undefined
}
type CurrencyConversionQuoteCreate = { Id?: BunqId | undefined }
type CurrencyConversionQuoteRead = {
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  created?: string | undefined
  id?: number | undefined
  rate?: string | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  updated?: string | undefined
}
type CurrencyConversionQuoteUpdate = { Id?: BunqId | undefined }
type CurrencyConversionRead = {
  amount?: Amount | undefined
  counter_amount?: Amount | undefined
  counter_label_monetary_account?: LabelMonetaryAccount | undefined
  created?: string | undefined
  date_delivery_expected?: string | undefined
  group_uuid?: string | undefined
  id?: number | undefined
  label_monetary_account?: LabelMonetaryAccount | undefined
  payment?: Payment | undefined
  rate?: string | undefined
  status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type ExportStatementListing = {
  alias_monetary_account?: LabelMonetaryAccount | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  regional_format?: string | undefined
  statement_format?: string | undefined
  statement_number?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatement = {
  date_end: string
  date_start: string
  include_attachment?: boolean | undefined
  regional_format?: string | undefined
  statement_format: string
}
type ExportStatementCreate = { Id?: BunqId | undefined }
type ExportStatementContentListing = { [x: string]: unknown }
type ExportStatementDelete = { [x: string]: unknown }
type ExportStatementRead = {
  alias_monetary_account?: LabelMonetaryAccount | undefined
  created?: string | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  id?: number | undefined
  regional_format?: string | undefined
  statement_format?: string | undefined
  statement_number?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type DraftPaymentAnchorObject = {
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
}
type DraftPaymentResponse = {
  status?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type DraftPaymentListing = {
  entries?: DraftPaymentEntry[] | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  object?: DraftPaymentAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  responses?: DraftPaymentResponse[] | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type DraftPaymentCreate = { id?: number | undefined }
type NoteAttachmentDraftPaymentListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentDraftPayment = { attachment_id: number; description?: string | undefined }
type NoteAttachmentDraftPaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentDraftPaymentDelete = { [x: string]: unknown }
type NoteAttachmentDraftPaymentRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentDraftPaymentUpdate = { Id?: BunqId | undefined }
type NoteTextDraftPaymentListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextDraftPayment = { content?: string | undefined }
type NoteTextDraftPaymentCreate = { Id?: BunqId | undefined }
type NoteTextDraftPaymentDelete = { [x: string]: unknown }
type NoteTextDraftPaymentRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextDraftPaymentUpdate = { Id?: BunqId | undefined }
type DraftPaymentRead = {
  entries?: DraftPaymentEntry[] | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  object?: DraftPaymentAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  responses?: DraftPaymentResponse[] | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type DraftPaymentUpdate = { id?: number | undefined }
type ExportStatementPayment = { [x: string]: unknown }
type ExportStatementPaymentCreate = { Id?: BunqId | undefined }
type ExportStatementPaymentRead = {
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type ExportStatementPaymentContentListing = { [x: string]: unknown }
type ExportRibListing = {
  created?: string | undefined
  id?: number | undefined
  updated?: string | undefined
}
type ExportRib = { [x: string]: unknown }
type ExportRibCreate = { id?: number | undefined }
type ExportRibContentListing = { [x: string]: unknown }
type ExportRibDelete = { [x: string]: unknown }
type ExportRibRead = {
  created?: string | undefined
  id?: number | undefined
  updated?: string | undefined
}
type IdealMerchantTransactionListing = {
  alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  expiration?: string | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  issuer_name?: string | undefined
  monetary_account_id?: number | undefined
  purchase_identifier?: string | undefined
  status?: string | undefined
  status_timestamp?: string | undefined
  transaction_identifier?: string | undefined
}
type IdealMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentIdealMerchantTransactionListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentIdealMerchantTransaction = {
  attachment_id: number
  description?: string | undefined
}
type NoteAttachmentIdealMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentIdealMerchantTransactionDelete = { [x: string]: unknown }
type NoteAttachmentIdealMerchantTransactionRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentIdealMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteTextIdealMerchantTransactionListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextIdealMerchantTransaction = { content?: string | undefined }
type NoteTextIdealMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteTextIdealMerchantTransactionDelete = { [x: string]: unknown }
type NoteTextIdealMerchantTransactionRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextIdealMerchantTransactionUpdate = { Id?: BunqId | undefined }
type IdealMerchantTransactionRead = {
  alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  expiration?: string | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  issuer_name?: string | undefined
  monetary_account_id?: number | undefined
  purchase_identifier?: string | undefined
  status?: string | undefined
  status_timestamp?: string | undefined
  transaction_identifier?: string | undefined
}
type InvoiceListing = {
  address?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  category?: string | undefined
  chamber_of_commerce_number?: string | undefined
  counterparty_address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  id?: number | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  status?: string | undefined
  total_vat?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
  updated?: string | undefined
  vat_number?: string | undefined
}
type InvoiceRead = {
  address?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  category?: string | undefined
  chamber_of_commerce_number?: string | undefined
  counterparty_address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  id?: number | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  status?: string | undefined
  total_vat?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
  updated?: string | undefined
  vat_number?: string | undefined
}
type MasterCardActionListing = {
  alias?: LabelMonetaryAccount | undefined
  all_mastercard_action_refund?: MasterCardActionRefund[] | undefined
  amount_billing?: Amount | undefined
  amount_converted?: Amount | undefined
  amount_fee?: Amount | undefined
  amount_local?: Amount | undefined
  amount_original_billing?: Amount | undefined
  amount_original_local?: Amount | undefined
  applied_limit?: string | undefined
  authorisation_status?: string | undefined
  authorisation_type?: string | undefined
  card_authorisation_id_response?: string | undefined
  card_id?: number | undefined
  city?: string | undefined
  clearing_expiry_time?: string | undefined
  clearing_status?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  decision?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  decision_together_url?: string | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  id?: number | undefined
  label_card?: LabelCard | undefined
  maturity_date?: string | undefined
  monetary_account_id?: number | undefined
  pan_entry_mode_user?: string | undefined
  payment_status?: string | undefined
  pos_card_holder_presence?: string | undefined
  pos_card_presence?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  reservation_expiry_time?: string | undefined
  secure_code_id?: number | undefined
  settlement_status?: string | undefined
  token_status?: string | undefined
  wallet_provider_id?: string | undefined
}
type MasterCardActionRead = {
  alias?: LabelMonetaryAccount | undefined
  all_mastercard_action_refund?: MasterCardActionRefund[] | undefined
  amount_billing?: Amount | undefined
  amount_converted?: Amount | undefined
  amount_fee?: Amount | undefined
  amount_local?: Amount | undefined
  amount_original_billing?: Amount | undefined
  amount_original_local?: Amount | undefined
  applied_limit?: string | undefined
  authorisation_status?: string | undefined
  authorisation_type?: string | undefined
  card_authorisation_id_response?: string | undefined
  card_id?: number | undefined
  city?: string | undefined
  clearing_expiry_time?: string | undefined
  clearing_status?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  decision?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  decision_together_url?: string | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  id?: number | undefined
  label_card?: LabelCard | undefined
  maturity_date?: string | undefined
  monetary_account_id?: number | undefined
  pan_entry_mode_user?: string | undefined
  payment_status?: string | undefined
  pos_card_holder_presence?: string | undefined
  pos_card_presence?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  reservation_expiry_time?: string | undefined
  secure_code_id?: number | undefined
  settlement_status?: string | undefined
  token_status?: string | undefined
  wallet_provider_id?: string | undefined
}
type NoteAttachmentMasterCardActionListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentMasterCardAction = { attachment_id: number; description?: string | undefined }
type NoteAttachmentMasterCardActionCreate = { Id?: BunqId | undefined }
type NoteAttachmentMasterCardActionDelete = { [x: string]: unknown }
type NoteAttachmentMasterCardActionRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentMasterCardActionUpdate = { Id?: BunqId | undefined }
type NoteTextMasterCardActionListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextMasterCardAction = { content?: string | undefined }
type NoteTextMasterCardActionCreate = { Id?: BunqId | undefined }
type NoteTextMasterCardActionDelete = { [x: string]: unknown }
type NoteTextMasterCardActionRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextMasterCardActionUpdate = { Id?: BunqId | undefined }
type MasterCardPaymentListing = { [x: string]: unknown }
type NotificationFilterUrl = { notification_filters?: NotificationFilterUrl[] | undefined }
type NotificationFilterUrlMonetaryAccountListing = {
  notification_filters?: NotificationFilterUrl[] | undefined
}
type NotificationFilterUrlMonetaryAccount = {
  notification_filters?: NotificationFilterUrl[] | undefined
}
type NotificationFilterUrlMonetaryAccountCreate = { Id?: BunqId | undefined }
type PaymentListing = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  balance_after_mutation?: Amount | undefined
  batch_id?: number | undefined
  bunqto_expiry?: string | undefined
  bunqto_share_url?: string | undefined
  bunqto_status?: string | undefined
  bunqto_sub_status?: string | undefined
  bunqto_time_responded?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  monetary_account_id?: number | undefined
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  scheduled_id?: number | undefined
  sub_type?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type PaymentCreate = { id?: number | undefined }
type PaymentAutoAllocateListing = {
  created?: string | undefined
  id?: number | undefined
  payment?: Payment | undefined
  status?: string | undefined
  trigger_amount?: Amount | undefined
  type?: string | undefined
  updated?: string | undefined
}
type PaymentAutoAllocateDefinition = {
  amount?: Amount | undefined
  counterparty_alias?: Pointer | undefined
  created?: string | undefined
  description?: string | undefined
  fraction?: number | undefined
  id?: number | undefined
  type: string
  updated?: string | undefined
}
type PaymentAutoAllocate = {
  definition: PaymentAutoAllocateDefinition[]
  payment_id: number
  type: string
}
type PaymentAutoAllocateCreate = { Id?: BunqId | undefined }
type PaymentAutoAllocateDelete = { [x: string]: unknown }
type PaymentAutoAllocateRead = {
  created?: string | undefined
  id?: number | undefined
  payment?: Payment | undefined
  status?: string | undefined
  trigger_amount?: Amount | undefined
  type?: string | undefined
  updated?: string | undefined
}
type PaymentAutoAllocateUpdate = { Id?: BunqId | undefined }
type PaymentAutoAllocateDefinitionListing = {
  amount?: Amount | undefined
  counterparty_alias?: Pointer | undefined
  created?: string | undefined
  description?: string | undefined
  fraction?: number | undefined
  id?: number | undefined
  updated?: string | undefined
}
type PaymentAutoAllocateInstanceListing = {
  created?: string | undefined
  error_message?: Error[] | undefined
  id?: number | undefined
  payment_auto_allocate_id?: number | undefined
  payment_batch?: PaymentBatch | undefined
  payment_id?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type PaymentAutoAllocateInstanceRead = {
  created?: string | undefined
  error_message?: Error[] | undefined
  id?: number | undefined
  payment_auto_allocate_id?: number | undefined
  payment_batch?: PaymentBatch | undefined
  payment_id?: number | undefined
  status?: string | undefined
  updated?: string | undefined
}
type PaymentBatchListing = { payments?: PaymentBatchAnchoredPayment | undefined }
type PaymentBatchCreate = { Id?: BunqId | undefined }
type PaymentBatchRead = { payments?: PaymentBatchAnchoredPayment | undefined }
type PaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentBatchListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentPaymentBatch = { attachment_id: number; description?: string | undefined }
type NoteAttachmentPaymentBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentBatchDelete = { [x: string]: unknown }
type NoteAttachmentPaymentBatchRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentPaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteTextPaymentBatchListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextPaymentBatch = { content?: string | undefined }
type NoteTextPaymentBatchCreate = { Id?: BunqId | undefined }
type NoteTextPaymentBatchDelete = { [x: string]: unknown }
type NoteTextPaymentBatchRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextPaymentBatchUpdate = { Id?: BunqId | undefined }
type PaymentRead = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  balance_after_mutation?: Amount | undefined
  batch_id?: number | undefined
  bunqto_expiry?: string | undefined
  bunqto_share_url?: string | undefined
  bunqto_status?: string | undefined
  bunqto_sub_status?: string | undefined
  bunqto_time_responded?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  monetary_account_id?: number | undefined
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  scheduled_id?: number | undefined
  sub_type?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type NoteAttachmentPaymentListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentPayment = { attachment_id: number; description?: string | undefined }
type NoteAttachmentPaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentDelete = { [x: string]: unknown }
type NoteAttachmentPaymentRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentPaymentUpdate = { Id?: BunqId | undefined }
type NoteTextPaymentListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextPayment = { content?: string | undefined }
type NoteTextPaymentCreate = { Id?: BunqId | undefined }
type NoteTextPaymentDelete = { [x: string]: unknown }
type NoteTextPaymentRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextPaymentUpdate = { Id?: BunqId | undefined }
type RequestInquiryListing = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: BunqId[] | undefined
  batch_id?: number | undefined
  bunqme_share_url?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  require_address?: string | undefined
  scheduled_id?: number | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  time_responded?: string | undefined
  updated?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
}
type RequestInquiryCreate = { id?: number | undefined }
type RequestInquiryBatchListing = {
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  request_inquiries?: RequestInquiry[] | undefined
  total_amount_inquired?: Amount | undefined
}
type RequestInquiryBatchCreate = { Id?: BunqId | undefined }
type RequestInquiryBatchRead = {
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  request_inquiries?: RequestInquiry[] | undefined
  total_amount_inquired?: Amount | undefined
}
type RequestInquiryBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryBatchListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentRequestInquiryBatch = { attachment_id: number; description?: string | undefined }
type NoteAttachmentRequestInquiryBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryBatchDelete = { [x: string]: unknown }
type NoteAttachmentRequestInquiryBatchRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentRequestInquiryBatchUpdate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryBatchListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextRequestInquiryBatch = { content?: string | undefined }
type NoteTextRequestInquiryBatchCreate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryBatchDelete = { [x: string]: unknown }
type NoteTextRequestInquiryBatchRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextRequestInquiryBatchUpdate = { Id?: BunqId | undefined }
type RequestInquiryRead = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: BunqId[] | undefined
  batch_id?: number | undefined
  bunqme_share_url?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  require_address?: string | undefined
  scheduled_id?: number | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  time_responded?: string | undefined
  updated?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
}
type RequestInquiryUpdate = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: BunqId[] | undefined
  batch_id?: number | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
  require_address?: string | undefined
  scheduled_id?: number | undefined
  status?: string | undefined
  time_expiry?: string | undefined
  time_responded?: string | undefined
  updated?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
}
type NoteAttachmentRequestInquiryListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentRequestInquiry = { attachment_id: number; description?: string | undefined }
type NoteAttachmentRequestInquiryCreate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryDelete = { [x: string]: unknown }
type NoteAttachmentRequestInquiryRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentRequestInquiryUpdate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextRequestInquiry = { content?: string | undefined }
type NoteTextRequestInquiryCreate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryDelete = { [x: string]: unknown }
type NoteTextRequestInquiryRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextRequestInquiryUpdate = { Id?: BunqId | undefined }
type RequestResponseListing = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: Attachment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  credit_scheme_identifier?: string | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  event_id?: number | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  require_address?: string | undefined
  status?: string | undefined
  sub_type?: string | undefined
  time_expiry?: string | undefined
  time_refund_requested?: string | undefined
  time_refunded?: string | undefined
  time_responded?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  user_refund_requested?: LabelUser | undefined
}
type RequestResponseRead = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: Attachment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  credit_scheme_identifier?: string | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  event_id?: number | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  require_address?: string | undefined
  status?: string | undefined
  sub_type?: string | undefined
  time_expiry?: string | undefined
  time_refund_requested?: string | undefined
  time_refunded?: string | undefined
  time_responded?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  user_refund_requested?: LabelUser | undefined
}
type RequestResponseUpdate = { Id?: BunqId | undefined }
type NoteAttachmentRequestResponseListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentRequestResponse = { attachment_id: number; description?: string | undefined }
type NoteAttachmentRequestResponseCreate = { Id?: BunqId | undefined }
type NoteAttachmentRequestResponseDelete = { [x: string]: unknown }
type NoteAttachmentRequestResponseRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentRequestResponseUpdate = { Id?: BunqId | undefined }
type NoteTextRequestResponseListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextRequestResponse = { content?: string | undefined }
type NoteTextRequestResponseCreate = { Id?: BunqId | undefined }
type NoteTextRequestResponseDelete = { [x: string]: unknown }
type NoteTextRequestResponseRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextRequestResponseUpdate = { Id?: BunqId | undefined }
type ScheduleListing = {
  object?: ScheduleAnchorObject | undefined
  recurrence_size?: number | undefined
  recurrence_unit?: string | undefined
  status?: string | undefined
  time_end?: string | undefined
  time_start?: string | undefined
}
type SchedulePaymentListing = {
  payment?: SchedulePaymentEntry | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
}
type SchedulePaymentCreate = { Id?: BunqId | undefined }
type SchedulePaymentBatchCreate = { Id?: BunqId | undefined }
type SchedulePaymentBatchDelete = { [x: string]: unknown }
type SchedulePaymentBatchRead = {
  payments?: SchedulePaymentEntry[] | undefined
  schedule?: Schedule | undefined
}
type SchedulePaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentBatchListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentSchedulePaymentBatch = {
  attachment_id: number
  description?: string | undefined
}
type NoteAttachmentSchedulePaymentBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentBatchDelete = { [x: string]: unknown }
type NoteAttachmentSchedulePaymentBatchRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentSchedulePaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentBatchListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextSchedulePaymentBatch = { content?: string | undefined }
type NoteTextSchedulePaymentBatchCreate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentBatchDelete = { [x: string]: unknown }
type NoteTextSchedulePaymentBatchRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextSchedulePaymentBatchUpdate = { Id?: BunqId | undefined }
type SchedulePaymentDelete = { [x: string]: unknown }
type SchedulePaymentRead = {
  payment?: SchedulePaymentEntry | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
}
type SchedulePaymentUpdate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentSchedulePayment = { attachment_id: number; description?: string | undefined }
type NoteAttachmentSchedulePaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentDelete = { [x: string]: unknown }
type NoteAttachmentSchedulePaymentRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentSchedulePaymentUpdate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextSchedulePayment = { content?: string | undefined }
type NoteTextSchedulePaymentCreate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentDelete = { [x: string]: unknown }
type NoteTextSchedulePaymentRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextSchedulePaymentUpdate = { Id?: BunqId | undefined }
type ScheduleRead = {
  object?: ScheduleAnchorObject | undefined
  recurrence_size?: number | undefined
  recurrence_unit?: string | undefined
  status?: string | undefined
  time_end?: string | undefined
  time_start?: string | undefined
}
type ScheduleInstanceListing = {
  error_message?: Error[] | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  result_object?: ScheduleInstanceAnchorObject | undefined
  scheduled_object?: ScheduleAnchorObject | undefined
  state?: string | undefined
  time_end?: string | undefined
  time_start?: string | undefined
}
type ScheduleInstanceRead = {
  error_message?: Error[] | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  result_object?: ScheduleInstanceAnchorObject | undefined
  scheduled_object?: ScheduleAnchorObject | undefined
  state?: string | undefined
  time_end?: string | undefined
  time_start?: string | undefined
}
type ScheduleInstanceUpdate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleInstanceListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentScheduleInstance = { attachment_id: number; description?: string | undefined }
type NoteAttachmentScheduleInstanceCreate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleInstanceDelete = { [x: string]: unknown }
type NoteAttachmentScheduleInstanceRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentScheduleInstanceUpdate = { Id?: BunqId | undefined }
type NoteTextScheduleInstanceListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextScheduleInstance = { content?: string | undefined }
type NoteTextScheduleInstanceCreate = { Id?: BunqId | undefined }
type NoteTextScheduleInstanceDelete = { [x: string]: unknown }
type NoteTextScheduleInstanceRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextScheduleInstanceUpdate = { Id?: BunqId | undefined }
type ShareInviteMonetaryAccountInquiryListing = {
  access_type?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counter_user_alias?: LabelUser | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  relationship?: string | undefined
  status?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
}
type ShareInviteMonetaryAccountInquiryCreate = { id?: number | undefined }
type ShareInviteMonetaryAccountInquiryRead = {
  access_type?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counter_user_alias?: LabelUser | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  relationship?: string | undefined
  status?: string | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
}
type ShareInviteMonetaryAccountInquiryUpdate = { Id?: BunqId | undefined }
type SofortMerchantTransactionListing = {
  alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  error_message?: Error[] | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  transaction_identifier?: string | undefined
}
type SofortMerchantTransactionRead = {
  alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  error_message?: Error[] | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  transaction_identifier?: string | undefined
}
type NoteAttachmentSofortMerchantTransactionListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentSofortMerchantTransaction = {
  attachment_id: number
  description?: string | undefined
}
type NoteAttachmentSofortMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentSofortMerchantTransactionDelete = { [x: string]: unknown }
type NoteAttachmentSofortMerchantTransactionRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentSofortMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteTextSofortMerchantTransactionListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextSofortMerchantTransaction = { content?: string | undefined }
type NoteTextSofortMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteTextSofortMerchantTransactionDelete = { [x: string]: unknown }
type NoteTextSofortMerchantTransactionRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextSofortMerchantTransactionUpdate = { Id?: BunqId | undefined }
type BankSwitchServiceNetherlandsIncomingPaymentRead = {
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming | undefined
  payment?: Payment | undefined
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment = {
  attachment_id: number
  description?: string | undefined
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentDelete = { [x: string]: unknown }
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentUpdate = { Id?: BunqId | undefined }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextBankSwitchServiceNetherlandsIncomingPayment = { content?: string | undefined }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentCreate = { Id?: BunqId | undefined }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentDelete = { [x: string]: unknown }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentUpdate = { Id?: BunqId | undefined }
type TranslinkTransactionEntry = {
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  id?: number | undefined
  merchant_reference?: string | undefined
  type?: string | undefined
}
type TranslinkTransactionListing = {
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  description?: string | undefined
  entries?: TranslinkTransactionEntry[] | undefined
  failure_reason?: Error[] | undefined
  payments?: PaymentBatchAnchoredPayment | undefined
  reference?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
type TranslinkTransaction = {
  description: string
  payments: Payment[]
  reference: string
  type: string
}
type TranslinkTransactionCreate = { Id?: BunqId | undefined }
type TranslinkTransactionRead = {
  alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  description?: string | undefined
  entries?: TranslinkTransactionEntry[] | undefined
  failure_reason?: Error[] | undefined
  payments?: PaymentBatchAnchoredPayment | undefined
  reference?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
type WhitelistSddMonetaryAccountPayingListing = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddMonetaryAccountPayingRead = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type NoteAttachmentWhitelistResultListing = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentWhitelistResult = { attachment_id: number; description?: string | undefined }
type NoteAttachmentWhitelistResultCreate = { Id?: BunqId | undefined }
type NoteAttachmentWhitelistResultDelete = { [x: string]: unknown }
type NoteAttachmentWhitelistResultRead = {
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteAttachmentWhitelistResultUpdate = { Id?: BunqId | undefined }
type NoteTextWhitelistResultListing = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextWhitelistResult = { content?: string | undefined }
type NoteTextWhitelistResultCreate = { Id?: BunqId | undefined }
type NoteTextWhitelistResultDelete = { [x: string]: unknown }
type NoteTextWhitelistResultRead = {
  content?: string | undefined
  created?: string | undefined
  id?: number | undefined
  label_user_creator?: LabelUser | undefined
  updated?: string | undefined
}
type NoteTextWhitelistResultUpdate = { Id?: BunqId | undefined }
type NotificationFilterEmail = { notification_filters?: NotificationFilterEmail[] | undefined }
type NotificationFilterEmailListing = {
  notification_filters?: NotificationFilterEmail[] | undefined
}
type NotificationFilterEmailCreate = { Id?: BunqId | undefined }
type NotificationFilterPush = { notification_filters?: NotificationFilterPush[] | undefined }
type NotificationFilterPushListing = { notification_filters?: NotificationFilterPush[] | undefined }
type NotificationFilterPushCreate = { Id?: BunqId | undefined }
type NotificationFilterUrlListing = { notification_filters?: NotificationFilterUrl[] | undefined }
type NotificationFilterUrlCreate = { Id?: BunqId | undefined }
type OauthCallbackUrl = { url: string }
type OauthClientListing = {
  callback_url?: OauthCallbackUrl[] | undefined
  client_id?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  secret?: string | undefined
  status?: string | undefined
}
type OauthClient = { status?: string | undefined }
type OauthClientCreate = { Id?: BunqId | undefined }
type OauthClientRead = {
  callback_url?: OauthCallbackUrl[] | undefined
  client_id?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  secret?: string | undefined
  status?: string | undefined
}
type OauthClientUpdate = { Id?: BunqId | undefined }
type OauthCallbackUrlListing = { url?: string | undefined }
type OauthCallbackUrlCreate = { Id?: BunqId | undefined }
type OauthCallbackUrlDelete = { [x: string]: unknown }
type OauthCallbackUrlRead = { url?: string | undefined }
type OauthCallbackUrlUpdate = { Id?: BunqId | undefined }
type PaymentAutoAllocateUserListing = { PaymentAutoAllocate?: PaymentAutoAllocate | undefined }
type PaymentServiceProviderDraftPaymentListing = {
  amount?: Amount | undefined
  receiver_iban?: string | undefined
  sender_iban?: string | undefined
  status?: string | undefined
}
type PaymentServiceProviderDraftPayment = {
  amount: Amount
  counterparty_iban: string
  counterparty_name: string
  description: string
  sender_iban: string
  sender_name?: string | undefined
  status?: string | undefined
}
type PaymentServiceProviderDraftPaymentCreate = { Id?: BunqId | undefined }
type PaymentServiceProviderDraftPaymentRead = {
  amount?: Amount | undefined
  receiver_iban?: string | undefined
  sender_iban?: string | undefined
  status?: string | undefined
}
type PaymentServiceProviderDraftPaymentUpdate = { Id?: BunqId | undefined }
type RegistryMembership = {
  alias?: LabelMonetaryAccount | undefined
  auto_add_card_transaction?: string | undefined
  balance?: Amount | undefined
  invitor?: LabelUser | undefined
  registry_id?: number | undefined
  registry_title?: string | undefined
  status?: string | undefined
  status_settlement?: string | undefined
  total_amount_spent?: Amount | undefined
  uuid?: string | undefined
}
type RegistrySettlementItem = {
  amount?: Amount | undefined
  membership_paying?: RegistryMembership | undefined
  membership_receiving?: RegistryMembership | undefined
  paying_user_alias?: LabelMonetaryAccount | undefined
  receiving_user_alias?: LabelMonetaryAccount | undefined
}
type RegistrySettlementListing = {
  created?: string | undefined
  id?: number | undefined
  items?: RegistrySettlementItem[] | undefined
  membership_settled?: RegistryMembership | undefined
  number_of_entries?: number | undefined
  settled_by_alias?: RegistryMembership | undefined
  settlement_time?: string | undefined
  total_amount_spent?: Amount | undefined
  updated?: string | undefined
}
type RegistrySettlement = { [x: string]: unknown }
type RegistrySettlementCreate = { Id?: BunqId | undefined }
type RegistrySettlementRead = {
  created?: string | undefined
  id?: number | undefined
  items?: RegistrySettlementItem[] | undefined
  membership_settled?: RegistryMembership | undefined
  number_of_entries?: number | undefined
  settled_by_alias?: RegistryMembership | undefined
  settlement_time?: string | undefined
  total_amount_spent?: Amount | undefined
  updated?: string | undefined
}
type RewardListing = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type RewardRecipientListing = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type RewardRecipientRead = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type RewardSenderListing = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type RewardSenderRead = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type RewardRead = {
  amount_reward?: Amount | undefined
  counterparty_alias?: LabelUser | undefined
  created?: string | undefined
  id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type ScheduleUserListing = { [x: string]: unknown }
type ShareInviteMonetaryAccountResponseListing = {
  access_type?: string | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  draft_share_invite_bank_id?: number | undefined
  end_date?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  relation_user?: RelationUser | undefined
  share_detail?: ShareDetail | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  status?: string | undefined
  updated?: string | undefined
  user_alias_cancelled?: LabelUser | undefined
}
type ShareInviteMonetaryAccountResponseRead = {
  access_type?: string | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  created?: string | undefined
  description?: string | undefined
  draft_share_invite_bank_id?: number | undefined
  end_date?: string | undefined
  id?: number | undefined
  monetary_account_id?: number | undefined
  relation_user?: RelationUser | undefined
  share_detail?: ShareDetail | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  status?: string | undefined
  updated?: string | undefined
  user_alias_cancelled?: LabelUser | undefined
}
type ShareInviteMonetaryAccountResponseUpdate = { Id?: BunqId | undefined }
type TokenQrRequestIdeal = { token: string }
type TokenQrRequestIdealCreate = {
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  alias?: LabelMonetaryAccount | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  attachment?: Attachment[] | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  eligible_whitelist_id?: number | undefined
  geolocation?: Geolocation | undefined
  id?: number | undefined
  minimum_age?: number | undefined
  monetary_account_id?: number | undefined
  redirect_url?: string | undefined
  require_address?: string | undefined
  status?: string | undefined
  sub_type?: string | undefined
  time_expiry?: string | undefined
  time_responded?: string | undefined
  type?: string | undefined
}
type TokenQrRequestSofort = { token: string }
type TokenQrRequestSofortCreate = { Id?: BunqId | undefined }
type TransferwiseCurrencyListing = {
  country?: string | undefined
  currency?: string | undefined
  name?: string | undefined
}
type TransferwiseQuoteCreate = { Id?: BunqId | undefined }
type TransferwiseQuoteTemporary = {
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  currency_source: string
  currency_target: string
}
type TransferwiseQuoteTemporaryCreate = { Id?: BunqId | undefined }
type TransferwiseQuoteTemporaryRead = {
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  created?: string | undefined
  id?: number | undefined
  quote_id?: string | undefined
  rate?: string | undefined
  time_expiry?: string | undefined
  updated?: string | undefined
}
type TransferwiseQuoteRead = {
  amount_fee?: Amount | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  created?: string | undefined
  id?: number | undefined
  quote_id?: string | undefined
  rate?: string | undefined
  time_delivery_estimate?: string | undefined
  time_expiry?: string | undefined
  updated?: string | undefined
}
type TransferwiseAccountQuoteListing = {
  account_id?: string | undefined
  account_number?: string | undefined
  bank_code?: string | undefined
  country?: string | undefined
  currency?: string | undefined
  name_account_holder?: string | undefined
}
type TransferwiseRequirementFieldGroupValidationAsyncParams = {
  key?: string | undefined
  parameter_name?: string | undefined
  required?: boolean | undefined
}
type TransferwiseRequirementFieldGroupValidationAsync = {
  params?: TransferwiseRequirementFieldGroupValidationAsyncParams | undefined
  url?: string | undefined
}
type TransferwiseRequirementFieldGroupValuesAllowed = {
  key?: string | undefined
  name?: string | undefined
}
type TransferwiseRequirementFieldGroup = {
  display_format?: string | undefined
  example?: string | undefined
  key?: string | undefined
  max_length?: string | undefined
  min_length?: string | undefined
  name?: string | undefined
  refresh_requirements_on_change?: boolean | undefined
  required?: boolean | undefined
  type?: string | undefined
  validation_async?: TransferwiseRequirementFieldGroupValidationAsync | undefined
  validation_regexp?: string | undefined
  values_allowed?: TransferwiseRequirementFieldGroupValuesAllowed | undefined
}
type TransferwiseRequirementField = {
  group?: TransferwiseRequirementFieldGroup | undefined
  key: string
  name?: string | undefined
  value: string
}
type TransferwiseAccountQuote = {
  country?: string | undefined
  detail?: TransferwiseRequirementField[] | undefined
  name_account_holder: string
  type: string
}
type TransferwiseAccountQuoteCreate = { Id?: BunqId | undefined }
type TransferwiseAccountRequirementListing = {
  fields?: TransferwiseRequirementField[] | undefined
  label?: string | undefined
  type?: string | undefined
}
type TransferwiseAccountRequirement = {
  country?: string | undefined
  detail?: TransferwiseRequirementField[] | undefined
  name_account_holder: string
  type: string
}
type TransferwiseAccountRequirementCreate = { Id?: BunqId | undefined }
type TransferwiseAccountQuoteDelete = { [x: string]: unknown }
type TransferwiseAccountQuoteRead = {
  account_id?: string | undefined
  account_number?: string | undefined
  bank_code?: string | undefined
  country?: string | undefined
  currency?: string | undefined
  name_account_holder?: string | undefined
}
type TransferwiseTransferListing = {
  alias?: LabelMonetaryAccount | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  pay_in_reference?: string | undefined
  quote?: TransferwiseQuote | undefined
  rate?: string | undefined
  reference?: string | undefined
  status?: string | undefined
  status_transferwise?: string | undefined
  status_transferwise_issue?: string | undefined
  sub_status?: string | undefined
  time_delivery_estimate?: string | undefined
}
type TransferwiseTransferCreate = { Id?: BunqId | undefined }
type TransferwiseTransferRequirement = {
  detail?: TransferwiseRequirementField[] | undefined
  recipient_id: string
}
type TransferwiseTransferRequirementCreate = { Id?: BunqId | undefined }
type TransferwiseTransferRead = {
  alias?: LabelMonetaryAccount | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  pay_in_reference?: string | undefined
  quote?: TransferwiseQuote | undefined
  rate?: string | undefined
  reference?: string | undefined
  status?: string | undefined
  status_transferwise?: string | undefined
  status_transferwise_issue?: string | undefined
  sub_status?: string | undefined
  time_delivery_estimate?: string | undefined
}
type TransferwiseUserListing = {
  created?: string | undefined
  email?: string | undefined
  id?: number | undefined
  name?: string | undefined
  source?: string | undefined
  updated?: string | undefined
}
type TransferwiseUser = { oauth_code?: string | undefined }
type TransferwiseUserCreate = { Id?: BunqId | undefined }
type TreeProgressListing = {
  label_user?: LabelUser | undefined
  number_of_tree?: number | undefined
  progress_tree_next?: number | undefined
  url_invite_profile?: string | undefined
}
type WhitelistSddListing = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddOneOffListing = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddOneOff = {
  maximum_amount_per_month?: Amount | undefined
  monetary_account_paying_id: number
  request_id: number
}
type WhitelistSddOneOffCreate = { Id?: BunqId | undefined }
type WhitelistSddOneOffDelete = { [x: string]: unknown }
type WhitelistSddOneOffRead = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddOneOffUpdate = { Id?: BunqId | undefined }
type WhitelistSddRecurringListing = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddRecurring = {
  maximum_amount_per_month?: Amount | undefined
  monetary_account_paying_id: number
  request_id: number
}
type WhitelistSddRecurringCreate = { Id?: BunqId | undefined }
type WhitelistSddRecurringDelete = { [x: string]: unknown }
type WhitelistSddRecurringRead = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddRecurringUpdate = { Id?: BunqId | undefined }
type WhitelistSddRead = {
  counterparty_alias?: LabelMonetaryAccount | undefined
  credit_scheme_identifier?: string | undefined
  id?: number | undefined
  mandate_identifier?: string | undefined
  maximum_amount_per_month?: Amount | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  user_alias_created?: LabelUser | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/attachment-public': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: AttachmentPublic }
            output: AttachmentPublicCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: AttachmentPublic }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/attachment-public/:attachment-publicUUID/content': {
      $get:
        | {
            input: { param: { 'attachment-publicUUID': string } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AttachmentPublicContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'attachment-publicUUID': string } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/attachment-public/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AttachmentPublicRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/avatar': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Avatar }
            output: AvatarCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Avatar }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/avatar/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AvatarRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/device': {
      $get:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: DeviceListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/device-server': {
      $get:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: DeviceServerListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: DeviceServer }
            output: DeviceServerCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: DeviceServer }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/device-server/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: DeviceServerRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/device/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: DeviceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/installation': {
      $get:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InstallationListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Installation }
            output: InstallationCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Installation }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/installation/:installationID/server-public-key': {
      $get:
        | {
            input: { param: { installationID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InstallationServerPublicKeyListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { installationID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/installation/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InstallationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payment-service-provider-credential': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentServiceProviderCredential }
            output: PaymentServiceProviderCredentialCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentServiceProviderCredential }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payment-service-provider-credential/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentServiceProviderCredentialRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/place-lookup/:place-lookupID/photo/:photoID/content': {
      $get:
        | {
            input: { param: { 'place-lookupID': number; photoID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PlacePhotoLookupContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'place-lookupID': number; photoID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sandbox-user-company': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SandboxUserCompany }
            output: SandboxUserCompanyCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SandboxUserCompany }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sandbox-user-person': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SandboxUserPerson }
            output: SandboxUserPersonCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SandboxUserPerson }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/server-error': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ServerError }
            output: ServerErrorCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ServerError }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/session-server': {
      $post:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SessionServer }
            output: SessionServerCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SessionServer }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/session/:itemId': {
      $delete:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SessionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user': {
      $get:
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user-company/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserCompanyRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: UserCompany }
            output: UserCompanyUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: UserCompany }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user-company/:user-companyID/name': {
      $get:
        | {
            input: { param: { 'user-companyID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserCompanyNameListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'user-companyID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user-payment-service-provider/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserPaymentServiceProviderRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user-person/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserPersonRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: UserPerson }
            output: UserPersonUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: UserPerson }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/attachment/:attachmentID/content': {
      $get:
        | {
            input: { param: { userID: number; attachmentID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AttachmentUserContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; attachmentID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/attachment/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AttachmentUserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/billing-contract-subscription': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BillingContractSubscriptionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/bunqme-fundraiser-profile': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BunqMeFundraiserProfileUserListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/bunqme-fundraiser-profile/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BunqMeFundraiserProfileUserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CardListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card-batch': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardBatch }
            output: CardBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card-batch-replace': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardBatchReplace }
            output: CardBatchReplaceCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardBatchReplace }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card-credit': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardCredit }
            output: CardCreditCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardCredit }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card-debit': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardDebit }
            output: CardDebitCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardDebit }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card-name': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CardNameListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card': {
      $get:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-csv': {
      $get:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardCsvListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatementCardCsv }
            output: ExportStatementCardCsvCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatementCardCsv }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-csv/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardCsvDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardCsvRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-pdf': {
      $get:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardPdfListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatementCardPdf }
            output: ExportStatementCardPdfCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatementCardPdf }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-pdf/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardPdfDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardPdfRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card/:export-statement-cardID/content': {
      $get:
        | {
            input: {
              param: { userID: number; cardID: number; 'export-statement-cardID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; cardID: number; 'export-statement-cardID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card/:itemId': {
      $get:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementCardRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/generated-cvc2': {
      $get:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CardGeneratedCvc2Listing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardGeneratedCvc2 }
            output: CardGeneratedCvc2Create
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardGeneratedCvc2 }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/generated-cvc2/:itemId': {
      $get:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CardGeneratedCvc2Read
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardGeneratedCvc2 }
            output: CardGeneratedCvc2Update
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardGeneratedCvc2 }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:cardID/replace': {
      $post:
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardReplace }
            output: CardReplaceCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; cardID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CardReplace }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/card/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CardRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Card }
            output: CardUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Card }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/certificate-pinned': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CertificatePinnedListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CertificatePinned }
            output: CertificatePinnedCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CertificatePinned }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/certificate-pinned/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CertificatePinnedDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CertificatePinnedRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/challenge-request/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MasterCardIdentityCheckChallengeRequestUserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MasterCardIdentityCheckChallengeRequestUser }
            output: MasterCardIdentityCheckChallengeRequestUserUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MasterCardIdentityCheckChallengeRequestUser }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/chat-conversation/:chat-conversationID/attachment/:attachmentID/content': {
      $get:
        | {
            input: {
              param: { userID: number; 'chat-conversationID': number; attachmentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AttachmentConversationContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'chat-conversationID': number; attachmentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/company': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CompanyListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Company }
            output: CompanyCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Company }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/company/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CompanyRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Company }
            output: CompanyUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Company }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/confirmation-of-funds': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ConfirmationOfFunds }
            output: ConfirmationOfFundsCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ConfirmationOfFunds }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/credential-password-ip': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserCredentialPasswordIpListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/credential-password-ip/:credential-password-ipID/ip': {
      $get:
        | {
            input: { param: { userID: number; 'credential-password-ipID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PermittedIpListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'credential-password-ipID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'credential-password-ipID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PermittedIp }
            output: PermittedIpCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'credential-password-ipID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PermittedIp }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/credential-password-ip/:credential-password-ipID/ip/:itemId': {
      $get:
        | {
            input: {
              param: { userID: number; 'credential-password-ipID': number; itemId: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PermittedIpRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'credential-password-ipID': number; itemId: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: { userID: number; 'credential-password-ipID': number; itemId: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PermittedIp }
            output: PermittedIpUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'credential-password-ipID': number; itemId: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PermittedIp }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/credential-password-ip/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserCredentialPasswordIpRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/currency-cloud-beneficiary': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CurrencyCloudBeneficiaryListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyCloudBeneficiary }
            output: CurrencyCloudBeneficiaryCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyCloudBeneficiary }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/currency-cloud-beneficiary-requirement': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CurrencyCloudBeneficiaryRequirementListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/currency-cloud-beneficiary/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CurrencyCloudBeneficiaryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/event': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: EventListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/event/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: EventRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/export-annual-overview': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportAnnualOverviewListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportAnnualOverview }
            output: ExportAnnualOverviewCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportAnnualOverview }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/export-annual-overview/:export-annual-overviewID/content': {
      $get:
        | {
            input: { param: { userID: number; 'export-annual-overviewID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportAnnualOverviewContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'export-annual-overviewID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/export-annual-overview/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportAnnualOverviewDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportAnnualOverviewRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/feature-announcement/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: FeatureAnnouncementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/insight-preference-date': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InsightPreferenceDateListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/insights': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InsightListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/insights-search': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InsightEventListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/invoice': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceByUserListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/invoice/:invoiceID/pdf-content': {
      $get:
        | {
            input: { param: { userID: number; invoiceID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceExportPdfContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; invoiceID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/invoice/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceByUserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/legal-name': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: UserLegalNameListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/limit': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CustomerLimitListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-bank': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountBankListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountBank }
            output: MonetaryAccountBankCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountBank }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-bank/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountBankRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountBank }
            output: MonetaryAccountBankUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountBank }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-external': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountExternalListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-external/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountExternalRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-joint': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountJointListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountJoint }
            output: MonetaryAccountJointCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountJoint }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-joint/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountJointRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountJoint }
            output: MonetaryAccountJointUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountJoint }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-savings': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountSavingsListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountSavings }
            output: MonetaryAccountSavingsCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountSavings }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-savings/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountSavingsRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountSavings }
            output: MonetaryAccountSavingsUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: MonetaryAccountSavings }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MonetaryAccountRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/attachment': {
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: AttachmentMonetaryAccount }
            output: AttachmentMonetaryAccountCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: AttachmentMonetaryAccount }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/attachment/:attachmentID/content': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; attachmentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: AttachmentMonetaryAccountContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; attachmentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentBunqMeFundraiserResultListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBunqMeFundraiserResult }
            output: NoteAttachmentBunqMeFundraiserResultCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBunqMeFundraiserResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentBunqMeFundraiserResultDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentBunqMeFundraiserResultRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBunqMeFundraiserResult }
            output: NoteAttachmentBunqMeFundraiserResultUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBunqMeFundraiserResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextBunqMeFundraiserResultListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBunqMeFundraiserResult }
            output: NoteTextBunqMeFundraiserResultCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBunqMeFundraiserResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextBunqMeFundraiserResultDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextBunqMeFundraiserResultRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBunqMeFundraiserResult }
            output: NoteTextBunqMeFundraiserResultUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'bunqme-fundraiser-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBunqMeFundraiserResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BunqMeFundraiserResultRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-tab': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BunqMeTabListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: BunqMeTab }
            output: BunqMeTabCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: BunqMeTab }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-tab-result-response/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BunqMeTabResultResponseRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-tab/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BunqMeTabRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: BunqMeTab }
            output: BunqMeTabUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: BunqMeTab }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/currency-cloud-payment-quote': {
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyCloudPaymentQuote }
            output: CurrencyCloudPaymentQuoteCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyCloudPaymentQuote }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/currency-conversion': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CurrencyConversionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/currency-conversion-quote': {
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyConversionQuote }
            output: CurrencyConversionQuoteCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyConversionQuote }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/currency-conversion-quote/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CurrencyConversionQuoteRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyConversionQuote }
            output: CurrencyConversionQuoteUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: CurrencyConversionQuote }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/currency-conversion/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: CurrencyConversionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/customer-statement': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatement }
            output: ExportStatementCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatement }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/customer-statement/:customer-statementID/content': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'customer-statementID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'customer-statementID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/customer-statement/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: DraftPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: DraftPayment }
            output: DraftPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: DraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentDraftPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentDraftPayment }
            output: NoteAttachmentDraftPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentDraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentDraftPaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentDraftPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentDraftPayment }
            output: NoteAttachmentDraftPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentDraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextDraftPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextDraftPayment }
            output: NoteTextDraftPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'draft-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextDraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextDraftPaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextDraftPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextDraftPayment }
            output: NoteTextDraftPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'draft-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextDraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: DraftPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: DraftPayment }
            output: DraftPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: DraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/event/:eventID/statement': {
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; eventID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatementPayment }
            output: ExportStatementPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; eventID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportStatementPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/event/:eventID/statement/:itemId': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                eventID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                eventID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/event/:eventID/statement/:statementID/content': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                eventID: number
                statementID: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportStatementPaymentContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                eventID: number
                statementID: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/export-rib': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportRibListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportRib }
            output: ExportRibCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ExportRib }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/export-rib/:export-ribID/content': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'export-ribID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportRibContentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'export-ribID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/export-rib/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportRibDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ExportRibRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: IdealMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: IdealMerchantTransaction }
            output: IdealMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: IdealMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentIdealMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentIdealMerchantTransaction }
            output: NoteAttachmentIdealMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentIdealMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentIdealMerchantTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentIdealMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentIdealMerchantTransaction }
            output: NoteAttachmentIdealMerchantTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentIdealMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextIdealMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextIdealMerchantTransaction }
            output: NoteTextIdealMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextIdealMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextIdealMerchantTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextIdealMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextIdealMerchantTransaction }
            output: NoteTextIdealMerchantTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'ideal-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextIdealMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: IdealMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/invoice': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/invoice/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MasterCardActionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MasterCardActionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentMasterCardActionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentMasterCardAction }
            output: NoteAttachmentMasterCardActionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentMasterCardAction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentMasterCardActionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentMasterCardActionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentMasterCardAction }
            output: NoteAttachmentMasterCardActionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentMasterCardAction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextMasterCardActionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextMasterCardAction }
            output: NoteTextMasterCardActionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextMasterCardAction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextMasterCardActionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextMasterCardActionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextMasterCardAction }
            output: NoteTextMasterCardActionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'mastercard-actionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextMasterCardAction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/payment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: MasterCardPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'mastercard-actionID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/notification-filter-url': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NotificationFilterUrlMonetaryAccountListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterUrlMonetaryAccount }
            output: NotificationFilterUrlMonetaryAccountCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterUrlMonetaryAccount }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Payment }
            output: PaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: Payment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentAutoAllocate }
            output: PaymentAutoAllocateCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentAutoAllocate }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentAutoAllocate }
            output: PaymentAutoAllocateUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentAutoAllocate }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate/:payment-auto-allocateID/definition': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-auto-allocateID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateDefinitionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-auto-allocateID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate/:payment-auto-allocateID/instance': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-auto-allocateID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateInstanceListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-auto-allocateID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate/:payment-auto-allocateID/instance/:itemId': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-auto-allocateID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateInstanceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-auto-allocateID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentBatch }
            output: PaymentBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentBatch }
            output: PaymentBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPaymentBatch }
            output: NoteAttachmentPaymentBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPaymentBatch }
            output: NoteAttachmentPaymentBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPaymentBatch }
            output: NoteTextPaymentBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-batchID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPaymentBatch }
            output: NoteTextPaymentBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPayment }
            output: NoteAttachmentPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPayment }
            output: NoteAttachmentPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPayment }
            output: NoteTextPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; paymentID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPayment }
            output: NoteTextPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                paymentID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RequestInquiryListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiry }
            output: RequestInquiryCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RequestInquiryBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiryBatch }
            output: RequestInquiryBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiryBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RequestInquiryBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiryBatch }
            output: RequestInquiryBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiryBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestInquiryBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiryBatch }
            output: NoteAttachmentRequestInquiryBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiryBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestInquiryBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestInquiryBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiryBatch }
            output: NoteAttachmentRequestInquiryBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiryBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestInquiryBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiryBatch }
            output: NoteTextRequestInquiryBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiryBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestInquiryBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestInquiryBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiryBatch }
            output: NoteTextRequestInquiryBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiry-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiryBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RequestInquiryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiry }
            output: RequestInquiryUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestInquiryListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiry }
            output: NoteAttachmentRequestInquiryCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestInquiryDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestInquiryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiry }
            output: NoteAttachmentRequestInquiryUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestInquiryListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiry }
            output: NoteTextRequestInquiryCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-inquiryID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestInquiryDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestInquiryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiry }
            output: NoteTextRequestInquiryUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-inquiryID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RequestResponseListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RequestResponseRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestResponse }
            output: RequestResponseUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RequestResponse }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestResponseListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestResponse }
            output: NoteAttachmentRequestResponseCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestResponse }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestResponseDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentRequestResponseRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestResponse }
            output: NoteAttachmentRequestResponseUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentRequestResponse }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestResponseListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestResponse }
            output: NoteTextRequestResponseCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'request-responseID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestResponse }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestResponseDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextRequestResponseRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestResponse }
            output: NoteTextRequestResponseUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'request-responseID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextRequestResponse }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ScheduleListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SchedulePaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePayment }
            output: SchedulePaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch': {
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePaymentBatch }
            output: SchedulePaymentBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SchedulePaymentBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SchedulePaymentBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePaymentBatch }
            output: SchedulePaymentBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSchedulePaymentBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePaymentBatch }
            output: NoteAttachmentSchedulePaymentBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSchedulePaymentBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSchedulePaymentBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePaymentBatch }
            output: NoteAttachmentSchedulePaymentBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSchedulePaymentBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePaymentBatch }
            output: NoteTextSchedulePaymentBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSchedulePaymentBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSchedulePaymentBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePaymentBatch }
            output: NoteTextSchedulePaymentBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-payment-batchID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePaymentBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SchedulePaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SchedulePaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePayment }
            output: SchedulePaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: SchedulePayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-attachment': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSchedulePaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePayment }
            output: NoteAttachmentSchedulePaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSchedulePaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSchedulePaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePayment }
            output: NoteAttachmentSchedulePaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSchedulePayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-text': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSchedulePaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePayment }
            output: NoteTextSchedulePaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'schedule-paymentID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSchedulePaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSchedulePaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePayment }
            output: NoteTextSchedulePaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSchedulePayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ScheduleRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance': {
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; scheduleID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ScheduleInstanceListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; scheduleID: number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:itemId': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ScheduleInstanceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ScheduleInstance }
            output: ScheduleInstanceUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ScheduleInstance }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentScheduleInstanceListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleInstance }
            output: NoteAttachmentScheduleInstanceCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleInstance }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentScheduleInstanceDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentScheduleInstanceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleInstance }
            output: NoteAttachmentScheduleInstanceUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleInstance }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextScheduleInstanceListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleInstance }
            output: NoteTextScheduleInstanceCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleInstance }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextScheduleInstanceDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextScheduleInstanceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleInstance }
            output: NoteTextScheduleInstanceUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                scheduleID: number
                'schedule-instanceID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleInstance }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/share-invite-monetary-account-inquiry': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ShareInviteMonetaryAccountInquiryListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ShareInviteMonetaryAccountInquiry }
            output: ShareInviteMonetaryAccountInquiryCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ShareInviteMonetaryAccountInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/share-invite-monetary-account-inquiry/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ShareInviteMonetaryAccountInquiryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ShareInviteMonetaryAccountInquiry }
            output: ShareInviteMonetaryAccountInquiryUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ShareInviteMonetaryAccountInquiry }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SofortMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: SofortMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSofortMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSofortMerchantTransaction }
            output: NoteAttachmentSofortMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSofortMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSofortMerchantTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentSofortMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSofortMerchantTransaction }
            output: NoteAttachmentSofortMerchantTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentSofortMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSofortMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSofortMerchantTransaction }
            output: NoteTextSofortMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSofortMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSofortMerchantTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextSofortMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSofortMerchantTransaction }
            output: NoteTextSofortMerchantTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'sofort-merchant-transactionID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextSofortMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: BankSwitchServiceNetherlandsIncomingPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment }
            output: NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment }
            output: NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextBankSwitchServiceNetherlandsIncomingPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBankSwitchServiceNetherlandsIncomingPayment }
            output: NoteTextBankSwitchServiceNetherlandsIncomingPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBankSwitchServiceNetherlandsIncomingPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextBankSwitchServiceNetherlandsIncomingPaymentDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextBankSwitchServiceNetherlandsIncomingPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBankSwitchServiceNetherlandsIncomingPayment }
            output: NoteTextBankSwitchServiceNetherlandsIncomingPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'switch-service-paymentID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextBankSwitchServiceNetherlandsIncomingPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/translink-transaction': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TranslinkTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TranslinkTransaction }
            output: TranslinkTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TranslinkTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/translink-transaction/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TranslinkTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist-sdd': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddMonetaryAccountPayingListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist-sdd/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddMonetaryAccountPayingRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'monetary-accountID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-attachment': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentWhitelistResultListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentWhitelistResult }
            output: NoteAttachmentWhitelistResultCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentWhitelistResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-attachment/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentWhitelistResultDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentWhitelistResultRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentWhitelistResult }
            output: NoteAttachmentWhitelistResultUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentWhitelistResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-text': {
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextWhitelistResultListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextWhitelistResult }
            output: NoteTextWhitelistResultCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextWhitelistResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-text/:itemId': {
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextWhitelistResultDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextWhitelistResultRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextWhitelistResult }
            output: NoteTextWhitelistResultUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                whitelistID: number
                'whitelist-resultID': number
                itemId: number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextWhitelistResult }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/notification-filter-email': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NotificationFilterEmailListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterEmail }
            output: NotificationFilterEmailCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterEmail }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/notification-filter-push': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NotificationFilterPushListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterPush }
            output: NotificationFilterPushCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterPush }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/notification-filter-url': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NotificationFilterUrlListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterUrl }
            output: NotificationFilterUrlCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NotificationFilterUrl }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/oauth-client': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: OauthClientListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthClient }
            output: OauthClientCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthClient }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/oauth-client/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: OauthClientRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthClient }
            output: OauthClientUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthClient }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/oauth-client/:oauth-clientID/callback-url': {
      $get:
        | {
            input: { param: { userID: number; 'oauth-clientID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: OauthCallbackUrlListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'oauth-clientID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'oauth-clientID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthCallbackUrl }
            output: OauthCallbackUrlCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'oauth-clientID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthCallbackUrl }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/oauth-client/:oauth-clientID/callback-url/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'oauth-clientID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: OauthCallbackUrlDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'oauth-clientID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'oauth-clientID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: OauthCallbackUrlRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'oauth-clientID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; 'oauth-clientID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthCallbackUrl }
            output: OauthCallbackUrlUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'oauth-clientID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: OauthCallbackUrl }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/payment-auto-allocate': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentAutoAllocateUserListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/payment-service-provider-draft-payment': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentServiceProviderDraftPaymentListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentServiceProviderDraftPayment }
            output: PaymentServiceProviderDraftPaymentCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentServiceProviderDraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/payment-service-provider-draft-payment/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: PaymentServiceProviderDraftPaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentServiceProviderDraftPayment }
            output: PaymentServiceProviderDraftPaymentUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: PaymentServiceProviderDraftPayment }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/registry/:registryID/registry-settlement': {
      $get:
        | {
            input: { param: { userID: number; registryID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RegistrySettlementListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; registryID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; registryID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RegistrySettlement }
            output: RegistrySettlementCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; registryID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: RegistrySettlement }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/registry/:registryID/registry-settlement/:itemId': {
      $get:
        | {
            input: { param: { userID: number; registryID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RegistrySettlementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; registryID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/reward': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RewardListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/reward-recipient': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RewardRecipientListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/reward-recipient/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RewardRecipientRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/reward-sender': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RewardSenderListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/reward-sender/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RewardSenderRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/reward/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: RewardRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/schedule': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ScheduleUserListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/share-invite-monetary-account-response': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ShareInviteMonetaryAccountResponseListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/share-invite-monetary-account-response/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: ShareInviteMonetaryAccountResponseRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ShareInviteMonetaryAccountResponse }
            output: ShareInviteMonetaryAccountResponseUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: ShareInviteMonetaryAccountResponse }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/token-qr-request-ideal': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TokenQrRequestIdeal }
            output: TokenQrRequestIdealCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TokenQrRequestIdeal }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/token-qr-request-sofort': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TokenQrRequestSofort }
            output: TokenQrRequestSofortCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TokenQrRequestSofort }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-currency': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseCurrencyListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseQuote }
            output: TransferwiseQuoteCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseQuote }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote-temporary': {
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseQuoteTemporary }
            output: TransferwiseQuoteTemporaryCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseQuoteTemporary }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote-temporary/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseQuoteTemporaryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseQuoteRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-recipient': {
      $get:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseAccountQuoteListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseAccountQuote }
            output: TransferwiseAccountQuoteCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseAccountQuote }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-recipient-requirement': {
      $get:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseAccountRequirementListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseAccountRequirement }
            output: TransferwiseAccountRequirementCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseAccountRequirement }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-recipient/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseAccountQuoteDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseAccountQuoteRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-transfer': {
      $get:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseTransferListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseTransfer }
            output: TransferwiseTransferCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseTransfer }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-transfer-requirement': {
      $post:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseTransferRequirement }
            output: TransferwiseTransferRequirementCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseTransferRequirement }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-transfer/:itemId': {
      $get:
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseTransferRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; 'transferwise-quoteID': number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/transferwise-user': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TransferwiseUserListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseUser }
            output: TransferwiseUserCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: TransferwiseUser }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/tree-progress': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: TreeProgressListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/whitelist-sdd': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/whitelist-sdd-one-off': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddOneOffListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddOneOff }
            output: WhitelistSddOneOffCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddOneOff }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/whitelist-sdd-one-off/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddOneOffDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddOneOffRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddOneOff }
            output: WhitelistSddOneOffUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddOneOff }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/whitelist-sdd-recurring': {
      $get:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddRecurringListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddRecurring }
            output: WhitelistSddRecurringCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddRecurring }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/whitelist-sdd-recurring/:itemId': {
      $delete:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddRecurringDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddRecurringRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddRecurring }
            output: WhitelistSddRecurringUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: WhitelistSddRecurring }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/whitelist-sdd/:itemId': {
      $get:
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: WhitelistSddRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
