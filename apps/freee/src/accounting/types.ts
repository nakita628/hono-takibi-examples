type PartnersResponse = {
  partners: {
    id: bigint
    code: string | null
    company_id: bigint
    name: string
    update_date: string
    available: boolean
    shortcut1?: (string | null) | undefined
    shortcut2?: (string | null) | undefined
    org_code?: (bigint | null) | undefined
    country_code?: string | undefined
    long_name?: (string | null) | undefined
    name_kana?: (string | null) | undefined
    default_title?: (string | null) | undefined
    phone?: (string | null) | undefined
    contact_name?: (string | null) | undefined
    email?: (string | null) | undefined
    payer_walletable_id?: (bigint | null) | undefined
    transfer_fee_handling_side?: 'payer' | 'payee' | undefined
    qualified_invoice_issuer?: boolean | undefined
    invoice_registration_number?: (string | null) | undefined
    address_attributes?:
      | {
          zipcode?: (string | null) | undefined
          prefecture_code?: (bigint | null) | undefined
          street_name1?: (string | null) | undefined
          street_name2?: (string | null) | undefined
        }
      | undefined
    partner_doc_setting_attributes?:
      | {
          sending_method?:
            | 'email'
            | 'posting'
            | 'email_and_posting'
            | 'pdf_delivery'
            | 'pdf_delivery_and_posting'
            | undefined
        }
      | undefined
    partner_bank_account_attributes?:
      | {
          bank_name?: (string | null) | undefined
          bank_name_kana?: (string | null) | undefined
          bank_code?: (string | null) | undefined
          branch_name?: (string | null) | undefined
          branch_kana?: (string | null) | undefined
          branch_code?: (string | null) | undefined
          account_type?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other' | undefined
          account_number?: (string | null) | undefined
          account_name?: (string | null) | undefined
          long_account_name?: (string | null) | undefined
        }
      | undefined
  }[]
}
type BadRequestError = {
  status_code?: number | undefined
  errors?: { messages: string[]; type: 'status' | 'validation' | 'error' }[] | undefined
}
type UnauthorizedError =
  | { message?: string | undefined; messages?: string | undefined; code?: string | undefined }
  | {
      status_code: number
      errors: {
        messages: string[]
        type: 'status' | 'validation' | 'error'
        codes?: string[] | undefined
      }[]
    }
type ForbiddenError =
  | { message?: string | undefined; messages?: string | undefined }
  | {
      status_code: number
      errors: {
        messages: string[]
        type: 'status' | 'validation' | 'error'
        codes?: string[] | undefined
      }[]
    }
  | { error: string; message: string }
  | { message: string; error_code: string }
  | { result: string; message: string; info: { result: string; message: string } }
type InternalServerError = {
  status_code?: number | undefined
  errors?: { messages: string[]; type: 'status' | 'validation' | 'error' }[] | undefined
}
type PartnerCreateParams = {
  company_id: bigint
  name: string
  code?: string | undefined
  shortcut1?: string | undefined
  shortcut2?: string | undefined
  org_code?: 1n | 2n | undefined
  country_code?: 'JP' | 'ZZ' | undefined
  long_name?: string | undefined
  name_kana?: string | undefined
  default_title?: string | undefined
  phone?: string | undefined
  contact_name?: string | undefined
  email?: string | undefined
  payer_walletable_id?: (bigint | null) | undefined
  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
  qualified_invoice_issuer?: boolean | undefined
  invoice_registration_number?: (string | null) | undefined
  address_attributes?:
    | {
        zipcode?: string | undefined
        prefecture_code?: bigint | undefined
        street_name1?: string | undefined
        street_name2?: string | undefined
      }
    | undefined
  partner_doc_setting_attributes?:
    | {
        sending_method?:
          | 'email'
          | 'posting'
          | 'email_and_posting'
          | 'pdf_delivery'
          | 'pdf_delivery_and_posting'
          | undefined
      }
    | undefined
  partner_bank_account_attributes?:
    | {
        bank_name?: string | undefined
        bank_name_kana?: string | undefined
        bank_code?: string | undefined
        branch_name?: string | undefined
        branch_kana?: string | undefined
        branch_code?: string | undefined
        account_type?: string | undefined
        account_number?: string | undefined
        long_account_name?: string | undefined
        account_name?: string | undefined
      }
    | undefined
  payment_term_attributes?:
    | {
        cutoff_day?: bigint | undefined
        additional_months?: bigint | undefined
        fixed_day?: bigint | undefined
      }
    | undefined
  invoice_payment_term_attributes?:
    | {
        cutoff_day?: bigint | undefined
        additional_months?: number | undefined
        fixed_day?: bigint | undefined
      }
    | undefined
}
type PartnerResponse = {
  partner: {
    id: bigint
    code: string | null
    company_id: bigint
    name: string
    update_date: string
    available: boolean
    shortcut1?: (string | null) | undefined
    shortcut2?: (string | null) | undefined
    org_code?: (bigint | null) | undefined
    country_code?: string | undefined
    long_name?: (string | null) | undefined
    name_kana?: (string | null) | undefined
    default_title?: (string | null) | undefined
    phone?: (string | null) | undefined
    contact_name?: (string | null) | undefined
    email?: (string | null) | undefined
    payer_walletable_id?: (bigint | null) | undefined
    transfer_fee_handling_side?: 'payer' | 'payee' | undefined
    qualified_invoice_issuer?: boolean | undefined
    invoice_registration_number?: (string | null) | undefined
    address_attributes?:
      | {
          zipcode?: (string | null) | undefined
          prefecture_code?: (bigint | null) | undefined
          street_name1?: (string | null) | undefined
          street_name2?: (string | null) | undefined
        }
      | undefined
    partner_doc_setting_attributes?:
      | {
          sending_method?:
            | 'email'
            | 'posting'
            | 'email_and_posting'
            | 'pdf_delivery'
            | 'pdf_delivery_and_posting'
            | undefined
        }
      | undefined
    partner_bank_account_attributes?:
      | {
          bank_name?: (string | null) | undefined
          bank_name_kana?: (string | null) | undefined
          bank_code?: (string | null) | undefined
          branch_name?: (string | null) | undefined
          branch_kana?: (string | null) | undefined
          branch_code?: (string | null) | undefined
          account_type?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other' | undefined
          account_number?: (string | null) | undefined
          account_name?: (string | null) | undefined
          long_account_name?: (string | null) | undefined
        }
      | undefined
    payment_term_attributes?:
      | {
          cutoff_day?: (bigint | null) | undefined
          additional_months?: (bigint | null) | undefined
          fixed_day?: (bigint | null) | undefined
        }
      | undefined
    invoice_payment_term_attributes?:
      | {
          cutoff_day?: (bigint | null) | undefined
          additional_months?: (bigint | null) | undefined
          fixed_day?: (bigint | null) | undefined
        }
      | undefined
  }
}
type BadRequestNotFoundError = {
  status_code?: number | undefined
  errors?: { messages: string[]; type: 'status' | 'validation' | 'error' }[] | undefined
}
type PartnerUpdateParams = {
  company_id: bigint
  name: string
  available?: boolean | undefined
  shortcut1?: string | undefined
  shortcut2?: string | undefined
  org_code?: 1n | 2n | undefined
  country_code?: 'JP' | 'ZZ' | undefined
  long_name?: string | undefined
  name_kana?: string | undefined
  default_title?: string | undefined
  phone?: string | undefined
  contact_name?: string | undefined
  email?: string | undefined
  payer_walletable_id?: (bigint | null) | undefined
  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
  qualified_invoice_issuer?: boolean | undefined
  invoice_registration_number?: (string | null) | undefined
  address_attributes?:
    | {
        zipcode?: string | undefined
        prefecture_code?: bigint | undefined
        street_name1?: string | undefined
        street_name2?: string | undefined
      }
    | undefined
  partner_doc_setting_attributes?:
    | {
        sending_method?:
          | 'email'
          | 'posting'
          | 'email_and_posting'
          | 'pdf_delivery'
          | 'pdf_delivery_and_posting'
          | undefined
      }
    | undefined
  partner_bank_account_attributes?:
    | {
        bank_name?: string | undefined
        bank_name_kana?: string | undefined
        bank_code?: string | undefined
        branch_name?: string | undefined
        branch_kana?: string | undefined
        branch_code?: string | undefined
        account_type?: string | undefined
        account_number?: string | undefined
        long_account_name?: string | undefined
        account_name?: string | undefined
      }
    | undefined
  payment_term_attributes?:
    | ({
        cutoff_day?: bigint | undefined
        additional_months?: bigint | undefined
        fixed_day?: bigint | undefined
      } | null)
    | undefined
  invoice_payment_term_attributes?:
    | ({
        cutoff_day?: bigint | undefined
        additional_months?: bigint | undefined
        fixed_day?: bigint | undefined
      } | null)
    | undefined
}
type SelectablesIndexResponse = {
  account_categories?:
    | {
        balance: 'expense' | 'income'
        org_code: 'personal' | 'corporate'
        role: string
        title: string
        desc: string
        account_items: {
          id: bigint
          name: string
          desc: string
          help: string
          shortcut: string | null
          default_tax: {
            tax_rate_5?: { code: bigint | null; name: string | null } | undefined
            tax_rate_8?: { code: bigint | null; name: string | null } | undefined
            tax_rate_10?: { code: bigint | null; name: string | null } | undefined
            tax_rate_r8?: { code: bigint | null; name: string | null } | undefined
            tax_rate_5_exempt_80?: { code: bigint; name: string } | undefined
            tax_rate_5_exempt_50?: { code: bigint; name: string } | undefined
            tax_rate_8_exempt_80?: { code: bigint; name: string } | undefined
            tax_rate_8_exempt_50?: { code: bigint; name: string } | undefined
            tax_rate_10_exempt_80?: { code: bigint; name: string } | undefined
            tax_rate_10_exempt_50?: { code: bigint; name: string } | undefined
            tax_rate_r8_exempt_80?: { code: bigint; name: string } | undefined
            tax_rate_r8_exempt_50?: { code: bigint; name: string } | undefined
            tax_rate_5_exempt_70?: { code: bigint; name: string } | undefined
            tax_rate_5_exempt_30?: { code: bigint; name: string } | undefined
            tax_rate_8_exempt_70?: { code: bigint; name: string } | undefined
            tax_rate_8_exempt_30?: { code: bigint; name: string } | undefined
            tax_rate_10_exempt_70?: { code: bigint; name: string } | undefined
            tax_rate_10_exempt_30?: { code: bigint; name: string } | undefined
            tax_rate_r8_exempt_70?: { code: bigint; name: string } | undefined
            tax_rate_r8_exempt_30?: { code: bigint; name: string } | undefined
          }
          account_item?:
            | {
                a_chart_template_id: bigint | null
                cf_category_id: bigint | null
                company_id: bigint
                corresponding_type_expense: bigint | null
                corresponding_type_income: bigint | null
                created_at: string
                entry_side: bigint | null
                id: bigint
                master_code: string | null
                name: string
                origin_code: bigint
                report_order: bigint | null
                searchable: bigint
                shortcut: string | null
                shortcut_num: string | null
                status: bigint | null
                sys_locked: boolean
                tax_business_code: bigint | null
                tax_calc_type_code: bigint | null
                tax_code: bigint | null
                tax_truncate_code: bigint | null
                template_code: bigint | null
                updated_at: string
                walletable_id: bigint | null
                walletable_type: string | null
                group_id: bigint
                group_name: string
                group_index: bigint
                account_category_id: bigint
                account_item_index: bigint
                a_report_code: bigint | null
                a_order: bigint | null
                category_entry_side: bigint | null
              }
            | undefined
        }[]
      }[]
    | undefined
  account_groups?:
    | {
        id: bigint
        name: string
        account_structure_id: bigint
        account_category_id: bigint
        company_id: bigint
        detail_type: 0n | 1n | 2n | 3n | 4n
        index: bigint
        created_at: string | null
        updated_at: string | null
      }[]
    | undefined
}
type AccountItemResponse = {
  account_item: {
    id: bigint
    name: string
    company_id: bigint
    tax_code: bigint
    account_category: string
    account_category_id: bigint
    shortcut: string | null
    shortcut_num: string | null
    code?: (string | null) | undefined
    searchable: bigint
    accumulated_dep_account_item_name: string
    accumulated_dep_account_item_id: bigint | null
    items: { id: bigint; name: string }[]
    partners: { id: bigint; name: string }[]
    available: boolean
    walletable_id: bigint | null
    group_name: string | null
    group_id: bigint | null
    corresponding_income_name?: (string | null) | undefined
    corresponding_income_id: bigint | null
    corresponding_expense_name?: (string | null) | undefined
    corresponding_expense_id: bigint | null
    default_tax_code?: bigint | undefined
    categories?: string[] | undefined
  }
}
type AccountItemUpdateParams = {
  company_id: bigint
  account_item: {
    name?: string | undefined
    shortcut?: string | undefined
    shortcut_num?: string | undefined
    code?: string | undefined
    tax_code: bigint
    group_name: string
    account_category_id: bigint
    corresponding_income_id: bigint
    corresponding_expense_id: bigint
    accumulated_dep_account_item_id?: bigint | undefined
    searchable?: bigint | undefined
    items?: { id?: bigint | undefined }[] | undefined
    partners?: { id?: bigint | undefined }[] | undefined
  }
}
type ServiceUnavailableError =
  | { status_code: number; errors: { messages: string[]; type: 'status' | 'error' }[] }
  | { message: string; code?: string | undefined }
