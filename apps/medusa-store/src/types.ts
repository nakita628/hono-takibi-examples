type Error = {
  code?: 'invalid_state_error' | 'invalid_request_error' | 'api_error' | 'unknown_error' | undefined
  message?: string | undefined
  type?:
    | 'QueryRunnerAlreadyReleasedError'
    | 'TransactionAlreadyStartedError'
    | 'TransactionNotStartedError'
    | 'conflict'
    | 'unauthorized'
    | 'payment_authorization_error'
    | 'duplicate_error'
    | 'not_allowed'
    | 'invalid_data'
    | 'not_found'
    | 'database_error'
    | 'unexpected_state'
    | 'invalid_argument'
    | 'unknown_error'
    | undefined
}
type AuthProvider = {
  id: string
  identifier: string
  display_name: string
  flow: 'credentials' | 'redirect'
}
type AuthProvidersListResponse = { providers: AuthProvider[] }
type AuthResponse = { token: string }
type AuthCallbackResponse = { location: string }
type StoreCustomerAddress = {
  id: string
  address_name: string
  is_default_shipping: boolean
  is_default_billing: boolean
  customer_id: string
  company: string
  first_name: string
  last_name: string
  address_1: string
  address_2: string
  city: string
  country_code: string
  province: string
  postal_code: string
  phone: string
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
}
type StoreCustomer = {
  id: string
  email: string
  default_billing_address_id: string
  default_shipping_address_id: string
  company_name: string
  first_name: string
  last_name: string
  addresses: StoreCustomerAddress[]
  phone?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
}
type AuthStoreSessionResponse = { user: StoreCustomer }
type StoreCartAddress = {
  id: string
  customer_id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  company?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country_code?: string | undefined
  province?: string | undefined
  postal_code?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
}
type StoreProductType = {
  id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
  value: string
  external_id?: string | undefined
}
type StoreProductOptionValue = {
  id: string
  value: string
  option?: { [x: string]: unknown } | undefined
  option_id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  rank?: number | undefined
}
type BaseCollection = {
  id: string
  title: string
  handle: string
  created_at: string
  updated_at: string
  deleted_at: string
  products?: { [x: string]: unknown }[] | undefined
  metadata: { [x: string]: unknown }
  external_id?: string | undefined
}
type AdminProductCategory = {
  category_children: { [x: string]: unknown }[]
  parent_category: { [x: string]: unknown }
  products?: { [x: string]: unknown }[] | undefined
  name: string
  description: string
  id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  handle: string
  deleted_at: string
  is_active: boolean
  is_internal: boolean
  rank: number
  parent_category_id: string
}
type BaseProductCategory = {
  category_children: AdminProductCategory[]
  parent_category: AdminProductCategory
  products?: { [x: string]: unknown }[] | undefined
  name: string
  description: string
  id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  handle: string
  deleted_at: string
  is_active: boolean
  is_internal: boolean
  rank: number
  parent_category_id: string
}
type BaseProductType = {
  id: string
  value: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
}
type BaseProductTag = {
  id: string
  value: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
}
type BaseProductOptionValue = {
  id: string
  value: string
  option?: { [x: string]: unknown } | undefined
  option_id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  rank?: number | undefined
}
type BaseProductOption = {
  id: string
  title: string
  values?: BaseProductOptionValue[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  is_exclusive: boolean
  products?: { [x: string]: unknown }[] | undefined
}
type BaseProductImage = {
  id: string
  url: string
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  rank: number
}
type BaseProduct = {
  collection?: BaseCollection | undefined
  categories?: BaseProductCategory[] | undefined
  variants: { [x: string]: unknown }[]
  type?: BaseProductType | undefined
  tags?: BaseProductTag[] | undefined
  length: number
  title: string
  status: 'draft' | 'proposed' | 'published' | 'rejected'
  options: BaseProductOption[]
  description: string
  id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  handle: string
  subtitle: string
  is_giftcard: boolean
  thumbnail: string
  width: number
  weight: number
  height: number
  origin_country: string
  hs_code: string
  mid_code: string
  material: string
  collection_id: string
  type_id: string
  images: BaseProductImage[]
  discountable: boolean
  external_id: string
  deleted_at: string
}
type StoreProductOption = {
  id: string
  title: string
  product?: { [x: string]: unknown } | undefined
  values?: StoreProductOptionValue[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  products?: BaseProduct[] | undefined
  is_exclusive: boolean
}
type BaseCalculatedPriceSet = {
  id: string
  is_calculated_price_price_list?: boolean | undefined
  is_calculated_price_tax_inclusive?: boolean | undefined
  calculated_amount: number
  calculated_amount_with_tax?: number | undefined
  calculated_amount_without_tax?: number | undefined
  is_original_price_price_list?: boolean | undefined
  is_original_price_tax_inclusive?: boolean | undefined
  original_amount: number
  currency_code: string
  calculated_price?: { [x: string]: unknown } | undefined
  original_price?: { [x: string]: unknown } | undefined
  original_amount_with_tax: number
  original_amount_without_tax: number
}
type StoreProductVariant = {
  options: StoreProductOptionValue[]
  product?: { [x: string]: unknown } | undefined
  length: number
  title: string
  metadata?: { [x: string]: unknown } | undefined
  id: string
  width: number
  weight: number
  height: number
  origin_country: string
  hs_code: string
  mid_code: string
  material: string
  created_at: string
  updated_at: string
  deleted_at: string
  product_id?: string | undefined
  sku: string
  barcode: string
  ean: string
  upc: string
  allow_backorder: boolean
  manage_inventory: boolean
  inventory_quantity?: number | undefined
  variant_rank?: number | undefined
  calculated_price?: BaseCalculatedPriceSet | undefined
  thumbnail: string
  images?: BaseProductImage[] | undefined
}
type StoreCollection = {
  id: string
  title: string
  handle: string
  created_at: string
  updated_at: string
  deleted_at: string
  products?: { [x: string]: unknown }[] | undefined
  metadata: { [x: string]: unknown }
  external_id?: string | undefined
}
type StoreProductTag = {
  id: string
  value: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
}
type StoreProductImage = {
  id: string
  url: string
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  rank: number
}
type StoreProduct = {
  categories?: { [x: string]: unknown }[] | undefined
  type?: StoreProductType | undefined
  length: number
  title: string
  status: 'draft' | 'proposed' | 'published' | 'rejected'
  options: StoreProductOption[]
  description: string
  id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  variants: StoreProductVariant[]
  handle: string
  subtitle: string
  is_giftcard: boolean
  thumbnail: string
  width: number
  weight: number
  height: number
  origin_country: string
  hs_code: string
  mid_code: string
  material: string
  collection?: StoreCollection | undefined
  collection_id: string
  type_id: string
  tags?: StoreProductTag[] | undefined
  images: StoreProductImage[]
  discountable: boolean
  external_id: string
  deleted_at: string
}
type BaseProductVariant = {
  id: string
  title: string
  sku: string
  barcode: string
  ean: string
  upc: string
  allow_backorder: boolean
  manage_inventory: boolean
  inventory_quantity?: number | undefined
  hs_code: string
  origin_country: string
  mid_code: string
  material: string
  weight: number
  length: number
  height: number
  width: number
  variant_rank?: number | undefined
  options: BaseProductOptionValue[]
  product?: BaseProduct | undefined
  product_id?: string | undefined
  calculated_price?: BaseCalculatedPriceSet | undefined
  created_at: string
  updated_at: string
  deleted_at: string
  metadata?: { [x: string]: unknown } | undefined
  thumbnail: string
  images?: BaseProductImage[] | undefined
}
type BaseLineItemAdjustment = {
  item: { [x: string]: unknown }
  item_id: string
  id: string
  code?: string | undefined
  amount: number
  cart_id: string
  description?: string | undefined
  promotion_id?: string | undefined
  provider_id?: string | undefined
  created_at: string
  updated_at: string
}
type BaseRegionCountry = {
  id: string
  iso_2?: string | undefined
  iso_3?: string | undefined
  num_code?: string | undefined
  name?: string | undefined
  display_name?: string | undefined
}
type AdminPaymentProvider = { id: string; is_enabled: boolean }
type BaseRegion = {
  id: string
  name: string
  currency_code: string
  automatic_taxes?: boolean | undefined
  countries?: BaseRegionCountry[] | undefined
  payment_providers?: AdminPaymentProvider[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type BaseCartAddress = { [x: string]: unknown }
type BaseShippingMethodTaxLine = {
  shipping_method: { [x: string]: unknown }
  shipping_method_id: string
  total: number
  subtotal: number
  id: string
  description?: string | undefined
  tax_rate_id?: string | undefined
  code: string
  rate: number
  provider_id?: string | undefined
  created_at: string
  updated_at: string
}
type BaseShippingMethodAdjustment = {
  shipping_method: { [x: string]: unknown }
  shipping_method_id: string
  id: string
  code?: string | undefined
  amount: number
  cart_id: string
  description?: string | undefined
  promotion_id?: string | undefined
  provider_id?: string | undefined
  created_at: string
  updated_at: string
}
type BaseCartShippingMethod = {
  id: string
  cart_id: string
  name: string
  description?: string | undefined
  amount: number
  is_tax_inclusive: boolean
  shipping_option_id?: string | undefined
  data?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: unknown } | undefined
  tax_lines?: BaseShippingMethodTaxLine[] | undefined
  adjustments?: BaseShippingMethodAdjustment[] | undefined
  created_at: string
  updated_at: string
  original_total?: number | undefined
  original_subtotal?: number | undefined
  original_tax_total?: number | undefined
  total?: number | undefined
  subtotal?: number | undefined
  tax_total?: number | undefined
  discount_total?: number | undefined
  discount_tax_total?: number | undefined
}
type BasePaymentProvider = { id: string }
type BaseCapture = {
  id: string
  amount: number
  created_at: string
  created_by?: string | undefined
  payment: { [x: string]: unknown }
}
type BaseRefundReason = {
  id: string
  label: string
  description?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  code: string
}
type BaseRefund = {
  id: string
  amount: number
  refund_reason_id?: string | undefined
  note?: string | undefined
  created_at: string
  created_by?: string | undefined
  payment: { [x: string]: unknown }
  refund_reason?: BaseRefundReason | undefined
  idempotency_key?: string | undefined
}
type BasePayment = {
  id: string
  amount: number
  authorized_amount?: number | undefined
  currency_code: string
  provider_id: string
  data?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  captured_at?: string | undefined
  canceled_at?: string | undefined
  captured_amount?: number | undefined
  refunded_amount?: number | undefined
  captures?: BaseCapture[] | undefined
  refunds?: BaseRefund[] | undefined
  payment_collection?: { [x: string]: unknown } | undefined
  payment_session?: { [x: string]: unknown } | undefined
}
type BasePaymentSession = {
  id: string
  amount: number
  currency_code: string
  provider_id: string
  data: { [x: string]: unknown }
  context?: { [x: string]: unknown } | undefined
  status: 'error' | 'authorized' | 'canceled' | 'captured' | 'pending' | 'requires_more'
  authorized_at?: string | undefined
  payment_collection?: { [x: string]: unknown } | undefined
  payment?: BasePayment | undefined
}
type BasePaymentCollection = {
  id: string
  currency_code: string
  amount: number
  authorized_amount?: number | undefined
  captured_amount?: number | undefined
  refunded_amount?: number | undefined
  completed_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  status:
    | 'canceled'
    | 'not_paid'
    | 'awaiting'
    | 'authorized'
    | 'partially_authorized'
    | 'completed'
    | 'failed'
  payment_providers: BasePaymentProvider[]
  payment_sessions?: BasePaymentSession[] | undefined
  payments?: BasePayment[] | undefined
}
type BaseCart = {
  id: string
  region?: BaseRegion | undefined
  region_id?: string | undefined
  customer_id?: string | undefined
  sales_channel_id?: string | undefined
  email?: string | undefined
  currency_code: string
  shipping_address?: BaseCartAddress | undefined
  billing_address?: BaseCartAddress | undefined
  items?: { [x: string]: unknown }[] | undefined
  shipping_methods?: BaseCartShippingMethod[] | undefined
  payment_collection?: BasePaymentCollection | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  original_item_total: number
  original_item_subtotal: number
  original_item_tax_total: number
  item_total: number
  item_subtotal: number
  item_tax_total: number
  original_total: number
  original_subtotal: number
  original_tax_total: number
  total: number
  subtotal: number
  tax_total: number
  discount_total: number
  discount_tax_total: number
  gift_card_total: number
  gift_card_tax_total: number
  shipping_total: number
  shipping_subtotal: number
  shipping_tax_total: number
  original_shipping_total: number
  original_shipping_subtotal: number
  original_shipping_tax_total: number
  completed_at?: string | undefined
}
type BaseCartLineItem = {
  id: string
  title: string
  subtitle?: string | undefined
  thumbnail?: string | undefined
  quantity: number
  product?: BaseProduct | undefined
  product_id?: string | undefined
  product_title?: string | undefined
  product_description?: string | undefined
  product_subtitle?: string | undefined
  product_type?: string | undefined
  product_collection?: string | undefined
  product_handle?: string | undefined
  variant?: BaseProductVariant | undefined
  variant_id?: string | undefined
  variant_sku?: string | undefined
  variant_barcode?: string | undefined
  variant_title?: string | undefined
  variant_option_values?: { [x: string]: unknown } | undefined
  requires_shipping: boolean
  is_discountable: boolean
  is_tax_inclusive: boolean
  compare_at_unit_price?: number | undefined
  unit_price: number
  tax_lines?: { [x: string]: unknown }[] | undefined
  adjustments?: BaseLineItemAdjustment[] | undefined
  cart: BaseCart
  cart_id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  original_total?: number | undefined
  original_subtotal?: number | undefined
  original_tax_total?: number | undefined
  item_total?: number | undefined
  item_subtotal?: number | undefined
  item_tax_total?: number | undefined
  total?: number | undefined
  subtotal?: number | undefined
  tax_total?: number | undefined
  discount_total?: number | undefined
  discount_tax_total?: number | undefined
}
type StoreCartLineItem = {
  id: string
  title: string
  subtitle?: string | undefined
  thumbnail?: string | undefined
  quantity: number
  product?: StoreProduct | undefined
  product_id?: string | undefined
  product_title?: string | undefined
  product_description?: string | undefined
  product_subtitle?: string | undefined
  product_type?: string | undefined
  product_collection?: string | undefined
  product_handle?: string | undefined
  variant?: StoreProductVariant | undefined
  variant_id?: string | undefined
  variant_sku?: string | undefined
  variant_barcode?: string | undefined
  variant_title?: string | undefined
  variant_option_values?: { [x: string]: unknown } | undefined
  requires_shipping: boolean
  is_discountable: boolean
  is_tax_inclusive: boolean
  compare_at_unit_price?: number | undefined
  unit_price: number
  tax_lines?:
    | {
        item: { [x: string]: unknown }
        item_id: string
        total: number
        subtotal: number
        id: string
        description?: string | undefined
        tax_rate_id?: string | undefined
        code: string
        rate: number
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  adjustments?:
    | {
        item: { [x: string]: unknown }
        item_id: string
        id: string
        code?: string | undefined
        amount: number
        cart_id: string
        description?: string | undefined
        promotion_id?: string | undefined
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  cart: { [x: string]: unknown }
  cart_id: string
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  original_total?: number | undefined
  original_subtotal?: number | undefined
  original_tax_total?: number | undefined
  item_total?: number | undefined
  item_subtotal?: number | undefined
  item_tax_total?: number | undefined
  total?: number | undefined
  subtotal?: number | undefined
  tax_total?: number | undefined
  discount_total?: number | undefined
  discount_tax_total?: number | undefined
}
type StoreRegion = {
  id: string
  name: string
  currency_code: string
  automatic_taxes?: boolean | undefined
  countries?: BaseRegionCountry[] | undefined
  payment_providers?: AdminPaymentProvider[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type StoreCartShippingMethod = {
  id: string
  cart_id: string
  name: string
  description?: string | undefined
  amount: number
  is_tax_inclusive: boolean
  shipping_option_id?: string | undefined
  data?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: unknown } | undefined
  tax_lines?:
    | {
        shipping_method: { [x: string]: unknown }
        shipping_method_id: string
        total: number
        subtotal: number
        id: string
        description?: string | undefined
        tax_rate_id?: string | undefined
        code: string
        rate: number
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  adjustments?:
    | {
        shipping_method: { [x: string]: unknown }
        shipping_method_id: string
        id: string
        code?: string | undefined
        amount: number
        cart_id: string
        description?: string | undefined
        promotion_id?: string | undefined
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  created_at: string
  updated_at: string
  original_total?: number | undefined
  original_subtotal?: number | undefined
  original_tax_total?: number | undefined
  total?: number | undefined
  subtotal?: number | undefined
  tax_total?: number | undefined
  discount_total?: number | undefined
  discount_tax_total?: number | undefined
}
type StorePaymentProvider = { id: string }
type StorePaymentSession = {
  id: string
  amount: number
  currency_code: string
  provider_id: string
  data: { [x: string]: unknown }
  context?: { [x: string]: unknown } | undefined
  status: 'authorized' | 'captured' | 'canceled' | 'pending' | 'requires_more' | 'error'
  authorized_at?: string | undefined
  payment_collection?: { [x: string]: unknown } | undefined
  payment?: BasePayment | undefined
}
type StorePaymentCollection = {
  id: string
  currency_code: string
  amount: number
  authorized_amount?: number | undefined
  captured_amount?: number | undefined
  refunded_amount?: number | undefined
  completed_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  status: 'canceled' | 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized'
  payment_providers: StorePaymentProvider[]
  payment_sessions?: StorePaymentSession[] | undefined
  payments?: BasePayment[] | undefined
}
type StoreCartPromotion = {
  id: string
  code?: string | undefined
  is_automatic?: boolean | undefined
  application_method?:
    | { value: string; type: 'fixed' | 'percentage'; currency_code: string }
    | undefined
}
type StoreCart = {
  id: string
  region?: StoreRegion | undefined
  region_id?: string | undefined
  customer_id?: string | undefined
  sales_channel_id?: string | undefined
  email?: string | undefined
  currency_code: string
  shipping_address?: StoreCartAddress | undefined
  billing_address?: StoreCartAddress | undefined
  items?: StoreCartLineItem[] | undefined
  shipping_methods?: StoreCartShippingMethod[] | undefined
  payment_collection?: StorePaymentCollection | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  original_item_total: number
  original_item_subtotal: number
  original_item_tax_total: number
  item_total: number
  item_subtotal: number
  item_tax_total: number
  original_total: number
  original_subtotal: number
  original_tax_total: number
  total: number
  subtotal: number
  tax_total: number
  discount_total: number
  discount_tax_total: number
  gift_card_total: number
  gift_card_tax_total: number
  shipping_total: number
  shipping_subtotal: number
  shipping_tax_total: number
  original_shipping_total: number
  original_shipping_subtotal: number
  original_shipping_tax_total: number
  promotions: StoreCartPromotion[]
  completed_at?: string | undefined
}
type StoreCartResponse = { cart: StoreCart }
type CreateAddress = {
  customer_id?: string | undefined
  company?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country_code?: string | undefined
  province?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type UpdateAddress = {
  id: string
  customer_id?: string | undefined
  company?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country_code?: string | undefined
  province?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type StoreRegionCountry = {
  id: string
  iso_2?: string | undefined
  iso_3?: string | undefined
  num_code?: string | undefined
  name?: string | undefined
  display_name?: string | undefined
}
type StoreOrderAddress = {
  id: string
  customer_id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  company?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country_code?: string | undefined
  country?: StoreRegionCountry | undefined
  province?: string | undefined
  postal_code?: string | undefined
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
}
type StoreOrderLineItem = {
  variant?: StoreProductVariant | undefined
  product?: StoreProduct | undefined
  tax_lines?:
    | {
        item: { [x: string]: unknown }
        item_id: string
        total: number
        subtotal: number
        id: string
        description?: string | undefined
        tax_rate_id?: string | undefined
        code: string
        rate: number
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  adjustments?:
    | {
        item: { [x: string]: unknown }
        item_id: string
        id: string
        code?: string | undefined
        amount: number
        order_id: string
        description?: string | undefined
        promotion_id?: string | undefined
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  detail: {
    id: string
    item_id: string
    item: { [x: string]: unknown }
    quantity: number
    fulfilled_quantity: number
    delivered_quantity: number
    shipped_quantity: number
    return_requested_quantity: number
    return_received_quantity: number
    return_dismissed_quantity: number
    written_off_quantity: number
    metadata: { [x: string]: unknown }
    created_at: string
    updated_at: string
  }
  title: string
  id: string
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
  original_total: number
  original_subtotal: number
  original_tax_total: number
  item_total: number
  item_subtotal: number
  item_tax_total: number
  total: number
  subtotal: number
  tax_total: number
  discount_total: number
  discount_tax_total: number
  refundable_total: number
  refundable_total_per_unit: number
  subtitle: string
  thumbnail: string
  variant_id: string
  product_id: string
  product_title: string
  product_description: string
  product_subtitle: string
  product_type: string
  product_collection: string
  product_handle: string
  variant_sku: string
  variant_barcode: string
  variant_title: string
  variant_option_values: { [x: string]: unknown }
  requires_shipping: boolean
  is_discountable: boolean
  is_tax_inclusive: boolean
  compare_at_unit_price?: number | undefined
  unit_price: number
  quantity: number
  product_type_id: string
}
type StoreOrderShippingMethod = {
  tax_lines?:
    | {
        shipping_method: { [x: string]: unknown }
        shipping_method_id: string
        total: number
        subtotal: number
        id: string
        description?: string | undefined
        tax_rate_id?: string | undefined
        code: string
        rate: number
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  adjustments?:
    | {
        shipping_method: { [x: string]: unknown }
        shipping_method_id: string
        id: string
        code?: string | undefined
        amount: number
        order_id: string
        description?: string | undefined
        promotion_id?: string | undefined
        provider_id?: string | undefined
        created_at: string
        updated_at: string
      }[]
    | undefined
  detail?:
    | {
        id: string
        shipping_method_id: string
        shipping_method: { [x: string]: unknown }
        claim_id?: string | undefined
        exchange_id?: string | undefined
        return_id?: string | undefined
        created_at: string
        updated_at: string
      }
    | undefined
  id: string
  order_id: string
  name: string
  description?: string | undefined
  amount: number
  is_tax_inclusive: boolean
  shipping_option_id: string
  data: { [x: string]: unknown }
  metadata: { [x: string]: unknown }
  original_total: number
  original_subtotal: number
  original_tax_total: number
  total: number
  subtotal: number
  tax_total: number
  discount_total: number
  discount_tax_total: number
  created_at: string
  updated_at: string
}
type StoreOrderFulfillment = {
  id: string
  location_id: string
  packed_at: string
  shipped_at: string
  delivered_at: string
  canceled_at: string
  data: { [x: string]: unknown }
  provider_id: string
  shipping_option_id: string
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
  requires_shipping: boolean
  created_by: string
  marked_shipped_by: string
}
type BaseOrderSummary = {
  paid_total: number
  refunded_total: number
  pending_difference: number
  current_order_total: number
  original_order_total: number
  transaction_total: number
  accounting_total: number
}
type BaseOrderTransaction = {
  id: string
  order_id: string
  amount: number
  currency_code: string
  reference: 'capture' | 'refund'
  reference_id: string
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
}
type StoreOrder = {
  id: string
  region_id: string
  customer_id: string
  sales_channel_id: string
  email: string
  currency_code: string
  display_id?: number | undefined
  shipping_address?: StoreOrderAddress | undefined
  billing_address?: StoreOrderAddress | undefined
  items: StoreOrderLineItem[]
  shipping_methods: StoreOrderShippingMethod[]
  payment_collections?: StorePaymentCollection[] | undefined
  payment_status:
    | 'canceled'
    | 'not_paid'
    | 'awaiting'
    | 'authorized'
    | 'partially_authorized'
    | 'captured'
    | 'partially_captured'
    | 'partially_refunded'
    | 'refunded'
    | 'requires_action'
  fulfillments?: StoreOrderFulfillment[] | undefined
  fulfillment_status:
    | 'canceled'
    | 'not_fulfilled'
    | 'partially_fulfilled'
    | 'fulfilled'
    | 'partially_shipped'
    | 'shipped'
    | 'partially_delivered'
    | 'delivered'
  summary: BaseOrderSummary
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  original_item_total: number
  original_item_subtotal: number
  original_item_tax_total: number
  item_total: number
  item_subtotal: number
  item_tax_total: number
  original_total: number
  original_subtotal: number
  original_tax_total: number
  total: number
  subtotal: number
  tax_total: number
  discount_total: number
  discount_tax_total: number
  gift_card_total: number
  gift_card_tax_total: number
  shipping_total: number
  shipping_subtotal: number
  shipping_tax_total: number
  original_shipping_total: number
  original_shipping_subtotal: number
  original_shipping_tax_total: number
  customer?: StoreCustomer | undefined
  transactions?: BaseOrderTransaction[] | undefined
  status: string
  credit_line_total: number
  item_discount_total: number
  shipping_discount_total: number
  custom_display_id?: string | undefined
}
type StoreAddGiftCardToCart = { code: string }
type StoreRemoveGiftCardFromCart = { code: string }
type StoreCartAddPromotion = { promo_codes: string[] }
type StoreCartRemovePromotion = { promo_codes: string[] }
type StoreAddStoreCreditsToCart = { amount: number }
type StoreCollectionResponse = { collection: StoreCollection }
type StoreCurrency = {
  code: string
  symbol: string
  symbol_native: string
  name: string
  decimal_digits: number
  rounding: number
  created_at: string
  updated_at: string
  deleted_at: string
}
type StoreCurrencyListResponse = {
  limit: number
  offset: number
  count: number
  currencies: StoreCurrency[]
  estimate_count?: number | undefined
}
type StoreCurrencyResponse = { currency: StoreCurrency }
type StoreCreateCustomer = {
  email?: string | undefined
  company_name?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type StoreCustomerResponse = { customer: StoreCustomer }
type StoreUpdateCustomer = {
  company_name?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type StoreCustomerAddressListResponse = {
  limit: number
  offset: number
  count: number
  addresses: StoreCustomerAddress[]
  estimate_count?: number | undefined
}
type StoreCreateCustomerAddress = {
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  company?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country_code?: string | undefined
  province?: string | undefined
  postal_code?: string | undefined
  address_name?: string | undefined
  is_default_shipping?: boolean | undefined
  is_default_billing?: boolean | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type StoreCustomerAddressResponse = { address: StoreCustomerAddress }
type StoreUpdateCustomerAddress = {
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  company?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country_code?: string | undefined
  province?: string | undefined
  postal_code?: string | undefined
  address_name?: string | undefined
  is_default_shipping?: boolean | undefined
  is_default_billing?: boolean | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type StoreLocale = { code: string; name: string }
type StoreLocaleListResponse = { locales: StoreLocale[] }
type StoreOrderResponse = { order: StoreOrder }
type StoreAcceptOrderTransfer = { token: string }
type StoreDeclineOrderTransfer = { token: string }
type StoreRequestOrderTransfer = {
  description?: string | undefined
  update_order_email?: boolean | undefined
}
type StoreCreatePaymentCollection = { cart_id: string }
type StorePaymentCollectionResponse = { payment_collection: StorePaymentCollection }
type StoreInitializePaymentSession = {
  provider_id: string
  data?: { [x: string]: unknown } | undefined
}
type StoreUpdatePaymentSession = { client_data: { [x: string]: unknown } }
type StoreProductCategory = {
  id: string
  name: string
  description: string
  handle: string
  rank: number
  parent_category_id: string
  parent_category: { [x: string]: unknown }
  category_children: { [x: string]: unknown }[]
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
  deleted_at: string
  products?: StoreProduct[] | undefined
}
type StoreProductCategoryListResponse = {
  limit: number
  offset: number
  count: number
  product_categories: StoreProductCategory[]
  estimate_count?: number | undefined
}
type StoreProductCategoryResponse = { product_category: StoreProductCategory }
type StoreProductOptionResponse = { product_option: StoreProductOption }
type StoreProductTagListResponse = {
  limit: number
  offset: number
  count: number
  product_tags: StoreProductTag[]
  estimate_count?: number | undefined
}
type StoreProductTagResponse = { product_tag: StoreProductTag }
type StoreProductTypeListResponse = {
  limit: number
  offset: number
  count: number
  product_types: StoreProductType[]
  estimate_count?: number | undefined
}
type StoreProductTypeResponse = { product_type: StoreProductType }
type StoreProductListResponse = {
  limit: number
  offset: number
  count: number
  estimate_count?: number | undefined
  products: StoreProduct[]
}
type StoreProductResponse = { product: StoreProduct }
type StoreReturnReason = {
  id: string
  value: string
  label: string
  description?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  created_at: string
  updated_at: string
}
type StoreReturnReasonResponse = { return_reason: StoreReturnReason }
type StoreCreateReturnItem = {
  id: string
  quantity: number
  reason_id?: string | undefined
  note?: string | undefined
}
type StoreCreateReturnShipping = { option_id: string; price?: number | undefined }
type StoreCreateReturn = {
  order_id: string
  items: StoreCreateReturnItem[]
  return_shipping: StoreCreateReturnShipping
  note?: string | undefined
  receive_now?: boolean | undefined
  location_id?: string | undefined
}
type StoreReturnItem = {
  id: string
  quantity: number
  received_quantity: number
  damaged_quantity: number
  reason_id?: string | undefined
  note?: string | undefined
  item_id: string
  return_id: string
  metadata?: { [x: string]: unknown } | undefined
}
type StoreReturn = {
  items: StoreReturnItem[]
  status?: 'received' | 'canceled' | 'requested' | 'open' | 'partially_received' | undefined
  id: string
  display_id: number
  created_at: string
  order_id: string
  location_id?: string | undefined
  canceled_at: string
  exchange_id?: string | undefined
  claim_id?: string | undefined
  refund_amount?: number | undefined
  received_at: string
  created_by: string
  requested_at: string
}
type StoreReturnResponse = { return: StoreReturn }
type SearchPagination = {
  skip?: number | undefined
  take?: number | undefined
  order?: { [x: string]: unknown } | undefined
  cursor?: string | undefined
}
type SearchHighlightOptions = {
  fields: string[]
  pre_tag?: string | undefined
  post_tag?: string | undefined
  snippet?: boolean | { length: number } | undefined
}
type SearchVectorOptions = {
  field?: string | undefined
  value?: number[] | undefined
  query?: string | undefined
  semantic_ratio?: number | undefined
}
type SearchOptions = {
  attributes_to_search_on?: string[] | undefined
  match_strategy?: 'any' | 'all' | 'last' | undefined
  typo_tolerance?: boolean | undefined
  facets?:
    | (
        | string
        | {
            field: string
            type?: 'value' | undefined
            limit?: number | undefined
            sort?: 'count' | 'alpha' | undefined
            query?: string | undefined
          }
        | {
            field: string
            type: string
            ranges?:
              | {
                  key?: string | undefined
                  from?: string | number | undefined
                  to?: string | number | undefined
                }[]
              | undefined
          }
        | { field: string; type: string }
      )[]
    | undefined
  disjunctive_facets?: boolean | undefined
  highlight?: boolean | SearchHighlightOptions | undefined
  distinct?: string | undefined
  min_score?: number | undefined
  include_score?: boolean | undefined
  locales?: string[] | undefined
  vector?: SearchVectorOptions | undefined
  count?: 'estimated' | 'exact' | 'none' | undefined
}
type SearchResultMetadata = {
  skip: number
  take: number
  count: number
  next_cursor?: string | undefined
  query?: string | undefined
  processing_time_ms?: number | undefined
}
type StorePriceRule = {
  id: string
  attribute: string
  operator: 'gt' | 'lt' | 'eq' | 'lte' | 'gte'
  value: string
}
type StorePrice = {
  id: string
  currency_code: string
  amount: number
  min_quantity: number
  max_quantity: number
  price_rules?: StorePriceRule[] | undefined
}
type StoreCalculatedPrice = {
  id: string
  is_calculated_price_price_list?: boolean | undefined
  is_calculated_price_tax_inclusive?: boolean | undefined
  calculated_amount: number
  calculated_amount_with_tax?: number | undefined
  calculated_amount_without_tax?: number | undefined
  is_original_price_price_list?: boolean | undefined
  is_original_price_tax_inclusive?: boolean | undefined
  original_amount: number
  currency_code: string
  calculated_price?:
    | {
        id: string
        price_list_id: string
        price_list_type: string
        min_quantity: number
        max_quantity: number
      }
    | undefined
  original_price?:
    | {
        id: string
        price_list_id: string
        price_list_type: string
        min_quantity: number
        max_quantity: number
      }
    | undefined
  original_amount_with_tax: number
  original_amount_without_tax: number
}
type StoreFulfillmentAddress = {
  id: string
  company: string
  address_1: string
  address_2: string
  city: string
  country_code: string
  province: string
  postal_code: string
  phone: string
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
  deleted_at: string
}
type StoreShippingOptionListResponse = {
  shipping_options: {
    id: string
    name: string
    price_type: 'flat' | 'calculated'
    service_zone_id: string
    provider_id: string
    provider: { id: string; is_enabled: boolean }
    type: { id: string; label: string; description: string; code: string }
    shipping_profile_id: string
    amount: number
    data: { [x: string]: unknown }
    prices: StorePrice[]
    calculated_price: StoreCalculatedPrice
    insufficient_inventory: boolean
    service_zone: {
      id: string
      fulfillment_set_id: string
      fulfillment_set: {
        id: string
        type: string
        location: { id: string; address: StoreFulfillmentAddress }
      }
    }
  }[]
}
type StoreCartShippingOption = {
  id: string
  name: string
  price_type: 'flat' | 'calculated'
  service_zone_id: string
  provider_id: string
  provider: { id: string; is_enabled: boolean }
  type: { id: string; label: string; description: string; code: string }
  shipping_profile_id: string
  amount: number
  data: { [x: string]: unknown }
  prices: StorePrice[]
  calculated_price: StoreCalculatedPrice
  insufficient_inventory: boolean
}
type StoreShippingOptionResponse = { shipping_option: StoreCartShippingOption }
type StoreStoreCreditAccount = {
  customer: StoreCustomer
  id: string
  customer_id?: string | undefined
  currency_code: string
  credits: number
  debits: number
  balance: number
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
  code?: string | undefined
}
type StoreStoreCreditAccountsResponse = {
  limit: number
  offset: number
  count: number
  store_credit_accounts: StoreStoreCreditAccount[]
  estimate_count?: number | undefined
}
type StoreClaimStoreCreditAccountParams = { code: string }
type StoreClaimStoreCreditAccountResponse = { store_credit_account: StoreStoreCreditAccount }
type StoreStoreCreditAccountResponse = { store_credit_account: StoreStoreCreditAccount }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth/customer/emailpass/verification/confirm': {
      $post:
        | { input: { json: { token: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { token: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/auth/customer/providers': {
      $get:
        | { input: {}; output: AuthProvidersListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 409 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/auth/customer/:auth_provider': {
      $post:
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: AuthResponse | AuthCallbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/customer/:auth_provider/callback': {
      $post:
        | {
            input: { param: { auth_provider: string } }
            output: AuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_provider: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_provider: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { auth_provider: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { auth_provider: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { auth_provider: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { auth_provider: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/customer/:auth_provider/register': {
      $post:
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: AuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/customer/:auth_provider/reset-password': {
      $post:
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { auth_provider: string } } & {
              json: { identifier: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/customer/:auth_provider/update': {
      $post:
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { auth_provider: string } } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/mfa/challenges/:id/verify': {
      $post:
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: { method: string; code: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/mfa/factors': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 409 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                provider: string
                label?: string | undefined
                issuer?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/mfa/factors/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: { method?: string | undefined; code?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/mfa/factors/:id/verify': {
      $post:
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/mfa/recovery-codes': {
      $post:
        | {
            input: { json: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { count?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { count?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { count?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { count?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { count?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { count?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/session': {
      $post:
        | { input: {}; output: AuthStoreSessionResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 409 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $delete:
        | { input: {}; output: { success: boolean }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 409 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/auth/token/refresh': {
      $post:
        | { input: {}; output: AuthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 409 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/auth/verification/confirm': {
      $post:
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { code: string; code_provider?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/verification/request': {
      $post:
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                entity_id: string
                entity_type: string
                code_provider: string
                metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts': {
      $post:
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                shipping_address?: StoreCartAddress | undefined
                billing_address?: StoreCartAddress | undefined
                email?: string | undefined
                currency_code?: string | undefined
                items?: StoreCartLineItem[] | undefined
                sales_channel_id?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: { cart: StoreCart }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                region_id?: string | undefined
                customer_id?: string | undefined
                sales_channel_id?: string | undefined
                email?: string | undefined
                currency_code?: string | undefined
                shipping_address_id?: string | undefined
                billing_address_id?: string | undefined
                billing_address?: CreateAddress | UpdateAddress | undefined
                shipping_address?: CreateAddress | UpdateAddress | undefined
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/complete': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output:
              | { type: string; order: StoreOrder }
              | {
                  type: string
                  cart: StoreCart
                  error: { message: string; name: string; type: string }
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/customer': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { additional_data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/gift-cards': {
      $post:
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddGiftCardToCart }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRemoveGiftCardFromCart }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/line-items': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                variant_id: string
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/line-items/:line_id': {
      $post:
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json: {
                quantity: number
                metadata?: { [x: string]: unknown } | undefined
                additional_data?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: { id: string; object: string; deleted: boolean; parent?: StoreCart | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; line_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/promotions': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartAddPromotion }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: { cart: StoreCart }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCartRemovePromotion }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/shipping-methods': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    option_id: string
                    data?: { [x: string]: unknown } | undefined
                    additional_data?: { [x: string]: unknown } | undefined
                  }
                | { additional_data?: { [x: string]: unknown } | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/store-credits': {
      $post:
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAddStoreCreditsToCart }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/carts/:id/taxes': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/collections': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: { limit: number; offset: number; count: number; collections: StoreCollection[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                title?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                handle?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                id?: string | string[] | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/collections/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/currencies': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCurrencyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/currencies/:code': {
      $get:
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCurrencyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { code: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/customers': {
      $post:
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: StoreCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/customers/me': {
      $get:
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: StoreCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/customers/me/addresses': {
      $get:
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCustomerAddressListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                city?: string | string[] | undefined
                postal_code?: string | string[] | undefined
                country_code?: string | string[] | undefined
                q?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: StoreCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/customers/me/addresses/:address_id': {
      $get:
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreCustomerAddressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: StoreCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdateCustomerAddress }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: {
              id: string
              object: string
              deleted: boolean
              parent?: StoreCustomer | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address_id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/gift-cards/:idOrCode': {
      $get:
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { idOrCode: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/locales': {
      $get:
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreLocaleListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/orders': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: { limit: number; offset: number; count: number; orders: StoreOrder[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                id?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                status?:
                  | 'canceled'
                  | 'requires_action'
                  | 'pending'
                  | 'completed'
                  | 'draft'
                  | 'archived'
                  | (
                      | 'canceled'
                      | 'requires_action'
                      | 'pending'
                      | 'completed'
                      | 'draft'
                      | 'archived'
                    )[]
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/orders/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/orders/:id/transfer/accept': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: StoreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreAcceptOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/orders/:id/transfer/cancel': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/orders/:id/transfer/decline': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: StoreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreDeclineOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/orders/:id/transfer/request': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: StoreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreRequestOrderTransfer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/payment-collections': {
      $post:
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: StorePaymentCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { fields?: string | undefined; locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreatePaymentCollection }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/payment-collections/:id/payment-sessions': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: StorePaymentCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreInitializePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/payment-collections/:id/payment-sessions/:session_id': {
      $post:
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: StorePaymentCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; session_id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreUpdatePaymentSession }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/payment-providers': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: {
              limit: number
              offset: number
              count: number
              payment_providers: StorePaymentProvider[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                region_id: string
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-categories': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductCategoryListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                description?: string | string[] | undefined
                handle?: string | string[] | undefined
                parent_category_id?: string | string[] | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                name?: string | string[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-categories/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                include_ancestors_tree?: boolean | undefined
                include_descendants_tree?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-options': {
      $get:
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: {
              limit: number
              offset: number
              count: number
              estimate_count?: number | undefined
              product_options: StoreProductOption[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                q?: string | undefined
                title?: string | string[] | undefined
                is_exclusive?: boolean | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-options/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductOptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-tags': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductTagListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-tags/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductTagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-types': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductTypeListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                value?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-types/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/product-variants': {
      $get:
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: {
              limit: number
              offset: number
              count: number
              estimate_count?: number | undefined
              variants: StoreProductVariant[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                sku?: string | string[] | undefined
                manage_inventory?: boolean | undefined
                allow_backorder?: boolean | undefined
                product_id?: string | string[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                options?: { value?: string | undefined; option_id?: string | undefined } | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                deleted_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/products': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                title?: string | string[] | undefined
                handle?: string | string[] | undefined
                is_giftcard?: boolean | undefined
                collection_id?: { [x: string]: unknown } | undefined
                tag_id?: string | string[] | undefined
                type_id?: string | string[] | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?:
                        | string
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | string[]
                        | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                region_id?: string | undefined
                province?: string | undefined
                sales_channel_id?: string | string[] | undefined
                category_id?: string | string[] | undefined
                variants?:
                  | {
                      sku?: string | string[] | undefined
                      manage_inventory?: boolean | undefined
                      allow_backorder?: boolean | undefined
                      product_id?: string | string[] | undefined
                      q?: string | undefined
                      id?: string | string[] | undefined
                      options?:
                        | { value?: string | undefined; option_id?: string | undefined }
                        | undefined
                      created_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      updated_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      deleted_at?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $eq?: string | string[] | undefined
                            $ne?: string | undefined
                            $in?: string[] | undefined
                            $nin?: string[] | undefined
                            $not?: string | { [x: string]: unknown } | string[] | undefined
                            $gt?: string | undefined
                            $gte?: string | undefined
                            $lt?: string | undefined
                            $lte?: string | undefined
                            $like?: string | undefined
                            $re?: string | undefined
                            $ilike?: string | undefined
                            $fulltext?: string | undefined
                            $overlap?: string[] | undefined
                            $contains?: string[] | undefined
                            $contained?: string[] | undefined
                            $exists?: boolean | undefined
                          }
                        | undefined
                      limit?: number | undefined
                      offset?: number | undefined
                      order?: string | undefined
                      with_deleted?: boolean | undefined
                      fields?: string | undefined
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      ean?: string | string[] | undefined
                      upc?: string | string[] | undefined
                      barcode?: string | string[] | undefined
                    }
                  | undefined
                country_code?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
                external_id?: string | string[] | undefined
                option_value_id?: string | string[] | undefined
                option_id?: string | string[] | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/products/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreProductResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                fields?: string | undefined
                region_id?: string | undefined
                country_code?: string | undefined
                province?: string | undefined
                cart_id?: string | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/regions': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: { limit: number; offset: number; count: number; regions: StoreRegion[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                q?: string | undefined
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                currency_code?: string | string[] | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/regions/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: { region: StoreRegion }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/return-reasons': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: {
              limit: number
              offset: number
              count: number
              return_reasons: StoreReturnReason[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                with_deleted?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/return-reasons/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreReturnReasonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { fields?: string | undefined; locale?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/returns': {
      $post:
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: StoreReturnResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreCreateReturn }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/search': {
      $post:
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: {
              results: {
                hits: {
                  id: string
                  score?: number | undefined
                  document: { [x: string]: unknown }
                  highlights?: { [x: string]: unknown } | undefined
                }[]
                facets?: { [x: string]: unknown } | undefined
                metadata: SearchResultMetadata
                provider_metadata?: { [x: string]: unknown } | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & {
              json:
                | {
                    queries: {
                      entity: string
                      fields?: string[] | undefined
                      filters?:
                        | {
                            $and?: { [x: string]: unknown }[] | undefined
                            $or?: { [x: string]: unknown }[] | undefined
                            $not?:
                              | {
                                  $and?: { [x: string]: unknown }[] | undefined
                                  $or?: { [x: string]: unknown }[] | undefined
                                  $not?:
                                    | {
                                        $and?: { [x: string]: unknown }[] | undefined
                                        $or?: { [x: string]: unknown }[] | undefined
                                        $not?:
                                          | {
                                              $and?: { [x: string]: unknown }[] | undefined
                                              $or?: { [x: string]: unknown }[] | undefined
                                              $not?: {} | undefined
                                              q?: string | undefined
                                            }
                                          | undefined
                                        q?: string | undefined
                                      }
                                    | undefined
                                  q?: string | undefined
                                }
                              | undefined
                            q?: string | undefined
                          }
                        | undefined
                      pagination?: SearchPagination | undefined
                      search_options?: SearchOptions | undefined
                    }[]
                  }
                | {
                    entity: string
                    fields?: string[] | undefined
                    filters?:
                      | {
                          $and?: { [x: string]: unknown }[] | undefined
                          $or?: { [x: string]: unknown }[] | undefined
                          $not?:
                            | {
                                $and?: { [x: string]: unknown }[] | undefined
                                $or?: { [x: string]: unknown }[] | undefined
                                $not?:
                                  | {
                                      $and?: { [x: string]: unknown }[] | undefined
                                      $or?: { [x: string]: unknown }[] | undefined
                                      $not?:
                                        | {
                                            $and?: { [x: string]: unknown }[] | undefined
                                            $or?: { [x: string]: unknown }[] | undefined
                                            $not?:
                                              | {
                                                  $and?: { [x: string]: unknown }[] | undefined
                                                  $or?: { [x: string]: unknown }[] | undefined
                                                  $not?: {} | undefined
                                                  q?: string | undefined
                                                }
                                              | undefined
                                            q?: string | undefined
                                          }
                                        | undefined
                                      q?: string | undefined
                                    }
                                  | undefined
                                q?: string | undefined
                              }
                            | undefined
                          q?: string | undefined
                        }
                      | undefined
                    pagination?: SearchPagination | undefined
                    search_options?: SearchOptions | undefined
                  }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/shipping-options': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreShippingOptionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: string | undefined
                cart_id: string
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                is_return?: boolean | undefined
                locale?: string | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/shipping-options/:id/calculate': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: StoreShippingOptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { locale?: string | undefined; fields?: string | undefined }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: { cart_id: string; data?: { [x: string]: unknown } | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/store-credit-accounts': {
      $get:
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreStoreCreditAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                currency_code?: string | undefined
                created_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                updated_at?:
                  | {
                      $and?: { [x: string]: unknown }[] | undefined
                      $or?: { [x: string]: unknown }[] | undefined
                      $eq?: string | string[] | undefined
                      $ne?: string | undefined
                      $in?: string[] | undefined
                      $nin?: string[] | undefined
                      $not?: string | { [x: string]: unknown } | string[] | undefined
                      $gt?: string | undefined
                      $gte?: string | undefined
                      $lt?: string | undefined
                      $lte?: string | undefined
                      $like?: string | undefined
                      $re?: string | undefined
                      $ilike?: string | undefined
                      $fulltext?: string | undefined
                      $overlap?: string[] | undefined
                      $contains?: string[] | undefined
                      $contained?: string[] | undefined
                      $exists?: boolean | undefined
                    }
                  | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                fields?: string | undefined
                $and?: { [x: string]: unknown }[] | undefined
                $or?: { [x: string]: unknown }[] | undefined
                locale?: string | undefined
                with_deleted?: boolean | undefined
              }
            } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/store-credit-accounts/claim': {
      $post:
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: StoreClaimStoreCreditAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            } & { json: StoreClaimStoreCreditAccountParams }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/store/store-credit-accounts/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: StoreStoreCreditAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { locale?: string | undefined } } & {
              header: { 'x-publishable-api-key': string; 'x-medusa-locale'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
