type AccountV2 = {
  created?: string | undefined
  iban?: string | undefined
  id?: string | undefined
  institution_id?: string | undefined
  last_accessed?: (string | null) | undefined
  owner_name?: string | undefined
  status?: {} | undefined
}
type EndUserAgreement = {
  accepted?: (string | null) | undefined
  access_scope?: { [x: string]: unknown }[][] | undefined
  access_valid_for_days?: number | undefined
  created?: string | undefined
  id?: string | undefined
  institution_id: string
  max_historical_days?: number | undefined
}
type PaginatedEndUserAgreementList = {
  count?: number | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: EndUserAgreement[] | undefined
}
type EndUserAgreementRequest = {
  access_scope?: { [x: string]: unknown }[][] | undefined
  access_valid_for_days?: number | undefined
  institution_id: string
  max_historical_days?: number | undefined
}
type EnduserAcceptanceDetailsRequest = { ip_address: string; user_agent: string }
type Integration = {
  bic?: string | undefined
  countries: string[]
  id: string
  logo: string
  name: string
  transaction_total_days?: string | undefined
}
type DebtorAccountWrite = {
  account?: string | undefined
  address_country?: string | undefined
  address_street?: string | undefined
  currency?: string | undefined
  name: string
  post_code?: string | undefined
  type?: {} | undefined
  type_number?: string | undefined
}
type PaymentRead = {
  creditor_account: string
  custom_payment_id?: string | undefined
  debtor_account: DebtorAccountWrite
  description?: string | undefined
  instructed_amount: { amount: string; currency: string }
  payment_id?: string | undefined
  payment_product?: {} | undefined
  payment_status?: {} | undefined
  payment_type?: {} | undefined
  redirect: string | null
}
type PaginatedPaymentReadList = {
  count?: number | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: PaymentRead[] | undefined
}
type PeriodicPaymentRequest = {
  day_of_execution?: string | undefined
  end_date?: string | undefined
  execution_rule?: {} | undefined
  frequency?: {} | undefined
  start_date: string
}
type PaymentWriteRequest = {
  creditor_account: string
  custom_payment_id?: string | undefined
  debtor_account?:
    | {
        account?: string | undefined
        address_country?: string | undefined
        address_street?: string | undefined
        currency?: string | undefined
        name: string
        post_code?: string | undefined
        type?: {} | undefined
        type_number?: string | undefined
      }
    | undefined
  description?: string | undefined
  institution_id?: string | undefined
  instructed_amount: { amount: string; currency: string }
  payment_product?: {} | undefined
  periodic_payment?: PeriodicPaymentRequest | undefined
  redirect: string | null
  requested_execution_date?: string | undefined
}
type PeriodicPayment = {
  day_of_execution?: string | undefined
  end_date?: string | undefined
  execution_rule?: {} | undefined
  frequency?: {} | undefined
  start_date: string
}
type PaymentWrite = {
  creditor_account: string
  custom_payment_id?: string | undefined
  description?: string | undefined
  instructed_amount: { amount: string; currency: string }
  link?: string | undefined
  payment_id?: string | undefined
  payment_product?: {} | undefined
  payment_status?: {} | undefined
  payment_type?: {} | undefined
  periodic_payment?: PeriodicPayment | undefined
  redirect: string | null
  requested_execution_date?: string | undefined
}
type CreditorAccount = {
  account: string
  address_country?: string | undefined
  currency: string
  id?: string | undefined
  name: string
  type?: {} | undefined
}
type PaginatedCreditorAccountList = {
  count?: number | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: CreditorAccount[] | undefined
}
type AddressCountryEnum =
  | 'AT'
  | 'BE'
  | 'BG'
  | 'HR'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'EE'
  | 'FI'
  | 'FR'
  | 'DE'
  | 'GR'
  | 'HU'
  | 'IS'
  | 'IE'
  | 'IT'
  | 'LV'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MT'
  | 'NL'
  | 'NO'
  | 'PL'
  | 'PT'
  | 'RO'
  | 'SK'
  | 'SI'
  | 'ES'
  | 'SE'
  | 'GB'
