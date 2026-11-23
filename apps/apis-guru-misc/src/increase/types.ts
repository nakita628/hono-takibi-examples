type AccountNumber = {
  account_id: string
  account_number: string
  created_at: string
  id: string
  name: string
  routing_number: string
  status: 'active' | 'disabled' | 'canceled'
  type: 'account_number'
}
type AccountNumberList = { data: AccountNumber[]; next_cursor: string | null }
type Error =
  | { detail: string | null; status: 404; title: string; type: 'api_method_not_found_error' }
  | { detail: string | null; status: 403; title: string; type: 'environment_mismatch_error' }
  | { detail: string | null; status: 409; title: string; type: 'idempotency_conflict_error' }
  | { detail: string | null; status: 422; title: string; type: 'idempotency_unprocessable_error' }
  | { detail: string | null; status: 403; title: string; type: 'insufficient_permissions_error' }
  | { detail: string | null; status: 500; title: string; type: 'internal_server_error' }
  | { detail: string | null; status: 401; title: string; type: 'invalid_api_key_error' }
  | { detail: string | null; status: 409; title: string; type: 'invalid_operation_error' }
  | {
      detail: string | null
      errors?: { [x: string]: unknown }[] | undefined
      status: 400
      title: string
      type: 'invalid_parameters_error'
    }
  | { detail: string | null; status: 400; title: string; type: 'malformed_request_error' }
  | { detail: string | null; status: 404; title: string; type: 'object_not_found_error' }
  | { detail: string | null; status: 403; title: string; type: 'private_feature_error' }
  | {
      detail: string | null
      retry_after?: (number | null) | undefined
      status: 429
      title: string
      type: 'rate_limited_error'
    }
