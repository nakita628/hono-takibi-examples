type EstablishmentIdentity = {
  emails?: string[] | undefined
  id?: (number | null) | undefined
  name?: string | undefined
  nic?: (string | null) | undefined
  phones?: string[] | undefined
  place?:
    | {
        administrative_area_level1?: string | undefined
        administrative_area_level2?: string | undefined
        administrative_area_level3?: string | undefined
        country?: string | undefined
        countryiso2?: string | undefined
        formatted_address?: string | undefined
        id?: number | undefined
        latitude?: number | undefined
        locality?: string | undefined
        longitude?: number | undefined
        postal_code?: string | undefined
        route?: string | undefined
        route2?: string | undefined
        street_number?: string | undefined
        sublocality?: string | undefined
      }
    | undefined
}
type User = {
  civility?: (string | null) | undefined
  establishments?: EstablishmentIdentity[] | undefined
  firstname?: string | undefined
  id?: number | undefined
  image?: string | undefined
  lastname?: string | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  created_at?: string | undefined
  email?: string | undefined
  last_access_at?: string | undefined
  password?: string | undefined
  password_is_undefined?: boolean | undefined
  updated_at?: string | undefined
}
type SinaoOrganization = {
  billing_name?: string | undefined
  capital?: number | undefined
  closeaccounting_period?: string | undefined
  code_naf?: string | undefined
  country_iso2?: string | undefined
  dissolution_date?: string | undefined
  establishments?: EstablishmentIdentity[] | undefined
  founding_date?: string | undefined
  founding_location?: string | undefined
  greffe?: string | undefined
  id?: number | undefined
  legal_form?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  national_id?: string | undefined
  number_of_employees?: string | undefined
  rcs?: string | undefined
  slogan?: string | undefined
  tax_id?: string | undefined
  vat_id?: string | undefined
  vat_system?: string | undefined
  app?: App | undefined
}
type PolicyProfile = {
  description?: string | undefined
  homepage?: string | undefined
  name?: string | undefined
  restricted?: boolean | undefined
  rights?: string[] | undefined
  visible?: number | undefined
}
type UserPolicy = {
  app?: App | undefined
  policy_profile?: PolicyProfile | undefined
  user?: User | undefined
}
type Subscription = {
  access_level?: 'full' | 'start' | 'pro' | 'restricted' | undefined
  id?: number | undefined
  payment_card?: string | undefined
  payment_failed_count?: number | undefined
  period_ending_date?: string | undefined
  period_remaining_days?: number | undefined
  period_starting_date?: string | undefined
  plan_color?: string | undefined
  plan_name?: string | undefined
  status?: string | undefined
  stripe_customer_id?: string | undefined
  stripe_plan_id?: string | undefined
  stripe_subscription_id?: string | undefined
}
type App = {
  admin?: User | undefined
  config?: { [x: string]: unknown }[] | undefined
  hostname_alias?: (string | null) | undefined
  id?: number | undefined
  last_access_at?: string | undefined
  last_user?: User | undefined
  organization?: SinaoOrganization | undefined
  policies?: UserPolicy[] | undefined
  subscription?: Subscription | undefined
  url?: string | undefined
}
type ApiResponse = {
  code?: number | undefined
  message?: string | undefined
  type?: string | undefined
}
type AccessInvitation = {
  app?: App | undefined
  id?: number | undefined
  profile?: PolicyProfile | undefined
  recipient_user?: User | undefined
  sender_user?: User | undefined
  used_at?: string | undefined
  validity?: string | undefined
}
type AccountCategory = {
  description?: string | undefined
  id?: number | undefined
  name?: string | undefined
  type?: string | undefined
}
type Account = {
  accounting_number?: string | undefined
  description?: string | undefined
  editable?: boolean | undefined
  id?: number | undefined
  is_associate?: boolean | undefined
  is_cashflow?: boolean | undefined
  is_purchase?: boolean | undefined
  is_sales?: boolean | undefined
  is_various?: boolean | undefined
  journalcode?: string | undefined
  keywords?: string | undefined
  name?: string | undefined
  need_charge?: boolean | undefined
  need_employee?: boolean | undefined
  need_invoice?: boolean | undefined
  technical_name?: string | undefined
}
type Attachment = {
  attachable_id?: string | undefined
  attachable_type?: string | undefined
  file_url?: string | undefined
  id?: number | undefined
  name?: string | undefined
}
type BankDetails = {
  bic?: string | undefined
  iban?: string | undefined
  id?: number | undefined
  name?: string | undefined
}
type CashflowSource = {
  account_type?: string | undefined
  balance_amount?: number | undefined
  created_at?: string | undefined
  disabled?: number | undefined
  id?: number | undefined
  identifiant?: string | undefined
  name?: string | undefined
  parent_cashflow_source?: CashflowSource | undefined
  status?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type ExportEntity = {
  created_at?: string | undefined
  entries_count?: number | undefined
  id?: number | undefined
  period_end?: string | undefined
  period_start?: string | undefined
  status?: string | undefined
  total_credit?: number | undefined
  total_debit?: number | undefined
  updated_at?: string | undefined
}
type Balance = {
  completed?: boolean | undefined
  due?: number | undefined
  meaning?: 'completed' | 'remaining' | 'overpaid' | undefined
  paid?: number | undefined
  remaining?: number | undefined
}
type ContactPerson = {
  civility?: (string | null) | undefined
  establishments?: EstablishmentIdentity[] | undefined
  firstname?: string | undefined
  id?: number | undefined
  image?: string | undefined
  lastname?: string | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
}
type ContactOrganization = {
  billing_name?: string | undefined
  capital?: number | undefined
  closeaccounting_period?: string | undefined
  code_naf?: string | undefined
  country_iso2?: string | undefined
  dissolution_date?: string | undefined
  establishments?: EstablishmentIdentity[] | undefined
  founding_date?: string | undefined
  founding_location?: string | undefined
  greffe?: string | undefined
  id?: number | undefined
  legal_form?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  national_id?: string | undefined
  number_of_employees?: string | undefined
  rcs?: string | undefined
  slogan?: string | undefined
  tax_id?: string | undefined
  vat_id?: string | undefined
  vat_system?: string | undefined
}
type Quote = {
  attachments?: string[] | undefined
  author?: User | undefined
  balance?: Balance | undefined
  bank_detail?: BankDetails | undefined
  columns?:
    | {
        amount?: string | undefined
        designation?: string | undefined
        discount?: string | undefined
        due?: string | undefined
        info_total_quantity?: string | undefined
        quantity?: string | undefined
        quantity_name?: string | undefined
        subtotal?: string | undefined
        vat_percent?: string | undefined
      }
    | undefined
  contact_infos?:
    | {
        address?: string | undefined
        address2?: string | undefined
        details?: string | undefined
        id?: number | undefined
        location?: string | undefined
        name?: string | undefined
        type?: 'organization' | 'person' | undefined
      }
    | undefined
  content?: SalesLine[] | undefined
  currency?: string | undefined
  customer?: ContactPerson | ContactOrganization | undefined
  discount?:
    | {
        amount?: number | undefined
        name?: string | undefined
        percent?: number | undefined
        value?: number | undefined
      }
    | undefined
  downpayment_request?: { amount?: number | undefined; percent?: number | undefined } | undefined
  email_sent_at?: (string | null) | undefined
  id?: number | undefined
  imported_at?: (string | null) | undefined
  legal_notice?: string | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  note?: (string | null) | undefined
  number?: string | undefined
  reference?: string | undefined
  tags?: { [x: string]: unknown }[] | undefined
  third_account?:
    | {
        address?: string | undefined
        id?: number | undefined
        location?: string | undefined
        name?: string | undefined
        type?: 'organization' | 'person' | undefined
      }
    | undefined
  title?: string | undefined
  totals?:
    | {
        due?: number | undefined
        subtotal?:
          | {
              by_account?: { [x: string]: unknown }[] | undefined
              by_vat?: { [x: string]: unknown }[] | undefined
              total?: number | undefined
            }
          | undefined
        taxes?:
          | {
              total?: number | undefined
              vat?:
                | {
                    by_account?: { [x: string]: unknown }[] | undefined
                    by_vat?: { [x: string]: unknown }[] | undefined
                    total?: number | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  validated_at?: (string | null) | undefined
  vat_exemption?:
    | { article?: string | undefined; exempted?: boolean | undefined; reason?: string | undefined }
    | undefined
  written_at?: string | undefined
  commercialvalidity_deadline?: (string | null) | undefined
  status?:
    | 'draft'
    | 'waiting'
    | 'goodforagreement'
    | 'refused'
    | 'transformed'
    | 'deleted'
    | undefined
}
type ProductCategory = {
  id?: number | undefined
  image?: File | string | undefined
  name?: string | undefined
  parent?: ProductCategory | undefined
  products?: Product | undefined
}
type Product = {
  accounting_number?: string | undefined
  amount_accurately?: number | undefined
  category?: ProductCategory | undefined
  currency?: string | undefined
  description?: string | undefined
  id?: number | undefined
  image?: File | string | undefined
  intangible?: boolean | undefined
  lifetime?: number | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  name?: string | undefined
  quantity_name?: string | undefined
  reference?: string | undefined
  tags?: string[] | undefined
  unity?: string | undefined
  vat_percent?: number | undefined
}
type ProductStocksMovement = {
  description?: string | undefined
  future_return_date?: string | undefined
  id?: number | undefined
  invoice?: Invoice | undefined
  moved_at?: string | undefined
  product_stock?: ProductStock | undefined
  quantity?: number | undefined
  type?: 'buy' | 'sell' | 'back' | 'temporaryexit' | 'destruct' | undefined
  use_duration?: number | undefined
}
type Purchase = {
  account?: Account | undefined
  accounted_at?: string | undefined
  amount?: number | undefined
  amount_net_foreign_currency?: number | undefined
  amount_tax?: number | undefined
  balance?: Balance | undefined
  billed_at?: string | undefined
  comment?: string | undefined
  completed_at?: string | undefined
  foreign_currency?: string | undefined
  id?: number | undefined
  is_late?: boolean | undefined
  md5?: string | undefined
  paid_at?: string | undefined
  payment_account_number?: string | undefined
  payment_deadline_at?: string | undefined
  payment_iban?: string | undefined
  payment_routing_number?: string | undefined
  payment_swift?: string | undefined
  picture?: string | undefined
  status?: 'new' | 'completed' | 'paid' | undefined
  supplier?: ContactOrganization | undefined
  supplier_name?: string | undefined
  tags?: string[] | undefined
  title?: string | undefined
  vat_detail?: { [x: string]: unknown } | undefined
  vat_repayment?: 'payment' | 'billing' | undefined
  will_be_late_at?: string | undefined
}
type ProductStock = {
  bar_code?: number | undefined
  cost_amount?: number | undefined
  entered_at?: number | undefined
  expired_at?: number | undefined
  id?: number | undefined
  initial_quantity?: number | undefined
  location?: number | undefined
  product?: Product | undefined
  product_stocks_movements?: ProductStocksMovement[] | undefined
  purchase?: Purchase | undefined
  quantity_in?: number | undefined
  quantity_out?: number | undefined
  sales_lines?: SalesLine[] | undefined
  use_duration?: number | undefined
}
type SalesLine = {
  account?: { [x: string]: unknown } | undefined
  action?: 'sell' | 'rent' | undefined
  amount?: number | undefined
  amount_accurately?: number | undefined
  amount_with_taxes?: boolean | undefined
  detail?: string | undefined
  discount?: { amount?: number | undefined; percent?: number | undefined } | undefined
  document?: Invoice | Quote | undefined
  id?: number | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  product?: Product | undefined
  quantity?: number | undefined
  stock?: ProductStock | undefined
  style?:
    | {
        position?: number | undefined
        section_id?: number | undefined
        type?: 'section' | 'description' | 'product' | undefined
      }
    | undefined
  total_quantity?: string | undefined
  totals?:
    | { due?: number | undefined; subtotal?: number | undefined; taxes?: number | undefined }
    | undefined
  unity?: string | undefined
  vat_percent?: number | undefined
}
type RecurringInvoice = {
  attachments?: string[] | undefined
  author?: User | undefined
  balance?: Balance | undefined
  bank_detail?: BankDetails | undefined
  columns?:
    | {
        amount?: string | undefined
        designation?: string | undefined
        discount?: string | undefined
        due?: string | undefined
        info_total_quantity?: string | undefined
        quantity?: string | undefined
        quantity_name?: string | undefined
        subtotal?: string | undefined
        vat_percent?: string | undefined
      }
    | undefined
  contact_infos?:
    | {
        address?: string | undefined
        address2?: string | undefined
        details?: string | undefined
        id?: number | undefined
        location?: string | undefined
        name?: string | undefined
        type?: 'organization' | 'person' | undefined
      }
    | undefined
  content?: SalesLine[] | undefined
  currency?: string | undefined
  customer?: ContactPerson | ContactOrganization | undefined
  discount?: number | undefined
  downpayment_request?: { amount?: number | undefined; percent?: number | undefined } | undefined
  email_sent_at?: (string | null) | undefined
  id?: number | undefined
  imported_at?: (string | null) | undefined
  legal_notice?: string | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  note?: (string | null) | undefined
  number?: string | undefined
  reference?: string | undefined
  tags?: { [x: string]: unknown }[] | undefined
  third_account?:
    | {
        address?: string | undefined
        id?: number | undefined
        location?: string | undefined
        name?: string | undefined
        type?: 'organization' | 'person' | undefined
      }
    | undefined
  title?: string | undefined
  totals?:
    | {
        due?: number | undefined
        subtotal?:
          | {
              by_account?: { [x: string]: unknown }[] | undefined
              by_vat?: { [x: string]: unknown }[] | undefined
              total?: number | undefined
            }
          | undefined
        taxes?:
          | {
              total?: number | undefined
              vat?:
                | {
                    by_account?: { [x: string]: unknown }[] | undefined
                    by_vat?: { [x: string]: unknown }[] | undefined
                    total?: number | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  validated_at?: (string | null) | undefined
  vat_exemption?:
    | { article?: string | undefined; exempted?: boolean | undefined; reason?: string | undefined }
    | undefined
  written_at?: string | undefined
  discount_end_at?: (string | null) | undefined
  discount_mode?: string | undefined
  discount_start_at?: (string | null) | undefined
  end_at?: (string | null) | undefined
  frequency_count?: number | undefined
  frequency_duration?: string | undefined
  next_invoice_at?: (string | null) | undefined
  orders_plan?: { end_at?: (string | null) | undefined; model?: number | undefined }[] | undefined
  saving_status?: string | undefined
}
type Invoice = {
  attachments?: string[] | undefined
  author?: User | undefined
  balance?: Balance | undefined
  bank_detail?: BankDetails | undefined
  columns?:
    | {
        amount?: string | undefined
        designation?: string | undefined
        discount?: string | undefined
        due?: string | undefined
        info_total_quantity?: string | undefined
        quantity?: string | undefined
        quantity_name?: string | undefined
        subtotal?: string | undefined
        vat_percent?: string | undefined
      }
    | undefined
  contact_infos?:
    | {
        address?: string | undefined
        address2?: string | undefined
        details?: string | undefined
        id?: number | undefined
        location?: string | undefined
        name?: string | undefined
        type?: 'organization' | 'person' | undefined
      }
    | undefined
  content?: SalesLine[] | undefined
  currency?: string | undefined
  customer?: ContactPerson | ContactOrganization | undefined
  discount?:
    | {
        amount?: number | undefined
        name?: string | undefined
        percent?: number | undefined
        value?: number | undefined
      }
    | undefined
  downpayment_request?: { amount?: number | undefined; percent?: number | undefined } | undefined
  email_sent_at?: (string | null) | undefined
  id?: number | undefined
  imported_at?: (string | null) | undefined
  legal_notice?: string | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  note?: (string | null) | undefined
  number?: string | undefined
  reference?: string | undefined
  tags?: { [x: string]: unknown }[] | undefined
  third_account?:
    | {
        address?: string | undefined
        id?: number | undefined
        location?: string | undefined
        name?: string | undefined
        type?: 'organization' | 'person' | undefined
      }
    | undefined
  title?: string | undefined
  totals?:
    | {
        due?: number | undefined
        subtotal?:
          | {
              by_account?: { [x: string]: unknown }[] | undefined
              by_vat?: { [x: string]: unknown }[] | undefined
              total?: number | undefined
            }
          | undefined
        taxes?:
          | {
              total?: number | undefined
              vat?:
                | {
                    by_account?: { [x: string]: unknown }[] | undefined
                    by_vat?: { [x: string]: unknown }[] | undefined
                    total?: number | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  validated_at?: (string | null) | undefined
  vat_exemption?:
    | { article?: string | undefined; exempted?: boolean | undefined; reason?: string | undefined }
    | undefined
  written_at?: string | undefined
  avoid_of?: Invoice | undefined
  delivered_at?: (string | null) | undefined
  downpayments?: Invoice[] | undefined
  invoice_of?: Quote | undefined
  paid_at?: string | undefined
  payment_methods?: string | undefined
  payment_period?: number | undefined
  related_recurring_invoice?: RecurringInvoice | undefined
  sepa_direct_debit_exported_at?: (string | null) | undefined
  status?: 'draft' | 'final' | 'paid' | undefined
}
type Transaction = {
  amount?: number | undefined
  author?: User | undefined
  cashflow_source?: CashflowSource | undefined
  contact?: ContactPerson | ContactOrganization | undefined
  created_at?: string | undefined
  deleted_at?: string | undefined
  details?: number | undefined
  id?: number | undefined
  label?: number | undefined
  lettered_at?: string | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  method?: number | undefined
  received_at?: string | undefined
  updated_at?: string | undefined
}
type Payment = {
  amount?: number | undefined
  date?: string | undefined
  document?: Invoice | Purchase | undefined
  document_type?: 'sales' | 'purchase' | undefined
  id?: number | undefined
  source?: 'bank' | 'cashdesk' | 'creditnote' | undefined
  transaction?: Transaction | undefined
}
type Reconciliation = {
  id?: number | undefined
  movements?:
    | { amount?: number | undefined; id?: number | undefined; type?: 'account' | undefined }[]
    | undefined
  replace_all?: boolean | undefined
  type?: 'transaction' | undefined
}
type Relationship = {
  accounting_infos?:
    | {
        balance_initial_amount?: number | undefined
        customer_id?: string | undefined
        reference?: (string | null) | undefined
        supplier_id?: string | undefined
      }
    | undefined
  id?: number | undefined
  importance_level?: (number | null) | undefined
  is_customer?: boolean | undefined
  is_notifying?: boolean | undefined
  is_prospect?: boolean | undefined
  is_supplier?: boolean | undefined
  metadata?: ({ [x: string]: unknown }[] | null) | undefined
  note?: (string | null) | undefined
  rating?: (number | null) | undefined
}
type Rule = {
  conditions?: string[][] | undefined
  id?: number | undefined
  on_event?: string | undefined
  parameter?: string | undefined
  priority?: number | undefined
  value?: string | undefined
}
type SalesDocumentModel = {
  id?: number | undefined
  json?: SalesLine[] | undefined
  name?: string | undefined
  title?: string | undefined
}
type SEPAMandate = {
  author?: User | undefined
  bic?: string | undefined
  created_at?: string | undefined
  customer?: ContactPerson | ContactOrganization | undefined
  customer_name?: string | undefined
  electronic_signature?: string | undefined
  iban?: string | undefined
  id?: number | undefined
  is_first?: number | undefined
  last_debit_amount?: number | undefined
  last_debit_at?: string | undefined
  last_debit_id?: number | undefined
  logs_sepa_direct_debits?: string | undefined
  mandate_id?: number | undefined
  old_mandate_id?: number | undefined
  signed_at?: string | undefined
  updated_at?: string | undefined
}
type JsonWebToken = {
  access_token?: string | undefined
  expires_in?: number | undefined
  token_type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: App[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { query: { organization_name: string } }
            output: App
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { organization_name: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/apps/access/invite/:accessToken': {
      $delete:
        | {
            input: { param: { accessToken: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessToken: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accessToken: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { accessToken: string } }
            output: AccessInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessToken: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/access/invite/:accessToken/register': {
      $post:
        | {
            input: { param: { accessToken: string } } & {
              query: {
                password: string
                firstname?: string | undefined
                lastname?: string | undefined
                cgu: boolean
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessToken: string } } & {
              query: {
                password: string
                firstname?: string | undefined
                lastname?: string | undefined
                cgu: boolean
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accessToken: string } } & {
              query: {
                password: string
                firstname?: string | undefined
                lastname?: string | undefined
                cgu: boolean
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accessToken: string } } & {
              query: {
                password: string
                firstname?: string | undefined
                lastname?: string | undefined
                cgu: boolean
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId': {
      $get:
        | { input: { param: { appId: number } }; output: App; outputFormat: 'json'; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/access': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: PolicyProfile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/access/invite': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: AccessInvitation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                email: string
                policy_profile_id: number
                firstname?: string | undefined
                lastname?: string | undefined
                civility?: string | undefined
                password?: string | undefined
              }
            }
            output: AccessInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                email: string
                policy_profile_id: number
                firstname?: string | undefined
                lastname?: string | undefined
                civility?: string | undefined
                password?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                email: string
                policy_profile_id: number
                firstname?: string | undefined
                lastname?: string | undefined
                civility?: string | undefined
                password?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/access/invite/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/access/profiles': {
      $get: {
        input: { param: { appId: number } }
        output: PolicyProfile[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:appId/access/:userId': {
      $delete:
        | {
            input: { param: { appId: number; userId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; userId: string } }
            output: PolicyProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; userId: string } } & {
              query: { policy_profile_id: number }
            }
            output: PolicyProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; userId: string } } & {
              query: { policy_profile_id: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/accountcategories/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: AccountCategory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                description?: string | undefined
                type?: string | undefined
              }
            }
            output: AccountCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                description?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/accountcategories/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: AccountCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                description?: string | undefined
                type?: string | undefined
              }
            }
            output: AccountCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                description?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                description?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/accounting_entries/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/accounts/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                journalcode?: string | undefined
                name?: string | undefined
                description?: string | undefined
                keywords?: string | undefined
                accounting_number?: string | undefined
                is_cashflow?: boolean | undefined
                is_sales?: boolean | undefined
                is_purchase?: boolean | undefined
              }
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                journalcode?: string | undefined
                name?: string | undefined
                description?: string | undefined
                keywords?: string | undefined
                accounting_number?: string | undefined
                is_cashflow?: boolean | undefined
                is_sales?: boolean | undefined
                is_purchase?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/accounts/batch': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Account[] } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Account[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Account[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/accounts/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                journalcode?: string | undefined
                name?: string | undefined
                description?: string | undefined
                keywords?: string | undefined
                accounting_number?: string | undefined
                is_cashflow?: boolean | undefined
                is_sales?: boolean | undefined
                is_purchase?: boolean | undefined
              }
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                journalcode?: string | undefined
                name?: string | undefined
                description?: string | undefined
                keywords?: string | undefined
                accounting_number?: string | undefined
                is_cashflow?: boolean | undefined
                is_sales?: boolean | undefined
                is_purchase?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                journalcode?: string | undefined
                name?: string | undefined
                description?: string | undefined
                keywords?: string | undefined
                accounting_number?: string | undefined
                is_cashflow?: boolean | undefined
                is_sales?: boolean | undefined
                is_purchase?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/apikeys': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: { name: string; api_partner_id?: (number | null) | undefined }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { name: string; api_partner_id?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/apikeys/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/apipartners': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/attachments': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                type: 'none' | 'purchase' | 'invoice' | 'quote' | 'transaction' | 'relationship'
                attachable_id?: number | undefined
                file?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                type: 'none' | 'purchase' | 'invoice' | 'quote' | 'transaction' | 'relationship'
                attachable_id?: number | undefined
                file?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                type: 'none' | 'purchase' | 'invoice' | 'quote' | 'transaction' | 'relationship'
                attachable_id?: number | undefined
                file?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/apps/:appId/attachments/download': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { ids: string; type: 'sap' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: string; type: 'sap' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: string; type: 'sap' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/attachments/sap-download': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { ids: string; type: 'sap' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: string; type: 'sap' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: string; type: 'sap' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/attachments/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/attachments/:id/pdf': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & { query: { random: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { random: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { random: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/bankdetails': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: BankDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
              }
            }
            output: BankDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/bankdetails/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: BankDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
              }
            }
            output: BankDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/banks/': {
      $delete:
        | {
            input: { param: { appId: number } } & { query: { item_id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { item_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/banks/connect': {
      $get:
        | {
            input: { param: { appId: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/banks/synchronize': {
      $post:
        | {
            input: { param: { appId: number } } & {
              query: { id?: number | undefined; is_incremential?: boolean | undefined }
            }
            output: CashflowSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { id?: number | undefined; is_incremential?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/banks/:id/funnel/edit': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/banks/:id/funnel/sync': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/banks/:id/funnel/validate': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/banks/:id/select_accounts': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { bank_account_ids?: (number[] | null) | undefined }
            }
            output: CashflowSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { bank_account_ids?: (number[] | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/cashflowsources/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: CashflowSource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                identifiant?: string | undefined
                type?: 'bank' | 'cashdesk' | 'waiting' | undefined
                balance_amount?: number | undefined
                account_type?:
                  | 'checking'
                  | 'card'
                  | 'savings'
                  | 'special'
                  | 'securities'
                  | 'loan'
                  | 'life_insurance'
                  | 'unknown'
                  | 'pending'
                  | 'share_savings_plan'
                  | undefined
                parent_cashflow_source_id?: number | undefined
              }
            }
            output: CashflowSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                identifiant?: string | undefined
                type?: 'bank' | 'cashdesk' | 'waiting' | undefined
                balance_amount?: number | undefined
                account_type?:
                  | 'checking'
                  | 'card'
                  | 'savings'
                  | 'special'
                  | 'securities'
                  | 'loan'
                  | 'life_insurance'
                  | 'unknown'
                  | 'pending'
                  | 'share_savings_plan'
                  | undefined
                parent_cashflow_source_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/cashflowsources/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: CashflowSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                identifiant?: string | undefined
                type?: 'bank' | 'cashdesk' | 'waiting' | undefined
                balance_amount?: number | undefined
                account_type?:
                  | 'checking'
                  | 'card'
                  | 'savings'
                  | 'special'
                  | 'securities'
                  | 'loan'
                  | 'life_insurance'
                  | 'unknown'
                  | 'pending'
                  | 'share_savings_plan'
                  | undefined
                parent_cashflow_source_id?: number | undefined
              }
            }
            output: CashflowSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                identifiant?: string | undefined
                type?: 'bank' | 'cashdesk' | 'waiting' | undefined
                balance_amount?: number | undefined
                account_type?:
                  | 'checking'
                  | 'card'
                  | 'savings'
                  | 'special'
                  | 'securities'
                  | 'loan'
                  | 'life_insurance'
                  | 'unknown'
                  | 'pending'
                  | 'share_savings_plan'
                  | undefined
                parent_cashflow_source_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                identifiant?: string | undefined
                type?: 'bank' | 'cashdesk' | 'waiting' | undefined
                balance_amount?: number | undefined
                account_type?:
                  | 'checking'
                  | 'card'
                  | 'savings'
                  | 'special'
                  | 'securities'
                  | 'loan'
                  | 'life_insurance'
                  | 'unknown'
                  | 'pending'
                  | 'share_savings_plan'
                  | undefined
                parent_cashflow_source_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/contacts/merge': {
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                contacts:
                  | { id?: number | undefined; type?: 'organization' | 'person' | undefined }[]
                  | null
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                contacts:
                  | { id?: number | undefined; type?: 'organization' | 'person' | undefined }[]
                  | null
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                contacts:
                  | { id?: number | undefined; type?: 'organization' | 'person' | undefined }[]
                  | null
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/email/batch': {
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                from?: string | undefined
                messages?:
                  | {
                      content?: string | undefined
                      documents?:
                        | {
                            id?: number | undefined
                            type?: 'invoice' | 'quote' | 'attachment' | undefined
                          }[]
                        | undefined
                      recipients?: string[] | undefined
                      recipients_bcc?: string[] | undefined
                      recipients_cc?: string[] | undefined
                      title?: string | undefined
                    }[]
                  | undefined
                need_copy_bcc?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                from?: string | undefined
                messages?:
                  | {
                      content?: string | undefined
                      documents?:
                        | {
                            id?: number | undefined
                            type?: 'invoice' | 'quote' | 'attachment' | undefined
                          }[]
                        | undefined
                      recipients?: string[] | undefined
                      recipients_bcc?: string[] | undefined
                      recipients_cc?: string[] | undefined
                      title?: string | undefined
                    }[]
                  | undefined
                need_copy_bcc?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                from?: string | undefined
                messages?:
                  | {
                      content?: string | undefined
                      documents?:
                        | {
                            id?: number | undefined
                            type?: 'invoice' | 'quote' | 'attachment' | undefined
                          }[]
                        | undefined
                      recipients?: string[] | undefined
                      recipients_bcc?: string[] | undefined
                      recipients_cc?: string[] | undefined
                      title?: string | undefined
                    }[]
                  | undefined
                need_copy_bcc?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/email/document': {
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                from?: string | undefined
                recipients: string[]
                recipients_cc?: string[] | undefined
                recipients_bcc?: string[] | undefined
                title?: string | undefined
                body?: string | undefined
                documents: {
                  id?: number | undefined
                  type?: 'invoice' | 'quote' | 'attachment' | undefined
                }[]
                need_copy_bcc?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                from?: string | undefined
                recipients: string[]
                recipients_cc?: string[] | undefined
                recipients_bcc?: string[] | undefined
                title?: string | undefined
                body?: string | undefined
                documents: {
                  id?: number | undefined
                  type?: 'invoice' | 'quote' | 'attachment' | undefined
                }[]
                need_copy_bcc?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                from?: string | undefined
                recipients: string[]
                recipients_cc?: string[] | undefined
                recipients_bcc?: string[] | undefined
                title?: string | undefined
                body?: string | undefined
                documents: {
                  id?: number | undefined
                  type?: 'invoice' | 'quote' | 'attachment' | undefined
                }[]
                need_copy_bcc?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/establishments/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: EstablishmentIdentity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                phones?: string[] | undefined
                emails?: string[] | undefined
                nic?: (string | null) | undefined
                place?:
                  | {
                      administrative_area_level1?: string | undefined
                      administrative_area_level2?: string | undefined
                      administrative_area_level3?: string | undefined
                      country?: string | undefined
                      countryiso2?: string | undefined
                      formatted_address?: string | undefined
                      latitude?: number | undefined
                      locality?: string | undefined
                      longitude?: number | undefined
                      postal_code?: string | undefined
                      route?: string | undefined
                      route2?: string | undefined
                      street_number?: string | undefined
                      sublocality?: string | undefined
                    }
                  | undefined
              }
            }
            output: EstablishmentIdentity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                phones?: string[] | undefined
                emails?: string[] | undefined
                nic?: (string | null) | undefined
                place?:
                  | {
                      administrative_area_level1?: string | undefined
                      administrative_area_level2?: string | undefined
                      administrative_area_level3?: string | undefined
                      country?: string | undefined
                      countryiso2?: string | undefined
                      formatted_address?: string | undefined
                      latitude?: number | undefined
                      locality?: string | undefined
                      longitude?: number | undefined
                      postal_code?: string | undefined
                      route?: string | undefined
                      route2?: string | undefined
                      street_number?: string | undefined
                      sublocality?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                phones?: string[] | undefined
                emails?: string[] | undefined
                nic?: (string | null) | undefined
                place?:
                  | {
                      administrative_area_level1?: string | undefined
                      administrative_area_level2?: string | undefined
                      administrative_area_level3?: string | undefined
                      country?: string | undefined
                      countryiso2?: string | undefined
                      formatted_address?: string | undefined
                      latitude?: number | undefined
                      locality?: string | undefined
                      longitude?: number | undefined
                      postal_code?: string | undefined
                      route?: string | undefined
                      route2?: string | undefined
                      street_number?: string | undefined
                      sublocality?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/exports': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: ExportEntity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & { query: { until: string } }
            output: ExportEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { until: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/exports/acd_compta': {
      $get:
        | {
            input: { param: { appId: number } }
            output: { uuid?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: { login: string; password: string; base: string; cnx: string }
            }
            output: { uuid?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { login: string; password: string; base: string; cnx: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { login: string; password: string; base: string; cnx: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/exports/download': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                format?: 'universal' | 'quadra' | 'fiducial' | 'acd' | undefined
                export_entities_ids?: number[] | undefined
                start_at?: string | undefined
                end_at?: string | undefined
                since?: string | undefined
                since_last?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                format?: 'universal' | 'quadra' | 'fiducial' | 'acd' | undefined
                export_entities_ids?: number[] | undefined
                start_at?: string | undefined
                end_at?: string | undefined
                since?: string | undefined
                since_last?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                format?: 'universal' | 'quadra' | 'fiducial' | 'acd' | undefined
                export_entities_ids?: number[] | undefined
                start_at?: string | undefined
                end_at?: string | undefined
                since?: string | undefined
                since_last?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/exports/months': {
      $get:
        | {
            input: { param: { appId: number } }
            output: ExportEntity[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/exports/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ExportEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Invoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: (string | null) | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayments?: (number[] | null) | undefined
                downpayment_cash?: (number | null) | undefined
                avoid_of?: (number | null) | undefined
                delivered_at?: (string | null) | undefined
                payment_period?: (number | null) | undefined
                payment_methods?: string | undefined
                number_from_other_software?: string | undefined
              }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: (string | null) | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayments?: (number[] | null) | undefined
                downpayment_cash?: (number | null) | undefined
                avoid_of?: (number | null) | undefined
                delivered_at?: (string | null) | undefined
                payment_period?: (number | null) | undefined
                payment_methods?: string | undefined
                number_from_other_software?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/batch': {
      $delete:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Invoice[] } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Invoice[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Invoice[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/download': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: { ids: number[]; template?: 'delivery' | 'command' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { ids: number[]; template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { ids: number[]; template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/fresh': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/nextnumber': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { written_at?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { written_at?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/apps/:appId/invoices/statistics': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: (string | null) | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayments?: (number[] | null) | undefined
                downpayment_cash?: (number | null) | undefined
                avoid_of?: (number | null) | undefined
                delivered_at?: (string | null) | undefined
                payment_period?: (number | null) | undefined
                payment_methods?: string | undefined
              }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: (string | null) | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayments?: (number[] | null) | undefined
                downpayment_cash?: (number | null) | undefined
                avoid_of?: (number | null) | undefined
                delivered_at?: (string | null) | undefined
                payment_period?: (number | null) | undefined
                payment_methods?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: (string | null) | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayments?: (number[] | null) | undefined
                downpayment_cash?: (number | null) | undefined
                avoid_of?: (number | null) | undefined
                delivered_at?: (string | null) | undefined
                payment_period?: (number | null) | undefined
                payment_methods?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/attach': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/avoid': {
      $post:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/duplicate': {
      $post:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/finalize': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { force_date?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { force_date?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { force_date?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/pdf': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/preview.jpg': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                template?: (string | null) | undefined
                disable_cache?: (boolean | null) | undefined
                base64?: (boolean | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                template?: (string | null) | undefined
                disable_cache?: (boolean | null) | undefined
                base64?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                template?: (string | null) | undefined
                disable_cache?: (boolean | null) | undefined
                base64?: (boolean | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/tag': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/invoices/:id/updatestatus': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { status?: 'draft' | 'final' | 'paid' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { status?: 'draft' | 'final' | 'paid' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { status?: 'draft' | 'final' | 'paid' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/logs/autoreconcile/': {
      $delete:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/organization': {
      $get:
        | {
            input: { param: { appId: number } }
            output: SinaoOrganization[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                trade_directory_registration?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                industry?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                sap_number_registration?: (string | null) | undefined
                sap_activities?: (string | null) | undefined
                sap_date_registration?: (string | null) | undefined
                capital?: number | undefined
              }
            }
            output: SinaoOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                trade_directory_registration?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                industry?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                sap_number_registration?: (string | null) | undefined
                sap_activities?: (string | null) | undefined
                sap_date_registration?: (string | null) | undefined
                capital?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                trade_directory_registration?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                industry?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                sap_number_registration?: (string | null) | undefined
                sap_activities?: (string | null) | undefined
                sap_date_registration?: (string | null) | undefined
                capital?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/organizations': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: ContactOrganization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                vat_system?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                capital?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: ContactOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                vat_system?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                capital?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                vat_system?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                capital?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/organizations/batch': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: ContactOrganization[] } }
            output: ContactOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: ContactOrganization[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: ContactOrganization[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/organizations/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ContactOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                vat_system?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                capital?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: ContactOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                vat_system?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                capital?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                billing_name?: string | undefined
                logo?: string | string | undefined
                legal_form?: string | undefined
                country_iso2?: string | undefined
                founding_date?: string | undefined
                founding_location?: string | undefined
                dissolution_date?: string | undefined
                vat_system?: string | undefined
                closeaccounting_period?: string | undefined
                national_id?: string | undefined
                vat_id?: (string | null) | undefined
                code_naf?: (string | null) | undefined
                number_of_employees?: string | undefined
                slogan?: string | undefined
                rcs?: string | undefined
                greffe?: string | undefined
                capital?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/organizations/:id/restore': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ContactOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/payments': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Payment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/payments/recipe_book': {
      $get:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/payments/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/persons': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: ContactPerson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                civility?: string | undefined
                lastname: string
                firstname?: string | undefined
                picture?: string | string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: ContactPerson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                civility?: string | undefined
                lastname: string
                firstname?: string | undefined
                picture?: string | string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                civility?: string | undefined
                lastname: string
                firstname?: string | undefined
                picture?: string | string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/persons/batch': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: ContactPerson[] } }
            output: ContactPerson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: ContactPerson[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: ContactPerson[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/persons/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ContactPerson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                civility?: (string | null) | undefined
                lastname?: string | undefined
                firstname?: string | undefined
                picture?: string | string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: ContactPerson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                civility?: (string | null) | undefined
                lastname?: string | undefined
                firstname?: string | undefined
                picture?: string | string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                civility?: (string | null) | undefined
                lastname?: string | undefined
                firstname?: string | undefined
                picture?: string | string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/persons/:id/restore': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ContactPerson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/ping': {
      $get:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 405 }
    }
  } & {
    '/apps/:appId/productcategory': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: ProductCategory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                image?: File | string | undefined
                parent_category_id?: number | undefined
              }
            }
            output: ProductCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                image?: File | string | undefined
                parent_category_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/productcategory/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ProductCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name: string
                image?: File | string | undefined
                parent_category_id?: number | undefined
              }
            }
            output: ProductCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name: string
                image?: File | string | undefined
                parent_category_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name: string
                image?: File | string | undefined
                parent_category_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/products': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Product[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                amount?: number | undefined
                amount_accurately?: number | undefined
                vat_percent?: number | undefined
                image?: File | string | undefined
                lifetime?: number | undefined
                description?: string | undefined
                type?: 'product' | 'service' | undefined
                quantity_name?: string | undefined
                reference?: string | undefined
                account_id?: string | undefined
                tags?: { [x: string]: unknown }[] | undefined
                category_id?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name: string
                amount?: number | undefined
                amount_accurately?: number | undefined
                vat_percent?: number | undefined
                image?: File | string | undefined
                lifetime?: number | undefined
                description?: string | undefined
                type?: 'product' | 'service' | undefined
                quantity_name?: string | undefined
                reference?: string | undefined
                account_id?: string | undefined
                tags?: { [x: string]: unknown }[] | undefined
                category_id?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/products/batch': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Product[] } }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Product[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Product[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/products/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                amount?: number | undefined
                amount_accurately?: number | undefined
                vat_percent?: number | undefined
                image?: File | string | undefined
                lifetime?: number | undefined
                description?: string | undefined
                type?: 'product' | 'service' | undefined
                quantity_name?: string | undefined
                reference?: string | undefined
                account_id?: string | undefined
                tags?: { [x: string]: unknown }[] | undefined
                category_id?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                amount?: number | undefined
                amount_accurately?: number | undefined
                vat_percent?: number | undefined
                image?: File | string | undefined
                lifetime?: number | undefined
                description?: string | undefined
                type?: 'product' | 'service' | undefined
                quantity_name?: string | undefined
                reference?: string | undefined
                account_id?: string | undefined
                tags?: { [x: string]: unknown }[] | undefined
                category_id?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                amount?: number | undefined
                amount_accurately?: number | undefined
                vat_percent?: number | undefined
                image?: File | string | undefined
                lifetime?: number | undefined
                description?: string | undefined
                type?: 'product' | 'service' | undefined
                quantity_name?: string | undefined
                reference?: string | undefined
                account_id?: string | undefined
                tags?: { [x: string]: unknown }[] | undefined
                category_id?: number | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/products/:id/attach': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/productstocks': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: ProductStock[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                product_id: number
                purchase_id?: number | undefined
                quantity?: number | undefined
                bar_code?: string | undefined
                location?: string | undefined
                entered_at?: string | undefined
                expired_at?: string | undefined
                cost_amount?: number | undefined
                use_duration?: number | undefined
              }
            }
            output: ProductStock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                product_id: number
                purchase_id?: number | undefined
                quantity?: number | undefined
                bar_code?: string | undefined
                location?: string | undefined
                entered_at?: string | undefined
                expired_at?: string | undefined
                cost_amount?: number | undefined
                use_duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/productstocks/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: ProductStock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                purchase_id?: number | undefined
                bar_code?: string | undefined
                location?: string | undefined
                entered_at?: string | undefined
                expired_at?: string | undefined
                cost_amount?: number | undefined
                use_duration?: number | undefined
              }
            }
            output: ProductStock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                purchase_id?: number | undefined
                bar_code?: string | undefined
                location?: string | undefined
                entered_at?: string | undefined
                expired_at?: string | undefined
                cost_amount?: number | undefined
                use_duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                purchase_id?: number | undefined
                bar_code?: string | undefined
                location?: string | undefined
                entered_at?: string | undefined
                expired_at?: string | undefined
                cost_amount?: number | undefined
                use_duration?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/productstocks/:id/destruct': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { quantity?: number | undefined; comment?: string | undefined }
            }
            output: ProductStock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { quantity?: number | undefined; comment?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { quantity?: number | undefined; comment?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/productstocks/:id/rental/back': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                quantity: number
                current_return_date?: string | undefined
                use_duration?: number | undefined
                comment?: string | undefined
              }
            }
            output: ProductStock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                quantity: number
                current_return_date?: string | undefined
                use_duration?: number | undefined
                comment?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                quantity: number
                current_return_date?: string | undefined
                use_duration?: number | undefined
                comment?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/productstocks/:id/rental/exit': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                quantity?: number | undefined
                future_return_date?: string | undefined
                comment?: string | undefined
              }
            }
            output: ProductStock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                quantity?: number | undefined
                future_return_date?: string | undefined
                comment?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                quantity?: number | undefined
                future_return_date?: string | undefined
                comment?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
                expand?: ('account' | 'supplier' | 'balance')[] | undefined
              }
            }
            output: Purchase[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
                expand?: ('account' | 'supplier' | 'balance')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                invoice?: File | undefined
                account_id?: number | undefined
                supplier_organization_id?: number | undefined
                title?: string | undefined
                supplier_name?: string | undefined
                amount?: number | undefined
                amount_tax?: number | undefined
                currency?: string | undefined
                vat_detail?: { [x: string]: unknown } | undefined
                billed_at?: string | undefined
                comment?: number | undefined
                tags?: { [x: string]: unknown }[] | undefined
                vat_repayment?: 'payment' | 'billing' | undefined
                payment_deadline_at?: (string | null) | undefined
                payment_account_number?: (string | null) | undefined
                payment_routing_number?: (string | null) | undefined
                payment_swift?: (string | null) | undefined
                payment_iban?: (string | null) | undefined
              }
            }
            output: Purchase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                invoice?: File | undefined
                account_id?: number | undefined
                supplier_organization_id?: number | undefined
                title?: string | undefined
                supplier_name?: string | undefined
                amount?: number | undefined
                amount_tax?: number | undefined
                currency?: string | undefined
                vat_detail?: { [x: string]: unknown } | undefined
                billed_at?: string | undefined
                comment?: number | undefined
                tags?: { [x: string]: unknown }[] | undefined
                vat_repayment?: 'payment' | 'billing' | undefined
                payment_deadline_at?: (string | null) | undefined
                payment_account_number?: (string | null) | undefined
                payment_routing_number?: (string | null) | undefined
                payment_swift?: (string | null) | undefined
                payment_iban?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/batch': {
      $delete:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Purchase[] } }
            output: Purchase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Purchase[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Purchase[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/download': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/statistics': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Purchase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                account_id?: number | undefined
                supplier_organization_id?: number | undefined
                title?: string | undefined
                supplier_name?: string | undefined
                amount?: number | undefined
                amount_tax?: number | undefined
                currency?: string | undefined
                vat_detail?: { [x: string]: unknown } | undefined
                billed_at?: string | undefined
                comment?: number | undefined
                tags?: { [x: string]: unknown }[] | undefined
                vat_repayment?: 'payment' | 'billing' | undefined
                payment_deadline_at?: (string | null) | undefined
                payment_account_number?: (string | null) | undefined
                payment_routing_number?: (string | null) | undefined
                payment_swift?: (string | null) | undefined
                payment_iban?: (string | null) | undefined
                purchase_lines?:
                  | { account_id?: number | undefined; amount?: number | undefined }[]
                  | undefined
              }
            }
            output: Purchase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                account_id?: number | undefined
                supplier_organization_id?: number | undefined
                title?: string | undefined
                supplier_name?: string | undefined
                amount?: number | undefined
                amount_tax?: number | undefined
                currency?: string | undefined
                vat_detail?: { [x: string]: unknown } | undefined
                billed_at?: string | undefined
                comment?: number | undefined
                tags?: { [x: string]: unknown }[] | undefined
                vat_repayment?: 'payment' | 'billing' | undefined
                payment_deadline_at?: (string | null) | undefined
                payment_account_number?: (string | null) | undefined
                payment_routing_number?: (string | null) | undefined
                payment_swift?: (string | null) | undefined
                payment_iban?: (string | null) | undefined
                purchase_lines?:
                  | { account_id?: number | undefined; amount?: number | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                account_id?: number | undefined
                supplier_organization_id?: number | undefined
                title?: string | undefined
                supplier_name?: string | undefined
                amount?: number | undefined
                amount_tax?: number | undefined
                currency?: string | undefined
                vat_detail?: { [x: string]: unknown } | undefined
                billed_at?: string | undefined
                comment?: number | undefined
                tags?: { [x: string]: unknown }[] | undefined
                vat_repayment?: 'payment' | 'billing' | undefined
                payment_deadline_at?: (string | null) | undefined
                payment_account_number?: (string | null) | undefined
                payment_routing_number?: (string | null) | undefined
                payment_swift?: (string | null) | undefined
                payment_iban?: (string | null) | undefined
                purchase_lines?:
                  | { account_id?: number | undefined; amount?: number | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id/attach': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id/original': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id/preview.jpg': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id/tag': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id/thumbnail.jpg': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/purchases/:id/updatestatus': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { status?: 'completed' | 'paid' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { status?: 'completed' | 'paid' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { status?: 'completed' | 'paid' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Quote[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: string | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: string | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: string | undefined
                      exempted?: boolean | undefined
                      reason?: string | undefined
                    }
                  | undefined
                tags?: { [x: string]: unknown }[] | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayment_request?:
                  | { amount?: number | undefined; percent?: number | undefined }
                  | undefined
                commercialvalidity_deadline?: (string | null) | undefined
                number_from_other_software?: string | undefined
              }
            }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: string | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: string | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: string | undefined
                      exempted?: boolean | undefined
                      reason?: string | undefined
                    }
                  | undefined
                tags?: { [x: string]: unknown }[] | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayment_request?:
                  | { amount?: number | undefined; percent?: number | undefined }
                  | undefined
                commercialvalidity_deadline?: (string | null) | undefined
                number_from_other_software?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/batch': {
      $delete:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Quote[] } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Quote[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Quote[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/download': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: { ids: number[]; template?: 'delivery' | 'command' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { ids: number[]; template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { ids: number[]; template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/fresh': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/invoice': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/nextnumber': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { written_at?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { written_at?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/apps/:appId/quotes/statistics': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: string | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: string | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: string | undefined
                      exempted?: boolean | undefined
                      reason?: string | undefined
                    }
                  | undefined
                tags?: { [x: string]: unknown }[] | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayment_request?:
                  | { amount?: number | undefined; percent?: number | undefined }
                  | undefined
                commercialvalidity_deadline?: (string | null) | undefined
              }
            }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: string | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: string | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: string | undefined
                      exempted?: boolean | undefined
                      reason?: string | undefined
                    }
                  | undefined
                tags?: { [x: string]: unknown }[] | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayment_request?:
                  | { amount?: number | undefined; percent?: number | undefined }
                  | undefined
                commercialvalidity_deadline?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                third_account?:
                  | ({
                      address?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                reference?: string | undefined
                discount?:
                  | {
                      amount?: number | undefined
                      name?: string | undefined
                      percent?: number | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: string | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: string | undefined
                      exempted?: boolean | undefined
                      reason?: string | undefined
                    }
                  | undefined
                tags?: { [x: string]: unknown }[] | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                downpayment_request?:
                  | { amount?: number | undefined; percent?: number | undefined }
                  | undefined
                commercialvalidity_deadline?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/attach': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/downpayment': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { percent: number } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { percent: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { percent: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/duplicate': {
      $post:
        | {
            input: { param: { appId: number; id: number } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/finalize': {
      $post:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/invoice': {
      $post:
        | {
            input: { param: { appId: number; id: number } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/pdf': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/preview.jpg': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/situation_invoice': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { progress: number } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { progress: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { progress: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/tag': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { tag?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/updatestatus': {
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                status?:
                  | 'waiting'
                  | 'goodforagreement'
                  | 'refused'
                  | 'transformed'
                  | 'deleted'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                status?:
                  | 'waiting'
                  | 'goodforagreement'
                  | 'refused'
                  | 'transformed'
                  | 'deleted'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                status?:
                  | 'waiting'
                  | 'goodforagreement'
                  | 'refused'
                  | 'transformed'
                  | 'deleted'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/quotes/:id/yousign/preview.jpg': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { template?: 'delivery' | 'command' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/reconcile': {
      $delete:
        | {
            input: { param: { appId: number } } & {
              query: { type: 'transaction' | 'sales' | 'purchase'; id: number }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { type: 'transaction' | 'sales' | 'purchase'; id: number }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { type: 'transaction' | 'sales' | 'purchase'; id: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                replace_all?: boolean | undefined
                type: 'transaction' | 'sales' | 'purchase'
                id: number
                movements: {
                  amount?: number | undefined
                  id?: number | undefined
                  type?:
                    | 'account'
                    | 'purchase'
                    | 'sales'
                    | 'bank_entry'
                    | 'cashdesk_entry'
                    | 'waiting_entry'
                    | undefined
                }
                paid_at?: string | undefined
                rule?:
                  | {
                      conditions?: string[][] | undefined
                      on_event?: string | undefined
                      parameter?: string | undefined
                      value?: string | undefined
                    }
                  | undefined
              }
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                replace_all?: boolean | undefined
                type: 'transaction' | 'sales' | 'purchase'
                id: number
                movements: {
                  amount?: number | undefined
                  id?: number | undefined
                  type?:
                    | 'account'
                    | 'purchase'
                    | 'sales'
                    | 'bank_entry'
                    | 'cashdesk_entry'
                    | 'waiting_entry'
                    | undefined
                }
                paid_at?: string | undefined
                rule?:
                  | {
                      conditions?: string[][] | undefined
                      on_event?: string | undefined
                      parameter?: string | undefined
                      value?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/reconcile/batch': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Reconciliation[] } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Reconciliation[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Reconciliation[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/recurringinvoices': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: RecurringInvoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: (SalesLine[] | null) | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                payment_period?: number | undefined
                next_invoice_at?: (string | null) | undefined
                end_at?: (string | null) | undefined
                frequency_count: number
                frequency_duration: 'day' | 'week' | 'month' | 'trimester' | 'semester' | 'year'
                discount?: number | undefined
                discount_mode?: 'percent' | undefined
                discount_start_at?: (string | null) | undefined
                discount_end_at?: (string | null) | undefined
                details?: (string | null) | undefined
                orders_plan?:
                  | ({ end_at?: string | undefined; model?: number | undefined }[] | null)
                  | undefined
              }
            }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: (SalesLine[] | null) | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                payment_period?: number | undefined
                next_invoice_at?: (string | null) | undefined
                end_at?: (string | null) | undefined
                frequency_count: number
                frequency_duration: 'day' | 'week' | 'month' | 'trimester' | 'semester' | 'year'
                discount?: number | undefined
                discount_mode?: 'percent' | undefined
                discount_start_at?: (string | null) | undefined
                discount_end_at?: (string | null) | undefined
                details?: (string | null) | undefined
                orders_plan?:
                  | ({ end_at?: string | undefined; model?: number | undefined }[] | null)
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/recurringinvoices/batch': {
      $delete:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: RecurringInvoice[] } }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: RecurringInvoice[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: RecurringInvoice[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/recurringinvoices/periods': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { date?: (string | null) | undefined } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { date?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/recurringinvoices/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: (SalesLine[] | null) | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                payment_period?: number | undefined
                next_invoice_at?: (string | null) | undefined
                end_at?: (string | null) | undefined
                frequency_count?: number | undefined
                frequency_duration?:
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'trimester'
                  | 'semester'
                  | 'year'
                  | undefined
                discount?: number | undefined
                discount_mode?: 'percent' | undefined
                discount_start_at?: (string | null) | undefined
                discount_end_at?: (string | null) | undefined
                details?: (string | null) | undefined
                orders_plan?:
                  | ({ end_at?: string | undefined; model?: number | undefined }[] | null)
                  | undefined
              }
            }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: (SalesLine[] | null) | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                payment_period?: number | undefined
                next_invoice_at?: (string | null) | undefined
                end_at?: (string | null) | undefined
                frequency_count?: number | undefined
                frequency_duration?:
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'trimester'
                  | 'semester'
                  | 'year'
                  | undefined
                discount?: number | undefined
                discount_mode?: 'percent' | undefined
                discount_start_at?: (string | null) | undefined
                discount_end_at?: (string | null) | undefined
                details?: (string | null) | undefined
                orders_plan?:
                  | ({ end_at?: string | undefined; model?: number | undefined }[] | null)
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_infos?:
                  | ({
                      address?: (string | null) | undefined
                      address2?: (string | null) | undefined
                      details?: (string | null) | undefined
                      id?: number | undefined
                      location?: (string | null) | undefined
                      name?: (string | null) | undefined
                      type?: 'organization' | 'person' | undefined
                    } | null)
                  | undefined
                title?: (string | null) | undefined
                content?: (SalesLine[] | null) | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
                currency?: string | undefined
                legal_notice?: (string | null) | undefined
                bank_details_id?: (number | null) | undefined
                vat_exemption?:
                  | {
                      article?: (string | null) | undefined
                      exempted?: boolean | undefined
                      reason?: (string | null) | undefined
                    }
                  | undefined
                tags?: ({ [x: string]: unknown }[] | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
                payment_period?: number | undefined
                next_invoice_at?: (string | null) | undefined
                end_at?: (string | null) | undefined
                frequency_count?: number | undefined
                frequency_duration?:
                  | 'day'
                  | 'week'
                  | 'month'
                  | 'trimester'
                  | 'semester'
                  | 'year'
                  | undefined
                discount?: number | undefined
                discount_mode?: 'percent' | undefined
                discount_start_at?: (string | null) | undefined
                discount_end_at?: (string | null) | undefined
                details?: (string | null) | undefined
                orders_plan?:
                  | ({ end_at?: string | undefined; model?: number | undefined }[] | null)
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/recurringinvoices/:id/plan': {
      $get:
        | {
            input: { param: { appId: number; id: number } } & { query: { until: string } }
            output: Invoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { until: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/relationships': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Relationship[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/relationships/:id': {
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                is_customer?: boolean | undefined
                is_supplier?: boolean | undefined
                is_prospect?: boolean | undefined
                importance_level?: number | undefined
                rating?: number | undefined
                balance_initial_amount?: number | undefined
                is_notifying?: boolean | undefined
                note?: string | undefined
                reference?: (string | null) | undefined
                tags?: (string | null) | undefined
                discount?: (string | null) | undefined
                details?: (string | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                is_customer?: boolean | undefined
                is_supplier?: boolean | undefined
                is_prospect?: boolean | undefined
                importance_level?: number | undefined
                rating?: number | undefined
                balance_initial_amount?: number | undefined
                is_notifying?: boolean | undefined
                note?: string | undefined
                reference?: (string | null) | undefined
                tags?: (string | null) | undefined
                discount?: (string | null) | undefined
                details?: (string | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                is_customer?: boolean | undefined
                is_supplier?: boolean | undefined
                is_prospect?: boolean | undefined
                importance_level?: number | undefined
                rating?: number | undefined
                balance_initial_amount?: number | undefined
                is_notifying?: boolean | undefined
                note?: string | undefined
                reference?: (string | null) | undefined
                tags?: (string | null) | undefined
                discount?: (string | null) | undefined
                details?: (string | null) | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/relationships/:id/attach': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/reset': {
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 405 }
    }
  } & {
    '/apps/:appId/rules/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Rule[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                conditions?: string[][] | undefined
                on_event?: string | undefined
                parameter?: string | undefined
                value?: string | undefined
                priority?: number | undefined
              }
            }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                conditions?: string[][] | undefined
                on_event?: string | undefined
                parameter?: string | undefined
                value?: string | undefined
                priority?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/rules/execute_on': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { model?: string | undefined } }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { model?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/rules/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                conditions?: string[][] | undefined
                on_event?: string | undefined
                parameter?: string | undefined
                value?: string | undefined
                priority?: number | undefined
              }
            }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                conditions?: string[][] | undefined
                on_event?: string | undefined
                parameter?: string | undefined
                value?: string | undefined
                priority?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                conditions?: string[][] | undefined
                on_event?: string | undefined
                parameter?: string | undefined
                value?: string | undefined
                priority?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/salesdocumentmodels': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: SalesDocumentModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
              }
            }
            output: SalesDocumentModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                name?: string | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/salesdocumentmodels/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: SalesDocumentModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
              }
            }
            output: SalesDocumentModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                name?: string | undefined
                title?: string | undefined
                content?: SalesLine[] | undefined
                columns?:
                  | {
                      amount?: string | undefined
                      designation?: string | undefined
                      discount?: string | undefined
                      due?: string | undefined
                      info_total_quantity?: string | undefined
                      quantity?: string | undefined
                      quantity_name?: string | undefined
                      subtotal?: string | undefined
                      vat_percent?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/sepamandates/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: SEPAMandate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                customer_organization_id?: number | undefined
                customer_person_id?: number | undefined
                old_mandate_id?: number | undefined
                mandate_id: string
                signed_at: string
                electronic_signature?: string | undefined
                customer_name?: string | undefined
                iban: string
                bic: string
                is_first?: boolean | undefined
              }
            }
            output: SEPAMandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                customer_organization_id?: number | undefined
                customer_person_id?: number | undefined
                old_mandate_id?: number | undefined
                mandate_id: string
                signed_at: string
                electronic_signature?: string | undefined
                customer_name?: string | undefined
                iban: string
                bic: string
                is_first?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/sepamandates/credittransfer': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                ids: number[]
                amounts?: number[] | undefined
                debtor_name?: string | undefined
                debtor_iban?: string | undefined
                debtor_bic?: string | undefined
                btchBookg?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                ids: number[]
                amounts?: number[] | undefined
                debtor_name?: string | undefined
                debtor_iban?: string | undefined
                debtor_bic?: string | undefined
                btchBookg?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                ids: number[]
                amounts?: number[] | undefined
                debtor_name?: string | undefined
                debtor_iban?: string | undefined
                debtor_bic?: string | undefined
                btchBookg?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/sepamandates/directdebit': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { invoices_ids: number[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { invoices_ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { invoices_ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                invoices_ids: number[]
                amounts?: number[] | undefined
                creditor_name?: string | undefined
                creditor_iban?: string | undefined
                creditor_bic?: string | undefined
                creditor_ics?: string | undefined
                date?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                invoices_ids: number[]
                amounts?: number[] | undefined
                creditor_name?: string | undefined
                creditor_iban?: string | undefined
                creditor_bic?: string | undefined
                creditor_ics?: string | undefined
                date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                invoices_ids: number[]
                amounts?: number[] | undefined
                creditor_name?: string | undefined
                creditor_iban?: string | undefined
                creditor_bic?: string | undefined
                creditor_ics?: string | undefined
                date?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/sepamandates/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: SEPAMandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                customer_organization_id?: number | undefined
                customer_person_id?: number | undefined
                old_mandate_id?: number | undefined
                mandate_id?: string | undefined
                signed_at?: string | undefined
                electronic_signature?: string | undefined
                customer_name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                is_first?: boolean | undefined
              }
            }
            output: SEPAMandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                customer_organization_id?: number | undefined
                customer_person_id?: number | undefined
                old_mandate_id?: number | undefined
                mandate_id?: string | undefined
                signed_at?: string | undefined
                electronic_signature?: string | undefined
                customer_name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                is_first?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                customer_organization_id?: number | undefined
                customer_person_id?: number | undefined
                old_mandate_id?: number | undefined
                mandate_id?: string | undefined
                signed_at?: string | undefined
                electronic_signature?: string | undefined
                customer_name?: string | undefined
                iban?: string | undefined
                bic?: string | undefined
                is_first?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/services/stripe/webhook': {
      $get:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/services/yousign/webhook': {
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/settings': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { key?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                settings?: { [x: string]: string } | undefined
                key?: string | undefined
                value?: string | undefined
              }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                settings?: { [x: string]: string } | undefined
                key?: string | undefined
                value?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/signature': {
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                documentId: number
                email: string
                firstname: string
                lastname: string
                phone: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                documentId: number
                email: string
                firstname: string
                lastname: string
                phone: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/statistics/charts/:type': {
      $get:
        | {
            input: { param: { appId: number; type: string } } & {
              query: {
                count?: number | undefined
                period?:
                  | 'hourly'
                  | 'daily'
                  | 'weekly'
                  | 'monthly'
                  | 'quarterly'
                  | 'yearly'
                  | undefined
                start_at?: string | undefined
                object?:
                  | 'invoice'
                  | 'quote'
                  | 'purchase'
                  | 'transaction'
                  | 'payment'
                  | 'relationship'
                  | undefined
                object_property?: string | undefined
                calcul?: 'sum' | 'avg' | 'count' | undefined
                methods?: string[][] | undefined
                object_date_property?: string | undefined
                group_by?: string[] | undefined
                group_by_object_name?: string | undefined
                exclude_keys?: number[] | undefined
                search?: string | undefined
                filters?: { [x: string]: unknown } | undefined
                show_details?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; type: string } } & {
              query: {
                count?: number | undefined
                period?:
                  | 'hourly'
                  | 'daily'
                  | 'weekly'
                  | 'monthly'
                  | 'quarterly'
                  | 'yearly'
                  | undefined
                start_at?: string | undefined
                object?:
                  | 'invoice'
                  | 'quote'
                  | 'purchase'
                  | 'transaction'
                  | 'payment'
                  | 'relationship'
                  | undefined
                object_property?: string | undefined
                calcul?: 'sum' | 'avg' | 'count' | undefined
                methods?: string[][] | undefined
                object_date_property?: string | undefined
                group_by?: string[] | undefined
                group_by_object_name?: string | undefined
                exclude_keys?: number[] | undefined
                search?: string | undefined
                filters?: { [x: string]: unknown } | undefined
                show_details?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; type: string } } & {
              query: {
                count?: number | undefined
                period?:
                  | 'hourly'
                  | 'daily'
                  | 'weekly'
                  | 'monthly'
                  | 'quarterly'
                  | 'yearly'
                  | undefined
                start_at?: string | undefined
                object?:
                  | 'invoice'
                  | 'quote'
                  | 'purchase'
                  | 'transaction'
                  | 'payment'
                  | 'relationship'
                  | undefined
                object_property?: string | undefined
                calcul?: 'sum' | 'avg' | 'count' | undefined
                methods?: string[][] | undefined
                object_date_property?: string | undefined
                group_by?: string[] | undefined
                group_by_object_name?: string | undefined
                exclude_keys?: number[] | undefined
                search?: string | undefined
                filters?: { [x: string]: unknown } | undefined
                show_details?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/statistics/timetable/purchases': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: { detailed?: boolean | undefined; groups?: number[][] | undefined }
            }
            output: {
              balance?: number | undefined
              count?: number | undefined
              data?: Purchase[] | undefined
              interval?: string[] | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { detailed?: boolean | undefined; groups?: number[][] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { detailed?: boolean | undefined; groups?: number[][] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/statistics/timetable/sales': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: { detailed?: boolean | undefined; groups?: number[][] | undefined }
            }
            output: {
              balance?: number | undefined
              count?: number | undefined
              data?: Invoice[] | undefined
              interval?: string[] | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { detailed?: boolean | undefined; groups?: number[][] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { detailed?: boolean | undefined; groups?: number[][] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/statistics/vat': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                detailed?: boolean | undefined
                start_at?: string | undefined
                period?: 'monthly' | 'quarterly' | 'half-yearly' | 'yearly' | undefined
                end_at?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                detailed?: boolean | undefined
                start_at?: string | undefined
                period?: 'monthly' | 'quarterly' | 'half-yearly' | 'yearly' | undefined
                end_at?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                detailed?: boolean | undefined
                start_at?: string | undefined
                period?: 'monthly' | 'quarterly' | 'half-yearly' | 'yearly' | undefined
                end_at?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/subscription/anchordate': {
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/subscription/checkout_add_source': {
      $get:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/subscription/coupon': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { code: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { code: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/subscription/extend_trial': {
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/subscription/extra/:stripe_plan': {
      $post:
        | {
            input: { param: { appId: number; stripe_plan: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; stripe_plan: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/subscription/pay_all': {
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/subscription/plan': {
      $delete:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { appId: number } }
            output: { extras?: string[] | undefined; plans?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/subscription/plans': {
      $get:
        | {
            input: { param: { appId: number } }
            output: { extras?: string[] | undefined; plans?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/subscription/plans/:stripe_plan': {
      $get:
        | {
            input: { param: { appId: number; stripe_plan: string } } & {
              query: { stripe_coupon?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; stripe_plan: string } } & {
              query: { stripe_coupon?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; stripe_plan: string } } & {
              query: {
                stripe_source?: (string | null) | undefined
                stripe_coupon?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; stripe_plan: string } } & {
              query: {
                stripe_source?: (string | null) | undefined
                stripe_coupon?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/subscription/plans/:stripe_plan/checkout': {
      $get:
        | {
            input: { param: { appId: number; stripe_plan: string } } & {
              query: { stripe_coupon?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; stripe_plan: string } } & {
              query: { stripe_coupon?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/subscription/source': {
      $delete:
        | {
            input: { param: { appId: number } } & { query: { stripe_source: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { stripe_source: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & { query: { stripe_source: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { stripe_source: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/subscription/source/default': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { stripe_source: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { stripe_source: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/tags': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: { object?: 'invoice' | 'quote' | 'purchase' | 'product' | undefined }
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { object?: 'invoice' | 'quote' | 'purchase' | 'product' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { object?: 'invoice' | 'quote' | 'purchase' | 'product' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/templates': {
      $get: { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/apps/:appId/templates/batch': {
      $post: {
        input: { param: { appId: number } } & { query: { data: { [x: string]: unknown }[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/:appId/templates/default': {
      $get: { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/apps/:appId/templates/:id': {
      $get: {
        input: { param: { appId: number; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { appId: number; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/:appId/transactions/': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                filters?:
                  | {
                      comparator?:
                        | '='
                        | '<'
                        | '>'
                        | '<='
                        | '>='
                        | '!='
                        | 'LIKE'
                        | 'IN'
                        | 'REGEX'
                        | undefined
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                order?:
                  | { direction?: 'asc' | 'desc' | undefined; name?: string | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_organization_id?: number | undefined
                contact_person_id?: number | undefined
                account_id?: number | undefined
                cashflow_source_id: number
                contact_name?: string | undefined
                amount: number
                method?:
                  | 'check'
                  | 'transfer'
                  | 'cash'
                  | 'creditcard'
                  | 'automatic_debit'
                  | 'creditnote'
                  | undefined
                received_at: string
                label?: string | undefined
                details?: string | undefined
              }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                contact_organization_id?: number | undefined
                contact_person_id?: number | undefined
                account_id?: number | undefined
                cashflow_source_id: number
                contact_name?: string | undefined
                amount: number
                method?:
                  | 'check'
                  | 'transfer'
                  | 'cash'
                  | 'creditcard'
                  | 'automatic_debit'
                  | 'creditnote'
                  | undefined
                received_at: string
                label?: string | undefined
                details?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/transactions/batch': {
      $post:
        | {
            input: { param: { appId: number } } & { query: { data: Transaction[] } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { data: Transaction[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { data: Transaction[] } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/transactions/:id': {
      $delete:
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { appId: number; id: number } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_organization_id?: number | undefined
                contact_person_id?: number | undefined
                account_id?: number | undefined
                cashflow_source_id?: number | undefined
                contact_name?: string | undefined
                amount?: number | undefined
                method?:
                  | 'check'
                  | 'transfer'
                  | 'cash'
                  | 'creditcard'
                  | 'automatic_debit'
                  | 'creditnote'
                  | undefined
                received_at?: string | undefined
                label?: string | undefined
                details?: string | undefined
              }
            }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_organization_id?: number | undefined
                contact_person_id?: number | undefined
                account_id?: number | undefined
                cashflow_source_id?: number | undefined
                contact_name?: string | undefined
                amount?: number | undefined
                method?:
                  | 'check'
                  | 'transfer'
                  | 'cash'
                  | 'creditcard'
                  | 'automatic_debit'
                  | 'creditnote'
                  | undefined
                received_at?: string | undefined
                label?: string | undefined
                details?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: {
                contact_organization_id?: number | undefined
                contact_person_id?: number | undefined
                account_id?: number | undefined
                cashflow_source_id?: number | undefined
                contact_name?: string | undefined
                amount?: number | undefined
                method?:
                  | 'check'
                  | 'transfer'
                  | 'cash'
                  | 'creditcard'
                  | 'automatic_debit'
                  | 'creditnote'
                  | undefined
                received_at?: string | undefined
                label?: string | undefined
                details?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/transactions/:id/attach': {
      $delete:
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & {
              query: { file_id?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number; id: number } } & { query: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/urssaf/auth': {
      $post:
        | {
            input: { param: { appId: number } } & {
              query: { client_id: string; client_secret: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { client_id: string; client_secret: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { client_id: string; client_secret: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { appId: number } } & {
              query: { client_id: string; client_secret: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { appId: number } } & {
              query: { client_id: string; client_secret: string }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/apps/:appId/urssaf/payment': {
      $get:
        | {
            input: { param: { appId: number } } & { query: { invoices_ids: number[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { query: { invoices_ids: number[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & { query: { invoices_ids: number[] } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | { input: { param: { appId: number } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/apps/:appId/urssaf/preview': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: { type: 'invoice' | 'quote' | 'contact'; ids: number[] }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: { type: 'invoice' | 'quote' | 'contact'; ids: number[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { appId: number } } & {
              query: { type: 'invoice' | 'quote' | 'contact'; ids: number[] }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/apps/:appId/urssaf/register_customer': {
      $post:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/changepassword': {
      $post:
        | {
            input: { query: { forgotten_password_token: string; password: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { forgotten_password_token: string; password: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/login': {
      $post:
        | {
            input: { query: { email: string; password: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { email: string; password: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { email: string; password: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { email: string; password: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & { '/logout': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/me': {
      $get: { input: {}; output: User; outputFormat: 'json'; status: 200 }
      $post: {
        input: {
          query: {
            civility?: string | undefined
            firstname?: string | undefined
            lastname?: string | undefined
            password?: string | undefined
            email?: string | undefined
            image?: File | undefined
            metadata?: ({ [x: string]: unknown }[] | null) | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ping': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
    }
  } & {
    '/refresh': { $get: { input: {}; output: JsonWebToken; outputFormat: 'json'; status: 200 } }
  } & {
    '/register': {
      $post:
        | {
            input: {
              query: {
                email: string
                password: string
                cgu: boolean
                firstname?: string | undefined
                lastname?: string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                password: string
                cgu: boolean
                firstname?: string | undefined
                lastname?: string | undefined
                metadata?: ({ [x: string]: unknown }[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/sendpassword': {
      $post:
        | { input: { query: { email: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { email: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/services/collector': {
      $post: {
        input: { query: { app_identifiant: string; collector_key: string; invoice: File } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/services/vies/:siren': {
      $get: { input: { param: { siren: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
