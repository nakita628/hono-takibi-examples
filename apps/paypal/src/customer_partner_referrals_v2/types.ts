type PersonNameType = 'LEGAL'
type PersonName = {
  prefix?: string | undefined
  given_name?: string | undefined
  surname?: string | undefined
  middle_name?: string | undefined
  suffix?: string | undefined
  full_name?: string | undefined
  type?: PersonNameType | undefined
}
type PersonNameList = PersonName[]
type CountryCode = string
type AddressDetails = {
  street_number?: string | undefined
  street_name?: string | undefined
  street_type?: string | undefined
  delivery_service?: string | undefined
  building_name?: string | undefined
  sub_building?: string | undefined
}
type PersonAddressType = 'HOME'
type PersonAddressDetail = {
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  address_line_3?: string | undefined
  admin_area_4?: string | undefined
  admin_area_3?: string | undefined
  admin_area_2?: string | undefined
  admin_area_1?: string | undefined
  postal_code?: string | undefined
  country_code: CountryCode
  address_details?: AddressDetails | undefined
  type?: PersonAddressType | undefined
}
type PersonAddressDetailList = PersonAddressDetail[]
type PhoneType = 'FAX' | 'HOME' | 'MOBILE' | 'OTHER' | 'PAGER'
type PersonPhoneDetail = {
  country_code: string
  national_number: string
  extension_number?: string | undefined
  type?: PhoneType | undefined
}
type PersonPhoneDetailList = PersonPhoneDetail[]
type DateNoTime = string
type BirthDetails = { date_of_birth: DateNoTime }
type Labels = string
type LabelsList = Labels[]
type DateTime = string
type FileReference = {
  id?: string | undefined
  reference_url?: string | undefined
  content_type?: string | undefined
  create_time?: DateTime | undefined
  size?: string | undefined
}
type FileReferenceList = FileReference[]
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type LinkDescriptionList = LinkDescription[]
type PersonDocumentType =
  | 'SOCIAL_SECURITY_NUMBER'
  | 'EMPLOYMENT_IDENTIFICATION_NUMBER'
  | 'TAX_IDENTIFICATION_NUMBER'
  | 'PASSPORT_NUMBER'
  | 'PENSION_FUND_ID'
  | 'MEDICAL_INSURANCE_ID'
  | 'CNPJ'
  | 'CPF'
  | 'PAN'
  | 'NATIONAL_ID_CARD'
type PersonDocument = {
  id?: string | undefined
  labels?: LabelsList | undefined
  name?: string | undefined
  identification_number?: string | undefined
  issue_date?: DateNoTime | undefined
  expiry_date?: DateNoTime | undefined
  issuing_country_code?: CountryCode | undefined
  files?: FileReferenceList | undefined
  links?: LinkDescriptionList | undefined
  type?: PersonDocumentType | undefined
}
type PersonDocumentList = PersonDocument[]
type IndividualOwnerType = 'PRIMARY'
type IndividualOwner = {
  id?: string | undefined
  names?: PersonNameList | undefined
  citizenship?: CountryCode | undefined
  addresses?: PersonAddressDetailList | undefined
  phones?: PersonPhoneDetailList | undefined
  birth_details?: BirthDetails | undefined
  documents?: PersonDocumentList | undefined
  type?: IndividualOwnerType | undefined
}
type IndividualOwnerList = IndividualOwner[]
type BusinessType =
  | 'ANY_OTHER_BUSINESS_ENTITY'
  | 'ASSOCIATION'
  | 'CORPORATION'
  | 'GENERAL_PARTNERSHIP'
  | 'GOVERNMENT'
  | 'INDIVIDUAL'
  | 'LIMITED_LIABILITY_PARTNERSHIP'
  | 'LIMITED_LIABILITY_PROPRIETORS'
  | 'LIMITED_LIABILITY_PRIVATE_CORPORATION'
  | 'LIMITED_PARTNERSHIP'
  | 'LIMITED_PARTNERSHIP_PRIVATE_CORPORATION'
  | 'NONPROFIT'
  | 'ONLY_BUY_OR_SEND_MONEY'
  | 'OTHER_CORPORATE_BODY'
  | 'PARTNERSHIP'
  | 'PRIVATE_PARTNERSHIP'
  | 'PROPRIETORSHIP'
  | 'PROPRIETORSHIP_CRAFTSMAN'
  | 'PROPRIETORY_COMPANY'
  | 'PRIVATE_CORPORATION'
  | 'PUBLIC_COMPANY'
  | 'PUBLIC_CORPORATION'
  | 'PUBLIC_PARTNERSHIP'
  | 'REGISTERED_COOPERATIVE'
