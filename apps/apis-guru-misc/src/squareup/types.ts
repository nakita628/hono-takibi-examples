type CreateMobileAuthorizationCodeRequest = { location_id?: string | undefined }
type Error = {
  category: string
  code: string
  detail?: string | undefined
  field?: string | undefined
}
type CreateMobileAuthorizationCodeResponse = {
  authorization_code?: string | undefined
  error?: Error | undefined
  expires_at?: string | undefined
}
type RenewTokenRequest = { access_token?: string | undefined }
type RenewTokenResponse = {
  access_token?: string | undefined
  expires_at?: string | undefined
  merchant_id?: string | undefined
  plan_id?: string | undefined
  subscription_id?: string | undefined
  token_type?: string | undefined
}
type RevokeTokenRequest = {
  access_token?: string | undefined
  client_id?: string | undefined
  merchant_id?: string | undefined
  revoke_only_access_token?: boolean | undefined
}
type RevokeTokenResponse = { success?: boolean | undefined }
type ObtainTokenRequest = {
  client_id: string
  client_secret: string
  code?: string | undefined
  grant_type: string
  migration_token?: string | undefined
  redirect_uri?: string | undefined
  refresh_token?: string | undefined
  scopes?: string[] | undefined
  short_lived?: boolean | undefined
}
type ObtainTokenResponse = {
  access_token?: string | undefined
  expires_at?: string | undefined
  id_token?: string | undefined
  merchant_id?: string | undefined
  plan_id?: string | undefined
  refresh_token?: string | undefined
  short_lived?: boolean | undefined
  subscription_id?: string | undefined
  token_type?: string | undefined
}
type V1Employee = {
  authorized_location_ids?: string[] | undefined
  created_at?: string | undefined
  email?: string | undefined
  external_id?: string | undefined
  first_name: string
  id?: string | undefined
  last_name: string
  role_ids?: string[] | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type V1EmployeeRole = {
  created_at?: string | undefined
  id?: string | undefined
  is_owner?: boolean | undefined
  name: string
  permissions: string[]
  updated_at?: string | undefined
}
type V1OrderHistoryEntry = { action?: string | undefined; created_at?: string | undefined }
type Address = {
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  address_line_3?: string | undefined
  administrative_district_level_1?: string | undefined
  administrative_district_level_2?: string | undefined
  administrative_district_level_3?: string | undefined
  country?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postal_code?: string | undefined
  sublocality?: string | undefined
  sublocality_2?: string | undefined
  sublocality_3?: string | undefined
}
type V1Money = { amount?: number | undefined; currency_code?: string | undefined }
type V1Tender = {
  card_brand?: string | undefined
  change_back_money?: V1Money | undefined
  employee_id?: string | undefined
  entry_method?: string | undefined
  id?: string | undefined
  is_exchange?: boolean | undefined
  name?: string | undefined
  pan_suffix?: string | undefined
  payment_note?: string | undefined
  receipt_url?: string | undefined
  refunded_money?: V1Money | undefined
  settled_at?: string | undefined
  tendered_at?: string | undefined
  tendered_money?: V1Money | undefined
  total_money?: V1Money | undefined
  type?: string | undefined
}
type V1Order = {
  btc_price_satoshi?: number | undefined
  btc_receive_address?: string | undefined
  buyer_email?: string | undefined
  buyer_note?: string | undefined
  canceled_note?: string | undefined
  completed_note?: string | undefined
  created_at?: string | undefined
  errors?: Error[] | undefined
  expires_at?: string | undefined
  id?: string | undefined
  order_history?: V1OrderHistoryEntry[] | undefined
  payment_id?: string | undefined
  promo_code?: string | undefined
  recipient_name?: string | undefined
  recipient_phone_number?: string | undefined
  refunded_note?: string | undefined
  shipping_address?: Address | undefined
  state?: string | undefined
  subtotal_money?: V1Money | undefined
  tender?: V1Tender | undefined
  total_discount_money?: V1Money | undefined
  total_price_money?: V1Money | undefined
  total_shipping_money?: V1Money | undefined
  total_tax_money?: V1Money | undefined
  updated_at?: string | undefined
}
type V1UpdateOrderRequest = {
  action: string
  canceled_note?: string | undefined
  completed_note?: string | undefined
  refunded_note?: string | undefined
  shipped_tracking_number?: string | undefined
}
type V1PaymentTax = {
  applied_money?: V1Money | undefined
  errors?: Error[] | undefined
  fee_id?: string | undefined
  inclusion_type?: string | undefined
  name?: string | undefined
  rate?: string | undefined
}
type Device = { id?: string | undefined; name?: string | undefined }
type V1PaymentDiscount = {
  applied_money?: V1Money | undefined
  discount_id?: string | undefined
  name?: string | undefined
}
type V1PaymentItemDetail = {
  category_name?: string | undefined
  item_id?: string | undefined
  item_variation_id?: string | undefined
  sku?: string | undefined
}
type V1PaymentModifier = {
  applied_money?: V1Money | undefined
  modifier_option_id?: string | undefined
  name?: string | undefined
}
type V1PaymentItemization = {
  discount_money?: V1Money | undefined
  discounts?: V1PaymentDiscount[] | undefined
  gross_sales_money?: V1Money | undefined
  item_detail?: V1PaymentItemDetail | undefined
  item_variation_name?: string | undefined
  itemization_type?: string | undefined
  modifiers?: V1PaymentModifier[] | undefined
  name?: string | undefined
  net_sales_money?: V1Money | undefined
  notes?: string | undefined
  quantity?: number | undefined
  single_quantity_money?: V1Money | undefined
  taxes?: V1PaymentTax[] | undefined
  total_money?: V1Money | undefined
}
type V1PaymentSurcharge = {
  amount_money?: V1Money | undefined
  applied_money?: V1Money | undefined
  name?: string | undefined
  rate?: string | undefined
  surcharge_id?: string | undefined
  taxable?: boolean | undefined
  taxes?: V1PaymentTax[] | undefined
  type?: string | undefined
}
type V1Refund = {
  created_at?: string | undefined
  is_exchange?: boolean | undefined
  merchant_id?: string | undefined
  payment_id?: string | undefined
  processed_at?: string | undefined
  reason?: string | undefined
  refunded_additive_tax?: V1PaymentTax[] | undefined
  refunded_additive_tax_money?: V1Money | undefined
  refunded_discount_money?: V1Money | undefined
  refunded_inclusive_tax?: V1PaymentTax[] | undefined
  refunded_inclusive_tax_money?: V1Money | undefined
  refunded_money?: V1Money | undefined
  refunded_processing_fee_money?: V1Money | undefined
  refunded_surcharge_money?: V1Money | undefined
  refunded_surcharges?: V1PaymentSurcharge[] | undefined
  refunded_tax_money?: V1Money | undefined
  refunded_tip_money?: V1Money | undefined
  type?: string | undefined
}
type V1Payment = {
  additive_tax?: V1PaymentTax[] | undefined
  additive_tax_money?: V1Money | undefined
  created_at?: string | undefined
  creator_id?: string | undefined
  device?: Device | undefined
  discount_money?: V1Money | undefined
  gross_sales_money?: V1Money | undefined
  id?: string | undefined
  inclusive_tax?: V1PaymentTax[] | undefined
  inclusive_tax_money?: V1Money | undefined
  is_partial?: boolean | undefined
  itemizations?: V1PaymentItemization[] | undefined
  merchant_id?: string | undefined
  net_sales_money?: V1Money | undefined
  net_total_money?: V1Money | undefined
  payment_url?: string | undefined
  processing_fee_money?: V1Money | undefined
  receipt_url?: string | undefined
  refunded_money?: V1Money | undefined
  refunds?: V1Refund[] | undefined
  surcharge_money?: V1Money | undefined
  surcharges?: V1PaymentSurcharge[] | undefined
  swedish_rounding_money?: V1Money | undefined
  tax_money?: V1Money | undefined
  tender?: V1Tender[] | undefined
  tip_money?: V1Money | undefined
  total_collected_money?: V1Money | undefined
}
type V1CreateRefundRequest = {
  payment_id: string
  reason: string
  refunded_money?: V1Money | undefined
  request_idempotence_key?: string | undefined
  type: string
}
type V1SettlementEntry = {
  amount_money?: V1Money | undefined
  fee_money?: V1Money | undefined
  payment_id?: string | undefined
  type?: string | undefined
}
type V1Settlement = {
  bank_account_id?: string | undefined
  entries?: V1SettlementEntry[] | undefined
  id?: string | undefined
  initiated_at?: string | undefined
  status?: string | undefined
  total_money?: V1Money | undefined
}
type RegisterDomainRequest = { domain_name: string }
type RegisterDomainResponse = { errors?: Error[] | undefined; status?: string | undefined }
type BankAccount = {
  account_number_suffix: string
  account_type: string
  bank_name?: string | undefined
  country: string
  creditable: boolean
  currency: string
  debit_mandate_reference_id?: string | undefined
  debitable: boolean
  fingerprint?: string | undefined
  holder_name: string
  id: string
  location_id?: string | undefined
  primary_bank_identification_number: string
  reference_id?: string | undefined
  secondary_bank_identification_number?: string | undefined
  status: string
  version?: number | undefined
}
type ListBankAccountsResponse = {
  bank_accounts?: BankAccount[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type GetBankAccountByV1IdResponse = {
  bank_account?: BankAccount | undefined
  errors?: Error[] | undefined
}
type GetBankAccountResponse = {
  bank_account?: BankAccount | undefined
  errors?: Error[] | undefined
}
type AppointmentSegment = {
  duration_minutes: number
  service_variation_id: string
  service_variation_version: bigint
  team_member_id: string
}
type Booking = {
  appointment_segments?: AppointmentSegment[] | undefined
  created_at?: string | undefined
  customer_id?: string | undefined
  customer_note?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  seller_note?: string | undefined
  start_at?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
  version?: number | undefined
}
type CreateBookingRequest = { booking: Booking; idempotency_key?: string | undefined }
type CreateBookingResponse = { booking?: Booking | undefined; errors?: Error[] | undefined }
type FilterValue = {
  all?: string[] | undefined
  any?: string[] | undefined
  none?: string[] | undefined
}
type SegmentFilter = {
  service_variation_id: string
  team_member_id_filter?: FilterValue | undefined
}
type TimeRange = { end_at?: string | undefined; start_at?: string | undefined }
type SearchAvailabilityFilter = {
  booking_id?: string | undefined
  location_id?: string | undefined
  segment_filters?: SegmentFilter[] | undefined
  start_at_range: TimeRange
}
type SearchAvailabilityQuery = { filter: SearchAvailabilityFilter }
type SearchAvailabilityRequest = { query: SearchAvailabilityQuery }
type Availability = {
  appointment_segments?: AppointmentSegment[] | undefined
  location_id?: string | undefined
  start_at?: string | undefined
}
type SearchAvailabilityResponse = {
  availabilities?: Availability[] | undefined
  errors?: Error[] | undefined
}
type Money = { amount?: bigint | undefined; currency?: string | undefined }
type BusinessAppointmentSettings = {
  alignment_time?: string | undefined
  any_team_member_booking_enabled?: boolean | undefined
  cancellation_fee_money?: Money | undefined
  cancellation_policy?: string | undefined
  cancellation_policy_text?: string | undefined
  cancellation_window_seconds?: number | undefined
  location_types?: string[] | undefined
  max_appointments_per_day_limit?: number | undefined
  max_appointments_per_day_limit_type?: string | undefined
  max_booking_lead_time_seconds?: number | undefined
  min_booking_lead_time_seconds?: number | undefined
  multiple_service_booking_enabled?: boolean | undefined
  skip_booking_flow_staff_selection?: boolean | undefined
}
type BusinessBookingProfile = {
  allow_user_cancel?: boolean | undefined
  booking_enabled?: boolean | undefined
  booking_policy?: string | undefined
  business_appointment_settings?: BusinessAppointmentSettings | undefined
  created_at?: string | undefined
  customer_timezone_choice?: string | undefined
  seller_id?: string | undefined
}
type RetrieveBusinessBookingProfileResponse = {
  business_booking_profile?: BusinessBookingProfile | undefined
  errors?: Error[] | undefined
}
type TeamMemberBookingProfile = {
  description?: string | undefined
  display_name?: string | undefined
  is_bookable?: boolean | undefined
  profile_image_url?: string | undefined
  team_member_id?: string | undefined
}
type ListTeamMemberBookingProfilesResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  team_member_booking_profiles?: TeamMemberBookingProfile[] | undefined
}
type RetrieveTeamMemberBookingProfileResponse = {
  errors?: Error[] | undefined
  team_member_booking_profile?: TeamMemberBookingProfile | undefined
}
type RetrieveBookingResponse = { booking?: Booking | undefined; errors?: Error[] | undefined }
type UpdateBookingRequest = { booking: Booking; idempotency_key?: string | undefined }
type UpdateBookingResponse = { booking?: Booking | undefined; errors?: Error[] | undefined }
type CancelBookingRequest = {
  booking_version?: number | undefined
  idempotency_key?: string | undefined
}
type CancelBookingResponse = { booking?: Booking | undefined; errors?: Error[] | undefined }
type Card = {
  billing_address?: Address | undefined
  bin?: string | undefined
  card_brand?: string | undefined
  card_type?: string | undefined
  cardholder_name?: string | undefined
  customer_id?: string | undefined
  enabled?: boolean | undefined
  exp_month?: bigint | undefined
  exp_year?: bigint | undefined
  fingerprint?: string | undefined
  id?: string | undefined
  last_4?: string | undefined
  prepaid_type?: string | undefined
  reference_id?: string | undefined
  version?: bigint | undefined
}
type ListCardsResponse = {
  cards?: Card[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type CreateCardRequest = {
  card: Card
  idempotency_key: string
  source_id: string
  verification_token?: string | undefined
}
type CreateCardResponse = { card?: Card | undefined; errors?: Error[] | undefined }
type RetrieveCardResponse = { card?: Card | undefined; errors?: Error[] | undefined }
type DisableCardResponse = { card?: Card | undefined; errors?: Error[] | undefined }
type CashDrawerShiftSummary = {
  closed_at?: string | undefined
  closed_cash_money?: Money | undefined
  description?: string | undefined
  ended_at?: string | undefined
  expected_cash_money?: Money | undefined
  id?: string | undefined
  opened_at?: string | undefined
  opened_cash_money?: Money | undefined
  state?: string | undefined
}
type ListCashDrawerShiftsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  items?: CashDrawerShiftSummary[] | undefined
}
type CashDrawerDevice = { id?: string | undefined; name?: string | undefined }
type CashDrawerShift = {
  cash_paid_in_money?: Money | undefined
  cash_paid_out_money?: Money | undefined
  cash_payment_money?: Money | undefined
  cash_refunds_money?: Money | undefined
  closed_at?: string | undefined
  closed_cash_money?: Money | undefined
  closing_employee_id?: string | undefined
  description?: string | undefined
  device?: CashDrawerDevice | undefined
  employee_ids?: string[] | undefined
  ended_at?: string | undefined
  ending_employee_id?: string | undefined
  expected_cash_money?: Money | undefined
  id?: string | undefined
  opened_at?: string | undefined
  opened_cash_money?: Money | undefined
  opening_employee_id?: string | undefined
  state?: string | undefined
}
type RetrieveCashDrawerShiftResponse = {
  cash_drawer_shift?: CashDrawerShift | undefined
  errors?: Error[] | undefined
}
type CashDrawerShiftEvent = {
  created_at?: string | undefined
  description?: string | undefined
  employee_id?: string | undefined
  event_money?: Money | undefined
  event_type?: string | undefined
  id?: string | undefined
}
type ListCashDrawerShiftEventsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  events?: CashDrawerShiftEvent[] | undefined
}
type BatchDeleteCatalogObjectsRequest = { object_ids?: string[] | undefined }
type BatchDeleteCatalogObjectsResponse = {
  deleted_at?: string | undefined
  deleted_object_ids?: string[] | undefined
  errors?: Error[] | undefined
}
type BatchRetrieveCatalogObjectsRequest = {
  catalog_version?: bigint | undefined
  include_related_objects?: boolean | undefined
  object_ids: string[]
}
type CatalogV1Id = { catalog_v1_id?: string | undefined; location_id?: string | undefined }
type CatalogCategory = { name?: string | undefined }
type CatalogCustomAttributeDefinitionNumberConfig = { precision?: number | undefined }
type CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection = {
  name: string
  uid?: string | undefined
}
type CatalogCustomAttributeDefinitionSelectionConfig = {
  allowed_selections?:
    | CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]
    | undefined
  max_allowed_selections?: number | undefined
}
type SourceApplication = {
  application_id?: string | undefined
  name?: string | undefined
  product?: string | undefined
}
type CatalogCustomAttributeDefinitionStringConfig = { enforce_uniqueness?: boolean | undefined }
type CatalogCustomAttributeDefinition = {
  allowed_object_types: string[]
  app_visibility?: string | undefined
  custom_attribute_usage_count?: number | undefined
  description?: string | undefined
  key?: string | undefined
  name: string
  number_config?: CatalogCustomAttributeDefinitionNumberConfig | undefined
  selection_config?: CatalogCustomAttributeDefinitionSelectionConfig | undefined
  seller_visibility?: string | undefined
  source_application?: SourceApplication | undefined
  string_config?: CatalogCustomAttributeDefinitionStringConfig | undefined
  type: string
}
type CatalogCustomAttributeValue = {
  boolean_value?: boolean | undefined
  custom_attribute_definition_id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  number_value?: string | undefined
  selection_uid_values?: string[] | undefined
  string_value?: string | undefined
  type?: string | undefined
}
type CatalogDiscount = {
  amount_money?: Money | undefined
  discount_type?: string | undefined
  label_color?: string | undefined
  modify_tax_basis?: string | undefined
  name?: string | undefined
  percentage?: string | undefined
  pin_required?: boolean | undefined
}
type CatalogImage = {
  caption?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type CatalogItemOptionForItem = { item_option_id?: string | undefined }
type CatalogModifierOverride = { modifier_id: string; on_by_default?: boolean | undefined }
type CatalogItemModifierListInfo = {
  enabled?: boolean | undefined
  max_selected_modifiers?: number | undefined
  min_selected_modifiers?: number | undefined
  modifier_list_id: string
  modifier_overrides?: CatalogModifierOverride[] | undefined
}
type CatalogItem = {
  abbreviation?: string | undefined
  available_electronically?: boolean | undefined
  available_for_pickup?: boolean | undefined
  available_online?: boolean | undefined
  category_id?: string | undefined
  description?: string | undefined
  item_options?: CatalogItemOptionForItem[] | undefined
  label_color?: string | undefined
  modifier_list_info?: CatalogItemModifierListInfo[] | undefined
  name?: string | undefined
  product_type?: string | undefined
  skip_modifier_screen?: boolean | undefined
  sort_name?: string | undefined
  tax_ids?: string[] | undefined
  variations?: CatalogObject[] | undefined
}
type CatalogItemOption = {
  description?: string | undefined
  display_name?: string | undefined
  name?: string | undefined
  show_colors?: boolean | undefined
  values?: CatalogObject[] | undefined
}
type CatalogItemOptionValue = {
  color?: string | undefined
  description?: string | undefined
  item_option_id?: string | undefined
  name?: string | undefined
  ordinal?: number | undefined
}
type CatalogItemOptionValueForItemVariation = {
  item_option_id?: string | undefined
  item_option_value_id?: string | undefined
}
type ItemVariationLocationOverrides = {
  inventory_alert_threshold?: bigint | undefined
  inventory_alert_type?: string | undefined
  location_id?: string | undefined
  price_money?: Money | undefined
  pricing_type?: string | undefined
  track_inventory?: boolean | undefined
}
type CatalogStockConversion = {
  nonstockable_quantity: string
  stockable_item_variation_id: string
  stockable_quantity: string
}
type CatalogItemVariation = {
  available_for_booking?: boolean | undefined
  inventory_alert_threshold?: bigint | undefined
  inventory_alert_type?: string | undefined
  item_id?: string | undefined
  item_option_values?: CatalogItemOptionValueForItemVariation[] | undefined
  location_overrides?: ItemVariationLocationOverrides[] | undefined
  measurement_unit_id?: string | undefined
  name?: string | undefined
  ordinal?: number | undefined
  price_money?: Money | undefined
  pricing_type?: string | undefined
  service_duration?: bigint | undefined
  sku?: string | undefined
  stockable?: boolean | undefined
  stockable_conversion?: CatalogStockConversion | undefined
  team_member_ids?: string[] | undefined
  track_inventory?: boolean | undefined
  upc?: string | undefined
  user_data?: string | undefined
}
type MeasurementUnitCustom = { abbreviation: string; name: string }
type MeasurementUnit = {
  area_unit?: string | undefined
  custom_unit?: MeasurementUnitCustom | undefined
  generic_unit?: string | undefined
  length_unit?: string | undefined
  time_unit?: string | undefined
  type?: string | undefined
  volume_unit?: string | undefined
  weight_unit?: string | undefined
}
type CatalogMeasurementUnit = {
  measurement_unit?: MeasurementUnit | undefined
  precision?: number | undefined
}
type CatalogModifier = {
  modifier_list_id?: string | undefined
  name?: string | undefined
  ordinal?: number | undefined
  price_money?: Money | undefined
}
type CatalogModifierList = {
  modifiers?: CatalogObject[] | undefined
  name?: string | undefined
  ordinal?: number | undefined
  selection_type?: string | undefined
}
type CatalogPricingRule = {
  apply_products_id?: string | undefined
  customer_group_ids_any?: string[] | undefined
  discount_id?: string | undefined
  exclude_products_id?: string | undefined
  exclude_strategy?: string | undefined
  match_products_id?: string | undefined
  name?: string | undefined
  time_period_ids?: string[] | undefined
  valid_from_date?: string | undefined
  valid_from_local_time?: string | undefined
  valid_until_date?: string | undefined
  valid_until_local_time?: string | undefined
}
type CatalogProductSet = {
  all_products?: boolean | undefined
  name?: string | undefined
  product_ids_all?: string[] | undefined
  product_ids_any?: string[] | undefined
  quantity_exact?: bigint | undefined
  quantity_max?: bigint | undefined
  quantity_min?: bigint | undefined
}
type CatalogQuickAmount = {
  amount: Money
  ordinal?: bigint | undefined
  score?: bigint | undefined
  type: string
}
type CatalogQuickAmountsSettings = {
  amounts?: CatalogQuickAmount[] | undefined
  eligible_for_auto_amounts?: boolean | undefined
  option: string
}
type SubscriptionPhase = {
  cadence: string
  ordinal?: bigint | undefined
  periods?: number | undefined
  recurring_price_money: Money
  uid?: string | undefined
}
type CatalogSubscriptionPlan = { name: string; phases: SubscriptionPhase[] }
type CatalogTax = {
  applies_to_custom_amounts?: boolean | undefined
  calculation_phase?: string | undefined
  enabled?: boolean | undefined
  inclusion_type?: string | undefined
  name?: string | undefined
  percentage?: string | undefined
}
type CatalogTimePeriod = { event?: string | undefined }
type CatalogObject = {
  absent_at_location_ids?: string[] | undefined
  catalog_v1_ids?: CatalogV1Id[] | undefined
  category_data?: CatalogCategory | undefined
  custom_attribute_definition_data?: CatalogCustomAttributeDefinition | undefined
  custom_attribute_values?: { [x: string]: CatalogCustomAttributeValue } | undefined
  discount_data?: CatalogDiscount | undefined
  id: string
  image_data?: CatalogImage | undefined
  image_id?: string | undefined
  is_deleted?: boolean | undefined
  item_data?: CatalogItem | undefined
  item_option_data?: CatalogItemOption | undefined
  item_option_value_data?: CatalogItemOptionValue | undefined
  item_variation_data?: CatalogItemVariation | undefined
  measurement_unit_data?: CatalogMeasurementUnit | undefined
  modifier_data?: CatalogModifier | undefined
  modifier_list_data?: CatalogModifierList | undefined
  present_at_all_locations?: boolean | undefined
  present_at_location_ids?: string[] | undefined
  pricing_rule_data?: CatalogPricingRule | undefined
  product_set_data?: CatalogProductSet | undefined
  quick_amounts_settings_data?: CatalogQuickAmountsSettings | undefined
  subscription_plan_data?: CatalogSubscriptionPlan | undefined
  tax_data?: CatalogTax | undefined
  time_period_data?: CatalogTimePeriod | undefined
  type: string
  updated_at?: string | undefined
  version?: bigint | undefined
}
type BatchRetrieveCatalogObjectsResponse = {
  errors?: Error[] | undefined
  objects?: CatalogObject[] | undefined
  related_objects?: CatalogObject[] | undefined
}
type CatalogObjectBatch = { objects: CatalogObject[] }
type BatchUpsertCatalogObjectsRequest = { batches: CatalogObjectBatch[]; idempotency_key: string }
type CatalogIdMapping = { client_object_id?: string | undefined; object_id?: string | undefined }
type BatchUpsertCatalogObjectsResponse = {
  errors?: Error[] | undefined
  id_mappings?: CatalogIdMapping[] | undefined
  objects?: CatalogObject[] | undefined
  updated_at?: string | undefined
}
type CatalogInfoResponseLimits = {
  batch_delete_max_object_ids?: number | undefined
  batch_retrieve_max_object_ids?: number | undefined
  batch_upsert_max_objects_per_batch?: number | undefined
  batch_upsert_max_total_objects?: number | undefined
  search_max_page_limit?: number | undefined
  update_item_modifier_lists_max_item_ids?: number | undefined
  update_item_modifier_lists_max_modifier_lists_to_disable?: number | undefined
  update_item_modifier_lists_max_modifier_lists_to_enable?: number | undefined
  update_item_taxes_max_item_ids?: number | undefined
  update_item_taxes_max_taxes_to_disable?: number | undefined
  update_item_taxes_max_taxes_to_enable?: number | undefined
}
type StandardUnitDescription = {
  abbreviation?: string | undefined
  name?: string | undefined
  unit?: MeasurementUnit | undefined
}
type StandardUnitDescriptionGroup = {
  language_code?: string | undefined
  standard_unit_descriptions?: StandardUnitDescription[] | undefined
}
type CatalogInfoResponse = {
  errors?: Error[] | undefined
  limits?: CatalogInfoResponseLimits | undefined
  standard_unit_description_group?: StandardUnitDescriptionGroup | undefined
}
type ListCatalogResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  objects?: CatalogObject[] | undefined
}
type UpsertCatalogObjectRequest = { idempotency_key: string; object: CatalogObject }
type UpsertCatalogObjectResponse = {
  catalog_object?: CatalogObject | undefined
  errors?: Error[] | undefined
  id_mappings?: CatalogIdMapping[] | undefined
}
type DeleteCatalogObjectResponse = {
  deleted_at?: string | undefined
  deleted_object_ids?: string[] | undefined
  errors?: Error[] | undefined
}
type RetrieveCatalogObjectResponse = {
  errors?: Error[] | undefined
  object?: CatalogObject | undefined
  related_objects?: CatalogObject[] | undefined
}
type CatalogQueryExact = { attribute_name: string; attribute_value: string }
type CatalogQueryItemVariationsForItemOptionValues = {
  item_option_value_ids?: string[] | undefined
}
type CatalogQueryItemsForItemOptions = { item_option_ids?: string[] | undefined }
type CatalogQueryItemsForModifierList = { modifier_list_ids: string[] }
type CatalogQueryItemsForTax = { tax_ids: string[] }
type CatalogQueryPrefix = { attribute_name: string; attribute_prefix: string }
type CatalogQueryRange = {
  attribute_max_value?: bigint | undefined
  attribute_min_value?: bigint | undefined
  attribute_name: string
}
type CatalogQuerySet = { attribute_name: string; attribute_values: string[] }
type CatalogQuerySortedAttribute = {
  attribute_name: string
  initial_attribute_value?: string | undefined
  sort_order?: string | undefined
}
type CatalogQueryText = { keywords: string[] }
type CatalogQuery = {
  exact_query?: CatalogQueryExact | undefined
  item_variations_for_item_option_values_query?:
    | CatalogQueryItemVariationsForItemOptionValues
    | undefined
  items_for_item_options_query?: CatalogQueryItemsForItemOptions | undefined
  items_for_modifier_list_query?: CatalogQueryItemsForModifierList | undefined
  items_for_tax_query?: CatalogQueryItemsForTax | undefined
  prefix_query?: CatalogQueryPrefix | undefined
  range_query?: CatalogQueryRange | undefined
  set_query?: CatalogQuerySet | undefined
  sorted_attribute_query?: CatalogQuerySortedAttribute | undefined
  text_query?: CatalogQueryText | undefined
}
type SearchCatalogObjectsRequest = {
  begin_time?: string | undefined
  cursor?: string | undefined
  include_deleted_objects?: boolean | undefined
  include_related_objects?: boolean | undefined
  limit?: number | undefined
  object_types?: string[] | undefined
  query?: CatalogQuery | undefined
}
type SearchCatalogObjectsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  latest_time?: string | undefined
  objects?: CatalogObject[] | undefined
  related_objects?: CatalogObject[] | undefined
}
type Range = { max?: string | undefined; min?: string | undefined }
type CustomAttributeFilter = {
  bool_filter?: boolean | undefined
  custom_attribute_definition_id?: string | undefined
  key?: string | undefined
  number_filter?: Range | undefined
  selection_uids_filter?: string[] | undefined
  string_filter?: string | undefined
}
type SearchCatalogItemsRequest = {
  category_ids?: string[] | undefined
  cursor?: string | undefined
  custom_attribute_filters?: CustomAttributeFilter[] | undefined
  enabled_location_ids?: string[] | undefined
  limit?: number | undefined
  product_types?: string[] | undefined
  sort_order?: string | undefined
  stock_levels?: string[] | undefined
  text_filter?: string | undefined
}
type SearchCatalogItemsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  items?: CatalogObject[] | undefined
  matched_variation_ids?: string[] | undefined
}
type UpdateItemModifierListsRequest = {
  item_ids: string[]
  modifier_lists_to_disable?: string[] | undefined
  modifier_lists_to_enable?: string[] | undefined
}
type UpdateItemModifierListsResponse = {
  errors?: Error[] | undefined
  updated_at?: string | undefined
}
type UpdateItemTaxesRequest = {
  item_ids: string[]
  taxes_to_disable?: string[] | undefined
  taxes_to_enable?: string[] | undefined
}
type UpdateItemTaxesResponse = { errors?: Error[] | undefined; updated_at?: string | undefined }
type CustomerPreferences = { email_unsubscribed?: boolean | undefined }
type Customer = {
  address?: Address | undefined
  birthday?: string | undefined
  cards?: Card[] | undefined
  company_name?: string | undefined
  created_at?: string | undefined
  creation_source?: string | undefined
  email_address?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
  group_ids?: string[] | undefined
  id?: string | undefined
  nickname?: string | undefined
  note?: string | undefined
  phone_number?: string | undefined
  preferences?: CustomerPreferences | undefined
  reference_id?: string | undefined
  segment_ids?: string[] | undefined
  updated_at?: string | undefined
  version?: bigint | undefined
}
type ListCustomersResponse = {
  cursor?: string | undefined
  customers?: Customer[] | undefined
  errors?: Error[] | undefined
}
type CreateCustomerRequest = {
  address?: Address | undefined
  birthday?: string | undefined
  company_name?: string | undefined
  email_address?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
  idempotency_key?: string | undefined
  nickname?: string | undefined
  note?: string | undefined
  phone_number?: string | undefined
  reference_id?: string | undefined
}
type CreateCustomerResponse = { customer?: Customer | undefined; errors?: Error[] | undefined }
type CustomerGroup = {
  created_at?: string | undefined
  id?: string | undefined
  name: string
  updated_at?: string | undefined
}
type ListCustomerGroupsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  groups?: CustomerGroup[] | undefined
}
type CreateCustomerGroupRequest = { group: CustomerGroup; idempotency_key?: string | undefined }
type CreateCustomerGroupResponse = {
  errors?: Error[] | undefined
  group?: CustomerGroup | undefined
}
type DeleteCustomerGroupResponse = { errors?: Error[] | undefined }
type RetrieveCustomerGroupResponse = {
  errors?: Error[] | undefined
  group?: CustomerGroup | undefined
}
type UpdateCustomerGroupRequest = { group: CustomerGroup }
type UpdateCustomerGroupResponse = {
  errors?: Error[] | undefined
  group?: CustomerGroup | undefined
}
type CustomerCreationSourceFilter = { rule?: string | undefined; values?: string[] | undefined }
type CustomerTextFilter = { exact?: string | undefined; fuzzy?: string | undefined }
type CustomerFilter = {
  created_at?: TimeRange | undefined
  creation_source?: CustomerCreationSourceFilter | undefined
  email_address?: CustomerTextFilter | undefined
  group_ids?: FilterValue | undefined
  phone_number?: CustomerTextFilter | undefined
  reference_id?: CustomerTextFilter | undefined
  updated_at?: TimeRange | undefined
}
type CustomerSort = { field?: string | undefined; order?: string | undefined }
type CustomerQuery = { filter?: CustomerFilter | undefined; sort?: CustomerSort | undefined }
type SearchCustomersRequest = {
  cursor?: string | undefined
  limit?: bigint | undefined
  query?: CustomerQuery | undefined
}
type SearchCustomersResponse = {
  cursor?: string | undefined
  customers?: Customer[] | undefined
  errors?: Error[] | undefined
}
type CustomerSegment = {
  created_at?: string | undefined
  id?: string | undefined
  name: string
  updated_at?: string | undefined
}
type ListCustomerSegmentsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  segments?: CustomerSegment[] | undefined
}
type RetrieveCustomerSegmentResponse = {
  errors?: Error[] | undefined
  segment?: CustomerSegment | undefined
}
type DeleteCustomerResponse = { errors?: Error[] | undefined }
type RetrieveCustomerResponse = { customer?: Customer | undefined; errors?: Error[] | undefined }
type UpdateCustomerRequest = {
  address?: Address | undefined
  birthday?: string | undefined
  company_name?: string | undefined
  email_address?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
  nickname?: string | undefined
  note?: string | undefined
  phone_number?: string | undefined
  reference_id?: string | undefined
  version?: bigint | undefined
}
type UpdateCustomerResponse = { customer?: Customer | undefined; errors?: Error[] | undefined }
type CreateCustomerCardRequest = {
  billing_address?: Address | undefined
  card_nonce: string
  cardholder_name?: string | undefined
  verification_token?: string | undefined
}
type CreateCustomerCardResponse = { card?: Card | undefined; errors?: Error[] | undefined }
type DeleteCustomerCardResponse = { errors?: Error[] | undefined }
type RemoveGroupFromCustomerResponse = { errors?: Error[] | undefined }
type AddGroupToCustomerResponse = { errors?: Error[] | undefined }
type DeviceCode = {
  code?: string | undefined
  created_at?: string | undefined
  device_id?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  name?: string | undefined
  pair_by?: string | undefined
  paired_at?: string | undefined
  product_type: string
  status?: string | undefined
  status_changed_at?: string | undefined
}
type ListDeviceCodesResponse = {
  cursor?: string | undefined
  device_codes?: DeviceCode[] | undefined
  errors?: Error[] | undefined
}
type CreateDeviceCodeRequest = { device_code: DeviceCode; idempotency_key: string }
type CreateDeviceCodeResponse = {
  device_code?: DeviceCode | undefined
  errors?: Error[] | undefined
}
type GetDeviceCodeResponse = { device_code?: DeviceCode | undefined; errors?: Error[] | undefined }
type DisputedPayment = { payment_id?: string | undefined }
type Dispute = {
  amount_money?: Money | undefined
  brand_dispute_id?: string | undefined
  card_brand?: string | undefined
  created_at?: string | undefined
  dispute_id?: string | undefined
  disputed_payment?: DisputedPayment | undefined
  due_at?: string | undefined
  evidence_ids?: string[] | undefined
  id?: string | undefined
  location_id?: string | undefined
  reason?: string | undefined
  reported_at?: string | undefined
  reported_date?: string | undefined
  state?: string | undefined
  updated_at?: string | undefined
  version?: number | undefined
}
type ListDisputesResponse = {
  cursor?: string | undefined
  disputes?: Dispute[] | undefined
  errors?: Error[] | undefined
}
type RetrieveDisputeResponse = { dispute?: Dispute | undefined; errors?: Error[] | undefined }
type AcceptDisputeResponse = { dispute?: Dispute | undefined; errors?: Error[] | undefined }
type DisputeEvidenceFile = { filename?: string | undefined; filetype?: string | undefined }
type DisputeEvidence = {
  dispute_id?: string | undefined
  evidence_file?: DisputeEvidenceFile | undefined
  evidence_id?: string | undefined
  evidence_text?: string | undefined
  evidence_type?: string | undefined
  id?: string | undefined
  uploaded_at?: string | undefined
}
type ListDisputeEvidenceResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  evidence?: DisputeEvidence[] | undefined
}
type CreateDisputeEvidenceTextRequest = {
  evidence_text: string
  evidence_type?: string | undefined
  idempotency_key: string
}
type CreateDisputeEvidenceTextResponse = {
  errors?: Error[] | undefined
  evidence?: DisputeEvidence | undefined
}
type DeleteDisputeEvidenceResponse = { errors?: Error[] | undefined }
type RetrieveDisputeEvidenceResponse = {
  errors?: Error[] | undefined
  evidence?: DisputeEvidence | undefined
}
type SubmitEvidenceResponse = { dispute?: Dispute | undefined; errors?: Error[] | undefined }
type Employee = {
  created_at?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  id?: string | undefined
  is_owner?: boolean | undefined
  last_name?: string | undefined
  location_ids?: string[] | undefined
  phone_number?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type ListEmployeesResponse = {
  cursor?: string | undefined
  employees?: Employee[] | undefined
  errors?: Error[] | undefined
}
type RetrieveEmployeeResponse = { employee?: Employee | undefined; errors?: Error[] | undefined }
type GANSource = { [x: string]: unknown }
type Status = { [x: string]: unknown }
type Type = { [x: string]: unknown }
type GiftCard = {
  balance_money?: Money | undefined
  created_at?: string | undefined
  customer_ids?: string[] | undefined
  gan?: string | undefined
  gan_source?: GANSource | undefined
  id?: string | undefined
  state?: Status | undefined
  type: Type
}
type ListGiftCardsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  gift_cards?: GiftCard[] | undefined
}
type CreateGiftCardRequest = { gift_card: GiftCard; idempotency_key: string; location_id: string }
type CreateGiftCardResponse = { errors?: Error[] | undefined; gift_card?: GiftCard | undefined }
type GiftCardActivityActivate = {
  amount_money?: Money | undefined
  buyer_payment_instrument_ids?: string[] | undefined
  line_item_uid?: string | undefined
  order_id?: string | undefined
  reference_id?: string | undefined
}
type Reason = { [x: string]: unknown }
type GiftCardActivityAdjustDecrement = { amount_money: Money; reason: Reason }
type GiftCardActivityAdjustIncrement = { amount_money: Money; reason: Reason }
type GiftCardActivityBlock = { reason: Reason }
type GiftCardActivityClearBalance = { reason: Reason }
type GiftCardActivityDeactivate = { reason: Reason }
type GiftCardActivityImport = { amount_money: Money }
type GiftCardActivityImportReversal = { amount_money: Money }
type GiftCardActivityLoad = {
  amount_money?: Money | undefined
  buyer_payment_instrument_ids?: string[] | undefined
  line_item_uid?: string | undefined
  order_id?: string | undefined
  reference_id?: string | undefined
}
type GiftCardActivityRedeem = {
  amount_money: Money
  payment_id?: string | undefined
  reference_id?: string | undefined
}
type GiftCardActivityRefund = {
  amount_money?: Money | undefined
  payment_id?: string | undefined
  redeem_activity_id: string
  reference_id?: string | undefined
}
type GiftCardActivityUnblock = { reason: Reason }
type GiftCardActivityUnlinkedActivityRefund = {
  amount_money: Money
  payment_id?: string | undefined
  reference_id?: string | undefined
}
type GiftCardActivity = {
  activate_activity_details?: GiftCardActivityActivate | undefined
  adjust_decrement_activity_details?: GiftCardActivityAdjustDecrement | undefined
  adjust_increment_activity_details?: GiftCardActivityAdjustIncrement | undefined
  block_activity_details?: GiftCardActivityBlock | undefined
  clear_balance_activity_details?: GiftCardActivityClearBalance | undefined
  created_at?: string | undefined
  deactivate_activity_details?: GiftCardActivityDeactivate | undefined
  gift_card_balance_money?: Money | undefined
  gift_card_gan?: string | undefined
  gift_card_id?: string | undefined
  id?: string | undefined
  import_activity_details?: GiftCardActivityImport | undefined
  import_reversal_activity_details?: GiftCardActivityImportReversal | undefined
  load_activity_details?: GiftCardActivityLoad | undefined
  location_id: string
  redeem_activity_details?: GiftCardActivityRedeem | undefined
  refund_activity_details?: GiftCardActivityRefund | undefined
  type: Type
  unblock_activity_details?: GiftCardActivityUnblock | undefined
  unlinked_activity_refund_activity_details?: GiftCardActivityUnlinkedActivityRefund | undefined
}
type ListGiftCardActivitiesResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  gift_card_activities?: GiftCardActivity[] | undefined
}
type CreateGiftCardActivityRequest = {
  gift_card_activity: GiftCardActivity
  idempotency_key: string
}
type CreateGiftCardActivityResponse = {
  errors?: Error[] | undefined
  gift_card_activity?: GiftCardActivity | undefined
}
type RetrieveGiftCardFromGANRequest = { gan: string }
type RetrieveGiftCardFromGANResponse = {
  errors?: Error[] | undefined
  gift_card?: GiftCard | undefined
}
type RetrieveGiftCardFromNonceRequest = { nonce: string }
type RetrieveGiftCardFromNonceResponse = {
  errors?: Error[] | undefined
  gift_card?: GiftCard | undefined
}
type LinkCustomerToGiftCardRequest = { customer_id: string }
type LinkCustomerToGiftCardResponse = {
  errors?: Error[] | undefined
  gift_card?: GiftCard | undefined
}
type UnlinkCustomerFromGiftCardRequest = { customer_id: string }
type UnlinkCustomerFromGiftCardResponse = {
  errors?: Error[] | undefined
  gift_card?: GiftCard | undefined
}
type RetrieveGiftCardResponse = { errors?: Error[] | undefined; gift_card?: GiftCard | undefined }
type InventoryAdjustmentGroup = {
  from_state?: string | undefined
  id?: string | undefined
  root_adjustment_id?: string | undefined
  to_state?: string | undefined
}
type InventoryAdjustment = {
  adjustment_group?: InventoryAdjustmentGroup | undefined
  catalog_object_id?: string | undefined
  catalog_object_type?: string | undefined
  created_at?: string | undefined
  employee_id?: string | undefined
  from_state?: string | undefined
  goods_receipt_id?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  occurred_at?: string | undefined
  purchase_order_id?: string | undefined
  quantity?: string | undefined
  reference_id?: string | undefined
  refund_id?: string | undefined
  source?: SourceApplication | undefined
  to_state?: string | undefined
  total_price_money?: Money | undefined
  transaction_id?: string | undefined
}
type RetrieveInventoryAdjustmentResponse = {
  adjustment?: InventoryAdjustment | undefined
  errors?: Error[] | undefined
}
type InventoryPhysicalCount = {
  catalog_object_id?: string | undefined
  catalog_object_type?: string | undefined
  created_at?: string | undefined
  employee_id?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  occurred_at?: string | undefined
  quantity?: string | undefined
  reference_id?: string | undefined
  source?: SourceApplication | undefined
  state?: string | undefined
}
type InventoryTransfer = {
  catalog_object_id?: string | undefined
  catalog_object_type?: string | undefined
  created_at?: string | undefined
  employee_id?: string | undefined
  from_location_id?: string | undefined
  id?: string | undefined
  occurred_at?: string | undefined
  quantity?: string | undefined
  reference_id?: string | undefined
  source?: SourceApplication | undefined
  state?: string | undefined
  to_location_id?: string | undefined
}
type InventoryChange = {
  adjustment?: InventoryAdjustment | undefined
  measurement_unit?: CatalogMeasurementUnit | undefined
  measurement_unit_id?: string | undefined
  physical_count?: InventoryPhysicalCount | undefined
  transfer?: InventoryTransfer | undefined
  type?: string | undefined
}
type BatchChangeInventoryRequest = {
  changes?: InventoryChange[] | undefined
  idempotency_key: string
  ignore_unchanged_counts?: boolean | undefined
}
type InventoryCount = {
  calculated_at?: string | undefined
  catalog_object_id?: string | undefined
  catalog_object_type?: string | undefined
  is_estimated?: boolean | undefined
  location_id?: string | undefined
  quantity?: string | undefined
  state?: string | undefined
}
type BatchChangeInventoryResponse = {
  changes?: InventoryChange[] | undefined
  counts?: InventoryCount[] | undefined
  errors?: Error[] | undefined
}
type BatchRetrieveInventoryChangesRequest = {
  catalog_object_ids?: string[] | undefined
  cursor?: string | undefined
  location_ids?: string[] | undefined
  states?: string[] | undefined
  types?: string[] | undefined
  updated_after?: string | undefined
  updated_before?: string | undefined
}
type BatchRetrieveInventoryChangesResponse = {
  changes?: InventoryChange[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type BatchRetrieveInventoryCountsRequest = {
  catalog_object_ids?: string[] | undefined
  cursor?: string | undefined
  location_ids?: string[] | undefined
  states?: string[] | undefined
  updated_after?: string | undefined
}
type BatchRetrieveInventoryCountsResponse = {
  counts?: InventoryCount[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type RetrieveInventoryPhysicalCountResponse = {
  count?: InventoryPhysicalCount | undefined
  errors?: Error[] | undefined
}
type RetrieveInventoryTransferResponse = {
  errors?: Error[] | undefined
  transfer?: InventoryTransfer | undefined
}
type RetrieveInventoryCountResponse = {
  counts?: InventoryCount[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type RetrieveInventoryChangesResponse = {
  changes?: InventoryChange[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type InvoiceAcceptedPaymentMethods = {
  bank_account?: boolean | undefined
  card?: boolean | undefined
  square_gift_card?: boolean | undefined
}
type InvoiceCustomField = {
  label?: string | undefined
  placement?: string | undefined
  value?: string | undefined
}
type InvoiceDeliveryMethodInvoiceDeliveryMethod = { [x: string]: unknown }
type InvoicePaymentReminder = {
  message?: string | undefined
  relative_scheduled_days?: number | undefined
  sent_at?: string | undefined
  status?: string | undefined
  uid?: string | undefined
}
type InvoicePaymentRequest = {
  automatic_payment_source?: string | undefined
  card_id?: string | undefined
  computed_amount_money?: Money | undefined
  due_date?: string | undefined
  fixed_amount_requested_money?: Money | undefined
  percentage_requested?: string | undefined
  reminders?: InvoicePaymentReminder[] | undefined
  request_method?: string | undefined
  request_type?: string | undefined
  rounding_adjustment_included_money?: Money | undefined
  tipping_enabled?: boolean | undefined
  total_completed_amount_money?: Money | undefined
  uid?: string | undefined
}
type InvoiceRecipient = {
  address?: Address | undefined
  company_name?: string | undefined
  customer_id?: string | undefined
  email_address?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
  phone_number?: string | undefined
}
type Invoice = {
  accepted_payment_methods?: InvoiceAcceptedPaymentMethods | undefined
  created_at?: string | undefined
  custom_fields?: InvoiceCustomField[] | undefined
  delivery_method?: InvoiceDeliveryMethodInvoiceDeliveryMethod | undefined
  description?: string | undefined
  id?: string | undefined
  invoice_number?: string | undefined
  location_id?: string | undefined
  next_payment_amount_money?: Money | undefined
  order_id?: string | undefined
  payment_requests?: InvoicePaymentRequest[] | undefined
  primary_recipient?: InvoiceRecipient | undefined
  public_url?: string | undefined
  scheduled_at?: string | undefined
  status?: string | undefined
  subscription_id?: string | undefined
  timezone?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
  version?: number | undefined
}
type ListInvoicesResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  invoices?: Invoice[] | undefined
}
type CreateInvoiceRequest = { idempotency_key?: string | undefined; invoice: Invoice }
type CreateInvoiceResponse = { errors?: Error[] | undefined; invoice?: Invoice | undefined }
type InvoiceFilter = { customer_ids?: string[] | undefined; location_ids: string[] }
type InvoiceSort = { field: string; order?: string | undefined }
type InvoiceQuery = { filter: InvoiceFilter; sort?: InvoiceSort | undefined }
type SearchInvoicesRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query: InvoiceQuery
}
type SearchInvoicesResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  invoices?: Invoice[] | undefined
}
type DeleteInvoiceResponse = { errors?: Error[] | undefined }
type GetInvoiceResponse = { errors?: Error[] | undefined; invoice?: Invoice | undefined }
type UpdateInvoiceRequest = {
  fields_to_clear?: string[] | undefined
  idempotency_key?: string | undefined
  invoice: Invoice
}
type UpdateInvoiceResponse = { errors?: Error[] | undefined; invoice?: Invoice | undefined }
type CancelInvoiceRequest = { version: number }
type CancelInvoiceResponse = { errors?: Error[] | undefined; invoice?: Invoice | undefined }
type PublishInvoiceRequest = { idempotency_key?: string | undefined; version: number }
type PublishInvoiceResponse = { errors?: Error[] | undefined; invoice?: Invoice | undefined }
type BreakType = {
  break_name: string
  created_at?: string | undefined
  expected_duration: string
  id?: string | undefined
  is_paid: boolean
  location_id: string
  updated_at?: string | undefined
  version?: number | undefined
}
type ListBreakTypesResponse = {
  break_types?: BreakType[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type CreateBreakTypeRequest = { break_type: BreakType; idempotency_key?: string | undefined }
type CreateBreakTypeResponse = { break_type?: BreakType | undefined; errors?: Error[] | undefined }
type DeleteBreakTypeResponse = { errors?: Error[] | undefined }
type GetBreakTypeResponse = { break_type?: BreakType | undefined; errors?: Error[] | undefined }
type UpdateBreakTypeRequest = { break_type: BreakType }
type UpdateBreakTypeResponse = { break_type?: BreakType | undefined; errors?: Error[] | undefined }
type EmployeeWage = {
  employee_id?: string | undefined
  hourly_rate?: Money | undefined
  id?: string | undefined
  title?: string | undefined
}
type ListEmployeeWagesResponse = {
  cursor?: string | undefined
  employee_wages?: EmployeeWage[] | undefined
  errors?: Error[] | undefined
}
type GetEmployeeWageResponse = {
  employee_wage?: EmployeeWage | undefined
  errors?: Error[] | undefined
}
type Break = {
  break_type_id: string
  end_at?: string | undefined
  expected_duration: string
  id?: string | undefined
  is_paid: boolean
  name: string
  start_at: string
}
type ShiftWage = { hourly_rate?: Money | undefined; title?: string | undefined }
type Shift = {
  breaks?: Break[] | undefined
  created_at?: string | undefined
  employee_id?: string | undefined
  end_at?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  start_at: string
  status?: string | undefined
  team_member_id?: string | undefined
  timezone?: string | undefined
  updated_at?: string | undefined
  version?: number | undefined
  wage?: ShiftWage | undefined
}
type CreateShiftRequest = { idempotency_key?: string | undefined; shift: Shift }
type CreateShiftResponse = { errors?: Error[] | undefined; shift?: Shift | undefined }
type DateRange = { end_date?: string | undefined; start_date?: string | undefined }
type ShiftWorkday = {
  date_range?: DateRange | undefined
  default_timezone?: string | undefined
  match_shifts_by?: string | undefined
}
type ShiftFilter = {
  employee_ids?: string[] | undefined
  end?: TimeRange | undefined
  location_ids: string[]
  start?: TimeRange | undefined
  status?: string | undefined
  team_member_ids: string[]
  workday?: ShiftWorkday | undefined
}
type ShiftSort = { field?: string | undefined; order?: string | undefined }
type ShiftQuery = { filter?: ShiftFilter | undefined; sort?: ShiftSort | undefined }
type SearchShiftsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: ShiftQuery | undefined
}
type SearchShiftsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  shifts?: Shift[] | undefined
}
type DeleteShiftResponse = { errors?: Error[] | undefined }
type GetShiftResponse = { errors?: Error[] | undefined; shift?: Shift | undefined }
type UpdateShiftRequest = { shift: Shift }
type UpdateShiftResponse = { errors?: Error[] | undefined; shift?: Shift | undefined }
type TeamMemberWage = {
  hourly_rate?: Money | undefined
  id?: string | undefined
  team_member_id?: string | undefined
  title?: string | undefined
}
type ListTeamMemberWagesResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  team_member_wages?: TeamMemberWage[] | undefined
}
type GetTeamMemberWageResponse = {
  errors?: Error[] | undefined
  team_member_wage?: TeamMemberWage | undefined
}
type WorkweekConfig = {
  created_at?: string | undefined
  id?: string | undefined
  start_of_day_local_time: string
  start_of_week: string
  updated_at?: string | undefined
  version?: number | undefined
}
type ListWorkweekConfigsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  workweek_configs?: WorkweekConfig[] | undefined
}
type UpdateWorkweekConfigRequest = { workweek_config: WorkweekConfig }
type UpdateWorkweekConfigResponse = {
  errors?: Error[] | undefined
  workweek_config?: WorkweekConfig | undefined
}
type BusinessHoursPeriod = {
  day_of_week?: string | undefined
  end_local_time?: string | undefined
  start_local_time?: string | undefined
}
type BusinessHours = { periods?: BusinessHoursPeriod[] | undefined }
type Coordinates = { latitude?: number | undefined; longitude?: number | undefined }
type TaxIds = {
  eu_vat?: string | undefined
  fr_naf?: string | undefined
  fr_siret?: string | undefined
}
type Location = {
  address?: Address | undefined
  business_email?: string | undefined
  business_hours?: BusinessHours | undefined
  business_name?: string | undefined
  capabilities?: string[] | undefined
  coordinates?: Coordinates | undefined
  country?: string | undefined
  created_at?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  facebook_url?: string | undefined
  full_format_logo_url?: string | undefined
  id?: string | undefined
  instagram_username?: string | undefined
  language_code?: string | undefined
  logo_url?: string | undefined
  mcc?: string | undefined
  merchant_id?: string | undefined
  name?: string | undefined
  phone_number?: string | undefined
  pos_background_url?: string | undefined
  status?: string | undefined
  tax_ids?: TaxIds | undefined
  timezone?: string | undefined
  twitter_username?: string | undefined
  type?: string | undefined
  website_url?: string | undefined
}
type ListLocationsResponse = { errors?: Error[] | undefined; locations?: Location[] | undefined }
type CreateLocationRequest = { location?: Location | undefined }
type CreateLocationResponse = { errors?: Error[] | undefined; location?: Location | undefined }
type RetrieveLocationResponse = { errors?: Error[] | undefined; location?: Location | undefined }
type UpdateLocationRequest = { location?: Location | undefined }
type UpdateLocationResponse = { errors?: Error[] | undefined; location?: Location | undefined }
type ChargeRequestAdditionalRecipient = {
  amount_money: Money
  description: string
  location_id: string
}
type OrderLineItemDiscount = {
  amount_money?: Money | undefined
  applied_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  percentage?: string | undefined
  pricing_rule_id?: string | undefined
  reward_ids?: string[] | undefined
  scope?: string | undefined
  type?: string | undefined
  uid?: string | undefined
}
type OrderFulfillmentPickupDetailsCurbsidePickupDetails = {
  buyer_arrived_at?: string | undefined
  curbside_details?: string | undefined
}
type OrderFulfillmentRecipient = {
  address?: Address | undefined
  customer_id?: string | undefined
  display_name?: string | undefined
  email_address?: string | undefined
  phone_number?: string | undefined
}
type OrderFulfillmentPickupDetails = {
  accepted_at?: string | undefined
  auto_complete_duration?: string | undefined
  cancel_reason?: string | undefined
  canceled_at?: string | undefined
  curbside_pickup_details?: OrderFulfillmentPickupDetailsCurbsidePickupDetails | undefined
  expired_at?: string | undefined
  expires_at?: string | undefined
  is_curbside_pickup?: boolean | undefined
  note?: string | undefined
  picked_up_at?: string | undefined
  pickup_at?: string | undefined
  pickup_window_duration?: string | undefined
  placed_at?: string | undefined
  prep_time_duration?: string | undefined
  ready_at?: string | undefined
  recipient?: OrderFulfillmentRecipient | undefined
  rejected_at?: string | undefined
  schedule_type?: string | undefined
}
type OrderFulfillmentShipmentDetails = {
  cancel_reason?: string | undefined
  canceled_at?: string | undefined
  carrier?: string | undefined
  expected_shipped_at?: string | undefined
  failed_at?: string | undefined
  failure_reason?: string | undefined
  in_progress_at?: string | undefined
  packaged_at?: string | undefined
  placed_at?: string | undefined
  recipient?: OrderFulfillmentRecipient | undefined
  shipped_at?: string | undefined
  shipping_note?: string | undefined
  shipping_type?: string | undefined
  tracking_number?: string | undefined
  tracking_url?: string | undefined
}
type OrderFulfillment = {
  metadata?: { [x: string]: string } | undefined
  pickup_details?: OrderFulfillmentPickupDetails | undefined
  shipment_details?: OrderFulfillmentShipmentDetails | undefined
  state?: string | undefined
  type?: string | undefined
  uid?: string | undefined
}
type OrderLineItemAppliedDiscount = {
  applied_money?: Money | undefined
  discount_uid: string
  uid?: string | undefined
}
type OrderLineItemAppliedTax = {
  applied_money?: Money | undefined
  tax_uid: string
  uid?: string | undefined
}
type OrderLineItemModifier = {
  base_price_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  name?: string | undefined
  total_price_money?: Money | undefined
  uid?: string | undefined
}
type OrderLineItemPricingBlocklistsBlockedDiscount = {
  discount_catalog_object_id?: string | undefined
  discount_uid?: string | undefined
  uid?: string | undefined
}
type OrderLineItemPricingBlocklistsBlockedTax = {
  tax_catalog_object_id?: string | undefined
  tax_uid?: string | undefined
  uid?: string | undefined
}
type OrderLineItemPricingBlocklists = {
  blocked_discounts?: OrderLineItemPricingBlocklistsBlockedDiscount[] | undefined
  blocked_taxes?: OrderLineItemPricingBlocklistsBlockedTax[] | undefined
}
type OrderQuantityUnit = {
  catalog_version?: bigint | undefined
  measurement_unit?: MeasurementUnit | undefined
  precision?: number | undefined
}
type OrderLineItem = {
  applied_discounts?: OrderLineItemAppliedDiscount[] | undefined
  applied_taxes?: OrderLineItemAppliedTax[] | undefined
  base_price_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  gross_sales_money?: Money | undefined
  item_type?: string | undefined
  metadata?: { [x: string]: string } | undefined
  modifiers?: OrderLineItemModifier[] | undefined
  name?: string | undefined
  note?: string | undefined
  pricing_blocklists?: OrderLineItemPricingBlocklists | undefined
  quantity: string
  quantity_unit?: OrderQuantityUnit | undefined
  total_discount_money?: Money | undefined
  total_money?: Money | undefined
  total_tax_money?: Money | undefined
  uid?: string | undefined
  variation_name?: string | undefined
  variation_total_price_money?: Money | undefined
}
type OrderMoneyAmounts = {
  discount_money?: Money | undefined
  service_charge_money?: Money | undefined
  tax_money?: Money | undefined
  tip_money?: Money | undefined
  total_money?: Money | undefined
}
type OrderPricingOptions = {
  auto_apply_discounts?: boolean | undefined
  auto_apply_taxes?: boolean | undefined
}
type AdditionalRecipient = {
  amount_money: Money
  description?: string | undefined
  location_id: string
  receivable_id?: string | undefined
}
type Refund = {
  additional_recipients?: AdditionalRecipient[] | undefined
  amount_money: Money
  created_at?: string | undefined
  id: string
  location_id: string
  processing_fee_money?: Money | undefined
  reason: string
  status: string
  tender_id: string
  transaction_id: string
}
type OrderReturnDiscount = {
  amount_money?: Money | undefined
  applied_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  name?: string | undefined
  percentage?: string | undefined
  scope?: string | undefined
  source_discount_uid?: string | undefined
  type?: string | undefined
  uid?: string | undefined
}
type OrderReturnLineItemModifier = {
  base_price_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  name?: string | undefined
  source_modifier_uid?: string | undefined
  total_price_money?: Money | undefined
  uid?: string | undefined
}
type OrderReturnLineItem = {
  applied_discounts?: OrderLineItemAppliedDiscount[] | undefined
  applied_taxes?: OrderLineItemAppliedTax[] | undefined
  base_price_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  gross_return_money?: Money | undefined
  item_type?: string | undefined
  name?: string | undefined
  note?: string | undefined
  quantity: string
  quantity_unit?: OrderQuantityUnit | undefined
  return_modifiers?: OrderReturnLineItemModifier[] | undefined
  source_line_item_uid?: string | undefined
  total_discount_money?: Money | undefined
  total_money?: Money | undefined
  total_tax_money?: Money | undefined
  uid?: string | undefined
  variation_name?: string | undefined
  variation_total_price_money?: Money | undefined
}
type OrderReturnServiceCharge = {
  amount_money?: Money | undefined
  applied_money?: Money | undefined
  applied_taxes?: OrderLineItemAppliedTax[] | undefined
  calculation_phase?: string | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  name?: string | undefined
  percentage?: string | undefined
  source_service_charge_uid?: string | undefined
  taxable?: boolean | undefined
  total_money?: Money | undefined
  total_tax_money?: Money | undefined
  uid?: string | undefined
}
type OrderReturnTax = {
  applied_money?: Money | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  name?: string | undefined
  percentage?: string | undefined
  scope?: string | undefined
  source_tax_uid?: string | undefined
  type?: string | undefined
  uid?: string | undefined
}
type OrderRoundingAdjustment = {
  amount_money?: Money | undefined
  name?: string | undefined
  uid?: string | undefined
}
type OrderReturn = {
  return_amounts?: OrderMoneyAmounts | undefined
  return_discounts?: OrderReturnDiscount[] | undefined
  return_line_items?: OrderReturnLineItem[] | undefined
  return_service_charges?: OrderReturnServiceCharge[] | undefined
  return_taxes?: OrderReturnTax[] | undefined
  rounding_adjustment?: OrderRoundingAdjustment | undefined
  source_order_id?: string | undefined
  uid?: string | undefined
}
type OrderReward = { id: string; reward_tier_id: string }
type OrderServiceCharge = {
  amount_money?: Money | undefined
  applied_money?: Money | undefined
  applied_taxes?: OrderLineItemAppliedTax[] | undefined
  calculation_phase?: string | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  percentage?: string | undefined
  taxable?: boolean | undefined
  total_money?: Money | undefined
  total_tax_money?: Money | undefined
  type?: string | undefined
  uid?: string | undefined
}
type OrderSource = { name?: string | undefined }
type OrderLineItemTax = {
  applied_money?: Money | undefined
  auto_applied?: boolean | undefined
  catalog_object_id?: string | undefined
  catalog_version?: bigint | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  percentage?: string | undefined
  scope?: string | undefined
  type?: string | undefined
  uid?: string | undefined
}
type TenderCardDetails = {
  card?: Card | undefined
  entry_method?: string | undefined
  status?: string | undefined
}
type TenderCashDetails = {
  buyer_tendered_money?: Money | undefined
  change_back_money?: Money | undefined
}
type Tender = {
  additional_recipients?: AdditionalRecipient[] | undefined
  amount_money?: Money | undefined
  card_details?: TenderCardDetails | undefined
  cash_details?: TenderCashDetails | undefined
  created_at?: string | undefined
  customer_id?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  note?: string | undefined
  payment_id?: string | undefined
  processing_fee_money?: Money | undefined
  tip_money?: Money | undefined
  transaction_id?: string | undefined
  type: string
}
type Order = {
  closed_at?: string | undefined
  created_at?: string | undefined
  customer_id?: string | undefined
  discounts?: OrderLineItemDiscount[] | undefined
  fulfillments?: OrderFulfillment[] | undefined
  id?: string | undefined
  line_items?: OrderLineItem[] | undefined
  location_id: string
  metadata?: { [x: string]: string } | undefined
  net_amounts?: OrderMoneyAmounts | undefined
  pricing_options?: OrderPricingOptions | undefined
  reference_id?: string | undefined
  refunds?: Refund[] | undefined
  return_amounts?: OrderMoneyAmounts | undefined
  returns?: OrderReturn[] | undefined
  rewards?: OrderReward[] | undefined
  rounding_adjustment?: OrderRoundingAdjustment | undefined
  service_charges?: OrderServiceCharge[] | undefined
  source?: OrderSource | undefined
  state?: string | undefined
  taxes?: OrderLineItemTax[] | undefined
  tenders?: Tender[] | undefined
  total_discount_money?: Money | undefined
  total_money?: Money | undefined
  total_service_charge_money?: Money | undefined
  total_tax_money?: Money | undefined
  total_tip_money?: Money | undefined
  updated_at?: string | undefined
  version?: number | undefined
}
type CreateOrderRequest = { idempotency_key?: string | undefined; order?: Order | undefined }
type CreateCheckoutRequest = {
  additional_recipients?: ChargeRequestAdditionalRecipient[] | undefined
  ask_for_shipping_address?: boolean | undefined
  idempotency_key: string
  merchant_support_email?: string | undefined
  note?: string | undefined
  order: CreateOrderRequest
  pre_populate_buyer_email?: string | undefined
  pre_populate_shipping_address?: Address | undefined
  redirect_url?: string | undefined
}
type Checkout = {
  additional_recipients?: AdditionalRecipient[] | undefined
  ask_for_shipping_address?: boolean | undefined
  checkout_page_url?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  merchant_support_email?: string | undefined
  order?: Order | undefined
  pre_populate_buyer_email?: string | undefined
  pre_populate_shipping_address?: Address | undefined
  redirect_url?: string | undefined
}
type CreateCheckoutResponse = { checkout?: Checkout | undefined; errors?: Error[] | undefined }
type ListRefundsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  refunds?: Refund[] | undefined
}
type Transaction = {
  client_id?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  order_id?: string | undefined
  product?: string | undefined
  reference_id?: string | undefined
  refunds?: Refund[] | undefined
  shipping_address?: Address | undefined
  tenders?: Tender[] | undefined
}
type ListTransactionsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  transactions?: Transaction[] | undefined
}
type ChargeRequest = {
  additional_recipients?: AdditionalRecipient[] | undefined
  amount_money: Money
  billing_address?: Address | undefined
  buyer_email_address?: string | undefined
  card_nonce?: string | undefined
  customer_card_id?: string | undefined
  customer_id?: string | undefined
  delay_capture?: boolean | undefined
  idempotency_key: string
  note?: string | undefined
  order_id?: string | undefined
  reference_id?: string | undefined
  shipping_address?: Address | undefined
  verification_token?: string | undefined
}
type ChargeResponse = { errors?: Error[] | undefined; transaction?: Transaction | undefined }
type RetrieveTransactionResponse = {
  errors?: Error[] | undefined
  transaction?: Transaction | undefined
}
type CaptureTransactionResponse = { errors?: Error[] | undefined }
type CreateRefundRequest = {
  amount_money: Money
  idempotency_key: string
  reason?: string | undefined
  tender_id: string
}
type CreateRefundResponse = { errors?: Error[] | undefined; refund?: Refund | undefined }
type VoidTransactionResponse = { errors?: Error[] | undefined }
type LoyaltyAccountExpiringPointDeadline = { expires_at: string; points: number }
type LoyaltyAccountMapping = {
  created_at?: string | undefined
  id?: string | undefined
  phone_number?: string | undefined
}
type LoyaltyAccount = {
  balance?: number | undefined
  created_at?: string | undefined
  customer_id?: string | undefined
  enrolled_at?: string | undefined
  expiring_point_deadlines?: LoyaltyAccountExpiringPointDeadline[] | undefined
  id?: string | undefined
  lifetime_points?: number | undefined
  mapping?: LoyaltyAccountMapping | undefined
  program_id: string
  updated_at?: string | undefined
}
type CreateLoyaltyAccountRequest = { idempotency_key: string; loyalty_account: LoyaltyAccount }
type CreateLoyaltyAccountResponse = {
  errors?: Error[] | undefined
  loyalty_account?: LoyaltyAccount | undefined
}
type SearchLoyaltyAccountsRequestLoyaltyAccountQuery = {
  customer_ids?: string[] | undefined
  mappings?: LoyaltyAccountMapping[] | undefined
}
type SearchLoyaltyAccountsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: SearchLoyaltyAccountsRequestLoyaltyAccountQuery | undefined
}
type SearchLoyaltyAccountsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  loyalty_accounts?: LoyaltyAccount[] | undefined
}
type RetrieveLoyaltyAccountResponse = {
  errors?: Error[] | undefined
  loyalty_account?: LoyaltyAccount | undefined
}
type LoyaltyEventAccumulatePoints = {
  loyalty_program_id?: string | undefined
  order_id?: string | undefined
  points?: number | undefined
}
type AccumulateLoyaltyPointsRequest = {
  accumulate_points: LoyaltyEventAccumulatePoints
  idempotency_key: string
  location_id: string
}
type LoyaltyEventAdjustPoints = {
  loyalty_program_id?: string | undefined
  points: number
  reason?: string | undefined
}
type LoyaltyEventCreateReward = {
  loyalty_program_id: string
  points: number
  reward_id?: string | undefined
}
type LoyaltyEventDeleteReward = {
  loyalty_program_id: string
  points: number
  reward_id?: string | undefined
}
type LoyaltyEventExpirePoints = { loyalty_program_id: string; points: number }
type LoyaltyEventOther = { loyalty_program_id: string; points: number }
type LoyaltyEventRedeemReward = {
  loyalty_program_id: string
  order_id?: string | undefined
  reward_id?: string | undefined
}
type LoyaltyEvent = {
  accumulate_points?: LoyaltyEventAccumulatePoints | undefined
  adjust_points?: LoyaltyEventAdjustPoints | undefined
  create_reward?: LoyaltyEventCreateReward | undefined
  created_at: string
  delete_reward?: LoyaltyEventDeleteReward | undefined
  expire_points?: LoyaltyEventExpirePoints | undefined
  id: string
  location_id?: string | undefined
  loyalty_account_id: string
  other_event?: LoyaltyEventOther | undefined
  redeem_reward?: LoyaltyEventRedeemReward | undefined
  source: string
  type: string
}
type AccumulateLoyaltyPointsResponse = {
  errors?: Error[] | undefined
  event?: LoyaltyEvent | undefined
}
type AdjustLoyaltyPointsRequest = {
  adjust_points: LoyaltyEventAdjustPoints
  idempotency_key: string
}
type AdjustLoyaltyPointsResponse = {
  errors?: Error[] | undefined
  event?: LoyaltyEvent | undefined
}
type LoyaltyEventDateTimeFilter = { created_at: TimeRange }
type LoyaltyEventLocationFilter = { location_ids: string[] }
type LoyaltyEventLoyaltyAccountFilter = { loyalty_account_id: string }
type LoyaltyEventOrderFilter = { order_id: string }
type LoyaltyEventTypeFilter = { types: string[] }
type LoyaltyEventFilter = {
  date_time_filter?: LoyaltyEventDateTimeFilter | undefined
  location_filter?: LoyaltyEventLocationFilter | undefined
  loyalty_account_filter?: LoyaltyEventLoyaltyAccountFilter | undefined
  order_filter?: LoyaltyEventOrderFilter | undefined
  type_filter?: LoyaltyEventTypeFilter | undefined
}
type LoyaltyEventQuery = { filter?: LoyaltyEventFilter | undefined }
type SearchLoyaltyEventsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: LoyaltyEventQuery | undefined
}
type SearchLoyaltyEventsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  events?: LoyaltyEvent[] | undefined
}
type LoyaltyProgramAccrualRule = {
  accrual_type: string
  catalog_object_id?: string | undefined
  excluded_category_ids?: string[] | undefined
  excluded_item_variation_ids?: string[] | undefined
  points?: number | undefined
  spend_amount_money?: Money | undefined
  visit_minimum_amount_money?: Money | undefined
}
type LoyaltyProgramExpirationPolicy = { expiration_duration: string }
type LoyaltyProgramRewardDefinition = {
  catalog_object_ids?: string[] | undefined
  discount_type: string
  fixed_discount_money?: Money | undefined
  max_discount_money?: Money | undefined
  percentage_discount?: string | undefined
  scope: string
}
type CatalogObjectReference = {
  catalog_version?: bigint | undefined
  object_id?: string | undefined
}
type LoyaltyProgramRewardTier = {
  created_at: string
  definition: LoyaltyProgramRewardDefinition
  id: string
  name: string
  points: number
  pricing_rule_reference?: CatalogObjectReference | undefined
}
type LoyaltyProgramTerminology = { one: string; other: string }
type LoyaltyProgram = {
  accrual_rules: LoyaltyProgramAccrualRule[]
  created_at: string
  expiration_policy?: LoyaltyProgramExpirationPolicy | undefined
  id: string
  location_ids: string[]
  reward_tiers: LoyaltyProgramRewardTier[]
  status: string
  terminology: LoyaltyProgramTerminology
  updated_at: string
}
type ListLoyaltyProgramsResponse = {
  errors?: Error[] | undefined
  programs?: LoyaltyProgram[] | undefined
}
type RetrieveLoyaltyProgramResponse = {
  errors?: Error[] | undefined
  program?: LoyaltyProgram | undefined
}
type CalculateLoyaltyPointsRequest = {
  order_id?: string | undefined
  transaction_amount_money?: Money | undefined
}
type CalculateLoyaltyPointsResponse = { errors?: Error[] | undefined; points?: number | undefined }
type LoyaltyReward = {
  created_at?: string | undefined
  id?: string | undefined
  loyalty_account_id: string
  order_id?: string | undefined
  points?: number | undefined
  redeemed_at?: string | undefined
  reward_tier_id: string
  status?: string | undefined
  updated_at?: string | undefined
}
type CreateLoyaltyRewardRequest = { idempotency_key: string; reward: LoyaltyReward }
type CreateLoyaltyRewardResponse = {
  errors?: Error[] | undefined
  reward?: LoyaltyReward | undefined
}
type SearchLoyaltyRewardsRequestLoyaltyRewardQuery = {
  loyalty_account_id: string
  status?: string | undefined
}
type SearchLoyaltyRewardsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery | undefined
}
type SearchLoyaltyRewardsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  rewards?: LoyaltyReward[] | undefined
}
type DeleteLoyaltyRewardResponse = { errors?: Error[] | undefined }
type RetrieveLoyaltyRewardResponse = {
  errors?: Error[] | undefined
  reward?: LoyaltyReward | undefined
}
type RedeemLoyaltyRewardRequest = { idempotency_key: string; location_id: string }
type RedeemLoyaltyRewardResponse = {
  errors?: Error[] | undefined
  event?: LoyaltyEvent | undefined
}
type Merchant = {
  business_name?: string | undefined
  country: string
  currency?: string | undefined
  id?: string | undefined
  language_code?: string | undefined
  main_location_id?: string | undefined
  status?: string | undefined
}
type ListMerchantsResponse = {
  cursor?: number | undefined
  errors?: Error[] | undefined
  merchant?: Merchant[] | undefined
}
type RetrieveMerchantResponse = { errors?: Error[] | undefined; merchant?: Merchant | undefined }
type CreateOrderResponse = { errors?: Error[] | undefined; order?: Order | undefined }
type BatchRetrieveOrdersRequest = { location_id?: string | undefined; order_ids: string[] }
type BatchRetrieveOrdersResponse = { errors?: Error[] | undefined; orders?: Order[] | undefined }
type CalculateOrderRequest = { order: Order; proposed_rewards?: OrderReward[] | undefined }
type CalculateOrderResponse = { errors?: Error[] | undefined; order?: Order | undefined }
type SearchOrdersCustomerFilter = { customer_ids?: string[] | undefined }
type SearchOrdersDateTimeFilter = {
  closed_at?: TimeRange | undefined
  created_at?: TimeRange | undefined
  updated_at?: TimeRange | undefined
}
type SearchOrdersFulfillmentFilter = {
  fulfillment_states?: string[] | undefined
  fulfillment_types?: string[] | undefined
}
type SearchOrdersSourceFilter = { source_names?: string[] | undefined }
type SearchOrdersStateFilter = { states: string[] }
type SearchOrdersFilter = {
  customer_filter?: SearchOrdersCustomerFilter | undefined
  date_time_filter?: SearchOrdersDateTimeFilter | undefined
  fulfillment_filter?: SearchOrdersFulfillmentFilter | undefined
  source_filter?: SearchOrdersSourceFilter | undefined
  state_filter?: SearchOrdersStateFilter | undefined
}
type SearchOrdersSort = { sort_field: string; sort_order?: string | undefined }
type SearchOrdersQuery = {
  filter?: SearchOrdersFilter | undefined
  sort?: SearchOrdersSort | undefined
}
type SearchOrdersRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  location_ids?: string[] | undefined
  query?: SearchOrdersQuery | undefined
  return_entries?: boolean | undefined
}
type OrderEntry = {
  location_id?: string | undefined
  order_id?: string | undefined
  version?: number | undefined
}
type SearchOrdersResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  order_entries?: OrderEntry[] | undefined
  orders?: Order[] | undefined
}
type RetrieveOrderResponse = { errors?: Error[] | undefined; order?: Order | undefined }
type UpdateOrderRequest = {
  fields_to_clear?: string[] | undefined
  idempotency_key?: string | undefined
  order?: Order | undefined
}
type UpdateOrderResponse = { errors?: Error[] | undefined; order?: Order | undefined }
type PayOrderRequest = {
  idempotency_key: string
  order_version?: number | undefined
  payment_ids?: string[] | undefined
}
type PayOrderResponse = { errors?: Error[] | undefined; order?: Order | undefined }
type ACHDetails = {
  account_number_suffix?: string | undefined
  account_type?: string | undefined
  routing_number?: string | undefined
}
type BankAccountPaymentDetails = {
  account_ownership_type?: string | undefined
  ach_details?: ACHDetails | undefined
  bank_name?: string | undefined
  country?: string | undefined
  errors?: Error[] | undefined
  fingerprint?: string | undefined
  statement_description?: string | undefined
  transfer_type?: string | undefined
}
type CardPaymentTimeline = {
  authorized_at?: string | undefined
  captured_at?: string | undefined
  voided_at?: string | undefined
}
type DeviceDetails = {
  device_id?: string | undefined
  device_installation_id?: string | undefined
  device_name?: string | undefined
}
type CardPaymentDetails = {
  application_cryptogram?: string | undefined
  application_identifier?: string | undefined
  application_name?: string | undefined
  auth_result_code?: string | undefined
  avs_status?: string | undefined
  card?: Card | undefined
  card_payment_timeline?: CardPaymentTimeline | undefined
  cvv_status?: string | undefined
  device_details?: DeviceDetails | undefined
  entry_method?: string | undefined
  errors?: Error[] | undefined
  refund_requires_card_presence?: boolean | undefined
  statement_description?: string | undefined
  status?: string | undefined
  verification_method?: string | undefined
  verification_results?: string | undefined
}
type CashPaymentDetails = { buyer_supplied_money: Money; change_back_money?: Money | undefined }
type ExternalPaymentDetails = {
  source: string
  source_fee_money?: Money | undefined
  source_id?: string | undefined
  type: string
}
type ProcessingFee = {
  amount_money?: Money | undefined
  effective_at?: string | undefined
  type?: string | undefined
}
type RiskEvaluation = { created_at?: string | undefined; risk_level?: string | undefined }
type DigitalWalletDetails = { status?: string | undefined }
type Payment = {
  amount_money?: Money | undefined
  app_fee_money?: Money | undefined
  approved_money?: Money | undefined
  bank_account_details?: BankAccountPaymentDetails | undefined
  billing_address?: Address | undefined
  buyer_email_address?: string | undefined
  capabilities?: string[] | undefined
  card_details?: CardPaymentDetails | undefined
  cash_details?: CashPaymentDetails | undefined
  created_at?: string | undefined
  customer_id?: string | undefined
  delay_action?: string | undefined
  delay_duration?: string | undefined
  delayed_until?: string | undefined
  employee_id?: string | undefined
  external_details?: ExternalPaymentDetails | undefined
  id?: string | undefined
  location_id?: string | undefined
  note?: string | undefined
  order_id?: string | undefined
  processing_fee?: ProcessingFee[] | undefined
  receipt_number?: string | undefined
  receipt_url?: string | undefined
  reference_id?: string | undefined
  refund_ids?: string[] | undefined
  refunded_money?: Money | undefined
  risk_evaluation?: RiskEvaluation | undefined
  shipping_address?: Address | undefined
  source_type?: string | undefined
  statement_description_identifier?: string | undefined
  status?: string | undefined
  tip_money?: Money | undefined
  total_money?: Money | undefined
  updated_at?: string | undefined
  version_token?: string | undefined
  wallet_details?: DigitalWalletDetails | undefined
}
type ListPaymentsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  payments?: Payment[] | undefined
}
type CreatePaymentRequest = {
  accept_partial_authorization?: boolean | undefined
  amount_money: Money
  app_fee_money?: Money | undefined
  autocomplete?: boolean | undefined
  billing_address?: Address | undefined
  buyer_email_address?: string | undefined
  cash_details?: CashPaymentDetails | undefined
  customer_id?: string | undefined
  delay_duration?: string | undefined
  external_details?: ExternalPaymentDetails | undefined
  idempotency_key: string
  location_id?: string | undefined
  note?: string | undefined
  order_id?: string | undefined
  reference_id?: string | undefined
  shipping_address?: Address | undefined
  source_id: string
  statement_description_identifier?: string | undefined
  tip_money?: Money | undefined
  verification_token?: string | undefined
}
type CreatePaymentResponse = { errors?: Error[] | undefined; payment?: Payment | undefined }
type CancelPaymentByIdempotencyKeyRequest = { idempotency_key: string }
type CancelPaymentByIdempotencyKeyResponse = { errors?: Error[] | undefined }
type GetPaymentResponse = { errors?: Error[] | undefined; payment?: Payment | undefined }
type UpdatePaymentRequest = { idempotency_key: string; payment?: Payment | undefined }
type UpdatePaymentResponse = { errors?: Error[] | undefined; payment?: Payment | undefined }
type CancelPaymentResponse = { errors?: Error[] | undefined; payment?: Payment | undefined }
type CompletePaymentResponse = { errors?: Error[] | undefined; payment?: Payment | undefined }
type PaymentRefund = {
  amount_money: Money
  app_fee_money?: Money | undefined
  created_at?: string | undefined
  id: string
  location_id?: string | undefined
  order_id?: string | undefined
  payment_id?: string | undefined
  processing_fee?: ProcessingFee[] | undefined
  reason?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type ListPaymentRefundsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  refunds?: PaymentRefund[] | undefined
}
type RefundPaymentRequest = {
  amount_money: Money
  app_fee_money?: Money | undefined
  idempotency_key: string
  payment_id: string
  reason?: string | undefined
}
type RefundPaymentResponse = { errors?: Error[] | undefined; refund?: PaymentRefund | undefined }
type GetPaymentRefundResponse = { errors?: Error[] | undefined; refund?: PaymentRefund | undefined }
type Site = {
  created_at?: string | undefined
  domain?: string | undefined
  id?: string | undefined
  is_published?: boolean | undefined
  site_title?: string | undefined
  updated_at?: string | undefined
}
type ListSitesResponse = { errors?: Error[] | undefined; sites?: Site[] | undefined }
type DeleteSnippetResponse = { errors?: Error[] | undefined }
type Snippet = {
  content: string
  created_at?: string | undefined
  id?: string | undefined
  site_id?: string | undefined
  updated_at?: string | undefined
}
type RetrieveSnippetResponse = { errors?: Error[] | undefined; snippet?: Snippet | undefined }
type UpsertSnippetRequest = { snippet: Snippet }
type UpsertSnippetResponse = { errors?: Error[] | undefined; snippet?: Snippet | undefined }
type CreateSubscriptionRequest = {
  canceled_date?: string | undefined
  card_id?: string | undefined
  customer_id: string
  idempotency_key?: string | undefined
  location_id: string
  plan_id: string
  price_override_money?: Money | undefined
  start_date?: string | undefined
  tax_percentage?: string | undefined
  timezone?: string | undefined
}
type Subscription = {
  canceled_date?: string | undefined
  card_id?: string | undefined
  charged_through_date?: string | undefined
  created_at?: string | undefined
  customer_id?: string | undefined
  id?: string | undefined
  invoice_ids?: string[] | undefined
  location_id?: string | undefined
  plan_id?: string | undefined
  price_override_money?: Money | undefined
  start_date?: string | undefined
  status?: string | undefined
  tax_percentage?: string | undefined
  timezone?: string | undefined
  version?: bigint | undefined
}
type CreateSubscriptionResponse = {
  errors?: Error[] | undefined
  subscription?: Subscription | undefined
}
type SearchSubscriptionsFilter = {
  customer_ids?: string[] | undefined
  location_ids?: string[] | undefined
}
type SearchSubscriptionsQuery = { filter?: SearchSubscriptionsFilter | undefined }
type SearchSubscriptionsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: SearchSubscriptionsQuery | undefined
}
type SearchSubscriptionsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  subscriptions?: Subscription[] | undefined
}
type RetrieveSubscriptionResponse = {
  errors?: Error[] | undefined
  subscription?: Subscription | undefined
}
type UpdateSubscriptionRequest = { subscription?: Subscription | undefined }
type UpdateSubscriptionResponse = {
  errors?: Error[] | undefined
  subscription?: Subscription | undefined
}
type CancelSubscriptionResponse = {
  errors?: Error[] | undefined
  subscription?: Subscription | undefined
}
type Info = { [x: string]: unknown }
type SubscriptionEvent = {
  effective_date: string
  id: string
  info?: Info | undefined
  plan_id: string
  subscription_event_type: string
}
type ListSubscriptionEventsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  subscription_events?: SubscriptionEvent[] | undefined
}
type ResumeSubscriptionResponse = {
  errors?: Error[] | undefined
  subscription?: Subscription | undefined
}
type TeamMemberAssignedLocations = {
  assignment_type?: string | undefined
  location_ids?: string[] | undefined
}
type TeamMember = {
  assigned_locations?: TeamMemberAssignedLocations | undefined
  created_at?: string | undefined
  email_address?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
  id?: string | undefined
  is_owner?: boolean | undefined
  phone_number?: string | undefined
  reference_id?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type CreateTeamMemberRequest = {
  idempotency_key?: string | undefined
  team_member?: TeamMember | undefined
}
type CreateTeamMemberResponse = {
  errors?: Error[] | undefined
  team_member?: TeamMember | undefined
}
type BulkCreateTeamMembersRequest = { team_members: { [x: string]: CreateTeamMemberRequest } }
type BulkCreateTeamMembersResponse = {
  errors?: Error[] | undefined
  team_members?: { [x: string]: CreateTeamMemberResponse } | undefined
}
type UpdateTeamMemberRequest = { team_member?: TeamMember | undefined }
type BulkUpdateTeamMembersRequest = { team_members: { [x: string]: UpdateTeamMemberRequest } }
type UpdateTeamMemberResponse = {
  errors?: Error[] | undefined
  team_member?: TeamMember | undefined
}
type BulkUpdateTeamMembersResponse = {
  errors?: Error[] | undefined
  team_members?: { [x: string]: UpdateTeamMemberResponse } | undefined
}
type SearchTeamMembersFilter = { location_ids?: string[] | undefined; status?: string | undefined }
type SearchTeamMembersQuery = { filter?: SearchTeamMembersFilter | undefined }
type SearchTeamMembersRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: SearchTeamMembersQuery | undefined
}
type SearchTeamMembersResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  team_members?: TeamMember[] | undefined
}
type RetrieveTeamMemberResponse = {
  errors?: Error[] | undefined
  team_member?: TeamMember | undefined
}
type JobAssignment = {
  annual_rate?: Money | undefined
  hourly_rate?: Money | undefined
  job_title: string
  pay_type: string
  weekly_hours?: number | undefined
}
type WageSetting = {
  created_at?: string | undefined
  is_overtime_exempt?: boolean | undefined
  job_assignments?: JobAssignment[] | undefined
  team_member_id?: string | undefined
  updated_at?: string | undefined
  version?: number | undefined
}
type RetrieveWageSettingResponse = {
  errors?: Error[] | undefined
  wage_setting?: WageSetting | undefined
}
type UpdateWageSettingRequest = { wage_setting: WageSetting }
type UpdateWageSettingResponse = {
  errors?: Error[] | undefined
  wage_setting?: WageSetting | undefined
}
type TipSettings = {
  allow_tipping?: boolean | undefined
  custom_tip_field?: boolean | undefined
  separate_tip_screen?: boolean | undefined
  smart_tipping?: boolean | undefined
  tip_percentages?: number[] | undefined
}
type DeviceCheckoutOptions = {
  device_id: string
  skip_receipt_screen?: boolean | undefined
  tip_settings?: TipSettings | undefined
}
type TerminalCheckout = {
  amount_money: Money
  app_id?: string | undefined
  cancel_reason?: string | undefined
  created_at?: string | undefined
  deadline_duration?: string | undefined
  device_options: DeviceCheckoutOptions
  id?: string | undefined
  location_id?: string | undefined
  note?: string | undefined
  payment_ids?: string[] | undefined
  payment_type?: string | undefined
  reference_id?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type CreateTerminalCheckoutRequest = { checkout: TerminalCheckout; idempotency_key: string }
type CreateTerminalCheckoutResponse = {
  checkout?: TerminalCheckout | undefined
  errors?: Error[] | undefined
}
type TerminalCheckoutQueryFilter = {
  created_at?: TimeRange | undefined
  device_id?: string | undefined
  status?: string | undefined
}
type TerminalCheckoutQuerySort = { sort_order?: string | undefined }
type TerminalCheckoutQuery = {
  filter?: TerminalCheckoutQueryFilter | undefined
  sort?: TerminalCheckoutQuerySort | undefined
}
type SearchTerminalCheckoutsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: TerminalCheckoutQuery | undefined
}
type SearchTerminalCheckoutsResponse = {
  checkouts?: TerminalCheckout[] | undefined
  cursor?: string | undefined
  errors?: Error[] | undefined
}
type GetTerminalCheckoutResponse = {
  checkout?: TerminalCheckout | undefined
  errors?: Error[] | undefined
}
type CancelTerminalCheckoutResponse = {
  checkout?: TerminalCheckout | undefined
  errors?: Error[] | undefined
}
type TerminalRefund = {
  amount_money: Money
  app_id?: string | undefined
  cancel_reason?: string | undefined
  created_at?: string | undefined
  deadline_duration?: string | undefined
  device_id?: string | undefined
  id?: string | undefined
  location_id?: string | undefined
  order_id?: string | undefined
  payment_id: string
  reason?: string | undefined
  refund_id?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type CreateTerminalRefundRequest = { idempotency_key: string; refund?: TerminalRefund | undefined }
type CreateTerminalRefundResponse = {
  errors?: Error[] | undefined
  refund?: TerminalRefund | undefined
}
type TerminalRefundQueryFilter = {
  created_at?: TimeRange | undefined
  device_id?: string | undefined
  status?: string | undefined
}
type TerminalRefundQuerySort = { sort_order?: string | undefined }
type TerminalRefundQuery = {
  filter?: TerminalRefundQueryFilter | undefined
  sort?: TerminalRefundQuerySort | undefined
}
type SearchTerminalRefundsRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: TerminalRefundQuery | undefined
}
type SearchTerminalRefundsResponse = {
  cursor?: string | undefined
  errors?: Error[] | undefined
  refunds?: TerminalRefund[] | undefined
}
type GetTerminalRefundResponse = {
  errors?: Error[] | undefined
  refund?: TerminalRefund | undefined
}
type CancelTerminalRefundResponse = {
  errors?: Error[] | undefined
  refund?: TerminalRefund | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/mobile/authorization-code': {
      $post: {
        input: { json: CreateMobileAuthorizationCodeRequest }
        output: CreateMobileAuthorizationCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/clients/:client_id/access-token/renew': {
      $post: {
        input: { param: { client_id: string } } & { json: RenewTokenRequest }
        output: RenewTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/revoke': {
      $post: {
        input: { json: RevokeTokenRequest }
        output: RevokeTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/token': {
      $post: {
        input: { json: ObtainTokenRequest }
        output: ObtainTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/me/employees': {
      $get: {
        input: {
          query: {
            order?: string | undefined
            begin_updated_at?: string | undefined
            end_updated_at?: string | undefined
            begin_created_at?: string | undefined
            end_created_at?: string | undefined
            status?: string | undefined
            external_id?: string | undefined
            limit?: number | undefined
            batch_token?: string | undefined
          }
        }
        output: V1Employee[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: V1Employee }; output: V1Employee; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/me/employees/:employee_id': {
      $get: {
        input: { param: { employee_id: string } }
        output: V1Employee
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { employee_id: string } } & { json: V1Employee }
        output: V1Employee
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/me/roles': {
      $get: {
        input: {
          query: {
            order?: string | undefined
            limit?: number | undefined
            batch_token?: string | undefined
          }
        }
        output: V1EmployeeRole[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: V1EmployeeRole }
        output: V1EmployeeRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/me/roles/:role_id': {
      $get: {
        input: { param: { role_id: string } }
        output: V1EmployeeRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { role_id: string } } & { json: V1EmployeeRole }
        output: V1EmployeeRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/orders': {
      $get: {
        input: { param: { location_id: string } } & {
          query: {
            order?: string | undefined
            limit?: number | undefined
            batch_token?: string | undefined
          }
        }
        output: V1Order[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/orders/:order_id': {
      $get: {
        input: { param: { location_id: string; order_id: string } }
        output: V1Order
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { location_id: string; order_id: string } } & { json: V1UpdateOrderRequest }
        output: V1Order
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/payments': {
      $get: {
        input: { param: { location_id: string } } & {
          query: {
            order?: string | undefined
            begin_time?: string | undefined
            end_time?: string | undefined
            limit?: number | undefined
            batch_token?: string | undefined
            include_partial?: boolean | undefined
          }
        }
        output: V1Payment[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/payments/:payment_id': {
      $get: {
        input: { param: { location_id: string; payment_id: string } }
        output: V1Payment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/refunds': {
      $get: {
        input: { param: { location_id: string } } & {
          query: {
            order?: string | undefined
            begin_time?: string | undefined
            end_time?: string | undefined
            limit?: number | undefined
            batch_token?: string | undefined
          }
        }
        output: V1Refund[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { location_id: string } } & { json: V1CreateRefundRequest }
        output: V1Refund
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/settlements': {
      $get: {
        input: { param: { location_id: string } } & {
          query: {
            order?: string | undefined
            begin_time?: string | undefined
            end_time?: string | undefined
            limit?: number | undefined
            status?: string | undefined
            batch_token?: string | undefined
          }
        }
        output: V1Settlement[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location_id/settlements/:settlement_id': {
      $get: {
        input: { param: { location_id: string; settlement_id: string } }
        output: V1Settlement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apple-pay/domains': {
      $post: {
        input: { json: RegisterDomainRequest }
        output: RegisterDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bank-accounts': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            location_id?: string | undefined
          }
        }
        output: ListBankAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bank-accounts/by-v1-id/:v1_bank_account_id': {
      $get: {
        input: { param: { v1_bank_account_id: string } }
        output: GetBankAccountByV1IdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bank-accounts/:bank_account_id': {
      $get: {
        input: { param: { bank_account_id: string } }
        output: GetBankAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings': {
      $post: {
        input: { json: CreateBookingRequest }
        output: CreateBookingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/availability/search': {
      $post: {
        input: { json: SearchAvailabilityRequest }
        output: SearchAvailabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/business-booking-profile': {
      $get: {
        input: {}
        output: RetrieveBusinessBookingProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/team-member-booking-profiles': {
      $get: {
        input: {
          query: {
            bookable_only?: boolean | undefined
            limit?: number | undefined
            cursor?: string | undefined
            location_id?: string | undefined
          }
        }
        output: ListTeamMemberBookingProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/team-member-booking-profiles/:team_member_id': {
      $get: {
        input: { param: { team_member_id: string } }
        output: RetrieveTeamMemberBookingProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:booking_id': {
      $get: {
        input: { param: { booking_id: string } }
        output: RetrieveBookingResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { booking_id: string } } & { json: UpdateBookingRequest }
        output: UpdateBookingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bookings/:booking_id/cancel': {
      $post: {
        input: { param: { booking_id: string } } & { json: CancelBookingRequest }
        output: CancelBookingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/cards': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            customer_id?: string | undefined
            include_disabled?: boolean | undefined
            reference_id?: string | undefined
            sort_order?: string | undefined
          }
        }
        output: ListCardsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateCardRequest }
        output: CreateCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/cards/:card_id': {
      $get: {
        input: { param: { card_id: string } }
        output: RetrieveCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/cards/:card_id/disable': {
      $post: {
        input: { param: { card_id: string } }
        output: DisableCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/cash-drawers/shifts': {
      $get: {
        input: {
          query: {
            location_id: string
            sort_order?: string | undefined
            begin_time?: string | undefined
            end_time?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: ListCashDrawerShiftsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/cash-drawers/shifts/:shift_id': {
      $get: {
        input: { param: { shift_id: string } } & { query: { location_id: string } }
        output: RetrieveCashDrawerShiftResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/cash-drawers/shifts/:shift_id/events': {
      $get: {
        input: { param: { shift_id: string } } & {
          query: { location_id: string; limit?: number | undefined; cursor?: string | undefined }
        }
        output: ListCashDrawerShiftEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/batch-delete': {
      $post: {
        input: { json: BatchDeleteCatalogObjectsRequest }
        output: BatchDeleteCatalogObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/batch-retrieve': {
      $post: {
        input: { json: BatchRetrieveCatalogObjectsRequest }
        output: BatchRetrieveCatalogObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/batch-upsert': {
      $post: {
        input: { json: BatchUpsertCatalogObjectsRequest }
        output: BatchUpsertCatalogObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/info': {
      $get: { input: {}; output: CatalogInfoResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/catalog/list': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            types?: string | undefined
            catalog_version?: bigint | undefined
          }
        }
        output: ListCatalogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/object': {
      $post: {
        input: { json: UpsertCatalogObjectRequest }
        output: UpsertCatalogObjectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/object/:object_id': {
      $delete: {
        input: { param: { object_id: string } }
        output: DeleteCatalogObjectResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { object_id: string } } & {
          query: {
            include_related_objects?: boolean | undefined
            catalog_version?: bigint | undefined
          }
        }
        output: RetrieveCatalogObjectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/search': {
      $post: {
        input: { json: SearchCatalogObjectsRequest }
        output: SearchCatalogObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/search-catalog-items': {
      $post: {
        input: { json: SearchCatalogItemsRequest }
        output: SearchCatalogItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/update-item-modifier-lists': {
      $post: {
        input: { json: UpdateItemModifierListsRequest }
        output: UpdateItemModifierListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/catalog/update-item-taxes': {
      $post: {
        input: { json: UpdateItemTaxesRequest }
        output: UpdateItemTaxesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            sort_field?: string | undefined
            sort_order?: string | undefined
          }
        }
        output: ListCustomersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateCustomerRequest }
        output: CreateCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/groups': {
      $get: {
        input: { query: { cursor?: string | undefined; limit?: number | undefined } }
        output: ListCustomerGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateCustomerGroupRequest }
        output: CreateCustomerGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/groups/:group_id': {
      $delete: {
        input: { param: { group_id: string } }
        output: DeleteCustomerGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { group_id: string } }
        output: RetrieveCustomerGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { group_id: string } } & { json: UpdateCustomerGroupRequest }
        output: UpdateCustomerGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/search': {
      $post: {
        input: { json: SearchCustomersRequest }
        output: SearchCustomersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/segments': {
      $get: {
        input: { query: { cursor?: string | undefined; limit?: number | undefined } }
        output: ListCustomerSegmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/segments/:segment_id': {
      $get: {
        input: { param: { segment_id: string } }
        output: RetrieveCustomerSegmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/:customer_id': {
      $delete: {
        input: { param: { customer_id: string } } & { query: { version?: bigint | undefined } }
        output: DeleteCustomerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { customer_id: string } }
        output: RetrieveCustomerResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customer_id: string } } & { json: UpdateCustomerRequest }
        output: UpdateCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/:customer_id/cards': {
      $post: {
        input: { param: { customer_id: string } } & { json: CreateCustomerCardRequest }
        output: CreateCustomerCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/:customer_id/cards/:card_id': {
      $delete: {
        input: { param: { customer_id: string; card_id: string } }
        output: DeleteCustomerCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customers/:customer_id/groups/:group_id': {
      $delete: {
        input: { param: { customer_id: string; group_id: string } }
        output: RemoveGroupFromCustomerResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { customer_id: string; group_id: string } }
        output: AddGroupToCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/devices/codes': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            location_id?: string | undefined
            product_type?: string | undefined
            status?: string | undefined
          }
        }
        output: ListDeviceCodesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateDeviceCodeRequest }
        output: CreateDeviceCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/devices/codes/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetDeviceCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            states?: string | undefined
            location_id?: string | undefined
          }
        }
        output: ListDisputesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes/:dispute_id': {
      $get: {
        input: { param: { dispute_id: string } }
        output: RetrieveDisputeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes/:dispute_id/accept': {
      $post: {
        input: { param: { dispute_id: string } }
        output: AcceptDisputeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes/:dispute_id/evidence': {
      $get: {
        input: { param: { dispute_id: string } } & { query: { cursor?: string | undefined } }
        output: ListDisputeEvidenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes/:dispute_id/evidence-text': {
      $post: {
        input: { param: { dispute_id: string } } & { json: CreateDisputeEvidenceTextRequest }
        output: CreateDisputeEvidenceTextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes/:dispute_id/evidence/:evidence_id': {
      $delete: {
        input: { param: { dispute_id: string; evidence_id: string } }
        output: DeleteDisputeEvidenceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { dispute_id: string; evidence_id: string } }
        output: RetrieveDisputeEvidenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/disputes/:dispute_id/submit-evidence': {
      $post: {
        input: { param: { dispute_id: string } }
        output: SubmitEvidenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/employees': {
      $get: {
        input: {
          query: {
            location_id?: string | undefined
            status?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: ListEmployeesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/employees/:id': {
      $get: {
        input: { param: { id: string } }
        output: RetrieveEmployeeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards': {
      $get: {
        input: {
          query: {
            type?: string | undefined
            state?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
            customer_id?: string | undefined
          }
        }
        output: ListGiftCardsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateGiftCardRequest }
        output: CreateGiftCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards/activities': {
      $get: {
        input: {
          query: {
            gift_card_id?: string | undefined
            type?: string | undefined
            location_id?: string | undefined
            begin_time?: string | undefined
            end_time?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
            sort_order?: string | undefined
          }
        }
        output: ListGiftCardActivitiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateGiftCardActivityRequest }
        output: CreateGiftCardActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards/from-gan': {
      $post: {
        input: { json: RetrieveGiftCardFromGANRequest }
        output: RetrieveGiftCardFromGANResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards/from-nonce': {
      $post: {
        input: { json: RetrieveGiftCardFromNonceRequest }
        output: RetrieveGiftCardFromNonceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards/:gift_card_id/link-customer': {
      $post: {
        input: { param: { gift_card_id: string } } & { json: LinkCustomerToGiftCardRequest }
        output: LinkCustomerToGiftCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards/:gift_card_id/unlink-customer': {
      $post: {
        input: { param: { gift_card_id: string } } & { json: UnlinkCustomerFromGiftCardRequest }
        output: UnlinkCustomerFromGiftCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/gift-cards/:id': {
      $get: {
        input: { param: { id: string } }
        output: RetrieveGiftCardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/adjustment/:adjustment_id': {
      $get: {
        input: { param: { adjustment_id: string } }
        output: RetrieveInventoryAdjustmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/adjustments/:adjustment_id': {
      $get: {
        input: { param: { adjustment_id: string } }
        output: RetrieveInventoryAdjustmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/batch-change': {
      $post: {
        input: { json: BatchChangeInventoryRequest }
        output: BatchChangeInventoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/batch-retrieve-changes': {
      $post: {
        input: { json: BatchRetrieveInventoryChangesRequest }
        output: BatchRetrieveInventoryChangesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/batch-retrieve-counts': {
      $post: {
        input: { json: BatchRetrieveInventoryCountsRequest }
        output: BatchRetrieveInventoryCountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/changes/batch-create': {
      $post: {
        input: { json: BatchChangeInventoryRequest }
        output: BatchChangeInventoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/changes/batch-retrieve': {
      $post: {
        input: { json: BatchRetrieveInventoryChangesRequest }
        output: BatchRetrieveInventoryChangesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/counts/batch-retrieve': {
      $post: {
        input: { json: BatchRetrieveInventoryCountsRequest }
        output: BatchRetrieveInventoryCountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/physical-count/:physical_count_id': {
      $get: {
        input: { param: { physical_count_id: string } }
        output: RetrieveInventoryPhysicalCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/physical-counts/:physical_count_id': {
      $get: {
        input: { param: { physical_count_id: string } }
        output: RetrieveInventoryPhysicalCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/transfers/:transfer_id': {
      $get: {
        input: { param: { transfer_id: string } }
        output: RetrieveInventoryTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/:catalog_object_id': {
      $get: {
        input: { param: { catalog_object_id: string } } & {
          query: { location_ids?: string | undefined; cursor?: string | undefined }
        }
        output: RetrieveInventoryCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventory/:catalog_object_id/changes': {
      $get: {
        input: { param: { catalog_object_id: string } } & {
          query: { location_ids?: string | undefined; cursor?: string | undefined }
        }
        output: RetrieveInventoryChangesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/invoices': {
      $get: {
        input: {
          query: { location_id: string; cursor?: string | undefined; limit?: number | undefined }
        }
        output: ListInvoicesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateInvoiceRequest }
        output: CreateInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/invoices/search': {
      $post: {
        input: { json: SearchInvoicesRequest }
        output: SearchInvoicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/invoices/:invoice_id': {
      $delete: {
        input: { param: { invoice_id: string } } & { query: { version?: number | undefined } }
        output: DeleteInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { invoice_id: string } }
        output: GetInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { invoice_id: string } } & { json: UpdateInvoiceRequest }
        output: UpdateInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/invoices/:invoice_id/cancel': {
      $post: {
        input: { param: { invoice_id: string } } & { json: CancelInvoiceRequest }
        output: CancelInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/invoices/:invoice_id/publish': {
      $post: {
        input: { param: { invoice_id: string } } & { json: PublishInvoiceRequest }
        output: PublishInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/break-types': {
      $get: {
        input: {
          query: {
            location_id?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: ListBreakTypesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateBreakTypeRequest }
        output: CreateBreakTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/break-types/:id': {
      $delete: {
        input: { param: { id: string } }
        output: DeleteBreakTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: GetBreakTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UpdateBreakTypeRequest }
        output: UpdateBreakTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/employee-wages': {
      $get: {
        input: {
          query: {
            employee_id?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: ListEmployeeWagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/employee-wages/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetEmployeeWageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/shifts': {
      $post: {
        input: { json: CreateShiftRequest }
        output: CreateShiftResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/shifts/search': {
      $post: {
        input: { json: SearchShiftsRequest }
        output: SearchShiftsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/shifts/:id': {
      $delete: {
        input: { param: { id: string } }
        output: DeleteShiftResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: GetShiftResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UpdateShiftRequest }
        output: UpdateShiftResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/team-member-wages': {
      $get: {
        input: {
          query: {
            team_member_id?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: ListTeamMemberWagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/team-member-wages/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetTeamMemberWageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/workweek-configs': {
      $get: {
        input: { query: { limit?: number | undefined; cursor?: string | undefined } }
        output: ListWorkweekConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/labor/workweek-configs/:id': {
      $put: {
        input: { param: { id: string } } & { json: UpdateWorkweekConfigRequest }
        output: UpdateWorkweekConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations': {
      $get: { input: {}; output: ListLocationsResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateLocationRequest }
        output: CreateLocationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id': {
      $get: {
        input: { param: { location_id: string } }
        output: RetrieveLocationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { location_id: string } } & { json: UpdateLocationRequest }
        output: UpdateLocationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/checkouts': {
      $post: {
        input: { param: { location_id: string } } & { json: CreateCheckoutRequest }
        output: CreateCheckoutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/refunds': {
      $get: {
        input: { param: { location_id: string } } & {
          query: {
            begin_time?: string | undefined
            end_time?: string | undefined
            sort_order?: string | undefined
            cursor?: string | undefined
          }
        }
        output: ListRefundsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/transactions': {
      $get: {
        input: { param: { location_id: string } } & {
          query: {
            begin_time?: string | undefined
            end_time?: string | undefined
            sort_order?: string | undefined
            cursor?: string | undefined
          }
        }
        output: ListTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { location_id: string } } & { json: ChargeRequest }
        output: ChargeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/transactions/:transaction_id': {
      $get: {
        input: { param: { location_id: string; transaction_id: string } }
        output: RetrieveTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/transactions/:transaction_id/capture': {
      $post: {
        input: { param: { location_id: string; transaction_id: string } }
        output: CaptureTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/transactions/:transaction_id/refund': {
      $post: {
        input: { param: { location_id: string; transaction_id: string } } & {
          json: CreateRefundRequest
        }
        output: CreateRefundResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/locations/:location_id/transactions/:transaction_id/void': {
      $post: {
        input: { param: { location_id: string; transaction_id: string } }
        output: VoidTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/accounts': {
      $post: {
        input: { json: CreateLoyaltyAccountRequest }
        output: CreateLoyaltyAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/accounts/search': {
      $post: {
        input: { json: SearchLoyaltyAccountsRequest }
        output: SearchLoyaltyAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/accounts/:account_id': {
      $get: {
        input: { param: { account_id: string } }
        output: RetrieveLoyaltyAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/accounts/:account_id/accumulate': {
      $post: {
        input: { param: { account_id: string } } & { json: AccumulateLoyaltyPointsRequest }
        output: AccumulateLoyaltyPointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/accounts/:account_id/adjust': {
      $post: {
        input: { param: { account_id: string } } & { json: AdjustLoyaltyPointsRequest }
        output: AdjustLoyaltyPointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/events/search': {
      $post: {
        input: { json: SearchLoyaltyEventsRequest }
        output: SearchLoyaltyEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/programs': {
      $get: { input: {}; output: ListLoyaltyProgramsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/loyalty/programs/:program_id': {
      $get: {
        input: { param: { program_id: string } }
        output: RetrieveLoyaltyProgramResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/programs/:program_id/calculate': {
      $post: {
        input: { param: { program_id: string } } & { json: CalculateLoyaltyPointsRequest }
        output: CalculateLoyaltyPointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/rewards': {
      $post: {
        input: { json: CreateLoyaltyRewardRequest }
        output: CreateLoyaltyRewardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/rewards/search': {
      $post: {
        input: { json: SearchLoyaltyRewardsRequest }
        output: SearchLoyaltyRewardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/rewards/:reward_id': {
      $delete: {
        input: { param: { reward_id: string } }
        output: DeleteLoyaltyRewardResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { reward_id: string } }
        output: RetrieveLoyaltyRewardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/loyalty/rewards/:reward_id/redeem': {
      $post: {
        input: { param: { reward_id: string } } & { json: RedeemLoyaltyRewardRequest }
        output: RedeemLoyaltyRewardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/merchants': {
      $get: {
        input: { query: { cursor?: number | undefined } }
        output: ListMerchantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/merchants/:merchant_id': {
      $get: {
        input: { param: { merchant_id: string } }
        output: RetrieveMerchantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders': {
      $post: {
        input: { json: CreateOrderRequest }
        output: CreateOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders/batch-retrieve': {
      $post: {
        input: { json: BatchRetrieveOrdersRequest }
        output: BatchRetrieveOrdersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders/calculate': {
      $post: {
        input: { json: CalculateOrderRequest }
        output: CalculateOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders/search': {
      $post: {
        input: { json: SearchOrdersRequest }
        output: SearchOrdersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders/:order_id': {
      $get: {
        input: { param: { order_id: string } }
        output: RetrieveOrderResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { order_id: string } } & { json: UpdateOrderRequest }
        output: UpdateOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders/:order_id/pay': {
      $post: {
        input: { param: { order_id: string } } & { json: PayOrderRequest }
        output: PayOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/payments': {
      $get: {
        input: {
          query: {
            begin_time?: string | undefined
            end_time?: string | undefined
            sort_order?: string | undefined
            cursor?: string | undefined
            location_id?: string | undefined
            total?: bigint | undefined
            last_4?: string | undefined
            card_brand?: string | undefined
            limit?: number | undefined
          }
        }
        output: ListPaymentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreatePaymentRequest }
        output: CreatePaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/payments/cancel': {
      $post: {
        input: { json: CancelPaymentByIdempotencyKeyRequest }
        output: CancelPaymentByIdempotencyKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/payments/:payment_id': {
      $get: {
        input: { param: { payment_id: string } }
        output: GetPaymentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { payment_id: string } } & { json: UpdatePaymentRequest }
        output: UpdatePaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/payments/:payment_id/cancel': {
      $post: {
        input: { param: { payment_id: string } }
        output: CancelPaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/payments/:payment_id/complete': {
      $post: {
        input: { param: { payment_id: string } }
        output: CompletePaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/refunds': {
      $get: {
        input: {
          query: {
            begin_time?: string | undefined
            end_time?: string | undefined
            sort_order?: string | undefined
            cursor?: string | undefined
            location_id?: string | undefined
            status?: string | undefined
            source_type?: string | undefined
            limit?: number | undefined
          }
        }
        output: ListPaymentRefundsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RefundPaymentRequest }
        output: RefundPaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/refunds/:refund_id': {
      $get: {
        input: { param: { refund_id: string } }
        output: GetPaymentRefundResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/sites': {
      $get: { input: {}; output: ListSitesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/sites/:site_id/snippet': {
      $delete: {
        input: { param: { site_id: string } }
        output: DeleteSnippetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string } }
        output: RetrieveSnippetResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: UpsertSnippetRequest }
        output: UpsertSnippetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/subscriptions': {
      $post: {
        input: { json: CreateSubscriptionRequest }
        output: CreateSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/subscriptions/search': {
      $post: {
        input: { json: SearchSubscriptionsRequest }
        output: SearchSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/subscriptions/:subscription_id': {
      $get: {
        input: { param: { subscription_id: string } }
        output: RetrieveSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { subscription_id: string } } & { json: UpdateSubscriptionRequest }
        output: UpdateSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/subscriptions/:subscription_id/cancel': {
      $post: {
        input: { param: { subscription_id: string } }
        output: CancelSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/subscriptions/:subscription_id/events': {
      $get: {
        input: { param: { subscription_id: string } } & {
          query: { cursor?: string | undefined; limit?: number | undefined }
        }
        output: ListSubscriptionEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/subscriptions/:subscription_id/resume': {
      $post: {
        input: { param: { subscription_id: string } }
        output: ResumeSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/team-members': {
      $post: {
        input: { json: CreateTeamMemberRequest }
        output: CreateTeamMemberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/team-members/bulk-create': {
      $post: {
        input: { json: BulkCreateTeamMembersRequest }
        output: BulkCreateTeamMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/team-members/bulk-update': {
      $post: {
        input: { json: BulkUpdateTeamMembersRequest }
        output: BulkUpdateTeamMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/team-members/search': {
      $post: {
        input: { json: SearchTeamMembersRequest }
        output: SearchTeamMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/team-members/:team_member_id': {
      $get: {
        input: { param: { team_member_id: string } }
        output: RetrieveTeamMemberResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { team_member_id: string } } & { json: UpdateTeamMemberRequest }
        output: UpdateTeamMemberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/team-members/:team_member_id/wage-setting': {
      $get: {
        input: { param: { team_member_id: string } }
        output: RetrieveWageSettingResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { team_member_id: string } } & { json: UpdateWageSettingRequest }
        output: UpdateWageSettingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/checkouts': {
      $post: {
        input: { json: CreateTerminalCheckoutRequest }
        output: CreateTerminalCheckoutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/checkouts/search': {
      $post: {
        input: { json: SearchTerminalCheckoutsRequest }
        output: SearchTerminalCheckoutsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/checkouts/:checkout_id': {
      $get: {
        input: { param: { checkout_id: string } }
        output: GetTerminalCheckoutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/checkouts/:checkout_id/cancel': {
      $post: {
        input: { param: { checkout_id: string } }
        output: CancelTerminalCheckoutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/refunds': {
      $post: {
        input: { json: CreateTerminalRefundRequest }
        output: CreateTerminalRefundResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/refunds/search': {
      $post: {
        input: { json: SearchTerminalRefundsRequest }
        output: SearchTerminalRefundsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/refunds/:terminal_refund_id': {
      $get: {
        input: { param: { terminal_refund_id: string } }
        output: GetTerminalRefundResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/terminals/refunds/:terminal_refund_id/cancel': {
      $post: {
        input: { param: { terminal_refund_id: string } }
        output: CancelTerminalRefundResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
