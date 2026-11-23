type ErrorParametersItem = {
  fieldName?: string | undefined
  fieldValue?: string | undefined
  resources?: string | undefined
}
type ErrorParameters = ErrorParametersItem[]
type ErrorErrorsItem = { message?: string | undefined; parameters?: ErrorParameters | undefined }
type ErrorErrors = ErrorErrorsItem[]
type ErrorResponse = {
  code?: number | undefined
  errors?: ErrorErrors | undefined
  message: string
  parameters?: ErrorParameters | undefined
  trace?: string | undefined
}
type AnalyticsDataLinkInterface = { initialization_vector: string; url: string }
type CustomerDataOptionInterface = {
  label: string
  options?: CustomerDataOptionInterface[] | undefined
  value?: string | undefined
}
type CustomerDataValidationRuleInterface = { name: string; value: string }
type CustomerDataAttributeMetadataInterface = {
  attribute_code: string
  backend_type: string
  data_model: string
  frontend_class: string
  frontend_input: string
  frontend_label: string
  input_filter: string
  is_filterable_in_grid?: boolean | undefined
  is_searchable_in_grid?: boolean | undefined
  is_used_in_grid?: boolean | undefined
  is_visible_in_grid?: boolean | undefined
  multiline_count: number
  note: string
  options: CustomerDataOptionInterface[]
  required: boolean
  sort_order: number
  store_label: string
  system: boolean
  user_defined: boolean
  validation_rules: CustomerDataValidationRuleInterface[]
  visible: boolean
}
type AsynchronousOperationsDataBulkSummaryExtensionInterface = { [x: string]: unknown }
type AsynchronousOperationsDataOperationExtensionInterface = { [x: string]: unknown }
type AsynchronousOperationsDataDetailedOperationStatusInterface = {
  bulk_uuid: string
  error_code: number
  extension_attributes?: AsynchronousOperationsDataOperationExtensionInterface | undefined
  id: number
  result_message: string
  result_serialized_data: string
  serialized_data: string
  status: number
  topic_name: string
}
type AsynchronousOperationsDataDetailedBulkOperationsStatusInterface = {
  bulk_id: string
  description: string
  extension_attributes?: AsynchronousOperationsDataBulkSummaryExtensionInterface | undefined
  operation_count: number
  operations_list: AsynchronousOperationsDataDetailedOperationStatusInterface[]
  start_time: string
  user_id: number
}
type AsynchronousOperationsDataSummaryOperationStatusInterface = {
  error_code: number
  id: number
  result_message: string
  status: number
}
type AsynchronousOperationsDataBulkOperationsStatusInterface = {
  bulk_id: string
  description: string
  extension_attributes?: AsynchronousOperationsDataBulkSummaryExtensionInterface | undefined
  operation_count: number
  operations_list: AsynchronousOperationsDataSummaryOperationStatusInterface[]
  start_time: string
  user_id: number
}
type BundleDataOptionExtensionInterface = { [x: string]: unknown }
type BundleDataLinkExtensionInterface = { [x: string]: unknown }
type BundleDataLinkInterface = {
  can_change_quantity?: number | undefined
  extension_attributes?: BundleDataLinkExtensionInterface | undefined
  id?: string | undefined
  is_default: boolean
  option_id?: number | undefined
  position?: number | undefined
  price: number
  price_type: number
  qty?: number | undefined
  sku?: string | undefined
}
type BundleDataOptionInterface = {
  extension_attributes?: BundleDataOptionExtensionInterface | undefined
  option_id?: number | undefined
  position?: number | undefined
  product_links?: BundleDataLinkInterface[] | undefined
  required?: boolean | undefined
  sku?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type BundleDataOptionTypeExtensionInterface = { [x: string]: unknown }
type BundleDataOptionTypeInterface = {
  code: string
  extension_attributes?: BundleDataOptionTypeExtensionInterface | undefined
  label: string
}
type GiftCardAccountDataGiftCardAccountExtensionInterface = { [x: string]: unknown }
type GiftCardAccountDataGiftCardAccountInterface = {
  base_gift_cards_amount: number
  base_gift_cards_amount_used: number
  extension_attributes?: GiftCardAccountDataGiftCardAccountExtensionInterface | undefined
  gift_cards: string[]
  gift_cards_amount: number
  gift_cards_amount_used: number
}
type CheckoutAgreementsDataAgreementExtensionInterface = { [x: string]: unknown }
type CheckoutAgreementsDataAgreementInterface = {
  agreement_id: number
  checkbox_text: string
  content: string
  content_height?: string | undefined
  extension_attributes?: CheckoutAgreementsDataAgreementExtensionInterface | undefined
  is_active: boolean
  is_html: boolean
  mode: number
  name: string
}
type FrameworkAttributeInterface = { attribute_code: string; value: string }
type QuoteDataAddressExtensionInterface = {
  checkout_fields?: FrameworkAttributeInterface[] | undefined
  gift_registry_id?: number | undefined
}
type QuoteDataAddressInterface = {
  city: string
  company?: string | undefined
  country_id: string
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  customer_address_id?: number | undefined
  customer_id?: number | undefined
  email: string
  extension_attributes?: QuoteDataAddressExtensionInterface | undefined
  fax?: string | undefined
  firstname: string
  id?: number | undefined
  lastname: string
  middlename?: string | undefined
  postcode: string
  prefix?: string | undefined
  region: string
  region_code: string
  region_id: number
  same_as_billing?: number | undefined
  save_in_address_book?: number | undefined
  street: string[]
  suffix?: string | undefined
  telephone: string
  vat_id?: string | undefined
}
type QuoteDataCurrencyExtensionInterface = { [x: string]: unknown }
type QuoteDataCurrencyInterface = {
  base_currency_code?: string | undefined
  base_to_global_rate?: number | undefined
  base_to_quote_rate?: number | undefined
  extension_attributes?: QuoteDataCurrencyExtensionInterface | undefined
  global_currency_code?: string | undefined
  quote_currency_code?: string | undefined
  store_currency_code?: string | undefined
  store_to_base_rate?: number | undefined
  store_to_quote_rate?: number | undefined
}
type CustomerDataAddressExtensionInterface = { [x: string]: unknown }
type CustomerDataRegionExtensionInterface = { [x: string]: unknown }
type CustomerDataRegionInterface = {
  extension_attributes?: CustomerDataRegionExtensionInterface | undefined
  region: string
  region_code: string
  region_id: number
}
type CustomerDataAddressInterface = {
  city?: string | undefined
  company?: string | undefined
  country_id?: string | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  customer_id?: number | undefined
  default_billing?: boolean | undefined
  default_shipping?: boolean | undefined
  extension_attributes?: CustomerDataAddressExtensionInterface | undefined
  fax?: string | undefined
  firstname?: string | undefined
  id?: number | undefined
  lastname?: string | undefined
  middlename?: string | undefined
  postcode?: string | undefined
  prefix?: string | undefined
  region?: CustomerDataRegionInterface | undefined
  region_id?: number | undefined
  street?: string[] | undefined
  suffix?: string | undefined
  telephone?: string | undefined
  vat_id?: string | undefined
}
type CompanyDataCompanyCustomerExtensionInterface = { [x: string]: unknown }
type CompanyDataCompanyCustomerInterface = {
  company_id?: number | undefined
  customer_id?: number | undefined
  extension_attributes?: CompanyDataCompanyCustomerExtensionInterface | undefined
  job_title?: string | undefined
  status?: number | undefined
  telephone?: string | undefined
}
type CustomerDataCustomerExtensionInterface = {
  amazon_id?: string | undefined
  company_attributes?: CompanyDataCompanyCustomerInterface | undefined
  is_subscribed?: boolean | undefined
  vertex_customer_code?: string | undefined
}
type CustomerDataCustomerInterface = {
  addresses?: CustomerDataAddressInterface[] | undefined
  confirmation?: string | undefined
  created_at?: string | undefined
  created_in?: string | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  default_billing?: string | undefined
  default_shipping?: string | undefined
  disable_auto_group_change?: number | undefined
  dob?: string | undefined
  email: string
  extension_attributes?: CustomerDataCustomerExtensionInterface | undefined
  firstname: string
  gender?: number | undefined
  group_id?: number | undefined
  id?: number | undefined
  lastname: string
  middlename?: string | undefined
  prefix?: string | undefined
  store_id?: number | undefined
  suffix?: string | undefined
  taxvat?: string | undefined
  updated_at?: string | undefined
  website_id?: number | undefined
}
type NegotiableQuoteDataNegotiableQuoteExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataNegotiableQuoteInterface = {
  applied_rule_ids: string
  base_negotiated_total_price?: number | undefined
  base_original_total_price?: number | undefined
  creator_id: number
  creator_type: number
  deleted_sku: string
  email_notification_status: number
  expiration_period: string
  extension_attributes?: NegotiableQuoteDataNegotiableQuoteExtensionInterface | undefined
  has_unconfirmed_changes: boolean
  is_address_draft: boolean
  is_customer_price_changed: boolean
  is_regular_quote: boolean
  is_shipping_tax_changed: boolean
  negotiated_price_type: number
  negotiated_price_value: number
  negotiated_total_price?: number | undefined
  notifications: number
  original_total_price?: number | undefined
  quote_id: number
  quote_name: string
  shipping_price: number
  status: string
}
type QuoteDataShippingAssignmentExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataNegotiableQuoteItemExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataNegotiableQuoteItemInterface = {
  extension_attributes?: NegotiableQuoteDataNegotiableQuoteItemExtensionInterface | undefined
  item_id: number
  original_discount_amount: number
  original_price: number
  original_tax_amount: number
}
type QuoteDataCartItemExtensionInterface = {
  negotiable_quote_item?: NegotiableQuoteDataNegotiableQuoteItemInterface | undefined
}
type BundleDataBundleOptionExtensionInterface = { [x: string]: unknown }
type BundleDataBundleOptionInterface = {
  extension_attributes?: BundleDataBundleOptionExtensionInterface | undefined
  option_id: number
  option_qty: number
  option_selections: number[]
}
type ConfigurableProductDataConfigurableItemOptionValueExtensionInterface = { [x: string]: unknown }
type ConfigurableProductDataConfigurableItemOptionValueInterface = {
  extension_attributes?:
    | ConfigurableProductDataConfigurableItemOptionValueExtensionInterface
    | undefined
  option_id: string
  option_value?: number | undefined
}
type FrameworkDataImageContentInterface = {
  base64_encoded_data: string
  name: string
  type: string
}
type CatalogDataCustomOptionExtensionInterface = {
  file_info?: FrameworkDataImageContentInterface | undefined
}
type CatalogDataCustomOptionInterface = {
  extension_attributes?: CatalogDataCustomOptionExtensionInterface | undefined
  option_id: string
  option_value: string
}
type DownloadableDataDownloadableOptionInterface = { downloadable_links: number[] }
type GiftCardDataGiftCardOptionExtensionInterface = { [x: string]: unknown }
type GiftCardDataGiftCardOptionInterface = {
  custom_giftcard_amount?: number | undefined
  extension_attributes?: GiftCardDataGiftCardOptionExtensionInterface | undefined
  giftcard_amount: string
  giftcard_message?: string | undefined
  giftcard_recipient_email: string
  giftcard_recipient_name: string
  giftcard_sender_email: string
  giftcard_sender_name: string
}
type QuoteDataProductOptionExtensionInterface = {
  bundle_options?: BundleDataBundleOptionInterface[] | undefined
  configurable_item_options?:
    | ConfigurableProductDataConfigurableItemOptionValueInterface[]
    | undefined
  custom_options?: CatalogDataCustomOptionInterface[] | undefined
  downloadable_option?: DownloadableDataDownloadableOptionInterface | undefined
  giftcard_item_option?: GiftCardDataGiftCardOptionInterface | undefined
}
type QuoteDataProductOptionInterface = {
  extension_attributes?: QuoteDataProductOptionExtensionInterface | undefined
}
type QuoteDataCartItemInterface = {
  extension_attributes?: QuoteDataCartItemExtensionInterface | undefined
  item_id?: number | undefined
  name?: string | undefined
  price?: number | undefined
  product_option?: QuoteDataProductOptionInterface | undefined
  product_type?: string | undefined
  qty: number
  quote_id: string
  sku?: string | undefined
}
type QuoteDataShippingExtensionInterface = { [x: string]: unknown }
type QuoteDataShippingInterface = {
  address: QuoteDataAddressInterface
  extension_attributes?: QuoteDataShippingExtensionInterface | undefined
  method: string
}
type QuoteDataShippingAssignmentInterface = {
  extension_attributes?: QuoteDataShippingAssignmentExtensionInterface | undefined
  items: QuoteDataCartItemInterface[]
  shipping: QuoteDataShippingInterface
}
type QuoteDataCartExtensionInterface = {
  amazon_order_reference_id?: string | undefined
  negotiable_quote?: NegotiableQuoteDataNegotiableQuoteInterface | undefined
  shipping_assignments?: QuoteDataShippingAssignmentInterface[] | undefined
}
type QuoteDataCartInterface = {
  billing_address?: QuoteDataAddressInterface | undefined
  converted_at?: string | undefined
  created_at?: string | undefined
  currency?: QuoteDataCurrencyInterface | undefined
  customer: CustomerDataCustomerInterface
  customer_is_guest?: boolean | undefined
  customer_note?: string | undefined
  customer_note_notify?: boolean | undefined
  customer_tax_class_id?: number | undefined
  extension_attributes?: QuoteDataCartExtensionInterface | undefined
  id: number
  is_active?: boolean | undefined
  is_virtual?: boolean | undefined
  items?: QuoteDataCartItemInterface[] | undefined
  items_count?: number | undefined
  items_qty?: number | undefined
  orig_order_id?: number | undefined
  reserved_order_id?: string | undefined
  store_id: number
  updated_at?: string | undefined
}
type GiftMessageDataMessageExtensionInterface = {
  entity_id?: string | undefined
  entity_type?: string | undefined
  wrapping_add_printed_card?: boolean | undefined
  wrapping_allow_gift_receipt?: boolean | undefined
  wrapping_id?: number | undefined
}
type GiftMessageDataMessageInterface = {
  customer_id?: number | undefined
  extension_attributes?: GiftMessageDataMessageExtensionInterface | undefined
  gift_message_id?: number | undefined
  message: string
  recipient: string
  sender: string
}
type QuoteDataTotalsAdditionalDataExtensionInterface = {
  gift_messages?: GiftMessageDataMessageInterface[] | undefined
}
type QuoteDataTotalsAdditionalDataInterface = {
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  extension_attributes?: QuoteDataTotalsAdditionalDataExtensionInterface | undefined
}
type QuoteDataPaymentExtensionInterface = { agreement_ids?: string[] | undefined }
type QuoteDataPaymentInterface = {
  additional_data?: string[] | undefined
  extension_attributes?: QuoteDataPaymentExtensionInterface | undefined
  method: string
  po_number?: string | undefined
}
type NegotiableQuoteDataNegotiableQuoteTotalsInterface = {
  base_cost_total: number
  base_original_price_incl_tax: number
  base_original_tax: number
  base_original_total: number
  base_to_quote_rate: number
  cost_total: number
  created_at: string
  customer_group: number
  items_count: number
  negotiated_price_type: number
  negotiated_price_value: number
  original_price_incl_tax: number
  original_tax: number
  original_total: number
  quote_status: string
  updated_at: string
}
type QuoteDataTotalsExtensionInterface = {
  base_customer_balance_amount?: number | undefined
  base_reward_currency_amount?: number | undefined
  coupon_label?: string | undefined
  customer_balance_amount?: number | undefined
  negotiable_quote_totals?: NegotiableQuoteDataNegotiableQuoteTotalsInterface | undefined
  reward_currency_amount?: number | undefined
  reward_points_balance?: number | undefined
}
type NegotiableQuoteDataNegotiableQuoteItemTotalsExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataNegotiableQuoteItemTotalsInterface = {
  base_cart_price: number
  base_cart_price_incl_tax: number
  base_cart_tax: number
  base_catalog_price: number
  base_catalog_price_incl_tax: number
  cart_price: number
  cart_price_incl_tax: number
  cart_tax: number
  catalog_price: number
  catalog_price_incl_tax: number
  cost: number
  extension_attributes?: NegotiableQuoteDataNegotiableQuoteItemTotalsExtensionInterface | undefined
}
type QuoteDataTotalsItemExtensionInterface = {
  negotiable_quote_item_totals?: NegotiableQuoteDataNegotiableQuoteItemTotalsInterface | undefined
}
type QuoteDataTotalsItemInterface = {
  base_discount_amount?: number | undefined
  base_price: number
  base_price_incl_tax?: number | undefined
  base_row_total: number
  base_row_total_incl_tax?: number | undefined
  base_tax_amount?: number | undefined
  discount_amount?: number | undefined
  discount_percent?: number | undefined
  extension_attributes?: QuoteDataTotalsItemExtensionInterface | undefined
  item_id: number
  name?: string | undefined
  options: string
  price: number
  price_incl_tax?: number | undefined
  qty: number
  row_total: number
  row_total_incl_tax?: number | undefined
  row_total_with_discount?: number | undefined
  tax_amount?: number | undefined
  tax_percent?: number | undefined
  weee_tax_applied: string
  weee_tax_applied_amount: number
}
type TaxDataGrandTotalRatesInterface = { percent: string; title: string }
type TaxDataGrandTotalDetailsInterface = {
  amount: number
  group_id: number
  rates: TaxDataGrandTotalRatesInterface[]
}
type QuoteDataTotalSegmentExtensionInterface = {
  gift_cards?: string | undefined
  gw_add_card?: string | undefined
  gw_allow_gift_receipt?: string | undefined
  gw_base_price?: string | undefined
  gw_base_price_incl_tax?: string | undefined
  gw_base_tax_amount?: string | undefined
  gw_card_base_price?: string | undefined
  gw_card_base_price_incl_tax?: string | undefined
  gw_card_base_tax_amount?: string | undefined
  gw_card_price?: string | undefined
  gw_card_price_incl_tax?: string | undefined
  gw_card_tax_amount?: string | undefined
  gw_item_ids?: string[] | undefined
  gw_items_base_price?: string | undefined
  gw_items_base_price_incl_tax?: string | undefined
  gw_items_base_tax_amount?: string | undefined
  gw_items_price?: string | undefined
  gw_items_price_incl_tax?: string | undefined
  gw_items_tax_amount?: string | undefined
  gw_order_id?: string | undefined
  gw_price?: string | undefined
  gw_price_incl_tax?: string | undefined
  gw_tax_amount?: string | undefined
  tax_grandtotal_details?: TaxDataGrandTotalDetailsInterface[] | undefined
  vertex_tax_calculation_messages?: string[] | undefined
}
type QuoteDataTotalSegmentInterface = {
  area?: string | undefined
  code: string
  extension_attributes?: QuoteDataTotalSegmentExtensionInterface | undefined
  title?: string | undefined
  value: number
}
type QuoteDataTotalsInterface = {
  base_currency_code?: string | undefined
  base_discount_amount?: number | undefined
  base_grand_total?: number | undefined
  base_shipping_amount?: number | undefined
  base_shipping_discount_amount?: number | undefined
  base_shipping_incl_tax?: number | undefined
  base_shipping_tax_amount?: number | undefined
  base_subtotal?: number | undefined
  base_subtotal_incl_tax?: number | undefined
  base_subtotal_with_discount?: number | undefined
  base_tax_amount?: number | undefined
  coupon_code?: string | undefined
  discount_amount?: number | undefined
  extension_attributes?: QuoteDataTotalsExtensionInterface | undefined
  grand_total?: number | undefined
  items?: QuoteDataTotalsItemInterface[] | undefined
  items_qty?: number | undefined
  quote_currency_code?: string | undefined
  shipping_amount?: number | undefined
  shipping_discount_amount?: number | undefined
  shipping_incl_tax?: number | undefined
  shipping_tax_amount?: number | undefined
  subtotal?: number | undefined
  subtotal_incl_tax?: number | undefined
  subtotal_with_discount?: number | undefined
  tax_amount?: number | undefined
  total_segments: QuoteDataTotalSegmentInterface[]
  weee_tax_applied_amount: number
}
type TemandoShippingDataCollectionPointSearchRequestInterface = {
  country_id: string
  pending: boolean
  postcode: string
  shipping_address_id: number
}
type TemandoShippingDataCollectionPointQuoteCollectionPointInterface = {
  city: string
  collection_point_id: string
  country: string
  entity_id: number
  name: string
  opening_hours: string[]
  postcode: string
  recipient_address_id: number
  region: string
  selected: boolean
  shipping_experiences: string[]
  street: string[]
}
type QuoteDataShippingMethodExtensionInterface = { [x: string]: unknown }
type QuoteDataShippingMethodInterface = {
  amount: number
  available: boolean
  base_amount: number
  carrier_code: string
  carrier_title?: string | undefined
  error_message: string
  extension_attributes?: QuoteDataShippingMethodExtensionInterface | undefined
  method_code: string
  method_title?: string | undefined
  price_excl_tax: number
  price_incl_tax: number
}
type CheckoutDataPaymentDetailsExtensionInterface = { [x: string]: unknown }
type QuoteDataPaymentMethodInterface = { code: string; title: string }
type CheckoutDataPaymentDetailsInterface = {
  extension_attributes?: CheckoutDataPaymentDetailsExtensionInterface | undefined
  payment_methods: QuoteDataPaymentMethodInterface[]
  totals: QuoteDataTotalsInterface
}
type CheckoutDataShippingInformationExtensionInterface = { [x: string]: unknown }
type CheckoutDataShippingInformationInterface = {
  billing_address?: QuoteDataAddressInterface | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  extension_attributes?: CheckoutDataShippingInformationExtensionInterface | undefined
  shipping_address: QuoteDataAddressInterface
  shipping_carrier_code: string
  shipping_method_code: string
}
type CheckoutDataTotalsInformationExtensionInterface = { [x: string]: unknown }
type CheckoutDataTotalsInformationInterface = {
  address: QuoteDataAddressInterface
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  extension_attributes?: CheckoutDataTotalsInformationExtensionInterface | undefined
  shipping_carrier_code?: string | undefined
  shipping_method_code?: string | undefined
}
type FrameworkFilter = { condition_type?: string | undefined; field: string; value: string }
type FrameworkSearchFilterGroup = { filters?: FrameworkFilter[] | undefined }
type FrameworkSortOrder = { direction: string; field: string }
type FrameworkSearchCriteriaInterface = {
  current_page?: number | undefined
  filter_groups: FrameworkSearchFilterGroup[]
  page_size?: number | undefined
  sort_orders?: FrameworkSortOrder[] | undefined
}
type QuoteDataCartSearchResultsInterface = {
  items: QuoteDataCartInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataCategoryTreeInterface = {
  children_data: CatalogDataCategoryTreeInterface[]
  id?: number | undefined
  is_active: boolean
  level: number
  name: string
  parent_id: number
  position: number
  product_count: number
}
type CatalogDataCategoryExtensionInterface = { [x: string]: unknown }
type CatalogDataCategoryInterface = {
  available_sort_by?: string[] | undefined
  children?: string | undefined
  created_at?: string | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  extension_attributes?: CatalogDataCategoryExtensionInterface | undefined
  id?: number | undefined
  include_in_menu?: boolean | undefined
  is_active?: boolean | undefined
  level?: number | undefined
  name?: string | undefined
  parent_id?: number | undefined
  path?: string | undefined
  position?: number | undefined
  updated_at?: string | undefined
}
type CatalogDataEavAttributeExtensionInterface = { [x: string]: unknown }
type EavDataAttributeFrontendLabelInterface = {
  label?: string | undefined
  store_id?: number | undefined
}
type EavDataAttributeOptionLabelInterface = {
  label?: string | undefined
  store_id?: number | undefined
}
type EavDataAttributeOptionInterface = {
  is_default?: boolean | undefined
  label: string
  sort_order?: number | undefined
  store_labels?: EavDataAttributeOptionLabelInterface[] | undefined
  value: string
}
type EavDataAttributeValidationRuleInterface = { key: string; value: string }
type CatalogDataCategoryAttributeInterface = {
  apply_to?: string[] | undefined
  attribute_code: string
  attribute_id?: number | undefined
  backend_model?: string | undefined
  backend_type?: string | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  default_frontend_label?: string | undefined
  default_value?: string | undefined
  entity_type_id: string
  extension_attributes?: CatalogDataEavAttributeExtensionInterface | undefined
  frontend_class?: string | undefined
  frontend_input: string
  frontend_labels: EavDataAttributeFrontendLabelInterface[]
  is_comparable?: string | undefined
  is_filterable?: boolean | undefined
  is_filterable_in_grid?: boolean | undefined
  is_filterable_in_search?: boolean | undefined
  is_html_allowed_on_front?: boolean | undefined
  is_required: boolean
  is_searchable?: string | undefined
  is_unique?: string | undefined
  is_used_for_promo_rules?: string | undefined
  is_used_in_grid?: boolean | undefined
  is_user_defined?: boolean | undefined
  is_visible?: boolean | undefined
  is_visible_in_advanced_search?: string | undefined
  is_visible_in_grid?: boolean | undefined
  is_visible_on_front?: string | undefined
  is_wysiwyg_enabled?: boolean | undefined
  note?: string | undefined
  options?: EavDataAttributeOptionInterface[] | undefined
  position?: number | undefined
  scope?: string | undefined
  source_model?: string | undefined
  used_for_sort_by?: boolean | undefined
  used_in_product_listing?: string | undefined
  validation_rules?: EavDataAttributeValidationRuleInterface[] | undefined
}
type CatalogDataCategoryAttributeSearchResultsInterface = {
  items: CatalogDataCategoryAttributeInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataCategorySearchResultsInterface = {
  items: CatalogDataCategoryInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataCategoryProductLinkExtensionInterface = { [x: string]: unknown }
type CatalogDataCategoryProductLinkInterface = {
  category_id: string
  extension_attributes?: CatalogDataCategoryProductLinkExtensionInterface | undefined
  position?: number | undefined
  sku?: string | undefined
}
type CmsDataBlockInterface = {
  active?: boolean | undefined
  content?: string | undefined
  creation_time?: string | undefined
  id?: number | undefined
  identifier: string
  title?: string | undefined
  update_time?: string | undefined
}
type CmsDataBlockSearchResultsInterface = {
  items: CmsDataBlockInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CmsDataPageInterface = {
  active?: boolean | undefined
  content?: string | undefined
  content_heading?: string | undefined
  creation_time?: string | undefined
  custom_layout_update_xml?: string | undefined
  custom_root_template?: string | undefined
  custom_theme?: string | undefined
  custom_theme_from?: string | undefined
  custom_theme_to?: string | undefined
  id?: number | undefined
  identifier: string
  layout_update_xml?: string | undefined
  meta_description?: string | undefined
  meta_keywords?: string | undefined
  meta_title?: string | undefined
  page_layout?: string | undefined
  sort_order?: string | undefined
  title?: string | undefined
  update_time?: string | undefined
}
type CmsDataPageSearchResultsInterface = {
  items: CmsDataPageInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type NegotiableQuoteDataCompanyQuoteConfigExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataCompanyQuoteConfigInterface = {
  company_id?: string | undefined
  extension_attributes?: NegotiableQuoteDataCompanyQuoteConfigExtensionInterface | undefined
  is_quote_enabled: boolean
}
type CompanyDataCompanyExtensionInterface = {
  applicable_payment_method?: number | undefined
  available_payment_methods?: string | undefined
  quote_config?: NegotiableQuoteDataCompanyQuoteConfigInterface | undefined
  use_config_settings?: number | undefined
}
type CompanyDataCompanyInterface = {
  city?: string | undefined
  comment?: string | undefined
  company_email?: string | undefined
  company_name?: string | undefined
  country_id?: string | undefined
  customer_group_id: number
  extension_attributes?: CompanyDataCompanyExtensionInterface | undefined
  id?: number | undefined
  legal_name?: string | undefined
  postcode?: string | undefined
  region?: string | undefined
  region_id?: string | undefined
  reject_reason: string
  rejected_at: string
  reseller_id?: string | undefined
  sales_representative_id: number
  status?: number | undefined
  street: string[]
  super_user_id: number
  telephone?: string | undefined
  vat_tax_id?: string | undefined
}
type CompanyDataCompanySearchResultsInterface = {
  items: CompanyDataCompanyInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CompanyDataRoleExtensionInterface = { [x: string]: unknown }
type CompanyDataPermissionInterface = {
  id?: number | undefined
  permission: string
  resource_id: string
  role_id?: number | undefined
}
type CompanyDataRoleInterface = {
  company_id?: number | undefined
  extension_attributes?: CompanyDataRoleExtensionInterface | undefined
  id?: number | undefined
  permissions: CompanyDataPermissionInterface[]
  role_name?: string | undefined
}
type CompanyDataRoleSearchResultsInterface = {
  items: CompanyDataRoleInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CompanyCreditDataCreditDataInterface = {
  available_limit?: number | undefined
  balance?: number | undefined
  company_id?: number | undefined
  credit_limit?: number | undefined
  currency_code?: string | undefined
  exceed_limit: boolean
  id?: number | undefined
}
type CompanyCreditDataCreditLimitSearchResultsInterface = {
  items: CompanyCreditDataCreditDataInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CompanyCreditDataCreditLimitExtensionInterface = { [x: string]: unknown }
type CompanyCreditDataCreditLimitInterface = {
  available_limit?: number | undefined
  balance?: number | undefined
  company_id?: number | undefined
  credit_comment?: string | undefined
  credit_limit?: number | undefined
  currency_code?: string | undefined
  exceed_limit: boolean
  extension_attributes?: CompanyCreditDataCreditLimitExtensionInterface | undefined
  id?: number | undefined
}
type CompanyCreditDataHistoryDataInterface = {
  amount: number
  available_limit?: number | undefined
  balance: number
  comment?: string | undefined
  company_credit_id?: number | undefined
  credit_limit: number
  currency_credit?: string | undefined
  currency_operation?: string | undefined
  datetime?: string | undefined
  id?: number | undefined
  purchase_order?: string | undefined
  rate: number
  rate_credit?: number | undefined
  type?: number | undefined
  user_id?: number | undefined
  user_type?: number | undefined
}
type CompanyCreditDataHistorySearchResultsInterface = {
  items: CompanyCreditDataHistoryDataInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CompanyCreditDataCreditBalanceOptionsInterface = {
  currency_base: string
  currency_display: string
  order_increment: string
  purchase_order: string
}
type ConfigurableProductDataOptionExtensionInterface = { [x: string]: unknown }
type ConfigurableProductDataOptionValueExtensionInterface = { [x: string]: unknown }
type ConfigurableProductDataOptionValueInterface = {
  extension_attributes?: ConfigurableProductDataOptionValueExtensionInterface | undefined
  value_index: number
}
type ConfigurableProductDataOptionInterface = {
  attribute_id?: string | undefined
  extension_attributes?: ConfigurableProductDataOptionExtensionInterface | undefined
  id?: number | undefined
  is_use_default?: boolean | undefined
  label?: string | undefined
  position?: number | undefined
  product_id?: number | undefined
  values?: ConfigurableProductDataOptionValueInterface[] | undefined
}
type CatalogDataCategoryLinkExtensionInterface = { [x: string]: unknown }
type CatalogDataCategoryLinkInterface = {
  category_id: string
  extension_attributes?: CatalogDataCategoryLinkExtensionInterface | undefined
  position?: number | undefined
}
type DownloadableDataLinkExtensionInterface = { [x: string]: unknown }
type DownloadableDataFileContentExtensionInterface = { [x: string]: unknown }
type DownloadableDataFileContentInterface = {
  extension_attributes?: DownloadableDataFileContentExtensionInterface | undefined
  file_data: string
  name: string
}
type DownloadableDataLinkInterface = {
  extension_attributes?: DownloadableDataLinkExtensionInterface | undefined
  id?: number | undefined
  is_shareable: number
  link_file?: string | undefined
  link_file_content?: DownloadableDataFileContentInterface | undefined
  link_type: string
  link_url?: string | undefined
  number_of_downloads?: number | undefined
  price: number
  sample_file?: string | undefined
  sample_file_content?: DownloadableDataFileContentInterface | undefined
  sample_type: string
  sample_url?: string | undefined
  sort_order: number
  title?: string | undefined
}
type DownloadableDataSampleExtensionInterface = { [x: string]: unknown }
type DownloadableDataSampleInterface = {
  extension_attributes?: DownloadableDataSampleExtensionInterface | undefined
  id?: number | undefined
  sample_file?: string | undefined
  sample_file_content?: DownloadableDataFileContentInterface | undefined
  sample_type: string
  sample_url?: string | undefined
  sort_order: number
  title: string
}
type GiftCardDataGiftcardAmountExtensionInterface = { [x: string]: unknown }
type GiftCardDataGiftcardAmountInterface = {
  attribute_id: number
  extension_attributes?: GiftCardDataGiftcardAmountExtensionInterface | undefined
  value: number
  website_id: number
  website_value: number
}
type CatalogInventoryDataStockItemExtensionInterface = { [x: string]: unknown }
type CatalogInventoryDataStockItemInterface = {
  backorders: number
  enable_qty_increments: boolean
  extension_attributes?: CatalogInventoryDataStockItemExtensionInterface | undefined
  is_decimal_divided: boolean
  is_in_stock: boolean
  is_qty_decimal: boolean
  item_id?: number | undefined
  low_stock_date: string
  manage_stock: boolean
  max_sale_qty: number
  min_qty: number
  min_sale_qty: number
  notify_stock_qty: number
  product_id?: number | undefined
  qty: number
  qty_increments: number
  show_default_notification_message: boolean
  stock_id?: number | undefined
  stock_status_changed_auto: number
  use_config_backorders: boolean
  use_config_enable_qty_inc: boolean
  use_config_manage_stock: boolean
  use_config_max_sale_qty: boolean
  use_config_min_qty: boolean
  use_config_min_sale_qty: number
  use_config_notify_stock_qty: boolean
  use_config_qty_increments: boolean
}
type CatalogDataProductExtensionInterface = {
  bundle_product_options?: BundleDataOptionInterface[] | undefined
  category_links?: CatalogDataCategoryLinkInterface[] | undefined
  configurable_product_links?: number[] | undefined
  configurable_product_options?: ConfigurableProductDataOptionInterface[] | undefined
  downloadable_product_links?: DownloadableDataLinkInterface[] | undefined
  downloadable_product_samples?: DownloadableDataSampleInterface[] | undefined
  giftcard_amounts?: GiftCardDataGiftcardAmountInterface[] | undefined
  stock_item?: CatalogInventoryDataStockItemInterface | undefined
  website_ids?: number[] | undefined
}
type FrameworkDataVideoContentInterface = {
  media_type: string
  video_description: string
  video_metadata: string
  video_provider: string
  video_title: string
  video_url: string
}
type CatalogDataProductAttributeMediaGalleryEntryExtensionInterface = {
  video_content?: FrameworkDataVideoContentInterface | undefined
}
type CatalogDataProductAttributeMediaGalleryEntryInterface = {
  content?: FrameworkDataImageContentInterface | undefined
  disabled: boolean
  extension_attributes?: CatalogDataProductAttributeMediaGalleryEntryExtensionInterface | undefined
  file?: string | undefined
  id?: number | undefined
  label: string
  media_type: string
  position: number
  types: string[]
}
type CatalogDataProductCustomOptionExtensionInterface = { vertex_flex_field?: string | undefined }
type CatalogDataProductCustomOptionValuesInterface = {
  option_type_id?: number | undefined
  price: number
  price_type: string
  sku?: string | undefined
  sort_order: number
  title: string
}
type CatalogDataProductCustomOptionInterface = {
  extension_attributes?: CatalogDataProductCustomOptionExtensionInterface | undefined
  file_extension?: string | undefined
  image_size_x?: number | undefined
  image_size_y?: number | undefined
  is_require: boolean
  max_characters?: number | undefined
  option_id?: number | undefined
  price?: number | undefined
  price_type?: string | undefined
  product_sku: string
  sku?: string | undefined
  sort_order: number
  title: string
  type: string
  values?: CatalogDataProductCustomOptionValuesInterface[] | undefined
}
type CatalogDataProductLinkExtensionInterface = { qty?: number | undefined }
type CatalogDataProductLinkInterface = {
  extension_attributes?: CatalogDataProductLinkExtensionInterface | undefined
  link_type: string
  linked_product_sku: string
  linked_product_type: string
  position: number
  sku: string
}
type CatalogDataProductTierPriceExtensionInterface = {
  percentage_value?: number | undefined
  website_id?: number | undefined
}
type CatalogDataProductTierPriceInterface = {
  customer_group_id: number
  extension_attributes?: CatalogDataProductTierPriceExtensionInterface | undefined
  qty: number
  value: number
}
type CatalogDataProductInterface = {
  attribute_set_id?: number | undefined
  created_at?: string | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  extension_attributes?: CatalogDataProductExtensionInterface | undefined
  id?: number | undefined
  media_gallery_entries?: CatalogDataProductAttributeMediaGalleryEntryInterface[] | undefined
  name?: string | undefined
  options?: CatalogDataProductCustomOptionInterface[] | undefined
  price?: number | undefined
  product_links?: CatalogDataProductLinkInterface[] | undefined
  sku: string
  status?: number | undefined
  tier_prices?: CatalogDataProductTierPriceInterface[] | undefined
  type_id?: string | undefined
  updated_at?: string | undefined
  visibility?: number | undefined
  weight?: number | undefined
}
type SalesRuleDataCouponExtensionInterface = { [x: string]: unknown }
type SalesRuleDataCouponInterface = {
  code?: string | undefined
  coupon_id?: number | undefined
  created_at?: string | undefined
  expiration_date?: string | undefined
  extension_attributes?: SalesRuleDataCouponExtensionInterface | undefined
  is_primary: boolean
  rule_id: number
  times_used: number
  type?: number | undefined
  usage_limit?: number | undefined
  usage_per_customer?: number | undefined
}
type SalesRuleDataCouponMassDeleteResultInterface = {
  failed_items: string[]
  missing_items: string[]
}
type SalesRuleDataCouponGenerationSpecExtensionInterface = { [x: string]: unknown }
type SalesRuleDataCouponGenerationSpecInterface = {
  delimiter?: string | undefined
  delimiter_at_every?: number | undefined
  extension_attributes?: SalesRuleDataCouponGenerationSpecExtensionInterface | undefined
  format: string
  length: number
  prefix?: string | undefined
  quantity: number
  rule_id: number
  suffix?: string | undefined
}
type SalesRuleDataCouponSearchResultInterface = {
  items: SalesRuleDataCouponInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataCreditmemoCommentExtensionInterface = { [x: string]: unknown }
type SalesDataCreditmemoCommentInterface = {
  comment: string
  created_at?: string | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataCreditmemoCommentExtensionInterface | undefined
  is_customer_notified: number
  is_visible_on_front: number
  parent_id: number
}
type SalesDataCreditmemoExtensionInterface = {
  base_customer_balance_amount?: number | undefined
  base_gift_cards_amount?: number | undefined
  customer_balance_amount?: number | undefined
  gift_cards_amount?: number | undefined
  gw_base_price?: string | undefined
  gw_base_tax_amount?: string | undefined
  gw_card_base_price?: string | undefined
  gw_card_base_tax_amount?: string | undefined
  gw_card_price?: string | undefined
  gw_card_tax_amount?: string | undefined
  gw_items_base_price?: string | undefined
  gw_items_base_tax_amount?: string | undefined
  gw_items_price?: string | undefined
  gw_items_tax_amount?: string | undefined
  gw_price?: string | undefined
  gw_tax_amount?: string | undefined
}
type SalesDataCreditmemoItemExtensionInterface = {
  invoice_text_codes?: string[] | undefined
  tax_codes?: string[] | undefined
  vertex_tax_codes?: string[] | undefined
}
type SalesDataCreditmemoItemInterface = {
  additional_data?: string | undefined
  base_cost: number
  base_discount_amount?: number | undefined
  base_discount_tax_compensation_amount?: number | undefined
  base_price: number
  base_price_incl_tax?: number | undefined
  base_row_total?: number | undefined
  base_row_total_incl_tax?: number | undefined
  base_tax_amount?: number | undefined
  base_weee_tax_applied_amount?: number | undefined
  base_weee_tax_applied_row_amnt?: number | undefined
  base_weee_tax_disposition?: number | undefined
  base_weee_tax_row_disposition?: number | undefined
  description?: string | undefined
  discount_amount?: number | undefined
  discount_tax_compensation_amount?: number | undefined
  entity_id: number
  extension_attributes?: SalesDataCreditmemoItemExtensionInterface | undefined
  name?: string | undefined
  order_item_id: number
  parent_id?: number | undefined
  price?: number | undefined
  price_incl_tax?: number | undefined
  product_id?: number | undefined
  qty: number
  row_total?: number | undefined
  row_total_incl_tax?: number | undefined
  sku?: string | undefined
  tax_amount?: number | undefined
  weee_tax_applied?: string | undefined
  weee_tax_applied_amount?: number | undefined
  weee_tax_applied_row_amount?: number | undefined
  weee_tax_disposition?: number | undefined
  weee_tax_row_disposition?: number | undefined
}
type SalesDataCreditmemoInterface = {
  adjustment?: number | undefined
  adjustment_negative?: number | undefined
  adjustment_positive?: number | undefined
  base_adjustment?: number | undefined
  base_adjustment_negative?: number | undefined
  base_adjustment_positive?: number | undefined
  base_currency_code?: string | undefined
  base_discount_amount?: number | undefined
  base_discount_tax_compensation_amount?: number | undefined
  base_grand_total?: number | undefined
  base_shipping_amount?: number | undefined
  base_shipping_discount_tax_compensation_amnt?: number | undefined
  base_shipping_incl_tax?: number | undefined
  base_shipping_tax_amount?: number | undefined
  base_subtotal?: number | undefined
  base_subtotal_incl_tax?: number | undefined
  base_tax_amount?: number | undefined
  base_to_global_rate?: number | undefined
  base_to_order_rate?: number | undefined
  billing_address_id?: number | undefined
  comments?: SalesDataCreditmemoCommentInterface[] | undefined
  created_at?: string | undefined
  creditmemo_status?: number | undefined
  discount_amount?: number | undefined
  discount_description?: string | undefined
  discount_tax_compensation_amount?: number | undefined
  email_sent?: number | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataCreditmemoExtensionInterface | undefined
  global_currency_code?: string | undefined
  grand_total?: number | undefined
  increment_id?: string | undefined
  invoice_id?: number | undefined
  items: SalesDataCreditmemoItemInterface[]
  order_currency_code?: string | undefined
  order_id: number
  shipping_address_id?: number | undefined
  shipping_amount?: number | undefined
  shipping_discount_tax_compensation_amount?: number | undefined
  shipping_incl_tax?: number | undefined
  shipping_tax_amount?: number | undefined
  state?: number | undefined
  store_currency_code?: string | undefined
  store_id?: number | undefined
  store_to_base_rate?: number | undefined
  store_to_order_rate?: number | undefined
  subtotal?: number | undefined
  subtotal_incl_tax?: number | undefined
  tax_amount?: number | undefined
  transaction_id?: string | undefined
  updated_at?: string | undefined
}
type SalesDataCreditmemoCommentSearchResultInterface = {
  items: SalesDataCreditmemoCommentInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataCreditmemoSearchResultInterface = {
  items: SalesDataCreditmemoInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CustomerDataGroupExtensionInterface = { [x: string]: unknown }
type CustomerDataGroupInterface = {
  code: string
  extension_attributes?: CustomerDataGroupExtensionInterface | undefined
  id?: number | undefined
  tax_class_id: number
  tax_class_name?: string | undefined
}
type CustomerDataGroupSearchResultsInterface = {
  items: CustomerDataGroupInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CustomerDataCustomerSearchResultsInterface = {
  items: CustomerDataCustomerInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CustomerDataValidationResultsInterface = { messages: string[]; valid: boolean }
type DirectoryDataRegionInformationExtensionInterface = { [x: string]: unknown }
type DirectoryDataRegionInformationInterface = {
  code: string
  extension_attributes?: DirectoryDataRegionInformationExtensionInterface | undefined
  id: string
  name: string
}
type DirectoryDataCountryInformationExtensionInterface = { [x: string]: unknown }
type DirectoryDataCountryInformationInterface = {
  available_regions?: DirectoryDataRegionInformationInterface[] | undefined
  extension_attributes?: DirectoryDataCountryInformationExtensionInterface | undefined
  full_name_english: string
  full_name_locale: string
  id: string
  three_letter_abbreviation: string
  two_letter_abbreviation: string
}
type DirectoryDataExchangeRateExtensionInterface = { [x: string]: unknown }
type DirectoryDataExchangeRateInterface = {
  currency_to: string
  extension_attributes?: DirectoryDataExchangeRateExtensionInterface | undefined
  rate: number
}
type DirectoryDataCurrencyInformationExtensionInterface = { [x: string]: unknown }
type DirectoryDataCurrencyInformationInterface = {
  available_currency_codes: string[]
  base_currency_code: string
  base_currency_symbol: string
  default_display_currency_code: string
  default_display_currency_symbol: string
  exchange_rates: DirectoryDataExchangeRateInterface[]
  extension_attributes?: DirectoryDataCurrencyInformationExtensionInterface | undefined
}
type EavDataAttributeSetExtensionInterface = { [x: string]: unknown }
type EavDataAttributeSetInterface = {
  attribute_set_id?: number | undefined
  attribute_set_name: string
  entity_type_id?: number | undefined
  extension_attributes?: EavDataAttributeSetExtensionInterface | undefined
  sort_order: number
}
type EavDataAttributeSetSearchResultsInterface = {
  items: EavDataAttributeSetInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type GiftWrappingDataWrappingExtensionInterface = { [x: string]: unknown }
type GiftWrappingDataWrappingInterface = {
  base_currency_code?: string | undefined
  base_price: number
  design: string
  extension_attributes?: GiftWrappingDataWrappingExtensionInterface | undefined
  image_base64_content?: string | undefined
  image_name?: string | undefined
  image_url?: string | undefined
  status: number
  website_ids?: number[] | undefined
  wrapping_id?: number | undefined
}
type GiftWrappingDataWrappingSearchResultsInterface = {
  items: GiftWrappingDataWrappingInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CompanyDataHierarchyExtensionInterface = { [x: string]: unknown }
type CompanyDataHierarchyInterface = {
  entity_id?: number | undefined
  entity_type?: string | undefined
  extension_attributes?: CompanyDataHierarchyExtensionInterface | undefined
  structure_id?: number | undefined
  structure_parent_id?: number | undefined
}
type SalesDataCreditmemoCreationArgumentsExtensionInterface = {
  return_to_stock_items?: number[] | undefined
}
type SalesDataCreditmemoCreationArgumentsInterface = {
  adjustment_negative?: number | undefined
  adjustment_positive?: number | undefined
  extension_attributes?: SalesDataCreditmemoCreationArgumentsExtensionInterface | undefined
  shipping_amount?: number | undefined
}
type SalesDataCreditmemoCommentCreationExtensionInterface = { [x: string]: unknown }
type SalesDataCreditmemoCommentCreationInterface = {
  comment: string
  extension_attributes?: SalesDataCreditmemoCommentCreationExtensionInterface | undefined
  is_visible_on_front: number
}
type SalesDataCreditmemoItemCreationExtensionInterface = { [x: string]: unknown }
type SalesDataCreditmemoItemCreationInterface = {
  extension_attributes?: SalesDataCreditmemoItemCreationExtensionInterface | undefined
  order_item_id: number
  qty: number
}
type SalesDataInvoiceCommentExtensionInterface = { [x: string]: unknown }
type SalesDataInvoiceCommentInterface = {
  comment: string
  created_at?: string | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataInvoiceCommentExtensionInterface | undefined
  is_customer_notified: number
  is_visible_on_front: number
  parent_id: number
}
type SalesDataOrderAddressExtensionInterface = {
  checkout_fields?: FrameworkAttributeInterface[] | undefined
}
type SalesDataOrderAddressInterface = {
  address_type: string
  city: string
  company?: string | undefined
  country_id: string
  customer_address_id?: number | undefined
  customer_id?: number | undefined
  email?: string | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataOrderAddressExtensionInterface | undefined
  fax?: string | undefined
  firstname: string
  lastname: string
  middlename?: string | undefined
  parent_id?: number | undefined
  postcode: string
  prefix?: string | undefined
  region?: string | undefined
  region_code?: string | undefined
  region_id?: number | undefined
  street?: string[] | undefined
  suffix?: string | undefined
  telephone: string
  vat_id?: string | undefined
  vat_is_valid?: number | undefined
  vat_request_date?: string | undefined
  vat_request_id?: string | undefined
  vat_request_success?: number | undefined
}
type TaxDataAppliedTaxRateExtensionInterface = { [x: string]: unknown }
type TaxDataAppliedTaxRateInterface = {
  code?: string | undefined
  extension_attributes?: TaxDataAppliedTaxRateExtensionInterface | undefined
  percent?: number | undefined
  title?: string | undefined
}
type TaxDataOrderTaxDetailsAppliedTaxExtensionInterface = {
  rates?: TaxDataAppliedTaxRateInterface[] | undefined
}
type TaxDataOrderTaxDetailsAppliedTaxInterface = {
  amount: number
  base_amount: number
  code?: string | undefined
  extension_attributes?: TaxDataOrderTaxDetailsAppliedTaxExtensionInterface | undefined
  percent?: number | undefined
  title?: string | undefined
}
type CompanyDataCompanyOrderExtensionInterface = { [x: string]: unknown }
type CompanyDataCompanyOrderInterface = {
  company_id?: number | undefined
  company_name?: string | undefined
  extension_attributes?: CompanyDataCompanyOrderExtensionInterface | undefined
  order_id?: number | undefined
}
type GiftCardAccountDataGiftCardInterface = {
  amount: number
  base_amount: number
  code: string
  id: number
}
type TaxDataOrderTaxDetailsItemExtensionInterface = { [x: string]: unknown }
type TaxDataOrderTaxDetailsItemInterface = {
  applied_taxes?: TaxDataOrderTaxDetailsAppliedTaxInterface[] | undefined
  associated_item_id?: number | undefined
  extension_attributes?: TaxDataOrderTaxDetailsItemExtensionInterface | undefined
  item_id?: number | undefined
  type?: string | undefined
}
type PaymentDataPaymentAdditionalInfoInterface = { key: string; value: string }
type SalesDataShippingAssignmentExtensionInterface = { [x: string]: unknown }
type SalesDataOrderItemExtensionInterface = {
  gift_message?: GiftMessageDataMessageInterface | undefined
  gw_base_price?: string | undefined
  gw_base_price_invoiced?: string | undefined
  gw_base_price_refunded?: string | undefined
  gw_base_tax_amount?: string | undefined
  gw_base_tax_amount_invoiced?: string | undefined
  gw_base_tax_amount_refunded?: string | undefined
  gw_id?: string | undefined
  gw_price?: string | undefined
  gw_price_invoiced?: string | undefined
  gw_price_refunded?: string | undefined
  gw_tax_amount?: string | undefined
  gw_tax_amount_invoiced?: string | undefined
  gw_tax_amount_refunded?: string | undefined
  invoice_text_codes?: string[] | undefined
  tax_codes?: string[] | undefined
  vertex_tax_codes?: string[] | undefined
}
type CatalogDataProductOptionExtensionInterface = {
  bundle_options?: BundleDataBundleOptionInterface[] | undefined
  configurable_item_options?:
    | ConfigurableProductDataConfigurableItemOptionValueInterface[]
    | undefined
  custom_options?: CatalogDataCustomOptionInterface[] | undefined
  downloadable_option?: DownloadableDataDownloadableOptionInterface | undefined
  giftcard_item_option?: GiftCardDataGiftCardOptionInterface | undefined
}
type CatalogDataProductOptionInterface = {
  extension_attributes?: CatalogDataProductOptionExtensionInterface | undefined
}
type SalesDataOrderItemInterface = {
  additional_data?: string | undefined
  amount_refunded?: number | undefined
  applied_rule_ids?: string | undefined
  base_amount_refunded?: number | undefined
  base_cost?: number | undefined
  base_discount_amount?: number | undefined
  base_discount_invoiced?: number | undefined
  base_discount_refunded?: number | undefined
  base_discount_tax_compensation_amount?: number | undefined
  base_discount_tax_compensation_invoiced?: number | undefined
  base_discount_tax_compensation_refunded?: number | undefined
  base_original_price?: number | undefined
  base_price?: number | undefined
  base_price_incl_tax?: number | undefined
  base_row_invoiced?: number | undefined
  base_row_total?: number | undefined
  base_row_total_incl_tax?: number | undefined
  base_tax_amount?: number | undefined
  base_tax_before_discount?: number | undefined
  base_tax_invoiced?: number | undefined
  base_tax_refunded?: number | undefined
  base_weee_tax_applied_amount?: number | undefined
  base_weee_tax_applied_row_amnt?: number | undefined
  base_weee_tax_disposition?: number | undefined
  base_weee_tax_row_disposition?: number | undefined
  created_at?: string | undefined
  description?: string | undefined
  discount_amount?: number | undefined
  discount_invoiced?: number | undefined
  discount_percent?: number | undefined
  discount_refunded?: number | undefined
  discount_tax_compensation_amount?: number | undefined
  discount_tax_compensation_canceled?: number | undefined
  discount_tax_compensation_invoiced?: number | undefined
  discount_tax_compensation_refunded?: number | undefined
  event_id?: number | undefined
  ext_order_item_id?: string | undefined
  extension_attributes?: SalesDataOrderItemExtensionInterface | undefined
  free_shipping?: number | undefined
  gw_base_price?: number | undefined
  gw_base_price_invoiced?: number | undefined
  gw_base_price_refunded?: number | undefined
  gw_base_tax_amount?: number | undefined
  gw_base_tax_amount_invoiced?: number | undefined
  gw_base_tax_amount_refunded?: number | undefined
  gw_id?: number | undefined
  gw_price?: number | undefined
  gw_price_invoiced?: number | undefined
  gw_price_refunded?: number | undefined
  gw_tax_amount?: number | undefined
  gw_tax_amount_invoiced?: number | undefined
  gw_tax_amount_refunded?: number | undefined
  is_qty_decimal?: number | undefined
  is_virtual?: number | undefined
  item_id?: number | undefined
  locked_do_invoice?: number | undefined
  locked_do_ship?: number | undefined
  name?: string | undefined
  no_discount?: number | undefined
  order_id?: number | undefined
  original_price?: number | undefined
  parent_item?: SalesDataOrderItemInterface | undefined
  parent_item_id?: number | undefined
  price?: number | undefined
  price_incl_tax?: number | undefined
  product_id?: number | undefined
  product_option?: CatalogDataProductOptionInterface | undefined
  product_type?: string | undefined
  qty_backordered?: number | undefined
  qty_canceled?: number | undefined
  qty_invoiced?: number | undefined
  qty_ordered?: number | undefined
  qty_refunded?: number | undefined
  qty_returned?: number | undefined
  qty_shipped?: number | undefined
  quote_item_id?: number | undefined
  row_invoiced?: number | undefined
  row_total?: number | undefined
  row_total_incl_tax?: number | undefined
  row_weight?: number | undefined
  sku: string
  store_id?: number | undefined
  tax_amount?: number | undefined
  tax_before_discount?: number | undefined
  tax_canceled?: number | undefined
  tax_invoiced?: number | undefined
  tax_percent?: number | undefined
  tax_refunded?: number | undefined
  updated_at?: string | undefined
  weee_tax_applied?: string | undefined
  weee_tax_applied_amount?: number | undefined
  weee_tax_applied_row_amount?: number | undefined
  weee_tax_disposition?: number | undefined
  weee_tax_row_disposition?: number | undefined
  weight?: number | undefined
}
type TemandoShippingDataCollectionPointOrderCollectionPointInterface = {
  city: string
  collection_point_id: string
  country: string
  name: string
  postcode: string
  recipient_address_id: number
  region: string
  street: string[]
}
type TemandoShippingDataOrderShippingExperienceInterface = {
  code: string
  cost: number
  label: string
}
type SalesDataShippingExtensionInterface = {
  collection_point?: TemandoShippingDataCollectionPointOrderCollectionPointInterface | undefined
  ext_order_id?: string | undefined
  shipping_experience?: TemandoShippingDataOrderShippingExperienceInterface | undefined
}
type SalesDataTotalExtensionInterface = { [x: string]: unknown }
type SalesDataTotalInterface = {
  base_shipping_amount?: number | undefined
  base_shipping_canceled?: number | undefined
  base_shipping_discount_amount?: number | undefined
  base_shipping_discount_tax_compensation_amnt?: number | undefined
  base_shipping_incl_tax?: number | undefined
  base_shipping_invoiced?: number | undefined
  base_shipping_refunded?: number | undefined
  base_shipping_tax_amount?: number | undefined
  base_shipping_tax_refunded?: number | undefined
  extension_attributes?: SalesDataTotalExtensionInterface | undefined
  shipping_amount?: number | undefined
  shipping_canceled?: number | undefined
  shipping_discount_amount?: number | undefined
  shipping_discount_tax_compensation_amount?: number | undefined
  shipping_incl_tax?: number | undefined
  shipping_invoiced?: number | undefined
  shipping_refunded?: number | undefined
  shipping_tax_amount?: number | undefined
  shipping_tax_refunded?: number | undefined
}
type SalesDataShippingInterface = {
  address?: SalesDataOrderAddressInterface | undefined
  extension_attributes?: SalesDataShippingExtensionInterface | undefined
  method?: string | undefined
  total?: SalesDataTotalInterface | undefined
}
type SalesDataShippingAssignmentInterface = {
  extension_attributes?: SalesDataShippingAssignmentExtensionInterface | undefined
  items: SalesDataOrderItemInterface[]
  shipping: SalesDataShippingInterface
  stock_id?: number | undefined
}
type SalesDataOrderExtensionInterface = {
  amazon_order_reference_id?: string | undefined
  applied_taxes?: TaxDataOrderTaxDetailsAppliedTaxInterface[] | undefined
  base_customer_balance_amount?: number | undefined
  base_customer_balance_invoiced?: number | undefined
  base_customer_balance_refunded?: number | undefined
  base_customer_balance_total_refunded?: number | undefined
  base_gift_cards_amount?: number | undefined
  base_gift_cards_invoiced?: number | undefined
  base_gift_cards_refunded?: number | undefined
  base_reward_currency_amount?: number | undefined
  company_order_attributes?: CompanyDataCompanyOrderInterface | undefined
  converting_from_quote?: boolean | undefined
  customer_balance_amount?: number | undefined
  customer_balance_invoiced?: number | undefined
  customer_balance_refunded?: number | undefined
  customer_balance_total_refunded?: number | undefined
  gift_cards?: GiftCardAccountDataGiftCardInterface[] | undefined
  gift_cards_amount?: number | undefined
  gift_cards_invoiced?: number | undefined
  gift_cards_refunded?: number | undefined
  gift_message?: GiftMessageDataMessageInterface | undefined
  gw_add_card?: string | undefined
  gw_allow_gift_receipt?: string | undefined
  gw_base_price?: string | undefined
  gw_base_price_incl_tax?: string | undefined
  gw_base_price_invoiced?: string | undefined
  gw_base_price_refunded?: string | undefined
  gw_base_tax_amount?: string | undefined
  gw_base_tax_amount_invoiced?: string | undefined
  gw_base_tax_amount_refunded?: string | undefined
  gw_card_base_price?: string | undefined
  gw_card_base_price_incl_tax?: string | undefined
  gw_card_base_price_invoiced?: string | undefined
  gw_card_base_price_refunded?: string | undefined
  gw_card_base_tax_amount?: string | undefined
  gw_card_base_tax_invoiced?: string | undefined
  gw_card_base_tax_refunded?: string | undefined
  gw_card_price?: string | undefined
  gw_card_price_incl_tax?: string | undefined
  gw_card_price_invoiced?: string | undefined
  gw_card_price_refunded?: string | undefined
  gw_card_tax_amount?: string | undefined
  gw_card_tax_invoiced?: string | undefined
  gw_card_tax_refunded?: string | undefined
  gw_id?: string | undefined
  gw_items_base_price?: string | undefined
  gw_items_base_price_incl_tax?: string | undefined
  gw_items_base_price_invoiced?: string | undefined
  gw_items_base_price_refunded?: string | undefined
  gw_items_base_tax_amount?: string | undefined
  gw_items_base_tax_invoiced?: string | undefined
  gw_items_base_tax_refunded?: string | undefined
  gw_items_price?: string | undefined
  gw_items_price_incl_tax?: string | undefined
  gw_items_price_invoiced?: string | undefined
  gw_items_price_refunded?: string | undefined
  gw_items_tax_amount?: string | undefined
  gw_items_tax_invoiced?: string | undefined
  gw_items_tax_refunded?: string | undefined
  gw_price?: string | undefined
  gw_price_incl_tax?: string | undefined
  gw_price_invoiced?: string | undefined
  gw_price_refunded?: string | undefined
  gw_tax_amount?: string | undefined
  gw_tax_amount_invoiced?: string | undefined
  gw_tax_amount_refunded?: string | undefined
  item_applied_taxes?: TaxDataOrderTaxDetailsItemInterface[] | undefined
  payment_additional_info?: PaymentDataPaymentAdditionalInfoInterface[] | undefined
  reward_currency_amount?: number | undefined
  reward_points_balance?: number | undefined
  shipping_assignments?: SalesDataShippingAssignmentInterface[] | undefined
}
type VaultDataPaymentTokenInterface = {
  created_at?: string | undefined
  customer_id?: number | undefined
  entity_id?: number | undefined
  expires_at?: string | undefined
  gateway_token: string
  is_active: boolean
  is_visible: boolean
  payment_method_code: string
  public_hash: string
  token_details: string
  type: string
}
type SalesDataOrderPaymentExtensionInterface = {
  vault_payment_token?: VaultDataPaymentTokenInterface | undefined
}
type SalesDataOrderPaymentInterface = {
  account_status: string
  additional_data?: string | undefined
  additional_information: string[]
  address_status?: string | undefined
  amount_authorized?: number | undefined
  amount_canceled?: number | undefined
  amount_ordered?: number | undefined
  amount_paid?: number | undefined
  amount_refunded?: number | undefined
  anet_trans_method?: string | undefined
  base_amount_authorized?: number | undefined
  base_amount_canceled?: number | undefined
  base_amount_ordered?: number | undefined
  base_amount_paid?: number | undefined
  base_amount_paid_online?: number | undefined
  base_amount_refunded?: number | undefined
  base_amount_refunded_online?: number | undefined
  base_shipping_amount?: number | undefined
  base_shipping_captured?: number | undefined
  base_shipping_refunded?: number | undefined
  cc_approval?: string | undefined
  cc_avs_status?: string | undefined
  cc_cid_status?: string | undefined
  cc_debug_request_body?: string | undefined
  cc_debug_response_body?: string | undefined
  cc_debug_response_serialized?: string | undefined
  cc_exp_month?: string | undefined
  cc_exp_year?: string | undefined
  cc_last4: string
  cc_number_enc?: string | undefined
  cc_owner?: string | undefined
  cc_secure_verify?: string | undefined
  cc_ss_issue?: string | undefined
  cc_ss_start_month?: string | undefined
  cc_ss_start_year?: string | undefined
  cc_status?: string | undefined
  cc_status_description?: string | undefined
  cc_trans_id?: string | undefined
  cc_type?: string | undefined
  echeck_account_name?: string | undefined
  echeck_account_type?: string | undefined
  echeck_bank_name?: string | undefined
  echeck_routing_number?: string | undefined
  echeck_type?: string | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataOrderPaymentExtensionInterface | undefined
  last_trans_id?: string | undefined
  method: string
  parent_id?: number | undefined
  po_number?: string | undefined
  protection_eligibility?: string | undefined
  quote_payment_id?: number | undefined
  shipping_amount?: number | undefined
  shipping_captured?: number | undefined
  shipping_refunded?: number | undefined
}
type SalesDataOrderStatusHistoryExtensionInterface = { [x: string]: unknown }
type SalesDataOrderStatusHistoryInterface = {
  comment: string
  created_at?: string | undefined
  entity_id?: number | undefined
  entity_name?: string | undefined
  extension_attributes?: SalesDataOrderStatusHistoryExtensionInterface | undefined
  is_customer_notified: number
  is_visible_on_front: number
  parent_id: number
  status?: string | undefined
}
type SalesDataOrderInterface = {
  adjustment_negative?: number | undefined
  adjustment_positive?: number | undefined
  applied_rule_ids?: string | undefined
  base_adjustment_negative?: number | undefined
  base_adjustment_positive?: number | undefined
  base_currency_code?: string | undefined
  base_discount_amount?: number | undefined
  base_discount_canceled?: number | undefined
  base_discount_invoiced?: number | undefined
  base_discount_refunded?: number | undefined
  base_discount_tax_compensation_amount?: number | undefined
  base_discount_tax_compensation_invoiced?: number | undefined
  base_discount_tax_compensation_refunded?: number | undefined
  base_grand_total: number
  base_shipping_amount?: number | undefined
  base_shipping_canceled?: number | undefined
  base_shipping_discount_amount?: number | undefined
  base_shipping_discount_tax_compensation_amnt?: number | undefined
  base_shipping_incl_tax?: number | undefined
  base_shipping_invoiced?: number | undefined
  base_shipping_refunded?: number | undefined
  base_shipping_tax_amount?: number | undefined
  base_shipping_tax_refunded?: number | undefined
  base_subtotal?: number | undefined
  base_subtotal_canceled?: number | undefined
  base_subtotal_incl_tax?: number | undefined
  base_subtotal_invoiced?: number | undefined
  base_subtotal_refunded?: number | undefined
  base_tax_amount?: number | undefined
  base_tax_canceled?: number | undefined
  base_tax_invoiced?: number | undefined
  base_tax_refunded?: number | undefined
  base_to_global_rate?: number | undefined
  base_to_order_rate?: number | undefined
  base_total_canceled?: number | undefined
  base_total_due?: number | undefined
  base_total_invoiced?: number | undefined
  base_total_invoiced_cost?: number | undefined
  base_total_offline_refunded?: number | undefined
  base_total_online_refunded?: number | undefined
  base_total_paid?: number | undefined
  base_total_qty_ordered?: number | undefined
  base_total_refunded?: number | undefined
  billing_address?: SalesDataOrderAddressInterface | undefined
  billing_address_id?: number | undefined
  can_ship_partially?: number | undefined
  can_ship_partially_item?: number | undefined
  coupon_code?: string | undefined
  created_at?: string | undefined
  customer_dob?: string | undefined
  customer_email: string
  customer_firstname?: string | undefined
  customer_gender?: number | undefined
  customer_group_id?: number | undefined
  customer_id?: number | undefined
  customer_is_guest?: number | undefined
  customer_lastname?: string | undefined
  customer_middlename?: string | undefined
  customer_note?: string | undefined
  customer_note_notify?: number | undefined
  customer_prefix?: string | undefined
  customer_suffix?: string | undefined
  customer_taxvat?: string | undefined
  discount_amount?: number | undefined
  discount_canceled?: number | undefined
  discount_description?: string | undefined
  discount_invoiced?: number | undefined
  discount_refunded?: number | undefined
  discount_tax_compensation_amount?: number | undefined
  discount_tax_compensation_invoiced?: number | undefined
  discount_tax_compensation_refunded?: number | undefined
  edit_increment?: number | undefined
  email_sent?: number | undefined
  entity_id?: number | undefined
  ext_customer_id?: string | undefined
  ext_order_id?: string | undefined
  extension_attributes?: SalesDataOrderExtensionInterface | undefined
  forced_shipment_with_invoice?: number | undefined
  global_currency_code?: string | undefined
  grand_total: number
  hold_before_state?: string | undefined
  hold_before_status?: string | undefined
  increment_id?: string | undefined
  is_virtual?: number | undefined
  items: SalesDataOrderItemInterface[]
  order_currency_code?: string | undefined
  original_increment_id?: string | undefined
  payment?: SalesDataOrderPaymentInterface | undefined
  payment_auth_expiration?: number | undefined
  payment_authorization_amount?: number | undefined
  protect_code?: string | undefined
  quote_address_id?: number | undefined
  quote_id?: number | undefined
  relation_child_id?: string | undefined
  relation_child_real_id?: string | undefined
  relation_parent_id?: string | undefined
  relation_parent_real_id?: string | undefined
  remote_ip?: string | undefined
  shipping_amount?: number | undefined
  shipping_canceled?: number | undefined
  shipping_description?: string | undefined
  shipping_discount_amount?: number | undefined
  shipping_discount_tax_compensation_amount?: number | undefined
  shipping_incl_tax?: number | undefined
  shipping_invoiced?: number | undefined
  shipping_refunded?: number | undefined
  shipping_tax_amount?: number | undefined
  shipping_tax_refunded?: number | undefined
  state?: string | undefined
  status?: string | undefined
  status_histories?: SalesDataOrderStatusHistoryInterface[] | undefined
  store_currency_code?: string | undefined
  store_id?: number | undefined
  store_name?: string | undefined
  store_to_base_rate?: number | undefined
  store_to_order_rate?: number | undefined
  subtotal?: number | undefined
  subtotal_canceled?: number | undefined
  subtotal_incl_tax?: number | undefined
  subtotal_invoiced?: number | undefined
  subtotal_refunded?: number | undefined
  tax_amount?: number | undefined
  tax_canceled?: number | undefined
  tax_invoiced?: number | undefined
  tax_refunded?: number | undefined
  total_canceled?: number | undefined
  total_due?: number | undefined
  total_invoiced?: number | undefined
  total_item_count?: number | undefined
  total_offline_refunded?: number | undefined
  total_online_refunded?: number | undefined
  total_paid?: number | undefined
  total_qty_ordered?: number | undefined
  total_refunded?: number | undefined
  updated_at?: string | undefined
  weight?: number | undefined
  x_forwarded_for?: string | undefined
}
type SalesDataInvoiceExtensionInterface = {
  base_customer_balance_amount?: number | undefined
  base_gift_cards_amount?: number | undefined
  customer_balance_amount?: number | undefined
  gift_cards_amount?: number | undefined
  gw_base_price?: string | undefined
  gw_base_tax_amount?: string | undefined
  gw_card_base_price?: string | undefined
  gw_card_base_tax_amount?: string | undefined
  gw_card_price?: string | undefined
  gw_card_tax_amount?: string | undefined
  gw_items_base_price?: string | undefined
  gw_items_base_tax_amount?: string | undefined
  gw_items_price?: string | undefined
  gw_items_tax_amount?: string | undefined
  gw_price?: string | undefined
  gw_tax_amount?: string | undefined
  vertex_tax_calculation_billing_address?: SalesDataOrderAddressInterface | undefined
  vertex_tax_calculation_order?: SalesDataOrderInterface | undefined
  vertex_tax_calculation_shipping_address?: SalesDataOrderAddressInterface | undefined
}
type SalesDataInvoiceItemExtensionInterface = {
  invoice_text_codes?: string[] | undefined
  tax_codes?: string[] | undefined
  vertex_tax_codes?: string[] | undefined
}
type SalesDataInvoiceItemInterface = {
  additional_data?: string | undefined
  base_cost?: number | undefined
  base_discount_amount?: number | undefined
  base_discount_tax_compensation_amount?: number | undefined
  base_price?: number | undefined
  base_price_incl_tax?: number | undefined
  base_row_total?: number | undefined
  base_row_total_incl_tax?: number | undefined
  base_tax_amount?: number | undefined
  description?: string | undefined
  discount_amount?: number | undefined
  discount_tax_compensation_amount?: number | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataInvoiceItemExtensionInterface | undefined
  name?: string | undefined
  order_item_id: number
  parent_id?: number | undefined
  price?: number | undefined
  price_incl_tax?: number | undefined
  product_id?: number | undefined
  qty: number
  row_total?: number | undefined
  row_total_incl_tax?: number | undefined
  sku: string
  tax_amount?: number | undefined
}
type SalesDataInvoiceInterface = {
  base_currency_code?: string | undefined
  base_discount_amount?: number | undefined
  base_discount_tax_compensation_amount?: number | undefined
  base_grand_total?: number | undefined
  base_shipping_amount?: number | undefined
  base_shipping_discount_tax_compensation_amnt?: number | undefined
  base_shipping_incl_tax?: number | undefined
  base_shipping_tax_amount?: number | undefined
  base_subtotal?: number | undefined
  base_subtotal_incl_tax?: number | undefined
  base_tax_amount?: number | undefined
  base_to_global_rate?: number | undefined
  base_to_order_rate?: number | undefined
  base_total_refunded?: number | undefined
  billing_address_id?: number | undefined
  can_void_flag?: number | undefined
  comments?: SalesDataInvoiceCommentInterface[] | undefined
  created_at?: string | undefined
  discount_amount?: number | undefined
  discount_description?: string | undefined
  discount_tax_compensation_amount?: number | undefined
  email_sent?: number | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataInvoiceExtensionInterface | undefined
  global_currency_code?: string | undefined
  grand_total?: number | undefined
  increment_id?: string | undefined
  is_used_for_refund?: number | undefined
  items: SalesDataInvoiceItemInterface[]
  order_currency_code?: string | undefined
  order_id: number
  shipping_address_id?: number | undefined
  shipping_amount?: number | undefined
  shipping_discount_tax_compensation_amount?: number | undefined
  shipping_incl_tax?: number | undefined
  shipping_tax_amount?: number | undefined
  state?: number | undefined
  store_currency_code?: string | undefined
  store_id?: number | undefined
  store_to_base_rate?: number | undefined
  store_to_order_rate?: number | undefined
  subtotal?: number | undefined
  subtotal_incl_tax?: number | undefined
  tax_amount?: number | undefined
  total_qty: number
  transaction_id?: string | undefined
  updated_at?: string | undefined
}
type SalesDataInvoiceSearchResultInterface = {
  items: SalesDataInvoiceInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataInvoiceCommentSearchResultInterface = {
  items: SalesDataInvoiceCommentInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type NegotiableQuoteDataAttachmentContentExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataAttachmentContentInterface = {
  base64_encoded_data: string
  extension_attributes?: NegotiableQuoteDataAttachmentContentExtensionInterface | undefined
  name: string
  type: string
}
type NegotiableQuoteDataCommentAttachmentExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataCommentAttachmentInterface = {
  attachment_id: number
  comment_id: number
  extension_attributes?: NegotiableQuoteDataCommentAttachmentExtensionInterface | undefined
  file_name: string
  file_path: string
  file_type: string
}
type NegotiableQuoteDataCommentExtensionInterface = { [x: string]: unknown }
type NegotiableQuoteDataCommentInterface = {
  attachments: NegotiableQuoteDataCommentAttachmentInterface[]
  comment: string
  created_at: string
  creator_id: number
  creator_type: number
  entity_id: number
  extension_attributes?: NegotiableQuoteDataCommentExtensionInterface | undefined
  is_decline: number
  is_draft: number
  parent_id: number
}
type SalesDataInvoiceCreationArgumentsExtensionInterface = { [x: string]: unknown }
type SalesDataInvoiceCreationArgumentsInterface = {
  extension_attributes?: SalesDataInvoiceCreationArgumentsExtensionInterface | undefined
}
type SalesDataInvoiceCommentCreationExtensionInterface = { [x: string]: unknown }
type SalesDataInvoiceCommentCreationInterface = {
  comment: string
  extension_attributes?: SalesDataInvoiceCommentCreationExtensionInterface | undefined
  is_visible_on_front: number
}
type SalesDataInvoiceItemCreationExtensionInterface = { [x: string]: unknown }
type SalesDataInvoiceItemCreationInterface = {
  extension_attributes?: SalesDataInvoiceItemCreationExtensionInterface | undefined
  order_item_id: number
  qty: number
}
type SalesDataShipmentCreationArgumentsExtensionInterface = {
  ext_location_id?: string | undefined
  ext_return_shipment_id?: string | undefined
  ext_shipment_id?: string | undefined
  ext_tracking_reference?: string | undefined
  ext_tracking_url?: string | undefined
  shipping_label?: string | undefined
}
type SalesDataShipmentCreationArgumentsInterface = {
  extension_attributes?: SalesDataShipmentCreationArgumentsExtensionInterface | undefined
}
type SalesDataShipmentCommentCreationExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentCommentCreationInterface = {
  comment: string
  extension_attributes?: SalesDataShipmentCommentCreationExtensionInterface | undefined
  is_visible_on_front: number
}
type SalesDataShipmentItemCreationExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentItemCreationInterface = {
  extension_attributes?: SalesDataShipmentItemCreationExtensionInterface | undefined
  order_item_id: number
  qty: number
}
type SalesDataShipmentPackageCreationExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentPackageCreationInterface = {
  extension_attributes?: SalesDataShipmentPackageCreationExtensionInterface | undefined
}
type SalesDataShipmentTrackCreationExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentTrackCreationInterface = {
  carrier_code: string
  extension_attributes?: SalesDataShipmentTrackCreationExtensionInterface | undefined
  title: string
  track_number: string
}
type SalesDataOrderSearchResultInterface = {
  items: SalesDataOrderInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataOrderItemSearchResultInterface = {
  items: SalesDataOrderItemInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataOrderStatusHistorySearchResultInterface = {
  items: SalesDataOrderStatusHistoryInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataProductSearchResultsInterface = {
  items: CatalogDataProductInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataProductRenderButtonExtensionInterface = { [x: string]: unknown }
type CatalogDataProductRenderButtonInterface = {
  extension_attributes?: CatalogDataProductRenderButtonExtensionInterface | undefined
  post_data: string
  required_options: boolean
  url: string
}
type CatalogDataProductRenderExtensionInterface = {
  review_html?: string | undefined
  wishlist_button?: CatalogDataProductRenderButtonInterface | undefined
}
type CatalogDataProductRenderImageExtensionInterface = { [x: string]: unknown }
type CatalogDataProductRenderImageInterface = {
  code: string
  extension_attributes?: CatalogDataProductRenderImageExtensionInterface | undefined
  height: number
  label: string
  resized_height: number
  resized_width: number
  url: string
  width: number
}
type MsrpDataProductRenderMsrpPriceInfoExtensionInterface = { [x: string]: unknown }
type MsrpDataProductRenderMsrpPriceInfoInterface = {
  explanation_message: string
  extension_attributes?: MsrpDataProductRenderMsrpPriceInfoExtensionInterface | undefined
  is_applicable: string
  is_shown_price_on_gesture: string
  msrp_message: string
  msrp_price: string
}
type WeeeDataProductRenderWeeeAdjustmentAttributeExtensionInterface = { [x: string]: unknown }
type WeeeDataProductRenderWeeeAdjustmentAttributeInterface = {
  amount: string
  amount_excl_tax: string
  attribute_code: string
  extension_attributes: WeeeDataProductRenderWeeeAdjustmentAttributeExtensionInterface
  tax_amount: string
  tax_amount_incl_tax: string
}
type CatalogDataProductRenderPriceInfoExtensionInterface = {
  msrp?: MsrpDataProductRenderMsrpPriceInfoInterface | undefined
  tax_adjustments?: CatalogDataProductRenderPriceInfoInterface | undefined
  weee_adjustment?: string | undefined
  weee_attributes?: WeeeDataProductRenderWeeeAdjustmentAttributeInterface[] | undefined
}
type CatalogDataProductRenderFormattedPriceInfoExtensionInterface = { [x: string]: unknown }
type CatalogDataProductRenderFormattedPriceInfoInterface = {
  extension_attributes?: CatalogDataProductRenderFormattedPriceInfoExtensionInterface | undefined
  final_price: string
  max_price: string
  max_regular_price: string
  minimal_price: string
  minimal_regular_price: string
  regular_price: string
  special_price: string
}
type CatalogDataProductRenderPriceInfoInterface = {
  extension_attributes?: CatalogDataProductRenderPriceInfoExtensionInterface | undefined
  final_price: number
  formatted_prices: CatalogDataProductRenderFormattedPriceInfoInterface
  max_price: number
  max_regular_price: number
  minimal_price: number
  minimal_regular_price: number
  regular_price: number
  special_price: number
}
type CatalogDataProductRenderInterface = {
  add_to_cart_button: CatalogDataProductRenderButtonInterface
  add_to_compare_button: CatalogDataProductRenderButtonInterface
  currency_code: string
  extension_attributes: CatalogDataProductRenderExtensionInterface
  id: number
  images: CatalogDataProductRenderImageInterface[]
  is_salable: string
  name: string
  price_info: CatalogDataProductRenderPriceInfoInterface
  store_id: number
  type: string
  url: string
}
type CatalogDataProductRenderSearchResultsInterface = { items: CatalogDataProductRenderInterface[] }
type EavDataAttributeGroupExtensionInterface = {
  attribute_group_code?: string | undefined
  sort_order?: string | undefined
}
type EavDataAttributeGroupInterface = {
  attribute_group_id?: string | undefined
  attribute_group_name?: string | undefined
  attribute_set_id?: number | undefined
  extension_attributes?: EavDataAttributeGroupExtensionInterface | undefined
}
type EavDataAttributeGroupSearchResultsInterface = {
  items: EavDataAttributeGroupInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataProductAttributeInterface = {
  apply_to?: string[] | undefined
  attribute_code: string
  attribute_id?: number | undefined
  backend_model?: string | undefined
  backend_type?: string | undefined
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  default_frontend_label?: string | undefined
  default_value?: string | undefined
  entity_type_id: string
  extension_attributes?: CatalogDataEavAttributeExtensionInterface | undefined
  frontend_class?: string | undefined
  frontend_input: string
  frontend_labels: EavDataAttributeFrontendLabelInterface[]
  is_comparable?: string | undefined
  is_filterable?: boolean | undefined
  is_filterable_in_grid?: boolean | undefined
  is_filterable_in_search?: boolean | undefined
  is_html_allowed_on_front?: boolean | undefined
  is_required: boolean
  is_searchable?: string | undefined
  is_unique?: string | undefined
  is_used_for_promo_rules?: string | undefined
  is_used_in_grid?: boolean | undefined
  is_user_defined?: boolean | undefined
  is_visible?: boolean | undefined
  is_visible_in_advanced_search?: string | undefined
  is_visible_in_grid?: boolean | undefined
  is_visible_on_front?: string | undefined
  is_wysiwyg_enabled?: boolean | undefined
  note?: string | undefined
  options?: EavDataAttributeOptionInterface[] | undefined
  position?: number | undefined
  scope?: string | undefined
  source_model?: string | undefined
  used_for_sort_by?: boolean | undefined
  used_in_product_listing?: string | undefined
  validation_rules?: EavDataAttributeValidationRuleInterface[] | undefined
}
type CatalogDataProductAttributeSearchResultsInterface = {
  items: CatalogDataProductAttributeInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CatalogDataProductAttributeTypeExtensionInterface = { [x: string]: unknown }
type CatalogDataProductAttributeTypeInterface = {
  extension_attributes?: CatalogDataProductAttributeTypeExtensionInterface | undefined
  label: string
  value: string
}
type CatalogDataBasePriceExtensionInterface = { [x: string]: unknown }
type CatalogDataBasePriceInterface = {
  extension_attributes?: CatalogDataBasePriceExtensionInterface | undefined
  price: number
  sku: string
  store_id: number
}
type CatalogDataPriceUpdateResultExtensionInterface = { [x: string]: unknown }
type CatalogDataPriceUpdateResultInterface = {
  extension_attributes?: CatalogDataPriceUpdateResultExtensionInterface | undefined
  message: string
  parameters: string[]
}
type CatalogDataCostExtensionInterface = { [x: string]: unknown }
type CatalogDataCostInterface = {
  cost: number
  extension_attributes?: CatalogDataCostExtensionInterface | undefined
  sku: string
  store_id: number
}
type CatalogDataProductLinkTypeExtensionInterface = { [x: string]: unknown }
type CatalogDataProductLinkTypeInterface = {
  code: number
  extension_attributes?: CatalogDataProductLinkTypeExtensionInterface | undefined
  name: string
}
type CatalogDataProductLinkAttributeExtensionInterface = { [x: string]: unknown }
type CatalogDataProductLinkAttributeInterface = {
  code: string
  extension_attributes?: CatalogDataProductLinkAttributeExtensionInterface | undefined
  type: string
}
type CatalogDataProductCustomOptionTypeExtensionInterface = { [x: string]: unknown }
type CatalogDataProductCustomOptionTypeInterface = {
  code: string
  extension_attributes?: CatalogDataProductCustomOptionTypeExtensionInterface | undefined
  group: string
  label: string
}
type CatalogDataSpecialPriceExtensionInterface = { [x: string]: unknown }
type CatalogDataSpecialPriceInterface = {
  extension_attributes?: CatalogDataSpecialPriceExtensionInterface | undefined
  price: number
  price_from: string
  price_to: string
  sku: string
  store_id: number
}
type CatalogDataTierPriceExtensionInterface = { [x: string]: unknown }
type CatalogDataTierPriceInterface = {
  customer_group: string
  extension_attributes?: CatalogDataTierPriceExtensionInterface | undefined
  price: number
  price_type: string
  quantity: number
  sku: string
  website_id: number
}
type CatalogDataProductTypeExtensionInterface = { [x: string]: unknown }
type CatalogDataProductTypeInterface = {
  extension_attributes?: CatalogDataProductTypeExtensionInterface | undefined
  label: string
  name: string
}
type CatalogDataProductWebsiteLinkInterface = { sku: string; website_id: number }
type RequisitionListDataRequisitionListExtensionInterface = { [x: string]: unknown }
type RequisitionListDataRequisitionListItemExtensionInterface = { [x: string]: unknown }
type RequisitionListDataRequisitionListItemInterface = {
  added_at: string
  extension_attributes?: RequisitionListDataRequisitionListItemExtensionInterface | undefined
  id: number
  options: string[]
  qty: number
  requisition_list_id: number
  sku: string
  store_id: number
}
type RequisitionListDataRequisitionListInterface = {
  customer_id: number
  description: string
  extension_attributes?: RequisitionListDataRequisitionListExtensionInterface | undefined
  id: number
  items: RequisitionListDataRequisitionListItemInterface[]
  name: string
  updated_at: string
}
type RmaDataCommentExtensionInterface = { [x: string]: unknown }
type RmaDataCommentInterface = {
  admin: boolean
  comment: string
  created_at: string
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  customer_notified: boolean
  entity_id: number
  extension_attributes?: RmaDataCommentExtensionInterface | undefined
  rma_entity_id: number
  status: string
  visible_on_front: boolean
}
type RmaDataRmaExtensionInterface = { [x: string]: unknown }
type RmaDataItemExtensionInterface = { [x: string]: unknown }
type RmaDataItemInterface = {
  condition: string
  entity_id: number
  extension_attributes?: RmaDataItemExtensionInterface | undefined
  order_item_id: number
  qty_approved: number
  qty_authorized: number
  qty_requested: number
  qty_returned: number
  reason: string
  resolution: string
  rma_entity_id: number
  status: string
}
type RmaDataTrackExtensionInterface = { [x: string]: unknown }
type RmaDataTrackInterface = {
  carrier_code: string
  carrier_title: string
  entity_id: number
  extension_attributes?: RmaDataTrackExtensionInterface | undefined
  rma_entity_id: number
  track_number: string
}
type RmaDataRmaInterface = {
  comments: RmaDataCommentInterface[]
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  customer_custom_email: string
  customer_id: number
  date_requested: string
  entity_id: number
  extension_attributes?: RmaDataRmaExtensionInterface | undefined
  increment_id: string
  items: RmaDataItemInterface[]
  order_id: number
  order_increment_id: string
  status: string
  store_id: number
  tracks: RmaDataTrackInterface[]
}
type RmaDataRmaSearchResultInterface = {
  items: RmaDataRmaInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type RmaDataCommentSearchResultInterface = {
  items: RmaDataCommentInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type RmaDataTrackSearchResultInterface = {
  items: RmaDataTrackInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type FrameworkMetadataObjectInterface = { attribute_code: string }
type SalesRuleDataConditionExtensionInterface = { [x: string]: unknown }
type SalesRuleDataConditionInterface = {
  aggregator_type?: string | undefined
  attribute_name?: string | undefined
  condition_type: string
  conditions?: SalesRuleDataConditionInterface[] | undefined
  extension_attributes?: SalesRuleDataConditionExtensionInterface | undefined
  operator: string
  value: string
}
type SalesRuleDataRuleExtensionInterface = { reward_points_delta?: number | undefined }
type SalesRuleDataRuleLabelExtensionInterface = { [x: string]: unknown }
type SalesRuleDataRuleLabelInterface = {
  extension_attributes?: SalesRuleDataRuleLabelExtensionInterface | undefined
  store_id: number
  store_label: string
}
type SalesRuleDataRuleInterface = {
  action_condition?: SalesRuleDataConditionInterface | undefined
  apply_to_shipping: boolean
  condition?: SalesRuleDataConditionInterface | undefined
  coupon_type: string
  customer_group_ids: number[]
  description?: string | undefined
  discount_amount: number
  discount_qty?: number | undefined
  discount_step: number
  extension_attributes?: SalesRuleDataRuleExtensionInterface | undefined
  from_date?: string | undefined
  is_active: boolean
  is_advanced: boolean
  is_rss: boolean
  name?: string | undefined
  product_ids?: number[] | undefined
  rule_id?: number | undefined
  simple_action?: string | undefined
  simple_free_shipping?: string | undefined
  sort_order: number
  stop_rules_processing: boolean
  store_labels?: SalesRuleDataRuleLabelInterface[] | undefined
  times_used: number
  to_date?: string | undefined
  use_auto_generation: boolean
  uses_per_coupon: number
  uses_per_customer: number
  website_ids: number[]
}
type SalesRuleDataRuleSearchResultInterface = {
  items: SalesRuleDataRuleInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type FrameworkSearchAggregationValueInterface = { metrics: string[]; value: string }
type FrameworkSearchBucketInterface = {
  name: string
  values: FrameworkSearchAggregationValueInterface[]
}
type FrameworkSearchAggregationInterface = {
  bucket_names: string[]
  buckets: FrameworkSearchBucketInterface[]
}
type FrameworkSearchDocumentInterface = {
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  id: number
}
type FrameworkSearchSearchCriteriaInterface = {
  current_page?: number | undefined
  filter_groups: FrameworkSearchFilterGroup[]
  page_size?: number | undefined
  request_name: string
  sort_orders?: FrameworkSortOrder[] | undefined
}
type FrameworkSearchSearchResultInterface = {
  aggregations: FrameworkSearchAggregationInterface
  items: FrameworkSearchDocumentInterface[]
  search_criteria: FrameworkSearchSearchCriteriaInterface
  total_count: number
}
type SharedCatalogDataSharedCatalogInterface = {
  created_at: string
  created_by: number
  customer_group_id: number
  description: string
  id?: number | undefined
  name: string
  store_id: number
  tax_class_id: number
  type: number
}
type SharedCatalogDataSearchResultsInterface = {
  items: SharedCatalogDataSharedCatalogInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataShipmentCommentExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentCommentInterface = {
  comment: string
  created_at?: string | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataShipmentCommentExtensionInterface | undefined
  is_customer_notified: number
  is_visible_on_front: number
  parent_id: number
}
type SalesDataShipmentExtensionInterface = {
  ext_location_id?: string | undefined
  ext_return_shipment_id?: string | undefined
  ext_shipment_id?: string | undefined
  ext_tracking_reference?: string | undefined
  ext_tracking_url?: string | undefined
}
type SalesDataShipmentItemExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentItemInterface = {
  additional_data?: string | undefined
  description?: string | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataShipmentItemExtensionInterface | undefined
  name?: string | undefined
  order_item_id: number
  parent_id?: number | undefined
  price?: number | undefined
  product_id?: number | undefined
  qty: number
  row_total?: number | undefined
  sku?: string | undefined
  weight?: number | undefined
}
type SalesDataShipmentPackageExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentPackageInterface = {
  extension_attributes?: SalesDataShipmentPackageExtensionInterface | undefined
}
type SalesDataShipmentTrackExtensionInterface = { [x: string]: unknown }
type SalesDataShipmentTrackInterface = {
  carrier_code: string
  created_at?: string | undefined
  description: string
  entity_id?: number | undefined
  extension_attributes?: SalesDataShipmentTrackExtensionInterface | undefined
  order_id: number
  parent_id: number
  qty: number
  title: string
  track_number: string
  updated_at?: string | undefined
  weight: number
}
type SalesDataShipmentInterface = {
  billing_address_id?: number | undefined
  comments: SalesDataShipmentCommentInterface[]
  created_at?: string | undefined
  customer_id?: number | undefined
  email_sent?: number | undefined
  entity_id?: number | undefined
  extension_attributes?: SalesDataShipmentExtensionInterface | undefined
  increment_id?: string | undefined
  items: SalesDataShipmentItemInterface[]
  order_id: number
  packages?: SalesDataShipmentPackageInterface[] | undefined
  shipment_status?: number | undefined
  shipping_address_id?: number | undefined
  shipping_label?: string | undefined
  store_id?: number | undefined
  total_qty?: number | undefined
  total_weight?: number | undefined
  tracks: SalesDataShipmentTrackInterface[]
  updated_at?: string | undefined
}
type SalesDataShipmentCommentSearchResultInterface = {
  items: SalesDataShipmentCommentInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataShipmentSearchResultInterface = {
  items: SalesDataShipmentInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type FrameworkCriteriaInterface = {
  criteria_list: FrameworkCriteriaInterface[]
  filters: string[]
  limit: string[]
  mapper_interface_name: string
  orders: string[]
}
type CatalogInventoryStockItemCriteriaInterface = {
  criteria_list: FrameworkCriteriaInterface[]
  filters: string[]
  limit: string[]
  mapper_interface_name: string
  orders: string[]
}
type CatalogInventoryDataStockItemCollectionInterface = {
  items: CatalogInventoryDataStockItemInterface[]
  search_criteria: CatalogInventoryStockItemCriteriaInterface
  total_count: number
}
type CatalogInventoryDataStockStatusExtensionInterface = { [x: string]: unknown }
type CatalogInventoryDataStockStatusInterface = {
  extension_attributes?: CatalogInventoryDataStockStatusExtensionInterface | undefined
  product_id: number
  qty: number
  stock_id: number
  stock_item: CatalogInventoryDataStockItemInterface
  stock_status: number
}
type StoreDataStoreConfigExtensionInterface = { [x: string]: unknown }
type StoreDataStoreConfigInterface = {
  base_currency_code: string
  base_link_url: string
  base_media_url: string
  base_static_url: string
  base_url: string
  code: string
  default_display_currency_code: string
  extension_attributes?: StoreDataStoreConfigExtensionInterface | undefined
  id: number
  locale: string
  secure_base_link_url: string
  secure_base_media_url: string
  secure_base_static_url: string
  secure_base_url: string
  timezone: string
  website_id: number
  weight_unit: string
}
type StoreDataGroupExtensionInterface = { [x: string]: unknown }
type StoreDataGroupInterface = {
  code: string
  default_store_id: number
  extension_attributes?: StoreDataGroupExtensionInterface | undefined
  id: number
  name: string
  root_category_id: number
  website_id: number
}
type StoreDataStoreExtensionInterface = { [x: string]: unknown }
type StoreDataStoreInterface = {
  code: string
  extension_attributes?: StoreDataStoreExtensionInterface | undefined
  id: number
  name: string
  store_group_id: number
  website_id: number
}
type StoreDataWebsiteExtensionInterface = { [x: string]: unknown }
type StoreDataWebsiteInterface = {
  code: string
  default_group_id: number
  extension_attributes?: StoreDataWebsiteExtensionInterface | undefined
  id: number
  name: string
}
type TaxDataTaxClassExtensionInterface = { [x: string]: unknown }
type TaxDataTaxClassInterface = {
  class_id?: number | undefined
  class_name: string
  class_type: string
  extension_attributes?: TaxDataTaxClassExtensionInterface | undefined
}
type TaxDataTaxClassSearchResultsInterface = {
  items: TaxDataTaxClassInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type TaxDataTaxRateExtensionInterface = { [x: string]: unknown }
type TaxDataTaxRateTitleExtensionInterface = { [x: string]: unknown }
type TaxDataTaxRateTitleInterface = {
  extension_attributes?: TaxDataTaxRateTitleExtensionInterface | undefined
  store_id: string
  value: string
}
type TaxDataTaxRateInterface = {
  code: string
  extension_attributes?: TaxDataTaxRateExtensionInterface | undefined
  id?: number | undefined
  rate: number
  region_name?: string | undefined
  tax_country_id: string
  tax_postcode?: string | undefined
  tax_region_id?: number | undefined
  titles?: TaxDataTaxRateTitleInterface[] | undefined
  zip_from?: number | undefined
  zip_is_range?: number | undefined
  zip_to?: number | undefined
}
type TaxDataTaxRateSearchResultsInterface = {
  items: TaxDataTaxRateInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type TaxDataTaxRuleExtensionInterface = { [x: string]: unknown }
type TaxDataTaxRuleInterface = {
  calculate_subtotal?: boolean | undefined
  code: string
  customer_tax_class_ids: number[]
  extension_attributes?: TaxDataTaxRuleExtensionInterface | undefined
  id?: number | undefined
  position: number
  priority: number
  product_tax_class_ids: number[]
  tax_rate_ids: number[]
}
type TaxDataTaxRuleSearchResultsInterface = {
  items: TaxDataTaxRuleInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type CompanyDataTeamExtensionInterface = { [x: string]: unknown }
type CompanyDataTeamInterface = {
  custom_attributes?: FrameworkAttributeInterface[] | undefined
  description?: string | undefined
  extension_attributes?: CompanyDataTeamExtensionInterface | undefined
  id?: number | undefined
  name?: string | undefined
}
type CompanyDataTeamSearchResultsInterface = {
  items: CompanyDataTeamInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
type SalesDataTransactionExtensionInterface = { [x: string]: unknown }
type SalesDataTransactionInterface = {
  additional_information?: string[] | undefined
  child_transactions: SalesDataTransactionInterface[]
  created_at: string
  extension_attributes?: SalesDataTransactionExtensionInterface | undefined
  is_closed: number
  order_id: number
  parent_id?: number | undefined
  parent_txn_id: string
  payment_id: number
  transaction_id: number
  txn_id: string
  txn_type: string
}
type SalesDataTransactionSearchResultInterface = {
  items: SalesDataTransactionInterface[]
  search_criteria: FrameworkSearchCriteriaInterface
  total_count: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/V1/addresses/:addressId': {
      $delete:
        | {
            input: { param: { addressId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addressId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/amazon-billing-address/:amazonOrderReferenceId': {
      $put:
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/amazon-shipping-address/:amazonOrderReferenceId': {
      $put:
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { amazonOrderReferenceId: string } } & {
              json: { addressConsentToken: string }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/amazon/order-ref': {
      $delete:
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/analytics/link': {
      $get:
        | { input: {}; output: AnalyticsDataLinkInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AnalyticsDataLinkInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/attributeMetadata/customer': {
      $get:
        | {
            input: {}
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/attributeMetadata/customer/attribute/:attributeCode': {
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: CustomerDataAttributeMetadataInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: CustomerDataAttributeMetadataInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/attributeMetadata/customer/custom': {
      $get:
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/attributeMetadata/customer/form/:formCode': {
      $get:
        | {
            input: { param: { formCode: string } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/attributeMetadata/customerAddress': {
      $get:
        | {
            input: {}
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/attributeMetadata/customerAddress/attribute/:attributeCode': {
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: CustomerDataAttributeMetadataInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: CustomerDataAttributeMetadataInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/attributeMetadata/customerAddress/custom': {
      $get:
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dataInterfaceName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/attributeMetadata/customerAddress/form/:formCode': {
      $get:
        | {
            input: { param: { formCode: string } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bulk/:bulkUuid/detailed-status': {
      $get:
        | {
            input: { param: { bulkUuid: string } }
            output: AsynchronousOperationsDataDetailedBulkOperationsStatusInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string } }
            output: AsynchronousOperationsDataDetailedBulkOperationsStatusInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bulk/:bulkUuid/operation-status/:status': {
      $get:
        | {
            input: { param: { bulkUuid: string; status: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string; status: number } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string; status: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bulkUuid: string; status: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bulkUuid: string; status: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string; status: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bulk/:bulkUuid/status': {
      $get:
        | {
            input: { param: { bulkUuid: string } }
            output: AsynchronousOperationsDataBulkOperationsStatusInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string } }
            output: AsynchronousOperationsDataBulkOperationsStatusInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulkUuid: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/options/add': {
      $post:
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/options/types': {
      $get:
        | { input: {}; output: BundleDataOptionTypeInterface[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BundleDataOptionTypeInterface[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/bundle-products/options/:optionId': {
      $put:
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionId: string } } & { json: { option: BundleDataOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/:productSku/children': {
      $get:
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: BundleDataLinkInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: BundleDataLinkInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { optionId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/:sku/links/:id': {
      $put:
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/:sku/links/:optionId': {
      $post:
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } } & {
              json: { linkedProduct: BundleDataLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/:sku/options/all': {
      $get:
        | {
            input: { param: { sku: string } }
            output: BundleDataOptionInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: BundleDataOptionInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/:sku/options/:optionId': {
      $delete:
        | {
            input: { param: { sku: string; optionId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { sku: string; optionId: number } }
            output: BundleDataOptionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: BundleDataOptionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/bundle-products/:sku/options/:optionId/children/:childSku': {
      $delete:
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number; childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/': {
      $post:
        | { input: {}; output: number; outputFormat: 'json'; status: 200 }
        | { input: {}; output: number; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/guest-carts/:cartId/checkGiftCard/:giftCardCode': {
      $get:
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/guest-carts/:cartId/giftCards': {
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/guest-carts/:cartId/giftCards/:giftCardCode': {
      $delete:
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/licence': {
      $get:
        | {
            input: {}
            output: CheckoutAgreementsDataAgreementInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CheckoutAgreementsDataAgreementInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine': {
      $get:
        | { input: {}; output: QuoteDataCartInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuoteDataCartInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $post:
        | { input: {}; output: number; outputFormat: 'json'; status: 200 }
        | { input: {}; output: number; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/balance/apply': {
      $post:
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/balance/unapply': {
      $post:
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/billing-address': {
      $get:
        | { input: {}; output: QuoteDataAddressInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuoteDataAddressInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/checkGiftCard/:giftCardCode': {
      $get:
        | {
            input: { param: { giftCardCode: string } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { giftCardCode: string } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/checkout-fields': {
      $post:
        | {
            input: { json: { serviceSelection: FrameworkAttributeInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { serviceSelection: FrameworkAttributeInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { serviceSelection: FrameworkAttributeInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { serviceSelection: FrameworkAttributeInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { serviceSelection: FrameworkAttributeInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { serviceSelection: FrameworkAttributeInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/collect-totals': {
      $put:
        | {
            input: {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/collection-point/search-request': {
      $delete:
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { json: { countryId: string; postcode: string } }
            output: TemandoShippingDataCollectionPointSearchRequestInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: TemandoShippingDataCollectionPointSearchRequestInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/collection-point/search-result': {
      $get:
        | {
            input: {}
            output: TemandoShippingDataCollectionPointQuoteCollectionPointInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TemandoShippingDataCollectionPointQuoteCollectionPointInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/collection-point/select': {
      $post:
        | {
            input: { json: { entityId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entityId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/coupons': {
      $delete:
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/coupons/:couponCode': {
      $put:
        | {
            input: { param: { couponCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/delivery-option': {
      $post:
        | {
            input: { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/estimate-shipping-methods': {
      $post:
        | {
            input: { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/estimate-shipping-methods-by-address-id': {
      $post:
        | {
            input: { json: { addressId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { addressId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/gift-message': {
      $get:
        | { input: {}; output: GiftMessageDataMessageInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GiftMessageDataMessageInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { giftMessage: GiftMessageDataMessageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/gift-message/:itemId': {
      $get:
        | {
            input: { param: { itemId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/giftCards': {
      $post:
        | {
            input: { json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/giftCards/:giftCardCode': {
      $delete:
        | {
            input: { param: { giftCardCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { giftCardCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/items': {
      $get:
        | { input: {}; output: QuoteDataCartItemInterface[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuoteDataCartItemInterface[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: QuoteDataCartItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: QuoteDataCartItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { cartItem: QuoteDataCartItemInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/items/:itemId': {
      $delete:
        | {
            input: { param: { itemId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/order': {
      $put:
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { paymentMethod?: QuoteDataPaymentInterface | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/payment-information': {
      $get:
        | {
            input: {}
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/payment-methods': {
      $get:
        | {
            input: {}
            output: QuoteDataPaymentMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: QuoteDataPaymentMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/selected-payment-method': {
      $get:
        | { input: {}; output: QuoteDataPaymentInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuoteDataPaymentInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/set-payment-information': {
      $post:
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/shipping-information': {
      $post:
        | {
            input: { json: { addressInformation: CheckoutDataShippingInformationInterface } }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { addressInformation: CheckoutDataShippingInformationInterface } }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { addressInformation: CheckoutDataShippingInformationInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { addressInformation: CheckoutDataShippingInformationInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { addressInformation: CheckoutDataShippingInformationInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { addressInformation: CheckoutDataShippingInformationInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/mine/shipping-methods': {
      $get:
        | {
            input: {}
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/totals': {
      $get:
        | { input: {}; output: QuoteDataTotalsInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QuoteDataTotalsInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/carts/mine/totals-information': {
      $post:
        | {
            input: { json: { addressInformation: CheckoutDataTotalsInformationInterface } }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { addressInformation: CheckoutDataTotalsInformationInterface } }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { addressInformation: CheckoutDataTotalsInformationInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { addressInformation: CheckoutDataTotalsInformationInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { addressInformation: CheckoutDataTotalsInformationInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { addressInformation: CheckoutDataTotalsInformationInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: QuoteDataCartSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: QuoteDataCartSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataCartInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataCartInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: number } } & { json: { customerId: number; storeId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { customerId: number; storeId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/billing-address': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/coupons': {
      $delete:
        | {
            input: { param: { cartId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { cartId: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/coupons/:couponCode': {
      $put:
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/estimate-shipping-methods': {
      $post:
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/estimate-shipping-methods-by-address-id': {
      $post:
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/gift-message': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/gift-message/:itemId': {
      $get:
        | {
            input: { param: { cartId: number; itemId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/giftCards': {
      $put:
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/giftCards/:giftCardCode': {
      $delete:
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/items': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataCartItemInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataCartItemInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/items/:itemId': {
      $delete:
        | {
            input: { param: { cartId: number; itemId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/order': {
      $put:
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/payment-methods': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataPaymentMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataPaymentMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/selected-payment-method': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataPaymentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataPaymentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/shipping-information': {
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/shipping-methods': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/totals': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:cartId/totals-information': {
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:quoteId/giftCards': {
      $get:
        | {
            input: { param: { quoteId: number } }
            output: GiftCardAccountDataGiftCardAccountInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: number } }
            output: GiftCardAccountDataGiftCardAccountInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/carts/:quoteId/items': {
      $post:
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories': {
      $get:
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: CatalogDataCategoryTreeInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: CatalogDataCategoryTreeInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rootCategoryId?: number | undefined; depth?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: CatalogDataCategoryInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: CatalogDataCategoryInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/attributes': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataCategoryAttributeSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataCategoryAttributeSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/attributes/:attributeCode': {
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: CatalogDataCategoryAttributeInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: CatalogDataCategoryAttributeInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/attributes/:attributeCode/options': {
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: EavDataAttributeOptionInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: EavDataAttributeOptionInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/list': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataCategorySearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataCategorySearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/:categoryId': {
      $delete:
        | {
            input: { param: { categoryId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: CatalogDataCategoryInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: CatalogDataCategoryInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/:categoryId/move': {
      $put:
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } } & {
              json: { afterId?: number | undefined; parentId: number }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/:categoryId/products': {
      $get:
        | {
            input: { param: { categoryId: number } }
            output: CatalogDataCategoryProductLinkInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } }
            output: CatalogDataCategoryProductLinkInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: string } } & {
              json: { productLink: CatalogDataCategoryProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/:categoryId/products/:sku': {
      $delete:
        | {
            input: { param: { categoryId: string; sku: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { categoryId: string; sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/categories/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: CatalogDataCategoryInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: CatalogDataCategoryInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { category: CatalogDataCategoryInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsBlock': {
      $post:
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: CmsDataBlockInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: CmsDataBlockInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsBlock/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CmsDataBlockSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CmsDataBlockSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsBlock/:blockId': {
      $delete:
        | {
            input: { param: { blockId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { blockId: number } }
            output: CmsDataBlockInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: number } }
            output: CmsDataBlockInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsBlock/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: CmsDataBlockInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: CmsDataBlockInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { block: CmsDataBlockInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsPage': {
      $post:
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: CmsDataPageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: CmsDataPageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsPage/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CmsDataPageSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CmsDataPageSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsPage/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: CmsDataPageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: CmsDataPageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { page: CmsDataPageInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/cmsPage/:pageId': {
      $delete:
        | {
            input: { param: { pageId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { pageId: number } }
            output: CmsDataPageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageId: number } }
            output: CmsDataPageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyDataCompanySearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyDataCompanySearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: CompanyDataCompanyInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: CompanyDataCompanyInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { company: CompanyDataCompanyInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/assignRoles': {
      $put:
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { roles: CompanyDataRoleInterface[]; userId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/role/': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyDataRoleSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyDataRoleSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: CompanyDataRoleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: CompanyDataRoleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/role/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: CompanyDataRoleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: CompanyDataRoleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { role: CompanyDataRoleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/role/:roleId': {
      $delete:
        | {
            input: { param: { roleId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { roleId: number } }
            output: CompanyDataRoleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: CompanyDataRoleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/role/:roleId/users': {
      $get:
        | {
            input: { param: { roleId: number } }
            output: CustomerDataCustomerInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: CustomerDataCustomerInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/company/:companyId': {
      $delete:
        | {
            input: { param: { companyId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { companyId: number } }
            output: CompanyDataCompanyInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: CompanyDataCompanyInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: CompanyDataCompanyInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: CompanyDataCompanyInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: string } } & {
              json: { company: CompanyDataCompanyInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyCreditDataCreditLimitSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyCreditDataCreditLimitSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/company/:companyId': {
      $get:
        | {
            input: { param: { companyId: number } }
            output: CompanyCreditDataCreditLimitInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: CompanyCreditDataCreditLimitInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/history': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyCreditDataHistorySearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyCreditDataHistorySearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/history/:historyId': {
      $put:
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { historyId: number } } & {
              json: { comment?: string | undefined; purchaseOrder?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/:creditId': {
      $get:
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: CompanyCreditDataCreditLimitInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: CompanyCreditDataCreditLimitInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & { query: { reload?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/:creditId/decreaseBalance': {
      $post:
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/:creditId/increaseBalance': {
      $post:
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { creditId: number } } & {
              json: {
                comment?: string | undefined
                currency: string
                operationType: number
                options?: CompanyCreditDataCreditBalanceOptionsInterface | undefined
                value: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/companyCredits/:id': {
      $put:
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: CompanyCreditDataCreditLimitInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: CompanyCreditDataCreditLimitInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { creditLimit: CompanyCreditDataCreditLimitInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/variation': {
      $put:
        | {
            input: {
              json: {
                options: ConfigurableProductDataOptionInterface[]
                product: CatalogDataProductInterface
              }
            }
            output: CatalogDataProductInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                options: ConfigurableProductDataOptionInterface[]
                product: CatalogDataProductInterface
              }
            }
            output: CatalogDataProductInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                options: ConfigurableProductDataOptionInterface[]
                product: CatalogDataProductInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                options: ConfigurableProductDataOptionInterface[]
                product: CatalogDataProductInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                options: ConfigurableProductDataOptionInterface[]
                product: CatalogDataProductInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                options: ConfigurableProductDataOptionInterface[]
                product: CatalogDataProductInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/:sku/child': {
      $post:
        | {
            input: { param: { sku: string } } & { json: { childSku: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & { json: { childSku: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & { json: { childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & { json: { childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & { json: { childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & { json: { childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/:sku/children': {
      $get:
        | {
            input: { param: { sku: string } }
            output: CatalogDataProductInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: CatalogDataProductInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/:sku/children/:childSku': {
      $delete:
        | {
            input: { param: { sku: string; childSku: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; childSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/:sku/options': {
      $post:
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/:sku/options/all': {
      $get:
        | {
            input: { param: { sku: string } }
            output: ConfigurableProductDataOptionInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ConfigurableProductDataOptionInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/configurable-products/:sku/options/:id': {
      $delete:
        | {
            input: { param: { sku: string; id: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { sku: string; id: number } }
            output: ConfigurableProductDataOptionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ConfigurableProductDataOptionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: { option: ConfigurableProductDataOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/coupons': {
      $post:
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: SalesRuleDataCouponInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: SalesRuleDataCouponInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { coupon: SalesRuleDataCouponInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/coupons/deleteByCodes': {
      $post:
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: SalesRuleDataCouponMassDeleteResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: SalesRuleDataCouponMassDeleteResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { codes: string[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/coupons/deleteByIds': {
      $post:
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: SalesRuleDataCouponMassDeleteResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: SalesRuleDataCouponMassDeleteResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ids: number[]; ignoreInvalidCoupons?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/coupons/generate': {
      $post:
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { couponSpec: SalesRuleDataCouponGenerationSpecInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/coupons/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesRuleDataCouponSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesRuleDataCouponSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/coupons/:couponId': {
      $delete:
        | {
            input: { param: { couponId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { couponId: number } }
            output: SalesRuleDataCouponInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: number } }
            output: SalesRuleDataCouponInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: SalesRuleDataCouponInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: SalesRuleDataCouponInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: string } } & {
              json: { coupon: SalesRuleDataCouponInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/creditmemo': {
      $post:
        | {
            input: { json: { entity: SalesDataCreditmemoInterface } }
            output: SalesDataCreditmemoInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataCreditmemoInterface } }
            output: SalesDataCreditmemoInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataCreditmemoInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataCreditmemoInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataCreditmemoInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataCreditmemoInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/creditmemo/refund': {
      $post:
        | {
            input: {
              json: {
                creditmemo: SalesDataCreditmemoInterface
                offlineRequested?: boolean | undefined
              }
            }
            output: SalesDataCreditmemoInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                creditmemo: SalesDataCreditmemoInterface
                offlineRequested?: boolean | undefined
              }
            }
            output: SalesDataCreditmemoInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                creditmemo: SalesDataCreditmemoInterface
                offlineRequested?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                creditmemo: SalesDataCreditmemoInterface
                offlineRequested?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                creditmemo: SalesDataCreditmemoInterface
                offlineRequested?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                creditmemo: SalesDataCreditmemoInterface
                offlineRequested?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/creditmemo/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataCreditmemoInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataCreditmemoInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/creditmemo/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataCreditmemoCommentSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataCreditmemoCommentSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: SalesDataCreditmemoCommentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: SalesDataCreditmemoCommentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataCreditmemoCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/creditmemo/:id/emails': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/creditmemos': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataCreditmemoSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataCreditmemoSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups': {
      $post:
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: CustomerDataGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: CustomerDataGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups/default': {
      $get:
        | {
            input: { query: { storeId?: number | undefined } }
            output: CustomerDataGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: CustomerDataGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups/default/:id': {
      $put:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: number; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups/default/:storeId': {
      $get:
        | {
            input: { param: { storeId: number } }
            output: CustomerDataGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: number } }
            output: CustomerDataGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CustomerDataGroupSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CustomerDataGroupSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups/:id': {
      $delete:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: CustomerDataGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CustomerDataGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: CustomerDataGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: CustomerDataGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { group: CustomerDataGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customerGroups/:id/permissions': {
      $get:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers': {
      $post:
        | {
            input: {
              json: {
                customer: CustomerDataCustomerInterface
                password?: string | undefined
                redirectUrl?: string | undefined
              }
            }
            output: CustomerDataCustomerInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                customer: CustomerDataCustomerInterface
                password?: string | undefined
                redirectUrl?: string | undefined
              }
            }
            output: CustomerDataCustomerInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                customer: CustomerDataCustomerInterface
                password?: string | undefined
                redirectUrl?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                customer: CustomerDataCustomerInterface
                password?: string | undefined
                redirectUrl?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              json: {
                customer: CustomerDataCustomerInterface
                password?: string | undefined
                redirectUrl?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                customer: CustomerDataCustomerInterface
                password?: string | undefined
                redirectUrl?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/addresses/:addressId': {
      $get:
        | {
            input: { param: { addressId: number } }
            output: CustomerDataAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addressId: number } }
            output: CustomerDataAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/confirm': {
      $post:
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; redirectUrl?: string | undefined; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/isEmailAvailable': {
      $post:
        | {
            input: { json: { customerEmail: string; websiteId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { customerEmail: string; websiteId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { customerEmail: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { customerEmail: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { customerEmail: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { customerEmail: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/me': {
      $get:
        | { input: {}; output: CustomerDataCustomerInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CustomerDataCustomerInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: CustomerDataCustomerInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: CustomerDataCustomerInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/me/activate': {
      $put:
        | {
            input: { json: { confirmationKey: string } }
            output: CustomerDataCustomerInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { confirmationKey: string } }
            output: CustomerDataCustomerInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/me/billingAddress': {
      $get:
        | { input: {}; output: CustomerDataAddressInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CustomerDataAddressInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/customers/me/password': {
      $put:
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { currentPassword: string; newPassword: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/me/shippingAddress': {
      $get:
        | { input: {}; output: CustomerDataAddressInterface; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CustomerDataAddressInterface; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/customers/password': {
      $put:
        | {
            input: { json: { email: string; template: string; websiteId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; template: string; websiteId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { email: string; template: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { email: string; template: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { email: string; template: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; template: string; websiteId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/resetPassword': {
      $post:
        | {
            input: { json: { email: string; newPassword: string; resetToken: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; newPassword: string; resetToken: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { email: string; newPassword: string; resetToken: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { email: string; newPassword: string; resetToken: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { email: string; newPassword: string; resetToken: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; newPassword: string; resetToken: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CustomerDataCustomerSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CustomerDataCustomerSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/validate': {
      $put:
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: CustomerDataValidationResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: CustomerDataValidationResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { customer: CustomerDataCustomerInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId': {
      $delete:
        | {
            input: { param: { customerId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { customerId: number } }
            output: CustomerDataCustomerInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: CustomerDataCustomerInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: CustomerDataCustomerInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: CustomerDataCustomerInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & {
              json: { customer: CustomerDataCustomerInterface; passwordHash?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId/billingAddress': {
      $get:
        | {
            input: { param: { customerId: number } }
            output: CustomerDataAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: CustomerDataAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId/carts': {
      $post:
        | {
            input: { param: { customerId: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId/confirm': {
      $get:
        | {
            input: { param: { customerId: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId/password/resetLinkToken/:resetPasswordLinkToken': {
      $get:
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number; resetPasswordLinkToken: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId/permissions/readonly': {
      $get:
        | {
            input: { param: { customerId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:customerId/shippingAddress': {
      $get:
        | {
            input: { param: { customerId: number } }
            output: CustomerDataAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: CustomerDataAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/customers/:email/activate': {
      $put:
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: CustomerDataCustomerInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: CustomerDataCustomerInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email: string } } & { json: { confirmationKey: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/directory/countries': {
      $get:
        | {
            input: {}
            output: DirectoryDataCountryInformationInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: DirectoryDataCountryInformationInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/directory/countries/:countryId': {
      $get:
        | {
            input: { param: { countryId: string } }
            output: DirectoryDataCountryInformationInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryId: string } }
            output: DirectoryDataCountryInformationInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { countryId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { countryId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { countryId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/directory/currency': {
      $get:
        | {
            input: {}
            output: DirectoryDataCurrencyInformationInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: DirectoryDataCurrencyInformationInterface
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/eav/attribute-sets': {
      $post:
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: EavDataAttributeSetInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: EavDataAttributeSetInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attributeSet: EavDataAttributeSetInterface
                entityTypeCode: string
                skeletonId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/eav/attribute-sets/list': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: EavDataAttributeSetSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: EavDataAttributeSetSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/eav/attribute-sets/:attributeSetId': {
      $delete:
        | {
            input: { param: { attributeSetId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { attributeSetId: number } }
            output: EavDataAttributeSetInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: EavDataAttributeSetInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: EavDataAttributeSetInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: EavDataAttributeSetInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/gift-wrappings': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: GiftWrappingDataWrappingSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: GiftWrappingDataWrappingSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: GiftWrappingDataWrappingInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: GiftWrappingDataWrappingInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/gift-wrappings/:id': {
      $delete:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } } & { query: { storeId?: number | undefined } }
            output: GiftWrappingDataWrappingInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { storeId?: number | undefined } }
            output: GiftWrappingDataWrappingInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { storeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/gift-wrappings/:wrappingId': {
      $put:
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: GiftWrappingDataWrappingInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: GiftWrappingDataWrappingInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wrappingId: string } } & {
              json: { data: GiftWrappingDataWrappingInterface; storeId?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/giftregistry/mine/estimate-shipping-methods': {
      $post:
        | {
            input: { json: { registryId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { registryId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts': {
      $post:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/guest-carts/:cartId': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataCartInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataCartInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: string } } & { json: { customerId: number; storeId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { customerId: number; storeId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: string } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: string } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { customerId: number; storeId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/billing-address': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/checkout-fields': {
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { serviceSelection: FrameworkAttributeInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { serviceSelection: FrameworkAttributeInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { serviceSelection: FrameworkAttributeInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { serviceSelection: FrameworkAttributeInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/collect-totals': {
      $put:
        | {
            input: { param: { cartId: string } } & {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                additionalData?: QuoteDataTotalsAdditionalDataInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
                shippingCarrierCode?: string | undefined
                shippingMethodCode?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/collection-point/search-request': {
      $delete:
        | {
            input: { param: { cartId: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: string } } & { json: { countryId: string; postcode: string } }
            output: TemandoShippingDataCollectionPointSearchRequestInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { countryId: string; postcode: string } }
            output: TemandoShippingDataCollectionPointSearchRequestInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cartId: string } } & { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { cartId: string } } & { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { countryId: string; postcode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/collection-point/search-result': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: TemandoShippingDataCollectionPointQuoteCollectionPointInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: TemandoShippingDataCollectionPointQuoteCollectionPointInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/collection-point/select': {
      $post:
        | {
            input: { param: { cartId: string } } & { json: { entityId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { entityId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cartId: string } } & { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { cartId: string } } & { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { entityId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/coupons': {
      $delete:
        | {
            input: { param: { cartId: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { cartId: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/coupons/:couponCode': {
      $put:
        | {
            input: { param: { cartId: string; couponCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; couponCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/delivery-option': {
      $post:
        | {
            input: { param: { cartId: string } } & { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cartId: string } } & { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { cartId: string } } & { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { selectedOption: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/estimate-shipping-methods': {
      $post:
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/gift-message': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/gift-message/:itemId': {
      $get:
        | {
            input: { param: { cartId: string; itemId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: GiftMessageDataMessageInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: string; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } } & {
              json: { giftMessage: GiftMessageDataMessageInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/items': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataCartItemInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataCartItemInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/items/:itemId': {
      $delete:
        | {
            input: { param: { cartId: string; itemId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: QuoteDataCartItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string; itemId: string } } & {
              json: { cartItem: QuoteDataCartItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/order': {
      $put:
        | {
            input: { param: { cartId: string } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { paymentMethod?: QuoteDataPaymentInterface | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/payment-information': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/payment-methods': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataPaymentMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataPaymentMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/selected-payment-method': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataPaymentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataPaymentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { cartId: string } } & { json: { method: QuoteDataPaymentInterface } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { method: QuoteDataPaymentInterface } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { method: QuoteDataPaymentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/set-payment-information': {
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/shipping-information': {
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/shipping-methods': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/totals': {
      $get:
        | {
            input: { param: { cartId: string } }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-carts/:cartId/totals-information': {
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: { addressInformation: CheckoutDataTotalsInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/guest-giftregistry/:cartId/estimate-shipping-methods': {
      $post:
        | {
            input: { param: { cartId: string } } & { json: { registryId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { registryId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { registryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/hierarchy/move/:id': {
      $put:
        | {
            input: { param: { id: number } } & { json: { newParentId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { newParentId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { newParentId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { newParentId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/hierarchy/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: CompanyDataHierarchyInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CompanyDataHierarchyInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/integration/admin/token': {
      $post:
        | {
            input: { json: { password: string; username: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password: string; username: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/integration/customer/token': {
      $post:
        | {
            input: { json: { password: string; username: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password: string; username: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password: string; username: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoice/:invoiceId/refund': {
      $post:
        | {
            input: { param: { invoiceId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                isOnline?: boolean | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                isOnline?: boolean | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { invoiceId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                isOnline?: boolean | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoiceId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                isOnline?: boolean | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { invoiceId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                isOnline?: boolean | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                isOnline?: boolean | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataInvoiceSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataInvoiceSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/': {
      $post:
        | {
            input: { json: { entity: SalesDataInvoiceInterface } }
            output: SalesDataInvoiceInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataInvoiceInterface } }
            output: SalesDataInvoiceInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataInvoiceInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataInvoiceInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataInvoiceInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataInvoiceInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/comments': {
      $post:
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: SalesDataInvoiceCommentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: SalesDataInvoiceCommentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataInvoiceCommentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataInvoiceInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataInvoiceInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/:id/capture': {
      $post:
        | { input: { param: { id: number } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: string; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataInvoiceCommentSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataInvoiceCommentSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/:id/emails': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/invoices/:id/void': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/modules': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/negotiable-carts/:cartId/billing-address': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { address: QuoteDataAddressInterface; useForShipping?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/coupons': {
      $delete:
        | {
            input: { param: { cartId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/coupons/:couponCode': {
      $put:
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; couponCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/estimate-shipping-methods': {
      $post:
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & { json: { address: QuoteDataAddressInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id': {
      $post:
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: QuoteDataShippingMethodInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & { json: { addressId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/giftCards': {
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { giftCardAccountData: GiftCardAccountDataGiftCardAccountInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/giftCards/:giftCardCode': {
      $delete:
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number; giftCardCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/payment-information': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/set-payment-information': {
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/shipping-information': {
      $post:
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: CheckoutDataPaymentDetailsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } } & {
              json: { addressInformation: CheckoutDataShippingInformationInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiable-carts/:cartId/totals': {
      $get:
        | {
            input: { param: { cartId: number } }
            output: QuoteDataTotalsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: QuoteDataTotalsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/attachmentContent': {
      $get:
        | {
            input: { query: { attachmentIds: number[] } }
            output: NegotiableQuoteDataAttachmentContentInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: NegotiableQuoteDataAttachmentContentInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { attachmentIds: number[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/decline': {
      $post:
        | {
            input: { json: { quoteId: number; reason: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { quoteId: number; reason: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { quoteId: number; reason: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { quoteId: number; reason: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { quoteId: number; reason: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { quoteId: number; reason: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/pricesUpdated': {
      $post:
        | {
            input: { json: { quoteIds: number[] } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { quoteIds: number[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/request': {
      $post:
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
                quoteName: string
              }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
                quoteName: string
              }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
                quoteName: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
                quoteName: string
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
                quoteName: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
                quoteName: string
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/submitToCustomer': {
      $post:
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
              }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
              }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                comment?: string | undefined
                files?: NegotiableQuoteDataAttachmentContentInterface[] | undefined
                quoteId: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/:quoteId': {
      $put:
        | {
            input: { param: { quoteId: string } } & { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quoteId: string } } & { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { quoteId: string } } & { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: string } } & { json: { quote: QuoteDataCartInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/:quoteId/comments': {
      $get:
        | {
            input: { param: { quoteId: number } }
            output: NegotiableQuoteDataCommentInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: number } }
            output: NegotiableQuoteDataCommentInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/negotiableQuote/:quoteId/shippingMethod': {
      $put:
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quoteId: number } } & { json: { shippingMethod: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/order/:orderId/invoice': {
      $post:
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataInvoiceCreationArgumentsInterface | undefined
                capture?: boolean | undefined
                comment?: SalesDataInvoiceCommentCreationInterface | undefined
                items?: SalesDataInvoiceItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataInvoiceCreationArgumentsInterface | undefined
                capture?: boolean | undefined
                comment?: SalesDataInvoiceCommentCreationInterface | undefined
                items?: SalesDataInvoiceItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataInvoiceCreationArgumentsInterface | undefined
                capture?: boolean | undefined
                comment?: SalesDataInvoiceCommentCreationInterface | undefined
                items?: SalesDataInvoiceItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataInvoiceCreationArgumentsInterface | undefined
                capture?: boolean | undefined
                comment?: SalesDataInvoiceCommentCreationInterface | undefined
                items?: SalesDataInvoiceItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataInvoiceCreationArgumentsInterface | undefined
                capture?: boolean | undefined
                comment?: SalesDataInvoiceCommentCreationInterface | undefined
                items?: SalesDataInvoiceItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataInvoiceCreationArgumentsInterface | undefined
                capture?: boolean | undefined
                comment?: SalesDataInvoiceCommentCreationInterface | undefined
                items?: SalesDataInvoiceItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/order/:orderId/refund': {
      $post:
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataCreditmemoCreationArgumentsInterface | undefined
                comment?: SalesDataCreditmemoCommentCreationInterface | undefined
                items?: SalesDataCreditmemoItemCreationInterface[] | undefined
                notify?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/order/:orderId/ship': {
      $post:
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataShipmentCreationArgumentsInterface | undefined
                comment?: SalesDataShipmentCommentCreationInterface | undefined
                items?: SalesDataShipmentItemCreationInterface[] | undefined
                notify?: boolean | undefined
                packages?: SalesDataShipmentPackageCreationInterface[] | undefined
                tracks?: SalesDataShipmentTrackCreationInterface[] | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataShipmentCreationArgumentsInterface | undefined
                comment?: SalesDataShipmentCommentCreationInterface | undefined
                items?: SalesDataShipmentItemCreationInterface[] | undefined
                notify?: boolean | undefined
                packages?: SalesDataShipmentPackageCreationInterface[] | undefined
                tracks?: SalesDataShipmentTrackCreationInterface[] | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataShipmentCreationArgumentsInterface | undefined
                comment?: SalesDataShipmentCommentCreationInterface | undefined
                items?: SalesDataShipmentItemCreationInterface[] | undefined
                notify?: boolean | undefined
                packages?: SalesDataShipmentPackageCreationInterface[] | undefined
                tracks?: SalesDataShipmentTrackCreationInterface[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataShipmentCreationArgumentsInterface | undefined
                comment?: SalesDataShipmentCommentCreationInterface | undefined
                items?: SalesDataShipmentItemCreationInterface[] | undefined
                notify?: boolean | undefined
                packages?: SalesDataShipmentPackageCreationInterface[] | undefined
                tracks?: SalesDataShipmentTrackCreationInterface[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataShipmentCreationArgumentsInterface | undefined
                comment?: SalesDataShipmentCommentCreationInterface | undefined
                items?: SalesDataShipmentItemCreationInterface[] | undefined
                notify?: boolean | undefined
                packages?: SalesDataShipmentPackageCreationInterface[] | undefined
                tracks?: SalesDataShipmentTrackCreationInterface[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: number } } & {
              json: {
                appendComment?: boolean | undefined
                arguments?: SalesDataShipmentCreationArgumentsInterface | undefined
                comment?: SalesDataShipmentCommentCreationInterface | undefined
                items?: SalesDataShipmentItemCreationInterface[] | undefined
                notify?: boolean | undefined
                packages?: SalesDataShipmentPackageCreationInterface[] | undefined
                tracks?: SalesDataShipmentTrackCreationInterface[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataOrderSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataOrderSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/': {
      $post:
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: SalesDataOrderInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: SalesDataOrderInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/create': {
      $put:
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: SalesDataOrderInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: SalesDataOrderInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataOrderInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/items': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataOrderItemSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataOrderItemSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/items/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataOrderItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataOrderItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataOrderInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataOrderInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id/cancel': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataOrderStatusHistorySearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataOrderStatusHistorySearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & {
              json: { statusHistory: SalesDataOrderStatusHistoryInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { statusHistory: SalesDataOrderStatusHistoryInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { statusHistory: SalesDataOrderStatusHistoryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: { statusHistory: SalesDataOrderStatusHistoryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: { statusHistory: SalesDataOrderStatusHistoryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { statusHistory: SalesDataOrderStatusHistoryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id/emails': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id/hold': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id/statuses': {
      $get:
        | { input: { param: { id: number } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: string; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:id/unhold': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/orders/:parent_id': {
      $put:
        | {
            input: { param: { parent_id: string } } & {
              json: { entity: SalesDataOrderAddressInterface }
            }
            output: SalesDataOrderAddressInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_id: string } } & {
              json: { entity: SalesDataOrderAddressInterface }
            }
            output: SalesDataOrderAddressInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { parent_id: string } } & {
              json: { entity: SalesDataOrderAddressInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { parent_id: string } } & {
              json: { entity: SalesDataOrderAddressInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { parent_id: string } } & {
              json: { entity: SalesDataOrderAddressInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_id: string } } & {
              json: { entity: SalesDataOrderAddressInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataProductSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataProductSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: CatalogDataProductInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: CatalogDataProductInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products-render-info': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
                storeId: number
                currencyCode: string
              }
            }
            output: CatalogDataProductRenderSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
                storeId: number
                currencyCode: string
              }
            }
            output: CatalogDataProductRenderSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
                storeId: number
                currencyCode: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
                storeId: number
                currencyCode: string
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets': {
      $post:
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: EavDataAttributeSetInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: EavDataAttributeSetInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { attributeSet: EavDataAttributeSetInterface; skeletonId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/attributes': {
      $post:
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                attributeCode: string
                attributeGroupId: number
                attributeSetId: number
                sortOrder: number
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/groups': {
      $post:
        | {
            input: { json: { group: EavDataAttributeGroupInterface } }
            output: EavDataAttributeGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { group: EavDataAttributeGroupInterface } }
            output: EavDataAttributeGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { group: EavDataAttributeGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { group: EavDataAttributeGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { group: EavDataAttributeGroupInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { group: EavDataAttributeGroupInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/groups/list': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: EavDataAttributeGroupSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: EavDataAttributeGroupSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/groups/:groupId': {
      $delete:
        | {
            input: { param: { groupId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { groupId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { groupId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { groupId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/sets/list': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: EavDataAttributeSetSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: EavDataAttributeSetSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/:attributeSetId': {
      $delete:
        | {
            input: { param: { attributeSetId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { attributeSetId: number } }
            output: EavDataAttributeSetInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: EavDataAttributeSetInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: EavDataAttributeSetInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: EavDataAttributeSetInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { attributeSet: EavDataAttributeSetInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/:attributeSetId/attributes': {
      $get:
        | {
            input: { param: { attributeSetId: string } }
            output: CatalogDataProductAttributeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } }
            output: CatalogDataProductAttributeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/:attributeSetId/attributes/:attributeCode': {
      $delete:
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string; attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attribute-sets/:attributeSetId/groups': {
      $put:
        | {
            input: { param: { attributeSetId: string } } & {
              json: { group: EavDataAttributeGroupInterface }
            }
            output: EavDataAttributeGroupInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { group: EavDataAttributeGroupInterface }
            }
            output: EavDataAttributeGroupInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { group: EavDataAttributeGroupInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { group: EavDataAttributeGroupInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { group: EavDataAttributeGroupInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetId: string } } & {
              json: { group: EavDataAttributeGroupInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attributes': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataProductAttributeSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CatalogDataProductAttributeSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: CatalogDataProductAttributeInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: CatalogDataProductAttributeInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { attribute: CatalogDataProductAttributeInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attributes/types': {
      $get:
        | {
            input: {}
            output: CatalogDataProductAttributeTypeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CatalogDataProductAttributeTypeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/products/attributes/:attributeCode': {
      $delete:
        | {
            input: { param: { attributeCode: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: CatalogDataProductAttributeInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: CatalogDataProductAttributeInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: CatalogDataProductAttributeInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: CatalogDataProductAttributeInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { attribute: CatalogDataProductAttributeInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attributes/:attributeCode/options': {
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: EavDataAttributeOptionInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: EavDataAttributeOptionInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } } & {
              json: { option: EavDataAttributeOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/attributes/:attributeCode/options/:optionId': {
      $delete:
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string; optionId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/base-prices': {
      $post:
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataBasePriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/base-prices-information': {
      $post:
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataBasePriceInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataBasePriceInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/cost': {
      $post:
        | {
            input: { json: { prices: CatalogDataCostInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataCostInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataCostInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataCostInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataCostInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataCostInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/cost-delete': {
      $post:
        | {
            input: { json: { skus: string[] } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/cost-information': {
      $post:
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataCostInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataCostInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/downloadable-links/samples/:id': {
      $delete:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/downloadable-links/:id': {
      $delete:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/links/types': {
      $get:
        | {
            input: {}
            output: CatalogDataProductLinkTypeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CatalogDataProductLinkTypeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/products/links/:type/attributes': {
      $get:
        | {
            input: { param: { type: string } }
            output: CatalogDataProductLinkAttributeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } }
            output: CatalogDataProductLinkAttributeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { type: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { type: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/media/types/:attributeSetName': {
      $get:
        | {
            input: { param: { attributeSetName: string } }
            output: CatalogDataProductAttributeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetName: string } }
            output: CatalogDataProductAttributeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeSetName: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeSetName: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeSetName: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeSetName: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/options': {
      $post:
        | {
            input: { json: { option: CatalogDataProductCustomOptionInterface } }
            output: CatalogDataProductCustomOptionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { option: CatalogDataProductCustomOptionInterface } }
            output: CatalogDataProductCustomOptionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { option: CatalogDataProductCustomOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { option: CatalogDataProductCustomOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { option: CatalogDataProductCustomOptionInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { option: CatalogDataProductCustomOptionInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/options/types': {
      $get:
        | {
            input: {}
            output: CatalogDataProductCustomOptionTypeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CatalogDataProductCustomOptionTypeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/products/options/:optionId': {
      $put:
        | {
            input: { param: { optionId: string } } & {
              json: { option: CatalogDataProductCustomOptionInterface }
            }
            output: CatalogDataProductCustomOptionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionId: string } } & {
              json: { option: CatalogDataProductCustomOptionInterface }
            }
            output: CatalogDataProductCustomOptionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { optionId: string } } & {
              json: { option: CatalogDataProductCustomOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { optionId: string } } & {
              json: { option: CatalogDataProductCustomOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { optionId: string } } & {
              json: { option: CatalogDataProductCustomOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optionId: string } } & {
              json: { option: CatalogDataProductCustomOptionInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/special-price': {
      $post:
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/special-price-delete': {
      $post:
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataSpecialPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/special-price-information': {
      $post:
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataSpecialPriceInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataSpecialPriceInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/tier-prices': {
      $post:
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/tier-prices-delete': {
      $post:
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: CatalogDataPriceUpdateResultInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { prices: CatalogDataTierPriceInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/tier-prices-information': {
      $post:
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataTierPriceInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: CatalogDataTierPriceInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { skus: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/types': {
      $get:
        | {
            input: {}
            output: CatalogDataProductTypeInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CatalogDataProductTypeInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/products/:productSku/stockItems/:itemId': {
      $put:
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string; itemId: string } } & {
              json: { stockItem: CatalogInventoryDataStockItemInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku': {
      $delete:
        | { input: { param: { sku: string } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { sku: string } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: CatalogDataProductInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: CatalogDataProductInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              query: {
                editMode?: boolean | undefined
                storeId?: number | undefined
                forceReload?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: CatalogDataProductInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: CatalogDataProductInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { product: CatalogDataProductInterface; saveOptions?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/downloadable-links': {
      $get:
        | {
            input: { param: { sku: string } }
            output: DownloadableDataLinkInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: DownloadableDataLinkInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/downloadable-links/samples': {
      $get:
        | {
            input: { param: { sku: string } }
            output: DownloadableDataSampleInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: DownloadableDataSampleInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/downloadable-links/samples/:id': {
      $put:
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                sample: DownloadableDataSampleInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/downloadable-links/:id': {
      $put:
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; id: string } } & {
              json: {
                isGlobalScopeContent?: boolean | undefined
                link: DownloadableDataLinkInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/group-prices/:customerGroupId/tiers': {
      $get:
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: CatalogDataProductTierPriceInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: CatalogDataProductTierPriceInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/group-prices/:customerGroupId/tiers/:qty': {
      $delete:
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string; qty: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/group-prices/:customerGroupId/tiers/:qty/price/:price': {
      $post:
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; customerGroupId: string; price: number; qty: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/links': {
      $post:
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { items: CatalogDataProductLinkInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { entity: CatalogDataProductLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/links/:type': {
      $get:
        | {
            input: { param: { sku: string; type: string } }
            output: CatalogDataProductLinkInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; type: string } }
            output: CatalogDataProductLinkInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; type: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; type: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; type: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; type: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/links/:type/:linkedProductSku': {
      $delete:
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; type: string; linkedProductSku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/media': {
      $get:
        | {
            input: { param: { sku: string } }
            output: CatalogDataProductAttributeMediaGalleryEntryInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: CatalogDataProductAttributeMediaGalleryEntryInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/media/:entryId': {
      $delete:
        | {
            input: { param: { sku: string; entryId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { sku: string; entryId: number } }
            output: CatalogDataProductAttributeMediaGalleryEntryInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: CatalogDataProductAttributeMediaGalleryEntryInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; entryId: string } } & {
              json: { entry: CatalogDataProductAttributeMediaGalleryEntryInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/options': {
      $get:
        | {
            input: { param: { sku: string } }
            output: CatalogDataProductCustomOptionInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: CatalogDataProductCustomOptionInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/options/:optionId': {
      $delete:
        | {
            input: { param: { sku: string; optionId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { sku: string; optionId: number } }
            output: CatalogDataProductCustomOptionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: CatalogDataProductCustomOptionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; optionId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/websites': {
      $post:
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string } } & {
              json: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/products/:sku/websites/:websiteId': {
      $delete:
        | {
            input: { param: { sku: string; websiteId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; websiteId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/requisition_lists': {
      $post:
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: RequisitionListDataRequisitionListInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: RequisitionListDataRequisitionListInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { requisitionList: RequisitionListDataRequisitionListInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returns': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: RmaDataRmaSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: RmaDataRmaSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: { rmaDataObject: RmaDataRmaInterface } }
            output: RmaDataRmaInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rmaDataObject: RmaDataRmaInterface } }
            output: RmaDataRmaInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returns/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: RmaDataRmaInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RmaDataRmaInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: RmaDataRmaInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: RmaDataRmaInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { rmaDataObject: RmaDataRmaInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returns/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: RmaDataCommentSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RmaDataCommentSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { data: RmaDataCommentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returns/:id/labels': {
      $get:
        | { input: { param: { id: number } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: string; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returns/:id/tracking-numbers': {
      $get:
        | {
            input: { param: { id: number } }
            output: RmaDataTrackSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RmaDataTrackSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: { track: RmaDataTrackInterface } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { track: RmaDataTrackInterface } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { track: RmaDataTrackInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { track: RmaDataTrackInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { track: RmaDataTrackInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { track: RmaDataTrackInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returns/:id/tracking-numbers/:trackId': {
      $delete:
        | {
            input: { param: { id: number; trackId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; trackId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; trackId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number; trackId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number; trackId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; trackId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returnsAttributeMetadata': {
      $get:
        | {
            input: {}
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/returnsAttributeMetadata/custom': {
      $get:
        | {
            input: { query: { dataObjectClassName?: string | undefined } }
            output: FrameworkMetadataObjectInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dataObjectClassName?: string | undefined } }
            output: FrameworkMetadataObjectInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { dataObjectClassName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { dataObjectClassName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { dataObjectClassName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dataObjectClassName?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returnsAttributeMetadata/form/:formCode': {
      $get:
        | {
            input: { param: { formCode: string } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: CustomerDataAttributeMetadataInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/returnsAttributeMetadata/:attributeCode': {
      $get:
        | {
            input: { param: { attributeCode: string } }
            output: CustomerDataAttributeMetadataInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: CustomerDataAttributeMetadataInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeCode: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/reward/mine/use-reward': {
      $post:
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/salesRules': {
      $post:
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: SalesRuleDataRuleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: SalesRuleDataRuleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/salesRules/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesRuleDataRuleSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesRuleDataRuleSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/salesRules/:ruleId': {
      $delete:
        | {
            input: { param: { ruleId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ruleId: number } }
            output: SalesRuleDataRuleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: SalesRuleDataRuleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: SalesRuleDataRuleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: SalesRuleDataRuleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: string } } & { json: { rule: SalesRuleDataRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[requestName]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: FrameworkSearchSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[requestName]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: FrameworkSearchSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[requestName]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[requestName]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog': {
      $post:
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SharedCatalogDataSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SharedCatalogDataSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id': {
      $put:
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { sharedCatalog: SharedCatalogDataSharedCatalogInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id/assignCategories': {
      $post:
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id/assignProducts': {
      $post:
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id/categories': {
      $get:
        | { input: { param: { id: number } }; output: number[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: number[]; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id/products': {
      $get:
        | { input: { param: { id: number } }; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: string[]; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id/unassignCategories': {
      $post:
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { categories: CatalogDataCategoryInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:id/unassignProducts': {
      $post:
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { products: CatalogDataProductInterface[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:sharedCatalogId': {
      $delete:
        | {
            input: { param: { sharedCatalogId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { sharedCatalogId: number } }
            output: SharedCatalogDataSharedCatalogInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: SharedCatalogDataSharedCatalogInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:sharedCatalogId/assignCompanies': {
      $post:
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:sharedCatalogId/companies': {
      $get:
        | {
            input: { param: { sharedCatalogId: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/sharedCatalog/:sharedCatalogId/unassignCompanies': {
      $post:
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharedCatalogId: number } } & {
              json: { companies: CompanyDataCompanyInterface[] }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/': {
      $post:
        | {
            input: { json: { entity: SalesDataShipmentInterface } }
            output: SalesDataShipmentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataShipmentInterface } }
            output: SalesDataShipmentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataShipmentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataShipmentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataShipmentInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataShipmentInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/track': {
      $post:
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: SalesDataShipmentTrackInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: SalesDataShipmentTrackInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entity: SalesDataShipmentTrackInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/track/:id': {
      $delete:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataShipmentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataShipmentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataShipmentCommentSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataShipmentCommentSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: SalesDataShipmentCommentInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: SalesDataShipmentCommentInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { entity: SalesDataShipmentCommentInterface }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/:id/emails': {
      $post:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipment/:id/label': {
      $get:
        | { input: { param: { id: number } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: string; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/shipments': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataShipmentSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataShipmentSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/stockItems/lowStock/': {
      $get:
        | {
            input: {
              query: {
                scopeId: number
                qty: number
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: CatalogInventoryDataStockItemCollectionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scopeId: number
                qty: number
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: CatalogInventoryDataStockItemCollectionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                scopeId: number
                qty: number
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                scopeId: number
                qty: number
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                scopeId: number
                qty: number
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scopeId: number
                qty: number
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/stockItems/:productSku': {
      $get:
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: CatalogInventoryDataStockItemInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: CatalogInventoryDataStockItemInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/stockStatuses/:productSku': {
      $get:
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: CatalogInventoryDataStockStatusInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: CatalogInventoryDataStockStatusInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productSku: string } } & { query: { scopeId?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/store/storeConfigs': {
      $get:
        | {
            input: { query: { storeCodes?: string[] | undefined } }
            output: StoreDataStoreConfigInterface[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeCodes?: string[] | undefined } }
            output: StoreDataStoreConfigInterface[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { storeCodes?: string[] | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { storeCodes?: string[] | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { storeCodes?: string[] | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { storeCodes?: string[] | undefined } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/store/storeGroups': {
      $get:
        | { input: {}; output: StoreDataGroupInterface[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StoreDataGroupInterface[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/store/storeViews': {
      $get:
        | { input: {}; output: StoreDataStoreInterface[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StoreDataStoreInterface[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/store/websites': {
      $get:
        | { input: {}; output: StoreDataWebsiteInterface[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StoreDataWebsiteInterface[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/V1/taxClasses': {
      $post:
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxClasses/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: TaxDataTaxClassSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: TaxDataTaxClassSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxClasses/:classId': {
      $put:
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { classId: string } } & { json: { taxClass: TaxDataTaxClassInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxClasses/:taxClassId': {
      $delete:
        | {
            input: { param: { taxClassId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxClassId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { taxClassId: number } }
            output: TaxDataTaxClassInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxClassId: number } }
            output: TaxDataTaxClassInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxClassId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxRates': {
      $post:
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: TaxDataTaxRateInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: TaxDataTaxRateInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: TaxDataTaxRateInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: TaxDataTaxRateInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { taxRate: TaxDataTaxRateInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxRates/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: TaxDataTaxRateSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: TaxDataTaxRateSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxRates/:rateId': {
      $delete:
        | {
            input: { param: { rateId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rateId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { rateId: number } }
            output: TaxDataTaxRateInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rateId: number } }
            output: TaxDataTaxRateInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rateId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxRules': {
      $post:
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: TaxDataTaxRuleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: TaxDataTaxRuleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: TaxDataTaxRuleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: TaxDataTaxRuleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rule: TaxDataTaxRuleInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxRules/search': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: TaxDataTaxRuleSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: TaxDataTaxRuleSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/taxRules/:ruleId': {
      $delete:
        | {
            input: { param: { ruleId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ruleId: number } }
            output: TaxDataTaxRuleInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: TaxDataTaxRuleInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/team/': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyDataTeamSearchResultsInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: CompanyDataTeamSearchResultsInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/team/:companyId': {
      $post:
        | {
            input: { param: { companyId: number } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { companyId: number } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { companyId: number } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { companyId: number } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { companyId: number } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { companyId: number } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/team/:teamId': {
      $delete:
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { teamId: number } }
            output: CompanyDataTeamInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: number } }
            output: CompanyDataTeamInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: { team: CompanyDataTeamInterface } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/temando/rma/:rmaId/shipments': {
      $put:
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rmaId: number } } & { json: { returnShipmentIds: string[] } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/transactions': {
      $get:
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataTransactionSearchResultInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: SalesDataTransactionSearchResultInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'searchCriteria[filterGroups][0][filters][0][field]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][value]'?: string | undefined
                'searchCriteria[filterGroups][0][filters][0][conditionType]'?: string | undefined
                'searchCriteria[sortOrders][0][field]'?: string | undefined
                'searchCriteria[sortOrders][0][direction]'?: string | undefined
                'searchCriteria[pageSize]'?: number | undefined
                'searchCriteria[currentPage]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/transactions/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: SalesDataTransactionInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SalesDataTransactionInterface
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/V1/worldpay-guest-carts/:cartId/payment-information': {
      $post:
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cartId: string } } & {
              json: {
                billingAddress?: QuoteDataAddressInterface | undefined
                email: string
                paymentMethod: QuoteDataPaymentInterface
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