type BusinessSubType =
  | 'ASSO_TYPE_INCORPORATED'
  | 'ASSO_TYPE_NON_INCORPORATED'
  | 'GOVT_TYPE_ENTITY'
  | 'GOVT_TYPE_EMANATION'
  | 'GOVT_TYPE_ESTD_COMM'
  | 'GOVT_TYPE_ESTD_FC'
  | 'GOVT_TYPE_ESTD_ST_TR'
type BusinessTypeInfo = { type?: BusinessType | undefined; subtype?: BusinessSubType | undefined }
type BusinessIndustry = { category: string; mcc_code: string; subcategory: string }
type BusinessNameType = 'DOING_BUSINESS_AS' | 'LEGAL_NAME'
type BusinessNameDetail = {
  business_name?: string | undefined
  type?: BusinessNameType | undefined
}
type BusinessNameDetailList = BusinessNameDetail[]
type EmailAddress = string
type Email = { type: 'CUSTOMER_SERVICE'; email: EmailAddress }
type EmailList = Email[]
type BusinessAddressType = 'WORK'
type BusinessAddressDetail = {
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  address_line_3?: string | undefined
  admin_area_4?: string | undefined
  admin_area_3?: string | undefined
  admin_area_2?: string | undefined
  admin_area_1?: string | undefined
  postal_code?: string | undefined
  country_code: CountryCode
  address_details?: AddressDetails | undefined
  type?: BusinessAddressType | undefined
}
type BusinessAddressDetailList = BusinessAddressDetail[]
type BusinessPhoneType = 'CUSTOMER_SERVICE' | 'BUSINESS'
type BusinessPhoneDetail = {
  country_code: string
  national_number: string
  extension_number?: string | undefined
  type?: BusinessPhoneType | undefined
}
type BusinessPhoneDetailList = BusinessPhoneDetail[]
type BusinessDocumentType =
  | 'SOCIAL_SECURITY_NUMBER'
  | 'EMPLOYMENT_IDENTIFICATION_NUMBER'
  | 'TAX_IDENTIFICATION_NUMBER'
  | 'PASSPORT_NUMBER'
  | 'PENSION_FUND_ID'
  | 'MEDICAL_INSURANCE_ID'
  | 'CNPJ'
  | 'CPF'
  | 'PAN'
  | 'BUSINESS_REGISTRATION'
