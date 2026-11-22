type DateTime = string
type CurrencyCode = string
type Money = { currency_code: CurrencyCode; value: string }
type Percentage = string
type TransactionInfo = {
  paypal_account_id?: string | undefined
  transaction_id?: string | undefined
  paypal_reference_id?: string | undefined
  paypal_reference_id_type?: 'ODR' | 'TXN' | 'SUB' | 'PAP' | undefined
  transaction_event_code?: string | undefined
  transaction_initiation_date?: DateTime | undefined
  transaction_updated_date?: DateTime | undefined
  transaction_amount?: Money | undefined
  fee_amount?: Money | undefined
  discount_amount?: Money | undefined
  insurance_amount?: Money | undefined
  sales_tax_amount?: Money | undefined
  shipping_amount?: Money | undefined
  shipping_discount_amount?: Money | undefined
  shipping_tax_amount?: Money | undefined
  other_amount?: Money | undefined
  tip_amount?: Money | undefined
  transaction_status?: string | undefined
  transaction_subject?: string | undefined
  transaction_note?: string | undefined
  payment_tracking_id?: string | undefined
  bank_reference_id?: string | undefined
  ending_balance?: Money | undefined
  available_balance?: Money | undefined
  invoice_id?: string | undefined
  custom_field?: string | undefined
  protection_eligibility?: string | undefined
  credit_term?: string | undefined
  credit_transactional_fee?: Money | undefined
  credit_promotional_fee?: Money | undefined
  annual_percentage_rate?: Percentage | undefined
  payment_method_type?: string | undefined
  instrument_type?: string | undefined
  instrument_sub_type?: string | undefined
}
type EmailAddress = string
type Phone = {
  country_code: string
  national_number: string
  extension_number?: string | undefined
}
type Name = {
  prefix?: string | undefined
  given_name?: string | undefined
  surname?: string | undefined
  middle_name?: string | undefined
  suffix?: string | undefined
  alternate_full_name?: string | undefined
  full_name?: string | undefined
}
type CountryCode = string
type Address = {
  line1: string
  line2?: string | undefined
  city: string
  state?: string | undefined
  country_code: CountryCode
  postal_code?: string | undefined
}
type PayerInfo = {
  account_id?: string | undefined
  email_address?: EmailAddress | undefined
  phone_number?: Phone | undefined
  address_status?: string | undefined
  payer_status?: string | undefined
  payer_name?: Name | undefined
  country_code?: CountryCode | undefined
  address?: Address | undefined
}
type ShippingInfo = {
  name?: string | undefined
  method?: string | undefined
  address?: Address | undefined
  secondary_shipping_address?: Address | undefined
}
type ItemDetailTaxAmount = { tax_amount?: Money | undefined }
type ItemDetailTaxAmountList = ItemDetailTaxAmount[]
type CheckoutOption = {
  checkout_option_name?: string | undefined
  checkout_option_value?: string | undefined
}
type CheckoutOptionList = CheckoutOption[]
type ItemDetail = {
  item_code?: string | undefined
  item_name?: string | undefined
  item_description?: string | undefined
  item_options?: string | undefined
  item_quantity?: string | undefined
  item_unit_price?: Money | undefined
  item_amount?: Money | undefined
  discount_amount?: Money | undefined
  adjustment_amount?: Money | undefined
  gift_wrap_amount?: Money | undefined
  tax_percentage?: Percentage | undefined
  tax_amounts?: ItemDetailTaxAmountList | undefined
  basic_shipping_amount?: Money | undefined
  extra_shipping_amount?: Money | undefined
  handling_amount?: Money | undefined
  insurance_amount?: Money | undefined
  total_item_amount?: Money | undefined
  invoice_number?: string | undefined
  checkout_options?: CheckoutOptionList | undefined
}
type ItemDetailList = ItemDetail[]
type CartInfo = {
  item_details?: ItemDetailList | undefined
  tax_inclusive?: boolean | undefined
  paypal_invoice_id?: string | undefined
}
type StoreInfo = { store_id?: string | undefined; terminal_id?: string | undefined }
type AuctionInfo = {
  auction_site?: string | undefined
  auction_item_site?: string | undefined
  auction_buyer_id?: string | undefined
  auction_closing_date?: DateTime | undefined
}
type IncentiveDetail = {
  incentive_type?: string | undefined
  incentive_code?: string | undefined
  incentive_amount?: Money | undefined
  incentive_program_code?: string | undefined
}
type IncentiveDetailList = IncentiveDetail[]
type IncentiveInfo = { incentive_details?: IncentiveDetailList | undefined }
type TransactionDetail = {
  transaction_info?: TransactionInfo | undefined
  payer_info?: PayerInfo | undefined
  shipping_info?: ShippingInfo | undefined
  cart_info?: CartInfo | undefined
  store_info?: StoreInfo | undefined
  auction_info?: AuctionInfo | undefined
  incentive_info?: IncentiveInfo | undefined
}
type TransactionDetailList = TransactionDetail[]
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type LinkDescriptionList = LinkDescription[]
type SearchResponse = {
  transaction_details?: TransactionDetailList | undefined
  account_number?: string | undefined
  start_date?: DateTime | undefined
  end_date?: DateTime | undefined
  last_refreshed_datetime?: DateTime | undefined
  page?: number | undefined
  total_items?: number | undefined
  total_pages?: number | undefined
  links?: LinkDescriptionList | undefined
}
type ErrorLocation = 'body' | 'path' | 'query'
type ErrorDetails = {
  field?: string | undefined
  value?: string | undefined
  location?: ErrorLocation | undefined
  issue: string
  description?: string | undefined
}
type ErrorLinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | undefined
}
type Error_400 = {
  name?: 'INVALID_REQUEST' | undefined
  message?: 'Request is not well-formed, syntactically incorrect, or violates schema.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_401 = {
  name?: 'AUTHENTICATION_FAILURE' | undefined
  message?:
    | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_403 = {
  name?: 'NOT_AUTHORIZED' | undefined
  message?: 'Authorization failed due to insufficient permissions.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_404 = {
  name?: 'RESOURCE_NOT_FOUND' | undefined
  message?: 'The specified resource does not exist.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_409 = {
  name?: 'RESOURCE_CONFLICT' | undefined
  message?: 'The server has detected a conflict while processing this request.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_415 = {
  name?: 'UNSUPPORTED_MEDIA_TYPE' | undefined
  message?: "The server does not support the request payload's media type." | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_422 = {
  name?: 'UNPROCESSABLE_ENTITY' | undefined
  message?:
    | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
    | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_500 = {
  name?: 'INTERNAL_SERVER_ERROR' | undefined
  message?: 'An internal server error occurred.' | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_503 = {
  name?: 'SERVICE_UNAVAILABLE' | undefined
  message?: 'Service Unavailable.' | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type ErrorDefault =
  | Error_400
  | Error_401
  | Error_403
  | Error_404
  | Error_409
  | Error_415
  | Error_422
  | Error_500
  | Error_503
type BalanceDetail = {
  currency: CurrencyCode
  primary?: boolean | undefined
  total_balance: Money
  available_balance?: Money | undefined
  withheld_balance?: Money | undefined
}
type BalanceDetailList = BalanceDetail[]
type AccountId = string
type BalancesResponse = {
  balances?: BalanceDetailList | undefined
  account_id?: AccountId | undefined
  as_of_time?: DateTime | undefined
  last_refresh_time?: DateTime | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/reporting/transactions': {
      $get:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                transaction_type?: string | undefined
                transaction_status?: string | undefined
                transaction_amount?: string | undefined
                transaction_currency?: string | undefined
                start_date: string
                end_date: string
                payment_instrument_type?: string | undefined
                store_id?: string | undefined
                terminal_id?: string | undefined
                fields?: string | undefined
                balance_affecting_records_only?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                transaction_type?: string | undefined
                transaction_status?: string | undefined
                transaction_amount?: string | undefined
                transaction_currency?: string | undefined
                start_date: string
                end_date: string
                payment_instrument_type?: string | undefined
                store_id?: string | undefined
                terminal_id?: string | undefined
                fields?: string | undefined
                balance_affecting_records_only?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
              }
            }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/reporting/balances': {
      $get:
        | {
            input: {
              query: { as_of_time?: string | undefined; currency_code?: string | undefined }
            }
            output: BalancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { as_of_time?: string | undefined; currency_code?: string | undefined }
            }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { as_of_time?: string | undefined; currency_code?: string | undefined }
            }
            output: Error_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { as_of_time?: string | undefined; currency_code?: string | undefined }
            }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: { as_of_time?: string | undefined; currency_code?: string | undefined }
            }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
