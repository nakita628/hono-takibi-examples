type AccountCartAdd = {
  '3dcart_access_token'?: string | undefined
  '3dcart_private_key'?: string | undefined
  '3dcartapi_api_key'?: string | undefined
  amazon_access_key_id?: string | undefined
  amazon_access_token?: string | undefined
  amazon_marketplaces_ids?: string | undefined
  amazon_secret_key?: string | undefined
  amazon_seller_id?: string | undefined
  amazon_sp_api_environment?: string | undefined
  amazon_sp_aws_region: 'eu-west-1' | 'us-east-1' | 'us-west-2'
  amazon_sp_aws_role_arn: string
  amazon_sp_aws_user_key_id: string
  amazon_sp_aws_user_secret: string
  amazon_sp_client_id: string
  amazon_sp_client_secret: string
  amazon_sp_refresh_token: string
  aspdotnetstorefront_api_pass?: string | undefined
  aspdotnetstorefront_api_user?: string | undefined
  bigcommerceapi_access_token?: string | undefined
  bigcommerceapi_admin_account?: string | undefined
  bigcommerceapi_api_key?: string | undefined
  bigcommerceapi_api_path?: string | undefined
  bigcommerceapi_client_id?: string | undefined
  bigcommerceapi_context?: string | undefined
  bridge_url?: string | undefined
  cart_id:
    | '3DCart'
    | '3DCartApi'
    | 'AceShop'
    | 'AmazonSP'
    | 'Amazon'
    | 'AspDotNetStorefront'
    | 'BigcommerceApi'
    | 'Creloaded'
    | 'CommerceHQ'
    | 'Cscart'
    | 'Cubecart'
    | 'Demandware'
    | 'EBay'
    | 'Ecwid'
    | 'Etsy'
    | 'EtsyAPIv3'
    | 'Gambio'
    | 'Interspire'
    | 'JooCart'
    | 'Magento1212'
    | 'Magento2Api'
    | 'MijoShop'
    | 'Neto'
    | 'Opencart14'
    | 'LightSpeed'
    | 'Oscmax2'
    | 'Oscommerce22ms2'
    | 'Oxid'
    | 'Pinnacle'
    | 'Prestashop'
    | 'PrestashopApi'
    | 'SSPremium'
    | 'Shopify'
    | 'Squarespace'
    | 'Shopware'
    | 'ShopwareApi'
    | 'Tomatocart'
    | 'Ubercart'
    | 'Virtuemart'
    | 'Volusion'
    | 'WPecommerce'
    | 'Walmart'
    | 'WebAsyst'
    | 'Woocommerce'
    | 'WoocommerceApi'
    | 'Wix'
    | 'Xcart'
    | 'Xtcommerce'
    | 'XtcommerceVeyton'
    | 'Zencart137'
    | 'Hybris'
    | 'MercadoLibre'
    | 'Zid'
  commercehq_api_key?: string | undefined
  commercehq_api_password?: string | undefined
  db_tables_prefix?: string | undefined
  demandware_api_password?: string | undefined
  demandware_client_id?: string | undefined
  demandware_user_name?: string | undefined
  demandware_user_password?: string | undefined
  ebay_access_token?: string | undefined
  ebay_client_id?: string | undefined
  ebay_client_secret?: string | undefined
  ebay_environment?: string | undefined
  ebay_refresh_token?: string | undefined
  ebay_runame?: string | undefined
  ebay_site_id?: number | undefined
  ecwid_acess_token?: string | undefined
  ecwid_store_id?: string | undefined
  etsy_access_token?: string | undefined
  etsy_client_id: string
  etsy_keystring?: string | undefined
  etsy_refresh_token: string
  etsy_shared_secret?: string | undefined
  etsy_token_secret?: string | undefined
  ftp_host?: string | undefined
  ftp_password?: string | undefined
  ftp_port?: number | undefined
  ftp_store_dir?: string | undefined
  ftp_user?: string | undefined
  hybris_client_id?: string | undefined
  hybris_client_secret?: string | undefined
  hybris_password?: string | undefined
  hybris_username?: string | undefined
  hybris_websites?: { storeIds: string[]; uid: string; url: string }[] | undefined
  lightspeed_api_key?: string | undefined
  lightspeed_api_secret?: string | undefined
  magento_access_token?: string | undefined
  magento_consumer_key?: string | undefined
  magento_consumer_secret?: string | undefined
  magento_token_secret?: string | undefined
  mercado_libre_app_id?: string | undefined
  mercado_libre_app_secret_key?: string | undefined
  mercado_libre_refresh_token?: string | undefined
  neto_api_key?: string | undefined
  neto_api_username?: string | undefined
  prestashop_webservice_key?: string | undefined
  shopify_access_token?: string | undefined
  shopify_api_key?: string | undefined
  shopify_api_password?: string | undefined
  shopify_shared_secret?: string | undefined
  shopware_access_key?: string | undefined
  shopware_api_key?: string | undefined
  shopware_api_secret?: string | undefined
  squarespace_api_key?: string | undefined
  store_key?: string | undefined
  store_root?: string | undefined
  store_url: string
  validate_version?: boolean | undefined
  verify?: boolean | undefined
  volusion_login?: string | undefined
  volusion_password?: string | undefined
  walmart_channel_type?: string | undefined
  walmart_client_id?: string | undefined
  walmart_client_secret?: string | undefined
  walmart_environment?: string | undefined
  wc_consumer_key?: string | undefined
  wc_consumer_secret?: string | undefined
  wix_app_id?: string | undefined
  wix_app_secret_key?: string | undefined
  wix_refresh_token?: string | undefined
  zid_access_token?: string | undefined
  zid_authorization?: string | undefined
  zid_client_id?: number | undefined
  zid_client_secret?: string | undefined
  zid_refresh_token?: string | undefined
}
type A2CDateTime = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  format?: string | undefined
  value?: string | undefined
}
type StoreAttributeGroup = {
  additional_fields?: { [x: string]: unknown } | undefined
  assigned_attribute_ids?: string[] | undefined
  attribute_set_id?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  position?: number | undefined
}
type StoreAttribute = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  default_values?: string[] | undefined
  id?: string | undefined
  lang_id?: string | undefined
  name?: string | undefined
  position?: number | undefined
  required?: boolean | undefined
  store_id?: string | undefined
  system?: boolean | undefined
  type?: string | undefined
  values?: string[] | undefined
  visible?: boolean | undefined
}
type Pagination = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  next?: string | undefined
  previous?: string | undefined
}
type ResponseAttributeListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  attribute?: StoreAttribute[] | undefined
  attributes_count?: number | undefined
  custom_fields?: { [x: string]: unknown } | undefined
}
type ModelResponseAttributeList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseAttributeListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type BasketItemOption = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  used_in_combination?: boolean | undefined
  value?: string | undefined
  value_id?: string | undefined
}
type BasketItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  options?: BasketItemOption[] | undefined
  parent_id?: string | undefined
  price?: number | undefined
  product_id?: string | undefined
  quantity?: number | undefined
  sku?: string | undefined
  tax?: number | undefined
  variant_id?: string | undefined
  weight?: number | undefined
  weight_unit?: string | undefined
}
type Currency = {
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  default?: boolean | undefined
  id?: string | undefined
  iso3?: string | undefined
  name?: string | undefined
  rate?: number | undefined
  symbol_left?: string | undefined
  symbol_right?: string | undefined
}
type BaseCustomer = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  email?: string | undefined
  first_name?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
}
type Basket = {
  additional_fields?: { [x: string]: unknown } | undefined
  basket_products?: BasketItem[] | undefined
  basket_url?: string | undefined
  created_at?: A2CDateTime | undefined
  currency?: Currency | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  customer?: BaseCustomer | undefined
  id?: string | undefined
  modified_at?: A2CDateTime | undefined
}
type BasketLiveShippingService = {
  additional_fields?: { [x: string]: unknown } | undefined
  callback?: string | undefined
  callback_err_cnt?: number | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  enabled_on_store?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
}
type CouponCondition = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  entity?: string | undefined
  id?: string | undefined
  key?: string | undefined
  logic_operator?: string | undefined
  match_items?: string | undefined
  operator?: string | undefined
  'sub-conditions'?: CouponCondition[] | undefined
  value?: string | undefined
}
type CatalogPriceRuleAction = {
  additional_fields?: { [x: string]: unknown } | undefined
  apply_to?: string | undefined
  conditions?: CouponCondition[] | undefined
  currency_code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  include_tax?: boolean | undefined
  quantity?: number | undefined
  scope?: string | undefined
  type?: string | undefined
  value?: number | undefined
}
type CatalogPriceRule = {
  actions?: CatalogPriceRuleAction[] | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  conditions?: CouponCondition[] | undefined
  created_time?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  date_end?: A2CDateTime | undefined
  date_start?: A2CDateTime | undefined
  description?: string | undefined
  gid?: string | undefined
  id?: string | undefined
  name?: string | undefined
  short_description?: string | undefined
  type?: string | undefined
  usage_count?: number | undefined
  uses_per_order_limit?: number | undefined
}
type ResponseCartCatalogPriceRulesListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  catalog_price_rules?: CatalogPriceRule[] | undefined
  catalog_price_rules_count?: number | undefined
  custom_fields?: { [x: string]: unknown } | undefined
}
type ModelResponseCartCatalogPriceRulesList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCartCatalogPriceRulesListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type CartConfigUpdate = {
  custom_fields?: { [x: string]: unknown } | undefined
  db_tables_prefix?: string | undefined
  store_id?: string | undefined
}
type CartCouponAdd = {
  action_amount: number
  action_apply_to: 'order_total' | 'item_price' | 'shipping'
  action_condition_entity?: string | undefined
  action_condition_key?: string | undefined
  action_condition_operator?: string | undefined
  action_condition_value?: string | undefined
  action_scope: 'order' | 'matching_items'
  action_type: 'percent' | 'fixed'
  code: string
  codes?: string[] | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  name?: string | undefined
  store_id?: string | undefined
  usage_limit?: number | undefined
  usage_limit_per_customer?: number | undefined
}
type CouponAction = {
  additional_fields?: { [x: string]: unknown } | undefined
  amount?: number | undefined
  apply_to?: string | undefined
  conditions?: CouponCondition[] | undefined
  currency_code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  discount_quantity_step?: number | undefined
  discounted_quantity?: number | undefined
  include_tax?: boolean | undefined
  logic_operator?: string | undefined
  scope?: string | undefined
  type?: string | undefined
}
type CouponCode = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  used_times?: number | undefined
}
type CouponHistory = {
  additional_fields?: { [x: string]: unknown } | undefined
  amount?: number | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  order_id?: string | undefined
}
type Coupon = {
  actions?: CouponAction[] | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  code?: string | undefined
  codes?: CouponCode[] | undefined
  conditions?: CouponCondition[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  date_end?: A2CDateTime | undefined
  date_start?: A2CDateTime | undefined
  description?: string | undefined
  id?: string | undefined
  logic_operator?: string | undefined
  name?: string | undefined
  priority?: number | undefined
  usage_history?: CouponHistory[] | undefined
  usage_limit?: number | undefined
  usage_limit_per_customer?: number | undefined
  used_times?: number | undefined
}
type ResponseCartCouponListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  coupon?: Coupon[] | undefined
  coupon_count?: number | undefined
  custom_fields?: { [x: string]: unknown } | undefined
}
type ModelResponseCartCouponList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCartCouponListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type GiftCard = {
  additional_fields?: { [x: string]: unknown } | undefined
  amount?: number | undefined
  avail_to?: string | undefined
  code?: string | undefined
  created_at?: string | undefined
  currency_code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  free_product_ids?: string | undefined
  id?: string | undefined
  initial_amount?: number | undefined
  issuer_email?: string | undefined
  issuer_name?: string | undefined
  message?: string | undefined
  name?: string | undefined
  recipient_email?: string | undefined
  recipient_name?: string | undefined
  status?: string | undefined
  type?: string | undefined
  usage_history?: CouponHistory[] | undefined
}
type ResponseCartGiftcardListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  gift_card?: GiftCard[] | undefined
}
type ModelResponseCartGiftCardList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCartGiftcardListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type CartShippingZone = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  country?: string | undefined
  country_iso2_codes?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
}
type OrderShippingMethod = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
}
type Carrier = {
  active?: boolean | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  shipping_methods?: OrderShippingMethod[] | undefined
}
type CartChannel = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  is_enabled?: boolean | undefined
  name?: string | undefined
  platform?: string | undefined
}
type Language = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  iso_code?: string | undefined
  name?: string | undefined
}
type Info = {
  additional_fields?: { [x: string]: unknown } | undefined
  city?: string | undefined
  country?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  email?: string | undefined
  owner?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  state_code?: string | undefined
  street_address?: string | undefined
  street_address_line_2?: string | undefined
  zip_code?: string | undefined
}
type CartStoreInfo = {
  active?: boolean | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  carrier_info?: Carrier[] | undefined
  channels?: CartChannel[] | undefined
  country?: string | undefined
  currency?: Currency | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  default_warehouse_id?: string | undefined
  dimension_unit?: string | undefined
  language?: string | undefined
  multi_store_url?: string | undefined
  name?: string | undefined
  prices_include_tax?: boolean | undefined
  root_category_id?: string | undefined
  store_currencies?: Currency[] | undefined
  store_id?: string | undefined
  store_languages?: Language[] | undefined
  store_owner_info?: Info | undefined
  timezone?: string | undefined
  weight_unit?: string | undefined
}
type Country = {
  additional_fields?: { [x: string]: unknown } | undefined
  code2?: string | undefined
  code3?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
}
type State = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
}
type CustomerAddress = {
  additional_fields?: { [x: string]: unknown } | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  company?: string | undefined
  country?: Country | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  default?: boolean | undefined
  fax?: string | undefined
  first_name?: string | undefined
  gender?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  postcode?: string | undefined
  region?: string | undefined
  state?: State | undefined
  type?: string | undefined
  website?: string | undefined
}
type CartWarehouse = {
  additional_fields?: { [x: string]: unknown } | undefined
  address?: CustomerAddress | undefined
  avail?: boolean | undefined
  carriers_ids?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  stores_ids?: string[] | undefined
}
type Cart = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  db_prefix?: string | undefined
  name?: string | undefined
  shipping_zones?: CartShippingZone[] | undefined
  stores_info?: CartStoreInfo[] | undefined
  url?: string | undefined
  version?: string | undefined
  warehouses?: CartWarehouse[] | undefined
}
type CartMetaData = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  key?: string | undefined
  namespace?: string | undefined
  value?: string | undefined
}
type ResponseCartMetaDataListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  items?: CartMetaData[] | undefined
  total_count?: number | undefined
}
type ModelResponseCartMetaDataList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCartMetaDataListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type Plugin = {
  active?: boolean | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
}
type PluginList = {
  additional_fields?: { [x: string]: unknown } | undefined
  all_plugins?: number | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  plugins?: Plugin[] | undefined
}
type Script = {
  additional_fields?: { [x: string]: unknown } | undefined
  created_time?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  event?: string | undefined
  html?: string | undefined
  id?: string | undefined
  load_method?: string | undefined
  modified_time?: A2CDateTime | undefined
  name?: string | undefined
  scope?: string | undefined
  src?: string | undefined
}
type ResponseCartScriptListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  scripts?: Script[] | undefined
  total_count?: number | undefined
}
type ModelResponseCartScriptList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCartScriptListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type Image = {
  additional_fields?: { [x: string]: unknown } | undefined
  alt?: string | undefined
  avail?: boolean | undefined
  create_at?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  file_name?: string | undefined
  http_path?: string | undefined
  id?: string | undefined
  'mime-type'?: string | undefined
  modified_at?: A2CDateTime | undefined
  size?: number | undefined
  sort_order?: number | undefined
  type?: string | undefined
}
type Category = {
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  created_at?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id?: string | undefined
  images?: Image[] | undefined
  keywords?: string | undefined
  meta_description?: string | undefined
  meta_title?: string | undefined
  modified_at?: A2CDateTime | undefined
  name?: string | undefined
  parent_id?: string | undefined
  path?: string | undefined
  seo_url?: string | undefined
  short_description?: string | undefined
  sort_order?: number | undefined
  stores_ids?: string[] | undefined
}
type ResponseCategoryListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  categories_count?: number | undefined
  category?: Category[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
}
type ModelResponseCategoryList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCategoryListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type CustomerAdd = {
  address?:
    | {
        address_book_address1?: string | undefined
        address_book_address2?: string | undefined
        address_book_city?: string | undefined
        address_book_company?: string | undefined
        address_book_country?: string | undefined
        address_book_default?: boolean | undefined
        address_book_fax?: string | undefined
        address_book_first_name?: string | undefined
        address_book_gender?: string | undefined
        address_book_last_name?: string | undefined
        address_book_phone?: string | undefined
        address_book_postcode?: string | undefined
        address_book_region?: string | undefined
        address_book_state?: string | undefined
        address_book_type?: string | undefined
        address_book_website?: string | undefined
      }[]
    | undefined
  birth_day?: string | undefined
  company?: string | undefined
  created_time?: string | undefined
  email: string
  fax?: string | undefined
  first_name: string
  gender?: string | undefined
  group?: string | undefined
  last_login?: string | undefined
  last_name: string
  login?: string | undefined
  modified_time?: string | undefined
  news_letter_subscription?: boolean | undefined
  password?: string | undefined
  phone?: string | undefined
  status?: string | undefined
  store_id?: string | undefined
  website?: string | undefined
}
type CustomerAttributeValue = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  value?: string | undefined
}
type CustomerAttribute = {
  additional_fields?: { [x: string]: unknown } | undefined
  attribute_id?: string | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
  type?: string | undefined
  values?: CustomerAttributeValue[] | undefined
}
type ResponseCustomerAttributeListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  items?: CustomerAttribute[] | undefined
  total_count?: number | undefined
}
type ModelResponseCustomerAttributeList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCustomerAttributeListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type CustomerGroup = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
}
type ResponseCustomerGroupListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  group?: CustomerGroup[] | undefined
  group_count?: number | undefined
}
type ModelResponseCustomerGroupList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCustomerGroupListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type Customer = {
  additional_fields?: { [x: string]: unknown } | undefined
  address_book?: CustomerAddress[] | undefined
  birth_day?: A2CDateTime | undefined
  company?: string | undefined
  created_time?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  email?: string | undefined
  fax?: string | undefined
  first_name?: string | undefined
  gender?: string | undefined
  group?: CustomerGroup[] | undefined
  id?: string | undefined
  ip_address?: string | undefined
  last_login?: A2CDateTime | undefined
  last_name?: string | undefined
  last_order_id?: string | undefined
  login?: string | undefined
  modified_time?: A2CDateTime | undefined
  news_letter_subscription?: boolean | undefined
  orders_count?: number | undefined
  phone?: string | undefined
  status?: string | undefined
  stores_ids?: string[] | undefined
  website?: string | undefined
}
type ResponseCustomerListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  customer?: Customer[] | undefined
  customers_count?: number | undefined
}
type ModelResponseCustomerList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseCustomerListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type OrderItemOption = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
  option_id?: string | undefined
  price?: number | undefined
  product_option_value_id?: string | undefined
  type?: string | undefined
  value?: string | undefined
  weight?: number | undefined
}
type OrderItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  barcode?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  discount_amount?: number | undefined
  model?: string | undefined
  name?: string | undefined
  options?: OrderItemOption[] | undefined
  order_product_id?: string | undefined
  parent_order_product_id?: string | undefined
  price?: number | undefined
  price_inc_tax?: number | undefined
  product_id?: string | undefined
  quantity?: number | undefined
  tax_percent?: number | undefined
  tax_value?: number | undefined
  tax_value_after_discount?: number | undefined
  total_price?: number | undefined
  variant_id?: string | undefined
  weight?: number | undefined
  weight_unit?: string | undefined
}
type OrderTotals = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  discount?: number | undefined
  shipping?: number | undefined
  subtotal?: number | undefined
  tax?: number | undefined
  total?: number | undefined
}
type OrderAbandoned = {
  additional_fields?: { [x: string]: unknown } | undefined
  basket_id?: string | undefined
  basket_url?: string | undefined
  created_at?: A2CDateTime | undefined
  currency?: Currency | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  customer?: BaseCustomer | undefined
  id?: string | undefined
  modified_at?: A2CDateTime | undefined
  order_products?: OrderItem[] | undefined
  totals?: OrderTotals | undefined
}
type ResponseOrderAbandonedListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  order?: OrderAbandoned[] | undefined
}
type ModelResponseOrderAbandonedList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseOrderAbandonedListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type OrderAdd = {
  admin_comment?: string | undefined
  admin_private_comment?: string | undefined
  bill_address_1: string
  bill_address_2?: string | undefined
  bill_city: string
  bill_company?: string | undefined
  bill_country: string
  bill_fax?: string | undefined
  bill_first_name: string
  bill_last_name: string
  bill_phone?: string | undefined
  bill_postcode: string
  bill_state: string
  channel_id?: string | undefined
  clear_cache?: boolean | undefined
  comment?: string | undefined
  coupon_discount?: number | undefined
  coupons?: string[] | undefined
  create_invoice?: boolean | undefined
  currency?: string | undefined
  customer_birthday?: string | undefined
  customer_email: string
  customer_fax?: string | undefined
  customer_first_name?: string | undefined
  customer_last_name?: string | undefined
  customer_phone?: string | undefined
  date?: string | undefined
  date_finished?: string | undefined
  date_modified?: string | undefined
  discount?: number | undefined
  external_source?: string | undefined
  financial_status?: string | undefined
  fulfillment_status?: string | undefined
  gift_certificate_discount?: number | undefined
  id?: string | undefined
  inventory_behaviour?: string | undefined
  note_attributes?: { name?: string | undefined; value?: string | undefined }[] | undefined
  order_id?: string | undefined
  order_item: {
    order_item_allow_refund_items_separately?: boolean | undefined
    order_item_allow_ship_items_separately?: boolean | undefined
    order_item_id: string
    order_item_model?: string | undefined
    order_item_name: string
    order_item_option?:
      | {
          order_item_option_name?: string | undefined
          order_item_option_price?: number | undefined
          order_item_option_value?: string | undefined
        }[]
      | undefined
    order_item_parent?: number | undefined
    order_item_parent_option_name?: string | undefined
    order_item_price: number
    order_item_price_includes_tax?: boolean | undefined
    order_item_property?:
      | {
          order_item_property_name?: string | undefined
          order_item_property_value?: string | undefined
        }[]
      | undefined
    order_item_quantity: number
    order_item_tax?: number | undefined
    order_item_variant_id?: string | undefined
    order_item_weight?: number | undefined
  }[]
  order_payment_method?: string | undefined
  order_shipping_method?: string | undefined
  order_status: string
  prices_inc_tax?: boolean | undefined
  send_admin_notifications?: boolean | undefined
  send_notifications?: boolean | undefined
  shipp_address_1?: string | undefined
  shipp_address_2?: string | undefined
  shipp_city?: string | undefined
  shipp_company?: string | undefined
  shipp_country?: string | undefined
  shipp_fax?: string | undefined
  shipp_first_name?: string | undefined
  shipp_last_name?: string | undefined
  shipp_phone?: string | undefined
  shipp_postcode?: string | undefined
  shipp_state?: string | undefined
  shipping_price?: number | undefined
  shipping_tax?: number | undefined
  store_id?: string | undefined
  subtotal_price?: number | undefined
  tags?: string | undefined
  tax_price?: number | undefined
  total_paid?: number | undefined
  total_price?: number | undefined
  total_weight?: number | undefined
  transaction_id?: string | undefined
}
type OrderTotalsNewDiscount = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  type?: string | undefined
  value?: number | undefined
}
type OrderPaymentMethod = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  name?: string | undefined
}
type OrderStatusRefundItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  order_product_id?: string | undefined
  product_id?: string | undefined
  qty?: number | undefined
  refund?: number | undefined
  variant_id?: string | undefined
}
type OrderRefund = {
  additional_fields?: { [x: string]: unknown } | undefined
  comment?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  fee?: number | undefined
  id?: string | undefined
  items?: OrderStatusRefundItem[] | undefined
  modified_time?: A2CDateTime | undefined
  shipping?: number | undefined
  tax?: number | undefined
  total?: number | undefined
}
type OrderStatusHistoryItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  comment?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  modified_time?: A2CDateTime | undefined
  name?: string | undefined
  notify?: boolean | undefined
}
type OrderStatusRefund = {
  additional_fields?: { [x: string]: unknown } | undefined
  comment?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  fee?: number | undefined
  refunded_items?: OrderStatusRefundItem[] | undefined
  shipping?: number | undefined
  tax?: number | undefined
  time?: A2CDateTime | undefined
  total_refunded?: number | undefined
}
type OrderStatus = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  history?: OrderStatusHistoryItem[] | undefined
  id?: string | undefined
  name?: string | undefined
  refund_info?: OrderStatusRefund | undefined
}
type OrderTotal = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  shipping_ex_tax?: number | undefined
  subtotal_ex_tax?: number | undefined
  total?: number | undefined
  total_discount?: number | undefined
  total_paid?: number | undefined
  total_tax?: number | undefined
  wrapping_ex_tax?: number | undefined
}
type Order = {
  additional_fields?: { [x: string]: unknown } | undefined
  basket_id?: string | undefined
  billing_address?: CustomerAddress | undefined
  bundles?: OrderItem[] | undefined
  channel_id?: string | undefined
  comment?: string | undefined
  create_at?: A2CDateTime | undefined
  currency?: Currency | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  customer?: BaseCustomer | undefined
  discounts?: OrderTotalsNewDiscount[] | undefined
  finished_time?: A2CDateTime | undefined
  gift_message?: string | undefined
  id?: string | undefined
  modified_at?: A2CDateTime | undefined
  order_details_url?: string | undefined
  order_id?: string | undefined
  order_products?: OrderItem[] | undefined
  payment_method?: OrderPaymentMethod | undefined
  refunds?: OrderRefund[] | undefined
  shipping_address?: CustomerAddress | undefined
  shipping_method?: OrderShippingMethod | undefined
  shipping_methods?: OrderShippingMethod[] | undefined
  status?: OrderStatus | undefined
  store_id?: string | undefined
  total?: OrderTotal | undefined
  totals?: OrderTotals | undefined
  warehouses_ids?: string[] | undefined
}
type ResponseOrderListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  order?: Order[] | undefined
  orders_count?: number | undefined
}
type ModelResponseOrderList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseOrderListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type OrderPreestimateShippingList = {
  customer_email?: string | undefined
  customer_id?: string | undefined
  exclude?: string | undefined
  order_item: {
    order_item_id: string
    order_item_model?: string | undefined
    order_item_option?:
      | {
          order_item_option_id?: string | undefined
          order_item_option_name?: string | undefined
          order_item_option_used_in_combinations?: boolean | undefined
          order_item_option_value?: string | undefined
          order_item_option_value_id?: string | undefined
        }[]
      | undefined
    order_item_quantity: number
    order_item_variant_id?: string | undefined
    order_item_weight?: number | undefined
  }[]
  params?: string | undefined
  shipp_address_1?: string | undefined
  shipp_city?: string | undefined
  shipp_country: string
  shipp_postcode?: string | undefined
  shipp_state?: string | undefined
  store_id?: string | undefined
  warehouse_id?: string | undefined
}
type OrderPreestimateShipping = {
  additional_fields?: { [x: string]: unknown } | undefined
  carrier_code?: string | undefined
  carrier_name?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  delivery_time?: string | undefined
  description?: string | undefined
  method_code?: string | undefined
  method_name?: string | undefined
  price?: number | undefined
  price_inc_tax?: number | undefined
}
type ResponseOrderPreestimateShippingListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  preestimate_shippings?: OrderPreestimateShipping[] | undefined
  preestimate_shippings_count?: number | undefined
}
type ModelResponseOrderPreestimateShippingList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseOrderPreestimateShippingListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type OrderRefundAdd = {
  date?: string | undefined
  fee_price?: number | undefined
  is_online?: boolean | undefined
  item_restock?: boolean | undefined
  items?:
    | {
        order_product_id?: string | undefined
        price?: number | undefined
        quantity?: number | undefined
      }[]
    | undefined
  message?: string | undefined
  order_id?: string | undefined
  send_notifications?: boolean | undefined
  shipping_price?: number | undefined
  total_price?: number | undefined
}
type OrderShipmentAdd = {
  adjust_stock?: boolean | undefined
  enable_cache?: boolean | undefined
  is_shipped?: boolean | undefined
  items?: { order_product_id?: string | undefined; quantity?: number | undefined }[] | undefined
  order_id?: string | undefined
  send_notifications?: boolean | undefined
  shipment_provider?: string | undefined
  shipping_method?: string | undefined
  store_id?: string | undefined
  tracking_link?: string | undefined
  tracking_numbers?:
    | { carrier_id?: string | undefined; tracking_number?: string | undefined }[]
    | undefined
  warehouse_id?: string | undefined
}
type ShipmentItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  model?: string | undefined
  name?: string | undefined
  order_product_id?: string | undefined
  price?: number | undefined
  product_id?: string | undefined
  quantity?: number | undefined
  variant_id?: string | undefined
}
type ShipmentTrackingNumber = {
  additional_fields?: { [x: string]: unknown } | undefined
  carrier_id?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  tracking_number?: string | undefined
}
type Shipment = {
  additional_fields?: { [x: string]: unknown } | undefined
  created_at?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  is_shipped?: boolean | undefined
  items?: ShipmentItem[] | undefined
  modified_time?: A2CDateTime | undefined
  order_id?: string | undefined
  shipment_provider?: string | undefined
  tracking_numbers?: ShipmentTrackingNumber[] | undefined
  warehouse_id?: string | undefined
}
type ResponseOrderShipmentListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  shipment?: Shipment[] | undefined
  shipment_count?: number | undefined
}
type ModelResponseOrderShipmentList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseOrderShipmentListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type OrderShipmentTrackingAdd = {
  carrier_id?: string | undefined
  order_id?: string | undefined
  send_notifications?: boolean | undefined
  shipment_id: string
  store_id?: string | undefined
  tracking_link?: string | undefined
  tracking_number: string
  tracking_provider?: string | undefined
}
type OrderShipmentUpdate = {
  is_shipped?: boolean | undefined
  order_id?: string | undefined
  replace?: boolean | undefined
  shipment_id: string
  store_id?: string | undefined
  tracking_link?: string | undefined
  tracking_numbers?:
    | { carrier_id?: string | undefined; tracking_number?: string | undefined }[]
    | undefined
}
type OrderTransaction = {
  additional_fields?: { [x: string]: unknown } | undefined
  amount?: number | undefined
  avs_message?: string | undefined
  avs_postal_resp_code?: string | undefined
  avs_street_resp_code?: string | undefined
  card_bin?: string | undefined
  card_brand?: string | undefined
  card_last_four?: string | undefined
  created_time?: A2CDateTime | undefined
  currency?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  cvv_code?: string | undefined
  cvv_message?: string | undefined
  description?: string | undefined
  gateway?: string | undefined
  id?: string | undefined
  is_test_mode?: boolean | undefined
  order_id?: string | undefined
  parent_id?: string | undefined
  reference_number?: string | undefined
  settlement_amount?: number | undefined
  settlement_created_time?: A2CDateTime | undefined
  settlement_currency?: string | undefined
  status?: string | undefined
  transaction_id?: string | undefined
}
type ResponseOrderTransactionListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  transactions?: OrderTransaction[] | undefined
  transactions_count?: number | undefined
}
type ModelResponseOrderTransactionList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseOrderTransactionListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type ProductAdd = {
  attribute_name?: string | undefined
  attribute_set_name?: string | undefined
  avail_from?: string | undefined
  available_for_sale?: boolean | undefined
  available_for_view?: boolean | undefined
  backorder_status?: string | undefined
  barcode?: string | undefined
  best_offer?: string[] | undefined
  brand_name?: string | undefined
  categories_ids?: string | undefined
  category_id?: string | undefined
  clear_cache?: boolean | undefined
  condition?: string | undefined
  cost_price?: number | undefined
  country_of_origin?: string | undefined
  created_at?: string | undefined
  description: string
  downloadable?: boolean | undefined
  ean?: string | undefined
  files?: { name: string; url: string }[] | undefined
  group_prices?: { group_id?: string | undefined; price?: number | undefined }[] | undefined
  gtin?: string | undefined
  harmonized_system_code?: string | undefined
  height?: number | undefined
  image_name?: string | undefined
  image_url?: string | undefined
  isbn?: string | undefined
  lang_id?: string | undefined
  length?: number | undefined
  listing_duration?: string | undefined
  listing_type?: string | undefined
  manage_stock?: boolean | undefined
  manufacturer?: string | undefined
  marketplace_item_properties?: string | undefined
  meta_description?: string | undefined
  meta_keywords?: string | undefined
  meta_title?: string | undefined
  model: string
  mpn?: string | undefined
  name: string
  old_price?: number | undefined
  ordered_count?: number | undefined
  package_details?: string[] | undefined
  payment_methods?: string[] | undefined
  paypal_email?: string | undefined
  price: number
  product_class?: string | undefined
  quantity?: number | undefined
  return_accepted?: boolean | undefined
  sales_tax?: string[] | undefined
  search_keywords?: string | undefined
  seller_profiles?:
    | {
        payment_profile_id?: string | undefined
        return_profile_id?: string | undefined
        shipping_profile_id?: string | undefined
      }
    | undefined
  seo_url?: string | undefined
  shipping_details?:
    | {
        shipping_cost?: number | undefined
        shipping_service?: string | undefined
        shipping_type?: string | undefined
      }[]
    | undefined
  shipping_template_id?: number | undefined
  short_description?: string | undefined
  sku?: string | undefined
  special_price?: number | undefined
  specifics?: string[] | undefined
  sprice_create?: string | undefined
  sprice_expire?: string | undefined
  sprice_modified?: string | undefined
  status?: string | undefined
  store_id?: string | undefined
  stores_ids?: string | undefined
  tags?: string | undefined
  tax_class_id?: number | undefined
  taxable?: boolean | undefined
  tier_prices?: { price?: number | undefined; quantity?: number | undefined }[] | undefined
  type?: string | undefined
  upc?: string | undefined
  url?: string | undefined
  viewed_count?: number | undefined
  visible?: string | undefined
  warehouse_id?: string | undefined
  weight?: number | undefined
  weight_unit?: string | undefined
  wholesale_price?: number | undefined
  width?: number | undefined
}
type ProductAttribute = {
  additional_fields?: { [x: string]: unknown } | undefined
  attribute_group_id?: string | undefined
  attribute_id?: string | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  lang_id?: string | undefined
  name?: string | undefined
  position?: number | undefined
  product_id?: string | undefined
  required?: boolean | undefined
  store_id?: string | undefined
  type?: string | undefined
  value?: string | undefined
  variant_id?: string | undefined
  visible?: boolean | undefined
}
type ResponseProductAttributeListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  attribute?: ProductAttribute[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
}
type ModelResponseProductAttributeList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseProductAttributeListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type Brand = {
  active?: boolean | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  created_time?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  full_description?: string | undefined
  id?: string | undefined
  images?: Image[] | undefined
  meta_description?: string | undefined
  meta_keywords?: string | undefined
  meta_title?: string | undefined
  modified_time?: string | undefined
  name?: string | undefined
  short_description?: string | undefined
  stores_ids?: string[] | undefined
  url?: string | undefined
}
type ProductAdvancedPrice = {
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  expire_time?: A2CDateTime | undefined
  group_id?: string | undefined
  id?: string | undefined
  quantity_from?: number | undefined
  start_time?: A2CDateTime | undefined
  value?: number | undefined
}
type ProductChildItemCombination = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  option_id?: string | undefined
  option_value_id?: string | undefined
}
type ProductInventory = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  in_stock?: boolean | undefined
  priority?: number | undefined
  quantity?: number | undefined
  warehouse_id?: string | undefined
}
type Child = {
  additional_fields?: { [x: string]: unknown } | undefined
  advanced_price?: ProductAdvancedPrice[] | undefined
  allow_backorders?: boolean | undefined
  avail_for_sale?: boolean | undefined
  combination?: ProductChildItemCombination[] | undefined
  cost_price?: number | undefined
  created_time?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  default_price?: number | undefined
  default_qty_in_pack?: number | undefined
  dimensions_unit?: string | undefined
  ean?: string | undefined
  full_description?: string | undefined
  gtin?: string | undefined
  height?: number | undefined
  id?: string | undefined
  images?: Image[] | undefined
  in_stock?: boolean | undefined
  inventory?: ProductInventory[] | undefined
  inventory_level?: number | undefined
  is_qty_in_pack_fixed?: boolean | undefined
  isbn?: string | undefined
  length?: number | undefined
  list_price?: number | undefined
  manage_stock?: boolean | undefined
  meta_description?: string | undefined
  meta_keywords?: string | undefined
  meta_title?: string | undefined
  min_quantity?: number | undefined
  modified_time?: A2CDateTime | undefined
  mpn?: string | undefined
  name?: string | undefined
  parent_id?: string | undefined
  short_description?: string | undefined
  sku?: string | undefined
  sort_order?: number | undefined
  tax_class_id?: string | undefined
  upc?: string | undefined
  weight?: number | undefined
  weight_unit?: string | undefined
  wholesale_price?: number | undefined
  width?: number | undefined
}
type ResponseProductChildItemListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  children?: Child[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  total_count?: number | undefined
}
type ModelResponseProductChildItemList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseProductChildItemListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type ProductImageAdd = {
  content?: string | undefined
  image_name: string
  label?: string | undefined
  lang_id?: string | undefined
  mime?: string | undefined
  position?: number | undefined
  product_id?: string | undefined
  product_variant_id?: number | undefined
  store_id?: string | undefined
  type: 'small' | 'base' | 'additional' | 'thumbnail'
  url?: string | undefined
  variant_ids?: string | undefined
}
type ProductGroupItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  child_item_id?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  default_qty_in_pack?: string | undefined
  is_qty_in_pack_fixed?: boolean | undefined
  product_id?: string | undefined
}
type ProductGroupPrice = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  expire_time?: string | undefined
  group_id?: string | undefined
  id?: string | undefined
  price?: number | undefined
  quantity?: number | undefined
  start_time?: string | undefined
  store_id?: string | undefined
}
type ProductOptionItem = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  price?: string | undefined
  product_option_item_id?: string | undefined
  quantity?: number | undefined
  sku?: string | undefined
  sort_order?: number | undefined
  type_price?: string | undefined
  weight?: string | undefined
}
type ProductOption = {
  additional_fields?: { [x: string]: unknown } | undefined
  available?: boolean | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  option_items?: ProductOptionItem[] | undefined
  product_option_id?: string | undefined
  required?: boolean | undefined
  sort_order?: number | undefined
  type?: string | undefined
  used_in_combination?: boolean | undefined
}
type SpecialPrice = {
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  created_at?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  expired_at?: A2CDateTime | undefined
  modified_at?: A2CDateTime | undefined
  value?: number | undefined
}
type ProductTierPrice = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  price?: number | undefined
  qty?: number | undefined
}
type Product = {
  additional_fields?: { [x: string]: unknown } | undefined
  advanced_price?: ProductAdvancedPrice[] | undefined
  avail_sale?: boolean | undefined
  avail_view?: boolean | undefined
  backorders?: string | undefined
  categories_ids?: string[] | undefined
  cost_price?: number | undefined
  create_at?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  dimensions_unit?: string | undefined
  group_items?: ProductGroupItem[] | undefined
  group_price?: ProductGroupPrice[] | undefined
  height?: number | undefined
  id?: string | undefined
  images?: Image[] | undefined
  inventory?: ProductInventory[] | undefined
  is_downloadable?: boolean | undefined
  is_stock_managed?: boolean | undefined
  is_virtual?: boolean | undefined
  length?: number | undefined
  manage_stock?: string | undefined
  meta_description?: string | undefined
  meta_keywords?: string | undefined
  meta_title?: string | undefined
  modified_at?: A2CDateTime | undefined
  name?: string | undefined
  price?: number | undefined
  product_options?: ProductOption[] | undefined
  quantity?: number | undefined
  related_products_ids?: string[] | undefined
  seo_url?: string | undefined
  short_description?: string | undefined
  sort_order?: number | undefined
  special_price?: SpecialPrice | undefined
  stores_ids?: string[] | undefined
  tax_class_id?: string | undefined
  tier_price?: ProductTierPrice[] | undefined
  type?: string | undefined
  u_brand?: string | undefined
  u_brand_id?: string | undefined
  u_model?: string | undefined
  u_mpn?: string | undefined
  u_sku?: string | undefined
  u_upc?: string | undefined
  url?: string | undefined
  weight?: number | undefined
  weight_unit?: string | undefined
  width?: number | undefined
}
type ResponseProductListResult = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  product?: Product[] | undefined
  products_count?: number | undefined
}
type ModelResponseProductList = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  pagination?: Pagination | undefined
  result?: ResponseProductListResult | undefined
  return_code?: number | undefined
  return_message?: string | undefined
}
type ProductPriceAdd = {
  group_prices?: { group_id?: string | undefined; price?: number | undefined }[] | undefined
  product_id?: string | undefined
}
type ProductPriceUpdate = {
  group_prices?:
    | { group_id?: string | undefined; id?: number | undefined; price?: number | undefined }[]
    | undefined
  product_id?: string | undefined
}
type ProductReviewRating = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  value?: number | undefined
}
type ProductReview = {
  additional_fields?: { [x: string]: unknown } | undefined
  created_time?: A2CDateTime | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  customer_id?: string | undefined
  email?: string | undefined
  id?: string | undefined
  message?: string | undefined
  nick_name?: string | undefined
  product_id?: string | undefined
  rating?: number | undefined
  ratings?: ProductReviewRating[] | undefined
  status?: string | undefined
  summary?: string | undefined
}
type ProductTaxAdd = {
  name: string
  product_id?: string | undefined
  tax_rates: { name?: string | undefined; type?: string | undefined; value?: number | undefined }[]
}
type ProductVariantAdd = {
  attributes?:
    | {
        attribute_name?: string | undefined
        attribute_price?: number | undefined
        attribute_value?: string | undefined
      }[]
    | undefined
  available_for_sale?: boolean | undefined
  available_for_view?: boolean | undefined
  barcode?: string | undefined
  clear_cache?: boolean | undefined
  cost_price?: number | undefined
  country_of_origin?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  harmonized_system_code?: string | undefined
  height?: number | undefined
  lang_id?: string | undefined
  length?: number | undefined
  manage_stock?: boolean | undefined
  manufacturer?: string | undefined
  meta_description?: string | undefined
  meta_keywords?: string | undefined
  meta_title?: string | undefined
  model: string
  name?: string | undefined
  price?: number | undefined
  product_id?: string | undefined
  quantity?: number | undefined
  short_description?: string | undefined
  sku?: string | undefined
  special_price?: number | undefined
  sprice_create?: string | undefined
  sprice_expire?: string | undefined
  sprice_modified?: string | undefined
  store_id?: string | undefined
  tax_class_id?: number | undefined
  taxable?: boolean | undefined
  url?: string | undefined
  warehouse_id?: string | undefined
  weight?: number | undefined
  weight_unit?: string | undefined
  width?: number | undefined
}
type ProductVariantImageAdd = {
  content?: string | undefined
  image_name: string
  label?: string | undefined
  mime?: string | undefined
  option_id?: string | undefined
  position?: number | undefined
  product_id?: string | undefined
  product_variant_id: number
  store_id?: string | undefined
  type: 'small' | 'base' | 'additional' | 'thumbnail'
  url?: string | undefined
}
type ProductVariantPriceAdd = {
  group_prices?: { group_id?: string | undefined; price?: number | undefined }[] | undefined
  id?: string | undefined
}
type ProductVariantPriceUpdate = {
  group_prices?:
    | { group_id?: string | undefined; id?: number | undefined; price?: number | undefined }[]
    | undefined
  id?: string | undefined
}
type Subscriber = {
  additional_fields?: { [x: string]: unknown } | undefined
  created_time?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  customer_id?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  modified_time?: string | undefined
  subscribed?: boolean | undefined
}
type TaxClassZipCodesRange = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  from?: string | undefined
  to?: string | undefined
}
type TaxClassZipCodes = {
  additional_fields?: { [x: string]: unknown } | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  fields?: TaxClassZipCodesRange[] | undefined
  is_range?: boolean | undefined
  range?: string[] | undefined
}
type TaxClassStates = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  tax?: number | undefined
  tax_type?: number | undefined
  zip_codes?: TaxClassZipCodes[] | undefined
}
type TaxClassCountries = {
  additional_fields?: { [x: string]: unknown } | undefined
  code?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  states?: TaxClassStates[] | undefined
  tax?: number | undefined
  tax_type?: number | undefined
}
type TaxClassRate = {
  additional_fields?: { [x: string]: unknown } | undefined
  address?: string[] | undefined
  cities?: string[] | undefined
  countries?: TaxClassCountries[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  tax?: number | undefined
  tax_based_on?: string | undefined
  tax_type?: number | undefined
  zip_codes?: TaxClassZipCodes[] | undefined
}
type TaxClass = {
  additional_fields?: { [x: string]: unknown } | undefined
  avail?: boolean | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  tax?: number | undefined
  tax_rates?: TaxClassRate[] | undefined
  tax_type?: number | undefined
}
type Webhook = {
  action?: string | undefined
  active?: boolean | undefined
  additional_fields?: { [x: string]: unknown } | undefined
  callback?: string | undefined
  created_at?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  entity?: string | undefined
  fields?: string | undefined
  id?: number | undefined
  label?: string | undefined
  store_id?: string | undefined
  updated_at?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account.cart.add.json': {
      $post: {
        input: { json: AccountCartAdd }
        output: {
          result?: { store_key?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account.cart.list.json': {
      $get: {
        input: {
          query: {
            params?: string | undefined
            exclude?: string | undefined
            request_from_date?: string | undefined
            request_to_date?: string | undefined
            store_url?: string | undefined
            store_key?: string | undefined
          }
        }
        output: {
          result?:
            | {
                carts?:
                  | {
                      cart_id?: string | undefined
                      id?: string | undefined
                      store_key?: string | undefined
                      total_calls?: string | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                carts_count?: number | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account.config.update.json': {
      $put: {
        input: {
          query: {
            new_store_key?: string | undefined
            bridge_url?: string | undefined
            store_root?: string | undefined
            db_tables_prefix?: string | undefined
            '3dcart_private_key'?: string | undefined
            '3dcart_access_token'?: string | undefined
            '3dcartapi_api_key'?: string | undefined
            amazon_sp_client_id?: string | undefined
            amazon_sp_client_secret?: string | undefined
            amazon_sp_aws_user_key_id?: string | undefined
            amazon_sp_aws_user_secret?: string | undefined
            amazon_sp_aws_region?: string | undefined
            amazon_sp_aws_role_arn?: string | undefined
            amazon_sp_refresh_token?: string | undefined
            amazon_sp_api_environment?: string | undefined
            amazon_access_token?: string | undefined
            amazon_seller_id?: string | undefined
            amazon_marketplaces_ids?: string | undefined
            amazon_secret_key?: string | undefined
            amazon_access_key_id?: string | undefined
            aspdotnetstorefront_api_user?: string | undefined
            aspdotnetstorefront_api_pass?: string | undefined
            bigcommerceapi_admin_account?: string | undefined
            bigcommerceapi_api_path?: string | undefined
            bigcommerceapi_api_key?: string | undefined
            bigcommerceapi_client_id?: string | undefined
            bigcommerceapi_access_token?: string | undefined
            bigcommerceapi_context?: string | undefined
            demandware_client_id?: string | undefined
            demandware_api_password?: string | undefined
            demandware_user_name?: string | undefined
            demandware_user_password?: string | undefined
            ebay_client_id?: string | undefined
            ebay_client_secret?: string | undefined
            ebay_runame?: string | undefined
            ebay_access_token?: string | undefined
            ebay_refresh_token?: string | undefined
            ebay_environment?: string | undefined
            ebay_site_id?: number | undefined
            ecwid_acess_token?: string | undefined
            ecwid_store_id?: string | undefined
            etsy_keystring?: string | undefined
            etsy_shared_secret?: string | undefined
            etsy_access_token?: string | undefined
            etsy_token_secret?: string | undefined
            etsy_client_id?: string | undefined
            etsy_refresh_token?: string | undefined
            neto_api_key?: string | undefined
            neto_api_username?: string | undefined
            shopify_api_key?: string | undefined
            shopify_api_password?: string | undefined
            shopify_shared_secret?: string | undefined
            shopify_access_token?: string | undefined
            shopware_access_key?: string | undefined
            shopware_api_key?: string | undefined
            shopware_api_secret?: string | undefined
            volusion_login?: string | undefined
            volusion_password?: string | undefined
            walmart_client_id?: string | undefined
            walmart_client_secret?: string | undefined
            walmart_environment?: string | undefined
            walmart_channel_type?: string | undefined
            squarespace_api_key?: string | undefined
            hybris_client_id?: string | undefined
            hybris_client_secret?: string | undefined
            hybris_username?: string | undefined
            hybris_password?: string | undefined
            hybris_websites?: string[] | undefined
            lightspeed_api_key?: string | undefined
            lightspeed_api_secret?: string | undefined
            commercehq_api_key?: string | undefined
            commercehq_api_password?: string | undefined
            wc_consumer_key?: string | undefined
            wc_consumer_secret?: string | undefined
            magento_consumer_key?: string | undefined
            magento_consumer_secret?: string | undefined
            magento_access_token?: string | undefined
            magento_token_secret?: string | undefined
            prestashop_webservice_key?: string | undefined
            wix_app_id?: string | undefined
            wix_app_secret_key?: string | undefined
            wix_refresh_token?: string | undefined
            mercado_libre_app_id?: string | undefined
            mercado_libre_app_secret_key?: string | undefined
            mercado_libre_refresh_token?: string | undefined
            zid_client_id?: number | undefined
            zid_client_secret?: string | undefined
            zid_access_token?: string | undefined
            zid_authorization?: string | undefined
            zid_refresh_token?: string | undefined
          }
        }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account.failed_webhooks.json': {
      $get: {
        input: {
          query: {
            count?: number | undefined
            start?: number | undefined
            ids?: string | undefined
          }
        }
        output: {
          result?:
            | {
                all_failed_webhook?: string | undefined
                webhook?:
                  | {
                      entity_id?: string | undefined
                      time?: A2CDateTime | undefined
                      webhook_id?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account.supported_platforms.json': {
      $get: {
        input: {}
        output: {
          result?:
            | {
                supported_platforms?:
                  | {
                      cart_id?: string | undefined
                      cart_method?: string | undefined
                      cart_name?: string | undefined
                      cart_versions?: string | undefined
                      params?:
                        | {
                            additional?:
                              | { description?: string | undefined; name?: string | undefined }[]
                              | undefined
                            required?:
                              | { description?: string | undefined; name?: string | undefined }[][]
                              | undefined
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.add.json': {
      $post: {
        input: {
          query: {
            type: 'text' | 'select' | 'textarea' | 'date' | 'price' | 'multiselect' | 'boolean'
            code?: string | undefined
            name: string
            store_id?: string | undefined
            lang_id?: string | undefined
            visible?: boolean | undefined
            required?: boolean | undefined
            position?: number | undefined
            attribute_group_id?: string | undefined
            is_global?: string | undefined
            is_searchable?: boolean | undefined
            is_filterable?: string | undefined
            is_comparable?: boolean | undefined
            is_html_allowed_on_front?: boolean | undefined
            is_filterable_in_search?: boolean | undefined
            is_configurable?: boolean | undefined
            is_visible_in_advanced_search?: boolean | undefined
            is_used_for_promo_rules?: boolean | undefined
            used_in_product_listing?: boolean | undefined
            used_for_sort_by?: boolean | undefined
            apply_to?: string | undefined
          }
        }
        output: {
          result?: { id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.assign.group.json': {
      $post: {
        input: { query: { id: string; group_id: string; attribute_set_id?: string | undefined } }
        output: {
          result?: { assigned?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.assign.set.json': {
      $post: {
        input: { query: { id: string; group_id?: string | undefined; attribute_set_id: string } }
        output: {
          result?: { assigned?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.attributeset.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: {
          result?: StoreAttributeGroup[] | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.count.json': {
      $get: {
        input: {
          query: {
            type?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            visible?: boolean | undefined
            required?: boolean | undefined
            system?: boolean | undefined
          }
        }
        output: {
          result?: { attributes_count?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.delete.json': {
      $delete: {
        input: { query: { store_id?: string | undefined; id: string } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.group.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            lang_id?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
            attribute_set_id?: string | undefined
          }
        }
        output: {
          result?: StoreAttributeGroup[] | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.info.json': {
      $get: {
        input: {
          query: {
            id: string
            store_id?: string | undefined
            lang_id?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: {
          result?: StoreAttribute | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            type?: string | undefined
            attribute_ids?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
            visible?: boolean | undefined
            required?: boolean | undefined
            system?: boolean | undefined
          }
        }
        output: ModelResponseAttributeList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.type.list.json': {
      $get: {
        input: {}
        output: {
          result?: { attribute_type?: string[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.unassign.group.json': {
      $post: {
        input: { query: { id: string; group_id: string } }
        output: {
          result?: { unassigned?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.unassign.set.json': {
      $post: {
        input: { query: { id: string; attribute_set_id: string } }
        output: {
          result?: { unassigned?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute.update.json': {
      $post: {
        input: {
          query: {
            id: string
            name: string
            store_id?: string | undefined
            lang_id?: string | undefined
          }
        }
        output: {
          result?: { updated?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/basket.info.json': {
      $get: {
        input: {
          query: {
            id: string
            store_id?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: {
          result?: Basket | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/basket.item.add.json': {
      $post: {
        input: {
          query: {
            customer_id: string
            product_id: string
            variant_id?: string | undefined
            quantity?: number | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { added?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/basket.live_shipping_service.create.json': {
      $post: {
        input: { query: { store_id?: string | undefined; name: string; callback: string } }
        output: {
          result?: { id?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/basket.live_shipping_service.delete.json': {
      $delete: {
        input: { query: { id: number } }
        output: {
          result?: { status?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/basket.live_shipping_service.list.json': {
      $get: {
        input: {
          query: {
            store_id?: string | undefined
            start?: number | undefined
            count?: number | undefined
          }
        }
        output: {
          result?: { live_shipping_services?: BasketLiveShippingService[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bridge.delete.json': {
      $post: {
        input: {}
        output: {
          result?: { deleted?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bridge.download.file': {
      $get: {
        input: { query: { whitelabel?: boolean | undefined } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/bridge.update.json': {
      $post: {
        input: {}
        output: {
          result?: { updated?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.bridge.json': {
      $get: {
        input: {}
        output: {
          result?: { bridge?: string | undefined; store_key?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.catalog_price_rules.count.json': {
      $get: {
        input: {}
        output: {
          result?: { catalog_price_rules_count?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.catalog_price_rules.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            ids?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseCartCatalogPriceRulesList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.clear_cache.json': {
      $post: {
        input: { query: { cache_type: string } }
        output: {
          result?: { cache_cleared?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.config.json': {
      $get: {
        input: { query: { params?: string | undefined; exclude?: string | undefined } }
        output: {
          result?:
            | {
                db_prefix?: string | undefined
                store_name?: string | undefined
                store_url?: string | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.config.update.json': {
      $put: {
        input: { json: CartConfigUpdate }
        output: {
          result?: { [x: string]: unknown } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.coupon.add.json': {
      $post: {
        input: { json: CartCouponAdd }
        output: {
          result?: { coupon_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.coupon.condition.add.json': {
      $post: {
        input: {
          query: {
            store_id?: string | undefined
            coupon_id: string
            target?: string | undefined
            entity: 'order' | 'order_shipping_address' | 'product' | 'customer'
            key:
              | 'total'
              | 'subtotal'
              | 'shipping_total'
              | 'total_quantity'
              | 'total_weight'
              | 'country'
              | 'product_id'
              | 'variant_id'
              | 'category_id'
              | 'customer_id'
              | 'item_price'
              | 'item_total_price'
              | 'item_quantity'
            operator: '==' | '<' | '<=' | '>' | '>=' | 'ONE_OF'
            value: string
          }
        }
        output: {
          result?: { status?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.coupon.count.json': {
      $get: {
        input: {
          query: {
            store_id?: string | undefined
            date_start_from?: string | undefined
            date_start_to?: string | undefined
            date_end_from?: string | undefined
            date_end_to?: string | undefined
            avail?: boolean | undefined
          }
        }
        output: {
          result?: { coupons_count?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.coupon.delete.json': {
      $delete: {
        input: { query: { id: string; store_id?: string | undefined } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.coupon.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            coupons_ids?: string | undefined
            store_id?: string | undefined
            date_start_from?: string | undefined
            date_start_to?: string | undefined
            date_end_from?: string | undefined
            date_end_to?: string | undefined
            avail?: boolean | undefined
            lang_id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseCartCouponList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.create.json': {
      $post: {
        input: {
          query: {
            cart_id:
              | '3DCart'
              | '3DCartApi'
              | 'AceShop'
              | 'AmazonSP'
              | 'Amazon'
              | 'AspDotNetStorefront'
              | 'BigcommerceApi'
              | 'Creloaded'
              | 'CommerceHQ'
              | 'Cscart'
              | 'Cubecart'
              | 'Demandware'
              | 'EBay'
              | 'Ecwid'
              | 'Etsy'
              | 'EtsyAPIv3'
              | 'Gambio'
              | 'Interspire'
              | 'JooCart'
              | 'Magento1212'
              | 'Magento2Api'
              | 'MijoShop'
              | 'Neto'
              | 'Opencart14'
              | 'LightSpeed'
              | 'Oscmax2'
              | 'Oscommerce22ms2'
              | 'Oxid'
              | 'Pinnacle'
              | 'Prestashop'
              | 'PrestashopApi'
              | 'SSPremium'
              | 'Shopify'
              | 'Squarespace'
              | 'Shopware'
              | 'ShopwareApi'
              | 'Tomatocart'
              | 'Ubercart'
              | 'Virtuemart'
              | 'Volusion'
              | 'WPecommerce'
              | 'Walmart'
              | 'WebAsyst'
              | 'Woocommerce'
              | 'WoocommerceApi'
              | 'Wix'
              | 'Xcart'
              | 'Xtcommerce'
              | 'XtcommerceVeyton'
              | 'Zencart137'
              | 'Hybris'
              | 'MercadoLibre'
              | 'Zid'
            store_url: string
            bridge_url?: string | undefined
            store_root?: string | undefined
            store_key?: string | undefined
            shared_secret?: string | undefined
            validate_version?: boolean | undefined
            verify?: boolean | undefined
            db_tables_prefix?: string | undefined
            ftp_host?: string | undefined
            ftp_user?: string | undefined
            ftp_password?: string | undefined
            ftp_port?: number | undefined
            ftp_store_dir?: string | undefined
            apiKey_3dcart?: string | undefined
            AdminAccount?: string | undefined
            ApiPath?: string | undefined
            ApiKey?: string | undefined
            client_id?: string | undefined
            accessToken?: string | undefined
            context?: string | undefined
            access_token?: string | undefined
            apiKey_shopify?: string | undefined
            apiPassword?: string | undefined
            accessToken_shopify?: string | undefined
            apiKey?: string | undefined
            apiUsername?: string | undefined
            EncryptedPassword?: string | undefined
            Login?: string | undefined
            apiUser_adnsf?: string | undefined
            apiPass?: string | undefined
            accessKey_scelite?: string | undefined
            apiKey_scelite?: string | undefined
            apiSecretKey_scelite?: string | undefined
            privateKey?: string | undefined
            appToken?: string | undefined
            etsy_keystring?: string | undefined
            etsy_shared_secret?: string | undefined
            tokenSecret?: string | undefined
            etsy_client_id: string
            etsy_refresh_token: string
            ebay_client_id?: string | undefined
            ebay_client_secret?: string | undefined
            ebay_runame?: string | undefined
            ebay_access_token?: string | undefined
            ebay_refresh_token?: string | undefined
            ebay_environment?: string | undefined
            ebay_site_id?: number | undefined
            dw_client_id?: string | undefined
            dw_api_pass?: string | undefined
            demandware_user_name?: string | undefined
            demandware_user_password?: string | undefined
            store_id: string
            seller_id?: string | undefined
            amazon_secret_key?: string | undefined
            amazon_access_key_id?: string | undefined
            marketplaces_ids?: string | undefined
            environment?: string | undefined
            hybris_client_id?: string | undefined
            hybris_client_secret?: string | undefined
            hybris_username?: string | undefined
            hybris_password?: string | undefined
            hybris_websites?: string[] | undefined
            walmart_client_id?: string | undefined
            walmart_client_secret?: string | undefined
            walmart_environment?: string | undefined
            walmart_channel_type?: string | undefined
            lightspeed_api_key?: string | undefined
            lightspeed_api_secret?: string | undefined
            shopware_access_key?: string | undefined
            shopware_api_key?: string | undefined
            shopware_api_secret?: string | undefined
            commercehq_api_key?: string | undefined
            commercehq_api_password?: string | undefined
            '3dcart_private_key'?: string | undefined
            '3dcart_access_token'?: string | undefined
            wc_consumer_key?: string | undefined
            wc_consumer_secret?: string | undefined
            magento_consumer_key?: string | undefined
            magento_consumer_secret?: string | undefined
            magento_access_token?: string | undefined
            magento_token_secret?: string | undefined
            prestashop_webservice_key?: string | undefined
            wix_app_id?: string | undefined
            wix_app_secret_key?: string | undefined
            wix_refresh_token?: string | undefined
            mercado_libre_app_id?: string | undefined
            mercado_libre_app_secret_key?: string | undefined
            mercado_libre_refresh_token?: string | undefined
            zid_client_id?: number | undefined
            zid_client_secret?: string | undefined
            zid_access_token?: string | undefined
            zid_authorization?: string | undefined
            zid_refresh_token?: string | undefined
          }
        }
        output: {
          result?: { store_key?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.delete.json': {
      $delete: {
        input: { query: { delete_bridge?: boolean | undefined } }
        output: {
          result?: { store?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.disconnect.json': {
      $get: {
        input: { query: { delete_bridge?: boolean | undefined } }
        output: {
          result?: { connection?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.giftcard.add.json': {
      $post: {
        input: {
          query: {
            amount: number
            code?: string | undefined
            owner_email?: string | undefined
            recipient_email?: string | undefined
          }
        }
        output: {
          result?: { code?: string | undefined; id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.giftcard.count.json': {
      $get: {
        input: { query: { store_id?: string | undefined } }
        output: {
          result?: { gift_cards_count?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.giftcard.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            store_id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseCartGiftCardList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.info.json': {
      $get: {
        input: {
          query: {
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: Cart | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.list.json': {
      $get: {
        input: {}
        output: {
          result?:
            | {
                supported_carts?:
                  | {
                      cart_id?: string | undefined
                      cart_name?: string | undefined
                      cart_versions?: string | undefined
                      params?: string[] | undefined
                    }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.meta_data.list.json': {
      $get: {
        input: {
          query: {
            entity_id: string
            entity?: string | undefined
            store_id?: string | undefined
            key?: string | undefined
            count?: number | undefined
            page_cursor?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseCartMetaDataList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.meta_data.set.json': {
      $post: {
        input: {
          query: {
            entity_id: string
            entity?: string | undefined
            store_id?: string | undefined
            key: string
            value: string
            namespace: string
          }
        }
        output: {
          result?: { id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.meta_data.unset.json': {
      $delete: {
        input: {
          query: {
            entity_id: string
            entity?: string | undefined
            store_id?: string | undefined
            key: string
            id: string
          }
        }
        output: {
          result?: { status?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.methods.json': {
      $get: {
        input: {}
        output: {
          result?: { method?: string[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.plugin.list.json': {
      $get: {
        input: {
          query: {
            store_key?: string | undefined
            store_id?: string | undefined
            start?: number | undefined
            count?: number | undefined
          }
        }
        output: {
          result?:
            | { all_plugins?: number | undefined; plugins?: PluginList[] | undefined }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.script.add.json': {
      $post: {
        input: {
          query: {
            name?: string | undefined
            description?: string | undefined
            html?: string | undefined
            src?: string | undefined
            load_method?: string | undefined
            scope?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { script_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.script.delete.json': {
      $delete: {
        input: { query: { id: string; store_id?: string | undefined } }
        output: {
          result?: { deleted?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.script.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            script_ids?: string | undefined
            store_id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseCartScriptList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.shipping_zones.list.json': {
      $get: {
        input: {
          query: {
            store_id?: string | undefined
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: {
          result?: CartShippingZone | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cart.validate.json': {
      $get: {
        input: { query: { validate_version?: boolean | undefined } }
        output: {
          result?: { status?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.add.json': {
      $post: {
        input: {
          query: {
            name: string
            parent_id?: string | undefined
            stores_ids?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            avail?: boolean | undefined
            sort_order?: number | undefined
            created_time?: string | undefined
            modified_time?: string | undefined
            description?: string | undefined
            meta_title?: string | undefined
            meta_description?: string | undefined
            meta_keywords?: string | undefined
            seo_url?: string | undefined
          }
        }
        output: {
          result?: { category_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.assign.json': {
      $post: {
        input: { query: { product_id: string; category_id: string; store_id?: string | undefined } }
        output: {
          result?: { [x: string]: unknown } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.count.json': {
      $get: {
        input: {
          query: {
            parent_id?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            avail?: boolean | undefined
          }
        }
        output: {
          result?: { categories_count?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.delete.json': {
      $delete: {
        input: { query: { id: string } }
        output: {
          result?: { deleted?: boolean | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.find.json': {
      $get: {
        input: {
          query: {
            find_value: string
            find_where?: string | undefined
            find_params?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
          }
        }
        output: {
          result?:
            | {
                category?:
                  | {
                      description?: string | undefined
                      id?: string | undefined
                      name?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.image.add.json': {
      $post: {
        input: {
          query: {
            category_id: string
            image_name: string
            url: string
            label?: string | undefined
            mime?: string | undefined
            type: 'base' | 'thumbnail'
            position?: number | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { image_path?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.image.delete.json': {
      $delete: {
        input: { query: { category_id: string; image_id: string; store_id?: string | undefined } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.info.json': {
      $get: {
        input: {
          query: {
            id: string
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
          }
        }
        output: {
          result?: Category | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            page_cursor?: string | undefined
            parent_id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            avail?: boolean | undefined
          }
        }
        output: ModelResponseCategoryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.unassign.json': {
      $post: {
        input: { query: { category_id: string; product_id: string; store_id?: string | undefined } }
        output: {
          result?: { [x: string]: unknown } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/category.update.json': {
      $put: {
        input: {
          query: {
            id: string
            name?: string | undefined
            parent_id?: string | undefined
            stores_ids?: string | undefined
            avail?: boolean | undefined
            sort_order?: number | undefined
            modified_time?: string | undefined
            description?: string | undefined
            meta_title?: string | undefined
            meta_description?: string | undefined
            meta_keywords?: string | undefined
            seo_url?: string | undefined
            lang_id?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.add.json': {
      $post: {
        input: { json: CustomerAdd }
        output: {
          result?: { customer_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.attribute.list.json': {
      $get: {
        input: {
          query: {
            count?: number | undefined
            page_cursor?: string | undefined
            customer_id: string
            store_id?: string | undefined
            lang_id?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: ModelResponseCustomerAttributeList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.count.json': {
      $get: {
        input: {
          query: {
            group_id?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            store_id?: string | undefined
            customer_list_id?: string | undefined
            avail?: boolean | undefined
          }
        }
        output: {
          result?: { customers_count?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.find.json': {
      $get: {
        input: {
          query: {
            find_value: string
            find_where?: string | undefined
            find_params?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?:
            | {
                email?: string | undefined
                first_name?: string | undefined
                id?: string | undefined
                last_name?: string | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.group.add.json': {
      $post: {
        input: {
          query: { name: string; store_id?: string | undefined; stores_ids?: string | undefined }
        }
        output: {
          result?: { [x: string]: unknown } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.group.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            group_ids?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: ModelResponseCustomerGroupList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.info.json': {
      $get: {
        input: {
          query: {
            id: string
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: Customer | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            group_id?: string | undefined
            store_id?: string | undefined
            customer_list_id?: string | undefined
            avail?: boolean | undefined
          }
        }
        output: ModelResponseCustomerList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/customer.update.json': {
      $put: {
        input: {
          query: {
            id: string
            group_id?: string | undefined
            group_ids?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            news_letter_subscription?: boolean | undefined
            tags?: string | undefined
            'address_book_id_{x}'?: string | undefined
            'address_book_first_name_{x}'?: string | undefined
            'address_book_last_name_{x}'?: string | undefined
            'address_book_company_{x}'?: string | undefined
            'address_book_phone_{x}'?: string | undefined
            'address_book_address1_{x}'?: string | undefined
            'address_book_address2_{x}'?: string | undefined
            'address_book_city_{x}'?: string | undefined
            'address_book_country_{x}'?: string | undefined
            'address_book_state_{x}'?: string | undefined
            'address_book_postcode_{x}'?: string | undefined
          }
        }
        output: {
          result?: { updated?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.abandoned.list.json': {
      $get: {
        input: {
          query: {
            customer_id?: string | undefined
            customer_email?: string | undefined
            created_to?: string | undefined
            created_from?: string | undefined
            modified_to?: string | undefined
            modified_from?: string | undefined
            skip_empty_email?: boolean | undefined
            store_id?: string | undefined
            page_cursor?: string | undefined
            count?: number | undefined
            start?: number | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseOrderAbandonedList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.add.json': {
      $post: {
        input: { json: OrderAdd }
        output: {
          result?: { order_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.count.json': {
      $get: {
        input: {
          query: {
            customer_id?: string | undefined
            customer_email?: string | undefined
            order_status?: string | undefined
            order_status_ids?: string[] | undefined
            created_to?: string | undefined
            created_from?: string | undefined
            modified_to?: string | undefined
            modified_from?: string | undefined
            store_id?: string | undefined
            ids?: string | undefined
            order_ids?: string | undefined
            ebay_order_status?: string | undefined
            financial_status?: string | undefined
            fulfillment_status?: string | undefined
            shipping_method?: string | undefined
            delivery_method?: string | undefined
            ship_node_type?: string | undefined
          }
        }
        output: {
          result?: { orders_count?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.financial_status.list.json': {
      $get: {
        input: {}
        output: {
          result?:
            | {
                order_financial_statuses?:
                  | { id?: string | undefined; name?: string | undefined }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.find.json': {
      $get: {
        input: {
          query: {
            customer_id?: string | undefined
            customer_email?: string | undefined
            order_status?: string | undefined
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            exclude?: string | undefined
            created_to?: string | undefined
            created_from?: string | undefined
            modified_to?: string | undefined
            modified_from?: string | undefined
            financial_status?: string | undefined
          }
        }
        output: {
          result?: { order?: Order[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.fulfillment_status.list.json': {
      $get: {
        input: {}
        output: {
          result?:
            | {
                order_fulfillment_statuses?:
                  | { id?: string | undefined; name?: string | undefined }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.info.json': {
      $get: {
        input: {
          query: {
            order_id?: string | undefined
            id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
            enable_cache?: boolean | undefined
          }
        }
        output: {
          result?: Order | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.list.json': {
      $get: {
        input: {
          query: {
            customer_id?: string | undefined
            customer_email?: string | undefined
            phone?: string | undefined
            order_status?: string | undefined
            order_status_ids?: string[] | undefined
            start?: number | undefined
            count?: number | undefined
            page_cursor?: string | undefined
            sort_by?: string | undefined
            sort_direction?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            created_to?: string | undefined
            created_from?: string | undefined
            modified_to?: string | undefined
            modified_from?: string | undefined
            store_id?: string | undefined
            ids?: string | undefined
            order_ids?: string | undefined
            ebay_order_status?: string | undefined
            basket_id?: string | undefined
            financial_status?: string | undefined
            fulfillment_status?: string | undefined
            shipping_method?: string | undefined
            skip_order_ids?: string | undefined
            since_id?: number | undefined
            is_deleted?: boolean | undefined
            shipping_country_iso3?: string | undefined
            enable_cache?: boolean | undefined
            delivery_method?: string | undefined
            ship_node_type?: string | undefined
            currency_id?: string | undefined
          }
        }
        output: ModelResponseOrderList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.preestimate_shipping.list.json': {
      $post: {
        input: { json: OrderPreestimateShippingList }
        output: ModelResponseOrderPreestimateShippingList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.refund.add.json': {
      $post: {
        input: { json: OrderRefundAdd }
        output: {
          result?: { refund_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.shipment.add.json': {
      $post: {
        input: { json: OrderShipmentAdd }
        output: {
          result?: { shipment_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.shipment.delete.json': {
      $delete: {
        input: { query: { shipment_id: string; order_id: string; store_id?: string | undefined } }
        output: {
          result?: { status?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.shipment.info.json': {
      $get: {
        input: {
          query: {
            id: string
            order_id: string
            start?: number | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
          }
        }
        output: ModelResponseOrderShipmentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.shipment.list.json': {
      $get: {
        input: {
          query: {
            order_id: string
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            store_id?: string | undefined
          }
        }
        output: ModelResponseOrderShipmentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.shipment.tracking.add.json': {
      $post: {
        input: { json: OrderShipmentTrackingAdd }
        output: {
          result?: { tracking_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.shipment.update.json': {
      $put: {
        input: { json: OrderShipmentUpdate }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.status.list.json': {
      $get: {
        input: { query: { store_id?: string | undefined } }
        output: {
          result?:
            | {
                cart_order_statuses?:
                  | { id?: string | undefined; name?: string | undefined }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.transaction.list.json': {
      $get: {
        input: {
          query: {
            count?: number | undefined
            order_ids: string
            store_id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            page_cursor?: string | undefined
          }
        }
        output: ModelResponseOrderTransactionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/order.update.json': {
      $put: {
        input: {
          query: {
            order_id: string
            store_id?: string | undefined
            order_status?: string | undefined
            comment?: string | undefined
            admin_comment?: string | undefined
            admin_private_comment?: string | undefined
            date_modified?: string | undefined
            date_finished?: string | undefined
            financial_status?: string | undefined
            fulfillment_status?: string | undefined
            order_payment_method?: string | undefined
            send_notifications?: boolean | undefined
          }
        }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.add.json': {
      $post: {
        input: { json: ProductAdd }
        output: {
          result?: { product_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.attribute.list.json': {
      $get: {
        input: {
          query: {
            product_id: string
            attribute_id?: string | undefined
            variant_id?: string | undefined
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            attribute_group_id?: string | undefined
            set_name?: string | undefined
            lang_id?: string | undefined
            store_id?: string | undefined
            sort_by?: string | undefined
            sort_direction?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: ModelResponseProductAttributeList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.attribute.value.set.json': {
      $post: {
        input: {
          query: {
            product_id: string
            attribute_id?: string | undefined
            attribute_group_id?: string | undefined
            attribute_name?: string | undefined
            value?: string | undefined
            value_id?: number | undefined
            lang_id?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?:
            | {
                attribute_id?: string | undefined
                product_id?: string | undefined
                value_id?: string | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.attribute.value.unset.json': {
      $post: {
        input: {
          query: {
            product_id: string
            attribute_id: string
            store_id?: string | undefined
            include_default?: boolean | undefined
            reindex?: boolean | undefined
            clear_cache?: boolean | undefined
          }
        }
        output: {
          result?: { success?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.brand.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            brand_ids?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: {
          result?: { product?: Brand[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.child_item.find.json': {
      $get: {
        input: {
          query: {
            find_value: string
            find_where?: string | undefined
            find_params?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { children?: { [x: string]: unknown } | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.child_item.info.json': {
      $get: {
        input: {
          query: {
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            product_id: string
            id: string
            store_id?: string | undefined
            lang_id?: string | undefined
            currency_id?: string | undefined
          }
        }
        output: {
          result?: Child | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.child_item.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            product_id?: string | undefined
            product_ids?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            currency_id?: string | undefined
            avail_sale?: boolean | undefined
            report_request_id?: string | undefined
            disable_report_cache?: boolean | undefined
          }
        }
        output: ModelResponseProductChildItemList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.count.json': {
      $get: {
        input: {
          query: {
            category_id?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            avail_view?: boolean | undefined
            avail_sale?: boolean | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            product_ids?: string | undefined
            report_request_id?: string | undefined
            disable_report_cache?: boolean | undefined
            brand_name?: string | undefined
            product_attributes?: string[] | undefined
            status?: string | undefined
            type?: string | undefined
          }
        }
        output: {
          result?: { products_count?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.currency.add.json': {
      $post: {
        input: {
          query: {
            iso3: string
            rate: number
            name?: string | undefined
            avail?: boolean | undefined
            symbol_left?: string | undefined
            symbol_right?: string | undefined
            default?: boolean | undefined
          }
        }
        output: {
          result?: { currency_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.currency.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            page_cursor?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
            default?: boolean | undefined
            avail?: boolean | undefined
          }
        }
        output: {
          result?: { currency?: Currency[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.delete.json': {
      $delete: {
        input: { query: { id: string } }
        output: {
          result?: { delete_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.fields.json': {
      $get: {
        input: {}
        output: {
          result?: { [x: string]: unknown } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.find.json': {
      $get: {
        input: {
          query: {
            find_value: string
            find_where?: string | undefined
            find_params?: string | undefined
            find_what?: string | undefined
            lang_id?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?:
            | {
                product?:
                  | {
                      description?: string | undefined
                      id?: string | undefined
                      name?: string | undefined
                      price?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.image.add.json': {
      $post: {
        input: { json: ProductImageAdd }
        output: {
          result?: { id?: string | undefined; image_path?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.image.delete.json': {
      $delete: {
        input: { query: { product_id: string; id: string; store_id?: string | undefined } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.image.update.json': {
      $put: {
        input: {
          query: {
            product_id: string
            image_name?: string | undefined
            type?: string | undefined
            label?: string | undefined
            position?: number | undefined
            id: string
            store_id?: string | undefined
            lang_id?: string | undefined
            hidden?: boolean | undefined
          }
        }
        output: {
          result?: { updated?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.info.json': {
      $get: {
        input: {
          query: {
            id: string
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            currency_id?: string | undefined
            report_request_id?: string | undefined
            disable_report_cache?: boolean | undefined
          }
        }
        output: {
          result?: Product | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.list.json': {
      $get: {
        input: {
          query: {
            page_cursor?: string | undefined
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
            category_id?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            avail_view?: boolean | undefined
            avail_sale?: boolean | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            currency_id?: string | undefined
            product_ids?: string | undefined
            since_id?: number | undefined
            report_request_id?: string | undefined
            disable_report_cache?: boolean | undefined
            sort_by?: string | undefined
            sort_direction?: string | undefined
            sku?: string | undefined
            disable_cache?: boolean | undefined
            brand_name?: string | undefined
            product_attributes?: string[] | undefined
            status?: string | undefined
            type?: string | undefined
          }
        }
        output: ModelResponseProductList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.manufacturer.add.json': {
      $post: {
        input: { query: { product_id: string; manufacturer: string } }
        output: {
          result?: { manufacturer_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.option.add.json': {
      $post: {
        input: {
          query: {
            name: string
            type:
              | 'option_type_select'
              | 'option_type_text'
              | 'option_type_radio'
              | 'option_type_checkbox'
              | 'option_type_textarea'
              | 'option_type_readonly'
              | 'option_type_multiselect'
              | 'option_type_multicheckbox'
              | 'option_type_file'
              | 'option_type_date'
              | 'option_type_datetime'
              | 'option_type_time'
            product_id?: string | undefined
            default_option_value?: string | undefined
            option_values?: string | undefined
            description?: string | undefined
            avail?: boolean | undefined
            sort_order?: number | undefined
            required?: boolean | undefined
            clear_cache?: boolean | undefined
          }
        }
        output: {
          result?:
            | { option_id?: string | undefined; product_option_id?: string | undefined }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.option.assign.json': {
      $post: {
        input: {
          query: {
            product_id: string
            option_id: string
            required?: boolean | undefined
            sort_order?: number | undefined
            option_values?: string | undefined
            clear_cache?: boolean | undefined
          }
        }
        output: {
          result?: { product_option_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.option.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
            product_id?: string | undefined
            lang_id?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { option?: ProductOption[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.option.value.add.json': {
      $post: {
        input: {
          query: {
            product_id: string
            option_id: string
            option_value: string
            sort_order?: number | undefined
            clear_cache?: boolean | undefined
          }
        }
        output: {
          result?: { option_value_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.option.value.assign.json': {
      $post: {
        input: {
          query: {
            product_option_id: number
            option_value_id: number
            clear_cache?: boolean | undefined
          }
        }
        output: {
          result?: { product_option_value_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.option.value.update.json': {
      $put: {
        input: {
          query: {
            product_id: string
            option_id: string
            option_value_id: number
            option_value: string
            price?: number | undefined
            quantity?: number | undefined
            clear_cache?: boolean | undefined
          }
        }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.price.add.json': {
      $post: {
        input: { json: ProductPriceAdd }
        output: {
          result?: { status?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.price.delete.json': {
      $delete: {
        input: { query: { product_id: string; group_prices?: string | undefined } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.price.update.json': {
      $put: {
        input: { json: ProductPriceUpdate }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.review.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            page_cursor?: string | undefined
            count?: number | undefined
            product_id: string
            ids?: string | undefined
            store_id?: string | undefined
            status?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: {
          result?:
            | { reviews?: ProductReview[] | undefined; total_count?: number | undefined }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.store.assign.json': {
      $post: {
        input: { query: { product_id: string; store_id: string } }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.tax.add.json': {
      $post: {
        input: { json: ProductTaxAdd }
        output: {
          result?: { tax_class_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.update.json': {
      $put: {
        input: {
          query: {
            id: string
            model?: string | undefined
            old_price?: number | undefined
            price?: number | undefined
            special_price?: number | undefined
            sprice_create?: string | undefined
            sprice_expire?: string | undefined
            cost_price?: number | undefined
            retail_price?: number | undefined
            quantity?: number | undefined
            weight?: number | undefined
            increase_quantity?: number | undefined
            reduce_quantity?: number | undefined
            warehouse_id?: string | undefined
            reserve_quantity?: number | undefined
            manage_stock?: boolean | undefined
            backorder_status?: string | undefined
            name?: string | undefined
            sku?: string | undefined
            visible?: string | undefined
            manufacturer?: string | undefined
            manufacturer_id?: string | undefined
            categories_ids?: string | undefined
            description?: string | undefined
            short_description?: string | undefined
            meta_title?: string | undefined
            meta_keywords?: string | undefined
            meta_description?: string | undefined
            store_id?: string | undefined
            lang_id?: string | undefined
            in_stock?: boolean | undefined
            status?: string | undefined
            seo_url?: string | undefined
            report_request_id?: string | undefined
            disable_report_cache?: boolean | undefined
            reindex?: boolean | undefined
            tags?: string | undefined
            clear_cache?: boolean | undefined
            gtin?: string | undefined
            taxable?: boolean | undefined
            product_class?: string | undefined
            height?: number | undefined
            length?: number | undefined
            width?: number | undefined
            harmonized_system_code?: string | undefined
            country_of_origin?: string | undefined
            search_keywords?: string | undefined
            barcode?: string | undefined
          }
        }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.add.json': {
      $post: {
        input: { json: ProductVariantAdd }
        output: {
          result?: { product_variant_id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.count.json': {
      $get: {
        input: {
          query: {
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            category_id?: string | undefined
            product_id: string
            store_id?: string | undefined
          }
        }
        output: {
          result?: { variants_count?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.delete.json': {
      $delete: {
        input: { query: { id: string; product_id: string } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.image.add.json': {
      $post: {
        input: { json: ProductVariantImageAdd }
        output: {
          result?: { id?: string | undefined; image_path?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.image.delete.json': {
      $delete: {
        input: {
          query: {
            product_id: string
            product_variant_id: number
            id: string
            store_id?: string | undefined
          }
        }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.info.json': {
      $get: {
        input: {
          query: {
            params?: string | undefined
            exclude?: string | undefined
            id: string
            store_id?: string | undefined
          }
        }
        output: {
          result?: Product | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            params?: string | undefined
            exclude?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            category_id?: string | undefined
            product_id?: string | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { variant?: Product[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.price.add.json': {
      $post: {
        input: { json: ProductVariantPriceAdd }
        output: {
          result?: { status?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.price.delete.json': {
      $delete: {
        input: { query: { id: string; group_prices?: string | undefined } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.price.update.json': {
      $put: {
        input: { json: ProductVariantPriceUpdate }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/product.variant.update.json': {
      $put: {
        input: {
          query: {
            store_id?: string | undefined
            id: string
            product_id: string
            warehouse_id?: string | undefined
            reserve_quantity?: number | undefined
            quantity?: number | undefined
            increase_quantity?: number | undefined
            reduce_quantity?: number | undefined
            price?: number | undefined
            special_price?: number | undefined
            retail_price?: number | undefined
            old_price?: number | undefined
            cost_price?: number | undefined
            sprice_create?: string | undefined
            sprice_expire?: string | undefined
            manage_stock?: boolean | undefined
            in_stock?: boolean | undefined
            name?: string | undefined
            description?: string | undefined
            sku?: string | undefined
            meta_title?: string | undefined
            meta_description?: string | undefined
            meta_keywords?: string | undefined
            short_description?: string | undefined
            visible?: string | undefined
            status?: string | undefined
            backorder_status?: string | undefined
            weight?: number | undefined
            barcode?: string | undefined
            reindex?: boolean | undefined
            taxable?: boolean | undefined
            options?: string[] | undefined
            harmonized_system_code?: string | undefined
            country_of_origin?: string | undefined
            width?: number | undefined
            height?: number | undefined
            length?: number | undefined
            gtin?: string | undefined
            clear_cache?: boolean | undefined
            lang_id?: string | undefined
            model?: string | undefined
            available_for_sale?: boolean | undefined
          }
        }
        output: {
          result?: { updated_items?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscriber.list.json': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            subscribed?: boolean | undefined
            store_id?: string | undefined
            email?: string | undefined
            params?: string | undefined
            exclude?: string | undefined
            created_from?: string | undefined
            created_to?: string | undefined
            modified_from?: string | undefined
            modified_to?: string | undefined
            page_cursor?: string | undefined
            response_fields?: string | undefined
          }
        }
        output: {
          result?:
            | { subscribers?: Subscriber[] | undefined; total_count?: number | undefined }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tax.class.info.json': {
      $get: {
        input: {
          query: {
            tax_class_id: string
            store_id?: string | undefined
            lang_id?: string | undefined
            params?: string | undefined
            response_fields?: string | undefined
            exclude?: string | undefined
          }
        }
        output: {
          result?: TaxClass | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook.count.json': {
      $get: {
        input: {
          query: {
            entity?: string | undefined
            action?: string | undefined
            active?: boolean | undefined
          }
        }
        output: {
          result?: { webhook_count?: number | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook.create.json': {
      $post: {
        input: {
          query: {
            entity: string
            action: string
            callback?: string | undefined
            label?: string | undefined
            fields?: string | undefined
            active?: boolean | undefined
            store_id?: string | undefined
          }
        }
        output: {
          result?: { id?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook.delete.json': {
      $delete: {
        input: { query: { id: string } }
        output: {
          result?: { deleted?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook.events.json': {
      $get: {
        input: {}
        output: {
          result?:
            | {
                events?:
                  | {
                      action?: string | undefined
                      entity?: string | undefined
                      webhook_name?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook.list.json': {
      $get: {
        input: {
          query: {
            params?: string | undefined
            start?: number | undefined
            count?: number | undefined
            entity?: string | undefined
            action?: string | undefined
            active?: boolean | undefined
            ids?: string | undefined
          }
        }
        output: {
          result?: { webhook?: Webhook[] | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook.update.json': {
      $put: {
        input: {
          query: {
            id: string
            callback?: string | undefined
            label?: string | undefined
            fields?: string | undefined
            active?: boolean | undefined
          }
        }
        output: {
          result?: { updated?: string | undefined } | undefined
          return_code?: number | undefined
          return_message?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