type BusinessDocument = {
  id?: string | undefined
  labels?: LabelsList | undefined
  name?: string | undefined
  identification_number?: string | undefined
  issue_date?: DateNoTime | undefined
  expiry_date?: DateNoTime | undefined
  issuing_country_code?: CountryCode | undefined
  files?: FileReferenceList | undefined
  links?: LinkDescriptionList | undefined
  type?: BusinessDocumentType | undefined
}
type BusinessDocumentList = BusinessDocument[]
type Percentage = string
type IndividualBeneficialOwner = {
  id?: string | undefined
  names?: PersonNameList | undefined
  citizenship?: CountryCode | undefined
  addresses?: PersonAddressDetailList | undefined
  phones?: PersonPhoneDetailList | undefined
  birth_details?: BirthDetails | undefined
  documents?: PersonDocumentList | undefined
  percentage_of_ownership?: Percentage | undefined
}
type IndividualBeneficialOwnerList = IndividualBeneficialOwner[]
type BusinessBeneficialOwner = {
  business_type?: BusinessTypeInfo | undefined
  business_industry?: BusinessIndustry | undefined
  business_incorporation?:
    | {
        incorporation_country_code?: CountryCode | undefined
        incorporation_date?: DateNoTime | undefined
      }
    | undefined
  names?: BusinessNameDetailList | undefined
  emails?: EmailList | undefined
  website?: string | undefined
  addresses?: BusinessAddressDetailList | undefined
  phones?: BusinessPhoneDetailList | undefined
  documents?: BusinessDocumentList | undefined
  percentage_of_ownership?: Percentage | undefined
}
type BusinessBeneficialOwnerList = BusinessBeneficialOwner[]
type BeneficialOwners = {
  individual_beneficial_owners?: IndividualBeneficialOwnerList | undefined
  business_beneficial_owners?: BusinessBeneficialOwnerList | undefined
}
type CurrencyCode = string
type Money = { currency_code: CurrencyCode; value: string }
type CurrencyRange = { minimum_amount?: Money | undefined; maximum_amount?: Money | undefined }
type BusinessEntity = {
  business_type?: BusinessTypeInfo | undefined
  business_industry?: BusinessIndustry | undefined
  business_incorporation?:
    | {
        incorporation_country_code?: CountryCode | undefined
        incorporation_date?: DateNoTime | undefined
      }
    | undefined
  names?: BusinessNameDetailList | undefined
  emails?: EmailList | undefined
  website?: string | undefined
  addresses?: BusinessAddressDetailList | undefined
  phones?: BusinessPhoneDetailList | undefined
  documents?: BusinessDocumentList | undefined
  beneficial_owners?: BeneficialOwners | undefined
  annual_sales_volume_range?: CurrencyRange | undefined
  average_monthly_volume_range?: CurrencyRange | undefined
  purpose_code?: { [x: string]: unknown } | undefined
  business_description?: string | undefined
}
type Language = string
type PartnerConfigOverride = {
  return_url?: string | undefined
  return_url_description?: string | undefined
  show_add_credit_card?: boolean | undefined
}
type Identifier = {
  type?:
    | 'BANK_CODE'
    | 'BI_CODE'
    | 'BRANCH_CODE'
    | 'ROUTING_NUMBER_1'
    | 'ROUTING_NUMBER_2'
    | 'ROUTING_NUMBER_3'
    | 'SWIFT_CODE'
    | 'BRANCH_CODE'
    | 'INTERMEDIARY_SWIFT_CODE'
    | 'BBAN'
    | 'BBAN_ENCRYPTED'
    | 'BBAN_HMAC'
    | 'AGGREGATOR_YODLEE'
    | undefined
  value?: string | undefined
}
type IdentifierList = Identifier[]
type CountryCode_2 = string
type Mandate = { accepted: boolean }
type Bank = {
  nick_name?: string | undefined
  account_number: string
  account_type: 'CHECKING' | 'SAVINGS'
  currency_code?: CurrencyCode | undefined
  identifiers?: IdentifierList | undefined
  branch_location?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode_2
      }
    | undefined
  mandate?: Mandate | undefined
}
type BankList = Bank[]
type FinancialInstruments = { banks?: BankList | undefined }
type ClassicApiIntegration = {}
type RestEndpointFeaturesEnum =
  | 'PAYOUTS'
  | 'PAYMENT'
  | 'REFUND'
  | 'FUTURE_PAYMENT'
  | 'DIRECT_PAYMENT'
  | 'PARTNER_FEE'
  | 'DELAY_FUNDS_DISBURSEMENT'
  | 'READ_SELLER_DISPUTE'
  | 'UPDATE_SELLER_DISPUTE'
  | 'ADVANCED_TRANSACTIONS_SEARCH'
  | 'SWEEP_FUNDS_EXTERNAL_SINK'
  | 'ACCESS_MERCHANT_INFORMATION'
  | 'TRACKING_SHIPMENT_READWRITE'
  | 'INVOICE_READ_WRITE'
  | 'DISPUTE_READ_BUYER'
  | 'UPDATE_CUSTOMER_DISPUTES'
  | 'VAULT'
  | 'BILLING_AGREEMENT'
  | 'WITHDRAWALS'
  | 'LINKED_FINANCIAL_INSTRUMENTS'
  | 'USER_PROFILE'
  | 'TRANSACTION_RISK_DATA'
  | 'PAYPAL_BALANCE'
  | 'EXCHANGE_CURRENCY'
