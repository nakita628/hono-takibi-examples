type Address = {
  attention?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
  organization_name?: string | undefined
  phone?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
  street_address?: string | undefined
  street_address2?: string | undefined
  title?: string | undefined
}
type Customer = {
  date_of_birth?: string | undefined
  gender?: string | undefined
  last_four_ssn?: string | undefined
  national_identification_number?: string | undefined
  organization_entity_type?:
    | 'LIMITED_COMPANY'
    | 'PUBLIC_LIMITED_COMPANY'
    | 'ENTREPRENEURIAL_COMPANY'
    | 'LIMITED_PARTNERSHIP_LIMITED_COMPANY'
    | 'LIMITED_PARTNERSHIP'
    | 'GENERAL_PARTNERSHIP'
    | 'REGISTERED_SOLE_TRADER'
    | 'SOLE_TRADER'
    | 'CIVIL_LAW_PARTNERSHIP'
    | 'PUBLIC_INSTITUTION'
    | 'OTHER'
    | undefined
  organization_registration_id?: string | undefined
  title?: string | undefined
  type?: string | undefined
  vat_id?: string | undefined
}
type CustomerTokenCreationRequest = {
  billing_address?: Address | undefined
  customer?: Customer | undefined
  description: string
  intended_use: 'SUBSCRIPTION'
  locale: string
  purchase_country: string
  purchase_currency: string
}
type CustomerReadCreateToken = { date_of_birth?: string | undefined; gender?: string | undefined }
type CustomerTokenCreationResponse = {
  billing_address?: Address | undefined
  customer?: CustomerReadCreateToken | undefined
  payment_method_reference?: string | undefined
  redirect_url?: string | undefined
  token_id: string
}
type AuthorizedPaymentMethod = {
  number_of_days?: number | undefined
  number_of_installments?: number | undefined
  type:
    | 'invoice'
    | 'fixed_amount'
    | 'base_account'
    | 'direct_debit'
    | 'direct_bank_transfer'
    | 'b2b_invoice'
    | 'card'
    | 'slice_it_by_card'
    | 'pay_later_by_card'
    | 'pay_by_card'
    | 'fixed_sum_credit'
}
type ErrorV2 = {
  authorized_payment_method?: AuthorizedPaymentMethod | undefined
  correlation_id?: string | undefined
  error_code?: string | undefined
  error_messages?: string[] | undefined
  fraud_status?: string | undefined
  reason?: string | undefined
}
type MerchantUrls = {
  authorization?: string | undefined
  confirmation?: string | undefined
  notification?: string | undefined
  push?: string | undefined
}
type ProductIdentifiers = {
  brand?: string | undefined
  category_path?: string | undefined
  color?: string | undefined
  global_trade_item_number?: string | undefined
  manufacturer_part_number?: string | undefined
  size?: string | undefined
}
type Subscription = {
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'
  interval_count: number
  name: string
}
type OrderLine = {
  image_url?: string | undefined
  merchant_data?: string | undefined
  name: string
  product_identifiers?: ProductIdentifiers | undefined
  product_url?: string | undefined
  quantity: bigint
  quantity_unit?: string | undefined
  reference?: string | undefined
  subscription?: Subscription | undefined
  tax_rate?: bigint | undefined
  total_amount: bigint
  total_discount_amount?: bigint | undefined
  total_tax_amount?: bigint | undefined
  type?: string | undefined
  unit_price: bigint
}
type AssetUrls = { descriptive?: string | undefined; standard?: string | undefined }
type PaymentMethodCategory = {
  asset_urls?: AssetUrls | undefined
  identifier?: string | undefined
  name?: string | undefined
}
type CreateOrderRequest = {
  authorization_token?: string | undefined
  auto_capture?: boolean | undefined
  billing_address?: Address | undefined
  custom_payment_method_ids?: string[] | undefined
  customer?: Customer | undefined
  locale?: string | undefined
  merchant_data?: string | undefined
  merchant_reference1?: string | undefined
  merchant_reference2?: string | undefined
  merchant_urls?: MerchantUrls | undefined
  order_amount: bigint
  order_lines: OrderLine[]
  order_tax_amount?: bigint | undefined
  payment_method_categories?: PaymentMethodCategory[] | undefined
  purchase_country: string
  purchase_currency: string
  shipping_address?: Address | undefined
  status?: 'complete' | 'incomplete' | undefined
}
type Order = {
  authorized_payment_method?: AuthorizedPaymentMethod | undefined
  fraud_status?: string | undefined
  order_id: string
  redirect_url?: string | undefined
}
type Attachment = { body: string; content_type: string }
type Options = {
  color_border?: string | undefined
  color_border_selected?: string | undefined
  color_details?: string | undefined
  color_text?: string | undefined
  radius_border?: string | undefined
}
type SessionCreate = {
  acquiring_channel?: 'ECOMMERCE' | 'IN_STORE' | 'TELESALES' | undefined
  attachment?: Attachment | undefined
  authorization_token?: string | undefined
  billing_address?: Address | undefined
  client_token?: string | undefined
  custom_payment_method_ids?: string[] | undefined
  customer?: Customer | undefined
  design?: string | undefined
  expires_at?: string | undefined
  intent?: 'buy' | 'tokenize' | 'buy_and_tokenize' | undefined
  locale?: string | undefined
  merchant_data?: string | undefined
  merchant_reference1?: string | undefined
  merchant_reference2?: string | undefined
  merchant_urls?: MerchantUrls | undefined
  options?: Options | undefined
  order_amount: bigint
  order_lines: OrderLine[]
  order_tax_amount?: bigint | undefined
  payment_method_categories?: PaymentMethodCategory[] | undefined
  purchase_country: string
  purchase_currency: string
  shipping_address?: Address | undefined
  status?: 'complete' | 'incomplete' | undefined
}
type MerchantSession = {
  client_token: string
  payment_method_categories?: PaymentMethodCategory[] | undefined
  session_id: string
}
type CustomerRead = {
  date_of_birth?: string | undefined
  gender?: string | undefined
  organization_entity_type?:
    | 'LIMITED_COMPANY'
    | 'PUBLIC_LIMITED_COMPANY'
    | 'ENTREPRENEURIAL_COMPANY'
    | 'LIMITED_PARTNERSHIP_LIMITED_COMPANY'
    | 'LIMITED_PARTNERSHIP'
    | 'GENERAL_PARTNERSHIP'
    | 'REGISTERED_SOLE_TRADER'
    | 'SOLE_TRADER'
    | 'CIVIL_LAW_PARTNERSHIP'
    | 'PUBLIC_INSTITUTION'
    | 'OTHER'
    | undefined
  organization_registration_id?: string | undefined
  title?: string | undefined
  type?: string | undefined
  vat_id?: string | undefined
}
type SessionRead = {
  acquiring_channel?: 'ECOMMERCE' | 'IN_STORE' | 'TELESALES' | undefined
  attachment?: Attachment | undefined
  authorization_token?: string | undefined
  billing_address?: Address | undefined
  client_token?: string | undefined
  custom_payment_method_ids?: string[] | undefined
  customer?: CustomerRead | undefined
  design?: string | undefined
  expires_at?: string | undefined
  intent?: 'buy' | 'tokenize' | 'buy_and_tokenize' | undefined
  locale?: string | undefined
  merchant_data?: string | undefined
  merchant_reference1?: string | undefined
  merchant_reference2?: string | undefined
  merchant_urls?: MerchantUrls | undefined
  options?: Options | undefined
  order_amount?: bigint | undefined
  order_lines?: OrderLine[] | undefined
  order_tax_amount?: bigint | undefined
  payment_method_categories?: PaymentMethodCategory[] | undefined
  purchase_country?: string | undefined
  purchase_currency?: string | undefined
  shipping_address?: Address | undefined
  status?: 'complete' | 'incomplete' | undefined
}
type Session = {
  acquiring_channel?: 'ECOMMERCE' | 'IN_STORE' | 'TELESALES' | undefined
  attachment?: Attachment | undefined
  authorization_token?: string | undefined
  billing_address?: Address | undefined
  client_token?: string | undefined
  custom_payment_method_ids?: string[] | undefined
  customer?: Customer | undefined
  design?: string | undefined
  expires_at?: string | undefined
  intent?: 'buy' | 'tokenize' | 'buy_and_tokenize' | undefined
  locale?: string | undefined
  merchant_data?: string | undefined
  merchant_reference1?: string | undefined
  merchant_reference2?: string | undefined
  merchant_urls?: MerchantUrls | undefined
  options?: Options | undefined
  order_amount?: bigint | undefined
  order_lines?: OrderLine[] | undefined
  order_tax_amount?: bigint | undefined
  payment_method_categories?: PaymentMethodCategory[] | undefined
  purchase_country?: string | undefined
  purchase_currency?: string | undefined
  shipping_address?: Address | undefined
  status?: 'complete' | 'incomplete' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/payments/v1/authorizations/:authorizationToken': {
      $delete:
        | {
            input: { param: { authorizationToken: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { authorizationToken: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { authorizationToken: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payments/v1/authorizations/:authorizationToken/customer-token': {
      $post:
        | {
            input: { param: { authorizationToken: string } } & {
              json: CustomerTokenCreationRequest
            }
            output: CustomerTokenCreationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorizationToken: string } } & {
              json: CustomerTokenCreationRequest
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { authorizationToken: string } } & {
              json: CustomerTokenCreationRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { authorizationToken: string } } & {
              json: CustomerTokenCreationRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { authorizationToken: string } } & {
              json: CustomerTokenCreationRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/payments/v1/authorizations/:authorizationToken/order': {
      $post:
        | {
            input: { param: { authorizationToken: string } } & { json: CreateOrderRequest }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorizationToken: string } } & { json: CreateOrderRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { authorizationToken: string } } & { json: CreateOrderRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { authorizationToken: string } } & { json: CreateOrderRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { authorizationToken: string } } & { json: CreateOrderRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/payments/v1/sessions': {
      $post:
        | {
            input: { json: SessionCreate }
            output: MerchantSession
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SessionCreate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SessionCreate }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/payments/v1/sessions/:session_id': {
      $get:
        | {
            input: { param: { session_id: string } }
            output: SessionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { session_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { session_id: string } } & { json: Session }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { session_id: string } } & { json: Session }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: Session }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: Session }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
