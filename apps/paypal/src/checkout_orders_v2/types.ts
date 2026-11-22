type Guid = string
type StandardHeaderSchema = string
type CheckoutPaymentIntent = 'CAPTURE' | 'AUTHORIZE'
type PhoneType = 'FAX' | 'HOME' | 'MOBILE' | 'OTHER' | 'PAGER'
type CountryCode = string
type CurrencyCode = string
type AmountBreakdown = {
  item_total?: { currency_code: CurrencyCode; value: string } | undefined
  shipping?: { currency_code: CurrencyCode; value: string } | undefined
  handling?: { currency_code: CurrencyCode; value: string } | undefined
  tax_total?: { currency_code: CurrencyCode; value: string } | undefined
  insurance?: { currency_code: CurrencyCode; value: string } | undefined
  shipping_discount?: { currency_code: CurrencyCode; value: string } | undefined
  discount?: { currency_code: CurrencyCode; value: string } | undefined
}
type PaymentInstruction = {
  platform_fees?:
    | {
        amount: { currency_code: CurrencyCode; value: string }
        payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
      }[]
    | undefined
  disbursement_mode?: {} | undefined
  payee_pricing_tier_id?: string | undefined
  payee_receivable_fx_rate_id?: string | undefined
}
type BillingCycle = {
  tenure_type: 'REGULAR' | 'TRIAL'
  pricing_scheme?:
    | {
        price?: { currency_code: CurrencyCode; value: string } | undefined
        pricing_model: 'FIXED' | 'VARIABLE' | 'AUTO_RELOAD'
        reload_threshold_amount?: { currency_code: CurrencyCode; value: string } | undefined
      }
    | undefined
  total_cycles?: number | undefined
  sequence?: number | undefined
  start_date?: {} | undefined
}
type OrderBillingPlan = {
  billing_cycles: BillingCycle[]
  setup_fee?: { currency_code: CurrencyCode; value: string } | undefined
  name?: string | undefined
}
type Level_2CardProcessingData = {
  invoice_id?: string | undefined
  tax_total?: { currency_code: CurrencyCode; value: string } | undefined
}
type Level_3CardProcessingData = {
  shipping_amount?: { currency_code: CurrencyCode; value: string } | undefined
  duty_amount?: { currency_code: CurrencyCode; value: string } | undefined
  discount_amount?: { currency_code: CurrencyCode; value: string } | undefined
  shipping_address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        address_line_3?: string | undefined
        admin_area_4?: string | undefined
        admin_area_3?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
        address_details?:
          | {
              street_number?: string | undefined
              street_name?: string | undefined
              street_type?: string | undefined
              delivery_service?: string | undefined
              building_name?: string | undefined
              sub_building?: string | undefined
            }
          | undefined
      }
    | undefined
  ships_from_postal_code?: string | undefined
  line_items?:
    | {
        name: string
        quantity: string
        description?: string | undefined
        sku?: string | undefined
        url?: string | undefined
        image_url?: string | undefined
        upc?:
          | {
              type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
              code: string
            }
          | undefined
        billing_plan?: OrderBillingPlan | undefined
        unit_amount?: { currency_code: CurrencyCode; value: string } | undefined
        tax?: { currency_code: CurrencyCode; value: string } | undefined
        commodity_code?: string | undefined
        discount_amount?: { currency_code: CurrencyCode; value: string } | undefined
        total_amount?: { currency_code: CurrencyCode; value: string } | undefined
        unit_of_measure?: string | undefined
      }[]
    | undefined
}
type ParticipantMetadata = { ip_address?: {} | undefined }
type MerchantPartnerCustomerId = string
type CardCustomer = {
  id?: MerchantPartnerCustomerId | undefined
  email_address?: {} | undefined
  phone?:
    | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
    | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name?: string | undefined
        surname?: string | undefined
        middle_name?: string | undefined
        suffix?: string | undefined
        full_name?: string | undefined
      }
    | undefined
  merchant_customer_id?: string | undefined
}
type StoreInVaultInstruction = 'ON_SUCCESS'
type PaymentInitiator = 'CUSTOMER' | 'MERCHANT'
type StoredPaymentSourcePaymentType = 'ONE_TIME' | 'RECURRING' | 'UNSCHEDULED'
type StoredPaymentSourceUsageType = 'FIRST' | 'SUBSEQUENT' | 'DERIVED'
type NetworkTransactionReference = {
  id?: string | undefined
  date?: string | undefined
  network?: {} | undefined
  acquirer_reference_number?: string | undefined
}
type CardStoredCredential = {
  payment_initiator: PaymentInitiator
  payment_type: StoredPaymentSourcePaymentType
  usage?: StoredPaymentSourceUsageType | undefined
  previous_network_transaction_reference?: NetworkTransactionReference | undefined
}
type EciFlag =
  | 'MASTERCARD_NON_3D_SECURE_TRANSACTION'
  | 'MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION'
  | 'MASTERCARD_FULLY_AUTHENTICATED_TRANSACTION'
  | 'FULLY_AUTHENTICATED_TRANSACTION'
  | 'ATTEMPTED_AUTHENTICATION_TRANSACTION'
  | 'NON_3D_SECURE_TRANSACTION'
type CardRequest = {
  id?: {} | undefined
  name?: string | undefined
  number?: string | undefined
  expiry?: {} | undefined
  security_code?: string | undefined
  last_digits?: string | undefined
  card_type?: {} | undefined
  type?: {} | undefined
  brand?: {} | undefined
  billing_address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        address_line_3?: string | undefined
        admin_area_4?: string | undefined
        admin_area_3?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
        address_details?:
          | {
              street_number?: string | undefined
              street_name?: string | undefined
              street_type?: string | undefined
              delivery_service?: string | undefined
              building_name?: string | undefined
              sub_building?: string | undefined
            }
          | undefined
      }
    | undefined
  attributes?:
    | {
        customer?: CardCustomer | undefined
        vault?: { store_in_vault?: StoreInVaultInstruction | undefined } | undefined
        verification?:
          | { method?: 'SCA_ALWAYS' | 'SCA_WHEN_REQUIRED' | '3D_SECURE' | 'AVS_CVV' | undefined }
          | undefined
      }
    | undefined
  vault_id?: {} | undefined
  single_use_token?: {} | undefined
  stored_credential?: CardStoredCredential | undefined
  network_token?:
    | {
        number: string
        expiry: {}
        cryptogram?: string | undefined
        eci_flag?: EciFlag | undefined
        token_requestor_id?: string | undefined
      }
    | undefined
  experience_context?: { return_url?: {} | undefined; cancel_url?: {} | undefined } | undefined
}
type Token = { id: string; type: 'BILLING_AGREEMENT' }
type PaypalWalletCustomer = {
  id?: MerchantPartnerCustomerId | undefined
  email_address?: {} | undefined
  phone?:
    | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
    | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name?: string | undefined
        surname?: string | undefined
        middle_name?: string | undefined
        suffix?: string | undefined
        full_name?: string | undefined
      }
    | undefined
  merchant_customer_id?: string | undefined
}
type NativeAppContext = {
  os_type?: 'ANDROID' | 'IOS' | 'OTHER' | undefined
  os_version?: string | undefined
}
type MobileWebContext = {
  return_flow?: 'AUTO' | 'MANUAL' | undefined
  buyer_user_agent?: string | undefined
}
type PaypalWalletExperienceContext = {
  brand_name?: string | undefined
  locale?: {} | undefined
  shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
  contact_preference?: 'NO_CONTACT_INFO' | 'UPDATE_CONTACT_INFO' | 'RETAIN_CONTACT_INFO' | undefined
  return_url?: {} | undefined
  cancel_url?: {} | undefined
  app_switch_context?:
    | { native_app?: NativeAppContext | undefined; mobile_web?: MobileWebContext | undefined }
    | undefined
  landing_page?: 'LOGIN' | 'GUEST_CHECKOUT' | 'NO_PREFERENCE' | 'BILLING' | undefined
  user_action?: 'CONTINUE' | 'PAY_NOW' | undefined
  payment_method_preference?: 'UNRESTRICTED' | 'IMMEDIATE_PAYMENT_REQUIRED' | undefined
  order_update_callback_config?:
    | { callback_events: ('SHIPPING_ADDRESS' | 'SHIPPING_OPTIONS')[]; callback_url: string }
    | undefined
}
type BillingAgreementId = string
type ChargePattern =
  | 'IMMEDIATE'
  | 'DEFERRED'
  | 'RECURRING_PREPAID'
  | 'RECURRING_POSTPAID'
  | 'THRESHOLD_PREPAID'
  | 'THRESHOLD_POSTPAID'
  | 'SUBSCRIPTION_PREPAID'
  | 'SUBSCRIPTION_POSTPAID'
  | 'UNSCHEDULED_PREPAID'
  | 'UNSCHEDULED_POSTPAID'
  | 'INSTALLMENT_PREPAID'
  | 'INSTALLMENT_POSTPAID'