type AccountItemsResponse = {
  account_items: {
    id: bigint
    name: string
    tax_code: bigint
    shortcut: string | null
    shortcut_num: string | null
    code?: (string | null) | undefined
    default_tax_code: bigint
    account_category: string
    account_category_id: bigint
    categories: string[]
    available: boolean
    walletable_id: bigint | null
    group_name: string | null
    group_id: bigint | null
    corresponding_income_name: string | null
    corresponding_income_id: bigint | null
    corresponding_expense_name: string | null
    corresponding_expense_id: bigint | null
    update_date: string
  }[]
}
type AccountItemCreateParams = {
  company_id: bigint
  account_item: {
    name: string
    shortcut?: string | undefined
    shortcut_num?: string | undefined
    code?: string | undefined
    tax_code: bigint
    group_name: string
    account_category_id: bigint
    corresponding_income_id: bigint
    corresponding_expense_id: bigint
    accumulated_dep_account_item_id?: bigint | undefined
    searchable?: bigint | undefined
    items?: { id?: bigint | undefined }[] | undefined
    partners?: { id?: bigint | undefined }[] | undefined
  }
}
type Tag = {
  id: bigint
  company_id: bigint
  name: string
  update_date: string
  shortcut1: string | null
  shortcut2: string | null
}
type TagParams = {
  company_id: bigint
  name: string
  shortcut1?: string | undefined
  shortcut2?: string | undefined
}
type TagResponse = { tag: Tag }
type Section = {
  id: bigint
  name: string
  available: boolean
  long_name: string | null
  company_id: bigint
  shortcut1: string | null
  shortcut2: string | null
  code?: (string | null) | undefined
  indent_count?: bigint | undefined
  parent_id?: (bigint | null) | undefined
  update_date?: string | undefined
}
type SectionParams = {
  company_id: bigint
  name: string
  long_name?: (string | null) | undefined
  shortcut1?: (string | null) | undefined
  shortcut2?: (string | null) | undefined
  code?: (string | null) | undefined
  parent_id?: (bigint | null) | undefined
}
type SectionResponse = { section: Section }
type MessagesError = { messages: string[] }
type InvoiceIndexResponse = {
  invoices: {
    id: bigint
    company_id: bigint
    issue_date: string
    partner_id: bigint | null
    partner_code: string | null
    invoice_number: string
    title: string | null
    due_date: string | null
    total_amount: bigint
    total_vat: bigint
    sub_total: bigint
    booking_date: string | null
    description: string | null
    invoice_status:
      | 'draft'
      | 'applying'
      | 'remanded'
      | 'rejected'
      | 'approved'
      | 'submitted'
      | 'unsubmitted'
    payment_status: '' | 'unsettled' | 'settled'
    payment_date: string | null
    web_published_at: string | null
    web_downloaded_at: string | null
    web_confirmed_at: string | null
    mail_sent_at: string | null
    posting_status:
      | ''
      | 'unrequested'
      | 'preview_registered'
      | 'preview_failed'
      | 'ordered'
      | 'order_failed'
      | 'printing'
      | 'canceled'
      | 'posted'
      | 'cancel'
      | 'ordering'
      | 'bounced'
    partner_name: string | null
    partner_display_name: string | null
    partner_title: string | null
    partner_zipcode: string | null
    partner_prefecture_code: bigint | null
    partner_prefecture_name: string | null
    partner_address1: string | null
    partner_address2: string | null
    partner_contact_info: string | null
    company_name: string
    company_zipcode: string | null
    company_prefecture_code: bigint | null
    company_prefecture_name: string | null
    company_address1: string | null
    company_address2: string | null
    company_contact_info: string | null
    payment_type: '' | 'transfer' | 'direct_debit'
    payment_bank_info: string | null
    message: string | null
    notes: string | null
    invoice_layout:
      | 'default_classic'
      | 'standard_classic'
      | 'envelope_classic'
      | 'carried_forward_standard_classic'
      | 'carried_forward_envelope_classic'
      | 'default_modern'
      | 'standard_modern'
      | 'envelope_modern'
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    deal_id: bigint | null
    invoice_contents: {
      id: bigint
      order: bigint | null
      type: 'normal' | 'discount' | 'text'
      qty: number
      unit: string | null
      unit_price: number
      amount: bigint
      vat: bigint
      reduced_vat: boolean
      description: string | null
      account_item_id: bigint | null
      account_item_name: string | null
      tax_code: bigint | null
      item_id: bigint | null
      item_name: string | null
      section_id: bigint | null
      section_name: string | null
      tag_ids: bigint[]
      tag_names: string[]
      segment_1_tag_id?: (bigint | null) | undefined
      segment_1_tag_name?: (string | null) | undefined
      segment_2_tag_id?: (bigint | null) | undefined
      segment_2_tag_name?: (string | null) | undefined
      segment_3_tag_id?: (bigint | null) | undefined
      segment_3_tag_name?: (string | null) | undefined
    }[]
    total_amount_per_vat_rate: {
      vat_5: bigint
      vat_8: bigint
      reduced_vat_8: bigint
      vat_10: bigint
    }
  }[]
}
type InvoiceResponse = {
  invoice: {
    id: bigint
    company_id: bigint
    issue_date: string
    partner_id: bigint | null
    partner_code: string | null
    invoice_number: string
    title: string | null
    due_date: string | null
    total_amount: bigint
    total_vat: bigint
    sub_total: bigint
    booking_date: string | null
    description: string | null
    invoice_status:
      | 'draft'
      | 'applying'
      | 'remanded'
      | 'rejected'
      | 'approved'
      | 'submitted'
      | 'unsubmitted'
    payment_status: '' | 'unsettled' | 'settled'
    payment_date: string | null
    web_published_at: string | null
    web_downloaded_at: string | null
    web_confirmed_at: string | null
    mail_sent_at: string | null
    posting_status:
      | ''
      | 'unrequested'
      | 'preview_registered'
      | 'preview_failed'
      | 'ordered'
      | 'order_failed'
      | 'printing'
      | 'canceled'
      | 'posted'
      | 'cancel'
      | 'ordering'
      | 'bounced'
    partner_name: string | null
    partner_display_name: string | null
    partner_title: string | null
    partner_zipcode: string | null
    partner_prefecture_code: bigint | null
    partner_prefecture_name: string | null
    partner_address1: string | null
    partner_address2: string | null
    partner_contact_info: string | null
    company_name: string
    company_zipcode: string | null
    company_prefecture_code: bigint | null
    company_prefecture_name: string | null
    company_address1: string | null
    company_address2: string | null
    company_contact_info: string | null
    payment_type: '' | 'transfer' | 'direct_debit'
    payment_bank_info: string | null
    message: string | null
    notes: string | null
    invoice_layout:
      | 'default_classic'
      | 'standard_classic'
      | 'envelope_classic'
      | 'carried_forward_standard_classic'
      | 'carried_forward_envelope_classic'
      | 'default_modern'
      | 'standard_modern'
      | 'envelope_modern'
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    deal_id: bigint | null
    invoice_contents: {
      id: bigint
      order: bigint | null
      type: 'normal' | 'discount' | 'text'
      qty: number
      unit: string | null
      unit_price: number
      amount: bigint
      vat: bigint
      reduced_vat: boolean
      description: string | null
      account_item_id: bigint | null
      account_item_name: string | null
      tax_code: bigint | null
      item_id: bigint | null
      item_name: string | null
      section_id: bigint | null
      section_name: string | null
      tag_ids: bigint[]
      tag_names: string[]
      segment_1_tag_id?: (bigint | null) | undefined
      segment_1_tag_name?: (string | null) | undefined
      segment_2_tag_id?: (bigint | null) | undefined
      segment_2_tag_name?: (string | null) | undefined
      segment_3_tag_id?: (bigint | null) | undefined
      segment_3_tag_name?: (string | null) | undefined
    }[]
    total_amount_per_vat_rate: {
      vat_5: bigint
      vat_8: bigint
      reduced_vat_8: bigint
      vat_10: bigint
    }
    related_quotation_ids: bigint[]
  }
}
type QuotationIndexResponse = {
  quotations: {
    id: bigint
    company_id: bigint
    issue_date: string
    partner_id: bigint | null
    partner_code: string | null
    quotation_number: string
    title: string | null
    total_amount: bigint
    total_vat: bigint
    sub_total: bigint
    description: string | null
    quotation_status: 'unsubmitted' | 'submitted'
    web_published_at: string | null
    web_downloaded_at: string | null
    web_confirmed_at: string | null
    mail_sent_at: string | null
    partner_name: string | null
    partner_display_name: string | null
    partner_title: string | null
    partner_zipcode: string | null
    partner_prefecture_code: bigint | null
    partner_prefecture_name: string | null
    partner_address1: string | null
    partner_address2: string | null
    partner_contact_info: string | null
    company_name: string
    company_zipcode: string | null
    company_prefecture_code: bigint | null
    company_prefecture_name: string | null
    company_address1: string | null
    company_address2: string | null
    company_contact_info: string | null
    message: string | null
    notes: string | null
    quotation_layout:
      | 'default_classic'
      | 'standard_classic'
      | 'envelope_classic'
      | 'default_modern'
      | 'standard_modern'
      | 'envelope_modern'
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    quotation_contents: {
      id: bigint
      order: bigint
      type: 'normal' | 'discount' | 'text'
      qty: number
      unit: string | null
      unit_price: number
      amount: bigint
      vat: bigint
      reduced_vat: boolean
      description: string | null
      account_item_id: bigint | null
      account_item_name: string | null
      tax_code: bigint | null
      item_id: bigint | null
      item_name: string | null
      section_id: bigint | null
      section_name: string | null
      tag_ids: bigint[]
      tag_names: string[]
      segment_1_tag_id?: (bigint | null) | undefined
      segment_1_tag_name?: (string | null) | undefined
      segment_2_tag_id?: (bigint | null) | undefined
      segment_2_tag_name?: (string | null) | undefined
      segment_3_tag_id?: (bigint | null) | undefined
      segment_3_tag_name?: (string | null) | undefined
    }[]
    total_amount_per_vat_rate: {
      vat_5: bigint
      vat_8: bigint
      reduced_vat_8: bigint
      vat_10: bigint
    }
  }[]
}
type QuotationResponse = {
  quotation: {
    id: bigint
    company_id: bigint
    issue_date: string
    partner_id: bigint | null
    partner_code: string | null
    quotation_number: string
    title: string | null
    total_amount: bigint
    total_vat: bigint
    sub_total: bigint
    description: string | null
    quotation_status: 'unsubmitted' | 'submitted'
    web_published_at: string | null
    web_downloaded_at: string | null
    web_confirmed_at: string | null
    mail_sent_at: string | null
    partner_name: string | null
    partner_display_name: string | null
    partner_title: string | null
    partner_zipcode: string | null
    partner_prefecture_code: bigint | null
    partner_prefecture_name: string | null
    partner_address1: string | null
    partner_address2: string | null
    partner_contact_info: string | null
    company_name: string
    company_zipcode: string | null
    company_prefecture_code: bigint | null
    company_prefecture_name: string | null
    company_address1: string | null
    company_address2: string | null
    company_contact_info: string | null
    message: string | null
    notes: string | null
    quotation_layout:
      | 'default_classic'
      | 'standard_classic'
      | 'envelope_classic'
      | 'default_modern'
      | 'standard_modern'
      | 'envelope_modern'
    tax_entry_method: '' | 'inclusive' | 'exclusive'
    quotation_contents: {
      id: bigint
      order: bigint
      type: 'normal' | 'discount' | 'text'
      qty: number
      unit: string | null
      unit_price: number
      amount: bigint
      vat: bigint
      reduced_vat: boolean
      description: string | null
      account_item_id: bigint | null
      account_item_name: string | null
      tax_code: bigint | null
      item_id: bigint | null
      item_name: string | null
      section_id: bigint | null
      section_name: string | null
      tag_ids: bigint[]
      tag_names: string[]
      segment_1_tag_id?: (bigint | null) | undefined
      segment_1_tag_name?: (string | null) | undefined
      segment_2_tag_id?: (bigint | null) | undefined
      segment_2_tag_name?: (string | null) | undefined
      segment_3_tag_id?: (bigint | null) | undefined
      segment_3_tag_name?: (string | null) | undefined
    }[]
    total_amount_per_vat_rate: {
      vat_5: bigint
      vat_8: bigint
      reduced_vat_8: bigint
      vat_10: bigint
    }
    related_invoice_id: bigint | null
    related_quotation_ids: bigint[]
  }
}
type Deal = {
  id: bigint
  company_id: bigint
  issue_date: string
  due_date?: (string | null) | undefined
  amount: bigint
  due_amount?: bigint | undefined
  type?: 'income' | 'expense' | undefined
  partner_id: bigint | null
  partner_code?: (string | null) | undefined
  ref_number?: (string | null) | undefined
  status: 'unsettled' | 'settled'
  deal_origin_name?: string | undefined
  details?:
    | {
        id: bigint
        account_item_id: bigint
        account_item_code?: (string | null) | undefined
        tax_code: bigint
        partner_id?: (bigint | null) | undefined
        partner_code?: (string | null) | undefined
        item_id?: (bigint | null) | undefined
        item_code?: (string | null) | undefined
        section_id?: (bigint | null) | undefined
        section_code?: (string | null) | undefined
        tag_ids?: bigint[] | undefined
        segment_1_tag_id?: (bigint | null) | undefined
        segment_1_tag_code?: (string | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_2_tag_code?: (string | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
        segment_3_tag_code?: (string | null) | undefined
        amount: bigint
        vat: bigint
        description?: (string | null) | undefined
        entry_side: 'credit' | 'debit'
      }[]
    | undefined
  accruals?:
    | {
        id: bigint
        account_item_id: bigint
        tax_code: bigint
        partner_id?: (bigint | null) | undefined
        partner_code?: (string | null) | undefined
        item_id?: (bigint | null) | undefined
        section_id?: (bigint | null) | undefined
        tag_ids?: bigint[] | undefined
        amount: bigint
        vat: bigint
        description?: string | undefined
        entry_side: 'credit' | 'debit'
        segment_1_tag_id?: (bigint | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
      }[]
    | undefined
  renews?:
    | {
        id: bigint
        update_date: string
        renew_target_id: bigint
        renew_target_type: 'detail' | 'accrual' | 'renew'
        details: {
          id: bigint
          entry_side: 'credit' | 'debit'
          account_item_id: bigint
          tax_code: bigint
          partner_id?: (bigint | null) | undefined
          partner_code?: (string | null) | undefined
          item_id?: (bigint | null) | undefined
          section_id?: (bigint | null) | undefined
          tag_ids: bigint[]
          segment_1_tag_id?: (bigint | null) | undefined
          segment_2_tag_id?: (bigint | null) | undefined
          segment_3_tag_id?: (bigint | null) | undefined
          amount: bigint
          vat: bigint
          description?: (string | null) | undefined
        }[]
      }[]
    | undefined
  payments?:
    | {
        id: bigint
        date: string
        from_walletable_type?:
          | 'bank_account'
          | 'credit_card'
          | 'wallet'
          | 'private_account_item'
          | undefined
        from_walletable_id?: bigint | undefined
        amount: bigint
        partner_id: bigint
        partner_code: string | null
        item_id: bigint | null
        item_code: string | null
        section_id: bigint | null
        section_code: string | null
        tag_ids: bigint[]
        segment_1_tag_id?: (bigint | null) | undefined
        segment_1_tag_code?: (string | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_2_tag_code?: (string | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
        segment_3_tag_code?: (string | null) | undefined
      }[]
    | undefined
  receipts?:
    | {
        id: bigint
        status: 'confirmed' | 'deleted' | 'ignored'
        description?: (string | null) | undefined
        mime_type: string
        issue_date?: (string | null) | undefined
        origin:
          | 'unknown'
          | 'web'
          | 'mobile_camera'
          | 'mobile_album'
          | 'scansnap'
          | 'scannable'
          | 'dropbox'
          | 'mail'
          | 'safety_contact_file'
          | 'public_api'
        qualified_invoice?: 'qualified' | 'not_qualified' | 'unselected' | undefined
        invoice_registration_number?: (string | null) | undefined
        document_type?:
          | 'receipt'
          | 'invoice'
          | 'other'
          | 'receipt_and_invoice'
          | 'contract'
          | undefined
        created_at: string
        file_src: string
        user: { id: bigint; email: string; display_name?: (string | null) | undefined } | null
        receipt_metadatum?:
          | {
              partner_name?: (string | null) | undefined
              issue_date?: (string | null) | undefined
              amount?: (bigint | null) | undefined
            }
          | undefined
      }[]
    | undefined
}
type DealCreateParams = {
  issue_date: string
  type: 'income' | 'expense'
  company_id: bigint
  due_date?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  ref_number?: string | undefined
  details: {
    tax_code: bigint
    account_item_id?: bigint | undefined
    account_item_code?: string | undefined
    amount: bigint
    item_id?: bigint | undefined
    item_code?: string | undefined
    section_id?: bigint | undefined
    section_code?: string | undefined
    partner_id?: (bigint | null) | undefined
    partner_code?: (string | null) | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_1_tag_code?: string | undefined
    segment_2_tag_id?: bigint | undefined
    segment_2_tag_code?: string | undefined
    segment_3_tag_id?: bigint | undefined
    segment_3_tag_code?: string | undefined
    description?: string | undefined
    vat?: bigint | undefined
  }[]
  payments?:
    | {
        amount: bigint
        from_walletable_id: bigint
        from_walletable_type: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
        date: string
      }[]
    | undefined
  receipt_ids?: bigint[] | undefined
  parent_id?: bigint | undefined
}
type DealCreateResponse = {
  deal: {
    id: bigint
    company_id: bigint
    issue_date: string
    due_date?: (string | null) | undefined
    amount: bigint
    due_amount?: bigint | undefined
    type?: 'income' | 'expense' | undefined
    partner_id: bigint | null
    partner_code?: (string | null) | undefined
    ref_number?: (string | null) | undefined
    status: 'unsettled' | 'settled'
    deal_origin_name?: string | undefined
    details?:
      | {
          id: bigint
          account_item_id: bigint
          account_item_code?: (string | null) | undefined
          tax_code: bigint
          partner_id?: (bigint | null) | undefined
          partner_code?: (string | null) | undefined
          item_id?: (bigint | null) | undefined
          item_code?: (string | null) | undefined
          section_id?: (bigint | null) | undefined
          section_code?: (string | null) | undefined
          tag_ids?: bigint[] | undefined
          segment_1_tag_id?: (bigint | null) | undefined
          segment_1_tag_code?: (string | null) | undefined
          segment_2_tag_id?: (bigint | null) | undefined
          segment_2_tag_code?: (string | null) | undefined
          segment_3_tag_id?: (bigint | null) | undefined
          segment_3_tag_code?: (string | null) | undefined
          amount: bigint
          vat: bigint
          description?: (string | null) | undefined
          entry_side: 'credit' | 'debit'
        }[]
      | undefined
    payments?:
      | {
          id: bigint
          date: string
          from_walletable_type?:
            | 'bank_account'
            | 'credit_card'
            | 'wallet'
            | 'private_account_item'
            | undefined
          from_walletable_id?: bigint | undefined
          amount: bigint
          partner_id: bigint
          partner_code: string | null
          item_id: bigint | null
          item_code: string | null
          section_id: bigint | null
          section_code: string | null
          tag_ids: bigint[]
          segment_1_tag_id?: (bigint | null) | undefined
          segment_1_tag_code?: (string | null) | undefined
          segment_2_tag_id?: (bigint | null) | undefined
          segment_2_tag_code?: (string | null) | undefined
          segment_3_tag_id?: (bigint | null) | undefined
          segment_3_tag_code?: (string | null) | undefined
        }[]
      | undefined
    receipts?:
      | {
          id: bigint
          status: 'confirmed' | 'deleted' | 'ignored'
          description?: (string | null) | undefined
          mime_type: string
          issue_date?: (string | null) | undefined
          origin:
            | 'unknown'
            | 'web'
            | 'mobile_camera'
            | 'mobile_album'
            | 'scansnap'
            | 'scannable'
            | 'dropbox'
            | 'mail'
            | 'safety_contact_file'
            | 'public_api'
          qualified_invoice?: 'qualified' | 'not_qualified' | 'unselected' | undefined
          invoice_registration_number?: (string | null) | undefined
          document_type?:
            | 'receipt'
            | 'invoice'
            | 'other'
            | 'receipt_and_invoice'
            | 'contract'
            | undefined
          created_at: string
          file_src: string
          user: { id: bigint; email: string; display_name?: (string | null) | undefined } | null
          receipt_metadatum?:
            | {
                partner_name?: (string | null) | undefined
                issue_date?: (string | null) | undefined
                amount?: (bigint | null) | undefined
              }
            | undefined
        }[]
      | undefined
  }
}
type DealResponse = { deal: Deal }
type DealUpdateParams = {
  issue_date: string
  type: 'income' | 'expense'
  company_id: bigint
  due_date?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  ref_number?: string | undefined
  details: {
    id?: bigint | undefined
    tax_code: bigint
    account_item_id: bigint
    amount: bigint
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    partner_id?: (bigint | null) | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
    description?: string | undefined
    vat?: bigint | undefined
  }[]
  receipt_ids?: (bigint[] | null) | undefined
}
type RenewCreateParams = {
  company_id: bigint
  update_date: string
  renew_target_id: bigint
  details: {
    account_item_id: bigint
    tax_code: bigint
    amount: bigint
    vat?: bigint | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    partner_id?: (bigint | null) | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
    description?: string | undefined
  }[]
}
type RenewUpdateParams = {
  company_id: bigint
  update_date: string
  details: {
    account_item_id: bigint
    tax_code: bigint
    amount: bigint
    vat?: bigint | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    partner_id?: (bigint | null) | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
    description?: string | undefined
  }[]
}
type PaymentParams = {
  company_id: bigint
  date: string
  from_walletable_type: 'bank_account' | 'credit_card' | 'wallet' | 'private_account_item'
  from_walletable_id: bigint
  amount: bigint
}
type ManualJournal = {
  id: bigint
  company_id: bigint
  issue_date: string
  adjustment: boolean
  txn_number?: (string | null) | undefined
  ref_number: string | null
  details: {
    id: bigint
    entry_side: 'credit' | 'debit'
    account_item_id: bigint
    tax_code: bigint
    partner_id: bigint | null
    partner_name: string | null
    partner_code: string | null
    partner_long_name: string | null
    item_id: bigint | null
    item_name: string | null
    section_id: bigint | null
    section_name: string | null
    tag_ids: bigint[]
    tag_names: string[]
    segment_1_tag_id?: (bigint | null) | undefined
    segment_1_tag_name?: (string | null) | undefined
    segment_2_tag_id?: (bigint | null) | undefined
    segment_2_tag_name?: (string | null) | undefined
    segment_3_tag_id?: (bigint | null) | undefined
    segment_3_tag_name?: (string | null) | undefined
    account_item_code?: (string | null) | undefined
    item_code?: (string | null) | undefined
    section_code?: (string | null) | undefined
    segment_1_tag_code?: (string | null) | undefined
    segment_2_tag_code?: (string | null) | undefined
    segment_3_tag_code?: (string | null) | undefined
    amount: bigint
    vat: bigint
    description: string | null
  }[]
  receipt_ids: bigint[]
}
type ManualJournalCreateParams = {
  company_id: bigint
  issue_date: string
  adjustment?: boolean | undefined
  ref_number?: string | undefined
  details: {
    entry_side: 'debit' | 'credit'
    tax_code: bigint
    account_item_id?: bigint | undefined
    account_item_code?: string | undefined
    amount: bigint
    vat?: bigint | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    item_code?: string | undefined
    section_id?: bigint | undefined
    section_code?: string | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
    segment_1_tag_code?: string | undefined
    segment_2_tag_code?: string | undefined
    segment_3_tag_code?: string | undefined
    description?: string | undefined
  }[]
  receipt_ids?: bigint[] | undefined
  parent_id?: bigint | undefined
}
type ManualJournalResponse = { manual_journal: ManualJournal }
type ManualJournalUpdateParams = {
  company_id: bigint
  issue_date: string
  adjustment?: boolean | undefined
  ref_number?: string | undefined
  details: {
    id?: bigint | undefined
    entry_side: 'debit' | 'credit'
    tax_code: bigint
    account_item_id?: bigint | undefined
    account_item_code?: string | undefined
    amount: bigint
    vat?: bigint | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    item_code?: string | undefined
    section_id?: bigint | undefined
    section_code?: string | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
    segment_1_tag_code?: string | undefined
    segment_2_tag_code?: string | undefined
    segment_3_tag_code?: string | undefined
    description?: string | undefined
  }[]
  receipt_ids?: bigint[] | undefined
}
type User = {
  id: bigint
  email: string
  display_name: string | null
  first_name: string | null
  last_name: string | null
  first_name_kana: string | null
  last_name_kana: string | null
}
type MeResponse = {
  user: {
    id: bigint
    email: string
    display_name: string | null
    first_name: string | null
    last_name: string | null
    first_name_kana: string | null
    last_name_kana: string | null
    companies?:
      | {
          id: bigint
          display_name: string
          role:
            | 'admin'
            | 'simple_accounting'
            | 'self_only'
            | 'read_only'
            | 'workflow'
            | 'product_linkage'
            | 'bookkeeping'
            | 'bookkeeping_report'
            | 'bookkeeping_simple'
            | 'bookkeeping_simple_report'
            | 'bookkeeping_prime'
            | 'bookkeeping_prime_report'
            | 'voucher_mgt'
            | 'voucher_mgt_report'
            | 'bank_accountant'
            | 'bank_accountant_report'
          use_custom_role: boolean
          advisor_id?: (bigint | null) | undefined
        }[]
      | undefined
  }
}
type UserParams = {
  display_name?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  first_name_kana?: string | undefined
  last_name_kana?: string | undefined
}
type UserResponse = { user: User }
type UserCapabilityWithConfirm = {
  confirm?: boolean | undefined
  read?: boolean | undefined
  create?: boolean | undefined
  update?: boolean | undefined
  destroy?: boolean | undefined
}
type UserCapabilityWithSelfOnly = {
  read?: boolean | undefined
  create?: boolean | undefined
  update?: boolean | undefined
  destroy?: boolean | undefined
  allowed_target?: 'self_only' | 'all' | undefined
}
type UserCapability = {
  read?: boolean | undefined
  create?: boolean | undefined
  update?: boolean | undefined
  destroy?: boolean | undefined
}
type UserCapabilityJustReadWrite = { read?: boolean | undefined; write?: boolean | undefined }
type UserCapabilityJustRead = { read?: boolean | undefined }
type UserCapabilityJustCreateRead = { create?: boolean | undefined; read?: boolean | undefined }
type UserCapabilityJustCreate = { create?: boolean | undefined }
type UserCapabilityJustWrite = { write?: boolean | undefined }
type UserCapabilityJustReadUpdate = { read?: boolean | undefined; update?: boolean | undefined }
type UserCapabilityWithSync = {
  read?: boolean | undefined
  create?: boolean | undefined
  update?: boolean | undefined
  destroy?: boolean | undefined
  sync?: boolean | undefined
}
type UserCapabilityWithWrite = {
  read?: boolean | undefined
  create?: boolean | undefined
  update?: boolean | undefined
  destroy?: boolean | undefined
  write?: boolean | undefined
}
type UserCapabilityJustUpdate = { update?: boolean | undefined }
type UserCapabilityJustReadUpdateDestroy = {
  read?: boolean | undefined
  update?: boolean | undefined
  destroy?: boolean | undefined
}
type UserCapabilityJustConfirm = { confirm?: boolean | undefined }
type CompanyIndexResponse = {
  companies: {
    id: bigint
    name: string | null
    name_kana: string | null
    display_name: string | null
    company_number: string
    role:
      | 'admin'
      | 'simple_accounting'
      | 'self_only'
      | 'read_only'
      | 'workflow'
      | 'product_linkage'
      | 'bookkeeping'
      | 'bookkeeping_report'
      | 'bookkeeping_simple'
      | 'bookkeeping_simple_report'
      | 'bookkeeping_prime'
      | 'bookkeeping_prime_report'
      | 'voucher_mgt'
      | 'voucher_mgt_report'
      | 'bank_accountant'
      | 'bank_accountant_report'
  }[]
}
type FiscalYears = {
  id: bigint
  use_industry_template: boolean
  indirect_write_off_method: boolean
  start_date: string
  end_date: string
  depreciation_record_method: bigint
  tax_method: bigint
  sales_tax_business_code: bigint
  tax_fraction: bigint
  tax_account_method: bigint
  return_code: bigint
  is_closed: boolean
  month_end_date: string | null
  temp_month_end_date: string | null
}
type CompanyResponse = {
  company: {
    id: bigint
    name: string | null
    name_kana: string | null
    display_name: string | null
    tax_at_source_calc_type: bigint
    contact_name: string | null
    head_count: bigint | null
    corporate_number: string
    txn_number_format: 'not_used' | 'digits' | 'alnum'
    default_wallet_account_id: bigint | null
    private_settlement: boolean
    minus_format: bigint
    org_code: number
    company_number: string
    role:
      | 'admin'
      | 'simple_accounting'
      | 'self_only'
      | 'read_only'
      | 'workflow'
      | 'product_linkage'
      | 'bookkeeping'
      | 'bookkeeping_report'
      | 'bookkeeping_simple'
      | 'bookkeeping_simple_report'
      | 'bookkeeping_prime'
      | 'bookkeeping_prime_report'
      | 'voucher_mgt'
      | 'voucher_mgt_report'
      | 'bank_accountant'
      | 'bank_accountant_report'
    phone1: string | null
    phone2: string | null
    fax: string | null
    zipcode: string | null
    prefecture_code: bigint | null
    street_name1: string | null
    street_name2: string | null
    invoice_layout:
      | 'default_classic'
      | 'standard_classic'
      | 'envelope_classic'
      | 'carried_forward_standard_classic'
      | 'carried_forward_envelope_classic'
      | 'default_modern'
      | 'standard_modern'
      | 'envelope_modern'
    amount_fraction: bigint
    use_partner_code: boolean
    industry_class:
      | 'agriculture_forestry_fisheries_ore'
      | 'construction'
      | 'manufacturing_processing'
      | 'it'
      | 'transportation_logistics'
      | 'retail_wholesale'
      | 'finance_insurance'
      | 'real_estate_rental'
      | 'profession'
      | 'design_production'
      | 'food'
      | 'leisure_entertainment'
      | 'lifestyle'
      | 'education'
      | 'medical_welfare'
      | 'other_services'
      | 'other_association'
      | 'other'
      | ''
    industry_code:
      | ''
      | 'agriculture'
      | 'forestry'
      | 'fishing_industry'
      | 'mining'
      | 'civil_contractors'
      | 'pavement'
      | 'carpenter'
      | 'renovation'
      | 'electrical_plumbing'
      | 'grocery'
      | 'machinery_manufacturing'
      | 'printing'
      | 'other_manufacturing'
      | 'software_development'
      | 'system_development'
      | 'survey_analysis'
      | 'server_management'
      | 'website_production'
      | 'online_service_management'
      | 'online_advertising_agency'
      | 'online_advertising_planning_production'
      | 'online_media_management'
      | 'portal_site_management'
      | 'other_it_services'
      | 'transport_delivery'
      | 'delivery'
      | 'other_transportation_logistics'
      | 'other_wholesale'
      | 'clothing_wholesale_fiber'
      | 'food_wholesale'
      | 'entrusted_development_wholesale'
      | 'online_shop'
      | 'fashion_grocery_store'
      | 'food_store'
      | 'entrusted_store'
      | 'other_store'
      | 'financial_instruments_exchange'
      | 'commodity_futures_investment_advisor'
      | 'other_financial'
      | 'brokerage_insurance'
      | 'other_insurance'
      | 'real_estate_developer'
      | 'real_estate_brokerage'
      | 'rent_coin_parking_management'
      | 'rental_office_co_working_space'
      | 'rental_lease'
      | 'cpa_tax_accountant'
      | 'law_office'
      | 'judicial_and_administrative_scrivener'
      | 'labor_consultant'
      | 'other_profession'
      | 'business_consultant'
      | 'academic_research_development'
      | 'advertising_agency'
      | 'advertising_planning_production'
      | 'design_development'
      | 'apparel_industry_design'
      | 'website_design'
      | 'advertising_planning_design'
      | 'other_design'
      | 'restaurants_coffee_shops'
      | 'sale_of_lunch'
      | 'bread_confectionery_manufacture_sale'
      | 'delivery_catering_mobile_catering'
      | 'hotel_inn'
      | 'homestay'
      | 'travel_agency'
      | 'leisure_sports_facility_management'
      | 'show_event_management'
      | 'barber'
      | 'beauty_salon'
      | 'spa_sand_bath_sauna'
      | 'este_ail_salon'
      | 'bridal_planning_introduce_wedding'
      | 'memorial_ceremony_funeral'
      | 'moving'
      | 'courier_industry'
      | 'house_maid_cleaning_agency'
      | 're_tailoring_clothes'
      | 'training_institute_management'
      | 'tutoring_school'
      | 'music_calligraphy_abacus_classroom'
      | 'english_school'
      | 'tennis_yoga_judo_school'
      | 'culture_school'
      | 'seminar_planning_management'
      | 'hospital_clinic'
      | 'dental_clinic'
      | 'other_medical_services'
      | 'nursery'
      | 'nursing_home'
      | 'rehabilitation_support_services'
      | 'other_welfare'
      | 'visit_welfare_service'
      | 'recruitment_temporary_staffing'
      | 'life_related_recruitment_temporary_staffing'
      | 'car_maintenance_car_repair'
      | 'machinery_equipment_maintenance_repair'
      | 'cleaning_maintenance_building_management'
      | 'security'
      | 'other_services'
      | 'npo'
      | 'general_incorporated_association'
      | 'general_incorporated_foundation'
      | 'other_association'
      | 'manufacturing'
      | 'education'
      | 'medical'
      | 'ict'
      | 'food'
      | 'construction'
      | 'transportation'
      | 'trading'
      | 'retail'
      | 'finance'
      | 'real_estate'
      | 'travel'
      | 'accountant'
      | 'lawer'
      | 'consultant'
      | 'recruit'
      | 'publication'
      | 'design'
      | 'others'
      | 'company_employee'
      | 'others_side_business'
      | 'others_deduction'
      | 'default'
    workflow_setting: 'enable' | 'disable'
    fiscal_years: FiscalYears[]
    account_items?:
      | { id: bigint; name: string; shortcut?: (string | null) | undefined; categories: string[] }[]
      | undefined
    tax_codes?: { code: bigint; name: string; name_ja: string }[] | undefined
    items?:
      | {
          id: bigint
          name: string
          shortcut1?: (string | null) | undefined
          shortcut2?: (string | null) | undefined
        }[]
      | undefined
    partners?:
      | {
          id: bigint
          code?: (string | null) | undefined
          name: string
          shortcut1?: (string | null) | undefined
          shortcut2?: (string | null) | undefined
        }[]
      | undefined
    sections?:
      | {
          id: bigint
          name: string
          shortcut1?: (string | null) | undefined
          shortcut2?: (string | null) | undefined
          indent_count?: bigint | undefined
          parent_id?: (bigint | null) | undefined
        }[]
      | undefined
    tags?:
      | {
          id: bigint
          name: string
          shortcut1?: (string | null) | undefined
          shortcut2?: (string | null) | undefined
        }[]
      | undefined
    walletables?:
      | { id: bigint; name: string; type: 'bank_account' | 'credit_card' | 'wallet' }[]
      | undefined
  }
}
type Item = {
  id: bigint
  company_id: bigint
  name: string
  update_date: string
  available: boolean
  shortcut1: string | null
  shortcut2: string | null
  code?: (string | null) | undefined
}
type ItemParams = {
  company_id: bigint
  name: string
  shortcut1?: string | undefined
  shortcut2?: string | undefined
  code?: string | undefined
}
type ItemResponse = { item: Item }
type Tax = { code: bigint; name: string; name_ja: string }
type TaxResponse = { tax: Tax }
type Walletable = {
  id: bigint
  name: string
  bank_id: bigint | null
  type: 'bank_account' | 'credit_card' | 'wallet'
  last_synced_at?: (string | null) | undefined
  sync_status?:
    | 'success'
    | 'disabled'
    | 'syncing'
    | 'token_refresh_error'
    | 'unsupported'
    | 'other_error'
    | undefined
  last_balance?: bigint | undefined
  walletable_balance?: bigint | undefined
  update_date: string
}
type WalletableCreateParams = {
  name: string
  type: 'bank_account' | 'credit_card' | 'wallet'
  company_id: bigint
  bank_id?: (bigint | null) | undefined
  is_asset?: boolean | undefined
}
type WalletableCreateResponse = {
  walletable: {
    id: bigint
    name: string
    bank_id: bigint | null
    type: 'bank_account' | 'credit_card' | 'wallet'
  }
}
type WalletableUpdateParams = { name: string; company_id: bigint }
type WalletableUpdateResponse = {
  id: bigint
  name: string
  bank_id: bigint | null
  type: 'bank_account' | 'credit_card' | 'wallet'
  last_balance: bigint
  walletable_balance: bigint
}
type Bank = {
  id: bigint
  name: string
  type: 'bank_account' | 'credit_card' | 'wallet'
  name_kana: string | null
}
type BankResponse = { bank: Bank }
type Transfer = {
  id: bigint
  company_id: bigint
  amount: bigint
  date: string
  from_walletable_type: 'bank_account' | 'wallet' | 'credit_card'
  from_walletable_id: bigint
  from_partner_id: bigint
  from_partner_code: string | null
  from_section_id: bigint | null
  from_section_code: string | null
  from_item_id: bigint | null
  from_item_code: string | null
  from_tag_ids: bigint[]
  from_segment_1_tag_id?: (bigint | null) | undefined
  from_segment_1_tag_code?: (string | null) | undefined
  from_segment_2_tag_id?: (bigint | null) | undefined
  from_segment_2_tag_code?: (string | null) | undefined
  from_segment_3_tag_id?: (bigint | null) | undefined
  from_segment_3_tag_code?: (string | null) | undefined
  to_walletable_type: 'bank_account' | 'wallet' | 'credit_card'
  to_walletable_id: bigint
  description: string | null
  to_walletables: {
    type: 'bank_account' | 'wallet' | 'credit_card'
    id: bigint
    amount: bigint
    description: string | null
    partner_id: bigint
    partner_code: string | null
    section_id: bigint | null
    section_code: string | null
    item_id: bigint | null
    item_code: string | null
    tag_ids: bigint[]
    segment_1_tag_id?: (bigint | null) | undefined
    segment_1_tag_code?: (string | null) | undefined
    segment_2_tag_id?: (bigint | null) | undefined
    segment_2_tag_code?: (string | null) | undefined
    segment_3_tag_id?: (bigint | null) | undefined
    segment_3_tag_code?: (string | null) | undefined
  }[]
}
type TransferParams = {
  to_walletable_id?: bigint | undefined
  to_walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
  from_walletable_id: bigint
  from_walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  amount?: bigint | undefined
  from_partner_id?: (bigint | null) | undefined
  from_section_id?: (bigint | null) | undefined
  from_item_id?: (bigint | null) | undefined
  from_tag_ids?: (bigint[] | null) | undefined
  from_segment_1_tag_id?: (bigint | null) | undefined
  from_segment_2_tag_id?: (bigint | null) | undefined
  from_segment_3_tag_id?: (bigint | null) | undefined
  date: string
  company_id: bigint
  description?: string | undefined
  to_walletables?:
    | {
        type: 'bank_account' | 'credit_card' | 'wallet'
        id: bigint
        amount: bigint
        description?: string | undefined
        partner_id?: (bigint | null) | undefined
        section_id?: (bigint | null) | undefined
        item_id?: (bigint | null) | undefined
        tag_ids?: (bigint[] | null) | undefined
        segment_1_tag_id?: (bigint | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
      }[]
    | undefined
}
type TransferResponse = { transfer: Transfer }
type WalletTxn = {
  id: bigint
  company_id: bigint
  date: string
  amount: bigint
  due_amount: bigint
  balance: bigint | null
  entry_side: 'income' | 'expense'
  walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  walletable_id: bigint
  description: string
  status: bigint
  rule_matched: boolean
}
type WalletTxnParams = {
  entry_side: 'income' | 'expense'
  description?: string | undefined
  amount: bigint
  walletable_id: bigint
  walletable_type: 'bank_account' | 'credit_card' | 'wallet'
  date: string
  company_id: bigint
  balance?: bigint | undefined
}
type WalletTxnResponse = { wallet_txn: WalletTxn }
type WalletTxnReconcileDeal = { deal_id: bigint; amount: bigint }
type WalletTxnReconcileAdjustmentDeal = {
  issue_date?: string | undefined
  ref?: string | undefined
  partner_id?: bigint | undefined
  deal_lines: {
    amount: bigint
    vat?: bigint | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
    item_id?: bigint | undefined
    description?: string | undefined
    tax_code?: number | undefined
    tax_entry_method?: {} | undefined
    section_id?: bigint | undefined
    account_item_id: bigint
    partner_id?: bigint | undefined
  }[]
}
type ConflictError = {
  status_code?: number | undefined
  errors?: { messages: string[]; type: 'status' | 'validation' | 'error' }[] | undefined
}
type WalletTxnDealLine = {
  amount: bigint
  vat?: bigint | undefined
  tag_ids?: bigint[] | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
  item_id?: bigint | undefined
  description?: string | undefined
  tax_code?: number | undefined
  tax_entry_method?: {} | undefined
  section_id?: bigint | undefined
  account_item_id: bigint
  partner_id?: bigint | undefined
}
type WalletTxnTransferFromLine = {
  walletable_type: {}
  walletable_id: bigint
  walletable_tags?:
    | {
        item_id?: (bigint | null) | undefined
        section_id?: (bigint | null) | undefined
        partner_id?: (bigint | null) | undefined
        tag_ids?: bigint[] | undefined
        segment_1_tag_id?: (bigint | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
      }
    | undefined
}
type WalletTxnTransferToLine = {
  walletable_type: {}
  walletable_id: bigint
  amount: bigint
  description?: (string | null) | undefined
  walletable_tags?:
    | {
        item_id?: (bigint | null) | undefined
        section_id?: (bigint | null) | undefined
        partner_id?: (bigint | null) | undefined
        tag_ids?: bigint[] | undefined
        segment_1_tag_id?: (bigint | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
      }
    | undefined
}
type WalletTxnTransferChargeLine = {
  account_item_id: bigint
  amount: bigint
  line_type: {}
  tax_code?: (number | null) | undefined
  vat?: (bigint | null) | undefined
  description?: (string | null) | undefined
  item_id?: (bigint | null) | undefined
  section_id?: (bigint | null) | undefined
  partner_id?: (bigint | null) | undefined
  tag_ids?: bigint[] | undefined
  segment_1_tag_id?: (bigint | null) | undefined
  segment_2_tag_id?: (bigint | null) | undefined
  segment_3_tag_id?: (bigint | null) | undefined
}
type JournalsResponse = {
  journals: {
    id: bigint
    messages: string[]
    company_id: bigint
    download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
    encoding: 'sjis' | 'utf-8'
    start_date: string
    end_date: string
    visible_tags?:
      | (
          | 'partner'
          | 'item'
          | 'tag'
          | 'section'
          | 'description'
          | 'wallet_txn_description'
          | 'all'
          | 'segment_1_tag'
          | 'segment_2_tag'
          | 'segment_3_tag'
        )[]
      | undefined
    visible_ids?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
    status_url: string
    up_to_date: boolean
    up_to_date_reasons: {
      code: 'depreciation_creating' | 'depreciation_create_error'
      message: string
    }[]
  }
}
type JournalStatusResponse = {
  journals: {
    id: bigint
    company_id: bigint
    download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
    encoding: 'sjis' | 'utf-8'
    status: 'enqueued' | 'working' | 'uploaded' | 'failed'
    start_date: string
    end_date: string
    visible_tags?:
      | (
          | 'partner'
          | 'item'
          | 'tag'
          | 'section'
          | 'description'
          | 'wallet_txn_description'
          | 'all'
          | 'segment_1_tag'
          | 'segment_2_tag'
          | 'segment_3_tag'
        )[]
      | undefined
    visible_ids?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
    download_url?: string | undefined
  }
}
type ReportJournalsJournalDebitItems = {
  id: bigint | null
  line_type: {}
  account_item_id: bigint
  amount: bigint
  net_amount: bigint | null
  vat: bigint | null
  tax_code: number | null
  partner_id: bigint | null
  item_id: bigint | null
  section_id: bigint | null
  segment_tag_1_id: bigint | null
  segment_tag_2_id: bigint | null
  segment_tag_3_id: bigint | null
  memo_tag_ids: bigint[]
  description: string | null
}
type ReportJournalsJournal = {
  id: bigint
  deal_id: bigint | null
  txn_date: string
  txn_number: string | null
  adjustment: boolean
  approval_status: {}
  create_user_id: bigint
  last_approver_user_id: bigint | null
  current_approver_user_ids: bigint[]
  ref_number: string | null
  deal_origin_name: string | null
  created_at: string
  updated_at: string
  receipt_ids: bigint[]
  debit: ReportJournalsJournalDebitItems[]
  credit: ReportJournalsJournalDebitItems[]
}
type TrialBsResponse = {
  trial_bs: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      opening_balance?: bigint | undefined
      debit_amount?: bigint | undefined
      credit_amount?: bigint | undefined
      closing_balance?: bigint | undefined
      composition_ratio?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TooManyRequestsError = {
  status_code: number
  meta: { limit: number; period?: number | undefined; remaining: number; reset: string }
}
type TrialBsTwoYearsResponse = {
  trial_bs_two_years: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      last_year_closing_balance?: bigint | undefined
      closing_balance?: bigint | undefined
      year_on_year?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialBsThreeYearsResponse = {
  trial_bs_three_years: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      two_years_before_closing_balance?: bigint | undefined
      last_year_closing_balance?: bigint | undefined
      closing_balance?: bigint | undefined
      year_on_year?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlResponse = {
  trial_pl: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      opening_balance?: bigint | undefined
      debit_amount?: bigint | undefined
      credit_amount?: bigint | undefined
      closing_balance?: bigint | undefined
      composition_ratio?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlTwoYearsResponse = {
  trial_pl_two_years: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      last_year_closing_balance?: bigint | undefined
      closing_balance?: bigint | undefined
      year_on_year?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlThreeYearsResponse = {
  trial_pl_three_years: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      two_years_before_closing_balance?: bigint | undefined
      last_year_closing_balance?: bigint | undefined
      closing_balance?: bigint | undefined
      year_on_year?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlSectionsResponse = {
  trial_pl_sections: {
    company_id: bigint
    section_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            segment_1_tags?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            segment_2_tags?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            segment_3_tags?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlSegment_1TagsResponse = {
  trial_pl_segment_1_tags: {
    company_id: bigint
    segment_1_tag_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            sections?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlSegment_2TagsResponse = {
  trial_pl_segment_2_tags: {
    company_id: bigint
    segment_2_tag_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            sections?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialPlSegment_3TagsResponse = {
  trial_pl_segment_3_tags: {
    company_id: bigint
    segment_3_tag_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            sections?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrResponse = {
  trial_cr: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            opening_balance?: bigint | undefined
            debit_amount?: bigint | undefined
            credit_amount?: bigint | undefined
            closing_balance?: bigint | undefined
            composition_ratio?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      opening_balance?: bigint | undefined
      debit_amount?: bigint | undefined
      credit_amount?: bigint | undefined
      closing_balance?: bigint | undefined
      composition_ratio?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrTwoYearsResponse = {
  trial_cr_two_years: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      last_year_closing_balance?: bigint | undefined
      closing_balance?: bigint | undefined
      year_on_year?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrThreeYearsResponse = {
  trial_cr_three_years: {
    company_id: bigint
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'section'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      partners?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      items?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            two_years_before_closing_balance?: bigint | undefined
            last_year_closing_balance?: bigint | undefined
            closing_balance?: bigint | undefined
            year_on_year?: number | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      two_years_before_closing_balance?: bigint | undefined
      last_year_closing_balance?: bigint | undefined
      closing_balance?: bigint | undefined
      year_on_year?: number | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrSectionsResponse = {
  trial_cr_sections: {
    company_id: bigint
    section_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?:
      | 'partner'
      | 'item'
      | 'account_item'
      | 'segment_1_tag'
      | 'segment_2_tag'
      | 'segment_3_tag'
      | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      sections?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            segment_1_tags?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            segment_2_tags?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            segment_3_tags?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrSegment_1TagsResponse = {
  trial_cr_segment_1_tags: {
    company_id: bigint
    segment_1_tag_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      segment_1_tags?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            sections?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrSegment_2TagsResponse = {
  trial_cr_segment_2_tags: {
    company_id: bigint
    segment_2_tag_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      segment_2_tags?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            sections?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type TrialCrSegment_3TagsResponse = {
  trial_cr_segment_3_tags: {
    company_id: bigint
    segment_3_tag_ids: string
    fiscal_year?: bigint | undefined
    start_month?: bigint | undefined
    end_month?: bigint | undefined
    start_date?: string | undefined
    end_date?: string | undefined
    account_item_display_type?: 'account_item' | 'group' | undefined
    breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
    partner_id?: bigint | undefined
    partner_code?: string | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    adjustment?: 'only' | 'without' | undefined
    cost_allocation?: 'only' | 'without' | undefined
    approval_flow_status?: 'without_in_progress' | 'all' | undefined
    created_at?: string | undefined
    balances: {
      account_item_id?: bigint | undefined
      account_item_name?: string | undefined
      account_group_name?: string | undefined
      segment_3_tags?:
        | {
            id: bigint
            name?: string | undefined
            closing_balance?: bigint | undefined
            partners?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            items?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
            sections?:
              | { id: bigint; name?: string | undefined; closing_balance?: bigint | undefined }[]
              | undefined
          }[]
        | undefined
      account_category_name?: string | undefined
      total_line?: boolean | undefined
      hierarchy_level?: bigint | undefined
      parent_account_category_name?: string | undefined
      closing_balance?: bigint | undefined
    }[]
  }
  up_to_date: boolean
  up_to_date_reasons?:
    | { code: 'depreciation_creating' | 'depreciation_create_error'; message: string }[]
    | undefined
}
type GeneralLedgersResponse = {
  general_ledgers: {
    account_item_id?: bigint | undefined
    account_item_name?: string | undefined
    total_amount?: bigint | undefined
    final_balance?: bigint | undefined
    debit_amount?: bigint | undefined
    credit_amount?: bigint | undefined
  }[]
}
type Receipt = {
  id: bigint
  status: 'confirmed' | 'deleted' | 'ignored'
  description?: string | undefined
  mime_type: string
  origin:
    | 'unknown'
    | 'web'
    | 'mobile_camera'
    | 'mobile_album'
    | 'scansnap'
    | 'scannable'
    | 'dropbox'
    | 'mail'
    | 'safety_contact_file'
    | 'public_api'
  created_at: string
  user: { id: bigint; email: string; display_name?: (string | null) | undefined } | null
  receipt_metadatum?:
    | ({
        partner_name?: (string | null) | undefined
        issue_date?: (string | null) | undefined
        amount?: (bigint | null) | undefined
      } | null)
    | undefined
  qualified_invoice?: 'qualified' | 'not_qualified' | 'unselected' | undefined
  invoice_registration_number?: (string | null) | undefined
  document_type?: 'receipt' | 'invoice' | 'other' | undefined
}
type ReceiptCreateParams = {
  company_id: bigint
  description?: string | undefined
  receipt: File
  receipt_metadatum_partner_name?: (string | null) | undefined
  receipt_metadatum_issue_date?: (string | null) | undefined
  receipt_metadatum_amount?: (bigint | null) | undefined
  qualified_invoice?: 'qualified' | 'not_qualified' | 'unselected' | undefined
  document_type?: 'receipt' | 'invoice' | 'other' | undefined
}
type ReceiptResponse = { receipt: Receipt }
type ReceiptUpdateParams = {
  company_id: bigint
  description?: string | undefined
  receipt_metadatum?:
    | {
        partner_name?: (string | null) | undefined
        issue_date?: (string | null) | undefined
        amount?: (bigint | null) | undefined
      }
    | undefined
  qualified_invoice?: 'qualified' | 'not_qualified' | 'unselected' | undefined
  invoice_registration_number?: string | undefined
  document_type?: 'receipt' | 'invoice' | 'other' | undefined
}
type ExpenseApplicationsIndexResponse = {
  expense_applications: {
    id: bigint
    company_id: bigint
    title: string
    issue_date: string
    description?: string | undefined
    total_amount?: bigint | undefined
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    section_id?: (bigint | null) | undefined
    tag_ids?: bigint[] | undefined
    purchase_lines?:
      | {
          id: bigint
          transaction_date?: (string | null) | undefined
          receipt_id?: (bigint | null) | undefined
          sub_receipt_ids?: bigint[] | undefined
          use_currency?: boolean | undefined
          expense_application_purchase_line_currency?:
            | ({
                currency_id?: bigint | undefined
                currency_code?: string | undefined
                exchange_rate?: (string | null) | undefined
              } | null)
            | undefined
          expense_application_lines?:
            | {
                id: bigint
                description?: (string | null) | undefined
                amount?: bigint | undefined
                expense_application_line_template_id?: (bigint | null) | undefined
                expense_application_line_currency_amount?:
                  | ({
                      currency_amount?: (string | null) | undefined
                      system_calc_amount?: bigint | undefined
                    } | null)
                  | undefined
                tag_assignment?: 'application' | 'line' | undefined
                section_id?: (bigint | null) | undefined
                tag_ids?: bigint[] | undefined
                segment_1_tag_id?: (bigint | null) | undefined
                segment_2_tag_id?: (bigint | null) | undefined
                segment_3_tag_id?: (bigint | null) | undefined
              }[]
            | undefined
        }[]
      | undefined
    deal_id: bigint | null
    deal_status: 'settled' | 'unsettled'
    applicant_id: bigint
    proxy_applicant_id?: (bigint | null) | undefined
    application_number: string
    current_step_id?: (bigint | null) | undefined
    current_round?: bigint | undefined
    segment_1_tag_id?: (bigint | null) | undefined
    segment_2_tag_id?: (bigint | null) | undefined
    segment_3_tag_id?: (bigint | null) | undefined
  }[]
}
type ExpenseApplicationCreateParams = {
  company_id: bigint
  title: string
  issue_date?: string | undefined
  description?: string | undefined
  section_id?: bigint | undefined
  tag_ids?: bigint[] | undefined
  purchase_lines?:
    | {
        receipt_id?: bigint | undefined
        transaction_date: string
        sub_receipt_ids?: bigint[] | undefined
        use_currency?: boolean | undefined
        expense_application_purchase_line_currency?:
          | {
              currency_id?: bigint | undefined
              currency_code?: string | undefined
              exchange_rate?: number | undefined
            }
          | undefined
        expense_application_lines?:
          | {
              description?: string | undefined
              amount?: bigint | undefined
              expense_application_line_template_id?: bigint | undefined
              expense_application_line_currency_amount?:
                | { currency_amount?: number | undefined }
                | undefined
              custom_values?:
                | {
                    key: string
                    type:
                      | 'single_line_string'
                      | 'multi_line_string'
                      | 'date'
                      | 'date_range'
                      | 'datetime'
                      | 'pulldown'
                      | 'radio_button'
                      | 'checkbox'
                      | 'number'
                    value?: ({ [x: string]: unknown } | null) | undefined
                  }[]
                | undefined
              tag_assignment?: (string | null) | undefined
              section_id?: (bigint | null) | undefined
              tag_ids?: bigint[] | undefined
              segment_1_tag_id?: (bigint | null) | undefined
              segment_2_tag_id?: (bigint | null) | undefined
              segment_3_tag_id?: (bigint | null) | undefined
            }[]
          | undefined
      }[]
    | undefined
  approval_flow_route_id?: bigint | undefined
  approver_id?: bigint | undefined
  applicant_group_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  draft?: boolean | undefined
  parent_id?: bigint | undefined
  parent_type?: string | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
}
type ExpenseApplicationLineTemplateAmountCalculationCondition =
  | { type: 'applicant_position'; match: 'any_of' | 'none_of'; position_ids: bigint[] }
  | { type: 'unsupported' }
type ExpenseApplicationResponse = {
  expense_application: {
    id: bigint
    company_id: bigint
    title: string
    issue_date: string
    description?: (string | null) | undefined
    total_amount?: bigint | undefined
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    section_id?: (bigint | null) | undefined
    tag_ids?: bigint[] | undefined
    purchase_lines?:
      | {
          id: bigint
          transaction_date?: (string | null) | undefined
          receipt_id?: (bigint | null) | undefined
          sub_receipt_ids?: bigint[] | undefined
          use_currency?: boolean | undefined
          expense_application_purchase_line_currency?:
            | ({
                currency_id?: bigint | undefined
                currency_code?: string | undefined
                exchange_rate?: (string | null) | undefined
              } | null)
            | undefined
          expense_application_lines?:
            | {
                id: bigint
                description?: (string | null) | undefined
                amount?: bigint | undefined
                expense_application_line_template_id?: (bigint | null) | undefined
                expense_application_line_currency_amount?:
                  | ({
                      currency_amount?: (string | null) | undefined
                      system_calc_amount?: bigint | undefined
                    } | null)
                  | undefined
                custom_values?:
                  | {
                      key: string
                      type:
                        | 'single_line_string'
                        | 'multi_line_string'
                        | 'date'
                        | 'date_range'
                        | 'datetime'
                        | 'pulldown'
                        | 'radio_button'
                        | 'checkbox'
                        | 'number'
                      value: { [x: string]: unknown } | null
                    }[]
                  | undefined
                amount_calculate_result?:
                  | ({
                      calculated_amount: bigint
                      applied_rule: {
                        condition: ExpenseApplicationLineTemplateAmountCalculationCondition
                        formula: string
                      }
                      evaluated_as: { group_id: bigint | null; position_id: bigint | null }
                    } | null)
                  | undefined
                tag_assignment?: 'application' | 'line' | undefined
                section_id?: (bigint | null) | undefined
                tag_ids?: bigint[] | undefined
                segment_1_tag_id?: (bigint | null) | undefined
                segment_2_tag_id?: (bigint | null) | undefined
                segment_3_tag_id?: (bigint | null) | undefined
              }[]
            | undefined
        }[]
      | undefined
    deal_id: bigint | null
    deal_status: 'settled' | 'unsettled'
    applicant_id: bigint
    proxy_applicant_id?: (bigint | null) | undefined
    approvers: {
      step_id: bigint
      user_id: bigint | null
      status: 'initial' | 'approved' | 'rejected' | 'feedback'
      is_force_action: boolean
      resource_type:
        | 'predefined_user'
        | 'selected_user'
        | 'unspecified'
        | 'and_resource'
        | 'or_resource'
        | 'and_position'
        | 'or_position'
        | 'switchable'
    }[]
    application_number: string
    approval_flow_route_id: bigint
    comments: { comment: string; user_id: bigint; posted_at: string }[]
    approval_flow_logs: {
      action: 'apply' | 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback'
      user_id: bigint
      updated_at: string
    }[]
    current_step_id: bigint | null
    current_round: bigint
    parent_id?: (bigint | null) | undefined
    parent_type?: 'ApprovalRequest' | 'PurchaseRequest' | undefined
    segment_1_tag_id?: (bigint | null) | undefined
    segment_2_tag_id?: (bigint | null) | undefined
    segment_3_tag_id?: (bigint | null) | undefined
  }
}
type ExpenseApplicationUpdateParams = {
  company_id: bigint
  title: string
  issue_date?: string | undefined
  description?: string | undefined
  section_id?: bigint | undefined
  tag_ids?: bigint[] | undefined
  purchase_lines?:
    | {
        id?: bigint | undefined
        transaction_date: string
        receipt_id?: bigint | undefined
        sub_receipt_ids?: bigint[] | undefined
        use_currency?: boolean | undefined
        expense_application_purchase_line_currency?:
          | {
              currency_id?: bigint | undefined
              currency_code?: string | undefined
              exchange_rate?: number | undefined
            }
          | undefined
        expense_application_lines?:
          | {
              id?: bigint | undefined
              description?: string | undefined
              amount?: bigint | undefined
              expense_application_line_template_id?: bigint | undefined
              expense_application_line_currency_amount?:
                | { currency_amount?: number | undefined }
                | undefined
              custom_values?:
                | {
                    key: string
                    type:
                      | 'single_line_string'
                      | 'multi_line_string'
                      | 'date'
                      | 'date_range'
                      | 'datetime'
                      | 'pulldown'
                      | 'radio_button'
                      | 'checkbox'
                      | 'number'
                    value?: ({ [x: string]: unknown } | null) | undefined
                  }[]
                | undefined
              tag_assignment?: (string | null) | undefined
              section_id?: (bigint | null) | undefined
              tag_ids?: bigint[] | undefined
              segment_1_tag_id?: (bigint | null) | undefined
              segment_2_tag_id?: (bigint | null) | undefined
              segment_3_tag_id?: (bigint | null) | undefined
            }[]
          | undefined
      }[]
    | undefined
  approval_flow_route_id?: bigint | undefined
  approver_id?: bigint | undefined
  applicant_group_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  draft?: boolean | undefined
  parent_id?: (bigint | null) | undefined
  parent_type?: string | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
}
type ExpenseApplicationActionCreateParams = {
  company_id: bigint
  approval_action: 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback' | 'force_feedback'
  target_step_id: bigint
  target_round: bigint
  next_approver_id?: (bigint | null) | undefined
  next_group_id?: (bigint | null) | undefined
}
type ExpenseApplicationParentApprovableRequestUpdateParams = {
  company_id: bigint
  parent_id: bigint | null
}
type ExpenseApplicationCurrency = {
  id: bigint
  name: string
  code: string
  description: string | null
  search_status: 'usable' | 'unusable'
  updated_at: string
}
type ExpenseApplicationCurrenciesIndexResponse = { data: ExpenseApplicationCurrency[] }
type ExpenseApplicationCurrencyParams = {
  company_id: bigint
  name: string
  code: string
  search_status: 'usable' | 'unusable'
  description?: (string | null) | undefined
}
type ExpenseApplicationForm = {
  section_setting: 'optional' | 'required'
  tag_setting: 'optional' | 'required' | 'disable'
  line_template_setting: 'optional' | 'required' | 'disable'
  segment_1_tag_setting: 'optional' | 'required' | 'disable'
  segment_2_tag_setting: 'optional' | 'required' | 'disable'
  segment_3_tag_setting: 'optional' | 'required' | 'disable'
  description_setting: 'optional' | 'required'
  commuter_pass_deduction: 'disable' | 'enable'
  default_flow_route_src_id: bigint | null
  traffic_line_template_src_id?: (bigint | null) | undefined
  observer_addition: 'disable' | 'enable'
  receipt_partner_name_setting: 'optional' | 'required' | 'disable'
  default_title: string
  use_currency: boolean
  auto_calculation_amount_fraction: 'omit' | 'round_up' | 'round'
  allow_modify_parent_application_by_applicant: boolean
  allow_modify_parent_application_by_approver: boolean
  allow_modify_parent_application_by_admin: boolean
  require_parent_purchase_request: boolean
  allow_modify_on_approval: boolean
}
type ExpenseApplicationFormParams = {
  company_id: bigint
  section_setting: 'optional' | 'required'
  tag_setting: 'optional' | 'required' | 'disable'
  line_template_setting: 'optional' | 'required' | 'disable'
  segment_1_tag_setting: 'optional' | 'required' | 'disable'
  segment_2_tag_setting: 'optional' | 'required' | 'disable'
  segment_3_tag_setting: 'optional' | 'required' | 'disable'
  description_setting: 'optional' | 'required'
  commuter_pass_deduction: 'disable' | 'enable'
  default_flow_route_src_id: bigint | null
  traffic_line_template_src_id?: (bigint | null) | undefined
  observer_addition: 'disable' | 'enable'
  receipt_partner_name_setting: 'optional' | 'required' | 'disable'
  default_title: string
  use_currency: boolean
  auto_calculation_amount_fraction: 'omit' | 'round_up' | 'round'
  allow_modify_parent_application_by_applicant: boolean
  allow_modify_parent_application_by_approver: boolean
  allow_modify_parent_application_by_admin: boolean
  require_parent_purchase_request: boolean
  allow_modify_on_approval: boolean
}
type ExpenseApplicationAmountCalculationCreateParams = {
  company_id: bigint
  expense_application_line_template_id: bigint
  custom_values: (
    | { key: string; type: 'single_line_string'; value: string | null }
    | { key: string; type: 'multi_line_string'; value: string | null }
    | { key: string; type: 'date'; value: string | null }
    | {
        key: string
        type: 'date_range'
        value: { start_date: string | null; end_date: string | null }
      }
    | { key: string; type: 'datetime'; value: string | null }
    | { key: string; type: 'number'; value: number | null }
    | { key: string; type: 'pulldown'; value: string | null }
    | { key: string; type: 'radio_button'; value: string | null }
    | { key: string; type: 'checkbox'; value: string[] | null }
  )[]
  applicant: { group_id: bigint | null }
}
type ExpenseApplicationAmountCalculationResponse = {
  calculated_amount: bigint
  applied_rule: {
    condition: ExpenseApplicationLineTemplateAmountCalculationCondition
    formula: string
  }
  evaluated_as: { group_id: bigint | null; position_id: bigint | null }
}
type ExpenseApplicationLineTemplateCustomFormPart = {
  id?: bigint | undefined
  key: string
  name: string
  type:
    | 'single_line_string'
    | 'multi_line_string'
    | 'date'
    | 'date_range'
    | 'datetime'
    | 'number'
    | 'pulldown'
    | 'checkbox'
    | 'radio_button'
  required: boolean
  annotation: string | null
  default_value: (string | null) | number
  unit: string | null
  options: { value: string; calculation_value: number | null }[]
}
type ExpenseApplicationLineTemplate = {
  id: bigint
  source_line_template_id: bigint
  name: string
  account_item_id: bigint
  account_item_name: string
  tax_code: bigint
  tax_name: string
  description: string | null
  line_description: string | null
  required_receipt: boolean
  line_content_setting?: 'optional' | 'required' | 'disable' | undefined
  custom_form_parts?: ExpenseApplicationLineTemplateCustomFormPart[] | undefined
  amount_calculation_setting?: {} | undefined
}
type ExpenseApplicationLineTemplateParams = {
  company_id: bigint
  name: string
  account_item_id: bigint
  item_id?: bigint | undefined
  tax_code: bigint
  description?: string | undefined
  line_description?: string | undefined
  required_receipt?: boolean | undefined
  line_content_setting?: 'optional' | 'required' | 'disable' | undefined
  available_section_ids?: bigint[] | undefined
  available_user_ids?: bigint[] | undefined
  custom_form_parts?: ExpenseApplicationLineTemplateCustomFormPart[] | undefined
  amount_calculation_setting?: {} | undefined
}
type ExpenseApplicationLineTemplateResponse = {
  expense_application_line_template: ExpenseApplicationLineTemplate
}
type PaymentRequestsIndexResponse = {
  payment_requests: {
    id: bigint
    company_id: bigint
    title: string
    application_date: string
    total_amount: bigint
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    deal_id?: (bigint | null) | undefined
    deal_status?: 'settled' | 'unsettled' | undefined
    applicant_id: bigint
    approvers: {
      step_id: bigint
      user_id: bigint | null
      status: 'initial' | 'approved' | 'rejected' | 'feedback'
      is_force_action: boolean
      resource_type:
        | 'predefined_user'
        | 'selected_user'
        | 'unspecified'
        | 'and_resource'
        | 'or_resource'
        | 'and_position'
        | 'or_position'
    }[]
    application_number: string
    current_step_id: bigint | null
    current_round: bigint
    document_code: string
    issue_date: string
    payment_date: string | null
    payment_method:
      | 'none'
      | 'domestic_bank_transfer'
      | 'abroad_bank_transfer'
      | 'account_transfer'
      | 'credit_card'
    partner_id: bigint | null
    partner_code: string | null
    partner_name: string | null
    qualified_invoice_status?: 'qualified' | 'not_qualified' | 'unspecified' | undefined
    input_mode?: 'inclusive' | 'exclusive' | undefined
  }[]
}
type PaymentRequestCreateParams = {
  company_id: bigint
  title: string
  application_date?: string | undefined
  description?: string | undefined
  payment_request_lines: {
    line_type?: 'deal_line' | 'negative_line' | 'withholding_tax' | undefined
    description?: string | undefined
    amount: bigint
    account_item_id?: (bigint | null) | undefined
    tax_code?: bigint | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
  }[]
  approver_id?: bigint | undefined
  approval_flow_route_id: bigint
  applicant_group_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  parent_id?: (bigint | null) | undefined
  parent_type?: 'ApprovalRequest' | 'PurchaseRequest' | undefined
  draft: boolean
  document_code?: string | undefined
  receipt_ids?: bigint[] | undefined
  issue_date: string
  payment_date?: (string | null) | undefined
  payment_method?:
    | 'none'
    | 'domestic_bank_transfer'
    | 'abroad_bank_transfer'
    | 'account_transfer'
    | 'credit_card'
    | undefined
  partner_id?: (bigint | null) | undefined
  partner_code?: (string | null) | undefined
  bank_code?: string | undefined
  bank_name?: string | undefined
  bank_name_kana?: string | undefined
  branch_code?: string | undefined
  branch_name?: string | undefined
  branch_kana?: string | undefined
  account_name?: string | undefined
  account_number?: string | undefined
  account_type?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other' | undefined
  qualified_invoice_status?: 'qualified' | 'not_qualified' | 'unspecified' | undefined
}
type PaymentRequestResponse = {
  payment_request: {
    id: bigint
    company_id: bigint
    title: string
    application_date: string
    description: string
    total_amount: bigint
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    payment_request_lines: {
      id: bigint
      line_type: 'deal_line' | 'negative_line' | 'withholding_tax'
      description: string
      amount: bigint
      account_item_id: bigint | null
      tax_code: bigint | null
      item_id: bigint | null
      section_id: bigint | null
      tag_ids: bigint[]
      segment_1_tag_id?: (bigint | null) | undefined
      segment_2_tag_id?: (bigint | null) | undefined
      segment_3_tag_id?: (bigint | null) | undefined
    }[]
    deal_id: bigint | null
    deal_status: 'settled' | 'unsettled'
    applicant_id: bigint
    approvers: {
      step_id: bigint
      user_id: bigint | null
      status: 'initial' | 'approved' | 'rejected' | 'feedback'
      is_force_action: boolean
      resource_type:
        | 'predefined_user'
        | 'selected_user'
        | 'unspecified'
        | 'and_resource'
        | 'or_resource'
        | 'and_position'
        | 'or_position'
    }[]
    application_number: string
    approval_flow_route_id: bigint
    comments: { comment: string; user_id: bigint; posted_at: string }[]
    approval_flow_logs: {
      action: 'apply' | 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback'
      user_id: bigint
      updated_at: string
    }[]
    current_step_id: bigint | null
    current_round: bigint
    parent_id?: (bigint | null) | undefined
    parent_type?: 'ApprovalRequest' | 'PurchaseRequest' | undefined
    document_code: string
    receipt_ids: bigint[]
    issue_date: string
    payment_date: string | null
    payment_method:
      | 'none'
      | 'domestic_bank_transfer'
      | 'abroad_bank_transfer'
      | 'account_transfer'
      | 'credit_card'
    partner_id: bigint | null
    partner_code?: (string | null) | undefined
    partner_name: string | null
    bank_name: string
    bank_name_kana: string
    bank_code: string
    branch_name: string
    branch_kana: string
    branch_code: string
    account_type: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other'
    account_number: string
    account_name: string
    qualified_invoice_status?: 'qualified' | 'not_qualified' | 'unspecified' | undefined
  }
}
type PaymentRequestUpdateParams = {
  company_id: bigint
  title: string
  application_date?: string | undefined
  description?: string | undefined
  payment_request_lines: {
    id?: bigint | undefined
    line_type?: 'deal_line' | 'negative_line' | 'withholding_tax' | undefined
    description?: string | undefined
    amount: bigint
    account_item_id?: (bigint | null) | undefined
    tax_code?: bigint | undefined
    item_id?: bigint | undefined
    section_id?: bigint | undefined
    tag_ids?: bigint[] | undefined
    segment_1_tag_id?: bigint | undefined
    segment_2_tag_id?: bigint | undefined
    segment_3_tag_id?: bigint | undefined
  }[]
  approver_id?: bigint | undefined
  approval_flow_route_id: bigint
  applicant_group_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  parent_id?: (bigint | null) | undefined
  parent_type?: 'ApprovalRequest' | 'PurchaseRequest' | undefined
  draft: boolean
  document_code?: string | undefined
  receipt_ids?: bigint[] | undefined
  issue_date: string
  payment_date?: (string | null) | undefined
  payment_method?:
    | 'none'
    | 'domestic_bank_transfer'
    | 'abroad_bank_transfer'
    | 'account_transfer'
    | 'credit_card'
    | undefined
  partner_id?: (bigint | null) | undefined
  partner_code?: (string | null) | undefined
  bank_code?: string | undefined
  bank_name?: string | undefined
  bank_name_kana?: string | undefined
  branch_code?: string | undefined
  branch_name?: string | undefined
  branch_kana?: string | undefined
  account_name?: string | undefined
  account_number?: string | undefined
  account_type?: 'ordinary' | 'checking' | 'earmarked' | 'savings' | 'other' | undefined
  qualified_invoice_status?: 'qualified' | 'not_qualified' | 'unspecified' | undefined
}
type PaymentRequestActionCreateParams = {
  company_id: bigint
  approval_action: 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback' | 'force_feedback'
  target_step_id: bigint
  target_round: bigint
  next_approver_id?: (bigint | null) | undefined
  next_group_id?: (bigint | null) | undefined
}
type ApprovalRequestsIndexResponse = {
  approval_requests: {
    id: bigint
    company_id: bigint
    application_date: string
    title: string
    applicant_id: bigint
    application_number: string
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    request_items: {
      id: bigint
      type:
        | 'title'
        | 'single_line'
        | 'multi_line'
        | 'select'
        | 'checkbox'
        | 'date'
        | 'amount'
        | 'receipt'
        | 'section'
        | 'partner'
        | 'ninja_sign_document'
        | 'freee_sign_document'
      value: string
    }[]
    form_id: bigint
    current_step_id: bigint | null
    current_round: bigint
    deal_id: bigint | null
    manual_journal_id: bigint | null
    deal_status: 'settled' | 'unsettled'
  }[]
}
type ApprovalRequestCreateParams = {
  company_id: bigint
  application_date?: string | undefined
  approval_flow_route_id: bigint
  form_id: bigint
  approver_id?: bigint | undefined
  applicant_group_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  draft: boolean
  parent_id?: bigint | undefined
  request_items: {
    id?: bigint | undefined
    type?:
      | 'title'
      | 'single_line'
      | 'multi_line'
      | 'select'
      | 'checkbox'
      | 'date'
      | 'amount'
      | 'receipt'
      | 'section'
      | 'partner'
      | undefined
    value?: string | undefined
  }[]
}
type ApprovalRequestResponse = {
  approval_request: {
    id: bigint
    company_id: bigint
    application_date: string
    title: string
    applicant_id: bigint
    approvers: {
      step_id: bigint
      user_id: bigint | null
      status: 'initial' | 'approved' | 'rejected' | 'feedback'
      is_force_action: boolean
      resource_type:
        | 'predefined_user'
        | 'selected_user'
        | 'unspecified'
        | 'and_resource'
        | 'or_resource'
        | 'and_position'
        | 'or_position'
    }[]
    application_number: string
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    request_items: {
      id: bigint
      type:
        | 'title'
        | 'single_line'
        | 'multi_line'
        | 'select'
        | 'checkbox'
        | 'date'
        | 'amount'
        | 'receipt'
        | 'section'
        | 'partner'
        | 'ninja_sign_document'
        | 'freee_sign_document'
      value: string
    }[]
    form_id: bigint
    approval_flow_route_id: bigint
    comments: { comment: string; user_id: bigint; posted_at: string }[]
    approval_flow_logs: {
      action: 'apply' | 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback'
      user_id: bigint
      updated_at: string
    }[]
    current_step_id: bigint | null
    current_round: bigint
    approval_request_form: {
      parts: {
        id: bigint
        order?: bigint | undefined
        type?:
          | 'title'
          | 'single_line'
          | 'multi_line'
          | 'select'
          | 'checkbox'
          | 'date'
          | 'amount'
          | 'receipt'
          | 'section'
          | 'partner'
          | 'ninja_sign_document'
          | 'freee_sign_document'
          | undefined
        label?: string | undefined
        annotation?: (string | null) | undefined
        required?: (boolean | null) | undefined
        values?: ({ name: string; order: bigint }[] | null) | undefined
        max_amount?: (bigint | null) | undefined
        min_amount?: (bigint | null) | undefined
      }[]
    }
    deal_id: bigint | null
    manual_journal_id: bigint | null
    deal_status: 'settled' | 'unsettled'
  }
}
type ApprovalRequestUpdateParams = {
  company_id: bigint
  application_date?: string | undefined
  approval_flow_route_id: bigint
  approver_id?: bigint | undefined
  applicant_group_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  draft: boolean
  request_items: {
    id?: bigint | undefined
    type?:
      | 'title'
      | 'single_line'
      | 'multi_line'
      | 'select'
      | 'checkbox'
      | 'date'
      | 'amount'
      | 'receipt'
      | 'section'
      | 'partner'
      | undefined
    value?: string | undefined
  }[]
}
type ApprovalRequestActionCreateParams = {
  company_id: bigint
  approval_action: 'approve' | 'force_approve' | 'cancel' | 'reject' | 'feedback' | 'force_feedback'
  target_step_id: bigint
  target_round: number
  next_approver_id?: (bigint | null) | undefined
  next_group_id?: (bigint | null) | undefined
}
type ApprovalRequestFormIndexResponse = {
  approval_request_forms: {
    id: bigint
    company_id: bigint
    name: string
    description: string
    status: 'draft' | 'active'
    created_date: string
    form_order: bigint | null
    route_setting_count: bigint
  }[]
}
type ApprovalRequestFormResponse = {
  approval_request_form: {
    id: bigint
    company_id: bigint
    name: string
    description: string
    status: 'draft' | 'active'
    created_date: string
    form_order: bigint | null
    parts?:
      | {
          id: bigint
          order?: bigint | undefined
          type?:
            | 'title'
            | 'single_line'
            | 'multi_line'
            | 'select'
            | 'checkbox'
            | 'date'
            | 'amount'
            | 'receipt'
            | 'section'
            | 'partner'
            | 'ninja_sign_document'
            | 'freee_sign_document'
            | undefined
          label?: string | undefined
          annotation?: (string | null) | undefined
          required?: (boolean | null) | undefined
          values?: ({ name: string; order: bigint }[] | null) | undefined
          max_amount?: (bigint | null) | undefined
          min_amount?: (bigint | null) | undefined
        }[]
      | undefined
    route_setting_count: bigint
  }
}
type PurchaseRequestsIndexResponse = {
  purchase_requests: {
    id: bigint
    company_id: bigint
    application_date: string
    title: string
    applicant_id: bigint
    application_number: string
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    form_id: bigint
    amount: bigint
    budget_amount: bigint
    applicant?: ({ id: bigint; user_name?: string | undefined } | null) | undefined
  }[]
  total_count?: bigint | undefined
}
type PurchaseRequestCreateParams = {
  company_id: bigint
  purchase_request_form_id: bigint
  status: 'draft' | 'in_progress'
  applicant_group_id?: (bigint | null) | undefined
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  occurrence_start_date?: (string | null) | undefined
  occurrence_end_date?: (string | null) | undefined
  approval_flow_route_id?: (bigint | null) | undefined
  approval_flow_approver_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  observer_user_ids?: bigint[] | undefined
  parent_id?: (bigint | null) | undefined
  parent_type?: (string | null) | undefined
  resubmission_from_purchase_request_id?: (bigint | null) | undefined
  purchase_request_lines?:
    | {
        line_order?: bigint | undefined
        amount: bigint
        content?: string | undefined
        selected_payment_methods?: string[] | undefined
        receipt_ids?: bigint[] | undefined
        receipt_field_values?:
          | { field_id: bigint; receipt_ids?: bigint[] | undefined }[]
          | undefined
        section_id?: (bigint | null) | undefined
        partner_id?: (bigint | null) | undefined
        item_id?: (bigint | null) | undefined
        tag_ids?: bigint[] | undefined
        segment_1_tag_id?: (bigint | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
        scheduled_purchase_date?: (string | null) | undefined
        scheduled_purchase_end_date?: (string | null) | undefined
      }[]
    | undefined
  purchase_request_custom_values?:
    | {
        id?: bigint | undefined
        custom_form_part_id: bigint
        json_value?:
          | {
              single_line_string?: (string | null) | undefined
              multi_line_string?: (string | null) | undefined
              single_date?: (string | null) | undefined
              date_range?:
                | ({
                    start_date?: (string | null) | undefined
                    end_date?: (string | null) | undefined
                  } | null)
                | undefined
              number?: (number | null) | undefined
              pulldown?: (string | null) | undefined
              checkbox?: string[] | undefined
              radio_button?: (string | null) | undefined
            }
          | undefined
      }[]
    | undefined
}
type PurchaseRequestDetailResponse = {
  purchase_request: {
    id: bigint
    user_id: bigint
    title: string
    application_date: string
    occurrence_start_date?: (string | null) | undefined
    occurrence_end_date?: (string | null) | undefined
    purchase_request_code: string
    description?: (string | null) | undefined
    budget_amount?: (bigint | null) | undefined
    current_step_id?: (bigint | null) | undefined
    status: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback'
    approvable: boolean
    default_route_src_id?: (bigint | null) | undefined
    from_resubmission_purchase_request_id?: (bigint | null) | undefined
    to_resubmission_purchase_request_id?: (bigint | null) | undefined
    purchase_request_lines: {
      id: bigint
      purchase_request_id: bigint
      line_order: bigint
      amount?: (bigint | null) | undefined
      selected_payment_methods?: (string[] | null) | undefined
      content?: (string | null) | undefined
      scheduled_purchase_date?: (string | null) | undefined
      scheduled_purchase_end_date?: (string | null) | undefined
      section?:
        | ({
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          } | null)
        | undefined
      partner?:
        | ({
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          } | null)
        | undefined
      item?:
        | ({
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          } | null)
        | undefined
      segment_1_tag?:
        | ({
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          } | null)
        | undefined
      segment_2_tag?:
        | ({
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          } | null)
        | undefined
      segment_3_tag?:
        | ({
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          } | null)
        | undefined
      tags?:
        | {
            id?: bigint | undefined
            name?: string | undefined
            category_name?: string | undefined
          }[]
        | undefined
    }[]
    purchase_request_custom_values: {
      id: bigint
      purchase_request_id: bigint
      custom_form_id: bigint
      custom_form_part_id: bigint
      json_value?: ({ [x: string]: unknown } | null) | undefined
    }[]
    approval_flow_approvers: {
      step_id?: (bigint | null) | undefined
      user_id?: bigint | undefined
      is_force_action?: boolean | undefined
      status?: string | undefined
    }[]
  }
}
type PurchaseRequestUpdateParams = {
  company_id: bigint
  purchase_request_form_id: bigint
  status: 'draft' | 'in_progress'
  applicant_group_id?: (bigint | null) | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  occurrence_start_date?: (string | null) | undefined
  occurrence_end_date?: (string | null) | undefined
  approval_flow_route_id?: (bigint | null) | undefined
  approval_flow_approver_id?: (bigint | null) | undefined
  approval_flow_group_id?: (bigint | null) | undefined
  purchase_request_lines?:
    | {
        id?: bigint | undefined
        line_order?: bigint | undefined
        amount: bigint
        content?: string | undefined
        selected_payment_methods?: string[] | undefined
        receipt_ids?: bigint[] | undefined
        receipt_field_values?:
          | { field_id: bigint; receipt_ids?: bigint[] | undefined }[]
          | undefined
        section_id?: (bigint | null) | undefined
        partner_id?: (bigint | null) | undefined
        item_id?: (bigint | null) | undefined
        tag_ids?: bigint[] | undefined
        segment_1_tag_id?: (bigint | null) | undefined
        segment_2_tag_id?: (bigint | null) | undefined
        segment_3_tag_id?: (bigint | null) | undefined
        scheduled_purchase_date?: (string | null) | undefined
        scheduled_purchase_end_date?: (string | null) | undefined
      }[]
    | undefined
  purchase_request_custom_values?:
    | {
        id?: bigint | undefined
        custom_form_part_id: bigint
        json_value?:
          | {
              single_line_string?: (string | null) | undefined
              multi_line_string?: (string | null) | undefined
              single_date?: (string | null) | undefined
              date_range?:
                | ({
                    start_date?: (string | null) | undefined
                    end_date?: (string | null) | undefined
                  } | null)
                | undefined
              number?: (number | null) | undefined
              pulldown?: (string | null) | undefined
              checkbox?: string[] | undefined
              radio_button?: (string | null) | undefined
            }
          | undefined
      }[]
    | undefined
}
type PurchaseRequestFormIndexResponse = {
  total_count: bigint
  purchase_request_forms: {
    id: bigint
    name: string
    description: string | null
    status: 'draft' | 'active' | 'deleted'
    form_order: bigint | null
  }[]
}
type PurchaseRequestFormDetailResponse = {
  type: string
  purchase_request_setting: {
    id?: (bigint | null) | undefined
    status?: string | undefined
    form_order?: (bigint | null) | undefined
    default_flow_route_src_id?: (bigint | null) | undefined
    default_title?: (string | null) | undefined
    default_content?: (string | null) | undefined
    name?: string | undefined
    title_annotation?: (string | null) | undefined
    description?: (string | null) | undefined
    description_setting?: string | undefined
    content_setting?: string | undefined
    payment_method_setting?: string | undefined
    receipt_setting?: string | undefined
    section_setting?: string | undefined
    section_annotation?: (string | null) | undefined
    partner_setting?: string | undefined
    partner_annotation?: (string | null) | undefined
    item_setting?: string | undefined
    item_annotation?: (string | null) | undefined
    tag_setting?: string | undefined
    tag_annotation?: (string | null) | undefined
    segment_1_tag_setting?: string | undefined
    segment_1_tag_annotation?: (string | null) | undefined
    segment_2_tag_setting?: string | undefined
    segment_2_tag_annotation?: (string | null) | undefined
    segment_3_tag_setting?: string | undefined
    segment_3_tag_annotation?: (string | null) | undefined
    scheduled_purchase_date_setting?: string | undefined
    observer_addition?: string | undefined
    content_display_name?: string | undefined
    content_annotation?: (string | null) | undefined
    scheduled_purchase_date_display_name?: string | undefined
    scheduled_purchase_date_annotation?: (string | null) | undefined
    enable_scheduled_purchase_date_range?: boolean | undefined
    specified_payment_methods?: (string[] | null) | undefined
    payment_method_display_name?: string | undefined
    payment_method_annotation?: (string | null) | undefined
    receipt_display_name?: string | undefined
    receipt_annotation?: (string | null) | undefined
    description_annotation?: (string | null) | undefined
    amount_display_name?: string | undefined
    amount_annotation?: (string | null) | undefined
    occurrence_date_setting?: string | undefined
    occurrence_date_display_name?: string | undefined
    occurrence_date_annotation?: (string | null) | undefined
    enable_occurrence_date_range?: boolean | undefined
    receipt_fields?:
      | (
          | {
              id?: (bigint | null) | undefined
              display_name?: string | undefined
              annotation?: (string | null) | undefined
              line_order?: number | undefined
              setting?: string | undefined
            }[]
          | null
        )
      | undefined
    tax_exclusive_setting?: string | undefined
    freee_card_issue_setting?: string | undefined
    default_observers?:
      | {
          user_id?: (bigint | null) | undefined
          user_name?: string | undefined
          user_deleted?: boolean | undefined
        }[]
      | undefined
    virtual_card_issuance_setting?:
      | ({
          card_name_annotation?: (string | null) | undefined
          amount_limit_setting?: string | undefined
          amount_limit_type_options?: (string | null) | undefined
          monthly_amount_limit?: (bigint | null) | undefined
          total_amount_limit?: (bigint | null) | undefined
          total_amount_limit_annotation?: (string | null) | undefined
          ends_at_setting?: string | undefined
          ends_at_annotation?: (string | null) | undefined
          memo_setting?: string | undefined
          memo_annotation?: (string | null) | undefined
          notification_setting?: string | undefined
          notification_threshold_amount?: (bigint | null) | undefined
          use_usage_report?: boolean | undefined
        } | null)
      | undefined
  }
  custom_form: {
    id?: (bigint | null) | undefined
    parts?:
      | {
          id?: (bigint | null) | undefined
          display_name?: string | undefined
          setting?: string | undefined
          type_name?: string | undefined
          default_value?: ({ [x: string]: unknown } | null) | undefined
          unit?: (string | null) | undefined
          annotation?: (string | null) | undefined
          line_order?: number | undefined
          selectable_value?: (string[] | null) | undefined
        }[]
      | undefined
  } | null
  flow_routes: { id?: bigint | undefined; src_id?: bigint | undefined; name?: string | undefined }[]
}
type PurchaseRequestActionCreateParams = {
  company_id: bigint
  do_action: 'apply' | 'approve' | 'reject' | 'feedback'
  next_approver_id?: (bigint | null) | undefined
  next_group_id?: (bigint | null) | undefined
}
type PurchaseRequestPurchaseBudgetResponse = {
  tracking_status: 'in_progress' | 'approved' | 'not_tracked'
  purchase_request_id: bigint
  purchase_budget_id: bigint | null
  budget_amount: bigint | null
  consumed_amount: bigint | null
  consumed_tax_excluded_amount: bigint | null
  consumed_tax_amount: bigint | null
  budget_consumptions: {
    amount: bigint
    source: {
      type:
        | 'expense_application'
        | 'payment_request'
        | 'freee_card_statement_line'
        | 'sweeep_document'
        | 'sweeep_invoice'
        | 'deal'
      id: string | null
      display_name: string | null
      workflow_status: 'in_progress' | 'approved' | 'feedback'
    }
  }[]
}
type ApprovalFlowRoutesIndexResponse = {
  approval_flow_routes: {
    id: bigint
    name: string
    description: string
    user_id: bigint | null
    definition_system: boolean
    first_step_id: bigint
    usages: (
      | 'TxnApproval'
      | 'ExpenseApplication'
      | 'PaymentRequest'
      | 'ApprovalRequest'
      | 'DocApproval'
      | 'PurchaseRequest'
    )[]
    request_form_ids: bigint[]
    default_route: boolean
  }[]
}
type ApprovalFlowRouteResponse = {
  approval_flow_route: {
    id: bigint
    name: string
    description: string
    user_id: bigint | null
    definition_system: boolean
    first_step_id: bigint
    usages: (
      | 'TxnApproval'
      | 'ExpenseApplication'
      | 'PaymentRequest'
      | 'ApprovalRequest'
      | 'DocApproval'
      | 'PurchaseRequest'
    )[]
    request_form_ids: bigint[]
    steps: {
      id: bigint
      next_step_id: bigint | null
      resource_type:
        | 'predefined_user'
        | 'selected_user'
        | 'unspecified'
        | 'and_resource'
        | 'or_resource'
        | 'and_position'
        | 'or_position'
        | 'switchable'
      users_ids: bigint[]
      approver_determination_type?: 'applicant_group' | undefined
      group?: ({ id: bigint; name: string } | null) | undefined
      position_types?: { id: bigint; name: string }[] | undefined
      switching_rules?:
        | {
            next_step_id: bigint
            conditions: {
              switch_evaluation_key?:
                | 'total_amount_jpy'
                | 'applicant_position_type'
                | 'no_approver_present'
                | undefined
              operator:
                | 'greater_than_or_equal'
                | 'less_than_or_equal'
                | 'contains'
                | 'not_contains'
                | 'of'
              values: string[]
            }[]
          }[]
        | undefined
    }[]
  }
}
type SegmentTag = {
  id: bigint
  name: string
  description: string | null
  shortcut1: string | null
  shortcut2: string | null
  code?: (string | null) | undefined
  update_date: string
}
type SegmentTagParams = {
  company_id: bigint
  name: string
  description?: (string | null) | undefined
  shortcut1?: (string | null) | undefined
  shortcut2?: (string | null) | undefined
  code?: (string | null) | undefined
}
type SegmentTagResponse = { segment_tag: SegmentTag }
type FixedAssetResponse = {
  fixed_assets: {
    company_id: bigint
    id: bigint
    name: string
    management_number: string | null
    account_item_id: bigint
    section_id: bigint | null
    item_id: bigint | null
    depreciation_method:
      | 'small_sum_method'
      | 'lump_sum_method'
      | 'straight_line_method'
      | 'multiple_method'
      | 'old_multiple_method'
      | 'old_straight_line_method'
      | 'non_depreciate_method'
      | 'voluntary_method'
      | 'immediate_method'
      | 'equal_method'
    depreciation_account_item_id: bigint
    prefecture_code: bigint | null
    city_name: string | null
    depreciation_amount: bigint
    acquisition_cost: bigint
    opening_balance: bigint
    undepreciated_balance: bigint | null
    opening_accumulated_depreciation: bigint
    closing_accumulated_depreciation: bigint
    life_years: bigint | null
    acquisition_date: string
    created_at: string
    depreciation_status: 'sold' | 'retired' | 'depreciated' | 'depreciation' | 'non_depreciation'
    retire_date: string | null
  }[]
  fiscal_year: { start_date: string; end_date: string }
  up_to_date: boolean
  up_to_date_reasons: {
    code: 'depreciation_creating' | 'depreciation_create_error'
    message: string
  }[]
}
type AccountGroupCreateParams = {
  company_id: bigint
  name: string
  account_category_id: bigint
  index?: bigint | undefined
}
type AccountGroupCreateResponse = {
  account_group: {
    company_id: bigint
    id: bigint
    name: string
    account_structure_id: bigint
    account_category_id: bigint
    index: bigint
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/1/partners': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                keyword?: string | undefined
              }
            }
            output: PartnersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                keyword?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                keyword?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                keyword?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                keyword?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PartnerCreateParams } & { form: PartnerCreateParams }
            output: PartnerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PartnerCreateParams } & { form: PartnerCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PartnerCreateParams } & { form: PartnerCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PartnerCreateParams } & { form: PartnerCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PartnerCreateParams } & { form: PartnerCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/partners/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: PartnerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: PartnerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/partners/code/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: PartnerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: PartnerUpdateParams } & {
              form: PartnerUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/partners/upsert_by_code': {
      $put:
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: PartnerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: PartnerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                partner: {
                  name: string
                  available?: boolean | undefined
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                  org_code?: 1n | 2n | undefined
                  country_code?: 'JP' | 'ZZ' | undefined
                  long_name?: string | undefined
                  name_kana?: string | undefined
                  default_title?: string | undefined
                  phone?: string | undefined
                  contact_name?: string | undefined
                  email?: string | undefined
                  payer_walletable_id?: (bigint | null) | undefined
                  transfer_fee_handling_side?: 'payer' | 'payee' | undefined
                  qualified_invoice_issuer?: boolean | undefined
                  invoice_registration_number?: (string | null) | undefined
                  address_attributes?:
                    | {
                        zipcode?: string | undefined
                        prefecture_code?: bigint | undefined
                        street_name1?: string | undefined
                        street_name2?: string | undefined
                      }
                    | undefined
                  partner_doc_setting_attributes?:
                    | {
                        sending_method?:
                          | 'email'
                          | 'posting'
                          | 'email_and_posting'
                          | 'pdf_delivery'
                          | 'pdf_delivery_and_posting'
                          | undefined
                      }
                    | undefined
                  partner_bank_account_attributes?:
                    | {
                        bank_name?: string | undefined
                        bank_name_kana?: string | undefined
                        bank_code?: string | undefined
                        branch_name?: string | undefined
                        branch_kana?: string | undefined
                        branch_code?: string | undefined
                        account_type?:
                          | 'ordinary'
                          | 'checking'
                          | 'earmarked'
                          | 'savings'
                          | 'other'
                          | undefined
                        account_number?: string | undefined
                        long_account_name?: string | undefined
                        account_name?: string | undefined
                      }
                    | undefined
                  payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                  invoice_payment_term_attributes?:
                    | ({
                        cutoff_day?: bigint | undefined
                        additional_months?: bigint | undefined
                        fixed_day?: bigint | undefined
                      } | null)
                    | undefined
                }
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/forms/selectables': {
      $get:
        | {
            input: { query: { company_id: bigint; includes?: 'account_item' | undefined } }
            output: SelectablesIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint; includes?: 'account_item' | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint; includes?: 'account_item' | undefined } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint; includes?: 'account_item' | undefined } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint; includes?: 'account_item' | undefined } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/account_items/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: AccountItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: AccountItemUpdateParams } & {
              form: AccountItemUpdateParams
            }
            output: AccountItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: AccountItemUpdateParams } & {
              form: AccountItemUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: AccountItemUpdateParams } & {
              form: AccountItemUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: AccountItemUpdateParams } & {
              form: AccountItemUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: AccountItemUpdateParams } & {
              form: AccountItemUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: bigint } } & { json: AccountItemUpdateParams } & {
              form: AccountItemUpdateParams
            }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/account_items': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                base_date?: string | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                keyword?: string | undefined
              }
            }
            output: AccountItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                base_date?: string | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                keyword?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                base_date?: string | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                keyword?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                base_date?: string | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                keyword?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                base_date?: string | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                keyword?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AccountItemCreateParams } & { form: AccountItemCreateParams }
            output: AccountItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AccountItemCreateParams } & { form: AccountItemCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountItemCreateParams } & { form: AccountItemCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountItemCreateParams } & { form: AccountItemCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccountItemCreateParams } & { form: AccountItemCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/account_items/code/upsert': {
      $put:
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: AccountItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: AccountItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                account_item: {
                  name?: string | undefined
                  shortcut?: string | undefined
                  shortcut_num?: string | undefined
                  tax_code: bigint
                  group_name: string
                  account_category_id: bigint
                  corresponding_income_id: bigint
                  corresponding_expense_id: bigint
                  accumulated_dep_account_item_id?: bigint | undefined
                  searchable?: bigint | undefined
                  items?: { id?: bigint | undefined }[] | undefined
                  partners?: { id?: bigint | undefined }[] | undefined
                }
              }
            }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/1/tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: { tags: Tag[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: TagParams } & { form: TagParams }
            output: TagResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TagParams } & { form: TagParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagParams } & { form: TagParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagParams } & { form: TagParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TagParams } & { form: TagParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/tags/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: TagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: TagParams } & { form: TagParams }
            output: TagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: TagParams } & { form: TagParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: TagParams } & { form: TagParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: TagParams } & { form: TagParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: TagParams } & { form: TagParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: TagParams } & { form: TagParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/sections': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: { sections: Section[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SectionParams } & { form: SectionParams }
            output: SectionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SectionParams } & { form: SectionParams }
            output: BadRequestError | MessagesError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SectionParams } & { form: SectionParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SectionParams } & { form: SectionParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SectionParams } & { form: SectionParams }
            output: BadRequestNotFoundError | MessagesError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SectionParams } & { form: SectionParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/sections/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: SectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: SectionParams } & { form: SectionParams }
            output: SectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: SectionParams } & { form: SectionParams }
            output: BadRequestError | MessagesError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: SectionParams } & { form: SectionParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: SectionParams } & { form: SectionParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: SectionParams } & { form: SectionParams }
            output: BadRequestNotFoundError | MessagesError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: SectionParams } & { form: SectionParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError | MessagesError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError | MessagesError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/sections/code/upsert': {
      $put:
        | {
            input: {
              json: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            }
            output: SectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            }
            output: SectionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            }
            output: BadRequestError | MessagesError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                section: {
                  name: string
                  long_name?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                  parent_code?: (string | null) | undefined
                }
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/invoices': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                invoice_number?: string | undefined
                description?: string | undefined
                invoice_status?:
                  | 'draft'
                  | 'applying'
                  | 'remanded'
                  | 'rejected'
                  | 'approved'
                  | 'unsubmitted'
                  | 'submitted'
                  | undefined
                payment_status?: 'unsettled' | 'settled' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InvoiceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                invoice_number?: string | undefined
                description?: string | undefined
                invoice_status?:
                  | 'draft'
                  | 'applying'
                  | 'remanded'
                  | 'rejected'
                  | 'approved'
                  | 'unsubmitted'
                  | 'submitted'
                  | undefined
                payment_status?: 'unsettled' | 'settled' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                invoice_number?: string | undefined
                description?: string | undefined
                invoice_status?:
                  | 'draft'
                  | 'applying'
                  | 'remanded'
                  | 'rejected'
                  | 'approved'
                  | 'unsubmitted'
                  | 'submitted'
                  | undefined
                payment_status?: 'unsettled' | 'settled' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                invoice_number?: string | undefined
                description?: string | undefined
                invoice_status?:
                  | 'draft'
                  | 'applying'
                  | 'remanded'
                  | 'rejected'
                  | 'approved'
                  | 'unsubmitted'
                  | 'submitted'
                  | undefined
                payment_status?: 'unsettled' | 'settled' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                invoice_number?: string | undefined
                description?: string | undefined
                invoice_status?:
                  | 'draft'
                  | 'applying'
                  | 'remanded'
                  | 'rejected'
                  | 'approved'
                  | 'unsubmitted'
                  | 'submitted'
                  | undefined
                payment_status?: 'unsettled' | 'settled' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                invoice_number?: string | undefined
                description?: string | undefined
                invoice_status?:
                  | 'draft'
                  | 'applying'
                  | 'remanded'
                  | 'rejected'
                  | 'approved'
                  | 'unsubmitted'
                  | 'submitted'
                  | undefined
                payment_status?: 'unsettled' | 'settled' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/invoices/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/quotations': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                quotation_number?: string | undefined
                description?: string | undefined
                quotation_status?: 'all' | 'unsubmitted' | 'submitted' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: QuotationIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                quotation_number?: string | undefined
                description?: string | undefined
                quotation_status?: 'all' | 'unsubmitted' | 'submitted' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                quotation_number?: string | undefined
                description?: string | undefined
                quotation_status?: 'all' | 'unsubmitted' | 'submitted' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                quotation_number?: string | undefined
                description?: string | undefined
                quotation_status?: 'all' | 'unsubmitted' | 'submitted' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                quotation_number?: string | undefined
                description?: string | undefined
                quotation_status?: 'all' | 'unsubmitted' | 'submitted' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                quotation_number?: string | undefined
                description?: string | undefined
                quotation_status?: 'all' | 'unsubmitted' | 'submitted' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/quotations/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: QuotationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/deals': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                account_item_id?: bigint | undefined
                partner_code?: string | undefined
                status?: 'unsettled' | 'settled' | undefined
                type?: 'income' | 'expense' | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                start_renew_date?: string | undefined
                end_renew_date?: string | undefined
                min_due_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                accruals?: 'without' | 'with' | undefined
              }
            }
            output: { deals: Deal[]; meta: { total_count: bigint } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                account_item_id?: bigint | undefined
                partner_code?: string | undefined
                status?: 'unsettled' | 'settled' | undefined
                type?: 'income' | 'expense' | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                start_renew_date?: string | undefined
                end_renew_date?: string | undefined
                min_due_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                accruals?: 'without' | 'with' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                account_item_id?: bigint | undefined
                partner_code?: string | undefined
                status?: 'unsettled' | 'settled' | undefined
                type?: 'income' | 'expense' | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                start_renew_date?: string | undefined
                end_renew_date?: string | undefined
                min_due_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                accruals?: 'without' | 'with' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                account_item_id?: bigint | undefined
                partner_code?: string | undefined
                status?: 'unsettled' | 'settled' | undefined
                type?: 'income' | 'expense' | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                start_renew_date?: string | undefined
                end_renew_date?: string | undefined
                min_due_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                accruals?: 'without' | 'with' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                account_item_id?: bigint | undefined
                partner_code?: string | undefined
                status?: 'unsettled' | 'settled' | undefined
                type?: 'income' | 'expense' | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                start_renew_date?: string | undefined
                end_renew_date?: string | undefined
                min_due_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                accruals?: 'without' | 'with' | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                partner_id?: bigint | undefined
                account_item_id?: bigint | undefined
                partner_code?: string | undefined
                status?: 'unsettled' | 'settled' | undefined
                type?: 'income' | 'expense' | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                start_due_date?: string | undefined
                end_due_date?: string | undefined
                start_renew_date?: string | undefined
                end_renew_date?: string | undefined
                min_due_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                accruals?: 'without' | 'with' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: DealCreateParams } & { form: DealCreateParams }
            output: DealCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DealCreateParams } & { form: DealCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DealCreateParams } & { form: DealCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DealCreateParams } & { form: DealCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DealCreateParams } & { form: DealCreateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DealCreateParams } & { form: DealCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/deals/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { company_id: bigint; accruals?: 'without' | 'with' | undefined }
            }
            output: DealResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { company_id: bigint; accruals?: 'without' | 'with' | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: { company_id: bigint; accruals?: 'without' | 'with' | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: { company_id: bigint; accruals?: 'without' | 'with' | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: { company_id: bigint; accruals?: 'without' | 'with' | undefined }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              query: { company_id: bigint; accruals?: 'without' | 'with' | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: DealUpdateParams } & {
              form: DealUpdateParams
            }
            output: DealResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: DealUpdateParams } & {
              form: DealUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: DealUpdateParams } & {
              form: DealUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: DealUpdateParams } & {
              form: DealUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: DealUpdateParams } & {
              form: DealUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: DealUpdateParams } & {
              form: DealUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/deals/:id/renews': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: RenewCreateParams } & {
              form: RenewCreateParams
            }
            output: DealResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: RenewCreateParams } & {
              form: RenewCreateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: RenewCreateParams } & {
              form: RenewCreateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: RenewCreateParams } & {
              form: RenewCreateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: RenewCreateParams } & {
              form: RenewCreateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: RenewCreateParams } & {
              form: RenewCreateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/deals/:id/renews/:renew_id': {
      $put:
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { json: RenewUpdateParams } & {
              form: RenewUpdateParams
            }
            output: DealResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { json: RenewUpdateParams } & {
              form: RenewUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { json: RenewUpdateParams } & {
              form: RenewUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { json: RenewUpdateParams } & {
              form: RenewUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { json: RenewUpdateParams } & {
              form: RenewUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { json: RenewUpdateParams } & {
              form: RenewUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { query: { company_id: bigint } }
            output: DealResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; renew_id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/deals/:id/payments': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: PaymentParams } & { form: PaymentParams }
            output: DealResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentParams } & { form: PaymentParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentParams } & { form: PaymentParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentParams } & { form: PaymentParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentParams } & { form: PaymentParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentParams } & { form: PaymentParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/deals/:id/payments/:payment_id': {
      $put:
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { json: PaymentParams } & {
              form: PaymentParams
            }
            output: DealResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { json: PaymentParams } & {
              form: PaymentParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { json: PaymentParams } & {
              form: PaymentParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { json: PaymentParams } & {
              form: PaymentParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { json: PaymentParams } & {
              form: PaymentParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { json: PaymentParams } & {
              form: PaymentParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; payment_id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/manual_journals': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                entry_side?: 'credit' | 'debit' | undefined
                account_item_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                segment_1_tag_id?: bigint | undefined
                segment_2_tag_id?: bigint | undefined
                segment_3_tag_id?: bigint | undefined
                comment_status?:
                  | 'posted_with_mention'
                  | 'raised_with_mention'
                  | 'resolved_with_mention'
                  | 'posted'
                  | 'raised'
                  | 'resolved'
                  | 'none'
                  | undefined
                comment_important?: boolean | undefined
                adjustment?: 'only' | 'without' | undefined
                txn_number?: string | undefined
                ref_number?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: { manual_journals: ManualJournal[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                entry_side?: 'credit' | 'debit' | undefined
                account_item_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                segment_1_tag_id?: bigint | undefined
                segment_2_tag_id?: bigint | undefined
                segment_3_tag_id?: bigint | undefined
                comment_status?:
                  | 'posted_with_mention'
                  | 'raised_with_mention'
                  | 'resolved_with_mention'
                  | 'posted'
                  | 'raised'
                  | 'resolved'
                  | 'none'
                  | undefined
                comment_important?: boolean | undefined
                adjustment?: 'only' | 'without' | undefined
                txn_number?: string | undefined
                ref_number?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                entry_side?: 'credit' | 'debit' | undefined
                account_item_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                segment_1_tag_id?: bigint | undefined
                segment_2_tag_id?: bigint | undefined
                segment_3_tag_id?: bigint | undefined
                comment_status?:
                  | 'posted_with_mention'
                  | 'raised_with_mention'
                  | 'resolved_with_mention'
                  | 'posted'
                  | 'raised'
                  | 'resolved'
                  | 'none'
                  | undefined
                comment_important?: boolean | undefined
                adjustment?: 'only' | 'without' | undefined
                txn_number?: string | undefined
                ref_number?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                entry_side?: 'credit' | 'debit' | undefined
                account_item_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                segment_1_tag_id?: bigint | undefined
                segment_2_tag_id?: bigint | undefined
                segment_3_tag_id?: bigint | undefined
                comment_status?:
                  | 'posted_with_mention'
                  | 'raised_with_mention'
                  | 'resolved_with_mention'
                  | 'posted'
                  | 'raised'
                  | 'resolved'
                  | 'none'
                  | undefined
                comment_important?: boolean | undefined
                adjustment?: 'only' | 'without' | undefined
                txn_number?: string | undefined
                ref_number?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                entry_side?: 'credit' | 'debit' | undefined
                account_item_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                segment_1_tag_id?: bigint | undefined
                segment_2_tag_id?: bigint | undefined
                segment_3_tag_id?: bigint | undefined
                comment_status?:
                  | 'posted_with_mention'
                  | 'raised_with_mention'
                  | 'resolved_with_mention'
                  | 'posted'
                  | 'raised'
                  | 'resolved'
                  | 'none'
                  | undefined
                comment_important?: boolean | undefined
                adjustment?: 'only' | 'without' | undefined
                txn_number?: string | undefined
                ref_number?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ManualJournalCreateParams } & { form: ManualJournalCreateParams }
            output: ManualJournalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ManualJournalCreateParams } & { form: ManualJournalCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ManualJournalCreateParams } & { form: ManualJournalCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ManualJournalCreateParams } & { form: ManualJournalCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ManualJournalCreateParams } & { form: ManualJournalCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ManualJournalCreateParams } & { form: ManualJournalCreateParams }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/1/manual_journals/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ManualJournalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ManualJournalUpdateParams } & {
              form: ManualJournalUpdateParams
            }
            output: ManualJournalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ManualJournalUpdateParams } & {
              form: ManualJournalUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ManualJournalUpdateParams } & {
              form: ManualJournalUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ManualJournalUpdateParams } & {
              form: ManualJournalUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ManualJournalUpdateParams } & {
              form: ManualJournalUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ManualJournalUpdateParams } & {
              form: ManualJournalUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/users': {
      $get:
        | {
            input: { query: { company_id: bigint; limit?: bigint | undefined } }
            output: { users: User[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint; limit?: bigint | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint; limit?: bigint | undefined } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint; limit?: bigint | undefined } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint; limit?: bigint | undefined } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint; limit?: bigint | undefined } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/users/me': {
      $get:
        | {
            input: {
              query: { companies?: true | false | undefined; advisor?: true | false | undefined }
            }
            output: MeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { companies?: true | false | undefined; advisor?: true | false | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { companies?: true | false | undefined; advisor?: true | false | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { companies?: true | false | undefined; advisor?: true | false | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { companies?: true | false | undefined; advisor?: true | false | undefined }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { companies?: true | false | undefined; advisor?: true | false | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: UserParams } & { form: UserParams }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserParams } & { form: UserParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UserParams } & { form: UserParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UserParams } & { form: UserParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UserParams } & { form: UserParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserParams } & { form: UserParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/users/capabilities': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: {
              wallet_txns: UserCapabilityWithConfirm
              deals: UserCapabilityWithSelfOnly
              deal_linkage: UserCapability
              transfers: UserCapabilityWithSelfOnly
              docs: UserCapabilityWithSelfOnly
              receipts: UserCapabilityWithSelfOnly
              receipt_folders: UserCapabilityJustReadWrite
              receipt_stream_editor: UserCapabilityJustRead
              spreadsheets: UserCapabilityJustCreateRead
              expense_applications: UserCapabilityWithSelfOnly
              expense_application_sync_payroll: UserCapabilityJustCreate
              manage_bulk_expense_application_approvals: UserCapabilityJustWrite
              payment_requests: UserCapabilityWithSelfOnly
              payment_request_templates: UserCapabilityWithSelfOnly
              approval_requests: UserCapabilityWithSelfOnly
              purchase_requests: UserCapabilityWithSelfOnly
              suspense_payments: UserCapabilityWithSelfOnly
              reports: UserCapabilityJustRead
              reports_income_expense: UserCapabilityJustRead
              reports_receivables: UserCapabilityJustRead
              reports_payables: UserCapabilityJustReadWrite
              reports_purchase_budgets: UserCapabilityJustReadWrite
              reports_cash_balance: UserCapabilityJustRead
              reports_managements_planning: UserCapabilityJustReadWrite
              reports_managements_navigation: UserCapabilityJustReadWrite
              reports_managements_introduction: UserCapabilityJustRead
              reports_custom_reports_aggregate: UserCapabilityJustRead
              reports_pl: UserCapabilityJustRead
              reports_bs: UserCapabilityJustRead
              reports_general_ledgers: UserCapabilityJustRead
              reports_journals: UserCapabilityJustRead
              manual_journals: UserCapabilityWithSelfOnly
              fixed_assets: UserCapability
              inventory_refreshes: UserCapability
              biz_allocations: UserCapability
              payment_records: UserCapability
              annual_reports: UserCapabilityJustRead
              consolidation: UserCapabilityJustRead
              tax_reports: UserCapabilityJustRead
              consumption_entries: UserCapabilityJustRead
              tax_return: UserCapabilityJustRead
              account_item_statements: UserCapabilityJustRead
              month_end: UserCapabilityJustRead
              year_end: UserCapabilityJustReadUpdate
              walletables: UserCapabilityWithSync
              companies: UserCapabilityJustReadUpdate
              invitations: UserCapability
              access_controls: UserCapabilityWithWrite
              sign_in_logs: UserCapabilityJustRead
              user_attribute_logs: UserCapabilityJustRead
              app_role_logs: UserCapabilityJustRead
              txn_relationship_logs: UserCapabilityJustRead
              backups: UserCapabilityJustRead
              opening_balances: UserCapabilityJustReadUpdate
              system_conversion: UserCapabilityJustRead
              resets: UserCapabilityJustRead
              partners: UserCapability
              items: UserCapability
              sections: UserCapability
              tags: UserCapability
              account_items: UserCapability
              taxes: UserCapabilityJustReadUpdate
              payroll_item_sets: UserCapability
              user_matchers: UserCapability
              deal_templates: UserCapability
              manual_journal_templates: UserCapability
              cost_allocations: UserCapabilityJustReadUpdate
              approval_flow_routes: UserCapability
              expense_application_templates: UserCapability
              request_forms: UserCapability
              system_messages_for_admin: UserCapabilityJustRead
              company_internal_announcements: UserCapabilityJustUpdate
              doc_change_logs: UserCapabilityJustRead
              workflows: UserCapabilityJustReadUpdateDestroy
              oauth_applications: UserCapability
              oauth_authorizations: UserCapability
              division_tag_1: UserCapability
              division_tag_2: UserCapability
              division_tag_3: UserCapability
              currencies: UserCapability
              entries_reviews: UserCapabilityJustRead
              freee_cards_stream: UserCapabilityJustConfirm
              proxy_application_settings: UserCapability
              bank_accountant_staff_users: UserCapability
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/companies': {
      $get:
        | { input: {}; output: CompanyIndexResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BadRequestError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: InternalServerError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/1/companies/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                details?: true | undefined
                account_items?: true | undefined
                taxes?: true | undefined
                items?: true | undefined
                partners?: true | undefined
                sections?: true | undefined
                tags?: true | undefined
                walletables?: true | undefined
              }
            }
            output: CompanyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                details?: true | undefined
                account_items?: true | undefined
                taxes?: true | undefined
                items?: true | undefined
                partners?: true | undefined
                sections?: true | undefined
                tags?: true | undefined
                walletables?: true | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                details?: true | undefined
                account_items?: true | undefined
                taxes?: true | undefined
                items?: true | undefined
                partners?: true | undefined
                sections?: true | undefined
                tags?: true | undefined
                walletables?: true | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                details?: true | undefined
                account_items?: true | undefined
                taxes?: true | undefined
                items?: true | undefined
                partners?: true | undefined
                sections?: true | undefined
                tags?: true | undefined
                walletables?: true | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                details?: true | undefined
                account_items?: true | undefined
                taxes?: true | undefined
                items?: true | undefined
                partners?: true | undefined
                sections?: true | undefined
                tags?: true | undefined
                walletables?: true | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/items': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: { items: Item[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_update_date?: string | undefined
                end_update_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ItemParams } & { form: ItemParams }
            output: ItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ItemParams } & { form: ItemParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ItemParams } & { form: ItemParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ItemParams } & { form: ItemParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ItemParams } & { form: ItemParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/items/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ItemParams } & { form: ItemParams }
            output: ItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ItemParams } & { form: ItemParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ItemParams } & { form: ItemParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ItemParams } & { form: ItemParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ItemParams } & { form: ItemParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/items/code/upsert': {
      $put:
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            }
            output: ItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            }
            output: ItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            } & {
              form: {
                code: string
                company_id: bigint
                item: {
                  name: string
                  shortcut1?: string | undefined
                  shortcut2?: string | undefined
                }
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/taxes/codes': {
      $get:
        | { input: {}; output: { taxes: Tax[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BadRequestError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: InternalServerError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/1/taxes/codes/:code': {
      $get:
        | {
            input: { param: { code: bigint } }
            output: TaxResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/taxes/companies/:company_id': {
      $get:
        | {
            input: { param: { company_id: bigint } } & {
              query: {
                display_category?:
                  | 'tax_5'
                  | 'tax_8'
                  | 'tax_r8'
                  | 'tax_10'
                  | 'tax_5_e80'
                  | 'tax_5_e70'
                  | 'tax_5_e50'
                  | 'tax_5_e30'
                  | 'tax_8_e80'
                  | 'tax_8_e70'
                  | 'tax_8_e50'
                  | 'tax_8_e30'
                  | 'tax_r8_e80'
                  | 'tax_r8_e70'
                  | 'tax_r8_e50'
                  | 'tax_r8_e30'
                  | 'tax_10_e80'
                  | 'tax_10_e70'
                  | 'tax_10_e50'
                  | 'tax_10_e30'
                  | undefined
                available?: boolean | undefined
              }
            }
            output: {
              taxes: {
                code: bigint
                name: string
                name_ja: string
                display_category:
                  | 'tax_5'
                  | 'tax_8'
                  | 'tax_r8'
                  | 'tax_10'
                  | 'tax_5_e80'
                  | 'tax_5_e70'
                  | 'tax_5_e50'
                  | 'tax_5_e30'
                  | 'tax_8_e80'
                  | 'tax_8_e70'
                  | 'tax_8_e50'
                  | 'tax_8_e30'
                  | 'tax_r8_e80'
                  | 'tax_r8_e70'
                  | 'tax_r8_e50'
                  | 'tax_r8_e30'
                  | 'tax_10_e80'
                  | 'tax_10_e70'
                  | 'tax_10_e50'
                  | 'tax_10_e30'
                available: boolean
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: bigint } } & {
              query: {
                display_category?:
                  | 'tax_5'
                  | 'tax_8'
                  | 'tax_r8'
                  | 'tax_10'
                  | 'tax_5_e80'
                  | 'tax_5_e70'
                  | 'tax_5_e50'
                  | 'tax_5_e30'
                  | 'tax_8_e80'
                  | 'tax_8_e70'
                  | 'tax_8_e50'
                  | 'tax_8_e30'
                  | 'tax_r8_e80'
                  | 'tax_r8_e70'
                  | 'tax_r8_e50'
                  | 'tax_r8_e30'
                  | 'tax_10_e80'
                  | 'tax_10_e70'
                  | 'tax_10_e50'
                  | 'tax_10_e30'
                  | undefined
                available?: boolean | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: bigint } } & {
              query: {
                display_category?:
                  | 'tax_5'
                  | 'tax_8'
                  | 'tax_r8'
                  | 'tax_10'
                  | 'tax_5_e80'
                  | 'tax_5_e70'
                  | 'tax_5_e50'
                  | 'tax_5_e30'
                  | 'tax_8_e80'
                  | 'tax_8_e70'
                  | 'tax_8_e50'
                  | 'tax_8_e30'
                  | 'tax_r8_e80'
                  | 'tax_r8_e70'
                  | 'tax_r8_e50'
                  | 'tax_r8_e30'
                  | 'tax_10_e80'
                  | 'tax_10_e70'
                  | 'tax_10_e50'
                  | 'tax_10_e30'
                  | undefined
                available?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: bigint } } & {
              query: {
                display_category?:
                  | 'tax_5'
                  | 'tax_8'
                  | 'tax_r8'
                  | 'tax_10'
                  | 'tax_5_e80'
                  | 'tax_5_e70'
                  | 'tax_5_e50'
                  | 'tax_5_e30'
                  | 'tax_8_e80'
                  | 'tax_8_e70'
                  | 'tax_8_e50'
                  | 'tax_8_e30'
                  | 'tax_r8_e80'
                  | 'tax_r8_e70'
                  | 'tax_r8_e50'
                  | 'tax_r8_e30'
                  | 'tax_10_e80'
                  | 'tax_10_e70'
                  | 'tax_10_e50'
                  | 'tax_10_e30'
                  | undefined
                available?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { company_id: bigint } } & {
              query: {
                display_category?:
                  | 'tax_5'
                  | 'tax_8'
                  | 'tax_r8'
                  | 'tax_10'
                  | 'tax_5_e80'
                  | 'tax_5_e70'
                  | 'tax_5_e50'
                  | 'tax_5_e30'
                  | 'tax_8_e80'
                  | 'tax_8_e70'
                  | 'tax_8_e50'
                  | 'tax_8_e30'
                  | 'tax_r8_e80'
                  | 'tax_r8_e70'
                  | 'tax_r8_e50'
                  | 'tax_r8_e30'
                  | 'tax_10_e80'
                  | 'tax_10_e70'
                  | 'tax_10_e50'
                  | 'tax_10_e30'
                  | undefined
                available?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/walletables': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                with_balance?: boolean | undefined
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: {
              walletables: Walletable[]
              meta?: { up_to_date?: boolean | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                with_balance?: boolean | undefined
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                with_balance?: boolean | undefined
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                with_balance?: boolean | undefined
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                with_balance?: boolean | undefined
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: WalletableCreateParams } & { form: WalletableCreateParams }
            output: WalletableCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WalletableCreateParams } & { form: WalletableCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WalletableCreateParams } & { form: WalletableCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WalletableCreateParams } & { form: WalletableCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WalletableCreateParams } & { form: WalletableCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/walletables/:type/:id': {
      $get:
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: {
                company_id: bigint
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
              }
            }
            output: {
              walletable: Walletable
              meta?: { up_to_date?: boolean | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: {
                company_id: bigint
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: {
                company_id: bigint
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: {
                company_id: bigint
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: {
                company_id: bigint
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: {
                company_id: bigint
                with_last_synced_at?: boolean | undefined
                with_sync_status?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              json: WalletableUpdateParams
            } & { form: WalletableUpdateParams }
            output: {
              walletable: WalletableUpdateResponse
              meta?: { up_to_date?: boolean | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              json: WalletableUpdateParams
            } & { form: WalletableUpdateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              json: WalletableUpdateParams
            } & { form: WalletableUpdateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              json: WalletableUpdateParams
            } & { form: WalletableUpdateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              json: WalletableUpdateParams
            } & { form: WalletableUpdateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              json: WalletableUpdateParams
            } & { form: WalletableUpdateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: { company_id: bigint }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: { company_id: bigint }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: { company_id: bigint }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: { company_id: bigint }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: { company_id: bigint }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; type: 'bank_account' | 'credit_card' | 'wallet' } } & {
              query: { company_id: bigint }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/banks': {
      $get:
        | {
            input: {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
              }
            }
            output: { banks: Bank[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/banks/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: BankResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/transfers': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_date?: string | undefined
                end_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: { transfers: Transfer[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date?: string | undefined
                end_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date?: string | undefined
                end_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date?: string | undefined
                end_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date?: string | undefined
                end_date?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: TransferParams } & { form: TransferParams }
            output: TransferResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransferParams } & { form: TransferParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TransferParams } & { form: TransferParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransferParams } & { form: TransferParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TransferParams } & { form: TransferParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/transfers/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: TransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: TransferParams } & { form: TransferParams }
            output: TransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: TransferParams } & { form: TransferParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: TransferParams } & { form: TransferParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: TransferParams } & { form: TransferParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: TransferParams } & { form: TransferParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: TransferParams } & { form: TransferParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                walletable_id?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                entry_side?: 'income' | 'expense' | undefined
                sort_type?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: { wallet_txns: WalletTxn[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                walletable_id?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                entry_side?: 'income' | 'expense' | undefined
                sort_type?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                walletable_id?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                entry_side?: 'income' | 'expense' | undefined
                sort_type?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                walletable_id?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                entry_side?: 'income' | 'expense' | undefined
                sort_type?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                walletable_type?: 'bank_account' | 'credit_card' | 'wallet' | undefined
                walletable_id?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                entry_side?: 'income' | 'expense' | undefined
                sort_type?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: WalletTxnParams } & { form: WalletTxnParams }
            output: WalletTxnResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WalletTxnParams } & { form: WalletTxnParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WalletTxnParams } & { form: WalletTxnParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WalletTxnParams } & { form: WalletTxnParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WalletTxnParams } & { form: WalletTxnParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: WalletTxnResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id/reconcile': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: { wallet_txn_id: bigint; deal_ids: bigint[]; new_deal_id: bigint | null }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: ConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                deals: WalletTxnReconcileDeal[]
                adjustment_deal?: WalletTxnReconcileAdjustmentDeal | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id/create_deal': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                issue_date?: string | undefined
                ref?: string | undefined
                partner_id?: bigint | undefined
                deal_lines: WalletTxnDealLine[]
              }
            }
            output: { deal_ids: bigint[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                issue_date?: string | undefined
                ref?: string | undefined
                partner_id?: bigint | undefined
                deal_lines: WalletTxnDealLine[]
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                issue_date?: string | undefined
                ref?: string | undefined
                partner_id?: bigint | undefined
                deal_lines: WalletTxnDealLine[]
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                issue_date?: string | undefined
                ref?: string | undefined
                partner_id?: bigint | undefined
                deal_lines: WalletTxnDealLine[]
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                issue_date?: string | undefined
                ref?: string | undefined
                partner_id?: bigint | undefined
                deal_lines: WalletTxnDealLine[]
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                issue_date?: string | undefined
                ref?: string | undefined
                partner_id?: bigint | undefined
                deal_lines: WalletTxnDealLine[]
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id/create_transfer': {
      $post:
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: { wallet_txn_id: bigint; transfer_ids: bigint[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: ConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: bigint } } & {
              json: {
                company_id: bigint
                transfer_from_line: WalletTxnTransferFromLine
                transfer_to_lines: WalletTxnTransferToLine[]
                charge_lines?: WalletTxnTransferChargeLine[] | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id/create_private_deal': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: { deal_id: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id/ignore': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/wallet_txns/:id/reset': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/journals': {
      $get:
        | {
            input: {
              query: {
                download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
                encoding?: 'sjis' | 'utf-8' | undefined
                company_id: bigint
                'visible_tags[]'?:
                  | (
                      | 'partner'
                      | 'item'
                      | 'tag'
                      | 'section'
                      | 'description'
                      | 'wallet_txn_description'
                      | 'segment_1_tag'
                      | 'segment_2_tag'
                      | 'segment_3_tag'
                      | 'all'
                    )[]
                  | undefined
                'visible_ids[]'?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: JournalsResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
                encoding?: 'sjis' | 'utf-8' | undefined
                company_id: bigint
                'visible_tags[]'?:
                  | (
                      | 'partner'
                      | 'item'
                      | 'tag'
                      | 'section'
                      | 'description'
                      | 'wallet_txn_description'
                      | 'segment_1_tag'
                      | 'segment_2_tag'
                      | 'segment_3_tag'
                      | 'all'
                    )[]
                  | undefined
                'visible_ids[]'?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
                encoding?: 'sjis' | 'utf-8' | undefined
                company_id: bigint
                'visible_tags[]'?:
                  | (
                      | 'partner'
                      | 'item'
                      | 'tag'
                      | 'section'
                      | 'description'
                      | 'wallet_txn_description'
                      | 'segment_1_tag'
                      | 'segment_2_tag'
                      | 'segment_3_tag'
                      | 'all'
                    )[]
                  | undefined
                'visible_ids[]'?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
                encoding?: 'sjis' | 'utf-8' | undefined
                company_id: bigint
                'visible_tags[]'?:
                  | (
                      | 'partner'
                      | 'item'
                      | 'tag'
                      | 'section'
                      | 'description'
                      | 'wallet_txn_description'
                      | 'segment_1_tag'
                      | 'segment_2_tag'
                      | 'segment_3_tag'
                      | 'all'
                    )[]
                  | undefined
                'visible_ids[]'?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                download_type: 'generic' | 'generic_v2' | 'csv' | 'pdf'
                encoding?: 'sjis' | 'utf-8' | undefined
                company_id: bigint
                'visible_tags[]'?:
                  | (
                      | 'partner'
                      | 'item'
                      | 'tag'
                      | 'section'
                      | 'description'
                      | 'wallet_txn_description'
                      | 'segment_1_tag'
                      | 'segment_2_tag'
                      | 'segment_3_tag'
                      | 'all'
                    )[]
                  | undefined
                'visible_ids[]'?: ('deal_id' | 'transfer_id' | 'manual_journal_id')[] | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/journals/reports/:id/status': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: JournalStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/journals/reports/:id/download': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/journals/search': {
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                deal_ids?: bigint[] | undefined
                start_created_date?: string | undefined
                end_created_date?: string | undefined
                account_item_id?: bigint | undefined
                partner_id?: bigint | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                memo_tag_id?: bigint | undefined
                segment_tag_1_id?: bigint | undefined
                segment_tag_2_id?: bigint | undefined
                segment_tag_3_id?: bigint | undefined
                tax_code?: number | undefined
                detail_amount_min?: bigint | undefined
                detail_amount_max?: bigint | undefined
                detail_amount_basis?: {} | undefined
                adjustment?: {} | undefined
                approval_status?: {} | undefined
                receipts?: {} | undefined
                cost_allocation?: {} | undefined
                reverse_journal?: {} | undefined
                create_user_id?: bigint | undefined
                current_approver_user_id?: bigint | undefined
                last_approver_user_id?: bigint | undefined
                comment_status?: {} | undefined
                comment_important?: boolean | undefined
                comment_details?: string | undefined
                comment_poster_user_id?: bigint | undefined
                comment_recipient_user_id?: bigint | undefined
                receipt_partner_name?: string | undefined
                ref_number?: string | undefined
                txn_number?: string | undefined
                description?: string | undefined
                wallet_txn_description?: string | undefined
                order_by?: {} | undefined
                direction?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: { data: ReportJournalsJournal[]; next_page_token: string | null }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                deal_ids?: bigint[] | undefined
                start_created_date?: string | undefined
                end_created_date?: string | undefined
                account_item_id?: bigint | undefined
                partner_id?: bigint | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                memo_tag_id?: bigint | undefined
                segment_tag_1_id?: bigint | undefined
                segment_tag_2_id?: bigint | undefined
                segment_tag_3_id?: bigint | undefined
                tax_code?: number | undefined
                detail_amount_min?: bigint | undefined
                detail_amount_max?: bigint | undefined
                detail_amount_basis?: {} | undefined
                adjustment?: {} | undefined
                approval_status?: {} | undefined
                receipts?: {} | undefined
                cost_allocation?: {} | undefined
                reverse_journal?: {} | undefined
                create_user_id?: bigint | undefined
                current_approver_user_id?: bigint | undefined
                last_approver_user_id?: bigint | undefined
                comment_status?: {} | undefined
                comment_important?: boolean | undefined
                comment_details?: string | undefined
                comment_poster_user_id?: bigint | undefined
                comment_recipient_user_id?: bigint | undefined
                receipt_partner_name?: string | undefined
                ref_number?: string | undefined
                txn_number?: string | undefined
                description?: string | undefined
                wallet_txn_description?: string | undefined
                order_by?: {} | undefined
                direction?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                deal_ids?: bigint[] | undefined
                start_created_date?: string | undefined
                end_created_date?: string | undefined
                account_item_id?: bigint | undefined
                partner_id?: bigint | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                memo_tag_id?: bigint | undefined
                segment_tag_1_id?: bigint | undefined
                segment_tag_2_id?: bigint | undefined
                segment_tag_3_id?: bigint | undefined
                tax_code?: number | undefined
                detail_amount_min?: bigint | undefined
                detail_amount_max?: bigint | undefined
                detail_amount_basis?: {} | undefined
                adjustment?: {} | undefined
                approval_status?: {} | undefined
                receipts?: {} | undefined
                cost_allocation?: {} | undefined
                reverse_journal?: {} | undefined
                create_user_id?: bigint | undefined
                current_approver_user_id?: bigint | undefined
                last_approver_user_id?: bigint | undefined
                comment_status?: {} | undefined
                comment_important?: boolean | undefined
                comment_details?: string | undefined
                comment_poster_user_id?: bigint | undefined
                comment_recipient_user_id?: bigint | undefined
                receipt_partner_name?: string | undefined
                ref_number?: string | undefined
                txn_number?: string | undefined
                description?: string | undefined
                wallet_txn_description?: string | undefined
                order_by?: {} | undefined
                direction?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                deal_ids?: bigint[] | undefined
                start_created_date?: string | undefined
                end_created_date?: string | undefined
                account_item_id?: bigint | undefined
                partner_id?: bigint | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                memo_tag_id?: bigint | undefined
                segment_tag_1_id?: bigint | undefined
                segment_tag_2_id?: bigint | undefined
                segment_tag_3_id?: bigint | undefined
                tax_code?: number | undefined
                detail_amount_min?: bigint | undefined
                detail_amount_max?: bigint | undefined
                detail_amount_basis?: {} | undefined
                adjustment?: {} | undefined
                approval_status?: {} | undefined
                receipts?: {} | undefined
                cost_allocation?: {} | undefined
                reverse_journal?: {} | undefined
                create_user_id?: bigint | undefined
                current_approver_user_id?: bigint | undefined
                last_approver_user_id?: bigint | undefined
                comment_status?: {} | undefined
                comment_important?: boolean | undefined
                comment_details?: string | undefined
                comment_poster_user_id?: bigint | undefined
                comment_recipient_user_id?: bigint | undefined
                receipt_partner_name?: string | undefined
                ref_number?: string | undefined
                txn_number?: string | undefined
                description?: string | undefined
                wallet_txn_description?: string | undefined
                order_by?: {} | undefined
                direction?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                deal_ids?: bigint[] | undefined
                start_created_date?: string | undefined
                end_created_date?: string | undefined
                account_item_id?: bigint | undefined
                partner_id?: bigint | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                memo_tag_id?: bigint | undefined
                segment_tag_1_id?: bigint | undefined
                segment_tag_2_id?: bigint | undefined
                segment_tag_3_id?: bigint | undefined
                tax_code?: number | undefined
                detail_amount_min?: bigint | undefined
                detail_amount_max?: bigint | undefined
                detail_amount_basis?: {} | undefined
                adjustment?: {} | undefined
                approval_status?: {} | undefined
                receipts?: {} | undefined
                cost_allocation?: {} | undefined
                reverse_journal?: {} | undefined
                create_user_id?: bigint | undefined
                current_approver_user_id?: bigint | undefined
                last_approver_user_id?: bigint | undefined
                comment_status?: {} | undefined
                comment_important?: boolean | undefined
                comment_details?: string | undefined
                comment_poster_user_id?: bigint | undefined
                comment_recipient_user_id?: bigint | undefined
                receipt_partner_name?: string | undefined
                ref_number?: string | undefined
                txn_number?: string | undefined
                description?: string | undefined
                wallet_txn_description?: string | undefined
                order_by?: {} | undefined
                direction?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                deal_ids?: bigint[] | undefined
                start_created_date?: string | undefined
                end_created_date?: string | undefined
                account_item_id?: bigint | undefined
                partner_id?: bigint | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                memo_tag_id?: bigint | undefined
                segment_tag_1_id?: bigint | undefined
                segment_tag_2_id?: bigint | undefined
                segment_tag_3_id?: bigint | undefined
                tax_code?: number | undefined
                detail_amount_min?: bigint | undefined
                detail_amount_max?: bigint | undefined
                detail_amount_basis?: {} | undefined
                adjustment?: {} | undefined
                approval_status?: {} | undefined
                receipts?: {} | undefined
                cost_allocation?: {} | undefined
                reverse_journal?: {} | undefined
                create_user_id?: bigint | undefined
                current_approver_user_id?: bigint | undefined
                last_approver_user_id?: bigint | undefined
                comment_status?: {} | undefined
                comment_important?: boolean | undefined
                comment_details?: string | undefined
                comment_poster_user_id?: bigint | undefined
                comment_recipient_user_id?: bigint | undefined
                receipt_partner_name?: string | undefined
                ref_number?: string | undefined
                txn_number?: string | undefined
                description?: string | undefined
                wallet_txn_description?: string | undefined
                order_by?: {} | undefined
                direction?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_bs': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialBsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_bs_two_years': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialBsTwoYearsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_bs_three_years': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialBsThreeYearsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl_two_years': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlTwoYearsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl_three_years': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlThreeYearsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl_sections': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlSectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl_segment_1_tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlSegment_1TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl_segment_2_tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlSegment_2TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_pl_segment_3_tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialPlSegment_3TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr_two_years': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrTwoYearsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr_three_years': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrThreeYearsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'section'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr_sections': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrSectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                section_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?:
                  | 'partner'
                  | 'item'
                  | 'account_item'
                  | 'segment_1_tag'
                  | 'segment_2_tag'
                  | 'segment_3_tag'
                  | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr_segment_1_tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrSegment_1TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_1_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr_segment_2_tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrSegment_2TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_2_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/trial_cr_segment_3_tags': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TrialCrSegment_3TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: TooManyRequestsError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                segment_3_tag_ids: string
                fiscal_year?: bigint | undefined
                start_month?: bigint | undefined
                end_month?: bigint | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                account_item_display_type?: 'account_item' | 'group' | undefined
                breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item' | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                item_id?: bigint | undefined
                section_id?: bigint | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                approval_flow_status?: 'without_in_progress' | 'all' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/reports/general_ledgers': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                account_item_name?: string | undefined
                tax_name?:
                  | '課税'
                  | '対象外'
                  | '非課税'
                  | '不課税'
                  | '輸出等'
                  | '未選択'
                  | '課税売上'
                  | '輸出売上'
                  | '非課売上'
                  | '非資売上'
                  | '有価譲渡'
                  | '対外売上'
                  | '課税売返'
                  | '輸出売返'
                  | '非課売返'
                  | '非資売返'
                  | '課税売倒'
                  | '輸出売倒'
                  | '非課売倒'
                  | '非資売倒'
                  | '課税売回'
                  | '課対輸本'
                  | '非対輸本'
                  | '共対輸本'
                  | '課対輸税'
                  | '非対輸税'
                  | '共対輸税'
                  | '地消貨割'
                  | '課対仕入'
                  | '非対仕入'
                  | '共対仕入'
                  | '非課仕入'
                  | '対外仕入'
                  | '課対仕返'
                  | '非対仕返'
                  | '共対仕返'
                  | '非課仕返'
                  | '課売上一'
                  | '課売上二'
                  | '課売上三'
                  | '課売上四'
                  | '課売上五'
                  | '課売上六'
                  | '課対輸返'
                  | '非対輸返'
                  | '共対輸返'
                  | '課売返一'
                  | '課売返二'
                  | '課売返三'
                  | '課売返四'
                  | '課売返五'
                  | '課売返六'
                  | undefined
                tax_rate?:
                  | 'tax_rate_5'
                  | 'tax_rate_8'
                  | 'tax_rate_10'
                  | 'tax_rate_r8'
                  | 'tax_rate_5_exempt_80'
                  | 'tax_rate_5_exempt_70'
                  | 'tax_rate_5_exempt_50'
                  | 'tax_rate_5_exempt_30'
                  | 'tax_rate_8_exempt_80'
                  | 'tax_rate_8_exempt_70'
                  | 'tax_rate_8_exempt_50'
                  | 'tax_rate_8_exempt_30'
                  | 'tax_rate_10_exempt_80'
                  | 'tax_rate_10_exempt_70'
                  | 'tax_rate_10_exempt_50'
                  | 'tax_rate_10_exempt_30'
                  | 'tax_rate_r8_exempt_80'
                  | 'tax_rate_r8_exempt_70'
                  | 'tax_rate_r8_exempt_50'
                  | 'tax_rate_r8_exempt_30'
                  | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                partner_name?: string | undefined
                item_name?: string | undefined
                section_name?: string | undefined
                tag_name?: string | undefined
                segment_tag_1_name?: string | undefined
                segment_tag_2_name?: string | undefined
                segment_tag_3_name?: string | undefined
                approval_flow_status?: 'all' | 'without_in_progress' | undefined
              }
            }
            output: GeneralLedgersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                account_item_name?: string | undefined
                tax_name?:
                  | '課税'
                  | '対象外'
                  | '非課税'
                  | '不課税'
                  | '輸出等'
                  | '未選択'
                  | '課税売上'
                  | '輸出売上'
                  | '非課売上'
                  | '非資売上'
                  | '有価譲渡'
                  | '対外売上'
                  | '課税売返'
                  | '輸出売返'
                  | '非課売返'
                  | '非資売返'
                  | '課税売倒'
                  | '輸出売倒'
                  | '非課売倒'
                  | '非資売倒'
                  | '課税売回'
                  | '課対輸本'
                  | '非対輸本'
                  | '共対輸本'
                  | '課対輸税'
                  | '非対輸税'
                  | '共対輸税'
                  | '地消貨割'
                  | '課対仕入'
                  | '非対仕入'
                  | '共対仕入'
                  | '非課仕入'
                  | '対外仕入'
                  | '課対仕返'
                  | '非対仕返'
                  | '共対仕返'
                  | '非課仕返'
                  | '課売上一'
                  | '課売上二'
                  | '課売上三'
                  | '課売上四'
                  | '課売上五'
                  | '課売上六'
                  | '課対輸返'
                  | '非対輸返'
                  | '共対輸返'
                  | '課売返一'
                  | '課売返二'
                  | '課売返三'
                  | '課売返四'
                  | '課売返五'
                  | '課売返六'
                  | undefined
                tax_rate?:
                  | 'tax_rate_5'
                  | 'tax_rate_8'
                  | 'tax_rate_10'
                  | 'tax_rate_r8'
                  | 'tax_rate_5_exempt_80'
                  | 'tax_rate_5_exempt_70'
                  | 'tax_rate_5_exempt_50'
                  | 'tax_rate_5_exempt_30'
                  | 'tax_rate_8_exempt_80'
                  | 'tax_rate_8_exempt_70'
                  | 'tax_rate_8_exempt_50'
                  | 'tax_rate_8_exempt_30'
                  | 'tax_rate_10_exempt_80'
                  | 'tax_rate_10_exempt_70'
                  | 'tax_rate_10_exempt_50'
                  | 'tax_rate_10_exempt_30'
                  | 'tax_rate_r8_exempt_80'
                  | 'tax_rate_r8_exempt_70'
                  | 'tax_rate_r8_exempt_50'
                  | 'tax_rate_r8_exempt_30'
                  | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                partner_name?: string | undefined
                item_name?: string | undefined
                section_name?: string | undefined
                tag_name?: string | undefined
                segment_tag_1_name?: string | undefined
                segment_tag_2_name?: string | undefined
                segment_tag_3_name?: string | undefined
                approval_flow_status?: 'all' | 'without_in_progress' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                account_item_name?: string | undefined
                tax_name?:
                  | '課税'
                  | '対象外'
                  | '非課税'
                  | '不課税'
                  | '輸出等'
                  | '未選択'
                  | '課税売上'
                  | '輸出売上'
                  | '非課売上'
                  | '非資売上'
                  | '有価譲渡'
                  | '対外売上'
                  | '課税売返'
                  | '輸出売返'
                  | '非課売返'
                  | '非資売返'
                  | '課税売倒'
                  | '輸出売倒'
                  | '非課売倒'
                  | '非資売倒'
                  | '課税売回'
                  | '課対輸本'
                  | '非対輸本'
                  | '共対輸本'
                  | '課対輸税'
                  | '非対輸税'
                  | '共対輸税'
                  | '地消貨割'
                  | '課対仕入'
                  | '非対仕入'
                  | '共対仕入'
                  | '非課仕入'
                  | '対外仕入'
                  | '課対仕返'
                  | '非対仕返'
                  | '共対仕返'
                  | '非課仕返'
                  | '課売上一'
                  | '課売上二'
                  | '課売上三'
                  | '課売上四'
                  | '課売上五'
                  | '課売上六'
                  | '課対輸返'
                  | '非対輸返'
                  | '共対輸返'
                  | '課売返一'
                  | '課売返二'
                  | '課売返三'
                  | '課売返四'
                  | '課売返五'
                  | '課売返六'
                  | undefined
                tax_rate?:
                  | 'tax_rate_5'
                  | 'tax_rate_8'
                  | 'tax_rate_10'
                  | 'tax_rate_r8'
                  | 'tax_rate_5_exempt_80'
                  | 'tax_rate_5_exempt_70'
                  | 'tax_rate_5_exempt_50'
                  | 'tax_rate_5_exempt_30'
                  | 'tax_rate_8_exempt_80'
                  | 'tax_rate_8_exempt_70'
                  | 'tax_rate_8_exempt_50'
                  | 'tax_rate_8_exempt_30'
                  | 'tax_rate_10_exempt_80'
                  | 'tax_rate_10_exempt_70'
                  | 'tax_rate_10_exempt_50'
                  | 'tax_rate_10_exempt_30'
                  | 'tax_rate_r8_exempt_80'
                  | 'tax_rate_r8_exempt_70'
                  | 'tax_rate_r8_exempt_50'
                  | 'tax_rate_r8_exempt_30'
                  | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                partner_name?: string | undefined
                item_name?: string | undefined
                section_name?: string | undefined
                tag_name?: string | undefined
                segment_tag_1_name?: string | undefined
                segment_tag_2_name?: string | undefined
                segment_tag_3_name?: string | undefined
                approval_flow_status?: 'all' | 'without_in_progress' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                account_item_name?: string | undefined
                tax_name?:
                  | '課税'
                  | '対象外'
                  | '非課税'
                  | '不課税'
                  | '輸出等'
                  | '未選択'
                  | '課税売上'
                  | '輸出売上'
                  | '非課売上'
                  | '非資売上'
                  | '有価譲渡'
                  | '対外売上'
                  | '課税売返'
                  | '輸出売返'
                  | '非課売返'
                  | '非資売返'
                  | '課税売倒'
                  | '輸出売倒'
                  | '非課売倒'
                  | '非資売倒'
                  | '課税売回'
                  | '課対輸本'
                  | '非対輸本'
                  | '共対輸本'
                  | '課対輸税'
                  | '非対輸税'
                  | '共対輸税'
                  | '地消貨割'
                  | '課対仕入'
                  | '非対仕入'
                  | '共対仕入'
                  | '非課仕入'
                  | '対外仕入'
                  | '課対仕返'
                  | '非対仕返'
                  | '共対仕返'
                  | '非課仕返'
                  | '課売上一'
                  | '課売上二'
                  | '課売上三'
                  | '課売上四'
                  | '課売上五'
                  | '課売上六'
                  | '課対輸返'
                  | '非対輸返'
                  | '共対輸返'
                  | '課売返一'
                  | '課売返二'
                  | '課売返三'
                  | '課売返四'
                  | '課売返五'
                  | '課売返六'
                  | undefined
                tax_rate?:
                  | 'tax_rate_5'
                  | 'tax_rate_8'
                  | 'tax_rate_10'
                  | 'tax_rate_r8'
                  | 'tax_rate_5_exempt_80'
                  | 'tax_rate_5_exempt_70'
                  | 'tax_rate_5_exempt_50'
                  | 'tax_rate_5_exempt_30'
                  | 'tax_rate_8_exempt_80'
                  | 'tax_rate_8_exempt_70'
                  | 'tax_rate_8_exempt_50'
                  | 'tax_rate_8_exempt_30'
                  | 'tax_rate_10_exempt_80'
                  | 'tax_rate_10_exempt_70'
                  | 'tax_rate_10_exempt_50'
                  | 'tax_rate_10_exempt_30'
                  | 'tax_rate_r8_exempt_80'
                  | 'tax_rate_r8_exempt_70'
                  | 'tax_rate_r8_exempt_50'
                  | 'tax_rate_r8_exempt_30'
                  | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                partner_name?: string | undefined
                item_name?: string | undefined
                section_name?: string | undefined
                tag_name?: string | undefined
                segment_tag_1_name?: string | undefined
                segment_tag_2_name?: string | undefined
                segment_tag_3_name?: string | undefined
                approval_flow_status?: 'all' | 'without_in_progress' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                account_item_name?: string | undefined
                tax_name?:
                  | '課税'
                  | '対象外'
                  | '非課税'
                  | '不課税'
                  | '輸出等'
                  | '未選択'
                  | '課税売上'
                  | '輸出売上'
                  | '非課売上'
                  | '非資売上'
                  | '有価譲渡'
                  | '対外売上'
                  | '課税売返'
                  | '輸出売返'
                  | '非課売返'
                  | '非資売返'
                  | '課税売倒'
                  | '輸出売倒'
                  | '非課売倒'
                  | '非資売倒'
                  | '課税売回'
                  | '課対輸本'
                  | '非対輸本'
                  | '共対輸本'
                  | '課対輸税'
                  | '非対輸税'
                  | '共対輸税'
                  | '地消貨割'
                  | '課対仕入'
                  | '非対仕入'
                  | '共対仕入'
                  | '非課仕入'
                  | '対外仕入'
                  | '課対仕返'
                  | '非対仕返'
                  | '共対仕返'
                  | '非課仕返'
                  | '課売上一'
                  | '課売上二'
                  | '課売上三'
                  | '課売上四'
                  | '課売上五'
                  | '課売上六'
                  | '課対輸返'
                  | '非対輸返'
                  | '共対輸返'
                  | '課売返一'
                  | '課売返二'
                  | '課売返三'
                  | '課売返四'
                  | '課売返五'
                  | '課売返六'
                  | undefined
                tax_rate?:
                  | 'tax_rate_5'
                  | 'tax_rate_8'
                  | 'tax_rate_10'
                  | 'tax_rate_r8'
                  | 'tax_rate_5_exempt_80'
                  | 'tax_rate_5_exempt_70'
                  | 'tax_rate_5_exempt_50'
                  | 'tax_rate_5_exempt_30'
                  | 'tax_rate_8_exempt_80'
                  | 'tax_rate_8_exempt_70'
                  | 'tax_rate_8_exempt_50'
                  | 'tax_rate_8_exempt_30'
                  | 'tax_rate_10_exempt_80'
                  | 'tax_rate_10_exempt_70'
                  | 'tax_rate_10_exempt_50'
                  | 'tax_rate_10_exempt_30'
                  | 'tax_rate_r8_exempt_80'
                  | 'tax_rate_r8_exempt_70'
                  | 'tax_rate_r8_exempt_50'
                  | 'tax_rate_r8_exempt_30'
                  | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                partner_name?: string | undefined
                item_name?: string | undefined
                section_name?: string | undefined
                tag_name?: string | undefined
                segment_tag_1_name?: string | undefined
                segment_tag_2_name?: string | undefined
                segment_tag_3_name?: string | undefined
                approval_flow_status?: 'all' | 'without_in_progress' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                account_item_name?: string | undefined
                tax_name?:
                  | '課税'
                  | '対象外'
                  | '非課税'
                  | '不課税'
                  | '輸出等'
                  | '未選択'
                  | '課税売上'
                  | '輸出売上'
                  | '非課売上'
                  | '非資売上'
                  | '有価譲渡'
                  | '対外売上'
                  | '課税売返'
                  | '輸出売返'
                  | '非課売返'
                  | '非資売返'
                  | '課税売倒'
                  | '輸出売倒'
                  | '非課売倒'
                  | '非資売倒'
                  | '課税売回'
                  | '課対輸本'
                  | '非対輸本'
                  | '共対輸本'
                  | '課対輸税'
                  | '非対輸税'
                  | '共対輸税'
                  | '地消貨割'
                  | '課対仕入'
                  | '非対仕入'
                  | '共対仕入'
                  | '非課仕入'
                  | '対外仕入'
                  | '課対仕返'
                  | '非対仕返'
                  | '共対仕返'
                  | '非課仕返'
                  | '課売上一'
                  | '課売上二'
                  | '課売上三'
                  | '課売上四'
                  | '課売上五'
                  | '課売上六'
                  | '課対輸返'
                  | '非対輸返'
                  | '共対輸返'
                  | '課売返一'
                  | '課売返二'
                  | '課売返三'
                  | '課売返四'
                  | '課売返五'
                  | '課売返六'
                  | undefined
                tax_rate?:
                  | 'tax_rate_5'
                  | 'tax_rate_8'
                  | 'tax_rate_10'
                  | 'tax_rate_r8'
                  | 'tax_rate_5_exempt_80'
                  | 'tax_rate_5_exempt_70'
                  | 'tax_rate_5_exempt_50'
                  | 'tax_rate_5_exempt_30'
                  | 'tax_rate_8_exempt_80'
                  | 'tax_rate_8_exempt_70'
                  | 'tax_rate_8_exempt_50'
                  | 'tax_rate_8_exempt_30'
                  | 'tax_rate_10_exempt_80'
                  | 'tax_rate_10_exempt_70'
                  | 'tax_rate_10_exempt_50'
                  | 'tax_rate_10_exempt_30'
                  | 'tax_rate_r8_exempt_80'
                  | 'tax_rate_r8_exempt_70'
                  | 'tax_rate_r8_exempt_50'
                  | 'tax_rate_r8_exempt_30'
                  | undefined
                adjustment?: 'only' | 'without' | undefined
                cost_allocation?: 'only' | 'without' | undefined
                partner_name?: string | undefined
                item_name?: string | undefined
                section_name?: string | undefined
                tag_name?: string | undefined
                segment_tag_1_name?: string | undefined
                segment_tag_2_name?: string | undefined
                segment_tag_3_name?: string | undefined
                approval_flow_status?: 'all' | 'without_in_progress' | undefined
              }
            }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/1/receipts': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                user_name?: string | undefined
                number?: bigint | undefined
                comment_type?: 'posted' | 'raised' | 'resolved' | undefined
                comment_important?: boolean | undefined
                category?:
                  | 'all'
                  | 'without_deal'
                  | 'with_expense_application_line'
                  | 'with_deal'
                  | 'ignored'
                  | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: { receipts: Receipt[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                user_name?: string | undefined
                number?: bigint | undefined
                comment_type?: 'posted' | 'raised' | 'resolved' | undefined
                comment_important?: boolean | undefined
                category?:
                  | 'all'
                  | 'without_deal'
                  | 'with_expense_application_line'
                  | 'with_deal'
                  | 'ignored'
                  | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                user_name?: string | undefined
                number?: bigint | undefined
                comment_type?: 'posted' | 'raised' | 'resolved' | undefined
                comment_important?: boolean | undefined
                category?:
                  | 'all'
                  | 'without_deal'
                  | 'with_expense_application_line'
                  | 'with_deal'
                  | 'ignored'
                  | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                user_name?: string | undefined
                number?: bigint | undefined
                comment_type?: 'posted' | 'raised' | 'resolved' | undefined
                comment_important?: boolean | undefined
                category?:
                  | 'all'
                  | 'without_deal'
                  | 'with_expense_application_line'
                  | 'with_deal'
                  | 'ignored'
                  | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_date: string
                end_date: string
                user_name?: string | undefined
                number?: bigint | undefined
                comment_type?: 'posted' | 'raised' | 'resolved' | undefined
                comment_important?: boolean | undefined
                category?:
                  | 'all'
                  | 'without_deal'
                  | 'with_expense_application_line'
                  | 'with_deal'
                  | 'ignored'
                  | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { form: ReceiptCreateParams }
            output: ReceiptResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: ReceiptCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: ReceiptCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: ReceiptCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: ReceiptCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/receipts/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ReceiptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ReceiptUpdateParams } & {
              form: ReceiptUpdateParams
            }
            output: ReceiptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ReceiptUpdateParams } & {
              form: ReceiptUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ReceiptUpdateParams } & {
              form: ReceiptUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ReceiptUpdateParams } & {
              form: ReceiptUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ReceiptUpdateParams } & {
              form: ReceiptUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ReceiptUpdateParams } & {
              form: ReceiptUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/receipts/:id/download': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                payroll_attached?: boolean | undefined
                start_transaction_date?: string | undefined
                end_transaction_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ExpenseApplicationsIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                payroll_attached?: boolean | undefined
                start_transaction_date?: string | undefined
                end_transaction_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                payroll_attached?: boolean | undefined
                start_transaction_date?: string | undefined
                end_transaction_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                payroll_attached?: boolean | undefined
                start_transaction_date?: string | undefined
                end_transaction_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                payroll_attached?: boolean | undefined
                start_transaction_date?: string | undefined
                end_transaction_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ExpenseApplicationCreateParams } & {
              form: ExpenseApplicationCreateParams
            }
            output: ExpenseApplicationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExpenseApplicationCreateParams } & {
              form: ExpenseApplicationCreateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExpenseApplicationCreateParams } & {
              form: ExpenseApplicationCreateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExpenseApplicationCreateParams } & {
              form: ExpenseApplicationCreateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExpenseApplicationCreateParams } & {
              form: ExpenseApplicationCreateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ExpenseApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationUpdateParams } & {
              form: ExpenseApplicationUpdateParams
            }
            output: ExpenseApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationUpdateParams } & {
              form: ExpenseApplicationUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationUpdateParams } & {
              form: ExpenseApplicationUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationUpdateParams } & {
              form: ExpenseApplicationUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationUpdateParams } & {
              form: ExpenseApplicationUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationUpdateParams } & {
              form: ExpenseApplicationUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/:id/actions': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationActionCreateParams } & {
              form: ExpenseApplicationActionCreateParams
            }
            output: ExpenseApplicationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationActionCreateParams } & {
              form: ExpenseApplicationActionCreateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationActionCreateParams } & {
              form: ExpenseApplicationActionCreateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationActionCreateParams } & {
              form: ExpenseApplicationActionCreateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationActionCreateParams } & {
              form: ExpenseApplicationActionCreateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationActionCreateParams } & {
              form: ExpenseApplicationActionCreateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/:id/parent_approvable_requests': {
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: ExpenseApplicationParentApprovableRequestUpdateParams
            } & { form: ExpenseApplicationParentApprovableRequestUpdateParams }
            output: ExpenseApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              json: ExpenseApplicationParentApprovableRequestUpdateParams
            } & { form: ExpenseApplicationParentApprovableRequestUpdateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: ExpenseApplicationParentApprovableRequestUpdateParams
            } & { form: ExpenseApplicationParentApprovableRequestUpdateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              json: ExpenseApplicationParentApprovableRequestUpdateParams
            } & { form: ExpenseApplicationParentApprovableRequestUpdateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              json: ExpenseApplicationParentApprovableRequestUpdateParams
            } & { form: ExpenseApplicationParentApprovableRequestUpdateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              json: ExpenseApplicationParentApprovableRequestUpdateParams
            } & { form: ExpenseApplicationParentApprovableRequestUpdateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/currencies': {
      $get:
        | {
            input: {
              query: { company_id: bigint; search_status?: 'usable' | 'unusable' | undefined }
            }
            output: ExpenseApplicationCurrenciesIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { company_id: bigint; search_status?: 'usable' | 'unusable' | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { company_id: bigint; search_status?: 'usable' | 'unusable' | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { company_id: bigint; search_status?: 'usable' | 'unusable' | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { company_id: bigint; search_status?: 'usable' | 'unusable' | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ExpenseApplicationCurrencyParams }
            output: ExpenseApplicationCurrency
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExpenseApplicationCurrencyParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExpenseApplicationCurrencyParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExpenseApplicationCurrencyParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExpenseApplicationCurrencyParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/currencies/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ExpenseApplicationCurrency
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationCurrencyParams }
            output: ExpenseApplicationCurrency
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationCurrencyParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationCurrencyParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationCurrencyParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationCurrencyParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationCurrencyParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/form': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: ExpenseApplicationForm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: ExpenseApplicationFormParams }
            output: ExpenseApplicationForm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExpenseApplicationFormParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExpenseApplicationFormParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExpenseApplicationFormParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExpenseApplicationFormParams }
            output: ConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ExpenseApplicationFormParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_applications/amount_calculations': {
      $post:
        | {
            input: { json: ExpenseApplicationAmountCalculationCreateParams }
            output: ExpenseApplicationAmountCalculationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExpenseApplicationAmountCalculationCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExpenseApplicationAmountCalculationCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExpenseApplicationAmountCalculationCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExpenseApplicationAmountCalculationCreateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ExpenseApplicationAmountCalculationCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_application_line_templates': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                'section_ids[]'?: bigint[] | undefined
              }
            }
            output: { expense_application_line_templates: ExpenseApplicationLineTemplate[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                'section_ids[]'?: bigint[] | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                'section_ids[]'?: bigint[] | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                'section_ids[]'?: bigint[] | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                'section_ids[]'?: bigint[] | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: ExpenseApplicationLineTemplateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/expense_application_line_templates/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ExpenseApplicationLineTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: ExpenseApplicationLineTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ExpenseApplicationLineTemplateParams } & {
              form: ExpenseApplicationLineTemplateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/payment_requests': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                start_last_approval_date?: string | undefined
                end_last_approval_date?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                payment_method?:
                  | 'none'
                  | 'domestic_bank_transfer'
                  | 'abroad_bank_transfer'
                  | 'account_transfer'
                  | 'credit_card'
                  | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                document_code?: string | undefined
                section_id?: bigint | undefined
                partner_name?: string | undefined
                approval_flow_route_id?: bigint | undefined
                observing?: 'ignore_observing' | 'only_observing' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: PaymentRequestsIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                start_last_approval_date?: string | undefined
                end_last_approval_date?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                payment_method?:
                  | 'none'
                  | 'domestic_bank_transfer'
                  | 'abroad_bank_transfer'
                  | 'account_transfer'
                  | 'credit_card'
                  | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                document_code?: string | undefined
                section_id?: bigint | undefined
                partner_name?: string | undefined
                approval_flow_route_id?: bigint | undefined
                observing?: 'ignore_observing' | 'only_observing' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                start_last_approval_date?: string | undefined
                end_last_approval_date?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                payment_method?:
                  | 'none'
                  | 'domestic_bank_transfer'
                  | 'abroad_bank_transfer'
                  | 'account_transfer'
                  | 'credit_card'
                  | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                document_code?: string | undefined
                section_id?: bigint | undefined
                partner_name?: string | undefined
                approval_flow_route_id?: bigint | undefined
                observing?: 'ignore_observing' | 'only_observing' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                start_last_approval_date?: string | undefined
                end_last_approval_date?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                payment_method?:
                  | 'none'
                  | 'domestic_bank_transfer'
                  | 'abroad_bank_transfer'
                  | 'account_transfer'
                  | 'credit_card'
                  | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                document_code?: string | undefined
                section_id?: bigint | undefined
                partner_name?: string | undefined
                approval_flow_route_id?: bigint | undefined
                observing?: 'ignore_observing' | 'only_observing' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?:
                  | 'draft'
                  | 'in_progress'
                  | 'approved'
                  | 'rejected'
                  | 'feedback'
                  | 'unsettled'
                  | 'settled'
                  | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                start_last_approval_date?: string | undefined
                end_last_approval_date?: string | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                applicant_id?: bigint | undefined
                approver_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                partner_id?: bigint | undefined
                partner_code?: string | undefined
                payment_method?:
                  | 'none'
                  | 'domestic_bank_transfer'
                  | 'abroad_bank_transfer'
                  | 'account_transfer'
                  | 'credit_card'
                  | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                document_code?: string | undefined
                section_id?: bigint | undefined
                partner_name?: string | undefined
                approval_flow_route_id?: bigint | undefined
                observing?: 'ignore_observing' | 'only_observing' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PaymentRequestCreateParams } & { form: PaymentRequestCreateParams }
            output: PaymentRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PaymentRequestCreateParams } & { form: PaymentRequestCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentRequestCreateParams } & { form: PaymentRequestCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentRequestCreateParams } & { form: PaymentRequestCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentRequestCreateParams } & { form: PaymentRequestCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/payment_requests/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: PaymentRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestUpdateParams } & {
              form: PaymentRequestUpdateParams
            }
            output: PaymentRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestUpdateParams } & {
              form: PaymentRequestUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestUpdateParams } & {
              form: PaymentRequestUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestUpdateParams } & {
              form: PaymentRequestUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestUpdateParams } & {
              form: PaymentRequestUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestUpdateParams } & {
              form: PaymentRequestUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/payment_requests/:id/actions': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestActionCreateParams } & {
              form: PaymentRequestActionCreateParams
            }
            output: PaymentRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestActionCreateParams } & {
              form: PaymentRequestActionCreateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestActionCreateParams } & {
              form: PaymentRequestActionCreateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestActionCreateParams } & {
              form: PaymentRequestActionCreateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestActionCreateParams } & {
              form: PaymentRequestActionCreateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: PaymentRequestActionCreateParams } & {
              form: PaymentRequestActionCreateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/approval_requests': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback' | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                form_id?: bigint | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                applicant_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                approver_id?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ApprovalRequestsIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback' | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                form_id?: bigint | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                applicant_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                approver_id?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback' | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                form_id?: bigint | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                applicant_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                approver_id?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback' | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                form_id?: bigint | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                applicant_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                approver_id?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback' | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                form_id?: bigint | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                applicant_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                approver_id?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'in_progress' | 'approved' | 'rejected' | 'feedback' | undefined
                application_number?: bigint | undefined
                title?: string | undefined
                form_id?: bigint | undefined
                start_application_date?: string | undefined
                end_application_date?: string | undefined
                applicant_id?: bigint | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                approver_id?: bigint | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApprovalRequestCreateParams } & { form: ApprovalRequestCreateParams }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApprovalRequestCreateParams } & { form: ApprovalRequestCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApprovalRequestCreateParams } & { form: ApprovalRequestCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApprovalRequestCreateParams } & { form: ApprovalRequestCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApprovalRequestCreateParams } & { form: ApprovalRequestCreateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ApprovalRequestCreateParams } & { form: ApprovalRequestCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/approval_requests/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestUpdateParams } & {
              form: ApprovalRequestUpdateParams
            }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestUpdateParams } & {
              form: ApprovalRequestUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestUpdateParams } & {
              form: ApprovalRequestUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestUpdateParams } & {
              form: ApprovalRequestUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestUpdateParams } & {
              form: ApprovalRequestUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestUpdateParams } & {
              form: ApprovalRequestUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/approval_requests/:id/actions': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestActionCreateParams } & {
              form: ApprovalRequestActionCreateParams
            }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestActionCreateParams } & {
              form: ApprovalRequestActionCreateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestActionCreateParams } & {
              form: ApprovalRequestActionCreateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestActionCreateParams } & {
              form: ApprovalRequestActionCreateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestActionCreateParams } & {
              form: ApprovalRequestActionCreateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApprovalRequestActionCreateParams } & {
              form: ApprovalRequestActionCreateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/approval_requests/forms': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: ApprovalRequestFormIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/approval_requests/forms/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ApprovalRequestFormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/purchase_requests': {
      $get:
        | {
            input: {
              query: { company_id: bigint; limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: PurchaseRequestsIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { company_id: bigint; limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { company_id: bigint; limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { company_id: bigint; limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { company_id: bigint; limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { company_id: bigint; limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PurchaseRequestCreateParams } & { form: PurchaseRequestCreateParams }
            output: PurchaseRequestDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PurchaseRequestCreateParams } & { form: PurchaseRequestCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PurchaseRequestCreateParams } & { form: PurchaseRequestCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PurchaseRequestCreateParams } & { form: PurchaseRequestCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PurchaseRequestCreateParams } & { form: PurchaseRequestCreateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PurchaseRequestCreateParams } & { form: PurchaseRequestCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/purchase_requests/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: PurchaseRequestDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestUpdateParams } & {
              form: PurchaseRequestUpdateParams
            }
            output: PurchaseRequestDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestUpdateParams } & {
              form: PurchaseRequestUpdateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestUpdateParams } & {
              form: PurchaseRequestUpdateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestUpdateParams } & {
              form: PurchaseRequestUpdateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestUpdateParams } & {
              form: PurchaseRequestUpdateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestUpdateParams } & {
              form: PurchaseRequestUpdateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/purchase_requests/forms': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'active' | 'deleted' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: PurchaseRequestFormIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'active' | 'deleted' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'active' | 'deleted' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'active' | 'deleted' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                status?: 'draft' | 'active' | 'deleted' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/purchase_requests/forms/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: PurchaseRequestFormDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/purchase_requests/:id/actions': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestActionCreateParams } & {
              form: PurchaseRequestActionCreateParams
            }
            output: PurchaseRequestDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestActionCreateParams } & {
              form: PurchaseRequestActionCreateParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestActionCreateParams } & {
              form: PurchaseRequestActionCreateParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestActionCreateParams } & {
              form: PurchaseRequestActionCreateParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestActionCreateParams } & {
              form: PurchaseRequestActionCreateParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: PurchaseRequestActionCreateParams } & {
              form: PurchaseRequestActionCreateParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/purchase_requests/:purchase_request_id/purchase_budget': {
      $get:
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: PurchaseRequestPurchaseBudgetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { purchase_request_id: bigint } } & { query: { company_id: bigint } }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/1/approval_flow_routes': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                included_user_id?: bigint | undefined
                usage?:
                  | 'TxnApproval'
                  | 'ExpenseApplication'
                  | 'PaymentRequest'
                  | 'ApprovalRequest'
                  | 'DocApproval'
                  | undefined
                request_form_id?: bigint | undefined
              }
            }
            output: ApprovalFlowRoutesIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                included_user_id?: bigint | undefined
                usage?:
                  | 'TxnApproval'
                  | 'ExpenseApplication'
                  | 'PaymentRequest'
                  | 'ApprovalRequest'
                  | 'DocApproval'
                  | undefined
                request_form_id?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                included_user_id?: bigint | undefined
                usage?:
                  | 'TxnApproval'
                  | 'ExpenseApplication'
                  | 'PaymentRequest'
                  | 'ApprovalRequest'
                  | 'DocApproval'
                  | undefined
                request_form_id?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                included_user_id?: bigint | undefined
                usage?:
                  | 'TxnApproval'
                  | 'ExpenseApplication'
                  | 'PaymentRequest'
                  | 'ApprovalRequest'
                  | 'DocApproval'
                  | undefined
                request_form_id?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                included_user_id?: bigint | undefined
                usage?:
                  | 'TxnApproval'
                  | 'ExpenseApplication'
                  | 'PaymentRequest'
                  | 'ApprovalRequest'
                  | 'DocApproval'
                  | undefined
                request_form_id?: bigint | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                included_user_id?: bigint | undefined
                usage?:
                  | 'TxnApproval'
                  | 'ExpenseApplication'
                  | 'PaymentRequest'
                  | 'ApprovalRequest'
                  | 'DocApproval'
                  | undefined
                request_form_id?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/approval_flow_routes/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ApprovalFlowRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/segments/:segment_id/tags': {
      $get:
        | {
            input: { param: { segment_id: bigint } } & {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: { segment_tags: SegmentTag[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: bigint } } & {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: bigint } } & {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: bigint } } & {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: bigint } } & {
              query: {
                company_id: bigint
                offset?: bigint | undefined
                limit?: bigint | undefined
                start_update_date?: string | undefined
                end_update_date?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { segment_id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: SegmentTagResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { segment_id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/segments/:segment_id/tags/:id': {
      $put:
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: SegmentTagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { json: SegmentTagParams } & {
              form: SegmentTagParams
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { segment_id: bigint; id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/segments/:segment_id/tags/code/upsert': {
      $put:
        | {
            input: { param: { segment_id: bigint } } & {
              json: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            }
            output: SegmentTagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: bigint } } & {
              json: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            }
            output: SegmentTagResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { segment_id: bigint } } & {
              json: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: bigint } } & {
              json: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: bigint } } & {
              json: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: bigint } } & {
              json: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            } & {
              form: {
                company_id: bigint
                code: string
                segment_tag: {
                  name: string
                  description?: (string | null) | undefined
                  shortcut1?: (string | null) | undefined
                  shortcut2?: (string | null) | undefined
                }
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/fixed_assets': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                target_date: string
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: FixedAssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                target_date: string
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                target_date: string
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                target_date: string
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                target_date: string
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/account_groups': {
      $post:
        | {
            input: { json: AccountGroupCreateParams }
            output: AccountGroupCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AccountGroupCreateParams }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountGroupCreateParams }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountGroupCreateParams }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccountGroupCreateParams }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AccountGroupCreateParams }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/1/user_matchers': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                limit?: bigint | undefined
                offset?: bigint | undefined
                walletable?: string | undefined
                description?: string | undefined
                active?: 'active' | 'inactive' | 'all' | undefined
                act?: 0n | 1n | 2n | 3n | 4n | 5n | 6n | 7n | 8n | 9n | 10n | 11n | 12n | undefined
                created_by?: 0n | 1n | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                min_priority?: bigint | undefined
                max_priority?: bigint | undefined
                min_corrected_wallet_txn_count?: bigint | undefined
                max_corrected_wallet_txn_count?: bigint | undefined
                min_corrected_wallet_txn_count_percentage?: bigint | undefined
                max_corrected_wallet_txn_count_percentage?: bigint | undefined
                card_label_id?: bigint | undefined
                entry_side_str?: 'income' | 'expense' | undefined
              }
            }
            output: {
              data: {
                id: bigint
                entry_side_str: 'income' | 'expense'
                description: string | null
                condition: 0 | 1 | 2 | 3 | 4
                priority: number
                act: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                tax_name?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                walletable?: (string | null) | undefined
                transfer_walletable?: (string | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
                last_updated_user_id?: (number | null) | undefined
                user_name?: (string | null) | undefined
                updated_at?: (string | null) | undefined
                corrected_wallet_txn_count?: (number | null) | undefined
                corrected_wallet_txn_count_percentage?: (number | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (bigint | null) | undefined
                active: boolean
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                limit?: bigint | undefined
                offset?: bigint | undefined
                walletable?: string | undefined
                description?: string | undefined
                active?: 'active' | 'inactive' | 'all' | undefined
                act?: 0n | 1n | 2n | 3n | 4n | 5n | 6n | 7n | 8n | 9n | 10n | 11n | 12n | undefined
                created_by?: 0n | 1n | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                min_priority?: bigint | undefined
                max_priority?: bigint | undefined
                min_corrected_wallet_txn_count?: bigint | undefined
                max_corrected_wallet_txn_count?: bigint | undefined
                min_corrected_wallet_txn_count_percentage?: bigint | undefined
                max_corrected_wallet_txn_count_percentage?: bigint | undefined
                card_label_id?: bigint | undefined
                entry_side_str?: 'income' | 'expense' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                limit?: bigint | undefined
                offset?: bigint | undefined
                walletable?: string | undefined
                description?: string | undefined
                active?: 'active' | 'inactive' | 'all' | undefined
                act?: 0n | 1n | 2n | 3n | 4n | 5n | 6n | 7n | 8n | 9n | 10n | 11n | 12n | undefined
                created_by?: 0n | 1n | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                min_priority?: bigint | undefined
                max_priority?: bigint | undefined
                min_corrected_wallet_txn_count?: bigint | undefined
                max_corrected_wallet_txn_count?: bigint | undefined
                min_corrected_wallet_txn_count_percentage?: bigint | undefined
                max_corrected_wallet_txn_count_percentage?: bigint | undefined
                card_label_id?: bigint | undefined
                entry_side_str?: 'income' | 'expense' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                limit?: bigint | undefined
                offset?: bigint | undefined
                walletable?: string | undefined
                description?: string | undefined
                active?: 'active' | 'inactive' | 'all' | undefined
                act?: 0n | 1n | 2n | 3n | 4n | 5n | 6n | 7n | 8n | 9n | 10n | 11n | 12n | undefined
                created_by?: 0n | 1n | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                min_priority?: bigint | undefined
                max_priority?: bigint | undefined
                min_corrected_wallet_txn_count?: bigint | undefined
                max_corrected_wallet_txn_count?: bigint | undefined
                min_corrected_wallet_txn_count_percentage?: bigint | undefined
                max_corrected_wallet_txn_count_percentage?: bigint | undefined
                card_label_id?: bigint | undefined
                entry_side_str?: 'income' | 'expense' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                limit?: bigint | undefined
                offset?: bigint | undefined
                walletable?: string | undefined
                description?: string | undefined
                active?: 'active' | 'inactive' | 'all' | undefined
                act?: 0n | 1n | 2n | 3n | 4n | 5n | 6n | 7n | 8n | 9n | 10n | 11n | 12n | undefined
                created_by?: 0n | 1n | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                min_priority?: bigint | undefined
                max_priority?: bigint | undefined
                min_corrected_wallet_txn_count?: bigint | undefined
                max_corrected_wallet_txn_count?: bigint | undefined
                min_corrected_wallet_txn_count_percentage?: bigint | undefined
                max_corrected_wallet_txn_count_percentage?: bigint | undefined
                card_label_id?: bigint | undefined
                entry_side_str?: 'income' | 'expense' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                company_id: bigint
                limit?: bigint | undefined
                offset?: bigint | undefined
                walletable?: string | undefined
                description?: string | undefined
                active?: 'active' | 'inactive' | 'all' | undefined
                act?: 0n | 1n | 2n | 3n | 4n | 5n | 6n | 7n | 8n | 9n | 10n | 11n | 12n | undefined
                created_by?: 0n | 1n | undefined
                min_amount?: bigint | undefined
                max_amount?: bigint | undefined
                min_priority?: bigint | undefined
                max_priority?: bigint | undefined
                min_corrected_wallet_txn_count?: bigint | undefined
                max_corrected_wallet_txn_count?: bigint | undefined
                min_corrected_wallet_txn_count_percentage?: bigint | undefined
                max_corrected_wallet_txn_count_percentage?: bigint | undefined
                card_label_id?: bigint | undefined
                entry_side_str?: 'income' | 'expense' | undefined
              }
            }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: {
              id: bigint
              entry_side_str: 'income' | 'expense'
              description: string | null
              condition: 0 | 1 | 2 | 3 | 4
              priority: number
              act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
              tax_name?: (string | null) | undefined
              tax_code?: (number | null) | undefined
              suggested_tax_name?: (string | null) | undefined
              min_amount?: (number | null) | undefined
              max_amount?: (number | null) | undefined
              deal_description?: (string | null) | undefined
              walletable?: (string | null) | undefined
              transfer_walletable?: (string | null) | undefined
              origin_deal_id?: (bigint | null) | undefined
              origin_deal_code?: (number | null) | undefined
              last_updated_user_id: number | null
              user_name: string
              updated_at?: (string | null) | undefined
              corrected_wallet_txn_count?: (number | null) | undefined
              corrected_wallet_txn_count_percentage?: (number | null) | undefined
              qualified_invoice_setting: 'non_qualified' | 'qualified' | 'depends_on_partner'
              suggest_tax_from_walletable_invoice: boolean | null
              walletable_bank_name?: (string | null) | undefined
              card_label?: (string | null) | undefined
              card_label_id?: (bigint | null) | undefined
              account_item_name?: (string | null) | undefined
              partner_name?: (string | null) | undefined
              item_name?: (string | null) | undefined
              section_name?: (string | null) | undefined
              division_tag_1_name?: (string | null) | undefined
              division_tag_2_name?: (string | null) | undefined
              division_tag_3_name?: (string | null) | undefined
              default_tag_names?: (string[] | null) | undefined
              active: boolean
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/1/user_matchers/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {
              id: bigint
              entry_side_str: 'income' | 'expense'
              description: string | null
              condition: 0 | 1 | 2 | 3 | 4
              priority: number
              act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
              tax_name?: (string | null) | undefined
              tax_code?: (number | null) | undefined
              suggested_tax_name?: (string | null) | undefined
              min_amount?: (number | null) | undefined
              max_amount?: (number | null) | undefined
              deal_description?: (string | null) | undefined
              walletable?: (string | null) | undefined
              transfer_walletable?: (string | null) | undefined
              origin_deal_id?: (bigint | null) | undefined
              origin_deal_code?: (number | null) | undefined
              last_updated_user_id: number | null
              user_name: string
              updated_at?: (string | null) | undefined
              corrected_wallet_txn_count?: (number | null) | undefined
              corrected_wallet_txn_count_percentage?: (number | null) | undefined
              qualified_invoice_setting: 'non_qualified' | 'qualified' | 'depends_on_partner'
              suggest_tax_from_walletable_invoice: boolean | null
              walletable_bank_name?: (string | null) | undefined
              card_label?: (string | null) | undefined
              card_label_id?: (bigint | null) | undefined
              account_item_name?: (string | null) | undefined
              partner_name?: (string | null) | undefined
              item_name?: (string | null) | undefined
              section_name?: (string | null) | undefined
              division_tag_1_name?: (string | null) | undefined
              division_tag_2_name?: (string | null) | undefined
              division_tag_3_name?: (string | null) | undefined
              default_tag_names?: (string[] | null) | undefined
              active: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: {
              id: bigint
              entry_side_str: 'income' | 'expense'
              description: string | null
              condition: 0 | 1 | 2 | 3 | 4
              priority: number
              act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
              tax_name?: (string | null) | undefined
              tax_code?: (number | null) | undefined
              suggested_tax_name?: (string | null) | undefined
              min_amount?: (number | null) | undefined
              max_amount?: (number | null) | undefined
              deal_description?: (string | null) | undefined
              walletable?: (string | null) | undefined
              transfer_walletable?: (string | null) | undefined
              origin_deal_id?: (bigint | null) | undefined
              origin_deal_code?: (number | null) | undefined
              last_updated_user_id: number | null
              user_name: string
              updated_at?: (string | null) | undefined
              corrected_wallet_txn_count?: (number | null) | undefined
              corrected_wallet_txn_count_percentage?: (number | null) | undefined
              qualified_invoice_setting: 'non_qualified' | 'qualified' | 'depends_on_partner'
              suggest_tax_from_walletable_invoice: boolean | null
              walletable_bank_name?: (string | null) | undefined
              card_label?: (string | null) | undefined
              card_label_id?: (bigint | null) | undefined
              account_item_name?: (string | null) | undefined
              partner_name?: (string | null) | undefined
              item_name?: (string | null) | undefined
              section_name?: (string | null) | undefined
              division_tag_1_name?: (string | null) | undefined
              division_tag_2_name?: (string | null) | undefined
              division_tag_3_name?: (string | null) | undefined
              default_tag_names?: (string[] | null) | undefined
              active: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } } & {
              json: {
                act: 0 | 1 | 2 | 3 | 4 | 10 | 11 | 12
                active: boolean
                condition: 0 | 1 | 2 | 3 | 4
                description: string
                entry_side_str: 'income' | 'expense'
                priority: number
                tax_name?: (string | null) | undefined
                walletable?: (string | null) | undefined
                card_label?: (string | null) | undefined
                card_label_id?: (number | null) | undefined
                transfer_walletable?: (string | null) | undefined
                min_amount?: (number | null) | undefined
                max_amount?: (number | null) | undefined
                deal_description?: (string | null) | undefined
                qualified_invoice_setting?:
                  | 'non_qualified'
                  | 'qualified'
                  | 'depends_on_partner'
                  | undefined
                suggest_tax_from_walletable_invoice?: (boolean | null) | undefined
                account_item_name?: (string | null) | undefined
                partner_name?: (string | null) | undefined
                item_name?: (string | null) | undefined
                section_name?: (string | null) | undefined
                division_tag_1_name?: (string | null) | undefined
                division_tag_2_name?: (string | null) | undefined
                division_tag_3_name?: (string | null) | undefined
                default_tag_names?: (string[] | null) | undefined
              }
            }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: BadRequestNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: bigint } } & { query: { company_id: bigint } }
            output: ServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/1/user_matchers/apply': {
      $post:
        | {
            input: { json: { company_id: bigint; wallet_txn_ids: bigint[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { company_id: bigint; wallet_txn_ids: bigint[] } }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { company_id: bigint; wallet_txn_ids: bigint[] } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { company_id: bigint; wallet_txn_ids: bigint[] } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { company_id: bigint; wallet_txn_ids: bigint[] } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
