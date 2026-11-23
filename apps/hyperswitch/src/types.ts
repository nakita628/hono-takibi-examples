type Currency =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL'
type Connector =
  | 'absa_sanlam'
  | 'authipay'
  | 'adyenplatform'
  | 'stripe_billing_test'
  | 'phonypay'
  | 'fauxpay'
  | 'pretendpay'
  | 'stripe_test'
  | 'adyen_test'
  | 'checkout_test'
  | 'paypal_test'
  | 'aci'
  | 'adyen'
  | 'affirm'
  | 'airwallex'
  | 'amazonpay'
  | 'archipel'
  | 'authorizedotnet'
  | 'bambora'
  | 'bamboraapac'
  | 'bankofamerica'
  | 'barclaycard'
  | 'betterpayment'
  | 'billwerk'
  | 'bitpay'
  | 'bluesnap'
  | 'blackhawknetwork'
  | 'calida'
  | 'boku'
  | 'braintree'
  | 'breadpay'
  | 'cardinal'
  | 'cashtocode'
  | 'celero'
  | 'chargebee'
  | 'checkbook'
  | 'checkout'
  | 'citigate'
  | 'coinbase'
  | 'coingate'
  | 'custombilling'
  | 'cryptopay'
  | 'ctp_mastercard'
  | 'ctp_visa'
  | 'cybersource'
  | 'cybersourcedecisionmanager'
  | 'd24'
  | 'datatrans'
  | 'deutschebank'
  | 'digitalvirgo'
  | 'dlocal'
  | 'dwolla'
  | 'ebanx'
  | 'ecommpay'
  | 'envoy'
  | 'elavon'
  | 'etisalat'
  | 'elavon_pg'
  | 'facilitapay'
  | 'finix'
  | 'fiserv'
  | 'fiservemea'
  | 'fiservcommercehub'
  | 'fiuu'
  | 'flexiti'
  | 'forte'
  | 'getnet'
  | 'gigadat'
  | 'givepayments'
  | 'globalpay'
  | 'globalpayments_heartland'
  | 'globalpayments_realex'
  | 'globepay'
  | 'gocardless'
  | 'gotyme_sanlam'
  | 'gpayments'
  | 'hipay'
  | 'helcim'
  | 'hyperpg'
  | 'hyperswitch_vault'
  | 'interpayments'
  | 'inespay'
  | 'iatapay'
  | 'ilixium'
  | 'imerchantsolutions'
  | 'itaubank'
  | 'jpmorgan'
  | 'jpmorgan_orbital'
  | 'juspay'
  | 'juspaythreedsserver'
  | 'klarna'
  | 'loonio'
  | 'merchante'
  | 'mifinity'
  | 'mollie'
  | 'moneris'
  | 'multisafepay'
  | 'netcetera'
  | 'nexinets'
  | 'nexixpay'
  | 'nmi'
  | 'nomupay'
  | 'noon'
  | 'nordea'
  | 'novalnet'
  | 'nuvei'
  | 'opennode'
  | 'paybox'
  | 'paydotcom'
  | 'payhound'
  | 'payload'
  | 'payme'
  | 'paynearme'
  | 'payone'
  | 'paypal'
  | 'paysafe'
  | 'paystack'
  | 'paytm'
  | 'payconex'
  | 'payu'
  | 'peachpayments'
  | 'payjustnow'
  | 'payjustnowinstore'
  | 'phonepe'
  | 'placetopay'
  | 'powertranz'
  | 'prophetpay'
  | 'rapyd'
  | 'razorpay'
  | 'recurly'
  | 'redsys'
  | 'revolv3'
  | 'saferpay'
  | 'santander'
  | 'shift4'
  | 'silverflow'
  | 'square'
  | 'stax'
  | 'stripe'
  | 'stripebilling'
  | 'taxjar'
  | 'threedsecureio'
  | 'tesouro'
  | 'tokenex'
  | 'tokenio'
  | 'trustly'
  | 'truelayer'
  | 'trustpay'
  | 'trustpayments'
  | 'tsys'
  | 'tsys_transit'
  | 'vgs'
  | 'volt'
  | 'wellsfargo'
  | 'wise'
  | 'worldline'
  | 'worldpay'
  | 'worldpayraft'
  | 'worldpayvantiv'
  | 'worldpayxml'
  | 'worldpaymodular'
  | 'signifyd'
  | 'nsure'
  | 'plaid'
  | 'riskified'
  | 'sanlam_payshield'
  | 'xendit'
  | 'zen'
  | 'zift'
  | 'zsl'
type DocumentKind = 'cpf' | 'cnpj' | 'psn' | 'other'
type OrderDetailsWithAmount = {
  product_name: string
  quantity: number
  amount: bigint
  tax_rate?: (number | null) | undefined
  total_tax_amount?: (bigint | null) | undefined
  requires_shipping?: (boolean | null) | undefined
  product_img_link?: (string | null) | undefined
  product_id?: (string | null) | undefined
  category?: (string | null) | undefined
  sub_category?: (string | null) | undefined
  brand?: (string | null) | undefined
  product_type?: {} | undefined
  product_tax_code?: (string | null) | undefined
  description?: (string | null) | undefined
  sku?: (string | null) | undefined
  upc?: (string | null) | undefined
  commodity_code?: (string | null) | undefined
  unit_of_measure?: (string | null) | undefined
  total_amount?: (bigint | null) | undefined
  discount_name?: (string | null) | undefined
  unit_discount_amount?: (bigint | null) | undefined
  discount_percentage?: { percentage: number } | undefined
  discount_type?: (string | null) | undefined
}
type AcceptanceType = 'online' | 'offline'
type PaymentMethodType =
  | 'ach'
  | 'affirm'
  | 'afterpay_clearpay'
  | 'alfamart'
  | 'ali_pay'
  | 'ali_pay_hk'
  | 'alma'
  | 'amazon_pay'
  | 'paysera'
  | 'apple_pay'
  | 'atome'
  | 'bacs'
  | 'bancontact_card'
  | 'becs'
  | 'benefit'
  | 'bizum'
  | 'blik'
  | 'bluecode'
  | 'boleto'
  | 'bca_bank_transfer'
  | 'bni_va'
  | 'breadpay'
  | 'bri_va'
  | 'bhn_card_network'
  | 'card_redirect'
  | 'cimb_va'
  | 'classic'
  | 'credit'
  | 'crypto_currency'
  | 'cashapp'
  | 'dana'
  | 'danamon_va'
  | 'debit'
  | 'duit_now'
  | 'efecty'
  | 'eft'
  | 'eft_debit_order'
  | 'eps'
  | 'flexiti'
  | 'fps'
  | 'evoucher'
  | 'giropay'
  | 'givex'
  | 'google_pay'
  | 'go_pay'
  | 'gcash'
  | 'ideal'
  | 'interac'
  | 'indomaret'
  | 'klarna'
  | 'kakao_pay'
  | 'local_bank_redirect'
  | 'mandiri_va'
  | 'knet'
  | 'mb_way'
  | 'mobile_pay'
  | 'momo'
  | 'momo_atm'
  | 'multibanco'
  | 'neteller'
  | 'online_banking_thailand'
  | 'online_banking_czech_republic'
  | 'online_banking_finland'
  | 'online_banking_fpx'
  | 'online_banking_poland'
  | 'online_banking_slovakia'
  | 'oxxo'
  | 'pago_efectivo'
  | 'permata_bank_transfer'
  | 'open_banking_uk'
  | 'pay_bright'
  | 'payjustnow'
  | 'paypal'
  | 'paze'
  | 'pix'
  | 'pix_key'
  | 'pix_emv'
  | 'pix_qr'
  | 'pix_automatico_qr'
  | 'pix_automatico_push'
  | 'pay_safe_card'
  | 'przelewy24'
  | 'prompt_pay'
  | 'pse'
  | 'qris'
  | 'red_compra'
  | 'red_pagos'
  | 'samsung_pay'
  | 'sepa'
  | 'sepa_bank_transfer'
  | 'sepa_guarenteed_debit'
  | 'skrill'
  | 'sofort'
  | 'swish'
  | 'touch_n_go'
  | 'trustly'
  | 'twint'
  | 'upi_collect'
  | 'upi_intent'
  | 'upi_qr'
  | 'vipps'
  | 'viet_qr'
  | 'venmo'
  | 'walley'
  | 'wero'
  | 'we_chat_pay'
  | 'seven_eleven'
  | 'lawson'
  | 'mini_stop'
  | 'family_mart'
  | 'seicomart'
  | 'pay_easy'
  | 'local_bank_transfer'
  | 'mifinity'
  | 'open_banking_pis'
  | 'direct_carrier_billing'
  | 'instant_bank_transfer'
  | 'instant_bank_transfer_finland'
  | 'instant_bank_transfer_poland'
  | 'revolut_pay'
  | 'indonesian_bank_transfer'
  | 'open_banking'
  | 'network_token'
  | 'payshap'
  | 'payshap_proxy'
  | 'ted'
type ApplepayInitiative = 'web' | 'ios'
type AdyenTestingData = { holder_name: string }
type DiscountTier = { amount?: (string | null) | undefined; end_date?: (string | null) | undefined }
type ProtestType = 'disabled' | 'calendar_days' | 'business_days' | 'contract_default'
type PaymentLinkTransactionDetails = {
  key: string
  value: string
  ui_configuration?:
    | {
        position?: (number | null) | undefined
        is_key_bold?: (boolean | null) | undefined
        is_value_bold?: (boolean | null) | undefined
      }
    | undefined
}
type TransactionStatus = 'Y' | 'N' | 'U' | 'A' | 'R' | 'C' | 'D' | 'I' | 'S'
type PaymentMethod =
  | 'card'
  | 'card_redirect'
  | 'pay_later'
  | 'wallet'
  | 'bank_redirect'
  | 'bank_transfer'
  | 'crypto'
  | 'bank_debit'
  | 'reward'
  | 'real_time_payment'
  | 'upi'
  | 'voucher'
  | 'gift_card'
  | 'open_banking'
  | 'mobile_payment'
  | 'network_token'
