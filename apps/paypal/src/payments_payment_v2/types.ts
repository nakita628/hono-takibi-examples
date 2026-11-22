type StandardHeaderSchema = string
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
type Authorization_2 = {
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
    | { currency_code: CurrencyCode; value: string; breakdown?: AmountBreakdown | undefined }
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
        dispute_categories?: ('ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION')[] | undefined
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
  supplementary_data?:
    | {
        related_ids?:
          | {
              order_id?: string | undefined
              authorization_id?: string | undefined
              capture_id?: string | undefined
            }
          | undefined
      }
    | undefined
  payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
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
type CaptureRequest = {
  invoice_id?: string | undefined
  note_to_payer?: string | undefined
  amount?: { currency_code: CurrencyCode; value: string } | undefined
  final_capture?: boolean | undefined
  payment_instruction?:
    | {
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
    | undefined
  soft_descriptor?: string | undefined
}
type Capture_2 = {
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
    | { currency_code: CurrencyCode; value: string; breakdown?: AmountBreakdown | undefined }
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
        dispute_categories?: ('ITEM_NOT_RECEIVED' | 'UNAUTHORIZED_TRANSACTION')[] | undefined
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
        receivable_amount?: { currency_code: CurrencyCode; value: string } | undefined
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
              payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
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
  supplementary_data?:
    | {
        related_ids?:
          | {
              order_id?: string | undefined
              authorization_id?: string | undefined
              capture_id?: string | undefined
            }
          | undefined
      }
    | undefined
  payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
}
type ReauthorizeRequest = { amount?: { currency_code: CurrencyCode; value: string } | undefined }
type RefundRequest = {
  amount?: { currency_code: CurrencyCode; value: string } | undefined
  custom_id?: string | undefined
  invoice_id?: string | undefined
  note_to_payer?: string | undefined
  payment_instruction?:
    | {
        platform_fees?:
          | {
              amount: { currency_code: CurrencyCode; value: string }
              payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
            }[]
          | undefined
      }
    | undefined
}
type Refund = {
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
              payee?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
            }[]
          | undefined
        net_amount_breakdown?:
          | {
              payable_amount?: { currency_code: CurrencyCode; value: string } | undefined
              converted_amount?: { currency_code: CurrencyCode; value: string } | undefined
              exchange_rate?:
                | {
                    source_currency?: {} | undefined
                    target_currency?: {} | undefined
                    value?: string | undefined
                  }
                | undefined
            }[]
          | undefined
        total_refunded_amount?: { currency_code: CurrencyCode; value: string } | undefined
      }
    | undefined
  payer?: { email_address?: {} | undefined; merchant_id?: {} | undefined } | undefined
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
type Guid = string
type EmailAddress = string
type FindEligibleMethodsRequestCustomer = {
  country_code?: {} | undefined
  channel?:
    | {
        browser_type?: string | undefined
        client_os?: string | undefined
        device_type?: string | undefined
      }
    | undefined
  id?: string | undefined
  email?: EmailAddress | undefined
  phone?:
    | { country_code: string; national_number: string; extension_number?: string | undefined }
    | undefined
}
type AmountWithBreakdown = {
  currency_code: CurrencyCode
  value: string
  breakdown?: AmountBreakdown | undefined
}
type Payee = { email_address?: {} | undefined; merchant_id?: {} | undefined }
type EligibilityPurchaseUnitRequest = {
  amount?: AmountWithBreakdown | undefined
  payee?: Payee | undefined
}
type PaymentMethod = 'PAYPAL' | 'VENMO' | 'PAYPAL_CREDIT' | 'PAYPAL_PAY_LATER'
type FindEligibleMethodsRequestPreferences = {
  payment_flow?:
    | 'ONE_TIME_PAYMENT'
    | 'RECURRING_PAYMENT'
    | 'VAULT_WITH_PAYMENT'
    | 'VAULT_WITHOUT_PAYMENT'
    | undefined
  include_account_details?: boolean | undefined
  include_vault_tokens?: boolean | undefined
  payment_source_constraint?:
    | { constraint_type: 'INCLUDE' | 'EXCLUDE'; payment_sources: PaymentMethod[] }
    | undefined
}
type FindEligibleMethodsRequest = {
  customer?: FindEligibleMethodsRequestCustomer | undefined
  purchase_units?: EligibilityPurchaseUnitRequest[] | undefined
  preferences?: FindEligibleMethodsRequestPreferences | undefined
}
type PaymentMethodEligibleInPaypalNetwork = boolean
type VenmoPaymentTokenInfo = { user_name?: string | undefined }
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
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
}
type FindEligibleMethodsResponse = {
  eligible_methods?:
    | {
        paypal?:
          | {
              can_be_vaulted?: boolean | undefined
              country_code?: {} | undefined
              product_code?: {} | undefined
              eligible_in_paypal_network?: PaymentMethodEligibleInPaypalNetwork | undefined
              recommended?: boolean | undefined
              recommended_priority?: number | undefined
            }
          | undefined
        venmo?:
          | {
              can_be_vaulted?: boolean | undefined
              country_code?: {} | undefined
              product_code?: {} | undefined
              eligible_in_paypal_network?: PaymentMethodEligibleInPaypalNetwork | undefined
              recommended?: boolean | undefined
              recommended_priority?: number | undefined
            }
          | undefined
        paypal_credit?:
          | {
              can_be_vaulted?: boolean | undefined
              country_code?: {} | undefined
              product_code?: {} | undefined
            }
          | undefined
        paypal_pay_later?:
          | {
              can_be_vaulted?: boolean | undefined
              country_code?: {} | undefined
              product_code?: {} | undefined
            }
          | undefined
      }
    | undefined
  payment_tokens?:
    | {
        id?: string | undefined
        payment_source?:
          | {
              paypal?: { email_address?: {} | undefined; payer_id?: {} | undefined } | undefined
              venmo?: VenmoPaymentTokenInfo | undefined
            }
          | undefined
        links?: LinkDescription[] | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/payments/authorizations/:authorization_id': {
      $get:
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Authorization_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorization_id: string } } & {
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
            input: { param: { authorization_id: string } } & {
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
            input: { param: { authorization_id: string } } & {
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
            input: { param: { authorization_id: string } } & {
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
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/authorizations/:authorization_id/capture': {
      $post:
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Capture_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Capture_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: CaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/authorizations/:authorization_id/reauthorize': {
      $post:
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Authorization_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Authorization_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: ReauthorizeRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/authorizations/:authorization_id/void': {
      $post:
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Authorization_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { authorization_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/captures/:capture_id': {
      $get:
        | {
            input: { param: { capture_id: string } } & {
              header: { Authorization?: StandardHeaderSchema | undefined }
            }
            output: Capture_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { capture_id: string } } & {
              header: { Authorization?: StandardHeaderSchema | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { capture_id: string } } & {
              header: { Authorization?: StandardHeaderSchema | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { capture_id: string } } & {
              header: { Authorization?: StandardHeaderSchema | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { capture_id: string } } & {
              header: { Authorization?: StandardHeaderSchema | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { capture_id: string } } & {
              header: { Authorization?: StandardHeaderSchema | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/captures/:capture_id/refund': {
      $post:
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Refund
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Refund
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { capture_id: string } } & {
              header: {
                'PayPal-Request-Id'?: string | undefined
                Prefer?: string | undefined
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            } & { json: RefundRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/find-eligible-methods': {
      $post:
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: FindEligibleMethodsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
                'User-Agent'?: StandardHeaderSchema | undefined
                'PayPal-Client-Metadata-Id'?: Guid | undefined
              }
            } & { json: FindEligibleMethodsRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/payments/refunds/:refund_id': {
      $get:
        | {
            input: { param: { refund_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
            }
            output: Refund
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { refund_id: string } } & {
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
            input: { param: { refund_id: string } } & {
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
            input: { param: { refund_id: string } } & {
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
            input: { param: { refund_id: string } } & {
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
            input: { param: { refund_id: string } } & {
              header: {
                Authorization?: StandardHeaderSchema | undefined
                'PayPal-Auth-Assertion'?: string | undefined
              }
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