type RestEndpointFeaturesEnumList = RestEndpointFeaturesEnum[]
type FirstPartyDetails = { features: RestEndpointFeaturesEnumList; seller_nonce: string }
type RestApiIntegrationRestEndpointFeaturesEnumList = RestEndpointFeaturesEnum[]
type SignupMode = 'VERIFY_WITH_PAYPAL'
type ThirdPartyDetails = {
  features?: RestApiIntegrationRestEndpointFeaturesEnumList | undefined
  signup_mode?: SignupMode | undefined
  organization?: string | undefined
}
type RestApiIntegration = {
  integration_method?: 'BRAINTREE' | 'PAYPAL' | 'SDK' | undefined
  integration_type: 'FIRST_PARTY' | 'THIRD_PARTY'
  first_party_details?: FirstPartyDetails | undefined
  third_party_details?: ThirdPartyDetails | undefined
}
type IntegrationDetails = {
  classic_api_integration?: ClassicApiIntegration | undefined
  rest_api_integration?: RestApiIntegration | undefined
}
type OfflineOnboardingPreference = { [x: string]: unknown }
type BillingExperiencePreference = {
  experience_id?: string | undefined
  billing_context_set?: boolean | undefined
}
type BillingAgreement = {
  description?: string | undefined
  billing_experience_preference?: BillingExperiencePreference | undefined
  merchant_custom_data?: string | undefined
  approval_url?: string | undefined
  ec_token?: string | undefined
}
type Operation = {
  operation:
    | 'API_INTEGRATION'
    | 'BANK_ADDITION'
    | 'BILLING_AGREEMENT'
    | 'CONTEXTUAL_MARKETING_CONSENT'
    | 'OFFLINE_ONBOARDING'
    | 'SALESFORCE_REFERRAL'
  api_integration_preference?: IntegrationDetails | undefined
  offline_onboarding_preference?: OfflineOnboardingPreference | undefined
  billing_agreement?: BillingAgreement | undefined
}
type OperationList = Operation[]
type Product =
  | 'ALIPAY'
  | 'BANCONTACT'
  | 'BLIK'
  | 'EPS'
  | 'PPCP'
  | 'EXPRESS_CHECKOUT'
  | 'PAYMENT_METHODS'
  | 'ADVANCED_VAULTING'
  | 'IDEAL'
  | 'MB_WAY'
  | 'MULTIBANCO'
  | 'PAYPAL_COMMERCE_PLATFORM_BUSINESS'
  | 'PPPLUS'
  | 'PRZELEWY24'
  | 'SATISPAY'
  | 'TRUSTLY'
  | 'WECHAT_PAY'
  | 'WEBSITE_PAYMENT_PRO'
  | 'ZETTLE'
  | 'PAYPAL_COMMERCE_PLATFORM_BUSINESS'
  | 'HYPERWALLET_PAYOUTS'
type ProductList = Product[]
type Capabilities =
  | 'PAYPAL_WALLET_VAULTING_ADVANCED'
  | 'PAY_UPON_INVOICE'
  | 'APPLE_PAY'
  | 'GOOGLE_PAY'
