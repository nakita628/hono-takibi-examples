declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/estimate': {
      $get: {
        input: {
          query: {
            amount?: string | undefined
            currency_from?: string | undefined
            currency_to?: string | undefined
          }
        } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          amount_from?: number | undefined
          currency_from?: string | undefined
          currency_to?: string | undefined
          estimated_amount?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/min-amount': {
      $get: {
        input: {
          query: { currency_from?: string | undefined; currency_to?: string | undefined }
        } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          currency_from?: string | undefined
          currency_to?: string | undefined
          fiat_equivalent?: number | undefined
          min_amount?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payment/': {
      $get: {
        input: {
          query: {
            limit?: string | undefined
            page?: string | undefined
            sortBy?: string | undefined
            orderBy?: string | undefined
            dateFrom?: string | undefined
            dateTo?: string | undefined
          }
        } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          data?:
            | {
                actually_paid?: number | undefined
                order_description?: string | undefined
                order_id?: string | undefined
                outcome_amount?: number | undefined
                outcome_currency?: string | undefined
                pay_address?: string | undefined
                pay_amount?: number | undefined
                pay_currency?: string | undefined
                payment_id?: number | undefined
                payment_status?: string | undefined
                price_amount?: number | undefined
                price_currency?: string | undefined
                purchase_id?: string | undefined
              }[]
            | undefined
          limit?: number | undefined
          page?: number | undefined
          pagesCount?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payment/:id/update-merchant-estimate': {
      $post: {
        input: { param: { id: string } } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          expiration_estimate_date?: string | undefined
          id?: string | undefined
          pay_amount?: number | undefined
          token_id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payment/:payment_id': {
      $get: {
        input: { param: { payment_id: string } } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          actually_paid?: number | undefined
          created_at?: string | undefined
          order_description?: string | undefined
          order_id?: string | undefined
          outcome_amount?: number | undefined
          outcome_currency?: string | undefined
          pay_address?: string | undefined
          pay_amount?: number | undefined
          pay_currency?: string | undefined
          payment_id?: number | undefined
          payment_status?: string | undefined
          price_amount?: number | undefined
          price_currency?: string | undefined
          purchase_id?: string | undefined
          updated_at?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payout/:withdrawals-id/verify': {
      $post: {
        input: { param: { 'withdrawals-id': string } } & {
          header: { 'x-api-key'?: string | undefined }
        } & { json: { verification_code?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/sub-partner': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            offset?: string | undefined
            limit?: string | undefined
            order?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/sub-partner/balance/:id': {
      $get: {
        input: { param: { id: string } } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          result?:
            | {
                balances?:
                  | {
                      usddtrc20?:
                        | { amount?: number | undefined; pendingAmount?: number | undefined }
                        | undefined
                      usdtbsc?:
                        | { amount?: number | undefined; pendingAmount?: number | undefined }
                        | undefined
                    }
                  | undefined
                subPartnerId?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sub-partner/transfer/:id': {
      $get: {
        input: { param: { id: string } }
        output: {
          result?:
            | {
                amount?: string | undefined
                created_at?: string | undefined
                currency?: string | undefined
                from_sub_id?: string | undefined
                id?: string | undefined
                status?: string | undefined
                to_sub_id?: string | undefined
                updated_at?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sub-partner/transfers': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            status?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
            order?: string | undefined
          }
        }
        output: {
          count?: number | undefined
          result?:
            | {
                amount?: string | undefined
                created_at?: string | undefined
                currency?: string | undefined
                from_sub_id?: string | undefined
                id?: string | undefined
                status?: string | undefined
                to_sub_id?: string | undefined
                updated_at?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions': {
      $get: {
        input: {
          query: {
            status?: string | undefined
            subscription_plan_id?: string | undefined
            is_active?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        } & { header: { 'x-api-key'?: string | undefined } }
        output: {
          count?: number | undefined
          result?:
            | {
                created_at?: string | undefined
                expire_date?: string | undefined
                id?: string | undefined
                is_active?: boolean | undefined
                status?: string | undefined
                subscriber?:
                  | { email?: string | undefined; sub_partner_id?: string | undefined }
                  | undefined
                subscription_plan_id?: string | undefined
                updated_at?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/plans': {
      $get: {
        input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
          header: { 'x-api-key'?: string | undefined }
        }
        output: {
          count?: number | undefined
          result?:
            | {
                amount?: number | undefined
                cancel_url?: ({ [x: string]: unknown } | null) | undefined
                created_at?: string | undefined
                currency?: string | undefined
                id?: string | undefined
                interval_day?: string | undefined
                ipn_callback_url?: ({ [x: string]: unknown } | null) | undefined
                partially_paid_url?: ({ [x: string]: unknown } | null) | undefined
                success_url?: ({ [x: string]: unknown } | null) | undefined
                title?: string | undefined
                updated_at?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/plans/:plan-id': {
      $get:
        | {
            input: { param: { 'plan-id': string } } & {
              header: { 'x-api-key'?: string | undefined }
            }
            output: {
              result?:
                | {
                    amount?: number | undefined
                    cancel_url?: ({ [x: string]: unknown } | null) | undefined
                    created_at?: string | undefined
                    currency?: string | undefined
                    id?: string | undefined
                    interval_day?: string | undefined
                    ipn_callback_url?: ({ [x: string]: unknown } | null) | undefined
                    partially_paid_url?: ({ [x: string]: unknown } | null) | undefined
                    success_url?: ({ [x: string]: unknown } | null) | undefined
                    title?: string | undefined
                    updated_at?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'plan-id': string } } & {
              header: { 'x-api-key'?: string | undefined }
            }
            output: {
              code?: string | undefined
              message?: string | undefined
              status?: boolean | undefined
              statusCode?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch: {
        input: { param: { 'plan-id': string } } & {
          json: {
            amount?: number | undefined
            currency?: string | undefined
            interval_day?: number | undefined
            title?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:sub_id': {
      $delete:
        | {
            input: { param: { sub_id: string } }
            output: { result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sub_id: string } }
            output: {
              code?: string | undefined
              message?: string | undefined
              status?: boolean | undefined
              statusCode?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { sub_id: string } } & { header: { 'x-api-key'?: string | undefined } }
            output: {
              result?:
                | {
                    created_at?: string | undefined
                    expire_date?: string | undefined
                    id?: string | undefined
                    is_active?: boolean | undefined
                    status?: string | undefined
                    subscriber?: { sub_partner_id?: string | undefined } | undefined
                    subscription_plan_id?: string | undefined
                    updated_at?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sub_id: string } } & { header: { 'x-api-key'?: string | undefined } }
            output: {
              code?: string | undefined
              message?: string | undefined
              status?: boolean | undefined
              statusCode?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
