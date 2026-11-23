type AdditionalTransactionInformationCategoryListing = {
  category?: string | undefined
  type?: string | undefined
  status?: string | undefined
  order?: number | undefined
  description?: string | undefined
  description_translated?: string | undefined
  color?: string | undefined
  icon?: string | undefined
}
type Error = {
  error_description?: string | undefined
  error_description_translated?: string | undefined
}[]
type AdditionalTransactionInformationCategoryUserDefined = {
  category?: string | undefined
  status: string
  description?: string | undefined
  color?: string | undefined
  icon?: string | undefined
}
type BunqId = { id?: number | undefined }
type AdditionalTransactionInformationCategoryUserDefinedCreate = { Id?: BunqId | undefined }
type AttachmentMonetaryAccount = { [x: string]: unknown }
type AttachmentMonetaryAccountCreate = { id?: number | undefined }
type AttachmentUrl = { type?: string | undefined; url?: string | undefined }
type Attachment = {
  description?: string | undefined
  content_type?: string | undefined
  urls?: AttachmentUrl[] | undefined
}
type AttachmentUserRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  attachment?: Attachment | undefined
}
type AttachmentPublic = { [x: string]: unknown }
type AttachmentPublicCreate = { Id?: BunqId | undefined }
type AttachmentPublicRead = {
  uuid?: string | undefined
  created?: string | undefined
  updated?: string | undefined
  attachment?: Attachment | undefined
}
type Image = {
  attachment_public_uuid?: string | undefined
  content_type?: string | undefined
  height?: number | undefined
  width?: number | undefined
}
type Avatar = {
  uuid?: string | undefined
  anchor_uuid?: string | undefined
  image?: Image[] | undefined
  style?: string | undefined
}
type AvatarCreate = { uuid?: string | undefined }
type AvatarRead = { uuid?: string | undefined; image?: Image[] | undefined }
type BillingContractSubscriptionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  contract_date_start?: string | undefined
  contract_date_end?: string | undefined
  contract_version?: number | undefined
  subscription_type?: string | undefined
  subscription_type_downgrade?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
}
type LabelUser = {
  uuid?: string | undefined
  display_name?: string | undefined
  country?: string | undefined
  avatar?: Avatar | undefined
  public_nick_name?: string | undefined
}
type Pointer = {
  type?: string | undefined
  value?: string | undefined
  name?: string | undefined
  service?: string | undefined
}
type LabelMonetaryAccount = {
  iban?: string | undefined
  display_name?: string | undefined
  avatar?: Avatar | undefined
  label_user?: LabelUser | undefined
  country?: string | undefined
  bunq_me?: Pointer | undefined
  is_light?: boolean | undefined
  swift_bic?: string | undefined
  swift_account_number?: string | undefined
  transferwise_account_number?: string | undefined
  transferwise_bank_code?: string | undefined
  merchant_category_code?: string | undefined
}
type BunqMeFundraiserProfileUserRead = {
  monetary_account_id?: number | undefined
  owner_user_id?: number | undefined
  color?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  currency?: string | undefined
  description?: string | undefined
  attachment?: AttachmentPublic | undefined
  pointer?: Pointer | undefined
  redirect_url?: string | undefined
  status?: string | undefined
}
type BunqMeFundraiserProfileUserListing = {
  monetary_account_id?: number | undefined
  owner_user_id?: number | undefined
  color?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  currency?: string | undefined
  description?: string | undefined
  attachment?: AttachmentPublic | undefined
  pointer?: Pointer | undefined
  redirect_url?: string | undefined
  status?: string | undefined
}
type BunqMeMerchantAvailable = {
  merchant_type?: string | undefined
  available?: boolean | undefined
}
type BunqMeFundraiserProfile = {
  pointer?: Pointer | undefined
  color?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  currency?: string | undefined
  description?: string | undefined
  attachment?: AttachmentPublic | undefined
  status?: string | undefined
  redirect_url?: string | undefined
  invite_profile_name?: string | undefined
  merchant_available?: BunqMeMerchantAvailable[] | undefined
}
type Amount = { value?: string | undefined; currency?: string | undefined }
type AttachmentMonetaryAccountPayment = {
  id?: number | undefined
  monetary_account_id?: number | undefined
}
type PaymentArrivalExpected = { status?: string | undefined; time?: string | undefined }
type Address = {
  street?: string | undefined
  house_number?: string | undefined
  po_box?: string | undefined
  postal_code?: string | undefined
  city?: string | undefined
  country?: string | undefined
  extra?: string | undefined
  mailbox_name?: string | undefined
  province?: string | undefined
  is_user_address_updated?: boolean | undefined
}
type Geolocation = {
  latitude?: number | undefined
  longitude?: number | undefined
  altitude?: number | undefined
  radius?: number | undefined
}
type RequestInquiryReference = { type?: string | undefined; id?: number | undefined }
type PaymentBatchAnchoredPayment = { Payment?: Payment[] | undefined }
type PaymentBatch = { payments?: PaymentBatchAnchoredPayment | undefined }
type GinmonTransaction = {
  status?: string | undefined
  status_description?: string | undefined
  status_description_translated?: string | undefined
  amount_billing?: Amount | undefined
  amount_billing_original?: Amount | undefined
  isin?: string | undefined
  external_identifier?: string | undefined
  label_user?: LabelUser | undefined
  label_monetary_account?: LabelMonetaryAccount | undefined
  counter_label_monetary_account?: LabelMonetaryAccount | undefined
  event_id?: number | undefined
}
type PaymentAutoAllocateInstance = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  payment_auto_allocate_id?: number | undefined
  status?: string | undefined
  error_message?: Error[] | undefined
  payment_batch?: PaymentBatch | undefined
  payment_id?: number | undefined
  all_ginmon_transaction_order?: GinmonTransaction[] | undefined
}
type PaymentSuspendedOutgoing = {
  status?: string | undefined
  monetary_account_id?: string | undefined
  time_execution?: string | undefined
}
type PaymentFee = {
  value?: string | undefined
  currency?: string | undefined
  invoice_id?: number | undefined
}
type Payment = {
  amount?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  merchant_reference?: string | undefined
  allow_bunqto?: boolean | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  type?: string | undefined
  sub_type?: string | undefined
  payment_arrival_expected?: PaymentArrivalExpected | undefined
  bunqto_status?: string | undefined
  bunqto_sub_status?: string | undefined
  bunqto_share_url?: string | undefined
  bunqto_expiry?: string | undefined
  bunqto_time_responded?: string | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  balance_after_mutation?: Amount | undefined
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance | undefined
  payment_suspended_outgoing?: PaymentSuspendedOutgoing | undefined
  payment_fee?: PaymentFee | undefined
}
type BunqMeFundraiserResultRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile | undefined
  payments?: Payment[] | undefined
}
type BunqMeTabEntry = {
  amount_inquired?: Amount | undefined
  description?: string | undefined
  redirect_url?: string | undefined
  uuid?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
  merchant_available?: BunqMeMerchantAvailable[] | undefined
  invite_profile_name?: string | undefined
}
type BunqMeTab = {
  bunqme_tab_entry: BunqMeTabEntry
  status?: string | undefined
  event_id?: number | undefined
}
type BunqMeTabCreate = { id?: number | undefined }
type BunqMeTabResultInquiry = { payment?: Payment | undefined; bunq_me_tab_id?: number | undefined }
type BunqMeTabListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  alias_monetary_account?: LabelMonetaryAccount | undefined
  bunqme_tab_share_url?: string | undefined
  bunqme_tab_entry?: BunqMeTabEntry | undefined
  bunqme_tab_entries?: BunqMeTabEntry[] | undefined
  result_inquiries?: BunqMeTabResultInquiry[] | undefined
}
type BunqMeTabUpdate = { Id?: BunqId | undefined }
type BunqMeTabRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  type?: string | undefined
  alias_monetary_account?: LabelMonetaryAccount | undefined
  bunqme_tab_share_url?: string | undefined
  bunqme_tab_entry?: BunqMeTabEntry | undefined
  bunqme_tab_entries?: BunqMeTabEntry[] | undefined
  result_inquiries?: BunqMeTabResultInquiry[] | undefined
}
type BunqMeTabResultResponseRead = { payment?: Payment | undefined }
type OauthCallbackUrlRead = { url?: string | undefined }
type OauthCallbackUrl = { url: string }
type OauthCallbackUrlUpdate = { Id?: BunqId | undefined }
type OauthCallbackUrlDelete = { [x: string]: unknown }
type OauthCallbackUrlCreate = { Id?: BunqId | undefined }
type OauthCallbackUrlListing = { url?: string | undefined }
type CardCountryPermission = {
  country?: string | undefined
  expiry_time?: string | undefined
  id?: number | undefined
}
type CardPinAssignment = {
  type?: string | undefined
  routing_type?: string | undefined
  pin_code?: string | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
}
type CardPrimaryAccountNumber = {
  id?: number | undefined
  description?: string | undefined
  status?: string | undefined
  monetary_account_id?: number | undefined
  uuid?: string | undefined
  four_digit?: string | undefined
  type?: string | undefined
}
type Card = {
  pin_code?: string | undefined
  activation_code?: string | undefined
  status?: string | undefined
  order_status?: string | undefined
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  country_permission?: CardCountryPermission[] | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  primary_account_numbers?: CardPrimaryAccountNumber[] | undefined
  monetary_account_id_fallback?: number | undefined
  preferred_name_on_card?: string | undefined
  second_line?: string | undefined
  cancellation_reason?: string | undefined
}
type CardUpdate = { Id?: BunqId | undefined }
type Issuer = { bic?: string | undefined; name?: string | undefined }
type MonetaryAccountProfileFill = {
  status?: string | undefined
  balance_preferred?: Amount | undefined
  balance_threshold_low?: Amount | undefined
  issuer?: Issuer | undefined
}
type MonetaryAccountProfileDrain = {
  status?: string | undefined
  balance_preferred?: Amount | undefined
  balance_threshold_high?: Amount | undefined
  savings_account_alias?: LabelMonetaryAccount | undefined
}
type MonetaryAccountProfile = {
  profile_fill?: MonetaryAccountProfileFill | undefined
  profile_drain?: MonetaryAccountProfileDrain | undefined
}
type MonetaryAccountSetting = {
  color?: string | undefined
  icon?: string | undefined
  default_avatar_status?: string | undefined
  restriction_chat?: string | undefined
  sdd_expiration_action?: string | undefined
}
type MonetaryAccountBudget = {
  all_category: string[]
  amount: Amount
  recurrence_type: string
  monetary_account_source_funding_id: number
  payment_day_of_month?: number | undefined
}
type ShareDetailPayment = {
  make_payments?: boolean | undefined
  make_draft_payments?: boolean | undefined
  view_balance?: boolean | undefined
  view_old_events?: boolean | undefined
  view_new_events?: boolean | undefined
}
type ShareDetailReadOnly = {
  view_balance?: boolean | undefined
  view_old_events?: boolean | undefined
  view_new_events?: boolean | undefined
}
type ShareDetailDraftPayment = {
  make_draft_payments?: boolean | undefined
  view_balance?: boolean | undefined
  view_old_events?: boolean | undefined
  view_new_events?: boolean | undefined
}
type ShareDetail = {
  payment?: ShareDetailPayment | undefined
  read_only?: ShareDetailReadOnly | undefined
  draft_payment?: ShareDetailDraftPayment | undefined
}
type CompanyEmployeeSettingAdyenCardTransaction = {
  pointer_counter_user: Pointer
  status?: string | undefined
  monetary_account_payout_id?: number | undefined
}
type CompanyEmployeeCard = {
  pointer_counter_user: Pointer
  pointer_monetary_account: Pointer
  type: string
  product_type: string
  company_name_on_card?: string | undefined
  employee_name_on_card?: string | undefined
  employee_preferred_name_on_card?: string | undefined
  amount_limit_monthly?: Amount | undefined
  status?: string | undefined
  card?: Card | undefined
  amount_spent_monthly?: Amount | undefined
  number_of_company_employee_card_receipt_pending?: number | undefined
}
type RelationUser = {
  user_id?: string | undefined
  counter_user_id?: string | undefined
  label_user?: LabelUser | undefined
  counter_label_user?: LabelUser | undefined
  relationship?: string | undefined
  status?: string | undefined
  user_status?: string | undefined
  counter_user_status?: string | undefined
  company_employee_setting_adyen_card_transaction?:
    | CompanyEmployeeSettingAdyenCardTransaction
    | undefined
  all_company_employee_card?: CompanyEmployeeCard[] | undefined
}
type ShareInviteMonetaryAccountResponse = {
  status?: string | undefined
  card_id?: number | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  user_alias_cancelled?: LabelUser | undefined
  monetary_account_id?: number | undefined
  draft_share_invite_bank_id?: number | undefined
  share_detail?: ShareDetail | undefined
  access_type?: string | undefined
  relation_user?: RelationUser | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  description?: string | undefined
}
type Fulfillment = {
  type?: string | undefined
  reason?: string | undefined
  reason_translated?: string | undefined
  status?: string | undefined
  time_mandatory?: string | undefined
  user_id?: number | undefined
  all_status_allowed?: string[] | undefined
}
type CoOwner = { alias?: LabelUser | undefined; status?: string | undefined }
type CoOwnerInviteResponse = {
  status?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  monetary_account_id?: number | undefined
  monetary_account_type?: string | undefined
  freeze_status?: string | undefined
  label_freeze_user?: LabelUser | undefined
  all_co_owner?: CoOwner[] | undefined
}
type OpenBankingProviderBank = {
  account_information_service_status?: string | undefined
  payment_information_service_status?: string | undefined
  name?: string | undefined
  aiia_provider_id?: string | undefined
  country?: string | undefined
  all_payment_method_allowed_sepa?: string[] | undefined
  all_payment_method_allowed_domestic?: string[] | undefined
  audience_business_status?: boolean | undefined
  audience_private_status?: boolean | undefined
  avatar?: Avatar | undefined
}
type OpenBankingAccount = {
  status?: string | undefined
  iban?: string | undefined
  time_synced_last?: string | undefined
  provider_bank?: OpenBankingProviderBank | undefined
  balance_booked?: Amount | undefined
  balance_available?: Amount | undefined
}
type BirdeeInvestmentPortfolioGoal = {
  amount_target?: Amount | undefined
  time_end?: string | undefined
}
type BirdeeInvestmentPortfolioBalance = {
  amount_available?: Amount | undefined
  amount_deposit_total?: Amount | undefined
  amount_withdrawal_total?: Amount | undefined
  amount_fee_total?: Amount | undefined
  amount_profit?: Amount | undefined
  amount_deposit_pending?: Amount | undefined
  amount_withdrawal_pending?: Amount | undefined
}
type BirdeePortfolioAllocation = {
  instrument_currency?: string | undefined
  instrument_asset_class?: string | undefined
  instrument_asset_class_name?: string | undefined
  instrument_isin?: string | undefined
  instrument_name?: string | undefined
  instrument_region_name?: string | undefined
  instrument_key_information_document_uri?: string | undefined
  weight?: string | undefined
  quantity?: string | undefined
  price?: string | undefined
  amount?: string | undefined
}
type BirdeeInvestmentPortfolio = {
  risk_profile_type?: string | undefined
  investment_theme?: string | undefined
  name?: string | undefined
  goal?: BirdeeInvestmentPortfolioGoal | undefined
  status?: string | undefined
  number_of_strategy_change_annual_maximum?: number | undefined
  number_of_strategy_change_annual_used?: number | undefined
  external_identifier?: string | undefined
  balance?: BirdeeInvestmentPortfolioBalance | undefined
  allocations?: BirdeePortfolioAllocation[] | undefined
}
type MonetaryAccountLight = {
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  balance_maximum?: Amount | undefined
  budget_month_used?: Amount | undefined
  budget_month_maximum?: Amount | undefined
  budget_year_used?: Amount | undefined
  budget_year_maximum?: Amount | undefined
  budget_withdrawal_year_used?: Amount | undefined
  budget_withdrawal_year_maximum?: Amount | undefined
}
type MonetaryAccountBank = {
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  country_iban?: string | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountExternal = {
  currency?: string | undefined
  service?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  all_auto_save_id?: BunqId[] | undefined
  open_banking_account?: OpenBankingAccount | undefined
}
type MonetaryAccountInvestment = {
  currency?: string | undefined
  provider: string
  description?: string | undefined
  daily_limit?: Amount | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  birdee_investment_portfolio?: BirdeeInvestmentPortfolio | undefined
  monetary_account_deposit_initial_id?: number | undefined
  amount_deposit_initial?: Amount | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountJoint = {
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  alias?: Pointer[] | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  all_co_owner?: CoOwner[] | undefined
  setting?: MonetaryAccountSetting | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountSavings = {
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  all_co_owner?: CoOwner[] | undefined
  setting?: MonetaryAccountSetting | undefined
  savings_goal?: Amount | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  savings_goal_progress?: number | undefined
  number_of_payment_remaining?: string | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountSwitchService = {
  id?: number | undefined
  created?: string | undefined
  description?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
}
type MonetaryAccountExternalSavings = {
  currency?: string | undefined
  service: string
  description?: string | undefined
  daily_limit?: Amount | undefined
  avatar_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  savings_goal?: Amount | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  all_auto_save_id?: BunqId[] | undefined
  savings_goal_progress?: number | undefined
  number_of_payment_remaining?: string | undefined
}
type MonetaryAccountCard = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  balance_real?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccount = {
  alias?: Pointer[] | undefined
  balance?: Amount | undefined
  monetary_account_profile?: MonetaryAccountProfile[] | undefined
  setting?: MonetaryAccountSetting | undefined
  budget?: MonetaryAccountBudget[] | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  share?: ShareInviteMonetaryAccountResponse | undefined
  all_auto_save_id?: BunqId[] | undefined
  fulfillments?: Fulfillment[] | undefined
  relation_user?: RelationUser | undefined
  all_co_owner?: CoOwner[] | undefined
  co_owner_invite?: CoOwnerInviteResponse | undefined
  open_banking_account?: OpenBankingAccount | undefined
  birdee_investment_portfolio?: BirdeeInvestmentPortfolio | undefined
  MonetaryAccountLight?: MonetaryAccountLight | undefined
  MonetaryAccountBank?: MonetaryAccountBank | undefined
  MonetaryAccountExternal?: MonetaryAccountExternal | undefined
  MonetaryAccountInvestment?: MonetaryAccountInvestment | undefined
  MonetaryAccountJoint?: MonetaryAccountJoint | undefined
  MonetaryAccountSavings?: MonetaryAccountSavings | undefined
  MonetaryAccountSwitchService?: MonetaryAccountSwitchService | undefined
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings | undefined
  MonetaryAccountCard?: MonetaryAccountCard | undefined
}
type CardReplacement = {
  status?: string | undefined
  address_main?: Address | undefined
  address_postal?: Address | undefined
  card_id?: number | undefined
  card_new_id?: number | undefined
}
type CardGeneratedCvc2 = { type?: string | undefined }
type CardRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  user_owner_id?: number | undefined
  user_holder_id?: number | undefined
  type?: string | undefined
  sub_type?: string | undefined
  product_type?: string | undefined
  product_sub_type?: string | undefined
  first_line?: string | undefined
  second_line?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  order_status?: string | undefined
  expiry_date?: string | undefined
  name_on_card?: string | undefined
  preferred_name_on_card?: string | undefined
  primary_account_numbers?: CardPrimaryAccountNumber[] | undefined
  payment_account_reference?: string | undefined
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  country_permission?: CardCountryPermission[] | undefined
  label_monetary_account_ordered?: LabelMonetaryAccount | undefined
  label_monetary_account_current?: LabelMonetaryAccount | undefined
  monetary_account?: MonetaryAccount | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  monetary_account_id_fallback?: number | undefined
  country?: string | undefined
  card_shipment_tracking_url?: string | undefined
  is_card_eligible_for_free_replacement?: boolean | undefined
  card_replacement?: CardReplacement | undefined
  card_generated_cvc2?: CardGeneratedCvc2 | undefined
  is_limited_edition?: boolean | undefined
  card_metal_member_since_date?: string | undefined
  company_employee_card?: CompanyEmployeeCard | undefined
}
type CardListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  user_id?: number | undefined
  user_owner_id?: number | undefined
  user_holder_id?: number | undefined
  type?: string | undefined
  sub_type?: string | undefined
  product_type?: string | undefined
  product_sub_type?: string | undefined
  first_line?: string | undefined
  second_line?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  order_status?: string | undefined
  expiry_date?: string | undefined
  name_on_card?: string | undefined
  preferred_name_on_card?: string | undefined
  primary_account_numbers?: CardPrimaryAccountNumber[] | undefined
  payment_account_reference?: string | undefined
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  country_permission?: CardCountryPermission[] | undefined
  label_monetary_account_ordered?: LabelMonetaryAccount | undefined
  label_monetary_account_current?: LabelMonetaryAccount | undefined
  monetary_account?: MonetaryAccount | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  monetary_account_id_fallback?: number | undefined
  country?: string | undefined
  card_shipment_tracking_url?: string | undefined
  is_card_eligible_for_free_replacement?: boolean | undefined
  card_replacement?: CardReplacement | undefined
  card_generated_cvc2?: CardGeneratedCvc2 | undefined
  is_limited_edition?: boolean | undefined
  card_metal_member_since_date?: string | undefined
  company_employee_card?: CompanyEmployeeCard | undefined
}
type CardBatchEntry = {
  id: number
  status?: string | undefined
  card_limit?: Amount | undefined
  card_limit_atm?: Amount | undefined
  country_permission?: CardCountryPermission[] | undefined
  monetary_account_id_fallback?: number | undefined
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
  first_line?: string | undefined
  second_line: string
  name_on_card: string
  preferred_name_on_card?: string | undefined
  alias?: Pointer | undefined
  type: string
  product_type: string
  pin_code_assignment?: CardPinAssignment[] | undefined
  monetary_account_id_fallback?: number | undefined
  order_status?: string | undefined
}
type CardCreditCreate = { Id?: BunqId | undefined }
type CardDebit = {
  second_line: string
  name_on_card: string
  preferred_name_on_card?: string | undefined
  alias?: Pointer | undefined
  type: string
  product_type: string
  pin_code_assignment?: CardPinAssignment[] | undefined
  monetary_account_id_fallback?: number | undefined
  order_status?: string | undefined
}
type CardDebitCreate = { Id?: BunqId | undefined }
type CardNameListing = { possible_card_name_array?: string[] | undefined }
type Certificate = { certificate?: string | undefined }
type CertificatePinned = { certificate_chain: Certificate[] }
type CertificatePinnedCreate = { id?: number | undefined }
type CertificatePinnedListing = { certificate_chain?: string | undefined; id?: number | undefined }
type CertificatePinnedDelete = { [x: string]: unknown }
type CertificatePinnedRead = { certificate_chain?: string | undefined; id?: number | undefined }
type MasterCardIdentityCheckChallengeRequestUserRead = {
  amount?: string | undefined
  expiry_time?: string | undefined
  description?: string | undefined
  status?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  url_merchant_app?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  event_id?: number | undefined
  card_id?: number | undefined
}
type MasterCardIdentityCheckChallengeRequestUser = { status: string }
type MasterCardIdentityCheckChallengeRequestUserUpdate = { Id?: BunqId | undefined }
type Ubo = {
  name?: string | undefined
  date_of_birth?: string | undefined
  nationality?: string | undefined
}
type CompanyVatNumber = {
  type?: string | undefined
  country?: string | undefined
  value?: string | undefined
}
type Company = {
  name: string
  address_main: Address
  address_postal: Address
  country: string
  ubo?: Ubo[] | undefined
  chamber_of_commerce_number?: string | undefined
  legal_form: string
  subscription_type: string
  avatar_uuid?: string | undefined
  vat_number?: CompanyVatNumber | undefined
  vat_numbers?: CompanyVatNumber[] | undefined
  signup_track_type?: string | undefined
}
type CompanyCreate = { Id?: BunqId | undefined }
type NotificationFilter = {
  notification_delivery_method?: string | undefined
  notification_target?: string | undefined
  category?: string | undefined
}
type Customer = {
  billing_account_id?: string | undefined
  invoice_notification_preference?: string | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
}
type CustomerLimit = {
  limit_monetary_account?: number | undefined
  limit_monetary_account_remaining?: number | undefined
  limit_card_debit_maestro?: number | undefined
  limit_card_debit_mastercard?: number | undefined
  limit_card_debit_wildcard?: number | undefined
  limit_card_wildcard?: number | undefined
  limit_card_replacement?: number | undefined
  limit_amount_monthly?: Amount | undefined
  spent_amount_monthly?: Amount | undefined
}
type BillingContractSubscription = {
  subscription_type?: string | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  contract_date_start?: string | undefined
  contract_date_end?: string | undefined
  contract_version?: number | undefined
  subscription_type_downgrade?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
}
type TaxResident = {
  country?: string | undefined
  tax_number?: string | undefined
  status?: string | undefined
  id?: number | undefined
}
type UserCompany = {
  name?: string | undefined
  public_nick_name?: string | undefined
  avatar_uuid?: string | undefined
  address_main?: Address | undefined
  address_postal?: Address | undefined
  language?: string | undefined
  region?: string | undefined
  country?: string | undefined
  ubo?: Ubo[] | undefined
  chamber_of_commerce_number?: string | undefined
  legal_form?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  session_timeout?: number | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  display_name?: string | undefined
  alias?: Pointer[] | undefined
  type_of_business_entity?: string | undefined
  sector_of_industry?: string | undefined
  counter_bank_iban?: string | undefined
  avatar?: Avatar | undefined
  address_shipping?: Address | undefined
  version_terms_of_service?: string | undefined
  directors?: LabelUser[] | undefined
  notification_filters?: NotificationFilter[] | undefined
  customer?: Customer | undefined
  customer_limit?: CustomerLimit | undefined
  billing_contract?: BillingContractSubscription[] | undefined
  deny_reason?: string | undefined
  relations?: RelationUser[] | undefined
  tax_resident?: TaxResident[] | undefined
}
type CompanyListing = { UserCompany?: UserCompany | undefined }
type CompanyRead = { UserCompany?: UserCompany | undefined }
type CompanyUpdate = { Id?: BunqId | undefined }
type ConfirmationOfFunds = { pointer_iban: Pointer; amount: Amount }
type ConfirmationOfFundsCreate = { Id?: BunqId | undefined }
type AttachmentConversationContentListing = { [x: string]: unknown }
type AttachmentMonetaryAccountContentListing = { [x: string]: unknown }
type AttachmentPublicContentListing = { [x: string]: unknown }
type AttachmentUserContentListing = { [x: string]: unknown }
type ExportAnnualOverviewContentListing = { [x: string]: unknown }
type ExportRibContentListing = { [x: string]: unknown }
type ExportStatementCardContentListing = { [x: string]: unknown }
type ExportStatementContentListing = { [x: string]: unknown }
type ExportStatementPaymentContentListing = { [x: string]: unknown }
type PermittedDevice = { description?: string | undefined; ip?: string | undefined }
type UserCredentialPasswordIpRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  expiry_time?: string | undefined
  token_value?: string | undefined
  permitted_device?: PermittedDevice | undefined
}
type UserCredentialPasswordIpListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  expiry_time?: string | undefined
  token_value?: string | undefined
  permitted_device?: PermittedDevice | undefined
}
type CurrencyCloudBeneficiary = {
  name: string
  country: string
  currency: string
  payment_type: string
  legal_entity_type: string
  all_field: string[]
}
type CurrencyCloudBeneficiaryCreate = { Id?: BunqId | undefined }
type CurrencyCloudBeneficiaryListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  name?: string | undefined
  account_number?: string | undefined
  currency?: string | undefined
  external_identifier?: string | undefined
}
type CurrencyCloudBeneficiaryRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  name?: string | undefined
  account_number?: string | undefined
  currency?: string | undefined
  external_identifier?: string | undefined
}
type CurrencyCloudBeneficiaryRequirementField = {
  label?: string | undefined
  name?: string | undefined
  validation_expression?: string | undefined
  input_type?: string | undefined
}
type CurrencyCloudBeneficiaryRequirementListing = {
  payment_type?: string | undefined
  legal_entity_type?: string | undefined
  all_field?: CurrencyCloudBeneficiaryRequirementField[] | undefined
}
type CurrencyCloudPaymentQuote = { pointers: Pointer[] }
type CurrencyCloudPaymentQuoteCreate = { Id?: BunqId | undefined }
type CurrencyConversionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  date_delivery_expected?: string | undefined
  rate?: string | undefined
  amount?: Amount | undefined
  counter_amount?: Amount | undefined
  group_uuid?: string | undefined
  type?: string | undefined
  order_type?: string | undefined
  label_monetary_account?: LabelMonetaryAccount | undefined
  counter_label_monetary_account?: LabelMonetaryAccount | undefined
  payment?: Payment | undefined
}
type CurrencyConversionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  date_delivery_expected?: string | undefined
  rate?: string | undefined
  amount?: Amount | undefined
  counter_amount?: Amount | undefined
  group_uuid?: string | undefined
  type?: string | undefined
  order_type?: string | undefined
  label_monetary_account?: LabelMonetaryAccount | undefined
  counter_label_monetary_account?: LabelMonetaryAccount | undefined
  payment?: Payment | undefined
}
type CurrencyConversionQuote = {
  amount: Amount
  currency_source: string
  currency_target: string
  order_type: string
  counterparty_alias: Pointer
  status?: string | undefined
}
type CurrencyConversionQuoteCreate = { Id?: BunqId | undefined }
type CurrencyConversionQuoteRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  rate?: string | undefined
  time_expiry?: string | undefined
}
type CurrencyConversionQuoteUpdate = { Id?: BunqId | undefined }
type ExportStatement = {
  statement_format: string
  date_start: string
  date_end: string
  regional_format?: string | undefined
  include_attachment?: boolean | undefined
}
type ExportStatementCreate = { Id?: BunqId | undefined }
type ExportStatementListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  statement_number?: number | undefined
  statement_format?: string | undefined
  regional_format?: string | undefined
  alias_monetary_account?: LabelMonetaryAccount | undefined
}
type ExportStatementRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  statement_number?: number | undefined
  statement_format?: string | undefined
  regional_format?: string | undefined
  alias_monetary_account?: LabelMonetaryAccount | undefined
}
type ExportStatementDelete = { [x: string]: unknown }
type PaymentAutoAllocateDefinitionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  counterparty_alias?: Pointer | undefined
  description?: string | undefined
  amount?: Amount | undefined
  fraction?: number | undefined
}
type DeviceServer = { description: string; secret: string; permitted_ips?: string[] | undefined }
type DeviceRead = { DeviceServer?: DeviceServer | undefined }
type DeviceListing = { DeviceServer?: DeviceServer | undefined }
type DeviceServerCreate = { id?: number | undefined }
type DeviceServerListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  description?: string | undefined
  ip?: string | undefined
  status?: string | undefined
}
type DeviceServerRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  description?: string | undefined
  ip?: string | undefined
  status?: string | undefined
}
type DraftPaymentEntry = {
  amount?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  merchant_reference?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  type?: string | undefined
}
type ScheduleAnchorObject = {
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
}
type Schedule = {
  time_start?: string | undefined
  time_end?: string | undefined
  recurrence_unit?: string | undefined
  recurrence_size?: number | undefined
  status?: string | undefined
  object?: ScheduleAnchorObject | undefined
}
type DraftPayment = {
  status?: string | undefined
  entries: DraftPaymentEntry[]
  previous_updated_timestamp?: string | undefined
  number_of_required_accepts: number
  schedule?: Schedule | undefined
}
type DraftPaymentCreate = { id?: number | undefined }
type DraftPaymentResponse = {
  status?: string | undefined
  user_alias_created?: LabelUser | undefined
}
type DraftPaymentAnchorObject = {
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
}
type DraftPaymentListing = {
  id?: number | undefined
  monetary_account_id?: number | undefined
  user_alias_created?: LabelUser | undefined
  responses?: DraftPaymentResponse[] | undefined
  status?: string | undefined
  type?: string | undefined
  entries?: DraftPaymentEntry[] | undefined
  object?: DraftPaymentAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  schedule?: Schedule | undefined
}
type DraftPaymentUpdate = { id?: number | undefined }
type DraftPaymentRead = {
  id?: number | undefined
  monetary_account_id?: number | undefined
  user_alias_created?: LabelUser | undefined
  responses?: DraftPaymentResponse[] | undefined
  status?: string | undefined
  type?: string | undefined
  entries?: DraftPaymentEntry[] | undefined
  object?: DraftPaymentAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  schedule?: Schedule | undefined
}
type BunqMeTabResultResponse = { payment?: Payment | undefined }
type BunqMeFundraiserResult = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile | undefined
  payments?: Payment[] | undefined
}
type FeatureAnnouncement = {
  avatar?: Avatar | undefined
  title?: string | undefined
  sub_title?: string | undefined
  type?: string | undefined
}
type IdealMerchantTransaction = {
  amount_requested?: Amount | undefined
  issuer?: string | undefined
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  expiration?: string | undefined
  issuer_name?: string | undefined
  issuer_authentication_url?: string | undefined
  purchase_identifier?: string | undefined
  status?: string | undefined
  status_timestamp?: string | undefined
  transaction_identifier?: string | undefined
}
type InvoiceItem = {
  id?: number | undefined
  billing_date?: string | undefined
  type_description?: string | undefined
  type_description_translated?: string | undefined
  unit_vat_exclusive?: Amount | undefined
  unit_vat_inclusive?: Amount | undefined
  vat?: number | undefined
  quantity?: number | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat_inclusive?: Amount | undefined
}
type InvoiceItemGroup = {
  type?: string | undefined
  type_description?: string | undefined
  type_description_translated?: string | undefined
  instance_description?: string | undefined
  product_vat_exclusive?: Amount | undefined
  product_vat_inclusive?: Amount | undefined
  item?: InvoiceItem[] | undefined
}
type Invoice = {
  status?: string | undefined
  description: string
  external_url: string
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  category?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  total_vat_inclusive?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  counterparty_address?: Address | undefined
  chamber_of_commerce_number?: string | undefined
  vat_number?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type SchedulePaymentEntry = {
  amount?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  merchant_reference?: string | undefined
  allow_bunqto?: boolean | undefined
  alias?: LabelMonetaryAccount | undefined
}
type SchedulePayment = {
  payment?: SchedulePaymentEntry | undefined
  schedule?: Schedule | undefined
  purpose?: string | undefined
  status?: string | undefined
}
type SchedulePaymentBatch = {
  payments?: SchedulePaymentEntry[] | undefined
  schedule?: Schedule | undefined
}
type ScheduleInstanceAnchorObject = {
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
}
type ScheduleInstance = {
  state?: string | undefined
  time_start?: string | undefined
  time_end?: string | undefined
  error_message?: Error[] | undefined
  scheduled_object?: ScheduleAnchorObject | undefined
  result_object?: ScheduleInstanceAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type LabelCard = {
  uuid?: string | undefined
  type?: string | undefined
  second_line?: string | undefined
  expiry_date?: string | undefined
  status?: string | undefined
  label_user?: LabelUser | undefined
}
type Event = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  action?: string | undefined
  user_id?: string | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
  object_data_at_event?: EventObject | undefined
  is_event_latest_for_object?: boolean | undefined
  is_event_reassignable?: boolean | undefined
}
type AttachmentMasterCardActionRefund = { id?: number | undefined }
type MasterCardActionReference = { event_id?: number | undefined }
type AdditionalInformation = {
  category?: string | undefined
  reason?: string | undefined
  comment?: string | undefined
  attachment?: AttachmentMasterCardActionRefund[] | undefined
  terms_and_conditions?: string | undefined
}
type MasterCardActionRefund = {
  type?: string | undefined
  sub_type?: string | undefined
  amount?: Amount | undefined
  category?: string | undefined
  reason?: string | undefined
  comment?: string | undefined
  attachment?: AttachmentMasterCardActionRefund[] | undefined
  terms_and_conditions?: string | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  status?: string | undefined
  reference_mastercard_action_event?: MasterCardActionReference[] | undefined
  mastercard_action_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  label_card?: LabelCard | undefined
  time_refund?: string | undefined
  additional_information?: AdditionalInformation | undefined
  status_description?: string | undefined
  status_description_translated?: string | undefined
  status_together_url?: string | undefined
}
type AdditionalTransactionInformationCategory = {
  category?: string | undefined
  type?: string | undefined
  status?: string | undefined
  order?: number | undefined
  description?: string | undefined
  description_translated?: string | undefined
  color?: string | undefined
  icon?: string | undefined
}
type PartnerPromotionCashback = {
  public_uuid?: string | undefined
  status?: string | undefined
  promotion_code?: string | undefined
  amount_cashback_per_transaction_maximum?: Amount | undefined
  number_of_transaction_maximum?: number | undefined
  amount_transaction_minimum?: Amount | undefined
  url_together?: string | undefined
  deeplink?: string | undefined
  partner_name?: string | undefined
  partner_avatar?: Avatar | undefined
  promotion_title_short?: string[] | undefined
  promotion_title_long?: string[] | undefined
  promotion_description?: string[] | undefined
}
type UserPartnerPromotionCashback = {
  promotion_code: string
  status?: string | undefined
  number_of_transaction_remaining?: number | undefined
  partner_promotion?: PartnerPromotionCashback | undefined
}
type CashbackPayoutItem = {
  status?: string | undefined
  amount?: Amount | undefined
  rate_applied?: string | undefined
  transaction_category?: AdditionalTransactionInformationCategory | undefined
  user_partner_promotion?: UserPartnerPromotionCashback | undefined
}
type PointMutation = { number_of_point?: number | undefined }
type UserBlocklistMasterCardMerchant = {
  merchant_name?: string | undefined
  merchant_id?: string | undefined
  merchant_identifier?: string | undefined
  mastercard_merchant_id?: string | undefined
  external_merchant_id?: string | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  merchant_hash?: string | undefined
  merchant_avatar?: Avatar | undefined
}
type MasterCardActionReport = {
  mastercard_action_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  merchant_id?: string | undefined
  merchant_name?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
}
type CompanyEmployeeCardReceipt = { status?: string | undefined }
type MasterCardAction = {
  id?: number | undefined
  monetary_account_id?: number | undefined
  card_id?: number | undefined
  amount_local?: Amount | undefined
  amount_converted?: Amount | undefined
  amount_billing?: Amount | undefined
  amount_original_local?: Amount | undefined
  amount_original_billing?: Amount | undefined
  amount_fee?: Amount | undefined
  card_authorisation_id_response?: string | undefined
  decision?: string | undefined
  payment_status?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  decision_together_url?: string | undefined
  description?: string | undefined
  authorisation_status?: string | undefined
  authorisation_type?: string | undefined
  pan_entry_mode_user?: string | undefined
  settlement_status?: string | undefined
  clearing_status?: string | undefined
  maturity_date?: string | undefined
  city?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  label_card?: LabelCard | undefined
  merchant_id?: string | undefined
  token_status?: string | undefined
  reservation_expiry_time?: string | undefined
  clearing_expiry_time?: string | undefined
  applied_limit?: string | undefined
  secure_code_id?: number | undefined
  wallet_provider_id?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  card_tokenization_event?: Event | undefined
  all_mastercard_action_refund?: MasterCardActionRefund[] | undefined
  pos_card_presence?: string | undefined
  pos_card_holder_presence?: string | undefined
  eligible_whitelist_id?: number | undefined
  cashback_payout_item?: CashbackPayoutItem | undefined
  point_mutation?: PointMutation | undefined
  blacklist?: UserBlocklistMasterCardMerchant | undefined
  blocklist?: UserBlocklistMasterCardMerchant | undefined
  additional_authentication_status?: string | undefined
  pin_status?: string | undefined
  mastercard_action_report?: MasterCardActionReport | undefined
  merchant_category_code?: string | undefined
  company_employee_card_receipt?: CompanyEmployeeCardReceipt | undefined
}
type BankSwitchServiceNetherlandsIncoming = {
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
  user_alias?: LabelUser | undefined
  sub_status?: string | undefined
  time_start_desired?: string | undefined
  time_start_actual?: string | undefined
  time_end?: string | undefined
  attachment?: Attachment | undefined
  rejection_reason?: string | undefined
  rejection_reason_description?: string | undefined
  rejection_reason_description_translated?: string | undefined
  rejection_reason_together_url?: string | undefined
}
type BankSwitchServiceNetherlandsIncomingPayment = {
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming | undefined
  payment?: Payment | undefined
}
type RequestResponse = {
  amount_responded?: Amount | undefined
  status?: string | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  currency_conversion_quote_id?: number | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  time_refund_requested?: string | undefined
  time_refunded?: string | undefined
  user_refund_requested?: LabelUser | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  description?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  attachment?: Attachment[] | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  geolocation?: Geolocation | undefined
  type?: string | undefined
  sub_type?: string | undefined
  redirect_url?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  registration_action?: string | undefined
  eligible_whitelist_id?: number | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  event_id?: number | undefined
  monetary_account_preferred_id?: number | undefined
}
type Whitelist = { [x: string]: unknown }
type WhitelistResultViewAnchoredObject = {
  id?: number | undefined
  requestResponse?: RequestResponse | undefined
  draftPayment?: DraftPayment | undefined
}
type WhitelistResult = {
  id?: number | undefined
  monetary_account_paying_id?: number | undefined
  status?: string | undefined
  sub_status?: string | undefined
  error_message?: Error[] | undefined
  whitelist?: Whitelist | undefined
  object?: WhitelistResultViewAnchoredObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type TransferwiseQuote = {
  currency_source: string
  currency_target: string
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_expiry?: string | undefined
  quote_id?: string | undefined
  amount_fee?: Amount | undefined
  rate?: string | undefined
  time_delivery_estimate?: string | undefined
}
type TransferwiseTransfer = {
  monetary_account_id: string
  recipient_id: string
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
  sub_status?: string | undefined
  status_transferwise?: string | undefined
  status_transferwise_issue?: string | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  rate?: string | undefined
  reference?: string | undefined
  pay_in_reference?: string | undefined
  time_delivery_estimate?: string | undefined
  quote?: TransferwiseQuote | undefined
}
type CurrencyConversion = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  date_delivery_expected?: string | undefined
  rate?: string | undefined
  amount?: Amount | undefined
  counter_amount?: Amount | undefined
  group_uuid?: string | undefined
  type?: string | undefined
  order_type?: string | undefined
  label_monetary_account?: LabelMonetaryAccount | undefined
  counter_label_monetary_account?: LabelMonetaryAccount | undefined
  payment?: Payment | undefined
}
type RequestReferenceSplitTheBillAnchorObject = {
  BillingInvoice?: Invoice | undefined
  DraftPayment?: DraftPayment | undefined
  MasterCardAction?: MasterCardAction | undefined
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
  RequestResponse?: RequestResponse | undefined
  ScheduleInstance?: ScheduleInstance | undefined
  WhitelistResult?: WhitelistResult | undefined
  TransferwisePayment?: TransferwiseTransfer | undefined
  CurrencyConversion?: CurrencyConversion | undefined
}
type RequestInquiry = {
  amount_inquired?: Amount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  attachment?: BunqId[] | undefined
  merchant_reference?: string | undefined
  status?: string | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  want_tip?: boolean | undefined
  allow_amount_lower?: boolean | undefined
  allow_amount_higher?: boolean | undefined
  allow_bunqme: boolean
  redirect_url?: string | undefined
  event_id?: number | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  amount_responded?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  bunqme_share_url?: string | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type RequestInquiryBatch = {
  request_inquiries?: RequestInquiry[] | undefined
  status?: string | undefined
  total_amount_inquired?: Amount | undefined
  event_id?: number | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type ShareInviteMonetaryAccountInquiry = {
  counter_user_alias?: LabelUser | undefined
  access_type?: string | undefined
  draft_share_invite_bank_id?: number | undefined
  share_detail?: ShareDetail | undefined
  status?: string | undefined
  relationship?: string | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  monetary_account_id?: number | undefined
  id?: number | undefined
}
type SofortMerchantTransaction = {
  amount_requested?: Amount | undefined
  issuer?: string | undefined
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  issuer_authentication_url?: string | undefined
  status?: string | undefined
  error_message?: Error[] | undefined
  transaction_identifier?: string | undefined
}
type EventObject = {
  BunqMeTab?: BunqMeTab | undefined
  BunqMeTabResultResponse?: BunqMeTabResultResponse | undefined
  BunqMeFundraiserResult?: BunqMeFundraiserResult | undefined
  Card?: Card | undefined
  CardDebit?: CardDebit | undefined
  DraftPayment?: DraftPayment | undefined
  FeatureAnnouncement?: FeatureAnnouncement | undefined
  IdealMerchantTransaction?: IdealMerchantTransaction | undefined
  Invoice?: Invoice | undefined
  ScheduledPayment?: SchedulePayment | undefined
  ScheduledPaymentBatch?: SchedulePaymentBatch | undefined
  ScheduledInstance?: ScheduleInstance | undefined
  MasterCardAction?: MasterCardAction | undefined
  BankSwitchServiceNetherlandsIncomingPayment?:
    | BankSwitchServiceNetherlandsIncomingPayment
    | undefined
  Payment?: Payment | undefined
  PaymentBatch?: PaymentBatch | undefined
  RequestInquiryBatch?: RequestInquiryBatch | undefined
  RequestInquiry?: RequestInquiry | undefined
  RequestResponse?: RequestResponse | undefined
  ShareInviteBankInquiry?: ShareInviteMonetaryAccountInquiry | undefined
  ShareInviteBankResponse?: ShareInviteMonetaryAccountResponse | undefined
  SofortMerchantTransaction?: SofortMerchantTransaction | undefined
  TransferwisePayment?: TransferwiseTransfer | undefined
}
type EventRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  action?: string | undefined
  user_id?: string | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
}
type EventListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  action?: string | undefined
  user_id?: string | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
}
type ExportAnnualOverview = { year: number }
type ExportAnnualOverviewCreate = { id?: number | undefined }
type ExportAnnualOverviewListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  year?: number | undefined
  alias_user?: LabelUser | undefined
}
type ExportAnnualOverviewRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  year?: number | undefined
  alias_user?: LabelUser | undefined
}
type ExportAnnualOverviewDelete = { [x: string]: unknown }
type ExportRib = { [x: string]: unknown }
type ExportRibCreate = { id?: number | undefined }
type ExportRibListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
}
type ExportRibRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
}
type ExportRibDelete = { [x: string]: unknown }
type ExportStatementCardRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  regional_format?: string | undefined
  card_id?: number | undefined
}
type ExportStatementCardListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  regional_format?: string | undefined
  card_id?: number | undefined
}
type ExportStatementCardCsv = { date_start: string; date_end: string; regional_format: string }
type ExportStatementCardCsvCreate = { Id?: BunqId | undefined }
type ExportStatementCardCsvListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  regional_format?: string | undefined
  card_id?: number | undefined
}
type ExportStatementCardCsvRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  regional_format?: string | undefined
  card_id?: number | undefined
}
type ExportStatementCardCsvDelete = { [x: string]: unknown }
type ExportStatementCardPdf = { date_start: string; date_end: string }
type ExportStatementCardPdfCreate = { Id?: BunqId | undefined }
type ExportStatementCardPdfListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  card_id?: number | undefined
}
type ExportStatementCardPdfRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  date_start?: string | undefined
  date_end?: string | undefined
  status?: string | undefined
  card_id?: number | undefined
}
type ExportStatementCardPdfDelete = { [x: string]: unknown }
type FeatureAnnouncementRead = {
  avatar?: Avatar | undefined
  title?: string | undefined
  sub_title?: string | undefined
  type?: string | undefined
}
type CardGeneratedCvc2Create = { Id?: BunqId | undefined }
type CardGeneratedCvc2Listing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  type?: string | undefined
  cvc2?: string | undefined
  status?: string | undefined
  expiry_time?: string | undefined
}
type CardGeneratedCvc2Read = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  type?: string | undefined
  cvc2?: string | undefined
  status?: string | undefined
  expiry_time?: string | undefined
}
type CardGeneratedCvc2Update = { Id?: BunqId | undefined }
type HealthCheckResultEntry = { type?: string | undefined; status?: string | undefined }
type HealthCheckResult = {
  status?: string | undefined
  allEntry?: HealthCheckResultEntry[] | undefined
}
type HealthCheckListing = { HealthResult?: HealthCheckResult | undefined }
type IdealMerchantTransactionCreate = { Id?: BunqId | undefined }
type IdealMerchantTransactionListing = {
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  expiration?: string | undefined
  issuer?: string | undefined
  issuer_name?: string | undefined
  issuer_authentication_url?: string | undefined
  purchase_identifier?: string | undefined
  status?: string | undefined
  status_timestamp?: string | undefined
  transaction_identifier?: string | undefined
}
type IdealMerchantTransactionRead = {
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  expiration?: string | undefined
  issuer?: string | undefined
  issuer_name?: string | undefined
  issuer_authentication_url?: string | undefined
  purchase_identifier?: string | undefined
  status?: string | undefined
  status_timestamp?: string | undefined
  transaction_identifier?: string | undefined
}
type InsightPreferenceDateListing = { day_of_month?: number | undefined }
type InsightListing = {
  category?: string | undefined
  category_translated?: string | undefined
  category_color?: string | undefined
  category_icon?: string | undefined
  amount_total?: Amount | undefined
  number_of_transactions?: number | undefined
}
type InsightEventListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  action?: string | undefined
  user_id?: string | undefined
  monetary_account_id?: string | undefined
  object?: EventObject | undefined
  status?: string | undefined
}
type Installation = { client_public_key: string }
type InstallationToken = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  token?: string | undefined
}
type InstallationServerPublicKey = { server_public_key?: string | undefined }
type InstallationCreate = {
  Id?: BunqId | undefined
  Token?: InstallationToken | undefined
  ServerPublicKey?: InstallationServerPublicKey | undefined
}
type InstallationListing = { id?: number | undefined }
type InstallationRead = { id?: number | undefined }
type PaymentAutoAllocateInstanceListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  payment_auto_allocate_id?: number | undefined
  status?: string | undefined
  error_message?: Error[] | undefined
  payment_batch?: PaymentBatch | undefined
  payment_id?: number | undefined
  all_ginmon_transaction_order?: GinmonTransaction[] | undefined
}
type PaymentAutoAllocateInstanceRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  payment_auto_allocate_id?: number | undefined
  status?: string | undefined
  error_message?: Error[] | undefined
  payment_batch?: PaymentBatch | undefined
  payment_id?: number | undefined
  all_ginmon_transaction_order?: GinmonTransaction[] | undefined
}
type InvoiceListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  status?: string | undefined
  category?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  total_vat_inclusive?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  counterparty_address?: Address | undefined
  chamber_of_commerce_number?: string | undefined
  vat_number?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type InvoiceRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  status?: string | undefined
  category?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  total_vat_inclusive?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  counterparty_address?: Address | undefined
  chamber_of_commerce_number?: string | undefined
  vat_number?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type InvoiceByUserListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  status?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  total_vat_inclusive?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  counterparty_address?: Address | undefined
  chamber_of_commerce_number?: string | undefined
  vat_number?: string | undefined
}
type InvoiceByUserRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  status?: string | undefined
  group?: InvoiceItemGroup[] | undefined
  total_vat_inclusive?: Amount | undefined
  total_vat_exclusive?: Amount | undefined
  total_vat?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  address?: Address | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  counterparty_address?: Address | undefined
  chamber_of_commerce_number?: string | undefined
  vat_number?: string | undefined
}
type InvoiceExportPdfRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
}
type InvoiceExportPdf = { [x: string]: unknown }
type InvoiceExportPdfUpdate = { Id?: BunqId | undefined }
type InvoiceExportPdfDelete = { [x: string]: unknown }
type InvoiceExportPdfCreate = { Id?: BunqId | undefined }
type PermittedIpRead = { ip?: string | undefined; status?: string | undefined }
type PermittedIp = { ip: string; status?: string | undefined }
type PermittedIpUpdate = { Id?: BunqId | undefined }
type PermittedIpCreate = { Id?: BunqId | undefined }
type PermittedIpListing = { ip?: string | undefined; status?: string | undefined }
type UserLegalNameListing = { legal_names?: string[] | undefined }
type CustomerLimitListing = {
  limit_monetary_account?: number | undefined
  limit_monetary_account_remaining?: number | undefined
  limit_card_debit_maestro?: number | undefined
  limit_card_debit_mastercard?: number | undefined
  limit_card_debit_wildcard?: number | undefined
  limit_card_wildcard?: number | undefined
  limit_card_replacement?: number | undefined
  limit_amount_monthly?: Amount | undefined
  spent_amount_monthly?: Amount | undefined
}
type MasterCardActionRead = {
  id?: number | undefined
  monetary_account_id?: number | undefined
  card_id?: number | undefined
  amount_local?: Amount | undefined
  amount_converted?: Amount | undefined
  amount_billing?: Amount | undefined
  amount_original_local?: Amount | undefined
  amount_original_billing?: Amount | undefined
  amount_fee?: Amount | undefined
  card_authorisation_id_response?: string | undefined
  decision?: string | undefined
  payment_status?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  decision_together_url?: string | undefined
  description?: string | undefined
  authorisation_status?: string | undefined
  authorisation_type?: string | undefined
  pan_entry_mode_user?: string | undefined
  settlement_status?: string | undefined
  clearing_status?: string | undefined
  maturity_date?: string | undefined
  city?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  label_card?: LabelCard | undefined
  merchant_id?: string | undefined
  token_status?: string | undefined
  reservation_expiry_time?: string | undefined
  clearing_expiry_time?: string | undefined
  applied_limit?: string | undefined
  secure_code_id?: number | undefined
  wallet_provider_id?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  card_tokenization_event?: Event | undefined
  all_mastercard_action_refund?: MasterCardActionRefund[] | undefined
  pos_card_presence?: string | undefined
  pos_card_holder_presence?: string | undefined
  eligible_whitelist_id?: number | undefined
  cashback_payout_item?: CashbackPayoutItem | undefined
  point_mutation?: PointMutation | undefined
  blacklist?: UserBlocklistMasterCardMerchant | undefined
  blocklist?: UserBlocklistMasterCardMerchant | undefined
  additional_authentication_status?: string | undefined
  pin_status?: string | undefined
  mastercard_action_report?: MasterCardActionReport | undefined
  merchant_category_code?: string | undefined
  company_employee_card_receipt?: CompanyEmployeeCardReceipt | undefined
}
type MasterCardActionListing = {
  id?: number | undefined
  monetary_account_id?: number | undefined
  card_id?: number | undefined
  amount_local?: Amount | undefined
  amount_converted?: Amount | undefined
  amount_billing?: Amount | undefined
  amount_original_local?: Amount | undefined
  amount_original_billing?: Amount | undefined
  amount_fee?: Amount | undefined
  card_authorisation_id_response?: string | undefined
  decision?: string | undefined
  payment_status?: string | undefined
  decision_description?: string | undefined
  decision_description_translated?: string | undefined
  decision_together_url?: string | undefined
  description?: string | undefined
  authorisation_status?: string | undefined
  authorisation_type?: string | undefined
  pan_entry_mode_user?: string | undefined
  settlement_status?: string | undefined
  clearing_status?: string | undefined
  maturity_date?: string | undefined
  city?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  label_card?: LabelCard | undefined
  merchant_id?: string | undefined
  token_status?: string | undefined
  reservation_expiry_time?: string | undefined
  clearing_expiry_time?: string | undefined
  applied_limit?: string | undefined
  secure_code_id?: number | undefined
  wallet_provider_id?: string | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  card_tokenization_event?: Event | undefined
  all_mastercard_action_refund?: MasterCardActionRefund[] | undefined
  pos_card_presence?: string | undefined
  pos_card_holder_presence?: string | undefined
  eligible_whitelist_id?: number | undefined
  cashback_payout_item?: CashbackPayoutItem | undefined
  point_mutation?: PointMutation | undefined
  blacklist?: UserBlocklistMasterCardMerchant | undefined
  blocklist?: UserBlocklistMasterCardMerchant | undefined
  additional_authentication_status?: string | undefined
  pin_status?: string | undefined
  mastercard_action_report?: MasterCardActionReport | undefined
  merchant_category_code?: string | undefined
  company_employee_card_receipt?: CompanyEmployeeCardReceipt | undefined
}
type MonetaryAccountRead = {
  MonetaryAccountLight?: MonetaryAccountLight | undefined
  MonetaryAccountBank?: MonetaryAccountBank | undefined
  MonetaryAccountExternal?: MonetaryAccountExternal | undefined
  MonetaryAccountInvestment?: MonetaryAccountInvestment | undefined
  MonetaryAccountJoint?: MonetaryAccountJoint | undefined
  MonetaryAccountSavings?: MonetaryAccountSavings | undefined
  MonetaryAccountSwitchService?: MonetaryAccountSwitchService | undefined
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings | undefined
  MonetaryAccountCard?: MonetaryAccountCard | undefined
}
type MonetaryAccountListing = {
  MonetaryAccountLight?: MonetaryAccountLight | undefined
  MonetaryAccountBank?: MonetaryAccountBank | undefined
  MonetaryAccountExternal?: MonetaryAccountExternal | undefined
  MonetaryAccountInvestment?: MonetaryAccountInvestment | undefined
  MonetaryAccountJoint?: MonetaryAccountJoint | undefined
  MonetaryAccountSavings?: MonetaryAccountSavings | undefined
  MonetaryAccountSwitchService?: MonetaryAccountSwitchService | undefined
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings | undefined
  MonetaryAccountCard?: MonetaryAccountCard | undefined
}
type MonetaryAccountBankCreate = { Id?: BunqId | undefined }
type MonetaryAccountBankListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountBankRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountBankUpdate = { Id?: BunqId | undefined }
type MonetaryAccountCardRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  balance_real?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountCardUpdate = { Id?: BunqId | undefined }
type MonetaryAccountCardListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  balance_real?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  user_id?: number | undefined
}
type MonetaryAccountExternalCreate = { Id?: BunqId | undefined }
type MonetaryAccountExternalListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
  service?: string | undefined
  open_banking_account?: OpenBankingAccount | undefined
}
type MonetaryAccountExternalRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
  service?: string | undefined
  open_banking_account?: OpenBankingAccount | undefined
}
type MonetaryAccountExternalUpdate = { Id?: BunqId | undefined }
type MonetaryAccountExternalSavingsCreate = { Id?: BunqId | undefined }
type MonetaryAccountExternalSavingsListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
  savings_goal?: Amount | undefined
  savings_goal_progress?: number | undefined
  number_of_payment_remaining?: string | undefined
}
type MonetaryAccountExternalSavingsRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  display_name?: string | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
  savings_goal?: Amount | undefined
  savings_goal_progress?: number | undefined
  number_of_payment_remaining?: string | undefined
}
type MonetaryAccountExternalSavingsUpdate = { Id?: BunqId | undefined }
type MonetaryAccountJointCreate = { Id?: BunqId | undefined }
type MonetaryAccountJointListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  all_co_owner?: CoOwner[] | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountJointRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  overdraft_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  all_co_owner?: CoOwner[] | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  setting?: MonetaryAccountSetting | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountJointUpdate = { Id?: BunqId | undefined }
type MonetaryAccountSavingsCreate = { Id?: BunqId | undefined }
type MonetaryAccountSavingsListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  all_co_owner?: CoOwner[] | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  setting?: MonetaryAccountSetting | undefined
  savings_goal?: Amount | undefined
  savings_goal_progress?: number | undefined
  number_of_payment_remaining?: string | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountSavingsRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  avatar?: Avatar | undefined
  currency?: string | undefined
  description?: string | undefined
  daily_limit?: Amount | undefined
  balance?: Amount | undefined
  alias?: Pointer[] | undefined
  public_uuid?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  reason?: string | undefined
  reason_description?: string | undefined
  all_co_owner?: CoOwner[] | undefined
  user_id?: number | undefined
  monetary_account_profile?: MonetaryAccountProfile | undefined
  setting?: MonetaryAccountSetting | undefined
  savings_goal?: Amount | undefined
  savings_goal_progress?: number | undefined
  number_of_payment_remaining?: string | undefined
  all_auto_save_id?: BunqId[] | undefined
}
type MonetaryAccountSavingsUpdate = { Id?: BunqId | undefined }
type UserCompanyNameListing = { name_array?: string[] | undefined }
type NoteAttachmentAdyenCardTransaction = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentAdyenCardTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentAdyenCardTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentAdyenCardTransactionUpdate = { Id?: BunqId | undefined }
type NoteAttachmentAdyenCardTransactionDelete = { [x: string]: unknown }
type NoteAttachmentAdyenCardTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentUpdate = { Id?: BunqId | undefined }
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentDelete = { [x: string]: unknown }
type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentBunqMeFundraiserResult = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentBunqMeFundraiserResultCreate = { Id?: BunqId | undefined }
type NoteAttachmentBunqMeFundraiserResultListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentBunqMeFundraiserResultUpdate = { Id?: BunqId | undefined }
type NoteAttachmentBunqMeFundraiserResultDelete = { [x: string]: unknown }
type NoteAttachmentBunqMeFundraiserResultRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentDraftPayment = { description?: string | undefined; attachment_id: number }
type NoteAttachmentDraftPaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentDraftPaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentDraftPaymentUpdate = { Id?: BunqId | undefined }
type NoteAttachmentDraftPaymentDelete = { [x: string]: unknown }
type NoteAttachmentDraftPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentIdealMerchantTransaction = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentIdealMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentIdealMerchantTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentIdealMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteAttachmentIdealMerchantTransactionDelete = { [x: string]: unknown }
type NoteAttachmentIdealMerchantTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentMasterCardAction = { description: string; attachment_id: number }
type NoteAttachmentMasterCardActionCreate = { Id?: BunqId | undefined }
type NoteAttachmentMasterCardActionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentMasterCardActionUpdate = { Id?: BunqId | undefined }
type NoteAttachmentMasterCardActionDelete = { [x: string]: unknown }
type NoteAttachmentMasterCardActionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentOpenBankingMerchantTransaction = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentOpenBankingMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentOpenBankingMerchantTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentOpenBankingMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteAttachmentOpenBankingMerchantTransactionDelete = { [x: string]: unknown }
type NoteAttachmentOpenBankingMerchantTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentPaymentBatch = { description?: string | undefined; attachment_id: number }
type NoteAttachmentPaymentBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentPaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentBatchDelete = { [x: string]: unknown }
type NoteAttachmentPaymentBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentPaymentDelayed = { description?: string | undefined; attachment_id: number }
type NoteAttachmentPaymentDelayedCreate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentDelayedListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentPaymentDelayedUpdate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentDelayedDelete = { [x: string]: unknown }
type NoteAttachmentPaymentDelayedRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentPayment = { description?: string | undefined; attachment_id: number }
type NoteAttachmentPaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentPaymentUpdate = { Id?: BunqId | undefined }
type NoteAttachmentPaymentDelete = { [x: string]: unknown }
type NoteAttachmentPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentRequestInquiryBatch = { description?: string | undefined; attachment_id: number }
type NoteAttachmentRequestInquiryBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentRequestInquiryBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryBatchDelete = { [x: string]: unknown }
type NoteAttachmentRequestInquiryBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentRequestInquiry = { description?: string | undefined; attachment_id: number }
type NoteAttachmentRequestInquiryCreate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentRequestInquiryUpdate = { Id?: BunqId | undefined }
type NoteAttachmentRequestInquiryDelete = { [x: string]: unknown }
type NoteAttachmentRequestInquiryRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentRequestResponse = { description?: string | undefined; attachment_id: number }
type NoteAttachmentRequestResponseCreate = { Id?: BunqId | undefined }
type NoteAttachmentRequestResponseListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentRequestResponseUpdate = { Id?: BunqId | undefined }
type NoteAttachmentRequestResponseDelete = { [x: string]: unknown }
type NoteAttachmentRequestResponseRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentScheduleInstance = { description?: string | undefined; attachment_id: number }
type NoteAttachmentScheduleInstanceCreate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleInstanceListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentScheduleInstanceUpdate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleInstanceDelete = { [x: string]: unknown }
type NoteAttachmentScheduleInstanceRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentSchedulePaymentBatch = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentSchedulePaymentBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentSchedulePaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentBatchDelete = { [x: string]: unknown }
type NoteAttachmentSchedulePaymentBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentSchedulePayment = { description?: string | undefined; attachment_id: number }
type NoteAttachmentSchedulePaymentCreate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentSchedulePaymentUpdate = { Id?: BunqId | undefined }
type NoteAttachmentSchedulePaymentDelete = { [x: string]: unknown }
type NoteAttachmentSchedulePaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentScheduleRequestBatch = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentScheduleRequestBatchCreate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleRequestBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentScheduleRequestBatchUpdate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleRequestBatchDelete = { [x: string]: unknown }
type NoteAttachmentScheduleRequestBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentScheduleRequest = { description?: string | undefined; attachment_id: number }
type NoteAttachmentScheduleRequestCreate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleRequestListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentScheduleRequestUpdate = { Id?: BunqId | undefined }
type NoteAttachmentScheduleRequestDelete = { [x: string]: unknown }
type NoteAttachmentScheduleRequestRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentSofortMerchantTransaction = {
  description?: string | undefined
  attachment_id: number
}
type NoteAttachmentSofortMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteAttachmentSofortMerchantTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentSofortMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteAttachmentSofortMerchantTransactionDelete = { [x: string]: unknown }
type NoteAttachmentSofortMerchantTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentWhitelistResult = { description?: string | undefined; attachment_id: number }
type NoteAttachmentWhitelistResultCreate = { Id?: BunqId | undefined }
type NoteAttachmentWhitelistResultListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteAttachmentWhitelistResultUpdate = { Id?: BunqId | undefined }
type NoteAttachmentWhitelistResultDelete = { [x: string]: unknown }
type NoteAttachmentWhitelistResultRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  description?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
}
type NoteTextAdyenCardTransaction = { content?: string | undefined }
type NoteTextAdyenCardTransactionCreate = { Id?: BunqId | undefined }
type NoteTextAdyenCardTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextAdyenCardTransactionUpdate = { Id?: BunqId | undefined }
type NoteTextAdyenCardTransactionDelete = { [x: string]: unknown }
type NoteTextAdyenCardTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextBankSwitchServiceNetherlandsIncomingPayment = { content?: string | undefined }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentCreate = { Id?: BunqId | undefined }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentUpdate = { Id?: BunqId | undefined }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentDelete = { [x: string]: unknown }
type NoteTextBankSwitchServiceNetherlandsIncomingPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextBunqMeFundraiserResult = { content?: string | undefined }
type NoteTextBunqMeFundraiserResultCreate = { Id?: BunqId | undefined }
type NoteTextBunqMeFundraiserResultListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextBunqMeFundraiserResultUpdate = { Id?: BunqId | undefined }
type NoteTextBunqMeFundraiserResultDelete = { [x: string]: unknown }
type NoteTextBunqMeFundraiserResultRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextDraftPayment = { content?: string | undefined }
type NoteTextDraftPaymentCreate = { Id?: BunqId | undefined }
type NoteTextDraftPaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextDraftPaymentUpdate = { Id?: BunqId | undefined }
type NoteTextDraftPaymentDelete = { [x: string]: unknown }
type NoteTextDraftPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextIdealMerchantTransaction = { content?: string | undefined }
type NoteTextIdealMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteTextIdealMerchantTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextIdealMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteTextIdealMerchantTransactionDelete = { [x: string]: unknown }
type NoteTextIdealMerchantTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextMasterCardAction = { content?: string | undefined }
type NoteTextMasterCardActionCreate = { Id?: BunqId | undefined }
type NoteTextMasterCardActionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextMasterCardActionUpdate = { Id?: BunqId | undefined }
type NoteTextMasterCardActionDelete = { [x: string]: unknown }
type NoteTextMasterCardActionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextOpenBankingMerchantTransaction = { content?: string | undefined }
type NoteTextOpenBankingMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteTextOpenBankingMerchantTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextOpenBankingMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteTextOpenBankingMerchantTransactionDelete = { [x: string]: unknown }
type NoteTextOpenBankingMerchantTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextPaymentBatch = { content?: string | undefined }
type NoteTextPaymentBatchCreate = { Id?: BunqId | undefined }
type NoteTextPaymentBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextPaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteTextPaymentBatchDelete = { [x: string]: unknown }
type NoteTextPaymentBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextPaymentDelayed = { content?: string | undefined }
type NoteTextPaymentDelayedCreate = { Id?: BunqId | undefined }
type NoteTextPaymentDelayedListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextPaymentDelayedUpdate = { Id?: BunqId | undefined }
type NoteTextPaymentDelayedDelete = { [x: string]: unknown }
type NoteTextPaymentDelayedRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextPayment = { content?: string | undefined }
type NoteTextPaymentCreate = { Id?: BunqId | undefined }
type NoteTextPaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextPaymentUpdate = { Id?: BunqId | undefined }
type NoteTextPaymentDelete = { [x: string]: unknown }
type NoteTextPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextRequestInquiryBatch = { content?: string | undefined }
type NoteTextRequestInquiryBatchCreate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextRequestInquiryBatchUpdate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryBatchDelete = { [x: string]: unknown }
type NoteTextRequestInquiryBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextRequestInquiry = { content?: string | undefined }
type NoteTextRequestInquiryCreate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextRequestInquiryUpdate = { Id?: BunqId | undefined }
type NoteTextRequestInquiryDelete = { [x: string]: unknown }
type NoteTextRequestInquiryRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextRequestResponse = { content?: string | undefined }
type NoteTextRequestResponseCreate = { Id?: BunqId | undefined }
type NoteTextRequestResponseListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextRequestResponseUpdate = { Id?: BunqId | undefined }
type NoteTextRequestResponseDelete = { [x: string]: unknown }
type NoteTextRequestResponseRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextScheduleInstance = { content?: string | undefined }
type NoteTextScheduleInstanceCreate = { Id?: BunqId | undefined }
type NoteTextScheduleInstanceListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextScheduleInstanceUpdate = { Id?: BunqId | undefined }
type NoteTextScheduleInstanceDelete = { [x: string]: unknown }
type NoteTextScheduleInstanceRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextSchedulePaymentBatch = { content?: string | undefined }
type NoteTextSchedulePaymentBatchCreate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextSchedulePaymentBatchUpdate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentBatchDelete = { [x: string]: unknown }
type NoteTextSchedulePaymentBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextSchedulePayment = { content?: string | undefined }
type NoteTextSchedulePaymentCreate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextSchedulePaymentUpdate = { Id?: BunqId | undefined }
type NoteTextSchedulePaymentDelete = { [x: string]: unknown }
type NoteTextSchedulePaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextScheduleRequestBatch = { content?: string | undefined }
type NoteTextScheduleRequestBatchCreate = { Id?: BunqId | undefined }
type NoteTextScheduleRequestBatchListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextScheduleRequestBatchUpdate = { Id?: BunqId | undefined }
type NoteTextScheduleRequestBatchDelete = { [x: string]: unknown }
type NoteTextScheduleRequestBatchRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextScheduleRequest = { content?: string | undefined }
type NoteTextScheduleRequestCreate = { Id?: BunqId | undefined }
type NoteTextScheduleRequestListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextScheduleRequestUpdate = { Id?: BunqId | undefined }
type NoteTextScheduleRequestDelete = { [x: string]: unknown }
type NoteTextScheduleRequestRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextSofortMerchantTransaction = { content?: string | undefined }
type NoteTextSofortMerchantTransactionCreate = { Id?: BunqId | undefined }
type NoteTextSofortMerchantTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextSofortMerchantTransactionUpdate = { Id?: BunqId | undefined }
type NoteTextSofortMerchantTransactionDelete = { [x: string]: unknown }
type NoteTextSofortMerchantTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextWhitelistResult = { content?: string | undefined }
type NoteTextWhitelistResultCreate = { Id?: BunqId | undefined }
type NoteTextWhitelistResultListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NoteTextWhitelistResultUpdate = { Id?: BunqId | undefined }
type NoteTextWhitelistResultDelete = { [x: string]: unknown }
type NoteTextWhitelistResultRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  label_user_creator?: LabelUser | undefined
  content?: string | undefined
}
type NotificationFilterEmail = { notification_filters?: NotificationFilterEmail[] | undefined }
type NotificationFilterEmailCreate = { Id?: BunqId | undefined }
type NotificationFilterEmailListing = {
  notification_filters?: NotificationFilterEmail[] | undefined
}
type NotificationFilterFailure = { notification_filter_failed_ids: string }
type NotificationFilterFailureCreate = { Id?: BunqId | undefined }
type NotificationFilterFailureListing = {
  notification_filters?: NotificationFilter[] | undefined
  category?: string | undefined
  event_type?: string | undefined
  object_id?: number | undefined
  exception_message?: string | undefined
  response_code?: number | undefined
}
type NotificationFilterPush = { notification_filters?: NotificationFilterPush[] | undefined }
type NotificationFilterPushCreate = { Id?: BunqId | undefined }
type NotificationFilterPushListing = { notification_filters?: NotificationFilterPush[] | undefined }
type NotificationFilterUrl = { notification_filters?: NotificationFilterUrl[] | undefined }
type NotificationFilterUrlCreate = { Id?: BunqId | undefined }
type NotificationFilterUrlListing = { notification_filters?: NotificationFilterUrl[] | undefined }
type NotificationFilterUrlMonetaryAccount = {
  notification_filters?: NotificationFilterUrl[] | undefined
}
type NotificationFilterUrlMonetaryAccountCreate = { Id?: BunqId | undefined }
type NotificationFilterUrlMonetaryAccountListing = {
  notification_filters?: NotificationFilterUrl[] | undefined
}
type OauthClientRead = {
  id?: number | undefined
  status?: string | undefined
  display_name?: string | undefined
  client_id?: string | undefined
  secret?: string | undefined
  callback_url?: OauthCallbackUrl[] | undefined
}
type OauthClient = { status?: string | undefined }
type OauthClientUpdate = { Id?: BunqId | undefined }
type OauthClientCreate = { Id?: BunqId | undefined }
type OauthClientListing = {
  id?: number | undefined
  status?: string | undefined
  display_name?: string | undefined
  client_id?: string | undefined
  secret?: string | undefined
  callback_url?: OauthCallbackUrl[] | undefined
}
type PaymentCreate = { id?: number | undefined }
type PaymentListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  monetary_account_id?: number | undefined
  amount?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  type?: string | undefined
  sub_type?: string | undefined
  payment_arrival_expected?: PaymentArrivalExpected | undefined
  bunqto_status?: string | undefined
  bunqto_sub_status?: string | undefined
  bunqto_share_url?: string | undefined
  bunqto_expiry?: string | undefined
  bunqto_time_responded?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  merchant_reference?: string | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  balance_after_mutation?: Amount | undefined
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance | undefined
  payment_suspended_outgoing?: PaymentSuspendedOutgoing | undefined
  payment_fee?: PaymentFee | undefined
}
type PaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  monetary_account_id?: number | undefined
  amount?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  type?: string | undefined
  sub_type?: string | undefined
  payment_arrival_expected?: PaymentArrivalExpected | undefined
  bunqto_status?: string | undefined
  bunqto_sub_status?: string | undefined
  bunqto_share_url?: string | undefined
  bunqto_expiry?: string | undefined
  bunqto_time_responded?: string | undefined
  attachment?: AttachmentMonetaryAccountPayment[] | undefined
  merchant_reference?: string | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  balance_after_mutation?: Amount | undefined
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance | undefined
  payment_suspended_outgoing?: PaymentSuspendedOutgoing | undefined
  payment_fee?: PaymentFee | undefined
}
type MasterCardPaymentListing = { [x: string]: unknown }
type PaymentAutoAllocateDefinition = {
  type: string
  counterparty_alias?: Pointer | undefined
  description?: string | undefined
  amount?: Amount | undefined
  fraction?: number | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
}
type PaymentAutoAllocate = {
  payment_id: number
  type: string
  definition: PaymentAutoAllocateDefinition[]
}
type PaymentAutoAllocateCreate = { Id?: BunqId | undefined }
type PaymentAutoAllocateListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  type?: string | undefined
  status?: string | undefined
  trigger_amount?: Amount | undefined
  payment?: Payment | undefined
  payment_original?: Payment | undefined
  payment_latest?: Payment | undefined
}
type PaymentAutoAllocateRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  type?: string | undefined
  status?: string | undefined
  trigger_amount?: Amount | undefined
  payment?: Payment | undefined
  payment_original?: Payment | undefined
  payment_latest?: Payment | undefined
}
type PaymentAutoAllocateUpdate = { Id?: BunqId | undefined }
type PaymentAutoAllocateDelete = { [x: string]: unknown }
type PaymentAutoAllocateUserListing = { PaymentAutoAllocate?: PaymentAutoAllocate | undefined }
type PaymentBatchCreate = { Id?: BunqId | undefined }
type PaymentBatchListing = { payments?: PaymentBatchAnchoredPayment | undefined }
type PaymentBatchUpdate = { Id?: BunqId | undefined }
type PaymentBatchRead = { payments?: PaymentBatchAnchoredPayment | undefined }
type PaymentServiceProviderCredentialRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
  expiry_time?: string | undefined
  token_value?: string | undefined
  permitted_device?: PermittedDevice | undefined
}
type PaymentServiceProviderCredential = {
  client_payment_service_provider_certificate: string
  client_payment_service_provider_certificate_chain: string
  client_public_key_signature: string
}
type PaymentServiceProviderCredentialCreate = { Id?: BunqId | undefined }
type PaymentServiceProviderDraftPayment = {
  sender_iban: string
  sender_name?: string | undefined
  counterparty_iban: string
  counterparty_name: string
  description: string
  amount: Amount
  status?: string | undefined
}
type PaymentServiceProviderDraftPaymentCreate = { Id?: BunqId | undefined }
type PaymentServiceProviderDraftPaymentListing = {
  sender_iban?: string | undefined
  receiver_iban?: string | undefined
  amount?: Amount | undefined
  status?: string | undefined
}
type PaymentServiceProviderDraftPaymentUpdate = { Id?: BunqId | undefined }
type PaymentServiceProviderDraftPaymentRead = {
  sender_iban?: string | undefined
  receiver_iban?: string | undefined
  amount?: Amount | undefined
  status?: string | undefined
}
type PaymentServiceProviderIssuerTransaction = {
  counterparty_alias: Pointer
  amount: Amount
  description: string
  url_redirect: string
  time_expiry?: string | undefined
  status?: string | undefined
}
type PaymentServiceProviderIssuerTransactionCreate = { Id?: BunqId | undefined }
type PaymentServiceProviderIssuerTransactionListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  description?: string | undefined
  url_redirect?: string | undefined
  time_expiry?: string | undefined
  status?: string | undefined
  alias?: LabelMonetaryAccount | undefined
}
type PaymentServiceProviderIssuerTransactionRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount?: Amount | undefined
  description?: string | undefined
  url_redirect?: string | undefined
  time_expiry?: string | undefined
  status?: string | undefined
  alias?: LabelMonetaryAccount | undefined
}
type PaymentServiceProviderIssuerTransactionUpdate = { Id?: BunqId | undefined }
type InvoiceExportPdfContentListing = { [x: string]: unknown }
type CardReplace = {
  name_on_card?: string | undefined
  preferred_name_on_card?: string | undefined
  pin_code_assignment?: CardPinAssignment[] | undefined
  second_line?: string | undefined
}
type CardReplaceCreate = { Id?: BunqId | undefined }
type RequestInquiryCreate = { id?: number | undefined }
type RequestInquiryListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  merchant_reference?: string | undefined
  attachment?: BunqId[] | undefined
  status?: string | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  bunqme_share_url?: string | undefined
  redirect_url?: string | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type RequestInquiryUpdate = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  merchant_reference?: string | undefined
  attachment?: BunqId[] | undefined
  status?: string | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type RequestInquiryRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  merchant_reference?: string | undefined
  attachment?: BunqId[] | undefined
  status?: string | undefined
  batch_id?: number | undefined
  scheduled_id?: number | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  bunqme_share_url?: string | undefined
  redirect_url?: string | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type RequestInquiryBatchCreate = { Id?: BunqId | undefined }