type CreateAnAccountNumberParameters = { account_id: string; name: string }
type UpdateAnAccountNumberParameters = {
  name?: string | undefined
  status?: 'active' | 'disabled' | 'canceled' | undefined
}
type AccountStatement = {
  account_id: string
  created_at: string
  ending_balance: number
  file_id: string
  id: string
  starting_balance: number
  statement_period_end: string
  statement_period_start: string
  type: 'account_statement'
}
type AccountStatementList = { data: AccountStatement[]; next_cursor: string | null }
type AccountTransfer = {
  account_id: string
  amount: number
  approval: { approved_at: string } | null
  cancellation: { canceled_at: string } | null
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  description: string
  destination_account_id: string
  destination_transaction_id: string | null
  id: string
  network: 'account'
  status:
    | 'pending_submission'
    | 'pending_approval'
    | 'canceled'
    | 'requires_attention'
    | 'flagged_by_operator'
    | 'complete'
  template_id: string | null
  transaction_id: string | null
  type: 'account_transfer'
}
type AccountTransferList = { data: AccountTransfer[]; next_cursor: string | null }
type CreateAnAccountTransferParameters = {
  account_id: string
  amount: number
  description: string
  destination_account_id: string
  require_approval?: boolean | undefined
}
type Account = {
  balances: { available_balance: number; current_balance: number }
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  entity_id: string | null
  id: string
  informational_entity_id: string | null
  interest_accrued: string
  interest_accrued_at: string | null
  name: string
  status: 'open' | 'closed'
  type: 'account'
}
type AccountList = { data: Account[]; next_cursor: string | null }
type CreateAnAccountParameters = {
  entity_id?: string | undefined
  informational_entity_id?: string | undefined
  name: string
}
type UpdateAnAccountParameters = { name?: string | undefined }
type AchPrenotification = {
  account_number: string
  addendum: string | null
  company_descriptive_date: string | null
  company_discretionary_data: string | null
  company_entry_description: string | null
  company_name: string | null
  created_at: string
  credit_debit_indicator: 'credit' | 'debit'
  effective_date: string | null
  id: string
  prenotification_return: { created_at: string; return_reason_code: string } | null
  routing_number: string
  status: 'pending_submitting' | 'requires_attention' | 'returned' | 'submitted'
  type: 'ach_prenotification'
}
type AchPrenotificationList = { data: AchPrenotification[]; next_cursor: string | null }
type CreateAnAchPrenotificationParameters = {
  account_number: string
  addendum?: string | undefined
  company_descriptive_date?: string | undefined
  company_discretionary_data?: string | undefined
  company_entry_description?: string | undefined
  company_name?: string | undefined
  credit_debit_indicator?: 'credit' | 'debit' | undefined
  effective_date?: string | undefined
  individual_id?: string | undefined
  individual_name?: string | undefined
  routing_number: string
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated'
    | undefined
}
type AchTransfer = {
  account_id: string
  account_number: string
  addendum: string | null
  amount: number
  approval: { approved_at: string } | null
  cancellation: { canceled_at: string } | null
  company_descriptive_date: string | null
  company_discretionary_data: string | null
  company_entry_description: string | null
  company_name: string | null
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  external_account_id: string | null
  funding: 'checking' | 'savings'
  id: string
  individual_id: string | null
  individual_name: string | null
  network: 'ach'
  notification_of_change: { change_code: string; corrected_data: string; created_at: string } | null
  return: {
    created_at: string
    return_reason_code:
      | 'insufficient_fund'
      | 'no_account'
      | 'account_closed'
      | 'invalid_account_number_structure'
      | 'account_frozen_entry_returned_per_ofac_instruction'
      | 'credit_entry_refused_by_receiver'
      | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
      | 'corporate_customer_advised_not_authorized'
      | 'payment_stopped'
      | 'non_transaction_account'
      | 'uncollected_funds'
      | 'routing_number_check_digit_error'
      | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
      | 'amount_field_error'
      | 'authorization_revoked_by_customer'
      | 'invalid_ach_routing_number'
      | 'file_record_edit_criteria'
      | 'enr_invalid_individual_name'
      | 'returned_per_odfi_request'
      | 'addenda_error'
      | 'limited_participation_dfi'
      | 'incorrectly_coded_outbound_international_payment'
      | 'other'
    transaction_id: string
    transfer_id: string
  } | null
  routing_number: string
  standard_entry_class_code:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated'
  statement_descriptor: string
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_submission'
    | 'submitted'
    | 'returned'
    | 'requires_attention'
    | 'rejected'
  submission: { submitted_at: string; trace_number: string } | null
  template_id: string | null
  transaction_id: string | null
  type: 'ach_transfer'
}
type AchTransferList = { data: AchTransfer[]; next_cursor: string | null }
type CreateAnAchTransferParameters = {
  account_id: string
  account_number?: string | undefined
  addendum?: string | undefined
  amount: number
  company_descriptive_date?: string | undefined
  company_discretionary_data?: string | undefined
  company_entry_description?: string | undefined
  company_name?: string | undefined
  effective_date?: string | undefined
  external_account_id?: string | undefined
  funding?: 'checking' | 'savings' | undefined
  individual_id?: string | undefined
  individual_name?: string | undefined
  require_approval?: boolean | undefined
  routing_number?: string | undefined
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated'
    | undefined
  statement_descriptor: string
}
type CardDispute = {
  acceptance: { accepted_at: string; card_dispute_id: string; transaction_id: string | null } | null
  created_at: string
  disputed_transaction_id: string
  explanation: string
  id: string
  rejection: { card_dispute_id: string; explanation: string; rejected_at: string } | null
  status: 'pending_reviewing' | 'accepted' | 'rejected'
  type: 'card_dispute'
}
type CardDisputeList = { data: CardDispute[]; next_cursor: string | null }
type CreateACardDisputeParameters = { disputed_transaction_id: string; explanation: string }
type CardProfile = {
  created_at: string
  description: string
  digital_wallets: {
    app_icon_file_id: string
    background_image_file_id: string
    card_description: string
    contact_email: string | null
    contact_phone: string | null
    contact_website: string | null
    issuer_name: string
    text_color: { blue: number; green: number; red: number }
  }
  id: string
  status: 'pending' | 'rejected' | 'active' | 'archived'
  type: 'card_profile'
}
type CardProfileList = { data: CardProfile[]; next_cursor: string | null }
type CreateACardProfileParameters = {
  description: string
  digital_wallets: {
    app_icon_file_id: string
    background_image_file_id: string
    card_description: string
    contact_email?: string | undefined
    contact_phone?: string | undefined
    contact_website?: string | undefined
    issuer_name: string
    text_color?: { blue: number; green: number; red: number } | undefined
  }
}
type Card = {
  account_id: string
  billing_address: {
    city: string | null
    line1: string | null
    line2: string | null
    postal_code: string | null
    state: string | null
  }
  created_at: string
  description: string | null
  digital_wallet: {
    card_profile_id: string | null
    email: string | null
    phone: string | null
  } | null
  expiration_month: number
  expiration_year: number
  id: string
  last4: string
  status: 'active' | 'disabled' | 'canceled'
  type: 'card'
}
type CardList = { data: Card[]; next_cursor: string | null }
type CreateACardParameters = {
  account_id: string
  billing_address?:
    | {
        city: string
        line1: string
        line2?: string | undefined
        postal_code: string
        state: string
      }
    | undefined
  description?: string | undefined
  digital_wallet?:
    | {
        card_profile_id?: string | undefined
        email?: string | undefined
        phone?: string | undefined
      }
    | undefined
}
type UpdateACardParameters = {
  billing_address?:
    | {
        city: string
        line1: string
        line2?: string | undefined
        postal_code: string
        state: string
      }
    | undefined
  description?: string | undefined
  digital_wallet?:
    | {
        card_profile_id?: string | undefined
        email?: string | undefined
        phone?: string | undefined
      }
    | undefined
  status?: 'active' | 'disabled' | 'canceled' | undefined
}
type CardDetails = {
  card_id: string
  expiration_month: number
  expiration_year: number
  primary_account_number: string
  type: 'card_details'
  verification_code: string
}
type CheckDeposit = {
  account_id: string
  amount: number
  back_image_file_id: string | null
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  deposit_acceptance: {
    account_number: string
    amount: number
    auxiliary_on_us: string | null
    check_deposit_id: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    routing_number: string
    serial_number: string | null
  } | null
  deposit_rejection: {
    amount: number
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    reason:
      | 'incomplete_image'
      | 'duplicate'
      | 'poor_image_quality'
      | 'incorrect_amount'
      | 'incorrect_recipient'
      | 'not_eligible_for_mobile_deposit'
      | 'unknown'
    rejected_at: string
  } | null
  deposit_return: {
    amount: number
    check_deposit_id: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    return_reason:
      | 'ach_conversion_not_supported'
      | 'closed_account'
      | 'duplicate_submission'
      | 'insufficient_funds'
      | 'no_account'
      | 'not_authorized'
      | 'stale_dated'
      | 'stop_payment'
      | 'unknown_reason'
      | 'unmatched_details'
      | 'unreadable_image'
    returned_at: string
    transaction_id: string
  } | null
  front_image_file_id: string
  id: string
  status: 'pending' | 'submitted' | 'rejected' | 'returned'
  transaction_id: string | null
  type: 'check_deposit'
}
type CheckDepositList = { data: CheckDeposit[]; next_cursor: string | null }
type CreateACheckDepositParameters = {
  account_id: string
  amount: number
  back_image_file_id: string
  currency: string
  front_image_file_id: string
}
type CheckTransfer = {
  account_id: string
  address_city: string
  address_line1: string
  address_line2: string | null
  address_state: string
  address_zip: string
  amount: number
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  deposit: {
    back_image_file_id: string | null
    front_image_file_id: string | null
    type: 'check_transfer_deposit'
  } | null
  id: string
  mailed_at: string | null
  message: string
  note: string | null
  recipient_name: string
  return_address: {
    city: string | null
    line1: string | null
    line2: string | null
    name: string | null
    state: string | null
    zip: string | null
  } | null
  status:
    | 'pending_approval'
    | 'pending_submission'
    | 'submitting'
    | 'submitted'
    | 'pending_mailing'
    | 'mailed'
    | 'canceled'
    | 'deposited'
    | 'stopped'
    | 'returned'
    | 'rejected'
    | 'requires_attention'
  stop_payment_request: {
    requested_at: string
    transaction_id: string
    transfer_id: string
    type: 'check_transfer_stop_payment_request'
  } | null
  submission: { check_number: string } | null
  submitted_at: string | null
  template_id: string | null
  transaction_id: string | null
  type: 'check_transfer'
}
type CheckTransferList = { data: CheckTransfer[]; next_cursor: string | null }
type CreateACheckTransferParameters = {
  account_id: string
  address_city: string
  address_line1: string
  address_line2?: string | undefined
  address_state: string
  address_zip: string
  amount: number
  message: string
  note?: string | undefined
  recipient_name: string
  require_approval?: boolean | undefined
  return_address?:
    | {
        city: string
        line1: string
        line2?: string | undefined
        name: string
        state: string
        zip: string
      }
    | undefined
}
type DeclinedTransaction = {
  account_id: string
  amount: number
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  description: string
  id: string
  route_id: string | null
  route_type: string | null
  source: {
    ach_decline: {
      amount: number
      originator_company_descriptive_date: string | null
      originator_company_discretionary_data: string | null
      originator_company_id: string
      originator_company_name: string
      reason:
        | 'ach_route_canceled'
        | 'ach_route_disabled'
        | 'breaches_limit'
        | 'credit_entry_refused_by_receiver'
        | 'duplicate_return'
        | 'entity_not_active'
        | 'transaction_not_allowed'
        | 'group_locked'
        | 'insufficient_funds'
        | 'no_ach_route'
        | 'originator_request'
      receiver_id_number: string | null
      receiver_name: string | null
      trace_number: string
    } | null
    card_decline: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      digital_wallet_token_id: string | null
      merchant_acceptor_id: string
      merchant_category_code: string | null
      merchant_city: string | null
      merchant_country: string | null
      merchant_descriptor: string
      merchant_state: string | null
      network: 'visa'
      network_details: {
        visa: {
          electronic_commerce_indicator:
            | 'mail_phone_order'
            | 'recurring'
            | 'installment'
            | 'unknown_mail_phone_order'
            | 'secure_electronic_commerce'
            | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
            | 'non_authenticated_security_transaction'
            | 'non_secure_transaction'
          point_of_service_entry_mode:
            | 'manual'
            | 'magnetic_stripe_no_cvv'
            | 'optical_code'
            | 'integrated_circuit_card'
            | 'contactless'
            | 'credential_on_file'
            | 'magnetic_stripe'
            | 'contactless_magnetic_stripe'
            | 'integrated_circuit_card_no_cvv'
        }
      }
      real_time_decision_id: string | null
      reason:
        | 'card_not_active'
        | 'entity_not_active'
        | 'group_locked'
        | 'insufficient_funds'
        | 'cvv2_mismatch'
        | 'transaction_not_allowed'
        | 'breaches_limit'
        | 'webhook_declined'
        | 'webhook_timed_out'
        | 'declined_by_stand_in_processing'
    } | null
    card_route_decline: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      merchant_acceptor_id: string
      merchant_category_code: string | null
      merchant_city: string | null
      merchant_country: string
      merchant_descriptor: string
      merchant_state: string | null
    } | null
    category:
      | 'ach_decline'
      | 'card_decline'
      | 'check_decline'
      | 'inbound_real_time_payments_transfer_decline'
      | 'international_ach_decline'
      | 'card_route_decline'
      | 'other'
    check_decline: {
      amount: number
      auxiliary_on_us: string | null
      reason:
        | 'ach_route_canceled'
        | 'ach_route_disabled'
        | 'breaches_limit'
        | 'entity_not_active'
        | 'group_locked'
        | 'insufficient_funds'
        | 'unable_to_locate_account'
        | 'unable_to_process'
        | 'refer_to_image'
        | 'stop_payment_requested'
        | 'returned'
    } | null
    inbound_real_time_payments_transfer_decline: {
      amount: number
      creditor_name: string
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      debtor_account_number: string
      debtor_name: string
      debtor_routing_number: string
      reason:
        | 'account_number_canceled'
        | 'account_number_disabled'
        | 'group_locked'
        | 'entity_not_active'
        | 'real_time_payments_not_enabled'
      remittance_information: string | null
      transaction_identification: string
    } | null
    international_ach_decline: {
      amount: number
      destination_country_code: string
      destination_currency_code: string
      foreign_exchange_indicator: string
      foreign_exchange_reference: string | null
      foreign_exchange_reference_indicator: string
      foreign_payment_amount: number
      foreign_trace_number: string | null
      international_transaction_type_code: string
      originating_currency_code: string
      originating_depository_financial_institution_branch_country: string
      originating_depository_financial_institution_id: string
      originating_depository_financial_institution_id_qualifier: string
      originating_depository_financial_institution_name: string
      originator_city: string
      originator_company_entry_description: string
      originator_country: string
      originator_identification: string
      originator_name: string
      originator_postal_code: string | null
      originator_state_or_province: string | null
      originator_street_address: string
      payment_related_information: string | null
      payment_related_information2: string | null
      receiver_city: string
      receiver_country: string
      receiver_identification_number: string | null
      receiver_postal_code: string | null
      receiver_state_or_province: string | null
      receiver_street_address: string
      receiving_company_or_individual_name: string
      receiving_depository_financial_institution_country: string
      receiving_depository_financial_institution_id: string
      receiving_depository_financial_institution_id_qualifier: string
      receiving_depository_financial_institution_name: string
      trace_number: string
    } | null
  }
  type: 'declined_transaction'
}
type DeclinedTransactionList = { data: DeclinedTransaction[]; next_cursor: string | null }
type DigitalWalletToken = {
  card_id: string
  created_at: string
  id: string
  status: 'active' | 'inactive' | 'suspended' | 'deactivated'
  token_requestor: 'apple_pay' | 'google_pay'
  type: 'digital_wallet_token'
}
type DigitalWalletTokenList = { data: DigitalWalletToken[]; next_cursor: string | null }
type Document = {
  category: 'form_1099_int'
  created_at: string
  entity_id: string | null
  file_id: string
  id: string
  type: 'document'
}
type DocumentList = { data: Document[]; next_cursor: string | null }
type Entity = {
  corporation: {
    address: { city: string; line1: string; line2: string | null; state: string; zip: string }
    beneficial_owners: {
      company_title: string | null
      individual: {
        address: { city: string; line1: string; line2: string | null; state: string; zip: string }
        date_of_birth: string
        identification: {
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other'
          number_last4: string
        }
        name: string
      }
      prong: 'ownership' | 'control'
    }[]
    incorporation_state: string | null
    name: string
    tax_identifier: string | null
    website: string | null
  } | null
  description: string | null
  id: string
  joint: {
    individuals: {
      address: { city: string; line1: string; line2: string | null; state: string; zip: string }
      date_of_birth: string
      identification: {
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other'
        number_last4: string
      }
      name: string
    }[]
    name: string
  } | null
  natural_person: {
    address: { city: string; line1: string; line2: string | null; state: string; zip: string }
    date_of_birth: string
    identification: {
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license'
        | 'other'
      number_last4: string
    }
    name: string
  } | null
  relationship: 'affiliated' | 'informational' | 'unaffiliated'
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust'
  supplemental_documents: { file_id: string }[]
  trust: {
    address: { city: string; line1: string; line2: string | null; state: string; zip: string }
    category: 'revocable' | 'irrevocable'
    formation_document_file_id: string | null
    formation_state: string | null
    grantor: {
      address: { city: string; line1: string; line2: string | null; state: string; zip: string }
      date_of_birth: string
      identification: {
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other'
        number_last4: string
      }
      name: string
    } | null
    name: string
    tax_identifier: string | null
    trustees: {
      individual: {
        address: { city: string; line1: string; line2: string | null; state: string; zip: string }
        date_of_birth: string
        identification: {
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other'
          number_last4: string
        }
        name: string
      } | null
      structure: 'individual'
    }[]
  } | null
  type: 'entity'
}
type EntityList = { data: Entity[]; next_cursor: string | null }
type CreateAnEntityParameters = {
  corporation?:
    | {
        address: {
          city: string
          line1: string
          line2?: string | undefined
          state: string
          zip: string
        }
        beneficial_owners: {
          company_title?: string | undefined
          individual: {
            address: {
              city: string
              line1: string
              line2?: string | undefined
              state: string
              zip: string
            }
            confirmed_no_us_tax_id?: boolean | undefined
            date_of_birth: string
            identification: {
              drivers_license?:
                | { expiration_date: string; file_id: string; state: string }
                | undefined
              method:
                | 'social_security_number'
                | 'individual_taxpayer_identification_number'
                | 'passport'
                | 'drivers_license'
                | 'other'
              number: string
              other?:
                | {
                    country: string
                    description: string
                    expiration_date?: string | undefined
                    file_id: string
                  }
                | undefined
              passport?: { country: string; expiration_date: string; file_id: string } | undefined
            }
            name: string
          }
          prong: 'ownership' | 'control'
        }[]
        incorporation_state?: string | undefined
        name: string
        tax_identifier: string
        website?: string | undefined
      }
    | undefined
  description?: string | undefined
  joint?:
    | {
        individuals: {
          address: {
            city: string
            line1: string
            line2?: string | undefined
            state: string
            zip: string
          }
          confirmed_no_us_tax_id?: boolean | undefined
          date_of_birth: string
          identification: {
            drivers_license?:
              | { expiration_date: string; file_id: string; state: string }
              | undefined
            method:
              | 'social_security_number'
              | 'individual_taxpayer_identification_number'
              | 'passport'
              | 'drivers_license'
              | 'other'
            number: string
            other?:
              | {
                  country: string
                  description: string
                  expiration_date?: string | undefined
                  file_id: string
                }
              | undefined
            passport?: { country: string; expiration_date: string; file_id: string } | undefined
          }
          name: string
        }[]
        name?: string | undefined
      }
    | undefined
  natural_person?:
    | {
        address: {
          city: string
          line1: string
          line2?: string | undefined
          state: string
          zip: string
        }
        confirmed_no_us_tax_id?: boolean | undefined
        date_of_birth: string
        identification: {
          drivers_license?: { expiration_date: string; file_id: string; state: string } | undefined
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other'
          number: string
          other?:
            | {
                country: string
                description: string
                expiration_date?: string | undefined
                file_id: string
              }
            | undefined
          passport?: { country: string; expiration_date: string; file_id: string } | undefined
        }
        name: string
      }
    | undefined
  relationship: 'affiliated' | 'informational' | 'unaffiliated'
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust'
  supplemental_documents?: { file_id: string }[] | undefined
  trust?:
    | {
        address: {
          city: string
          line1: string
          line2?: string | undefined
          state: string
          zip: string
        }
        category: 'revocable' | 'irrevocable'
        formation_document_file_id?: string | undefined
        formation_state?: string | undefined
        grantor?:
          | {
              address: {
                city: string
                line1: string
                line2?: string | undefined
                state: string
                zip: string
              }
              confirmed_no_us_tax_id?: boolean | undefined
              date_of_birth: string
              identification: {
                drivers_license?:
                  | { expiration_date: string; file_id: string; state: string }
                  | undefined
                method:
                  | 'social_security_number'
                  | 'individual_taxpayer_identification_number'
                  | 'passport'
                  | 'drivers_license'
                  | 'other'
                number: string
                other?:
                  | {
                      country: string
                      description: string
                      expiration_date?: string | undefined
                      file_id: string
                    }
                  | undefined
                passport?: { country: string; expiration_date: string; file_id: string } | undefined
              }
              name: string
            }
          | undefined
        name: string
        tax_identifier?: string | undefined
        trustees: {
          individual?:
            | {
                address: {
                  city: string
                  line1: string
                  line2?: string | undefined
                  state: string
                  zip: string
                }
                confirmed_no_us_tax_id?: boolean | undefined
                date_of_birth: string
                identification: {
                  drivers_license?:
                    | { expiration_date: string; file_id: string; state: string }
                    | undefined
                  method:
                    | 'social_security_number'
                    | 'individual_taxpayer_identification_number'
                    | 'passport'
                    | 'drivers_license'
                    | 'other'
                  number: string
                  other?:
                    | {
                        country: string
                        description: string
                        expiration_date?: string | undefined
                        file_id: string
                      }
                    | undefined
                  passport?:
                    | { country: string; expiration_date: string; file_id: string }
                    | undefined
                }
                name: string
              }
            | undefined
          structure: 'individual'
        }[]
      }
    | undefined
}
type CreateASupplementalDocumentForAnEntityParameters = { file_id: string }
type EventSubscription = {
  created_at: string
  id: string
  selected_event_category:
    | 'account.created'
    | 'account.updated'
    | 'account_number.created'
    | 'account_number.updated'
    | 'account_statement.created'
    | 'account_transfer.created'
    | 'account_transfer.updated'
    | 'ach_prenotification.created'
    | 'ach_prenotification.updated'
    | 'ach_transfer.created'
    | 'ach_transfer.updated'
    | 'card.created'
    | 'card.updated'
    | 'card_dispute.created'
    | 'card_dispute.updated'
    | 'check_deposit.created'
    | 'check_deposit.updated'
    | 'check_transfer.created'
    | 'check_transfer.updated'
    | 'declined_transaction.created'
    | 'digital_wallet_token.created'
    | 'digital_wallet_token.updated'
    | 'document.created'
    | 'entity.created'
    | 'entity.updated'
    | 'external_account.created'
    | 'file.created'
    | 'group.updated'
    | 'group.heartbeat'
    | 'inbound_ach_transfer_return.created'
    | 'inbound_ach_transfer_return.updated'
    | 'inbound_wire_drawdown_request.created'
    | 'oauth_connection.created'
    | 'oauth_connection.deactivated'
    | 'pending_transaction.created'
    | 'pending_transaction.updated'
    | 'real_time_decision.card_authorization_requested'
    | 'real_time_decision.digital_wallet_token_requested'
    | 'real_time_decision.digital_wallet_authentication_requested'
    | 'real_time_payments_transfer.created'
    | 'real_time_payments_transfer.updated'
    | 'real_time_payments_request_for_payment.created'
    | 'real_time_payments_request_for_payment.updated'
    | 'transaction.created'
    | 'wire_drawdown_request.created'
    | 'wire_drawdown_request.updated'
    | 'wire_transfer.created'
    | 'wire_transfer.updated'
  shared_secret: string
  status: 'active' | 'disabled' | 'deleted' | 'requires_attention'
  type: 'event_subscription'
  url: string
}
type EventSubscriptionList = { data: EventSubscription[]; next_cursor: string | null }
type CreateAnEventSubscriptionParameters = {
  selected_event_category?:
    | 'account.created'
    | 'account.updated'
    | 'account_number.created'
    | 'account_number.updated'
    | 'account_statement.created'
    | 'account_transfer.created'
    | 'account_transfer.updated'
    | 'ach_prenotification.created'
    | 'ach_prenotification.updated'
    | 'ach_transfer.created'
    | 'ach_transfer.updated'
    | 'card.created'
    | 'card.updated'
    | 'card_dispute.created'
    | 'card_dispute.updated'
    | 'check_deposit.created'
    | 'check_deposit.updated'
    | 'check_transfer.created'
    | 'check_transfer.updated'
    | 'declined_transaction.created'
    | 'digital_wallet_token.created'
    | 'digital_wallet_token.updated'
    | 'document.created'
    | 'entity.created'
    | 'entity.updated'
    | 'external_account.created'
    | 'file.created'
    | 'group.updated'
    | 'group.heartbeat'
    | 'inbound_ach_transfer_return.created'
    | 'inbound_ach_transfer_return.updated'
    | 'inbound_wire_drawdown_request.created'
    | 'oauth_connection.created'
    | 'oauth_connection.deactivated'
    | 'pending_transaction.created'
    | 'pending_transaction.updated'
    | 'real_time_decision.card_authorization_requested'
    | 'real_time_decision.digital_wallet_token_requested'
    | 'real_time_decision.digital_wallet_authentication_requested'
    | 'real_time_payments_transfer.created'
    | 'real_time_payments_transfer.updated'
    | 'real_time_payments_request_for_payment.created'
    | 'real_time_payments_request_for_payment.updated'
    | 'transaction.created'
    | 'wire_drawdown_request.created'
    | 'wire_drawdown_request.updated'
    | 'wire_transfer.created'
    | 'wire_transfer.updated'
    | undefined
  shared_secret?: string | undefined
  url: string
}
type UpdateAnEventSubscriptionParameters = {
  status?: 'active' | 'disabled' | 'deleted' | undefined
}
type Event = {
  associated_object_id: string
  associated_object_type: string
  category:
    | 'account.created'
    | 'account.updated'
    | 'account_number.created'
    | 'account_number.updated'
    | 'account_statement.created'
    | 'account_transfer.created'
    | 'account_transfer.updated'
    | 'ach_prenotification.created'
    | 'ach_prenotification.updated'
    | 'ach_transfer.created'
    | 'ach_transfer.updated'
    | 'card.created'
    | 'card.updated'
    | 'card_dispute.created'
    | 'card_dispute.updated'
    | 'check_deposit.created'
    | 'check_deposit.updated'
    | 'check_transfer.created'
    | 'check_transfer.updated'
    | 'declined_transaction.created'
    | 'digital_wallet_token.created'
    | 'digital_wallet_token.updated'
    | 'document.created'
    | 'entity.created'
    | 'entity.updated'
    | 'external_account.created'
    | 'file.created'
    | 'group.updated'
    | 'group.heartbeat'
    | 'inbound_ach_transfer_return.created'
    | 'inbound_ach_transfer_return.updated'
    | 'inbound_wire_drawdown_request.created'
    | 'oauth_connection.created'
    | 'oauth_connection.deactivated'
    | 'pending_transaction.created'
    | 'pending_transaction.updated'
    | 'real_time_decision.card_authorization_requested'
    | 'real_time_decision.digital_wallet_token_requested'
    | 'real_time_decision.digital_wallet_authentication_requested'
    | 'real_time_payments_transfer.created'
    | 'real_time_payments_transfer.updated'
    | 'real_time_payments_request_for_payment.created'
    | 'real_time_payments_request_for_payment.updated'
    | 'transaction.created'
    | 'wire_drawdown_request.created'
    | 'wire_drawdown_request.updated'
    | 'wire_transfer.created'
    | 'wire_transfer.updated'
  created_at: string
  id: string
  type: 'event'
}
type EventList = { data: Event[]; next_cursor: string | null }
type ExternalAccount = {
  account_number: string
  created_at: string
  description: string
  funding: 'checking' | 'savings' | 'other'
  id: string
  routing_number: string
  status: 'active' | 'archived'
  type: 'external_account'
  verification_status: 'unverified' | 'pending' | 'verified'
}
type ExternalAccountList = { data: ExternalAccount[]; next_cursor: string | null }
type CreateAnExternalAccountParameters = {
  account_number: string
  description: string
  funding?: 'checking' | 'savings' | 'other' | undefined
  routing_number: string
}
type UpdateAnExternalAccountParameters = {
  description?: string | undefined
  status?: 'active' | 'archived' | undefined
}
type File2 = {
  created_at: string
  description: string | null
  direction: 'to_increase' | 'from_increase'
  download_url: string | null
  filename: string | null
  id: string
  purpose:
    | 'check_image_front'
    | 'check_image_back'
    | 'form_1099_int'
    | 'form_ss_4'
    | 'identity_document'
    | 'increase_statement'
    | 'other'
    | 'trust_formation_document'
    | 'digital_wallet_artwork'
    | 'digital_wallet_app_icon'
    | 'entity_supplemental_document'
  type: 'file'
}
type FileList = { data: File2[]; next_cursor: string | null }
type CreateAFileParameters = {
  description?: string | undefined
  file: File
  purpose:
    | 'check_image_front'
    | 'check_image_back'
    | 'form_ss_4'
    | 'identity_document'
    | 'other'
    | 'trust_formation_document'
    | 'digital_wallet_artwork'
    | 'digital_wallet_app_icon'
    | 'entity_supplemental_document'
}
type Group = {
  ach_debit_status: 'disabled' | 'enabled'
  activation_status: 'unactivated' | 'activated'
  created_at: string
  id: string
  type: 'group'
}
type InboundAchTransferReturn = {
  id: string
  inbound_ach_transfer_transaction_id: string
  reason:
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized'
  status: 'pending_submitting' | 'submitted'
  submission: { submitted_at: string; trace_number: string } | null
  transaction_id: string | null
  type: 'inbound_ach_transfer_return'
}
type InboundAchTransferReturnList = { data: InboundAchTransferReturn[]; next_cursor: string | null }
type CreateAnAchReturnParameters = {
  reason:
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized'
  transaction_id: string
}
type InboundWireDrawdownRequest = {
  amount: number
  beneficiary_account_number: string
  beneficiary_address_line1: string | null
  beneficiary_address_line2: string | null
  beneficiary_address_line3: string | null
  beneficiary_name: string | null
  beneficiary_routing_number: string
  currency: string
  id: string
  message_to_recipient: string | null
  originator_account_number: string
  originator_address_line1: string | null
  originator_address_line2: string | null
  originator_address_line3: string | null
  originator_name: string | null
  originator_routing_number: string
  originator_to_beneficiary_information_line1: string | null
  originator_to_beneficiary_information_line2: string | null
  originator_to_beneficiary_information_line3: string | null
  originator_to_beneficiary_information_line4: string | null
  recipient_account_number_id: string
  type: 'inbound_wire_drawdown_request'
}
type InboundWireDrawdownRequestList = {
  data: InboundWireDrawdownRequest[]
  next_cursor: string | null
}
type Limit = {
  id: string
  interval: 'transaction' | 'day' | 'week' | 'month' | 'year' | 'all_time'
  metric: 'count' | 'volume'
  model_id: string
  model_type: 'account' | 'account_number' | 'card'
  status: 'active' | 'inactive'
  type: 'limit'
  value: number
}
type LimitList = { data: Limit[]; next_cursor: string | null }
type CreateALimitParameters = {
  interval?: 'transaction' | 'day' | 'week' | 'month' | 'year' | 'all_time' | undefined
  metric: 'count' | 'volume'
  model_id: string
  value: number
}
type UpdateALimitParameters = { status: 'inactive' | 'active' }
type OauthConnection = {
  created_at: string
  group_id: string
  id: string
  status: 'active' | 'inactive'
  type: 'oauth_connection'
}
type OauthConnectionList = { data: OauthConnection[]; next_cursor: string | null }
type PendingTransaction = {
  account_id: string
  amount: number
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  description: string
  id: string
  route_id: string | null
  route_type: string | null
  source: {
    account_transfer_instruction: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      transfer_id: string
    } | null
    ach_transfer_instruction: { amount: number; transfer_id: string } | null
    card_authorization: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      digital_wallet_token_id: string | null
      merchant_acceptor_id: string
      merchant_category_code: string | null
      merchant_city: string | null
      merchant_country: string | null
      merchant_descriptor: string
      network: 'visa'
      network_details: {
        visa: {
          electronic_commerce_indicator:
            | 'mail_phone_order'
            | 'recurring'
            | 'installment'
            | 'unknown_mail_phone_order'
            | 'secure_electronic_commerce'
            | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
            | 'non_authenticated_security_transaction'
            | 'non_secure_transaction'
          point_of_service_entry_mode:
            | 'manual'
            | 'magnetic_stripe_no_cvv'
            | 'optical_code'
            | 'integrated_circuit_card'
            | 'contactless'
            | 'credential_on_file'
            | 'magnetic_stripe'
            | 'contactless_magnetic_stripe'
            | 'integrated_circuit_card_no_cvv'
        }
      }
      real_time_decision_id: string | null
    } | null
    card_route_authorization: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      merchant_acceptor_id: string
      merchant_category_code: string
      merchant_city: string | null
      merchant_country: string
      merchant_descriptor: string
      merchant_state: string | null
    } | null
    category:
      | 'account_transfer_instruction'
      | 'ach_transfer_instruction'
      | 'card_authorization'
      | 'check_deposit_instruction'
      | 'check_transfer_instruction'
      | 'inbound_funds_hold'
      | 'card_route_authorization'
      | 'real_time_payments_transfer_instruction'
      | 'wire_drawdown_payment_instruction'
      | 'wire_transfer_instruction'
      | 'other'
    check_deposit_instruction: {
      amount: number
      back_image_file_id: string | null
      check_deposit_id: string | null
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      front_image_file_id: string
    } | null
    check_transfer_instruction: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      transfer_id: string
    } | null
    inbound_funds_hold: {
      amount: number
      automatically_releases_at: string
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      held_transaction_id: string | null
      released_at: string | null
      status: 'held' | 'complete'
    } | null
    wire_drawdown_payment_instruction: {
      account_number: string
      amount: number
      message_to_recipient: string
      routing_number: string
    } | null
    wire_transfer_instruction: {
      account_number: string
      amount: number
      message_to_recipient: string
      routing_number: string
      transfer_id: string
    } | null
  }
  status: 'pending' | 'complete'
  type: 'pending_transaction'
}
type PendingTransactionList = { data: PendingTransaction[]; next_cursor: string | null }
type RealTimeDecision = {
  card_authorization: {
    account_id: string
    card_id: string
    decision: 'approve' | 'decline'
    merchant_acceptor_id: string
    merchant_category_code: string | null
    merchant_city: string | null
    merchant_country: string | null
    merchant_descriptor: string
    network: 'visa'
    network_details: {
      visa: {
        electronic_commerce_indicator:
          | 'mail_phone_order'
          | 'recurring'
          | 'installment'
          | 'unknown_mail_phone_order'
          | 'secure_electronic_commerce'
          | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
          | 'non_authenticated_security_transaction'
          | 'non_secure_transaction'
        point_of_service_entry_mode:
          | 'manual'
          | 'magnetic_stripe_no_cvv'
          | 'optical_code'
          | 'integrated_circuit_card'
          | 'contactless'
          | 'credential_on_file'
          | 'magnetic_stripe'
          | 'contactless_magnetic_stripe'
          | 'integrated_circuit_card_no_cvv'
      }
    }
    presentment_amount: number
    presentment_currency: string
    settlement_amount: number
    settlement_currency: string
  } | null
  category:
    | 'card_authorization_requested'
    | 'digital_wallet_token_requested'
    | 'digital_wallet_authentication_requested'
  created_at: string
  digital_wallet_authentication: {
    card_id: string
    channel: 'sms' | 'email'
    digital_wallet: 'apple_pay' | 'google_pay'
    email: string | null
    one_time_passcode: string
    phone: string | null
    result: 'success' | 'failure'
  } | null
  digital_wallet_token: {
    card_id: string
    card_profile_id: string | null
    decision: 'approve' | 'decline'
    digital_wallet: 'apple_pay' | 'google_pay'
  } | null
  id: string
  status: 'pending' | 'responded' | 'timed_out'
  timeout_at: string
  type: 'real_time_decision'
}
type ActionARealTimeDecisionParameters = {
  card_authorization?: { decision: 'approve' | 'decline' } | undefined
  digital_wallet_authentication?: { result: 'success' | 'failure' } | undefined
  digital_wallet_token?:
    | {
        approval?:
          | { card_profile_id: string; email?: string | undefined; phone?: string | undefined }
          | undefined
        decline?: { reason?: string | undefined } | undefined
      }
    | undefined
}
type RoutingNumber = {
  ach_transfers: 'supported' | 'not_supported'
  name: string
  real_time_payments_transfers: 'supported' | 'not_supported'
  routing_number: string
  type: 'routing_number'
  wire_transfers: 'supported' | 'not_supported'
}
type RoutingNumberList = { data: RoutingNumber[]; next_cursor: string | null }
type SimulateAnAccountStatementBeingCreatedParameters = { account_id: string }
type ReturnASandboxAchTransferParameters = {
  reason?:
    | 'insufficient_fund'
    | 'no_account'
    | 'account_closed'
    | 'invalid_account_number_structure'
    | 'account_frozen_entry_returned_per_ofac_instruction'
    | 'credit_entry_refused_by_receiver'
    | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
    | 'corporate_customer_advised_not_authorized'
    | 'payment_stopped'
    | 'non_transaction_account'
    | 'uncollected_funds'
    | 'routing_number_check_digit_error'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'amount_field_error'
    | 'authorization_revoked_by_customer'
    | 'invalid_ach_routing_number'
    | 'file_record_edit_criteria'
    | 'enr_invalid_individual_name'
    | 'returned_per_odfi_request'
    | 'addenda_error'
    | 'limited_participation_dfi'
    | 'incorrectly_coded_outbound_international_payment'
    | 'other'
    | undefined
}
type SimulateAnAuthorizationOnACardParameters = {
  amount: number
  card_id?: string | undefined
  digital_wallet_token_id?: string | undefined
}
type InboundCardAuthorizationSimulationResult = {
  declined_transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      ach_decline: {
        amount: number
        originator_company_descriptive_date: string | null
        originator_company_discretionary_data: string | null
        originator_company_id: string
        originator_company_name: string
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'credit_entry_refused_by_receiver'
          | 'duplicate_return'
          | 'entity_not_active'
          | 'transaction_not_allowed'
          | 'group_locked'
          | 'insufficient_funds'
          | 'no_ach_route'
          | 'originator_request'
        receiver_id_number: string | null
        receiver_name: string | null
        trace_number: string
      } | null
      card_decline: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        digital_wallet_token_id: string | null
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        merchant_state: string | null
        network: 'visa'
        network_details: {
          visa: {
            electronic_commerce_indicator:
              | 'mail_phone_order'
              | 'recurring'
              | 'installment'
              | 'unknown_mail_phone_order'
              | 'secure_electronic_commerce'
              | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
              | 'non_authenticated_security_transaction'
              | 'non_secure_transaction'
            point_of_service_entry_mode:
              | 'manual'
              | 'magnetic_stripe_no_cvv'
              | 'optical_code'
              | 'integrated_circuit_card'
              | 'contactless'
              | 'credential_on_file'
              | 'magnetic_stripe'
              | 'contactless_magnetic_stripe'
              | 'integrated_circuit_card_no_cvv'
          }
        }
        real_time_decision_id: string | null
        reason:
          | 'card_not_active'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'cvv2_mismatch'
          | 'transaction_not_allowed'
          | 'breaches_limit'
          | 'webhook_declined'
          | 'webhook_timed_out'
          | 'declined_by_stand_in_processing'
      } | null
      card_route_decline: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      category:
        | 'ach_decline'
        | 'card_decline'
        | 'check_decline'
        | 'inbound_real_time_payments_transfer_decline'
        | 'international_ach_decline'
        | 'card_route_decline'
        | 'other'
      check_decline: {
        amount: number
        auxiliary_on_us: string | null
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'unable_to_locate_account'
          | 'unable_to_process'
          | 'refer_to_image'
          | 'stop_payment_requested'
          | 'returned'
      } | null
      inbound_real_time_payments_transfer_decline: {
        amount: number
        creditor_name: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        debtor_account_number: string
        debtor_name: string
        debtor_routing_number: string
        reason:
          | 'account_number_canceled'
          | 'account_number_disabled'
          | 'group_locked'
          | 'entity_not_active'
          | 'real_time_payments_not_enabled'
        remittance_information: string | null
        transaction_identification: string
      } | null
      international_ach_decline: {
        amount: number
        destination_country_code: string
        destination_currency_code: string
        foreign_exchange_indicator: string
        foreign_exchange_reference: string | null
        foreign_exchange_reference_indicator: string
        foreign_payment_amount: number
        foreign_trace_number: string | null
        international_transaction_type_code: string
        originating_currency_code: string
        originating_depository_financial_institution_branch_country: string
        originating_depository_financial_institution_id: string
        originating_depository_financial_institution_id_qualifier: string
        originating_depository_financial_institution_name: string
        originator_city: string
        originator_company_entry_description: string
        originator_country: string
        originator_identification: string
        originator_name: string
        originator_postal_code: string | null
        originator_state_or_province: string | null
        originator_street_address: string
        payment_related_information: string | null
        payment_related_information2: string | null
        receiver_city: string
        receiver_country: string
        receiver_identification_number: string | null
        receiver_postal_code: string | null
        receiver_state_or_province: string | null
        receiver_street_address: string
        receiving_company_or_individual_name: string
        receiving_depository_financial_institution_country: string
        receiving_depository_financial_institution_id: string
        receiving_depository_financial_institution_id_qualifier: string
        receiving_depository_financial_institution_name: string
        trace_number: string
      } | null
    }
    type: 'declined_transaction'
  } | null
  pending_transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      account_transfer_instruction: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        transfer_id: string
      } | null
      ach_transfer_instruction: { amount: number; transfer_id: string } | null
      card_authorization: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        digital_wallet_token_id: string | null
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        network: 'visa'
        network_details: {
          visa: {
            electronic_commerce_indicator:
              | 'mail_phone_order'
              | 'recurring'
              | 'installment'
              | 'unknown_mail_phone_order'
              | 'secure_electronic_commerce'
              | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
              | 'non_authenticated_security_transaction'
              | 'non_secure_transaction'
            point_of_service_entry_mode:
              | 'manual'
              | 'magnetic_stripe_no_cvv'
              | 'optical_code'
              | 'integrated_circuit_card'
              | 'contactless'
              | 'credential_on_file'
              | 'magnetic_stripe'
              | 'contactless_magnetic_stripe'
              | 'integrated_circuit_card_no_cvv'
          }
        }
        real_time_decision_id: string | null
      } | null
      card_route_authorization: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      category:
        | 'account_transfer_instruction'
        | 'ach_transfer_instruction'
        | 'card_authorization'
        | 'check_deposit_instruction'
        | 'check_transfer_instruction'
        | 'inbound_funds_hold'
        | 'card_route_authorization'
        | 'real_time_payments_transfer_instruction'
        | 'wire_drawdown_payment_instruction'
        | 'wire_transfer_instruction'
        | 'other'
      check_deposit_instruction: {
        amount: number
        back_image_file_id: string | null
        check_deposit_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        front_image_file_id: string
      } | null
      check_transfer_instruction: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        transfer_id: string
      } | null
      inbound_funds_hold: {
        amount: number
        automatically_releases_at: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        held_transaction_id: string | null
        released_at: string | null
        status: 'held' | 'complete'
      } | null
      wire_drawdown_payment_instruction: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
      } | null
      wire_transfer_instruction: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
    }
    status: 'pending' | 'complete'
    type: 'pending_transaction'
  } | null
  type: 'inbound_card_authorization_simulation_result'
}
type SimulatesAdvancingTheStateOfACardDisputeParameters = {
  explanation?: string | undefined
  status: 'accepted' | 'rejected'
}
type SimulateARefundOnACardParameters = { transaction_id: string }
type Transaction = {
  account_id: string
  amount: number
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  description: string
  id: string
  route_id: string | null
  route_type: string | null
  source: {
    account_transfer_intention: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      description: string
      destination_account_id: string
      source_account_id: string
      transfer_id: string
    } | null
    ach_check_conversion: { amount: number; file_id: string } | null
    ach_check_conversion_return: { amount: number; return_reason_code: string } | null
    ach_transfer_intention: {
      account_number: string
      amount: number
      routing_number: string
      statement_descriptor: string
      transfer_id: string
    } | null
    ach_transfer_rejection: { transfer_id: string } | null
    ach_transfer_return: {
      created_at: string
      return_reason_code:
        | 'insufficient_fund'
        | 'no_account'
        | 'account_closed'
        | 'invalid_account_number_structure'
        | 'account_frozen_entry_returned_per_ofac_instruction'
        | 'credit_entry_refused_by_receiver'
        | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
        | 'corporate_customer_advised_not_authorized'
        | 'payment_stopped'
        | 'non_transaction_account'
        | 'uncollected_funds'
        | 'routing_number_check_digit_error'
        | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
        | 'amount_field_error'
        | 'authorization_revoked_by_customer'
        | 'invalid_ach_routing_number'
        | 'file_record_edit_criteria'
        | 'enr_invalid_individual_name'
        | 'returned_per_odfi_request'
        | 'addenda_error'
        | 'limited_participation_dfi'
        | 'incorrectly_coded_outbound_international_payment'
        | 'other'
      transaction_id: string
      transfer_id: string
    } | null
    card_dispute_acceptance: {
      accepted_at: string
      card_dispute_id: string
      transaction_id: string | null
    } | null
    card_refund: {
      amount: number
      card_settlement_transaction_id: string | null
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      type: 'card_refund'
    } | null
    card_route_refund: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      merchant_acceptor_id: string
      merchant_category_code: string | null
      merchant_city: string | null
      merchant_country: string
      merchant_descriptor: string
      merchant_state: string | null
    } | null
    card_route_settlement: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      merchant_acceptor_id: string
      merchant_category_code: string | null
      merchant_city: string | null
      merchant_country: string | null
      merchant_descriptor: string
      merchant_state: string | null
    } | null
    card_settlement: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      merchant_category_code: string
      merchant_city: string | null
      merchant_country: string
      merchant_name: string | null
      merchant_state: string | null
      pending_transaction_id: string | null
      presentment_amount: number
      presentment_currency: string
      type: 'card_settlement'
    } | null
    category:
      | 'account_transfer_intention'
      | 'ach_check_conversion_return'
      | 'ach_check_conversion'
      | 'ach_transfer_intention'
      | 'ach_transfer_rejection'
      | 'ach_transfer_return'
      | 'card_dispute_acceptance'
      | 'card_refund'
      | 'card_settlement'
      | 'check_deposit_acceptance'
      | 'check_deposit_return'
      | 'check_transfer_intention'
      | 'check_transfer_return'
      | 'check_transfer_rejection'
      | 'check_transfer_stop_payment_request'
      | 'dispute_resolution'
      | 'empyreal_cash_deposit'
      | 'inbound_ach_transfer'
      | 'inbound_ach_transfer_return_intention'
      | 'inbound_check'
      | 'inbound_international_ach_transfer'
      | 'inbound_real_time_payments_transfer_confirmation'
      | 'inbound_wire_drawdown_payment_reversal'
      | 'inbound_wire_drawdown_payment'
      | 'inbound_wire_reversal'
      | 'inbound_wire_transfer'
      | 'interest_payment'
      | 'internal_general_ledger_transaction'
      | 'internal_source'
      | 'card_route_refund'
      | 'card_route_settlement'
      | 'real_time_payments_transfer_acknowledgement'
      | 'sample_funds'
      | 'wire_drawdown_payment_intention'
      | 'wire_drawdown_payment_rejection'
      | 'wire_transfer_intention'
      | 'wire_transfer_rejection'
      | 'other'
    check_deposit_acceptance: {
      account_number: string
      amount: number
      auxiliary_on_us: string | null
      check_deposit_id: string
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      routing_number: string
      serial_number: string | null
    } | null
    check_deposit_return: {
      amount: number
      check_deposit_id: string
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      return_reason:
        | 'ach_conversion_not_supported'
        | 'closed_account'
        | 'duplicate_submission'
        | 'insufficient_funds'
        | 'no_account'
        | 'not_authorized'
        | 'stale_dated'
        | 'stop_payment'
        | 'unknown_reason'
        | 'unmatched_details'
        | 'unreadable_image'
      returned_at: string
      transaction_id: string
    } | null
    check_transfer_intention: {
      address_city: string
      address_line1: string
      address_line2: string | null
      address_state: string
      address_zip: string
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      recipient_name: string
      transfer_id: string
    } | null
    check_transfer_rejection: { transfer_id: string } | null
    check_transfer_return: { file_id: string | null; transfer_id: string } | null
    check_transfer_stop_payment_request: {
      requested_at: string
      transaction_id: string
      transfer_id: string
      type: 'check_transfer_stop_payment_request'
    } | null
    dispute_resolution: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      disputed_transaction_id: string
    } | null
    empyreal_cash_deposit: { amount: number; bag_id: string; deposit_date: string } | null
    inbound_ach_transfer: {
      amount: number
      originator_company_descriptive_date: string | null
      originator_company_discretionary_data: string | null
      originator_company_entry_description: string
      originator_company_id: string
      originator_company_name: string
      receiver_id_number: string | null
      receiver_name: string | null
      trace_number: string
    } | null
    inbound_check: {
      amount: number
      check_front_image_file_id: string | null
      check_number: string | null
      check_rear_image_file_id: string | null
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    } | null
    inbound_international_ach_transfer: {
      amount: number
      destination_country_code: string
      destination_currency_code: string
      foreign_exchange_indicator: string
      foreign_exchange_reference: string | null
      foreign_exchange_reference_indicator: string
      foreign_payment_amount: number
      foreign_trace_number: string | null
      international_transaction_type_code: string
      originating_currency_code: string
      originating_depository_financial_institution_branch_country: string
      originating_depository_financial_institution_id: string
      originating_depository_financial_institution_id_qualifier: string
      originating_depository_financial_institution_name: string
      originator_city: string
      originator_company_entry_description: string
      originator_country: string
      originator_identification: string
      originator_name: string
      originator_postal_code: string | null
      originator_state_or_province: string | null
      originator_street_address: string
      payment_related_information: string | null
      payment_related_information2: string | null
      receiver_city: string
      receiver_country: string
      receiver_identification_number: string | null
      receiver_postal_code: string | null
      receiver_state_or_province: string | null
      receiver_street_address: string
      receiving_company_or_individual_name: string
      receiving_depository_financial_institution_country: string
      receiving_depository_financial_institution_id: string
      receiving_depository_financial_institution_id_qualifier: string
      receiving_depository_financial_institution_name: string
      trace_number: string
    } | null
    inbound_real_time_payments_transfer_confirmation: {
      amount: number
      creditor_name: string
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      debtor_account_number: string
      debtor_name: string
      debtor_routing_number: string
      remittance_information: string | null
      transaction_identification: string
    } | null
    inbound_wire_drawdown_payment: {
      amount: number
      beneficiary_address_line1: string | null
      beneficiary_address_line2: string | null
      beneficiary_address_line3: string | null
      beneficiary_name: string | null
      beneficiary_reference: string | null
      description: string
      input_message_accountability_data: string | null
      originator_address_line1: string | null
      originator_address_line2: string | null
      originator_address_line3: string | null
      originator_name: string | null
      originator_to_beneficiary_information: string | null
    } | null
    inbound_wire_drawdown_payment_reversal: {
      amount: number
      description: string
      input_cycle_date: string
      input_message_accountability_data: string
      input_sequence_number: string
      input_source: string
      previous_message_input_cycle_date: string
      previous_message_input_message_accountability_data: string
      previous_message_input_sequence_number: string
      previous_message_input_source: string
    } | null
    inbound_wire_reversal: {
      amount: number
      description: string
      financial_institution_to_financial_institution_information: string | null
      input_cycle_date: string
      input_message_accountability_data: string
      input_sequence_number: string
      input_source: string
      previous_message_input_cycle_date: string
      previous_message_input_message_accountability_data: string
      previous_message_input_sequence_number: string
      previous_message_input_source: string
      receiver_financial_institution_information: string | null
    } | null
    inbound_wire_transfer: {
      amount: number
      beneficiary_address_line1: string | null
      beneficiary_address_line2: string | null
      beneficiary_address_line3: string | null
      beneficiary_name: string | null
      beneficiary_reference: string | null
      description: string
      input_message_accountability_data: string | null
      originator_address_line1: string | null
      originator_address_line2: string | null
      originator_address_line3: string | null
      originator_name: string | null
      originator_to_beneficiary_information: string | null
      originator_to_beneficiary_information_line1: string | null
      originator_to_beneficiary_information_line2: string | null
      originator_to_beneficiary_information_line3: string | null
      originator_to_beneficiary_information_line4: string | null
    } | null
    interest_payment: {
      accrued_on_account_id: string | null
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      period_end: string
      period_start: string
    } | null
    internal_source: {
      amount: number
      currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      reason:
        | 'bank_migration'
        | 'cashback'
        | 'empyreal_adjustment'
        | 'error'
        | 'error_correction'
        | 'fees'
        | 'interest'
        | 'sample_funds'
        | 'sample_funds_return'
    } | null
    sample_funds: { originator: string } | null
    wire_drawdown_payment_intention: {
      account_number: string
      amount: number
      message_to_recipient: string
      routing_number: string
      transfer_id: string
    } | null
    wire_drawdown_payment_rejection: { transfer_id: string } | null
    wire_transfer_intention: {
      account_number: string
      amount: number
      message_to_recipient: string
      routing_number: string
      transfer_id: string
    } | null
    wire_transfer_rejection: { transfer_id: string } | null
  }
  type: 'transaction'
}
type SimulateSettlingACardAuthorizationParameters = {
  amount?: number | undefined
  card_id: string
  pending_transaction_id: string
}
type SimulateDigitalWalletProvisioningForACardParameters = { card_id: string }
type InboundDigitalWalletTokenRequestSimulationResult = {
  decline_reason:
    | 'card_not_active'
    | 'no_verification_method'
    | 'webhook_timed_out'
    | 'webhook_declined'
  digital_wallet_token_id: string | null
  type: 'inbound_digital_wallet_token_request_simulation_result'
}
type SimulateATaxDocumentBeingCreatedParameters = { account_id: string }
type SimulateAnAchTransferToYourAccountParameters = {
  account_number_id: string
  amount: number
  company_descriptive_date?: string | undefined
  company_discretionary_data?: string | undefined
  company_entry_description?: string | undefined
  company_id?: string | undefined
  company_name?: string | undefined
}
type InboundAchTransferSimulationResult = {
  declined_transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      ach_decline: {
        amount: number
        originator_company_descriptive_date: string | null
        originator_company_discretionary_data: string | null
        originator_company_id: string
        originator_company_name: string
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'credit_entry_refused_by_receiver'
          | 'duplicate_return'
          | 'entity_not_active'
          | 'transaction_not_allowed'
          | 'group_locked'
          | 'insufficient_funds'
          | 'no_ach_route'
          | 'originator_request'
        receiver_id_number: string | null
        receiver_name: string | null
        trace_number: string
      } | null
      card_decline: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        digital_wallet_token_id: string | null
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        merchant_state: string | null
        network: 'visa'
        network_details: {
          visa: {
            electronic_commerce_indicator:
              | 'mail_phone_order'
              | 'recurring'
              | 'installment'
              | 'unknown_mail_phone_order'
              | 'secure_electronic_commerce'
              | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
              | 'non_authenticated_security_transaction'
              | 'non_secure_transaction'
            point_of_service_entry_mode:
              | 'manual'
              | 'magnetic_stripe_no_cvv'
              | 'optical_code'
              | 'integrated_circuit_card'
              | 'contactless'
              | 'credential_on_file'
              | 'magnetic_stripe'
              | 'contactless_magnetic_stripe'
              | 'integrated_circuit_card_no_cvv'
          }
        }
        real_time_decision_id: string | null
        reason:
          | 'card_not_active'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'cvv2_mismatch'
          | 'transaction_not_allowed'
          | 'breaches_limit'
          | 'webhook_declined'
          | 'webhook_timed_out'
          | 'declined_by_stand_in_processing'
      } | null
      card_route_decline: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      category:
        | 'ach_decline'
        | 'card_decline'
        | 'check_decline'
        | 'inbound_real_time_payments_transfer_decline'
        | 'international_ach_decline'
        | 'card_route_decline'
        | 'other'
      check_decline: {
        amount: number
        auxiliary_on_us: string | null
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'unable_to_locate_account'
          | 'unable_to_process'
          | 'refer_to_image'
          | 'stop_payment_requested'
          | 'returned'
      } | null
      inbound_real_time_payments_transfer_decline: {
        amount: number
        creditor_name: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        debtor_account_number: string
        debtor_name: string
        debtor_routing_number: string
        reason:
          | 'account_number_canceled'
          | 'account_number_disabled'
          | 'group_locked'
          | 'entity_not_active'
          | 'real_time_payments_not_enabled'
        remittance_information: string | null
        transaction_identification: string
      } | null
      international_ach_decline: {
        amount: number
        destination_country_code: string
        destination_currency_code: string
        foreign_exchange_indicator: string
        foreign_exchange_reference: string | null
        foreign_exchange_reference_indicator: string
        foreign_payment_amount: number
        foreign_trace_number: string | null
        international_transaction_type_code: string
        originating_currency_code: string
        originating_depository_financial_institution_branch_country: string
        originating_depository_financial_institution_id: string
        originating_depository_financial_institution_id_qualifier: string
        originating_depository_financial_institution_name: string
        originator_city: string
        originator_company_entry_description: string
        originator_country: string
        originator_identification: string
        originator_name: string
        originator_postal_code: string | null
        originator_state_or_province: string | null
        originator_street_address: string
        payment_related_information: string | null
        payment_related_information2: string | null
        receiver_city: string
        receiver_country: string
        receiver_identification_number: string | null
        receiver_postal_code: string | null
        receiver_state_or_province: string | null
        receiver_street_address: string
        receiving_company_or_individual_name: string
        receiving_depository_financial_institution_country: string
        receiving_depository_financial_institution_id: string
        receiving_depository_financial_institution_id_qualifier: string
        receiving_depository_financial_institution_name: string
        trace_number: string
      } | null
    }
    type: 'declined_transaction'
  } | null
  transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      account_transfer_intention: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        description: string
        destination_account_id: string
        source_account_id: string
        transfer_id: string
      } | null
      ach_check_conversion: { amount: number; file_id: string } | null
      ach_check_conversion_return: { amount: number; return_reason_code: string } | null
      ach_transfer_intention: {
        account_number: string
        amount: number
        routing_number: string
        statement_descriptor: string
        transfer_id: string
      } | null
      ach_transfer_rejection: { transfer_id: string } | null
      ach_transfer_return: {
        created_at: string
        return_reason_code:
          | 'insufficient_fund'
          | 'no_account'
          | 'account_closed'
          | 'invalid_account_number_structure'
          | 'account_frozen_entry_returned_per_ofac_instruction'
          | 'credit_entry_refused_by_receiver'
          | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
          | 'corporate_customer_advised_not_authorized'
          | 'payment_stopped'
          | 'non_transaction_account'
          | 'uncollected_funds'
          | 'routing_number_check_digit_error'
          | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
          | 'amount_field_error'
          | 'authorization_revoked_by_customer'
          | 'invalid_ach_routing_number'
          | 'file_record_edit_criteria'
          | 'enr_invalid_individual_name'
          | 'returned_per_odfi_request'
          | 'addenda_error'
          | 'limited_participation_dfi'
          | 'incorrectly_coded_outbound_international_payment'
          | 'other'
        transaction_id: string
        transfer_id: string
      } | null
      card_dispute_acceptance: {
        accepted_at: string
        card_dispute_id: string
        transaction_id: string | null
      } | null
      card_refund: {
        amount: number
        card_settlement_transaction_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        type: 'card_refund'
      } | null
      card_route_refund: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      card_route_settlement: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      card_settlement: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_category_code: string
        merchant_city: string | null
        merchant_country: string
        merchant_name: string | null
        merchant_state: string | null
        pending_transaction_id: string | null
        presentment_amount: number
        presentment_currency: string
        type: 'card_settlement'
      } | null
      category:
        | 'account_transfer_intention'
        | 'ach_check_conversion_return'
        | 'ach_check_conversion'
        | 'ach_transfer_intention'
        | 'ach_transfer_rejection'
        | 'ach_transfer_return'
        | 'card_dispute_acceptance'
        | 'card_refund'
        | 'card_settlement'
        | 'check_deposit_acceptance'
        | 'check_deposit_return'
        | 'check_transfer_intention'
        | 'check_transfer_return'
        | 'check_transfer_rejection'
        | 'check_transfer_stop_payment_request'
        | 'dispute_resolution'
        | 'empyreal_cash_deposit'
        | 'inbound_ach_transfer'
        | 'inbound_ach_transfer_return_intention'
        | 'inbound_check'
        | 'inbound_international_ach_transfer'
        | 'inbound_real_time_payments_transfer_confirmation'
        | 'inbound_wire_drawdown_payment_reversal'
        | 'inbound_wire_drawdown_payment'
        | 'inbound_wire_reversal'
        | 'inbound_wire_transfer'
        | 'interest_payment'
        | 'internal_general_ledger_transaction'
        | 'internal_source'
        | 'card_route_refund'
        | 'card_route_settlement'
        | 'real_time_payments_transfer_acknowledgement'
        | 'sample_funds'
        | 'wire_drawdown_payment_intention'
        | 'wire_drawdown_payment_rejection'
        | 'wire_transfer_intention'
        | 'wire_transfer_rejection'
        | 'other'
      check_deposit_acceptance: {
        account_number: string
        amount: number
        auxiliary_on_us: string | null
        check_deposit_id: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        routing_number: string
        serial_number: string | null
      } | null
      check_deposit_return: {
        amount: number
        check_deposit_id: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        return_reason:
          | 'ach_conversion_not_supported'
          | 'closed_account'
          | 'duplicate_submission'
          | 'insufficient_funds'
          | 'no_account'
          | 'not_authorized'
          | 'stale_dated'
          | 'stop_payment'
          | 'unknown_reason'
          | 'unmatched_details'
          | 'unreadable_image'
        returned_at: string
        transaction_id: string
      } | null
      check_transfer_intention: {
        address_city: string
        address_line1: string
        address_line2: string | null
        address_state: string
        address_zip: string
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        recipient_name: string
        transfer_id: string
      } | null
      check_transfer_rejection: { transfer_id: string } | null
      check_transfer_return: { file_id: string | null; transfer_id: string } | null
      check_transfer_stop_payment_request: {
        requested_at: string
        transaction_id: string
        transfer_id: string
        type: 'check_transfer_stop_payment_request'
      } | null
      dispute_resolution: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        disputed_transaction_id: string
      } | null
      empyreal_cash_deposit: { amount: number; bag_id: string; deposit_date: string } | null
      inbound_ach_transfer: {
        amount: number
        originator_company_descriptive_date: string | null
        originator_company_discretionary_data: string | null
        originator_company_entry_description: string
        originator_company_id: string
        originator_company_name: string
        receiver_id_number: string | null
        receiver_name: string | null
        trace_number: string
      } | null
      inbound_check: {
        amount: number
        check_front_image_file_id: string | null
        check_number: string | null
        check_rear_image_file_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      } | null
      inbound_international_ach_transfer: {
        amount: number
        destination_country_code: string
        destination_currency_code: string
        foreign_exchange_indicator: string
        foreign_exchange_reference: string | null
        foreign_exchange_reference_indicator: string
        foreign_payment_amount: number
        foreign_trace_number: string | null
        international_transaction_type_code: string
        originating_currency_code: string
        originating_depository_financial_institution_branch_country: string
        originating_depository_financial_institution_id: string
        originating_depository_financial_institution_id_qualifier: string
        originating_depository_financial_institution_name: string
        originator_city: string
        originator_company_entry_description: string
        originator_country: string
        originator_identification: string
        originator_name: string
        originator_postal_code: string | null
        originator_state_or_province: string | null
        originator_street_address: string
        payment_related_information: string | null
        payment_related_information2: string | null
        receiver_city: string
        receiver_country: string
        receiver_identification_number: string | null
        receiver_postal_code: string | null
        receiver_state_or_province: string | null
        receiver_street_address: string
        receiving_company_or_individual_name: string
        receiving_depository_financial_institution_country: string
        receiving_depository_financial_institution_id: string
        receiving_depository_financial_institution_id_qualifier: string
        receiving_depository_financial_institution_name: string
        trace_number: string
      } | null
      inbound_real_time_payments_transfer_confirmation: {
        amount: number
        creditor_name: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        debtor_account_number: string
        debtor_name: string
        debtor_routing_number: string
        remittance_information: string | null
        transaction_identification: string
      } | null
      inbound_wire_drawdown_payment: {
        amount: number
        beneficiary_address_line1: string | null
        beneficiary_address_line2: string | null
        beneficiary_address_line3: string | null
        beneficiary_name: string | null
        beneficiary_reference: string | null
        description: string
        input_message_accountability_data: string | null
        originator_address_line1: string | null
        originator_address_line2: string | null
        originator_address_line3: string | null
        originator_name: string | null
        originator_to_beneficiary_information: string | null
      } | null
      inbound_wire_drawdown_payment_reversal: {
        amount: number
        description: string
        input_cycle_date: string
        input_message_accountability_data: string
        input_sequence_number: string
        input_source: string
        previous_message_input_cycle_date: string
        previous_message_input_message_accountability_data: string
        previous_message_input_sequence_number: string
        previous_message_input_source: string
      } | null
      inbound_wire_reversal: {
        amount: number
        description: string
        financial_institution_to_financial_institution_information: string | null
        input_cycle_date: string
        input_message_accountability_data: string
        input_sequence_number: string
        input_source: string
        previous_message_input_cycle_date: string
        previous_message_input_message_accountability_data: string
        previous_message_input_sequence_number: string
        previous_message_input_source: string
        receiver_financial_institution_information: string | null
      } | null
      inbound_wire_transfer: {
        amount: number
        beneficiary_address_line1: string | null
        beneficiary_address_line2: string | null
        beneficiary_address_line3: string | null
        beneficiary_name: string | null
        beneficiary_reference: string | null
        description: string
        input_message_accountability_data: string | null
        originator_address_line1: string | null
        originator_address_line2: string | null
        originator_address_line3: string | null
        originator_name: string | null
        originator_to_beneficiary_information: string | null
        originator_to_beneficiary_information_line1: string | null
        originator_to_beneficiary_information_line2: string | null
        originator_to_beneficiary_information_line3: string | null
        originator_to_beneficiary_information_line4: string | null
      } | null
      interest_payment: {
        accrued_on_account_id: string | null
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        period_end: string
        period_start: string
      } | null
      internal_source: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        reason:
          | 'bank_migration'
          | 'cashback'
          | 'empyreal_adjustment'
          | 'error'
          | 'error_correction'
          | 'fees'
          | 'interest'
          | 'sample_funds'
          | 'sample_funds_return'
      } | null
      sample_funds: { originator: string } | null
      wire_drawdown_payment_intention: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
      wire_drawdown_payment_rejection: { transfer_id: string } | null
      wire_transfer_intention: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
      wire_transfer_rejection: { transfer_id: string } | null
    }
    type: 'transaction'
  } | null
  type: 'inbound_ach_transfer_simulation_result'
}
type SimulateARealTimePaymentsTransferToYourAccountParameters = {
  account_number_id: string
  amount: number
  debtor_account_number?: string | undefined
  debtor_name?: string | undefined
  debtor_routing_number?: string | undefined
  remittance_information?: string | undefined
  request_for_payment_id?: string | undefined
}
type InboundRealTimePaymentsTransferSimulationResult = {
  declined_transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      ach_decline: {
        amount: number
        originator_company_descriptive_date: string | null
        originator_company_discretionary_data: string | null
        originator_company_id: string
        originator_company_name: string
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'credit_entry_refused_by_receiver'
          | 'duplicate_return'
          | 'entity_not_active'
          | 'transaction_not_allowed'
          | 'group_locked'
          | 'insufficient_funds'
          | 'no_ach_route'
          | 'originator_request'
        receiver_id_number: string | null
        receiver_name: string | null
        trace_number: string
      } | null
      card_decline: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        digital_wallet_token_id: string | null
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        merchant_state: string | null
        network: 'visa'
        network_details: {
          visa: {
            electronic_commerce_indicator:
              | 'mail_phone_order'
              | 'recurring'
              | 'installment'
              | 'unknown_mail_phone_order'
              | 'secure_electronic_commerce'
              | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
              | 'non_authenticated_security_transaction'
              | 'non_secure_transaction'
            point_of_service_entry_mode:
              | 'manual'
              | 'magnetic_stripe_no_cvv'
              | 'optical_code'
              | 'integrated_circuit_card'
              | 'contactless'
              | 'credential_on_file'
              | 'magnetic_stripe'
              | 'contactless_magnetic_stripe'
              | 'integrated_circuit_card_no_cvv'
          }
        }
        real_time_decision_id: string | null
        reason:
          | 'card_not_active'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'cvv2_mismatch'
          | 'transaction_not_allowed'
          | 'breaches_limit'
          | 'webhook_declined'
          | 'webhook_timed_out'
          | 'declined_by_stand_in_processing'
      } | null
      card_route_decline: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      category:
        | 'ach_decline'
        | 'card_decline'
        | 'check_decline'
        | 'inbound_real_time_payments_transfer_decline'
        | 'international_ach_decline'
        | 'card_route_decline'
        | 'other'
      check_decline: {
        amount: number
        auxiliary_on_us: string | null
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'unable_to_locate_account'
          | 'unable_to_process'
          | 'refer_to_image'
          | 'stop_payment_requested'
          | 'returned'
      } | null
      inbound_real_time_payments_transfer_decline: {
        amount: number
        creditor_name: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        debtor_account_number: string
        debtor_name: string
        debtor_routing_number: string
        reason:
          | 'account_number_canceled'
          | 'account_number_disabled'
          | 'group_locked'
          | 'entity_not_active'
          | 'real_time_payments_not_enabled'
        remittance_information: string | null
        transaction_identification: string
      } | null
      international_ach_decline: {
        amount: number
        destination_country_code: string
        destination_currency_code: string
        foreign_exchange_indicator: string
        foreign_exchange_reference: string | null
        foreign_exchange_reference_indicator: string
        foreign_payment_amount: number
        foreign_trace_number: string | null
        international_transaction_type_code: string
        originating_currency_code: string
        originating_depository_financial_institution_branch_country: string
        originating_depository_financial_institution_id: string
        originating_depository_financial_institution_id_qualifier: string
        originating_depository_financial_institution_name: string
        originator_city: string
        originator_company_entry_description: string
        originator_country: string
        originator_identification: string
        originator_name: string
        originator_postal_code: string | null
        originator_state_or_province: string | null
        originator_street_address: string
        payment_related_information: string | null
        payment_related_information2: string | null
        receiver_city: string
        receiver_country: string
        receiver_identification_number: string | null
        receiver_postal_code: string | null
        receiver_state_or_province: string | null
        receiver_street_address: string
        receiving_company_or_individual_name: string
        receiving_depository_financial_institution_country: string
        receiving_depository_financial_institution_id: string
        receiving_depository_financial_institution_id_qualifier: string
        receiving_depository_financial_institution_name: string
        trace_number: string
      } | null
    }
    type: 'declined_transaction'
  } | null
  transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      account_transfer_intention: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        description: string
        destination_account_id: string
        source_account_id: string
        transfer_id: string
      } | null
      ach_check_conversion: { amount: number; file_id: string } | null
      ach_check_conversion_return: { amount: number; return_reason_code: string } | null
      ach_transfer_intention: {
        account_number: string
        amount: number
        routing_number: string
        statement_descriptor: string
        transfer_id: string
      } | null
      ach_transfer_rejection: { transfer_id: string } | null
      ach_transfer_return: {
        created_at: string
        return_reason_code:
          | 'insufficient_fund'
          | 'no_account'
          | 'account_closed'
          | 'invalid_account_number_structure'
          | 'account_frozen_entry_returned_per_ofac_instruction'
          | 'credit_entry_refused_by_receiver'
          | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
          | 'corporate_customer_advised_not_authorized'
          | 'payment_stopped'
          | 'non_transaction_account'
          | 'uncollected_funds'
          | 'routing_number_check_digit_error'
          | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
          | 'amount_field_error'
          | 'authorization_revoked_by_customer'
          | 'invalid_ach_routing_number'
          | 'file_record_edit_criteria'
          | 'enr_invalid_individual_name'
          | 'returned_per_odfi_request'
          | 'addenda_error'
          | 'limited_participation_dfi'
          | 'incorrectly_coded_outbound_international_payment'
          | 'other'
        transaction_id: string
        transfer_id: string
      } | null
      card_dispute_acceptance: {
        accepted_at: string
        card_dispute_id: string
        transaction_id: string | null
      } | null
      card_refund: {
        amount: number
        card_settlement_transaction_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        type: 'card_refund'
      } | null
      card_route_refund: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      card_route_settlement: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      card_settlement: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_category_code: string
        merchant_city: string | null
        merchant_country: string
        merchant_name: string | null
        merchant_state: string | null
        pending_transaction_id: string | null
        presentment_amount: number
        presentment_currency: string
        type: 'card_settlement'
      } | null
      category:
        | 'account_transfer_intention'
        | 'ach_check_conversion_return'
        | 'ach_check_conversion'
        | 'ach_transfer_intention'
        | 'ach_transfer_rejection'
        | 'ach_transfer_return'
        | 'card_dispute_acceptance'
        | 'card_refund'
        | 'card_settlement'
        | 'check_deposit_acceptance'
        | 'check_deposit_return'
        | 'check_transfer_intention'
        | 'check_transfer_return'
        | 'check_transfer_rejection'
        | 'check_transfer_stop_payment_request'
        | 'dispute_resolution'
        | 'empyreal_cash_deposit'
        | 'inbound_ach_transfer'
        | 'inbound_ach_transfer_return_intention'
        | 'inbound_check'
        | 'inbound_international_ach_transfer'
        | 'inbound_real_time_payments_transfer_confirmation'
        | 'inbound_wire_drawdown_payment_reversal'
        | 'inbound_wire_drawdown_payment'
        | 'inbound_wire_reversal'
        | 'inbound_wire_transfer'
        | 'interest_payment'
        | 'internal_general_ledger_transaction'
        | 'internal_source'
        | 'card_route_refund'
        | 'card_route_settlement'
        | 'real_time_payments_transfer_acknowledgement'
        | 'sample_funds'
        | 'wire_drawdown_payment_intention'
        | 'wire_drawdown_payment_rejection'
        | 'wire_transfer_intention'
        | 'wire_transfer_rejection'
        | 'other'
      check_deposit_acceptance: {
        account_number: string
        amount: number
        auxiliary_on_us: string | null
        check_deposit_id: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        routing_number: string
        serial_number: string | null
      } | null
      check_deposit_return: {
        amount: number
        check_deposit_id: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        return_reason:
          | 'ach_conversion_not_supported'
          | 'closed_account'
          | 'duplicate_submission'
          | 'insufficient_funds'
          | 'no_account'
          | 'not_authorized'
          | 'stale_dated'
          | 'stop_payment'
          | 'unknown_reason'
          | 'unmatched_details'
          | 'unreadable_image'
        returned_at: string
        transaction_id: string
      } | null
      check_transfer_intention: {
        address_city: string
        address_line1: string
        address_line2: string | null
        address_state: string
        address_zip: string
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        recipient_name: string
        transfer_id: string
      } | null
      check_transfer_rejection: { transfer_id: string } | null
      check_transfer_return: { file_id: string | null; transfer_id: string } | null
      check_transfer_stop_payment_request: {
        requested_at: string
        transaction_id: string
        transfer_id: string
        type: 'check_transfer_stop_payment_request'
      } | null
      dispute_resolution: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        disputed_transaction_id: string
      } | null
      empyreal_cash_deposit: { amount: number; bag_id: string; deposit_date: string } | null
      inbound_ach_transfer: {
        amount: number
        originator_company_descriptive_date: string | null
        originator_company_discretionary_data: string | null
        originator_company_entry_description: string
        originator_company_id: string
        originator_company_name: string
        receiver_id_number: string | null
        receiver_name: string | null
        trace_number: string
      } | null
      inbound_check: {
        amount: number
        check_front_image_file_id: string | null
        check_number: string | null
        check_rear_image_file_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      } | null
      inbound_international_ach_transfer: {
        amount: number
        destination_country_code: string
        destination_currency_code: string
        foreign_exchange_indicator: string
        foreign_exchange_reference: string | null
        foreign_exchange_reference_indicator: string
        foreign_payment_amount: number
        foreign_trace_number: string | null
        international_transaction_type_code: string
        originating_currency_code: string
        originating_depository_financial_institution_branch_country: string
        originating_depository_financial_institution_id: string
        originating_depository_financial_institution_id_qualifier: string
        originating_depository_financial_institution_name: string
        originator_city: string
        originator_company_entry_description: string
        originator_country: string
        originator_identification: string
        originator_name: string
        originator_postal_code: string | null
        originator_state_or_province: string | null
        originator_street_address: string
        payment_related_information: string | null
        payment_related_information2: string | null
        receiver_city: string
        receiver_country: string
        receiver_identification_number: string | null
        receiver_postal_code: string | null
        receiver_state_or_province: string | null
        receiver_street_address: string
        receiving_company_or_individual_name: string
        receiving_depository_financial_institution_country: string
        receiving_depository_financial_institution_id: string
        receiving_depository_financial_institution_id_qualifier: string
        receiving_depository_financial_institution_name: string
        trace_number: string
      } | null
      inbound_real_time_payments_transfer_confirmation: {
        amount: number
        creditor_name: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        debtor_account_number: string
        debtor_name: string
        debtor_routing_number: string
        remittance_information: string | null
        transaction_identification: string
      } | null
      inbound_wire_drawdown_payment: {
        amount: number
        beneficiary_address_line1: string | null
        beneficiary_address_line2: string | null
        beneficiary_address_line3: string | null
        beneficiary_name: string | null
        beneficiary_reference: string | null
        description: string
        input_message_accountability_data: string | null
        originator_address_line1: string | null
        originator_address_line2: string | null
        originator_address_line3: string | null
        originator_name: string | null
        originator_to_beneficiary_information: string | null
      } | null
      inbound_wire_drawdown_payment_reversal: {
        amount: number
        description: string
        input_cycle_date: string
        input_message_accountability_data: string
        input_sequence_number: string
        input_source: string
        previous_message_input_cycle_date: string
        previous_message_input_message_accountability_data: string
        previous_message_input_sequence_number: string
        previous_message_input_source: string
      } | null
      inbound_wire_reversal: {
        amount: number
        description: string
        financial_institution_to_financial_institution_information: string | null
        input_cycle_date: string
        input_message_accountability_data: string
        input_sequence_number: string
        input_source: string
        previous_message_input_cycle_date: string
        previous_message_input_message_accountability_data: string
        previous_message_input_sequence_number: string
        previous_message_input_source: string
        receiver_financial_institution_information: string | null
      } | null
      inbound_wire_transfer: {
        amount: number
        beneficiary_address_line1: string | null
        beneficiary_address_line2: string | null
        beneficiary_address_line3: string | null
        beneficiary_name: string | null
        beneficiary_reference: string | null
        description: string
        input_message_accountability_data: string | null
        originator_address_line1: string | null
        originator_address_line2: string | null
        originator_address_line3: string | null
        originator_name: string | null
        originator_to_beneficiary_information: string | null
        originator_to_beneficiary_information_line1: string | null
        originator_to_beneficiary_information_line2: string | null
        originator_to_beneficiary_information_line3: string | null
        originator_to_beneficiary_information_line4: string | null
      } | null
      interest_payment: {
        accrued_on_account_id: string | null
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        period_end: string
        period_start: string
      } | null
      internal_source: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        reason:
          | 'bank_migration'
          | 'cashback'
          | 'empyreal_adjustment'
          | 'error'
          | 'error_correction'
          | 'fees'
          | 'interest'
          | 'sample_funds'
          | 'sample_funds_return'
      } | null
      sample_funds: { originator: string } | null
      wire_drawdown_payment_intention: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
      wire_drawdown_payment_rejection: { transfer_id: string } | null
      wire_transfer_intention: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
      wire_transfer_rejection: { transfer_id: string } | null
    }
    type: 'transaction'
  } | null
  type: 'inbound_real_time_payments_transfer_simulation_result'
}
type SimulateAnInboundWireDrawdownRequestBeingCreatedParameters = {
  amount: number
  beneficiary_account_number: string
  beneficiary_address_line1?: string | undefined
  beneficiary_address_line2?: string | undefined
  beneficiary_address_line3?: string | undefined
  beneficiary_name?: string | undefined
  beneficiary_routing_number: string
  currency: string
  message_to_recipient: string
  originator_account_number: string
  originator_address_line1?: string | undefined
  originator_address_line2?: string | undefined
  originator_address_line3?: string | undefined
  originator_name?: string | undefined
  originator_routing_number: string
  originator_to_beneficiary_information_line1?: string | undefined
  originator_to_beneficiary_information_line2?: string | undefined
  originator_to_beneficiary_information_line3?: string | undefined
  originator_to_beneficiary_information_line4?: string | undefined
  recipient_account_number_id: string
}
type SimulateAWireTransferToYourAccountParameters = {
  account_number_id: string
  amount: number
  beneficiary_address_line1?: string | undefined
  beneficiary_address_line2?: string | undefined
  beneficiary_address_line3?: string | undefined
  beneficiary_name?: string | undefined
  beneficiary_reference?: string | undefined
  originator_address_line1?: string | undefined
  originator_address_line2?: string | undefined
  originator_address_line3?: string | undefined
  originator_name?: string | undefined
  originator_to_beneficiary_information_line1?: string | undefined
  originator_to_beneficiary_information_line2?: string | undefined
  originator_to_beneficiary_information_line3?: string | undefined
  originator_to_beneficiary_information_line4?: string | undefined
}
type InboundWireTransferSimulationResult = {
  transaction: {
    account_id: string
    amount: number
    created_at: string
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
    description: string
    id: string
    route_id: string | null
    route_type: string | null
    source: {
      account_transfer_intention: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        description: string
        destination_account_id: string
        source_account_id: string
        transfer_id: string
      } | null
      ach_check_conversion: { amount: number; file_id: string } | null
      ach_check_conversion_return: { amount: number; return_reason_code: string } | null
      ach_transfer_intention: {
        account_number: string
        amount: number
        routing_number: string
        statement_descriptor: string
        transfer_id: string
      } | null
      ach_transfer_rejection: { transfer_id: string } | null
      ach_transfer_return: {
        created_at: string
        return_reason_code:
          | 'insufficient_fund'
          | 'no_account'
          | 'account_closed'
          | 'invalid_account_number_structure'
          | 'account_frozen_entry_returned_per_ofac_instruction'
          | 'credit_entry_refused_by_receiver'
          | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
          | 'corporate_customer_advised_not_authorized'
          | 'payment_stopped'
          | 'non_transaction_account'
          | 'uncollected_funds'
          | 'routing_number_check_digit_error'
          | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
          | 'amount_field_error'
          | 'authorization_revoked_by_customer'
          | 'invalid_ach_routing_number'
          | 'file_record_edit_criteria'
          | 'enr_invalid_individual_name'
          | 'returned_per_odfi_request'
          | 'addenda_error'
          | 'limited_participation_dfi'
          | 'incorrectly_coded_outbound_international_payment'
          | 'other'
        transaction_id: string
        transfer_id: string
      } | null
      card_dispute_acceptance: {
        accepted_at: string
        card_dispute_id: string
        transaction_id: string | null
      } | null
      card_refund: {
        amount: number
        card_settlement_transaction_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        type: 'card_refund'
      } | null
      card_route_refund: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      card_route_settlement: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_acceptor_id: string
        merchant_category_code: string | null
        merchant_city: string | null
        merchant_country: string | null
        merchant_descriptor: string
        merchant_state: string | null
      } | null
      card_settlement: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        merchant_category_code: string
        merchant_city: string | null
        merchant_country: string
        merchant_name: string | null
        merchant_state: string | null
        pending_transaction_id: string | null
        presentment_amount: number
        presentment_currency: string
        type: 'card_settlement'
      } | null
      category:
        | 'account_transfer_intention'
        | 'ach_check_conversion_return'
        | 'ach_check_conversion'
        | 'ach_transfer_intention'
        | 'ach_transfer_rejection'
        | 'ach_transfer_return'
        | 'card_dispute_acceptance'
        | 'card_refund'
        | 'card_settlement'
        | 'check_deposit_acceptance'
        | 'check_deposit_return'
        | 'check_transfer_intention'
        | 'check_transfer_return'
        | 'check_transfer_rejection'
        | 'check_transfer_stop_payment_request'
        | 'dispute_resolution'
        | 'empyreal_cash_deposit'
        | 'inbound_ach_transfer'
        | 'inbound_ach_transfer_return_intention'
        | 'inbound_check'
        | 'inbound_international_ach_transfer'
        | 'inbound_real_time_payments_transfer_confirmation'
        | 'inbound_wire_drawdown_payment_reversal'
        | 'inbound_wire_drawdown_payment'
        | 'inbound_wire_reversal'
        | 'inbound_wire_transfer'
        | 'interest_payment'
        | 'internal_general_ledger_transaction'
        | 'internal_source'
        | 'card_route_refund'
        | 'card_route_settlement'
        | 'real_time_payments_transfer_acknowledgement'
        | 'sample_funds'
        | 'wire_drawdown_payment_intention'
        | 'wire_drawdown_payment_rejection'
        | 'wire_transfer_intention'
        | 'wire_transfer_rejection'
        | 'other'
      check_deposit_acceptance: {
        account_number: string
        amount: number
        auxiliary_on_us: string | null
        check_deposit_id: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        routing_number: string
        serial_number: string | null
      } | null
      check_deposit_return: {
        amount: number
        check_deposit_id: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        return_reason:
          | 'ach_conversion_not_supported'
          | 'closed_account'
          | 'duplicate_submission'
          | 'insufficient_funds'
          | 'no_account'
          | 'not_authorized'
          | 'stale_dated'
          | 'stop_payment'
          | 'unknown_reason'
          | 'unmatched_details'
          | 'unreadable_image'
        returned_at: string
        transaction_id: string
      } | null
      check_transfer_intention: {
        address_city: string
        address_line1: string
        address_line2: string | null
        address_state: string
        address_zip: string
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        recipient_name: string
        transfer_id: string
      } | null
      check_transfer_rejection: { transfer_id: string } | null
      check_transfer_return: { file_id: string | null; transfer_id: string } | null
      check_transfer_stop_payment_request: {
        requested_at: string
        transaction_id: string
        transfer_id: string
        type: 'check_transfer_stop_payment_request'
      } | null
      dispute_resolution: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        disputed_transaction_id: string
      } | null
      empyreal_cash_deposit: { amount: number; bag_id: string; deposit_date: string } | null
      inbound_ach_transfer: {
        amount: number
        originator_company_descriptive_date: string | null
        originator_company_discretionary_data: string | null
        originator_company_entry_description: string
        originator_company_id: string
        originator_company_name: string
        receiver_id_number: string | null
        receiver_name: string | null
        trace_number: string
      } | null
      inbound_check: {
        amount: number
        check_front_image_file_id: string | null
        check_number: string | null
        check_rear_image_file_id: string | null
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
      } | null
      inbound_international_ach_transfer: {
        amount: number
        destination_country_code: string
        destination_currency_code: string
        foreign_exchange_indicator: string
        foreign_exchange_reference: string | null
        foreign_exchange_reference_indicator: string
        foreign_payment_amount: number
        foreign_trace_number: string | null
        international_transaction_type_code: string
        originating_currency_code: string
        originating_depository_financial_institution_branch_country: string
        originating_depository_financial_institution_id: string
        originating_depository_financial_institution_id_qualifier: string
        originating_depository_financial_institution_name: string
        originator_city: string
        originator_company_entry_description: string
        originator_country: string
        originator_identification: string
        originator_name: string
        originator_postal_code: string | null
        originator_state_or_province: string | null
        originator_street_address: string
        payment_related_information: string | null
        payment_related_information2: string | null
        receiver_city: string
        receiver_country: string
        receiver_identification_number: string | null
        receiver_postal_code: string | null
        receiver_state_or_province: string | null
        receiver_street_address: string
        receiving_company_or_individual_name: string
        receiving_depository_financial_institution_country: string
        receiving_depository_financial_institution_id: string
        receiving_depository_financial_institution_id_qualifier: string
        receiving_depository_financial_institution_name: string
        trace_number: string
      } | null
      inbound_real_time_payments_transfer_confirmation: {
        amount: number
        creditor_name: string
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        debtor_account_number: string
        debtor_name: string
        debtor_routing_number: string
        remittance_information: string | null
        transaction_identification: string
      } | null
      inbound_wire_drawdown_payment: {
        amount: number
        beneficiary_address_line1: string | null
        beneficiary_address_line2: string | null
        beneficiary_address_line3: string | null
        beneficiary_name: string | null
        beneficiary_reference: string | null
        description: string
        input_message_accountability_data: string | null
        originator_address_line1: string | null
        originator_address_line2: string | null
        originator_address_line3: string | null
        originator_name: string | null
        originator_to_beneficiary_information: string | null
      } | null
      inbound_wire_drawdown_payment_reversal: {
        amount: number
        description: string
        input_cycle_date: string
        input_message_accountability_data: string
        input_sequence_number: string
        input_source: string
        previous_message_input_cycle_date: string
        previous_message_input_message_accountability_data: string
        previous_message_input_sequence_number: string
        previous_message_input_source: string
      } | null
      inbound_wire_reversal: {
        amount: number
        description: string
        financial_institution_to_financial_institution_information: string | null
        input_cycle_date: string
        input_message_accountability_data: string
        input_sequence_number: string
        input_source: string
        previous_message_input_cycle_date: string
        previous_message_input_message_accountability_data: string
        previous_message_input_sequence_number: string
        previous_message_input_source: string
        receiver_financial_institution_information: string | null
      } | null
      inbound_wire_transfer: {
        amount: number
        beneficiary_address_line1: string | null
        beneficiary_address_line2: string | null
        beneficiary_address_line3: string | null
        beneficiary_name: string | null
        beneficiary_reference: string | null
        description: string
        input_message_accountability_data: string | null
        originator_address_line1: string | null
        originator_address_line2: string | null
        originator_address_line3: string | null
        originator_name: string | null
        originator_to_beneficiary_information: string | null
        originator_to_beneficiary_information_line1: string | null
        originator_to_beneficiary_information_line2: string | null
        originator_to_beneficiary_information_line3: string | null
        originator_to_beneficiary_information_line4: string | null
      } | null
      interest_payment: {
        accrued_on_account_id: string | null
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        period_end: string
        period_start: string
      } | null
      internal_source: {
        amount: number
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
        reason:
          | 'bank_migration'
          | 'cashback'
          | 'empyreal_adjustment'
          | 'error'
          | 'error_correction'
          | 'fees'
          | 'interest'
          | 'sample_funds'
          | 'sample_funds_return'
      } | null
      sample_funds: { originator: string } | null
      wire_drawdown_payment_intention: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
      wire_drawdown_payment_rejection: { transfer_id: string } | null
      wire_transfer_intention: {
        account_number: string
        amount: number
        message_to_recipient: string
        routing_number: string
        transfer_id: string
      } | null
      wire_transfer_rejection: { transfer_id: string } | null
    }
    type: 'transaction'
  }
  type: 'inbound_wire_transfer_simulation_result'
}
type WireTransfer = {
  account_id: string
  account_number: string
  amount: number
  approval: { approved_at: string } | null
  beneficiary_address_line1: string | null
  beneficiary_address_line2: string | null
  beneficiary_address_line3: string | null
  beneficiary_name: string | null
  cancellation: { canceled_at: string } | null
  created_at: string
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'
  external_account_id: string | null
  id: string
  message_to_recipient: string | null
  network: 'wire'
  reversal: {
    amount: number
    description: string
    financial_institution_to_financial_institution_information: string | null
    input_cycle_date: string
    input_message_accountability_data: string
    input_sequence_number: string
    input_source: string
    previous_message_input_cycle_date: string
    previous_message_input_message_accountability_data: string
    previous_message_input_sequence_number: string
    previous_message_input_source: string
    receiver_financial_institution_information: string | null
  } | null
  routing_number: string
  status:
    | 'canceled'
    | 'requires_attention'
    | 'pending_approval'
    | 'rejected'
    | 'reversed'
    | 'complete'
    | 'pending_creating'
  submission: { input_message_accountability_data: string; submitted_at: string } | null
  template_id: string | null
  transaction_id: string | null
  type: 'wire_transfer'
}
type TransactionList = { data: Transaction[]; next_cursor: string | null }
type WireDrawdownRequest = {
  account_number_id: string
  amount: number
  currency: string
  fulfillment_transaction_id: string | null
  id: string
  message_to_recipient: string
  recipient_account_number: string
  recipient_address_line1: string | null
  recipient_address_line2: string | null
  recipient_address_line3: string | null
  recipient_name: string | null
  recipient_routing_number: string
  status: 'pending_submission' | 'pending_response' | 'fulfilled' | 'refused'
  submission: { input_message_accountability_data: string } | null
  type: 'wire_drawdown_request'
}
type WireDrawdownRequestList = { data: WireDrawdownRequest[]; next_cursor: string | null }
type CreateAWireDrawdownRequestParameters = {
  account_number_id: string
  amount: number
  message_to_recipient: string
  recipient_account_number: string
  recipient_address_line1?: string | undefined
  recipient_address_line2?: string | undefined
  recipient_address_line3?: string | undefined
  recipient_name: string
  recipient_routing_number: string
}
type WireTransferList = { data: WireTransfer[]; next_cursor: string | null }
type CreateAWireTransferParameters = {
  account_id: string
  account_number?: string | undefined
  amount: number
  beneficiary_address_line1?: string | undefined
  beneficiary_address_line2?: string | undefined
  beneficiary_address_line3?: string | undefined
  beneficiary_name: string
  external_account_id?: string | undefined
  message_to_recipient: string
  require_approval?: boolean | undefined
  routing_number?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account_numbers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'active' | 'disabled' | 'canceled' | undefined
                account_id?: string | undefined
              }
            }
            output: AccountNumberList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'active' | 'disabled' | 'canceled' | undefined
                account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnAccountNumberParameters }
            output: AccountNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnAccountNumberParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_numbers/:account_number_id': {
      $get:
        | {
            input: { param: { account_number_id: string } }
            output: AccountNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_number_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { account_number_id: string } } & {
              json: UpdateAnAccountNumberParameters
            }
            output: AccountNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_number_id: string } } & {
              json: UpdateAnAccountNumberParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_statements': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'statement_period_start.after'?: string | undefined
                'statement_period_start.before'?: string | undefined
                'statement_period_start.on_or_after'?: string | undefined
                'statement_period_start.on_or_before'?: string | undefined
              }
            }
            output: AccountStatementList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'statement_period_start.after'?: string | undefined
                'statement_period_start.before'?: string | undefined
                'statement_period_start.on_or_after'?: string | undefined
                'statement_period_start.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_statements/:account_statement_id': {
      $get:
        | {
            input: { param: { account_statement_id: string } }
            output: AccountStatement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_statement_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_transfers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: AccountTransferList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnAccountTransferParameters }
            output: AccountTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnAccountTransferParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_transfers/:account_transfer_id': {
      $get:
        | {
            input: { param: { account_transfer_id: string } }
            output: AccountTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_transfers/:account_transfer_id/approve': {
      $post:
        | {
            input: { param: { account_transfer_id: string } }
            output: AccountTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account_transfers/:account_transfer_id/cancel': {
      $post:
        | {
            input: { param: { account_transfer_id: string } }
            output: AccountTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                entity_id?: string | undefined
                status?: 'open' | 'closed' | undefined
              }
            }
            output: AccountList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                entity_id?: string | undefined
                status?: 'open' | 'closed' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnAccountParameters }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnAccountParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { account_id: string } } & { json: UpdateAnAccountParameters }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: UpdateAnAccountParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id/close': {
      $post:
        | {
            input: { param: { account_id: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ach_prenotifications': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: AchPrenotificationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnAchPrenotificationParameters }
            output: AchPrenotification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnAchPrenotificationParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ach_prenotifications/:ach_prenotification_id': {
      $get:
        | {
            input: { param: { ach_prenotification_id: string } }
            output: AchPrenotification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ach_prenotification_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ach_transfers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                external_account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: AchTransferList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                external_account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnAchTransferParameters }
            output: AchTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnAchTransferParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ach_transfers/:ach_transfer_id': {
      $get:
        | {
            input: { param: { ach_transfer_id: string } }
            output: AchTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ach_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ach_transfers/:ach_transfer_id/approve': {
      $post:
        | {
            input: { param: { ach_transfer_id: string } }
            output: AchTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ach_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ach_transfers/:ach_transfer_id/cancel': {
      $post:
        | {
            input: { param: { ach_transfer_id: string } }
            output: AchTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ach_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card_disputes': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'status.in'?: ('pending_reviewing' | 'accepted' | 'rejected')[] | undefined
              }
            }
            output: CardDisputeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'status.in'?: ('pending_reviewing' | 'accepted' | 'rejected')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateACardDisputeParameters }
            output: CardDispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateACardDisputeParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card_disputes/:card_dispute_id': {
      $get:
        | {
            input: { param: { card_dispute_id: string } }
            output: CardDispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_dispute_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card_profiles': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'status.in'?: ('pending' | 'rejected' | 'active' | 'archived')[] | undefined
              }
            }
            output: CardProfileList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'status.in'?: ('pending' | 'rejected' | 'active' | 'archived')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateACardProfileParameters }
            output: CardProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateACardProfileParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/card_profiles/:card_profile_id': {
      $get:
        | {
            input: { param: { card_profile_id: string } }
            output: CardProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_profile_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: CardList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateACardParameters }
            output: Card
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateACardParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id': {
      $get:
        | { input: { param: { card_id: string } }; output: Card; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { card_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { card_id: string } } & { json: UpdateACardParameters }
            output: Card
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } } & { json: UpdateACardParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/details': {
      $get:
        | {
            input: { param: { card_id: string } }
            output: CardDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_deposits': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: CheckDepositList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateACheckDepositParameters }
            output: CheckDeposit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateACheckDepositParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_deposits/:check_deposit_id': {
      $get:
        | {
            input: { param: { check_deposit_id: string } }
            output: CheckDeposit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_deposit_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_transfers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: CheckTransferList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateACheckTransferParameters }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateACheckTransferParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_transfers/:check_transfer_id': {
      $get:
        | {
            input: { param: { check_transfer_id: string } }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_transfers/:check_transfer_id/approve': {
      $post:
        | {
            input: { param: { check_transfer_id: string } }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_transfers/:check_transfer_id/cancel': {
      $post:
        | {
            input: { param: { check_transfer_id: string } }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/check_transfers/:check_transfer_id/stop_payment': {
      $post:
        | {
            input: { param: { check_transfer_id: string } }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/declined_transactions': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                route_id?: string | undefined
              }
            }
            output: DeclinedTransactionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                route_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/declined_transactions/:declined_transaction_id': {
      $get:
        | {
            input: { param: { declined_transaction_id: string } }
            output: DeclinedTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { declined_transaction_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/digital_wallet_tokens': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                card_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: DigitalWalletTokenList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                card_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/digital_wallet_tokens/:digital_wallet_token_id': {
      $get:
        | {
            input: { param: { digital_wallet_token_id: string } }
            output: DigitalWalletToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { digital_wallet_token_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                entity_id?: string | undefined
                'category.in'?: 'form_1099_int'[] | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: DocumentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                entity_id?: string | undefined
                'category.in'?: 'form_1099_int'[] | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/documents/:document_id': {
      $get:
        | {
            input: { param: { document_id: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { document_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: EntityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnEntityParameters }
            output: Entity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnEntityParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities/:entity_id': {
      $get:
        | {
            input: { param: { entity_id: string } }
            output: Entity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entity_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities/:entity_id/supplemental_documents': {
      $post:
        | {
            input: { param: { entity_id: string } } & {
              json: CreateASupplementalDocumentForAnEntityParameters
            }
            output: Entity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entity_id: string } } & {
              json: CreateASupplementalDocumentForAnEntityParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/event_subscriptions': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: EventSubscriptionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnEventSubscriptionParameters }
            output: EventSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnEventSubscriptionParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/event_subscriptions/:event_subscription_id': {
      $get:
        | {
            input: { param: { event_subscription_id: string } }
            output: EventSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { event_subscription_id: string } } & {
              json: UpdateAnEventSubscriptionParameters
            }
            output: EventSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_subscription_id: string } } & {
              json: UpdateAnEventSubscriptionParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'category.in'?:
                  | (
                      | 'account.created'
                      | 'account.updated'
                      | 'account_number.created'
                      | 'account_number.updated'
                      | 'account_statement.created'
                      | 'account_transfer.created'
                      | 'account_transfer.updated'
                      | 'ach_prenotification.created'
                      | 'ach_prenotification.updated'
                      | 'ach_transfer.created'
                      | 'ach_transfer.updated'
                      | 'card.created'
                      | 'card.updated'
                      | 'card_dispute.created'
                      | 'card_dispute.updated'
                      | 'check_deposit.created'
                      | 'check_deposit.updated'
                      | 'check_transfer.created'
                      | 'check_transfer.updated'
                      | 'declined_transaction.created'
                      | 'digital_wallet_token.created'
                      | 'digital_wallet_token.updated'
                      | 'document.created'
                      | 'entity.created'
                      | 'entity.updated'
                      | 'external_account.created'
                      | 'file.created'
                      | 'group.updated'
                      | 'group.heartbeat'
                      | 'inbound_ach_transfer_return.created'
                      | 'inbound_ach_transfer_return.updated'
                      | 'inbound_wire_drawdown_request.created'
                      | 'oauth_connection.created'
                      | 'oauth_connection.deactivated'
                      | 'pending_transaction.created'
                      | 'pending_transaction.updated'
                      | 'real_time_decision.card_authorization_requested'
                      | 'real_time_decision.digital_wallet_token_requested'
                      | 'real_time_decision.digital_wallet_authentication_requested'
                      | 'real_time_payments_transfer.created'
                      | 'real_time_payments_transfer.updated'
                      | 'real_time_payments_request_for_payment.created'
                      | 'real_time_payments_request_for_payment.updated'
                      | 'transaction.created'
                      | 'wire_drawdown_request.created'
                      | 'wire_drawdown_request.updated'
                      | 'wire_transfer.created'
                      | 'wire_transfer.updated'
                    )[]
                  | undefined
                associated_object_id?: string | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'category.in'?:
                  | (
                      | 'account.created'
                      | 'account.updated'
                      | 'account_number.created'
                      | 'account_number.updated'
                      | 'account_statement.created'
                      | 'account_transfer.created'
                      | 'account_transfer.updated'
                      | 'ach_prenotification.created'
                      | 'ach_prenotification.updated'
                      | 'ach_transfer.created'
                      | 'ach_transfer.updated'
                      | 'card.created'
                      | 'card.updated'
                      | 'card_dispute.created'
                      | 'card_dispute.updated'
                      | 'check_deposit.created'
                      | 'check_deposit.updated'
                      | 'check_transfer.created'
                      | 'check_transfer.updated'
                      | 'declined_transaction.created'
                      | 'digital_wallet_token.created'
                      | 'digital_wallet_token.updated'
                      | 'document.created'
                      | 'entity.created'
                      | 'entity.updated'
                      | 'external_account.created'
                      | 'file.created'
                      | 'group.updated'
                      | 'group.heartbeat'
                      | 'inbound_ach_transfer_return.created'
                      | 'inbound_ach_transfer_return.updated'
                      | 'inbound_wire_drawdown_request.created'
                      | 'oauth_connection.created'
                      | 'oauth_connection.deactivated'
                      | 'pending_transaction.created'
                      | 'pending_transaction.updated'
                      | 'real_time_decision.card_authorization_requested'
                      | 'real_time_decision.digital_wallet_token_requested'
                      | 'real_time_decision.digital_wallet_authentication_requested'
                      | 'real_time_payments_transfer.created'
                      | 'real_time_payments_transfer.updated'
                      | 'real_time_payments_request_for_payment.created'
                      | 'real_time_payments_request_for_payment.updated'
                      | 'transaction.created'
                      | 'wire_drawdown_request.created'
                      | 'wire_drawdown_request.updated'
                      | 'wire_transfer.created'
                      | 'wire_transfer.updated'
                    )[]
                  | undefined
                associated_object_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/external_accounts': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'status.in'?: ('active' | 'archived')[] | undefined
              }
            }
            output: ExternalAccountList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'status.in'?: ('active' | 'archived')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnExternalAccountParameters }
            output: ExternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnExternalAccountParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/external_accounts/:external_account_id': {
      $get:
        | {
            input: { param: { external_account_id: string } }
            output: ExternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { external_account_id: string } } & {
              json: UpdateAnExternalAccountParameters
            }
            output: ExternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_account_id: string } } & {
              json: UpdateAnExternalAccountParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'purpose.in'?:
                  | (
                      | 'check_image_front'
                      | 'check_image_back'
                      | 'form_1099_int'
                      | 'form_ss_4'
                      | 'identity_document'
                      | 'increase_statement'
                      | 'other'
                      | 'trust_formation_document'
                      | 'digital_wallet_artwork'
                      | 'digital_wallet_app_icon'
                      | 'entity_supplemental_document'
                    )[]
                  | undefined
              }
            }
            output: FileList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'purpose.in'?:
                  | (
                      | 'check_image_front'
                      | 'check_image_back'
                      | 'form_1099_int'
                      | 'form_ss_4'
                      | 'identity_document'
                      | 'increase_statement'
                      | 'other'
                      | 'trust_formation_document'
                      | 'digital_wallet_artwork'
                      | 'digital_wallet_app_icon'
                      | 'entity_supplemental_document'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { form: CreateAFileParameters }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateAFileParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id': {
      $get:
        | {
            input: { param: { file_id: string } }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/current': {
      $get:
        | { input: {}; output: Group; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/inbound_ach_transfer_returns': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: InboundAchTransferReturnList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAnAchReturnParameters }
            output: InboundAchTransferReturn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnAchReturnParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/inbound_ach_transfer_returns/:inbound_ach_transfer_return_id': {
      $get:
        | {
            input: { param: { inbound_ach_transfer_return_id: string } }
            output: InboundAchTransferReturn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbound_ach_transfer_return_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/inbound_wire_drawdown_requests': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: InboundWireDrawdownRequestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/inbound_wire_drawdown_requests/:inbound_wire_drawdown_request_id': {
      $get:
        | {
            input: { param: { inbound_wire_drawdown_request_id: string } }
            output: InboundWireDrawdownRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbound_wire_drawdown_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/limits': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                model_id?: string | undefined
                status?: string | undefined
              }
            }
            output: LimitList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                model_id?: string | undefined
                status?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateALimitParameters }
            output: Limit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateALimitParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/limits/:limit_id': {
      $get:
        | {
            input: { param: { limit_id: string } }
            output: Limit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { limit_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { limit_id: string } } & { json: UpdateALimitParameters }
            output: Limit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { limit_id: string } } & { json: UpdateALimitParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth_connections': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: OauthConnectionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth_connections/:oauth_connection_id': {
      $get:
        | {
            input: { param: { oauth_connection_id: string } }
            output: OauthConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pending_transactions': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                route_id?: string | undefined
                source_id?: string | undefined
                'status.in'?: ('pending' | 'complete')[] | undefined
              }
            }
            output: PendingTransactionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                route_id?: string | undefined
                source_id?: string | undefined
                'status.in'?: ('pending' | 'complete')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pending_transactions/:pending_transaction_id': {
      $get:
        | {
            input: { param: { pending_transaction_id: string } }
            output: PendingTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pending_transaction_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/real_time_decisions/:real_time_decision_id': {
      $get:
        | {
            input: { param: { real_time_decision_id: string } }
            output: RealTimeDecision
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { real_time_decision_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/real_time_decisions/:real_time_decision_id/action': {
      $post:
        | {
            input: { param: { real_time_decision_id: string } } & {
              json: ActionARealTimeDecisionParameters
            }
            output: RealTimeDecision
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { real_time_decision_id: string } } & {
              json: ActionARealTimeDecisionParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/routing_numbers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                routing_number: string
              }
            }
            output: RoutingNumberList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                routing_number: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/account_statements': {
      $post:
        | {
            input: { json: SimulateAnAccountStatementBeingCreatedParameters }
            output: AccountStatement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateAnAccountStatementBeingCreatedParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/account_transfers/:account_transfer_id/complete': {
      $post:
        | {
            input: { param: { account_transfer_id: string } }
            output: AccountTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/ach_transfers/:ach_transfer_id/return': {
      $post:
        | {
            input: { param: { ach_transfer_id: string } } & {
              json: ReturnASandboxAchTransferParameters
            }
            output: AchTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ach_transfer_id: string } } & {
              json: ReturnASandboxAchTransferParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/ach_transfers/:ach_transfer_id/submit': {
      $post:
        | {
            input: { param: { ach_transfer_id: string } }
            output: AchTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ach_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/card_authorizations': {
      $post:
        | {
            input: { json: SimulateAnAuthorizationOnACardParameters }
            output: InboundCardAuthorizationSimulationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateAnAuthorizationOnACardParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/card_disputes/:card_dispute_id/action': {
      $post:
        | {
            input: { param: { card_dispute_id: string } } & {
              json: SimulatesAdvancingTheStateOfACardDisputeParameters
            }
            output: CardDispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_dispute_id: string } } & {
              json: SimulatesAdvancingTheStateOfACardDisputeParameters
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/card_refunds': {
      $post:
        | {
            input: { json: SimulateARefundOnACardParameters }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateARefundOnACardParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/card_settlements': {
      $post:
        | {
            input: { json: SimulateSettlingACardAuthorizationParameters }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateSettlingACardAuthorizationParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/check_deposits/:check_deposit_id/reject': {
      $post:
        | {
            input: { param: { check_deposit_id: string } }
            output: CheckDeposit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_deposit_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/check_deposits/:check_deposit_id/return': {
      $post:
        | {
            input: { param: { check_deposit_id: string } }
            output: CheckDeposit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_deposit_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/check_deposits/:check_deposit_id/submit': {
      $post:
        | {
            input: { param: { check_deposit_id: string } }
            output: CheckDeposit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_deposit_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/check_transfers/:check_transfer_id/deposit': {
      $post:
        | {
            input: { param: { check_transfer_id: string } }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/check_transfers/:check_transfer_id/mail': {
      $post:
        | {
            input: { param: { check_transfer_id: string } }
            output: CheckTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/digital_wallet_token_requests': {
      $post:
        | {
            input: { json: SimulateDigitalWalletProvisioningForACardParameters }
            output: InboundDigitalWalletTokenRequestSimulationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateDigitalWalletProvisioningForACardParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/documents': {
      $post:
        | {
            input: { json: SimulateATaxDocumentBeingCreatedParameters }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateATaxDocumentBeingCreatedParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/inbound_ach_transfers': {
      $post:
        | {
            input: { json: SimulateAnAchTransferToYourAccountParameters }
            output: InboundAchTransferSimulationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateAnAchTransferToYourAccountParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/inbound_real_time_payments_transfers': {
      $post:
        | {
            input: { json: SimulateARealTimePaymentsTransferToYourAccountParameters }
            output: InboundRealTimePaymentsTransferSimulationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateARealTimePaymentsTransferToYourAccountParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/inbound_wire_drawdown_requests': {
      $post:
        | {
            input: { json: SimulateAnInboundWireDrawdownRequestBeingCreatedParameters }
            output: InboundWireDrawdownRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateAnInboundWireDrawdownRequestBeingCreatedParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/inbound_wire_transfers': {
      $post:
        | {
            input: { json: SimulateAWireTransferToYourAccountParameters }
            output: InboundWireTransferSimulationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateAWireTransferToYourAccountParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/wire_transfers/:wire_transfer_id/reverse': {
      $post:
        | {
            input: { param: { wire_transfer_id: string } }
            output: WireTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wire_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/wire_transfers/:wire_transfer_id/submit': {
      $post:
        | {
            input: { param: { wire_transfer_id: string } }
            output: WireTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wire_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'category.in'?:
                  | (
                      | 'account_transfer_intention'
                      | 'ach_check_conversion_return'
                      | 'ach_check_conversion'
                      | 'ach_transfer_intention'
                      | 'ach_transfer_rejection'
                      | 'ach_transfer_return'
                      | 'card_dispute_acceptance'
                      | 'card_refund'
                      | 'card_settlement'
                      | 'check_deposit_acceptance'
                      | 'check_deposit_return'
                      | 'check_transfer_intention'
                      | 'check_transfer_return'
                      | 'check_transfer_rejection'
                      | 'check_transfer_stop_payment_request'
                      | 'dispute_resolution'
                      | 'empyreal_cash_deposit'
                      | 'inbound_ach_transfer'
                      | 'inbound_ach_transfer_return_intention'
                      | 'inbound_check'
                      | 'inbound_international_ach_transfer'
                      | 'inbound_real_time_payments_transfer_confirmation'
                      | 'inbound_wire_drawdown_payment_reversal'
                      | 'inbound_wire_drawdown_payment'
                      | 'inbound_wire_reversal'
                      | 'inbound_wire_transfer'
                      | 'interest_payment'
                      | 'internal_general_ledger_transaction'
                      | 'internal_source'
                      | 'card_route_refund'
                      | 'card_route_settlement'
                      | 'real_time_payments_transfer_acknowledgement'
                      | 'sample_funds'
                      | 'wire_drawdown_payment_intention'
                      | 'wire_drawdown_payment_rejection'
                      | 'wire_transfer_intention'
                      | 'wire_transfer_rejection'
                      | 'other'
                    )[]
                  | undefined
                route_id?: string | undefined
              }
            }
            output: TransactionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
                'category.in'?:
                  | (
                      | 'account_transfer_intention'
                      | 'ach_check_conversion_return'
                      | 'ach_check_conversion'
                      | 'ach_transfer_intention'
                      | 'ach_transfer_rejection'
                      | 'ach_transfer_return'
                      | 'card_dispute_acceptance'
                      | 'card_refund'
                      | 'card_settlement'
                      | 'check_deposit_acceptance'
                      | 'check_deposit_return'
                      | 'check_transfer_intention'
                      | 'check_transfer_return'
                      | 'check_transfer_rejection'
                      | 'check_transfer_stop_payment_request'
                      | 'dispute_resolution'
                      | 'empyreal_cash_deposit'
                      | 'inbound_ach_transfer'
                      | 'inbound_ach_transfer_return_intention'
                      | 'inbound_check'
                      | 'inbound_international_ach_transfer'
                      | 'inbound_real_time_payments_transfer_confirmation'
                      | 'inbound_wire_drawdown_payment_reversal'
                      | 'inbound_wire_drawdown_payment'
                      | 'inbound_wire_reversal'
                      | 'inbound_wire_transfer'
                      | 'interest_payment'
                      | 'internal_general_ledger_transaction'
                      | 'internal_source'
                      | 'card_route_refund'
                      | 'card_route_settlement'
                      | 'real_time_payments_transfer_acknowledgement'
                      | 'sample_funds'
                      | 'wire_drawdown_payment_intention'
                      | 'wire_drawdown_payment_rejection'
                      | 'wire_transfer_intention'
                      | 'wire_transfer_rejection'
                      | 'other'
                    )[]
                  | undefined
                route_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/:transaction_id': {
      $get:
        | {
            input: { param: { transaction_id: string } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wire_drawdown_requests': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: WireDrawdownRequestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAWireDrawdownRequestParameters }
            output: WireDrawdownRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAWireDrawdownRequestParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wire_drawdown_requests/:wire_drawdown_request_id': {
      $get:
        | {
            input: { param: { wire_drawdown_request_id: string } }
            output: WireDrawdownRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wire_drawdown_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wire_transfers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                external_account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: WireTransferList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                account_id?: string | undefined
                external_account_id?: string | undefined
                'created_at.after'?: string | undefined
                'created_at.before'?: string | undefined
                'created_at.on_or_after'?: string | undefined
                'created_at.on_or_before'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateAWireTransferParameters }
            output: WireTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAWireTransferParameters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wire_transfers/:wire_transfer_id': {
      $get:
        | {
            input: { param: { wire_transfer_id: string } }
            output: WireTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wire_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wire_transfers/:wire_transfer_id/approve': {
      $post:
        | {
            input: { param: { wire_transfer_id: string } }
            output: WireTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wire_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wire_transfers/:wire_transfer_id/cancel': {
      $post:
        | {
            input: { param: { wire_transfer_id: string } }
            output: WireTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wire_transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