type CapabilitiesList = Capabilities[]
type DependentProcess = { [x: string]: unknown }
type DependentProcessList = DependentProcess[]
type LegalConsent = { type: 'SHARE_DATA_CONSENT'; granted: boolean }
type LegalConsentList = LegalConsent[]
type CurrencyCode_2 = string
type CurrencyCodeList = CurrencyCode_2[]
type TransferMethod = {
  transfer_method_type?: 'BANK_ACCOUNT' | 'PAYPAL' | 'VENMO' | 'WIRE_ACCOUNT' | undefined
  currencies?: CurrencyCodeList | undefined
}
type TransferMethodList = TransferMethod[]
type CountryTransferMethodCurrencySelection = {
  country?: CountryCode | undefined
  transfer_methods?: TransferMethodList | undefined
}
type CountryTransferMethodCurrencySelectionList = CountryTransferMethodCurrencySelection[]
type PayoutAttributes = {
  marketplace?: boolean | undefined
  kyc_required?: boolean | undefined
  country_transfer_method_currency_selection?:
    | CountryTransferMethodCurrencySelectionList
    | undefined
}
type ReferralData = {
  individual_owners?: IndividualOwnerList | undefined
  business_entity?: BusinessEntity | undefined
  email?: EmailAddress | undefined
  preferred_language_code?: Language | undefined
  tracking_id?: string | undefined
  partner_config_override?: PartnerConfigOverride | undefined
  financial_instruments?: FinancialInstruments | undefined
  operations?: OperationList | undefined
  products?: ProductList | undefined
  capabilities?: CapabilitiesList | undefined
  outside_process_dependencies?: DependentProcessList | undefined
  legal_consents?: LegalConsentList | undefined
  payout_attributes?: PayoutAttributes | undefined
  legal_country_code?: CountryCode | undefined
}
type DefinitionsLinkDescriptionList = LinkDescription[]
type CreateReferralDataResponse = { links?: DefinitionsLinkDescriptionList | undefined }
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
type ReferralDataResponseDefinitionsLinkDescriptionList = LinkDescription[]
type ReferralDataResponse = {
  partner_referral_id?: string | undefined
  submitter_payer_id?: string | undefined
  submitter_client_id?: string | undefined
  referral_data?: ReferralData | undefined
  links?: ReferralDataResponseDefinitionsLinkDescriptionList | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/customer/partner-referrals': {
      $post:
        | {
            input: { json: ReferralData }
            output: CreateReferralDataResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ReferralData }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'the value of a field is either too short or too long'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'the value of a field does not conform to the expected format'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_VALUE' | undefined
                        description?: 'the value of a field is invalid' | undefined
                      }
                    | {
                        issue?: 'INVALID_ARRAY_LENGTH' | undefined
                        description?:
                          | 'the number of items in an array parameter is too small or too large'
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
            input: { json: ReferralData }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'AUTHORIZATION_ERROR' | undefined
                    description?: 'This API call is not authorized' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReferralData }
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
            input: { json: ReferralData }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_NOT_FOUND' | undefined
                        description?: 'Account for this Partner ID does not exist.' | undefined
                      }
                    | {
                        issue?: 'ACCOUNT_STATUS_ERROR' | undefined
                        description?: string | undefined
                      }
                    | {
                        issue?: 'PRODUCT_PPCP_UNAUTHORIZED' | undefined
                        description?:
                          | 'Account has not been configured to use PayPal Complete Payments'
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
        | { input: { json: ReferralData }; output: Error_500; outputFormat: 'json'; status: 500 }
        | { input: { json: ReferralData }; output: ErrorDefault; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/customer/partner-referrals/:partner_referral_id': {
      $get:
        | {
            input: { param: { partner_referral_id: string } }
            output: ReferralDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partner_referral_id: string } }
            output: {
              name?: 'AUTHENTICATION_FAILURE' | undefined
              message?:
                | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
                | undefined
              details?:
                | {
                    issue?: 'AUTHORIZATION_ERROR' | undefined
                    description?: 'This API call is not authorized' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { partner_referral_id: string } }
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
            input: { param: { partner_referral_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { partner_referral_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
