type MerchantPartnerCustomerId = string
type DateYearMonth = string
type CardBrand =
  | 'VISA'
  | 'MASTERCARD'
  | 'DISCOVER'
  | 'AMEX'
  | 'SOLO'
  | 'JCB'
  | 'STAR'
  | 'DELTA'
  | 'SWITCH'
  | 'MAESTRO'
  | 'CB_NATIONALE'
  | 'CONFIGOGA'
  | 'CONFIDIS'
  | 'ELECTRON'
  | 'CETELEM'
  | 'CHINA_UNION_PAY'
  | 'DINERS'
  | 'ELO'
  | 'HIPER'
  | 'HIPERCARD'
  | 'RUPAY'
  | 'GE'
  | 'SYNCHRONY'
  | 'EFTPOS'
  | 'UNKNOWN'
type CountryCode = string
type NetworkTransactionReferenceRequest = { [x: string]: unknown }
type TokenIdRequest = { id: string; type: 'SETUP_TOKEN' }
type DefinitionsPaymentSource = {
  card?:
    | {
        name?: string | undefined
        number?: string | undefined
        expiry?: DateYearMonth | undefined
        security_code?: string | undefined
        brand?: CardBrand | undefined
        billing_address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
            }
          | undefined
        network_transaction_reference?: NetworkTransactionReferenceRequest | undefined
      }
    | undefined
  token?: TokenIdRequest | undefined
}
type PaymentTokenRequest = {
  customer?:
    | { id?: MerchantPartnerCustomerId | undefined; merchant_customer_id?: string | undefined }
    | undefined
  payment_source: DefinitionsPaymentSource
}
type VaultId = string
type Customer = {
  id?: MerchantPartnerCustomerId | undefined
  merchant_customer_id?: string | undefined
}
type CardVerificationStatus = 'VERIFIED' | 'FAILED'
type DateTime = string
type CurrencyCode = string
type Money = { currency_code: CurrencyCode; value: string }
type CardVerificationDetails = {
  network_transaction_id?: string | undefined
  date?: string | undefined
  network?: CardBrand | undefined
  time?: DateTime | undefined
  amount?: Money | undefined
  processor_response?:
    | {
        avs_code?:
          | 'A'
          | 'B'
          | 'C'
          | 'D'
          | 'E'
          | 'F'
          | 'G'
          | 'I'
          | 'M'
          | 'N'
          | 'P'
          | 'R'
          | 'S'
          | 'U'
          | 'W'
          | 'X'
          | 'Y'
          | 'Z'
          | 'Null'
          | '0'
          | '1'
          | '2'
          | '3'
          | '4'
          | undefined
        cvv_code?:
          | 'E'
          | 'I'
          | 'M'
          | 'N'
          | 'P'
          | 'S'
          | 'U'
          | 'X'
          | 'All others'
          | '0'
          | '1'
          | '2'
          | '3'
          | '4'
          | undefined
      }
    | undefined
  three_d_secure?: { [x: string]: unknown } | undefined
}
type NetworkTransactionReferenceResponse = {
  id: string
  date?: string | undefined
  network?: CardBrand | undefined
  time?: DateTime | undefined
}
type ParesStatus = 'Y' | 'N' | 'U' | 'A' | 'C' | 'R' | 'D' | 'I'
type Enrolled = 'Y' | 'N' | 'U' | 'B'
type ThreeDSecureAuthenticationResponse_2 = {
  authentication_status?: ParesStatus | undefined
  enrollment_status?: Enrolled | undefined
  authentication_id?: string | undefined
}
type CountryCode_2 = string
type Products = string
type ProductsList = Products[]
type BinDetails = {
  bin?: string | undefined
  issuing_bank?: string | undefined
  bin_country_code?: CountryCode_2 | undefined
  products?: ProductsList | undefined
}
type CardType = 'CREDIT' | 'DEBIT' | 'PREPAID' | 'STORE' | 'UNKNOWN'
type NetworkTokenEntity = { [x: string]: unknown }
type CardResponse = {
  name?: string | undefined
  last_digits?: string | undefined
  brand?: CardBrand | undefined
  expiry?: DateYearMonth | undefined
  billing_address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
        id?: string | undefined
      }
    | undefined
  verification_status?: CardVerificationStatus | undefined
  verification?: CardVerificationDetails | undefined
  network_transaction_reference?: NetworkTransactionReferenceResponse | undefined
  authentication_result?:
    | { three_d_secure?: ThreeDSecureAuthenticationResponse_2 | undefined }
    | undefined
  bin_details?: BinDetails | undefined
  type?: CardType | undefined
  network_token?: NetworkTokenEntity | undefined
}
type Email = string
type AccountId = string
type PhoneType = 'FAX' | 'HOME' | 'MOBILE' | 'OTHER' | 'PAGER'
type PhoneWithType = {
  phone_type?: PhoneType | undefined
  phone_number: { national_number: string }
}
type Phone = {
  country_code: string
  national_number: string
  extension_number?: string | undefined
}
type PaypalWalletResponse = {
  description?: string | undefined
  usage_pattern?:
    | 'IMMEDIATE'
    | 'DEFERRED'
    | 'RECURRING_PREPAID'
    | 'RECURRING_POSTPAID'
    | 'THRESHOLD_PREPAID'
    | 'THRESHOLD_POSTPAID'
    | 'UNSCHEDULED_POSTPAID'
    | 'UNSCHEDULED_PREPAID'
    | 'SUBSCRIPTION_PREPAID'
    | 'SUBSCRIPTION_POSTPAID'
    | 'INSTALLMENT_POSTPAID'
    | 'INSTALLMENT_PREPAID'
    | undefined
  shipping?:
    | {
        name?: { full_name?: string | undefined } | undefined
        phone_number?: { country_code: string; national_number: string } | undefined
        type?:
          | 'SHIPPING'
          | 'PICKUP_IN_PERSON'
          | 'PICKUP_IN_STORE'
          | 'PICKUP_FROM_PERSON'
          | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
            }
          | undefined
      }
    | undefined
  permit_multiple_payment_tokens?: boolean | undefined
  usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
  customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
  email_address?: Email | undefined
  payer_id?: AccountId | undefined
  name?: { given_name?: string | undefined; surname?: string | undefined } | undefined
  phone?: PhoneWithType | undefined
  address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
      }
    | undefined
  account_id?: AccountId | undefined
  phone_number?: Phone | undefined
}
type VenmoResponse = {
  description?: string | undefined
  usage_pattern?:
    | 'IMMEDIATE'
    | 'DEFERRED'
    | 'RECURRING_PREPAID'
    | 'RECURRING_POSTPAID'
    | 'THRESHOLD_PREPAID'
    | 'THRESHOLD_POSTPAID'
    | 'UNSCHEDULED_POSTPAID'
    | 'UNSCHEDULED_PREPAID'
    | 'SUBSCRIPTION_PREPAID'
    | 'SUBSCRIPTION_POSTPAID'
    | 'INSTALLMENT_POSTPAID'
    | 'INSTALLMENT_PREPAID'
    | undefined
  shipping?:
    | {
        name?: { full_name?: string | undefined } | undefined
        phone_number?: { country_code: string; national_number: string } | undefined
        type?:
          | 'SHIPPING'
          | 'PICKUP_IN_PERSON'
          | 'PICKUP_IN_STORE'
          | 'PICKUP_FROM_PERSON'
          | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
            }
          | undefined
      }
    | undefined
  permit_multiple_payment_tokens?: boolean | undefined
  usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
  customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
  email_address?: Email | undefined
  payer_id?: AccountId | undefined
  name?: { given_name?: string | undefined; surname?: string | undefined } | undefined
  phone?: PhoneWithType | undefined
  address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
      }
    | undefined
  user_name?: string | undefined
}
type ApplePayPaymentTokenResponse = {
  card?:
    | {
        name?: string | undefined
        last_digits?: string | undefined
        type?: CardType | undefined
        brand?: CardBrand | undefined
        billing_address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
            }
          | undefined
      }
    | undefined
}
type PaymentSource = {
  card?: CardResponse | undefined
  paypal?: PaypalWalletResponse | undefined
  venmo?: VenmoResponse | undefined
  apple_pay?: ApplePayPaymentTokenResponse | undefined
}
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type LinkDescriptionList = LinkDescription[]
type PaymentTokenResponse = {
  id?: VaultId | undefined
  customer?: Customer | undefined
  payment_source?: PaymentSource | undefined
  links?: LinkDescriptionList | undefined
}
type DefinitionsLinkDescriptionList = LinkDescription[]
type ErrorDetails_2 = {
  field?: string | undefined
  value?: string | undefined
  location?: string | undefined
  issue: string
  links?: DefinitionsLinkDescriptionList | undefined
  description?: string | undefined
}
type ErrorDetailsList = ErrorDetails_2[]
type ErrorDefinitionsLinkDescriptionList = LinkDescription[]
type Error = {
  name: string
  message: string
  debug_id: string
  details?: ErrorDetailsList | undefined
  links?: ErrorDefinitionsLinkDescriptionList | undefined
}
type PaymentTokenResponseList = PaymentTokenResponse[]
type CustomerVaultPaymentTokensResponse = {
  total_items?: number | undefined
  total_pages?: number | undefined
  customer?:
    | { id?: MerchantPartnerCustomerId | undefined; merchant_customer_id?: string | undefined }
    | undefined
  payment_tokens?: PaymentTokenResponseList | undefined
  links?: LinkDescriptionList | undefined
}
type CardVerificationMethod = 'SCA_WHEN_REQUIRED' | 'SCA_ALWAYS'
type Language = string
type VaultInstruction = 'ON_CREATE_PAYMENT_TOKENS' | 'ON_PAYER_APPROVAL'
type PricingScheme = {
  price?: Money | undefined
  pricing_model: 'FIXED' | 'VARIABLE' | 'AUTO_RELOAD'
  reload_threshold_amount?: Money | undefined
}
type Frequency = { [x: string]: unknown }
type DateNoTime = string
type BillingCycle = {
  tenure_type: 'REGULAR' | 'TRIAL'
  pricing_scheme?: PricingScheme | undefined
  frequency?: Frequency | undefined
  total_cycles?: number | undefined
  sequence?: number | undefined
  start_date?: DateNoTime | undefined
}
type BillingCycleList = BillingCycle[]
type ProductOverride = { [x: string]: unknown }
type OneTimeCharges = {
  setup_fee?: Money | undefined
  shipping_amount?: Money | undefined
  taxes?: Money | undefined
  product_price?: Money | undefined
  subtotal?: Money | undefined
  total_amount: Money
}
type Plan = {
  billing_cycles: BillingCycleList
  product?: ProductOverride | undefined
  one_time_charges: OneTimeCharges
  name?: string | undefined
}
type ExperienceContext = {
  brand_name?: string | undefined
  locale?: Language | undefined
  return_url?: string | undefined
  cancel_url?: string | undefined
  shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
  vault_instruction?: VaultInstruction | undefined
}
type PaypalWalletRequest = {
  description?: string | undefined
  usage_pattern?:
    | 'IMMEDIATE'
    | 'DEFERRED'
    | 'RECURRING_PREPAID'
    | 'RECURRING_POSTPAID'
    | 'THRESHOLD_PREPAID'
    | 'THRESHOLD_POSTPAID'
    | 'UNSCHEDULED_POSTPAID'
    | 'UNSCHEDULED_PREPAID'
    | 'SUBSCRIPTION_PREPAID'
    | 'SUBSCRIPTION_POSTPAID'
    | 'INSTALLMENT_POSTPAID'
    | 'INSTALLMENT_PREPAID'
    | undefined
  shipping?:
    | {
        name?: { full_name?: string | undefined } | undefined
        phone_number?: { country_code: string; national_number: string } | undefined
        type?:
          | 'SHIPPING'
          | 'PICKUP_IN_PERSON'
          | 'PICKUP_IN_STORE'
          | 'PICKUP_FROM_PERSON'
          | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
            }
          | undefined
      }
    | undefined
  permit_multiple_payment_tokens?: boolean | undefined
  usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
  customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
  billing_plan?: Plan | undefined
  experience_context?: ExperienceContext | undefined
}
type VenmoRequest = {
  description?: string | undefined
  usage_pattern?:
    | 'IMMEDIATE'
    | 'DEFERRED'
    | 'RECURRING_PREPAID'
    | 'RECURRING_POSTPAID'
    | 'THRESHOLD_PREPAID'
    | 'THRESHOLD_POSTPAID'
    | 'UNSCHEDULED_POSTPAID'
    | 'UNSCHEDULED_PREPAID'
    | 'SUBSCRIPTION_PREPAID'
    | 'SUBSCRIPTION_POSTPAID'
    | 'INSTALLMENT_POSTPAID'
    | 'INSTALLMENT_PREPAID'
    | undefined
  shipping?:
    | {
        name?: { full_name?: string | undefined } | undefined
        phone_number?: { country_code: string; national_number: string } | undefined
        type?:
          | 'SHIPPING'
          | 'PICKUP_IN_PERSON'
          | 'PICKUP_IN_STORE'
          | 'PICKUP_FROM_PERSON'
          | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
            }
          | undefined
      }
    | undefined
  permit_multiple_payment_tokens?: boolean | undefined
  usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
  customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
  experience_context?:
    | {
        brand_name?: string | undefined
        shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
        vault_instruction?: VaultInstruction | undefined
      }
    | undefined
}
type SetupTokenRequest = {
  customer?:
    | { id?: MerchantPartnerCustomerId | undefined; merchant_customer_id?: string | undefined }
    | undefined
  payment_source: {
    card?:
      | {
          name?: string | undefined
          number?: string | undefined
          expiry?: DateYearMonth | undefined
          security_code?: string | undefined
          brand?: CardBrand | undefined
          billing_address?:
            | {
                address_line_1?: string | undefined
                address_line_2?: string | undefined
                admin_area_2?: string | undefined
                admin_area_1?: string | undefined
                postal_code?: string | undefined
                country_code: CountryCode
              }
            | undefined
          verification_method?: CardVerificationMethod | undefined
          experience_context?:
            | {
                brand_name?: string | undefined
                locale?: Language | undefined
                return_url?: string | undefined
                cancel_url?: string | undefined
                vault_instruction?: VaultInstruction | undefined
              }
            | undefined
          network_transaction_reference?: NetworkTransactionReferenceRequest | undefined
        }
      | undefined
    paypal?: PaypalWalletRequest | undefined
    venmo?: VenmoRequest | undefined
    token?: TokenIdRequest | undefined
  }
}
type PaymentTokenStatus = 'CREATED' | 'PAYER_ACTION_REQUIRED' | 'APPROVED' | 'VAULTED' | 'TOKENIZED'
type SetupTokenResponse = {
  id?: VaultId | undefined
  customer?:
    | { id?: MerchantPartnerCustomerId | undefined; merchant_customer_id?: string | undefined }
    | undefined
  status?: PaymentTokenStatus | undefined
  payment_source?:
    | {
        card?:
          | {
              name?: string | undefined
              last_digits?: string | undefined
              brand?: CardBrand | undefined
              expiry?: DateYearMonth | undefined
              billing_address?:
                | {
                    address_line_1?: string | undefined
                    address_line_2?: string | undefined
                    admin_area_2?: string | undefined
                    admin_area_1?: string | undefined
                    postal_code?: string | undefined
                    country_code: CountryCode
                    id?: string | undefined
                  }
                | undefined
              verification_status?: CardVerificationStatus | undefined
              verification?: CardVerificationDetails | undefined
              network_transaction_reference?: NetworkTransactionReferenceResponse | undefined
              authentication_result?:
                | { three_d_secure?: ThreeDSecureAuthenticationResponse_2 | undefined }
                | undefined
              bin_details?: BinDetails | undefined
              type?: CardType | undefined
            }
          | undefined
        paypal?: PaypalWalletResponse | undefined
        venmo?: VenmoResponse | undefined
      }
    | undefined
  links?: LinkDescriptionList | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/vault/payment-tokens': {
      $post:
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: PaymentTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: PaymentTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: PaymentTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                customer_id: string
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: CustomerVaultPaymentTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                customer_id: string
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                customer_id: string
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                customer_id: string
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v3/vault/payment-tokens/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v3/vault/setup-tokens': {
      $post:
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: SetupTokenRequest
            }
            output: SetupTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: SetupTokenRequest
            }
            output: SetupTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: SetupTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: SetupTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: SetupTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'PayPal-Request-Id'?: string | undefined } } & {
              json: SetupTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v3/vault/setup-tokens/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SetupTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  },
  '/'
>
export default routes