type BillingFrequency = 'month'
type InstallmentOptionData = {
  number_of_installments: File
  billing_frequency: BillingFrequency
  interest_rate: number
}
type InstallmentOption = { payment_method: PaymentMethod; installments: InstallmentOptionData[] }
type PaymentsCreateRequest = {
  amount: bigint
  order_tax_amount?: (bigint | null) | undefined
  currency: Currency
  amount_to_capture?: (bigint | null) | undefined
  shipping_cost?: (bigint | null) | undefined
  payment_id?: (string | null) | undefined
  routing?: {} | undefined
  connector?: (Connector[] | null) | undefined
  capture_method?: {} | undefined
  authentication_type?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  confirm?: (boolean | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
  customer_id?: (string | null) | undefined
  off_session?: (boolean | null) | undefined
  description?: (string | null) | undefined
  return_url?: (string | null) | undefined
  setup_future_usage?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_method?: {} | undefined
  payment_token?: (string | null) | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  statement_descriptor_name?: (string | null) | undefined
  statement_descriptor_suffix?: (string | null) | undefined
  order_details?: (OrderDetailsWithAmount[] | null) | undefined
  mandate_data?:
    | {
        update_mandate_id?: (string | null) | undefined
        customer_acceptance?:
          | {
              acceptance_type: AcceptanceType
              accepted_at?: (string | null) | undefined
              online?: { ip_address: string; user_agent: string } | undefined
            }
          | undefined
        mandate_type?: {} | undefined
      }
    | undefined
  customer_acceptance?:
    | {
        acceptance_type: AcceptanceType
        accepted_at?: (string | null) | undefined
        online?: { ip_address: string; user_agent: string } | undefined
      }
    | undefined
  mandate_id?: (string | null) | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_experience?: {} | undefined
  payment_method_type?: {} | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
  allowed_payment_method_types?: (PaymentMethodType[] | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  connector_metadata?:
    | {
        apple_pay?:
          | {
              session_token_data?:
                | {
                    certificate: string
                    certificate_keys: string
                    merchant_identifier: string
                    display_name: string
                    initiative: ApplepayInitiative
                    initiative_context?: (string | null) | undefined
                    merchant_business_country?: {} | undefined
                    payment_processing_detail_input_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        airwallex?: { payload?: (string | null) | undefined } | undefined
        noon?: { order_category?: (string | null) | undefined } | undefined
        braintree?: { merchant_account_id: string; merchant_config_currency: string } | undefined
        adyen?: { testing: AdyenTestingData } | undefined
        peachpayments?:
          | { rrn?: (string | null) | undefined; card_on_file_transaction_type?: {} | undefined }
          | undefined
        santander?:
          | {
              boleto?:
                | {
                    discount_rules?:
                      | { discount_type?: {} | undefined; tiers: DiscountTier[] }
                      | undefined
                    penalties?:
                      | {
                          fixed_penalty?:
                            | {
                                value?: (string | null) | undefined
                                grace_period_days?: (number | null) | undefined
                              }
                            | undefined
                          interest?:
                            | {
                                interest_percentage?: (string | null) | undefined
                                iof_percentage?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    collection_actions?:
                      | {
                          legal_protest?:
                            | { protest_type: ProtestType; days_after_due_date: number }
                            | undefined
                          auto_write_off_days?: (number | null) | undefined
                        }
                      | undefined
                    payment_constraints?: {} | undefined
                    beneficiary?:
                      | {
                          name?: (string | null) | undefined
                          document_number?: (string | null) | undefined
                          document_type?: {} | undefined
                        }
                      | undefined
                    document_kind?: {} | undefined
                  }
                | undefined
            }
          | undefined
        paypal?: { paypal_client_metadata_id?: (string | null) | undefined } | undefined
        worldpayxml?:
          | { funding_transaction_type?: {} | undefined; payment_purpose?: {} | undefined }
          | undefined
        checkout?: { purpose_of_payment?: (string | null) | undefined } | undefined
        stripe?: { error_on_requires_action?: (boolean | null) | undefined } | undefined
      }
    | undefined
  payment_link?: (boolean | null) | undefined
  payment_link_config?:
    | {
        theme?: (string | null) | undefined
        logo?: (string | null) | undefined
        seller_name?: (string | null) | undefined
        sdk_layout?: (string | null) | undefined
        display_sdk_only?: (boolean | null) | undefined
        enabled_saved_payment_method?: (boolean | null) | undefined
        hide_card_nickname_field?: (boolean | null) | undefined
        show_card_form_by_default?: (boolean | null) | undefined
        transaction_details?: (PaymentLinkTransactionDetails[] | null) | undefined
        background_image?:
          | { url: string; position?: {} | undefined; size?: {} | undefined }
          | undefined
        details_layout?: {} | undefined
        payment_button_text?: (string | null) | undefined
        custom_message_for_card_terms?: (string | null) | undefined
        custom_message_for_payment_method_types?: {} | undefined
        payment_button_colour?: (string | null) | undefined
        skip_status_screen?: (boolean | null) | undefined
        payment_button_text_colour?: (string | null) | undefined
        background_colour?: (string | null) | undefined
        sdk_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        payment_link_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        enable_button_only_on_form_ready?: (boolean | null) | undefined
        payment_form_header_text?: (string | null) | undefined
        payment_form_label_type?: {} | undefined
        show_card_terms?: {} | undefined
        is_setup_mandate_flow?: (boolean | null) | undefined
        color_icon_card_cvc_error?: (string | null) | undefined
        show_merchant_name?: (boolean | null) | undefined
        payment_methods_separator_text?: (string | null) | undefined
        redirect_delay_seconds?: (number | null) | undefined
      }
    | undefined
  payment_link_config_id?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  surcharge_details?:
    | {
        surcharge_amount: bigint
        tax_amount?: {} | undefined
        surcharge_percentage?: (number | null) | undefined
      }
    | undefined
  offer_details?: { offer_quote_ids: string[] } | undefined
  payment_type?: {} | undefined
  request_incremental_authorization?: (boolean | null) | undefined
  session_expiry?: (number | null) | undefined
  frm_metadata?: ({ [x: string]: unknown } | null) | undefined
  request_external_three_ds_authentication?: (boolean | null) | undefined
  three_ds_data?:
    | {
        authentication_cryptogram?: {} | undefined
        ds_trans_id?: (string | null) | undefined
        version?: (string | null) | undefined
        eci?: (string | null) | undefined
        transaction_status: TransactionStatus
      }
    | undefined
  recurring_details?: {} | undefined
  split_payments?: {} | undefined
  request_extended_authorization?: (boolean | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  skip_external_tax_calculation?: (boolean | null) | undefined
  psd2_sca_exemption_type?: {} | undefined
  ctp_service_details?:
    | {
        merchant_transaction_id?: (string | null) | undefined
        correlation_id?: (string | null) | undefined
        x_src_flow_id?: (string | null) | undefined
        provider?: {} | undefined
        encrypted_payload?: (string | null) | undefined
      }
    | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  threeds_method_comp_ind?: {} | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  all_keys_required?: (boolean | null) | undefined
  payment_channel?: {} | undefined
  tax_status?: {} | undefined
  discount_amount?: (bigint | null) | undefined
  shipping_amount_tax?: {} | undefined
  value_added_tax_amount?: (bigint | null) | undefined
  value_added_tax_percent?: (number | null) | undefined
  duty_amount?: {} | undefined
  order_commodity_code?: (string | null) | undefined
  vat_invoice_reference_number?: (string | null) | undefined
  order_date?: (string | null) | undefined
  enable_partial_authorization?: (boolean | null) | undefined
  enable_overcapture?: (boolean | null) | undefined
  is_stored_credential?: (boolean | null) | undefined
  mit_category?: {} | undefined
  billing_descriptor?:
    | {
        name?: (string | null) | undefined
        city?: (string | null) | undefined
        phone?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
        statement_descriptor_suffix?: (string | null) | undefined
        reference?: (string | null) | undefined
      }
    | undefined
  is_account_funded_transaction?: (boolean | null) | undefined
  recipient_details?:
    | {
        account?: {} | undefined
        phone_number?: (string | null) | undefined
        tax_id?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  sender_details?: {} | undefined
  tokenization?: {} | undefined
  partner_merchant_identifier_details?:
    | {
        partner_details?:
          | {
              name?: (string | null) | undefined
              version?: (string | null) | undefined
              integrator?: (string | null) | undefined
            }
          | undefined
        merchant_details?:
          | { name?: (string | null) | undefined; version?: (string | null) | undefined }
          | undefined
      }
    | undefined
  installment_options?: (InstallmentOption[] | null) | undefined
  installment_data?:
    | { number_of_installments: number; billing_frequency: BillingFrequency }
    | undefined
  profile_acquirer_id?: (string | null) | undefined
  external_surcharge_strategy?: {} | undefined
  enable_avs_check?: (boolean | null) | undefined
  enable_account_name_verification?: (boolean | null) | undefined
  settlement_conclusion_applied?: (boolean | null) | undefined
}
type PostCaptureVoidStatus = 'succeeded' | 'pending' | 'failed'
type RefundStatus = 'succeeded' | 'failed' | 'pending' | 'review'
type RefundResponse = {
  refund_id: string
  payment_id: string
  amount: bigint
  net_amount?: (bigint | null) | undefined
  surcharge_refund_amount?: (bigint | null) | undefined
  currency: string
  status: RefundStatus
  reason?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  error_message?: (string | null) | undefined
  error_code?: (string | null) | undefined
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  created_at?: (string | null) | undefined
  updated_at?: (string | null) | undefined
  connector: string
  profile_id?: (string | null) | undefined
  merchant_connector_id?: (string | null) | undefined
  split_refunds?: {} | undefined
  issuer_error_code?: (string | null) | undefined
  issuer_error_message?: (string | null) | undefined
  raw_connector_response?: (string | null) | undefined
  connector_refund_id?: (string | null) | undefined
  feature_metadata?:
    | { multi_currency_processing?: { amount: bigint; currency: Currency } | undefined }
    | undefined
}
type StringMinorUnit = string
type DisputeStage =
  | 'pre_dispute'
  | 'dispute'
  | 'pre_arbitration'
  | 'arbitration'
  | 'dispute_reversal'
type DisputeStatus =
  | 'dispute_opened'
  | 'dispute_expired'
  | 'dispute_accepted'
  | 'dispute_cancelled'
  | 'dispute_challenged'
  | 'dispute_won'
  | 'dispute_lost'
type DisputeResponsePaymentsRetrieve = {
  dispute_id: string
  amount: StringMinorUnit
  dispute_stage: DisputeStage
  dispute_status: DisputeStatus
  connector_status: string
  connector_dispute_id: string
  connector_reason?: (string | null) | undefined
  connector_reason_code?: (string | null) | undefined
  challenge_required_by?: (string | null) | undefined
  connector_created_at?: (string | null) | undefined
  connector_updated_at?: (string | null) | undefined
  created_at: string
  additional_details?: { network_details?: {} | undefined } | undefined
}
type AttemptStatus =
  | 'started'
  | 'authentication_failed'
  | 'router_declined'
  | 'authentication_pending'
  | 'authentication_successful'
  | 'authorized'
  | 'authorization_failed'
  | 'charged'
  | 'authorizing'
  | 'cod_initiated'
  | 'voided'
  | 'voided_post_charge'
  | 'void_initiated'
  | 'capture_initiated'
  | 'capture_failed'
  | 'void_failed'
  | 'auto_refunded'
  | 'partial_charged'
  | 'partially_authorized'
  | 'partial_charged_and_chargeable'
  | 'unresolved'
  | 'pending'
  | 'failure'
  | 'payment_method_awaited'
  | 'confirmation_awaited'
  | 'device_data_collection_pending'
  | 'integrity_failure'
  | 'expired'
  | 'capture_review'
type PaymentAttemptResponse = {
  attempt_id: string
  status: AttemptStatus
  amount: bigint
  order_tax_amount?: (bigint | null) | undefined
  currency?: {} | undefined
  connector?: (string | null) | undefined
  error_message?: (string | null) | undefined
  payment_method?: {} | undefined
  connector_transaction_id?: (string | null) | undefined
  capture_method?: {} | undefined
  authentication_type?: {} | undefined
  created_at: string
  modified_at: string
  cancellation_reason?: (string | null) | undefined
  mandate_id?: (string | null) | undefined
  error_code?: (string | null) | undefined
  payment_token?: (string | null) | undefined
  connector_metadata?: ({ [x: string]: unknown } | null) | undefined
  payment_experience?: {} | undefined
  payment_method_type?: {} | undefined
  reference_id?: (string | null) | undefined
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  client_source?: (string | null) | undefined
  client_version?: (string | null) | undefined
  error_details?:
    | {
        unified_details?:
          | {
              category?: {} | undefined
              message?: (string | null) | undefined
              standardised_code?: {} | undefined
              description?: (string | null) | undefined
              user_guidance_message?: (string | null) | undefined
              recommended_action?: {} | undefined
            }
          | undefined
        issuer_details?:
          | {
              code?: (string | null) | undefined
              message?: (string | null) | undefined
              network_details?:
                | {
                    name?: {} | undefined
                    advice_code?: (string | null) | undefined
                    advice_message?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        connector_details?:
          | {
              code?: (string | null) | undefined
              message?: (string | null) | undefined
              reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
}
type CaptureStatus = 'started' | 'charged' | 'pending' | 'failed'
type CaptureResponse = {
  capture_id: string
  status: CaptureStatus
  amount: bigint
  currency?: {} | undefined
  connector: string
  authorized_attempt_id: string
  connector_capture_id?: (string | null) | undefined
  capture_sequence: number
  error_message?: (string | null) | undefined
  error_code?: (string | null) | undefined
  error_reason?: (string | null) | undefined
  reference_id?: (string | null) | undefined
}
type ApplePayRegularBillingDetails = {
  label: string
  recurring_payment_start_date?: (string | null) | undefined
  recurring_payment_end_date?: (string | null) | undefined
  recurring_payment_interval_unit?: {} | undefined
  recurring_payment_interval_count?: (number | null) | undefined
}
type AuthorizationStatus = 'success' | 'failure' | 'processing' | 'unresolved'
type MinorUnit = bigint
type IncrementalAuthorizationResponse = {
  authorization_id: string
  amount: bigint
  status: AuthorizationStatus
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  previously_authorized_amount: MinorUnit
}
type AuthenticationStatus = 'started' | 'pending' | 'success' | 'failed'
type PaymentsCreateResponseOpenApi = {
  payment_id: string
  merchant_id: string
  status: {}
  amount: bigint
  net_amount: bigint
  shipping_cost?: (bigint | null) | undefined
  amount_capturable: bigint
  amount_received?: (bigint | null) | undefined
  processor_merchant_id: string
  initiator?: {} | undefined
  sdk_authorization?: (string | null) | undefined
  payment_method_list?: {} | undefined
  session_tokens?: {} | undefined
  connector?: (string | null) | undefined
  state_metadata?:
    | {
        total_refunded_amount?: {} | undefined
        total_disputed_amount?: {} | undefined
        post_capture_void?:
          | {
              status: PostCaptureVoidStatus
              connector_reference_id?: (string | null) | undefined
              description?: (string | null) | undefined
              updated_at: string
            }
          | undefined
      }
    | undefined
  client_secret?: (string | null) | undefined
  created?: (string | null) | undefined
  modified_at?: (string | null) | undefined
  connector_customer_id?: (string | null) | undefined
  currency: Currency
  customer_id?: (string | null) | undefined
  description?: (string | null) | undefined
  refunds?: (RefundResponse[] | null) | undefined
  disputes?: (DisputeResponsePaymentsRetrieve[] | null) | undefined
  attempts?: (PaymentAttemptResponse[] | null) | undefined
  captures?: (CaptureResponse[] | null) | undefined
  mandate_id?: (string | null) | undefined
  mandate_data?:
    | {
        update_mandate_id?: (string | null) | undefined
        customer_acceptance?:
          | {
              acceptance_type: AcceptanceType
              accepted_at?: (string | null) | undefined
              online?: { ip_address: string; user_agent: string } | undefined
            }
          | undefined
        mandate_type?: {} | undefined
      }
    | undefined
  setup_future_usage?: {} | undefined
  off_session?: (boolean | null) | undefined
  capture_method?: {} | undefined
  capture_method_applied?: {} | undefined
  payment_method: PaymentMethod
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_token?: (string | null) | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  order_details?: (OrderDetailsWithAmount[] | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  return_url?: (string | null) | undefined
  authentication_type?: {} | undefined
  statement_descriptor_name?: (string | null) | undefined
  statement_descriptor_suffix?: (string | null) | undefined
  next_action?: {} | undefined
  cancellation_reason?: (string | null) | undefined
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  error_details?:
    | {
        unified_details?:
          | {
              category?: {} | undefined
              message?: (string | null) | undefined
              standardised_code?: {} | undefined
              description?: (string | null) | undefined
              user_guidance_message?: (string | null) | undefined
              recommended_action?: {} | undefined
            }
          | undefined
        issuer_details?:
          | {
              code?: (string | null) | undefined
              message?: (string | null) | undefined
              network_details?:
                | {
                    name?: {} | undefined
                    advice_code?: (string | null) | undefined
                    advice_message?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        connector_details?:
          | {
              code?: (string | null) | undefined
              message?: (string | null) | undefined
              reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_experience?: {} | undefined
  payment_method_type?: {} | undefined
  connector_label?: (string | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  business_sub_label?: (string | null) | undefined
  allowed_payment_method_types?: (PaymentMethodType[] | null) | undefined
  manual_retry_allowed?: (boolean | null) | undefined
  connector_transaction_id?: (string | null) | undefined
  frm_message?:
    | {
        frm_name: string
        frm_transaction_id?: (string | null) | undefined
        frm_transaction_type?: (string | null) | undefined
        frm_status?: (string | null) | undefined
        frm_score?: (number | null) | undefined
        frm_reason?: ({ [x: string]: unknown } | null) | undefined
        frm_error?: (string | null) | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  connector_metadata?:
    | {
        apple_pay?:
          | {
              session_token_data?:
                | {
                    certificate: string
                    certificate_keys: string
                    merchant_identifier: string
                    display_name: string
                    initiative: ApplepayInitiative
                    initiative_context?: (string | null) | undefined
                    merchant_business_country?: {} | undefined
                    payment_processing_detail_input_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        airwallex?: { payload?: (string | null) | undefined } | undefined
        noon?: { order_category?: (string | null) | undefined } | undefined
        braintree?: { merchant_account_id: string; merchant_config_currency: string } | undefined
        adyen?: { testing: AdyenTestingData } | undefined
        peachpayments?:
          | { rrn?: (string | null) | undefined; card_on_file_transaction_type?: {} | undefined }
          | undefined
        santander?:
          | {
              boleto?:
                | {
                    discount_rules?:
                      | { discount_type?: {} | undefined; tiers: DiscountTier[] }
                      | undefined
                    penalties?:
                      | {
                          fixed_penalty?:
                            | {
                                value?: (string | null) | undefined
                                grace_period_days?: (number | null) | undefined
                              }
                            | undefined
                          interest?:
                            | {
                                interest_percentage?: (string | null) | undefined
                                iof_percentage?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    collection_actions?:
                      | {
                          legal_protest?:
                            | { protest_type: ProtestType; days_after_due_date: number }
                            | undefined
                          auto_write_off_days?: (number | null) | undefined
                        }
                      | undefined
                    payment_constraints?: {} | undefined
                    beneficiary?:
                      | {
                          name?: (string | null) | undefined
                          document_number?: (string | null) | undefined
                          document_type?: {} | undefined
                        }
                      | undefined
                    document_kind?: {} | undefined
                  }
                | undefined
            }
          | undefined
        paypal?: { paypal_client_metadata_id?: (string | null) | undefined } | undefined
        worldpayxml?:
          | { funding_transaction_type?: {} | undefined; payment_purpose?: {} | undefined }
          | undefined
        checkout?: { purpose_of_payment?: (string | null) | undefined } | undefined
        stripe?: { error_on_requires_action?: (boolean | null) | undefined } | undefined
      }
    | undefined
  connector_response_metadata?: {} | undefined
  feature_metadata?:
    | {
        redirect_response?:
          | {
              param?: (string | null) | undefined
              json_payload?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
        search_tags?: (string[] | null) | undefined
        apple_pay_recurring_details?:
          | {
              payment_description: string
              regular_billing: ApplePayRegularBillingDetails
              billing_agreement?: (string | null) | undefined
              management_url: string
            }
          | undefined
        pix_additional_details?: {} | undefined
        boleto_additional_details?:
          | {
              due_date?: (string | null) | undefined
              document_kind?: {} | undefined
              payment_type?: {} | undefined
              covenant_code?: (string | null) | undefined
              pix_key?: {} | undefined
              discount_rules?: { discount_type?: {} | undefined; tiers: DiscountTier[] } | undefined
              penalties?:
                | {
                    fixed_penalty?:
                      | {
                          value?: (string | null) | undefined
                          grace_period_days?: (number | null) | undefined
                        }
                      | undefined
                    interest?:
                      | {
                          interest_percentage?: (string | null) | undefined
                          iof_percentage?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              collection_actions?:
                | {
                    legal_protest?:
                      | { protest_type: ProtestType; days_after_due_date: number }
                      | undefined
                    auto_write_off_days?: (number | null) | undefined
                  }
                | undefined
              payment_constraints?: {} | undefined
              beneficiary?:
                | {
                    name?: (string | null) | undefined
                    document_number?: (string | null) | undefined
                    document_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        pix_automatico_additional_details?: {} | undefined
        finix_additional_details?: { fraud_session_id?: (string | null) | undefined } | undefined
        multi_currency_processing?:
          | {
              currency: Currency
              amount: bigint
              conversion_rate?: (number | null) | undefined
              date?: (string | null) | undefined
              processing_reference_id?: (string | null) | undefined
              user_id?: (string | null) | undefined
              conversion_provider?: (string | null) | undefined
              conversion_reason_code?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  reference_id?: (string | null) | undefined
  payment_link?:
    | { link: string; secure_link?: (string | null) | undefined; payment_link_id: string }
    | undefined
  profile_id?: (string | null) | undefined
  surcharge_details?:
    | {
        surcharge_amount: bigint
        tax_amount?: {} | undefined
        surcharge_percentage?: (number | null) | undefined
        error_details?:
          | {
              error_code?: (string | null) | undefined
              error_message?: (string | null) | undefined
              error_reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  applied_offer?:
    | {
        offer_engine_merchant_id: string
        offer_engine_txn_id: string
        offer_id: string
        offer_amount: bigint
        currency: Currency
      }
    | undefined
  attempt_count: number
  merchant_decision?: (string | null) | undefined
  merchant_connector_id?: (string | null) | undefined
  incremental_authorization_allowed?: (boolean | null) | undefined
  authorization_count?: (number | null) | undefined
  incremental_authorizations?: (IncrementalAuthorizationResponse[] | null) | undefined
  external_authentication_details?:
    | {
        authentication_flow?: {} | undefined
        electronic_commerce_indicator?: (string | null) | undefined
        status: AuthenticationStatus
        ds_transaction_id?: (string | null) | undefined
        version?: (string | null) | undefined
        error_code?: (string | null) | undefined
        error_message?: (string | null) | undefined
        challenge_cancel_code?: (string | null) | undefined
        trans_status_reason?: (string | null) | undefined
      }
    | undefined
  external_3ds_authentication_attempted?: (boolean | null) | undefined
  expires_on?: (string | null) | undefined
  fingerprint?: (string | null) | undefined
  fingerprint_type?: {} | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_channel?: {} | undefined
  payment_method_id?: (string | null) | undefined
  network_transaction_id?: (string | null) | undefined
  payment_account_reference?: (string | null) | undefined
  network_transaction_link_id?: (string | null) | undefined
  payment_method_status?: {} | undefined
  updated?: (string | null) | undefined
  split_payments?: {} | undefined
  frm_metadata?: ({ [x: string]: unknown } | null) | undefined
  extended_authorization_applied?: (boolean | null) | undefined
  extended_authorization_last_applied_at?: (string | null) | undefined
  request_extended_authorization?: (boolean | null) | undefined
  capture_before?: (string | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  order_tax_amount?: {} | undefined
  connector_mandate_id?: (string | null) | undefined
  card_discovery?: {} | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  force_3ds_challenge_trigger?: (boolean | null) | undefined
  issuer_error_code?: (string | null) | undefined
  issuer_error_message?: (string | null) | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  whole_connector_response?: (string | null) | undefined
  enable_partial_authorization?: (boolean | null) | undefined
  enable_overcapture?: (boolean | null) | undefined
  is_overcapture_enabled?: (boolean | null) | undefined
  network_details?: { network_advice_code?: (string | null) | undefined } | undefined
  is_stored_credential?: (boolean | null) | undefined
  mit_category?: {} | undefined
  billing_descriptor?:
    | {
        name?: (string | null) | undefined
        city?: (string | null) | undefined
        phone?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
        statement_descriptor_suffix?: (string | null) | undefined
        reference?: (string | null) | undefined
      }
    | undefined
  is_account_funded_transaction?: (boolean | null) | undefined
  recipient_details?:
    | {
        account?: {} | undefined
        phone_number?: (string | null) | undefined
        tax_id?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  sender_details?: {} | undefined
  tokenization?: {} | undefined
  partner_merchant_identifier_details?:
    | {
        partner_details?:
          | {
              name?: (string | null) | undefined
              version?: (string | null) | undefined
              integrator?: (string | null) | undefined
            }
          | undefined
        merchant_details?:
          | { name?: (string | null) | undefined; version?: (string | null) | undefined }
          | undefined
      }
    | undefined
  payment_method_tokenization_details?:
    | {
        payment_method_id: string
        payment_method_status?: {} | undefined
        psp_tokenization: boolean
        network_tokenization: boolean
        network_transaction_id?: (string | null) | undefined
        network_transaction_link_id?: (string | null) | undefined
        is_eligible_for_mit_payment: boolean
      }
    | undefined
  installment_options?: (InstallmentOption[] | null) | undefined
  installment_data?:
    | {
        number_of_installments: number
        billing_frequency: BillingFrequency
        installment_interest?: {} | undefined
      }
    | undefined
  sender_payment_instrument_id?: (string | null) | undefined
  enable_avs_check?: (boolean | null) | undefined
  enable_account_name_verification?: (boolean | null) | undefined
}
type GenericErrorResponseOpenApi = { error_type: string; message: string; code: string }
type PaymentsUpdateRequest = {
  amount?: (bigint | null) | undefined
  order_tax_amount?: (bigint | null) | undefined
  currency?: {} | undefined
  amount_to_capture?: (bigint | null) | undefined
  shipping_cost?: (bigint | null) | undefined
  payment_id?: (string | null) | undefined
  routing?: {} | undefined
  connector?: (Connector[] | null) | undefined
  capture_method?: {} | undefined
  authentication_type?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  confirm?: (boolean | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
  customer_id?: (string | null) | undefined
  off_session?: (boolean | null) | undefined
  description?: (string | null) | undefined
  return_url?: (string | null) | undefined
  setup_future_usage?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_method?: {} | undefined
  payment_token?: (string | null) | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  statement_descriptor_name?: (string | null) | undefined
  statement_descriptor_suffix?: (string | null) | undefined
  order_details?: (OrderDetailsWithAmount[] | null) | undefined
  mandate_data?:
    | {
        update_mandate_id?: (string | null) | undefined
        customer_acceptance?:
          | {
              acceptance_type: AcceptanceType
              accepted_at?: (string | null) | undefined
              online?: { ip_address: string; user_agent: string } | undefined
            }
          | undefined
        mandate_type?: {} | undefined
      }
    | undefined
  customer_acceptance?:
    | {
        acceptance_type: AcceptanceType
        accepted_at?: (string | null) | undefined
        online?: { ip_address: string; user_agent: string } | undefined
      }
    | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_experience?: {} | undefined
  payment_method_type?: {} | undefined
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
  allowed_payment_method_types?: (PaymentMethodType[] | null) | undefined
  retry_action?: {} | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  connector_metadata?:
    | {
        apple_pay?:
          | {
              session_token_data?:
                | {
                    certificate: string
                    certificate_keys: string
                    merchant_identifier: string
                    display_name: string
                    initiative: ApplepayInitiative
                    initiative_context?: (string | null) | undefined
                    merchant_business_country?: {} | undefined
                    payment_processing_detail_input_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        airwallex?: { payload?: (string | null) | undefined } | undefined
        noon?: { order_category?: (string | null) | undefined } | undefined
        braintree?: { merchant_account_id: string; merchant_config_currency: string } | undefined
        adyen?: { testing: AdyenTestingData } | undefined
        peachpayments?:
          | { rrn?: (string | null) | undefined; card_on_file_transaction_type?: {} | undefined }
          | undefined
        santander?:
          | {
              boleto?:
                | {
                    discount_rules?:
                      | { discount_type?: {} | undefined; tiers: DiscountTier[] }
                      | undefined
                    penalties?:
                      | {
                          fixed_penalty?:
                            | {
                                value?: (string | null) | undefined
                                grace_period_days?: (number | null) | undefined
                              }
                            | undefined
                          interest?:
                            | {
                                interest_percentage?: (string | null) | undefined
                                iof_percentage?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    collection_actions?:
                      | {
                          legal_protest?:
                            | { protest_type: ProtestType; days_after_due_date: number }
                            | undefined
                          auto_write_off_days?: (number | null) | undefined
                        }
                      | undefined
                    payment_constraints?: {} | undefined
                    beneficiary?:
                      | {
                          name?: (string | null) | undefined
                          document_number?: (string | null) | undefined
                          document_type?: {} | undefined
                        }
                      | undefined
                    document_kind?: {} | undefined
                  }
                | undefined
            }
          | undefined
        paypal?: { paypal_client_metadata_id?: (string | null) | undefined } | undefined
        worldpayxml?:
          | { funding_transaction_type?: {} | undefined; payment_purpose?: {} | undefined }
          | undefined
        checkout?: { purpose_of_payment?: (string | null) | undefined } | undefined
        stripe?: { error_on_requires_action?: (boolean | null) | undefined } | undefined
      }
    | undefined
  payment_link?: (boolean | null) | undefined
  payment_link_config?:
    | {
        theme?: (string | null) | undefined
        logo?: (string | null) | undefined
        seller_name?: (string | null) | undefined
        sdk_layout?: (string | null) | undefined
        display_sdk_only?: (boolean | null) | undefined
        enabled_saved_payment_method?: (boolean | null) | undefined
        hide_card_nickname_field?: (boolean | null) | undefined
        show_card_form_by_default?: (boolean | null) | undefined
        transaction_details?: (PaymentLinkTransactionDetails[] | null) | undefined
        background_image?:
          | { url: string; position?: {} | undefined; size?: {} | undefined }
          | undefined
        details_layout?: {} | undefined
        payment_button_text?: (string | null) | undefined
        custom_message_for_card_terms?: (string | null) | undefined
        custom_message_for_payment_method_types?: {} | undefined
        payment_button_colour?: (string | null) | undefined
        skip_status_screen?: (boolean | null) | undefined
        payment_button_text_colour?: (string | null) | undefined
        background_colour?: (string | null) | undefined
        sdk_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        payment_link_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        enable_button_only_on_form_ready?: (boolean | null) | undefined
        payment_form_header_text?: (string | null) | undefined
        payment_form_label_type?: {} | undefined
        show_card_terms?: {} | undefined
        is_setup_mandate_flow?: (boolean | null) | undefined
        color_icon_card_cvc_error?: (string | null) | undefined
        show_merchant_name?: (boolean | null) | undefined
        payment_methods_separator_text?: (string | null) | undefined
        redirect_delay_seconds?: (number | null) | undefined
      }
    | undefined
  payment_link_config_id?: (string | null) | undefined
  surcharge_details?:
    | {
        surcharge_amount: bigint
        tax_amount?: {} | undefined
        surcharge_percentage?: (number | null) | undefined
      }
    | undefined
  offer_details?: { offer_quote_ids: string[] } | undefined
  payment_type?: {} | undefined
  request_incremental_authorization?: (boolean | null) | undefined
  session_expiry?: (number | null) | undefined
  frm_metadata?: ({ [x: string]: unknown } | null) | undefined
  request_external_three_ds_authentication?: (boolean | null) | undefined
  three_ds_data?:
    | {
        authentication_cryptogram?: {} | undefined
        ds_trans_id?: (string | null) | undefined
        version?: (string | null) | undefined
        eci?: (string | null) | undefined
        transaction_status: TransactionStatus
      }
    | undefined
  recurring_details?: {} | undefined
  split_payments?: {} | undefined
  request_extended_authorization?: (boolean | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  skip_external_tax_calculation?: (boolean | null) | undefined
  psd2_sca_exemption_type?: {} | undefined
  ctp_service_details?:
    | {
        merchant_transaction_id?: (string | null) | undefined
        correlation_id?: (string | null) | undefined
        x_src_flow_id?: (string | null) | undefined
        provider?: {} | undefined
        encrypted_payload?: (string | null) | undefined
      }
    | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  threeds_method_comp_ind?: {} | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  all_keys_required?: (boolean | null) | undefined
  payment_channel?: {} | undefined
  tax_status?: {} | undefined
  discount_amount?: (bigint | null) | undefined
  shipping_amount_tax?: {} | undefined
  value_added_tax_amount?: (bigint | null) | undefined
  value_added_tax_percent?: (number | null) | undefined
  duty_amount?: {} | undefined
  order_commodity_code?: (string | null) | undefined
  vat_invoice_reference_number?: (string | null) | undefined
  order_date?: (string | null) | undefined
  enable_partial_authorization?: (boolean | null) | undefined
  enable_overcapture?: (boolean | null) | undefined
  is_stored_credential?: (boolean | null) | undefined
  mit_category?: {} | undefined
  billing_descriptor?:
    | {
        name?: (string | null) | undefined
        city?: (string | null) | undefined
        phone?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
        statement_descriptor_suffix?: (string | null) | undefined
        reference?: (string | null) | undefined
      }
    | undefined
  is_account_funded_transaction?: (boolean | null) | undefined
  recipient_details?:
    | {
        account?: {} | undefined
        phone_number?: (string | null) | undefined
        tax_id?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  sender_details?: {} | undefined
  tokenization?: {} | undefined
  partner_merchant_identifier_details?:
    | {
        partner_details?:
          | {
              name?: (string | null) | undefined
              version?: (string | null) | undefined
              integrator?: (string | null) | undefined
            }
          | undefined
        merchant_details?:
          | { name?: (string | null) | undefined; version?: (string | null) | undefined }
          | undefined
      }
    | undefined
  installment_options?: (InstallmentOption[] | null) | undefined
  installment_data?:
    | { number_of_installments: number; billing_frequency: BillingFrequency }
    | undefined
  profile_acquirer_id?: (string | null) | undefined
  external_surcharge_strategy?: {} | undefined
  enable_avs_check?: (boolean | null) | undefined
  enable_account_name_verification?: (boolean | null) | undefined
  settlement_conclusion_applied?: (boolean | null) | undefined
}
type PaymentsResponse = {
  payment_id: string
  merchant_id: string
  status: {}
  amount: bigint
  net_amount: bigint
  shipping_cost?: (bigint | null) | undefined
  amount_capturable: bigint
  amount_received?: (bigint | null) | undefined
  processor_merchant_id: string
  initiator?: {} | undefined
  sdk_authorization?: (string | null) | undefined
  payment_method_list?: {} | undefined
  session_tokens?: {} | undefined
  connector?: (string | null) | undefined
  state_metadata?:
    | {
        total_refunded_amount?: {} | undefined
        total_disputed_amount?: {} | undefined
        post_capture_void?:
          | {
              status: PostCaptureVoidStatus
              connector_reference_id?: (string | null) | undefined
              description?: (string | null) | undefined
              updated_at: string
            }
          | undefined
      }
    | undefined
  client_secret?: (string | null) | undefined
  created?: (string | null) | undefined
  modified_at?: (string | null) | undefined
  connector_customer_id?: (string | null) | undefined
  currency: Currency
  customer_id?: (string | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        customer_document_details?:
          | { document_type: DocumentKind; document_number: string }
          | undefined
      }
    | undefined
  description?: (string | null) | undefined
  refunds?: (RefundResponse[] | null) | undefined
  disputes?: (DisputeResponsePaymentsRetrieve[] | null) | undefined
  attempts?: (PaymentAttemptResponse[] | null) | undefined
  captures?: (CaptureResponse[] | null) | undefined
  mandate_id?: (string | null) | undefined
  mandate_data?:
    | {
        update_mandate_id?: (string | null) | undefined
        customer_acceptance?:
          | {
              acceptance_type: AcceptanceType
              accepted_at?: (string | null) | undefined
              online?: { ip_address: string; user_agent: string } | undefined
            }
          | undefined
        mandate_type?: {} | undefined
      }
    | undefined
  setup_future_usage?: {} | undefined
  off_session?: (boolean | null) | undefined
  capture_on?: (string | null) | undefined
  capture_method?: {} | undefined
  capture_method_applied?: {} | undefined
  payment_method: PaymentMethod
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_token?: (string | null) | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  order_details?: (OrderDetailsWithAmount[] | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  return_url?: (string | null) | undefined
  authentication_type?: {} | undefined
  statement_descriptor_name?: (string | null) | undefined
  statement_descriptor_suffix?: (string | null) | undefined
  next_action?: {} | undefined
  cancellation_reason?: (string | null) | undefined
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  error_details?:
    | {
        unified_details?:
          | {
              category?: {} | undefined
              message?: (string | null) | undefined
              standardised_code?: {} | undefined
              description?: (string | null) | undefined
              user_guidance_message?: (string | null) | undefined
              recommended_action?: {} | undefined
            }
          | undefined
        issuer_details?:
          | {
              code?: (string | null) | undefined
              message?: (string | null) | undefined
              network_details?:
                | {
                    name?: {} | undefined
                    advice_code?: (string | null) | undefined
                    advice_message?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        connector_details?:
          | {
              code?: (string | null) | undefined
              message?: (string | null) | undefined
              reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_experience?: {} | undefined
  payment_method_type?: {} | undefined
  connector_label?: (string | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  business_sub_label?: (string | null) | undefined
  allowed_payment_method_types?: (PaymentMethodType[] | null) | undefined
  manual_retry_allowed?: (boolean | null) | undefined
  connector_transaction_id?: (string | null) | undefined
  frm_message?:
    | {
        frm_name: string
        frm_transaction_id?: (string | null) | undefined
        frm_transaction_type?: (string | null) | undefined
        frm_status?: (string | null) | undefined
        frm_score?: (number | null) | undefined
        frm_reason?: ({ [x: string]: unknown } | null) | undefined
        frm_error?: (string | null) | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  connector_metadata?:
    | {
        apple_pay?:
          | {
              session_token_data?:
                | {
                    certificate: string
                    certificate_keys: string
                    merchant_identifier: string
                    display_name: string
                    initiative: ApplepayInitiative
                    initiative_context?: (string | null) | undefined
                    merchant_business_country?: {} | undefined
                    payment_processing_detail_input_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        airwallex?: { payload?: (string | null) | undefined } | undefined
        noon?: { order_category?: (string | null) | undefined } | undefined
        braintree?: { merchant_account_id: string; merchant_config_currency: string } | undefined
        adyen?: { testing: AdyenTestingData } | undefined
        peachpayments?:
          | { rrn?: (string | null) | undefined; card_on_file_transaction_type?: {} | undefined }
          | undefined
        santander?:
          | {
              boleto?:
                | {
                    discount_rules?:
                      | { discount_type?: {} | undefined; tiers: DiscountTier[] }
                      | undefined
                    penalties?:
                      | {
                          fixed_penalty?:
                            | {
                                value?: (string | null) | undefined
                                grace_period_days?: (number | null) | undefined
                              }
                            | undefined
                          interest?:
                            | {
                                interest_percentage?: (string | null) | undefined
                                iof_percentage?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    collection_actions?:
                      | {
                          legal_protest?:
                            | { protest_type: ProtestType; days_after_due_date: number }
                            | undefined
                          auto_write_off_days?: (number | null) | undefined
                        }
                      | undefined
                    payment_constraints?: {} | undefined
                    beneficiary?:
                      | {
                          name?: (string | null) | undefined
                          document_number?: (string | null) | undefined
                          document_type?: {} | undefined
                        }
                      | undefined
                    document_kind?: {} | undefined
                  }
                | undefined
            }
          | undefined
        paypal?: { paypal_client_metadata_id?: (string | null) | undefined } | undefined
        worldpayxml?:
          | { funding_transaction_type?: {} | undefined; payment_purpose?: {} | undefined }
          | undefined
        checkout?: { purpose_of_payment?: (string | null) | undefined } | undefined
        stripe?: { error_on_requires_action?: (boolean | null) | undefined } | undefined
      }
    | undefined
  connector_response_metadata?: {} | undefined
  feature_metadata?:
    | {
        redirect_response?:
          | {
              param?: (string | null) | undefined
              json_payload?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
        search_tags?: (string[] | null) | undefined
        apple_pay_recurring_details?:
          | {
              payment_description: string
              regular_billing: ApplePayRegularBillingDetails
              billing_agreement?: (string | null) | undefined
              management_url: string
            }
          | undefined
        pix_additional_details?: {} | undefined
        boleto_additional_details?:
          | {
              due_date?: (string | null) | undefined
              document_kind?: {} | undefined
              payment_type?: {} | undefined
              covenant_code?: (string | null) | undefined
              pix_key?: {} | undefined
              discount_rules?: { discount_type?: {} | undefined; tiers: DiscountTier[] } | undefined
              penalties?:
                | {
                    fixed_penalty?:
                      | {
                          value?: (string | null) | undefined
                          grace_period_days?: (number | null) | undefined
                        }
                      | undefined
                    interest?:
                      | {
                          interest_percentage?: (string | null) | undefined
                          iof_percentage?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              collection_actions?:
                | {
                    legal_protest?:
                      | { protest_type: ProtestType; days_after_due_date: number }
                      | undefined
                    auto_write_off_days?: (number | null) | undefined
                  }
                | undefined
              payment_constraints?: {} | undefined
              beneficiary?:
                | {
                    name?: (string | null) | undefined
                    document_number?: (string | null) | undefined
                    document_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        pix_automatico_additional_details?: {} | undefined
        finix_additional_details?: { fraud_session_id?: (string | null) | undefined } | undefined
        multi_currency_processing?:
          | {
              currency: Currency
              amount: bigint
              conversion_rate?: (number | null) | undefined
              date?: (string | null) | undefined
              processing_reference_id?: (string | null) | undefined
              user_id?: (string | null) | undefined
              conversion_provider?: (string | null) | undefined
              conversion_reason_code?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  reference_id?: (string | null) | undefined
  payment_link?:
    | { link: string; secure_link?: (string | null) | undefined; payment_link_id: string }
    | undefined
  profile_id?: (string | null) | undefined
  surcharge_details?:
    | {
        surcharge_amount: bigint
        tax_amount?: {} | undefined
        surcharge_percentage?: (number | null) | undefined
        error_details?:
          | {
              error_code?: (string | null) | undefined
              error_message?: (string | null) | undefined
              error_reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  applied_offer?:
    | {
        offer_engine_merchant_id: string
        offer_engine_txn_id: string
        offer_id: string
        offer_amount: bigint
        currency: Currency
      }
    | undefined
  attempt_count: number
  merchant_decision?: (string | null) | undefined
  merchant_connector_id?: (string | null) | undefined
  incremental_authorization_allowed?: (boolean | null) | undefined
  authorization_count?: (number | null) | undefined
  incremental_authorizations?: (IncrementalAuthorizationResponse[] | null) | undefined
  external_authentication_details?:
    | {
        authentication_flow?: {} | undefined
        electronic_commerce_indicator?: (string | null) | undefined
        status: AuthenticationStatus
        ds_transaction_id?: (string | null) | undefined
        version?: (string | null) | undefined
        error_code?: (string | null) | undefined
        error_message?: (string | null) | undefined
        challenge_cancel_code?: (string | null) | undefined
        trans_status_reason?: (string | null) | undefined
      }
    | undefined
  external_3ds_authentication_attempted?: (boolean | null) | undefined
  expires_on?: (string | null) | undefined
  fingerprint?: (string | null) | undefined
  fingerprint_type?: {} | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_channel?: {} | undefined
  payment_method_id?: (string | null) | undefined
  network_transaction_id?: (string | null) | undefined
  payment_account_reference?: (string | null) | undefined
  network_transaction_link_id?: (string | null) | undefined
  payment_method_status?: {} | undefined
  updated?: (string | null) | undefined
  split_payments?: {} | undefined
  frm_metadata?: ({ [x: string]: unknown } | null) | undefined
  extended_authorization_applied?: (boolean | null) | undefined
  extended_authorization_last_applied_at?: (string | null) | undefined
  request_extended_authorization?: (boolean | null) | undefined
  capture_before?: (string | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  order_tax_amount?: {} | undefined
  connector_mandate_id?: (string | null) | undefined
  card_discovery?: {} | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  force_3ds_challenge_trigger?: (boolean | null) | undefined
  issuer_error_code?: (string | null) | undefined
  issuer_error_message?: (string | null) | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  whole_connector_response?: (string | null) | undefined
  enable_partial_authorization?: (boolean | null) | undefined
  enable_overcapture?: (boolean | null) | undefined
  is_overcapture_enabled?: (boolean | null) | undefined
  network_details?: { network_advice_code?: (string | null) | undefined } | undefined
  is_stored_credential?: (boolean | null) | undefined
  mit_category?: {} | undefined
  billing_descriptor?:
    | {
        name?: (string | null) | undefined
        city?: (string | null) | undefined
        phone?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
        statement_descriptor_suffix?: (string | null) | undefined
        reference?: (string | null) | undefined
      }
    | undefined
  is_account_funded_transaction?: (boolean | null) | undefined
  recipient_details?:
    | {
        account?: {} | undefined
        phone_number?: (string | null) | undefined
        tax_id?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  sender_details?: {} | undefined
  tokenization?: {} | undefined
  partner_merchant_identifier_details?:
    | {
        partner_details?:
          | {
              name?: (string | null) | undefined
              version?: (string | null) | undefined
              integrator?: (string | null) | undefined
            }
          | undefined
        merchant_details?:
          | { name?: (string | null) | undefined; version?: (string | null) | undefined }
          | undefined
      }
    | undefined
  payment_method_tokenization_details?:
    | {
        payment_method_id: string
        payment_method_status?: {} | undefined
        psp_tokenization: boolean
        network_tokenization: boolean
        network_transaction_id?: (string | null) | undefined
        network_transaction_link_id?: (string | null) | undefined
        is_eligible_for_mit_payment: boolean
      }
    | undefined
  installment_options?: (InstallmentOption[] | null) | undefined
  installment_data?:
    | {
        number_of_installments: number
        billing_frequency: BillingFrequency
        installment_interest?: {} | undefined
      }
    | undefined
  sender_payment_instrument_id?: (string | null) | undefined
  enable_avs_check?: (boolean | null) | undefined
  enable_account_name_verification?: (boolean | null) | undefined
}
type PaymentsConfirmRequest = {
  amount?: (bigint | null) | undefined
  order_tax_amount?: (bigint | null) | undefined
  currency?: {} | undefined
  amount_to_capture?: (bigint | null) | undefined
  shipping_cost?: (bigint | null) | undefined
  payment_id?: (string | null) | undefined
  routing?: {} | undefined
  connector?: (Connector[] | null) | undefined
  capture_method?: {} | undefined
  authentication_type?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  confirm?: (boolean | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
  customer_id?: (string | null) | undefined
  off_session?: (boolean | null) | undefined
  description?: (string | null) | undefined
  return_url?: (string | null) | undefined
  setup_future_usage?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  payment_method?: {} | undefined
  payment_token?: (string | null) | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  statement_descriptor_name?: (string | null) | undefined
  statement_descriptor_suffix?: (string | null) | undefined
  order_details?: (OrderDetailsWithAmount[] | null) | undefined
  client_secret?: (string | null) | undefined
  mandate_data?:
    | {
        update_mandate_id?: (string | null) | undefined
        customer_acceptance?:
          | {
              acceptance_type: AcceptanceType
              accepted_at?: (string | null) | undefined
              online?: { ip_address: string; user_agent: string } | undefined
            }
          | undefined
        mandate_type?: {} | undefined
      }
    | undefined
  customer_acceptance?:
    | {
        acceptance_type: AcceptanceType
        accepted_at?: (string | null) | undefined
        online?: { ip_address: string; user_agent: string } | undefined
      }
    | undefined
  mandate_id?: (string | null) | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_experience?: {} | undefined
  payment_method_type?: {} | undefined
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
  allowed_payment_method_types?: (PaymentMethodType[] | null) | undefined
  retry_action?: {} | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  connector_metadata?:
    | {
        apple_pay?:
          | {
              session_token_data?:
                | {
                    certificate: string
                    certificate_keys: string
                    merchant_identifier: string
                    display_name: string
                    initiative: ApplepayInitiative
                    initiative_context?: (string | null) | undefined
                    merchant_business_country?: {} | undefined
                    payment_processing_detail_input_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        airwallex?: { payload?: (string | null) | undefined } | undefined
        noon?: { order_category?: (string | null) | undefined } | undefined
        braintree?: { merchant_account_id: string; merchant_config_currency: string } | undefined
        adyen?: { testing: AdyenTestingData } | undefined
        peachpayments?:
          | { rrn?: (string | null) | undefined; card_on_file_transaction_type?: {} | undefined }
          | undefined
        santander?:
          | {
              boleto?:
                | {
                    discount_rules?:
                      | { discount_type?: {} | undefined; tiers: DiscountTier[] }
                      | undefined
                    penalties?:
                      | {
                          fixed_penalty?:
                            | {
                                value?: (string | null) | undefined
                                grace_period_days?: (number | null) | undefined
                              }
                            | undefined
                          interest?:
                            | {
                                interest_percentage?: (string | null) | undefined
                                iof_percentage?: (string | null) | undefined
                              }
                            | undefined
                        }
                      | undefined
                    collection_actions?:
                      | {
                          legal_protest?:
                            | { protest_type: ProtestType; days_after_due_date: number }
                            | undefined
                          auto_write_off_days?: (number | null) | undefined
                        }
                      | undefined
                    payment_constraints?: {} | undefined
                    beneficiary?:
                      | {
                          name?: (string | null) | undefined
                          document_number?: (string | null) | undefined
                          document_type?: {} | undefined
                        }
                      | undefined
                    document_kind?: {} | undefined
                  }
                | undefined
            }
          | undefined
        paypal?: { paypal_client_metadata_id?: (string | null) | undefined } | undefined
        worldpayxml?:
          | { funding_transaction_type?: {} | undefined; payment_purpose?: {} | undefined }
          | undefined
        checkout?: { purpose_of_payment?: (string | null) | undefined } | undefined
        stripe?: { error_on_requires_action?: (boolean | null) | undefined } | undefined
      }
    | undefined
  payment_link?: (boolean | null) | undefined
  payment_link_config?:
    | {
        theme?: (string | null) | undefined
        logo?: (string | null) | undefined
        seller_name?: (string | null) | undefined
        sdk_layout?: (string | null) | undefined
        display_sdk_only?: (boolean | null) | undefined
        enabled_saved_payment_method?: (boolean | null) | undefined
        hide_card_nickname_field?: (boolean | null) | undefined
        show_card_form_by_default?: (boolean | null) | undefined
        transaction_details?: (PaymentLinkTransactionDetails[] | null) | undefined
        background_image?:
          | { url: string; position?: {} | undefined; size?: {} | undefined }
          | undefined
        details_layout?: {} | undefined
        payment_button_text?: (string | null) | undefined
        custom_message_for_card_terms?: (string | null) | undefined
        custom_message_for_payment_method_types?: {} | undefined
        payment_button_colour?: (string | null) | undefined
        skip_status_screen?: (boolean | null) | undefined
        payment_button_text_colour?: (string | null) | undefined
        background_colour?: (string | null) | undefined
        sdk_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        payment_link_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        enable_button_only_on_form_ready?: (boolean | null) | undefined
        payment_form_header_text?: (string | null) | undefined
        payment_form_label_type?: {} | undefined
        show_card_terms?: {} | undefined
        is_setup_mandate_flow?: (boolean | null) | undefined
        color_icon_card_cvc_error?: (string | null) | undefined
        show_merchant_name?: (boolean | null) | undefined
        payment_methods_separator_text?: (string | null) | undefined
        redirect_delay_seconds?: (number | null) | undefined
      }
    | undefined
  payment_link_config_id?: (string | null) | undefined
  offer_details?: { offer_quote_ids: string[] } | undefined
  payment_type?: {} | undefined
  request_incremental_authorization?: (boolean | null) | undefined
  session_expiry?: (number | null) | undefined
  frm_metadata?: ({ [x: string]: unknown } | null) | undefined
  request_external_three_ds_authentication?: (boolean | null) | undefined
  three_ds_data?:
    | {
        authentication_cryptogram?: {} | undefined
        ds_trans_id?: (string | null) | undefined
        version?: (string | null) | undefined
        eci?: (string | null) | undefined
        transaction_status: TransactionStatus
      }
    | undefined
  recurring_details?: {} | undefined
  split_payments?: {} | undefined
  request_extended_authorization?: (boolean | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  skip_external_tax_calculation?: (boolean | null) | undefined
  psd2_sca_exemption_type?: {} | undefined
  ctp_service_details?:
    | {
        merchant_transaction_id?: (string | null) | undefined
        correlation_id?: (string | null) | undefined
        x_src_flow_id?: (string | null) | undefined
        provider?: {} | undefined
        encrypted_payload?: (string | null) | undefined
      }
    | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  threeds_method_comp_ind?: {} | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  all_keys_required?: (boolean | null) | undefined
  payment_channel?: {} | undefined
  tax_status?: {} | undefined
  discount_amount?: (bigint | null) | undefined
  shipping_amount_tax?: {} | undefined
  value_added_tax_amount?: (bigint | null) | undefined
  value_added_tax_percent?: (number | null) | undefined
  duty_amount?: {} | undefined
  order_commodity_code?: (string | null) | undefined
  vat_invoice_reference_number?: (string | null) | undefined
  order_date?: (string | null) | undefined
  enable_partial_authorization?: (boolean | null) | undefined
  is_stored_credential?: (boolean | null) | undefined
  mit_category?: {} | undefined
  billing_descriptor?:
    | {
        name?: (string | null) | undefined
        city?: (string | null) | undefined
        phone?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
        statement_descriptor_suffix?: (string | null) | undefined
        reference?: (string | null) | undefined
      }
    | undefined
  tokenization?: {} | undefined
  partner_merchant_identifier_details?:
    | {
        partner_details?:
          | {
              name?: (string | null) | undefined
              version?: (string | null) | undefined
              integrator?: (string | null) | undefined
            }
          | undefined
        merchant_details?:
          | { name?: (string | null) | undefined; version?: (string | null) | undefined }
          | undefined
      }
    | undefined
  installment_options?: (InstallmentOption[] | null) | undefined
  installment_data?:
    | { number_of_installments: number; billing_frequency: BillingFrequency }
    | undefined
  profile_acquirer_id?: (string | null) | undefined
  external_surcharge_strategy?: {} | undefined
  enable_avs_check?: (boolean | null) | undefined
  enable_account_name_verification?: (boolean | null) | undefined
  settlement_conclusion_applied?: (boolean | null) | undefined
}
type PaymentsCaptureRequest = {
  merchant_id?: (string | null) | undefined
  amount_to_capture?: (bigint | null) | undefined
  refund_uncaptured_amount?: (boolean | null) | undefined
  statement_descriptor_suffix?: (string | null) | undefined
  statement_descriptor_prefix?: (string | null) | undefined
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
  all_keys_required?: (boolean | null) | undefined
  payment_method_data?: {} | undefined
  feature_metadata?:
    | { multi_currency_processing?: { amount: bigint; currency: Currency } | undefined }
    | undefined
}
type PaymentsSessionRequest = {
  payment_id: string
  client_secret?: (string | null) | undefined
  wallets: PaymentMethodType[]
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
}
type CountryAlpha2 =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'US'
type SamsungPayMerchantPaymentInformation = {
  name: string
  url?: (string | null) | undefined
  country_code: CountryAlpha2
}
type SamsungPayAmountFormat = 'FORMAT_TOTAL_PRICE_ONLY' | 'FORMAT_TOTAL_ESTIMATED_AMOUNT'
type SamsungPayAmountDetails = {
  option: SamsungPayAmountFormat
  currency_code: Currency
  total: string
}
type SamsungPayProtocolType = 'PROTOCOL3DS'
type NextActionCall =
  | 'post_session_tokens'
  | 'confirm'
  | 'sync'
  | 'complete_authorize'
  | 'await_merchant_callback'
  | { deny: { message: string; code?: {} | undefined } }
  | 'eligibility_check'
type SdkNextAction = {
  next_action: NextActionCall
  should_block_confirm?: (boolean | null) | undefined
}
type PaypalFlow = 'checkout'
type AmountInfo = { label: string; type?: (string | null) | undefined; amount: string }
type ApplePayPaymentTiming = 'immediate' | 'recurring'
type ApplePayRegularBillingRequest = {
  amount: string
  label: string
  payment_timing: ApplePayPaymentTiming
  recurring_payment_start_date?: (string | null) | undefined
  recurring_payment_end_date?: (string | null) | undefined
  recurring_payment_interval_unit?: {} | undefined
  recurring_payment_interval_count?: (number | null) | undefined
}
type CardNetwork =
  | 'Visa'
  | 'Mastercard'
  | 'AmericanExpress'
  | 'JCB'
  | 'DinersClub'
  | 'Discover'
  | 'CartesBancaires'
  | 'UnionPay'
  | 'Interac'
  | 'RuPay'
  | 'Maestro'
  | 'Star'
  | 'Pulse'
  | 'Accel'
  | 'Nyce'
  | 'Prop'
  | 'PrivateLabel'
  | 'Dinacard'
  | 'AirPlus'
  | 'Aurore'
  | 'EftposAustralia'
  | 'GeCapital'
  | 'Uatp'
type AmazonPayPaymentIntent = 'Confirm' | 'Authorize' | 'AuthorizeWithCapture'
type AmazonPayDeliveryPrice = { amount: MinorUnit; currency_code: Currency }
type AmazonPayShippingMethod = { shipping_method_name: string; shipping_method_code: string }
type AmazonPayDeliveryOptions = {
  id: string
  price: AmazonPayDeliveryPrice
  shipping_method: AmazonPayShippingMethod
  is_default: boolean
}
type SessionToken =
  | { wallet_name: 'google_pay' }
  | {
      version: string
      service_id: string
      order_number: string
      merchant: SamsungPayMerchantPaymentInformation
      amount: SamsungPayAmountDetails
      protocol: SamsungPayProtocolType
      allowed_brands: string[]
      billing_address_required: boolean
      shipping_address_required: boolean
      wallet_name: 'samsung_pay'
    }
  | { session_token: string; session_id: string; wallet_name: 'klarna' }
  | {
      connector: string
      session_token: string
      sdk_next_action: SdkNextAction
      client_token?: (string | null) | undefined
      transaction_info?:
        | { flow: PaypalFlow; currency_code: Currency; total_price: string }
        | undefined
      data_user_id_token?: (string | null) | undefined
      currency?: {} | undefined
      intent?: {} | undefined
      wallet_name: 'paypal'
    }
  | {
      session_token_data?: {} | undefined
      payment_request_data?:
        | {
            country_code: CountryAlpha2
            currency_code: Currency
            total: AmountInfo
            merchant_capabilities?: (string[] | null) | undefined
            supported_networks?: (string[] | null) | undefined
            merchant_identifier?: (string | null) | undefined
            required_billing_contact_fields?: {} | undefined
            required_shipping_contact_fields?: {} | undefined
            recurring_payment_request?:
              | {
                  payment_description: string
                  regular_billing: ApplePayRegularBillingRequest
                  billing_agreement?: (string | null) | undefined
                  management_u_r_l: string
                }
              | undefined
          }
        | undefined
      connector: string
      delayed_session_token: boolean
      sdk_next_action: SdkNextAction
      connector_reference_id?: (string | null) | undefined
      connector_sdk_public_key?: (string | null) | undefined
      connector_merchant_id?: (string | null) | undefined
      wallet_name: 'apple_pay'
    }
  | { open_banking_session_token: string; wallet_name: 'open_banking' }
  | {
      client_id: string
      client_name: string
      client_profile_id: string
      transaction_currency_code: Currency
      transaction_amount: string
      email_address?: (string | null) | undefined
      wallet_name: 'paze'
    }
  | {
      dpa_id: string
      dpa_name: string
      locale: string
      card_brands: CardNetwork[]
      acquirer_bin: string
      acquirer_merchant_id: string
      merchant_category_code?: (string | null) | undefined
      merchant_country_code: string
      transaction_amount: string
      transaction_currency_code: Currency
      phone_number?: (string | null) | undefined
      email?: (string | null) | undefined
      phone_country_code?: (string | null) | undefined
      provider?: {} | undefined
      dpa_client_id?: (string | null) | undefined
      wallet_name: 'click_to_pay'
    }
  | {
      merchant_id: string
      ledger_currency: Currency
      store_id: string
      payment_intent: AmazonPayPaymentIntent
      total_shipping_amount: string
      total_tax_amount: string
      total_base_amount: string
      delivery_options: AmazonPayDeliveryOptions[]
      wallet_name: 'amazon_pay'
    }
  | { wallet_name: 'no_session_token_received' }
type PaymentsSessionResponse = {
  payment_id: string
  client_secret: string
  session_token: SessionToken[]
  vault_details?: {} | undefined
}
type PaymentsCancelRequest = {
  cancellation_reason?: (string | null) | undefined
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
  all_keys_required?: (boolean | null) | undefined
  payment_method_data?: {} | undefined
}
type PaymentsCancelPostCaptureRequest = {
  cancellation_reason?: (string | null) | undefined
  payment_method_data?: {} | undefined
}
type PaymentListResponse = { size: number; data: PaymentsResponse[] }
type PaymentsIncrementalAuthorizationRequest = {
  amount: bigint
  reason?: (string | null) | undefined
  payment_method_data?: {} | undefined
}
type PaymentLinkStatus = 'active' | 'expired'
type RetrievePaymentLinkResponse = {
  payment_link_id: string
  payment_id: string
  merchant_id: string
  processor_merchant_id?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  link_to_pay: string
  amount: bigint
  created_at: string
  expiry?: (string | null) | undefined
  description?: (string | null) | undefined
  status: PaymentLinkStatus
  currency?: {} | undefined
  secure_link?: (string | null) | undefined
}
type CommonUtilsTypesListPageSize = number
type CommonUtilsTypesListPageOffset = number
type PaymentLinkListConstraints = {
  start_time: string
  end_time?: (string | null) | undefined
  limit?: CommonUtilsTypesListPageSize | undefined
  offset?: CommonUtilsTypesListPageOffset | undefined
}
type PaymentLinkListResponse = {
  size: number
  total_count: bigint
  data: RetrievePaymentLinkResponse[]
}
type DeviceChannel = 'APP' | 'BRW'
type ThreeDsCompletionIndicator = 'Y' | 'N' | 'U'
type PaymentsExternalAuthenticationRequest = {
  client_secret?: (string | null) | undefined
  sdk_information?:
    | {
        sdk_app_id: string
        sdk_enc_data: string
        sdk_ephem_pub_key: { [x: string]: string }
        sdk_trans_id: string
        sdk_reference_number: string
        sdk_max_timeout: number
        sdk_type?: {} | undefined
        device_details?:
          | {
              device_type?: (string | null) | undefined
              device_brand?: (string | null) | undefined
              device_os?: (string | null) | undefined
              device_display?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  device_channel: DeviceChannel
  threeds_method_comp_ind: ThreeDsCompletionIndicator
}
type PaymentsExternalAuthenticationResponse = {
  trans_status: TransactionStatus
  acs_url?: (string | null) | undefined
  challenge_request?: (string | null) | undefined
  challenge_request_key?: (string | null) | undefined
  acs_reference_number?: (string | null) | undefined
  acs_trans_id?: (string | null) | undefined
  three_dsserver_trans_id?: (string | null) | undefined
  acs_signed_content?: (string | null) | undefined
  three_ds_requestor_url: string
  three_ds_requestor_app_url?: (string | null) | undefined
  error_message?: (string | null) | undefined
}
type PaymentsCompleteAuthorizeRequest = {
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  client_secret?: (string | null) | undefined
  threeds_method_comp_ind?: {} | undefined
}
type PaymentsPostSessionTokensRequest = {
  client_secret?: (string | null) | undefined
  payment_method_type: PaymentMethodType
  payment_method: PaymentMethod
}
type PaymentsPostSessionTokensResponse = {
  payment_id: string
  next_action?: {} | undefined
  status: {}
}
type PaymentsUpdateMetadataRequest = {
  metadata: { [x: string]: unknown }
  feature_metadata?:
    | {
        redirect_response?:
          | {
              param?: (string | null) | undefined
              json_payload?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
        search_tags?: (string[] | null) | undefined
        apple_pay_recurring_details?:
          | {
              payment_description: string
              regular_billing: ApplePayRegularBillingDetails
              billing_agreement?: (string | null) | undefined
              management_url: string
            }
          | undefined
        pix_additional_details?: {} | undefined
        boleto_additional_details?:
          | {
              due_date?: (string | null) | undefined
              document_kind?: {} | undefined
              payment_type?: {} | undefined
              covenant_code?: (string | null) | undefined
              pix_key?: {} | undefined
              discount_rules?: { discount_type?: {} | undefined; tiers: DiscountTier[] } | undefined
              penalties?:
                | {
                    fixed_penalty?:
                      | {
                          value?: (string | null) | undefined
                          grace_period_days?: (number | null) | undefined
                        }
                      | undefined
                    interest?:
                      | {
                          interest_percentage?: (string | null) | undefined
                          iof_percentage?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              collection_actions?:
                | {
                    legal_protest?:
                      | { protest_type: ProtestType; days_after_due_date: number }
                      | undefined
                    auto_write_off_days?: (number | null) | undefined
                  }
                | undefined
              payment_constraints?: {} | undefined
              beneficiary?:
                | {
                    name?: (string | null) | undefined
                    document_number?: (string | null) | undefined
                    document_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        pix_automatico_additional_details?: {} | undefined
        finix_additional_details?: { fraud_session_id?: (string | null) | undefined } | undefined
        multi_currency_processing?:
          | {
              currency: Currency
              amount: bigint
              conversion_rate?: (number | null) | undefined
              date?: (string | null) | undefined
              processing_reference_id?: (string | null) | undefined
              user_id?: (string | null) | undefined
              conversion_provider?: (string | null) | undefined
              conversion_reason_code?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
}
type PaymentsUpdateMetadataResponse = {
  payment_id: string
  metadata?: ({ [x: string]: unknown } | null) | undefined
  status?: {} | undefined
  feature_metadata?:
    | {
        redirect_response?:
          | {
              param?: (string | null) | undefined
              json_payload?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
        search_tags?: (string[] | null) | undefined
        apple_pay_recurring_details?:
          | {
              payment_description: string
              regular_billing: ApplePayRegularBillingDetails
              billing_agreement?: (string | null) | undefined
              management_url: string
            }
          | undefined
        pix_additional_details?: {} | undefined
        boleto_additional_details?:
          | {
              due_date?: (string | null) | undefined
              document_kind?: {} | undefined
              payment_type?: {} | undefined
              covenant_code?: (string | null) | undefined
              pix_key?: {} | undefined
              discount_rules?: { discount_type?: {} | undefined; tiers: DiscountTier[] } | undefined
              penalties?:
                | {
                    fixed_penalty?:
                      | {
                          value?: (string | null) | undefined
                          grace_period_days?: (number | null) | undefined
                        }
                      | undefined
                    interest?:
                      | {
                          interest_percentage?: (string | null) | undefined
                          iof_percentage?: (string | null) | undefined
                        }
                      | undefined
                  }
                | undefined
              collection_actions?:
                | {
                    legal_protest?:
                      | { protest_type: ProtestType; days_after_due_date: number }
                      | undefined
                    auto_write_off_days?: (number | null) | undefined
                  }
                | undefined
              payment_constraints?: {} | undefined
              beneficiary?:
                | {
                    name?: (string | null) | undefined
                    document_number?: (string | null) | undefined
                    document_type?: {} | undefined
                  }
                | undefined
            }
          | undefined
        pix_automatico_additional_details?: {} | undefined
        finix_additional_details?: { fraud_session_id?: (string | null) | undefined } | undefined
        multi_currency_processing?:
          | {
              currency: Currency
              amount: bigint
              conversion_rate?: (number | null) | undefined
              date?: (string | null) | undefined
              processing_reference_id?: (string | null) | undefined
              user_id?: (string | null) | undefined
              conversion_provider?: (string | null) | undefined
              conversion_reason_code?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
}
type PaymentsEligibilityCheckRequest = {
  client_secret: string
  payment_method_type: PaymentMethod
  payment_method_subtype?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_token: string
}
type PaymentsEligibilityCheckResponse = { payment_id: string; sdk_next_action: SdkNextAction }
type PaymentsEligibilityRequest = {
  client_secret: string
  payment_method_type: PaymentMethod
  payment_method_subtype?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  payment_token: string
}
type SurchargePercentage = { percentage: number }
type SurchargeResponse =
  | { type: 'fixed'; value: MinorUnit }
  | { type: 'rate'; value: SurchargePercentage }
type EligibleOffer = {
  offer_quote_id: string
  offer_amount: bigint
  currency: Currency
  code: string
  title?: (string | null) | undefined
  description?: (string | null) | undefined
}
type PaymentsEligibilityResponse = {
  payment_id: string
  sdk_next_action: SdkNextAction
  surcharge_details?:
    | {
        surcharge: SurchargeResponse
        tax_on_surcharge?: { percentage: number } | undefined
        display_surcharge_amount: number
        display_tax_on_surcharge_amount: number
        display_total_surcharge_amount: number
        surcharge_percentage?: (number | null) | undefined
        error_details?:
          | {
              error_code?: (string | null) | undefined
              error_message?: (string | null) | undefined
              error_reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  amount_details?: { total_amount: bigint; net_amount: bigint; currency: Currency } | undefined
  offer_details?:
    | {
        uplifted_offer_quote_ids?: string[] | undefined
        eligible_offers?: EligibleOffer[] | undefined
      }
    | undefined
}
type RelayType = 'refund' | 'capture' | 'incremental_authorization' | 'void' | 'unreferenced_refund'
type RelayRequest = {
  connector_resource_id: string
  connector_id: string
  type: RelayType
  data?: {} | undefined
}
type RelayStatus = 'created' | 'pending' | 'success' | 'failure'
type RelayResponse = {
  id: string
  status: RelayStatus
  connector_resource_id: string
  error?: { code: string; message: string } | undefined
  connector_reference_id?: (string | null) | undefined
  connector_id: string
  profile_id: string
  type: RelayType
  data?: {} | undefined
}
type RefundRequest = {
  payment_id: string
  refund_id?: (string | null) | undefined
  merchant_id?: (string | null) | undefined
  amount?: (bigint | null) | undefined
  reason?: (string | null) | undefined
  refund_type?: {} | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  merchant_connector_details?:
    | {
        creds_identifier: string
        encoded_data?:
          | {
              connector_account_details?: ({ [x: string]: unknown } | null) | undefined
              metadata?: ({ [x: string]: unknown } | null) | undefined
            }
          | undefined
      }
    | undefined
  split_refunds?: {} | undefined
  all_keys_required?: (boolean | null) | undefined
  payment_method_data?: {} | undefined
  feature_metadata?:
    | { multi_currency_processing?: { amount: bigint; currency: Currency } | undefined }
    | undefined
}
type RefundUpdateRequest = {
  reason?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
}
type RefundListRequest = {
  start_time: string
  end_time?: (string | null) | undefined
  payment_id?: (string | null) | undefined
  refund_id?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  limit?: {} | undefined
  offset?: CommonUtilsTypesListPageOffset | undefined
  amount_filter?:
    | { start_amount?: (bigint | null) | undefined; end_amount?: (bigint | null) | undefined }
    | undefined
  connector?: (string[] | null) | undefined
  merchant_connector_id?: (string[] | null) | undefined
  currency?: (Currency[] | null) | undefined
  refund_status?: (RefundStatus[] | null) | undefined
}
type RefundListResponse = { count: number; total_count: bigint; data: RefundResponse[] }
type OrganizationCreateRequest = {
  organization_name: string
  organization_details?: ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
}
type OrganizationResponse = {
  organization_id: string
  organization_name?: (string | null) | undefined
  organization_details?: ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  modified_at: string
  created_at: string
  organization_type?: {} | undefined
}
type OrganizationUpdateRequest = {
  organization_name?: (string | null) | undefined
  organization_details?: ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  platform_merchant_id: string
}
type IntentStatus =
  | 'succeeded'
  | 'failed'
  | 'cancelled'
  | 'cancelled_post_capture'
  | 'processing'
  | 'requires_customer_action'
  | 'requires_merchant_action'
  | 'requires_payment_method'
  | 'requires_confirmation'
  | 'requires_capture'
  | 'partially_captured'
  | 'partially_captured_and_capturable'
  | 'partially_authorized_and_requires_capture'
  | 'partially_captured_and_processing'
  | 'conflicted'
  | 'expired'
  | 'review'
type PayoutStatus =
  | 'success'
  | 'failed'
  | 'cancelled'
  | 'initiated'
  | 'expired'
  | 'reversed'
  | 'pending'
  | 'ineligible'
  | 'not_permitted'
  | 'requires_creation'
  | 'requires_confirmation'
  | 'requires_payout_method_data'
  | 'requires_fulfillment'
  | 'requires_vendor_account_creation'
type MandateStatus = 'active' | 'inactive' | 'pending' | 'revoked'
type InvoiceStatus =
  | 'invoice_created'
  | 'payment_pending'
  | 'payment_pending_timeout'
  | 'payment_succeeded'
  | 'payment_failed'
  | 'payment_canceled'
  | 'invoice_paid'
  | 'manual_review'
  | 'voided'
type EnabledPaymentMethod = {
  payment_method: PaymentMethod
  payment_method_types: PaymentMethodType[]
}
type MerchantAccountCreate = {
  merchant_id: string
  merchant_name?: (string | null) | undefined
  merchant_details?:
    | {
        primary_contact_person?: (string | null) | undefined
        primary_phone?: (string | null) | undefined
        primary_email?: (string | null) | undefined
        secondary_contact_person?: (string | null) | undefined
        secondary_phone?: (string | null) | undefined
        secondary_email?: (string | null) | undefined
        website?: (string | null) | undefined
        about_business?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        merchant_tax_registration_id?: (string | null) | undefined
        merchant_vat_registration_id?: (string | null) | undefined
      }
    | undefined
  return_url?: (string | null) | undefined
  webhook_details?:
    | {
        webhook_version?: (string | null) | undefined
        webhook_username?: (string | null) | undefined
        webhook_password?: (string | null) | undefined
        webhook_url?: (string | null) | undefined
        payment_created_enabled?: (boolean | null) | undefined
        payment_succeeded_enabled?: (boolean | null) | undefined
        payment_failed_enabled?: (boolean | null) | undefined
        payment_statuses_enabled: IntentStatus[]
        refund_statuses_enabled: RefundStatus[]
        payout_statuses_enabled?: (PayoutStatus[] | null) | undefined
        dispute_statuses_enabled?: (DisputeStatus[] | null) | undefined
        mandate_statuses_enabled?: (MandateStatus[] | null) | undefined
        invoice_statuses_enabled?: (InvoiceStatus[] | null) | undefined
      }
    | undefined
  payout_routing_algorithm?: {} | undefined
  sub_merchants_enabled?: (boolean | null) | undefined
  parent_merchant_id?: (string | null) | undefined
  enable_payment_response_hash?: (boolean | null) | undefined
  payment_response_hash_key?: (string | null) | undefined
  redirect_to_merchant_with_http_post?: (boolean | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  publishable_key?: (string | null) | undefined
  locker_id?: (string | null) | undefined
  primary_business_details?: { country: CountryAlpha2; business: string } | undefined
  frm_routing_algorithm?: ({ [x: string]: unknown } | null) | undefined
  organization_id?: (string | null) | undefined
  pm_collect_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        domain_name?: (string | null) | undefined
        allowed_domains: string[]
        enabled_payment_methods: EnabledPaymentMethod[]
      }
    | undefined
  product_type?: {} | undefined
  merchant_account_type?: {} | undefined
  network_tokenization_credentials?: {} | undefined
}
type PrimaryBusinessDetails = { country: CountryAlpha2; business: string }
type ReconStatus = 'not_requested' | 'requested' | 'active' | 'disabled'
type MerchantAccountType = 'standard' | 'platform' | 'connected'
type MerchantAccountResponse = {
  merchant_id: string
  merchant_name?: (string | null) | undefined
  return_url?: (string | null) | undefined
  enable_payment_response_hash: boolean
  payment_response_hash_key?: (string | null) | undefined
  redirect_to_merchant_with_http_post: boolean
  merchant_details?:
    | {
        primary_contact_person?: (string | null) | undefined
        primary_phone?: (string | null) | undefined
        primary_email?: (string | null) | undefined
        secondary_contact_person?: (string | null) | undefined
        secondary_phone?: (string | null) | undefined
        secondary_email?: (string | null) | undefined
        website?: (string | null) | undefined
        about_business?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        merchant_tax_registration_id?: (string | null) | undefined
        merchant_vat_registration_id?: (string | null) | undefined
      }
    | undefined
  webhook_details?:
    | {
        webhook_version?: (string | null) | undefined
        webhook_username?: (string | null) | undefined
        webhook_password?: (string | null) | undefined
        webhook_url?: (string | null) | undefined
        payment_created_enabled?: (boolean | null) | undefined
        payment_succeeded_enabled?: (boolean | null) | undefined
        payment_failed_enabled?: (boolean | null) | undefined
        payment_statuses_enabled: IntentStatus[]
        refund_statuses_enabled: RefundStatus[]
        payout_statuses_enabled?: (PayoutStatus[] | null) | undefined
        dispute_statuses_enabled?: (DisputeStatus[] | null) | undefined
        mandate_statuses_enabled?: (MandateStatus[] | null) | undefined
        invoice_statuses_enabled?: (InvoiceStatus[] | null) | undefined
      }
    | undefined
  payout_routing_algorithm?: {} | undefined
  sub_merchants_enabled?: (boolean | null) | undefined
  parent_merchant_id?: (string | null) | undefined
  publishable_key?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  locker_id?: (string | null) | undefined
  primary_business_details: PrimaryBusinessDetails[]
  frm_routing_algorithm?: {} | undefined
  organization_id: string
  is_recon_enabled: boolean
  default_profile?: (string | null) | undefined
  recon_status: ReconStatus
  pm_collect_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        domain_name?: (string | null) | undefined
        allowed_domains: string[]
        enabled_payment_methods: EnabledPaymentMethod[]
      }
    | undefined
  product_type?: {} | undefined
  merchant_account_type: MerchantAccountType
  network_tokenization_credentials?: {} | undefined
}
type MerchantAccountUpdate = {
  merchant_id: string
  merchant_name?: (string | null) | undefined
  merchant_details?:
    | {
        primary_contact_person?: (string | null) | undefined
        primary_phone?: (string | null) | undefined
        primary_email?: (string | null) | undefined
        secondary_contact_person?: (string | null) | undefined
        secondary_phone?: (string | null) | undefined
        secondary_email?: (string | null) | undefined
        website?: (string | null) | undefined
        about_business?: (string | null) | undefined
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        merchant_tax_registration_id?: (string | null) | undefined
        merchant_vat_registration_id?: (string | null) | undefined
      }
    | undefined
  return_url?: (string | null) | undefined
  webhook_details?:
    | {
        webhook_version?: (string | null) | undefined
        webhook_username?: (string | null) | undefined
        webhook_password?: (string | null) | undefined
        webhook_url?: (string | null) | undefined
        payment_created_enabled?: (boolean | null) | undefined
        payment_succeeded_enabled?: (boolean | null) | undefined
        payment_failed_enabled?: (boolean | null) | undefined
        payment_statuses_enabled: IntentStatus[]
        refund_statuses_enabled: RefundStatus[]
        payout_statuses_enabled?: (PayoutStatus[] | null) | undefined
        dispute_statuses_enabled?: (DisputeStatus[] | null) | undefined
        mandate_statuses_enabled?: (MandateStatus[] | null) | undefined
        invoice_statuses_enabled?: (InvoiceStatus[] | null) | undefined
      }
    | undefined
  payout_routing_algorithm?: {} | undefined
  sub_merchants_enabled?: (boolean | null) | undefined
  parent_merchant_id?: (string | null) | undefined
  enable_payment_response_hash?: (boolean | null) | undefined
  payment_response_hash_key?: (string | null) | undefined
  redirect_to_merchant_with_http_post?: (boolean | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  publishable_key?: (string | null) | undefined
  locker_id?: (string | null) | undefined
  primary_business_details?: (PrimaryBusinessDetails[] | null) | undefined
  frm_routing_algorithm?: ({ [x: string]: unknown } | null) | undefined
  default_profile?: (string | null) | undefined
  pm_collect_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        domain_name?: (string | null) | undefined
        allowed_domains: string[]
        enabled_payment_methods: EnabledPaymentMethod[]
      }
    | undefined
  network_tokenization_credentials?: {} | undefined
  offer_engine_config?: { api_key: string; merchant_id: string } | undefined
}
type MerchantAccountDeleteResponse = { merchant_id: string; deleted: boolean }
type ToggleKVRequest = { kv_enabled: boolean }
type ToggleKVResponse = { merchant_id: string; kv_enabled: boolean }
type ConnectorType =
  | 'payment_processor'
  | 'payment_vas'
  | 'fin_operations'
  | 'fiz_operations'
  | 'networks'
  | 'banking_entities'
  | 'non_banking_finance'
  | 'payout_processor'
  | 'payment_method_auth'
  | 'authentication_processor'
  | 'tax_processor'
  | 'surcharge_processor'
  | 'billing_processor'
  | 'vault_processor'
type RequestPaymentMethodTypes = {
  payment_method_type: PaymentMethodType
  payment_experience?: {} | undefined
  card_networks?: (CardNetwork[] | null) | undefined
  accepted_currencies?: {} | undefined
  accepted_countries?: {} | undefined
  minimum_amount?: {} | undefined
  maximum_amount?: {} | undefined
  recurring_enabled?: (boolean | null) | undefined
  installment_payment_enabled?: (boolean | null) | undefined
  pay_via_single_use_token?: {} | undefined
}
type PaymentMethodsEnabled = {
  payment_method: PaymentMethod
  payment_method_types?: (RequestPaymentMethodTypes[] | null) | undefined
}
type FrmPreferredFlowTypes = 'pre' | 'post'
type FrmAction = 'cancel_txn' | 'auto_refund' | 'manual_review'
type FrmPaymentMethodType = {
  payment_method_type: PaymentMethodType
  card_networks: CardNetwork
  flow: FrmPreferredFlowTypes
  action: FrmAction
}
type FrmPaymentMethod = {
  payment_method: PaymentMethod
  payment_method_types?: (FrmPaymentMethodType[] | null) | undefined
  flow?: {} | undefined
}
type FrmConfigs = { gateway: ConnectorType; payment_methods: FrmPaymentMethod[] }
type MerchantConnectorCreate = {
  connector_type: ConnectorType
  connector_name: Connector
  connector_label?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  connector_account_details?:
    | {
        connector_account_details?: ({ [x: string]: unknown } | null) | undefined
        metadata?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  payment_methods_enabled?: (PaymentMethodsEnabled[] | null) | undefined
  connector_webhook_details?: { merchant_secret: string; additional_secret: string } | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  test_mode?: (boolean | null) | undefined
  disabled?: (boolean | null) | undefined
  frm_configs?: (FrmConfigs[] | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  business_sub_label?: (string | null) | undefined
  merchant_connector_id?: (string | null) | undefined
  pm_auth_config?: ({ [x: string]: unknown } | null) | undefined
  status?: {} | undefined
  additional_merchant_data?: {} | undefined
  connector_wallets_details?:
    | {
        apple_pay_combined?: ({ [x: string]: unknown } | null) | undefined
        apple_pay?: ({ [x: string]: unknown } | null) | undefined
        amazon_pay?: ({ [x: string]: unknown } | null) | undefined
        samsung_pay?: ({ [x: string]: unknown } | null) | undefined
        paze?: ({ [x: string]: unknown } | null) | undefined
        google_pay?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
}
type ConnectorStatus = 'inactive' | 'active'
type MerchantConnectorResponse = {
  connector_type: ConnectorType
  connector_name: Connector
  connector_label?: (string | null) | undefined
  merchant_connector_id: string
  profile_id: string
  connector_account_details?:
    | {
        connector_account_details?: ({ [x: string]: unknown } | null) | undefined
        metadata?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  payment_methods_enabled?: (PaymentMethodsEnabled[] | null) | undefined
  connector_webhook_details?: { merchant_secret: string; additional_secret: string } | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  test_mode?: (boolean | null) | undefined
  disabled?: (boolean | null) | undefined
  frm_configs?: (FrmConfigs[] | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  business_sub_label?: (string | null) | undefined
  applepay_verified_domains?: (string[] | null) | undefined
  pm_auth_config?: ({ [x: string]: unknown } | null) | undefined
  status: ConnectorStatus
  additional_merchant_data?: {} | undefined
  connector_wallets_details?:
    | {
        apple_pay_combined?: ({ [x: string]: unknown } | null) | undefined
        apple_pay?: ({ [x: string]: unknown } | null) | undefined
        amazon_pay?: ({ [x: string]: unknown } | null) | undefined
        samsung_pay?: ({ [x: string]: unknown } | null) | undefined
        paze?: ({ [x: string]: unknown } | null) | undefined
        google_pay?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  webhook_setup_capabilities?:
    | {
        is_webhook_auto_configuration_supported: boolean
        requires_webhook_secret?: (boolean | null) | undefined
        config_type?: {} | undefined
      }
    | undefined
}
type MerchantConnectorListResponse = {
  connector_type: ConnectorType
  connector_name: Connector
  connector_label?: (string | null) | undefined
  merchant_connector_id: string
  profile_id: string
  payment_methods_enabled?: (PaymentMethodsEnabled[] | null) | undefined
  test_mode?: (boolean | null) | undefined
  disabled?: (boolean | null) | undefined
  frm_configs?: (FrmConfigs[] | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  business_sub_label?: (string | null) | undefined
  applepay_verified_domains?: (string[] | null) | undefined
  pm_auth_config?: ({ [x: string]: unknown } | null) | undefined
  status: ConnectorStatus
}
type MerchantConnectorUpdate = {
  connector_type: ConnectorType
  connector_label?: (string | null) | undefined
  connector_account_details?:
    | {
        connector_account_details?: ({ [x: string]: unknown } | null) | undefined
        metadata?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  payment_methods_enabled?: (PaymentMethodsEnabled[] | null) | undefined
  connector_webhook_details?: { merchant_secret: string; additional_secret: string } | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  test_mode?: (boolean | null) | undefined
  disabled?: (boolean | null) | undefined
  frm_configs?: (FrmConfigs[] | null) | undefined
  pm_auth_config?: ({ [x: string]: unknown } | null) | undefined
  status: ConnectorStatus
  additional_merchant_data?: {} | undefined
  connector_wallets_details?:
    | {
        apple_pay_combined?: ({ [x: string]: unknown } | null) | undefined
        apple_pay?: ({ [x: string]: unknown } | null) | undefined
        amazon_pay?: ({ [x: string]: unknown } | null) | undefined
        samsung_pay?: ({ [x: string]: unknown } | null) | undefined
        paze?: ({ [x: string]: unknown } | null) | undefined
        google_pay?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
}
type MerchantConnectorDeleteResponse = {
  merchant_id: string
  merchant_connector_id: string
  deleted: boolean
}
type ConnectorWebhookRegisterRequest = { scope?: {} | undefined; event_type?: {} | undefined }
type EventType =
  | 'payment_succeeded'
  | 'payment_failed'
  | 'payment_processing'
  | 'payment_cancelled'
  | 'payment_cancelled_post_capture'
  | 'payment_authorized'
  | 'payment_partially_authorized'
  | 'payment_captured'
  | 'payment_expired'
  | 'action_required'
  | 'refund_succeeded'
  | 'refund_failed'
  | 'refund_review'
  | 'dispute_opened'
  | 'dispute_expired'
  | 'dispute_accepted'
  | 'dispute_cancelled'
  | 'dispute_challenged'
  | 'dispute_won'
  | 'dispute_lost'
  | 'mandate_active'
  | 'mandate_revoked'
  | 'payout_success'
  | 'payout_failed'
  | 'payout_initiated'
  | 'payout_processing'
  | 'payout_cancelled'
  | 'payout_expired'
  | 'payout_reversed'
  | 'payout_not_permitted'
  | 'invoice_paid'
  | 'surcharge_payment_succeeded'
  | 'surcharge_refund_succeeded'
type ScopeIdentifier =
  | 'NotSpecific'
  | { PaymentMethodType: PaymentMethodType }
  | { EventType: EventType }
type WebhookRegistrationStatus = 'Success' | 'Failure'
type WebhookRegistrationResult = {
  identifier: ScopeIdentifier
  status: WebhookRegistrationStatus
  connector_webhook_id?: (string | null) | undefined
  error?: { code: string; message: string } | undefined
}
type RegisterConnectorWebhookResponse = {
  event_type?: {} | undefined
  connector_webhook_id?: (string | null) | undefined
  webhook_registration_status?: {} | undefined
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  secret_generation_status?: {} | undefined
  secret_error?:
    | { code?: (string | null) | undefined; message?: (string | null) | undefined }
    | undefined
  scope_type?: {} | undefined
  requested?: (ScopeIdentifier[] | null) | undefined
  results?: (WebhookRegistrationResult[] | null) | undefined
}
type GsmDecision = 'retry' | 'do_default'
type GsmCreateRequest = {
  connector: Connector
  flow: string
  sub_flow: string
  code: string
  message: string
  status: string
  router_error?: (string | null) | undefined
  decision: GsmDecision
  step_up_possible: boolean
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  error_category?: {} | undefined
  clear_pan_possible: boolean
  feature?: {} | undefined
  feature_data?: {} | undefined
  standardised_code?: {} | undefined
  description?: (string | null) | undefined
  user_guidance_message?: (string | null) | undefined
}
type GsmFeature = 'retry'
type RetryFeatureData = {
  step_up_possible: boolean
  clear_pan_possible: boolean
  alternate_network_possible: boolean
  decision: GsmDecision
}
type GsmFeatureData = { retry: RetryFeatureData }
type GsmResponse = {
  connector: string
  flow: string
  sub_flow: string
  code: string
  message: string
  status: string
  router_error?: (string | null) | undefined
  decision: GsmDecision
  step_up_possible: boolean
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  error_category?: {} | undefined
  clear_pan_possible: boolean
  feature: GsmFeature
  feature_data: GsmFeatureData
  standardised_code?: {} | undefined
  description?: (string | null) | undefined
  user_guidance_message?: (string | null) | undefined
}
type GsmRetrieveRequest = {
  connector: Connector
  flow: string
  sub_flow: string
  code: string
  message: string
}
type GsmUpdateRequest = {
  connector: string
  flow: string
  sub_flow: string
  code: string
  message: string
  status?: (string | null) | undefined
  router_error?: (string | null) | undefined
  decision?: {} | undefined
  step_up_possible?: (boolean | null) | undefined
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  error_category?: {} | undefined
  clear_pan_possible?: (boolean | null) | undefined
  feature?: {} | undefined
  feature_data?: {} | undefined
  standardised_code?: {} | undefined
  description?: (string | null) | undefined
  user_guidance_message?: (string | null) | undefined
}
type GsmDeleteRequest = {
  connector: string
  flow: string
  sub_flow: string
  code: string
  message: string
}
type GsmDeleteResponse = {
  gsm_rule_delete: boolean
  connector: string
  flow: string
  sub_flow: string
  code: string
}
type MandateResponse = {
  mandate_id: string
  payment_id?: (string | null) | undefined
  amount?: (bigint | null) | undefined
  currency?: {} | undefined
  profile_id?: (string | null) | undefined
  mandate_metadata?: ({ [x: string]: unknown } | null) | undefined
  status: MandateStatus
  payment_method_id: string
  payment_method: string
  payment_method_type?: (string | null) | undefined
  card?:
    | {
        last4_digits?: (string | null) | undefined
        card_exp_month?: (string | null) | undefined
        card_exp_year?: (string | null) | undefined
        card_holder_name?: (string | null) | undefined
        card_token?: (string | null) | undefined
        scheme?: (string | null) | undefined
        issuer_country?: (string | null) | undefined
        card_fingerprint?: (string | null) | undefined
        card_isin?: (string | null) | undefined
        card_issuer?: (string | null) | undefined
        card_network?: {} | undefined
        card_type?: (string | null) | undefined
        nick_name?: (string | null) | undefined
      }
    | undefined
  customer_acceptance?:
    | {
        acceptance_type: AcceptanceType
        accepted_at?: (string | null) | undefined
        online?: { ip_address: string; user_agent: string } | undefined
      }
    | undefined
}
type MandateRevokedResponse = {
  mandate_id: string
  status: MandateStatus
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
}
type CustomerRequest = {
  customer_id?: (string | null) | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  description?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  address?:
    | {
        city?: (string | null) | undefined
        country?: {} | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        line3?: (string | null) | undefined
        zip?: (string | null) | undefined
        state?: (string | null) | undefined
        first_name?: (string | null) | undefined
        last_name?: (string | null) | undefined
        origin_zip?: (string | null) | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  tax_registration_id?: (string | null) | undefined
  document_details?: { document_type: DocumentKind; document_number: string } | undefined
}
type CustomerResponse = {
  customer_id: string
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  description?: (string | null) | undefined
  address?:
    | {
        city?: (string | null) | undefined
        country?: {} | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        line3?: (string | null) | undefined
        zip?: (string | null) | undefined
        state?: (string | null) | undefined
        first_name?: (string | null) | undefined
        last_name?: (string | null) | undefined
        origin_zip?: (string | null) | undefined
      }
    | undefined
  created_at: string
  metadata?: ({ [x: string]: unknown } | null) | undefined
  default_payment_method_id?: (string | null) | undefined
  tax_registration_id?: (string | null) | undefined
  document_details?: { document_type: DocumentKind; document_number: string } | undefined
}
type CustomerUpdateRequest = {
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  description?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  address?:
    | {
        city?: (string | null) | undefined
        country?: {} | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        line3?: (string | null) | undefined
        zip?: (string | null) | undefined
        state?: (string | null) | undefined
        first_name?: (string | null) | undefined
        last_name?: (string | null) | undefined
        origin_zip?: (string | null) | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  tax_registration_id?: (string | null) | undefined
  document_details?: { document_type: DocumentKind; document_number: string } | undefined
}
type CustomerDeleteResponse = {
  customer_id: string
  customer_deleted: boolean
  address_deleted: boolean
  payment_methods_deleted: boolean
}
type PaymentMethodCreate = {
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
  payment_method_issuer?: (string | null) | undefined
  payment_method_issuer_code?: {} | undefined
  card?:
    | {
        card_number: string
        card_exp_month: string
        card_exp_year: string
        card_cvc?: (string | null) | undefined
        card_holder_name: string
        nick_name?: (string | null) | undefined
        card_issuing_country?: (string | null) | undefined
        card_issuing_country_code?: (string | null) | undefined
        card_network?: {} | undefined
        card_issuer?: (string | null) | undefined
        card_type?: (string | null) | undefined
        card_subtype?: (string | null) | undefined
        card_segment_type?: {} | undefined
        funding_source?: {} | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  customer_id?: (string | null) | undefined
  card_network?: (string | null) | undefined
  bank_transfer?: {} | undefined
  bank_transfer_data?: {} | undefined
  wallet?: {} | undefined
  client_secret?: (string | null) | undefined
  payment_method_data?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
}
type PaymentExperience =
  | 'redirect_to_url'
  | 'invoke_sdk_client'
  | 'display_qr_code'
  | 'one_click'
  | 'link_wallet'
  | 'invoke_payment_app'
  | 'display_wait_screen'
  | 'collect_otp'
type PaymentMethodResponse = {
  merchant_id: string
  customer_id?: (string | null) | undefined
  payment_method_id: string
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
  card?:
    | {
        scheme?: (string | null) | undefined
        issuer_country?: (string | null) | undefined
        issuer_country_code?: (string | null) | undefined
        last4_digits?: (string | null) | undefined
        expiry_month?: (string | null) | undefined
        expiry_year?: (string | null) | undefined
        card_token?: (string | null) | undefined
        card_holder_name?: (string | null) | undefined
        card_fingerprint?: (string | null) | undefined
        nick_name?: (string | null) | undefined
        card_network?: {} | undefined
        card_isin?: (string | null) | undefined
        card_issuer?: (string | null) | undefined
        card_type?: (string | null) | undefined
        card_subtype?: (string | null) | undefined
        card_segment_type?: {} | undefined
        funding_source?: {} | undefined
        saved_to_locker: boolean
      }
    | undefined
  recurring_enabled?: (boolean | null) | undefined
  installment_payment_enabled?: (boolean | null) | undefined
  payment_experience?: (PaymentExperience[] | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  created?: (string | null) | undefined
  bank_transfer?: {} | undefined
  last_used_at?: (string | null) | undefined
  client_secret?: (string | null) | undefined
}
type PaymentExperienceTypes = {
  payment_experience_type?: {} | undefined
  eligible_connectors: string[]
}
type CardNetworkTypes = {
  card_network?: {} | undefined
  surcharge_details?:
    | {
        surcharge: SurchargeResponse
        tax_on_surcharge?: { percentage: number } | undefined
        display_surcharge_amount: number
        display_tax_on_surcharge_amount: number
        display_total_surcharge_amount: number
        surcharge_percentage?: (number | null) | undefined
        error_details?:
          | {
              error_code?: (string | null) | undefined
              error_message?: (string | null) | undefined
              error_reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  eligible_connectors: string[]
}
type BankNames =
  | 'absa'
  | 'access_bank'
  | 'african_bank'
  | 'african_bank_business'
  | 'albaraka'
  | 'american_express'
  | 'affin_bank'
  | 'agro_bank'
  | 'alliance_bank'
  | 'am_bank'
  | 'bank_of_america'
  | 'bank_of_china'
  | 'bank_islam'
  | 'bank_muamalat'
  | 'bank_rakyat'
  | 'bank_simpanan_nasional'
  | 'bank_zero'
  | 'barclays'
  | 'bidvest_bank'
  | 'bidvest_bank_alliances'
  | 'blik_p_s_p'
  | 'capital_one'
  | 'capitec'
  | 'capitec_business'
  | 'chase'
  | 'china_construction_bank'
  | 'citi'
  | 'cimb_bank'
  | 'discover'
  | 'discovery'
  | 'enl_bank'
  | 'fbc_fidelity_bank'
  | 'finbond_epe'
  | 'finbond_mutual_bank'
  | 'first_national_bank'
  | 'gotyme_bank'
  | 'habib_overseas'
  | 'hbz_bank'
  | 'investec'
  | 'ithala'
  | 'jp_morgan_chase'
  | 'mtn_banking'
  | 'nedbank'
  | 'navy_federal_credit_union'
  | 'olympus'
  | 'old_mutual'
  | 'peoples_bank_pep_bank'
  | 'peoples_bank'
  | 'permanent_bank'
  | 'pentagon_federal_credit_union'
  | 'societe_generale'
  | 'standard_bank'
  | 'state_bank_of_india'
  | 'synchrony_bank'
  | 'ubank'
  | 'vbs_mutual_bank'
  | 'wells_fargo'
  | 'abn_amro'
  | 'asn_bank'
  | 'bunq'
  | 'handelsbanken'
  | 'hong_leong_bank'
  | 'hsbc_bank'
  | 'ing'
  | 'knab'
  | 'kuwait_finance_house'
  | 'moneyou'
  | 'rabobank'
  | 'regiobank'
  | 'revolut'
  | 'sns_bank'
  | 'triodos_bank'
  | 'van_lanschot'
  | 'arzte_und_apotheker_bank'
  | 'austrian_anadi_bank_ag'
  | 'bank_austria'
  | 'bank99_ag'
  | 'bankhaus_carl_spangler'
  | 'bankhaus_schelhammer_und_schattera_ag'
  | 'bank_millennium'
  | 'bank_p_e_k_a_o_s_a'
  | 'bawag_psk_ag'
  | 'bks_bank_ag'
  | 'brull_kallmus_bank_ag'
  | 'btv_vier_lander_bank'
  | 'capital_bank_grawe_gruppe_ag'
  | 'ceska_sporitelna'
  | 'dolomitenbank'
  | 'easybank_ag'
  | 'e_platby_v_u_b'
  | 'erste_bank_und_sparkassen'
  | 'friesland_bank'
  | 'hypo_alpeadriabank_international_ag'
  | 'hypo_noe_lb_fur_niederosterreich_u_wien'
  | 'hypo_oberosterreich_salzburg_steiermark'
  | 'hypo_tirol_bank_ag'
  | 'hypo_vorarlberg_bank_ag'
  | 'hypo_bank_burgenland_aktiengesellschaft'
  | 'komercni_banka'
  | 'm_bank'
  | 'marchfelder_bank'
  | 'maybank'
  | 'oberbank_ag'
  | 'osterreichische_arzte_und_apothekerbank'
  | 'ocbc_bank'
  | 'pay_with_i_n_g'
  | 'place_z_i_p_k_o'
  | 'platnosc_online_karta_platnicza'
  | 'posojilnica_bank_e_gen'
  | 'postova_banka'
  | 'public_bank'
  | 'raiffeisen_bankengruppe_osterreich'
  | 'rhb_bank'
  | 'schelhammer_capital_bank_ag'
  | 'standard_chartered_bank'
  | 'schoellerbank_ag'
  | 'sparda_bank_wien'
  | 'sporo_pay'
  | 'santander_przelew24'
  | 'tatra_pay'
  | 'viamo'
  | 'volksbank_gruppe'
  | 'volkskreditbank_ag'
  | 'vr_bank_braunau'
  | 'uob_bank'
  | 'pay_with_alior_bank'
  | 'banki_spoldzielcze'
  | 'pay_with_inteligo'
  | 'b_n_p_paribas_poland'
  | 'bank_nowy_s_a'
  | 'credit_agricole'
  | 'pay_with_b_o_s'
  | 'pay_with_citi_handlowy'
  | 'pay_with_plus_bank'
  | 'toyota_bank'
  | 'velo_bank'
  | 'e_transfer_pocztowy24'
  | 'plus_bank'
  | 'etransfer_pocztowy24'
  | 'banki_spbdzielcze'
  | 'bank_nowy_bfg_sa'
  | 'getin_bank'
  | 'blik'
  | 'noble_pay'
  | 'idea_bank'
  | 'envelo_bank'
  | 'nest_przelew'
  | 'mbank_mtransfer'
  | 'inteligo'
  | 'pbac_z_ipko'
  | 'bnp_paribas'
  | 'bank_pekao_sa'
  | 'volkswagen_bank'
  | 'alior_bank'
  | 'boz'
  | 'bangkok_bank'
  | 'krungsri_bank'
  | 'krung_thai_bank'
  | 'the_siam_commercial_bank'
  | 'kasikorn_bank'
  | 'open_bank_success'
  | 'open_bank_failure'
  | 'open_bank_cancelled'
  | 'aib'
  | 'bank_of_scotland'
  | 'danske_bank'
  | 'first_direct'
  | 'first_trust'
  | 'halifax'
  | 'lloyds'
  | 'monzo'
  | 'nat_west'
  | 'nationwide_bank'
  | 'royal_bank_of_scotland'
  | 'starling'
  | 'tsb_bank'
  | 'tesco_bank'
  | 'ulster_bank'
  | 'yoursafe'
  | 'n26'
  | 'nationale_nederlanden'
  | 'aib_business'
  | 'aktia'
  | 'alandsbanken'
  | 'allianz_bank_financial_advisors_spa'
  | 'allianz_banque'
  | 'allied_irish_bank'
  | 'allied_irish_bank_corporate'
  | 'alto_adige'
  | 'alto_adige_banca_suedtirol_bank'
  | 'argenta'
  | 'arkea_banque_entreprises_et_institutionnels'
  | 'arkea_banque_privee'
  | 'axa_banque'
  | 'banca360_credito_cooperativo_fvg'
  | 'banca_adria_colli_euganei'
  | 'banca_agricola_popolare_di_ragusa'
  | 'banca_alpi_marittime_cc_carru'
  | 'banca_alta_toscana'
  | 'banca_annia'
  | 'banca_centro_emilia'
  | 'banca_centro_lazio'
  | 'banca_centro_toscana_umbria'
  | 'banca_centropadana'
  | 'banca_cesare_ponti'
  | 'banca_del_catanzarese'
  | 'banca_del_cilento_di_sassano_e_v'
  | 'banca_del_piceno'
  | 'banca_del_piemonte'
  | 'banca_del_territorio_lombardo'
  | 'banca_del_veneto_centrale'
  | 'banca_della_marca_credcooperativo'
  | 'banca_delle_terre_venete'
  | 'banca_di_alba_credito_cooperativo'
  | 'banca_di_anghiari_e_stia_cc'
  | 'banca_di_bologna'
  | 'banca_di_caraglio'
  | 'banca_di_credito_popolare_scpa'
  | 'banca_di_imola_spa'
  | 'banca_di_pesaro'
  | 'banca_di_pescia_e_cascina'
  | 'banca_di_piacenza_scpa'
  | 'banca_di_taranto_bcc'
  | 'banca_di_udine_credito_coop'
  | 'banca_don_rizzo'
  | 'banca_fideuram'
  | 'banca_finnat_euramerica_spa'
  | 'banca_generali_spa'
  | 'banca_lazio_nord'
  | 'banca_malatestiana'
  | 'banca_monte_dei_paschi_di_siena'
  | 'banca_passadore'
  | 'banca_patavina'
  | 'banca_patrimoni_sella'
  | 'banca_per_il_trentinoaltoadige'
  | 'banca_popolare_del_lazio_scpa'
  | 'banca_popolare_dell_alto_adige'
  | 'banca_popolare_di_sondrio'
  | 'banca_popolare_pugliese'
  | 'banca_popolare_valconca_scpa'
  | 'banca_san_francesco_credito_coop'
  | 'banca_sella'
  | 'banca_sistema_spa'
  | 'banca_sviluppo_cooperaz_credito'
  | 'banca_tema'
  | 'banca_terre_etrusche_e_di_maremma'
  | 'banca_territori_del_monviso'
  | 'banca_valsabbina'
  | 'banca_veronese_cc_di_concamarise'
  | 'banco_azzoaglio'
  | 'banco_bpm_spa_servizio_webank'
  | 'banco_bpm_spa_servizio_youweb'
  | 'banco_bpm_spa_youbusiness_web'
  | 'banco_bpm_we_bank'
  | 'banco_bpm_you_web'
  | 'banco_de_sabadell'
  | 'banco_desio_brianza'
  | 'banco_di_sardegna'
  | 'banco_marchigiano'
  | 'banco_posta'
  | 'banco_santander'
  | 'bank_of_ireland'
  | 'bank_of_ireland_business'
  | 'bank_of_ireland_uk'
  | 'bank_of_scotland_business'
  | 'bankinter'
  | 'banque_de_savoie'
  | 'banque_populaire'
  | 'barclaycard'
  | 'barclays_business'
  | 'bawag_psk'
  | 'bbva'
  | 'bcc_abruzzese_cappelle_sul_tavo'
  | 'bcc_abruzzi_e_molise'
  | 'bcc_adriatico_teramano'
  | 'bcc_agro_bresciano'
  | 'bcc_agro_pontino'
  | 'bcc_alberobello_sammichele_monopoli'
  | 'bcc_alto_tirreno_della_calabria'
  | 'bcc_anagni'
  | 'bcc_basilicata'
  | 'bcc_bellegra'
  | 'bcc_brescia'
  | 'bcc_brianza_e_laghi'
  | 'bcc_campania_centro'
  | 'bcc_capaccio_paestum'
  | 'bcc_castelli_romani_e_tuscolo'
  | 'bcc_centro_calabria'
  | 'bcc_conversano'
  | 'bcc_degli_ulivi_terra_di_bari'
  | 'bcc_dei_castelli_e_degli_iblei'
  | 'bcc_dei_colli_albani'
  | 'bcc_del_circeo_e_privernate'
  | 'bcc_del_garda'
  | 'bcc_del_metauro'
  | 'bcc_del_velino'
  | 'bcc_dell_alta_murgia'
  | 'bcc_della_provincia_romana'
  | 'bcc_della_romagna_occidentale'
  | 'bcc_delle_madonie'
  | 'bcc_di_altofonte_e_caccamo'
  | 'bcc_di_aquara'
  | 'bcc_di_arborea'
  | 'bcc_di_bari'
  | 'bcc_di_barlassina'
  | 'bcc_di_bene_vagienna'
  | 'bcc_di_binasco'
  | 'bcc_di_buccino_e_comuni_cilentani'
  | 'bcc_di_busto_garolfo_e_buguggiate'
  | 'bcc_di_cagliari'
  | 'bcc_di_canosa_loconia'
  | 'bcc_di_caravaggio'
  | 'bcc_di_cassano_delle_murge_e_tolve'
  | 'bcc_di_cherasco'
  | 'bcc_di_filottrano'
  | 'bcc_di_flumeri'
  | 'bcc_di_gambatesa'
  | 'bcc_di_gaudiano_di_lavello'
  | 'bcc_di_leverano'
  | 'bcc_di_locorotondo'
  | 'bcc_di_montepaone'
  | 'bcc_di_napoli'
  | 'bcc_di_ostra_e_morro_d_alba'
  | 'bcc_di_ostuni'
  | 'bcc_di_pachino'
  | 'bcc_di_pergola_e_corinaldo'
  | 'bcc_di_pianfei_e_rocca_de_baldi'
  | 'bcc_di_pontassieve'
  | 'bcc_di_recanati_e_colmurano'
  | 'bcc_di_roma'
  | 'bcc_di_san_giovanni_rotondo'
  | 'bcc_di_san_marzano_di_san_giuseppe'
  | 'bcc_di_santeramo_in_colle'
  | 'bcc_di_sarsina'
  | 'bcc_di_scafati_e_cetara'
  | 'bcc_di_smarco_dei_cavoti'
  | 'bcc_di_spello_e_del_velino'
  | 'bcc_di_terra_d_otranto'
  | 'bcc_felsinea'
  | 'bcc_g_toniolo_di_san_cataldo'
  | 'bcc_gran_sasso_d_italia'
  | 'bcc_la_riscossa_di_regalbuto'
  | 'bcc_lodi'
  | 'bcc_milano'
  | 'bcc_monte_pruno'
  | 'bcc_nettuno'
  | 'bcc_oglio_e_serio'
  | 'bcc_pordenonese_e_monsile'
  | 'bcc_pratola_peligna'
  | 'bcc_prealpi_san_biagio'
  | 'bcc_ravenna_forli_imola'
  | 'bcc_san_giuseppe_di_mussomeli'
  | 'bcc_terra_di_lavoro'
  | 'bcc_triuggio_valle_del_lambro'
  | 'bcc_valdarno_fiorentino'
  | 'bcc_valdostana'
  | 'bcc_valle_del_torto'
  | 'bcc_veneta'
  | 'bcc_venezia_giulia'
  | 'bcc_versilia_lunigiana_e_garfagnana'
  | 'bcc_vicentino_pojana_maggiore'
  | 'belfius'
  | 'beobank'
  | 'bi_banca'
  | 'blu_banca_spa'
  | 'bnl'
  | 'bnp_paribas_fortis'
  | 'bourso_bank'
  | 'bozen'
  | 'bpe'
  | 'bper_banca'
  | 'bvr_banca_banche_venete_riunite'
  | 'caisse_d_epargne'
  | 'caixa'
  | 'caja_rural'
  | 'cajamar'
  | 'cassa_centrale_banca'
  | 'cassa_di_risparmio_di_bolzano'
  | 'cassa_di_risparmio_di_fermo_spa'
  | 'cassa_di_risparmio_di_savigliano'
  | 'cassa_padana'
  | 'cassa_rurale_alta_valsugana'
  | 'cassa_rurale_alto_garda_rovereto'
  | 'cassa_rurale_di_ledro'
  | 'cassa_rurale_di_treviglio'
  | 'cassa_rurale_fvg'
  | 'cassa_rurale_renon'
  | 'cassa_rurale_val_di_fiemme'
  | 'cassa_rurale_val_di_sole'
  | 'cassa_rurale_vallagarina'
  | 'cassa_rurale_valsugana_e_tesino'
  | 'castagneto_banca1910'
  | 'cbc_banque'
  | 'centromarca_banca'
  | 'chiantibanca_credito_cooperativo'
  | 'cic'
  | 'clydesdale_bank'
  | 'comdirect'
  | 'commerzbank'
  | 'cortinabanca'
  | 'coutts'
  | 'cr_val_di_non_rotaliana_e_giovo'
  | 'cra_bcc_di_cantu'
  | 'cra_di_borgo_san_giacomo'
  | 'cra_di_boves'
  | 'cra_di_paliano'
  | 'credem'
  | 'credifriuli'
  | 'credit_mutuel'
  | 'credit_mutuel_de_bretagne'
  | 'credit_mutuel_du_sud_ouest'
  | 'credito_cooperativo_agrigentino'
  | 'credito_cooperativo_mediocrati'
  | 'credito_cooperativo_romagnolo'
  | 'credito_di_romagna'
  | 'credito_lombardo_veneto'
  | 'danske_bank_business'
  | 'desio'
  | 'deutsche_bank'
  | 'dkb'
  | 'easy_bank'
  | 'ebs'
  | 'emilbanca_cc'
  | 'erste_bank'
  | 'evo_banco'
  | 'fineco'
  | 'fintro'
  | 'fortuneo'
  | 'fpb_cassa_di_fassa_primiero_belluno'
  | 'hello_bank'
  | 'hsbc'
  | 'hsbc_business'
  | 'hype'
  | 'hypo_vereinsbank'
  | 'ibercaja'
  | 'iccrea_banca_spa'
  | 'illimity'
  | 'imagin'
  | 'imprebanca_spa'
  | 'intesa_sanpaolo'
  | 'intesa_sanpaolo_inbiz'
  | 'intesa_sanpaolo_private_banking_spa'
  | 'isybank'
  | 'kbc'
  | 'kbc_brussels'
  | 'kutxabank'
  | 'la_banque_postale'
  | 'la_banque_postale_business'
  | 'la_cassa_di_ravenna_spa'
  | 'la_cassa_rurale'
  | 'laboral_kutxa'
  | 'lcl'
  | 'lis_pay_spa'
  | 'lloyds_business'
  | 'lloyds_commercial'
  | 'm_s_bank'
  | 'mbna'
  | 'mettle_bank'
  | 'monabanq'
  | 'mooney'
  | 'mps'
  | 'nat_west_bankline'
  | 'nationwide'
  | 'nordea'
  | 'oma_sp'
  | 'op'
  | 'openbank'
  | 'pop_pankki'
  | 'post_bank'
  | 'poste_pay_evolution'
  | 'primacassa_fvg'
  | 'ptsb'
  | 'raiffeisen_algund'
  | 'raiffeisen_alta_pusteria'
  | 'raiffeisen_alta_venosta'
  | 'raiffeisen_alto_adige'
  | 'raiffeisen_bassa_atesina'
  | 'raiffeisen_bassa_valle_isarco'
  | 'raiffeisen_bassa_venosta'
  | 'raiffeisen_bolzano'
  | 'raiffeisen_bozen'
  | 'raiffeisen_bruneck'
  | 'raiffeisen_brunico'
  | 'raiffeisen_campo_di_trens'
  | 'raiffeisen_cassa_centr_alto_adige'
  | 'raiffeisen_castelrottoortisei'
  | 'raiffeisen_deutschnofenaldein'
  | 'raiffeisen_dobbiaco'
  | 'raiffeisen_eisacktal'
  | 'raiffeisen_etschtal'
  | 'raiffeisen_freienfeld'
  | 'raiffeisen_funes'
  | 'raiffeisen_gadertal'
  | 'raiffeisen_groeden'
  | 'raiffeisen_hochpustertal'
  | 'raiffeisen_kastelruthstulrich'
  | 'raiffeisen_laas'
  | 'raiffeisen_laces'
  | 'raiffeisen_lagundo'
  | 'raiffeisen_lana'
  | 'raiffeisen_landesbank_suedtirol'
  | 'raiffeisen_lasa'
  | 'raiffeisen_latsch'
  | 'raiffeisen_marlengo'
  | 'raiffeisen_marling'
  | 'raiffeisen_meran'
  | 'raiffeisen_merano'
  | 'raiffeisen_monguelfocasiestesido'
  | 'raiffeisen_niederdorf'
  | 'raiffeisenbank'
  | 'royal_bank_of_scotland_bankline'
  | 's_pankki'
  | 'saastopankki'
  | 'santander'
  | 'santander_business'
  | 'santander_personal'
  | 'sparkasse'
  | 'targo_bank'
  | 'tide'
  | 'triodos'
  | 'tsb'
  | 'ulster_bankline'
  | 'unicaja'
  | 'virgin_money'
  | 'virgin_money_merged'
  | 'volksbanken_raiffeisenbanken'
  | 'wise'
  | 'yorkshire_bank'
  | 'zempler'
  | 'raiffeisen_nova_levante'
  | 'raiffeisen_nova_ponentealdino'
  | 'raiffeisen_obervinschgau'
  | 'raiffeisen_oltradige'
  | 'raiffeisen_parcines'
  | 'raiffeisen_partschins'
  | 'raiffeisen_passeier'
  | 'raiffeisen_pradtaufers'
  | 'raiffeisen_pratotubre'
  | 'raiffeisen_salorno'
  | 'raiffeisen_salurn'
  | 'raiffeisen_san_martino_in_passiria'
  | 'raiffeisen_sarntal'
  | 'raiffeisen_scena'
  | 'raiffeisen_schenna'
  | 'raiffeisen_schlanders'
  | 'raiffeisen_schlernrosengarten'
  | 'raiffeisen_silandro'
  | 'raiffeisen_suedtirol'
  | 'raiffeisen_taufererahrntal'
  | 'raiffeisen_tesimo'
  | 'raiffeisen_tirol'
  | 'raiffeisen_tirolo'
  | 'raiffeisen_tisens'
  | 'raiffeisen_toblach'
  | 'raiffeisen_turesaurina'
  | 'raiffeisen_ueberetsch'
  | 'raiffeisen_ultenstpankrazlaurein'
  | 'raiffeisen_ultimospancrlaur'
  | 'raiffeisen_untereisacktal'
  | 'raiffeisen_unterland'
  | 'raiffeisen_untervinschgau'
  | 'raiffeisen_val_badia'
  | 'raiffeisen_val_gardena'
  | 'raiffeisen_val_passiria'
  | 'raiffeisen_val_sarentino'
  | 'raiffeisen_valle_isarco'
  | 'raiffeisen_vandoies'
  | 'raiffeisen_villabassa'
  | 'raiffeisen_villnoess'
  | 'raiffeisen_vintl'
  | 'raiffeisen_welsberggsiestaisten'
  | 'raiffeisen_welschnofen'
  | 'raiffeisen_wipptal'
  | 'raiffeisenkasse_ritten'
  | 'riviera_banca'
  | 'romagna_banca'
  | 'sella'
  | 'sicilbanca'
  | 'solution_bank'
  | 'suedtiroler'
  | 'suedtiroler_sparkasse'
  | 'suedtiroler_volksbank'
  | 'unicredit'
  | 'unicredit_online_banking'
  | 'unicredit_uniweb_corporate'
  | 'valpolicella_benaco_banca'
  | 'volksbank'
  | 'volksbank_banca_popolare'
  | 'widiba'
  | 'zkb_credcoopdi_trieste_e_gorizia'
  | 'asn'
  | 'sns'
  | 'seb'
  | 'swedbank'
  | 'mock_uk_payments'
  | 'abanca'
  | 'alm_brand'
  | 'alpha_fx'
  | 'arbejdernes_landsbank'
  | 'arbuthnot_latham'
  | 'banco_popular'
  | 'bank_pocztowy'
  | 'bankia'
  | 'bn_bank'
  | 'cater_allen'
  | 'chelsea_building_society'
  | 'citadele'
  | 'coop_pank'
  | 'cooperative_bank'
  | 'cumberland'
  | 'dab_bank'
  | 'djurslands_bank'
  | 'dnb'
  | 'etne_sparebank'
  | 'fana_sparebank'
  | 'fidor_bank'
  | 'flekkefjord_sparebank'
  | 'forex_bank'
  | 'haugesund_sparebank'
  | 'hoare_and_co'
  | 'ica_banken'
  | 'jyske_bank'
  | 'kleinwort_hambros'
  | 'klp_banken'
  | 'kreditbanken'
  | 'landkreditt_bank'
  | 'lansforsakringar'
  | 'lhv_pank'
  | 'lillesands_sparebank'
  | 'luminor'
  | 'luster_sparebank'
  | 'metro_bank'
  | 'nordfyns_bank'
  | 'nordjyske_bank'
  | 'norisbank'
  | 'nykredit_bank'
  | 'obos_banken'
  | 'orange_finanse'
  | 'pareto_bank'
  | 'pko_bank_polski'
  | 'ringkjobing_landbobank'
  | 'sbanken'
  | 'siauliu_bankas'
  | 'silicon_valley_bank'
  | 'skandiabanken'
  | 'skjern_bank'
  | 'skudenes_og_aakra_sparebank'
  | 'sogne_og_greipstad_sparebank'
  | 'spar_nord_bank'
  | 'sparbanken_syd'
  | 'sparda_bank'
  | 'spare_bank1'
  | 'sparebanken_more'
  | 'sparebanken_ost'
  | 'sparebanken_sogn_og_fjordane'
  | 'sparebanken_sor'
  | 'sparebanken_vest'
  | 'sparekassen_danmark'
  | 'sparekassen_sjaelland_fyn'
  | 'spareskillingsbanken'
  | 'sydbank'
  | 'vanquis_bank'
  | 'vestjysk_bank'
  | 'voss_sparebank'
  | 'yorkshire_building_society'
  | 'spare_bank1_gudbrandsdal'
  | 'spare_bank1_hallingdal_valdres'
  | 'spare_bank1_lom_og_skjak'
  | 'spare_bank1_modum'
  | 'spare_bank1_nordmore'
  | 'spare_bank1_ringerike_hadeland'
  | 'spare_bank1_smn'
  | 'spare_bank1_sr_bank'
  | 'spare_bank1_sore_sunnmore'
  | 'spare_bank1_sorost_norge_bv'
  | 'spare_bank1_sorost_norge_telemark'
  | 'spare_bank1_ostfold_akershus'
  | 'spare_bank1_ostlandet'
  | 'citi_handlowy'
  | 'deutsche_bank_polska'
  | 'ing_bank_slaski'
  | 'ing_diba'
  | 'nordea_direct'
  | 'santander_uk'
  | 'swedbank_sparbankerna'
type BankCodeResponse = { bank_name: BankNames[]; eligible_connectors: string[] }
type FieldType =
  | 'user_card_number'
  | 'user_gift_card_number'
  | 'user_card_expiry_month'
  | 'user_card_expiry_year'
  | 'user_card_cvc'
  | 'user_gift_card_pin'
  | 'user_card_network'
  | 'user_full_name'
  | 'user_email_address'
  | 'user_phone_number'
  | 'user_phone_number_country_code'
  | { user_country: { options: string[] } }
  | { user_currency: { options: string[] } }
  | 'user_crypto_currency_network'
  | 'user_billing_name'
  | 'user_address_line1'
  | 'user_address_line2'
  | 'user_address_city'
  | 'user_address_pincode'
  | 'user_address_state'
  | { user_address_country: { options: string[] } }
  | 'user_shipping_name'
  | 'user_shipping_address_line1'
  | 'user_shipping_address_line2'
  | 'user_shipping_address_city'
  | 'user_shipping_address_pincode'
  | 'user_shipping_address_state'
  | { user_shipping_address_country: { options: string[] } }
  | { user_document_type: { options: string[] } }
  | 'user_social_security_number'
  | 'user_blik_code'
  | 'user_bank'
  | { user_bank_options: { options: string[] } }
  | 'user_bank_account_number'
  | 'user_source_bank_account_id'
  | 'user_destination_bank_account_id'
  | 'text'
  | { drop_down: { options: string[] } }
  | 'user_date_of_birth'
  | 'user_vpa_id'
  | { language_preference: { options: string[] } }
  | 'user_pix_key'
  | 'user_cpf'
  | 'user_cnpj'
  | 'user_iban'
  | 'user_bsb_number'
  | 'user_bank_sort_code'
  | 'user_bank_routing_number'
  | { user_bank_type: { options: string[] } }
  | 'user_bank_account_holder_name'
  | 'user_msisdn'
  | 'user_client_identifier'
  | 'order_details_product_name'
  | 'user_branch_code'
  | 'user_bank_identifier'
  | 'user_pix_account_number'
type RequiredFieldInfo = {
  required_field: string
  display_name: string
  field_type: FieldType
  value?: (string | null) | undefined
}
type CustomerAcceptanceSupport = 'supported' | 'partially_supported' | 'unsupported'
type ResponsePaymentMethodTypes = {
  payment_method_type: PaymentMethodType
  payment_experience?: (PaymentExperienceTypes[] | null) | undefined
  card_networks?: (CardNetworkTypes[] | null) | undefined
  bank_names?: (BankCodeResponse[] | null) | undefined
  bank_debits?: { eligible_connectors: string[] } | undefined
  bank_transfers?: { eligible_connectors: string[] } | undefined
  required_fields?: ({ [x: string]: RequiredFieldInfo } | null) | undefined
  surcharge_details?:
    | {
        surcharge: SurchargeResponse
        tax_on_surcharge?: { percentage: number } | undefined
        display_surcharge_amount: number
        display_tax_on_surcharge_amount: number
        display_total_surcharge_amount: number
        surcharge_percentage?: (number | null) | undefined
        error_details?:
          | {
              error_code?: (string | null) | undefined
              error_message?: (string | null) | undefined
              error_reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  pm_auth_connector?: (string | null) | undefined
  customer_acceptance_support: CustomerAcceptanceSupport
}
type ResponsePaymentMethodsEnabled = {
  payment_method: PaymentMethod
  payment_method_types: ResponsePaymentMethodTypes[]
}
type MandateAmountData = {
  amount: bigint
  currency: Currency
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
}
type MandateType =
  | { single_use: MandateAmountData }
  | {
      multi_use: {
        amount: bigint
        currency: Currency
        start_date?: (string | null) | undefined
        end_date?: (string | null) | undefined
        metadata?: ({ [x: string]: unknown } | null) | undefined
      }
    }
type PaymentMethodListInstallmentAmountDetails = {
  amount_per_installment: number
  total_amount: number
}
type PaymentMethodListInstallmentPlan = {
  number_of_installments: number
  billing_frequency: BillingFrequency
  interest_rate: number
  amount_details: PaymentMethodListInstallmentAmountDetails
}
type PaymentMethodListInstallmentOption = {
  payment_method: PaymentMethod
  available_plans: PaymentMethodListInstallmentPlan[]
}
type PaymentMethodListResponse = {
  redirect_url?: (string | null) | undefined
  currency: Currency
  payment_methods: ResponsePaymentMethodsEnabled[]
  mandate_payment: MandateType
  merchant_name?: (string | null) | undefined
  show_surcharge_breakup_screen: boolean
  payment_type?: {} | undefined
  request_external_three_ds_authentication: boolean
  collect_shipping_details_from_wallets?: (boolean | null) | undefined
  collect_billing_details_from_wallets?: (boolean | null) | undefined
  is_tax_calculation_enabled: boolean
  sdk_next_action: SdkNextAction
  is_guest_customer: boolean
  intent_data?:
    | {
        payment_id: string
        status: IntentStatus
        amount: MinorUnit
        currency?: {} | undefined
        client_secret?: (string | null) | undefined
        description?: (string | null) | undefined
        customer_id?: (string | null) | undefined
        return_url?: (string | null) | undefined
        setup_future_usage?: {} | undefined
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
        shipping?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
        email?: (string | null) | undefined
        metadata?: ({ [x: string]: unknown } | null) | undefined
        order_details?: ({ [x: string]: unknown }[] | null) | undefined
        created?: (string | null) | undefined
        expires_on?: (string | null) | undefined
        profile_id?: (string | null) | undefined
        merchant_order_reference_id?: (string | null) | undefined
        attempt_count: number
        installment_options?: (PaymentMethodListInstallmentOption[] | null) | undefined
        capture_method?: {} | undefined
        merchant_name?: (string | null) | undefined
        mandate_payment?:
          | {
              update_mandate_id?: (string | null) | undefined
              customer_acceptance?:
                | {
                    acceptance_type: AcceptanceType
                    accepted_at?: (string | null) | undefined
                    online?: { ip_address: string; user_agent: string } | undefined
                  }
                | undefined
              mandate_type?: {} | undefined
            }
          | undefined
        payment_type?: {} | undefined
        request_external_three_ds_authentication?: (boolean | null) | undefined
        is_tax_calculation_enabled?: (boolean | null) | undefined
        is_guest_customer?: (boolean | null) | undefined
      }
    | undefined
}
type CustomerPaymentMethod = {
  payment_token: string
  payment_method_id: string
  customer_id: string
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
  payment_method_issuer?: (string | null) | undefined
  payment_method_issuer_code?: {} | undefined
  recurring_enabled?: (boolean | null) | undefined
  installment_payment_enabled?: (boolean | null) | undefined
  payment_experience?: (PaymentExperience[] | null) | undefined
  card?:
    | {
        scheme?: (string | null) | undefined
        issuer_country?: (string | null) | undefined
        issuer_country_code?: (string | null) | undefined
        last4_digits?: (string | null) | undefined
        expiry_month?: (string | null) | undefined
        expiry_year?: (string | null) | undefined
        card_token?: (string | null) | undefined
        card_holder_name?: (string | null) | undefined
        card_fingerprint?: (string | null) | undefined
        nick_name?: (string | null) | undefined
        card_network?: {} | undefined
        card_isin?: (string | null) | undefined
        card_issuer?: (string | null) | undefined
        card_type?: (string | null) | undefined
        card_subtype?: (string | null) | undefined
        card_segment_type?: {} | undefined
        funding_source?: {} | undefined
        saved_to_locker: boolean
      }
    | undefined
  wallets?: {} | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  created?: (string | null) | undefined
  bank_transfer?: {} | undefined
  bank?:
    | {
        mask: string
        account_holder_name?: (string | null) | undefined
        bank_name?: (string | null) | undefined
      }
    | undefined
  surcharge_details?:
    | {
        surcharge: SurchargeResponse
        tax_on_surcharge?: { percentage: number } | undefined
        display_surcharge_amount: number
        display_tax_on_surcharge_amount: number
        display_total_surcharge_amount: number
        surcharge_percentage?: (number | null) | undefined
        error_details?:
          | {
              error_code?: (string | null) | undefined
              error_message?: (string | null) | undefined
              error_reason?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  requires_cvv: boolean
  last_used_at?: (string | null) | undefined
  default_payment_method_set: boolean
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
}
type CustomerPaymentMethodsListResponse = {
  customer_payment_methods: CustomerPaymentMethod[]
  is_guest_customer?: (boolean | null) | undefined
}
type ResponsePaymentMethodsEnabledForClient = {
  payment_method: PaymentMethod
  payment_method_type: PaymentMethodType
  payment_experience?: (PaymentExperience[] | null) | undefined
  collect_shipping_details_from_wallets?: (boolean | null) | undefined
  collect_billing_details_from_wallets?: (boolean | null) | undefined
  customer_acceptance_support: CustomerAcceptanceSupport
}
type CustomerPaymentMethodForClient = {
  payment_token: string
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
  default_payment_method_set: boolean
  requires_cvv: boolean
  created?: (string | null) | undefined
  last_used_at?: (string | null) | undefined
  recurring_enabled?: (boolean | null) | undefined
  payment_method_data?: {} | undefined
}
type PaymentMethodListIntentData = {
  payment_id: string
  status: IntentStatus
  amount: MinorUnit
  currency?: {} | undefined
  client_secret?: (string | null) | undefined
  description?: (string | null) | undefined
  customer_id?: (string | null) | undefined
  return_url?: (string | null) | undefined
  setup_future_usage?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  email?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  order_details?: ({ [x: string]: unknown }[] | null) | undefined
  created?: (string | null) | undefined
  expires_on?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  attempt_count: number
  installment_options?: (PaymentMethodListInstallmentOption[] | null) | undefined
  capture_method?: {} | undefined
  merchant_name?: (string | null) | undefined
  mandate_payment?:
    | {
        update_mandate_id?: (string | null) | undefined
        customer_acceptance?:
          | {
              acceptance_type: AcceptanceType
              accepted_at?: (string | null) | undefined
              online?: { ip_address: string; user_agent: string } | undefined
            }
          | undefined
        mandate_type?: {} | undefined
      }
    | undefined
  payment_type?: {} | undefined
  request_external_three_ds_authentication?: (boolean | null) | undefined
  is_tax_calculation_enabled?: (boolean | null) | undefined
  is_guest_customer?: (boolean | null) | undefined
}
type ClientPaymentMethodsListResponse = {
  payment_methods_enabled: ResponsePaymentMethodsEnabledForClient[]
  customer_payment_methods: CustomerPaymentMethodForClient[]
  sdk_next_action: SdkNextAction
  intent_data: PaymentMethodListIntentData
}
type CustomerDefaultPaymentMethodResponse = {
  default_payment_method_id?: (string | null) | undefined
  customer_id: string
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
}
type PaymentMethodDeleteResponse = { payment_method_id: string; deleted: boolean }
type PaymentMethodUpdate = {
  update_last_used_at?: (boolean | null) | undefined
  card?:
    | {
        card_exp_month: string
        card_exp_year: string
        card_holder_name: string
        nick_name?: (string | null) | undefined
        last4_digits?: (string | null) | undefined
        card_issuer?: (string | null) | undefined
        issuer_country?: (string | null) | undefined
        issuer_country_code?: (string | null) | undefined
        card_network?: (string | null) | undefined
      }
    | undefined
  wallet?:
    | {
        last4?: (string | null) | undefined
        card_network?: (string | null) | undefined
        type?: (string | null) | undefined
        card_exp_month?: (string | null) | undefined
        card_exp_year?: (string | null) | undefined
        auth_code?: (string | null) | undefined
        email?: (string | null) | undefined
        provider_details?: {} | undefined
      }
    | undefined
  client_secret?: (string | null) | undefined
}
type PaymentLinkConfigRequest = {
  theme?: (string | null) | undefined
  logo?: (string | null) | undefined
  seller_name?: (string | null) | undefined
  sdk_layout?: (string | null) | undefined
  display_sdk_only?: (boolean | null) | undefined
  enabled_saved_payment_method?: (boolean | null) | undefined
  hide_card_nickname_field?: (boolean | null) | undefined
  show_card_form_by_default?: (boolean | null) | undefined
  transaction_details?: (PaymentLinkTransactionDetails[] | null) | undefined
  background_image?: { url: string; position?: {} | undefined; size?: {} | undefined } | undefined
  details_layout?: {} | undefined
  payment_button_text?: (string | null) | undefined
  custom_message_for_card_terms?: (string | null) | undefined
  custom_message_for_payment_method_types?: {} | undefined
  payment_button_colour?: (string | null) | undefined
  skip_status_screen?: (boolean | null) | undefined
  payment_button_text_colour?: (string | null) | undefined
  background_colour?: (string | null) | undefined
  sdk_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
  payment_link_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
  enable_button_only_on_form_ready?: (boolean | null) | undefined
  payment_form_header_text?: (string | null) | undefined
  payment_form_label_type?: {} | undefined
  show_card_terms?: {} | undefined
  is_setup_mandate_flow?: (boolean | null) | undefined
  color_icon_card_cvc_error?: (string | null) | undefined
  show_merchant_name?: (boolean | null) | undefined
  payment_methods_separator_text?: (string | null) | undefined
  redirect_delay_seconds?: (number | null) | undefined
}
type AuthenticationConnectors =
  | 'threedsecureio'
  | 'netcetera'
  | 'gpayments'
  | 'ctp_mastercard'
  | 'unified_authentication_service'
  | 'juspaythreedsserver'
  | 'ctp_visa'
  | 'cardinal'
type CardTestingGuardStatus = 'enabled' | 'disabled'
type VaultTokenField = { token_type?: {} | undefined }
type CardType = 'credit' | 'debit'
type FundingSource = 'CREDIT' | 'DEBIT' | 'DEFERRED DEBIT' | 'PREPAID' | 'CHARGE CARD'
type CardSegmentType = 'business' | 'commercial' | 'consumer' | 'government'
type ProfileCreate = {
  profile_name?: (string | null) | undefined
  return_url?: (string | null) | undefined
  enable_payment_response_hash?: (boolean | null) | undefined
  payment_response_hash_key?: (string | null) | undefined
  redirect_to_merchant_with_http_post?: (boolean | null) | undefined
  webhook_details?:
    | {
        webhook_version?: (string | null) | undefined
        webhook_username?: (string | null) | undefined
        webhook_password?: (string | null) | undefined
        webhook_url?: (string | null) | undefined
        payment_created_enabled?: (boolean | null) | undefined
        payment_succeeded_enabled?: (boolean | null) | undefined
        payment_failed_enabled?: (boolean | null) | undefined
        payment_statuses_enabled: IntentStatus[]
        refund_statuses_enabled: RefundStatus[]
        payout_statuses_enabled?: (PayoutStatus[] | null) | undefined
        dispute_statuses_enabled?: (DisputeStatus[] | null) | undefined
        mandate_statuses_enabled?: (MandateStatus[] | null) | undefined
        invoice_statuses_enabled?: (InvoiceStatus[] | null) | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  routing_algorithm?: ({ [x: string]: unknown } | null) | undefined
  intent_fulfillment_time?: (number | null) | undefined
  frm_routing_algorithm?: ({ [x: string]: unknown } | null) | undefined
  payout_routing_algorithm?: {} | undefined
  applepay_verified_domains?: (string[] | null) | undefined
  session_expiry?: (number | null) | undefined
  payment_link_config?:
    | {
        theme?: (string | null) | undefined
        logo?: (string | null) | undefined
        seller_name?: (string | null) | undefined
        sdk_layout?: (string | null) | undefined
        display_sdk_only?: (boolean | null) | undefined
        enabled_saved_payment_method?: (boolean | null) | undefined
        hide_card_nickname_field?: (boolean | null) | undefined
        show_card_form_by_default?: (boolean | null) | undefined
        transaction_details?: (PaymentLinkTransactionDetails[] | null) | undefined
        background_image?:
          | { url: string; position?: {} | undefined; size?: {} | undefined }
          | undefined
        details_layout?: {} | undefined
        payment_button_text?: (string | null) | undefined
        custom_message_for_card_terms?: (string | null) | undefined
        custom_message_for_payment_method_types?: {} | undefined
        payment_button_colour?: (string | null) | undefined
        skip_status_screen?: (boolean | null) | undefined
        payment_button_text_colour?: (string | null) | undefined
        background_colour?: (string | null) | undefined
        sdk_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        payment_link_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        enable_button_only_on_form_ready?: (boolean | null) | undefined
        payment_form_header_text?: (string | null) | undefined
        payment_form_label_type?: {} | undefined
        show_card_terms?: {} | undefined
        is_setup_mandate_flow?: (boolean | null) | undefined
        color_icon_card_cvc_error?: (string | null) | undefined
        show_merchant_name?: (boolean | null) | undefined
        payment_methods_separator_text?: (string | null) | undefined
        redirect_delay_seconds?: (number | null) | undefined
        domain_name?: (string | null) | undefined
        business_specific_configs?: ({ [x: string]: PaymentLinkConfigRequest } | null) | undefined
        allowed_domains?: (string[] | null) | undefined
        branding_visibility?: (boolean | null) | undefined
      }
    | undefined
  authentication_connector_details?:
    | {
        authentication_connectors: AuthenticationConnectors[]
        three_ds_requestor_url: string
        three_ds_requestor_app_url?: (string | null) | undefined
      }
    | undefined
  use_billing_as_payment_method_billing?: (boolean | null) | undefined
  collect_shipping_details_from_wallet_connector?: (boolean | null) | undefined
  collect_billing_details_from_wallet_connector?: (boolean | null) | undefined
  always_collect_shipping_details_from_wallet_connector?: (boolean | null) | undefined
  always_collect_billing_details_from_wallet_connector?: (boolean | null) | undefined
  is_connector_agnostic_mit_enabled?: (boolean | null) | undefined
  payout_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        domain_name?: (string | null) | undefined
        allowed_domains: string[]
        form_layout?: {} | undefined
        payout_test_mode?: (boolean | null) | undefined
      }
    | undefined
  outgoing_webhook_custom_http_headers?: ({ [x: string]: unknown } | null) | undefined
  tax_connector_id?: (string | null) | undefined
  is_tax_connector_enabled?: boolean | undefined
  is_network_tokenization_enabled?: boolean | undefined
  is_auto_retries_enabled?: (boolean | null) | undefined
  max_auto_retries_enabled?: (number | null) | undefined
  always_request_extended_authorization?: (boolean | null) | undefined
  is_click_to_pay_enabled?: boolean | undefined
  authentication_product_ids?: ({ [x: string]: unknown } | null) | undefined
  card_testing_guard_config?:
    | {
        card_ip_blocking_status: CardTestingGuardStatus
        card_ip_blocking_threshold: number
        guest_user_card_blocking_status: CardTestingGuardStatus
        guest_user_card_blocking_threshold: number
        customer_id_blocking_status: CardTestingGuardStatus
        customer_id_blocking_threshold: number
        card_testing_guard_expiry: number
        guest_ip_blocking_status?: {} | undefined
        guest_ip_blocking_threshold?: (number | null) | undefined
      }
    | undefined
  is_clear_pan_retries_enabled?: (boolean | null) | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  is_debit_routing_enabled?: (boolean | null) | undefined
  merchant_business_country?: {} | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  is_pre_network_tokenization_enabled?: (boolean | null) | undefined
  merchant_category_code?: {} | undefined
  merchant_country_code?: {} | undefined
  dispute_polling_interval?: (number | null) | undefined
  is_manual_retry_enabled?: (boolean | null) | undefined
  auto_fallback_capture_method?: (boolean | null) | undefined
  always_enable_overcapture?: (boolean | null) | undefined
  is_external_vault_enabled?: {} | undefined
  external_vault_connector_details?:
    | {
        vault_connector_id?: (string | null) | undefined
        vault_sdk?: {} | undefined
        vault_token_selector?: (VaultTokenField[] | null) | undefined
      }
    | undefined
  billing_processor_id?: (string | null) | undefined
  surcharge_connector_details?: { surcharge_connector_id?: (string | null) | undefined } | undefined
  is_l2_l3_enabled?: (boolean | null) | undefined
  network_tokenization_credentials?: {} | undefined
  payment_method_blocking?:
    | {
        card?:
          | {
              issuing_country?: (CountryAlpha2[] | null) | undefined
              card_types?: (CardType[] | null) | undefined
              card_subtypes?: (string[] | null) | undefined
              issuers?: (string[] | null) | undefined
              block_if_bin_info_unavailable?: (boolean | null) | undefined
              card_networks?: (CardNetwork[] | null) | undefined
              funding_sources?: (FundingSource[] | null) | undefined
              card_segment_types?: (CardSegmentType[] | null) | undefined
              block_virtual_cards?: (boolean | null) | undefined
              block_non_reloadable_prepaid_cards?: (boolean | null) | undefined
              gambling_blocked?: (boolean | null) | undefined
            }
          | undefined
        wallet?:
          | {
              card_types?: (CardType[] | null) | undefined
              apple_pay?:
                | {
                    issuing_country?: (CountryAlpha2[] | null) | undefined
                    card_types?: (CardType[] | null) | undefined
                    card_subtypes?: (string[] | null) | undefined
                    issuers?: (string[] | null) | undefined
                    block_if_bin_info_unavailable?: (boolean | null) | undefined
                    card_networks?: (CardNetwork[] | null) | undefined
                    funding_sources?: (FundingSource[] | null) | undefined
                    card_segment_types?: (CardSegmentType[] | null) | undefined
                    block_virtual_cards?: (boolean | null) | undefined
                    block_non_reloadable_prepaid_cards?: (boolean | null) | undefined
                    gambling_blocked?: (boolean | null) | undefined
                  }
                | undefined
              google_pay?:
                | {
                    issuing_country?: (CountryAlpha2[] | null) | undefined
                    card_types?: (CardType[] | null) | undefined
                    card_subtypes?: (string[] | null) | undefined
                    issuers?: (string[] | null) | undefined
                    block_if_bin_info_unavailable?: (boolean | null) | undefined
                    card_networks?: (CardNetwork[] | null) | undefined
                    funding_sources?: (FundingSource[] | null) | undefined
                    card_segment_types?: (CardSegmentType[] | null) | undefined
                    block_virtual_cards?: (boolean | null) | undefined
                    block_non_reloadable_prepaid_cards?: (boolean | null) | undefined
                    gambling_blocked?: (boolean | null) | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type ProfileAcquirerResponse = {
  profile_acquirer_id: string
  acquirer_assigned_merchant_id?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  network?: (string | null) | undefined
  acquirer_bin?: (string | null) | undefined
  acquirer_ica?: (string | null) | undefined
  acquirer_fraud_rate?: (number | null) | undefined
  acquirer_country_code?: (string | null) | undefined
  profile_id: string
  is_default: boolean
}
type AcquirerBucketConfigResponse = {
  acquirer_assigned_merchant_id?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  network: string
  acquirer_bin?: (string | null) | undefined
  acquirer_ica?: (string | null) | undefined
  acquirer_fraud_rate?: (number | null) | undefined
  acquirer_country_code?: (string | null) | undefined
}
type ProfileResponse = {
  merchant_id: string
  profile_id: string
  profile_name: string
  return_url?: (string | null) | undefined
  enable_payment_response_hash: boolean
  payment_response_hash_key?: (string | null) | undefined
  redirect_to_merchant_with_http_post: boolean
  webhook_details?:
    | {
        webhook_version?: (string | null) | undefined
        webhook_username?: (string | null) | undefined
        webhook_password?: (string | null) | undefined
        webhook_url?: (string | null) | undefined
        payment_created_enabled?: (boolean | null) | undefined
        payment_succeeded_enabled?: (boolean | null) | undefined
        payment_failed_enabled?: (boolean | null) | undefined
        payment_statuses_enabled: IntentStatus[]
        refund_statuses_enabled: RefundStatus[]
        payout_statuses_enabled?: (PayoutStatus[] | null) | undefined
        dispute_statuses_enabled?: (DisputeStatus[] | null) | undefined
        mandate_statuses_enabled?: (MandateStatus[] | null) | undefined
        invoice_statuses_enabled?: (InvoiceStatus[] | null) | undefined
      }
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  routing_algorithm?: ({ [x: string]: unknown } | null) | undefined
  intent_fulfillment_time?: (bigint | null) | undefined
  frm_routing_algorithm?: ({ [x: string]: unknown } | null) | undefined
  payout_routing_algorithm?: {} | undefined
  applepay_verified_domains?: (string[] | null) | undefined
  session_expiry?: (bigint | null) | undefined
  payment_link_config?:
    | {
        theme?: (string | null) | undefined
        logo?: (string | null) | undefined
        seller_name?: (string | null) | undefined
        sdk_layout?: (string | null) | undefined
        display_sdk_only?: (boolean | null) | undefined
        enabled_saved_payment_method?: (boolean | null) | undefined
        hide_card_nickname_field?: (boolean | null) | undefined
        show_card_form_by_default?: (boolean | null) | undefined
        transaction_details?: (PaymentLinkTransactionDetails[] | null) | undefined
        background_image?:
          | { url: string; position?: {} | undefined; size?: {} | undefined }
          | undefined
        details_layout?: {} | undefined
        payment_button_text?: (string | null) | undefined
        custom_message_for_card_terms?: (string | null) | undefined
        custom_message_for_payment_method_types?: {} | undefined
        payment_button_colour?: (string | null) | undefined
        skip_status_screen?: (boolean | null) | undefined
        payment_button_text_colour?: (string | null) | undefined
        background_colour?: (string | null) | undefined
        sdk_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        payment_link_ui_rules?: ({ [x: string]: { [x: string]: string } } | null) | undefined
        enable_button_only_on_form_ready?: (boolean | null) | undefined
        payment_form_header_text?: (string | null) | undefined
        payment_form_label_type?: {} | undefined
        show_card_terms?: {} | undefined
        is_setup_mandate_flow?: (boolean | null) | undefined
        color_icon_card_cvc_error?: (string | null) | undefined
        show_merchant_name?: (boolean | null) | undefined
        payment_methods_separator_text?: (string | null) | undefined
        redirect_delay_seconds?: (number | null) | undefined
        domain_name?: (string | null) | undefined
        business_specific_configs?: ({ [x: string]: PaymentLinkConfigRequest } | null) | undefined
        allowed_domains?: (string[] | null) | undefined
        branding_visibility?: (boolean | null) | undefined
      }
    | undefined
  authentication_connector_details?:
    | {
        authentication_connectors: AuthenticationConnectors[]
        three_ds_requestor_url: string
        three_ds_requestor_app_url?: (string | null) | undefined
      }
    | undefined
  use_billing_as_payment_method_billing?: (boolean | null) | undefined
  extended_card_info_config?: { public_key: string; ttl_in_secs?: number | undefined } | undefined
  collect_shipping_details_from_wallet_connector?: (boolean | null) | undefined
  collect_billing_details_from_wallet_connector?: (boolean | null) | undefined
  always_collect_shipping_details_from_wallet_connector?: (boolean | null) | undefined
  always_collect_billing_details_from_wallet_connector?: (boolean | null) | undefined
  is_connector_agnostic_mit_enabled?: (boolean | null) | undefined
  payout_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        domain_name?: (string | null) | undefined
        allowed_domains: string[]
        form_layout?: {} | undefined
        payout_test_mode?: (boolean | null) | undefined
      }
    | undefined
  outgoing_webhook_custom_http_headers?: ({ [x: string]: unknown } | null) | undefined
  tax_connector_id?: (string | null) | undefined
  is_tax_connector_enabled: boolean
  is_network_tokenization_enabled: boolean
  is_auto_retries_enabled: boolean
  max_auto_retries_enabled?: (number | null) | undefined
  always_request_extended_authorization?: (boolean | null) | undefined
  is_click_to_pay_enabled: boolean
  authentication_product_ids?: ({ [x: string]: unknown } | null) | undefined
  card_testing_guard_config?:
    | {
        card_ip_blocking_status: CardTestingGuardStatus
        card_ip_blocking_threshold: number
        guest_user_card_blocking_status: CardTestingGuardStatus
        guest_user_card_blocking_threshold: number
        customer_id_blocking_status: CardTestingGuardStatus
        customer_id_blocking_threshold: number
        card_testing_guard_expiry: number
        guest_ip_blocking_status?: {} | undefined
        guest_ip_blocking_threshold?: (number | null) | undefined
      }
    | undefined
  is_clear_pan_retries_enabled: boolean
  force_3ds_challenge: boolean
  is_debit_routing_enabled?: (boolean | null) | undefined
  merchant_business_country?: {} | undefined
  is_pre_network_tokenization_enabled: boolean
  acquirer_configs?: (ProfileAcquirerResponse[] | null) | undefined
  acquirer_config_bucket?:
    | {
        default_acquirer_config?: (string | null) | undefined
        configs: { [x: string]: AcquirerBucketConfigResponse[] }
      }
    | undefined
  is_iframe_redirection_enabled?: (boolean | null) | undefined
  merchant_category_code?: {} | undefined
  merchant_country_code?: {} | undefined
  dispute_polling_interval?: (number | null) | undefined
  is_manual_retry_enabled?: (boolean | null) | undefined
  auto_fallback_capture_method?: (boolean | null) | undefined
  always_enable_overcapture?: (boolean | null) | undefined
  is_external_vault_enabled?: {} | undefined
  external_vault_connector_details?:
    | {
        vault_connector_id?: (string | null) | undefined
        vault_sdk?: {} | undefined
        vault_token_selector?: (VaultTokenField[] | null) | undefined
      }
    | undefined
  billing_processor_id?: (string | null) | undefined
  surcharge_connector_details?: { surcharge_connector_id?: (string | null) | undefined } | undefined
  is_l2_l3_enabled?: (boolean | null) | undefined
  network_tokenization_credentials?: {} | undefined
  payment_method_blocking?:
    | {
        card?:
          | {
              issuing_country?: (CountryAlpha2[] | null) | undefined
              card_types?: (CardType[] | null) | undefined
              card_subtypes?: (string[] | null) | undefined
              issuers?: (string[] | null) | undefined
              block_if_bin_info_unavailable?: (boolean | null) | undefined
              card_networks?: (CardNetwork[] | null) | undefined
              funding_sources?: (FundingSource[] | null) | undefined
              card_segment_types?: (CardSegmentType[] | null) | undefined
              block_virtual_cards?: (boolean | null) | undefined
              block_non_reloadable_prepaid_cards?: (boolean | null) | undefined
              gambling_blocked?: (boolean | null) | undefined
            }
          | undefined
        wallet?:
          | {
              card_types?: (CardType[] | null) | undefined
              apple_pay?:
                | {
                    issuing_country?: (CountryAlpha2[] | null) | undefined
                    card_types?: (CardType[] | null) | undefined
                    card_subtypes?: (string[] | null) | undefined
                    issuers?: (string[] | null) | undefined
                    block_if_bin_info_unavailable?: (boolean | null) | undefined
                    card_networks?: (CardNetwork[] | null) | undefined
                    funding_sources?: (FundingSource[] | null) | undefined
                    card_segment_types?: (CardSegmentType[] | null) | undefined
                    block_virtual_cards?: (boolean | null) | undefined
                    block_non_reloadable_prepaid_cards?: (boolean | null) | undefined
                    gambling_blocked?: (boolean | null) | undefined
                  }
                | undefined
              google_pay?:
                | {
                    issuing_country?: (CountryAlpha2[] | null) | undefined
                    card_types?: (CardType[] | null) | undefined
                    card_subtypes?: (string[] | null) | undefined
                    issuers?: (string[] | null) | undefined
                    block_if_bin_info_unavailable?: (boolean | null) | undefined
                    card_networks?: (CardNetwork[] | null) | undefined
                    funding_sources?: (FundingSource[] | null) | undefined
                    card_segment_types?: (CardSegmentType[] | null) | undefined
                    block_virtual_cards?: (boolean | null) | undefined
                    block_non_reloadable_prepaid_cards?: (boolean | null) | undefined
                    gambling_blocked?: (boolean | null) | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DisputeResponse = {
  dispute_id: string
  payment_id: string
  attempt_id: string
  amount: StringMinorUnit
  currency: Currency
  dispute_stage: DisputeStage
  dispute_status: DisputeStatus
  connector: string
  connector_status: string
  connector_dispute_id: string
  connector_reason?: (string | null) | undefined
  connector_reason_code?: (string | null) | undefined
  challenge_required_by?: (string | null) | undefined
  connector_created_at?: (string | null) | undefined
  connector_updated_at?: (string | null) | undefined
  created_at: string
  profile_id?: (string | null) | undefined
  merchant_connector_id?: (string | null) | undefined
  is_already_refunded: boolean
  additional_details?: { network_details?: {} | undefined } | undefined
}
type MerchantConnectorInfo = {
  connector_label: string
  merchant_connector_id: string
  connector_type: ConnectorType
}
type DisputeListFilters = {
  connector: { [x: string]: MerchantConnectorInfo[] }
  currency: Currency[]
  dispute_status: DisputeStatus[]
  dispute_stage: DisputeStage[]
}
type SubmitEvidenceRequest = {
  dispute_id: string
  access_activity_log?: (string | null) | undefined
  billing_address?: (string | null) | undefined
  cancellation_policy?: (string | null) | undefined
  cancellation_policy_disclosure?: (string | null) | undefined
  cancellation_rebuttal?: (string | null) | undefined
  customer_communication?: (string | null) | undefined
  customer_email_address?: (string | null) | undefined
  customer_name?: (string | null) | undefined
  customer_purchase_ip?: (string | null) | undefined
  customer_signature?: (string | null) | undefined
  product_description?: (string | null) | undefined
  receipt?: (string | null) | undefined
  refund_policy?: (string | null) | undefined
  refund_policy_disclosure?: (string | null) | undefined
  refund_refusal_explanation?: (string | null) | undefined
  service_date?: (string | null) | undefined
  service_documentation?: (string | null) | undefined
  shipping_address?: (string | null) | undefined
  shipping_carrier?: (string | null) | undefined
  shipping_date?: (string | null) | undefined
  shipping_documentation?: (string | null) | undefined
  shipping_tracking_number?: (string | null) | undefined
  invoice_showing_distinct_transactions?: (string | null) | undefined
  recurring_transaction_agreement?: (string | null) | undefined
  uncategorized_file?: (string | null) | undefined
  uncategorized_text?: (string | null) | undefined
}
type CreateFileResponse = { file_id: string }
type EvidenceType =
  | 'cancellation_policy'
  | 'customer_communication'
  | 'customer_signature'
  | 'receipt'
  | 'refund_policy'
  | 'service_documentation'
  | 'shipping_documentation'
  | 'invoice_showing_distinct_transactions'
  | 'recurring_transaction_agreement'
  | 'uncategorized_file'
type DeleteEvidenceRequest = { dispute_id: string; evidence_type: EvidenceType }
type FileMetadataResponse = {
  file_id: string
  file_name?: (string | null) | undefined
  file_size: number
  file_type: string
  available: boolean
}
type DisputeEvidenceBlock = {
  evidence_type: EvidenceType
  file_metadata_response: FileMetadataResponse
}
type DisputesAggregateResponse = { status_with_count: { [x: string]: bigint } }
type RoutingConfigRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  algorithm?: {} | undefined
  profile_id?: (string | null) | undefined
  transaction_type?: {} | undefined
}
type RoutingAlgorithmKind =
  | 'single'
  | 'priority'
  | 'volume_split'
  | 'advanced'
  | 'dynamic'
  | 'three_ds_decision_rule'
type RoutingDictionaryRecord = {
  id: string
  profile_id: string
  name: string
  kind: RoutingAlgorithmKind
  description: string
  created_at: bigint
  modified_at: bigint
  algorithm_for?: {} | undefined
  decision_engine_routing_id?: (string | null) | undefined
}
type RoutingDictionary = {
  merchant_id: string
  active_id?: (string | null) | undefined
  records: RoutingDictionaryRecord[]
}
type RoutingKind = RoutingDictionary | RoutingDictionaryRecord[]
type RoutableConnectors =
  | 'absa_sanlam'
  | 'authipay'
  | 'adyenplatform'
  | 'stripe_billing_test'
  | 'phonypay'
  | 'fauxpay'
  | 'pretendpay'
  | 'stripe_test'
  | 'adyen_test'
  | 'checkout_test'
  | 'paypal_test'
  | 'aci'
  | 'adyen'
  | 'affirm'
  | 'airwallex'
  | 'amazonpay'
  | 'archipel'
  | 'authorizedotnet'
  | 'bankofamerica'
  | 'barclaycard'
  | 'betterpayment'
  | 'billwerk'
  | 'bitpay'
  | 'bambora'
  | 'blackhawknetwork'
  | 'bamboraapac'
  | 'bluesnap'
  | 'calida'
  | 'boku'
  | 'braintree'
  | 'breadpay'
  | 'cashtocode'
  | 'celero'
  | 'chargebee'
  | 'custombilling'
  | 'checkbook'
  | 'checkout'
  | 'citigate'
  | 'coinbase'
  | 'coingate'
  | 'cryptopay'
  | 'cybersource'
  | 'cybersourcedecisionmanager'
  | 'd24'
  | 'datatrans'
  | 'deutschebank'
  | 'digitalvirgo'
  | 'dlocal'
  | 'dwolla'
  | 'ebanx'
  | 'ecommpay'
  | 'elavon'
  | 'elavon_pg'
  | 'envoy'
  | 'etisalat'
  | 'facilitapay'
  | 'finix'
  | 'fiserv'
  | 'fiservemea'
  | 'fiservcommercehub'
  | 'fiuu'
  | 'flexiti'
  | 'forte'
  | 'getnet'
  | 'gigadat'
  | 'givepayments'
  | 'globalpay'
  | 'globalpayments_heartland'
  | 'globalpayments_realex'
  | 'globepay'
  | 'gocardless'
  | 'gotyme_sanlam'
  | 'hipay'
  | 'helcim'
  | 'hyperpg'
  | 'iatapay'
  | 'ilixium'
  | 'imerchantsolutions'
  | 'inespay'
  | 'interpayments'
  | 'itaubank'
  | 'jpmorgan'
  | 'jpmorgan_orbital'
  | 'klarna'
  | 'loonio'
  | 'merchante'
  | 'mifinity'
  | 'mollie'
  | 'moneris'
  | 'multisafepay'
  | 'nexinets'
  | 'nexixpay'
  | 'nmi'
  | 'nomupay'
  | 'noon'
  | 'nordea'
  | 'novalnet'
  | 'nuvei'
  | 'opennode'
  | 'paybox'
  | 'paydotcom'
  | 'payhound'
  | 'payme'
  | 'paynearme'
  | 'payload'
  | 'payone'
  | 'paypal'
  | 'paysafe'
  | 'paystack'
  | 'paytm'
  | 'payconex'
  | 'payu'
  | 'peachpayments'
  | 'payjustnow'
  | 'payjustnowinstore'
  | 'phonepe'
  | 'placetopay'
  | 'powertranz'
  | 'prophetpay'
  | 'rapyd'
  | 'razorpay'
  | 'recurly'
  | 'redsys'
  | 'revolv3'
  | 'riskified'
  | 'saferpay'
  | 'sanlam_payshield'
  | 'santander'
  | 'shift4'
  | 'signifyd'
  | 'nsure'
  | 'silverflow'
  | 'square'
  | 'stax'
  | 'stripe'
  | 'stripebilling'
  | 'tesouro'
  | 'truelayer'
  | 'trustly'
  | 'trustpay'
  | 'trustpayments'
  | 'tokenio'
  | 'tsys'
  | 'tsys_transit'
  | 'volt'
  | 'wellsfargo'
  | 'wise'
  | 'worldline'
  | 'worldpay'
  | 'worldpaymodular'
  | 'worldpayraft'
  | 'worldpayvantiv'
  | 'worldpayxml'
  | 'xendit'
  | 'zen'
  | 'zift'
  | 'plaid'
  | 'zsl'
  | 'juspaythreedsserver'
  | 'ctp_mastercard'
  | 'ctp_visa'
  | 'netcetera'
  | 'vgs'
  | 'cardinal'
  | 'threedsecureio'
type RoutableConnectorChoice = {
  connector: RoutableConnectors
  merchant_connector_id?: (string | null) | undefined
}
type ConnectorVolumeSplit = { connector: RoutableConnectorChoice; split: number }
type ConnectorSelection =
  | { type: 'priority'; data: RoutableConnectorChoice[] }
  | { type: 'volume_split'; data: ConnectorVolumeSplit[] }
type ComparisonType =
  | 'equal'
  | 'not_equal'
  | 'less_than'
  | 'less_than_equal'
  | 'greater_than'
  | 'greater_than_equal'
type MetadataValue = { key: string; value: string }
type NumberComparison = { comparisonType: ComparisonType; number: MinorUnit }
type ValueType =
  | { type: 'number'; value: bigint }
  | { type: 'enum_variant'; value: string }
  | { type: 'metadata_variant'; value: MetadataValue }
  | { type: 'str_value'; value: string }
  | { type: 'global_ref'; value: string }
  | { type: 'number_array'; value: bigint[] }
  | { type: 'enum_variant_array'; value: string[] }
  | { type: 'number_comparison_array'; value: NumberComparison[] }
type Comparison = {
  lhs: string
  comparison: ComparisonType
  value: ValueType
  metadata: { [x: string]: { [x: string]: unknown } }
}
type IfStatement = { condition: Comparison[]; nested?: (IfStatement[] | null) | undefined }
type RuleConnectorSelection = {
  name: string
  connectorSelection: ConnectorSelection
  statements: IfStatement[]
}
type ProgramConnectorSelection = {
  defaultSelection: ConnectorSelection
  rules: RuleConnectorSelection
  metadata: { [x: string]: { [x: string]: unknown } }
}
type ThreeDSDecision =
  | 'no_three_ds'
  | 'challenge_requested'
  | 'challenge_preferred'
  | 'no_preference'
  | 'three_ds_exemption_requested_tra'
  | 'three_ds_exemption_requested_low_value'
  | 'issuer_three_ds_exemption_requested'
type ThreeDSDecisionRule = { decision: ThreeDSDecision }
type RuleThreeDsDecisionRule = {
  name: string
  connectorSelection: ThreeDSDecision
  statements: IfStatement[]
}
type ProgramThreeDsDecisionRule = {
  defaultSelection: ThreeDSDecisionRule
  rules: RuleThreeDsDecisionRule
  metadata: { [x: string]: { [x: string]: unknown } }
}
type StaticRoutingAlgorithm =
  | { type: 'single'; data: RoutableConnectorChoice }
  | { type: 'priority'; data: RoutableConnectorChoice[] }
  | { type: 'volume_split'; data: ConnectorVolumeSplit[] }
  | { type: 'advanced'; data: ProgramConnectorSelection }
  | { type: 'three_ds_decision_rule'; data: ProgramThreeDsDecisionRule }
type DynamicRoutingConfigParams =
  | 'PaymentMethod'
  | 'PaymentMethodType'
  | 'AuthenticationType'
  | 'Currency'
  | 'Country'
  | 'CardNetwork'
  | 'CardBin'
type DecisionEngineEliminationData = { threshold: number }
type EliminationRoutingConfig = {
  params?: (DynamicRoutingConfigParams[] | null) | undefined
  elimination_analyser_config?:
    | {
        bucket_size?: (bigint | null) | undefined
        bucket_leak_interval_in_secs?: (bigint | null) | undefined
      }
    | undefined
  decision_engine_configs: DecisionEngineEliminationData
}
type SuccessRateSpecificityLevel = 'merchant' | 'global'
type DecisionEngineGatewayWiseExtraScore = { gatewayName: string; gatewaySigmaFactor: number }
type DecisionEngineSRSubLevelInputConfig = {
  paymentMethodType?: (string | null) | undefined
  paymentMethod?: (string | null) | undefined
  latencyThreshold?: (number | null) | undefined
  bucketSize?: (number | null) | undefined
  hedgingPercent?: (number | null) | undefined
  lowerResetFactor?: (number | null) | undefined
  upperResetFactor?: (number | null) | undefined
  gatewayExtraScore?: (DecisionEngineGatewayWiseExtraScore[] | null) | undefined
}
type DecisionEngineSuccessRateData = {
  defaultLatencyThreshold?: (number | null) | undefined
  defaultBucketSize?: (number | null) | undefined
  defaultHedgingPercent?: (number | null) | undefined
  defaultLowerResetFactor?: (number | null) | undefined
  defaultUpperResetFactor?: (number | null) | undefined
  defaultGatewayExtraScore?: (DecisionEngineGatewayWiseExtraScore[] | null) | undefined
  subLevelInputConfig?: (DecisionEngineSRSubLevelInputConfig[] | null) | undefined
}
type SuccessBasedRoutingConfig = {
  params?: (DynamicRoutingConfigParams[] | null) | undefined
  config?:
    | {
        min_aggregates_size?: (number | null) | undefined
        default_success_rate?: (number | null) | undefined
        max_aggregates_size?: (number | null) | undefined
        current_block_threshold?:
          | {
              duration_in_mins?: (bigint | null) | undefined
              max_total_count?: (bigint | null) | undefined
            }
          | undefined
        specificity_level?: SuccessRateSpecificityLevel | undefined
        exploration_percent?: (number | null) | undefined
        shuffle_on_tie_during_exploitation?: (boolean | null) | undefined
      }
    | undefined
  decision_engine_configs: DecisionEngineSuccessRateData
}
type LabelInformation = { label: string; target_count: bigint; target_time: bigint; mca_id: string }
type ContractBasedRoutingConfig = {
  config?: { constants?: (number[] | null) | undefined; time_scale?: {} | undefined } | undefined
  label_info?: (LabelInformation[] | null) | undefined
}
type DynamicRoutingAlgorithm =
  | EliminationRoutingConfig
  | SuccessBasedRoutingConfig
  | ContractBasedRoutingConfig
type RoutingAlgorithmWrapper = StaticRoutingAlgorithm | DynamicRoutingAlgorithm
type TransactionType = 'payment' | 'payout' | 'three_ds_authentication'
type MerchantRoutingAlgorithm = {
  id: string
  profile_id: string
  name: string
  description: string
  algorithm: RoutingAlgorithmWrapper
  created_at: bigint
  modified_at: bigint
  algorithm_for: TransactionType
}
type RoutingRetrieveResponse = {
  algorithm?:
    | {
        id: string
        profile_id: string
        name: string
        description: string
        algorithm: RoutingAlgorithmWrapper
        created_at: bigint
        modified_at: bigint
        algorithm_for: TransactionType
      }
    | undefined
}
type LinkedRoutingConfigRetrieveResponse = RoutingRetrieveResponse | RoutingDictionaryRecord[]
type ProfileDefaultRoutingConfig = { profile_id: string; connectors: RoutableConnectorChoice[] }
type DynamicRoutingFeatures = 'metrics' | 'dynamic_connector_selection' | 'none'
type BrowseOffersRequest = { offer_payment_info?: { currency: Currency } | undefined }
type BrowseOffer = {
  code: string
  title?: (string | null) | undefined
  display_title?: (string | null) | undefined
  description?: (string | null) | undefined
  currency?: {} | undefined
  valid_till?: (string | null) | undefined
}
type BrowseOffersResponse = { offers: BrowseOffer[] }
type BlocklistTransactionType = 'payment' | 'payout'
type BlocklistEntryRequest = { transaction_type?: BlocklistTransactionType | undefined }
type BlocklistDataKind = 'payment_method' | 'card_bin' | 'extended_card_bin' | 'generic_card_bin'
type BlocklistResponse = {
  fingerprint_id: string
  data_kind: BlocklistDataKind
  transaction_type: BlocklistTransactionType
  created_at: string
  profile_id?: (string | null) | undefined
}
type ToggleBlocklistResponse = { blocklist_guard_status: string }
type BlocklistCountResponse = {
  data_kind: BlocklistDataKind
  total_count: number
  counts_by_length?: ({ [x: string]: number } | null) | undefined
}
type BlocklistLookupResponse = {
  data: string
  blocked: boolean
  transaction_types: BlocklistTransactionType[]
}
type BatchBlocklistJobStatus = 'initiated' | 'processing' | 'completed' | 'failed'
type BatchBlocklistUploadResponse = {
  job_id: string
  total_rows: number
  status: BatchBlocklistJobStatus
}
type BatchBlocklistJobType = 'upload' | 'export' | 'profile_clone'
type ProfileCloneTargetMetadata = {
  profile_id: string
  status: BatchBlocklistJobStatus
  processed_rows: number
  error_message?: (string | null) | undefined
}
type BatchBlocklistJobStatusResponse = {
  job_id: string
  merchant_id: string
  profile_id?: (string | null) | undefined
  job_type: BatchBlocklistJobType
  file_name?: (string | null) | undefined
  status: BatchBlocklistJobStatus
  total_rows: number
  succeeded_rows: number
  failed_rows: number
  metadata?: { targets: ProfileCloneTargetMetadata[] } | undefined
  created_at: string
  updated_at: string
  expires_at?: (string | null) | undefined
  downloadable: boolean
  error_message?: (string | null) | undefined
  download_url?: (string | null) | undefined
  download_url_expires_at?: (string | null) | undefined
}
type ListBatchBlocklistJobsResponse = {
  count: number
  total_count: number
  data: BatchBlocklistJobStatusResponse[]
}
type BlocklistExportResponse = {
  export_id: string
  status: BatchBlocklistJobStatus
  file_name: string
}
type CloneBlocklistEntriesRequest = {
  target_profile_ids: string[]
  transaction_type?: {} | undefined
}
type CloneBlocklistEntriesResponse = {
  source_profile_id: string
  job_id: string
  status: BatchBlocklistJobStatus
  target_profile_ids: string[]
}
type PayoutConnectors =
  | 'adyen'
  | 'adyenplatform'
  | 'checkout'
  | 'cybersource'
  | 'deutschebank'
  | 'ebanx'
  | 'gigadat'
  | 'gotyme_sanlam'
  | 'loonio'
  | 'mifinity'
  | 'nomupay'
  | 'nuvei'
  | 'payone'
  | 'paypal'
  | 'stripe'
  | 'truelayer'
  | 'trustly'
  | 'wise'
  | 'worldpay'
  | 'worldpayxml'
  | 'envoy'
  | 'itaubank'
  | 'santander'
type PayoutsCreateRequest = {
  merchant_order_reference_id?: (string | null) | undefined
  amount: bigint
  currency: Currency
  routing?: {} | undefined
  connector?: (PayoutConnectors[] | null) | undefined
  confirm?: (boolean | null) | undefined
  payout_type?: {} | undefined
  payout_method_data?: {} | undefined
  source_bank_data?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  auto_fulfill?: (boolean | null) | undefined
  customer_id?: (string | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
  return_url?: (string | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  description?: (string | null) | undefined
  billing_descriptor?:
    | {
        reference?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
      }
    | undefined
  entity_type?: {} | undefined
  recurring?: (boolean | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  funds_transfer_type?: {} | undefined
  purpose?: {} | undefined
  sender_details?: {} | undefined
  payout_token?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  priority?: {} | undefined
  payout_link?: (boolean | null) | undefined
  payout_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        payout_link_id?: (string | null) | undefined
        enabled_payment_methods?: (EnabledPaymentMethod[] | null) | undefined
        form_layout?: {} | undefined
        test_mode?: (boolean | null) | undefined
      }
    | undefined
  session_expiry?: (number | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  payout_method_id?: (string | null) | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
}
type PayoutEntityType =
  | 'Individual'
  | 'Company'
  | 'NonProfit'
  | 'PublicSector'
  | 'NaturalPerson'
  | 'lowercase'
  | 'Personal'
type PayoutAttemptResponse = {
  attempt_id: string
  status: PayoutStatus
  amount: bigint
  currency?: {} | undefined
  connector?: (string | null) | undefined
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  payment_method?: {} | undefined
  payout_method_type?: {} | undefined
  connector_transaction_id?: (string | null) | undefined
  cancellation_reason?: (string | null) | undefined
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
}
type PayoutCreateResponse = {
  payout_id: string
  merchant_id: string
  merchant_order_reference_id?: (string | null) | undefined
  amount: bigint
  currency: Currency
  connector?: (string | null) | undefined
  payout_type?: {} | undefined
  payout_method_data?: {} | undefined
  source_bank_data?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  auto_fulfill: boolean
  customer_id: string
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        customer_document_details?:
          | { document_type: DocumentKind; document_number: string }
          | undefined
      }
    | undefined
  client_secret: string
  return_url: string
  business_country: CountryAlpha2
  business_label?: (string | null) | undefined
  description?: (string | null) | undefined
  billing_descriptor?:
    | {
        reference?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
      }
    | undefined
  entity_type: PayoutEntityType
  recurring: boolean
  metadata?: ({ [x: string]: unknown } | null) | undefined
  funds_transfer_type?: {} | undefined
  purpose?: {} | undefined
  sender_details?: {} | undefined
  merchant_connector_id?: (string | null) | undefined
  status: PayoutStatus
  error_message?: (string | null) | undefined
  error_code?: (string | null) | undefined
  frm_message?:
    | {
        frm_name: string
        frm_transaction_id?: (string | null) | undefined
        frm_transaction_type?: (string | null) | undefined
        frm_status?: (string | null) | undefined
        frm_score?: (number | null) | undefined
        frm_reason?: ({ [x: string]: unknown } | null) | undefined
        frm_error?: (string | null) | undefined
      }
    | undefined
  profile_id: string
  created?: (string | null) | undefined
  connector_transaction_id?: (string | null) | undefined
  connector_eligibility_reference_id?: (string | null) | undefined
  priority?: {} | undefined
  attempts?: (PayoutAttemptResponse[] | null) | undefined
  payout_link?: { payout_link_id: string; link: string } | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  unified_code?: (string | null) | undefined
  unified_message?: (string | null) | undefined
  payout_method_id?: (string | null) | undefined
}
type PayoutUpdateRequest = {
  merchant_order_reference_id?: (string | null) | undefined
  amount?: (bigint | null) | undefined
  currency?: {} | undefined
  routing?: {} | undefined
  connector?: (PayoutConnectors[] | null) | undefined
  confirm?: (boolean | null) | undefined
  payout_type?: {} | undefined
  payout_method_data?: {} | undefined
  source_bank_data?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  auto_fulfill?: (boolean | null) | undefined
  customer_id?: (string | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
  return_url?: (string | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  description?: (string | null) | undefined
  billing_descriptor?:
    | {
        reference?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
      }
    | undefined
  entity_type?: {} | undefined
  recurring?: (boolean | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  funds_transfer_type?: {} | undefined
  purpose?: {} | undefined
  sender_details?: {} | undefined
  payout_token?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  priority?: {} | undefined
  payout_link?: (boolean | null) | undefined
  payout_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        payout_link_id?: (string | null) | undefined
        enabled_payment_methods?: (EnabledPaymentMethod[] | null) | undefined
        form_layout?: {} | undefined
        test_mode?: (boolean | null) | undefined
      }
    | undefined
  session_expiry?: (number | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  payout_method_id?: (string | null) | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
}
type PayoutCancelRequest = { payout_id: string }
type PayoutFulfillRequest = { payout_id: string }
type PayoutListResponse = {
  size: number
  data: PayoutCreateResponse[]
  total_count?: (bigint | null) | undefined
}
type PayoutType = 'card' | 'bank' | 'wallet' | 'bank_redirect'
type PayoutListFilterConstraints = {
  start_time: string
  end_time?: (string | null) | undefined
  payout_id?: (string | null) | undefined
  merchant_order_reference_id?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  customer_id?: (string | null) | undefined
  limit?: CommonUtilsTypesListPageSize | undefined
  offset?: CommonUtilsTypesListPageOffset | undefined
  connector?: (PayoutConnectors[] | null) | undefined
  currency: Currency
  status?: (PayoutStatus[] | null) | undefined
  payout_method?: (PayoutType[] | null) | undefined
  entity_type: PayoutEntityType
}
type PayoutConfirmRequest = {
  merchant_order_reference_id?: (string | null) | undefined
  amount?: (bigint | null) | undefined
  currency?: {} | undefined
  routing?: {} | undefined
  connector?: (PayoutConnectors[] | null) | undefined
  payout_type?: {} | undefined
  payout_method_data?: {} | undefined
  source_bank_data?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  auto_fulfill?: (boolean | null) | undefined
  customer_id?: (string | null) | undefined
  customer?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
  return_url?: (string | null) | undefined
  business_country?: {} | undefined
  business_label?: (string | null) | undefined
  description?: (string | null) | undefined
  billing_descriptor?:
    | {
        reference?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
      }
    | undefined
  entity_type?: {} | undefined
  recurring?: (boolean | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  funds_transfer_type?: {} | undefined
  purpose?: {} | undefined
  sender_details?: {} | undefined
  payout_token?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  priority?: {} | undefined
  payout_link?: (boolean | null) | undefined
  payout_link_config?:
    | {
        logo?: (string | null) | undefined
        merchant_name?: (string | null) | undefined
        theme?: (string | null) | undefined
        payout_link_id?: (string | null) | undefined
        enabled_payment_methods?: (EnabledPaymentMethod[] | null) | undefined
        form_layout?: {} | undefined
        test_mode?: (boolean | null) | undefined
      }
    | undefined
  session_expiry?: (number | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phone?: (string | null) | undefined
  phone_country_code?: (string | null) | undefined
  payout_method_id?: (string | null) | undefined
  browser_info?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
}
type TimeRange = { start_time: string; end_time?: (string | null) | undefined }
type PayoutListFilters = {
  connector: PayoutConnectors[]
  currency: Currency[]
  status: PayoutStatus[]
  payout_method: PayoutType[]
}
type ApiKeyExpiration = 'never' | string
type CreateApiKeyRequest = {
  name: string
  description?: (string | null) | undefined
  expiration: ApiKeyExpiration
}
type CreateApiKeyResponse = {
  key_id: string
  merchant_id: string
  name: string
  description?: (string | null) | undefined
  api_key: string
  created: string
  expiration: ApiKeyExpiration
}
type RetrieveApiKeyResponse = {
  key_id: string
  merchant_id: string
  name: string
  description?: (string | null) | undefined
  prefix: string
  created: string
  expiration: ApiKeyExpiration
}
type UpdateApiKeyRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  expiration?: {} | undefined
}
type RevokeApiKeyResponse = { merchant_id: string; key_id: string; revoked: boolean }
type EventClass = 'payments' | 'refunds' | 'disputes' | 'mandates' | 'payouts' | 'subscriptions'
type EventListConstraints = {
  created_after?: (string | null) | undefined
  created_before?: (string | null) | undefined
  limit?: (number | null) | undefined
  offset?: (number | null) | undefined
  object_id?: (string | null) | undefined
  event_id?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  event_classes?: (EventClass[] | null) | undefined
  event_types?: (EventType[] | null) | undefined
  is_delivered?: (boolean | null) | undefined
  recipient?: {} | undefined
}
type EventListItemResponse = {
  event_id: string
  merchant_id: string
  profile_id: string
  object_id: string
  event_type: EventType
  event_class: EventClass
  is_delivery_successful?: (boolean | null) | undefined
  initial_attempt_id: string
  processor_merchant_id?: (string | null) | undefined
  created: string
}
type TotalEventsResponse = { events: EventListItemResponse[]; total_count: bigint }
type OutgoingWebhookRequestContent = { body: string; headers: {}[][] }
type OutgoingWebhookResponseContent = {
  body?: (string | null) | undefined
  headers?: ({}[][] | null) | undefined
  status_code?: (number | null) | undefined
  error_message?: (string | null) | undefined
}
type EventRetrieveResponse = {
  event_id: string
  merchant_id: string
  profile_id: string
  object_id: string
  event_type: EventType
  event_class: EventClass
  is_delivery_successful?: (boolean | null) | undefined
  initial_attempt_id: string
  processor_merchant_id?: (string | null) | undefined
  created: string
  request: OutgoingWebhookRequestContent
  response: OutgoingWebhookResponseContent
  delivery_attempt?: {} | undefined
}
type PollStatus = 'pending' | 'completed' | 'not_found'
type PollResponse = { poll_id: string; status: PollStatus }
type ProfileAcquirerCreate = {
  acquirer_assigned_merchant_id: string
  merchant_name: string
  network: string
  acquirer_bin: string
  acquirer_ica?: (string | null) | undefined
  acquirer_fraud_rate?: (number | null) | undefined
  acquirer_country_code?: {} | undefined
  profile_id: string
  is_default?: (boolean | null) | undefined
}
type ProfileAcquirerUpdate = {
  acquirer_assigned_merchant_id?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  network?: (string | null) | undefined
  acquirer_bin?: (string | null) | undefined
  acquirer_ica?: (string | null) | undefined
  acquirer_fraud_rate?: (number | null) | undefined
  acquirer_country_code?: {} | undefined
  is_default?: (boolean | null) | undefined
}
type PaymentData = {
  amount: bigint
  currency: Currency
  card_bin?: (string | null) | undefined
  extended_card_bin?: (string | null) | undefined
  business_country?: {} | undefined
}
type CardDiscovery = 'manual' | 'saved_card' | 'click_to_pay'
type Country =
  | 'Afghanistan'
  | 'AlandIslands'
  | 'Albania'
  | 'Algeria'
  | 'AmericanSamoa'
  | 'Andorra'
  | 'Angola'
  | 'Anguilla'
  | 'Antarctica'
  | 'AntiguaAndBarbuda'
  | 'Argentina'
  | 'Armenia'
  | 'Aruba'
  | 'Australia'
  | 'Austria'
  | 'Azerbaijan'
  | 'Bahamas'
  | 'Bahrain'
  | 'Bangladesh'
  | 'Barbados'
  | 'Belarus'
  | 'Belgium'
  | 'Belize'
  | 'Benin'
  | 'Bermuda'
  | 'Bhutan'
  | 'BoliviaPlurinationalState'
  | 'BonaireSintEustatiusAndSaba'
  | 'BosniaAndHerzegovina'
  | 'Botswana'
  | 'BouvetIsland'
  | 'Brazil'
  | 'BritishIndianOceanTerritory'
  | 'BruneiDarussalam'
  | 'Bulgaria'
  | 'BurkinaFaso'
  | 'Burundi'
  | 'CaboVerde'
  | 'Cambodia'
  | 'Cameroon'
  | 'Canada'
  | 'CaymanIslands'
  | 'CentralAfricanRepublic'
  | 'Chad'
  | 'Chile'
  | 'China'
  | 'ChristmasIsland'
  | 'CocosKeelingIslands'
  | 'Colombia'
  | 'Comoros'
  | 'Congo'
  | 'CongoDemocraticRepublic'
  | 'CookIslands'
  | 'CostaRica'
  | 'CotedIvoire'
  | 'Croatia'
  | 'Cuba'
  | 'Curacao'
  | 'Cyprus'
  | 'Czechia'
  | 'Denmark'
  | 'Djibouti'
  | 'Dominica'
  | 'DominicanRepublic'
  | 'Ecuador'
  | 'Egypt'
  | 'ElSalvador'
  | 'EquatorialGuinea'
  | 'Eritrea'
  | 'Estonia'
  | 'Ethiopia'
  | 'FalklandIslandsMalvinas'
  | 'FaroeIslands'
  | 'Fiji'
  | 'Finland'
  | 'France'
  | 'FrenchGuiana'
  | 'FrenchPolynesia'
  | 'FrenchSouthernTerritories'
  | 'Gabon'
  | 'Gambia'
  | 'Georgia'
  | 'Germany'
  | 'Ghana'
  | 'Gibraltar'
  | 'Greece'
  | 'Greenland'
  | 'Grenada'
  | 'Guadeloupe'
  | 'Guam'
  | 'Guatemala'
  | 'Guernsey'
  | 'Guinea'
  | 'GuineaBissau'
  | 'Guyana'
  | 'Haiti'
  | 'HeardIslandAndMcDonaldIslands'
  | 'HolySee'
  | 'Honduras'
  | 'HongKong'
  | 'Hungary'
  | 'Iceland'
  | 'India'
  | 'Indonesia'
  | 'IranIslamicRepublic'
  | 'Iraq'
  | 'Ireland'
  | 'IsleOfMan'
  | 'Israel'
  | 'Italy'
  | 'Jamaica'
  | 'Japan'
  | 'Jersey'
  | 'Jordan'
  | 'Kazakhstan'
  | 'Kenya'
  | 'Kiribati'
  | 'KoreaDemocraticPeoplesRepublic'
  | 'KoreaRepublic'
  | 'Kuwait'
  | 'Kyrgyzstan'
  | 'LaoPeoplesDemocraticRepublic'
  | 'Latvia'
  | 'Lebanon'
  | 'Lesotho'
  | 'Liberia'
  | 'Libya'
  | 'Liechtenstein'
  | 'Lithuania'
  | 'Luxembourg'
  | 'Macao'
  | 'MacedoniaTheFormerYugoslavRepublic'
  | 'Madagascar'
  | 'Malawi'
  | 'Malaysia'
  | 'Maldives'
  | 'Mali'
  | 'Malta'
  | 'MarshallIslands'
  | 'Martinique'
  | 'Mauritania'
  | 'Mauritius'
  | 'Mayotte'
  | 'Mexico'
  | 'MicronesiaFederatedStates'
  | 'MoldovaRepublic'
  | 'Monaco'
  | 'Mongolia'
  | 'Montenegro'
  | 'Montserrat'
  | 'Morocco'
  | 'Mozambique'
  | 'Myanmar'
  | 'Namibia'
  | 'Nauru'
  | 'Nepal'
  | 'Netherlands'
  | 'NewCaledonia'
  | 'NewZealand'
  | 'Nicaragua'
  | 'Niger'
  | 'Nigeria'
  | 'Niue'
  | 'NorfolkIsland'
  | 'NorthernMarianaIslands'
  | 'Norway'
  | 'Oman'
  | 'Pakistan'
  | 'Palau'
  | 'PalestineState'
  | 'Panama'
  | 'PapuaNewGuinea'
  | 'Paraguay'
  | 'Peru'
  | 'Philippines'
  | 'Pitcairn'
  | 'Poland'
  | 'Portugal'
  | 'PuertoRico'
  | 'Qatar'
  | 'Reunion'
  | 'Romania'
  | 'RussianFederation'
  | 'Rwanda'
  | 'SaintBarthelemy'
  | 'SaintHelenaAscensionAndTristandaCunha'
  | 'SaintKittsAndNevis'
  | 'SaintLucia'
  | 'SaintMartinFrenchpart'
  | 'SaintPierreAndMiquelon'
  | 'SaintVincentAndTheGrenadines'
  | 'Samoa'
  | 'SanMarino'
  | 'SaoTomeAndPrincipe'
  | 'SaudiArabia'
  | 'Senegal'
  | 'Serbia'
  | 'Seychelles'
  | 'SierraLeone'
  | 'Singapore'
  | 'SintMaartenDutchpart'
  | 'Slovakia'
  | 'Slovenia'
  | 'SolomonIslands'
  | 'Somalia'
  | 'SouthAfrica'
  | 'SouthGeorgiaAndTheSouthSandwichIslands'
  | 'SouthSudan'
  | 'Spain'
  | 'SriLanka'
  | 'Sudan'
  | 'Suriname'
  | 'SvalbardAndJanMayen'
  | 'Swaziland'
  | 'Sweden'
  | 'Switzerland'
  | 'SyrianArabRepublic'
  | 'TaiwanProvinceOfChina'
  | 'Tajikistan'
  | 'TanzaniaUnitedRepublic'
  | 'Thailand'
  | 'TimorLeste'
  | 'Togo'
  | 'Tokelau'
  | 'Tonga'
  | 'TrinidadAndTobago'
  | 'Tunisia'
  | 'Turkey'
  | 'Turkmenistan'
  | 'TurksAndCaicosIslands'
  | 'Tuvalu'
  | 'Uganda'
  | 'Ukraine'
  | 'UnitedArabEmirates'
  | 'UnitedKingdomOfGreatBritainAndNorthernIreland'
  | 'UnitedStatesOfAmerica'
  | 'UnitedStatesMinorOutlyingIslands'
  | 'Uruguay'
  | 'Uzbekistan'
  | 'Vanuatu'
  | 'VenezuelaBolivarianRepublic'
  | 'Vietnam'
  | 'VirginIslandsBritish'
  | 'VirginIslandsUS'
  | 'WallisAndFutuna'
  | 'WesternSahara'
  | 'Yemen'
  | 'Zambia'
  | 'Zimbabwe'
type ThreeDsDecisionRuleExecuteRequest = {
  routing_id: string
  payment: PaymentData
  payment_method?: { card_network: CardNetwork; card_discovery: CardDiscovery } | undefined
  customer_device?:
    | { platform?: {} | undefined; device_type?: {} | undefined; display_size?: {} | undefined }
    | undefined
  issuer?: { name?: (string | null) | undefined; country: Country } | undefined
  acquirer?: { country: Country; fraud_rate?: (number | null) | undefined } | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
}
type ThreeDsDecisionRuleExecuteResponse = { decision: ThreeDSDecision }
type AuthenticationCreateRequest = {
  authentication_id?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  amount: MinorUnit
  authentication_connector?: {} | undefined
  currency: Currency
  return_url?: (string | null) | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  psd2_sca_exemption_type?: {} | undefined
  profile_acquirer_id?: (string | null) | undefined
  acquirer_details?:
    | {
        acquirer_bin?: (string | null) | undefined
        acquirer_merchant_id?: (string | null) | undefined
        merchant_country_code?: (string | null) | undefined
      }
    | undefined
  customer_details?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
}
type AuthenticationResponse = {
  authentication_id: string
  merchant_id: string
  status: AuthenticationStatus
  client_secret?: (string | null) | undefined
  amount: MinorUnit
  currency: Currency
  authentication_connector?: {} | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  return_url?: (string | null) | undefined
  created_at?: (string | null) | undefined
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  psd2_sca_exemption_type?: {} | undefined
  acquirer_details?:
    | {
        acquirer_bin?: (string | null) | undefined
        acquirer_merchant_id?: (string | null) | undefined
        merchant_country_code?: (string | null) | undefined
      }
    | undefined
  profile_acquirer_id?: (string | null) | undefined
  customer_details?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        phone_country_code?: (string | null) | undefined
        tax_registration_id?: (string | null) | undefined
        document_details?: { document_type: DocumentKind; document_number: string } | undefined
        date_of_birth?: (string | null) | undefined
      }
    | undefined
}
type Card = {
  card_number: string
  card_exp_month: string
  card_exp_year: string
  card_holder_name: string
  card_cvc: string
  card_issuer?: (string | null) | undefined
  card_network?: {} | undefined
  card_type?: (string | null) | undefined
  card_subtype?: (string | null) | undefined
  card_segment_type?: {} | undefined
  funding_source?: {} | undefined
  card_issuing_country?: (string | null) | undefined
  card_issuing_country_code?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  nick_name?: (string | null) | undefined
}
type CardWithNoCVC = {
  card_number: string
  card_exp_month: string
  card_exp_year: string
  card_holder_name: string
  card_issuer?: (string | null) | undefined
  card_network?: {} | undefined
  card_type?: (string | null) | undefined
  card_subtype?: (string | null) | undefined
  card_segment_type?: {} | undefined
  funding_source?: {} | undefined
  card_issuing_country?: (string | null) | undefined
  card_issuing_country_code?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  nick_name?: (string | null) | undefined
}
type CardRedirectData =
  | { knet: { [x: string]: unknown } }
  | { benefit: { [x: string]: unknown } }
  | { momo_atm: { [x: string]: unknown } }
  | { card_redirect: { [x: string]: unknown } }
type AliPayHkRedirection = { [x: string]: unknown }
type AliPayQr = { [x: string]: unknown }
type AliPayRedirection = { [x: string]: unknown }
type AmazonPayWalletData = { checkout_session_id: string }
type AmazonPayRedirectData = { [x: string]: unknown }
type ApplePayCryptogramData = { online_payment_cryptogram: string; eci_indicator: string }
type ApplePayPredecryptData = {
  application_primary_account_number: string
  application_expiration_month: string
  application_expiration_year: string
  payment_data: ApplePayCryptogramData
  device_manufacturer_identifier?: (string | null) | undefined
}
type ApplePayPaymentData = ApplePayPredecryptData | string
type ApplepayPaymentMethod = {
  display_name: string
  network: string
  type: string
  card_exp_month?: (string | null) | undefined
  card_exp_year?: (string | null) | undefined
  device_pan_bin?: (string | null) | undefined
  card_bin?: (string | null) | undefined
  card_type?: {} | undefined
  auth_code?: (string | null) | undefined
  card_subtype?: (string | null) | undefined
  card_segment_type?: {} | undefined
  funding_source?: {} | undefined
  issuer_name?: (string | null) | undefined
  issuer_country?: {} | undefined
  payment_checks?: ({ [x: string]: unknown } | null) | undefined
}
type ApplePayWalletData = {
  payment_data: ApplePayPaymentData
  payment_method: ApplepayPaymentMethod
  transaction_identifier: string
}
type ApplePayRedirectData = { [x: string]: unknown }
type ApplePayThirdPartySdkData = { token?: (string | null) | undefined }
type CashappQr = { [x: string]: unknown }
type GcashRedirection = { [x: string]: unknown }
type GoPayRedirection = { [x: string]: unknown }
type GooglePayPaymentMethodInfo = {
  card_network: string
  card_details: string
  assurance_details?: { card_holder_authenticated: boolean; account_verified: boolean } | undefined
  card_funding_source?: {} | undefined
}
type GPayPredecryptData = {
  auth_method?: {} | undefined
  card_exp_month: string
  card_exp_year: string
  application_primary_account_number: string
  cryptogram: string
  eci_indicator: string
}
type GpayEcryptedTokenizationData = { type: string; token: string; auth_method?: {} | undefined }
type GpayTokenizationData = GPayPredecryptData | GpayEcryptedTokenizationData
type GooglePayWalletData = {
  type: string
  description: string
  info: GooglePayPaymentMethodInfo
  tokenization_data: GpayTokenizationData
}
type GooglePayRedirectData = { [x: string]: unknown }
type GooglePayThirdPartySdkData = { token?: (string | null) | undefined }
type KakaoPayRedirection = { [x: string]: unknown }
type MbWayRedirection = { telephone_number: string }
type MifinityData = { date_of_birth: string; language_preference?: (string | null) | undefined }
type MobilePayRedirection = { [x: string]: unknown }
type MomoRedirection = { [x: string]: unknown }
type PaypalRedirection = {
  email?: (string | null) | undefined
  payer_id?: (string | null) | undefined
}
type PayPalWalletData = { token: string }
type PayseraData = { [x: string]: unknown }
type PazeWalletData = { complete_response: string }
type RevolutPayData = { [x: string]: unknown }
type SamsungPayCardBrand = 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown'
type SamsungPayTokenData = { type?: (string | null) | undefined; version: string; data: string }
type SamsungPayWebWalletData = {
  method?: (string | null) | undefined
  recurring_payment?: (boolean | null) | undefined
  card_brand: SamsungPayCardBrand
  card_last4digits: string
  '3_d_s': SamsungPayTokenData
}
type SamsungPayAppWalletData = {
  '3_d_s': SamsungPayTokenData
  payment_card_brand: SamsungPayCardBrand
  payment_currency_type: string
  payment_last4_dpan?: (string | null) | undefined
  payment_last4_fpan: string
  merchant_ref?: (string | null) | undefined
  method?: (string | null) | undefined
  recurring_payment?: (boolean | null) | undefined
}
type SamsungPayWalletCredentials = SamsungPayWebWalletData | SamsungPayAppWalletData
type SamsungPayWalletData = { payment_credential: SamsungPayWalletCredentials }
type SkrillData = { [x: string]: unknown }
type NetellerData = { [x: string]: unknown }
type SwishQrData = { [x: string]: unknown }
type TouchNGoRedirection = { [x: string]: unknown }
type WeChatPayQr = { [x: string]: unknown }
type WeChatPayRedirection = { [x: string]: unknown }
type WalletData =
  | { ali_pay_hk_redirect: AliPayHkRedirection }
  | { ali_pay_qr: AliPayQr }
  | { ali_pay_redirect: AliPayRedirection }
  | { amazon_pay: AmazonPayWalletData }
  | { amazon_pay_redirect: AmazonPayRedirectData }
  | { apple_pay: ApplePayWalletData }
  | { apple_pay_redirect: ApplePayRedirectData }
  | { apple_pay_third_party_sdk: ApplePayThirdPartySdkData }
  | { bluecode_redirect: { [x: string]: unknown } }
  | { cashapp_qr: CashappQr }
  | { dana_redirect: { [x: string]: unknown } }
  | { gcash_redirect: GcashRedirection }
  | { go_pay_redirect: GoPayRedirection }
  | { google_pay: GooglePayWalletData }
  | { google_pay_redirect: GooglePayRedirectData }
  | { google_pay_third_party_sdk: GooglePayThirdPartySdkData }
  | { kakao_pay_redirect: KakaoPayRedirection }
  | { mb_way_redirect: MbWayRedirection }
  | { mifinity: MifinityData }
  | { mobile_pay_redirect: MobilePayRedirection }
  | { momo_redirect: MomoRedirection }
  | { paypal_redirect: PaypalRedirection }
  | { paypal_sdk: PayPalWalletData }
  | { paysera: PayseraData }
  | { paze: PazeWalletData }
  | { revolut_pay: RevolutPayData }
  | { samsung_pay: SamsungPayWalletData }
  | { skrill: SkrillData }
  | { neteller: NetellerData }
  | { swish_qr: SwishQrData }
  | { touch_n_go_redirect: TouchNGoRedirection }
  | { twint_redirect: { [x: string]: unknown } }
  | { vipps_redirect: { [x: string]: unknown } }
  | { wero_redirect: { [x: string]: unknown } }
  | { we_chat_pay_qr: WeChatPayQr }
  | { we_chat_pay_redirect: WeChatPayRedirection }
type PayLaterData =
  | {
      klarna_redirect: {
        billing_email?: (string | null) | undefined
        billing_country?: {} | undefined
      }
    }
  | { klarna_sdk: { token: string } }
  | { affirm_redirect: { [x: string]: unknown } }
  | {
      afterpay_clearpay_redirect: {
        billing_email?: (string | null) | undefined
        billing_name?: (string | null) | undefined
      }
    }
  | { pay_bright_redirect: { [x: string]: unknown } }
  | { flexiti_redirect: { [x: string]: unknown } }
  | { walley_redirect: { [x: string]: unknown } }
  | { alma_redirect: { [x: string]: unknown } }
  | { atome_redirect: { [x: string]: unknown } }
  | { breadpay_redirect: { [x: string]: unknown } }
  | { payjustnow_redirect: { [x: string]: unknown } }
type BankRedirectData =
  | {
      bancontact_card: {
        card_number: string
        card_exp_month: string
        card_exp_year: string
        card_holder_name: string
        billing_details?: { billing_name: string; email: string } | undefined
      }
    }
  | { bizum: { [x: string]: unknown } }
  | { blik: { blik_code?: (string | null) | undefined } }
  | {
      eps: {
        billing_details?: { billing_name: string; email: string } | undefined
        bank_name: BankNames
        country: CountryAlpha2
      }
    }
  | {
      giropay: {
        billing_details?: { billing_name: string; email: string } | undefined
        bank_account_bic?: (string | null) | undefined
        bank_account_iban?: (string | null) | undefined
        country: CountryAlpha2
      }
    }
  | {
      ideal: {
        billing_details?: { billing_name: string; email: string } | undefined
        bank_name: BankNames
        country: CountryAlpha2
      }
    }
  | { interac: { country?: {} | undefined; email?: (string | null) | undefined } }
  | { online_banking_czech_republic: { issuer: BankNames } }
  | { online_banking_finland: { email?: (string | null) | undefined } }
  | { online_banking_poland: { issuer: BankNames } }
  | { online_banking_slovakia: { issuer: BankNames } }
  | { open_banking_uk: { issuer: BankNames; country: CountryAlpha2 } }
  | {
      przelewy24: {
        bank_name?: {} | undefined
        billing_details?: { billing_name: string; email: string } | undefined
      }
    }
  | {
      sofort: {
        billing_details?: { billing_name: string; email: string } | undefined
        country: CountryAlpha2
        preferred_language?: (string | null) | undefined
      }
    }
  | { trustly: { country?: {} | undefined } }
  | { online_banking_fpx: { issuer: BankNames } }
  | { online_banking_thailand: { issuer: BankNames } }
  | { local_bank_redirect: { [x: string]: unknown } }
  | { eft: { provider: string } }
  | { open_banking: { [x: string]: unknown } }
type BankDebitData =
  | {
      ach_bank_debit: {
        billing_details?:
          | {
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        account_number: string
        routing_number: string
        bank_account_holder_name: string
        bank_name: string
        bank_type: string
        bank_holder_type: string
      }
    }
  | {
      sepa_bank_debit: {
        billing_details?:
          | {
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        iban: string
        bank_account_holder_name: string
      }
    }
  | {
      sepa_guarenteed_bank_debit: {
        billing_details?:
          | {
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        iban: string
        bank_account_holder_name: string
      }
    }
  | {
      becs_bank_debit: {
        billing_details?:
          | {
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        account_number: string
        bsb_number: string
        bank_account_holder_name?: (string | null) | undefined
      }
    }
  | {
      bacs_bank_debit: {
        billing_details?:
          | {
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        account_number: string
        sort_code: string
        bank_account_holder_name: string
      }
    }
  | {
      eft_debit_order: {
        billing_details?:
          | {
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
            }
          | undefined
        account_number: string
        branch_code?: (string | null) | undefined
        bank_account_holder_name?: (string | null) | undefined
        bank_name?: {} | undefined
        bank_type?: {} | undefined
      }
    }
type BankTransferData =
  | { ach_bank_transfer: { billing_details?: { email?: (string | null) | undefined } | undefined } }
  | {
      sepa_bank_transfer: {
        billing_details?:
          | { email?: (string | null) | undefined; name?: (string | null) | undefined }
          | undefined
        country: CountryAlpha2
      }
    }
  | {
      bacs_bank_transfer: {
        billing_details?:
          | { email?: (string | null) | undefined; name?: (string | null) | undefined }
          | undefined
      }
    }
  | {
      multibanco_bank_transfer: {
        billing_details?: { email?: (string | null) | undefined } | undefined
      }
    }
  | {
      permata_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      bca_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      bni_va_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      bri_va_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      cimb_va_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      danamon_va_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      mandiri_va_bank_transfer: {
        billing_details?:
          | {
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    }
  | {
      pix: {
        pix_key?: (string | null) | undefined
        cpf?: (string | null) | undefined
        cnpj?: (string | null) | undefined
        source_bank_account_id?: (string | null) | undefined
        destination_bank_account_id?: (string | null) | undefined
        expiry_date?: (string | null) | undefined
      }
    }
  | { pix_emv: { [x: string]: unknown } }
  | { pix_qr: { [x: string]: unknown } }
  | { pix_automatico_qr: { [x: string]: unknown } }
  | {
      pix_automatico_push: {
        account_number?: (string | null) | undefined
        branch_code?: (string | null) | undefined
        bank_identifier?: (string | null) | undefined
      }
    }
  | { pse: { [x: string]: unknown } }
  | { local_bank_transfer: { bank_code?: (string | null) | undefined } }
  | { instant_bank_transfer: { [x: string]: unknown } }
  | { instant_bank_transfer_finland: { [x: string]: unknown } }
  | { instant_bank_transfer_poland: { [x: string]: unknown } }
  | { indonesian_bank_transfer: { bank_name?: {} | undefined } }
type RealTimePaymentData =
  | { fps: { [x: string]: unknown } }
  | { duit_now: { [x: string]: unknown } }
  | { prompt_pay: { [x: string]: unknown } }
  | { viet_qr: { [x: string]: unknown } }
  | { qris: { [x: string]: unknown } }
type CryptoData = {
  pay_currency?: (string | null) | undefined
  network?: (string | null) | undefined
}
type UpiCollectData = { vpa_id?: (string | null) | undefined; upi_source?: {} | undefined }
type UpiIntentData = { upi_source?: {} | undefined; app_name?: (string | null) | undefined }
type UpiQrData = { upi_source?: {} | undefined }
type UpiData =
  | { upi_collect: UpiCollectData }
  | { upi_intent: UpiIntentData }
  | { upi_qr: UpiQrData }
type BoletoVoucherData = {
  social_security_number?: (string | null) | undefined
  bank_number?: (string | null) | undefined
  document_type?: {} | undefined
  fine_percentage?: (string | null) | undefined
  fine_quantity_days?: (string | null) | undefined
  interest_percentage?: (string | null) | undefined
  write_off_quantity_days?: (string | null) | undefined
  messages?: (string[] | null) | undefined
  due_date?: (string | null) | undefined
}
type AlfamartVoucherData = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  email?: (string | null) | undefined
}
type IndomaretVoucherData = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  email?: (string | null) | undefined
}
type JCSVoucherData = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  email?: (string | null) | undefined
  phone_number?: (string | null) | undefined
}
type VoucherData =
  | { boleto: BoletoVoucherData }
  | 'efecty'
  | 'pago_efectivo'
  | 'red_compra'
  | 'red_pagos'
  | { alfamart: AlfamartVoucherData }
  | { indomaret: IndomaretVoucherData }
  | 'oxxo'
  | { seven_eleven: JCSVoucherData }
  | { lawson: JCSVoucherData }
  | { mini_stop: JCSVoucherData }
  | { family_mart: JCSVoucherData }
  | { seicomart: JCSVoucherData }
  | { pay_easy: JCSVoucherData }
type GiftCardDetails = { number: string; cvc: string }
type BHNGiftCardDetails = {
  account_number: string
  pin: string
  cvv2: string
  expiration_date: string
}
type GiftCardData =
  | { givex: GiftCardDetails }
  | { pay_safe_card: { [x: string]: unknown } }
  | { bhn_card_network: BHNGiftCardDetails }
type CardToken = {
  card_holder_name: string
  card_cvc?: (string | null) | undefined
  card_cvc_token?: (string | null) | undefined
}
type OpenBankingData = { open_banking_pis: { [x: string]: unknown } }
type MobilePaymentData = {
  direct_carrier_billing: { msisdn: string; client_uid?: (string | null) | undefined }
}
type NetworkTokenData = {
  network_token: string
  token_exp_month: string
  token_exp_year: string
  token_cryptogram: string
  card_network?: {} | undefined
  card_type?: (string | null) | undefined
  card_issuing_country?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  card_holder_name: string
  card_issuer?: (string | null) | undefined
  nick_name?: (string | null) | undefined
  eci?: (string | null) | undefined
  par?: (string | null) | undefined
}
type NetworkTransactionIdAndCardDetails = {
  card_number: string
  card_exp_month: string
  card_exp_year: string
  card_holder_name: string
  card_issuer?: (string | null) | undefined
  card_network?: {} | undefined
  card_type?: (string | null) | undefined
  card_subtype?: (string | null) | undefined
  card_segment_type?: {} | undefined
  funding_source?: {} | undefined
  card_issuing_country?: (string | null) | undefined
  card_issuing_country_code?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  nick_name?: (string | null) | undefined
  network_transaction_id: string
  transaction_link_id?: (string | null) | undefined
}
type NetworkTransactionIdAndNetworkTokenDetails = {
  network_token: string
  token_exp_month: string
  token_exp_year: string
  card_network?: {} | undefined
  card_type?: (string | null) | undefined
  card_issuing_country?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  card_holder_name: string
  card_issuer?: (string | null) | undefined
  nick_name?: (string | null) | undefined
  eci?: (string | null) | undefined
  network_transaction_id: string
  transaction_link_id?: (string | null) | undefined
}
type NetworkTransactionIdAndDecryptedWalletTokenDetails = {
  decrypted_token: string
  token_exp_month: string
  token_exp_year: string
  card_holder_name: string
  network_transaction_id: string
  transaction_link_id?: (string | null) | undefined
  eci?: (string | null) | undefined
  token_source?: {} | undefined
  card_network?: {} | undefined
  device_manufacturer_identifier?: (string | null) | undefined
}
type ProxyCardData = {
  card_number: string
  card_exp_month: string
  card_exp_year: string
  card_holder_name: string
  card_cvc: string
  card_issuer?: (string | null) | undefined
  card_network?: {} | undefined
  card_type?: (string | null) | undefined
  card_issuing_country?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  nick_name?: (string | null) | undefined
  bin_number: string
  last_four: string
}
type VaultCardToken = { card_holder_name: string; card_cvc?: (string | null) | undefined }
type PaymentMethodData =
  | { card: Card }
  | { card_with_no_cvc: CardWithNoCVC }
  | { card_redirect: CardRedirectData }
  | { wallet: WalletData }
  | { pay_later: PayLaterData }
  | { bank_redirect: BankRedirectData }
  | { bank_debit: BankDebitData }
  | { bank_transfer: BankTransferData }
  | { real_time_payment: RealTimePaymentData }
  | { crypto: CryptoData }
  | 'mandate_payment'
  | 'reward'
  | { upi: UpiData }
  | { voucher: VoucherData }
  | { gift_card: GiftCardData }
  | { card_token: CardToken }
  | { open_banking: OpenBankingData }
  | { mobile_payment: MobilePaymentData }
  | { network_token: NetworkTokenData }
  | { network_transaction_id_and_card_details: NetworkTransactionIdAndCardDetails }
  | { network_transaction_id_and_network_token_details: NetworkTransactionIdAndNetworkTokenDetails }
  | {
      network_transaction_id_and_decrypted_wallet_token_details: NetworkTransactionIdAndDecryptedWalletTokenDetails
    }
  | { vault_data_card: ProxyCardData }
  | { vault_card_token_data: VaultCardToken }
type AuthenticationEligibilityRequest = {
  payment_method_data: PaymentMethodData
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
  client_secret?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  browser_information?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  email?: (string | null) | undefined
}
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type NextAction = { url: string; http_method: Method }
type AuthenticationEligibilityResponse = {
  authentication_id: string
  next_action: NextAction
  status: AuthenticationStatus
  eligibility_response_params?: {} | undefined
  connector_metadata: { [x: string]: unknown }
  profile_id: string
  error_message?: (string | null) | undefined
  error_code?: (string | null) | undefined
  authentication_connector?: {} | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  browser_information?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  email?: (string | null) | undefined
  acquirer_details?:
    | {
        acquirer_bin?: (string | null) | undefined
        acquirer_merchant_id?: (string | null) | undefined
        merchant_country_code?: (string | null) | undefined
      }
    | undefined
}
type AuthenticationAuthenticateRequest = {
  client_secret: string
  sdk_information?:
    | {
        sdk_app_id: string
        sdk_enc_data: string
        sdk_ephem_pub_key: { [x: string]: string }
        sdk_trans_id: string
        sdk_reference_number: string
        sdk_max_timeout: number
        sdk_type?: {} | undefined
        device_details?:
          | {
              device_type?: (string | null) | undefined
              device_brand?: (string | null) | undefined
              device_os?: (string | null) | undefined
              device_display?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  device_channel: DeviceChannel
  threeds_method_comp_ind: ThreeDsCompletionIndicator
}
type AuthenticationId = string
type AuthenticationAuthenticateResponse = {
  trans_status?: {} | undefined
  acs_url: string
  challenge_request?: (string | null) | undefined
  acs_reference_number?: (string | null) | undefined
  acs_trans_id?: (string | null) | undefined
  three_ds_server_transaction_id?: (string | null) | undefined
  acs_signed_content?: (string | null) | undefined
  three_ds_requestor_url: string
  three_ds_requestor_app_url?: (string | null) | undefined
  error_message: string
  error_code: string
  authentication_value: string
  status: AuthenticationStatus
  authentication_connector?: {} | undefined
  authentication_id: AuthenticationId
  eci: string
  acquirer_details?:
    | {
        acquirer_bin?: (string | null) | undefined
        acquirer_merchant_id?: (string | null) | undefined
        merchant_country_code?: (string | null) | undefined
      }
    | undefined
}
type AuthenticationSyncPostUpdateRequest = { [x: string]: unknown }
type AuthenticationPaymentMethodType = 'ctp'
type ClickToPayDetails = {
  merchant_transaction_id?: (string | null) | undefined
  correlation_id?: (string | null) | undefined
  x_src_flow_id?: (string | null) | undefined
  provider?: {} | undefined
  encrypted_payload?: (string | null) | undefined
}
type AuthenticationPaymentMethodData = ClickToPayDetails
type AuthenticationSyncRequest = {
  client_secret: string
  payment_method_details?:
    | {
        payment_method_type: AuthenticationPaymentMethodType
        payment_method_data: AuthenticationPaymentMethodData
      }
    | undefined
}
type AuthenticationSyncResponse = {
  authentication_id: string
  merchant_id: string
  status: AuthenticationStatus
  client_secret?: (string | null) | undefined
  amount: MinorUnit
  currency: Currency
  authentication_connector?: {} | undefined
  force_3ds_challenge?: (boolean | null) | undefined
  return_url?: (string | null) | undefined
  created_at: string
  profile_id: string
  psd2_sca_exemption_type?: {} | undefined
  acquirer_details?:
    | {
        acquirer_bin?: (string | null) | undefined
        acquirer_merchant_id?: (string | null) | undefined
        merchant_country_code?: (string | null) | undefined
      }
    | undefined
  threeds_server_transaction_id?: (string | null) | undefined
  maximum_supported_3ds_version?: (string | null) | undefined
  connector_authentication_id?: (string | null) | undefined
  three_ds_method_data?: (string | null) | undefined
  three_ds_method_url?: (string | null) | undefined
  message_version?: (string | null) | undefined
  connector_metadata?: ({ [x: string]: unknown } | null) | undefined
  directory_server_id?: (string | null) | undefined
  payment_method_data?: {} | undefined
  vault_token_data?: {} | undefined
  authentication_details?:
    | {
        three_ds_data?:
          | {
              authentication_cryptogram?: {} | undefined
              ds_trans_id?: (string | null) | undefined
              version?: (string | null) | undefined
              eci?: (string | null) | undefined
              transaction_status: TransactionStatus
            }
          | undefined
      }
    | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  browser_information?:
    | {
        color_depth?: (number | null) | undefined
        java_enabled?: (boolean | null) | undefined
        java_script_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        screen_height?: (number | null) | undefined
        screen_width?: (number | null) | undefined
        time_zone?: (number | null) | undefined
        ip_address?: (string | null) | undefined
        accept_header?: (string | null) | undefined
        user_agent?: (string | null) | undefined
        os_type?: (string | null) | undefined
        os_version?: (string | null) | undefined
        device_model?: (string | null) | undefined
        accept_language?: (string | null) | undefined
        referer?: (string | null) | undefined
      }
    | undefined
  email?: (string | null) | undefined
  trans_status?: {} | undefined
  acs_url?: (string | null) | undefined
  challenge_request?: (string | null) | undefined
  acs_reference_number?: (string | null) | undefined
  acs_trans_id?: (string | null) | undefined
  acs_signed_content?: (string | null) | undefined
  three_ds_requestor_url?: (string | null) | undefined
  three_ds_requestor_app_url?: (string | null) | undefined
  eci?: (string | null) | undefined
  error_message?: (string | null) | undefined
  error_code?: (string | null) | undefined
  profile_acquirer_id?: (string | null) | undefined
}
type AuthenticationSessionTokenRequest = { client_secret: string }
type AuthenticationSessionToken =
  | {
      dpa_id: string
      dpa_name: string
      locale: string
      card_brands: CardNetwork[]
      acquirer_bin: string
      acquirer_merchant_id: string
      merchant_category_code?: (string | null) | undefined
      merchant_country_code: string
      transaction_amount: string
      transaction_currency_code: Currency
      phone_number?: (string | null) | undefined
      email?: (string | null) | undefined
      phone_country_code?: (string | null) | undefined
      provider?: {} | undefined
      dpa_client_id?: (string | null) | undefined
      wallet_name: 'click_to_pay'
    }
  | { wallet_name: 'no_session_token_received' }
type AuthenticationSessionResponse = {
  authentication_id: string
  session_token: AuthenticationSessionToken[]
}
type ClickToPayEligibilityCheckData = {
  visa?:
    | {
        consumerPresent: boolean
        consumerStatus?: (string | null) | undefined
        customData?:
          | {
              color_depth?: (number | null) | undefined
              java_enabled?: (boolean | null) | undefined
              java_script_enabled?: (boolean | null) | undefined
              language?: (string | null) | undefined
              screen_height?: (number | null) | undefined
              screen_width?: (number | null) | undefined
              time_zone?: (number | null) | undefined
              ip_address?: (string | null) | undefined
              accept_header?: (string | null) | undefined
              user_agent?: (string | null) | undefined
              os_type?: (string | null) | undefined
              os_version?: (string | null) | undefined
              device_model?: (string | null) | undefined
              accept_language?: (string | null) | undefined
              referer?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  mastercard?:
    | {
        consumerPresent: boolean
        idLookupSessionId?: (string | null) | undefined
        lastUsedCardTimestamp?: (string | null) | undefined
      }
    | undefined
}
type AuthenticationEligibilityCheckData = { click_to_pay: ClickToPayEligibilityCheckData }
type AuthenticationEligibilityCheckRequest = {
  client_secret?: (string | null) | undefined
  eligibility_check_data: AuthenticationEligibilityCheckData
}
type AuthenticationSdkNextAction =
  | 'await_merchant_callback'
  | { deny: { message: string } }
  | 'proceed'
type AuthenticationEligibilityCheckResponse = {
  authentication_id: string
  sdk_next_action: AuthenticationSdkNextAction
}
type AuthenticationRetrieveEligibilityCheckRequest = { [x: string]: unknown }
type ClickToPayEligibilityCheckResponseData = {
  visa?: (boolean | null) | undefined
  mastercard?: (boolean | null) | undefined
}
type AuthenticationEligibilityCheckResponseData = {
  click_to_pay_enrollment_status: ClickToPayEligibilityCheckResponseData
}
type AuthenticationRetrieveEligibilityCheckResponse = {
  eligibility_check_data: AuthenticationEligibilityCheckResponseData
}
type PlatformAccountCreateRequest = { organization_name: string }
type OrganizationType = 'standard' | 'platform'
type PlatformAccountCreateResponse = {
  org_id: string
  org_name?: (string | null) | undefined
  org_type: OrganizationType
  merchant_id: string
  merchant_account_type: MerchantAccountType
}
type CustomerId = string
type PaymentDetails = {
  payment_method?: {} | undefined
  payment_method_type?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  setup_future_usage?: {} | undefined
  customer_acceptance?:
    | {
        acceptance_type: AcceptanceType
        accepted_at?: (string | null) | undefined
        online?: { ip_address: string; user_agent: string } | undefined
      }
    | undefined
  return_url?: (string | null) | undefined
  capture_method?: {} | undefined
  authentication_type?: {} | undefined
  payment_type?: {} | undefined
  payment_method_id?: (string | null) | undefined
}
type CreateAndConfirmSubscriptionRequest = {
  plan_id?: (string | null) | undefined
  item_price_id: string
  coupon_code?: (string | null) | undefined
  customer_id: CustomerId
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  payment_details: PaymentDetails
  merchant_reference_id?: (string | null) | undefined
}
type SubscriptionId = string
type SubscriptionStatus =
  | 'active'
  | 'created'
  | 'in_active'
  | 'pending'
  | 'trial'
  | 'paused'
  | 'unpaid'
  | 'onetime'
  | 'cancelled'
  | 'failed'
type ProfileId = string
type MerchantId = string
type PaymentId = string
type InvoiceId = string
type MerchantConnectorAccountId = string
type SubscriptionResponse = {
  id: SubscriptionId
  merchant_reference_id?: (string | null) | undefined
  status: SubscriptionStatus
  plan_id?: (string | null) | undefined
  item_price_id?: (string | null) | undefined
  profile_id: ProfileId
  client_secret?: (string | null) | undefined
  merchant_id: MerchantId
  coupon_code?: (string | null) | undefined
  customer_id: CustomerId
  payment?:
    | {
        payment_id: PaymentId
        status: IntentStatus
        amount: MinorUnit
        currency: Currency
        profile_id?: {} | undefined
        connector?: (string | null) | undefined
        payment_method_id?: (string | null) | undefined
        return_url?: (string | null) | undefined
        next_action?: {} | undefined
        payment_experience?: {} | undefined
        error_code?: (string | null) | undefined
        error_message?: (string | null) | undefined
        payment_method_type?: {} | undefined
        client_secret?: (string | null) | undefined
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
        shipping?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
        payment_type?: {} | undefined
        payment_token?: (string | null) | undefined
      }
    | undefined
  invoice?:
    | {
        id: InvoiceId
        subscription_id: SubscriptionId
        merchant_id: MerchantId
        profile_id: ProfileId
        merchant_connector_id: MerchantConnectorAccountId
        payment_intent_id?: {} | undefined
        payment_method_id?: (string | null) | undefined
        customer_id: CustomerId
        amount: MinorUnit
        currency: Currency
        status: InvoiceStatus
        billing_processor_invoice_id?: (string | null) | undefined
      }
    | undefined
}
type CreateSubscriptionPaymentDetails = {
  return_url: string
  setup_future_usage?: {} | undefined
  capture_method?: {} | undefined
  authentication_type?: {} | undefined
  payment_type?: {} | undefined
}
type CreateSubscriptionRequest = {
  merchant_reference_id?: (string | null) | undefined
  item_price_id: string
  plan_id?: (string | null) | undefined
  coupon_code?: (string | null) | undefined
  customer_id: CustomerId
  payment_details: CreateSubscriptionPaymentDetails
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
}
type ConfirmSubscriptionPaymentDetails = {
  shipping?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  billing?:
    | {
        address?:
          | {
              city?: (string | null) | undefined
              country?: {} | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              line3?: (string | null) | undefined
              zip?: (string | null) | undefined
              state?: (string | null) | undefined
              first_name?: (string | null) | undefined
              last_name?: (string | null) | undefined
              origin_zip?: (string | null) | undefined
            }
          | undefined
        phone?:
          | { number?: (string | null) | undefined; country_code?: (string | null) | undefined }
          | undefined
        email?: (string | null) | undefined
      }
    | undefined
  payment_method: PaymentMethod
  payment_method_type?: {} | undefined
  payment_method_data?:
    | {
        billing?:
          | {
              address?:
                | {
                    city?: (string | null) | undefined
                    country?: {} | undefined
                    line1?: (string | null) | undefined
                    line2?: (string | null) | undefined
                    line3?: (string | null) | undefined
                    zip?: (string | null) | undefined
                    state?: (string | null) | undefined
                    first_name?: (string | null) | undefined
                    last_name?: (string | null) | undefined
                    origin_zip?: (string | null) | undefined
                  }
                | undefined
              phone?:
                | {
                    number?: (string | null) | undefined
                    country_code?: (string | null) | undefined
                  }
                | undefined
              email?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  customer_acceptance?:
    | {
        acceptance_type: AcceptanceType
        accepted_at?: (string | null) | undefined
        online?: { ip_address: string; user_agent: string } | undefined
      }
    | undefined
  payment_type?: {} | undefined
  payment_token?: (string | null) | undefined
}
type ConfirmSubscriptionRequest = {
  client_secret?: (string | null) | undefined
  payment_details: ConfirmSubscriptionPaymentDetails
}
type UpdateSubscriptionRequest = { plan_id: string; item_price_id: string }
type SubscriptionItemType = 'plan' | 'addon'
type PeriodUnit = 'Day' | 'Week' | 'Month' | 'Year'
type SubscriptionItemPrices = {
  price_id: string
  item_id?: (string | null) | undefined
  amount: MinorUnit
  currency: Currency
  interval: PeriodUnit
  interval_count: bigint
  trial_period?: (bigint | null) | undefined
  trial_period_unit?: {} | undefined
}
type GetSubscriptionItemsResponse = {
  item_id: string
  name: string
  description?: (string | null) | undefined
  price_id: SubscriptionItemPrices[]
}
type SubscriptionLineItem = {
  item_id: string
  item_type: string
  description: string
  amount: MinorUnit
  currency: Currency
  quantity: bigint
}
type EstimateSubscriptionResponse = {
  amount: MinorUnit
  currency: Currency
  plan_id?: (string | null) | undefined
  item_price_id?: (string | null) | undefined
  coupon_code?: (string | null) | undefined
  customer_id?: {} | undefined
  line_items: SubscriptionLineItem[]
}
type PauseSubscriptionRequest = {
  pause_option?: {} | undefined
  pause_at?: (string | null) | undefined
}
type PauseSubscriptionResponse = {
  id: SubscriptionId
  status: SubscriptionStatus
  merchant_reference_id?: (string | null) | undefined
  profile_id: ProfileId
  merchant_id: MerchantId
  customer_id: CustomerId
  paused_at?: (string | null) | undefined
}
type ResumeSubscriptionRequest = {
  resume_option?: {} | undefined
  resume_date?: (string | null) | undefined
  charges_handling?: {} | undefined
  unpaid_invoices_handling?: {} | undefined
}
type ResumeSubscriptionResponse = {
  id: SubscriptionId
  status: SubscriptionStatus
  merchant_reference_id?: (string | null) | undefined
  profile_id: ProfileId
  merchant_id: MerchantId
  customer_id: CustomerId
  next_billing_at?: (string | null) | undefined
}
type CancelSubscriptionRequest = {
  cancel_option?: {} | undefined
  cancel_at?: (string | null) | undefined
  unbilled_charges_option?: {} | undefined
  credit_option_for_current_term_charges?: {} | undefined
  account_receivables_handling?: {} | undefined
  refundable_credits_handling?: {} | undefined
  cancel_reason_code?: (string | null) | undefined
}
type CancelSubscriptionResponse = {
  id: SubscriptionId
  status: SubscriptionStatus
  merchant_reference_id?: (string | null) | undefined
  profile_id: ProfileId
  merchant_id: MerchantId
  customer_id: CustomerId
  cancelled_at?: (string | null) | undefined
}
type CardIssuerRequest = { issuer_name: string }
type CardIssuerResponse = { id: string; issuer_name: string }
type CardIssuerListResponse = { issuers: CardIssuerResponse[] }
type CardIssuerUpdateRequest = { issuer_name: string }
type CardIssuerDeleteResponse = { id: string; deleted: boolean }
type TwilioPayMethod = 'charge' | 'tokenize'
type TwilioGenericPayRequest = {
  method: TwilioPayMethod
  transaction_id: string
  cardnumber?: (string | null) | undefined
  cvv?: (string | null) | undefined
  expiry_month?: (string | null) | undefined
  expiry_year?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  bankaccountnumber?: (string | null) | undefined
  routingnumber?: (string | null) | undefined
  amount?: (string | null) | undefined
  currency_code?: {} | undefined
  description?: (string | null) | undefined
  parameters?: ({ [x: string]: unknown } | null) | undefined
}
type TwilioGenericPayResponse = {
  charge_id?: (string | null) | undefined
  error_code?: (string | null) | undefined
  error_message?: (string | null) | undefined
  parameters: { [x: string]: unknown }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/payments': {
      $post:
        | {
            input: {
              header: {
                'X-Integration-Type'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: PaymentsCreateRequest }
            output: PaymentsCreateResponseOpenApi
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Integration-Type'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: PaymentsCreateRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: {
                'X-Integration-Type'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: PaymentsUpdateRequest }
            output: PaymentsCreateResponseOpenApi
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: {
                'X-Integration-Type'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: PaymentsUpdateRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { payment_id: string } } & {
              query: {
                force_sync?: (boolean | null) | undefined
                client_secret?: (string | null) | undefined
                expand_attempts?: (boolean | null) | undefined
                expand_captures?: (boolean | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: PaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              query: {
                force_sync?: (boolean | null) | undefined
                client_secret?: (string | null) | undefined
                expand_attempts?: (boolean | null) | undefined
                expand_captures?: (boolean | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payments/:payment_id/confirm': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsConfirmRequest }
            output: PaymentsCreateResponseOpenApi
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsConfirmRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/capture': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCaptureRequest }
            output: PaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCaptureRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCaptureRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payments/session_tokens': {
      $post:
        | {
            input: { json: PaymentsSessionRequest }
            output: PaymentsSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentsSessionRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/cancel': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCancelRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCancelRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCancelRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payments/:payment_id/cancel_post_capture': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCancelPostCaptureRequest }
            output: PaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsCancelPostCaptureRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: PaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/extend_authorization': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/list': {
      $get:
        | {
            input: {
              query: {
                customer_id?: (string | null) | undefined
                starting_after?: (string | null) | undefined
                ending_before?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                created?: (string | null) | undefined
                created_lt?: (string | null) | undefined
                created_gt?: (string | null) | undefined
                created_lte?: (string | null) | undefined
                created_gte?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: PaymentListResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                customer_id?: (string | null) | undefined
                starting_after?: (string | null) | undefined
                ending_before?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                created?: (string | null) | undefined
                created_lt?: (string | null) | undefined
                created_gt?: (string | null) | undefined
                created_lte?: (string | null) | undefined
                created_gte?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payments/:payment_id/incremental_authorization': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsIncrementalAuthorizationRequest }
            output: PaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsIncrementalAuthorizationRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payment_link/:payment_link_id': {
      $get:
        | {
            input: { param: { payment_link_id: string } } & {
              query: { client_secret?: (string | null) | undefined }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: RetrievePaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_link_id: string } } & {
              query: { client_secret?: (string | null) | undefined }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payment_link/list': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: PaymentLinkListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_link/profile/list': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: PaymentLinkListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: PaymentLinkListConstraints
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payments/:payment_id/3ds/authentication': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              json: PaymentsExternalAuthenticationRequest
            }
            output: PaymentsExternalAuthenticationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              json: PaymentsExternalAuthenticationRequest
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/complete_authorize': {
      $post:
        | {
            input: { param: { payment_id: string } } & { json: PaymentsCompleteAuthorizeRequest }
            output: PaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & { json: PaymentsCompleteAuthorizeRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/post_session_tokens': {
      $post:
        | {
            input: { param: { payment_id: string } } & { json: PaymentsPostSessionTokensRequest }
            output: PaymentsPostSessionTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & { json: PaymentsPostSessionTokensRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/update_metadata': {
      $post:
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsUpdateMetadataRequest }
            output: PaymentsUpdateMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: PaymentsUpdateMetadataRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/eligibility_check': {
      $post:
        | {
            input: { param: { payment_id: string } } & { json: PaymentsEligibilityCheckRequest }
            output: PaymentsEligibilityCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & { json: PaymentsEligibilityCheckRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/payments/:payment_id/eligibility': {
      $post:
        | {
            input: { param: { payment_id: string } } & { json: PaymentsEligibilityRequest }
            output: PaymentsEligibilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & { json: PaymentsEligibilityRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_id: string } } & { json: PaymentsEligibilityRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/relay': {
      $post:
        | {
            input: {
              header: {
                'X-Profile-Id': string
                'X-Idempotency-Key': string
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: RelayRequest }
            output: RelayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Profile-Id': string
                'X-Idempotency-Key': string
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: RelayRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/relay/:relay_id': {
      $get:
        | {
            input: { param: { relay_id: string } } & {
              header: {
                'X-Profile-Id': string
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: RelayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { relay_id: string } } & {
              header: {
                'X-Profile-Id': string
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/refunds': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RefundRequest
            }
            output: RefundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RefundRequest
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/refunds/:refund_id': {
      $get:
        | {
            input: { param: { refund_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: RefundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { refund_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { refund_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RefundUpdateRequest }
            output: RefundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { refund_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RefundUpdateRequest }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/refunds/list': {
      $post: {
        input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
          json: RefundListRequest
        }
        output: RefundListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization': {
      $post:
        | {
            input: { json: OrganizationCreateRequest }
            output: OrganizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/organization/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OrganizationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
      $put:
        | {
            input: { param: { id: string } } & { json: OrganizationUpdateRequest }
            output: OrganizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OrganizationUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/accounts': {
      $post:
        | {
            input: { json: MerchantAccountCreate }
            output: MerchantAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MerchantAccountCreate }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/accounts/:account_id': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: MerchantAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: string } } & { json: MerchantAccountUpdate }
            output: MerchantAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: MerchantAccountUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { account_id: string } }
            output: MerchantAccountDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/accounts/:account_id/kv': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: ToggleKVRequest }
            output: ToggleKVResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: ToggleKVRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: ToggleKVRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/account/:account_id/connectors': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: MerchantConnectorCreate }
            output: MerchantConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: MerchantConnectorCreate }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { account_id: string } }
            output: MerchantConnectorListResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/account/:account_id/connectors/:merchant_connector_id': {
      $get:
        | {
            input: { param: { account_id: string; merchant_connector_id: string } }
            output: MerchantConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: string; merchant_connector_id: string } } & {
              json: MerchantConnectorUpdate
            }
            output: MerchantConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } } & {
              json: MerchantConnectorUpdate
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } } & {
              json: MerchantConnectorUpdate
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { account_id: string; merchant_connector_id: string } }
            output: MerchantConnectorDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/account/:account_id/webhooks/:merchant_connector_id': {
      $post:
        | {
            input: { param: { account_id: string; merchant_connector_id: string } } & {
              json: ConnectorWebhookRegisterRequest
            }
            output: RegisterConnectorWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; merchant_connector_id: string } } & {
              json: ConnectorWebhookRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/gsm': {
      $post:
        | {
            input: { json: GsmCreateRequest }
            output: GsmResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GsmCreateRequest }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/gsm/get': {
      $post:
        | {
            input: { json: GsmRetrieveRequest }
            output: GsmResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GsmRetrieveRequest }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/gsm/update': {
      $post:
        | {
            input: { json: GsmUpdateRequest }
            output: GsmResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GsmUpdateRequest }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/gsm/delete': {
      $post:
        | {
            input: { json: GsmDeleteRequest }
            output: GsmDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GsmDeleteRequest }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mandates/:mandate_id': {
      $get:
        | {
            input: { param: { mandate_id: string } }
            output: MandateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandate_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mandates/revoke/:mandate_id': {
      $post:
        | {
            input: { param: { mandate_id: string } }
            output: MandateRevokedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandate_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/customers/:customer_id/mandates': {
      $get:
        | {
            input: { param: { customer_id: string } }
            output: MandateResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/customers': {
      $post:
        | {
            input: { json: CustomerRequest }
            output: CustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CustomerRequest }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/customers/:customer_id': {
      $get:
        | {
            input: { param: { customer_id: string } }
            output: CustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { customer_id: string } } & { json: CustomerUpdateRequest }
            output: CustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } } & { json: CustomerUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { customer_id: string } }
            output: CustomerDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/customers/reference/:merchant_reference_id': {
      $get:
        | {
            input: { param: { merchant_reference_id: string } }
            output: CustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchant_reference_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/customers/list': {
      $get:
        | {
            input: {
              query: { offset?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: CustomerResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { offset?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/payment_methods': {
      $post:
        | {
            input: { json: PaymentMethodCreate }
            output: PaymentMethodResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PaymentMethodCreate }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/account/payment_methods': {
      $get:
        | {
            input: {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: PaymentMethodListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/customers/:customer_id/payment_methods': {
      $get:
        | {
            input: { param: { customer_id: string } } & {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: CustomerPaymentMethodsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } } & {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { customer_id: string } } & {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/customers/payment_methods': {
      $get:
        | {
            input: {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: CustomerPaymentMethodsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payments/:payment_id/client': {
      $get:
        | {
            input: { param: { payment_id: string } } & {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: ClientPaymentMethodsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_id: string } } & {
              query: {
                client_secret?: (string | null) | undefined
                accepted_countries?: (CountryAlpha2[] | null) | undefined
                accepted_currencies?: (Currency[] | null) | undefined
                amount?: (bigint | null) | undefined
                recurring_enabled?: (boolean | null) | undefined
                installment_payment_enabled?: (boolean | null) | undefined
                limit?: (bigint | null) | undefined
                card_networks?: (CardNetwork[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:customer_id/payment_methods/:payment_method_id/default': {
      $post:
        | {
            input: { param: { customer_id: string; payment_method_id: string } }
            output: CustomerDefaultPaymentMethodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payment_methods/:method_id': {
      $get:
        | {
            input: { param: { method_id: string } }
            output: PaymentMethodResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { method_id: string } }; output: {}; outputFormat: string; status: 404 }
      $delete:
        | {
            input: { param: { method_id: string } }
            output: PaymentMethodDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { method_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/payment_methods/:method_id/update': {
      $post:
        | {
            input: { param: { method_id: string } } & { json: PaymentMethodUpdate }
            output: PaymentMethodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { method_id: string } } & { json: PaymentMethodUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/account/:account_id/business_profile': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: ProfileCreate }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: ProfileCreate }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { account_id: string } }
        output: ProfileResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/business_profile/:profile_id': {
      $get:
        | {
            input: { param: { account_id: string; profile_id: string } }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { account_id: string; profile_id: string } } & { json: ProfileCreate }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & { json: ProfileCreate }
            output: {}
            outputFormat: string
            status: 400
          }
      $delete:
        | {
            input: { param: { account_id: string; profile_id: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/disputes/:dispute_id': {
      $get:
        | {
            input: { param: { dispute_id: string } } & {
              query: { force_sync?: (boolean | null) | undefined }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: DisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_id: string } } & {
              query: { force_sync?: (boolean | null) | undefined }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/disputes/list': {
      $get:
        | {
            input: {
              query: {
                limit?: (bigint | null) | undefined
                dispute_status?: {} | undefined
                dispute_stage?: {} | undefined
                reason?: (string | null) | undefined
                connector?: (string | null) | undefined
                received_time?: (string | null) | undefined
                'received_time.lt'?: (string | null) | undefined
                'received_time.gt'?: (string | null) | undefined
                'received_time.lte'?: (string | null) | undefined
                'received_time.gte'?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: DisputeResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (bigint | null) | undefined
                dispute_status?: {} | undefined
                dispute_stage?: {} | undefined
                reason?: (string | null) | undefined
                connector?: (string | null) | undefined
                received_time?: (string | null) | undefined
                'received_time.lt'?: (string | null) | undefined
                'received_time.gt'?: (string | null) | undefined
                'received_time.lte'?: (string | null) | undefined
                'received_time.gte'?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/disputes/profile/list': {
      $get:
        | {
            input: {
              query: {
                limit?: (bigint | null) | undefined
                dispute_status?: {} | undefined
                dispute_stage?: {} | undefined
                reason?: (string | null) | undefined
                connector?: (string | null) | undefined
                received_time?: (string | null) | undefined
                'received_time.lt'?: (string | null) | undefined
                'received_time.gt'?: (string | null) | undefined
                'received_time.lte'?: (string | null) | undefined
                'received_time.gte'?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: DisputeResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (bigint | null) | undefined
                dispute_status?: {} | undefined
                dispute_stage?: {} | undefined
                reason?: (string | null) | undefined
                connector?: (string | null) | undefined
                received_time?: (string | null) | undefined
                'received_time.lt'?: (string | null) | undefined
                'received_time.gt'?: (string | null) | undefined
                'received_time.lte'?: (string | null) | undefined
                'received_time.gte'?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/disputes/filter': {
      $get: {
        input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
        output: DisputeListFilters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disputes/profile/filter': {
      $get: {
        input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
        output: DisputeListFilters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disputes/accept/:dispute_id': {
      $post:
        | {
            input: { param: { dispute_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: DisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/disputes/evidence': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SubmitEvidenceRequest
            }
            output: DisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SubmitEvidenceRequest
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              form: string
            }
            output: CreateFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              form: string
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: DeleteEvidenceRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: DeleteEvidenceRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/disputes/evidence/:dispute_id': {
      $get:
        | {
            input: { param: { dispute_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: DisputeEvidenceBlock[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/disputes/aggregate': {
      $get: {
        input: { query: { start_time: string } } & {
          header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
        }
        output: DisputesAggregateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disputes/profile/aggregate': {
      $get: {
        input: { query: { start_time: string } } & {
          header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
        }
        output: DisputesAggregateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/routing': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
                profile_id?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: RoutingKind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
                profile_id?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
                profile_id?: (string | null) | undefined
              }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/:routing_algorithm_id/activate': {
      $post:
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/:routing_algorithm_id': {
      $get:
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: MerchantRoutingAlgorithm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { routing_algorithm_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/deactivate': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutingConfigRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/default': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutableConnectorChoice[]
            }
            output: RoutableConnectorChoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutableConnectorChoice[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutableConnectorChoice[]
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: RoutableConnectorChoice[]
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: RoutableConnectorChoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/active': {
      $get:
        | {
            input: { query: { profile_id?: (string | null) | undefined } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: LinkedRoutingConfigRetrieveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { profile_id?: (string | null) | undefined } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { profile_id?: (string | null) | undefined } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { profile_id?: (string | null) | undefined } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/default/profile': {
      $get:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: ProfileDefaultRoutingConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/routing/default/profile/:profile_id': {
      $post:
        | {
            input: { param: { profile_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RoutableConnectorChoice[] }
            output: ProfileDefaultRoutingConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profile_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RoutableConnectorChoice[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { profile_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RoutableConnectorChoice[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { profile_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RoutableConnectorChoice[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { profile_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RoutableConnectorChoice[] }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { profile_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: RoutableConnectorChoice[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/success_based/toggle': {
      $post:
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/elimination/toggle': {
      $post:
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/success_based/create': {
      $post:
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SuccessBasedRoutingConfig
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SuccessBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SuccessBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SuccessBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SuccessBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: SuccessBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/elimination/create': {
      $post:
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: EliminationRoutingConfig
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: EliminationRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: EliminationRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: EliminationRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: EliminationRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: EliminationRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/contracts/toggle': {
      $post:
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ContractBasedRoutingConfig
            }
            output: RoutingDictionaryRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ContractBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ContractBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ContractBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ContractBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account_id: string; profile_id: string } } & {
              query: { enable: DynamicRoutingFeatures }
            } & { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ContractBasedRoutingConfig
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/offer_engine/offers/list': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: BrowseOffersRequest
            }
            output: BrowseOffersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: BrowseOffersRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/blocklist': {
      $delete:
        | {
            input: {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: BlocklistEntryRequest }
            output: BlocklistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: BlocklistEntryRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: BlocklistEntryRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: {
              query: { data_kind: BlocklistDataKind; transaction_type?: {} | undefined }
            } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: BlocklistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { data_kind: BlocklistDataKind; transaction_type?: {} | undefined }
            } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: BlocklistEntryRequest }
            output: BlocklistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { json: BlocklistEntryRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/blocklist/toggle': {
      $post:
        | {
            input: { query: { status: boolean } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: ToggleBlocklistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { status: boolean } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/blocklist/count': {
      $get:
        | {
            input: {
              query: { data_kind: BlocklistDataKind; transaction_type?: {} | undefined }
            } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: BlocklistCountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { data_kind: BlocklistDataKind; transaction_type?: {} | undefined }
            } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/blocklist/lookup': {
      $get:
        | {
            input: { query: { data: string; transaction_type?: {} | undefined } } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: BlocklistLookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { data: string; transaction_type?: {} | undefined } } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/blocklist/batch': {
      $post:
        | {
            input: { query: { transaction_type?: {} | undefined } } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { form: string }
            output: BatchBlocklistUploadResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { transaction_type?: {} | undefined } } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            } & { form: string }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: {
          query: {
            limit?: (number | null) | undefined
            offset?: (number | null) | undefined
            job_type?: {} | undefined
          }
        } & {
          header: {
            'X-Profile-Id'?: (string | null) | undefined
            'X-Connected-Merchant-Id'?: (string | null) | undefined
          }
        }
        output: ListBatchBlocklistJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/blocklist/batch/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: BatchBlocklistJobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/blocklist/export': {
      $post:
        | {
            input: { query: { transaction_type?: {} | undefined } } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: BlocklistExportResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { transaction_type?: {} | undefined } } & {
              header: {
                'X-Profile-Id'?: (string | null) | undefined
                'X-Connected-Merchant-Id'?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/blocklist/clone': {
      $post:
        | {
            input: { header: { 'X-Profile-Id'?: (string | null) | undefined } } & {
              json: CloneBlocklistEntriesRequest
            }
            output: CloneBlocklistEntriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Profile-Id'?: (string | null) | undefined } } & {
              json: CloneBlocklistEntriesRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Profile-Id'?: (string | null) | undefined } } & {
              json: CloneBlocklistEntriesRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payouts/create': {
      $post:
        | {
            input: { json: PayoutsCreateRequest }
            output: PayoutCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PayoutsCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PayoutsCreateRequest }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: PayoutsCreateRequest }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/payouts/:payout_id': {
      $get:
        | {
            input: { param: { payout_id: string } } & {
              query: { force_sync?: (boolean | null) | undefined }
            }
            output: PayoutCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_id: string } } & {
              query: { force_sync?: (boolean | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { payout_id: string } } & { json: PayoutUpdateRequest }
            output: PayoutCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_id: string } } & { json: PayoutUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payout_id: string } } & { json: PayoutUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payouts/:payout_id/cancel': {
      $post:
        | {
            input: { param: { payout_id: string } } & { json: PayoutCancelRequest }
            output: PayoutCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_id: string } } & { json: PayoutCancelRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/payouts/:payout_id/fulfill': {
      $post:
        | {
            input: { param: { payout_id: string } } & { json: PayoutFulfillRequest }
            output: PayoutCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_id: string } } & { json: PayoutFulfillRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/payouts/list': {
      $get:
        | {
            input: {
              query: {
                customer_id: string
                starting_after: string
                ending_before: string
                limit: string
                created: string
                time_range: string
              }
            }
            output: PayoutListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                customer_id: string
                starting_after: string
                ending_before: string
                limit: string
                created: string
                time_range: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: PayoutListFilterConstraints }
            output: PayoutListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PayoutListFilterConstraints }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payouts/:payout_id/confirm': {
      $post:
        | {
            input: { param: { payout_id: string } } & { json: PayoutConfirmRequest }
            output: PayoutCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_id: string } } & { json: PayoutConfirmRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payout_id: string } } & { json: PayoutConfirmRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/payouts/filter': {
      $post: {
        input: { json: TimeRange }
        output: PayoutListFilters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api_keys/:merchant_id': {
      $post:
        | {
            input: { param: { merchant_id: string } } & { json: CreateApiKeyRequest }
            output: CreateApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchant_id: string } } & { json: CreateApiKeyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api_keys/:merchant_id/:key_id': {
      $get:
        | {
            input: { param: { merchant_id: string; key_id: string } }
            output: RetrieveApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchant_id: string; key_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { merchant_id: string; key_id: string } } & {
              json: UpdateApiKeyRequest
            }
            output: RetrieveApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchant_id: string; key_id: string } } & {
              json: UpdateApiKeyRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { merchant_id: string; key_id: string } }
            output: RevokeApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchant_id: string; key_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api_keys/:merchant_id/list': {
      $get: {
        input: { param: { merchant_id: string } } & {
          query: { limit?: (bigint | null) | undefined; skip?: (bigint | null) | undefined }
        }
        output: RetrieveApiKeyResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/:merchant_id': {
      $post: {
        input: { param: { merchant_id: string } } & { json: EventListConstraints }
        output: TotalEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/profile/list': {
      $post: {
        input: { json: EventListConstraints }
        output: TotalEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/:merchant_id/:event_id/attempts': {
      $get: {
        input: { param: { merchant_id: string; event_id: string } }
        output: EventRetrieveResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/:merchant_id/:event_id/retry': {
      $post: {
        input: { param: { merchant_id: string; event_id: string } }
        output: EventRetrieveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/poll/status/:poll_id': {
      $get:
        | {
            input: { param: { poll_id: string } }
            output: PollResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { poll_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/profile_acquirers': {
      $post:
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ProfileAcquirerCreate
            }
            output: ProfileAcquirerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined } } & {
              json: ProfileAcquirerCreate
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/profile_acquirers/:profile_id/:profile_acquirer_id': {
      $post:
        | {
            input: { param: { profile_id: string; profile_acquirer_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: ProfileAcquirerUpdate }
            output: ProfileAcquirerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profile_id: string; profile_acquirer_id: string } } & {
              header: { 'X-Connected-Merchant-Id'?: (string | null) | undefined }
            } & { json: ProfileAcquirerUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/three_ds_decision/execute': {
      $post:
        | {
            input: { json: ThreeDsDecisionRuleExecuteRequest }
            output: ThreeDsDecisionRuleExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ThreeDsDecisionRuleExecuteRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/authentication': {
      $post:
        | {
            input: { json: AuthenticationCreateRequest }
            output: AuthenticationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthenticationCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/authentication/:authentication_id/eligibility': {
      $post:
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationEligibilityRequest
            }
            output: AuthenticationEligibilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationEligibilityRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationEligibilityRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/authentication/:authentication_id/authenticate': {
      $post:
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationAuthenticateRequest
            }
            output: AuthenticationAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationAuthenticateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/authentication/:authentication_id/redirect': {
      $post:
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationSyncPostUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationSyncPostUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/authentication/:authentication_id/sync': {
      $post:
        | {
            input: { param: { authentication_id: string } } & { json: AuthenticationSyncRequest }
            output: AuthenticationSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & { json: AuthenticationSyncRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/authentication/:authentication_id/enabled_authn_methods_token': {
      $post:
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationSessionTokenRequest
            }
            output: AuthenticationSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationSessionTokenRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/authentication/:authentication_id/eligibility-check': {
      $post:
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationEligibilityCheckRequest
            }
            output: AuthenticationEligibilityCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationEligibilityCheckRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get:
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationRetrieveEligibilityCheckRequest
            }
            output: AuthenticationRetrieveEligibilityCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authentication_id: string } } & {
              json: AuthenticationRetrieveEligibilityCheckRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/user/create_platform': {
      $post:
        | {
            input: { json: PlatformAccountCreateRequest }
            output: PlatformAccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PlatformAccountCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/subscriptions': {
      $post:
        | {
            input: { header: { 'X-Profile-Id': string } } & {
              json: CreateAndConfirmSubscriptionRequest
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Profile-Id': string } } & {
              json: CreateAndConfirmSubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Profile-Id': string } } & {
              json: CreateAndConfirmSubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/create': {
      $post:
        | {
            input: { header: { 'X-Profile-Id': string } } & { json: CreateSubscriptionRequest }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Profile-Id': string } } & { json: CreateSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Profile-Id': string } } & { json: CreateSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscription_id/confirm': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ConfirmSubscriptionRequest }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ConfirmSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ConfirmSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ConfirmSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/subscriptions/:subscription_id': {
      $get:
        | {
            input: { param: { subscription_id: string } } & { header: { 'X-Profile-Id': string } }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { header: { 'X-Profile-Id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscription_id/update': {
      $put:
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: UpdateSubscriptionRequest }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: UpdateSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: UpdateSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/items': {
      $get:
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
                product_id?: (string | null) | undefined
                item_type: SubscriptionItemType
              }
            } & { header: { 'X-Profile-Id': string } }
            output: GetSubscriptionItemsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                offset?: (number | null) | undefined
                product_id?: (string | null) | undefined
                item_type: SubscriptionItemType
              }
            } & { header: { 'X-Profile-Id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/subscriptions/estimate': {
      $get:
        | {
            input: {
              query: {
                plan_id: string
                customer_id?: (string | null) | undefined
                coupon_id?: (string | null) | undefined
                trial_days?: (number | null) | undefined
                client_secret?: (string | null) | undefined
              }
            } & { header: { 'X-Profile-Id': string } }
            output: EstimateSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                plan_id: string
                customer_id?: (string | null) | undefined
                coupon_id?: (string | null) | undefined
                trial_days?: (number | null) | undefined
                client_secret?: (string | null) | undefined
              }
            } & { header: { 'X-Profile-Id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                plan_id: string
                customer_id?: (string | null) | undefined
                coupon_id?: (string | null) | undefined
                trial_days?: (number | null) | undefined
                client_secret?: (string | null) | undefined
              }
            } & { header: { 'X-Profile-Id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscription_id/pause': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: PauseSubscriptionRequest }
            output: PauseSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: PauseSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: PauseSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscription_id/resume': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ResumeSubscriptionRequest }
            output: ResumeSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ResumeSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: ResumeSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/subscriptions/:subscription_id/cancel': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: CancelSubscriptionRequest }
            output: CancelSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: CancelSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: { 'X-Profile-Id': string }
            } & { json: CancelSubscriptionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/card_issuers': {
      $post:
        | {
            input: { json: CardIssuerRequest }
            output: CardIssuerResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CardIssuerRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CardIssuerRequest }; output: {}; outputFormat: string; status: 409 }
      $get: { input: {}; output: CardIssuerListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/card_issuers/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CardIssuerUpdateRequest }
            output: CardIssuerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CardIssuerUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CardIssuerUpdateRequest }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: CardIssuerDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/telephone_order/:merchant_id/:provider': {
      $post:
        | {
            input: { param: { merchant_id: string; provider: string } } & {
              json: TwilioGenericPayRequest
            }
            output: TwilioGenericPayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchant_id: string; provider: string } } & {
              json: TwilioGenericPayRequest
            }
            output: GenericErrorResponseOpenApi
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