type CreditorAccountWriteRequest = {
  account: string
  address_country?: AddressCountryEnum | undefined
  address_street?: string | undefined
  agent?: string | undefined
  agent_name?: string | undefined
  currency: string
  institution_id?: string | undefined
  name: string
  post_code?: string | undefined
  type?: {} | undefined
}
type CreditorAccountWrite = {
  account: string
  address_country?: AddressCountryEnum | undefined
  address_street?: string | undefined
  agent?: string | undefined
  agent_name?: string | undefined
  currency: string
  id?: string | undefined
  institution_id?: string | undefined
  name: string
  post_code?: string | undefined
  type?: {} | undefined
}
type RequisitionV2 = {
  account_selection?: boolean | undefined
  accounts?: string[] | undefined
  agreement?: string | undefined
  created?: (string | null) | undefined
  id?: string | undefined
  institution_id: string
  link?: string | undefined
  redirect: string | null
  redirect_immediate?: boolean | undefined
  reference?: string | undefined
  ssn?: string | undefined
  status?: {} | undefined
  user_language?: string | undefined
}
type PaginatedRequisitionV2List = {
  count?: number | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: RequisitionV2[] | undefined
}
type RequisitionV2Request = {
  account_selection?: boolean | undefined
  agreement?: string | undefined
  institution_id: string
  redirect: string | null
  redirect_immediate?: boolean | undefined
  reference?: string | undefined
  ssn?: string | undefined
  user_language?: string | undefined
}
type SpectacularRequisitionV2 = {
  account_selection?: boolean | undefined
  accounts?: { [x: string]: unknown }[] | undefined
  agreement?: string | undefined
  created?: (string | null) | undefined
  id?: string | undefined
  institution_id: string
  link?: string | undefined
  redirect: string | null
  redirect_immediate?: boolean | undefined
  reference?: string | undefined
  ssn?: string | undefined
  status?: {} | undefined
  user_language?: string | undefined
}
type JWTObtainPairRequest = { secret_id: string; secret_key: string }
type SpectacularJWTObtain = {
  access?: string | undefined
  access_expires?: number | undefined
  refresh?: string | undefined
  refresh_expires?: number | undefined
}
type JWTRefreshRequest = { refresh: string }
type SpectacularJWTRefresh = { access?: string | undefined; access_expires?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/accounts/premium/:id/transactions/': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                country?: string | undefined
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/accounts/:id/': {
      $get:
        | { input: { param: { id: string } }; output: AccountV2; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/accounts/:id/balances/': {
      $get:
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/accounts/:id/details/': {
      $get:
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/accounts/:id/transactions/': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: { date_from?: string | undefined; date_to?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/agreements/enduser/': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PaginatedEndUserAgreementList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: EndUserAgreementRequest } & { form: EndUserAgreementRequest }
            output: EndUserAgreement
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: EndUserAgreementRequest } & { form: EndUserAgreementRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EndUserAgreementRequest } & { form: EndUserAgreementRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EndUserAgreementRequest } & { form: EndUserAgreementRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/agreements/enduser/:id/': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: EndUserAgreement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/agreements/enduser/:id/accept/': {
      $put:
        | {
            input: { param: { id: string } } & { json: EnduserAcceptanceDetailsRequest } & {
              form: EnduserAcceptanceDetailsRequest
            }
            output: EndUserAgreement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: EnduserAcceptanceDetailsRequest } & {
              form: EnduserAcceptanceDetailsRequest
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: EnduserAcceptanceDetailsRequest } & {
              form: EnduserAcceptanceDetailsRequest
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: EnduserAcceptanceDetailsRequest } & {
              form: EnduserAcceptanceDetailsRequest
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: EnduserAcceptanceDetailsRequest } & {
              form: EnduserAcceptanceDetailsRequest
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: EnduserAcceptanceDetailsRequest } & {
              form: EnduserAcceptanceDetailsRequest
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/v2/institutions/': {
      $get:
        | {
            input: {
              query: { country?: string | undefined; payments_enabled?: string | undefined }
            }
            output: Integration[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { country?: string | undefined; payments_enabled?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { country?: string | undefined; payments_enabled?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { country?: string | undefined; payments_enabled?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { country?: string | undefined; payments_enabled?: string | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/institutions/:id/': {
      $get:
        | {
            input: { param: { id: string } }
            output: Integration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/payments/': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PaginatedPaymentReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: PaymentWriteRequest } & { form: PaymentWriteRequest }
            output: PaymentWrite
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PaymentWriteRequest } & { form: PaymentWriteRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentWriteRequest } & { form: PaymentWriteRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentWriteRequest } & { form: PaymentWriteRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/payments/account/': {
      $get:
        | { input: {}; output: CreditorAccount[]; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/payments/creditors/': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            address_country?: string | undefined
            agent?: string | undefined
            currency?: string | undefined
            limit?: number | undefined
            name?: string | undefined
            offset?: number | undefined
            type?: string | undefined
          }
        }
        output: PaginatedCreditorAccountList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreditorAccountWriteRequest } & { form: CreditorAccountWriteRequest }
        output: CreditorAccountWrite
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/payments/creditors/:id/': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: CreditorAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/payments/fields/:institution_id/': {
      $get:
        | {
            input: { param: { institution_id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { institution_id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { institution_id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { institution_id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/payments/:id/': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/requisitions/': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PaginatedRequisitionV2List
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: RequisitionV2Request } & { form: RequisitionV2Request }
            output: SpectacularRequisitionV2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RequisitionV2Request } & { form: RequisitionV2Request }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RequisitionV2Request } & { form: RequisitionV2Request }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RequisitionV2Request } & { form: RequisitionV2Request }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RequisitionV2Request } & { form: RequisitionV2Request }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/requisitions/:id/': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: RequisitionV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/token/new/': {
      $post:
        | {
            input: { json: JWTObtainPairRequest } & { form: JWTObtainPairRequest }
            output: SpectacularJWTObtain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JWTObtainPairRequest } & { form: JWTObtainPairRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: JWTObtainPairRequest } & { form: JWTObtainPairRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/token/refresh/': {
      $post:
        | {
            input: { json: JWTRefreshRequest } & { form: JWTRefreshRequest }
            output: SpectacularJWTRefresh
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JWTRefreshRequest } & { form: JWTRefreshRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: JWTRefreshRequest } & { form: JWTRefreshRequest }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