type PaypalWalletStoredCredential = {
  payment_initiator: PaymentInitiator
  charge_pattern?: {} | undefined
  usage_pattern?: ChargePattern | undefined
  usage?: StoredPaymentSourceUsageType | undefined
}
type Customer = {
  id?: MerchantPartnerCustomerId | undefined
  email_address?: {} | undefined
  phone?:
    | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
    | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name?: string | undefined
        surname?: string | undefined
        middle_name?: string | undefined
        suffix?: string | undefined
        full_name?: string | undefined
      }
    | undefined
}
type V3VaultInstructionBase = { store_in_vault: StoreInVaultInstruction }
type ApplePayAttributes = {
  customer?: Customer | undefined
  vault?: V3VaultInstructionBase | undefined
}
type ApplePayExperienceContext = { return_url: {}; cancel_url: {} }
type GooglePayExperienceContext = { return_url: {}; cancel_url: {} }
type VenmoWalletExperienceContext = {
  brand_name?: string | undefined
  shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
  order_update_callback_config?:
    | { callback_events: ('SHIPPING_ADDRESS' | 'SHIPPING_OPTIONS')[]; callback_url: string }
    | undefined
  user_action?: 'CONTINUE' | 'PAY_NOW' | undefined
}
type VenmoWalletCustomer = {
  id?: MerchantPartnerCustomerId | undefined
  email_address?: {} | undefined
  phone?:
    | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
    | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name?: string | undefined
        surname?: string | undefined
        middle_name?: string | undefined
        suffix?: string | undefined
        full_name?: string | undefined
      }
    | undefined
}
type PaymentSource = {
  card?: CardRequest | undefined
  token?: Token | undefined
  paypal?:
    | {
        vault_id?: {} | undefined
        email_address?: {} | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        birth_date?: {} | undefined
        tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              address_line_3?: string | undefined
              admin_area_4?: string | undefined
              admin_area_3?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
              address_details?:
                | {
                    street_number?: string | undefined
                    street_name?: string | undefined
                    street_type?: string | undefined
                    delivery_service?: string | undefined
                    building_name?: string | undefined
                    sub_building?: string | undefined
                  }
                | undefined
            }
          | undefined
        attributes?:
          | {
              customer?: PaypalWalletCustomer | undefined
              vault?:
                | {
                    store_in_vault?: StoreInVaultInstruction | undefined
                    description?: string | undefined
                    usage_pattern?:
                      | 'IMMEDIATE'
                      | 'DEFERRED'
                      | 'RECURRING_PREPAID'
                      | 'RECURRING_POSTPAID'
                      | 'THRESHOLD_PREPAID'
                      | 'THRESHOLD_POSTPAID'
                      | 'SUBSCRIPTION_PREPAID'
                      | 'SUBSCRIPTION_POSTPAID'
                      | 'UNSCHEDULED_PREPAID'
                      | 'UNSCHEDULED_POSTPAID'
                      | 'INSTALLMENT_PREPAID'
                      | 'INSTALLMENT_POSTPAID'
                      | undefined
                    shipping?:
                      | {
                          name?:
                            | {
                                prefix?: string | undefined
                                given_name?: string | undefined
                                surname?: string | undefined
                                middle_name?: string | undefined
                                suffix?: string | undefined
                                full_name?: string | undefined
                              }
                            | undefined
                          email_address?: {} | undefined
                          phone_number?:
                            | {
                                country_code: string
                                national_number: string
                                extension_number?: string | undefined
                              }
                            | undefined
                          type?:
                            | 'SHIPPING'
                            | 'PICKUP_IN_PERSON'
                            | 'PICKUP_IN_STORE'
                            | 'PICKUP_FROM_PERSON'
                            | undefined
                          options?:
                            | {
                                id: string
                                label: string
                                type?: {} | undefined
                                amount?: { currency_code: CurrencyCode; value: string } | undefined
                                selected: boolean
                              }[]
                            | undefined
                          address?:
                            | {
                                address_line_1?: string | undefined
                                address_line_2?: string | undefined
                                address_line_3?: string | undefined
                                admin_area_4?: string | undefined
                                admin_area_3?: string | undefined
                                admin_area_2?: string | undefined
                                admin_area_1?: string | undefined
                                postal_code?: string | undefined
                                country_code: CountryCode
                                address_details?:
                                  | {
                                      street_number?: string | undefined
                                      street_name?: string | undefined
                                      street_type?: string | undefined
                                      delivery_service?: string | undefined
                                      building_name?: string | undefined
                                      sub_building?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
                    customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
                    permit_multiple_payment_tokens?: boolean | undefined
                  }
                | undefined
            }
          | undefined
        experience_context?: PaypalWalletExperienceContext | undefined
        billing_agreement_id?: BillingAgreementId | undefined
        stored_credential?: PaypalWalletStoredCredential | undefined
      }
    | undefined
  bancontact?:
    | {
        name: {}
        country_code: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  blik?:
    | {
        name: {}
        country_code: {}
        email?: {} | undefined
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
              consumer_ip?: {} | undefined
              consumer_user_agent?: string | undefined
            }
          | undefined
        level_0?: { auth_code: string } | undefined
        one_click?:
          | {
              auth_code?: string | undefined
              consumer_reference: string
              alias_label?: string | undefined
              alias_key?: string | undefined
            }
          | undefined
      }
    | undefined
  eps?:
    | {
        name: {}
        country_code: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  giropay?:
    | {
        name: {}
        country_code: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  ideal?:
    | {
        name: {}
        country_code: {}
        bic?: {} | undefined
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  mybank?:
    | {
        name: {}
        country_code: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  p24?:
    | {
        name: {}
        email: {}
        country_code: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  sofort?:
    | {
        name: {}
        country_code: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  trustly?:
    | {
        name: {}
        country_code: {}
        email: {}
        experience_context?:
          | {
              brand_name?: string | undefined
              locale?: {} | undefined
              shipping_preference?:
                | 'GET_FROM_FILE'
                | 'NO_SHIPPING'
                | 'SET_PROVIDED_ADDRESS'
                | undefined
              return_url?: {} | undefined
              cancel_url?: {} | undefined
            }
          | undefined
      }
    | undefined
  apple_pay?:
    | {
        id?: string | undefined
        name?: {} | undefined
        email_address?: {} | undefined
        phone_number?: { national_number: string } | undefined
        decrypted_token?:
          | {
              transaction_amount?: { currency_code: CurrencyCode; value: string } | undefined
              tokenized_card: {
                id?: {} | undefined
                name?: string | undefined
                number?: string | undefined
                expiry?: {} | undefined
                security_code?: string | undefined
                last_digits?: string | undefined
                card_type?: {} | undefined
                type?: {} | undefined
                brand?: {} | undefined
                billing_address?:
                  | {
                      address_line_1?: string | undefined
                      address_line_2?: string | undefined
                      address_line_3?: string | undefined
                      admin_area_4?: string | undefined
                      admin_area_3?: string | undefined
                      admin_area_2?: string | undefined
                      admin_area_1?: string | undefined
                      postal_code?: string | undefined
                      country_code: CountryCode
                      address_details?:
                        | {
                            street_number?: string | undefined
                            street_name?: string | undefined
                            street_type?: string | undefined
                            delivery_service?: string | undefined
                            building_name?: string | undefined
                            sub_building?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                attributes?:
                  | {
                      customer?: CardCustomer | undefined
                      vault?: { store_in_vault?: StoreInVaultInstruction | undefined } | undefined
                      verification?:
                        | {
                            method?:
                              | 'SCA_ALWAYS'
                              | 'SCA_WHEN_REQUIRED'
                              | '3D_SECURE'
                              | 'AVS_CVV'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              device_manufacturer_id?: string | undefined
              payment_data_type?: '3DSECURE' | 'EMV' | undefined
              payment_data?:
                | {
                    cryptogram?: string | undefined
                    eci_indicator?: string | undefined
                    emv_data?: string | undefined
                    pin?: string | undefined
                  }
                | undefined
            }
          | undefined
        stored_credential?: CardStoredCredential | undefined
        vault_id?: {} | undefined
        attributes?: ApplePayAttributes | undefined
        experience_context?: ApplePayExperienceContext | undefined
      }
    | undefined
  google_pay?:
    | {
        name?: {} | undefined
        email_address?: {} | undefined
        phone_number?: { country_code?: string | undefined; national_number: string } | undefined
        card?:
          | {
              name?: string | undefined
              number?: string | undefined
              expiry?: {} | undefined
              last_digits?: string | undefined
              type?: {} | undefined
              brand?: {} | undefined
              billing_address?:
                | {
                    address_line_1?: string | undefined
                    address_line_2?: string | undefined
                    address_line_3?: string | undefined
                    admin_area_4?: string | undefined
                    admin_area_3?: string | undefined
                    admin_area_2?: string | undefined
                    admin_area_1?: string | undefined
                    postal_code?: string | undefined
                    country_code: CountryCode
                    address_details?:
                      | {
                          street_number?: string | undefined
                          street_name?: string | undefined
                          street_type?: string | undefined
                          delivery_service?: string | undefined
                          building_name?: string | undefined
                          sub_building?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        decrypted_token?:
          | {
              message_id?: string | undefined
              message_expiration?: string | undefined
              payment_method: 'CARD'
              card: {
                name?: string | undefined
                number?: string | undefined
                expiry?: {} | undefined
                last_digits?: string | undefined
                type?: {} | undefined
                brand?: {} | undefined
                billing_address?:
                  | {
                      address_line_1?: string | undefined
                      address_line_2?: string | undefined
                      address_line_3?: string | undefined
                      admin_area_4?: string | undefined
                      admin_area_3?: string | undefined
                      admin_area_2?: string | undefined
                      admin_area_1?: string | undefined
                      postal_code?: string | undefined
                      country_code: CountryCode
                      address_details?:
                        | {
                            street_number?: string | undefined
                            street_name?: string | undefined
                            street_type?: string | undefined
                            delivery_service?: string | undefined
                            building_name?: string | undefined
                            sub_building?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              authentication_method: 'PAN_ONLY' | 'CRYPTOGRAM_3DS'
              cryptogram?: string | undefined
              eci_indicator?: string | undefined
            }
          | undefined
        assurance_details?:
          | {
              account_verified?: boolean | undefined
              card_holder_authenticated?: boolean | undefined
            }
          | undefined
        experience_context?: GooglePayExperienceContext | undefined
      }
    | undefined
  venmo?:
    | {
        vault_id?: {} | undefined
        email_address?: {} | undefined
        experience_context?: VenmoWalletExperienceContext | undefined
        attributes?:
          | {
              customer?: VenmoWalletCustomer | undefined
              vault?:
                | {
                    store_in_vault: StoreInVaultInstruction
                    description?: string | undefined
                    usage_pattern?:
                      | 'IMMEDIATE'
                      | 'DEFERRED'
                      | 'RECURRING_PREPAID'
                      | 'RECURRING_POSTPAID'
                      | 'THRESHOLD_PREPAID'
                      | 'THRESHOLD_POSTPAID'
                      | undefined
                    usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
                    customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
                    permit_multiple_payment_tokens?: boolean | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  crypto?:
    | {
        country_code: {}
        name: {
          prefix?: string | undefined
          given_name: string
          surname: string
          middle_name?: string | undefined
        }
        experience_context: { locale?: {} | undefined; return_url: {}; cancel_url: {} }
      }
    | undefined
}
type PayeePaymentMethodPreference = 'UNRESTRICTED' | 'IMMEDIATE_PAYMENT_REQUIRED'
type OrderRequest = {
  intent: CheckoutPaymentIntent
  payer?:
    | {
        email_address?: {} | undefined
        payer_id?: {} | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        birth_date?: {} | undefined
        tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              address_line_3?: string | undefined
              admin_area_4?: string | undefined
              admin_area_3?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
              address_details?:
                | {
                    street_number?: string | undefined
                    street_name?: string | undefined
                    street_type?: string | undefined
                    delivery_service?: string | undefined
                    building_name?: string | undefined
                    sub_building?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  purchase_units: {
    reference_id?: string | undefined
    amount: { currency_code: CurrencyCode; value: string; breakdown?: AmountBreakdown | undefined }
    payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
    payment_instruction?: PaymentInstruction | undefined
    description?: string | undefined
    custom_id?: string | undefined
    invoice_id?: string | undefined
    soft_descriptor?: string | undefined
    items?:
      | {
          name: string
          unit_amount: { currency_code: CurrencyCode; value: string }
          tax?: { currency_code: CurrencyCode; value: string } | undefined
          quantity: string
          description?: string | undefined
          sku?: string | undefined
          url?: string | undefined
          category?: 'DIGITAL_GOODS' | 'PHYSICAL_GOODS' | 'DONATION' | undefined
          image_url?: string | undefined
          upc?:
            | {
                type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
                code: string
              }
            | undefined
          billing_plan?: OrderBillingPlan | undefined
        }[]
      | undefined
    shipping?:
      | {
          name?:
            | {
                prefix?: string | undefined
                given_name?: string | undefined
                surname?: string | undefined
                middle_name?: string | undefined
                suffix?: string | undefined
                full_name?: string | undefined
              }
            | undefined
          email_address?: {} | undefined
          phone_number?:
            | {
                country_code: string
                national_number: string
                extension_number?: string | undefined
              }
            | undefined
          type?:
            | 'SHIPPING'
            | 'PICKUP_IN_PERSON'
            | 'PICKUP_IN_STORE'
            | 'PICKUP_FROM_PERSON'
            | undefined
          options?:
            | {
                id: string
                label: string
                type?: {} | undefined
                amount?: { currency_code: CurrencyCode; value: string } | undefined
                selected: boolean
              }[]
            | undefined
          address?:
            | {
                address_line_1?: string | undefined
                address_line_2?: string | undefined
                address_line_3?: string | undefined
                admin_area_4?: string | undefined
                admin_area_3?: string | undefined
                admin_area_2?: string | undefined
                admin_area_1?: string | undefined
                postal_code?: string | undefined
                country_code: CountryCode
                address_details?:
                  | {
                      street_number?: string | undefined
                      street_name?: string | undefined
                      street_type?: string | undefined
                      delivery_service?: string | undefined
                      building_name?: string | undefined
                      sub_building?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    supplementary_data?:
      | {
          card?:
            | {
                level_2?: Level_2CardProcessingData | undefined
                level_3?: Level_3CardProcessingData | undefined
              }
            | undefined
          risk?: { customer?: ParticipantMetadata | undefined } | undefined
        }
      | undefined
  }[]
  payment_source?: PaymentSource | undefined
  application_context?:
    | {
        brand_name?: string | undefined
        locale?: {} | undefined
        landing_page?: 'LOGIN' | 'BILLING' | 'NO_PREFERENCE' | undefined
        shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
        user_action?: 'CONTINUE' | 'PAY_NOW' | undefined
        payment_method?:
          | {
              payee_preferred?: PayeePaymentMethodPreference | undefined
              standard_entry_class_code?: 'TEL' | 'WEB' | 'CCD' | 'PPD' | undefined
            }
          | undefined
        return_url?: string | undefined
        cancel_url?: string | undefined
        stored_payment_source?:
          | {
              payment_initiator: PaymentInitiator
              payment_type: StoredPaymentSourcePaymentType
              usage?: StoredPaymentSourceUsageType | undefined
              previous_network_transaction_reference?: NetworkTransactionReference | undefined
            }
          | undefined
      }
    | undefined
}
type LiabilityShift = 'NO' | 'POSSIBLE' | 'UNKNOWN'
type ThreeDSecureAuthenticationResponse = {
  authentication_status?: {} | undefined
  enrollment_status?: {} | undefined
}
type AuthenticationResponse = {
  liability_shift?: LiabilityShift | undefined
  three_d_secure?: ThreeDSecureAuthenticationResponse | undefined
}
type CardVaultResponse = {
  id?: string | undefined
  status?: 'VAULTED' | 'CREATED' | 'APPROVED' | undefined
  customer?:
    | {
        id?: MerchantPartnerCustomerId | undefined
        email_address?: {} | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
        merchant_customer_id?: string | undefined
      }
    | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type CardAttributesResponse = { vault?: CardVaultResponse | undefined }
type CardFromRequest = { expiry?: {} | undefined; last_digits?: string | undefined }
type CardResponse = {
  name?: string | undefined
  last_digits?: string | undefined
  brand?: {} | undefined
  available_networks?: {}[] | undefined
  type?: {} | undefined
  authentication_result?: AuthenticationResponse | undefined
  attributes?: CardAttributesResponse | undefined
  from_request?: CardFromRequest | undefined
  expiry?: {} | undefined
  bin_details?:
    | {
        bin?: string | undefined
        issuing_bank?: string | undefined
        bin_country_code?: {} | undefined
        products?: string[] | undefined
      }
    | undefined
  stored_credential?: CardStoredCredential | undefined
}
type PaypalWalletVaultResponse = {
  id?: string | undefined
  status?: 'VAULTED' | 'CREATED' | 'APPROVED' | undefined
  customer?: PaypalWalletCustomer | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type PaypalWalletAttributesResponse = {
  vault?: PaypalWalletVaultResponse | undefined
  cobranded_cards?:
    | {
        labels?: string[] | undefined
        payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
        amount?: { currency_code: CurrencyCode; value: string } | undefined
      }[]
    | undefined
}
type PaypalWalletResponse = {
  email_address?: {} | undefined
  account_id?: {} | undefined
  account_status?: 'VERIFIED' | 'UNVERIFIED' | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name?: string | undefined
        surname?: string | undefined
        middle_name?: string | undefined
        suffix?: string | undefined
        full_name?: string | undefined
      }
    | undefined
  phone_type?: PhoneType | undefined
  phone_number?: { national_number: string } | undefined
  birth_date?: {} | undefined
  business_name?: string | undefined
  tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
  address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        address_line_3?: string | undefined
        admin_area_4?: string | undefined
        admin_area_3?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
        address_details?:
          | {
              street_number?: string | undefined
              street_name?: string | undefined
              street_type?: string | undefined
              delivery_service?: string | undefined
              building_name?: string | undefined
              sub_building?: string | undefined
            }
          | undefined
      }
    | undefined
  attributes?: PaypalWalletAttributesResponse | undefined
  stored_credential?: PaypalWalletStoredCredential | undefined
  experience_status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'CANCELED' | 'APPROVED' | undefined
}
type IbanLastChars = string
type Bancontact = {
  name?: {} | undefined
  country_code?: {} | undefined
  bic?: {} | undefined
  iban_last_chars?: IbanLastChars | undefined
  card_last_digits?: string | undefined
}
type Blik = {
  name?: {} | undefined
  country_code?: {} | undefined
  email?: {} | undefined
  one_click?: { consumer_reference?: string | undefined } | undefined
}
type Eps = { name?: {} | undefined; country_code?: {} | undefined; bic?: {} | undefined }
type Giropay = { name?: {} | undefined; country_code?: {} | undefined; bic?: {} | undefined }
type Ideal = {
  name?: {} | undefined
  country_code?: {} | undefined
  bic?: {} | undefined
  iban_last_chars?: IbanLastChars | undefined
}
type Mybank = {
  name?: {} | undefined
  country_code?: {} | undefined
  bic?: {} | undefined
  iban_last_chars?: IbanLastChars | undefined
}
type P24 = {
  name?: {} | undefined
  email?: {} | undefined
  country_code?: {} | undefined
  payment_descriptor?: string | undefined
  method_id?: string | undefined
  method_description?: string | undefined
}
type Sofort = {
  name?: {} | undefined
  country_code?: {} | undefined
  bic?: {} | undefined
  iban_last_chars?: IbanLastChars | undefined
}
type Trustly = {
  name?: {} | undefined
  country_code?: {} | undefined
  email?: {} | undefined
  bic?: {} | undefined
  iban_last_chars?: IbanLastChars | undefined
}
type VaultResponse = {
  id?: string | undefined
  status?: 'VAULTED' | 'CREATED' | 'APPROVED' | undefined
  customer?:
    | {
        id?: MerchantPartnerCustomerId | undefined
        email_address?: {} | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
      }
    | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type ApplePay = {
  id?: string | undefined
  token?: string | undefined
  name?: {} | undefined
  email_address?: {} | undefined
  phone_number?:
    | { country_code: string; national_number: string; extension_number?: string | undefined }
    | undefined
  card?:
    | {
        name?: string | undefined
        last_digits?: string | undefined
        brand?: {} | undefined
        available_networks?: {}[] | undefined
        type?: {} | undefined
        authentication_result?: AuthenticationResponse | undefined
        attributes?: CardAttributesResponse | undefined
        from_request?: CardFromRequest | undefined
        expiry?: {} | undefined
        bin_details?:
          | {
              bin?: string | undefined
              issuing_bank?: string | undefined
              bin_country_code?: {} | undefined
              products?: string[] | undefined
            }
          | undefined
        stored_credential?: CardStoredCredential | undefined
        billing_address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              address_line_3?: string | undefined
              admin_area_4?: string | undefined
              admin_area_3?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
              address_details?:
                | {
                    street_number?: string | undefined
                    street_name?: string | undefined
                    street_type?: string | undefined
                    delivery_service?: string | undefined
                    building_name?: string | undefined
                    sub_building?: string | undefined
                  }
                | undefined
            }
          | undefined
        country_code?: {} | undefined
      }
    | undefined
  attributes?: { vault?: VaultResponse | undefined } | undefined
  stored_credential?: CardStoredCredential | undefined
}
type GooglePay = {
  name?: {} | undefined
  email_address?: {} | undefined
  phone_number?: { country_code?: string | undefined; national_number: string } | undefined
  card?:
    | {
        name?: string | undefined
        last_digits?: string | undefined
        type?: {} | undefined
        brand?: {} | undefined
        billing_address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              address_line_3?: string | undefined
              admin_area_4?: string | undefined
              admin_area_3?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
              address_details?:
                | {
                    street_number?: string | undefined
                    street_name?: string | undefined
                    street_type?: string | undefined
                    delivery_service?: string | undefined
                    building_name?: string | undefined
                    sub_building?: string | undefined
                  }
                | undefined
            }
          | undefined
        authentication_result?: AuthenticationResponse | undefined
      }
    | undefined
}
type VenmoVaultResponse = {
  id?: string | undefined
  status?: 'VAULTED' | 'CREATED' | 'APPROVED' | undefined
  customer?:
    | {
        id?: MerchantPartnerCustomerId | undefined
        email_address?: {} | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
      }
    | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type VenmoWalletAttributesResponse = { vault?: VenmoVaultResponse | undefined }
type VenmoWalletResponse = {
  email_address?: {} | undefined
  account_id?: {} | undefined
  user_name?: string | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name?: string | undefined
        surname?: string | undefined
        middle_name?: string | undefined
        suffix?: string | undefined
        full_name?: string | undefined
      }
    | undefined
  phone_number?: { national_number: string } | undefined
  address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        address_line_3?: string | undefined
        admin_area_4?: string | undefined
        admin_area_3?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
        address_details?:
          | {
              street_number?: string | undefined
              street_name?: string | undefined
              street_type?: string | undefined
              delivery_service?: string | undefined
              building_name?: string | undefined
              sub_building?: string | undefined
            }
          | undefined
      }
    | undefined
  return_flow?: 'AUTO' | 'MANUAL' | undefined
  attributes?: VenmoWalletAttributesResponse | undefined
}
type Crypto = {
  country_code?: {} | undefined
  name?:
    | {
        prefix?: string | undefined
        given_name: string
        surname: string
        middle_name?: string | undefined
      }
    | undefined
  experience_context?:
    | {
        brand_name?: string | undefined
        locale?: {} | undefined
        shipping_preference?: 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS' | undefined
        return_url?: {} | undefined
        cancel_url?: {} | undefined
      }
    | undefined
}
type AmountWithBreakdown = {
  currency_code: CurrencyCode
  value: string
  breakdown?: AmountBreakdown | undefined
}
type TrackerStatus = 'CANCELLED' | 'SHIPPED'
type Tracker = {
  id?: string | undefined
  status?: TrackerStatus | undefined
  items?:
    | {
        name?: string | undefined
        quantity?: string | undefined
        sku?: string | undefined
        url?: string | undefined
        image_url?: string | undefined
        upc?:
          | {
              type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
              code: string
            }
          | undefined
      }[]
    | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
  create_time?: {} | undefined
  update_time?: {} | undefined
}
type Order = {
  create_time?: {} | undefined
  update_time?: {} | undefined
  id?: string | undefined
  payment_source?:
    | {
        card?: CardResponse | undefined
        paypal?: PaypalWalletResponse | undefined
        bancontact?: Bancontact | undefined
        blik?: Blik | undefined
        eps?: Eps | undefined
        giropay?: Giropay | undefined
        ideal?: Ideal | undefined
        mybank?: Mybank | undefined
        p24?: P24 | undefined
        sofort?: Sofort | undefined
        trustly?: Trustly | undefined
        apple_pay?: ApplePay | undefined
        google_pay?: GooglePay | undefined
        venmo?: VenmoWalletResponse | undefined
        crypto?: Crypto | undefined
      }
    | undefined
  intent?: {} | undefined
  payer?:
    | {
        email_address?: {} | undefined
        payer_id?: {} | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        birth_date?: {} | undefined
        tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              address_line_3?: string | undefined
              admin_area_4?: string | undefined
              admin_area_3?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
              address_details?:
                | {
                    street_number?: string | undefined
                    street_name?: string | undefined
                    street_type?: string | undefined
                    delivery_service?: string | undefined
                    building_name?: string | undefined
                    sub_building?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  purchase_units?:
    | {
        reference_id?: string | undefined
        amount?: AmountWithBreakdown | undefined
        payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
        payment_instruction?: PaymentInstruction | undefined
        description?: string | undefined
        custom_id?: string | undefined
        invoice_id?: string | undefined
        id?: string | undefined
        soft_descriptor?: string | undefined
        items?:
          | {
              name: string
              unit_amount: { currency_code: CurrencyCode; value: string }
              tax?: { currency_code: CurrencyCode; value: string } | undefined
              quantity: string
              description?: string | undefined
              sku?: string | undefined
              url?: string | undefined
              category?: 'DIGITAL_GOODS' | 'PHYSICAL_GOODS' | 'DONATION' | undefined
              image_url?: string | undefined
              upc?:
                | {
                    type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
                    code: string
                  }
                | undefined
              billing_plan?: OrderBillingPlan | undefined
            }[]
          | undefined
        shipping?:
          | {
              name?:
                | {
                    prefix?: string | undefined
                    given_name?: string | undefined
                    surname?: string | undefined
                    middle_name?: string | undefined
                    suffix?: string | undefined
                    full_name?: string | undefined
                  }
                | undefined
              email_address?: {} | undefined
              phone_number?:
                | { country_code?: string | undefined; national_number: string }
                | undefined
              type?:
                | 'SHIPPING'
                | 'PICKUP_IN_PERSON'
                | 'PICKUP_IN_STORE'
                | 'PICKUP_FROM_PERSON'
                | undefined
              options?:
                | {
                    id: string
                    label: string
                    type?: {} | undefined
                    amount?: { currency_code: CurrencyCode; value: string } | undefined
                    selected: boolean
                  }[]
                | undefined
              address?:
                | {
                    address_line_1?: string | undefined
                    address_line_2?: string | undefined
                    address_line_3?: string | undefined
                    admin_area_4?: string | undefined
                    admin_area_3?: string | undefined
                    admin_area_2?: string | undefined
                    admin_area_1?: string | undefined
                    postal_code?: string | undefined
                    country_code: CountryCode
                    address_details?:
                      | {
                          street_number?: string | undefined
                          street_name?: string | undefined
                          street_type?: string | undefined
                          delivery_service?: string | undefined
                          building_name?: string | undefined
                          sub_building?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              trackers?: Tracker[] | undefined
            }
          | undefined
        supplementary_data?:
          | {
              card?:
                | {
                    level_2?: Level_2CardProcessingData | undefined
                    level_3?: Level_3CardProcessingData | undefined
                  }
                | undefined
              risk?: { customer?: ParticipantMetadata | undefined } | undefined
            }
          | undefined
        payments?:
          | {
              authorizations?:
                | {
                    status?:
                      | 'CREATED'
                      | 'CAPTURED'
                      | 'DENIED'
                      | 'PARTIALLY_CAPTURED'
                      | 'VOIDED'
                      | 'PENDING'
                      | undefined
                    status_details?:
                      | { reason?: 'PENDING_REVIEW' | 'DECLINED_BY_RISK_FRAUD_FILTERS' | undefined }
                      | undefined
                    id?: string | undefined
                    amount?:
                      | {
                          currency_code: CurrencyCode
                          value: string
                          breakdown?: AmountBreakdown | undefined
                        }
                      | undefined
                    invoice_id?: string | undefined
                    custom_id?: string | undefined
                    network_transaction_reference?:
                      | {
                          id?: string | undefined
                          date?: string | undefined
                          network?: {} | undefined
                          acquirer_reference_number?: string | undefined
                        }
                      | undefined
                    seller_protection?:
                      | {
                          status?: 'ELIGIBLE' | 'PARTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE' | undefined
                          dispute_categories?:
                            | ('ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION')[]
                            | undefined
                        }
                      | undefined
                    expiration_time?: {} | undefined
                    links?:
                      | {
                          href: string
                          rel: string
                          method?:
                            | 'GET'
                            | 'POST'
                            | 'PUT'
                            | 'DELETE'
                            | 'HEAD'
                            | 'CONNECT'
                            | 'OPTIONS'
                            | 'PATCH'
                            | undefined
                          title?: string | undefined
                          mediaType?: string | undefined
                          encType?: string | undefined
                          schema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                          targetSchema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    create_time?: {} | undefined
                    update_time?: {} | undefined
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
                          response_code?:
                            | '0000'
                            | '00N7'
                            | '0100'
                            | '0390'
                            | '0500'
                            | '0580'
                            | '0800'
                            | '0880'
                            | '0890'
                            | '0960'
                            | '0R00'
                            | '1000'
                            | '10BR'
                            | '1300'
                            | '1310'
                            | '1312'
                            | '1317'
                            | '1320'
                            | '1330'
                            | '1335'
                            | '1340'
                            | '1350'
                            | '1352'
                            | '1360'
                            | '1370'
                            | '1380'
                            | '1382'
                            | '1384'
                            | '1390'
                            | '1393'
                            | '5100'
                            | '5110'
                            | '5120'
                            | '5130'
                            | '5135'
                            | '5140'
                            | '5150'
                            | '5160'
                            | '5170'
                            | '5180'
                            | '5190'
                            | '5200'
                            | '5210'
                            | '5400'
                            | '5500'
                            | '5650'
                            | '5700'
                            | '5710'
                            | '5800'
                            | '5900'
                            | '5910'
                            | '5920'
                            | '5930'
                            | '5950'
                            | '6300'
                            | '7600'
                            | '7700'
                            | '7710'
                            | '7800'
                            | '7900'
                            | '8000'
                            | '8010'
                            | '8020'
                            | '8030'
                            | '8100'
                            | '8110'
                            | '8220'
                            | '9100'
                            | '9500'
                            | '9510'
                            | '9520'
                            | '9530'
                            | '9540'
                            | '9600'
                            | 'PCNR'
                            | 'PCVV'
                            | 'PP06'
                            | 'PPRN'
                            | 'PPAD'
                            | 'PPAB'
                            | 'PPAE'
                            | 'PPAG'
                            | 'PPAI'
                            | 'PPAR'
                            | 'PPAU'
                            | 'PPAV'
                            | 'PPAX'
                            | 'PPBG'
                            | 'PPC2'
                            | 'PPCE'
                            | 'PPCO'
                            | 'PPCR'
                            | 'PPCT'
                            | 'PPCU'
                            | 'PPD3'
                            | 'PPDC'
                            | 'PPDI'
                            | 'PPDV'
                            | 'PPDT'
                            | 'PPEF'
                            | 'PPEL'
                            | 'PPER'
                            | 'PPEX'
                            | 'PPFE'
                            | 'PPFI'
                            | 'PPFR'
                            | 'PPFV'
                            | 'PPGR'
                            | 'PPH1'
                            | 'PPIF'
                            | 'PPII'
                            | 'PPIM'
                            | 'PPIT'
                            | 'PPLR'
                            | 'PPLS'
                            | 'PPMB'
                            | 'PPMC'
                            | 'PPMD'
                            | 'PPNC'
                            | 'PPNL'
                            | 'PPNM'
                            | 'PPNT'
                            | 'PPPH'
                            | 'PPPI'
                            | 'PPPM'
                            | 'PPQC'
                            | 'PPRE'
                            | 'PPRF'
                            | 'PPRR'
                            | 'PPS0'
                            | 'PPS1'
                            | 'PPS2'
                            | 'PPS3'
                            | 'PPS4'
                            | 'PPS5'
                            | 'PPS6'
                            | 'PPSC'
                            | 'PPSD'
                            | 'PPSE'
                            | 'PPTE'
                            | 'PPTF'
                            | 'PPTI'
                            | 'PPTR'
                            | 'PPTT'
                            | 'PPTV'
                            | 'PPUA'
                            | 'PPUC'
                            | 'PPUE'
                            | 'PPUI'
                            | 'PPUP'
                            | 'PPUR'
                            | 'PPVC'
                            | 'PPVE'
                            | 'PPVT'
                            | undefined
                          payment_advice_code?:
                            | '01'
                            | '02'
                            | '03'
                            | '04'
                            | '21'
                            | '22'
                            | '24'
                            | '25'
                            | '26'
                            | '27'
                            | '28'
                            | '29'
                            | '30'
                            | '40'
                            | '43'
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              captures?:
                | {
                    status?:
                      | 'COMPLETED'
                      | 'DECLINED'
                      | 'PARTIALLY_REFUNDED'
                      | 'PENDING'
                      | 'REFUNDED'
                      | 'FAILED'
                      | undefined
                    status_details?:
                      | {
                          reason?:
                            | 'BUYER_COMPLAINT'
                            | 'CHARGEBACK'
                            | 'ECHECK'
                            | 'INTERNATIONAL_WITHDRAWAL'
                            | 'OTHER'
                            | 'PENDING_REVIEW'
                            | 'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION'
                            | 'REFUNDED'
                            | 'TRANSACTION_APPROVED_AWAITING_FUNDING'
                            | 'UNILATERAL'
                            | 'VERIFICATION_REQUIRED'
                            | 'DECLINED_BY_RISK_FRAUD_FILTERS'
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    amount?:
                      | {
                          currency_code: CurrencyCode
                          value: string
                          breakdown?: AmountBreakdown | undefined
                        }
                      | undefined
                    invoice_id?: string | undefined
                    custom_id?: string | undefined
                    network_transaction_reference?:
                      | {
                          id?: string | undefined
                          date?: string | undefined
                          network?: {} | undefined
                          acquirer_reference_number?: string | undefined
                        }
                      | undefined
                    seller_protection?:
                      | {
                          status?: 'ELIGIBLE' | 'PARTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE' | undefined
                          dispute_categories?:
                            | ('ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION')[]
                            | undefined
                        }
                      | undefined
                    final_capture?: boolean | undefined
                    seller_receivable_breakdown?:
                      | {
                          gross_amount: { currency_code: CurrencyCode; value: string }
                          paypal_fee?: { currency_code: CurrencyCode; value: string } | undefined
                          paypal_fee_in_receivable_currency?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          net_amount?: { currency_code: CurrencyCode; value: string } | undefined
                          receivable_amount?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          exchange_rate?:
                            | {
                                source_currency?: {} | undefined
                                target_currency?: {} | undefined
                                value?: string | undefined
                              }
                            | undefined
                          platform_fees?:
                            | {
                                amount: { currency_code: CurrencyCode; value: string }
                                payee?:
                                  | { email_address?: {} | undefined; merchant_id?: {} | undefined }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    disbursement_mode?: {} | undefined
                    links?:
                      | {
                          href: string
                          rel: string
                          method?:
                            | 'GET'
                            | 'POST'
                            | 'PUT'
                            | 'DELETE'
                            | 'HEAD'
                            | 'CONNECT'
                            | 'OPTIONS'
                            | 'PATCH'
                            | undefined
                          title?: string | undefined
                          mediaType?: string | undefined
                          encType?: string | undefined
                          schema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                          targetSchema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
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
                          response_code?:
                            | '0000'
                            | '00N7'
                            | '0100'
                            | '0390'
                            | '0500'
                            | '0580'
                            | '0800'
                            | '0880'
                            | '0890'
                            | '0960'
                            | '0R00'
                            | '1000'
                            | '10BR'
                            | '1300'
                            | '1310'
                            | '1312'
                            | '1317'
                            | '1320'
                            | '1330'
                            | '1335'
                            | '1340'
                            | '1350'
                            | '1352'
                            | '1360'
                            | '1370'
                            | '1380'
                            | '1382'
                            | '1384'
                            | '1390'
                            | '1393'
                            | '5100'
                            | '5110'
                            | '5120'
                            | '5130'
                            | '5135'
                            | '5140'
                            | '5150'
                            | '5160'
                            | '5170'
                            | '5180'
                            | '5190'
                            | '5200'
                            | '5210'
                            | '5400'
                            | '5500'
                            | '5650'
                            | '5700'
                            | '5710'
                            | '5800'
                            | '5900'
                            | '5910'
                            | '5920'
                            | '5930'
                            | '5950'
                            | '6300'
                            | '7600'
                            | '7700'
                            | '7710'
                            | '7800'
                            | '7900'
                            | '8000'
                            | '8010'
                            | '8020'
                            | '8030'
                            | '8100'
                            | '8110'
                            | '8220'
                            | '9100'
                            | '9500'
                            | '9510'
                            | '9520'
                            | '9530'
                            | '9540'
                            | '9600'
                            | 'PCNR'
                            | 'PCVV'
                            | 'PP06'
                            | 'PPRN'
                            | 'PPAD'
                            | 'PPAB'
                            | 'PPAE'
                            | 'PPAG'
                            | 'PPAI'
                            | 'PPAR'
                            | 'PPAU'
                            | 'PPAV'
                            | 'PPAX'
                            | 'PPBG'
                            | 'PPC2'
                            | 'PPCE'
                            | 'PPCO'
                            | 'PPCR'
                            | 'PPCT'
                            | 'PPCU'
                            | 'PPD3'
                            | 'PPDC'
                            | 'PPDI'
                            | 'PPDV'
                            | 'PPDT'
                            | 'PPEF'
                            | 'PPEL'
                            | 'PPER'
                            | 'PPEX'
                            | 'PPFE'
                            | 'PPFI'
                            | 'PPFR'
                            | 'PPFV'
                            | 'PPGR'
                            | 'PPH1'
                            | 'PPIF'
                            | 'PPII'
                            | 'PPIM'
                            | 'PPIT'
                            | 'PPLR'
                            | 'PPLS'
                            | 'PPMB'
                            | 'PPMC'
                            | 'PPMD'
                            | 'PPNC'
                            | 'PPNL'
                            | 'PPNM'
                            | 'PPNT'
                            | 'PPPH'
                            | 'PPPI'
                            | 'PPPM'
                            | 'PPQC'
                            | 'PPRE'
                            | 'PPRF'
                            | 'PPRR'
                            | 'PPS0'
                            | 'PPS1'
                            | 'PPS2'
                            | 'PPS3'
                            | 'PPS4'
                            | 'PPS5'
                            | 'PPS6'
                            | 'PPSC'
                            | 'PPSD'
                            | 'PPSE'
                            | 'PPTE'
                            | 'PPTF'
                            | 'PPTI'
                            | 'PPTR'
                            | 'PPTT'
                            | 'PPTV'
                            | 'PPUA'
                            | 'PPUC'
                            | 'PPUE'
                            | 'PPUI'
                            | 'PPUP'
                            | 'PPUR'
                            | 'PPVC'
                            | 'PPVE'
                            | 'PPVT'
                            | undefined
                          payment_advice_code?:
                            | '01'
                            | '02'
                            | '03'
                            | '04'
                            | '21'
                            | '22'
                            | '24'
                            | '25'
                            | '26'
                            | '27'
                            | '28'
                            | '29'
                            | '30'
                            | '40'
                            | '43'
                            | undefined
                        }
                      | undefined
                    create_time?: {} | undefined
                    update_time?: {} | undefined
                  }[]
                | undefined
              refunds?:
                | {
                    status?: 'CANCELLED' | 'FAILED' | 'PENDING' | 'COMPLETED' | undefined
                    status_details?: { reason?: 'ECHECK' | undefined } | undefined
                    id?: string | undefined
                    amount?: { currency_code: CurrencyCode; value: string } | undefined
                    invoice_id?: string | undefined
                    custom_id?: string | undefined
                    acquirer_reference_number?: string | undefined
                    note_to_payer?: string | undefined
                    seller_payable_breakdown?:
                      | {
                          gross_amount?: { currency_code: CurrencyCode; value: string } | undefined
                          paypal_fee?: { currency_code: CurrencyCode; value: string } | undefined
                          paypal_fee_in_receivable_currency?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          net_amount?: { currency_code: CurrencyCode; value: string } | undefined
                          net_amount_in_receivable_currency?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          platform_fees?:
                            | {
                                amount: { currency_code: CurrencyCode; value: string }
                                payee?:
                                  | { email_address?: {} | undefined; merchant_id?: {} | undefined }
                                  | undefined
                              }[]
                            | undefined
                          net_amount_breakdown?:
                            | {
                                payable_amount?:
                                  | { currency_code: CurrencyCode; value: string }
                                  | undefined
                                converted_amount?:
                                  | { currency_code: CurrencyCode; value: string }
                                  | undefined
                                exchange_rate?:
                                  | {
                                      source_currency?: {} | undefined
                                      target_currency?: {} | undefined
                                      value?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                          total_refunded_amount?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                        }
                      | undefined
                    payer?:
                      | { email_address?: {} | undefined; merchant_id?: {} | undefined }
                      | undefined
                    links?:
                      | {
                          href: string
                          rel: string
                          method?:
                            | 'GET'
                            | 'POST'
                            | 'PUT'
                            | 'DELETE'
                            | 'HEAD'
                            | 'CONNECT'
                            | 'OPTIONS'
                            | 'PATCH'
                            | undefined
                          title?: string | undefined
                          mediaType?: string | undefined
                          encType?: string | undefined
                          schema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                          targetSchema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    create_time?: {} | undefined
                    update_time?: {} | undefined
                  }[]
                | undefined
            }
          | undefined
      }[]
    | undefined
  status?: {} | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type Error = {
  name: string
  message: string
  debug_id: string
  details?:
    | {
        field?: string | undefined
        value?: string | undefined
        location?: string | undefined
        issue: string
        links?:
          | {
              href: string
              rel: string
              method?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'HEAD'
                | 'CONNECT'
                | 'OPTIONS'
                | 'PATCH'
                | undefined
              title?: string | undefined
              mediaType?: string | undefined
              encType?: string | undefined
              schema?:
                | {
                    additionalItems?: { [x: string]: unknown } | undefined
                    dependencies?: { [x: string]: unknown } | undefined
                    items?: { [x: string]: unknown } | undefined
                    definitions?: { [x: string]: unknown } | undefined
                    patternProperties?: { [x: string]: unknown } | undefined
                    properties?: { [x: string]: unknown } | undefined
                    allOf?: { [x: string]: unknown }[] | undefined
                    anyOf?: { [x: string]: unknown }[] | undefined
                    oneOf?: { [x: string]: unknown }[] | undefined
                    not?: { [x: string]: unknown } | undefined
                    links?: { [x: string]: unknown }[] | undefined
                    fragmentResolution?: string | undefined
                    media?:
                      | { type?: string | undefined; binaryEncoding?: string | undefined }
                      | undefined
                    pathStart?: string | undefined
                  }
                | undefined
              targetSchema?:
                | {
                    additionalItems?: { [x: string]: unknown } | undefined
                    dependencies?: { [x: string]: unknown } | undefined
                    items?: { [x: string]: unknown } | undefined
                    definitions?: { [x: string]: unknown } | undefined
                    patternProperties?: { [x: string]: unknown } | undefined
                    properties?: { [x: string]: unknown } | undefined
                    allOf?: { [x: string]: unknown }[] | undefined
                    anyOf?: { [x: string]: unknown }[] | undefined
                    oneOf?: { [x: string]: unknown }[] | undefined
                    not?: { [x: string]: unknown } | undefined
                    links?: { [x: string]: unknown }[] | undefined
                    fragmentResolution?: string | undefined
                    media?:
                      | { type?: string | undefined; binaryEncoding?: string | undefined }
                      | undefined
                    pathStart?: string | undefined
                  }
                | undefined
            }[]
          | undefined
        description?: string | undefined
      }[]
    | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type PatchRequest = {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path?: string | undefined
  value?: { [x: string]: unknown } | undefined
  from?: string | undefined
}[]
type StoredPaymentSource = {
  payment_initiator: PaymentInitiator
  payment_type: StoredPaymentSourcePaymentType
  usage?: StoredPaymentSourceUsageType | undefined
  previous_network_transaction_reference?: NetworkTransactionReference | undefined
}
type OrderConfirmApplicationContext = {
  brand_name?: string | undefined
  locale?: {} | undefined
  return_url?: string | undefined
  cancel_url?: string | undefined
  stored_payment_source?: StoredPaymentSource | undefined
}
type ConfirmOrderRequest = {
  payment_source: PaymentSource
  application_context?: OrderConfirmApplicationContext | undefined
}
type OrderAuthorizeRequest = {
  payment_source?:
    | {
        card?: CardRequest | undefined
        token?: Token | undefined
        paypal?:
          | {
              vault_id?: {} | undefined
              email_address?: {} | undefined
              name?:
                | {
                    prefix?: string | undefined
                    given_name?: string | undefined
                    surname?: string | undefined
                    middle_name?: string | undefined
                    suffix?: string | undefined
                    full_name?: string | undefined
                  }
                | undefined
              phone?:
                | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
                | undefined
              birth_date?: {} | undefined
              tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
              address?:
                | {
                    address_line_1?: string | undefined
                    address_line_2?: string | undefined
                    address_line_3?: string | undefined
                    admin_area_4?: string | undefined
                    admin_area_3?: string | undefined
                    admin_area_2?: string | undefined
                    admin_area_1?: string | undefined
                    postal_code?: string | undefined
                    country_code: CountryCode
                    address_details?:
                      | {
                          street_number?: string | undefined
                          street_name?: string | undefined
                          street_type?: string | undefined
                          delivery_service?: string | undefined
                          building_name?: string | undefined
                          sub_building?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              attributes?:
                | {
                    customer?: PaypalWalletCustomer | undefined
                    vault?:
                      | {
                          store_in_vault?: StoreInVaultInstruction | undefined
                          description?: string | undefined
                          usage_pattern?:
                            | 'IMMEDIATE'
                            | 'DEFERRED'
                            | 'RECURRING_PREPAID'
                            | 'RECURRING_POSTPAID'
                            | 'THRESHOLD_PREPAID'
                            | 'THRESHOLD_POSTPAID'
                            | 'SUBSCRIPTION_PREPAID'
                            | 'SUBSCRIPTION_POSTPAID'
                            | 'UNSCHEDULED_PREPAID'
                            | 'UNSCHEDULED_POSTPAID'
                            | 'INSTALLMENT_PREPAID'
                            | 'INSTALLMENT_POSTPAID'
                            | undefined
                          shipping?:
                            | {
                                name?:
                                  | {
                                      prefix?: string | undefined
                                      given_name?: string | undefined
                                      surname?: string | undefined
                                      middle_name?: string | undefined
                                      suffix?: string | undefined
                                      full_name?: string | undefined
                                    }
                                  | undefined
                                email_address?: {} | undefined
                                phone_number?:
                                  | {
                                      country_code: string
                                      national_number: string
                                      extension_number?: string | undefined
                                    }
                                  | undefined
                                type?:
                                  | 'SHIPPING'
                                  | 'PICKUP_IN_PERSON'
                                  | 'PICKUP_IN_STORE'
                                  | 'PICKUP_FROM_PERSON'
                                  | undefined
                                options?:
                                  | {
                                      id: string
                                      label: string
                                      type?: {} | undefined
                                      amount?:
                                        | { currency_code: CurrencyCode; value: string }
                                        | undefined
                                      selected: boolean
                                    }[]
                                  | undefined
                                address?:
                                  | {
                                      address_line_1?: string | undefined
                                      address_line_2?: string | undefined
                                      address_line_3?: string | undefined
                                      admin_area_4?: string | undefined
                                      admin_area_3?: string | undefined
                                      admin_area_2?: string | undefined
                                      admin_area_1?: string | undefined
                                      postal_code?: string | undefined
                                      country_code: CountryCode
                                      address_details?:
                                        | {
                                            street_number?: string | undefined
                                            street_name?: string | undefined
                                            street_type?: string | undefined
                                            delivery_service?: string | undefined
                                            building_name?: string | undefined
                                            sub_building?: string | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
                          customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
                          permit_multiple_payment_tokens?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              experience_context?: PaypalWalletExperienceContext | undefined
              billing_agreement_id?: BillingAgreementId | undefined
              stored_credential?: PaypalWalletStoredCredential | undefined
            }
          | undefined
        bancontact?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        blik?:
          | {
              name: {}
              country_code: {}
              email?: {} | undefined
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                    consumer_ip?: {} | undefined
                    consumer_user_agent?: string | undefined
                  }
                | undefined
              level_0?: { auth_code: string } | undefined
              one_click?:
                | {
                    auth_code?: string | undefined
                    consumer_reference: string
                    alias_label?: string | undefined
                    alias_key?: string | undefined
                  }
                | undefined
            }
          | undefined
        eps?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        giropay?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ideal?:
          | {
              name: {}
              country_code: {}
              bic?: {} | undefined
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        mybank?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        p24?:
          | {
              name: {}
              email: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        sofort?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        trustly?:
          | {
              name: {}
              country_code: {}
              email: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        apple_pay?:
          | {
              id?: string | undefined
              name?: {} | undefined
              email_address?: {} | undefined
              phone_number?: { national_number: string } | undefined
              decrypted_token?:
                | {
                    transaction_amount?: { currency_code: CurrencyCode; value: string } | undefined
                    tokenized_card: {
                      id?: {} | undefined
                      name?: string | undefined
                      number?: string | undefined
                      expiry?: {} | undefined
                      security_code?: string | undefined
                      last_digits?: string | undefined
                      card_type?: {} | undefined
                      type?: {} | undefined
                      brand?: {} | undefined
                      billing_address?:
                        | {
                            address_line_1?: string | undefined
                            address_line_2?: string | undefined
                            address_line_3?: string | undefined
                            admin_area_4?: string | undefined
                            admin_area_3?: string | undefined
                            admin_area_2?: string | undefined
                            admin_area_1?: string | undefined
                            postal_code?: string | undefined
                            country_code: CountryCode
                            address_details?:
                              | {
                                  street_number?: string | undefined
                                  street_name?: string | undefined
                                  street_type?: string | undefined
                                  delivery_service?: string | undefined
                                  building_name?: string | undefined
                                  sub_building?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                      attributes?:
                        | {
                            customer?: CardCustomer | undefined
                            vault?:
                              | { store_in_vault?: StoreInVaultInstruction | undefined }
                              | undefined
                            verification?:
                              | {
                                  method?:
                                    | 'SCA_ALWAYS'
                                    | 'SCA_WHEN_REQUIRED'
                                    | '3D_SECURE'
                                    | 'AVS_CVV'
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                    device_manufacturer_id?: string | undefined
                    payment_data_type?: '3DSECURE' | 'EMV' | undefined
                    payment_data?:
                      | {
                          cryptogram?: string | undefined
                          eci_indicator?: string | undefined
                          emv_data?: string | undefined
                          pin?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              stored_credential?: CardStoredCredential | undefined
              vault_id?: {} | undefined
              attributes?: ApplePayAttributes | undefined
              experience_context?: ApplePayExperienceContext | undefined
            }
          | undefined
        google_pay?:
          | {
              name?: {} | undefined
              email_address?: {} | undefined
              phone_number?:
                | { country_code?: string | undefined; national_number: string }
                | undefined
              card?:
                | {
                    name?: string | undefined
                    number?: string | undefined
                    expiry?: {} | undefined
                    last_digits?: string | undefined
                    type?: {} | undefined
                    brand?: {} | undefined
                    billing_address?:
                      | {
                          address_line_1?: string | undefined
                          address_line_2?: string | undefined
                          address_line_3?: string | undefined
                          admin_area_4?: string | undefined
                          admin_area_3?: string | undefined
                          admin_area_2?: string | undefined
                          admin_area_1?: string | undefined
                          postal_code?: string | undefined
                          country_code: CountryCode
                          address_details?:
                            | {
                                street_number?: string | undefined
                                street_name?: string | undefined
                                street_type?: string | undefined
                                delivery_service?: string | undefined
                                building_name?: string | undefined
                                sub_building?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              decrypted_token?:
                | {
                    message_id?: string | undefined
                    message_expiration?: string | undefined
                    payment_method: 'CARD'
                    card: {
                      name?: string | undefined
                      number?: string | undefined
                      expiry?: {} | undefined
                      last_digits?: string | undefined
                      type?: {} | undefined
                      brand?: {} | undefined
                      billing_address?:
                        | {
                            address_line_1?: string | undefined
                            address_line_2?: string | undefined
                            address_line_3?: string | undefined
                            admin_area_4?: string | undefined
                            admin_area_3?: string | undefined
                            admin_area_2?: string | undefined
                            admin_area_1?: string | undefined
                            postal_code?: string | undefined
                            country_code: CountryCode
                            address_details?:
                              | {
                                  street_number?: string | undefined
                                  street_name?: string | undefined
                                  street_type?: string | undefined
                                  delivery_service?: string | undefined
                                  building_name?: string | undefined
                                  sub_building?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                    authentication_method: 'PAN_ONLY' | 'CRYPTOGRAM_3DS'
                    cryptogram?: string | undefined
                    eci_indicator?: string | undefined
                  }
                | undefined
              assurance_details?:
                | {
                    account_verified?: boolean | undefined
                    card_holder_authenticated?: boolean | undefined
                  }
                | undefined
              experience_context?: GooglePayExperienceContext | undefined
            }
          | undefined
        venmo?:
          | {
              vault_id?: {} | undefined
              email_address?: {} | undefined
              experience_context?: VenmoWalletExperienceContext | undefined
              attributes?:
                | {
                    customer?: VenmoWalletCustomer | undefined
                    vault?:
                      | {
                          store_in_vault: StoreInVaultInstruction
                          description?: string | undefined
                          usage_pattern?:
                            | 'IMMEDIATE'
                            | 'DEFERRED'
                            | 'RECURRING_PREPAID'
                            | 'RECURRING_POSTPAID'
                            | 'THRESHOLD_PREPAID'
                            | 'THRESHOLD_POSTPAID'
                            | undefined
                          usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
                          customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
                          permit_multiple_payment_tokens?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        crypto?:
          | {
              country_code: {}
              name: {
                prefix?: string | undefined
                given_name: string
                surname: string
                middle_name?: string | undefined
              }
              experience_context: { locale?: {} | undefined; return_url: {}; cancel_url: {} }
            }
          | undefined
      }
    | undefined
}
type OrderAuthorizeResponse = {
  create_time?: {} | undefined
  update_time?: {} | undefined
  id?: string | undefined
  payment_source?:
    | {
        card?: CardResponse | undefined
        paypal?: PaypalWalletResponse | undefined
        bancontact?: Bancontact | undefined
        blik?: Blik | undefined
        eps?: Eps | undefined
        giropay?: Giropay | undefined
        ideal?: Ideal | undefined
        mybank?: Mybank | undefined
        p24?: P24 | undefined
        sofort?: Sofort | undefined
        trustly?: Trustly | undefined
        apple_pay?: ApplePay | undefined
        google_pay?: GooglePay | undefined
        venmo?: VenmoWalletResponse | undefined
        crypto?: Crypto | undefined
      }
    | undefined
  intent?: {} | undefined
  payer?:
    | {
        email_address?: {} | undefined
        payer_id?: {} | undefined
        name?:
          | {
              prefix?: string | undefined
              given_name?: string | undefined
              surname?: string | undefined
              middle_name?: string | undefined
              suffix?: string | undefined
              full_name?: string | undefined
            }
          | undefined
        phone?:
          | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
          | undefined
        birth_date?: {} | undefined
        tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
        address?:
          | {
              address_line_1?: string | undefined
              address_line_2?: string | undefined
              address_line_3?: string | undefined
              admin_area_4?: string | undefined
              admin_area_3?: string | undefined
              admin_area_2?: string | undefined
              admin_area_1?: string | undefined
              postal_code?: string | undefined
              country_code: CountryCode
              address_details?:
                | {
                    street_number?: string | undefined
                    street_name?: string | undefined
                    street_type?: string | undefined
                    delivery_service?: string | undefined
                    building_name?: string | undefined
                    sub_building?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  purchase_units?:
    | {
        reference_id?: string | undefined
        amount?: AmountWithBreakdown | undefined
        payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
        payment_instruction?: PaymentInstruction | undefined
        description?: string | undefined
        custom_id?: string | undefined
        invoice_id?: string | undefined
        id?: string | undefined
        soft_descriptor?: string | undefined
        items?:
          | {
              name: string
              unit_amount: { currency_code: CurrencyCode; value: string }
              tax?: { currency_code: CurrencyCode; value: string } | undefined
              quantity: string
              description?: string | undefined
              sku?: string | undefined
              url?: string | undefined
              category?: 'DIGITAL_GOODS' | 'PHYSICAL_GOODS' | 'DONATION' | undefined
              image_url?: string | undefined
              upc?:
                | {
                    type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
                    code: string
                  }
                | undefined
              billing_plan?: OrderBillingPlan | undefined
            }[]
          | undefined
        shipping?:
          | {
              name?:
                | {
                    prefix?: string | undefined
                    given_name?: string | undefined
                    surname?: string | undefined
                    middle_name?: string | undefined
                    suffix?: string | undefined
                    full_name?: string | undefined
                  }
                | undefined
              email_address?: {} | undefined
              phone_number?:
                | { country_code?: string | undefined; national_number: string }
                | undefined
              type?:
                | 'SHIPPING'
                | 'PICKUP_IN_PERSON'
                | 'PICKUP_IN_STORE'
                | 'PICKUP_FROM_PERSON'
                | undefined
              options?:
                | {
                    id: string
                    label: string
                    type?: {} | undefined
                    amount?: { currency_code: CurrencyCode; value: string } | undefined
                    selected: boolean
                  }[]
                | undefined
              address?:
                | {
                    address_line_1?: string | undefined
                    address_line_2?: string | undefined
                    address_line_3?: string | undefined
                    admin_area_4?: string | undefined
                    admin_area_3?: string | undefined
                    admin_area_2?: string | undefined
                    admin_area_1?: string | undefined
                    postal_code?: string | undefined
                    country_code: CountryCode
                    address_details?:
                      | {
                          street_number?: string | undefined
                          street_name?: string | undefined
                          street_type?: string | undefined
                          delivery_service?: string | undefined
                          building_name?: string | undefined
                          sub_building?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              trackers?: Tracker[] | undefined
            }
          | undefined
        supplementary_data?:
          | {
              card?:
                | {
                    level_2?: Level_2CardProcessingData | undefined
                    level_3?: Level_3CardProcessingData | undefined
                  }
                | undefined
              risk?: { customer?: ParticipantMetadata | undefined } | undefined
            }
          | undefined
        payments?:
          | {
              authorizations?:
                | {
                    status?:
                      | 'CREATED'
                      | 'CAPTURED'
                      | 'DENIED'
                      | 'PARTIALLY_CAPTURED'
                      | 'VOIDED'
                      | 'PENDING'
                      | undefined
                    status_details?:
                      | { reason?: 'PENDING_REVIEW' | 'DECLINED_BY_RISK_FRAUD_FILTERS' | undefined }
                      | undefined
                    id?: string | undefined
                    amount?:
                      | {
                          currency_code: CurrencyCode
                          value: string
                          breakdown?: AmountBreakdown | undefined
                        }
                      | undefined
                    invoice_id?: string | undefined
                    custom_id?: string | undefined
                    network_transaction_reference?:
                      | {
                          id?: string | undefined
                          date?: string | undefined
                          network?: {} | undefined
                          acquirer_reference_number?: string | undefined
                        }
                      | undefined
                    seller_protection?:
                      | {
                          status?: 'ELIGIBLE' | 'PARTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE' | undefined
                          dispute_categories?:
                            | ('ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION')[]
                            | undefined
                        }
                      | undefined
                    expiration_time?: {} | undefined
                    links?:
                      | {
                          href: string
                          rel: string
                          method?:
                            | 'GET'
                            | 'POST'
                            | 'PUT'
                            | 'DELETE'
                            | 'HEAD'
                            | 'CONNECT'
                            | 'OPTIONS'
                            | 'PATCH'
                            | undefined
                          title?: string | undefined
                          mediaType?: string | undefined
                          encType?: string | undefined
                          schema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                          targetSchema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    create_time?: {} | undefined
                    update_time?: {} | undefined
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
                          response_code?:
                            | '0000'
                            | '00N7'
                            | '0100'
                            | '0390'
                            | '0500'
                            | '0580'
                            | '0800'
                            | '0880'
                            | '0890'
                            | '0960'
                            | '0R00'
                            | '1000'
                            | '10BR'
                            | '1300'
                            | '1310'
                            | '1312'
                            | '1317'
                            | '1320'
                            | '1330'
                            | '1335'
                            | '1340'
                            | '1350'
                            | '1352'
                            | '1360'
                            | '1370'
                            | '1380'
                            | '1382'
                            | '1384'
                            | '1390'
                            | '1393'
                            | '5100'
                            | '5110'
                            | '5120'
                            | '5130'
                            | '5135'
                            | '5140'
                            | '5150'
                            | '5160'
                            | '5170'
                            | '5180'
                            | '5190'
                            | '5200'
                            | '5210'
                            | '5400'
                            | '5500'
                            | '5650'
                            | '5700'
                            | '5710'
                            | '5800'
                            | '5900'
                            | '5910'
                            | '5920'
                            | '5930'
                            | '5950'
                            | '6300'
                            | '7600'
                            | '7700'
                            | '7710'
                            | '7800'
                            | '7900'
                            | '8000'
                            | '8010'
                            | '8020'
                            | '8030'
                            | '8100'
                            | '8110'
                            | '8220'
                            | '9100'
                            | '9500'
                            | '9510'
                            | '9520'
                            | '9530'
                            | '9540'
                            | '9600'
                            | 'PCNR'
                            | 'PCVV'
                            | 'PP06'
                            | 'PPRN'
                            | 'PPAD'
                            | 'PPAB'
                            | 'PPAE'
                            | 'PPAG'
                            | 'PPAI'
                            | 'PPAR'
                            | 'PPAU'
                            | 'PPAV'
                            | 'PPAX'
                            | 'PPBG'
                            | 'PPC2'
                            | 'PPCE'
                            | 'PPCO'
                            | 'PPCR'
                            | 'PPCT'
                            | 'PPCU'
                            | 'PPD3'
                            | 'PPDC'
                            | 'PPDI'
                            | 'PPDV'
                            | 'PPDT'
                            | 'PPEF'
                            | 'PPEL'
                            | 'PPER'
                            | 'PPEX'
                            | 'PPFE'
                            | 'PPFI'
                            | 'PPFR'
                            | 'PPFV'
                            | 'PPGR'
                            | 'PPH1'
                            | 'PPIF'
                            | 'PPII'
                            | 'PPIM'
                            | 'PPIT'
                            | 'PPLR'
                            | 'PPLS'
                            | 'PPMB'
                            | 'PPMC'
                            | 'PPMD'
                            | 'PPNC'
                            | 'PPNL'
                            | 'PPNM'
                            | 'PPNT'
                            | 'PPPH'
                            | 'PPPI'
                            | 'PPPM'
                            | 'PPQC'
                            | 'PPRE'
                            | 'PPRF'
                            | 'PPRR'
                            | 'PPS0'
                            | 'PPS1'
                            | 'PPS2'
                            | 'PPS3'
                            | 'PPS4'
                            | 'PPS5'
                            | 'PPS6'
                            | 'PPSC'
                            | 'PPSD'
                            | 'PPSE'
                            | 'PPTE'
                            | 'PPTF'
                            | 'PPTI'
                            | 'PPTR'
                            | 'PPTT'
                            | 'PPTV'
                            | 'PPUA'
                            | 'PPUC'
                            | 'PPUE'
                            | 'PPUI'
                            | 'PPUP'
                            | 'PPUR'
                            | 'PPVC'
                            | 'PPVE'
                            | 'PPVT'
                            | undefined
                          payment_advice_code?:
                            | '01'
                            | '02'
                            | '03'
                            | '04'
                            | '21'
                            | '22'
                            | '24'
                            | '25'
                            | '26'
                            | '27'
                            | '28'
                            | '29'
                            | '30'
                            | '40'
                            | '43'
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              captures?:
                | {
                    status?:
                      | 'COMPLETED'
                      | 'DECLINED'
                      | 'PARTIALLY_REFUNDED'
                      | 'PENDING'
                      | 'REFUNDED'
                      | 'FAILED'
                      | undefined
                    status_details?:
                      | {
                          reason?:
                            | 'BUYER_COMPLAINT'
                            | 'CHARGEBACK'
                            | 'ECHECK'
                            | 'INTERNATIONAL_WITHDRAWAL'
                            | 'OTHER'
                            | 'PENDING_REVIEW'
                            | 'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION'
                            | 'REFUNDED'
                            | 'TRANSACTION_APPROVED_AWAITING_FUNDING'
                            | 'UNILATERAL'
                            | 'VERIFICATION_REQUIRED'
                            | 'DECLINED_BY_RISK_FRAUD_FILTERS'
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    amount?:
                      | {
                          currency_code: CurrencyCode
                          value: string
                          breakdown?: AmountBreakdown | undefined
                        }
                      | undefined
                    invoice_id?: string | undefined
                    custom_id?: string | undefined
                    network_transaction_reference?:
                      | {
                          id?: string | undefined
                          date?: string | undefined
                          network?: {} | undefined
                          acquirer_reference_number?: string | undefined
                        }
                      | undefined
                    seller_protection?:
                      | {
                          status?: 'ELIGIBLE' | 'PARTIALLY_ELIGIBLE' | 'NOT_ELIGIBLE' | undefined
                          dispute_categories?:
                            | ('ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION')[]
                            | undefined
                        }
                      | undefined
                    final_capture?: boolean | undefined
                    seller_receivable_breakdown?:
                      | {
                          gross_amount: { currency_code: CurrencyCode; value: string }
                          paypal_fee?: { currency_code: CurrencyCode; value: string } | undefined
                          paypal_fee_in_receivable_currency?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          net_amount?: { currency_code: CurrencyCode; value: string } | undefined
                          receivable_amount?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          exchange_rate?:
                            | {
                                source_currency?: {} | undefined
                                target_currency?: {} | undefined
                                value?: string | undefined
                              }
                            | undefined
                          platform_fees?:
                            | {
                                amount: { currency_code: CurrencyCode; value: string }
                                payee?:
                                  | { email_address?: {} | undefined; merchant_id?: {} | undefined }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    disbursement_mode?: {} | undefined
                    links?:
                      | {
                          href: string
                          rel: string
                          method?:
                            | 'GET'
                            | 'POST'
                            | 'PUT'
                            | 'DELETE'
                            | 'HEAD'
                            | 'CONNECT'
                            | 'OPTIONS'
                            | 'PATCH'
                            | undefined
                          title?: string | undefined
                          mediaType?: string | undefined
                          encType?: string | undefined
                          schema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                          targetSchema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
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
                          response_code?:
                            | '0000'
                            | '00N7'
                            | '0100'
                            | '0390'
                            | '0500'
                            | '0580'
                            | '0800'
                            | '0880'
                            | '0890'
                            | '0960'
                            | '0R00'
                            | '1000'
                            | '10BR'
                            | '1300'
                            | '1310'
                            | '1312'
                            | '1317'
                            | '1320'
                            | '1330'
                            | '1335'
                            | '1340'
                            | '1350'
                            | '1352'
                            | '1360'
                            | '1370'
                            | '1380'
                            | '1382'
                            | '1384'
                            | '1390'
                            | '1393'
                            | '5100'
                            | '5110'
                            | '5120'
                            | '5130'
                            | '5135'
                            | '5140'
                            | '5150'
                            | '5160'
                            | '5170'
                            | '5180'
                            | '5190'
                            | '5200'
                            | '5210'
                            | '5400'
                            | '5500'
                            | '5650'
                            | '5700'
                            | '5710'
                            | '5800'
                            | '5900'
                            | '5910'
                            | '5920'
                            | '5930'
                            | '5950'
                            | '6300'
                            | '7600'
                            | '7700'
                            | '7710'
                            | '7800'
                            | '7900'
                            | '8000'
                            | '8010'
                            | '8020'
                            | '8030'
                            | '8100'
                            | '8110'
                            | '8220'
                            | '9100'
                            | '9500'
                            | '9510'
                            | '9520'
                            | '9530'
                            | '9540'
                            | '9600'
                            | 'PCNR'
                            | 'PCVV'
                            | 'PP06'
                            | 'PPRN'
                            | 'PPAD'
                            | 'PPAB'
                            | 'PPAE'
                            | 'PPAG'
                            | 'PPAI'
                            | 'PPAR'
                            | 'PPAU'
                            | 'PPAV'
                            | 'PPAX'
                            | 'PPBG'
                            | 'PPC2'
                            | 'PPCE'
                            | 'PPCO'
                            | 'PPCR'
                            | 'PPCT'
                            | 'PPCU'
                            | 'PPD3'
                            | 'PPDC'
                            | 'PPDI'
                            | 'PPDV'
                            | 'PPDT'
                            | 'PPEF'
                            | 'PPEL'
                            | 'PPER'
                            | 'PPEX'
                            | 'PPFE'
                            | 'PPFI'
                            | 'PPFR'
                            | 'PPFV'
                            | 'PPGR'
                            | 'PPH1'
                            | 'PPIF'
                            | 'PPII'
                            | 'PPIM'
                            | 'PPIT'
                            | 'PPLR'
                            | 'PPLS'
                            | 'PPMB'
                            | 'PPMC'
                            | 'PPMD'
                            | 'PPNC'
                            | 'PPNL'
                            | 'PPNM'
                            | 'PPNT'
                            | 'PPPH'
                            | 'PPPI'
                            | 'PPPM'
                            | 'PPQC'
                            | 'PPRE'
                            | 'PPRF'
                            | 'PPRR'
                            | 'PPS0'
                            | 'PPS1'
                            | 'PPS2'
                            | 'PPS3'
                            | 'PPS4'
                            | 'PPS5'
                            | 'PPS6'
                            | 'PPSC'
                            | 'PPSD'
                            | 'PPSE'
                            | 'PPTE'
                            | 'PPTF'
                            | 'PPTI'
                            | 'PPTR'
                            | 'PPTT'
                            | 'PPTV'
                            | 'PPUA'
                            | 'PPUC'
                            | 'PPUE'
                            | 'PPUI'
                            | 'PPUP'
                            | 'PPUR'
                            | 'PPVC'
                            | 'PPVE'
                            | 'PPVT'
                            | undefined
                          payment_advice_code?:
                            | '01'
                            | '02'
                            | '03'
                            | '04'
                            | '21'
                            | '22'
                            | '24'
                            | '25'
                            | '26'
                            | '27'
                            | '28'
                            | '29'
                            | '30'
                            | '40'
                            | '43'
                            | undefined
                        }
                      | undefined
                    create_time?: {} | undefined
                    update_time?: {} | undefined
                  }[]
                | undefined
              refunds?:
                | {
                    status?: 'CANCELLED' | 'FAILED' | 'PENDING' | 'COMPLETED' | undefined
                    status_details?: { reason?: 'ECHECK' | undefined } | undefined
                    id?: string | undefined
                    amount?: { currency_code: CurrencyCode; value: string } | undefined
                    invoice_id?: string | undefined
                    custom_id?: string | undefined
                    acquirer_reference_number?: string | undefined
                    note_to_payer?: string | undefined
                    seller_payable_breakdown?:
                      | {
                          gross_amount?: { currency_code: CurrencyCode; value: string } | undefined
                          paypal_fee?: { currency_code: CurrencyCode; value: string } | undefined
                          paypal_fee_in_receivable_currency?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          net_amount?: { currency_code: CurrencyCode; value: string } | undefined
                          net_amount_in_receivable_currency?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                          platform_fees?:
                            | {
                                amount: { currency_code: CurrencyCode; value: string }
                                payee?:
                                  | { email_address?: {} | undefined; merchant_id?: {} | undefined }
                                  | undefined
                              }[]
                            | undefined
                          net_amount_breakdown?:
                            | {
                                payable_amount?:
                                  | { currency_code: CurrencyCode; value: string }
                                  | undefined
                                converted_amount?:
                                  | { currency_code: CurrencyCode; value: string }
                                  | undefined
                                exchange_rate?:
                                  | {
                                      source_currency?: {} | undefined
                                      target_currency?: {} | undefined
                                      value?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                          total_refunded_amount?:
                            | { currency_code: CurrencyCode; value: string }
                            | undefined
                        }
                      | undefined
                    payer?:
                      | { email_address?: {} | undefined; merchant_id?: {} | undefined }
                      | undefined
                    links?:
                      | {
                          href: string
                          rel: string
                          method?:
                            | 'GET'
                            | 'POST'
                            | 'PUT'
                            | 'DELETE'
                            | 'HEAD'
                            | 'CONNECT'
                            | 'OPTIONS'
                            | 'PATCH'
                            | undefined
                          title?: string | undefined
                          mediaType?: string | undefined
                          encType?: string | undefined
                          schema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                          targetSchema?:
                            | {
                                additionalItems?: { [x: string]: unknown } | undefined
                                dependencies?: { [x: string]: unknown } | undefined
                                items?: { [x: string]: unknown } | undefined
                                definitions?: { [x: string]: unknown } | undefined
                                patternProperties?: { [x: string]: unknown } | undefined
                                properties?: { [x: string]: unknown } | undefined
                                allOf?: { [x: string]: unknown }[] | undefined
                                anyOf?: { [x: string]: unknown }[] | undefined
                                oneOf?: { [x: string]: unknown }[] | undefined
                                not?: { [x: string]: unknown } | undefined
                                links?: { [x: string]: unknown }[] | undefined
                                fragmentResolution?: string | undefined
                                media?:
                                  | {
                                      type?: string | undefined
                                      binaryEncoding?: string | undefined
                                    }
                                  | undefined
                                pathStart?: string | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    create_time?: {} | undefined
                    update_time?: {} | undefined
                  }[]
                | undefined
            }
          | undefined
      }[]
    | undefined
  status?: {} | undefined
  links?:
    | {
        href: string
        rel: string
        method?:
          | 'GET'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'HEAD'
          | 'CONNECT'
          | 'OPTIONS'
          | 'PATCH'
          | undefined
        title?: string | undefined
        mediaType?: string | undefined
        encType?: string | undefined
        schema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
        targetSchema?:
          | {
              additionalItems?: { [x: string]: unknown } | undefined
              dependencies?: { [x: string]: unknown } | undefined
              items?: { [x: string]: unknown } | undefined
              definitions?: { [x: string]: unknown } | undefined
              patternProperties?: { [x: string]: unknown } | undefined
              properties?: { [x: string]: unknown } | undefined
              allOf?: { [x: string]: unknown }[] | undefined
              anyOf?: { [x: string]: unknown }[] | undefined
              oneOf?: { [x: string]: unknown }[] | undefined
              not?: { [x: string]: unknown } | undefined
              links?: { [x: string]: unknown }[] | undefined
              fragmentResolution?: string | undefined
              media?: { type?: string | undefined; binaryEncoding?: string | undefined } | undefined
              pathStart?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type OrderCaptureRequest = {
  payment_source?:
    | {
        card?: CardRequest | undefined
        token?: Token | undefined
        paypal?:
          | {
              vault_id?: {} | undefined
              email_address?: {} | undefined
              name?:
                | {
                    prefix?: string | undefined
                    given_name?: string | undefined
                    surname?: string | undefined
                    middle_name?: string | undefined
                    suffix?: string | undefined
                    full_name?: string | undefined
                  }
                | undefined
              phone?:
                | { phone_type?: PhoneType | undefined; phone_number: { national_number: string } }
                | undefined
              birth_date?: {} | undefined
              tax_info?: { tax_id: string; tax_id_type: 'BR_CPF' | 'BR_CNPJ' } | undefined
              address?:
                | {
                    address_line_1?: string | undefined
                    address_line_2?: string | undefined
                    address_line_3?: string | undefined
                    admin_area_4?: string | undefined
                    admin_area_3?: string | undefined
                    admin_area_2?: string | undefined
                    admin_area_1?: string | undefined
                    postal_code?: string | undefined
                    country_code: CountryCode
                    address_details?:
                      | {
                          street_number?: string | undefined
                          street_name?: string | undefined
                          street_type?: string | undefined
                          delivery_service?: string | undefined
                          building_name?: string | undefined
                          sub_building?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              attributes?:
                | {
                    customer?: PaypalWalletCustomer | undefined
                    vault?:
                      | {
                          store_in_vault?: StoreInVaultInstruction | undefined
                          description?: string | undefined
                          usage_pattern?:
                            | 'IMMEDIATE'
                            | 'DEFERRED'
                            | 'RECURRING_PREPAID'
                            | 'RECURRING_POSTPAID'
                            | 'THRESHOLD_PREPAID'
                            | 'THRESHOLD_POSTPAID'
                            | 'SUBSCRIPTION_PREPAID'
                            | 'SUBSCRIPTION_POSTPAID'
                            | 'UNSCHEDULED_PREPAID'
                            | 'UNSCHEDULED_POSTPAID'
                            | 'INSTALLMENT_PREPAID'
                            | 'INSTALLMENT_POSTPAID'
                            | undefined
                          shipping?:
                            | {
                                name?:
                                  | {
                                      prefix?: string | undefined
                                      given_name?: string | undefined
                                      surname?: string | undefined
                                      middle_name?: string | undefined
                                      suffix?: string | undefined
                                      full_name?: string | undefined
                                    }
                                  | undefined
                                email_address?: {} | undefined
                                phone_number?:
                                  | {
                                      country_code: string
                                      national_number: string
                                      extension_number?: string | undefined
                                    }
                                  | undefined
                                type?:
                                  | 'SHIPPING'
                                  | 'PICKUP_IN_PERSON'
                                  | 'PICKUP_IN_STORE'
                                  | 'PICKUP_FROM_PERSON'
                                  | undefined
                                options?:
                                  | {
                                      id: string
                                      label: string
                                      type?: {} | undefined
                                      amount?:
                                        | { currency_code: CurrencyCode; value: string }
                                        | undefined
                                      selected: boolean
                                    }[]
                                  | undefined
                                address?:
                                  | {
                                      address_line_1?: string | undefined
                                      address_line_2?: string | undefined
                                      address_line_3?: string | undefined
                                      admin_area_4?: string | undefined
                                      admin_area_3?: string | undefined
                                      admin_area_2?: string | undefined
                                      admin_area_1?: string | undefined
                                      postal_code?: string | undefined
                                      country_code: CountryCode
                                      address_details?:
                                        | {
                                            street_number?: string | undefined
                                            street_name?: string | undefined
                                            street_type?: string | undefined
                                            delivery_service?: string | undefined
                                            building_name?: string | undefined
                                            sub_building?: string | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
                          customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
                          permit_multiple_payment_tokens?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              experience_context?: PaypalWalletExperienceContext | undefined
              billing_agreement_id?: BillingAgreementId | undefined
              stored_credential?: PaypalWalletStoredCredential | undefined
            }
          | undefined
        bancontact?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        blik?:
          | {
              name: {}
              country_code: {}
              email?: {} | undefined
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                    consumer_ip?: {} | undefined
                    consumer_user_agent?: string | undefined
                  }
                | undefined
              level_0?: { auth_code: string } | undefined
              one_click?:
                | {
                    auth_code?: string | undefined
                    consumer_reference: string
                    alias_label?: string | undefined
                    alias_key?: string | undefined
                  }
                | undefined
            }
          | undefined
        eps?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        giropay?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ideal?:
          | {
              name: {}
              country_code: {}
              bic?: {} | undefined
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        mybank?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        p24?:
          | {
              name: {}
              email: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        sofort?:
          | {
              name: {}
              country_code: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        trustly?:
          | {
              name: {}
              country_code: {}
              email: {}
              experience_context?:
                | {
                    brand_name?: string | undefined
                    locale?: {} | undefined
                    shipping_preference?:
                      | 'GET_FROM_FILE'
                      | 'NO_SHIPPING'
                      | 'SET_PROVIDED_ADDRESS'
                      | undefined
                    return_url?: {} | undefined
                    cancel_url?: {} | undefined
                  }
                | undefined
            }
          | undefined
        apple_pay?:
          | {
              id?: string | undefined
              name?: {} | undefined
              email_address?: {} | undefined
              phone_number?: { national_number: string } | undefined
              decrypted_token?:
                | {
                    transaction_amount?: { currency_code: CurrencyCode; value: string } | undefined
                    tokenized_card: {
                      id?: {} | undefined
                      name?: string | undefined
                      number?: string | undefined
                      expiry?: {} | undefined
                      security_code?: string | undefined
                      last_digits?: string | undefined
                      card_type?: {} | undefined
                      type?: {} | undefined
                      brand?: {} | undefined
                      billing_address?:
                        | {
                            address_line_1?: string | undefined
                            address_line_2?: string | undefined
                            address_line_3?: string | undefined
                            admin_area_4?: string | undefined
                            admin_area_3?: string | undefined
                            admin_area_2?: string | undefined
                            admin_area_1?: string | undefined
                            postal_code?: string | undefined
                            country_code: CountryCode
                            address_details?:
                              | {
                                  street_number?: string | undefined
                                  street_name?: string | undefined
                                  street_type?: string | undefined
                                  delivery_service?: string | undefined
                                  building_name?: string | undefined
                                  sub_building?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                      attributes?:
                        | {
                            customer?: CardCustomer | undefined
                            vault?:
                              | { store_in_vault?: StoreInVaultInstruction | undefined }
                              | undefined
                            verification?:
                              | {
                                  method?:
                                    | 'SCA_ALWAYS'
                                    | 'SCA_WHEN_REQUIRED'
                                    | '3D_SECURE'
                                    | 'AVS_CVV'
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                    device_manufacturer_id?: string | undefined
                    payment_data_type?: '3DSECURE' | 'EMV' | undefined
                    payment_data?:
                      | {
                          cryptogram?: string | undefined
                          eci_indicator?: string | undefined
                          emv_data?: string | undefined
                          pin?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              stored_credential?: CardStoredCredential | undefined
              vault_id?: {} | undefined
              attributes?: ApplePayAttributes | undefined
              experience_context?: ApplePayExperienceContext | undefined
            }
          | undefined
        google_pay?:
          | {
              name?: {} | undefined
              email_address?: {} | undefined
              phone_number?:
                | { country_code?: string | undefined; national_number: string }
                | undefined
              card?:
                | {
                    name?: string | undefined
                    number?: string | undefined
                    expiry?: {} | undefined
                    last_digits?: string | undefined
                    type?: {} | undefined
                    brand?: {} | undefined
                    billing_address?:
                      | {
                          address_line_1?: string | undefined
                          address_line_2?: string | undefined
                          address_line_3?: string | undefined
                          admin_area_4?: string | undefined
                          admin_area_3?: string | undefined
                          admin_area_2?: string | undefined
                          admin_area_1?: string | undefined
                          postal_code?: string | undefined
                          country_code: CountryCode
                          address_details?:
                            | {
                                street_number?: string | undefined
                                street_name?: string | undefined
                                street_type?: string | undefined
                                delivery_service?: string | undefined
                                building_name?: string | undefined
                                sub_building?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              decrypted_token?:
                | {
                    message_id?: string | undefined
                    message_expiration?: string | undefined
                    payment_method: 'CARD'
                    card: {
                      name?: string | undefined
                      number?: string | undefined
                      expiry?: {} | undefined
                      last_digits?: string | undefined
                      type?: {} | undefined
                      brand?: {} | undefined
                      billing_address?:
                        | {
                            address_line_1?: string | undefined
                            address_line_2?: string | undefined
                            address_line_3?: string | undefined
                            admin_area_4?: string | undefined
                            admin_area_3?: string | undefined
                            admin_area_2?: string | undefined
                            admin_area_1?: string | undefined
                            postal_code?: string | undefined
                            country_code: CountryCode
                            address_details?:
                              | {
                                  street_number?: string | undefined
                                  street_name?: string | undefined
                                  street_type?: string | undefined
                                  delivery_service?: string | undefined
                                  building_name?: string | undefined
                                  sub_building?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                    authentication_method: 'PAN_ONLY' | 'CRYPTOGRAM_3DS'
                    cryptogram?: string | undefined
                    eci_indicator?: string | undefined
                  }
                | undefined
              assurance_details?:
                | {
                    account_verified?: boolean | undefined
                    card_holder_authenticated?: boolean | undefined
                  }
                | undefined
              experience_context?: GooglePayExperienceContext | undefined
            }
          | undefined
        venmo?:
          | {
              vault_id?: {} | undefined
              email_address?: {} | undefined
              experience_context?: VenmoWalletExperienceContext | undefined
              attributes?:
                | {
                    customer?: VenmoWalletCustomer | undefined
                    vault?:
                      | {
                          store_in_vault: StoreInVaultInstruction
                          description?: string | undefined
                          usage_pattern?:
                            | 'IMMEDIATE'
                            | 'DEFERRED'
                            | 'RECURRING_PREPAID'
                            | 'RECURRING_POSTPAID'
                            | 'THRESHOLD_PREPAID'
                            | 'THRESHOLD_POSTPAID'
                            | undefined
                          usage_type?: 'MERCHANT' | 'PLATFORM' | undefined
                          customer_type?: 'CONSUMER' | 'BUSINESS' | undefined
                          permit_multiple_payment_tokens?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        crypto?:
          | {
              country_code: {}
              name: {
                prefix?: string | undefined
                given_name: string
                surname: string
                middle_name?: string | undefined
              }
              experience_context: { locale?: {} | undefined; return_url: {}; cancel_url: {} }
            }
          | undefined
      }
    | undefined
}
type ShipmentCarrier =
  | 'DPD_RU'
  | 'BG_BULGARIAN_POST'
  | 'KR_KOREA_POST'
  | 'ZA_COURIERIT'
  | 'FR_EXAPAQ'
  | 'ARE_EMIRATES_POST'
  | 'GAC'
  | 'GEIS'
  | 'SF_EX'
  | 'PAGO'
  | 'MYHERMES'
  | 'DIAMOND_EUROGISTICS'
  | 'CORPORATECOURIERS_WEBHOOK'
  | 'BOND'
  | 'OMNIPARCEL'
  | 'SK_POSTA'
  | 'PUROLATOR'
  | 'FETCHR_WEBHOOK'
  | 'THEDELIVERYGROUP'
  | 'CELLO_SQUARE'
  | 'TARRIVE'
  | 'COLLIVERY'
  | 'MAINFREIGHT'
  | 'IND_FIRSTFLIGHT'
  | 'ACSWORLDWIDE'
  | 'AMSTAN'
  | 'OKAYPARCEL'
  | 'ENVIALIA_REFERENCE'
  | 'SEUR_ES'
  | 'CONTINENTAL'
  | 'FDSEXPRESS'
  | 'AMAZON_FBA_SWISHIP'
  | 'WYNGS'
  | 'DHL_ACTIVE_TRACING'
  | 'ZYLLEM'
  | 'RUSTON'
  | 'XPOST'
  | 'CORREOS_ES'
  | 'DHL_FR'
  | 'PAN_ASIA'
  | 'BRT_IT'
  | 'SRE_KOREA'
  | 'SPEEDEE'
  | 'TNT_UK'
  | 'VENIPAK'
  | 'SHREENANDANCOURIER'
  | 'CROSHOT'
  | 'NIPOST_NG'
  | 'EPST_GLBL'
  | 'NEWGISTICS'
  | 'POST_SLOVENIA'
  | 'JERSEY_POST'
  | 'BOMBINOEXP'
  | 'WMG'
  | 'XQ_EXPRESS'
  | 'FURDECO'
  | 'LHT_EXPRESS'
  | 'SOUTH_AFRICAN_POST_OFFICE'
  | 'SPOTON'
  | 'DIMERCO'
  | 'CYPRUS_POST_CYP'
  | 'ABCUSTOM'
  | 'IND_DELIVREE'
  | 'CN_BESTEXPRESS'
  | 'DX_SFTP'
  | 'PICKUPP_MYS'
  | 'FMX'
  | 'HELLMANN'
  | 'SHIP_IT_ASIA'
  | 'KERRY_ECOMMERCE'
  | 'FRETERAPIDO'
  | 'PITNEY_BOWES'
  | 'XPRESSEN_DK'
  | 'SEUR_SP_API'
  | 'DELIVERYONTIME'
  | 'JINSUNG'
  | 'TRANS_KARGO'
  | 'SWISHIP_DE'
  | 'IVOY_WEBHOOK'
  | 'AIRMEE_WEBHOOK'
  | 'DHL_BENELUX'
  | 'FIRSTMILE'
  | 'FASTWAY_IR'
  | 'HH_EXP'
  | 'MYS_MYPOST_ONLINE'
  | 'TNT_NL'
  | 'TIPSA'
  | 'TAQBIN_MY'
  | 'KGMHUB'
  | 'INTEXPRESS'
  | 'OVERSE_EXP'
  | 'ONECLICK'
  | 'ROADRUNNER_FREIGHT'
  | 'GLS_CROTIA'
  | 'MRW_FTP'
  | 'BLUEX'
  | 'DYLT'
  | 'DPD_IR'
  | 'SIN_GLBL'
  | 'TUFFNELLS_REFERENCE'
  | 'CJPACKET'
  | 'MILKMAN'
  | 'ASIGNA'
  | 'ONEWORLDEXPRESS'
  | 'ROYAL_MAIL'
  | 'VIA_EXPRESS'
  | 'TIGFREIGHT'
  | 'ZTO_EXPRESS'
  | 'TWO_GO'
  | 'IML'
  | 'INTEL_VALLEY'
  | 'EFS'
  | 'UK_UK_MAIL'
  | 'RAM'
  | 'ALLIEDEXPRESS'
  | 'APC_OVERNIGHT'
  | 'SHIPPIT'
  | 'TFM'
  | 'M_XPRESS'
  | 'HDB_BOX'
  | 'CLEVY_LINKS'
  | 'IBEONE'
  | 'FIEGE_NL'
  | 'KWE_GLOBAL'
  | 'CTC_EXPRESS'
  | 'AMAZON'
  | 'MORE_LINK'
  | 'JX'
  | 'EASY_MAIL'
  | 'ADUIEPYLE'
  | 'GB_PANTHER'
  | 'EXPRESSSALE'
  | 'SG_DETRACK'
  | 'TRUNKRS_WEBHOOK'
  | 'MATDESPATCH'
  | 'DICOM'
  | 'MBW'
  | 'KHM_CAMBODIA_POST'
  | 'SINOTRANS'
  | 'BRT_IT_PARCELID'
  | 'DHL_SUPPLY_CHAIN'
  | 'DHL_PL'
  | 'TOPYOU'
  | 'PALEXPRESS'
  | 'DHL_SG'
  | 'CN_WEDO'
  | 'FULFILLME'
  | 'DPD_DELISTRACK'
  | 'UPS_REFERENCE'
  | 'CARIBOU'
  | 'LOCUS_WEBHOOK'
  | 'DSV'
  | 'P2P_TRC'
  | 'DIRECTPARCELS'
  | 'NOVA_POSHTA_INT'
  | 'FEDEX_POLAND'
  | 'CN_JCEX'
  | 'FAR_INTERNATIONAL'
  | 'IDEXPRESS'
  | 'GANGBAO'
  | 'NEWAY'
  | 'POSTNL_INT_3_S'
  | 'RPX_ID'
  | 'DESIGNERTRANSPORT_WEBHOOK'
  | 'GLS_SLOVEN'
  | 'PARCELLED_IN'
  | 'GSI_EXPRESS'
  | 'CON_WAY'
  | 'BROUWER_TRANSPORT'
  | 'CPEX'
  | 'ISRAEL_POST'
  | 'DTDC_IN'
  | 'PTT_POST'
  | 'XDE_WEBHOOK'
  | 'TOLOS'
  | 'GIAO_HANG'
  | 'GEODIS_ESPACE'
  | 'MAGYAR_HU'
  | 'DOORDASH_WEBHOOK'
  | 'TIKI_ID'
  | 'CJ_HK_INTERNATIONAL'
  | 'STAR_TRACK_EXPRESS'
  | 'HELTHJEM'
  | 'SFB2C'
  | 'FREIGHTQUOTE'
  | 'LANDMARK_GLOBAL_REFERENCE'
  | 'PARCEL2GO'
  | 'DELNEXT'
  | 'RCL'
  | 'CGS_EXPRESS'
  | 'HK_POST'
  | 'SAP_EXPRESS'
  | 'PARCELPOST_SG'
  | 'HERMES'
  | 'IND_SAFEEXPRESS'
  | 'TOPHATTEREXPRESS'
  | 'MGLOBAL'
  | 'AVERITT'
  | 'LEADER'
  | '_2EBOX'
  | 'SG_SPEEDPOST'
  | 'DBSCHENKER_SE'
  | 'ISR_POST_DOMESTIC'
  | 'BESTWAYPARCEL'
  | 'ASENDIA_DE'
  | 'NIGHTLINE_UK'
  | 'TAQBIN_SG'
  | 'TCK_EXPRESS'
  | 'ENDEAVOUR_DELIVERY'
  | 'NANJINGWOYUAN'
  | 'HEPPNER_FR'
  | 'EMPS_CN'
  | 'FONSEN'
  | 'PICKRR'
  | 'APC_OVERNIGHT_CONNUM'
  | 'STAR_TRACK_NEXT_FLIGHT'
  | 'DAJIN'
  | 'UPS_FREIGHT'
  | 'POSTA_PLUS'
  | 'CEVA'
  | 'ANSERX'
  | 'JS_EXPRESS'
  | 'PADTF'
  | 'UPS_MAIL_INNOVATIONS'
  | 'SYPOST'
  | 'AMAZON_SHIP_MCF'
  | 'YUSEN'
  | 'BRING'
  | 'SDA_IT'
  | 'GBA'
  | 'NEWEGGEXPRESS'
  | 'SPEEDCOURIERS_GR'
  | 'FORRUN'
  | 'PICKUP'
  | 'ECMS'
  | 'INTELIPOST'
  | 'FLASHEXPRESS'
  | 'CN_STO'
  | 'SEKO_SFTP'
  | 'HOME_DELIVERY_SOLUTIONS'
  | 'DPD_HGRY'
  | 'KERRYTTC_VN'
  | 'JOYING_BOX'
  | 'TOTAL_EXPRESS'
  | 'ZJS_EXPRESS'
  | 'STARKEN'
  | 'DEMANDSHIP'
  | 'CN_DPEX'
  | 'AUPOST_CN'
  | 'LOGISTERS'
  | 'GOGLOBALPOST'
  | 'GLS_CZ'
  | 'PAACK_WEBHOOK'
  | 'GRAB_WEBHOOK'
  | 'PARCELPOINT'
  | 'ICUMULUS'
  | 'DAIGLOBALTRACK'
  | 'GLOBAL_IPARCEL'
  | 'YURTICI_KARGO'
  | 'CN_PAYPAL_PACKAGE'
  | 'PARCEL_2_POST'
  | 'GLS_IT'
  | 'PIL_LOGISTICS'
  | 'HEPPNER'
  | 'GENERAL_OVERNIGHT'
  | 'HAPPY2POINT'
  | 'CHITCHATS'
  | 'SMOOTH'
  | 'CLE_LOGISTICS'
  | 'FIEGE'
  | 'MX_CARGO'
  | 'ZIINGFINALMILE'
  | 'DAYTON_FREIGHT'
  | 'TCS'
  | 'AEX'
  | 'HERMES_DE'
  | 'ROUTIFIC_WEBHOOK'
  | 'GLOBAVEND'
  | 'CJ_LOGISTICS'
  | 'PALLET_NETWORK'
  | 'RAF_PH'
  | 'UK_XDP'
  | 'PAPER_EXPRESS'
  | 'LA_POSTE_SUIVI'
  | 'PAQUETEXPRESS'
  | 'LIEFERY'
  | 'STRECK_TRANSPORT'
  | 'PONY_EXPRESS'
  | 'ALWAYS_EXPRESS'
  | 'GBS_BROKER'
  | 'CITYLINK_MY'
  | 'ALLJOY'
  | 'YODEL'
  | 'YODEL_DIR'
  | 'STONE3PL'
  | 'PARCELPAL_WEBHOOK'
  | 'DHL_ECOMERCE_ASA'
  | 'SIMPLYPOST'
  | 'KY_EXPRESS'
  | 'SHENZHEN'
  | 'US_LASERSHIP'
  | 'UC_EXPRE'
  | 'DIDADI'
  | 'CJ_KR'
  | 'DBSCHENKER_B2B'
  | 'MXE'
  | 'CAE_DELIVERS'
  | 'PFCEXPRESS'
  | 'WHISTL'
  | 'WEPOST'
  | 'DHL_PARCEL_ES'
  | 'DDEXPRESS'
  | 'ARAMEX_AU'
  | 'BNEED'
  | 'HK_TGX'
  | 'LATVIJAS_PASTS'
  | 'VIAEUROPE'
  | 'CORREO_UY'
  | 'CHRONOPOST_FR'
  | 'J_NET'
  | '_6LS'
  | 'BLR_BELPOST'
  | 'BIRDSYSTEM'
  | 'DOBROPOST'
  | 'WAHANA_ID'
  | 'WEASHIP'
  | 'SONICTL'
  | 'KWT'
  | 'AFLLOG_FTP'
  | 'SKYNET_WORLDWIDE'
  | 'NOVA_POSHTA'
  | 'SEINO'
  | 'SZENDEX'
  | 'BPOST_INT'
  | 'DBSCHENKER_SV'
  | 'AO_DEUTSCHLAND'
  | 'EU_FLEET_SOLUTIONS'
  | 'PCFCORP'
  | 'LINKBRIDGE'
  | 'PRIMAMULTICIPTA'
  | 'COUREX'
  | 'ZAJIL_EXPRESS'
  | 'COLLECTCO'
  | 'JTEXPRESS'
  | 'FEDEX_UK'
  | 'USHIP'
  | 'PIXSELL'
  | 'SHIPTOR'
  | 'CDEK'
  | 'VNM_VIETTELPOST'
  | 'CJ_CENTURY'
  | 'GSO'
  | 'VIWO'
  | 'SKYBOX'
  | 'KERRYTJ'
  | 'NTLOGISTICS_VN'
  | 'SDH_SCM'
  | 'ZINC'
  | 'DPE_SOUTH_AFRC'
  | 'CESKA_CZ'
  | 'ACS_GR'
  | 'DEALERSEND'
  | 'JOCOM'
  | 'CSE'
  | 'TFORCE_FINALMILE'
  | 'SHIP_GATE'
  | 'SHIPTER'
  | 'NATIONAL_SAMEDAY'
  | 'YUNEXPRESS'
  | 'CAINIAO'
  | 'DMS_MATRIX'
  | 'DIRECTLOG'
  | 'ASENDIA_US'
  | '_3JMSLOGISTICS'
  | 'LICCARDI_EXPRESS'
  | 'SKY_POSTAL'
  | 'CNWANGTONG'
  | 'POSTNORD_LOGISTICS_DK'
  | 'LOGISTIKA'
  | 'CELERITAS'
  | 'PRESSIODE'
  | 'SHREE_MARUTI'
  | 'LOGISTICSWORLDWIDE_HK'
  | 'EFEX'
  | 'LOTTE'
  | 'LONESTAR'
  | 'APRISAEXPRESS'
  | 'BEL_RS'
  | 'OSM_WORLDWIDE'
  | 'WESTGATE_GL'
  | 'FASTRACK'
  | 'DTD_EXPR'
  | 'ALFATREX'
  | 'PROMEDDELIVERY'
  | 'THABIT_LOGISTICS'
  | 'HCT_LOGISTICS'
  | 'CARRY_FLAP'
  | 'US_OLD_DOMINION'
  | 'ANICAM_BOX'
  | 'WANBEXPRESS'
  | 'AN_POST'
  | 'DPD_LOCAL'
  | 'STALLIONEXPRESS'
  | 'RAIDEREX'
  | 'SHOPFANS'
  | 'KYUNGDONG_PARCEL'
  | 'CHAMPION_LOGISTICS'
  | 'PICKUPP_SGP'
  | 'MORNING_EXPRESS'
  | 'NACEX'
  | 'THENILE_WEBHOOK'
  | 'HOLISOL'
  | 'LBCEXPRESS_FTP'
  | 'KURASI'
  | 'USF_REDDAWAY'
  | 'APG'
  | 'CN_BOXC'
  | 'ECOSCOOTING'
  | 'MAINWAY'
  | 'PAPERFLY'
  | 'HOUNDEXPRESS'
  | 'BOX_BERRY'
  | 'EP_BOX'
  | 'PLUS_LOG_UK'
  | 'FULFILLA'
  | 'ASE'
  | 'MAIL_PLUS'
  | 'XPO_LOGISTICS'
  | 'WNDIRECT'
  | 'CLOUDWISH_ASIA'
  | 'ZELERIS'
  | 'GIO_EXPRESS'
  | 'OCS_WORLDWIDE'
  | 'ARK_LOGISTICS'
  | 'AQUILINE'
  | 'PILOT_FREIGHT'
  | 'QWINTRY'
  | 'DANSKE_FRAGT'
  | 'CARRIERS'
  | 'AIR_CANADA_GLOBAL'
  | 'PRESIDENT_TRANS'
  | 'STEPFORWARDFS'
  | 'SKYNET_UK'
  | 'PITTOHIO'
  | 'CORREOS_EXPRESS'
  | 'RL_US'
  | 'DESTINY'
  | 'UK_YODEL'
  | 'COMET_TECH'
  | 'DHL_PARCEL_RU'
  | 'TNT_REFR'
  | 'SHREE_ANJANI_COURIER'
  | 'MIKROPAKKET_BE'
  | 'ETS_EXPRESS'
  | 'COLIS_PRIVE'
  | 'CN_YUNDA'
  | 'AAA_COOPER'
  | 'ROCKET_PARCEL'
  | '_360LION'
  | 'PANDU'
  | 'PROFESSIONAL_COURIERS'
  | 'FLYTEXPRESS'
  | 'LOGISTICSWORLDWIDE_MY'
  | 'CORREOS_DE_ESPANA'
  | 'IMX'
  | 'FOUR_PX_EXPRESS'
  | 'XPRESSBEES'
  | 'PICKUPP_VNM'
  | 'STARTRACK_EXPRESS'
  | 'FR_COLISSIMO'
  | 'NACEX_SPAIN_REFERENCE'
  | 'DHL_SUPPLY_CHAIN_AU'
  | 'ESHIPPING'
  | 'SHREETIRUPATI'
  | 'HX_EXPRESS'
  | 'INDOPAKET'
  | 'CN_17POST'
  | 'K1_EXPRESS'
  | 'CJ_GLS'
  | 'MYS_GDEX'
  | 'NATIONEX'
  | 'ANJUN'
  | 'FARGOOD'
  | 'SMG_EXPRESS'
  | 'RZYEXPRESS'
  | 'SEFL'
  | 'TNT_CLICK_IT'
  | 'HDB'
  | 'HIPSHIPPER'
  | 'RPXLOGISTICS'
  | 'KUEHNE'
  | 'IT_NEXIVE'
  | 'PTS'
  | 'SWISS_POST_FTP'
  | 'FASTRK_SERV'
  | '_4_72'
  | 'US_YRC'
  | 'POSTNL_INTL_3S'
  | 'ELIAN_POST'
  | 'CUBYN'
  | 'SAU_SAUDI_POST'
  | 'ABXEXPRESS_MY'
  | 'HUAHAN_EXPRESS'
  | 'ZES_EXPRESS'
  | 'ZEPTO_EXPRESS'
  | 'SKYNET_ZA'
  | 'ZEEK_2_DOOR'
  | 'BLINKLASTMILE'
  | 'POSTA_UKR'
  | 'CHROBINSON'
  | 'CN_POST56'
  | 'COURANT_PLUS'
  | 'SCUDEX_EXPRESS'
  | 'SHIPENTEGRA'
  | 'B_TWO_C_EUROPE'
  | 'COPE'
  | 'IND_GATI'
  | 'CN_WISHPOST'
  | 'NACEX_ES'
  | 'TAQBIN_HK'
  | 'GLOBALTRANZ'
  | 'HKD'
  | 'BJSHOMEDELIVERY'
  | 'OMNIVA'
  | 'SUTTON'
  | 'PANTHER_REFERENCE'
  | 'SFCSERVICE'
  | 'LTL'
  | 'PARKNPARCEL'
  | 'SPRING_GDS'
  | 'ECEXPRESS'
  | 'INTERPARCEL_AU'
  | 'AGILITY'
  | 'XL_EXPRESS'
  | 'ADERONLINE'
  | 'DIRECTCOURIERS'
  | 'PLANZER'
  | 'SENDING'
  | 'NINJAVAN_WB'
  | 'NATIONWIDE_MY'
  | 'SENDIT'
  | 'GB_ARROW'
  | 'IND_GOJAVAS'
  | 'KPOST'
  | 'DHL_FREIGHT'
  | 'BLUECARE'
  | 'JINDOUYUN'
  | 'TRACKON'
  | 'GB_TUFFNELLS'
  | 'TRUMPCARD'
  | 'ETOTAL'
  | 'SFPLUS_WEBHOOK'
  | 'SEKOLOGISTICS'
  | 'HERMES_2MANN_HANDLING'
  | 'DPD_LOCAL_REF'
  | 'UDS'
  | 'ZA_SPECIALISED_FREIGHT'
  | 'THA_KERRY'
  | 'PRT_INT_SEUR'
  | 'BRA_CORREIOS'
  | 'NZ_NZ_POST'
  | 'CN_EQUICK'
  | 'MYS_EMS'
  | 'GB_NORSK'
  | 'ESP_MRW'
  | 'ESP_PACKLINK'
  | 'KANGAROO_MY'
  | 'RPX'
  | 'XDP_UK_REFERENCE'
  | 'NINJAVAN_MY'
  | 'ADICIONAL'
  | 'ROADBULL'
  | 'YAKIT'
  | 'MAILAMERICAS'
  | 'MIKROPAKKET'
  | 'DYNALOGIC'
  | 'DHL_ES'
  | 'DHL_PARCEL_NL'
  | 'DHL_GLOBAL_MAIL_ASIA'
  | 'DAWN_WING'
  | 'GENIKI_GR'
  | 'HERMESWORLD_UK'
  | 'ALPHAFAST'
  | 'BUYLOGIC'
  | 'EKART'
  | 'MEX_SENDA'
  | 'SFC_LOGISTICS'
  | 'POST_SERBIA'
  | 'IND_DELHIVERY'
  | 'DE_DPD_DELISTRACK'
  | 'RPD2MAN'
  | 'CN_SF_EXPRESS'
  | 'YANWEN'
  | 'MYS_SKYNET'
  | 'CORREOS_DE_MEXICO'
  | 'CBL_LOGISTICA'
  | 'MEX_ESTAFETA'
  | 'AU_AUSTRIAN_POST'
  | 'RINCOS'
  | 'NLD_DHL'
  | 'RUSSIAN_POST'
  | 'COURIERS_PLEASE'
  | 'POSTNORD_LOGISTICS'
  | 'FEDEX'
  | 'DPE_EXPRESS'
  | 'DPD'
  | 'ADSONE'
  | 'IDN_JNE'
  | 'THECOURIERGUY'
  | 'CNEXPS'
  | 'PRT_CHRONOPOST'
  | 'LANDMARK_GLOBAL'
  | 'IT_DHL_ECOMMERCE'
  | 'ESP_NACEX'
  | 'PRT_CTT'
  | 'BE_KIALA'
  | 'ASENDIA_UK'
  | 'GLOBAL_TNT'
  | 'POSTUR_IS'
  | 'EPARCEL_KR'
  | 'INPOST_PACZKOMATY'
  | 'IT_POSTE_ITALIA'
  | 'BE_BPOST'
  | 'PL_POCZTA_POLSKA'
  | 'MYS_MYS_POST'
  | 'SG_SG_POST'
  | 'THA_THAILAND_POST'
  | 'LEXSHIP'
  | 'FASTWAY_NZ'
  | 'DHL_AU'
  | 'COSTMETICSNOW'
  | 'PFLOGISTICS'
  | 'LOOMIS_EXPRESS'
  | 'GLS_ITALY'
  | 'LINE'
  | 'GEL_EXPRESS'
  | 'HUODULL'
  | 'NINJAVAN_SG'
  | 'JANIO'
  | 'AO_COURIER'
  | 'BRT_IT_SENDER_REF'
  | 'SAILPOST'
  | 'LALAMOVE'
  | 'NEWZEALAND_COURIERS'
  | 'ETOMARS'
  | 'VIRTRANSPORT'
  | 'WIZMO'
  | 'PALLETWAYS'
  | 'I_DIKA'
  | 'CFL_LOGISTICS'
  | 'GEMWORLDWIDE'
  | 'GLOBAL_EXPRESS'
  | 'LOGISTYX_TRANSGROUP'
  | 'WESTBANK_COURIER'
  | 'ARCO_SPEDIZIONI'
  | 'YDH_EXPRESS'
  | 'PARCELINKLOGISTICS'
  | 'CNDEXPRESS'
  | 'NOX_NIGHT_TIME_EXPRESS'
  | 'AERONET'
  | 'LTIANEXP'
  | 'INTEGRA2_FTP'
  | 'PARCELONE'
  | 'NOX_NACHTEXPRESS'
  | 'CN_CHINA_POST_EMS'
  | 'CHUKOU1'
  | 'GLS_SLOV'
  | 'ORANGE_DS'
  | 'JOOM_LOGIS'
  | 'AUS_STARTRACK'
  | 'DHL'
  | 'GB_APC'
  | 'BONDSCOURIERS'
  | 'JPN_JAPAN_POST'
  | 'USPS'
  | 'WINIT'
  | 'ARG_OCA'
  | 'TW_TAIWAN_POST'
  | 'DMM_NETWORK'
  | 'TNT'
  | 'BH_POSTA'
  | 'SWE_POSTNORD'
  | 'CA_CANADA_POST'
  | 'WISELOADS'
  | 'ASENDIA_HK'
  | 'NLD_GLS'
  | 'MEX_REDPACK'
  | 'JET_SHIP'
  | 'DE_DHL_EXPRESS'
  | 'NINJAVAN_THAI'
  | 'RABEN_GROUP'
  | 'ESP_ASM'
  | 'HRV_HRVATSKA'
  | 'GLOBAL_ESTES'
  | 'LTU_LIETUVOS'
  | 'BEL_DHL'
  | 'AU_AU_POST'
  | 'SPEEDEXCOURIER'
  | 'FR_COLIS'
  | 'ARAMEX'
  | 'DPEX'
  | 'MYS_AIRPAK'
  | 'CUCKOOEXPRESS'
  | 'DPD_POLAND'
  | 'NLD_POSTNL'
  | 'NIM_EXPRESS'
  | 'QUANTIUM'
  | 'SENDLE'
  | 'ESP_REDUR'
  | 'MATKAHUOLTO'
  | 'CPACKET'
  | 'POSTI'
  | 'HUNTER_EXPRESS'
  | 'CHOIR_EXP'
  | 'LEGION_EXPRESS'
  | 'AUSTRIAN_POST_EXPRESS'
  | 'GRUPO'
  | 'POSTA_RO'
  | 'INTERPARCEL_UK'
  | 'GLOBAL_ABF'
  | 'POSTEN_NORGE'
  | 'XPERT_DELIVERY'
  | 'DHL_REFR'
  | 'DHL_HK'
  | 'SKYNET_UAE'
  | 'GOJEK'
  | 'YODEL_INTNL'
  | 'JANCO'
  | 'YTO'
  | 'WISE_EXPRESS'
  | 'JTEXPRESS_VN'
  | 'FEDEX_INTL_MLSERV'
  | 'VAMOX'
  | 'AMS_GRP'
  | 'DHL_JP'
  | 'HRPARCEL'
  | 'GESWL'
  | 'BLUESTAR'
  | 'CDEK_TR'
  | 'DESCARTES'
  | 'DELTEC_UK'
  | 'DTDC_EXPRESS'
  | 'TOURLINE'
  | 'BH_WORLDWIDE'
  | 'OCS'
  | 'YINGNUO_LOGISTICS'
  | 'UPS'
  | 'TOLL'
  | 'PRT_SEUR'
  | 'DTDC_AU'
  | 'THA_DYNAMIC_LOGISTICS'
  | 'UBI_LOGISTICS'
  | 'FEDEX_CROSSBORDER'
  | 'A1POST'
  | 'TAZMANIAN_FREIGHT'
  | 'CJ_INT_MY'
  | 'SAIA_FREIGHT'
  | 'SG_QXPRESS'
  | 'NHANS_SOLUTIONS'
  | 'DPD_FR'
  | 'COORDINADORA'
  | 'ANDREANI'
  | 'DOORA'
  | 'INTERPARCEL_NZ'
  | 'PHL_JAMEXPRESS'
  | 'BEL_BELGIUM_POST'
  | 'US_APC'
  | 'IDN_POS'
  | 'FR_MONDIAL'
  | 'DE_DHL'
  | 'HK_RPX'
  | 'DHL_PIECEID'
  | 'VNPOST_EMS'
  | 'RRDONNELLEY'
  | 'DPD_DE'
  | 'DELCART_IN'
  | 'IMEXGLOBALSOLUTIONS'
  | 'ACOMMERCE'
  | 'EURODIS'
  | 'CANPAR'
  | 'GLS'
  | 'IND_ECOM'
  | 'ESP_ENVIALIA'
  | 'DHL_UK'
  | 'SMSA_EXPRESS'
  | 'TNT_FR'
  | 'DEX_I'
  | 'BUDBEE_WEBHOOK'
  | 'COPA_COURIER'
  | 'VNM_VIETNAM_POST'
  | 'DPD_HK'
  | 'TOLL_NZ'
  | 'ECHO'
  | 'FEDEX_FR'
  | 'BORDEREXPRESS'
  | 'MAILPLUS_JPN'
  | 'TNT_UK_REFR'
  | 'KEC'
  | 'DPD_RO'
  | 'TNT_JP'
  | 'TH_CJ'
  | 'EC_CN'
  | 'FASTWAY_UK'
  | 'FASTWAY_US'
  | 'GLS_DE'
  | 'GLS_ES'
  | 'GLS_FR'
  | 'MONDIAL_BE'
  | 'SGT_IT'
  | 'TNT_CN'
  | 'TNT_DE'
  | 'TNT_ES'
  | 'TNT_PL'
  | 'PARCELFORCE'
  | 'SWISS_POST'
  | 'TOLL_IPEC'
  | 'AIR_21'
  | 'AIRSPEED'
  | 'BERT'
  | 'BLUEDART'
  | 'COLLECTPLUS'
  | 'COURIERPLUS'
  | 'COURIER_POST'
  | 'DHL_GLOBAL_MAIL'
  | 'DPD_UK'
  | 'DELTEC_DE'
  | 'DEUTSCHE_DE'
  | 'DOTZOT'
  | 'ELTA_GR'
  | 'EMS_CN'
  | 'ECARGO'
  | 'ENSENDA'
  | 'FERCAM_IT'
  | 'FASTWAY_ZA'
  | 'FASTWAY_AU'
  | 'FIRST_LOGISITCS'
  | 'GEODIS'
  | 'GLOBEGISTICS'
  | 'GREYHOUND'
  | 'JETSHIP_MY'
  | 'LION_PARCEL'
  | 'AEROFLASH'
  | 'ONTRAC'
  | 'SAGAWA'
  | 'SIODEMKA'
  | 'STARTRACK'
  | 'TNT_AU'
  | 'TNT_IT'
  | 'TRANSMISSION'
  | 'YAMATO'
  | 'DHL_IT'
  | 'DHL_AT'
  | 'LOGISTICSWORLDWIDE_KR'
  | 'GLS_SPAIN'
  | 'AMAZON_UK_API'
  | 'DPD_FR_REFERENCE'
  | 'DHLPARCEL_UK'
  | 'MEGASAVE'
  | 'QUALITYPOST'
  | 'IDS_LOGISTICS'
  | 'JOYINGBOX'
  | 'PANTHER_ORDER_NUMBER'
  | 'WATKINS_SHEPARD'
  | 'FASTTRACK'
  | 'UP_EXPRESS'
  | 'ELOGISTICA'
  | 'ECOURIER'
  | 'CJ_PHILIPPINES'
  | 'SPEEDEX'
  | 'ORANGECONNEX'
  | 'TECOR'
  | 'SAEE'
  | 'GLS_ITALY_FTP'
  | 'DELIVERE'
  | 'YYCOM'
  | 'ADICIONAL_PT'
  | 'DKSH'
  | 'NIPPON_EXPRESS_FTP'
  | 'GOLS'
  | 'FUJEXP'
  | 'QTRACK'
  | 'OMLOGISTICS_API'
  | 'GDPHARM'
  | 'MISUMI_CN'
  | 'AIR_CANADA'
  | 'CITY56_WEBHOOK'
  | 'SAGAWA_API'
  | 'KEDAEX'
  | 'PGEON_API'
  | 'WEWORLDEXPRESS'
  | 'JT_LOGISTICS'
  | 'TRUSK'
  | 'VIAXPRESS'
  | 'DHL_SUPPLYCHAIN_ID'
  | 'ZUELLIGPHARMA_SFTP'
  | 'MEEST'
  | 'TOLL_PRIORITY'
  | 'MOTHERSHIP_API'
  | 'CAPITAL'
  | 'EUROPAKET_API'
  | 'HFD'
  | 'TOURLINE_REFERENCE'
  | 'GIO_ECOURIER'
  | 'CN_LOGISTICS'
  | 'PANDION'
  | 'BPOST_API'
  | 'PASSPORTSHIPPING'
  | 'PAKAJO'
  | 'DACHSER'
  | 'YUSEN_SFTP'
  | 'SHYPLITE'
  | 'XYY'
  | 'MWD'
  | 'FAXECARGO'
  | 'MAZET'
  | 'FIRST_LOGISTICS_API'
  | 'SPRINT_PACK'
  | 'HERMES_DE_FTP'
  | 'CONCISE'
  | 'KERRY_EXPRESS_TW_API'
  | 'EWE'
  | 'FASTDESPATCH'
  | 'ABCUSTOM_SFTP'
  | 'CHAZKI'
  | 'SHIPPIE'
  | 'GEODIS_API'
  | 'NAQEL_EXPRESS'
  | 'PAPA_WEBHOOK'
  | 'FORWARDAIR'
  | 'DIALOGO_LOGISTICA_API'
  | 'LALAMOVE_API'
  | 'TOMYDOOR'
  | 'KRONOS_WEBHOOK'
  | 'JTCARGO'
  | 'T_CAT'
  | 'CONCISE_WEBHOOK'
  | 'TELEPORT_WEBHOOK'
  | 'CUSTOMCO_API'
  | 'SPX_TH'
  | 'BOLLORE_LOGISTICS'
  | 'CLICKLINK_SFTP'
  | 'M3LOGISTICS'
  | 'VNPOST_API'
  | 'AXLEHIRE_FTP'
  | 'SHADOWFAX'
  | 'MYHERMES_UK_API'
  | 'DAIICHI'
  | 'MENSAJEROSURBANOS_API'
  | 'POLARSPEED'
  | 'IDEXPRESS_ID'
  | 'PAYO'
  | 'WHISTL_SFTP'
  | 'INTEX_DE'
  | 'TRANS2U'
  | 'PRODUCTCAREGROUP_SFTP'
  | 'BIGSMART'
  | 'EXPEDITORS_API_REF'
  | 'AITWORLDWIDE_API'
  | 'WORLDCOURIER'
  | 'QUIQUP'
  | 'AGEDISS_SFTP'
  | 'ANDREANI_API'
  | 'CRLEXPRESS'
  | 'SMARTCAT'
  | 'CROSSFLIGHT'
  | 'PROCARRIER'
  | 'DHL_REFERENCE_API'
  | 'SEINO_API'
  | 'WSPEXPRESS'
  | 'KRONOS'
  | 'TOTAL_EXPRESS_API'
  | 'PARCLL'
  | 'XPEDIGO'
  | 'STAR_TRACK_WEBHOOK'
  | 'GPOST'
  | 'UCS'
  | 'DMFGROUP'
  | 'COORDINADORA_API'
  | 'MARKEN'
  | 'NTL'
  | 'REDJEPAKKETJE'
  | 'ALLIED_EXPRESS_FTP'
  | 'MONDIALRELAY_ES'
  | 'NAEKO_FTP'
  | 'MHI'
  | 'SHIPPIFY'
  | 'MALCA_AMIT_API'
  | 'JTEXPRESS_SG_API'
  | 'DACHSER_WEB'
  | 'FLIGHTLG'
  | 'CAGO'
  | 'COM1EXPRESS'
  | 'TONAMI_FTP'
  | 'PACKFLEET'
  | 'PUROLATOR_INTERNATIONAL'
  | 'WINESHIPPING_WEBHOOK'
  | 'DHL_ES_SFTP'
  | 'PCHOME_API'
  | 'CESKAPOSTA_API'
  | 'GORUSH'
  | 'HOMERUNNER'
  | 'AMAZON_ORDER'
  | 'EFWNOW_API'
  | 'CBL_LOGISTICA_API'
  | 'NIMBUSPOST'
  | 'LOGWIN_LOGISTICS'
  | 'NOWLOG_API'
  | 'DPD_NL'
  | 'GODEPENDABLE'
  | 'ESDEX'
  | 'LOGISYSTEMS_SFTP'
  | 'EXPEDITORS'
  | 'SNTGLOBAL_API'
  | 'SHIPX'
  | 'QINTL_API'
  | 'PACKS'
  | 'POSTNL_INTERNATIONAL'
  | 'AMAZON_EMAIL_PUSH'
  | 'DHL_API'
  | 'SPX'
  | 'AXLEHIRE'
  | 'ICSCOURIER'
  | 'DIALOGO_LOGISTICA'
  | 'SHUNBANG_EXPRESS'
  | 'TCS_API'
  | 'SF_EXPRESS_CN'
  | 'PACKETA'
  | 'SIC_TELIWAY'
  | 'MONDIALRELAY_FR'
  | 'INTIME_FTP'
  | 'JD_EXPRESS'
  | 'FASTBOX'
  | 'PATHEON'
  | 'INDIA_POST'
  | 'TIPSA_REF'
  | 'ECOFREIGHT'
  | 'VOX'
  | 'DIRECTFREIGHT_AU_REF'
  | 'BESTTRANSPORT_SFTP'
  | 'AUSTRALIA_POST_API'
  | 'FRAGILEPAK_SFTP'
  | 'FLIPXP'
  | 'VALUE_WEBHOOK'
  | 'DAESHIN'
  | 'SHERPA'
  | 'MWD_API'
  | 'SMARTKARGO'
  | 'DNJ_EXPRESS'
  | 'GOPEOPLE'
  | 'MYSENDLE_API'
  | 'ARAMEX_API'
  | 'PIDGE'
  | 'THAIPARCELS'
  | 'PANTHER_REFERENCE_API'
  | 'POSTAPLUS'
  | 'BUFFALO'
  | 'U_ENVIOS'
  | 'ELITE_CO'
  | 'ROCHE_INTERNAL_SFTP'
  | 'DBSCHENKER_ICELAND'
  | 'TNT_FR_REFERENCE'
  | 'NEWGISTICSAPI'
  | 'GLOVO'
  | 'GWLOGIS_API'
  | 'SPREETAIL_API'
  | 'MOOVA'
  | 'PLYCONGROUP'
  | 'USPS_WEBHOOK'
  | 'REIMAGINEDELIVERY'
  | 'EDF_FTP'
  | 'DAO365'
  | 'BIOCAIR_FTP'
  | 'RANSA_WEBHOOK'
  | 'SHIPXPRES'
  | 'COURANT_PLUS_API'
  | 'SHIPA'
  | 'HOMELOGISTICS'
  | 'DX'
  | 'POSTE_ITALIANE_PACCOCELERE'
  | 'TOLL_WEBHOOK'
  | 'LCTBR_API'
  | 'DX_FREIGHT'
  | 'DHL_SFTP'
  | 'SHIPROCKET'
  | 'UBER_WEBHOOK'
  | 'STATOVERNIGHT'
  | 'BURD'
  | 'FASTSHIP'
  | 'IBVENTURE_WEBHOOK'
  | 'GATI_KWE_API'
  | 'CRYOPDP_FTP'
  | 'HUBBED'
  | 'TIPSA_API'
  | 'ARASKARGO'
  | 'THIJS_NL'
  | 'ATSHEALTHCARE_REFERENCE'
  | '99MINUTOS'
  | 'HELLENIC_POST'
  | 'HSM_GLOBAL'
  | 'MNX'
  | 'NMTRANSFER'
  | 'LOGYSTO'
  | 'INDIA_POST_INT'
  | 'AMAZON_FBA_SWISHIP_IN'
  | 'SRT_TRANSPORT'
  | 'BOMI'
  | 'DELIVERR_SFTP'
  | 'HSDEXPRESS'
  | 'SIMPLETIRE_WEBHOOK'
  | 'HUNTER_EXPRESS_SFTP'
  | 'UPS_API'
  | 'WOOYOUNG_LOGISTICS_SFTP'
  | 'PHSE_API'
  | 'WISH_EMAIL_PUSH'
  | 'NORTHLINE'
  | 'MEDAFRICA'
  | 'DPD_AT_SFTP'
  | 'ANTERAJA'
  | 'DHL_GLOBAL_FORWARDING_API'
  | 'LBCEXPRESS_API'
  | 'SIMSGLOBAL'
  | 'CDLDELIVERS'
  | 'TYP'
  | 'TESTING_COURIER_WEBHOOK'
  | 'PANDAGO_API'
  | 'ROYAL_MAIL_FTP'
  | 'THUNDEREXPRESS'
  | 'SECRETLAB_WEBHOOK'
  | 'SETEL'
  | 'JD_WORLDWIDE'
  | 'DPD_RU_API'
  | 'ARGENTS_WEBHOOK'
  | 'POSTONE'
  | 'TUSKLOGISTICS'
  | 'RHENUS_UK_API'
  | 'TAQBIN_SG_API'
  | 'INNTRALOG_SFTP'
  | 'DAYROSS'
  | 'CORREOSEXPRESS_API'
  | 'INTERNATIONAL_SEUR_API'
  | 'YODEL_API'
  | 'HEROEXPRESS'
  | 'DHL_SUPPLYCHAIN_IN'
  | 'URGENT_CARGUS'
  | 'FRONTDOORCORP'
  | 'JTEXPRESS_PH'
  | 'PARCELSTARS_WEBHOOK'
  | 'DPD_SK_SFTP'
  | 'MOVIANTO'
  | 'OZEPARTS_SHIPPING'
  | 'KARGOMKOLAY'
  | 'TRUNKRS'
  | 'OMNIRPS_WEBHOOK'
  | 'CHILEXPRESS'
  | 'TESTING_COURIER'
  | 'JNE_API'
  | 'BJSHOMEDELIVERY_FTP'
  | 'DEXPRESS_WEBHOOK'
  | 'USPS_API'
  | 'TRANSVIRTUAL'
  | 'SOLISTICA_API'
  | 'CHIENVENTURE_WEBHOOK'
  | 'DPD_UK_SFTP'
  | 'INPOST_UK'
  | 'JAVIT'
  | 'ZTO_DOMESTIC'
  | 'DHL_GT_API'
  | 'CEVA_TRACKING'
  | 'KOMON_EXPRESS'
  | 'EASTWESTCOURIER_FTP'
  | 'DANNIAO'
  | 'SPECTRAN'
  | 'DELIVER_IT'
  | 'RELAISCOLIS'
  | 'GLS_SPAIN_API'
  | 'POSTPLUS'
  | 'AIRTERRA'
  | 'GIO_ECOURIER_API'
  | 'DPD_CH_SFTP'
  | 'FEDEX_API'
  | 'INTERSMARTTRANS'
  | 'HERMES_UK_SFTP'
  | 'EXELOT_FTP'
  | 'DHL_PA_API'
  | 'VIRTRANSPORT_SFTP'
  | 'WORLDNET'
  | 'INSTABOX_WEBHOOK'
  | 'KNG'
  | 'FLASHEXPRESS_WEBHOOK'
  | 'MAGYAR_POSTA_API'
  | 'WESHIP_API'
  | 'OHI_WEBHOOK'
  | 'MUDITA'
  | 'BLUEDART_API'
  | 'T_CAT_API'
  | 'ADS'
  | 'HERMES_IT'
  | 'FITZMARK_API'
  | 'POSTI_API'
  | 'SMSA_EXPRESS_WEBHOOK'
  | 'TAMERGROUP_WEBHOOK'
  | 'LIVRAPIDE'
  | 'NIPPON_EXPRESS'
  | 'BETTERTRUCKS'
  | 'FAN'
  | 'PB_USPSFLATS_FTP'
  | 'PARCELRIGHT'
  | 'ITHINKLOGISTICS'
  | 'KERRY_EXPRESS_TH_WEBHOOK'
  | 'ECOUTIER'
  | 'SHOWL'
  | 'BRT_IT_API'
  | 'RIXONHK_API'
  | 'DBSCHENKER_API'
  | 'ILYANGLOGIS'
  | 'MAIL_BOX_ETC'
  | 'WESHIP'
  | 'DHL_GLOBAL_MAIL_API'
  | 'ACTIVOS24_API'
  | 'ATSHEALTHCARE'
  | 'LUWJISTIK'
  | 'GW_WORLD'
  | 'FAIRSENDEN_API'
  | 'SERVIP_WEBHOOK'
  | 'SWISHIP'
  | 'TANET'
  | 'HOTSIN_CARGO'
  | 'DIREX'
  | 'HUANTONG'
  | 'IMILE_API'
  | 'AUEXPRESS'
  | 'NYTLOGISTICS'
  | 'DSV_REFERENCE'
  | 'NOVOFARMA_WEBHOOK'
  | 'AITWORLDWIDE_SFTP'
  | 'SHOPOLIVE'
  | 'FNF_ZA'
  | 'DHL_ECOMMERCE_GC'
  | 'FETCHR'
  | 'STARLINKS_API'
  | 'YYEXPRESS'
  | 'SERVIENTREGA'
  | 'HANJIN'
  | 'SPANISH_SEUR_FTP'
  | 'DX_B2B_CONNUM'
  | 'HELTHJEM_API'
  | 'INEXPOST'
  | 'A2B_BA'
  | 'RHENUS_GROUP'
  | 'SBERLOGISTICS_RU'
  | 'MALCA_AMIT'
  | 'PPL'
  | 'OSM_WORLDWIDE_SFTP'
  | 'ACILOGISTIX'
  | 'OPTIMACOURIER'
  | 'NOVA_POSHTA_API'
  | 'LOGGI'
  | 'YIFAN'
  | 'MYDYNALOGIC'
  | 'MORNINGLOBAL'
  | 'CONCISE_API'
  | 'FXTRAN'
  | 'DELIVERYOURPARCEL_ZA'
  | 'UPARCEL'
  | 'MOBI_BR'
  | 'LOGINEXT_WEBHOOK'
  | 'EMS'
  | 'SPEEDY'
  | 'ZOOM_RED'
  | 'NAVLUNGO'
  | 'CASTLEPARCELS'
  | 'WEEE'
  | 'PACKALY'
  | 'YUNHUIPOST'
  | 'YOUPARCEL'
  | 'LEMAN'
  | 'MOOVIN'
  | 'URB_IT'
  | 'MULTIENTREGAPANAMA'
  | 'JUSDASR'
  | 'DISCOUNTPOST'
  | 'RHENUS_UK'
  | 'SWISHIP_JP'
  | 'GLS_US'
  | 'SMTL'
  | 'EMEGA'
  | 'EXPRESSONE_SV'
  | 'HEPSIJET'
  | 'WELIVERY'
  | 'BRINGER'
  | 'EASYROUTES'
  | 'MRW'
  | 'RPM'
  | 'DPD_PRT'
  | 'GLS_ROMANIA'
  | 'LMPARCEL'
  | 'GTAGSM'
  | 'DOMINO'
  | 'ESHIPPER'
  | 'TRANSPAK'
  | 'XINDUS'
  | 'AOYUE'
  | 'EASYPARCEL'
  | 'EXPRESSONE'
  | 'SENDEO_KARGO'
  | 'SPEEDAF'
  | 'ETOWER'
  | 'GCX'
  | 'NINJAVAN_VN'
  | 'ALLEGRO'
  | 'JUMPPOINT'
  | 'SHIPGLOBAL_US'
  | 'KINISI'
  | 'OAKH'
  | 'AWEST'
  | 'BARSAN'
  | 'ENERGOLOGISTIC'
  | 'MADROOEX'
  | 'GOBOLT'
  | 'SWISS_UNIVERSAL_EXPRESS'
  | 'IORDIRECT'
  | 'XMSZM'
  | 'GLS_HUN'
  | 'SENDY'
  | 'BRAUNSEXPRESS'
  | 'GRANDSLAMEXPRESS'
  | 'XGS'
  | 'OTSCHILE'
  | 'PACK_UP'
  | 'PARCELSTARS'
  | 'TEAMEXPRESSLLC'
  | 'ASYADEXPRESS'
  | 'TDN'
  | 'EARLYBIRD'
  | 'CACESA'
  | 'PARCELJET'
  | 'MNG_KARGO'
  | 'SUPERPACKLINE'
  | 'SPEEDX'
  | 'VESYL'
  | 'SKYKING'
  | 'DIRMENSAJERIA'
  | 'NETLOGIXGROUP'
  | 'ZYOU'
  | 'JAWAR'
  | 'AGSYSTEMS'
  | 'GPS'
  | 'PTT_KARGO'
  | 'MAERGO'
  | 'ARIHANTCOURIER'
  | 'VTFE'
  | 'YUNANT'
  | 'URBIFY'
  | 'PACK_MAN'
  | 'LIEFERGRUN'
  | 'OBIBOX'
  | 'PAIKEDA'
  | 'SCOTTY'
  | 'INTELCOM_CA'
  | 'SWE'
  | 'ASENDIA'
  | 'DPD_AT'
  | 'RELAY'
  | 'ATA'
  | 'SKYEXPRESS_INTERNATIONAL'
  | 'SURAT_KARGO'
  | 'SGLINK'
  | 'FLEETOPTICSINC'
  | 'SHOPLINE'
  | 'PIGGYSHIP'
  | 'LOGOIX'
  | 'KOLAY_GELSIN'
  | 'ASSOCIATED_COURIERS'
  | 'UPS_CHECKER'
  | 'WINESHIPPING'
  | 'SPEDISCI'
  | 'FOURKITES'
  | 'ETONAS'
  | 'FINMILE'
  | 'UNIUNI'
  | 'RODONAVES'
  | 'INPOST_IT'
  | 'TFORCE_FREIGHT'
  | 'RICHMOM'
  | 'FRANCO'
  | 'ECPARCEL'
  | 'FEDEX_CHINA'
  | 'GOFO_EXPRESS'
  | 'SHIPBOB'
  | 'JERSEYPOST_ATLAS'
  | 'CORETRAILS'
  | 'RHENUS_ITALY'
  | 'JADLOG'
  | 'JITSU'
  | 'YANWEN_EXPRESS'
  | 'DASHLINK'
  | 'SEINO_SUPER_EXPRESS'
  | 'FLOSHIP'
  | 'METROSCG'
  | 'SENDPARCEL'
  | 'P2P'
  | 'CN_EXPRESS'
  | 'CIRROTRACK'
  | 'LAND_LOGISTICS'
  | 'VEHO'
  | 'MEDLINE'
  | 'VDTRACK'
  | 'SINO_SCM'
  | '3PE_EXPRESS'
  | 'SWIFTX'
  | 'SFYDEXPRESS'
  | 'TOPTRANS'
  | 'OTHER'
type OrderTrackerRequest = {
  tracking_number: string
  carrier: ShipmentCarrier
  carrier_name_other?: string | undefined
  capture_id: string
  notify_payer?: boolean | undefined
  items?:
    | {
        name?: string | undefined
        quantity?: string | undefined
        sku?: string | undefined
        url?: string | undefined
        image_url?: string | undefined
        upc?:
          | {
              type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
              code: string
            }
          | undefined
      }[]
    | undefined
}
type OrderUpdateCallbackRequest = {
  id?: string | undefined
  shipping_address?:
    | {
        address_line_1?: string | undefined
        address_line_2?: string | undefined
        address_line_3?: string | undefined
        admin_area_4?: string | undefined
        admin_area_3?: string | undefined
        admin_area_2?: string | undefined
        admin_area_1?: string | undefined
        postal_code?: string | undefined
        country_code: CountryCode
        address_details?:
          | {
              street_number?: string | undefined
              street_name?: string | undefined
              street_type?: string | undefined
              delivery_service?: string | undefined
              building_name?: string | undefined
              sub_building?: string | undefined
            }
          | undefined
      }
    | undefined
  shipping_option?:
    | {
        id: string
        label: string
        type?: {} | undefined
        amount?: { currency_code: CurrencyCode; value: string } | undefined
        selected: boolean
      }
    | undefined
  purchase_units: {
    reference_id?: string | undefined
    amount: { currency_code: CurrencyCode; value: string; breakdown?: AmountBreakdown | undefined }
    payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
    payment_instruction?: PaymentInstruction | undefined
    description?: string | undefined
    custom_id?: string | undefined
    invoice_id?: string | undefined
    soft_descriptor?: string | undefined
    items?:
      | {
          name: string
          unit_amount: { currency_code: CurrencyCode; value: string }
          tax?: { currency_code: CurrencyCode; value: string } | undefined
          quantity: string
          description?: string | undefined
          sku?: string | undefined
          url?: string | undefined
          category?: 'DIGITAL_GOODS' | 'PHYSICAL_GOODS' | 'DONATION' | undefined
          image_url?: string | undefined
          upc?:
            | {
                type: 'UPC-A' | 'UPC-B' | 'UPC-C' | 'UPC-D' | 'UPC-E' | 'UPC-2' | 'UPC-5'
                code: string
              }
            | undefined
          billing_plan?: OrderBillingPlan | undefined
        }[]
      | undefined
    shipping?:
      | {
          name?:
            | {
                prefix?: string | undefined
                given_name?: string | undefined
                surname?: string | undefined
                middle_name?: string | undefined
                suffix?: string | undefined
                full_name?: string | undefined
              }
            | undefined
          email_address?: {} | undefined
          phone_number?:
            | {
                country_code: string
                national_number: string
                extension_number?: string | undefined
              }
            | undefined
          type?:
            | 'SHIPPING'
            | 'PICKUP_IN_PERSON'
            | 'PICKUP_IN_STORE'
            | 'PICKUP_FROM_PERSON'
            | undefined
          options?:
            | {
                id: string
                label: string
                type?: {} | undefined
                amount?: { currency_code: CurrencyCode; value: string } | undefined
                selected: boolean
              }[]
            | undefined
          address?:
            | {
                address_line_1?: string | undefined
                address_line_2?: string | undefined
                address_line_3?: string | undefined
                admin_area_4?: string | undefined
                admin_area_3?: string | undefined
                admin_area_2?: string | undefined
                admin_area_1?: string | undefined
                postal_code?: string | undefined
                country_code: CountryCode
                address_details?:
                  | {
                      street_number?: string | undefined
                      street_name?: string | undefined
                      street_type?: string | undefined
                      delivery_service?: string | undefined
                      building_name?: string | undefined
                      sub_building?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    supplementary_data?:
      | {
          card?:
            | {
                level_2?: Level_2CardProcessingData | undefined
                level_3?: Level_3CardProcessingData | undefined
              }
            | undefined
          risk?: { customer?: ParticipantMetadata | undefined } | undefined
        }
      | undefined
  }[]
}
type OrderUpdateCallbackResponse = { id?: string | undefined }
type OrderUpdateCallbackErrorResponseDetails = {
  field?: string | undefined
  value?: string | undefined
  issue: string
}
type OrderUpdateCallbackErrorResponse = {
  name: string
  message?: string | undefined
  details?: OrderUpdateCallbackErrorResponseDetails[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/checkout/orders': {
      $post:
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Order
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Order
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'PayPal-Request-Id'?: string | undefined
                'PayPal-Partner-Attribution-Id'?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/:id/confirm-payment-source': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                Prefer?: string | undefined
              }
            } & { json: ConfirmOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/:id/authorize': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: OrderAuthorizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: OrderAuthorizeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: OrderAuthorizeResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: OrderAuthorizeResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderAuthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/:id/capture': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Order
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Order
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Order
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/:id/track': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Order
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: OrderTrackerRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/:id/trackers/:tracker_id': {
      $patch:
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string; tracker_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/checkout/orders/order-update-callback': {
      $post:
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: OrderUpdateCallbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: OrderUpdateCallbackErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: OrderUpdateCallbackErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization?: StandardHeaderSchema | undefined } } & {
              json: OrderUpdateCallbackRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