type RequestInquiryBatchListing = {
  request_inquiries?: RequestInquiry[] | undefined
  total_amount_inquired?: Amount | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type RequestInquiryBatchUpdate = { Id?: BunqId | undefined }
type RequestInquiryBatchRead = {
  request_inquiries?: RequestInquiry[] | undefined
  total_amount_inquired?: Amount | undefined
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject | undefined
}
type RequestResponseUpdate = { Id?: BunqId | undefined }
type RequestResponseRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  time_refund_requested?: string | undefined
  time_refunded?: string | undefined
  user_refund_requested?: LabelUser | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  status?: string | undefined
  description?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  attachment?: Attachment[] | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  geolocation?: Geolocation | undefined
  type?: string | undefined
  sub_type?: string | undefined
  redirect_url?: string | undefined
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  registration_action?: string | undefined
  eligible_whitelist_id?: number | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  event_id?: number | undefined
  monetary_account_preferred_id?: number | undefined
}
type RequestResponseListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  time_refund_requested?: string | undefined
  time_refunded?: string | undefined
  user_refund_requested?: LabelUser | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  status?: string | undefined
  description?: string | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  attachment?: Attachment[] | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  geolocation?: Geolocation | undefined
  type?: string | undefined
  sub_type?: string | undefined
  redirect_url?: string | undefined
  address_billing?: Address | undefined
  address_shipping?: Address | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  registration_action?: string | undefined
  eligible_whitelist_id?: number | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
  event_id?: number | undefined
  monetary_account_preferred_id?: number | undefined
}
type SandboxUserCompany = { [x: string]: unknown }
type SandboxUserCompanyCreate = { Id?: BunqId | undefined }
type SandboxUserPerson = { [x: string]: unknown }
type SandboxUserPersonCreate = { Id?: BunqId | undefined }
type ScheduleRead = {
  time_start?: string | undefined
  time_end?: string | undefined
  recurrence_unit?: string | undefined
  recurrence_size?: number | undefined
  status?: string | undefined
  object?: ScheduleAnchorObject | undefined
}
type ScheduleListing = {
  time_start?: string | undefined
  time_end?: string | undefined
  recurrence_unit?: string | undefined
  recurrence_size?: number | undefined
  status?: string | undefined
  object?: ScheduleAnchorObject | undefined
}
type ScheduleUserListing = { [x: string]: unknown }
type ScheduleInstanceRead = {
  state?: string | undefined
  time_start?: string | undefined
  time_end?: string | undefined
  error_message?: Error[] | undefined
  scheduled_object?: ScheduleAnchorObject | undefined
  result_object?: ScheduleInstanceAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type ScheduleInstanceUpdate = { Id?: BunqId | undefined }
type ScheduleInstanceListing = {
  state?: string | undefined
  time_start?: string | undefined
  time_end?: string | undefined
  error_message?: Error[] | undefined
  scheduled_object?: ScheduleAnchorObject | undefined
  result_object?: ScheduleInstanceAnchorObject | undefined
  request_reference_split_the_bill?: RequestInquiryReference[] | undefined
}
type SchedulePaymentCreate = { Id?: BunqId | undefined }
type SchedulePaymentListing = {
  payment?: SchedulePaymentEntry | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
  purpose?: string | undefined
}
type SchedulePaymentDelete = { [x: string]: unknown }
type SchedulePaymentRead = {
  payment?: SchedulePaymentEntry | undefined
  schedule?: Schedule | undefined
  status?: string | undefined
  purpose?: string | undefined
}
type SchedulePaymentUpdate = { Id?: BunqId | undefined }
type SchedulePaymentBatchRead = {
  payments?: SchedulePaymentEntry[] | undefined
  schedule?: Schedule | undefined
}
type SchedulePaymentBatchUpdate = { Id?: BunqId | undefined }
type SchedulePaymentBatchDelete = { [x: string]: unknown }
type SchedulePaymentBatchCreate = { Id?: BunqId | undefined }
type ServerError = { [x: string]: unknown }
type ServerErrorCreate = { Id?: BunqId | undefined }
type InstallationServerPublicKeyListing = { server_public_key?: string | undefined }
type SessionDelete = { [x: string]: unknown }
type SessionServer = { secret: string }
type SessionServerToken = { id?: number | undefined; token?: string | undefined }
type UserPerson = {
  subscription_type?: string | undefined
  first_name?: string | undefined
  middle_name?: string | undefined
  last_name?: string | undefined
  public_nick_name?: string | undefined
  address_main?: Address | undefined
  address_postal?: Address | undefined
  avatar_uuid?: string | undefined
  tax_resident?: TaxResident[] | undefined
  document_type?: string | undefined
  document_number?: string | undefined
  document_country_of_issuance?: string | undefined
  document_front_attachment_id?: number | undefined
  document_back_attachment_id?: number | undefined
  date_of_birth?: string | undefined
  nationality?: string | undefined
  all_nationality?: string[] | undefined
  language?: string | undefined
  region?: string | undefined
  gender?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  legal_guardian_alias?: Pointer | undefined
  session_timeout?: number | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  display_name?: string | undefined
  signup_track_type?: string | undefined
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  legal_name?: string | undefined
  alias?: Pointer[] | undefined
  address_shipping?: Address | undefined
  place_of_birth?: string | undefined
  country_of_birth?: string | undefined
  avatar?: Avatar | undefined
  version_terms_of_service?: string | undefined
  notification_filters?: NotificationFilter[] | undefined
  relations?: RelationUser[] | undefined
}
type UserPaymentServiceProvider = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  certificate_distinguished_name?: string | undefined
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  status?: string | undefined
  sub_status?: string | undefined
  public_uuid?: string | undefined
  display_name?: string | undefined
  public_nick_name?: string | undefined
  language?: string | undefined
  region?: string | undefined
  session_timeout?: number | undefined
}
type UserApiKeyAnchoredUser = {
  UserPerson?: UserPerson | undefined
  UserCompany?: UserCompany | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
}
type UserApiKey = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  requested_by_user?: UserApiKeyAnchoredUser | undefined
  granted_by_user?: UserApiKeyAnchoredUser | undefined
}
type SessionServerCreate = {
  Id?: BunqId | undefined
  Token?: SessionServerToken | undefined
  UserCompany?: UserCompany | undefined
  UserPerson?: UserPerson | undefined
  UserApiKey?: UserApiKey | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
}
type ShareInviteMonetaryAccountInquiryCreate = { id?: number | undefined }
type ShareInviteMonetaryAccountInquiryListing = {
  alias?: LabelMonetaryAccount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  counter_user_alias?: LabelUser | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  access_type?: string | undefined
  relationship?: string | undefined
  id?: number | undefined
}
type ShareInviteMonetaryAccountInquiryRead = {
  alias?: LabelMonetaryAccount | undefined
  user_alias_created?: LabelUser | undefined
  user_alias_revoked?: LabelUser | undefined
  counter_user_alias?: LabelUser | undefined
  monetary_account_id?: number | undefined
  status?: string | undefined
  access_type?: string | undefined
  relationship?: string | undefined
  id?: number | undefined
}
type ShareInviteMonetaryAccountInquiryUpdate = { Id?: BunqId | undefined }
type ShareInviteMonetaryAccountResponseRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  user_alias_cancelled?: LabelUser | undefined
  monetary_account_id?: number | undefined
  draft_share_invite_bank_id?: number | undefined
  share_detail?: ShareDetail | undefined
  access_type?: string | undefined
  status?: string | undefined
  relation_user?: RelationUser | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  description?: string | undefined
}
type ShareInviteMonetaryAccountResponseUpdate = { Id?: BunqId | undefined }
type ShareInviteMonetaryAccountResponseListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  counter_alias?: LabelMonetaryAccount | undefined
  user_alias_cancelled?: LabelUser | undefined
  monetary_account_id?: number | undefined
  draft_share_invite_bank_id?: number | undefined
  share_detail?: ShareDetail | undefined
  access_type?: string | undefined
  status?: string | undefined
  relation_user?: RelationUser | undefined
  share_type?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  description?: string | undefined
}
type SofortMerchantTransactionRead = {
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  status?: string | undefined
  error_message?: Error[] | undefined
  transaction_identifier?: string | undefined
}
type SofortMerchantTransactionListing = {
  monetary_account_id?: number | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  amount_guaranteed?: Amount | undefined
  amount_requested?: Amount | undefined
  issuer?: string | undefined
  issuer_authentication_url?: string | undefined
  status?: string | undefined
  error_message?: Error[] | undefined
  transaction_identifier?: string | undefined
}
type ExportStatementPayment = { [x: string]: unknown }
type ExportStatementPaymentCreate = { Id?: BunqId | undefined }
type ExportStatementPaymentRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  status?: string | undefined
}
type BankSwitchServiceNetherlandsIncomingPaymentRead = {
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming | undefined
  payment?: Payment | undefined
}
type TokenQrRequestIdeal = { token: string }
type TokenQrRequestIdealCreate = {
  id?: number | undefined
  time_responded?: string | undefined
  time_expiry?: string | undefined
  monetary_account_id?: number | undefined
  amount_inquired?: Amount | undefined
  amount_responded?: Amount | undefined
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  description?: string | undefined
  attachment?: Attachment[] | undefined
  status?: string | undefined
  minimum_age?: number | undefined
  require_address?: string | undefined
  address_shipping?: Address | undefined
  address_billing?: Address | undefined
  geolocation?: Geolocation | undefined
  redirect_url?: string | undefined
  type?: string | undefined
  sub_type?: string | undefined
  eligible_whitelist_id?: number | undefined
}
type TokenQrRequestSofort = { token: string }
type TokenQrRequestSofortCreate = { Id?: BunqId | undefined }
type TransferwiseCurrencyListing = {
  currency?: string | undefined
  name?: string | undefined
  country?: string | undefined
}
type TransferwiseQuoteCreate = { Id?: BunqId | undefined }
type TransferwiseQuoteRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_expiry?: string | undefined
  quote_id?: string | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  amount_fee?: Amount | undefined
  rate?: string | undefined
  time_delivery_estimate?: string | undefined
}
type TransferwiseQuoteTemporary = {
  currency_source: string
  currency_target: string
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
}
type TransferwiseQuoteTemporaryCreate = { Id?: BunqId | undefined }
type TransferwiseQuoteTemporaryRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  time_expiry?: string | undefined
  quote_id?: string | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  rate?: string | undefined
}
type TransferwiseRequirementFieldGroupValidationAsyncParams = {
  key?: string | undefined
  parameter_name?: string | undefined
  required?: boolean | undefined
}
type TransferwiseRequirementFieldGroupValidationAsync = {
  url?: string | undefined
  params?: TransferwiseRequirementFieldGroupValidationAsyncParams | undefined
}
type TransferwiseRequirementFieldGroupValuesAllowed = {
  key?: string | undefined
  name?: string | undefined
}
type TransferwiseRequirementFieldGroup = {
  key?: string | undefined
  type?: string | undefined
  name?: string | undefined
  refresh_requirements_on_change?: boolean | undefined
  required?: boolean | undefined
  display_format?: string | undefined
  example?: string | undefined
  min_length?: string | undefined
  max_length?: string | undefined
  validation_regexp?: string | undefined
  validation_async?: TransferwiseRequirementFieldGroupValidationAsync | undefined
  values_allowed?: TransferwiseRequirementFieldGroupValuesAllowed | undefined
}
type TransferwiseRequirementField = {
  key: string
  value: string
  name?: string | undefined
  group?: TransferwiseRequirementFieldGroup | undefined
}
type TransferwiseAccountQuote = {
  country?: string | undefined
  name_account_holder: string
  type: string
  detail?: TransferwiseRequirementField[] | undefined
}
type TransferwiseAccountQuoteCreate = { Id?: BunqId | undefined }
type TransferwiseAccountQuoteListing = {
  account_id?: string | undefined
  currency?: string | undefined
  country?: string | undefined
  name_account_holder?: string | undefined
  account_number?: string | undefined
  bank_code?: string | undefined
}
type TransferwiseAccountQuoteRead = {
  account_id?: string | undefined
  currency?: string | undefined
  country?: string | undefined
  name_account_holder?: string | undefined
  account_number?: string | undefined
  bank_code?: string | undefined
}
type TransferwiseAccountQuoteDelete = { [x: string]: unknown }
type TransferwiseAccountRequirement = {
  country?: string | undefined
  name_account_holder: string
  type: string
  detail?: TransferwiseRequirementField[] | undefined
}
type TransferwiseAccountRequirementCreate = { Id?: BunqId | undefined }
type TransferwiseAccountRequirementListing = {
  type?: string | undefined
  label?: string | undefined
  fields?: TransferwiseRequirementField[] | undefined
}
type TransferwiseTransferCreate = { Id?: BunqId | undefined }
type TransferwiseTransferListing = {
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
  sub_status?: string | undefined
  status_transferwise?: string | undefined
  status_transferwise_issue?: string | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  rate?: string | undefined
  reference?: string | undefined
  pay_in_reference?: string | undefined
  time_delivery_estimate?: string | undefined
  quote?: TransferwiseQuote | undefined
}
type TransferwiseTransferRead = {
  alias?: LabelMonetaryAccount | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  status?: string | undefined
  sub_status?: string | undefined
  status_transferwise?: string | undefined
  status_transferwise_issue?: string | undefined
  amount_source?: Amount | undefined
  amount_target?: Amount | undefined
  rate?: string | undefined
  reference?: string | undefined
  pay_in_reference?: string | undefined
  time_delivery_estimate?: string | undefined
  quote?: TransferwiseQuote | undefined
}
type TransferwiseTransferRequirement = {
  recipient_id: string
  detail?: TransferwiseRequirementField[] | undefined
}
type TransferwiseTransferRequirementCreate = { Id?: BunqId | undefined }
type TransferwiseUser = { oauth_code?: string | undefined }
type TransferwiseUserCreate = { Id?: BunqId | undefined }
type TransferwiseUserListing = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  name?: string | undefined
  email?: string | undefined
  source?: string | undefined
}
type TreeProgressListing = {
  number_of_tree?: number | undefined
  progress_tree_next?: number | undefined
  url_invite_profile?: string | undefined
  label_user?: LabelUser | undefined
}
type UserRead = {
  UserPerson?: UserPerson | undefined
  UserCompany?: UserCompany | undefined
  UserApiKey?: UserApiKey | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
}
type UserListing = {
  UserPerson?: UserPerson | undefined
  UserCompany?: UserCompany | undefined
  UserApiKey?: UserApiKey | undefined
  UserPaymentServiceProvider?: UserPaymentServiceProvider | undefined
}
type UserCompanyRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  name?: string | undefined
  display_name?: string | undefined
  public_nick_name?: string | undefined
  alias?: Pointer[] | undefined
  chamber_of_commerce_number?: string | undefined
  legal_form?: string | undefined
  type_of_business_entity?: string | undefined
  sector_of_industry?: string | undefined
  counter_bank_iban?: string | undefined
  avatar?: Avatar | undefined
  address_main?: Address | undefined
  address_postal?: Address | undefined
  address_shipping?: Address | undefined
  version_terms_of_service?: string | undefined
  directors?: LabelUser[] | undefined
  language?: string | undefined
  country?: string | undefined
  region?: string | undefined
  ubo?: Ubo[] | undefined
  status?: string | undefined
  sub_status?: string | undefined
  session_timeout?: number | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  notification_filters?: NotificationFilter[] | undefined
  customer?: Customer | undefined
  customer_limit?: CustomerLimit | undefined
  billing_contract?: BillingContractSubscription[] | undefined
  deny_reason?: string | undefined
  relations?: RelationUser[] | undefined
  tax_resident?: TaxResident[] | undefined
}
type UserCompanyUpdate = { id?: number | undefined }
type UserPaymentServiceProviderRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  certificate_distinguished_name?: string | undefined
  alias?: Pointer[] | undefined
  avatar?: Avatar | undefined
  status?: string | undefined
  sub_status?: string | undefined
  public_uuid?: string | undefined
  display_name?: string | undefined
  public_nick_name?: string | undefined
  language?: string | undefined
  region?: string | undefined
  session_timeout?: number | undefined
}
type UserPersonRead = {
  id?: number | undefined
  created?: string | undefined
  updated?: string | undefined
  public_uuid?: string | undefined
  first_name?: string | undefined
  middle_name?: string | undefined
  last_name?: string | undefined
  legal_name?: string | undefined
  display_name?: string | undefined
  public_nick_name?: string | undefined
  alias?: Pointer[] | undefined
  tax_resident?: TaxResident[] | undefined
  address_main?: Address | undefined
  address_postal?: Address | undefined
  address_shipping?: Address | undefined
  date_of_birth?: string | undefined
  place_of_birth?: string | undefined
  country_of_birth?: string | undefined
  nationality?: string | undefined
  all_nationality?: string[] | undefined
  language?: string | undefined
  region?: string | undefined
  gender?: string | undefined
  avatar?: Avatar | undefined
  version_terms_of_service?: string | undefined
  status?: string | undefined
  sub_status?: string | undefined
  session_timeout?: number | undefined
  daily_limit_without_confirmation_login?: Amount | undefined
  notification_filters?: NotificationFilter[] | undefined
  relations?: RelationUser[] | undefined
}
type UserPersonUpdate = { id?: number | undefined }
type WhitelistSddRead = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddListing = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddMonetaryAccountPayingRead = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddMonetaryAccountPayingListing = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  user_alias_created?: LabelUser | undefined
}
type WhitelistSddOneOffRead = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  maximum_amount_per_payment?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  routing_type?: string | undefined
}
type WhitelistSddOneOff = {
  monetary_account_paying_id: number
  request_id: number
  maximum_amount_per_month?: Amount | undefined
  maximum_amount_per_payment?: Amount | undefined
  routing_type?: string | undefined
}
type WhitelistSddOneOffUpdate = { Id?: BunqId | undefined }
type WhitelistSddOneOffDelete = { [x: string]: unknown }
type WhitelistSddOneOffCreate = { Id?: BunqId | undefined }
type WhitelistSddOneOffListing = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  maximum_amount_per_payment?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  routing_type?: string | undefined
}
type WhitelistSddRecurringRead = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  maximum_amount_per_payment?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  routing_type?: string | undefined
}
type WhitelistSddRecurring = {
  monetary_account_paying_id: number
  request_id: number
  maximum_amount_per_month?: Amount | undefined
  maximum_amount_per_payment?: Amount | undefined
  routing_type?: string | undefined
}
type WhitelistSddRecurringUpdate = { Id?: BunqId | undefined }
type WhitelistSddRecurringDelete = { [x: string]: unknown }
type WhitelistSddRecurringCreate = { Id?: BunqId | undefined }
type WhitelistSddRecurringListing = {
  id?: number | undefined
  monetary_account_incoming_id?: number | undefined
  monetary_account_paying_id?: number | undefined
  type?: string | undefined
  status?: string | undefined
  credit_scheme_identifier?: string | undefined
  mandate_identifier?: string | undefined
  counterparty_alias?: LabelMonetaryAccount | undefined
  maximum_amount_per_month?: Amount | undefined
  maximum_amount_per_payment?: Amount | undefined
  user_alias_created?: LabelUser | undefined
  routing_type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/user/:userID/additional-transaction-information-category': {
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
            output: AdditionalTransactionInformationCategoryListing[]
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
    '/user/:userID/additional-transaction-information-category-user-defined': {
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
            } & { json: AdditionalTransactionInformationCategoryUserDefined }
            output: AdditionalTransactionInformationCategoryUserDefinedCreate
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
            } & { json: AdditionalTransactionInformationCategoryUserDefined }
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-tab/:itemId': {
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
    '/user/:userID/oauth-client/:oauth-clientID/callback-url/:itemId': {
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
    }
  } & {
    '/user/:userID/oauth-client/:oauth-clientID/callback-url': {
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
    }
  } & {
    '/user/:userID/card/:itemId': {
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
    '/user/:userID/certificate-pinned': {
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
    '/user/:userID/company': {
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
    '/user/:userID/currency-cloud-beneficiary': {
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
    '/user/:userID/monetary-account/:monetary-accountID/customer-statement': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/customer-statement/:itemId': {
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
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:itemId': {
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
    '/user/:userID/export-annual-overview': {
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
    }
  } & {
    '/user/:userID/export-annual-overview/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/export-rib': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/export-rib/:itemId': {
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
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-csv/:itemId': {
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
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-pdf': {
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
    }
  } & {
    '/user/:userID/card/:cardID/export-statement-card-pdf/:itemId': {
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
    '/user/:userID/card/:cardID/generated-cvc2': {
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
    '/health-check': {
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
            output: HealthCheckListing[]
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
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction': {
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
    '/installation': {
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
    '/user/:userID/invoice/:invoiceID/invoice-export/:itemId': {
      $get:
        | {
            input: { param: { userID: number; invoiceID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceExportPdfRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; invoiceID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
            input: { param: { userID: number; invoiceID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: InvoiceExportPdf }
            output: InvoiceExportPdfUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; invoiceID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: InvoiceExportPdf }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { userID: number; invoiceID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: InvoiceExportPdfDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userID: number; invoiceID: number; itemId: number } } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/invoice/:invoiceID/invoice-export': {
      $post:
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
            } & { json: InvoiceExportPdf }
            output: InvoiceExportPdfCreate
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
            } & { json: InvoiceExportPdf }
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
    '/user/:userID/credential-password-ip/:credential-password-ipID/ip': {
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
    '/user/:userID/monetary-account-card/:itemId': {
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
            output: MonetaryAccountCardRead
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
            } & { json: MonetaryAccountCard }
            output: MonetaryAccountCardUpdate
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
            } & { json: MonetaryAccountCard }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-card': {
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
            output: MonetaryAccountCardListing[]
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
    '/user/:userID/monetary-account-external': {
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
            } & { json: MonetaryAccountExternal }
            output: MonetaryAccountExternalCreate
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
            } & { json: MonetaryAccountExternal }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
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
            } & { json: MonetaryAccountExternal }
            output: MonetaryAccountExternalUpdate
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
            } & { json: MonetaryAccountExternal }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-external-savings': {
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
            } & { json: MonetaryAccountExternalSavings }
            output: MonetaryAccountExternalSavingsCreate
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
            } & { json: MonetaryAccountExternalSavings }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
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
            output: MonetaryAccountExternalSavingsListing[]
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
    '/user/:userID/monetary-account-external-savings/:itemId': {
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
            output: MonetaryAccountExternalSavingsRead
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
            } & { json: MonetaryAccountExternalSavings }
            output: MonetaryAccountExternalSavingsUpdate
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
            } & { json: MonetaryAccountExternalSavings }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user/:userID/monetary-account-joint': {
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
    '/user/:userID/monetary-account/:monetary-accountID/adyen-card-transaction/:adyen-card-transactionID/note-attachment': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentAdyenCardTransaction }
            output: NoteAttachmentAdyenCardTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentAdyenCardTransaction }
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
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentAdyenCardTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/adyen-card-transaction/:adyen-card-transactionID/note-attachment/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
            } & { json: NoteAttachmentAdyenCardTransaction }
            output: NoteAttachmentAdyenCardTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
            } & { json: NoteAttachmentAdyenCardTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
            output: NoteAttachmentAdyenCardTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
                'adyen-card-transactionID': number
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
            output: NoteAttachmentAdyenCardTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/open-banking-merchant-transaction/:open-banking-merchant-transactionID/note-attachment': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentOpenBankingMerchantTransaction }
            output: NoteAttachmentOpenBankingMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentOpenBankingMerchantTransaction }
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
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentOpenBankingMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/open-banking-merchant-transaction/:open-banking-merchant-transactionID/note-attachment/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
            } & { json: NoteAttachmentOpenBankingMerchantTransaction }
            output: NoteAttachmentOpenBankingMerchantTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
            } & { json: NoteAttachmentOpenBankingMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
            output: NoteAttachmentOpenBankingMerchantTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
                'open-banking-merchant-transactionID': number
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
            output: NoteAttachmentOpenBankingMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-delayed/:payment-delayedID/note-attachment': {
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPaymentDelayed }
            output: NoteAttachmentPaymentDelayedCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentPaymentDelayed }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentPaymentDelayedListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/payment-delayed/:payment-delayedID/note-attachment/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
            } & { json: NoteAttachmentPaymentDelayed }
            output: NoteAttachmentPaymentDelayedUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
            } & { json: NoteAttachmentPaymentDelayed }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
            output: NoteAttachmentPaymentDelayedDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
                'payment-delayedID': number
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
            output: NoteAttachmentPaymentDelayedRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry-batch/:schedule-request-inquiry-batchID/note-attachment': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleRequestBatch }
            output: NoteAttachmentScheduleRequestBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleRequestBatch }
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
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentScheduleRequestBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry-batch/:schedule-request-inquiry-batchID/note-attachment/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
            } & { json: NoteAttachmentScheduleRequestBatch }
            output: NoteAttachmentScheduleRequestBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
            } & { json: NoteAttachmentScheduleRequestBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
            output: NoteAttachmentScheduleRequestBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
                'schedule-request-inquiry-batchID': number
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
            output: NoteAttachmentScheduleRequestBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry/:schedule-request-inquiryID/note-attachment': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleRequest }
            output: NoteAttachmentScheduleRequestCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteAttachmentScheduleRequest }
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
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteAttachmentScheduleRequestListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry/:schedule-request-inquiryID/note-attachment/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
            } & { json: NoteAttachmentScheduleRequest }
            output: NoteAttachmentScheduleRequestUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
            } & { json: NoteAttachmentScheduleRequest }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
            output: NoteAttachmentScheduleRequestDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
                'schedule-request-inquiryID': number
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
            output: NoteAttachmentScheduleRequestRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-attachment': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-attachment/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/adyen-card-transaction/:adyen-card-transactionID/note-text': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextAdyenCardTransaction }
            output: NoteTextAdyenCardTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextAdyenCardTransaction }
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
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextAdyenCardTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/adyen-card-transaction/:adyen-card-transactionID/note-text/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
            } & { json: NoteTextAdyenCardTransaction }
            output: NoteTextAdyenCardTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
            } & { json: NoteTextAdyenCardTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
            output: NoteTextAdyenCardTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
                'adyen-card-transactionID': number
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
            output: NoteTextAdyenCardTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'adyen-card-transactionID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/switch-service-payment/:switch-service-paymentID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/bunqme-fundraiser-result/:bunqme-fundraiser-resultID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/draft-payment/:draft-paymentID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/ideal-merchant-transaction/:ideal-merchant-transactionID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/mastercard-action/:mastercard-actionID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/open-banking-merchant-transaction/:open-banking-merchant-transactionID/note-text': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextOpenBankingMerchantTransaction }
            output: NoteTextOpenBankingMerchantTransactionCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextOpenBankingMerchantTransaction }
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
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextOpenBankingMerchantTransactionListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/open-banking-merchant-transaction/:open-banking-merchant-transactionID/note-text/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
            } & { json: NoteTextOpenBankingMerchantTransaction }
            output: NoteTextOpenBankingMerchantTransactionUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
            } & { json: NoteTextOpenBankingMerchantTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
            output: NoteTextOpenBankingMerchantTransactionDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
                'open-banking-merchant-transactionID': number
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
            output: NoteTextOpenBankingMerchantTransactionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'open-banking-merchant-transactionID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:payment-batchID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-delayed/:payment-delayedID/note-text': {
      $post:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPaymentDelayed }
            output: NoteTextPaymentDelayedCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextPaymentDelayed }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextPaymentDelayedListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { userID: number; 'monetary-accountID': number; 'payment-delayedID': number }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/payment-delayed/:payment-delayedID/note-text/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
            } & { json: NoteTextPaymentDelayed }
            output: NoteTextPaymentDelayedUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
            } & { json: NoteTextPaymentDelayed }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
            output: NoteTextPaymentDelayedDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
                'payment-delayedID': number
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
            output: NoteTextPaymentDelayedRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'payment-delayedID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment/:paymentID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:request-inquiry-batchID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:request-inquiryID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:request-responseID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule/:scheduleID/schedule-instance/:schedule-instanceID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:schedule-payment-batchID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment/:schedule-paymentID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry-batch/:schedule-request-inquiry-batchID/note-text': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleRequestBatch }
            output: NoteTextScheduleRequestBatchCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleRequestBatch }
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
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextScheduleRequestBatchListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry-batch/:schedule-request-inquiry-batchID/note-text/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
            } & { json: NoteTextScheduleRequestBatch }
            output: NoteTextScheduleRequestBatchUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
            } & { json: NoteTextScheduleRequestBatch }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
            output: NoteTextScheduleRequestBatchDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
                'schedule-request-inquiry-batchID': number
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
            output: NoteTextScheduleRequestBatchRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiry-batchID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry/:schedule-request-inquiryID/note-text': {
      $post:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleRequest }
            output: NoteTextScheduleRequestCreate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            } & { json: NoteTextScheduleRequest }
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
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
                'X-Bunq-Client-Request-Id'?: string | undefined
                'X-Bunq-Geolocation'?: string | undefined
                'X-Bunq-Client-Authentication': string
              }
            }
            output: NoteTextScheduleRequestListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
              }
            } & {
              header: {
                'Cache-Control'?: string | undefined
                'User-Agent': string
                'X-Bunq-Language'?: string | undefined
                'X-Bunq-Region'?: string | undefined
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-request-inquiry/:schedule-request-inquiryID/note-text/:itemId': {
      $put:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
            } & { json: NoteTextScheduleRequest }
            output: NoteTextScheduleRequestUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
            } & { json: NoteTextScheduleRequest }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
            output: NoteTextScheduleRequestDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
                'schedule-request-inquiryID': number
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
            output: NoteTextScheduleRequestRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                userID: number
                'monetary-accountID': number
                'schedule-request-inquiryID': number
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
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/sofort-merchant-transaction/:sofort-merchant-transactionID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-text': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/whitelist/:whitelistID/whitelist-result/:whitelist-resultID/note-text/:itemId': {
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
    }
  } & {
    '/user/:userID/notification-filter-email': {
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
    }
  } & {
    '/user/:userID/notification-filter-failure': {
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
            } & { json: NotificationFilterFailure }
            output: NotificationFilterFailureCreate
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
            } & { json: NotificationFilterFailure }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
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
            output: NotificationFilterFailureListing[]
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
    '/user/:userID/notification-filter-push': {
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
    }
  } & {
    '/user/:userID/notification-filter-url': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/notification-filter-url': {
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
    '/user/:userID/oauth-client': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment': {
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
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-auto-allocate/:itemId': {
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
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/payment-batch/:itemId': {
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
    '/user/:userID/payment-service-provider-draft-payment': {
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
    }
  } & {
    '/user/:userID/payment-service-provider-draft-payment/:itemId': {
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
    }
  } & {
    '/user/:userID/payment-service-provider-issuer-transaction': {
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
            } & { json: PaymentServiceProviderIssuerTransaction }
            output: PaymentServiceProviderIssuerTransactionCreate
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
            } & { json: PaymentServiceProviderIssuerTransaction }
            output: { Error?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
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
            output: PaymentServiceProviderIssuerTransactionListing[]
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
    '/user/:userID/payment-service-provider-issuer-transaction/:itemId': {
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
            output: PaymentServiceProviderIssuerTransactionRead
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
            } & { json: PaymentServiceProviderIssuerTransaction }
            output: PaymentServiceProviderIssuerTransactionUpdate
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
            } & { json: PaymentServiceProviderIssuerTransaction }
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
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-inquiry-batch/:itemId': {
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
    }
  } & {
    '/user/:userID/monetary-account/:monetary-accountID/request-response/:itemId': {
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment': {
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
    '/user/:userID/monetary-account/:monetary-accountID/schedule-payment-batch/:itemId': {
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
    '/user/:userID/monetary-account/:monetary-accountID/share-invite-monetary-account-inquiry': {
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
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-recipient': {
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
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-recipient/:itemId': {
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
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-recipient-requirement': {
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
    }
  } & {
    '/user/:userID/transferwise-quote/:transferwise-quoteID/transferwise-transfer': {
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
    '/user/:userID/transferwise-user': {
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
    '/user/:userID/whitelist-sdd-one-off/:itemId': {
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
    }
  } & {
    '/user/:userID/whitelist-sdd-one-off': {
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
    }
  } & {
    '/user/:userID/whitelist-sdd-recurring/:itemId': {
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
    }
  } & {
    '/user/:userID/whitelist-sdd-recurring': {
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
    }
  },
  '/'
>
export default routes
