type CurrencyCode = string
type Money = { currency_code: CurrencyCode; value: string }
type PricingTier = {
  starting_quantity: string
  ending_quantity?: string | undefined
  amount: Money
}
type PricingTierList = PricingTier[]
type DateTime = string
type PricingScheme = {
  version?: number | undefined
  fixed_price?: Money | undefined
  pricing_model?: 'VOLUME' | 'TIERED' | undefined
  tiers?: PricingTierList | undefined
  create_time?: DateTime | undefined
  update_time?: DateTime | undefined
}
type Frequency = {
  interval_unit: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'
  interval_count?: number | undefined
}
type BillingCycle = {
  pricing_scheme?: PricingScheme | undefined
  frequency: Frequency
  tenure_type: 'REGULAR' | 'TRIAL'
  sequence: number
  total_cycles?: number | undefined
}
type BillingCycleList = BillingCycle[]
type PaymentPreferences = {
  auto_bill_outstanding?: boolean | undefined
  setup_fee?: Money | undefined
  setup_fee_failure_action?: 'CONTINUE' | 'CANCEL' | undefined
  payment_failure_threshold?: number | undefined
}
type Percentage = string
type Taxes = { percentage: Percentage; inclusive?: boolean | undefined }
type PlanRequestPOST = {
  product_id: string
  name: string
  status?: 'CREATED' | 'INACTIVE' | 'ACTIVE' | undefined
  description?: string | undefined
  billing_cycles: BillingCycleList
  payment_preferences: PaymentPreferences
  taxes?: Taxes | undefined
  quantity_supported?: boolean | undefined
}
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type LinkDescriptionList = LinkDescription[]
type Plan = {
  id?: string | undefined
  product_id?: string | undefined
  name?: string | undefined
  status?: 'CREATED' | 'INACTIVE' | 'ACTIVE' | undefined
  description?: string | undefined
  billing_cycles?: BillingCycleList | undefined
  payment_preferences?: PaymentPreferences | undefined
  taxes?: Taxes | undefined
  quantity_supported?: boolean | undefined
  create_time?: DateTime | undefined
  update_time?: DateTime | undefined
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
type Error_500 = {
  name?: 'INTERNAL_SERVER_ERROR' | undefined
  message?: 'An internal server error occurred.' | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
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
type PlanList = Plan[]
type PlanCollection = {
  plans?: PlanList | undefined
  total_items?: number | undefined
  total_pages?: number | undefined
  links?: LinkDescriptionList | undefined
}
type Patch = {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path?: string | undefined
  value?: { [x: string]: unknown } | undefined
  from?: string | undefined
}
type PatchRequest = Patch[]
type UpdatePricingSchemeRequest = { billing_cycle_sequence: number; pricing_scheme: PricingScheme }
type UpdatePricingSchemeRequestList = UpdatePricingSchemeRequest[]
type UpdatePricingSchemesListRequest = { pricing_schemes: UpdatePricingSchemeRequestList }
type Email = string
type AccountId = string
type PhoneType = 'FAX' | 'HOME' | 'MOBILE' | 'OTHER' | 'PAGER'
type PhoneWithType = {
  phone_type?: PhoneType | undefined
  phone_number: { national_number: string }
}
type ShippingType = 'SHIPPING' | 'PICKUP' | 'PICKUP_IN_STORE' | 'PICKUP_FROM_PERSON'
type ShippingOption = {
  id: string
  label: string
  type?: ShippingType | undefined
  amount?: Money | undefined
  selected: boolean
}
type ShippingOptionList = ShippingOption[]
type CountryCode = string
type ShippingDetail = {
  name?: { full_name?: string | undefined } | undefined
  type?: 'SHIPPING' | 'PICKUP_IN_PERSON' | 'PICKUP_IN_STORE' | 'PICKUP_FROM_PERSON' | undefined
  options?: ShippingOptionList | undefined
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
type DateYearMonth = string
type CardType = 'CREDIT' | 'DEBIT' | 'PREPAID' | 'STORE' | 'UNKNOWN'
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
  | 'UNKNOWN'
type MerchantPartnerCustomerId = string
type Customer = {
  id?: MerchantPartnerCustomerId | undefined
  email_address?: Email | undefined
  phone?: PhoneWithType | undefined
}
type StoreInVaultInstruction = 'ON_SUCCESS'
type VaultInstructionBase = { store_in_vault?: StoreInVaultInstruction | undefined }
type CardVerification = {
  method?: 'SCA_ALWAYS' | 'SCA_WHEN_REQUIRED' | '3D_SECURE' | 'AVS_CVV' | undefined
}
type CardAttributes = {
  customer?: Customer | undefined
  vault?: VaultInstructionBase | undefined
  verification?: CardVerification | undefined
}
type PaymentSource = {
  card?:
    | {
        name?: string | undefined
        number?: string | undefined
        expiry?: DateYearMonth | undefined
        security_code?: string | undefined
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
        attributes?: CardAttributes | undefined
      }
    | undefined
}
type SubscriberRequest = {
  email_address?: Email | undefined
  payer_id?: AccountId | undefined
  name?: { given_name?: string | undefined; surname?: string | undefined } | undefined
  phone?: PhoneWithType | undefined
  shipping_address?: ShippingDetail | undefined
  payment_source?: PaymentSource | undefined
}
type Language = string
type PayeePaymentMethodPreference = 'UNRESTRICTED' | 'IMMEDIATE_PAYMENT_REQUIRED'
type ApplicationContext = {
  brand_name?: string | undefined
  locale?: Language | undefined
  shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
  user_action?: 'CONTINUE' | 'SUBSCRIBE_NOW' | undefined
  payment_method?: { payee_preferred?: PayeePaymentMethodPreference | undefined } | undefined
  return_url: string
  cancel_url: string
}
type BillingCycleOverride = {
  pricing_scheme?: PricingScheme | undefined
  sequence: number
  total_cycles?: number | undefined
}
type BillingCycleOverrideList = BillingCycleOverride[]
type PaymentPreferencesOverride = {
  auto_bill_outstanding?: boolean | undefined
  setup_fee?: Money | undefined
  setup_fee_failure_action?: 'CONTINUE' | 'CANCEL' | undefined
  payment_failure_threshold?: number | undefined
}
type TaxesOverride = { percentage?: Percentage | undefined; inclusive?: boolean | undefined }
type PlanOverride = {
  billing_cycles?: BillingCycleOverrideList | undefined
  payment_preferences?: PaymentPreferencesOverride | undefined
  taxes?: TaxesOverride | undefined
}
type MerchantInventory = { [x: string]: unknown }
type SubscriptionRequestPost = {
  plan_id: string
  start_time?: DateTime | undefined
  quantity?: string | undefined
  shipping_amount?: Money | undefined
  subscriber?: SubscriberRequest | undefined
  auto_renewal?: boolean | undefined
  application_context?: ApplicationContext | undefined
  custom_id?: string | undefined
  plan?: PlanOverride | undefined
  merchant_inventory?: MerchantInventory | undefined
}
type CardBrandList = CardBrand[]
type LiabilityShift = 'NO' | 'POSSIBLE' | 'UNKNOWN'
type ParesStatus = 'Y' | 'N' | 'U' | 'A' | 'C' | 'R' | 'D' | 'I'
type Enrolled = 'Y' | 'N' | 'U' | 'B'
type ThreeDSecureAuthenticationResponse = {
  authentication_status?: ParesStatus | undefined
  enrollment_status?: Enrolled | undefined
}
type AuthenticationResponse = {
  liability_shift?: LiabilityShift | undefined
  three_d_secure?: ThreeDSecureAuthenticationResponse | undefined
}
type DefinitionsLinkDescriptionList = LinkDescription[]
type VaultResponse = {
  id?: string | undefined
  status?: 'VAULTED' | 'CREATED' | 'APPROVED' | undefined
  customer?: { id?: MerchantPartnerCustomerId | undefined } | undefined
  links?: DefinitionsLinkDescriptionList | undefined
}
type CardAttributesResponse = { vault?: VaultResponse | undefined }
type CardFromRequest = { expiry?: DateYearMonth | undefined; last_digits?: string | undefined }
type CountryCode_2 = string
type Products = string
type ProductsList = Products[]
type BinDetails = {
  bin?: string | undefined
  issuing_bank?: string | undefined
  bin_country_code?: CountryCode_2 | undefined
  products?: ProductsList | undefined
}
type CardResponseWithBillingAddress = {
  name?: string | undefined
  last_digits?: string | undefined
  brand?: CardBrand | undefined
  available_networks?: CardBrandList | undefined
  type?: CardType | undefined
  authentication_result?: AuthenticationResponse | undefined
  attributes?: CardAttributesResponse | undefined
  from_request?: CardFromRequest | undefined
  expiry?: DateYearMonth | undefined
  bin_details?: BinDetails | undefined
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
  currency_code?: CurrencyCode | undefined
}
type PaymentSourceResponse = { card?: CardResponseWithBillingAddress | undefined }
type Subscriber = {
  email_address?: Email | undefined
  payer_id?: AccountId | undefined
  name?: { given_name?: string | undefined; surname?: string | undefined } | undefined
  phone?: PhoneWithType | undefined
  shipping_address?: ShippingDetail | undefined
  payment_source?: PaymentSourceResponse | undefined
}
type CycleExecution = {
  tenure_type: 'REGULAR' | 'TRIAL'
  sequence: number
  cycles_completed: number
  cycles_remaining?: number | undefined
  current_pricing_scheme_version?: number | undefined
  total_cycles?: number | undefined
}
type CycleExecutionList = CycleExecution[]
type LastPaymentDetails = { amount?: Money | undefined; time?: DateTime | undefined }
type FailedPaymentDetails = {
  amount: Money
  time: DateTime
  reason_code?:
    | 'PAYMENT_DENIED'
    | 'INTERNAL_SERVER_ERROR'
    | 'PAYEE_ACCOUNT_RESTRICTED'
    | 'PAYER_ACCOUNT_RESTRICTED'
    | 'PAYER_CANNOT_PAY'
    | 'SENDING_LIMIT_EXCEEDED'
    | 'TRANSACTION_RECEIVING_LIMIT_EXCEEDED'
    | 'CURRENCY_MISMATCH'
    | undefined
  next_payment_retry_time?: DateTime | undefined
}
type SubscriptionBillingInfo = {
  outstanding_balance: Money
  cycle_executions?: CycleExecutionList | undefined
  last_payment?: LastPaymentDetails | undefined
  next_billing_time?: DateTime | undefined
  final_payment_time?: DateTime | undefined
  failed_payments_count: number
  last_failed_payment?: FailedPaymentDetails | undefined
}
type Subscription = {
  status?:
    | 'APPROVAL_PENDING'
    | 'APPROVED'
    | 'ACTIVE'
    | 'SUSPENDED'
    | 'CANCELLED'
    | 'EXPIRED'
    | undefined
  status_change_note?: string | undefined
  status_update_time?: DateTime | undefined
  id?: string | undefined
  plan_id?: string | undefined
  start_time?: DateTime | undefined
  quantity?: string | undefined
  shipping_amount?: Money | undefined
  subscriber?: Subscriber | undefined
  billing_info?: SubscriptionBillingInfo | undefined
  create_time?: DateTime | undefined
  update_time?: DateTime | undefined
  custom_id?: string | undefined
  plan_overridden?: boolean | undefined
  plan?:
    | {
        product_id?: string | undefined
        name?: string | undefined
        description?: string | undefined
        billing_cycles?: BillingCycleList | undefined
        payment_preferences?: PaymentPreferences | undefined
        taxes?: Taxes | undefined
        quantity_supported?: boolean | undefined
      }
    | undefined
  links?: LinkDescriptionList | undefined
}
type SubscriptionReviseRequest = {
  plan_id?: string | undefined
  quantity?: string | undefined
  shipping_amount?: Money | undefined
  shipping_address?: ShippingDetail | undefined
  application_context?:
    | {
        brand_name?: string | undefined
        locale?: Language | undefined
        shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
        payment_method?: { payee_preferred?: PayeePaymentMethodPreference | undefined } | undefined
        return_url: string
        cancel_url: string
      }
    | undefined
  plan?: PlanOverride | undefined
}
type SubscriptionReviseResponseDefinitionsLinkDescriptionList = LinkDescription[]
type SubscriptionReviseResponse = {
  plan_id?: string | undefined
  quantity?: string | undefined
  shipping_amount?: Money | undefined
  shipping_address?: ShippingDetail | undefined
  plan?: PlanOverride | undefined
  plan_overridden?: boolean | undefined
  links?: SubscriptionReviseResponseDefinitionsLinkDescriptionList | undefined
}
type SubscriptionSuspendRequest = { reason: string }
type SubscriptionCancelRequest = { reason: string }
type SubscriptionActivateRequest = { reason?: string | undefined }
type SubscriptionCaptureRequest = {
  note: string
  capture_type: 'OUTSTANDING_BALANCE'
  amount: Money
}
type AmountWithBreakdown = {
  gross_amount: Money
  total_item_amount?: Money | undefined
  fee_amount?: Money | undefined
  shipping_amount?: Money | undefined
  tax_amount?: Money | undefined
  net_amount?: Money | undefined
}
type Name = {
  prefix?: string | undefined
  given_name?: string | undefined
  surname?: string | undefined
  middle_name?: string | undefined
  suffix?: string | undefined
  full_name?: string | undefined
}
type EmailAddress = string
type Transaction = {
  status?:
    | 'COMPLETED'
    | 'DECLINED'
    | 'PARTIALLY_REFUNDED'
    | 'PENDING'
    | 'REFUNDED'
    | 'FAILED'
    | undefined
  id: string
  amount_with_breakdown: AmountWithBreakdown
  payer_name?: Name | undefined
  payer_email?: EmailAddress | undefined
  time: DateTime
}
type TransactionList = Transaction[]
type TransactionsList = {
  transactions?: TransactionList | undefined
  total_items?: number | undefined
  total_pages?: number | undefined
  links?: LinkDescriptionList | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/billing/plans': {
      $post:
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: Plan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value of a field does not conform to the expected format.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MIN_LENGTH' | undefined
                        description?: 'The value of a field is too short.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'The value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'The integer value of a field is too small.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'The integer value of a field is too large.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'CURRENCY_MISMATCH' | undefined
                        description?:
                          | 'All currency codes in the request should be of similar value.'
                          | undefined
                      }
                    | {
                        issue?: 'MULTIPLE_FREE_TRIAL_BILLING_CYCLES_NOT_SUPPORTED' | undefined
                        description?: 'Only one free trial billing cycle is allowed.' | undefined
                      }
                    | {
                        issue?: 'MORE_THAN_TWO_TRIAL_BILLING_CYCLE_NOT_SUPPORTED' | undefined
                        description?: 'Only two trial billing cycles are allowed.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REGULAR_BILLING_CYCLE' | undefined
                        description?:
                          | 'Plan should have at least one regular billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'MULTIPLE_REGULAR_BILLING_CYCLES_NOT_SUPPORTED' | undefined
                        description?: 'Only one regular billing cycle is allowed.' | undefined
                      }
                    | {
                        issue?: 'INVALID_BILLING_CYCLE_SEQUENCE' | undefined
                        description?:
                          | 'Billing cycle sequence should start with `1` and be consecutive.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_BILLING_CYCLE_SEQUENCE' | undefined
                        description?:
                          | 'Trial Billing cycle should precede regular billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_TRIAL_BILLING_TOTAL_CYCLES' | undefined
                        description?:
                          | "Total cycles for trial billing must be greater than '0'."
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_AMOUNT' | undefined
                        description?: 'Free tiers are not supported.' | undefined
                      }
                    | {
                        issue?: 'MISSING_PRICING_SCHEME_TIERS' | undefined
                        description?: 'Tier(s) are missing for some quantities.' | undefined
                      }
                    | {
                        issue?: 'OVERLAPPING_PRICING_SCHEME_TIERS' | undefined
                        description?:
                          | 'The specified quantity overlaps with multiple pricing tiers.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_MODEL' | undefined
                        description?:
                          | 'The specified pricing model is not supported for trial billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'FIXED_PRICE_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Fixed price is not supported for tiered pricing schemes.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_QUANTITY' | undefined
                        description?:
                          | 'Tier starting quantity must be less than ending quantity.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_QUANTITY_SUPPORTED' | undefined
                        description?:
                          | 'Quantity is always supported for volume and tiered plans.'
                          | undefined
                      }
                    | {
                        issue?: 'CURRENCY_NOT_SUPPORTED_FOR_RECEIVER' | undefined
                        description?:
                          | 'This currency cannot be accepted for this recipient’s account.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_METADATA_CUSTOM_NOTE' | undefined
                        description?:
                          | 'Merchant custom note cannot exceed 255 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_METADATA_INVOICE_ID' | undefined
                        description?: 'Invoice id cannot exceed 127 characters.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: PlanRequestPOST }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: PlanCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_PARAMETER_VALUE' | undefined
                    description?: 'The value of a field is invalid.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                product_id?: string | undefined
                page_size?: number | undefined
                page?: number | undefined
                total_required?: boolean | undefined
              }
            } & { header: { Prefer?: string | undefined } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/plans/:id': {
      $get:
        | { input: { param: { id: string } }; output: Plan; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: Error_500; outputFormat: 'json'; status: 500 }
        | {
            input: { param: { id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'UNSUPPORTED_PATCH_OPERATION' | undefined
                        description?:
                          | 'The specified patch operation not supported for this field.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PATCH_PATH' | undefined
                        description?: 'The specified field cannot be patched.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PATCH_PATH' | undefined
                        description?:
                          | 'Multiple operations on the same field are not allowed.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value of a field does not conform to the expected format.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?:
                          | "The field is not eligible for '$value' patch operation."
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'PLAN_STATUS_INACTIVE' | undefined
                        description?:
                          | 'Status update is the only patchable filed on an inactive plan.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/plans/:id/activate': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'PLAN_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid plan status for activate action; plan status should be either created or inactive.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { id: string } }; output: Error_500; outputFormat: 'json'; status: 500 }
        | {
            input: { param: { id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/plans/:id/deactivate': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'PLAN_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid plan status for deactivate action; plan status should be active.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { id: string } }; output: Error_500; outputFormat: 'json'; status: 500 }
        | {
            input: { param: { id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/plans/:id/update-pricing-schemes': {
      $post:
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'CURRENCY_MISMATCH' | undefined
                        description?:
                          | "The currency code is different from the plan's currency code."
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_BILLING_CYCLE_SEQUENCE' | undefined
                        description?:
                          | 'The provided billing cycle sequence is not available.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_SCHEME' | undefined
                        description?:
                          | 'The new pricing scheme should be of the same type as that of the old one.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_AMOUNT' | undefined
                        description?: 'Free tiers are not supported.' | undefined
                      }
                    | {
                        issue?: 'MISSING_PRICING_SCHEME_TIERS' | undefined
                        description?: 'Tier(s) are missing for some quantities.' | undefined
                      }
                    | {
                        issue?: 'OVERLAPPING_PRICING_SCHEME_TIERS' | undefined
                        description?:
                          | 'The specified quantity overlaps with multiple pricing tiers.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_MODEL' | undefined
                        description?:
                          | 'The specified pricing model is not supported for trial billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'FIXED_PRICE_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Fixed price is not supported for tiered pricing schemes.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_QUANTITY' | undefined
                        description?:
                          | 'Tier starting quantity must be less than ending quantity.'
                          | undefined
                      }
                    | {
                        issue?: 'PRICING_SCHEME_UPDATE_NOT_ALLOWED' | undefined
                        description?:
                          | 'Pricing scheme update is not allowed for the plan.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: UpdatePricingSchemesListRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions': {
      $post:
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: Subscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value of a field does not conform to the expected format.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'The value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'The integer value of a field is too small.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'The integer value of a field is too large.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'Start time must be a valid future date and time.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUEST_BODY' | undefined
                        description?: 'Request body is missing.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'The value of a field is too long.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'PLAN_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid plan status for subscription creation; plan status should be active.'
                          | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_CANNOT_HAVE_QUANTITY' | undefined
                        description?:
                          | "Subscription can't have quantity as the plan does not support quantity."
                          | undefined
                      }
                    | {
                        issue?: 'CARD_SUBSCRIPTIONS_NOT_ENABLED' | undefined
                        description?:
                          | 'The account is not setup to be able to process subscriptions funded by card payments. Please contact PayPal customer support.'
                          | undefined
                      }
                    | {
                        issue?: '3DS_CARDS_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Cards that require 3DS authentication not supported.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_BILLING_CYCLE_SEQUENCE' | undefined
                        description?:
                          | 'The provided billing cycle sequence is not available.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_SCHEME' | undefined
                        description?:
                          | 'The override plan pricing scheme should be of the same type as that of the original plan.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_AMOUNT' | undefined
                        description?: 'Free tiers are not supported.' | undefined
                      }
                    | {
                        issue?: 'MISSING_PRICING_SCHEME_TIERS' | undefined
                        description?: 'Tier(s) are missing for some quantities.' | undefined
                      }
                    | {
                        issue?: 'OVERLAPPING_PRICING_SCHEME_TIERS' | undefined
                        description?:
                          | 'The specified quantity overlaps with multiple pricing tiers.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_MODEL' | undefined
                        description?:
                          | 'The specified pricing model is not supported for trial billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'FIXED_PRICE_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Fixed price is not supported for tiered pricing schemes.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_QUANTITY' | undefined
                        description?:
                          | 'Tier starting quantity must be less than ending quantity.'
                          | undefined
                      }
                    | {
                        issue?: 'CURRENCY_MISMATCH' | undefined
                        description?:
                          | "The currency code is different from the plan's currency code."
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionRequestPost }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'UNSUPPORTED_PATCH_OPERATION' | undefined
                        description?:
                          | 'The specified patch operation not supported for this field.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PATCH_PATH' | undefined
                        description?: 'The specified field cannot be patched.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PATCH_PATH' | undefined
                        description?:
                          | 'Multiple operations on the same field are not allowed.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value of a field does not conform to the expected format.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'The value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MIN_LENGTH' | undefined
                        description?: 'The value of a field is too short.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'The integer value of a field is too small.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'The integer value of a field is too large.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUEST_BODY' | undefined
                        description?: 'Request body is missing.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid subscription status for patch action; subscription status should be either active or suspended.'
                          | undefined
                      }
                    | {
                        issue?: 'CARD_SUBSCRIPTIONS_NOT_ENABLED' | undefined
                        description?:
                          | 'The account is not setup to be able to process subscriptions funded by card payments. Please contact PayPal customer support.'
                          | undefined
                      }
                    | {
                        issue?: '3DS_CARDS_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Cards that require 3DS authentication not supported.'
                          | undefined
                      }
                    | {
                        issue?: 'BILLING_CYCLE_EXECUTION_COMPLETED' | undefined
                        description?:
                          | 'Update cannot be performed on a billing cycle that has completed execution.'
                          | undefined
                      }
                    | {
                        issue?: 'AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE' | undefined
                        description?:
                          | 'The new outstanding balance cannot be greater than the current outstanding balance.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_BILLING_TOTAL_CYCLES' | undefined
                        description?:
                          | 'The total cycles cannot be less than the number of billing cycles completed.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_AMOUNT' | undefined
                        description?: 'Free tiers are not supported.' | undefined
                      }
                    | {
                        issue?: 'MISSING_PRICING_SCHEME_TIERS' | undefined
                        description?: 'Tier(s) are missing for some quantities.' | undefined
                      }
                    | {
                        issue?: 'OVERLAPPING_PRICING_SCHEME_TIERS' | undefined
                        description?:
                          | 'The specified quantity overlaps with multiple pricing tiers.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_MODEL' | undefined
                        description?:
                          | 'The specified pricing model is not supported for trial billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'FIXED_PRICE_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Fixed price is not supported for tiered pricing schemes.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_QUANTITY' | undefined
                        description?:
                          | 'Tier starting quantity must be less than ending quantity.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_START_TIME' | undefined
                        description?:
                          | 'The start time cannot be updated for a subscription that has been activated.'
                          | undefined
                      }
                    | {
                        issue?: 'CURRENCY_MISMATCH' | undefined
                        description?:
                          | "The currency code is different from the subscription's currency code."
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id/revise': {
      $post:
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: SubscriptionReviseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value of a field does not conform to the expected format.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'The integer value of a field is too small.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'The integer value of a field is too large.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUEST_BODY' | undefined
                        description?: 'Request body is missing.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?: 'Requested resource ID was not found.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'PLAN_PRODUCT_NOT_COMPATIBLE' | undefined
                        description?:
                          | 'The old and the new plans should be for the same product.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_BILLING_CYCLE_SEQUENCE' | undefined
                        description?:
                          | 'The provided billing cycle sequence is not available.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_SCHEME' | undefined
                        description?:
                          | 'The override plan pricing scheme should be of the same type as that of the original plan.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_AMOUNT' | undefined
                        description?: 'Free tiers are not supported.' | undefined
                      }
                    | {
                        issue?: 'MISSING_PRICING_SCHEME_TIERS' | undefined
                        description?: 'Tier(s) are missing for some quantities.' | undefined
                      }
                    | {
                        issue?: 'OVERLAPPING_PRICING_SCHEME_TIERS' | undefined
                        description?:
                          | 'The specified quantity overlaps with multiple pricing tiers.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_MODEL' | undefined
                        description?:
                          | 'The specified pricing model is not supported for trial billing cycle.'
                          | undefined
                      }
                    | {
                        issue?: 'FIXED_PRICE_NOT_SUPPORTED' | undefined
                        description?:
                          | 'Fixed price is not supported for tiered pricing schemes.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PRICING_TIER_QUANTITY' | undefined
                        description?:
                          | 'Tier starting quantity must be less than ending quantity.'
                          | undefined
                      }
                    | {
                        issue?: 'CURRENCY_MISMATCH' | undefined
                        description?:
                          | "The currency code is different from the plan's currency code."
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionReviseRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id/suspend': {
      $post:
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                    description?: 'The value of a field is too long.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid subscription status for suspend action; subscription status should be active.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionSuspendRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                    description?: 'The value of a field is too long.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid subscription status for cancel action; subscription status should be active or suspended.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionCancelRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id/activate': {
      $post:
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                    description?: 'The value of a field is too long.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid subscription status for activate action; subscription status should be suspended.'
                          | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_CANNOT_BE_ACTIVATED' | undefined
                        description?:
                          | 'Subscription cannot be activated after payment failure threshold has reached.'
                          | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_CANNOT_BE_ACTIVATED' | undefined
                        description?:
                          | 'This subscription should be activated by the system.'
                          | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_CANNOT_BE_ACTIVATED' | undefined
                        description?:
                          | 'This subscription should be activated by the merchant.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: SubscriptionActivateRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id/capture': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'MISSING_REQUEST_BODY' | undefined
                        description?: 'Request body is missing.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'The value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_ACCOUNT_CLOSED' | undefined
                        description?: 'User account locked or closed.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIBER_ACCOUNT_LOCKED' | undefined
                        description?: 'Subscriber Account Locked.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIBER_ACCOUNT_CLOSED' | undefined
                        description?: 'Subscriber Account Closed.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIBER_ACCOUNT_RESTRICTED' | undefined
                        description?: 'Subscriber Account Restricted.' | undefined
                      }
                    | {
                        issue?: 'SUBSCRIPTION_STATUS_INVALID' | undefined
                        description?:
                          | 'Invalid subscription status for capture action; subscription status should be active or suspended or expired.'
                          | undefined
                      }
                    | {
                        issue?: 'ZERO_OUTSTANDING_BALANCE' | undefined
                        description?:
                          | 'Current outstanding balance should be greater than zero.'
                          | undefined
                      }
                    | {
                        issue?: 'CURRENCY_MISMATCH' | undefined
                        description?:
                          | "The currency code is different from the subscription's currency code."
                          | undefined
                      }
                    | {
                        issue?: 'AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE' | undefined
                        description?:
                          | 'The capture amount can not be greater than the current outstanding balance.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: { 'PayPal-Request-Id'?: string | undefined }
            } & { json: SubscriptionCaptureRequest }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/billing/subscriptions/:id/transactions': {
      $get:
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: TransactionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value of a field does not conform to the expected format.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'The value of a field is invalid.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?: 'A required field is missing.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'INVALID_ACCOUNT_STATUS' | undefined
                    description?: 'Account validations failed for the user.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'You do not have permission to access or perform operations on this resource.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: {
              name?: 'RESOURCE_NOT_FOUND' | undefined
              message?: 'The specified resource does not exist.' | undefined
              details?:
                | {
                    issue?: 'INVALID_RESOURCE_ID' | undefined
                    description?:
                      | 'Specified resource ID does not exist. Please check the resource ID and try again.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { start_time: string; end_time: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
